/**
 * MojoGUI Sandbox Manager
 * Handles life-cycle and communication with the isolated sandbox window.
 */
class SandboxManager {
    constructor() {
        this.sandboxWindow = null;
        this.isReady = false;
        this.pendingExecution = null;

        // Listen for messages from the sandbox
        window.addEventListener('message', this.handleMessage.bind(this));
    }

    /**
     * Launch the sandbox window.
     */
    launch() {
        if (this.sandboxWindow && !this.sandboxWindow.closed) {
            this.sandboxWindow.focus();
            return;
        }

        this.sandboxWindow = window.open('sandbox.html', 'MojoSandbox', 'width=800,height=600');
        this.isReady = false;

        // Timeout fallback
        setTimeout(() => {
            if (!this.isReady && this.sandboxWindow) {
                console.warn('[SandboxManager] Sandbox launch timed out (no READY signal).');
            }
        }, 5000);
    }

    /**
     * Execute code in the sandbox.
     * @param {string} code - The JS code to execute.
     */
    execute(code) {
        if (!this.sandboxWindow || this.sandboxWindow.closed) {
            alert('Sandbox is not open. Please launch it first.');
            return;
        }

        if (!this.isReady) {
            // Queue it? For now, just warn.
            alert('Sandbox is loading. Please wait...');
            return;
        }

        const message = {
            type: 'EXECUTE',
            code: code
        };

        // Secure PostMessage
        this.sandboxWindow.postMessage(message, window.location.origin);
    }

    handleMessage(event) {
        // Strict Origin Check
        if (event.origin !== window.location.origin) return;

        const { type, error } = event.data;

        switch (type) {
            case 'SANDBOX_READY':
                console.log('[SandboxManager] Sandbox is ready.');
                this.isReady = true;
                this.updateUIStatus(true);
                break;
            case 'EXECUTION_SUCCESS':
                console.log('[SandboxManager] Code executed successfully.');
                break;
            case 'EXECUTION_ERROR':
                console.error('[SandboxManager] Execution error:', error);
                alert(`Sandbox Error: ${error}`);
                break;
        }
    }

    updateUIStatus(ready) {
        const btn = document.getElementById('launchSandboxBtn');
        if (btn) {
            btn.textContent = ready ? 'Sandbox Active' : 'Launch Sandbox';
            btn.classList.toggle('active', ready);
        }
    }
}

// Export global instance
window.SandboxManager = new SandboxManager();
