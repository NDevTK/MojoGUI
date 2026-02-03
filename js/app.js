/**
 * MojoJS Security Research GUI
 * Main Application Logic
 */

(function () {
  "use strict";

  // State Management
  // (Initialized in MojoUtils.js)
  const state = window.MojoGUI_State;

  const {
    renderInput,
    addArrayItem,
    removeArrayItem,
    reindexArrayItems,
    updateContainerCount,
    parseInputValue,
    collectFormData,
    getInterceptorFormValues,
    convertParamsObjectToArray,
    renderInterceptorForm,
  } = InputRendererService;

  const {
    toggleInterceptFromLog,
    clearActivityLog,
    showInterceptorPanel,
    addActivityRow,
    updateActivityRow,
    showInterceptDetails,
    resumeIntercept,
    replayIntercept,
  } = TrafficUIService;

  // escapeHtml now provided by MojoUtils/global

  // ========================================
  // Utilities & Security Policies
  // ========================================
  const {
    safeHTML,
    safeStringify,
    safeParse,
    escapeHtml,
    sanitizeKeys,
    reconcileKeys,
  } = MojoUtils;

  // ========================================
  // DOM Elements
  // ========================================
  const elements = {
    // Status
    mojoStatus: document.getElementById("mojoStatus"),

    // Search & List
    interfaceSearch: document.getElementById("interfaceSearch"),
    interfaceList: document.getElementById("interfaceList"),
    interfaceCount: document.getElementById("interfaceCount"),

    // Interface Panel
    selectedInterfaceName: document.getElementById("selectedInterfaceName"),
    selectedModule: document.getElementById("selectedModule"),
    methodsList: document.getElementById("methodsList"),

    // Params Panel
    selectedMethodName: document.getElementById("selectedMethodName"),
    paramsForm: document.getElementById("paramsForm"),
    resetBtn: document.getElementById("resetBtn"),

    // Code Panel
    generatedCode: document.getElementById("generatedCode"),
    copyBtn: document.getElementById("copyBtn"),
    executeBtn: document.getElementById("executeBtn"),

    // Toast
    toastContainer: document.getElementById("toastContainer"),

    // Interceptor
    interceptToggleBtn: document.getElementById("interceptToggleBtn"),
    interceptStatusDot: document.getElementById("interceptStatusDot"),
    noScrambleToggle: document.getElementById("noScrambleToggle"),
    viewTrafficBtn: document.getElementById("viewTrafficBtn"),
    trafficBadge: document.getElementById("trafficBadge"),
    interceptorPanel: document.getElementById("interceptorPanel"),
    interceptorTableBody: document.getElementById("interceptorTableBody"),
    interceptorDetails: document.getElementById("interceptorDetails"),
    codeContainer: document.getElementById("codeContainer"),
    // resultsSection duplicate in original, keeping last

    clearActivityBtn: document.getElementById("clearActivityBtn"),

    // New UI Elements
    closeInterceptorBtn: document.getElementById("closeInterceptorBtn"),
    interfacePanel: document.getElementById("interfacePanel"),
    paramsPanel: document.getElementById("paramsPanel"),
  };
  window.MojoGUI_Elements = elements;

  // ========================================
  // Initialization
  // ========================================
  async function init() {
    checkMojoAvailability();

    // Pre-load core base bindings to prevent stub pollution
    // Pre-load core base bindings to prevent stub pollution
    if (typeof MojoLoader !== "undefined") {
      try {
        console.log("[MojoGUI] Pre-loading core base bindings...");
        // Use Promise.all to load them in parallel
        await Promise.all([
          MojoLoader.loadBinding("mojo_public_mojom_base_string16.mojom.js"),
          MojoLoader.loadBinding("url_mojom_url.mojom.js"),
          MojoLoader.loadBinding("mojo_public_mojom_base_time.mojom.js"),
          MojoLoader.loadBinding("skia_public_mojom_bitmap.mojom.js"),
        ]);
        console.log("[MojoGUI] Core base bindings loaded.");
      } catch (e) {
        console.warn("[MojoGUI] Failed to pre-load some core bindings:", e);
      }
    }

    // Version Extraction for Scrambler
    if (navigator.userAgentData) {
      try {
        const ua = await navigator.userAgentData.getHighEntropyValues([
          "fullVersionList",
        ]);
        const ver = ua.fullVersionList.find(
          (v) => v.brand === "Google Chrome" || v.brand === "Chromium",
        );
        if (ver) {
          window.mojoVersion = ver.version;
          console.log("[MojoGUI] Detected Chrome Version:", window.mojoVersion);
        }
      } catch (e) {
        console.warn("[MojoGUI] Failed to get version:", e);
      }
    }

    await loadInterfaces();
    if (window.MojoLoader) {
      window.MojoLoader.init(state.interfaces);
    }

    // Initialize Welcome/Update Manager
    let trackerVersion = window.mojoVersion;
    if (typeof MojoLoader !== "undefined" && MojoLoader.getMetadata) {
      const meta = MojoLoader.getMetadata();
      if (meta && meta.version) {
        trackerVersion = meta.version;
        console.log("[MojoGUI] Bindings Version:", trackerVersion);
      }
    }

    if (window.WelcomeManager) {
      WelcomeManager.init(state.interfaces, safeHTML, trackerVersion);
    }

    if (window.ToolsPanel) {
      ToolsPanel.init();
    }

    setupEventListeners();
    renderSearchFilters();
  }

  function checkMojoAvailability() {
    // Check for both legacy (Mojo) and standard (mojo) namespaces
    state.mojoAvailable =
      (typeof Mojo !== "undefined" && Mojo.bindInterface) ||
      (typeof mojo !== "undefined" && mojo.bindInterface);

    const statusEl = elements.mojoStatus;
    const statusText = statusEl.querySelector(".status-text");

    if (state.mojoAvailable) {
      statusEl.classList.add("connected");
      statusEl.classList.remove("error");
      statusText.textContent = "MojoJS Enabled";
      elements.interceptToggleBtn.disabled = false;
    } else {
      statusEl.classList.add("error");
      statusEl.classList.remove("connected");
      statusEl.querySelector(".status-text").textContent = "MojoJS Disabled";
      elements.interceptToggleBtn.disabled = true;
    }
  }

  async function loadInterfaces() {
    try {
      // Try to load from bindings index
      if (typeof MojoLoader !== "undefined") {
        const interfaces = await MojoLoader.getInterfaces();
        if (interfaces && interfaces.length > 0) {
          state.interfaces = interfaces;

          // Pre-compute search fields for performance
          state.interfaces.forEach((iface) => {
            iface._lowerName = iface.name.toLowerCase();
            iface._lowerModule = iface.module.toLowerCase();
            iface._lowerMethods = iface.methods
              ? iface.methods.map((m) =>
                  (typeof m === "string" ? m : m.name).toLowerCase(),
                )
              : [];
          });

          if (typeof MojoLoader !== "undefined") MojoLoader.init(interfaces);
          renderInterfaceList(interfaces);
          // AUTO-MONITOR ALL (Quietly)
          setTimeout(() => toggleMonitorAll(true), 100);
          return;
        }
      }
    } catch (error) {
      console.error("Error loading interfaces:", error);
    }
  }

  // ========================================
  // Mojo Loader Service
  // ========================================
  // Now provided by js/core/MojoLoader.js
  const MojoLoader = window.MojoLoader;

  // ========================================
  // Event Listeners
  // ========================================
  function setupEventListeners() {
    // Global Keyboard Shortcuts
    document.addEventListener("keydown", (e) => {
      // Focus Search (/)
      if (
        e.key === "/" &&
        !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)
      ) {
        e.preventDefault();
        elements.interfaceSearch.focus();
      }
    });

    // Search
    elements.interfaceSearch.addEventListener(
      "input",
      MojoUtils.debounce(handleSearch, 300),
    );

    // Interface List Delegation
    elements.interfaceList.addEventListener("click", (e) => {
      const item = e.target.closest(".interface-item");
      if (item) {
        selectInterface(item.dataset.name, item.dataset.module);
      }
    });

    elements.interfaceList.addEventListener("keydown", (e) => {
      const item = e.target.closest(".interface-item");
      if (item && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        selectInterface(item.dataset.name, item.dataset.module);
      }
    });

    // Methods List Delegation
    elements.methodsList.addEventListener("click", (e) => {
      const item = e.target.closest(".method-item");
      if (item) {
        selectMethod(item.dataset.method);
      }
    });

    elements.methodsList.addEventListener("keydown", (e) => {
      const item = e.target.closest(".method-item");
      if (item && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        selectMethod(item.dataset.method);
      }
    });

    // Copy button
    elements.copyBtn.addEventListener("click", copyCode);

    // Execute button
    elements.executeBtn.addEventListener("click", executeCode);

    // Reset button
    elements.resetBtn.addEventListener("click", resetParams);

    // Manual Params Form Delegation (Unified State Management)
    if (elements.paramsForm) {
      const handleParamChange = (e) => {
        const input = e.target;
        if (input.matches("input, textarea, select")) {
          // Re-collect entire form to ensure deep structure (Arrays/Maps) is synced
          state.paramValues = collectFormData(elements.paramsForm, false);
          updateGeneratedCode();
        }
      };
      elements.paramsForm.addEventListener("input", handleParamChange);

      // Initialize Delegated Events for dynamic buttons (Add/Remove items, etc)
      // Bind to document.body to ensure it works for dynamic panels (Traffic Log, etc.)
      if (window.InputRendererService && window.InputRendererService.init) {
        InputRendererService.init(document.body);
      }
      elements.paramsForm.addEventListener("change", (e) => {
        const target = e.target;
        // Target Configuration Handlers (Delegated)
        if (target.name === "targetType") {
          window.updateTargetType(target.value);
          return;
        }
        if (target.id === "targetObjectId") {
          window.updateTargetObjectId(target.value);
          return;
        }
        if (target.id === "associatedInterfaceToggle") {
          window.updateIsAssociated(target.checked);
          return;
        }
        if (target.id === "masterHandleInput") {
          window.updateMasterHandle(target.value);
          return;
        }
        // Interface ID is oninput usually, but change is fine too
      });

      elements.paramsForm.addEventListener("input", (e) => {
        const target = e.target;
        if (target.id === "interfaceIdInput") {
          window.updateInterfaceId(target.value);
          return;
        }
      });

      // Existing Generic Handler
      elements.paramsForm.addEventListener("input", handleParamChange);
      elements.paramsForm.addEventListener("change", handleParamChange);
    }

    // Registry for lazy-loaded array templates
    window.MojoTemplateRegistry = {};

    // Interceptor
    elements.interceptToggleBtn.addEventListener("click", toggleInterceptor);
    elements.clearActivityBtn?.addEventListener("click", clearActivityLog);

    // No Scramble Toggle
    if (elements.noScrambleToggle) {
      elements.noScrambleToggle.checked = !!window.mojoNoScramble;
      elements.noScrambleToggle.addEventListener("change", (e) => {
        window.mojoNoScramble = e.target.checked;
        showToast(
          "No Scramble set to " + (e.target.checked ? "ON" : "OFF"),
          "info",
        );
      });
    }

    // Automatic Registry Dropdown Updates
    if (window.MojoHandleRegistry) {
      const originalUpdate = window.MojoHandleRegistry.onupdate;
      window.MojoHandleRegistry.onupdate = (id, h) => {
        if (typeof originalUpdate === "function") originalUpdate(id, h);
        const masterInput = document.getElementById("masterHandleInput");
        if (masterInput) {
          const currentVal = masterInput.value;
          masterInput.innerHTML = safeHTML(
            '<option value="" disabled ' +
              (!currentVal ? "selected" : "") +
              ">Select a master handle...</option>" +
              window.renderHandleOptions(),
          );
          if (currentVal) masterInput.value = currentVal;
        }
      };
    }

    if (window.MojoObjectRegistry) {
      const originalUpdate = window.MojoObjectRegistry.onupdate;
      window.MojoObjectRegistry.onupdate = (id, o) => {
        if (typeof originalUpdate === "function") originalUpdate(id, o);
        const select = document.getElementById("targetObjectId");
        if (select && select.tagName === "SELECT") {
          const currentVal = select.value || state.targetObjectId;
          select.innerHTML = safeHTML(
            '<option value="" disabled ' +
              (!currentVal ? "selected" : "") +
              ">Select an object...</option>" +
              window.renderRegistryOptions(
                state.selectedInterface
                  ? state.selectedInterface.module +
                      "." +
                      state.selectedInterface.name
                  : null,
                state.targetObjectId,
              ),
          );
          if (currentVal) select.value = currentVal;
        }
      };
    }

    // Intercept Responses Toggle
    elements.interceptRespToggle = document.getElementById(
      "interceptRespToggle",
    );
    if (elements.interceptRespToggle) {
      elements.interceptRespToggle.checked = state.interceptResponses || false;
      elements.interceptRespToggle.addEventListener("change", (e) => {
        state.interceptResponses = e.target.checked;
        showToast(
          state.interceptResponses
            ? "Response Interception Enabled"
            : "Response Interception Disabled",
        );
      });
    }

    // Traffic Events
    window.addEventListener("mojo-protocol-ready", (e) => {
      const { interface: iface } = e.detail;
      showToast(`Protocol Synchronized for ${iface}`, "success");

      // Update UI if the current interface list is showing this interface
      const items = elements.interfaceList.querySelectorAll(
        `[data-name="${iface}"]`,
      );
      items.forEach((item) => {
        if (!item.querySelector(".sync-badge")) {
          const badge = document.createElement("span");
          badge.className = "sync-badge";
          badge.title = "Protocol Synchronized";
          badge.innerHTML = safeHTML("✓");
          item.appendChild(badge);
        }
      });
    });

    // Traffic View
    if (elements.viewTrafficBtn) {
      elements.viewTrafficBtn.addEventListener("click", () =>
        showInterceptorPanel(!state.panelVisible),
      );
    }

    if (elements.closeInterceptorBtn) {
      elements.closeInterceptorBtn.addEventListener("click", () =>
        showInterceptorPanel(false),
      );
    }

    // Global functions for inline handlers
    window.resumeIntercept = resumeIntercept;
    window.addEventListener("mojo-intercept", handleMojoIntercept);
    window.addEventListener("mojo-response", handleMojoResponse);
    window.addEventListener(
      "mojo-response-intercept",
      handleMojoResponseIntercept,
    );
    window.addEventListener("mojo-error", handleMojoError);
    window.switchToInterceptMode = switchToInterceptMode;

    // Fix for ClipboardHost Freeze (Paste Deadlock)
    window.addEventListener(
      "keydown",
      (e) => {
        if (
          (e.ctrlKey || e.metaKey) &&
          (e.key === "v" || e.key === "V") &&
          InterceptorManager.isActive("ClipboardHost")
        ) {
          showToast("MojoGUI: Prevented paste deadlock (Ctrl+V)", "info");
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      },
      true, // Capture phase
    );
  }

  function toggleMonitorAll(quiet = false) {
    if (!state.mojoAvailable) {
      if (!quiet) showToast("MojoJS not available", "error");
      return;
    }

    // Monitoring is now always background/automatic by default
    let count = 0;
    state.interfaces.forEach((iface) => {
      let started = false;
      // PluginRegistry does not support async usage
      if (iface.name == "PluginRegistry") return;
      if (!InterceptorManager.isActive(iface.name)) {
        if (InterceptorManager.start(iface.name, "LOG")) started = true;
      }
      const fqn = iface.module ? `${iface.module}.${iface.name}` : null;
      if (fqn && fqn !== iface.name && !InterceptorManager.isActive(fqn)) {
        if (InterceptorManager.start(fqn, "LOG")) started = true;
      }
      if (started) count++;
    });

    if (!quiet) {
      if (count > 0)
        showToast(`Started monitoring ${count} new interfaces`, "success");
      showInterceptorPanel(true);
    } else {
      console.log(
        `[AutoMonitor] Background monitoring active for ${count} interfaces.`,
      );
    }
  }

  function switchToInterceptMode(interfaceName) {
    InterceptorManager.start(interfaceName, "INTERCEPT");
    showToast(`Switched ${interfaceName} to Intercept Mode`, "success");
    // Update UI if needed
  }

  // ========================================
  // Search Filters
  // ========================================
  function renderSearchFilters() {
    const container = document.createElement("div");
    container.className = "search-filters";
    container.style.cssText =
      "display: flex; gap: 8px; margin: 10px 0; padding: 0 5px;";

    const filters = [
      { id: "ALL", label: "All", icon: "" },
      { id: "DIRECT", label: "Direct", icon: "" },
      { id: "INTERNAL", label: "Internal", icon: "🛠️" },
      { id: "ASSOCIATED", label: "Associated", icon: "🔗" },
    ];

    state.filterType = "ALL";

    filters.forEach((f) => {
      const btn = document.createElement("button");
      btn.className = `filter-btn ${f.id === "ALL" ? "active" : ""}`;
      btn.dataset.filter = f.id;
      btn.innerHTML = safeHTML(f.icon ? `${f.icon} ${f.label}` : f.label);
      btn.style.cssText = `
                flex: 1;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                padding: 8px 10px;
                white-space: nowrap;
                background: var(--bg-secondary);
                border: 1px solid var(--border-color);
                border-radius: 4px;
                cursor: pointer;
                font-size: 0.85em;
                color: var(--text-secondary);
                transition: all 0.2s;
            `;

      btn.addEventListener("click", () => {
        // Update State
        state.filterType = f.id;

        // Update UI
        container.querySelectorAll(".filter-btn").forEach((b) => {
          b.style.background = "var(--bg-secondary)";
          b.style.color = "var(--text-secondary)";
          b.style.borderColor = "var(--border-color)";
        });
        btn.style.background = "rgba(100, 181, 246, 0.15)";
        btn.style.color = "#64b5f6";
        btn.style.borderColor = "#64b5f6";

        // Trigger Search
        // Create a fake event or just call filter logic
        const query = elements.interfaceSearch.value;
        performSearch(query);
      });

      container.appendChild(btn);
    });

    // Insert AFTER the .search-box container to avoid breaking icon positioning
    if (elements.interfaceSearch) {
      const searchBox = elements.interfaceSearch.closest(".search-box");
      if (searchBox && searchBox.parentNode) {
        // Insert after searchBox
        searchBox.parentNode.insertBefore(container, searchBox.nextSibling);

        // Add some margin to separate from the list
        container.style.marginBottom = "10px";
        container.style.padding = "0 16px"; // Match Sidebar padding
      }
    }
  }

  function handleSearch(e) {
    performSearch(e.target.value);
  }

  function performSearch(query) {
    query = query.toLowerCase();
    const filtered = state.interfaces.filter((iface) => {
      // 1. Text Match
      const matchesText =
        (iface._lowerName || iface.name.toLowerCase()).includes(query) ||
        (iface._lowerModule || iface.module.toLowerCase()).includes(query) ||
        (iface._lowerMethods
          ? iface._lowerMethods.some((m) => m.includes(query))
          : iface.methods &&
            iface.methods.some((m) =>
              (typeof m === "string" ? m : m.name)
                .toLowerCase()
                .includes(query),
            ));

      if (!matchesText) return false;

      // 2. Type Match
      if (state.filterType === "ALL") return true;

      const category = iface.metadata?.category;

      if (state.filterType === "DIRECT") return category === "direct";
      if (state.filterType === "INTERNAL") return category === "internal";
      if (state.filterType === "ASSOCIATED") return category === "associated";

      return true;
    });
    renderInterfaceList(filtered);
  }

  // ========================================
  // Rendering
  // ========================================
  function renderInterfaceList(interfaces) {
    elements.interfaceCount.textContent = interfaces.length;

    if (interfaces.length === 0) {
      elements.interfaceList.innerHTML = safeHTML(`
                <div class="empty-state small">
                    <p>No interfaces found</p>
                </div>
            `);
      return;
    }

    elements.interfaceList.innerHTML = safeHTML(
      interfaces
        .map((iface) => {
          const isSynced =
            window.MojoLearnedProtocols &&
            window.MojoLearnedProtocols.has(iface.name);

          const isAssociated = iface.metadata?.usage?.associated?.length > 0;
          const assocBadge = isAssociated
            ? '<span class="badge warning" title="Associated Interface">🔗</span>'
            : "";

          return `
            <div class="interface-item" role="button" tabindex="0" data-name="${escapeHtml(iface.name)}" data-module="${escapeHtml(iface.module)}">
                <span class="name">${escapeHtml(iface.name)} ${assocBadge}</span>
                <span class="module">${escapeHtml(iface.module)}</span>
                <span class="method-count">${iface.methods?.length || 0} methods</span>
                ${isSynced ? '<span class="sync-badge" title="Protocol Synchronized">✓</span>' : ""}
            </div>
        `;
        })
        .join(""),
    );

    // Staggered Animation
    elements.interfaceList
      .querySelectorAll(".interface-item")
      .forEach((item, index) => {
        item.style.animation = `listItemEnter 0.3s ease-out backwards`;
        item.style.animationDelay = `${Math.min(index * 0.03, 0.5)}s`; // Cap delay at 0.5s
      });
  }

  async function selectInterface(name, module) {
    // Find interface by both name and module to ensure uniqueness
    const iface = state.interfaces.find(
      (i) => i.name === name && i.module === module,
    );
    if (!iface) return;

    state.selectedInterface = iface;
    state.selectedMethod = null;
    state.paramValues = {};

    // Update UI
    elements.interfaceList
      .querySelectorAll(".interface-item")
      .forEach((item) => {
        const isActive =
          item.dataset.name === name && item.dataset.module === module;
        item.classList.toggle("active", isActive);
        if (isActive)
          item.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });

    elements.selectedInterfaceName.textContent = iface.name;
    elements.selectedModule.textContent = iface.module;

    // Auto-load the binding file
    if (iface.file && typeof MojoLoader !== "undefined") {
      try {
        elements.selectedModule.textContent = iface.module + " (loading...)";
        await MojoLoader.loadBinding(iface.file);
        elements.selectedModule.textContent = iface.module + " ✓";
        showToast(`Loaded binding: ${iface.file}`, "success");
      } catch (error) {
        console.warn("Failed to load binding file:", iface.file, error);
        elements.selectedModule.textContent =
          iface.module + " (file not found)";
      }
    }

    renderMethods(iface);
    renderParamsForm(null);
    updateGeneratedCode();

    // Fix: Update toggle button state for the new interface
    updateInterceptButtonState(
      null,
      iface.module ? `${iface.module}.${iface.name}` : iface.name,
    );

    // Auto-hide traffic log when switching interfaces
    if (state.panelVisible) {
      showInterceptorPanel(false);
    }
  }

  function renderMethods(iface) {
    if (!iface.methods || iface.methods.length === 0) {
      elements.methodsList.innerHTML = safeHTML(`
                <div class="empty-state">
                    <p>No methods available</p>
                </div>
            `);
      return;
    }

    elements.methodsList.innerHTML = safeHTML(
      iface.methods
        .map((method) => {
          const methodName = typeof method === "string" ? method : method.name;
          return `
                <div class="method-item" role="button" tabindex="0" data-method="${escapeHtml(methodName)}">
                    <span class="name">${escapeHtml(methodName)}</span>
                    <span class="returns">→</span>
                </div>
            `;
        })
        .join(""),
    );
  }

  function selectMethod(methodName) {
    state.selectedMethod = methodName;
    state.paramValues = {};

    // Update UI
    elements.methodsList.querySelectorAll(".method-item").forEach((item) => {
      item.classList.toggle("active", item.dataset.method === methodName);
    });

    elements.selectedMethodName.textContent = `${methodName}()`;

    // Get method params (demo data)
    const fqn =
      state.selectedInterface.module + "." + state.selectedInterface.name;
    const params = getMethodParams(fqn, methodName);
    renderParamsForm(params);
    updateGeneratedCode();

    elements.executeBtn.disabled = !state.mojoAvailable;
    elements.resetBtn.disabled = false;
  }

  function getMethodParams(interfaceName, methodName) {
    // Logic to prioritize current selected interface omitted for brevity as it's handled by finding proper interface name
    // But for UI "Demo Data" or defaults, we usually just need the params def.
    const def = MojoReflectionService.findMethodDefinition(
      interfaceName,
      methodName,
    );
    return def ? def.parameters : null;
  }

  function findMethodDefinition(interfaceName, methodName) {
    return MojoReflectionService.findMethodDefinition(
      interfaceName,
      methodName,
    );
  }

  function renderTargetControl() {
    if (!state.selectedMethod) return "";

    const isInstance = state.targetType === "instance";
    const isAssociated = state.isAssociated;

    return `
      <div class="target-control-group" style="margin-bottom: 20px; padding: 12px; background: var(--bg-hover); border-radius: 8px; border: 1px solid var(--border-subtle);">
          <div style="margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between;">
            <span style="font-weight: 600; font-size: 0.9em; color: var(--accent);">TARGET CONFIGURATION</span>
          </div>

          ${(() => {
            // Safety/Hint Logic
            const iface = state.selectedInterface;
            const meta = iface?.metadata?.usage;
            if (
              meta?.associated?.length > 0 &&
              (!meta.direct || meta.direct.length === 0)
            ) {
              // It's purely associated
              const parentInfo = meta.associated[0];
              return `
                    <div style="background: rgba(255, 165, 0, 0.1); border: 1px solid rgba(255, 165, 0, 0.3); border-radius: 6px; padding: 10px; margin-bottom: 15px;">
                        <div style="color: #ffb74d; font-weight: 600; font-size: 0.9em; margin-bottom: 5px;">⚠️ Associated Interface</div>
                        <div style="font-size: 0.85em; color: var(--text-main); opacity: 0.9;">
                            This interface cannot be bound directly from the browser process. It must be retrieved via a parent interface.
                        </div>
                        <div style="margin-top: 8px; font-size: 0.85em;">
                            Derived from: <code style="background: rgba(0,0,0,0.3); padding: 2px 4px; border-radius: 3px;">${escapeHtml(parentInfo)}</code>
                        </div>
                    </div>
                  `;
            }
            return "";
          })()}

          <div style="margin-bottom: 12px;">
              <div style="font-size: 0.8em; color: var(--text-muted); margin-bottom: 6px;">Receiver Type</div>
              <div style="display: flex; gap: 12px;">
                  <label class="radio-tab ${!isInstance ? "active" : ""}" style="display: flex; align-items: center; gap: 6px; cursor: pointer; padding: 6px 12px; background: var(--bg-dark); border-radius: 4px; border: 1px solid var(--border-subtle);">
                      <input type="radio" name="targetType" value="new" ${!isInstance ? "checked" : ""}>
                      <span>⚡ New Interface</span>
                  </label>
                  <label class="radio-tab ${isInstance ? "active" : ""}" style="display: flex; align-items: center; gap: 6px; cursor: pointer; padding: 6px 12px; background: var(--bg-dark); border-radius: 4px; border: 1px solid var(--border-subtle);">
                      <input type="radio" name="targetType" value="instance" ${isInstance ? "checked" : ""}>
                      <span>🧩 Existing Instance</span>
                  </label>
              </div>
          </div>
          
          <div id="instanceTargetInput" style="display: ${isInstance ? "block" : "none"}; margin-bottom: 12px; padding: 10px; background: var(--bg-input); border-radius: 6px;">
               <div class="form-group" style="margin-bottom: 0;">
                  <label style="font-size: 0.8em; display: block; margin-bottom: 4px;">Object Registry ID</label>
                  <select id="targetObjectId" class="param-input" style="width: 100%; border: 1px solid var(--border-subtle);">
                      <option value="" disabled ${!state.targetObjectId ? "selected" : ""}>Select an object...</option>
                      ${window.renderRegistryOptions ? window.renderRegistryOptions(state.selectedInterface ? state.selectedInterface.module + "." + state.selectedInterface.name : null, state.targetObjectId) : ""}
                  </select>
               </div>
          </div>

          <div class="associated-section" style="border-top: 1px solid var(--border-subtle); padding-top: 12px;">
             <label style="display: flex; align-items: center; gap: 8px; font-size: 0.9em; cursor: pointer; color: var(--text-main);">
                 <input type="checkbox" id="associatedInterfaceToggle" ${isAssociated ? "checked" : ""}>
                 <span style="font-weight: 500;">Associated Interface</span>
                 <span style="font-size: 0.8em; color: var(--text-muted); font-weight: normal;">(Multiplexing)</span>
             </label>
             
             <div id="associatedInputs" style="display: ${isAssociated ? "block" : "none"}; margin-top: 12px; padding: 10px; background: var(--bg-input); border-radius: 6px;">
                <div style="margin-bottom: 10px;">
                    <label style="display: block; font-size: 0.8em; margin-bottom: 4px; color: var(--text-muted);">Master Pipe Handle</label>
                    <select id="masterHandleInput" style="width: 100%; padding: 6px; background: var(--bg-dark); color: var(--text-main); border: 1px solid var(--border-subtle); border-radius: 4px;">
                         <option value="" disabled ${!state.masterHandleId ? "selected" : ""}>Select handle...</option>
                         ${window.renderHandleOptions ? window.renderHandleOptions() : ""}
                    </select>
                </div>
                <div>
                    <label style="display: block; font-size: 0.8em; margin-bottom: 4px; color: var(--text-muted);">Interface ID (Ordinal)</label>
                    <input type="number" id="interfaceIdInput" value="${state.interfaceId || 0}" placeholder="0" style="width: 100%; padding: 6px; background: var(--bg-dark); color: var(--text-main); border: 1px solid var(--border-subtle); border-radius: 4px;">
                </div>
             </div>
          </div>
      </div>
    `;
  }

  function renderParamsForm(params) {
    if (!params || params.length === 0) {
      elements.paramsForm.innerHTML = safeHTML(`
                    ${renderTargetControl()}
                    <p style="margin-top:10px;">This method has no parameters</p>
            `);
      return;
    }

    elements.paramsForm.innerHTML = safeHTML(
      renderTargetControl() +
        params
          .map((param) => {
            return renderInput(param, undefined, { isInterceptor: false });
          })
          .join(""),
    );

    // Initialize state from default values in DOM
    // We use a small timeout to ensure DOM is ready? No, synchronous is fine.
    state.paramValues = collectFormData(elements.paramsForm, false);
    updateGeneratedCode();
  }

  // ========================================
  // Code Generation
  // ========================================
  function updateGeneratedCode() {
    if (!state.selectedInterface) {
      elements.generatedCode.textContent =
        "// Select an interface and method to generate code";
      return;
    }

    const code = generateCode();
    // Use syntax highlighting and safeHTML
    const highlighted = highlightSyntax(code);
    elements.generatedCode.innerHTML = safeHTML(highlighted);
  }

  function generateCode(isExecution = false) {
    const iface = state.selectedInterface;
    const method = state.selectedMethod;

    if (!iface) return "// Select an interface";

    const moduleParts = iface.module.split(".");
    const namespace = moduleParts.join(".");

    let code = `// MojoJS Code for ${iface.name}${method ? "." + method : ""}\n`;
    code += `// Module: ${iface.module}\n`;
    code += `// File: ${iface.file}\n\n`;

    if (!method) {
      code += `// Step 1: Get the interface remote\n`;
      code += `// The binding file defines the interface strictly in 'mojo.internal.bindings'\n`;
      code += `const root = mojo.internal.bindings.${namespace};\n\n`;

      code += `let ${iface.name.toLowerCase()}Remote;\n`;

      // Check Metadata for Warning
      const meta = iface.metadata?.usage;
      const isAssociated =
        meta?.associated?.length > 0 &&
        (!meta.direct || meta.direct.length === 0);

      if (isAssociated) {
        code += `// ⚠️ WARNING: ${iface.name} is an ASSOCIATED INTERFACE.\n`;
        code += `// It cannot be bound directly using Mojo.bindInterface.\n`;
        code += `// You must obtain it by calling a method on a parent interface (e.g. ${meta.associated[0]}).\n`;
        code += `//\n`;
        code += `// Example Flow:\n`;
        code += `// 1. Bind Parent Interface\n`;
        code += `// 2. Call parent.Get${iface.name}(...)\n`;
        code += `// 3. Use the resulting remote.\n`;
        code += `\n`;
        code += `throw new Error("Cannot bind ${iface.name} directly - it is an associated interface.");\n`;
      } else {
        code += `if (typeof root.${iface.name}.getRemote === 'function') {\n`;
        code += `    ${iface.name.toLowerCase()}Remote = root.${iface.name}.getRemote();\n`;
        code += `} else {\n`;
        code += `    ${iface.name.toLowerCase()}Remote = new root.${iface.name}Remote();\n`;
        code += `    const receiver = ${iface.name.toLowerCase()}Remote.bindNewPipeAndPassReceiver();\n`;
        code += `    const handle = receiver.handle || receiver;\n`;
        const scope = iface.metadata?.scope || "context";
        code += `    Mojo.bindInterface("${iface.module + "." + iface.name}", handle, "${scope}");\n`;
        code += `}\n`;
      }
      code += `// Select a method to see the full call...`;
      return code;
    }

    const remoteName =
      iface.name.charAt(0).toLowerCase() + iface.name.slice(1) + "Remote";
    const methodName = method.charAt(0).toLowerCase() + method.slice(1);

    code += `// Define Root Namespace\n`;
    code += `const root = mojo.internal.bindings.${namespace};\n\n`;

    code += `// Get remote for the interface\n`;
    code += `let ${remoteName};\n`;

    if (state.targetType === "instance" && state.targetObjectId) {
      code += `// Use existing instance from Registry\n`;
      code += `const entry = window.MojoObjectRegistry.get("${state.targetObjectId}");\n`;
      code += `if (!entry || !entry.remote) throw new Error("Object ${state.targetObjectId} not found");\n`;
      code += `${remoteName} = entry.remote;\n`;
    } else if (state.isAssociated) {
      const masterHandleId =
        state.masterHandleId || "/* INSERT_MASTER_HANDLE_ID */";
      const interfaceId = state.interfaceId || "/* INSERT_INTERFACE_ID */";

      code += `// Associated Interface Binding\n`;
      code += `// Requires an existing Master Pipe Handle (e.g. from a parent interface interception)\n`;
      if (state.masterHandleId) {
        code += `const masterHandle = (typeof MojoHandleRegistry !== 'undefined') ? MojoHandleRegistry.get(${masterHandleId}) : null;\n`;
        code += `if (!masterHandle) {\n`;
        code += `    throw new Error("[MojoGUI] Master Handle ID ${masterHandleId} not found in MojoHandleRegistry. Associated interfaces require a REAL handle object.");\n`;
        code += `}\n`;
      } else {
        code += `const masterHandle = { value: /* INSERT_MASTER_HANDLE_ID */ }; // ERROR: Real handle object required\n`;
      }
      code += `const router = new mojo.internal.interfaceSupport.Router(masterHandle);\n`;
      code += `const endpoint = new mojo.internal.interfaceSupport.Endpoint(router, ${interfaceId});\n`;
      code += `${remoteName} = new root.${iface.name}Remote(endpoint);\n`;
    } else {
      code += `if (typeof root.${iface.name}.getRemote === 'function') {\n`;
      code += `    ${remoteName} = root.${iface.name}.getRemote();\n`;
      code += `} else {\n`;
      code += `    // Manual binding for Lite bindings without getRemote()\n`;
      code += `    ${remoteName} = new root.${iface.name}Remote();\n`;
      code += `    const receiver = ${remoteName}.bindNewPipeAndPassReceiver();\n`;
      code += `    const handle = receiver.handle || receiver;\n`;
      const scope = iface.metadata?.scope || "context";
      code += `    Mojo.bindInterface("${iface.module + "." + iface.name}", handle, "${scope}");\n`;
      code += `}\n`;
    }
    code += `\n`;

    // Generate method call with params
    const paramsFqn =
      state.selectedInterface.module + "." + state.selectedInterface.name;
    const paramsDef = getMethodParams(paramsFqn, method);
    const args = [];

    if (paramsDef && paramsDef.length > 0) {
      code += `// Method parameters\n`;
      paramsDef.forEach((p) => {
        const key = p.name;
        // Strip 'arg_' from variable name if present
        const safeVarName = key.startsWith("arg_") ? key.substring(4) : key;
        let value = state.paramValues[key];

        // Logic needed for Execution:
        // If isExecution=true, we reconcile keys (add arg_).
        // If isExecution=false (Display), we keep them clean.
        if (isExecution && value && typeof value === "object") {
          // Disable heuristics for Execution because state.paramValues keys come from form inputs
          // which already have correct names (with arg_ prefix if needed).
          value = reconcileKeys(value, null, false);
        }

        let valueStr;
        if (typeof value === "bigint") {
          valueStr = value.toString() + "n";
        } else if (p.type === "map" && Array.isArray(value)) {
          // Fix for Manual Mode: Convert Array of {key, value} entries back to Map Object
          const mapObj = {};
          value.forEach((item) => {
            if (item.key !== undefined) mapObj[item.key] = item.value;
          });
          // Reconcile keys on the constructed object if needed
          // Disable heuristics here too as we just built it from form data
          const processedMap = isExecution
            ? reconcileKeys(mapObj, null, false)
            : mapObj;
          valueStr = safeStringify(processedMap);
        } else {
          valueStr =
            typeof value === "string" ? `"${value}"` : safeStringify(value);
        }

        // If value is undefined (optional/skipped), we might want to pass null or undefined
        // But for the generated code, let's show what's in the state or null
        const safeValue = valueStr === undefined ? "null" : valueStr;

        code += `const ${safeVarName} = ${safeValue};\n`;
        args.push(safeVarName);
      });
      code += `\n`;
    }

    code += `// Call the method\n`;
    code += `try {\n`;
    if (args.length > 0) {
      code += `  const result = await ${remoteName}.${methodName}(${args.join(", ")});\n`;
    } else {
      code += `  const result = await ${remoteName}.${methodName}();\n`;
    }
    code += `  console.log('Success:', result);\n`;
    code += `} catch (error) {\n`;
    code += `  console.error('Error:', error);\n`;
    code += `}`;

    return code;
  }

  function highlightSyntax(code) {
    // Escape HTML
    let escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Define patterns (Order matters for priority!)
    const patterns = {
      comment: /\/\/.*$|\/\*[\s\S]*?\*\//,
      string: /'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`/,
      // Regex literals: Simplified version to avoid catastrophic backtracking, matches common cases
      regex:
        /\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[gimuy]*/,
      keyword:
        /\b(const|let|var|function|return|new|async|await|if|else|try|catch|throw|import|from|export|class|extends|static|yield|debugger|switch|case|default|for|while|do|break|continue|typeof|instanceof|void|delete)\b/,
      builtin:
        /\b(this|window|document|console|mojo|Mojo|InterceptorManager|MojoObjectRegistry|MojoProxy|MojoLoader|JSON|Math|Date|Promise|Error)\b/,
      const: /\b(true|false|null|undefined|NaN|Infinity)\b/,
      number:
        /\b(?:0x[a-fA-F0-9]+|0b[01]+|0o[0-7]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)n?\b/,
      property: /\.[a-zA-Z_$][\w$]*/,
      class: /\b[A-Z][a-zA-Z0-9_$]*\b/,
      function: /\b[a-zA-Z_$][\w$]*(?=\()/,
      operator: /[+\-*/%=&|!^~<>?:]+/,
    };

    // Construct combined regex with named groups: (?<name>pattern)|...
    const combinedSource = Object.entries(patterns)
      .map(([name, regex]) => `(?<${name}>${regex.source})`)
      .join("|");

    const combinedRegex = new RegExp(combinedSource, "gm");

    return escaped.replace(combinedRegex, (...args) => {
      const groups = args.pop(); // Last arg is groups object in replace callback for named groups
      const match = args[0]; // Full match

      for (const [name, groupMatch] of Object.entries(groups)) {
        if (groupMatch !== undefined) {
          if (name === "property") {
            // Property includes the dot, highlight only the name
            return `.<span class="property">${match.substring(1)}</span>`;
          }
          if (name === "class") {
            // Heuristic: Don't highlight ALL CAPS as class (usually constants) unless it looks like a type
            if (match === match.toUpperCase() && match.length > 1) return match;
          }
          return `<span class="${name}">${match}</span>`;
        }
      }
      return match;
    });
  }

  // ========================================
  // Actions
  // ========================================
  async function copyCode() {
    const code = generateCode();

    try {
      await navigator.clipboard.writeText(code);
      showToast("Code copied to clipboard!", "success");
    } catch (error) {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      showToast("Code copied to clipboard!", "success");
    }
  }

  async function executeCode() {
    if (!state.mojoAvailable) {
      showToast(
        "MojoJS is not available. Enable with --enable-blink-features=MojoJS",
        "error",
      );
      return;
    }

    const iface = state.selectedInterface;
    const method = state.selectedMethod;
    if (!iface || !method) return;

    const manualId = "manual_" + Date.now();
    showInterceptorPanel(true);

    // Map param values (handle Maps)
    const params = {};
    Object.entries(state.paramValues).forEach(([key, val]) => {
      params[key] = val;
    });

    // Only add manual activity if this call WON'T be intercepted by the global interceptor.
    // Standard calls use Mojo.bindInterface which is intercepted.
    // Associated interfaces use a private Master Pipe and are NOT intercepted by MojoInterfaceInterceptor.
    const needsManualEvent = state.isAssociated;

    if (needsManualEvent) {
      window.MojoGUI_API.addActivity({
        id: manualId,
        interface: iface.name,
        method: method,
        params: params,
        status: "Running",
      });
    }

    try {
      const target = {
        interface: iface.module ? `${iface.module}.${iface.name}` : iface.name,
        masterHandleId: state.masterHandleId,
      };

      // Support Instance Calls
      if (state.targetType === "instance" && state.targetObjectId) {
        target.objectId = state.targetObjectId;
      }

      const result = await window.MojoExecutionService.call(
        target,
        method,
        params,
        {
          isAssociated: state.isAssociated,
          interfaceId: state.interfaceId,
        },
      );

      if (needsManualEvent) {
        window.MojoGUI_API.updateActivity(manualId, "Done", result);
      }
      showToast("Execution Success", "success");
    } catch (error) {
      console.error("[Execution] Error:", error);
      if (needsManualEvent) {
        window.MojoGUI_API.updateActivity(manualId, "Error", error.message);
      }
      showToast("Execution Error: " + error.message, "error");
    }
  }

  function resetParams() {
    state.paramValues = {};
    if (state.selectedMethod) {
      const fqn =
        state.selectedInterface.module + "." + state.selectedInterface.name;
      const params = getMethodParams(fqn, state.selectedMethod);
      renderParamsForm(params);
      updateGeneratedCode();
    }
  }

  function clearResults() {
    elements.executionResults.innerHTML = safeHTML(`
            <div class="empty-state small">
                <p>Results will appear here</p>
            </div>
        `);
  }

  // ========================================
  // Interceptor Logic
  // ========================================
  function toggleInterceptor() {
    if (!state.selectedInterface) {
      showToast("Select an interface first", "warning");
      return;
    }

    // Use Fully Qualified Name if available (module + . + name)
    // MojoInterfaceInterceptor for Blink services usually requires FQN OR the Name_ string
    // If module is present, try FQN.
    const shortName = state.selectedInterface.name;
    const moduleName = state.selectedInterface.module;

    // Try FQN first if module exists
    const nameTypeToUse =
      moduleName && moduleName.length > 0
        ? `${moduleName}.${shortName}`
        : shortName;

    const isActive = InterceptorManager.toggle(nameTypeToUse);

    updateInterceptButtonState(isActive, nameTypeToUse);

    if (isActive) {
      showToast(`Blocking ${nameTypeToUse}`, "success");
      // Show panel
      showInterceptorPanel(true);
    } else {
      showToast(`Logging ${nameTypeToUse}`, "info");
    }
  }

  // State for Selective Interception (Auto-Forwarding)
  // Key: "InterfaceName.MethodName" -> true (Auto Forward / Ignored)
  state.autoForwardMethods = new Set();

  function updateInterceptButtonState(isActive, interfaceName = null) {
    // 1. Update Main Detail Panel Button
    if (state.selectedInterface) {
      const currentFQN = state.selectedInterface.module
        ? `${state.selectedInterface.module}.${state.selectedInterface.name}`
        : state.selectedInterface.name;
      const currentShort = state.selectedInterface.name;

      if (
        !interfaceName ||
        interfaceName === currentFQN ||
        interfaceName === currentShort
      ) {
        const targetName = interfaceName || currentFQN;
        const isRunning = InterceptorManager.isActive(targetName);
        const mode = InterceptorManager.getMode(targetName);
        const isBlocking = isRunning && mode === "INTERCEPT";

        elements.interceptStatusDot.classList.toggle("active", isBlocking);
        elements.interceptToggleBtn.classList.toggle("active", isBlocking);
        const text = elements.interceptToggleBtn.childNodes[2];
        if (text) {
          if (!isRunning) text.textContent = " Intercept";
          else text.textContent = isBlocking ? " Blocking" : " Logging";
        }
      }
    }

    // 2. Update Traffic Log Buttons (Granular Sync)
    const logButtons = document.querySelectorAll(
      `button[data-action="toggle-intercept"]`,
    );
    logButtons.forEach((btn) => {
      const btnIface = btn.dataset.interface;
      const btnMethod = btn.dataset.method;

      if (btnIface) {
        const isIfaceActive = InterceptorManager.isActive(btnIface);
        let isMethodActive = isIfaceActive;

        // If interface is active, check if this specific method is Auto-Forwarded (Ignored)
        // OR if we are in LOG mode (which is effectively Forwarding)
        const mode = InterceptorManager.getMode(btnIface);

        if (mode === "LOG") {
          isMethodActive = false; // LOG mode = Forwarding
        } else if (isIfaceActive && btnMethod) {
          const key = `${btnIface}.${btnMethod}`;
          if (state.autoForwardMethods.has(key)) {
            isMethodActive = false;
          }
        }

        btn.classList.toggle("active", isMethodActive);
        btn.textContent = isMethodActive ? "Blocking" : "Logging";
      }
    });
  }

  function handleMojoIntercept(e) {
    state.trafficCount++;
    if (elements.trafficBadge) {
      elements.trafficBadge.textContent = state.trafficCount;
      elements.trafficBadge.style.display = "inline-block";
    }

    // Check if we should Auto-Forward
    const autoForwardKey = `${e.detail.interface}.${e.detail.method}`;
    if (state.autoForwardMethods.has(autoForwardKey)) {
      // Auto-Forward: Resume immediately
      const entry = MojoObjectRegistry.get(e.detail.proxyId);
      if (entry && entry.remote) {
        entry.remote.resumeCall(e.detail.id, null, false); // false = don't drop, just continue
      }

      // Log as 'Logged' (Pending -> Done instantly)
      addActivityRow({
        ...e.detail,
        type: "INTERCEPT",
        status: "Logged", // Special status
      });
      return;
    }

    // Forward to unified handler
    addActivityRow({
      ...e.detail,
      type: "INTERCEPT",
      status: "Pending",
    });

    // Ensure panel is visible if not already
    if (elements.interceptorPanel.style.display === "none") {
      // Optional: highlight tab
    }
  }

  function handleMojoResponse(e) {
    updateActivityRow(e.detail.id, "Done", e.detail.result);
  }

  function handleMojoResponseIntercept(e) {
    const detail = e.detail;
    const row = elements.interceptorTableBody.querySelector(
      `tr[data-id="${detail.id}"]`,
    );

    if (row) {
      // Update status to indicate we are editing response
      updateActivityRow(detail.id, "Response Edit", detail.result);

      // If row is active, refresh detail view
      if (row.classList.contains("active")) {
        // Ensure detail includes result so we can edit it
        if (row.__details) {
          row.__details.result = detail.result;
          row.__details.status = "Response Edit";
          showInterceptDetails(row.__details);
        }
      }
    }
  }

  window.sendResponse = function (id) {
    let result = null;
    try {
      const formContainer = document.getElementById(`interceptForm_${id}_res`);
      if (formContainer) {
        // Try to map array values back to object keys if definition exists
        const values = getInterceptorFormValues(id + "_res");

        const row = document.querySelector(`tr[data-id="${id}"]`);
        const iface = row.__details.interface;
        const method = row.__details.method;
        const methodDef = findMethodDefinition(iface, method);

        if (methodDef && methodDef.responseParams) {
          const keys = methodDef.responseParams.map((p) => p.name);
          result = {};
          keys.forEach((key, i) => {
            result[key] = values[key];
          });
        } else {
          // Fallback if no def found (shouldn't happen)
          // console.warn('Form container exists but no def found for mapping?');
          result = values;
        }
      } else {
        // Fallback textarea
        const textarea = document.getElementById(`interceptParams_${id}_res`);
        if (textarea) result = safeParse(textarea.value);
      }

      // SAFETY CHECK: If result is null but we expect a Struct (responseParams exists), return {}
      // This fixes crash in BatteryMonitor.queryNextStatus where it expects a struct but gets null.
      const row = document.querySelector(`tr[data-id="${id}"]`);
      if (row && row.__details) {
        const iface = row.__details.interface;
        const method = row.__details.method;
        const methodDef = findMethodDefinition(iface, method);

        if (
          result === null &&
          methodDef &&
          methodDef.responseParams &&
          methodDef.responseParams.length > 0
        ) {
          // console.warn('[UI] Response is null but method expects parameters. Defaulting to empty object {} to prevent crash.');
          result = {};
        }
      }
    } catch (e) {
      alert("Error parsing response: " + e.message);
      return;
    }

    const row = document.querySelector(`tr[data-id="${id}"]`);
    const proxyId = row.dataset.proxyId;
    const entry = MojoObjectRegistry.get(proxyId);

    if (entry && entry.remote) {
      // Use reconcileKeys to restore original field names (e.g. status -> arg_status)
      const originalResult = row && row.__details ? row.__details.result : null;
      const restoredResult = reconcileKeys(result, originalResult);

      // console.log(`[UI] Sending Response for ${id}`, restoredResult);
      entry.remote.sendResponse(id, restoredResult);
      updateActivityRow(id, "Done", restoredResult);
      showToast("Response Sent", "success");
    }
  };

  function handleMojoError(e) {
    const { id, error } = e.detail;
    const row = elements.interceptorTableBody.querySelector(
      `tr[data-id="${id}"]`,
    );

    if (!row) {
      // If row doesn't exist (e.g. system error or protocol mismatch), create one
      addActivityRow({
        id: id,
        interface: "System",
        method: "Error",
        params: null,
        timestamp: Date.now(),
        type: "SYSTEM",
        status: "Error",
        error: error,
      });
      return;
    }

    updateActivityRow(id, "Error", { error: error });
  }

  // escapeHtml now provided by MojoUtils/global
  // ========================================
  // Utilities
  // ========================================
  function showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.setAttribute("role", type === "error" ? "alert" : "status");
    toast.setAttribute("aria-live", type === "error" ? "assertive" : "polite");

    // Icon based on type
    let icon = "ℹ️";
    if (type === "success") icon = "✅";
    if (type === "error") icon = "❌";
    if (type === "warning") icon = "⚠️";

    toast.innerHTML = safeHTML(`
            <span class="toast-icon">${icon}</span>
            <span class="toast-message">${escapeHtml(message)}</span>
        `);

    // Create progress bar
    const progressBar = document.createElement("div");
    progressBar.className = "toast-progress";
    toast.appendChild(progressBar);

    // Remove inline styles to rely on CSS
    elements.toastContainer.appendChild(toast);

    // Auto-remove
    setTimeout(() => {
      toast.style.animation = "slideOut 0.3s ease forwards";
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ========================================

  // ========================================
  // Global Helpers for UI interactions (Moved inside IIFE scope)
  // ========================================

  // Export safeHTML for external use (Tools Panel)
  window.safeHTML = safeHTML;
  window.showToast = showToast;

  window.renderRegistryOptions = function (selectedInterface, currentId) {
    if (!window.MojoObjectRegistry)
      return '<option value="" disabled>Registry unavailable</option>';
    const ids = window.MojoObjectRegistry.list();
    if (ids.length === 0)
      return '<option value="" disabled>No registered objects</option>';

    // Sort: Exact matches first
    ids.sort((a, b) => {
      const entryA = window.MojoObjectRegistry.get(a);
      const entryB = window.MojoObjectRegistry.get(b);
      const aMatch = entryA.type === selectedInterface;
      const bMatch = entryB.type === selectedInterface;
      if (aMatch && !bMatch) return -1;
      if (!aMatch && bMatch) return 1;
      return 0;
    });

    return ids
      .map((id) => {
        const entry = window.MojoObjectRegistry.get(id);
        const isMatch = selectedInterface && entry.type === selectedInterface;
        const isSelected = currentId && id === currentId;
        const label = `${id} (${entry.type}) ${isMatch ? "★" : ""}`;
        return `<option value="${escapeHtml(id)}" ${isSelected ? "selected" : ""}>${escapeHtml(label)}</option>`;
      })
      .join("");
  };

  window.renderHandleOptions = function () {
    if (!window.MojoHandleRegistry)
      return '<option value="" disabled>Registry unavailable</option>';
    const ids = window.MojoHandleRegistry.list();
    if (ids.length === 0)
      return '<option value="" disabled>No raw handles</option>';
    return ids
      .map((id) => `<option value="${id}">Handle ${id}</option>`)
      .join("");
  };

  window.updateGeneratedCode = updateGeneratedCode;

  window.updateTargetObjectId = function (value) {
    state.targetObjectId = value;
    updateGeneratedCode();
  };

  window.updateTargetType = function (value) {
    state.targetType = value;
    const input = document.getElementById("instanceTargetInput");
    if (input) {
      input.style.display = value === "instance" ? "block" : "none";
      // Auto-refresh list if showing
      if (value === "instance") {
        const select = document.getElementById("targetObjectId");
        if (select && select.tagName === "SELECT") {
          const currentVal = select.value || state.targetObjectId;
          select.innerHTML = safeHTML(
            `<option value="" disabled ${!state.targetObjectId ? "selected" : ""}>Select an object...</option>` +
              window.renderRegistryOptions(
                state.selectedInterface
                  ? state.selectedInterface.module +
                      "." +
                      state.selectedInterface.name
                  : null,
                state.targetObjectId,
              ),
          );
          if (currentVal) select.value = currentVal;
        }
      }
    }
    updateGeneratedCode();
  };

  window.updateIsAssociated = function (value) {
    state.isAssociated = value;
    const inputs = document.getElementById("associatedInputs");
    if (inputs) {
      inputs.style.display = value ? "block" : "none";
    }
    updateGeneratedCode();
  };

  window.updateMasterHandle = function (value) {
    state.masterHandleId = value;
    updateGeneratedCode();
  };

  window.updateInterfaceId = function (value) {
    state.interfaceId = value;
    updateGeneratedCode();
  };

  window.useHandle = async function (ifaceName, ifaceId, refId) {
    console.log(`[Use Handle] ${ifaceName} (ID: ${ifaceId}, Ref: ${refId})`);

    // 1. Find the interface by name in state.interfaces
    if (!state.interfaces) return;

    // Try resolving namespace if ifaceName is simple
    let targetIface = state.interfaces.find(
      (i) => i.module + "." + i.name === ifaceName || i.name === ifaceName,
    );

    if (!targetIface) {
      showToast(`Interface definition for ${ifaceName} not found.`, "warning");
      return;
    }

    // 2. Select Interface
    await selectInterface(targetIface.name, targetIface.module);

    // 3. Set Target Mode
    state.targetType = "instance";
    state.targetObjectId = refId || ifaceId; // Prefer obj_N (refId) if available

    // 4. Force UI update for the target controls
    // When the user eventually selects a method, renderTargetControl will run.
    showToast(
      `Selected ${ifaceName}. Choose a method to use handle ${state.targetObjectId}.`,
      "success",
    );
  };

  // Start initialization
  init();

  // Expose internal functions for services
  window.__MojoGUI_Internal = {
    loadInterfaces,
    getMethodParams,
    findMethodDefinition,
    generateCode,
  };
})();
