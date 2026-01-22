/**
 * MojoGUI MCP Server - CDP Worker
 * 
 * Runs CDP operations in a separate worker thread to prevent
 * blocking the main thread when renderer crashes occur.
 * 
 * This allows crash events to be processed while awaiting CDP responses.
 */
import { parentPort, workerData } from 'worker_threads';
import { CDPClient } from './cdp.js';

const { port, targetUrl } = workerData;

// Create CDP client in this worker
const client = new CDPClient({ port, targetUrl });
let connected = false;

// Handle messages from main thread
parentPort.on('message', async (msg) => {
    const { id, type, code, options } = msg;

    try {
        switch (type) {
            case 'connect':
                if (!connected) {
                    await client.connect();
                    connected = true;
                }
                parentPort.postMessage({ id, success: true });
                break;

            case 'evaluate':
                if (!connected) {
                    await client.connect();
                    connected = true;
                }

                // Check if MojoGUI is ready
                const ready = await client.isMojoGUIReady();
                if (!ready) {
                    await client.waitForMojoGUI(15000);
                }

                const result = await client.evaluate(code, options);

                // Brief delay to allow crash events to propagate through CDP
                // Mojo calls are async - renderer may crash after JS returns
                await new Promise(resolve => setTimeout(resolve, 150));

                // Check if crash was detected during/after execution
                if (client.crashed) {
                    const crashInfo = client.lastCrashInfo;

                    // Auto-reconnect after crash - reload page for next call
                    try {
                        console.error('[Worker] Auto-reconnecting after crash...');
                        client.disconnect();
                        connected = false;
                        await client.connect();
                        connected = true;
                        await client.waitForMojoGUI(10000);
                        console.error('[Worker] Reconnected successfully');
                    } catch (reconnectError) {
                        console.error('[Worker] Reconnect failed:', reconnectError.message);
                        connected = false;
                    }

                    parentPort.postMessage({
                        id,
                        success: false,
                        error: 'Renderer crashed during method execution',
                        crashed: true,
                        crashInfo
                    });
                    break;
                }

                parentPort.postMessage({ id, success: true, result });
                break;

            case 'disconnect':
                client.disconnect();
                connected = false;
                parentPort.postMessage({ id, success: true });
                break;

            case 'reset':
                client.disconnect();
                connected = false;
                await client.connect();
                connected = true;
                await client.waitForMojoGUI(10000);
                parentPort.postMessage({ id, success: true });
                break;

            case 'reload':
                if (!connected) {
                    await client.connect();
                    connected = true;
                }
                await client.reload();
                await client.waitForMojoGUI(10000);
                parentPort.postMessage({ id, success: true });
                break;

            default:
                parentPort.postMessage({ id, success: false, error: `Unknown command: ${type}` });
        }
    } catch (error) {
        const isCrash = error.message?.includes('Target closed') ||
            error.message?.includes('Connection closed') ||
            error.message?.includes('crashed') ||
            client.crashed;

        parentPort.postMessage({
            id,
            success: false,
            error: error.message,
            crashed: isCrash,
            crashInfo: client.lastCrashInfo
        });

        // Auto-reconnect after crash
        if (isCrash) {
            connected = false;
        }
    }
});

// Notify parent that worker is ready
parentPort.postMessage({ type: 'ready' });
