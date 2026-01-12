/**
 * WelcomeManager
 * Handles the display of Welcome, Setup Guide, and Changelog modals.
 */
const WelcomeManager = (function () {

    // --- Templates ---

    const ENABLE_GUIDE_HTML = `
        <div class="step-card">
            <h4><span class="step-number">!</span> MojoJS Not Detected</h4>
            <p>This tool requires the <code>MojoJS</code> bindings to interact with Chromium internals. They are currently not enabled in this context.</p>
        </div>
        
        <h3>How to Enable</h3>
        <ul>
            <li>
                <strong>Launch Chrome with flags:</strong><br>
                <code>--enable-blink-features=MojoJS,MojoJSTest</code>
            </li>
            <li>
                <strong>Or use the flag setup:</strong><br>
                Go to <code>chrome://flags</code> and search for "MojoJS".
            </li>
        </ul>
        <p><em>Note: If you are running this in a standard web environment (not inside a compromised renderer), you may need to use a specific target shell (like <code>content_shell</code>) or a specific exploit chain to inject bindings.</em></p>
    `;

    const WELCOME_HTML = `
        <h3>Welcome to MojoGUI</h3>
        <p>A premium interface for exploring and intercepting MojoJS IPC messages in Chromium.</p>
        
        <div class="step-card">
            <h4><span class="step-number">1</span> Browse Interfaces</h4>
            <p>Select an interface from the sidebar to view its available methods.</p>
        </div>
        
        <div class="step-card">
            <h4><span class="step-number">2</span> Intercept Traffic</h4>
            <p>Toggle the "Traffic Log" to watch messages in real-time. Click <strong>Blocking</strong> to stop messages before they are sent.</p>
        </div>

        <div class="step-card">
            <h4><span class="step-number">3</span> Generate Exploits</h4>
            <p>Use the "Generate Code" panel to create JS snippets for message injection.</p>
        </div>
    `;

    function buildWhatsNewHtml(diff) {
        let html = '<h3>Changes detected since your last visit:</h3>';

        if (diff.added && diff.added.length > 0) {
            html += `<h4>New Interfaces (${diff.added.length})</h4><div class="step-card">`;
            diff.added.forEach(item => {
                html += `
                    <div class="whats-new-item">
                         <span class="whats-new-badge badge-new">New</span>
                         <strong>${escapeHtml(item.name)}</strong>
                         <span style="opacity:0.7">(${item.module})</span>
                    </div>`;
            });
            html += '</div>';
        }

        if (diff.changed && diff.changed.length > 0) {
            html += `<h4>Changed Interfaces (${diff.changed.length})</h4><div class="step-card">`;
            diff.changed.forEach(item => {
                html += `
                    <div class="whats-new-item">
                        <span class="whats-new-badge badge-changed">Mod</span>
                        <strong>${escapeHtml(item.name)}</strong>
                        <span style="font-size:0.8em">Methods: ${item.oldMethods} &rarr; ${item.newMethods}</span>
                    </div>`;
            });
            html += '</div>';
        }

        if (diff.removed && diff.removed.length > 0) {
            html += `<h4>Removed Interfaces (${diff.removed.length})</h4>`;
            // Typically less interesting to show list, maybe just count or summary
            html += `<p class="modal-body-text">${diff.removed.length} interfaces were removed.</p>`;
        }

        return html;
    }

    // --- External Security Helpers ---
    let safeHTML = (html) => html; // Default fallback

    // --- DOM Helpers ---

    function createModal(title, contentHtml) {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';

        const htmlString = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${title}</h2>
                    <button class="btn btn-icon" id="modalCloseBtn">X</button>
                </div>
                <div class="modal-body">
                    ${contentHtml}
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" id="modalActionBtn">Got it</button>
                </div>
            </div>
        `;

        // Use injected safeHTML function
        overlay.innerHTML = safeHTML(htmlString);

        document.body.appendChild(overlay);

        // Force reflow for animation
        void overlay.offsetWidth;
        overlay.classList.add('active');

        function close() {
            overlay.classList.remove('active');
            setTimeout(() => overlay.remove(), 300);
        }

        overlay.querySelector('#modalCloseBtn').addEventListener('click', close);
        overlay.querySelector('#modalActionBtn').addEventListener('click', close);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) close();
        });
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    // --- Public API ---

    function init(interfaces, safeHTMLImpl) {
        // Inject security helper if provided
        if (safeHTMLImpl) {
            safeHTML = safeHTMLImpl;
        }
        // 1. Check if Mojo exists
        // Note: We check window.Mojo, but sometimes it's under window.chrome.mojo etc.
        // Assuming global Mojo for this tool per existing codebase.
        // However, if we are in the GUI tool itself, we might just be viewing a dump.
        // If interfaces are provided, we assume we want to track them.

        // If no interfaces found/loaded, user might need guide.
        if (!interfaces || interfaces.length === 0) {
            // Only show guide if we really expected something but got nothing.
            // Or if specific check fails.
            // For now, let's rely on VersionTracker result.
        }

        // 2. Check Version Tracker
        if (window.VersionTracker) {
            const updates = window.VersionTracker.checkUpdates(interfaces || []);

            if (updates) {
                if (updates.isFirstVisit) {
                    createModal("👋 Welcome to MojoGUI", WELCOME_HTML);
                } else {
                    // Only show if there are actual changes (added/removed/changed)
                    if (updates.added || updates.changed || updates.removed) {
                        createModal("⚡ What's New", buildWhatsNewHtml(updates));
                    }
                }
            } else {
                // No changes, no first visit. Silent.
                // UNLESS Mojo is completely missing, then maybe Guide?
                if (typeof Mojo === 'undefined' && (!interfaces || interfaces.length === 0)) {
                    createModal("⚠️ Mojo Setup Required", ENABLE_GUIDE_HTML);
                }
            }
        }
    }

    return {
        init: init
    };
})();

window.WelcomeManager = WelcomeManager;
