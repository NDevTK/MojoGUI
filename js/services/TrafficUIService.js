/**
 * TrafficUIService
 * Extracted from app.js
 */
(function (global) {
  "use strict";

  const state = window.MojoGUI_State;
  const {
    safeHTML,
    escapeHtml,
    safeStringify,
    safeParse,
    sanitizeKeys,
    reconcileKeys,
  } = MojoUtils;

  const {
    renderInterceptorForm,
    getInterceptorFormValues,
    convertParamsObjectToArray,
  } = InputRendererService;

  // Internal function redirects
  const getInternal = () => window.__MojoGUI_Internal || {};
  const findMethodDefinition = (...args) =>
    getInternal().findMethodDefinition?.(...args);

  // Use global elements object (initialized in app.js)
  const getElements = () => window.MojoGUI_Elements || {};

  // Helper for Traffic Log Buttons
  window.toggleInterceptFromLog = function (ifaceName, methodName) {
    const isIfaceActive = InterceptorManager.isActive(ifaceName);
    const key = `${ifaceName}.${methodName}`;

    if (!isIfaceActive) {
      // Turning ON Interface. By default, Block everything
      // "Intercept" on a method means "Make sure Interface is ON and this method is NOT ignored"
      InterceptorManager.toggle(ifaceName);
      state.autoForwardMethods.delete(key);
      showToast(`Started intercepting ${ifaceName}`, "success");
    } else {
      // Interface is ALREADY ON.
      const mode = InterceptorManager.getMode(ifaceName);

      if (mode === "LOG") {
        // In LOG mode (Logging). User clicked "Logging", so they want to BLOCK (Intercept).
        // Use shared toggle logic to switch to INTERCEPT mode.
        InterceptorManager.toggle(ifaceName);
        // Ensure this method is NOT ignored (so it blocks).
        state.autoForwardMethods.delete(key);
        showToast(`Switched ${ifaceName} to Blocking Mode`, "success");
      } else {
        // Already in INTERCEPT mode. Toggle granular method blocking.
        if (state.autoForwardMethods.has(key)) {
          // Was Ignored -> Enable Blocking
          state.autoForwardMethods.delete(key);
          showToast(`Resumed intercepting ${methodName}`, "success");
        } else {
          // Was Blocking -> Set to Ignore
          state.autoForwardMethods.add(key);
          showToast(`Logging ${methodName}`, "info");
        }
      }
    }

    updateInterceptButtonState(true, ifaceName);
  };

  function clearActivityLog() {
    getElements().interceptorTableBody.textContent = "";
    state.trafficCount = 0;
    if (getElements().trafficBadge) {
      getElements().trafficBadge.textContent = "0";
      getElements().trafficBadge.style.display = "none";
    }
    getElements().interceptorDetails.innerHTML = safeHTML(`
            <div class="empty-state small">
                <p>Select a request to view details</p>
            </div>
        `);
  }

  function showInterceptorPanel(show) {
    state.panelVisible = show;

    if (show) {
      // Update header button to look active
      getElements().viewTrafficBtn?.classList.add("active");

      // Hide standard panels
      getElements().interfacePanel.style.display = "none";
      getElements().paramsPanel.style.display = "none";

      // Show Interceptor Panel (Full Width)
      getElements().interceptorPanel.style.display = "flex";
    } else {
      // Update header button
      getElements().viewTrafficBtn?.classList.remove("active");

      // Show standard panels
      getElements().interfacePanel.style.display = "block";
      getElements().paramsPanel.style.display = "block";

      // Hide Interceptor Panel
      getElements().interceptorPanel.style.display = "none";
    }
  }

  // Unified function to add rows to the table
  function addActivityRow(data) {
    // Ensure status is initialized
    if (!data.status) data.status = "Pending";

    const {
      id,
      interface: iface,
      method,
      params,
      timestamp,
      type,
      status,
    } = data;
    const rowId = `row_${id}`;

    // Correctly handle duplicates: Update existing row if ID matches
    // Use getElementById for absolute reliability
    const existingRow = document.getElementById(rowId);
    if (existingRow) {
      updateActivityRow(id, status || "Pending", data.result);
      return;
    }

    const row = document.createElement("tr");
    row.id = rowId; // Set ID for fast lookup
    row.dataset.id = id;
    row.dataset.type = type || "INTERCEPT"; // 'INTERCEPT' or 'MANUAL'
    if (data.proxyId) row.dataset.proxyId = data.proxyId;

    // Visual indicator for manual vs intercept
    let typeIcon = "📡";
    if (type === "MANUAL") typeIcon = "🛠️";
    if (type === "SYSTEM") typeIcon = "⚠️";

    let displayStatus = status;
    let statusClass =
      displayStatus === "Done"
        ? "active"
        : displayStatus === "Error"
          ? "error"
          : displayStatus === "Logged"
            ? "logged"
            : "";

    // Check mode: LOG mode is effectively 'Logged' from the start
    if (data.mode === "LOG" && type !== "MANUAL") {
      displayStatus = "Logged";
      statusClass = "logged";
      data.status = "Logged"; // Sync with details
    }

    row.innerHTML = safeHTML(`
            <td>
                ${new Date(timestamp).toLocaleTimeString()}
                <div style="font-size:0.8em;opacity:0.7;font-family:monospace;">${id}</div>
            </td>
            <td><span class="type-icon">${typeIcon}</span> ${escapeHtml(iface)}.${escapeHtml(method)}</td>
            <td><span class="status-dot ${statusClass}"></span> ${escapeHtml(displayStatus)}</td>
            <td>
                ${
                  type === "INTERCEPT"
                    ? (() => {
                        const isIfaceActive =
                          typeof InterceptorManager !== "undefined" &&
                          InterceptorManager.isActive(iface);
                        let isBtnActive = isIfaceActive;

                        // Check Mode: LOG mode is Logging (Inactive Button)
                        if (
                          isIfaceActive &&
                          typeof InterceptorManager !== "undefined"
                        ) {
                          const mode = InterceptorManager.getMode(iface);
                          if (mode === "LOG") {
                            isBtnActive = false;
                          } else if (
                            state.autoForwardMethods.has(`${iface}.${method}`)
                          ) {
                            isBtnActive = false;
                          }
                        }

                        return `<button class="btn btn-small ${isBtnActive ? "active" : ""}" data-action="toggle-intercept" data-interface="${escapeHtml(iface)}" data-method="${escapeHtml(method)}" onclick="event.stopPropagation(); window.toggleInterceptFromLog('${escapeHtml(iface)}', '${escapeHtml(method)}')">${isBtnActive ? "Blocking" : "Logging"}</button>`;
                      })()
                    : ""
                }
            </td>
        `);

    // Attach full details for the details view
    row.__details = data;
    row.addEventListener("click", () => showInterceptDetails(row.__details));

    getElements().interceptorTableBody.prepend(row);
  }

  function updateActivityRow(id, status, resultData) {
    // Use getElementById for consistency with addActivityRow
    const row = document.getElementById(`row_${id}`);
    if (row) {
      const statusCell = row.cells[2];
      let displayStatus = status;
      let statusDotClass =
        status === "Done"
          ? "active"
          : status === "Error"
            ? "error"
            : status === "Forwarded"
              ? "logged"
              : "";
      let colorStyle =
        status === "Error" ? 'style="background:var(--error)"' : "";

      // Preserve 'Logged' status visual
      if (
        row.__details &&
        (row.__details.status === "Logged" || row.__details.mode === "LOG")
      ) {
        if (status === "Done") {
          displayStatus = "Logged";
          statusDotClass = "logged";
        }
      }

      statusCell.innerHTML = safeHTML(
        `<span class="status-dot ${statusDotClass}" ${colorStyle}></span> ${escapeHtml(displayStatus)}`,
      );

      // Merge result into the stored details so showInterceptDetails can display it
      if (row.__details) {
        row.__details.result = resultData;
        row.__details.status = status;

        // If this is currently selected, refresh the details view
        if (row.classList.contains("active")) {
          showInterceptDetails(row.__details);
        }
      }
    } else {
      console.warn(
        `[UI] updateActivityRow failed: Row ${id} not found (row_${id}).`,
      );
    }
  }

  function showInterceptDetails(detail) {
    const { id, interface: iface, method, params } = detail;

    // Highlight row
    getElements()
      .interceptorTableBody.querySelectorAll("tr")
      .forEach((tr) => tr.classList.remove("active"));
    const row = getElements().interceptorTableBody.querySelector(
      `tr[data-id="${id}"]`,
    );
    if (row) row.classList.add("active");

    // Show details with action buttons
    const isPending = detail.status === "Pending";
    const isManual = detail.type === "MANUAL";

    const methodDef = findMethodDefinition(iface, method);
    let paramsHtml;

    // Special handling for Script interface (Job-like data)
    if (iface === "Script") {
      const displayParams =
        typeof params === "string"
          ? params
          : safeStringify(sanitizeKeys(params), 2);
      paramsHtml = `<div class="result-code" style="background: var(--bg-primary); border-color: var(--accent-primary);">${escapeHtml(displayParams)}</div>`;

      let resultHtml = "";
      if (
        detail.result ||
        detail.status === "Done" ||
        detail.error ||
        detail.status === "Error"
      ) {
        if (detail.error || detail.status === "Error") {
          resultHtml = `<div class="result-section">
                                    <div class="result-section-title">Error</div>
                                    <div class="error-text code-block" style="border:none;background:transparent;padding:0;min-height:50px;">${escapeHtml(typeof detail.error === "object" ? safeStringify(detail.error, 2) : detail.error)}</div>
                                  </div>`;
        } else {
          resultHtml = `<div class="result-section">
                                    <div class="result-section-title">Result</div>
                                    <div class="result-code" style="border:none;background:transparent;padding:0;min-height:50px;">${escapeHtml(safeStringify(sanitizeKeys(detail.result), 2))}</div>
                                  </div>`;
        }
      }

      getElements().interceptorDetails.innerHTML = safeHTML(`
                <div class="interceptor-actions">
                    <h4>${escapeHtml(iface)}: ${escapeHtml(method)}</h4>
                </div>
                <div class="details-column" style="margin-top:10px; flex: 1; display: flex; flex-direction: column;">
                    <h5>Script</h5>
                    ${paramsHtml}
                    ${resultHtml}
                </div>
            `);
      return;
    }

    if (methodDef && methodDef.parameters) {
      paramsHtml = `<div class="params-form-container">
                           ${renderInterceptorForm(methodDef.parameters, params, id)}
                           </div>`;
    } else {
      // Fallback for unknown methods or if no methodDef, sanitize keys for display
      // ALWAYS enable editing to allow Replay modification
      const displayParams = sanitizeKeys(params);
      paramsHtml = `<textarea id="interceptParams_${id}" class="params-editor">${escapeHtml(safeStringify(displayParams, 2))}</textarea>`;
    }

    let contentHtml = "";

    // If we have a result or error, use split view for compactness
    if (
      detail.result ||
      detail.status === "Done" ||
      detail.error ||
      detail.status === "Error"
    ) {
      let responseHtml = "";

      if (detail.error || detail.status === "Error") {
        responseHtml = `<div class="error-text code-block" style="border:none;background:transparent;padding:0;min-height:50px;">${escapeHtml(typeof detail.error === "object" ? safeStringify(detail.error, 2) : detail.error)}</div>`;
      } else {
        // Try to use Nice GUI for Response if definition exists
        // Mojo definitions often store response params in 'responseParams' or similar
        // We will check methodDef.responseParams
        if (methodDef && methodDef.responseParams) {
          // Editable if Response Edit, otherwise read-only look
          const style =
            detail.status === "Response Edit" ? "" : "opacity: 0.9;";
          responseHtml = `<div class="params-form-container" style="${style}">
                                        ${renderInterceptorForm(methodDef.responseParams, detail.result, id + "_res")}
                                      </div>`;
        } else {
          if (detail.status === "Response Edit") {
            // Editable Textarea for fallback
            const displayParams = sanitizeKeys(detail.result);
            responseHtml = `<textarea id="interceptParams_${id}_res" class="params-editor">${escapeHtml(safeStringify(displayParams, 2))}</textarea>`;
          } else {
            // Read-only view
            responseHtml = `<div class="result-code" style="border:none;background:transparent;padding:0;min-height:50px;">${escapeHtml(safeStringify(sanitizeKeys(detail.result), 2))}</div>`;
          }
        }
      }

      contentHtml = `
                <div class="details-split-view">
                    <div class="details-column">
                        <h5>Request</h5>
                        ${paramsHtml}
                    </div>
                    <div class="details-column">
                        <h5>Response</h5>
                        ${responseHtml}
                    </div>
                </div>
            `;
    } else {
      // Single view for pending
      contentHtml = `
                <div class="details-column" style="margin-top:10px;">
                    <h5>Request</h5>
                    ${paramsHtml}
                </div>
            `;
    }

    getElements().interceptorDetails.innerHTML = safeHTML(`
            <div class="interceptor-actions">
                <h4>${escapeHtml(iface)}.${escapeHtml(method)}</h4>
                ${
                  isPending && !isManual
                    ? `
                <div class="action-buttons">
                    <button class="btn btn-primary btn-small" onclick="resumeIntercept('${id}', false)">Resume</button>
                    <button class="btn btn-small" onclick="resumeIntercept('${id}', true)">Drop</button>
                </div>
                `
                    : !isPending && detail.status !== "Response Edit"
                      ? `
                <div class="action-buttons">
                    <button class="btn btn-primary btn-small" onclick="replayIntercept('${id}')">Replay</button>
                </div>
                `
                      : detail.status === "Response Edit"
                        ? `
                <div class="action-buttons">
                    <button class="btn btn-primary btn-small" onclick="sendResponse('${id}')">Send Response</button>
                    <!-- Maybe Drop Response? Proxy doesn't support dropResponse explicitly, but we could just drop connection? For now just Send. -->
                </div>
                `
                        : ""
                }
            </div>
            ${contentHtml}
        `);
  }

  // Modify request function (globally accessible for onclick)
  window.resumeIntercept = function (id, drop) {
    let params = null;
    let useHeuristic = true;

    if (!drop) {
      const formContainer = document.getElementById(`interceptForm_${id}`);
      const row = document.getElementById(`row_${id}`);

      if (formContainer && row && row.__details) {
        // New logic: gather from form inputs AND map to array
        try {
          const paramsObj = getInterceptorFormValues(id);
          useHeuristic = false; // Form data has correct keys

          // Convert Object back to Array using Method Definition
          const iface = row.__details.interface;
          const method = row.__details.method;
          const methodDef = findMethodDefinition(iface, method);

          if (methodDef && methodDef.parameters) {
            params = convertParamsObjectToArray(paramsObj, methodDef);
          } else {
            // Fallback if no def found (shouldn't happen)
            params = Object.values(paramsObj);
          }
        } catch (e) {
          showToast("Error parsing form values: " + e.message, "error");
          return;
        }
      } else {
        // Fallback: old textarea logic
        const textarea = document.getElementById(`interceptParams_${id}`);
        if (textarea) {
          try {
            params = safeParse(textarea.value);
          } catch (e) {
            showToast("Invalid JSON params", "error");
            return;
          }
        }
      }
    }

    if (params && !Array.isArray(params)) {
      showToast(
        "Invalid Parameters: Must be an Array [...] of arguments.",
        "error",
      );
      return;
    }

    // Use consistent ID lookup
    const row = document.getElementById(`row_${id}`);
    if (!row) {
      console.error(`[UI] resumeIntercept: Row ${id} not found.`);
      return;
    }

    const proxyId = row.dataset.proxyId;

    if (drop) {
      // We need to call resumeCall on the proxy
      const entry = MojoObjectRegistry.get(proxyId);
      if (entry && entry.remote) {
        entry.remote.resumeCall(id, null, true);
        updateActivityRow(id, "Dropped");
      }
    } else {
      const entry = MojoObjectRegistry.get(proxyId);
      if (entry && entry.remote) {
        // Reconcile keys with original source of truth
        const originalParams =
          row && row.__details ? row.__details.params : null;

        // Parse any nested JSON strings in parameters before reconciliation
        if (Array.isArray(params)) {
          params = params.map((p) => {
            if (typeof p === "string") {
              try {
                return JSON.parse(p);
              } catch (e) {
                return p;
              }
            }
            return p;
          });
        }

        // Reconcile and restore Mojo handles
        const restoredParams = reconcileKeys(
          params,
          originalParams,
          useHeuristic,
        );

        entry.remote.resumeCall(
          id,
          restoredParams,
          false,
          state.interceptResponses,
        );

        // Update UI immediately
        if (state.interceptResponses) {
          updateActivityRow(id, "Pending Response");
        } else {
          updateActivityRow(id, "Forwarded");
        }

        // Update history with modified params
        if (row && row.__details) {
          row.__details.params = restoredParams;
        }
      } else {
        console.error(`[UI] Proxy ${proxyId} not found for call ${id}`);
      }
    }
  };

  window.replayIntercept = function (id) {
    let params = null;
    let useHeuristic = true;
    try {
      // Gather params from the UI (interceptForm or textarea)
      const formContainer = document.getElementById(`interceptForm_${id}`);
      const row = document.querySelector(`tr[data-id="${id}"]`);

      if (formContainer && row && row.__details) {
        const paramsObj = getInterceptorFormValues(id);
        useHeuristic = false;

        // Convert Object back to Array using Method Definition
        const iface = row.__details.interface;
        const method = row.__details.method;
        const methodDef = findMethodDefinition(iface, method);

        if (methodDef && methodDef.parameters) {
          params = convertParamsObjectToArray(paramsObj, methodDef);
        } else {
          params = Object.values(paramsObj);
        }
      } else {
        const textarea = document.getElementById(`interceptParams_${id}`);
        if (textarea) params = safeParse(textarea.value);
      }
    } catch (e) {
      showToast("Error parsing form values: " + e.message, "error");
      return;
    }

    if (params && !Array.isArray(params)) {
      showToast(
        "Invalid Parameters: Must be an Array [...] of arguments.",
        "error",
      );
      return;
    }

    const row = document.querySelector(`tr[data-id="${id}"]`);
    if (!row || !row.__details) return;

    const detail = row.__details;
    const proxyId = detail.proxyId;
    const method = detail.method;

    const entry = MojoObjectRegistry.get(proxyId);
    const remote = entry ? entry.remote : null;

    // Attempt Replay via Proxy first (maintains connection context)
    if (
      remote &&
      remote.realRemote &&
      typeof remote.realRemote[method] === "function"
    ) {
      try {
        const newId = "replay_" + Date.now();

        // Fix: params might be JSON strings
        if (Array.isArray(params)) {
          params = params.map((p) => {
            if (typeof p === "string") {
              try {
                return JSON.parse(p);
              } catch (e) {
                return p;
              }
            }
            return p;
          });
        }

        // Restore Mojo handles if present
        const originalParams =
          row && row.__details ? row.__details.params : null;
        const restoredParams = reconcileKeys(
          params,
          originalParams,
          useHeuristic,
        );

        // Add new activity row for the replay
        addActivityRow({
          id: newId,
          interface: detail.interface,
          method: method,
          params: restoredParams,
          timestamp: Date.now(),
          type: "MANUAL",
          status: "Replaying...",
          proxyId: proxyId,
        });

        showInterceptDetails({
          ...detail,
          id: newId,
          params: restoredParams,
          status: "Replaying...",
          type: "MANUAL",
          result: null,
          error: null,
        });

        const resultPromise = remote.realRemote[method](...restoredParams);

        if (resultPromise && resultPromise.then) {
          resultPromise
            .then((res) => {
              updateActivityRow(newId, "Done", res);
              const activeRow = document.querySelector(
                `tr[data-id="${newId}"]`,
              );
              if (activeRow && activeRow.classList.contains("active")) {
                showInterceptDetails({
                  ...detail,
                  id: newId,
                  params: params,
                  result: res,
                  status: "Done",
                  type: "MANUAL",
                });
              }
            })
            .catch((err) => {
              updateActivityRow(newId, "Error", { error: err.toString() });
            });
        } else {
          updateActivityRow(newId, "Done", { result: "Sent (No Response)" });
        }
      } catch (e) {
        showToast("Proxy Replay Failed: " + e.message, "error");
      }
      return;
    }

    // Fallback: Fresh Execution via MojoExecutionService
    console.log("[Replay] Proxy lost, falling back to fresh execution...");
    const newId = "replay_fresh_" + Date.now();

    // Reconcile modified parameters with original log entry to restore Mojo handles
    const originalParams = row && row.__details ? row.__details.params : null;
    let finalParams = params;
    if (typeof MojoUtils !== "undefined") {
      finalParams = MojoUtils.reconcileKeys(
        params,
        originalParams,
        useHeuristic,
      );
    }

    addActivityRow({
      id: newId,
      interface: detail.interface,
      method: method,
      params: finalParams,
      timestamp: Date.now(),
      type: "MANUAL",
      status: "Replaying (Fresh)...",
    });

    showInterceptDetails({
      ...detail,
      id: newId,
      params: finalParams,
      status: "Replaying (Fresh)...",
      type: "MANUAL",
      result: null,
      error: null,
    });

    window.MojoExecutionService.call(
      { interface: detail.interface },
      method,
      finalParams,
    )
      .then((res) => {
        updateActivityRow(newId, "Done", res);
        const activeRow = document.querySelector(`tr[data-id="${newId}"]`);
        if (activeRow && activeRow.classList.contains("active")) {
          showInterceptDetails({
            ...detail,
            id: newId,
            params: params,
            result: res,
            status: "Done",
            type: "MANUAL",
          });
        }
        showToast("Replay Successful (Fresh Connection)", "success");
      })
      .catch((err) => {
        console.error(err);
        updateActivityRow(newId, "Error", { error: err.message });
        showToast("Replay Failed: " + err.message, "error");
      });
  };

  global.TrafficUIService = {
    toggleInterceptFromLog,
    clearActivityLog,
    showInterceptorPanel,
    addActivityRow,
    updateActivityRow,
    showInterceptDetails,
    resumeIntercept,
    replayIntercept,
  };
})(this);
