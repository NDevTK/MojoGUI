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
                <strong>Option 2: Developer Builds (Advanced)</strong><br>
                Use <code>content_shell</code>, a minimal Chromium test browser often used by developers to test Mojo interfaces without full browser security restrictions.
            </li>
        </ul>
        <div class="alert-box" style="border-left-color: #ff4444; background: rgba(255, 68, 68, 0.1);">
             <strong>⚠️ Security Warning</strong>
             <p>This tool is designed for <strong>security research purposes only</strong>. MojoJS provides direct access to Chromium's IPC system, which is a privileged interface.</p>
             <ul style="margin-bottom: 0;">
                <li>Never enable MojoJS when browsing untrusted websites.</li>
                <li>The generated code may interact with sensitive browser APIs.</li>
                <li>Always use in an isolated environment for testing.</li>
             </ul>
        </div>
    `;

    const WELCOME_HTML = `
        <h3>👋 Welcome to MojoGUI</h3>
        <p>A premium interface for exploring and intercepting MojoJS IPC messages in Chromium. <br>Bindings are automatically generated for the latest <strong>Chrome Canary</strong> version.</p>
        
        <div class="step-card">
            <h4><span class="step-number">?</span> What is Mojo?</h4>
            <p>Mojo is Chromium's IPC (Inter-Process Communication) system. It allows different processes (Browser, Renderer, GPU) to talk to each other using strongly-typed interfaces defined in <code>.mojom</code> files.</p>
        </div>

        <div class="step-card">
            <h4><span class="step-number">⚡</span> How this Tool Works</h4>
            <p><strong>MojoGUI</strong> uses the <code>MojoInterfaceInterceptor</code> API to capture interface requests relative to the current context. This allows us to:</p>
            <ul>
                <li><strong>Log:</strong> See every message sent between the page and the browser.</li>
                <li><strong>Intercept:</strong> Block messages or modify their arguments on the fly (<a href="#" onclick="alert('Proxies are created dynamically!')">Dynamic Proxying</a>).</li>
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

        // 1. Precise Mojo Detection (Matching app.js & interceptor requirements)
        // We specifically need MojoInterfaceInterceptor for full functionality
        const hasMojoSupport = (typeof MojoInterfaceInterceptor !== 'undefined') ||
            (typeof Mojo !== 'undefined' && Mojo.bindInterface);

        // Priority Check: Detection Failed
        // We warn if Mojo is missing, regardless of whether bindings provided interface definitions.
        // Users can dismiss this for the session to view traffic logs/dumps in read-only mode.
        if (!hasMojoSupport && !sessionStorage.getItem('mojo_warning_dismissed')) {
            createModal("⚠️ Mojo Setup Required", ENABLE_GUIDE_HTML);

            // Hook up dismissal
            const activeModal = document.querySelector('.modal-overlay.active');
            if (activeModal) {
                const dismiss = () => sessionStorage.setItem('mojo_warning_dismissed', 'true');
                const closeBtn = activeModal.querySelector('#modalCloseBtn');
                const actionBtn = activeModal.querySelector('#modalActionBtn');
                if (closeBtn) closeBtn.addEventListener('click', dismiss);
                if (actionBtn) {
                    actionBtn.textContent = "Continue Read-Only";
                    actionBtn.addEventListener('click', dismiss);
                }
            }
            return; // Blocking modal, stop here
        }

        // 2. Check Version Tracker
        if (window.VersionTracker) {
            const updates = window.VersionTracker.checkUpdates(interfaces || [], browserVersion);

            if (updates) {
                if (updates.isFirstVisit) {
                    createModal("👋 Welcome to MojoGUI", WELCOME_HTML);
                } else if (updates.added || updates.changed || updates.removed) {
                    createModal("⚡ What's New", buildWhatsNewHtml(updates));
                }
            }
        }
    }

    return {
        init: init
    };
})();

window.WelcomeManager = WelcomeManager;
