/**
 * WelcomeManager
 * Handles the display of Welcome, Setup Guide, and Changelog modals.
 */
const WelcomeManager = (function () {

    // --- Templates ---

    const ENABLE_GUIDE_HTML = `
        <div class="step-card">
            <h4><span class="step-number">!</span> MojoJS Not Detected</h4>
            <p>This tool requires the <strong>MojoJS</strong> bindings to interact with Chromium internals. They are currently not enabled in this context.</p>
        </div>
        
        <h3>How to Enable</h3>
        <ul>
            <li>
                <strong>Option 1: Launch Chrome with flags (Recommended)</strong><br>
                <code>chrome --enable-blink-features=MojoJS,MojoJSTest</code>
            </li>
            <li>
                <strong>Option 2: Use a Setup Script</strong><br>
                For deeper research, use a target like <code>content_shell</code> or a specialized environment that exposes these bindings by default.
            </li>
        </ul>
        <div class="alert-box">
             <strong>Why is this needed?</strong> MojoJS is a privileged API usually restricted to WebUI pages. To research standard rendering contexts, you must explicitly enable it via flags.
        </div>
    `;

    const WELCOME_HTML = `
        <h3>👋 Welcome to MojoGUI</h3>
        <p>A premium interface for exploring and intercepting MojoJS IPC messages in Chromium.</p>
        
        <div class="step-card">
            <h4><span class="step-number">?</span> What is Mojo?</h4>
            <p>Mojo is Chromium's IPC (Inter-Process Communication) system. It allows different processes (Browser, Renderer, GPU) to talk to each other using strongly-typed interfaces defined in <code>.mojom</code> files.</p>
        </div>

        <div class="step-card">
            <h4><span class="step-number">⚡</span> How this Tool Works</h4>
            <p><strong>MojoGUI</strong> monkey-patches the global <code>Mojo.bindInterface</code> function. This allows us to:</p>
            <ul>
                <li><strong>Log:</strong> See every message sent between the page and the browser.</li>
                <li><strong>Intercept:</strong> Block messages or modify their arguments on the fly.</li>
                <li><strong>Fuzz:</strong> Send custom messages to test browser security.</li>
            </ul>
        </div>
        
        <div class="step-card">
            <h4><span class="step-number">🚀</span> Quick Start</h4>
            <ol>
                <li>Select an <strong>Interface</strong> on the left.</li>
                <li>Check the <strong>"Traffic Log"</strong> to see live messages.</li>
                <li>Toggle <strong>Status</strong> to "Blocking" to intercept requests.</li>
            </ol>
        </div>
    `;

    function buildWhatsNewHtml(diff) {
        let html = '<h3>Changes detected since your last visit:</h3>';

        if (diff.lastVersion) {
            html = `<h3>Changes since Chrome ${escapeHtml(diff.lastVersion)}:</h3>`;
        }

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

    function init(interfaces, safeHTMLImpl, browserVersion) {
        // Inject security helper if provided
        if (safeHTMLImpl) {
            safeHTML = safeHTMLImpl;
        }

        // 1. Precise Mojo Detection (Matching app.js)
        const isMojoNetEnabled = (typeof Mojo !== 'undefined' && Mojo.bindInterface) ||
            (typeof mojo !== 'undefined' && mojo.bindInterface);

        // 2. Check Version Tracker
        if (window.VersionTracker) {
            const updates = window.VersionTracker.checkUpdates(interfaces || [], browserVersion);

            if (updates) {
                if (updates.isFirstVisit) {
                    // First visit logic
                    if (!isMojoNetEnabled && (!interfaces || interfaces.length === 0)) {
                        // Priority 1: Missing Mojo
                        createModal("⚠️ Mojo Setup Required", ENABLE_GUIDE_HTML);
                    } else {
                        // Priority 2: Welcome (Mojo exists OR just viewing dumps)
                        createModal("👋 Welcome to MojoGUI", WELCOME_HTML);
                    }
                } else {
                    // Changes detected logic
                    if (updates.added || updates.changed || updates.removed) {
                        createModal("⚡ What's New", buildWhatsNewHtml(updates));
                    }
                }
            } else {
                // Not first visit, no changes.
                // Fallback: If Mojo completely missing on repeat visit?
                if (!isMojoNetEnabled && (!interfaces || interfaces.length === 0)) {
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
