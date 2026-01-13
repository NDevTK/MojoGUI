/**
 * Frame Interception Experiments
 * 
 * Run these in the DevTools console while on MojoGUI with MojoJS enabled.
 * Each experiment tests a different approach to intercepting LocalFrameHost traffic.
 */

window.FrameExperiments = {

    /**
     * Experiment 1: Process-scope Interceptor + New Frame
     * Tests if process-level interception catches new frame bindings
     */
    testProcessScopeInterceptor() {
        console.log('🧪 Experiment 1: Process-scope Interceptor + New Frame');
        console.log('─'.repeat(50));

        if (typeof MojoInterfaceInterceptor === 'undefined') {
            console.error('❌ MojoInterfaceInterceptor not available. Enable MojoJS.');
            return;
        }

        try {
            const interceptor = new MojoInterfaceInterceptor('blink.mojom.LocalFrameHost', 'process');

            interceptor.oninterfacerequest = (handle) => {
                console.log('🎯 SUCCESS! Caught LocalFrameHost bind request!');
                console.log('   Handle:', handle);
                console.log('   This means we can intercept new frame bindings!');
                // Let the request pass through (don't consume the handle)
            };

            interceptor.start();
            console.log('✓ Interceptor started with process scope');

            // Create a new iframe to trigger a LocalFrameHost binding
            const iframe = document.createElement('iframe');
            iframe.src = 'about:blank';
            iframe.style.cssText = 'width:100px;height:100px;position:fixed;bottom:10px;right:10px;z-index:99999;border:2px solid lime;';
            document.body.appendChild(iframe);
            console.log('✓ Created test iframe (green border, bottom-right)');

            // Cleanup helper
            window._exp1Cleanup = () => {
                interceptor.stop();
                iframe.remove();
                console.log('✓ Cleaned up Experiment 1');
            };
            console.log('💡 Call _exp1Cleanup() when done');

        } catch (e) {
            console.error('❌ Error:', e.message);
            console.log('   This scope might not be supported for this interface');
        }
    },

    /**
     * Experiment 2: Direct Re-bind Attempt
     * Tests if we can request a second binding to LocalFrameHost
     */
    async testDirectRebind() {
        console.log('🧪 Experiment 2: Direct Re-bind Attempt');
        console.log('─'.repeat(50));

        if (typeof Mojo === 'undefined' || !Mojo.bindInterface) {
            console.error('❌ Mojo.bindInterface not available. Enable MojoJS.');
            return;
        }

        try {
            // Try multiple paths to find LocalFrameHostRemote
            let LocalFrameHostRemote = null;

            if (window.mojo?.internal?.bindings?.blink?.mojom?.LocalFrameHostRemote) {
                LocalFrameHostRemote = window.mojo.internal.bindings.blink.mojom.LocalFrameHostRemote;
                console.log('✓ Found via window.mojo.internal.bindings');
            } else if (typeof blink !== 'undefined' && blink.mojom?.LocalFrameHostRemote) {
                LocalFrameHostRemote = blink.mojom.LocalFrameHostRemote;
                console.log('✓ Found via blink.mojom');
            }

            if (!LocalFrameHostRemote) {
                console.error('❌ LocalFrameHost bindings not loaded.');
                console.log('   💡 First, search "LocalFrameHost" in MojoGUI sidebar and click it to load');
                return;
            }

            console.log('✓ Creating new LocalFrameHostRemote...');

            // Method A: Try using Mojo.createMessagePipe directly
            console.log('  Trying Method A: Mojo.createMessagePipe...');
            try {
                const pipe = Mojo.createMessagePipe();
                console.log('  Pipe created:', pipe);

                // Bind one end to the browser
                Mojo.bindInterface(
                    'blink.mojom.LocalFrameHost',
                    pipe.handle0,
                    'context'
                );
                console.log('  ✓ Bound handle0 to browser');

                // Use the other end for our remote
                const remote = new LocalFrameHostRemote(pipe.handle1);
                console.log('  ✓ Created remote with handle1');

                // Try calling a method
                remote.didFocusFrame();
                console.log('🎯 SUCCESS Method A! We have our own LocalFrameHost pipe!');
                window._exp2Remote = remote;
                console.log('💡 Remote saved as _exp2Remote');
                return;
            } catch (errA) {
                console.log('  ✗ Method A failed:', errA.message);
            }

            // Method B: Try the standard Remote pattern
            console.log('  Trying Method B: Standard Remote pattern...');
            try {
                const remote = new LocalFrameHostRemote();

                // Try to get the underlying handle
                let handle = null;
                if (remote.$ && remote.$.proxy && remote.$.proxy.receiver_) {
                    handle = remote.$.proxy.receiver_?.handle;
                    console.log('  Found handle via proxy.receiver_');
                }

                if (!handle) {
                    // Try bindNewPipeAndPassReceiver and extract handle
                    const receiver = remote.bindNewPipeAndPassReceiver
                        ? remote.bindNewPipeAndPassReceiver()
                        : remote.$.proxy.bindNewPipeAndPassReceiver();

                    handle = receiver.handle || receiver;
                    console.log('  Got receiver:', receiver);
                    console.log('  Handle type:', typeof handle, handle?.constructor?.name);
                }

                if (handle) {
                    Mojo.bindInterface('blink.mojom.LocalFrameHost', handle, 'context');
                    console.log('  ✓ Bound handle');

                    remote.didFocusFrame();
                    console.log('🎯 SUCCESS Method B!');
                    window._exp2Remote = remote;
                }
            } catch (errB) {
                console.log('  ✗ Method B failed:', errB.message);
            }

            // Method C: Use the getRemote() static helper if available
            console.log('  Trying Method C: Static getRemote()...');
            try {
                if (LocalFrameHostRemote.getRemote || mojo.internal.bindings.blink.mojom.LocalFrameHost.getRemote) {
                    const getRemote = LocalFrameHostRemote.getRemote || mojo.internal.bindings.blink.mojom.LocalFrameHost.getRemote;
                    const remote = getRemote();
                    console.log('  ✓ Got remote via getRemote()');
                    remote.didFocusFrame();
                    console.log('🎯 SUCCESS Method C!');
                    window._exp2Remote = remote;
                } else {
                    console.log('  ✗ getRemote() not available');
                }
            } catch (errC) {
                console.log('  ✗ Method C failed:', errC.message);
            }

        } catch (e) {
            console.error('❌ Error:', e.message);
            console.error(e.stack);
        }
    },


    /**
     * Experiment 3: Context-scope Interceptor Test
     * Baseline test - does context scope work at all for this interface?
     */
    testContextScopeInterceptor() {
        console.log('🧪 Experiment 3: Context-scope Interceptor Baseline');
        console.log('─'.repeat(50));

        if (typeof MojoInterfaceInterceptor === 'undefined') {
            console.error('❌ MojoInterfaceInterceptor not available.');
            return;
        }

        try {
            const interceptor = new MojoInterfaceInterceptor('blink.mojom.LocalFrameHost', 'context');

            interceptor.oninterfacerequest = (handle) => {
                console.log('🎯 Caught LocalFrameHost request in context scope!');
                console.log('   Handle:', handle);
            };

            interceptor.start();
            console.log('✓ Interceptor started with context scope');

            // Now try a manual bind to see if it triggers
            console.log('  Attempting manual bind...');
            const receiver = { handle: new MojoHandle() }; // This likely won't work, but let's see

            window._exp3Cleanup = () => {
                interceptor.stop();
                console.log('✓ Cleaned up Experiment 3');
            };
            console.log('💡 Call _exp3Cleanup() when done');

        } catch (e) {
            console.error('❌ Error:', e.message);
        }
    },

    /**
     * Experiment 4: Intercept a Service Interface (Control Test)
     * Tests interception on a simpler interface to verify our approach works
     */
    testServiceInterception() {
        console.log('🧪 Experiment 4: Service Interface Control Test');
        console.log('─'.repeat(50));

        if (typeof MojoInterfaceInterceptor === 'undefined') {
            console.error('❌ MojoInterfaceInterceptor not available.');
            return;
        }

        // Try a few common service interfaces
        const interfaces = [
            'blink.mojom.ClipboardHost',
            'blink.mojom.BlobRegistry',
            'device.mojom.Geolocation',
            'network.mojom.RestrictedCookieManager'
        ];

        interfaces.forEach(iface => {
            try {
                const interceptor = new MojoInterfaceInterceptor(iface, 'context');
                interceptor.oninterfacerequest = (handle) => {
                    console.log(`🎯 Caught ${iface}!`);
                };
                interceptor.start();
                console.log(`✓ Started interceptor for ${iface}`);

                // Store for cleanup
                window._exp4Interceptors = window._exp4Interceptors || [];
                window._exp4Interceptors.push(interceptor);

            } catch (e) {
                console.log(`✗ ${iface}: ${e.message}`);
            }
        });

        console.log('');
        console.log('Now trigger these APIs:');
        console.log("  - Clipboard: navigator.clipboard.readText()");
        console.log("  - Geolocation: navigator.geolocation.getCurrentPosition(()=>{})");
        console.log('');
        console.log('💡 Call _exp4Cleanup() when done');

        window._exp4Cleanup = () => {
            (window._exp4Interceptors || []).forEach(i => i.stop());
            window._exp4Interceptors = [];
            console.log('✓ Cleaned up Experiment 4');
        };
    },

    /**
     * Experiment 5: Test INCOMING interfaces (renderer-provided)
     * MojoInterfaceInterceptor may only work for interfaces WHERE WE ARE THE RECEIVER
     */
    testIncomingInterfaces() {
        console.log('🧪 Experiment 5: Incoming Interface Interception');
        console.log('─'.repeat(50));
        console.log('Testing interfaces where the RENDERER is the receiver...');
        console.log('');

        if (typeof MojoInterfaceInterceptor === 'undefined') {
            console.error('❌ MojoInterfaceInterceptor not available.');
            return;
        }

        // Interfaces where the browser connects TO the renderer
        const incomingInterfaces = [
            'blink.mojom.LocalFrame',
            'blink.mojom.LocalMainFrame',
            'blink.mojom.Widget',
            'content.mojom.Renderer',
        ];

        window._exp5Interceptors = [];

        incomingInterfaces.forEach(iface => {
            try {
                const interceptor = new MojoInterfaceInterceptor(iface, 'context');
                interceptor.oninterfacerequest = (handle) => {
                    console.log(`🎯 CAUGHT INCOMING: ${iface}`);
                    console.log('   Handle:', handle);
                };
                interceptor.start();
                console.log(`✓ Interceptor started for ${iface}`);
                window._exp5Interceptors.push(interceptor);
            } catch (e) {
                console.log(`✗ ${iface}: ${e.message}`);
            }
        });

        console.log('');
        console.log('These are INCOMING interfaces (browser→renderer).');
        console.log('Try creating an iframe to trigger new bindings:');
        console.log("  document.body.appendChild(document.createElement('iframe'))");
        console.log('');
        console.log('💡 Call _exp5Cleanup() when done');

        window._exp5Cleanup = () => {
            window._exp5Interceptors.forEach(i => { try { i.stop(); } catch (e) { } });
            window._exp5Interceptors = [];
            console.log('✓ Cleaned up Experiment 5');
        };
    },

    /**
     * Run all experiments in sequence
     */
    runAll() {
        console.log('═'.repeat(60));
        console.log('  FRAME INTERCEPT EXPERIMENTS');
        console.log('═'.repeat(60));
        console.log('');

        this.testProcessScopeInterceptor();
        console.log('');

        this.testContextScopeInterceptor();
        console.log('');

        this.testServiceInterception();
        console.log('');

        console.log('═'.repeat(60));
        console.log('Run FrameExperiments.testDirectRebind() separately (async)');
        console.log('═'.repeat(60));
    }
};

console.log('✅ Frame Experiments loaded!');
console.log('');
console.log('Available commands:');
console.log('  FrameExperiments.testProcessScopeInterceptor()  - Exp 1: Process-wide');
console.log('  FrameExperiments.testDirectRebind()             - Exp 2: Manual rebinding');
console.log('  FrameExperiments.testContextScopeInterceptor()  - Exp 3: Context scope');
console.log('  FrameExperiments.testServiceInterception()      - Exp 4: Outgoing services');
console.log('  FrameExperiments.testIncomingInterfaces()       - Exp 5: Incoming interfaces');
console.log('  FrameExperiments.runAll()                       - Run all tests');
