/**
 * MojoGUI Tools Panel
 * Handles the "Workbench" tab for raw Mojo operations
 */
(function () {
  "use strict";

  const ToolsPanel = {
    init() {
      this.bindTabs();
      this.renderTools();
    },

    bindTabs() {
      const tabs = document.querySelectorAll(".sidebar-tab");
      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          const target = tab.dataset.tab;

          // Update Buttons
          tabs.forEach((t) =>
            t.classList.toggle("active", t.dataset.tab === target),
          );

          // Update Visibility using hidden/block style or classes
          // My CSS defines sidebar-tab-content.active { display: flex }
          // But I need to toggle it on DOM elements.
          const contents = document.querySelectorAll(".sidebar-tab-content");
          contents.forEach((c) => {
            if (c.id === `tab-${target}`) {
              c.style.display = "flex";
              c.classList.add("active");
            } else {
              c.style.display = "none";
              c.classList.remove("active");
            }
          });
        });
      });
    },

    renderTools() {
      const container = document.querySelector(".tools-container");
      if (!container) return;

      container.innerHTML = `
                <!-- Message Pipe Tool -->
                <div class="tool-card">
                    <h4>🔌 Message Pipe</h4>
                    <div class="desc">Create a raw message pipe pair (MP).</div>
                    <button class="btn btn-secondary btn-small" onclick="window.ToolsPanel.createMessagePipe()">Create New Pair</button>
                    <div id="mp-result" class="code-block" style="display:none; margin-top: 8px; font-size: 0.75rem; max-height: 100px;"></div>
                </div>

                <!-- Data Pipe Tool -->
                <div class="tool-card">
                    <h4>📦 Data Pipe</h4>
                    <div class="desc">Create a raw data pipe (DP) for bulk data.</div>
                    <div class="form-group">
                        <input type="number" id="dp-capacity" placeholder="Capacity (bytes)" value="65536" style="font-size: 0.8rem; padding: 4px;">
                    </div>
                    <button class="btn btn-secondary btn-small" onclick="window.ToolsPanel.createDataPipe()">Create DP Pair</button>
                    <div id="dp-result" class="code-block" style="display:none; margin-top: 8px; font-size: 0.75rem; max-height: 100px;"></div>
                </div>

                <!-- Mock Listener Tool -->
                <div class="tool-card">
                    <h4>👂 Mock Listener</h4>
                    <div class="desc">Create a sink handle for an interface.</div>
                    <div class="form-group">
                        <input type="text" id="mock-iface" placeholder="Interface Name (e.g. blink.mojom.Foo)" style="font-size: 0.8rem; padding: 4px;">
                    </div>
                    <button class="btn btn-secondary btn-small" onclick="window.ToolsPanel.createMockListener()">Bind Listener</button>
                    <div id="mock-result" class="code-block" style="display:none; margin-top: 8px; font-size: 0.75rem; max-height: 100px;"></div>
                </div>

                <!-- Data Pipe Reader/Writer -->
                <div class="tool-card">
                    <h4>📝 Data Pipe IO</h4>
                    <div class="desc">Read/Write to raw handles.</div>
                    
                    <!-- Read -->
                    <div style="border-top: 1px solid var(--border-subtle); margin: 8px 0; padding-top: 8px;">
                        <label style="font-size:0.75rem; font-weight:600; margin-bottom:4px; display:block;">Read (Consumer)</label>
                        <div style="display:flex; gap:4px; margin-bottom: 4px;">
                            <select id="io-read-handle" style="flex:1; font-size: 0.8rem; padding: 2px;">
                                <option value="" disabled selected>Handle...</option>
                            </select>
                            <button class="btn btn-icon btn-small" onclick="window.ToolsPanel.refreshHandles('io-read-handle')">🔄</button>
                        </div>
                        <div style="display:flex; gap:4px;">
                             <select id="io-read-encoding" style="width: 80px; font-size: 0.8rem;">
                                 <option value="utf8">UTF-8</option>
                                 <option value="hex">Hex</option>
                                 <option value="base64">Base64</option>
                             </select>
                             <button class="btn btn-primary btn-small" style="flex:1;" onclick="window.ToolsPanel.readPipe()">Read</button>
                        </div>
                        <div id="io-read-output" class="code-block" style="display:none; margin-top: 4px; font-size: 0.75rem; max-height: 100px;"></div>
                    </div>

                    <!-- Write -->
                    <div style="border-top: 1px solid var(--border-subtle); margin: 8px 0; padding-top: 8px;">
                        <label style="font-size:0.75rem; font-weight:600; margin-bottom:4px; display:block;">Write (Producer)</label>
                         <div style="display:flex; gap:4px; margin-bottom: 4px;">
                            <select id="io-write-handle" style="flex:1; font-size: 0.8rem; padding: 2px;">
                                <option value="" disabled selected>Handle...</option>
                            </select>
                            <button class="btn btn-icon btn-small" onclick="window.ToolsPanel.refreshHandles('io-write-handle')">🔄</button>
                        </div>
                        <input type="text" id="io-write-data" placeholder="Data to write..." style="width:100%; margin-bottom:4px; font-size:0.8rem; padding:4px; background:var(--bg-dark); border:1px solid var(--border-subtle); color:white;">
                        <button class="btn btn-primary btn-small" style="width:100%;" onclick="window.ToolsPanel.writePipe()">Write</button>
                         <div id="io-write-output" class="code-block" style="display:none; margin-top: 4px; font-size: 0.75rem;"></div>
                    </div>
                </div>
            `;

      // Initial populate
      this.refreshHandles("io-read-handle");
      this.refreshHandles("io-write-handle");
    },

    // API Wrappers
    async createMessagePipe() {
      const res = window.MojoGUI_API.createMessagePipe();
      this.showResult("mp-result", res);
      this.refreshAllHandles();
    },

    async createDataPipe() {
      const cap =
        parseInt(document.getElementById("dp-capacity").value) || 65536;
      const res = window.MojoGUI_API.createDataPipe({ capacityNumBytes: cap });
      this.showResult("dp-result", res);
      this.refreshAllHandles();
    },

    async createMockListener() {
      const name = document.getElementById("mock-iface").value;
      if (!name) return showToast("Enter interface name", "warning");

      try {
        const res = await window.MojoGUI_API.bindMockListener(name);
        this.showResult("mock-result", res);
        this.refreshAllHandles();
      } catch (e) {
        this.showResult("mock-result", { error: e.message });
      }
    },

    refreshHandles(domId) {
      const sel = document.getElementById(domId);
      if (sel && window.renderHandleOptions) {
        const current = sel.value;
        sel.innerHTML =
          '<option value="" disabled>Select handle...</option>' +
          window.renderHandleOptions();
        if (current) sel.value = current;
      }
    },

    refreshAllHandles() {
      this.refreshHandles("io-read-handle");
      this.refreshHandles("io-write-handle");
    },

    readPipe() {
      const id = document.getElementById("io-read-handle").value;
      const enc = document.getElementById("io-read-encoding").value;
      if (!id) return;

      const res = window.MojoGUI_API.readDataPipe(id, enc);
      this.showResult("io-read-output", res);
    },

    async writePipe() {
      const id = document.getElementById("io-write-handle").value;
      const data = document.getElementById("io-write-data").value;
      if (!id) return;

      // Writing is usually sync in our shim, but let's treat as async if needed
      // Actually app.js interceptor implementation is synchronous for writeDataPipe (wait, let's check app.js/API)
      // API shim in app.js? No, it's injected by MCP server logic?
      // Wait, I am writing 'js/tools_panel.js' which runs in the BROWSER.
      // Does window.MojoGUI_API exist in the browser?
      // YES, I saw it in `mcp-server/src/index.js` injecting it?
      // NO. `mcp-server` injects code to RUN in the browser.
      // BUT `js/app.js` runs in the browser.
      // Does `js/app.js` EXPOSE `window.MojoGUI_API`?
      // I need to check `js/app.js` to see if it exposes these methods globally.

      // ... Checking my memory of `js/app.js` ...
      // In `js/app.js` I saw `window.MojoGUI_API = { ... }` being defined inside `(function(){ ... })()`?
      // Or was it defined globally?
      // Most likely it was defined for the MCP server to use.
      // If not, I need to IMPLEMENT these methods in `js/tools_panel.js` or `js/app.js`.

      // Let's assume for now I need to implement them or verify they exist.
      // My previous view of `js/app.js` showed `window.MojoGUI_API` being used/defined.
      // IF strictly defined inside the IIFE, I can't see it.

      // Strategy: I will rely on `window.MojoGUI_API` being available.
      // If it's not, I'll fix `app.js` to expose it.

      // Back to writing:
      // The API `write_data_pipe` tool in MCP server uses `MojoHandleRegistry` directly.
      // So I should do the same here if API isn't exposed.

      // ACTUALLY, checking the `mcp-server/src/index.js`...
      // It calls `window.MojoGUI_API.createDataPipe`.
      // This implies `window.MojoGUI_API` IS exposed in the browser context.
    },

    // Re-implement write locally just in case, or use API
    async writePipeReal() {
      const id = document.getElementById("io-write-handle").value;
      const data = document.getElementById("io-write-data").value;
      if (!id) return;

      if (window.MojoGUI_API && window.MojoGUI_API.writeDataPipe) {
        // writeDataPipe not yet in API?
        // Checked mcp-server... it injects code that uses `MojoHandleRegistry` directly for write_data_pipe tool!
        // BUT `createDataPipe` used `MojoGUI_API`.
        // So `MojoGUI_API` expects to be there.

        // I should check if `writeDataPipe` is on `MojoGUI_API`.
        // If not, I'll implement it here using `MojoHandleRegistry`.

        const handle = window.MojoHandleRegistry.get(id);
        if (!handle) {
          this.showResult("io-write-output", { error: "Handle not found" });
          return;
        }

        try {
          const encoder = new TextEncoder();
          const buffer = encoder.encode(data);
          const result = handle.writeData(buffer);
          this.showResult("io-write-output", {
            success: true,
            bytes: buffer.length,
            result,
          });
        } catch (e) {
          this.showResult("io-write-output", { error: e.message });
        }
      }
    },

    showResult(domId, res) {
      const el = document.getElementById(domId);
      el.style.display = "block";
      el.textContent = JSON.stringify(res, null, 2);
    },
  };

  // Fix write method binding
  ToolsPanel.writePipe = ToolsPanel.writePipeReal;

  window.ToolsPanel = ToolsPanel;

  // Auto Init if DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => ToolsPanel.init());
  } else {
    ToolsPanel.init();
  }
})();
