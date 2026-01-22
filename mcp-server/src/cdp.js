/**
 * MojoGUI MCP Server - CDP Client
 * 
 * Chrome DevTools Protocol client for communicating with MojoGUI.
 * Connects to Chrome's remote debugging port and executes JavaScript
 * in the MojoGUI page context.
 * 
 * Features:
 * - Auto-navigates to MojoGUI if not already open
 * - Auto-recovers after renderer crashes
 * - Detects Target.targetCrashed events
 * - Maps exit codes to Chromium result code names
 */
import { formatCrashError, getResultCodeInfo } from './result_codes.js';

export const MOJOGUI_URL = 'https://ndevtk.github.io/MojoGUI';
const CDP_PORT = 9222;
/**
 * CDP Client class for managing Chrome DevTools Protocol connections
 */
export class CDPClient {
    constructor(options = {}) {
        this.port = options.port || CDP_PORT;
        this.targetUrl = options.targetUrl || MOJOGUI_URL;
        this.wsConnection = null;
        this.messageId = 0;
        this.pendingMessages = new Map();
        this.sessionId = null;
        this.targetId = null;
        this.crashed = false;
        this.lastCrashInfo = null;
        this.crashListeners = [];
    }

    /**
     * Register a crash event listener
     */
    onCrash(callback) {
        this.crashListeners.push(callback);
    }
    /**
     * Discover available Chrome pages/targets
     */
    async discoverTargets() {
        const response = await fetch(`http://localhost:${this.port}/json`);
        if (!response.ok) {
            throw new Error(`Failed to connect to Chrome DevTools on port ${this.port}. ` +
                `Ensure Chrome is running with --remote-debugging-port=${this.port}`);
        }
        return await response.json();
    }
    /**
     * Find any available page target (for navigation)
     */
    async findAnyPage() {
        const targets = await this.discoverTargets();
        // Find any page target
        return targets.find(t => t.type === 'page');
    }
    /**
     * Find the MojoGUI page among available targets
     */
    async findMojoGUIPage() {
        const targets = await this.discoverTargets();
        // Look for exact URL match first
        let target = targets.find(t => this._isMojoGUITarget(t));
        return target;
    }
    /**
     * Check if a target is a MojoGUI page
     */
    _isMojoGUITarget(target) {
        if (!target || !target.url) return false;
        const url = target.url;
        return (
            url === this.targetUrl ||
            url.startsWith(this.targetUrl) ||
            url.includes('MojoGUI') ||
            url.includes('localhost:8000') ||
            url.includes('localhost:8080') ||
            url.includes('127.0.0.1:8000') ||
            url.includes('127.0.0.1:8080')
        );
    }
    /**
     * Navigate a page to MojoGUI URL
     */
    async navigateToMojoGUI(target) {
        const wsUrl = target.webSocketDebuggerUrl;
        if (!wsUrl) {
            throw new Error('WebSocket URL not available for target.');
        }
        // Connect to the target
        const { default: WebSocket } = await import('ws');
        return new Promise((resolve, reject) => {
            const ws = new WebSocket(wsUrl);
            let messageId = 0;
            ws.on('open', () => {
                // Navigate to MojoGUI
                ws.send(JSON.stringify({
                    id: ++messageId,
                    method: 'Page.navigate',
                    params: { url: this.targetUrl }
                }));
            });
            ws.on('message', (data) => {
                const msg = JSON.parse(data.toString());
                if (msg.id === 1) {
                    // Navigation started
                    ws.close();
                    resolve();
                }
            });
            ws.on('error', reject);
            setTimeout(() => {
                ws.close();
                resolve(); // Resolve anyway after timeout
            }, 5000);
        });
    }
    /**
     * Ensure MojoGUI page is open, navigating if needed
     */
    async ensureMojoGUIPage() {
        let target = await this.findMojoGUIPage();
        if (!target) {
            // Find any page to navigate
            const anyPage = await this.findAnyPage();
            if (anyPage) {
                console.error('[CDP] MojoGUI not found, navigating to:', this.targetUrl);
                await this.navigateToMojoGUI(anyPage);
                // Wait for page to load
                await new Promise(resolve => setTimeout(resolve, 5000));
                // Try to find it again
                target = await this.findMojoGUIPage();
            }
            if (!target) {
                throw new Error(
                    `Could not navigate to MojoGUI. ` +
                    `Ensure Chrome is running with --remote-debugging-port=${this.port}`
                );
            }
        } else if (this.crashed) {
            // Page exists but is in a crashed state, reload it
            console.error('[CDP] Page exists but is crashed, reloading:', this.targetUrl);
            await this.navigateToMojoGUI(target);
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
        return target;
    }
    /**
     * Get the browser WebSocket endpoint
     */
    async getBrowserWebSocketUrl() {
        const response = await fetch(`http://localhost:${this.port}/json/version`);
        if (!response.ok) {
            throw new Error(`Failed to get browser WebSocket URL`);
        }
        const data = await response.json();
        return data.webSocketDebuggerUrl;
    }
    /**
     * Connect to browser via WebSocket and attach to MojoGUI page
     * Uses Target.attachToTarget for proper session-based event handling
     */
    async connect() {
        const target = await this.ensureMojoGUIPage();
        this.targetId = target.id;

        // Get browser-level WebSocket URL
        const browserWsUrl = await this.getBrowserWebSocketUrl();
        if (!browserWsUrl) {
            throw new Error(`Browser WebSocket URL not available.`);
        }

        this.crashed = false;
        this.lastCrashInfo = null;
        this.sessionId = null;

        return new Promise((resolve, reject) => {
            import('ws').then(({ default: WebSocket }) => {
                this.wsConnection = new WebSocket(browserWsUrl);

                this.wsConnection.on('open', async () => {
                    try {
                        // Enable Target discovery to receive Target.targetCrashed events
                        await this.send('Target.setDiscoverTargets', { discover: true });

                        // Attach to the target page with flatten:true for session-based events
                        const attachResult = await this.send('Target.attachToTarget', {
                            targetId: this.targetId,
                            flatten: true
                        });
                        this.sessionId = attachResult.sessionId;
                        console.error(`[CDP] Attached to target with session: ${this.sessionId}`);

                        // Enable Runtime in the session
                        await this.sendToSession('Runtime.enable');

                        resolve();
                    } catch (e) {
                        reject(new Error(`Failed to attach to target: ${e.message}`));
                    }
                });

                this.wsConnection.on('message', (data) => {
                    this._handleMessage(JSON.parse(data.toString()));
                });

                this.wsConnection.on('error', (error) => {
                    reject(new Error(`WebSocket error: ${error.message}`));
                });

                this.wsConnection.on('close', () => {
                    this._handleDisconnect();
                });
            }).catch(reject);
        });
    }
    /**
     * Disconnect from the page
     */
    disconnect() {
        if (this.wsConnection) {
            this.wsConnection.close();
            this.wsConnection = null;
        }
        this.pendingMessages.clear();
        this.sessionId = null;
    }
    /**
     * Reconnect after crash - navigates back to MojoGUI
     */
    async reconnect() {
        console.error('[CDP] Reconnecting to MojoGUI...');
        this.disconnect();
        // Brief delay to let browser process settle
        await new Promise(resolve => setTimeout(resolve, 500));
        await this.connect();
        await this.waitForMojoGUI(10000);
    }
    /**
     * Reload the current page
     */
    async reload() {
        if (!this.sessionId) {
            await this.connect();
        }
        return this.sendToSession('Page.reload');
    }
    /**
     * Send a CDP command to the browser and wait for response
     */
    async send(method, params = {}) {
        if (!this.wsConnection) {
            throw new Error('Not connected. Call connect() first.');
        }
        const id = ++this.messageId;
        const message = { id, method, params };
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                this.pendingMessages.delete(id);
                reject(new Error(`CDP command timed out: ${method}`));
            }, 30000);
            this.pendingMessages.set(id, { resolve, reject, timeout });
            this.wsConnection.send(JSON.stringify(message));
        });
    }
    /**
     * Send a CDP command through the session (to the attached target)
     */
    async sendToSession(method, params = {}) {
        if (!this.sessionId) {
            throw new Error('No session. Call connect() first.');
        }
        const id = ++this.messageId;
        const message = {
            id,
            method,
            params,
            sessionId: this.sessionId
        };
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                this.pendingMessages.delete(id);
                reject(new Error(`CDP session command timed out: ${method}`));
            }, 30000);
            this.pendingMessages.set(id, { resolve, reject, timeout });
            this.wsConnection.send(JSON.stringify(message));
        });
    }
    /**
     * Evaluate JavaScript in the page context
     */
    async evaluate(expression, options = {}) {
        const params = {
            expression,
            returnByValue: true,
            awaitPromise: options.awaitPromise !== false,
            ...options
        };
        try {
            const result = await this.sendToSession('Runtime.evaluate', params);
            if (result.exceptionDetails) {
                const exception = result.exceptionDetails;
                const errorMessage = exception.exception?.description ||
                    exception.text ||
                    'Unknown error';
                throw new Error(`JavaScript error: ${errorMessage}`);
            }
            return result.result?.value;
        } catch (error) {
            // Handle renderer crashes gracefully
            if (this._isRendererCrash(error) || this.crashed) {
                const crashInfo = this.lastCrashInfo || {
                    exitCode: 3,
                    codeName: 'RESULT_CODE_KILLED_BAD_MESSAGE',
                    note: 'A bad IPC message caused termination.',
                    formattedError: formatCrashError(3)
                };
                return {
                    error: 'RENDERER_CRASHED',
                    exitCode: crashInfo.exitCode,
                    codeName: crashInfo.codeName,
                    message: crashInfo.note,
                    recoverable: true,
                    suggestion: crashInfo.exitCode === 3
                        ? 'Check that the interface binding is loaded and message format matches the expected schema.'
                        : null,
                    originalError: error.message
                };
            }
            throw error;
        }
    }
    /**
     * Execute a function in the page context with arguments
     */
    async call(functionPath, ...args) {
        const argsJson = JSON.stringify(args);
        const expression = `(async () => {
            const fn = ${functionPath};
            if (typeof fn !== 'function') {
                throw new Error('${functionPath} is not a function');
            }
            return await fn(...${argsJson});
        })()`;
        return this.evaluate(expression);
    }
    /**
     * Check if MojoGUI API is available
     */
    async isMojoGUIReady() {
        try {
            const result = await this.evaluate(
                'typeof window.MojoGUI_API !== "undefined" && window.MojoGUI_API !== null'
            );
            return result === true;
        } catch {
            return false;
        }
    }
    /**
     * Wait for MojoGUI API to be available
     */
    async waitForMojoGUI(timeoutMs = 10000) {
        const startTime = Date.now();
        while (Date.now() - startTime < timeoutMs) {
            if (await this.isMojoGUIReady()) {
                return true;
            }
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        throw new Error('Timeout waiting for MojoGUI API to be available');
    }
    /**
     * Handle incoming CDP messages
     */
    _handleMessage(message) {
        // Handle crash events from Target domain
        if (message.method === 'Target.targetCrashed') {
            const { targetId, errorCode, status } = message.params;
            // Only handle if it's our target OR if we don't have one yet
            if (targetId === this.targetId || !this.targetId) {
                console.error(`[CDP] Target crashed: ${targetId} (status: ${status}, errorCode: ${errorCode})`);
                this._handleCrash(errorCode || 3);
            }
            return;
        }

        // Handle target destroyed (page closed/crashed)
        if (message.method === 'Target.targetDestroyed') {
            const { targetId } = message.params;
            if (targetId === this.targetId) {
                console.error(`[CDP] Our target (${targetId}) was destroyed`);
                this._handleCrash(3);
            }
            return;
        }

        // Handle new target creation (automatic connection support)
        if (message.method === 'Target.targetCreated' || message.method === 'Target.targetInfoChanged') {
            const targetInfo = message.params.targetInfo;
            if (targetInfo.type === 'page' && this._isMojoGUITarget(targetInfo)) {
                // If we don't have a target, or our current target crashed, adopt this one
                if (!this.targetId || this.crashed) {
                    console.error(`[CDP] MojoGUI target discovered: ${targetInfo.targetId} (${targetInfo.url})`);
                    if (this.crashed) {
                        this.targetId = targetInfo.targetId;
                        this.crashed = false;
                    }
                }
            }
            return;
        }

        // Handle detached from target (session ended)
        if (message.method === 'Target.detachedFromTarget') {
            if (message.params?.sessionId === this.sessionId) {
                console.error(`[CDP] Target.detachedFromTarget - reason: ${message.params?.reason}`);
                this._handleCrash(3);
            }
            return;
        }

        // Also handle Inspector crash for fallback
        if (message.method === 'Inspector.targetCrashed') {
            this._handleCrash(3);
            return;
        }

        if (message.id && this.pendingMessages.has(message.id)) {
            const { resolve, reject, timeout } = this.pendingMessages.get(message.id);
            clearTimeout(timeout);
            this.pendingMessages.delete(message.id);
            if (message.error) {
                reject(new Error(`CDP error: ${message.error.message}`));
            } else {
                resolve(message.result);
            }
        }
    }

    /**
     * Handle renderer crash event
     */
    _handleCrash(exitCode = 3) {
        this.crashed = true;
        const codeInfo = getResultCodeInfo(exitCode);
        this.lastCrashInfo = {
            exitCode,
            codeName: codeInfo.name,
            note: codeInfo.note,
            timestamp: Date.now(),
            formattedError: formatCrashError(exitCode)
        };

        console.error(`[CDP] Renderer crashed: ${codeInfo.name} (${exitCode})`);
        console.error(`[CDP] ${codeInfo.note}`);

        // Notify crash listeners
        for (const listener of this.crashListeners) {
            try {
                listener(this.lastCrashInfo);
            } catch (e) {
                console.error('[CDP] Crash listener error:', e);
            }
        }

        // Reject all pending messages
        for (const [id, { reject, timeout }] of this.pendingMessages) {
            clearTimeout(timeout);
            reject(new Error(this.lastCrashInfo.formattedError));
        }
        this.pendingMessages.clear();
    }
    /**
     * Handle WebSocket disconnection
     */
    _handleDisconnect() {
        for (const [id, { reject, timeout }] of this.pendingMessages) {
            clearTimeout(timeout);
            reject(new Error('Connection closed'));
        }
        this.pendingMessages.clear();
        this.wsConnection = null;
    }
    /**
     * Check if an error indicates a renderer crash
     */
    _isRendererCrash(error) {
        const crashIndicators = [
            'Target closed',
            'Session closed',
            'detached',
            'crashed',
            'Inspected target navigated',
            'Connection closed'
        ];
        return crashIndicators.some(indicator =>
            error.message?.includes(indicator)
        );
    }
}
// Singleton instance for convenience
let defaultClient = null;
export async function getClient(options = {}) {
    if (!defaultClient) {
        defaultClient = new CDPClient(options);
        await defaultClient.connect();
    }
    return defaultClient;
}
export function resetClient() {
    if (defaultClient) {
        defaultClient.disconnect();
        defaultClient = null;
    }
}
export default CDPClient;