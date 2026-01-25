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

      const safe = window.safeHTML || ((s) => s);

      container.innerHTML = safe(`
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
            `);

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
      const safe = window.safeHTML || ((s) => s);
      if (sel && window.renderHandleOptions) {
        const current = sel.value;
        sel.innerHTML = safe(
          '<option value="" disabled>Select handle...</option>' +
            window.renderHandleOptions(),
        );
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

      if (window.MojoGUI_API && window.MojoGUI_API.writeDataPipe) {
        const res = window.MojoGUI_API.writeDataPipe(id, data);
        this.showResult("io-write-output", res);
      } else {
        // Fallback to direct handle manipulation if API is unavailable
        try {
          const handle = window.MojoHandleRegistry.get(id);
          if (!handle) {
            this.showResult("io-write-output", { error: "Handle not found" });
            return;
          }
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

  window.ToolsPanel = ToolsPanel;

  // Auto Init if DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => ToolsPanel.init());
  } else {
    ToolsPanel.init();
  }
})();
