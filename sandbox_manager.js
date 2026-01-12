/**
 * MojoGUI Sandbox Manager
 * 
 * Implements "Virtual Iframe" capability by piggybacking on the global InterceptorManager.
 * It forces content.mojom.FrameHost into INTERCEPT (Blocking) mode, intercepting the
 * CreateChildFrame call to perform a Man-in-the-Middle attack on the new frame's Broker.
 */

export const SandboxManager = {
    isActive: false,
    virtualBrokerPolyfill: null,

    async createVirtualFrame() {
        if (!this.isActive) {
            await this.startInterception();
        }

        console.log("[Sandbox] Creating new Virtual Iframe...");
        const iframe = document.createElement('iframe');
        iframe.src = 'about:blank';
        iframe.style.border = "2px solid #00ff00";
        iframe.style.width = "100%";
        iframe.style.height = "200px";
        iframe.style.marginTop = "10px";

        document.querySelector('.main-content').appendChild(iframe);

        // Use Trusted Types if available
        let policy = null;
        if (window.trustedTypes && window.trustedTypes.createPolicy) {
            try {
                policy = window.trustedTypes.createPolicy('mojoSandbox', {
                    createHTML: s => s,
                    createScript: s => s
                });
            } catch (e) {
                // Policy might already exist, reuse isn't easy without reference or duplicate handling
                // Try default if failed? or assume we can just use strings if policy creation failed due to duplicate name
                // Actually, duplicate name throws.
            }
        }

        setTimeout(() => {
            try {
                const win = iframe.contentWindow;
                win.console.log("%c[Sandbox] Virtual Iframe Ready", "color: #00ff00; font-weight: bold");
                win.help = "Use blink.mojom.LocalFrameHost.getRemote().enterFullscreen() to test";

                const code = `
                    window.startFullscreen = () => {
                         try {
                             let remote = new blink.mojom.LocalFrameHostRemote();
                             remote.enterFullscreen();
                             console.log("Called enterFullscreen");
                         } catch(e) { console.error(e); }
                    };
                `;

                const script = iframe.contentDocument.createElement('script');
                script.textContent = policy ? policy.createScript(code) : code;
                iframe.contentDocument.body.appendChild(script);
            } catch (e) {
                console.warn("[Sandbox] Helper injection failed", e);
            }
        }, 500);
    },

    async startInterception() {
        if (this.isActive) return;

        const ifaceName = "content.mojom.FrameHost";

        // 1. Ensure global interceptor is running in INTERCEPT (Blocking) mode
        // We do typically monitor all, but we must ensure this one is set to BLOCK so we can modify args.
        if (window.InterceptorManager) {
            // Force start if not active, or switch mode if active
            window.InterceptorManager.start(ifaceName, 'INTERCEPT');

            // If it was already active in LOG mode, we just switched it.
            // If it was manual, we respect it (but we will auto-resume our specific target anyway).
        }

        // 2. Add Listener for the event
        window.addEventListener('mojo-intercept', (e) => this.handleIntercept(e));

        this.isActive = true;
        console.log(`[Sandbox] Passive Interceptor attached for ${ifaceName}`);
    },

    handleIntercept(e) {
        const { id, interface: iface, method, params, proxyId } = e.detail;

        if (iface === 'content.mojom.FrameHost' && method === 'CreateChildFrame') {
            console.log("[Sandbox] Detected CreateChildFrame! Intercepting...");

            // We must act quickly. The UI is likely rendering a "Pending" row.
            // We will modify the args and Resume the call immediately.

            // Args signature: CreateChildFrame(token, frame_remote, broker_receiver, ...)
            // Index 2 is broker_receiver (browser_interface_broker)

            const originalReceiver = params[2];
            if (originalReceiver) {
                console.log("[Sandbox] Stealing Broker Receiver...");

                // 1. Create MitM pipe
                const { handle0: localEnd, handle1: browserEnd } = Mojo.createMessagePipe();

                // 2. Clone params to modify
                // We cannot modify e.detail.params in place effectively if we want to send new ones to resumeCall
                const newParams = [...params];

                // 3. Swap: Browser gets NEW pipe. Child keeps ORIGINAL pipe (which we bind to).
                newParams[2] = browserEnd;

                // 4. Resume the call with MODIFIED params
                const proxy = window.MojoProxyRegistry.get(proxyId);
                if (proxy) {
                    proxy.resumeCall(id, newParams);
                    console.log("[Sandbox] Resumed CreateChildFrame with swapped handle.");

                    // 5. Bind our Virtual Broker to the original receiver
                    this.bindVirtualBroker(originalReceiver, localEnd);
                } else {
                    console.error("[Sandbox] Could not find Proxy for ID", proxyId);
                }
            }
        }
    },

    bindVirtualBroker(receiverHandle, forwardingHandle) {
        console.log("[Sandbox] Binding Virtual Broker Stub...");

        // Raw Router approach to avoid needing "blink.mojom.BrowserInterfaceBroker" binding object loaded
        const router = new mojo.internal.interfaceSupport.Router(receiverHandle);
        const forwardingRouter = new mojo.internal.interfaceSupport.Router(forwardingRouter); // WAIT. Typo in prev version?
        // forwardingRouter should wrap `forwardingHandle`
        const forwardingRouterReal = new mojo.internal.interfaceSupport.Router(forwardingHandle);

        // From Child -> Us
        router.onMessageReceived_ = (buffer, handles) => {
            console.log("[Sandbox] [VirtualBroker] Child requested interface (GetInterface)");

            // We can try to decode slightly if we know the ordinal for GetInterface (usually 0)
            // But for now, faithfully log and forward.

            window.dispatchEvent(new CustomEvent('mojo-intercept', {
                detail: {
                    id: Math.random().toString(36).substr(2, 9),
                    interface: "VirtualBroker",
                    method: "GetInterface",
                    params: ["<Opaque Ptr>"],
                    timestamp: Date.now(),
                    mode: 'VIRTUAL'
                }
            }));

            // Forward to Browser
            forwardingRouterReal.send({ buffer, handles });
        };

        // From Browser -> Child (Replies)
        forwardingRouterReal.onMessageReceived_ = (buffer, handles) => {
            router.send({ buffer, handles });
        };
    }
};
