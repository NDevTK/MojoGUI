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

          if (target === "tools") {
            this.refreshAllDropdowns();
          }
        });
      });

      // Hook into registries for automatic updates
      if (window.MojoHandleRegistry) {
        const originalUpdate = window.MojoHandleRegistry.onupdate;
        window.MojoHandleRegistry.onupdate = (id, h) => {
          if (typeof originalUpdate === "function") originalUpdate(id, h);
          this.refreshHandleDropdowns();
        };
      }

      if (window.MojoObjectRegistry) {
        const originalUpdate = window.MojoObjectRegistry.onupdate;
        window.MojoObjectRegistry.onupdate = (id, o) => {
          if (typeof originalUpdate === "function") originalUpdate(id, o);
          this.refreshObjectDropdowns();
        };
      }
    },

    renderTools() {
      const container = document.querySelector(".tools-container");
      if (!container) return;

      const safe = window.safeHTML || ((s) => s);

      container.innerHTML = safe(`
                <!-- Object Inspector -->
                <div class="tool-card section-card">
                    <h4 style="color: var(--accent);">🧩 Object Inspector</h4>
                    <div class="desc">View properties and methods of registered objects.</div>
                    <div class="form-group">
                        <select id="inspect-object-select" style="width: 100%;" onchange="window.ToolsPanel.inspectSelectedObject(this.value)">
                            <option value="" disabled selected>Select an object...</option>
                        </select>
                    </div>
                    <div id="inspect-result" class="code-block" style="display:none; margin-top: 8px; font-size: 0.75rem; max-height: 200px; overflow: auto; background: var(--bg-dark);"></div>
                </div>

                <!-- Message Pipe Tool -->
                <div class="tool-card">
                    <h4>🔌 Message Pipe</h4>
                    <div class="desc">Create a raw message pipe pair (MP).</div>
                    <button class="btn btn-secondary btn-small" style="width: 100%;" onclick="window.ToolsPanel.createMessagePipe()">Create New Pair</button>
                    <div id="mp-result" class="code-block" style="display:none; margin-top: 8px; font-size: 0.75rem;"></div>
                </div>

                <!-- Data Pipe Tool -->
                <div class="tool-card">
                    <h4>📦 Data Pipe</h4>
                    <div class="desc">Create a raw data pipe (DP) for bulk data.</div>
                    <div style="display: flex; gap: 8px; margin-bottom: 8px;">
                        <input type="number" id="dp-capacity" placeholder="Capacity" value="65536" style="flex: 1; font-size: 0.8rem; padding: 4px; background: var(--bg-input); border: 1px solid var(--border-subtle); color: white;">
                        <button class="btn btn-secondary btn-small" onclick="window.ToolsPanel.createDataPipe()">Create DP</button>
                    </div>
                    <div id="dp-result" class="code-block" style="display:none; font-size: 0.75rem;"></div>
                </div>

                <!-- Mock Listener Tool -->
                <div class="tool-card">
                    <h4>👂 Mock Listener</h4>
                    <div class="desc">Create a sink handle for an interface.</div>
                    <div class="form-group" style="margin-bottom: 8px;">
                        <select id="mock-iface-select" style="width: 100%;">
                            <option value="" disabled selected>Select Interface...</option>
                            ${this.renderInterfaceOptions()}
                        </select>
                    </div>
                    <button class="btn btn-secondary btn-small" style="width: 100%;" onclick="window.ToolsPanel.createMockListener()">Bind Listener</button>
                    <div id="mock-result" class="code-block" style="display:none; margin-top: 8px; font-size: 0.75rem;"></div>
                </div>

                <!-- Data Pipe Reader/Writer -->
                <div class="tool-card">
                    <h4>📝 Data Pipe IO</h4>
                    <div class="desc">Read/Write to raw handles.</div>
                    
                    <!-- Read -->
                    <div style="border-top: 1px solid var(--border-subtle); margin: 12px 0 8px 0; padding-top: 12px;">
                        <label style="font-size:0.7rem; font-weight:600; color:var(--text-muted); text-transform:uppercase; margin-bottom:6px; display:block;">Read (Consumer)</label>
                        <div style="display:flex; gap:6px; margin-bottom: 6px;">
                            <select id="io-read-handle" style="flex:1; font-size: 0.8rem;">
                                <option value="" disabled selected>Handle...</option>
                            </select>
                            <select id="io-read-encoding" style="width: 70px; font-size: 0.8rem;">
                                 <option value="utf8">UTF-8</option>
                                 <option value="hex">Hex</option>
                                 <option value="base64">B64</option>
                             </select>
                        </div>
                        <button class="btn btn-primary btn-small" style="width: 100%;" onclick="window.ToolsPanel.readPipe()">Read from Pipe</button>
                        <div id="io-read-output" class="code-block" style="display:none; margin-top: 8px; font-size: 0.75rem; max-height: 100px;"></div>
                    </div>

                    <!-- Write -->
                    <div style="border-top: 1px solid var(--border-subtle); margin: 12px 0 0 0; padding-top: 12px;">
                        <label style="font-size:0.7rem; font-weight:600; color:var(--text-muted); text-transform:uppercase; margin-bottom:6px; display:block;">Write (Producer)</label>
                        <div style="margin-bottom: 6px;">
                            <select id="io-write-handle" style="width: 100%; font-size: 0.8rem; margin-bottom: 6px;">
                                <option value="" disabled selected>Handle...</option>
                            </select>
                            <textarea id="io-write-data" placeholder="Data to write..." style="width:100%; height: 60px; font-size:0.8rem; padding:6px; background:var(--bg-input); border:1px solid var(--border-subtle); color:white; border-radius: 4px; resize: vertical;"></textarea>
                        </div>
                        <button class="btn btn-primary btn-small" style="width:100%;" onclick="window.ToolsPanel.writePipe()">Write to Pipe</button>
                         <div id="io-write-output" class="code-block" style="display:none; margin-top: 8px; font-size: 0.75rem;"></div>
                    </div>
                </div>
            `);

      this.refreshAllDropdowns();
    },

    renderInterfaceOptions() {
      if (!window.MojoGUI_API) return "";
      // We can't await here synchronously in render, so we assume loadInterfaces was called by app.js
      // We'll populate it via refresh if needed, but for now, use what's in state if available
      // Actually, we'll just use a placeholder and populate it in refreshAllDropdowns
      return '<option value="" disabled>Loading interfaces...</option>';
    },

    refreshAllDropdowns() {
      this.refreshHandleDropdowns();
      this.refreshObjectDropdowns();
      this.refreshInterfaceDropdowns();
    },

    refreshHandleDropdowns() {
      const ids = ["io-read-handle", "io-write-handle"];
      ids.forEach((id) => {
        const sel = document.getElementById(id);
        const safe = window.safeHTML || ((s) => s);
        if (sel && window.renderHandleOptions) {
          const current = sel.value;
          sel.innerHTML = safe(window.renderHandleOptions());
          if (current) sel.value = current;
        }
      });
    },

    refreshObjectDropdowns() {
      const sel = document.getElementById("inspect-object-select");
      const safe = window.safeHTML || ((s) => s);
      if (sel && window.renderRegistryOptions) {
        const current = sel.value;
        sel.innerHTML = safe(window.renderRegistryOptions());
        if (current) sel.value = current;
      }
    },

    async refreshInterfaceDropdowns() {
      const sel = document.getElementById("mock-iface-select");
      if (!sel || !window.MojoGUI_API) return;

      const safe = window.safeHTML || ((s) => s);
      const current = sel.value;
      const interfaces = await window.MojoGUI_API.getInterfaces();
      const options = interfaces
        .map((i) => {
          const fqn = i.module + "." + i.name;
          return `<option value="${fqn}">${fqn}</option>`;
        })
        .sort()
        .join("");

      sel.innerHTML = safe(
        '<option value="" disabled ' +
          (current ? "" : "selected") +
          ">Select Interface...</option>" +
          options,
      );
      if (current) sel.value = current;
    },

    async inspectSelectedObject(id) {
      if (!id || !window.MojoGUI_API.inspectObject) return;
      const res = await window.MojoGUI_API.inspectObject(id);
      this.showResult("inspect-result", res);
    },

    async createMessagePipe() {
      const res = await window.MojoGUI_API.createMessagePipe();
      this.showResult("mp-result", res);
      // Registry onupdate handles dropdowns
    },

    async createDataPipe() {
      const cap =
        parseInt(document.getElementById("dp-capacity").value) || 65536;
      const res = await window.MojoGUI_API.createDataPipe({
        capacityNumBytes: cap,
      });
      this.showResult("dp-result", res);
    },

    async createMockListener() {
      const sel = document.getElementById("mock-iface-select");
      const name = sel.value;
      if (!name) return window.showToast("Select an interface", "warning");

      try {
        const res = await window.MojoGUI_API.bindMockListener(name);
        this.showResult("mock-result", res);
      } catch (e) {
        this.showResult("mock-result", { error: e.message });
      }
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
        const res = await window.MojoGUI_API.writeDataPipe(id, data);
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
