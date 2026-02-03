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

  function getWelcomeHtml(interfaces, browserVersion) {
    let directCount = 0;
    let associatedCount = 0;
    interfaces.forEach((i) => {
      const isDirect = i.metadata?.usage?.direct?.length > 0;
      if (isDirect) directCount++;
      else associatedCount++;
    });
    const total = directCount + associatedCount;

    return `
        <h3>👋 Welcome to MojoGUI</h3>
        <p>Bindings generated for <strong>Chrome ${
          browserVersion ? escapeHtml(browserVersion) : "Canary"
        }</strong>.</p>
        
        <div class="stats-container" style="display: flex; gap: 10px; margin: 15px 0;">
            <div style="flex: 1; text-align: center; padding: 12px; background: var(--bg-secondary, #f5f5f5); border-radius: 8px;">
                <div style="font-size: 1.8em; font-weight: bold;">${total}</div>
                <div style="font-size: 0.8em; opacity: 0.7;">Total Interfaces</div>
            </div>
             <div style="flex: 1; text-align: center; padding: 12px; background: rgba(76, 175, 80, 0.1); border: 1px solid rgba(76, 175, 80, 0.3); border-radius: 8px;">
                <div style="font-size: 1.8em; font-weight: bold; color: #4caf50;">${directCount}</div>
                <div style="font-size: 0.8em; opacity: 0.7; color: #4caf50;">✓ Direct</div>
            </div>
             <div style="flex: 1; text-align: center; padding: 12px; background: rgba(255, 152, 0, 0.1); border: 1px solid rgba(255, 152, 0, 0.3); border-radius: 8px;">
                <div style="font-size: 1.8em; font-weight: bold; color: #ff9800;">${associatedCount}</div>
                <div style="font-size: 0.8em; opacity: 0.7; color: #ff9800;">🔗 Associated</div>
            </div>
        </div>

        <div class="step-card" style="border-left-color: #6366f1;">
            <h4><span class="step-number">�</span> Associated Interface Hijacking</h4>
            <p style="font-size: 0.9em; margin-bottom: 0;">
                Previously restricted interfaces like <strong>LocalFrameHost</strong> or <strong>StoragePartitionService</strong> can now be hijacked! 
                Use the <strong>WinDbg Toolkit</strong> in <code>/chromiumdebug</code> to dynamically extract Master Handles and Interface IDs from the renderer.
            </p>
        </div>

        <div class="step-card">
            <h4><span class="step-number">⚡</span> How this Tool Works</h4>
            <p><strong>MojoGUI</strong> provides a powerful suite for Chromium IPC research:</p>
            <ul>
                <li><strong>Traffic Log:</strong> Monitor real-time messages between Renderer and Browser.</li>
                <li><strong>Interceptor:</strong> Block or modify IPC arguments on the fly.</li>
                <li><strong>Master Hijack:</strong> Escalate from standard MojoJS to privileged C++ endpoints.</li>
            </ul>
        </div>
    `;
  }

  function buildWhatsNewHtml(diff) {
    let html = "<h3>Changes detected since your last visit:</h3>";

    if (diff.lastVersion) {
      html = `<h3>Changes since Chrome ${escapeHtml(diff.lastVersion)}:</h3>`;
    }

    if (diff.added && diff.added.length > 0) {
      html += `<h4>New Interfaces (${diff.added.length})</h4><div class="step-card">`;
      diff.added.forEach((item) => {
        const badgeClass =
          item.type === "Direct" ? "badge success" : "badge warning";
        const badgeLabel = item.type === "Direct" ? "Direct" : "Assoc";

        html += `
                    <div class="whats-new-item">
                         <span class="whats-new-badge badge-new">New</span>
                         <span class="${badgeClass}" style="font-size: 0.7em; margin-right: 6px; padding: 2px 6px;">${badgeLabel}</span>
                         <strong>${escapeHtml(item.name)}</strong>
                         <span style="opacity:0.7">(${item.module})</span>
                    </div>`;
      });
      html += "</div>";
    }

    if (diff.changed && diff.changed.length > 0) {
      html += `<h4>Changed Interfaces (${diff.changed.length})</h4><div class="step-card">`;
      diff.changed.forEach((item) => {
        let changeText = `Methods: ${item.oldMethods} &rarr; ${item.newMethods}`;
        if (item.oldType !== item.newType) {
          changeText += ` | Type: ${item.oldType} &rarr; ${item.newType}`;
        }

        html += `
                    <div class="whats-new-item">
                        <span class="whats-new-badge badge-changed">Mod</span>
                        <strong>${escapeHtml(item.name)}</strong>
                        <span style="font-size:0.8em">${changeText}</span>
                    </div>`;
      });
      html += "</div>";
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
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

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
    overlay.classList.add("active");

    function close() {
      overlay.classList.remove("active");
      setTimeout(() => overlay.remove(), 300);
    }

    overlay.querySelector("#modalCloseBtn").addEventListener("click", close);
    overlay.querySelector("#modalActionBtn").addEventListener("click", close);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });
  }

  function escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
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
    const hasMojoSupport =
      typeof MojoInterfaceInterceptor !== "undefined" ||
      (typeof Mojo !== "undefined" && Mojo.bindInterface);

    // Priority Check: Detection Failed
    // We warn if Mojo is missing, regardless of whether bindings provided interface definitions.
    // Users can dismiss this for the session to view traffic logs/dumps in read-only mode.
    if (!hasMojoSupport && !sessionStorage.getItem("mojo_warning_dismissed")) {
      createModal("⚠️ Mojo Setup Required", ENABLE_GUIDE_HTML);

      // Hook up dismissal
      const activeModal = document.querySelector(".modal-overlay.active");
      if (activeModal) {
        const dismiss = () =>
          sessionStorage.setItem("mojo_warning_dismissed", "true");
        const closeBtn = activeModal.querySelector("#modalCloseBtn");
        const actionBtn = activeModal.querySelector("#modalActionBtn");
        if (closeBtn) closeBtn.addEventListener("click", dismiss);
        if (actionBtn) {
          actionBtn.textContent = "Continue Read-Only";
          actionBtn.addEventListener("click", dismiss);
        }
      }
      return; // Blocking modal, stop here
    }

    // 2. Check Version Tracker
    if (window.VersionTracker) {
      const updates = window.VersionTracker.checkUpdates(
        interfaces || [],
        browserVersion,
      );

      if (updates) {
        if (updates.isFirstVisit) {
          // Dynamic Welcome
          createModal(
            "👋 Welcome to MojoGUI",
            getWelcomeHtml(interfaces, browserVersion),
          );
        } else if (updates.added || updates.changed || updates.removed) {
          createModal("⚡ What's New", buildWhatsNewHtml(updates));
        }
      }
    }
  }

  return {
    init: init,
  };
})();

window.WelcomeManager = WelcomeManager;
