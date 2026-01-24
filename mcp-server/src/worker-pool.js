/**
 * MojoGUI MCP Server - Worker Pool
 * 
 * Manages worker threads for non-blocking CDP operations.
 * Each MCP call runs in an isolated worker to prevent crash detection issues.
 */
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { MOJOGUI_URL, CDP_PORT } from './cdp.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Worker configuration
const WORKER_TIMEOUT = 30000; // 30 second timeout for operations
const CRASH_TIMEOUT = 5000;   // 5 second timeout when crash suspected

/**
 * WorkerPool manages a pool of CDP workers
 */
export class WorkerPool {
    constructor(options = {}) {
        this.port = options.port || CDP_PORT;
        this.targetUrl = options.targetUrl || MOJOGUI_URL;
        this.worker = null;
        this.messageId = 0;
        this.pendingMessages = new Map();
        this.ready = false;
    }

    /**
     * Initialize the worker
     */
    async init() {
        if (this.worker) {
            return;
        }

        return new Promise((resolve, reject) => {
            this.worker = new Worker(join(__dirname, 'cdp-worker.js'), {
                workerData: {
                    port: this.port,
                    targetUrl: this.targetUrl
                }
            });

            // Handle worker ready
            const onReady = (msg) => {
                if (msg.type === 'ready') {
                    this.ready = true;
                    resolve();
                }
            };

            this.worker.once('message', onReady);

            // Handle all messages
            this.worker.on('message', (msg) => {
                if (msg.id !== undefined && this.pendingMessages.has(msg.id)) {
                    const { resolve, reject, timeout } = this.pendingMessages.get(msg.id);
                    clearTimeout(timeout);
                    this.pendingMessages.delete(msg.id);

                    if (msg.success) {
                        resolve(msg.result);
                    } else {
                        const error = new Error(msg.error);
                        error.crashed = msg.crashed;
                        error.crashInfo = msg.crashInfo;
                        reject(error);
                    }
                }
            });

            this.worker.on('error', (error) => {
                console.error('[WorkerPool] Worker error:', error);
                this.ready = false;
                // Reject all pending messages
                for (const [id, { reject, timeout }] of this.pendingMessages) {
                    clearTimeout(timeout);
                    reject(new Error('Worker error: ' + error.message));
                }
                this.pendingMessages.clear();
            });

            this.worker.on('exit', (code) => {
                console.error('[WorkerPool] Worker exited with code:', code);
                this.ready = false;
                this.worker = null;
            });

            // Timeout for worker initialization
            setTimeout(() => {
                if (!this.ready) {
                    reject(new Error('Worker initialization timeout'));
                }
            }, 10000);
        });
    }

    /**
     * Send a command to the worker and wait for response
     */
    async send(type, data = {}, timeout = WORKER_TIMEOUT) {
        if (!this.ready) {
            await this.init();
        }

        // Capture worker in local variable to prevent async nulling from 'exit' event
        const worker = this.worker;
        if (!worker) {
            throw new Error('Worker not available (exited or failed to initialize)');
        }

        const id = ++this.messageId;

        return new Promise((resolve, reject) => {
            const timeoutHandle = setTimeout(() => {
                this.pendingMessages.delete(id);
                reject(new Error(`Worker command timed out: ${type}`));
            }, timeout);

            this.pendingMessages.set(id, { resolve, reject, timeout: timeoutHandle });

            try {
                worker.postMessage({ id, type, ...data });
            } catch (e) {
                this.pendingMessages.delete(id);
                clearTimeout(timeoutHandle);
                reject(new Error(`Failed to send message to worker: ${e.message}`));
            }
        });
    }

    /**
     * Reload the MojoGUI page
     */
    async reload() {
        return this.send('reload');
    }

    /**
     * Evaluate JavaScript in MojoGUI page
     */
    async evaluate(code, options = {}) {
        return await this.send('evaluate', { code, options });
    }

    /**
     * Get captured console logs
     */
    async getLogs(clear = false) {
        return await this.send('get_logs', { options: { clear } });
    }

    /**
     * Take a screenshot of the MojoGUI page
     * @returns {Promise<string>} Base64 encoded PNG data
     */
    async takeScreenshot() {
        return await this.send('take_screenshot');
    }

    /**
     * Get the PID of the browser process
     * @returns {Promise<number>} Browser PID
     */
    async getBrowserPid() {
        return await this.send('get_browser_pid');
    }

    /**
     * Clear captured console logs
     */
    async clearLogs() {
        return await this.send('clear_logs');
    }

    /**
     * Reset the worker (reconnect after crash)
     */
    async reset() {
        try {
            await this.send('reset', {}, CRASH_TIMEOUT);
        } catch (e) {
            // If reset fails, terminate and recreate worker
            if (this.worker) {
                this.worker.terminate();
                this.worker = null;
            }
            this.ready = false;
            await this.init();
        }
    }

    /**
     * Terminate the worker pool
     */
    terminate() {
        if (this.worker) {
            this.worker.terminate();
            this.worker = null;
        }
        this.ready = false;
        this.pendingMessages.clear();
    }
}

// Singleton instance
let pool = null;

/**
 * Get or create the worker pool
 */
export async function getWorkerPool(options = {}) {
    if (!pool) {
        pool = new WorkerPool(options);
        await pool.init();
    }
    return pool;
}

/**
 * Reset the worker pool (after crash)
 */
export async function resetWorkerPool() {
    if (pool) {
        await pool.reset();
    }
}

/**
 * Terminate the worker pool
 */
export function terminateWorkerPool() {
    if (pool) {
        pool.terminate();
        pool = null;
    }
}

export default { WorkerPool, getWorkerPool, resetWorkerPool, terminateWorkerPool };
