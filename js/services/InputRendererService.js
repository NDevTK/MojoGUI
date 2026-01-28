/**
 * InputRenderer Service
 * Extracted from app.js
 */
(function (global) {
  "use strict";

  const state = window.MojoGUI_State;
  const { safeHTML, escapeHtml, safeStringify, sanitizeKeys } = MojoUtils;
  const inferTypeFromMojomType = (type) =>
    MojoReflectionService.inferType(type);
  const mapFieldsToUIParams = (fields, ns) =>
    MojoReflectionService.mapFieldsToParams(fields, ns);

  // Initialize Event Delegation
  const init = (container) => {
    if (!container) return;

    container.addEventListener("click", (e) => {
      const target = e.target;

      // Remove Item
      const removeBtn = target.closest('[data-action="remove-item"]');
      if (removeBtn) {
        window.removeArrayItem(removeBtn, removeBtn.dataset.prefix);
        return;
      }

      // Add Item
      const addBtn = target.closest('[data-action="add-item"]');
      if (addBtn) {
        window.addArrayItem(addBtn, addBtn.dataset.hasKey === "true");
        return;
      }

      // Toggle Visibility (Label)
      const label = target.closest('[data-action="toggle-visibility"]');
      if (label) {
        const content = label.nextElementSibling;
        if (content) content.hidden = !content.hidden;
        return;
      }

      // Refresh Handles
      const refreshBtn = target.closest('[data-action="refresh-handles"]');
      if (refreshBtn) {
        const sel = refreshBtn.previousElementSibling;
        if (sel) sel.innerHTML = window.renderHandleOptions();
        return;
      }

      // Use Handle Interface
      const useBtn = target.closest('[data-action="use-interface"]');
      if (useBtn) {
        const { interface: iface, id, ref } = useBtn.dataset;
        window.useHandle(iface, id, ref);
        return;
      }
    });

    container.addEventListener("change", (e) => {
      const target = e.target;

      // Handle Action Change
      if (target.matches(".handle-action-select")) {
        handleActionChange(target);
        return;
      }

      // Handle Type Change
      if (target.matches(".handle-type-select")) {
        const card = target.closest(".mojo-handle-card");
        updateHiddenHandleInput(card);
        return;
      }

      // Handle Custom Input Change
      if (target.matches(".handle-custom-input")) {
        const card = target.closest(".mojo-handle-card");
        updateHiddenHandleInput(card);
        return;
      }

      // Handle Union Discriminator Change (Delegated)
      if (target.matches(".union-discriminator")) {
        const group = target.closest(".union-group");
        const tag = target.value;
        group
          .querySelectorAll(".union-field")
          .forEach((el) => (el.hidden = el.dataset.tag !== tag));
        // The original logic fired a new change event on the group, but the select's change event bubbles anyway.
        // Explicitly ensuring main form updates if needed.
        return;
      }
    });
  };

  const handleActionChange = (select) => {
    const card = select.closest(".mojo-handle-card");
    const icon = card.querySelector(".handle-icon");
    const customContainer = card.querySelector(".handle-custom-container");

    card.className =
      "mojo-handle-card " +
      (select.value === "close"
        ? "closed"
        : select.value === "new_pipe"
          ? "new"
          : select.value === "use_handle"
            ? "custom"
            : "");
    icon.textContent =
      select.value === "close"
        ? "❌"
        : select.value === "new_pipe"
          ? "🆕"
          : select.value === "use_handle"
            ? "🔢"
            : "🔌";
    customContainer.style.display =
      select.value === "use_handle" ? "block" : "none";

    updateHiddenHandleInput(card);
  };

  const updateHiddenHandleInput = (card) => {
    const customInput = card.querySelector(".handle-custom-input");
    const select = card.querySelector(".handle-action-select");
    const typeSelect = card.querySelector(".handle-type-select");
    const hiddenInput = card.querySelector(".param-input");

    // Parse current JSON to preserve static fields
    let current = {};
    try {
      current = JSON.parse(hiddenInput.value);
    } catch (e) {}

    const newVal = {
      ...current,
      __mojoType: "Handle",
      action: select.value,
      type: typeSelect ? typeSelect.value : current.type,
      customHandle: customInput.value,
    };

    hiddenInput.value = JSON.stringify(newVal);
    hiddenInput.dispatchEvent(new Event("change", { bubbles: true }));
  };
  window.reindexArrayItems = function (container, prefix) {
    if (!container) return;
    Array.from(container.children).forEach((item, index) => {
      const updateName = (el) => {
        if (el.name) {
          // Find and update the first array index suffix after the prefix
          if (prefix && el.name.startsWith(prefix)) {
            const suffix = el.name.substring(prefix.length);
            const newSuffix = suffix.replace(/^\[\d+\]/, `[${index}]`);
            el.name = prefix + newSuffix;
          } else if (el.name.startsWith("[")) {
            // Root array case: `[oldIndex].prop`
            el.name = el.name.replace(/^\[\d+\]/, `[${index}]`);
          }
        }
      };
      updateName(item); // Process the item itself if it's an input? Likely a wrapper.
      item.querySelectorAll("[name]").forEach(updateName);

      // Update label or badge if present?
      const label = item.querySelector(".array-index-label");
      if (label) label.textContent = index;
    });
    // Notify change for state inputs
    container.dispatchEvent(new Event("change", { bubbles: true }));
  };

  window.removeArrayItem = function (btn, prefix) {
    const item = btn.closest(".array-item, .map-entry");
    if (!item) return;
    const container = item.parentElement;
    item.remove();
    if (container) {
      reindexArrayItems(container, prefix);
      updateContainerCount(container);
    }
  };

  window.updateContainerCount = function (container) {
    const group = container.closest(".array-group, .map-group");
    if (!group) return;
    const badge = group.querySelector(".count-badge");
    if (badge) {
      const count = container.children.length;
      badge.textContent = `${count} ${count === 1 ? "item" : "items"}`;
    }
  };

  window.addArrayItem = function (btn) {
    const group = btn.closest(".array-group") || btn.closest(".map-group");
    const container =
      group.querySelector(".array-items-container") ||
      group.querySelector(".map-entries-container");
    const template = group.querySelector(".item-template").innerHTML;
    const prefix = group.dataset.prefix;

    // Use current length as index for new item
    const index = container.children.length;

    let newItemHtml;
    if (!template || template.trim() === "") {
      const spec = window.MojoTemplateRegistry[group.id];
      if (spec) {
        let itemType = inferTypeFromMojomType(spec.elementSpec);
        // Protect specialized types from being overridden to generic struct
        const isSpecializedStruct = [
          "string16",
          "bigstring",
          "bigstring16",
          "Url",
          "filepath",
        ].includes(itemType);
        if (!isSpecializedStruct && spec.structSpec) {
          itemType = "struct";
        }
        const itemParam = {
          name: `[${index}]`,
          type: itemType,
          structSpec: spec.structSpec,
          elementSpec:
            spec.elementSpec.elementType ||
            (spec.elementSpec.$ && spec.elementSpec.$.elementType) ||
            null,
        };

        const siblingInput = group.querySelector(".param-input");
        const interceptId = siblingInput ? siblingInput.dataset.id : "";
        const isInterceptor = !!interceptId;

        newItemHtml = renderInput(itemParam, null, {
          isInterceptor,
          interceptId,
          parentName: prefix,
          isTemplate: false,
        });
      } else {
        console.error("No template and no registry spec found for", group.id);
        return;
      }
    } else {
      newItemHtml = template.replace(/\{index\}/g, index);
    }

    // Create temp div to parse HTML
    const temp = document.createElement("div");
    temp.innerHTML = safeHTML(newItemHtml);
    // Actually templateHtml usually has one root element? No, renderedItems joining.
    // renderInput returns a string... wait.
    // My template generator wrapped it in nothing?
    // See code: `const templateHtml = renderItemHtml(...)`.
    // renderInput returns a `div.form-group` or string.

    // Wait, my loop code was:
    // `const renderedItems = items.map(...) => <div class="array-item">...</div>`
    // So the template should also represent the inner content of `.array-item`?
    // No, `renderItemHtml` returns the CONTENT of the item.
    // The wrapper `<div class="array-item">` is in the loop in `renderInput`.

    // I need to ensure the template includes the wrapper if I want consistent styling?
    // Or I construct the wrapper here.

    const wrapper = document.createElement("div");
    wrapper.className = "array-item";

    // If templateHtml is just the input, we wrapper it.
    wrapper.innerHTML = safeHTML(`<div class="item-content">${newItemHtml}</div>
                        <button type="button" class="remove-item-btn" data-action="remove-item" data-prefix="${escapeHtml(prefix || "")}">&times;</button>`);

    container.appendChild(wrapper);
    updateContainerCount(container);

    // No need to reindex since we appended, unless we want to be safe.
    // But typically we should just valid index.
    container.dispatchEvent(new Event("change", { bubbles: true }));
  };

  function renderInput(param, value, options = {}) {
    const { isInterceptor, index, interceptId, parentName, isTemplate, depth } =
      options;

    const typeString =
      typeof param.type === "object" ? param.type.type : param.type;
    let inputType = MojoParser.getInputType(typeString);

    // Special Handling for Common Mojo Types
    // 1. URL: Unwrap { arg_url: "..." } to simple string
    if (
      typeString === "Url" ||
      typeString.endsWith(".Url") ||
      (typeof value === "object" && value && (value.arg_url || value.url))
    ) {
      const urlVal = value ? value.arg_url || value.url || "" : "";
      return `
                <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        ${escapeHtml(param.name ? param.name.replace(/^arg_/, "") : "")}
                        <span class="type">Url</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ""}
                    </label>
                    <input type="text" 
                   class="intercept-input param-input" 
                           data-id="${interceptId}" 
                           data-index="${index}" 
                           data-type="url_wrapped" 
                           value="${escapeHtml(urlVal)}" 
                           placeholder="https://...">
                </div>`;
    }

    // 1.5 String16 and BigString16 (Prioritize over Struct)
    let effectiveType = param.type;
    if (effectiveType === "struct" && param.structSpec) {
      const manualInfer = inferTypeFromMojomType(param.structSpec);
      if (
        manualInfer === "string16" ||
        manualInfer === "bigstring16" ||
        manualInfer === "bigstring"
      ) {
        effectiveType = manualInfer;
      } else {
        if (
          param.structSpec.fields &&
          param.structSpec.fields.length === 1 &&
          param.structSpec.fields[0].name === "data"
        ) {
          if (value && value.data && typeof value.data === "object") {
            if (
              "bytes" in value.data ||
              "arg_bytes" in value.data ||
              "shared_memory" in value.data
            ) {
              effectiveType = "bigstring16";
            } else if (
              Array.isArray(value.data) ||
              value.data.length !== undefined
            ) {
              effectiveType = "string16";
            }
          }
        }
      }
    }

    if (effectiveType === "filepath") {
      const displayValue = MojoUtils.decodeBigString(value, true);
      const displayName = escapeHtml(
        param.name ? param.name.replace(/^arg_/, "") : "",
      );
      return `
                <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        ${displayName}
                        <span class="type">FilePath</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ""}
                    </label>
                    <div style="display: flex; gap: 8px; align-items: center;">
                        <span style="font-size: 1.25em; filter: drop-shadow(0 0 2px rgba(0,0,0,0.5));">📁</span>
                        <input type="text" 
                               class="intercept-input param-input" 
                               data-id="${interceptId}" 
                               data-index="${index}" 
                               data-type="filepath" 
                               value="${escapeHtml(displayValue)}" 
                               placeholder="C:\\path\\to\\file"
                               style="flex: 1; font-family: 'Cascadia Code', 'Consolas', monospace; background: var(--bg-dark); color: #81a1c1; border: 1px solid var(--border-subtle); padding: 8px 12px; border-radius: 6px;">
                    </div>
                </div>`;
    }

    if (effectiveType === "string16") {
      const displayValue = MojoUtils.decodeBigString(value, true);
      return `
                <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        ${escapeHtml(param.name ? param.name.replace(/^arg_/, "") : "")}
                        <span class="type">String16</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ""}
                    </label>
                    <textarea 
                           class="intercept-input param-input" 
                           data-id="${interceptId}" 
                           data-index="${index}" 
                           data-type="string16" 
                           placeholder="String16 value"
                           rows="2"
                           style="width: 100%; font-family: monospace;">${escapeHtml(displayValue)}</textarea>
                </div>`;
    }

    if (effectiveType === "bigstring16") {
      const displayValue = MojoUtils.decodeBigString(value, true);
      return `
                <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        ${escapeHtml(param.name ? param.name.replace(/^arg_/, "") : "")}
                        <span class="type">BigString16</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ""}
                    </label>
                    <textarea
                           class="intercept-input param-input" 
                           data-id="${interceptId}" 
                           data-index="${index}" 
                           data-type="bigstring16" 
                           placeholder="BigString16 value"
                           rows="4"
                           style="width: 100%; font-family: monospace;">${escapeHtml(displayValue)}</textarea>
                </div>`;
    }

    if (effectiveType === "bigstring") {
      const displayValue = MojoUtils.decodeBigString(value, false);
      return `
                <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        ${escapeHtml(param.name ? param.name.replace(/^arg_/, "") : "")}
                        <span class="type">BigString</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ""}
                    </label>
                    <textarea
                           class="intercept-input param-input" 
                           data-id="${interceptId}" 
                           data-index="${index}" 
                           data-type="bigstring" 
                           placeholder="BigString value"
                           rows="4"
                           style="width: 100%; font-family: monospace;">${escapeHtml(displayValue)}</textarea>
                </div>`;
    }

    // 2. Mojo Handles: Special Card UI
    const isDataPipe =
      typeString === "data_pipe_consumer" ||
      typeString === "data_pipe_producer";

    const isHandleType =
      (typeof effectiveType === "object" &&
        effectiveType.type === "mojo_handle") ||
      effectiveType === "mojo_handle" ||
      typeString === "mojo_handle" ||
      typeString === "pending_remote" ||
      typeString === "pending_receiver" ||
      typeString === "pending_associated_remote" ||
      typeString === "pending_associated_receiver" ||
      isDataPipe;
    const isHandleValue =
      (value && value.__mojoType === "Handle") ||
      (value && value.$ && value.proxy && typeof value.$ === "object") ||
      (value && value.handle && value.handle.router_) ||
      (value && value.$ref); // Recognizes registry references

    if (isHandleType || isHandleValue) {
      let ifaceName = "Unknown";
      let ifaceId = "0";
      let typeLabel = "Mojo Handle";
      let currentAction = "preserve";
      let isReceiver = false;
      let refId = undefined;

      if (value && value.$ref) {
        ifaceName = value.type || "Unknown";
        ifaceId = value.$ref;
        refId = value.$ref;
        typeLabel = "Mojo Object";
      } else if (value && value.__mojoType === "Handle") {
        ifaceName = value.interface;
        ifaceId = value.interfaceId;
        refId = value.$ref;
        typeLabel = value.isReceiver ? "Pending Receiver" : "Mojo Remote";
        currentAction = value.action || "preserve";
        isReceiver = !!value.isReceiver;
      } else if (value && value.$ && value.proxy) {
        const meta = value.$;
        ifaceName =
          meta.interfaceName ||
          (meta.proxy && meta.proxy.interfaceName) ||
          "Unknown";
        // Try to get ID from registry
        const rawHandle =
          typeof MojoProxy !== "undefined"
            ? MojoProxy.getRawHandleFromMojoObject(value)
            : null;
        ifaceId =
          typeof MojoHandleRegistry !== "undefined" && rawHandle
            ? MojoHandleRegistry.register(rawHandle)
            : meta.interfaceId || "0";
        typeLabel = "Mojo Remote";
      } else if (value && (value.handle || value.router_ || value.endpoint_)) {
        typeLabel = "Pending Receiver";
        const rawHandle =
          typeof MojoProxy !== "undefined"
            ? MojoProxy.getRawHandleFromMojoObject(value)
            : null;
        ifaceId =
          typeof MojoHandleRegistry !== "undefined" && rawHandle
            ? MojoHandleRegistry.register(rawHandle)
            : "0";
        ifaceName = "PendingReceiver";
        isReceiver = true;
      } else if (
        value &&
        (value.__mojoGuiId !== undefined ||
          value.value !== undefined ||
          (value.writeMessage && value.readMessage))
      ) {
        // Raw MojoHandle object
        ifaceId =
          typeof MojoHandleRegistry !== "undefined"
            ? MojoHandleRegistry.register(value)
            : value.value || "0";
        ifaceName = "MojoHandle";
        typeLabel = "Handle";
      } else if (isHandleType) {
        // Manual Mode, no value yet.
        if (param.interface) {
          ifaceName = param.interface;
        } else if (isDataPipe) {
          ifaceName =
            typeString === "data_pipe_consumer"
              ? "Data Pipe Consumer"
              : "Data Pipe Producer";
        } else if (
          typeof effectiveType === "object" &&
          effectiveType.interface
        ) {
          ifaceName = effectiveType.interface;
        } else if (param.structSpec?.name) {
          ifaceName = param.structSpec.name;
        }

        if (isDataPipe) {
          typeLabel = "Data Pipe";
          currentAction = "new_pipe";
        } else if (typeString === "pending_remote" && ifaceName !== "Unknown") {
          typeLabel = "Mojo Handle";
          currentAction = "bind_listener";
        } else {
          typeLabel = "Mojo Handle";
          currentAction = "new_pipe";
        }
      }

      const displayName = escapeHtml(
        param.name ? param.name.replace(/^arg_/, "") : "",
      );

      // Handle Type Selection Template
      let handleTypeSelector = "";
      if (
        effectiveType === "mojo_handle" ||
        typeString === "mojo_handle" ||
        (!isDataPipe &&
          typeString !== "pending_remote" &&
          typeString !== "pending_receiver" &&
          typeString !== "pending_associated_remote" &&
          typeString !== "pending_associated_receiver")
      ) {
        handleTypeSelector = `
          <div style="margin-bottom: 8px;">
            <label style="font-size: 0.8em; color: var(--text-muted); display: block; margin-bottom: 2px;">Internal Type:</label>
            <select class="handle-type-select" style="width: 100%; padding: 4px; background: var(--bg-input); border: 1px solid var(--border-subtle); color: var(--text-main); border-radius: 4px;">
              <option value="mojo_handle" ${typeString === "mojo_handle" ? "selected" : ""}>Message Pipe</option>
              <option value="data_pipe_producer" ${typeString === "data_pipe_producer" ? "selected" : ""}>Data Pipe (Producer)</option>
              <option value="data_pipe_consumer" ${typeString === "data_pipe_consumer" ? "selected" : ""}>Data Pipe (Consumer)</option>
            </select>
          </div>
        `;
      }

      return `
                <div class="form-group handle-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        ${displayName}
                        <span class="type">${typeLabel}</span>
                    </label>
                    <div class="mojo-handle-card ${currentAction === "close" ? "closed" : currentAction === "new_pipe" ? "new" : ""}">
                        <div class="handle-icon">${currentAction === "close" ? "❌" : currentAction === "new_pipe" ? "🆕" : "🔌"}</div>
                        <div class="handle-info">
                            <div class="handle-interface">${escapeHtml(ifaceName)}</div>
                            <div class="handle-meta">ID: ${escapeHtml(ifaceId)}</div>
                        </div>
                        <div class="handle-actions">
                            ${handleTypeSelector}
                            <select class="handle-action-select">
                                <option value="preserve" ${currentAction === "preserve" ? "selected" : ""}>Keep Original</option>
                                <option value="close" ${currentAction === "close" ? "selected" : ""}>Close Handle</option>
                                <option value="new_pipe" ${currentAction === "new_pipe" ? "selected" : ""}>New Pipe</option>
                                <option value="bind_listener" ${currentAction === "bind_listener" ? "selected" : ""}>Bind Mock Listener</option>
                                <option value="use_handle" ${currentAction === "use_handle" ? "selected" : ""}>Use Handle ID</option>
                            </select>
                            <input type="hidden" class="param-input" name="${escapeHtml(param.name)}" data-type="mojo_handle" value='${escapeHtml(JSON.stringify({ __mojoType: "Handle", interface: ifaceName, interfaceId: ifaceId, isReceiver: isReceiver, action: currentAction, type: typeString, $ref: refId || undefined }))}'>
                            <div class="handle-custom-container" style="display:none; margin-top: 5px;">
                                <div style="display: flex; gap: 4px;">
                                    <select class="handle-custom-input" style="flex: 1; padding: 4px; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-input); color: var(--text-main);">
                                        <option value="" disabled selected>Select a handle...</option>
                                        ${window.renderHandleOptions ? window.renderHandleOptions() : ""}
                                    </select>
                                    <button type="button" class="btn btn-secondary btn-small" data-action="refresh-handles" title="Refresh Handles">🔄</button>
                                </div>
                            </div>
                            ${ifaceName !== "Unknown" ? `<button type="button" class="btn btn-secondary btn-small" style="margin-top: 4px; width: 100%;" data-action="use-interface" data-interface="${escapeHtml(ifaceName)}" data-id="${escapeHtml(ifaceId)}" data-ref="${escapeHtml(refId || "")}">Use Interface</button>` : ""}
                        </div>
                    </div>
                </div>
            `;
    }

    // 3. Structs: Recursive Rendering
    if (param.type === "struct" && param.structSpec) {
      const nsName =
        param.structSpec.name && param.structSpec.name.includes(".")
          ? param.structSpec.name.substring(
              0,
              param.structSpec.name.lastIndexOf("."),
            )
          : null;
      const ns = nsName ? MojoReflectionService.resolveNamespace(nsName) : null;
      const childParams = mapFieldsToUIParams(param.structSpec.fields, ns);
      const childValues = value && typeof value === "object" ? value : {};

      const renderedFields = childParams
        .map((p) => {
          let pValue = childValues[p.name];
          if (pValue === undefined && p.name.startsWith("arg_")) {
            pValue = childValues[p.name.substring(4)];
          }
          return renderInput(p, pValue, {
            isInterceptor,
            interceptId,
            parentName: parentName ? `${parentName}.${param.name}` : param.name,
            isTemplate,
          });
        })
        .join("");

      return `
                <div class="form-group struct-group" 
                     data-type="struct" 
                     data-original-name="${escapeHtml(param.name)}">
                    <label style="cursor: pointer;" data-action="toggle-visibility">
                        <span style="display:inline-block; transform: rotate(90deg); font-size: 0.8em;">&#10095;</span>
                        ${escapeHtml(param.name ? param.name.replace(/^arg_/, "") : "")}
                        <span class="type">Struct</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ""}
                    </label>
                    <div class="struct-content" style="padding-left: 10px; border-left: 2px solid var(--border-subtle); margin-left: 4px; margin-top: 4px;">
                        ${renderedFields}
                    </div>
                </div>`;
    }

    // 4. Arrays: Recursive List Rendering
    if (param.type === "array" && param.elementSpec) {
      const items = Array.isArray(value) ? value : [];
      const prefix = parentName
        ? `${parentName}${param.name.startsWith("[") ? "" : "."}${param.name}`
        : param.name;

      const renderItemHtml = (val, idx, options = {}) => {
        let itemType = inferTypeFromMojomType(param.elementSpec);
        const itemStructSpec =
          param.elementSpec.$ && param.elementSpec.$.structSpec
            ? param.elementSpec.$.structSpec
            : null;

        // Protect specialized types from being overridden to generic struct
        const isSpecializedStruct = [
          "string16",
          "bigstring",
          "bigstring16",
          "Url",
          "filepath",
        ].includes(itemType);
        if (!isSpecializedStruct && itemStructSpec) {
          itemType = "struct";
        }

        const itemParam = {
          name: `[${idx}]`,
          type: itemType,
          structSpec: itemStructSpec,
          elementSpec:
            param.elementSpec.elementType ||
            (param.elementSpec.$ && param.elementSpec.$.elementType) ||
            null,
        };
        return renderInput(itemParam, val, {
          isInterceptor,
          interceptId,
          parentName: prefix,
          isTemplate: options.isTemplate || isTemplate,
        });
      };

      const renderedItems = items
        .map(
          (val, i) => `
                <div class="array-item">
                    <div class="item-content">${renderItemHtml(val, i)}</div>
                    <button type="button" class="remove-item-btn" data-action="remove-item" data-prefix="${escapeHtml(prefix || "")}">&times;</button>
                </div>
            `,
        )
        .join("");

      // Template for new items
      // If we are already inside a template (isTemplate=true), we do NOT generate the inner template to avoid infinite recursion.
      let templateHtml = "";

      // Generate a unique ID for this array container to link it to the registry
      const containerId =
        "array_group_" + Math.random().toString(36).substr(2, 9);

      if (!isTemplate) {
        templateHtml = renderItemHtml(null, "TEMPLATE_INDEX", {
          isTemplate: true,
        }).replace(/name="([^"]*?)\[TEMPLATE_INDEX\]"/g, 'name="$1[{index}]"');
      } else {
        // Register the spec for lazy loading
        window.MojoTemplateRegistry[containerId] = {
          elementSpec: param.elementSpec,
          structSpec:
            param.elementSpec.$ && param.elementSpec.$.structSpec
              ? param.elementSpec.$.structSpec
              : null,
          type: param.type,
        };
      }

      return `
                <div class="form-group array-group" 
                     id="${containerId}"
                     data-type="array" 
                     data-original-name="${escapeHtml(param.name)}"
                     data-prefix="${escapeHtml(prefix)}">
                    <label style="cursor: pointer;" data-action="toggle-visibility">
                        <span style="display:inline-block; transform: rotate(90deg); font-size: 0.8em;">&#10095;</span>
                        ${escapeHtml(param.name ? param.name.replace(/^arg_/, "") : "")}
                        <span class="type">Array&lt;${inferTypeFromMojomType(param.elementSpec)}&gt;</span>
                        <span class="badge count-badge" style="margin-left: 8px; font-size: 0.8em; background: var(--bg-hover);">${items.length} ${items.length === 1 ? "item" : "items"}</span>
                    </label>
                    <div class="array-content" style="padding-left: 10px; border-left: 2px solid var(--border-subtle); margin-left: 4px; margin-top: 4px;">
                        <div class="array-items-container">
                            ${renderedItems}
                        </div>
                        <template class="item-template">${templateHtml}</template>
                        <button type="button" class="btn btn-secondary btn-small add-item-btn" 
                                data-action="add-item" data-has-key="false">+ Add Item</button>
                    </div>
                </div>`;
    }

    // 5. Maps: Key/Value Pairs
    if (param.type === "map" && param.mapSpec) {
      let entries = [];
      if (Array.isArray(value)) {
        // Manual Mode State: [{key, value}, ...]
        entries = value.map((item) => [item.key, item.value]);
      } else {
        const mapObj = value && typeof value === "object" ? value : {};
        entries = Object.entries(mapObj);
      }
      const prefix = parentName
        ? `${parentName}${param.name.startsWith("[") ? "" : "."}${param.name}`
        : param.name;

      const renderEntryHtml = (entryKey, entryValue, idx) => {
        const keyParam = {
          name: "key",
          type: inferTypeFromMojomType(param.mapSpec.key),
        };
        const valParam = {
          name: "value",
          type: inferTypeFromMojomType(param.mapSpec.value),
          structSpec:
            param.mapSpec.value && param.mapSpec.value.$
              ? param.mapSpec.value.$.structSpec
              : null,
          elementSpec:
            (param.mapSpec.value &&
              (param.mapSpec.value.elementType ||
                param.mapSpec.value.$.elementType)) ||
            null,
          mapSpec:
            param.mapSpec.value &&
            (param.mapSpec.value.keyType || param.mapSpec.value.$.keyType)
              ? {
                  key:
                    param.mapSpec.value.keyType ||
                    param.mapSpec.value.$.keyType,
                  value:
                    param.mapSpec.value.valueType ||
                    param.mapSpec.value.$.valueType,
                }
              : null,
        };

        const keyHtml = renderInput(keyParam, entryKey, {
          isInterceptor,
          interceptId,
          parentName: `${prefix}[${idx}]`,
          depth: (depth || 0) + 1,
        });
        const valHtml = renderInput(valParam, entryValue, {
          isInterceptor,
          interceptId,
          parentName: `${prefix}[${idx}]`,
          depth: (depth || 0) + 1,
        });

        return `
                        <div class="form-group struct-group map-entry" 
                             data-original-name="${idx === "TEMPLATE_INDEX" ? "TEMPLATE_INDEX" : idx}"
                             style="margin-bottom: 0;">
                            <div class="struct-content" style="display: flex; gap: 8px; align-items: flex-start;">
                                <div style="flex: 1;">${keyHtml}</div>
                                <div style="flex: 2;">${valHtml}</div>
                            </div>
                        </div>`;
      };

      const renderedEntries = entries
        .map(
          (entry, i) => `
                    <div class="array-item" style="display: flex; align-items: flex-start; margin-bottom: 4px;">
                        <div style="flex-grow: 1;">${renderEntryHtml(entry[0], entry[1], i)}</div>
                        <button type="button" class="remove-item-btn" data-action="remove-item" style="margin-left: 8px; padding: 4px 8px; background: transparent; border: 1px solid var(--border-subtle); color: var(--text-muted); cursor: pointer;">&times;</button>
                    </div>
                `,
        )
        .join("");

      const templateHtml = renderEntryHtml("", null, "TEMPLATE_INDEX").replace(
        /name="([^"]*?)\[TEMPLATE_INDEX\]"/g,
        'name="$1[{index}]"',
      );

      return `
                <div class="form-group map-group" 
                     data-type="map" 
                     data-original-name="${escapeHtml(param.name)}"
                     data-prefix="${escapeHtml(prefix)}"
                     style="margin-bottom: 8px;">
                    <label style="cursor: pointer;" data-action="toggle-visibility">
                        <span style="display:inline-block; transform: rotate(90deg); font-size: 0.8em;">&#10095;</span>
                        ${escapeHtml(param.name ? param.name.replace(/^arg_/, "") : "")}
                        <span class="type">Map&lt;${inferTypeFromMojomType(param.mapSpec.keySpec)}, ${inferTypeFromMojomType(param.mapSpec.valueSpec)}&gt;</span>
                        <span class="badge count-badge" style="margin-left: 8px; font-size: 0.8em; background: var(--bg-hover);">${entries.length} ${entries.length === 1 ? "item" : "items"}</span>
                    </label>
                    <div class="map-content" style="padding-left: 10px; border-left: 2px solid var(--border-subtle); margin-left: 4px; margin-top: 4px;">
                        <div class="map-entries-container">
                            ${renderedEntries}
                        </div>
                        <template class="item-template">${templateHtml}</template>
                        <button type="button" class="btn btn-secondary btn-small add-item-btn" 
                                data-action="add-item" data-has-key="true">+ Add Entry</button>
                    </div>
                </div>`;
    }

    // 6. Unions: Discriminator + Active Field
    if (param.type === "union" && param.structSpec) {
      const nsName =
        param.structSpec.name && param.structSpec.name.includes(".")
          ? param.structSpec.name.substring(
              0,
              param.structSpec.name.lastIndexOf("."),
            )
          : null;
      const ns = nsName ? MojoReflectionService.resolveNamespace(nsName) : null;
      const unionFields = mapFieldsToUIParams(param.structSpec.fields, ns);

      if (!unionFields || unionFields.length === 0) {
        return `<div class="form-group error-state">Union ${escapeHtml(param.name)} has no fields.</div>`;
      }

      // Value for a Union is an object like { tag: value }
      // We need to find the active tag.
      let activeTag = unionFields[0].name; // Default to first
      let activeValue = undefined;

      if (value && typeof value === "object") {
        const keys = Object.keys(value);
        // If we have keys, find the one that matches a field name
        for (const k of keys) {
          if (unionFields.some((f) => f.name === k)) {
            activeTag = k;
            activeValue = value[k];
            break;
          }
        }
      }

      const options = unionFields
        .map(
          (f) =>
            `<option value="${f.name}" ${f.name === activeTag ? "selected" : ""}>${f.name.replace(/^arg_/, "")}</option>`,
        )
        .join("");

      const renderedFields = unionFields
        .map((f) => {
          const isHidden = f.name !== activeTag;
          // We pre-render all fields but hide inactive ones
          // We pass the activeValue ONLY to the active field to avoid confusion,
          // or we could pass null to others.
          const val = f.name === activeTag ? activeValue : undefined;

          // We need to prevent ID conflicts if we render all? No, IDs are fine.
          return `
                    <div class="union-field" data-tag="${f.name}" ${isHidden ? "hidden" : ""}>
                        ${renderInput(f, val, { isInterceptor, interceptId, parentName: parentName ? `${parentName}.${param.name}` : param.name, depth: (depth || 0) + 1 })}
                    </div>
                 `;
        })
        .join("");

      return `
                <div class="form-group union-group" 
                     data-type="union" 
                     data-original-name="${escapeHtml(param.name)}"
                     style="margin-bottom: 8px; border-left: 3px solid var(--primary); padding-left: 8px;">
                     <label>
                        ${escapeHtml(param.name ? param.name.replace(/^arg_/, "") : "")}
                        <span class="type">Union</span>
                     </label>
                     <div style="margin-bottom: 6px;">
                        <span class="badget">Active Member:</span>
                        <select class="union-discriminator" style="padding: 2px 4px; border: 1px solid var(--border-subtle); border-radius: 4px; background: var(--bg-input); color: var(--text-main);">
                            ${options}
                        </select>
                     </div>
                     <div class="union-content">
                        ${renderedFields}
                     </div>
                </div>
             `;
    }

    let displayValue = value;

    // 2. BigBuffer: Handle as raw text/bytes
    if (typeString.endsWith("BigBuffer")) {
      // simplified display for big buffer
      inputType = "textarea";
    }

    // Force textarea for 'json', complex types, or if it's a BigInt value (to allow editing as text)
    // Auto-switch to textarea if simple string is long or has newlines
    if (
      typeString === "string" &&
      typeof value === "string" &&
      (value.length > 50 || value.includes("\n"))
    ) {
      inputType = "textarea";
    }

    if (
      typeString === "json" ||
      typeString.includes("array") ||
      typeString.includes("map") ||
      (value &&
        typeof value === "object" &&
        typeString !== "string16" &&
        typeString !== "bigstring16" &&
        typeString !== "bigstring")
    ) {
      inputType = "textarea";
    }

    // Clean handling of BigInts/Objects for display
    if (typeof value === "bigint") {
      displayValue = value.toString() + "n";
      if (inputType === "number") inputType = "text";
    } else if (
      typeof value === "object" &&
      value !== null &&
      typeString !== "string16" &&
      typeString !== "bigstring16" &&
      typeString !== "bigstring"
    ) {
      // DEEP Sanitize before stringifying to remove inner arg_
      displayValue = safeStringify(sanitizeKeys(value), 2);
    } else if (value === undefined || value === null) {
      // Handle defaults if value is not provided (for Manual Form)
      if (!isInterceptor) {
        const def = MojoParser.getDefaultValue(typeString);
        if (def !== undefined) {
          displayValue = def;
          if (typeof def === "object") displayValue = safeStringify(def, 2);
        } else if (typeString === "json") {
          displayValue = "{}";
        }
      }
    }

    // Attributes generation
    let attributes = "";
    if (isInterceptor) {
      attributes = `class="intercept-input param-input ${inputType === "textarea" ? "params-editor" : ""}"
                          name="${escapeHtml(param.name)}"
                          data-id="${interceptId}"
                          data-index="${index}"
                          data-type="${escapeHtml(typeString)}"`;
      if (inputType === "textarea") attributes += ' style="min-height: 100px;"';
    } else {
      // Manual Form attributes
      const sep = param.name.startsWith("[") ? "" : ".";
      const fullName = parentName
        ? `${parentName}${sep}${param.name}`
        : param.name;
      attributes = `class="param-input" name="${escapeHtml(fullName)}" data-type="${escapeHtml(typeString)}"`;
    }

    const displayName = escapeHtml(
      param.name ? param.name.replace(/^arg_/, "") : "",
    );

    if (inputType === "checkbox") {
      return `
                <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        <input type="checkbox" ${attributes} ${displayValue ? "checked" : ""}>
                        ${displayName}
                        <span class="type">${escapeHtml(typeString)}</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ""}
                    </label>
                </div>
            `;
    } else if (inputType === "textarea") {
      return `
                <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        ${displayName}
                        <span class="type">${escapeHtml(typeString)}</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ""}
                    </label>
                    <textarea ${attributes} placeholder="Enter ${typeString}...">${escapeHtml(displayValue || "")}</textarea>
                </div>
            `;
    } else if (typeof param.type === "object" && param.type.type === "enum") {
      // Render Enum Dropdown
      let optionsHtml = "";
      const options = param.type.options || {};
      // Helper to find the key for the current value (if any)
      // displayValue might be the number.
      for (const [key, val] of Object.entries(options)) {
        const isSelected = String(val) === String(displayValue);
        optionsHtml += `<option value="${val}" ${isSelected ? "selected" : ""}>${escapeHtml(key)} (${val})</option>`;
      }

      return `
                 <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                     <label>
                         ${displayName}
                         <span class="type">enum</span>
                         ${param.optional ? '<span class="optional">(optional)</span>' : ""}
                     </label>
                     <select class="param-input" data-type="enum" ${attributes} style="background:var(--bg-dark); color:var(--text-light); border:1px solid var(--border-color); padding:4px; border-radius:4px; width:100%;">
                         ${optionsHtml}
                     </select>
                 </div>
             `;
    } else {
      return `
                <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        ${displayName}
                        <span class="type">${escapeHtml(typeString)}</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ""}
                    </label>
                    <input type="${inputType === "number" && typeof displayValue === "string" && displayValue.endsWith("n") ? "text" : inputType}"
                           ${attributes}
                           value="${escapeHtml(displayValue ?? "")}"
                           placeholder="Enter ${typeString}...">
                </div>
            `;
    }
  }

  window.parseInputValue = function (input) {
    const type = input.dataset.type;
    let val = input.value;

    if (input.type === "checkbox") {
      val = input.checked;
    } else if (type === "number" || input.type === "number") {
      val = Number(val);
    } else if (type === "int64" || type === "uint64") {
      if (val.endsWith("n")) val = val.slice(0, -1);
      try {
        val = BigInt(val);
      } catch (e) {
        val = BigInt(0);
      }
    } else if (
      type === "json" ||
      (type &&
        (type.includes("array") ||
          type.includes("map") ||
          type.includes("object")))
    ) {
      try {
        val = JSON.parse(val);
      } catch (e) {}
    } else if (type === "url_wrapped") {
      val = { arg_url: val };
    } else if (type === "string16") {
      val = MojoUtils.inflateString16(val);
    } else if (type === "bigstring16") {
      val = MojoUtils.inflateBigString(val, true);
    } else if (type === "enum") {
    } else if (type === "bigstring") {
      val = MojoUtils.inflateBigString(val, false);
    } else if (type === "filepath") {
      // Treat as string, inflation happens in MojoUtils.inflateStruct
    }
    return val;
  };

  window.collectFormData = function (container, isArray) {
    const result = isArray ? [] : {};
    const nodes = Array.from(container.children);

    nodes.forEach((node) => {
      let group = node;

      if (!group.classList.contains("form-group")) {
        const inner = group.querySelector(".form-group");
        if (inner) group = inner;
      }
      if (!group || !group.classList.contains("form-group")) return;

      let value;
      let key;

      if (group.classList.contains("struct-group")) {
        key = group.dataset.originalName;
        const content = group.querySelector(".struct-content");
        value = collectFormData(content, false);
      } else if (group.classList.contains("array-group")) {
        key = group.dataset.originalName;
        const content = group.querySelector(".array-items-container");
        value = collectFormData(content, true);
      } else if (group.classList.contains("map-group")) {
        key = group.dataset.originalName;
        const content = group.querySelector(".map-entries-container");
        value = {};
        if (content && content.children) {
          const entries = collectFormData(content, true);
          entries.forEach((entry) => {
            if (entry.key !== undefined) value[entry.key] = entry.value;
          });
        }
      } else if (group.classList.contains("union-group")) {
        key = group.dataset.originalName;
        const activeTag = group.querySelector(".union-discriminator").value;
        if (activeTag) {
          const activeContent = group.querySelector(
            `.union-field[data-tag="${activeTag}"]`,
          );
          // We need to collect the value from the active field NO MATTER WHAT
          // The active field is a .form-group wrapper, so we need to recurse into it?
          // But collectFormData iterates children.
          // Let's create a temporary container or just target the input/content directly?
          // Actually, activeContent contains the rendered input from renderInput.
          // We can just call collectFormData on activeContent.parentNode? No.

          // Better: The union-field div CONTAINS the rendered input from renderInput.
          // renderInput returns a .form-group.
          // So activeContent has a single .form-group child.
          const innerGroup = activeContent.querySelector(".form-group");
          if (innerGroup) {
            const innerData = collectFormData(
              { children: [innerGroup] },
              false,
            );
            // innerData is { fieldName: value }
            // We want { activeTag: value }
            // But wait, the inner field name IS the activeTag (usually args are named).
            // Mojo Union JS format: { tag: value }
            value = { [activeTag]: Object.values(innerData)[0] };
          }
        }
      } else {
        const input = group.querySelector(".param-input");
        if (!input) return;

        // key fallback: dataset.originalName (Struct/Map), or input.name (Manual Primitive)
        key = group.dataset.originalName || input.name;
        if (!isArray && !key) return; // Should not happen for named params

        value = parseInputValue(input);
      }

      if (isArray) {
        result.push(value);
      } else {
        // Ensure key is valid string
        if (key) result[key] = value;
      }
    });
    return result;
  };

  function getInterceptorFormValues(id) {
    const formContainer = document.getElementById(`interceptForm_${id}`);
    if (!formContainer) return {};
    // Intercept params are named arguments, so return Object
    return collectFormData(formContainer, false);
  }

  function convertParamsObjectToArray(paramsObj, methodDef) {
    if (!methodDef || !methodDef.parameters) return [];
    return methodDef.parameters.map((p) => {
      // paramsObj keys match p.name exactly (including arg_ prefix if present in mojom)
      // collectFormData uses dataset.originalName which is exact param.name
      return paramsObj[p.name];
    });
  }

  function renderInterceptorForm(paramsDef, values, interceptId) {
    if (!paramsDef || paramsDef.length === 0) {
      return `<div class="empty-state small"><p>No parameters</p></div>`;
    }

    const inputs = paramsDef
      .map((param, index) => {
        let value;
        if (Array.isArray(values)) {
          value = values[index];
        } else if (values && typeof values === "object") {
          // Try exact name, then name without arg_ prefix (since values might be sanitized)
          value = values[param.name];
          if (value === undefined && param.name.startsWith("arg_")) {
            value = values[param.name.substring(4)];
          }
        }
        return renderInput(param, value, {
          isInterceptor: true,
          index,
          interceptId,
        });
      })
      .join("");

    return `<div id="interceptForm_${interceptId}">${inputs}</div>`;
  }

  global.InputRendererService = {
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
    init,
  };
})(this);
