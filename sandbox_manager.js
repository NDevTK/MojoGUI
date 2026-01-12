/**
 * MojoGUI Sandbox Manager
 * 
 * Implements "Virtual Iframe" capability by intercepting FrameHost.CreateChildFrame
 * and performing a Man-in-the-Middle attack on the new frame's BrowserInterfaceBroker.
 */

export const SandboxManager = {
    isActive: false,
    frameHostInterceptor: null,

    // Store active brokers for child frames
    // Map<LocalFrameToken, BrowserInterfaceBrokerStub>
    childBrokers: new Map(),

    async createVirtualFrame() {
        if (!this.isActive) {
            await this.startInterception();
        }

        console.log("[Sandbox] Creating new Virtual Iframe...");
        const iframe = document.createElement('iframe');
        iframe.src = 'about:blank';
        iframe.style.border = "2px solid #00ff00"; // Visual indicator
        iframe.style.width = "100%";
        iframe.style.height = "200px";
        iframe.style.marginTop = "10px";

        // Add to DOM - this triggers FrameHost.CreateChildFrame immediately
        document.querySelector('.main-content').appendChild(iframe);

        // Inject a helper script to ease manual testing
        setTimeout(() => {
            try {
                iframe.contentWindow.eval(`
                    console.log("%c[Sandbox] Virtual Iframe Ready", "color: #00ff00; font-weight: bold");
                    window.help = "Use blink.mojom.LocalFrameHost.getRemote().enterFullscreen() to test";
                    
                    // Convenience for user manual testing
                    window.startFullscreen = () => {
                         let remote = new blink.mojom.LocalFrameHostRemote();
                         remote.enterFullscreen();
                    };
                `);
            } catch (e) { }
        }, 500);
    },

    async startInterception() {
        if (this.isActive) return;

        const ifaceName = "content.mojom.FrameHost";
        if (window.MojoLoader) {
            try {
                await window.MojoLoader.ensureBinding(ifaceName);
            } catch (e) {
                console.warn("[Sandbox] Binding load failed", e);
            }
        }

        // We hook content.mojom.FrameHost to catch CreateChildFrame
        // This is sent by the RENDERER (us) to the BROWSER.
        // So we need to intercept the *outgoing* request? 
        // MojoInterfaceInterceptor typically intercepts *incoming* requests (Receiver).
        // BUT, CreateChildFrame is an outgoing call from RenderFrameImpl.
        // 
        // Wait, MojoInterfaceInterceptor intercepts "Mojo.bindInterface" calls.
        // When blink creates a frame, it calls `bindInterface("content.mojom.FrameHost", ...)`?
        // OR it uses an associated interface on the existing channel.
        //
        // If it's an associated interface, MojoInterfaceInterceptor might NOT see it if it's not a fresh bind.
        // However, let's try.



        try {
            this.frameHostInterceptor = new MojoInterfaceInterceptor(ifaceName);
            this.frameHostInterceptor.oninterfacerequest = (e) => {
                this.handleFrameHostConnection(e.handle);
            };
            this.frameHostInterceptor.start();
            this.isActive = true;
            console.log(`[Sandbox] Interceptor started for ${ifaceName}`);

            // Register in the main UI
            if (window.InterceptorManager) {
                window.InterceptorManager.interceptors.set(ifaceName, this.frameHostInterceptor);
                window.InterceptorManager.modes.set(ifaceName, 'VIRTUAL');
            }
        } catch (e) {
            console.error("[Sandbox] Failed to start FrameHost interceptor:", e);
            alert("Failed to start Sandbox Interceptor. MojoJS might be disabled or scope issue.");
        }
    },

    handleFrameHostConnection(handle) {
        console.log("[Sandbox] Trapped FrameHost connection!");

        // We need to act as the Receiver for FrameHost
        // We can use the generated bindings if available, or a generic proxy.
        // Since we specifically want CreateChildFrame, let's use a generic proxy that looks for that method ordinal.

        // Create a Proxy using our existing system
        if (window.MojoProxy) {
            const proxy = window.MojoProxy.create("content.mojom.FrameHost", handle);
            if (proxy) {
                // Hook the 'CreateChildFrame' method
                // We need to know its ordinal. Ideally we learn it.
                // But for now, we look at the raw messages.

                // Override the intercept logic tailored for FrameHost
                const originalIntercept = proxy.proxy.interceptCall;
                proxy.proxy.interceptCall = (method, args) => {
                    if (method === 'CreateChildFrame') {
                        this.handleCreateChildFrame(args);
                    }
                    // Log it
                    window.dispatchEvent(new CustomEvent('mojo-intercept', {
                        detail: {
                            id: Math.random().toString(36).substr(2, 9),
                            interface: "content.mojom.FrameHost",
                            method: method,
                            params: args,
                            timestamp: Date.now(),
                            mode: 'VIRTUAL'
                        }
                    }));

                    // Forward to real browser? 
                    // If we want the frame to actually exist, WE MUST FORWARD IT.
                    // But we want to REPLACE the broker receiver first.
                    return originalIntercept.call(proxy.proxy, method, args);
                };
            }
        }
    },

    handleCreateChildFrame(args) {
        console.log("[Sandbox] CAUGHT CreateChildFrame!", args);

        // Args signature: (token, frame_remote, broker_receiver, devtools_token)
        // We need to identify which arg is the broker_receiver.
        // Based on mojom: 3rd argument (index 2) is pending_receiver<BrowserInterfaceBroker>.

        const brokerReceiver = args[2];
        if (brokerReceiver) {
            console.log("[Sandbox] STEALING BrowserInterfaceBroker Receiver!");

            // 1. Create a pipe for our Man-in-the-Middle
            const { handle0: localEnd, handle1: browserEnd } = Mojo.createMessagePipe();

            // 2. Give the browser the NEW pipe (browserEnd)
            // We modify the args in place so the proxy sends the swapped handle
            args[2] = browserEnd;

            // 3. Bind OUR Broker Stub to the original receiver (which the child frame owns)
            // Wait, args[2] is the RECEIVER. The Child Frame holds the REMOTE.
            // The Child Frame calls `remote.GetInterface()`.
            // Sending `brokerReceiver` to the browser tells the browser "Here, listen on this pipe".
            // So if we swap it:
            // - We give Browser `browserEnd`. Browser listens on `browserEnd`.
            // - Child Frame holds `originalRemote` (connected to `brokerReceiver`).
            // 
            // We want Child Frame to talk to US.
            // So we should KEEP `brokerReceiver` and bind our stub to it.
            // AND we should give the Browser `browserEnd` and connect our Stub's output to `localEnd`.

            this.bindVirtualBroker(brokerReceiver, localEnd);
        }
    },

    bindVirtualBroker(receiverHandle, forwardingHandle) {
        console.log("[Sandbox] Binding Virtual Broker...");

        // This stub handles requests from the Child Frame
        const stub = new MojoInterfaceInterceptor("blink.mojom.BrowserInterfaceBroker");
        // Wait, MojoInterfaceInterceptor is for *creating* interceptors at the platform level.
        // Here we just want to read messages from a handle.
        // We can use `mojo.Binding` or raw router.

        const router = new mojo.internal.interfaceSupport.Router(receiverHandle);
        const forwardingRouter = new mojo.internal.interfaceSupport.Router(forwardingHandle);

        router.onMessageReceived_ = (buffer, handles) => {
            // DECODE: This is a GetInterface(name, pipe) call
            // We can try to parse it.
            // BrowserInterfaceBroker.GetInterface is method 0 (usually).

            console.log("[Sandbox] Child Frame requested an interface!");

            // Forward to browser by default
            forwardingRouter.send({ buffer, handles });

            // Notify UI
            window.dispatchEvent(new CustomEvent('mojo-intercept', {
                detail: {
                    id: Math.random().toString(36).substr(2, 9),
                    interface: "VirtualBroker",
                    method: "GetInterface", // Assumption
                    params: ["<Unknown>"], // We need a decoder to see the name
                    timestamp: Date.now(),
                    mode: 'VIRTUAL'
                }
            }));
        };

        // Handle replies from browser (if any)
        forwardingRouter.onMessageReceived_ = (buffer, handles) => {
            router.send({ buffer, handles });
        };
    }
};
