/**
 * MojoGUI Awards Feature
 * Displays curated high-risk Mojo interfaces with filtering,
 * Chromium Code Search links, and one-click research actions.
 *
 * Smart Picks: Auto-generates award candidates from index.json metadata
 * by identifying direct renderer-accessible interfaces with high method
 * counts, no gates, or hardware/device access patterns.
 */
(function (global) {
  "use strict";

  const containerId = "tab-awards";
  let allAwards = [];
  let activeFilter = "all";
  let activeSource = "all"; // "all", "curated", "smart"

  /**
   * Resolve an award entry to its matching interface in MojoGUI_State.
   * Returns the interface object with metadata, or null.
   */
  function resolveInterface(award) {
    const interfaces = (global.MojoGUI_State || {}).interfaces || [];
    if (!interfaces.length) return null;

    const file = (award.file || "").replace(/\\/g, "/");
    const method = award.method || "";
    const inferred = inferInterfaceName(award);

    // 1. Match by method presence + file path overlap
    for (const iface of interfaces) {
      const ifaceMethods = iface.methods || [];
      if (method && ifaceMethods.includes(method)) {
        // Check file path similarity (mojom source path)
        const ifaceFile = (iface.file || "").toLowerCase();
        const fileLeaf = file.split("/").pop().replace(".mojom", "").toLowerCase();
        if (ifaceFile.includes(fileLeaf) || iface.name.toLowerCase() === inferred.toLowerCase()) {
          return iface;
        }
      }
    }

    // 2. Match by inferred name
    const q = inferred.toLowerCase();
    let match = interfaces.find((i) => i.name.toLowerCase() === q);
    if (!match) {
      match = interfaces.find((i) => i.name.toLowerCase().includes(q));
    }
    return match || null;
  }

  /**
   * Generate smart picks from loaded interfaces based on metadata signals.
   * Identifies high-value targets that may not be in the curated list.
   */
  function generateSmartPicks(curatedFiles) {
    const interfaces = (global.MojoGUI_State || {}).interfaces || [];
    if (!interfaces.length) return [];

    // Build set of already-curated interface names for dedup
    const curatedNames = new Set();
    for (const cf of curatedFiles) {
      const name = inferInterfaceName(cf);
      curatedNames.add(name.toLowerCase());
    }

    const picks = [];

    // High-risk keyword patterns in method names
    const riskPatterns = [
      { re: /^(Write|Send|Push|Transmit|Control|Execute|Eval|Run|Install|Open|Create|Delete|Remove)/i, weight: 2, tag: "write-primitive" },
      { re: /(File|Path|Directory|Blob|Stream|Socket|Port|Device|USB|HID|Serial|NFC|Bluetooth)/i, weight: 2, tag: "hw/fs-access" },
      { re: /(Navigate|Load|Redirect|Commit|Url|Origin|Security|Permission|Policy)/i, weight: 1, tag: "nav/security" },
      { re: /(Deserialize|Parse|Decode|Compile|Wasm|JIT)/i, weight: 2, tag: "parser" },
      { re: /(Register|Bind|Connect|Attach|Mount)/i, weight: 1, tag: "lifecycle" },
    ];

    for (const iface of interfaces) {
      const meta = iface.metadata || {};
      const category = meta.category || "internal";
      const scope = meta.scope || "context";
      const gates = meta.gates || [];
      const methods = iface.methods || [];
      const name = iface.name || "";

      // Skip if already curated
      if (curatedNames.has(name.toLowerCase())) continue;

      // Only consider direct interfaces (renderer-accessible)
      if (category !== "direct") continue;

      // Score the interface
      let score = 0;
      let reasons = [];
      let tags = new Set();

      // Signal: No security gates (no feature flag, no permission required)
      if (gates.length === 0) {
        score += 2;
        reasons.push("No security gates");
      }

      // Signal: Many methods = large attack surface
      if (methods.length >= 8) {
        score += 2;
        reasons.push(methods.length + " methods (large surface)");
      } else if (methods.length >= 4) {
        score += 1;
      }

      // Signal: Process-scoped (available to entire renderer process, not just frame)
      if (scope === "process") {
        score += 1;
        reasons.push("Process-scoped");
      }

      // Signal: Method name risk analysis
      let riskMethods = [];
      for (const m of methods) {
        for (const p of riskPatterns) {
          if (p.re.test(m)) {
            score += p.weight;
            riskMethods.push(m);
            tags.add(p.tag);
            break; // Only count each method once
          }
        }
      }

      if (riskMethods.length > 0) {
        reasons.push("Risk methods: " + riskMethods.slice(0, 3).join(", ") +
          (riskMethods.length > 3 ? " (+" + (riskMethods.length - 3) + " more)" : ""));
      }

      // Threshold: must score at least 4 to be a smart pick
      if (score < 4) continue;

      // Map score to priority (6-9)
      const priority = Math.min(9, Math.max(6, Math.floor(score / 2) + 5));

      // Build a reason string
      const reason = reasons.join("; ") + ".";

      // Find the best method to highlight (highest-risk)
      const topMethod = riskMethods[0] || methods[0] || name;

      picks.push({
        file: iface.module + " / " + name,
        method: topMethod,
        reason: reason,
        priority: priority,
        _source: "smart",
        _iface: iface,
        _tags: Array.from(tags),
        _score: score,
      });
    }

    // Sort by score descending, take top 30
    picks.sort((a, b) => b._score - a._score);
    return picks.slice(0, 30);
  }

  async function loadAwards() {
    try {
      const response = await fetch("awards.json");
      if (!response.ok) throw new Error("Failed to load awards.json");
      const curated = await response.json();

      // Mark curated awards
      for (const a of curated) {
        a._source = "curated";
        a._iface = resolveInterface(a);
      }

      // Generate smart picks from index.json metadata
      const smart = generateSmartPicks(curated);

      allAwards = [...curated, ...smart];
      renderAwards(allAwards);
    } catch (e) {
      console.error("Awards load failed:", e);
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = MojoUtils.safeHTML(
          `<div class="error-message">Failed to load awards: ${e.message}</div>`,
        );
      }
    }
  }

  function getPriorityLabel(priority) {
    if (priority >= 9) return "Critical";
    if (priority >= 7) return "High";
    return "Medium";
  }

  function getPriorityClass(priority) {
    if (priority >= 9) return "priority-critical";
    if (priority >= 7) return "priority-high";
    return "priority-medium";
  }

  /**
   * Build a Chromium Code Search URL for an award entry.
   */
  function codeSearchUrl(award) {
    const file = award.file || "";
    const method = award.method || "";
    // Search for the method name within the file path context
    const query = method + " " + file.replace(/\\/g, "/");
    return `https://source.chromium.org/search?q=${encodeURIComponent(query)}&sq=&ss=chromium`;
  }

  /**
   * Extract interface name from a file path like "third_party/blink/...BlobRegistry..."
   * Heuristic: take the last path component without extension.
   */
  function inferInterfaceName(award) {
    const file = award.file || "";
    const parts = file.replace(/\\/g, "/").split("/");
    const filename = parts[parts.length - 1] || "";
    // Remove extension and common suffixes
    return filename
      .replace(/\.(mojom|h|cc|cpp|java|mm)$/i, "")
      .replace(/(Impl|Host|Client|Proxy|Stub)$/i, "");
  }

  /**
   * Build metadata badges HTML for an award card.
   */
  function renderMetaBadges(award) {
    const iface = award._iface;
    if (!iface) return "";

    const meta = iface.metadata || {};
    const category = meta.category || "internal";
    const scope = meta.scope || "context";
    const gates = meta.gates || [];

    let badges = '<div class="award-meta">';

    // Category badge
    if (category === "direct") {
      badges += '<span class="award-meta-badge meta-direct" title="Direct: bindable from renderer">Direct</span>';
    } else if (category === "associated") {
      badges += '<span class="award-meta-badge meta-assoc" title="Associated: multiplexed on parent pipe">Associated</span>';
    } else {
      badges += '<span class="award-meta-badge meta-internal" title="Internal: not in standard binder map">Internal</span>';
    }

    // Scope badge
    if (scope === "process") {
      badges += '<span class="award-meta-badge meta-scope" title="Process-scoped: available to entire renderer">Process</span>';
    }

    // Gate badges
    for (const gate of gates) {
      if (gate.startsWith("feature:")) {
        badges += `<span class="award-meta-badge meta-gate-feature" title="Feature flag required">${MojoUtils.escapeHtml(gate.replace("feature:", ""))}</span>`;
      } else if (gate.startsWith("permission:")) {
        badges += `<span class="award-meta-badge meta-gate-perm" title="Permission required">${MojoUtils.escapeHtml(gate.replace("permission:", ""))}</span>`;
      } else if (gate === "gesture:required") {
        badges += '<span class="award-meta-badge meta-gate-gesture" title="User gesture required">Gesture</span>';
      } else if (gate === "context:secure_only") {
        badges += '<span class="award-meta-badge meta-gate-secure" title="HTTPS only">HTTPS</span>';
      }
    }

    // No-gates indicator for direct interfaces (a positive signal)
    if (category === "direct" && gates.length === 0) {
      badges += '<span class="award-meta-badge meta-ungated" title="No feature flags or permission checks found">Ungated</span>';
    }

    // Method count
    const methodCount = (iface.methods || []).length;
    if (methodCount > 0) {
      badges += `<span class="award-meta-badge meta-methods" title="${methodCount} methods">${methodCount}m</span>`;
    }

    badges += "</div>";
    return badges;
  }

  function renderAwards(awards) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (awards.length === 0) {
      container.innerHTML = MojoUtils.safeHTML(
        `<div class="empty-state"><p>No awards found.</p></div>`,
      );
      return;
    }

    // Sort by priority (descending)
    awards.sort((a, b) => (b.priority || 0) - (a.priority || 0));

    // Count by priority for filter tabs
    const counts = { all: awards.length, critical: 0, high: 0, medium: 0, curated: 0, smart: 0 };
    awards.forEach((a) => {
      const p = a.priority || 0;
      if (p >= 9) counts.critical++;
      else if (p >= 7) counts.high++;
      else counts.medium++;
      if (a._source === "curated") counts.curated++;
      else if (a._source === "smart") counts.smart++;
    });

    // Filter tabs
    let html = '<div class="awards-toolbar">';
    html += '<div class="awards-filters" role="tablist">';
    const filters = [
      { key: "all", label: "All", count: counts.all },
      { key: "critical", label: "Critical", count: counts.critical },
      { key: "high", label: "High", count: counts.high },
      { key: "medium", label: "Medium", count: counts.medium },
    ];
    for (const f of filters) {
      const active = activeFilter === f.key ? " active" : "";
      html += `<button class="awards-filter-btn${active}" data-filter="${f.key}">${f.label} <span class="awards-filter-count">${f.count}</span></button>`;
    }
    html += "</div>";

    // Source tabs
    html += '<div class="awards-source-tabs">';
    const sources = [
      { key: "all", label: "All" },
      { key: "curated", label: "Curated", count: counts.curated },
      { key: "smart", label: "Smart Picks", count: counts.smart },
    ];
    for (const s of sources) {
      const active = activeSource === s.key ? " active" : "";
      const countHtml = s.count !== undefined ? ` <span class="awards-filter-count">${s.count}</span>` : "";
      html += `<button class="awards-source-btn${active}" data-source="${s.key}">${s.label}${countHtml}</button>`;
    }
    html += "</div>";

    // Search box
    html += '<input type="text" id="awards-search" class="awards-search" placeholder="Filter awards..." autocomplete="off">';
    html += "</div>";

    // Award cards
    html += '<div class="awards-list" id="awards-list">';
    html += renderAwardCards(awards, activeFilter, activeSource, "");
    html += "</div>";

    container.innerHTML = MojoUtils.safeHTML(html);
    bindAwardsEvents(container, awards);
  }

  function renderAwardCards(awards, filter, source, searchQuery) {
    const q = (searchQuery || "").toLowerCase();
    let html = "";

    for (const award of awards) {
      const priorityVal = award.priority || 0;
      const priorityLabel = getPriorityLabel(priorityVal);
      const priorityClass = getPriorityClass(priorityVal);

      // Apply priority filter
      if (filter === "critical" && priorityVal < 9) continue;
      if (filter === "high" && (priorityVal < 7 || priorityVal >= 9)) continue;
      if (filter === "medium" && priorityVal >= 7) continue;

      // Apply source filter
      if (source === "curated" && award._source !== "curated") continue;
      if (source === "smart" && award._source !== "smart") continue;

      // Apply search
      const file = award.file || "";
      const method = award.method || "";
      const reason = award.reason || "";
      if (q && !file.toLowerCase().includes(q) &&
          !method.toLowerCase().includes(q) &&
          !reason.toLowerCase().includes(q)) {
        continue;
      }

      const fileHtml = MojoUtils.escapeHtml(file);
      const methodHtml = MojoUtils.escapeHtml(method);
      const reasonHtml = MojoUtils.escapeHtml(reason);
      const searchUrl = codeSearchUrl(award);
      const interfaceName = award._iface ? award._iface.name : inferInterfaceName(award);
      const sourceTag = award._source === "smart"
        ? '<span class="award-smart-tag" title="Auto-detected from index.json metadata">Smart Pick</span>'
        : "";
      const metaBadges = renderMetaBadges(award);

      html += `
        <div class="award-card ${priorityClass}" data-interface="${MojoUtils.escapeHtml(interfaceName)}">
          <div class="award-header">
            <div class="award-top-row">
              <div class="award-method">${methodHtml} ${sourceTag}</div>
              <span class="priority-badge ${priorityClass}">${priorityLabel}</span>
            </div>
            <div class="award-file">${fileHtml}</div>
            ${metaBadges}
          </div>
          <div class="award-reason">${reasonHtml}</div>
          <div class="award-actions">
            <a href="${searchUrl}" target="_blank" rel="noopener" class="award-action-btn award-action-code" title="Search Chromium source code">C++ Source</a>
            <button class="award-action-btn award-action-research" data-interface="${MojoUtils.escapeHtml(interfaceName)}" title="Navigate to this interface in the browser panel">Research</button>
            <button class="award-action-btn award-action-fuzz" data-interface="${MojoUtils.escapeHtml(interfaceName)}" title="Open fuzzer for this interface">Fuzz</button>
          </div>
        </div>
      `;
    }

    if (!html) {
      html = '<div class="empty-state"><p>No matching awards.</p></div>';
    }

    return html;
  }

  function reRenderList(container, awards) {
    const searchVal = document.getElementById("awards-search")?.value || "";
    const listEl = document.getElementById("awards-list");
    if (listEl) {
      listEl.innerHTML = MojoUtils.safeHTML(
        renderAwardCards(awards, activeFilter, activeSource, searchVal),
      );
    }
  }

  function bindAwardsEvents(container, awards) {
    // Priority filter buttons
    container.querySelectorAll(".awards-filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.dataset.filter;
        container.querySelectorAll(".awards-filter-btn").forEach((b) =>
          b.classList.toggle("active", b.dataset.filter === activeFilter),
        );
        reRenderList(container, awards);
      });
    });

    // Source filter buttons
    container.querySelectorAll(".awards-source-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeSource = btn.dataset.source;
        container.querySelectorAll(".awards-source-btn").forEach((b) =>
          b.classList.toggle("active", b.dataset.source === activeSource),
        );
        reRenderList(container, awards);
      });
    });

    // Search box
    const searchInput = container.querySelector("#awards-search");
    if (searchInput) {
      let debounce = null;
      searchInput.addEventListener("input", () => {
        clearTimeout(debounce);
        debounce = setTimeout(() => {
          reRenderList(container, awards);
        }, 150);
      });
    }

    // Delegated click for action buttons
    container.addEventListener("click", (e) => {
      const researchBtn = e.target.closest(".award-action-research");
      if (researchBtn) {
        const iName = researchBtn.dataset.interface;
        navigateToInterface(iName);
        return;
      }

      const fuzzBtn = e.target.closest(".award-action-fuzz");
      if (fuzzBtn) {
        const iName = fuzzBtn.dataset.interface;
        navigateToInterface(iName);
        // After navigating, switch to fuzzer tab
        setTimeout(() => {
          const tab = document.querySelector('[data-tab="fuzzer"]');
          if (tab) tab.click();
        }, 300);
        return;
      }
    });
  }

  /**
   * Navigate the main interface panel to a given interface name (best-effort match).
   */
  function navigateToInterface(name) {
    if (!name) return;
    const interfaces = (global.MojoGUI_State || {}).interfaces || [];
    const q = name.toLowerCase();

    // Try exact name match, then partial
    let match = interfaces.find((i) => i.name.toLowerCase() === q);
    if (!match) {
      match = interfaces.find((i) => i.name.toLowerCase().includes(q));
    }
    if (!match) {
      match = interfaces.find(
        (i) => (i.module + "." + i.name).toLowerCase().includes(q),
      );
    }

    if (match) {
      // Switch to interfaces tab first
      const tab = document.querySelector('[data-tab="interfaces"]');
      if (tab) tab.click();

      // Use the exposed selectInterface from app.js
      const internal = global.__MojoGUI_Internal;
      if (internal && internal.selectInterface) {
        internal.selectInterface(match.name, match.module);
      }
    } else {
      if (global.showToast) {
        global.showToast(`Interface "${name}" not found in loaded bindings`, "warning");
      }
    }
  }

  // Initialize
  document.addEventListener("DOMContentLoaded", () => {
    loadAwards();
  });

  // Expose for debugging and API access
  global.MojoAwards = {
    load: loadAwards,
    navigateToInterface,
    generateSmartPicks: () => generateSmartPicks(allAwards.filter((a) => a._source === "curated")),
  };
})(this);
