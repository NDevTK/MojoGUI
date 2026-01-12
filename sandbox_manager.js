/**
 * MojoGUI Sandbox Manager
 * Handles creating isolated contexts (Popups) to verify Process-Scoped interception.
 */
(function (global) {
    'use strict';

    const SandboxManager = {
        launch() {
            // Open a clean window. 
            // 'about:blank' ensures it's same-origin initially (usually) or at least safe.
            // In a real deployment, we might want a specific test page, but about:blank with DOM manipulation is fine.
            const childWin = window.open('about:blank', 'MojoSandbox_' + Date.now(), 'width=800,height=600');

            if (!childWin) {
                alert("Popup blocked! Please allow popups for this tool.");
                return;
            }

            // Write some basic content to the child window to confirm it's working
            childWin.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>MojoGUI Sandbox</title>
                    <style>
                        body { font-family: monospace; background: #111; color: #0f0; padding: 20px; }
                        h1 { border-bottom: 1px solid #333; }
                        .status { padding: 10px; background: #222; border-radius: 4px; margin-top: 10px; }
                    </style>
                </head>
                <body>
                    <h1>MojoGUI Sandbox Target</h1>
                    <p>This window exists to test <strong>Process-Scoped</strong> interception.</p>
                    <div class="status" id="status">Waiting for interaction...</div>
                    <script>
                        // Helper to visualize activity
                        function log(msg) {
                            const div = document.createElement('div');
                            div.textContent = "> " + msg;
                            document.body.appendChild(div);
                        }
                        
                        log("Sandbox Ready.");
                        log("Any Mojo pipe creation here should be caught by the Parent Window if 'Process Scope' is active.");
                        
                        // Example: Try to create a LocalFrameHost pipe *manually* to verify basic functionality
                        // (Only works if bindings happen to be injected, which they aren't by default here unless we do it,
                        // but the *creation* of frame pipes happens natively).
                    </script>
                </body>
                </html>
            `);
            childWin.document.close();
        }
    };

    global.SandboxManager = SandboxManager;

})(this);
