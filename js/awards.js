/**
 * MojoGUI Awards Feature
 * Displays curated high-risk Mojo interfaces with filtering,
 * Chromium Code Search links, and one-click research actions.
 */
(function (global) {
  "use strict";

  const containerId = "tab-awards";
  let allAwards = [];
  let activeFilter = "all";

  async function loadAwards() {
    try {
      const response = await fetch("awards.json");
      if (!response.ok) throw new Error("Failed to load awards.json");
      allAwards = await response.json();
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
    const counts = { all: awards.length, critical: 0, high: 0, medium: 0 };
    awards.forEach((a) => {
      const p = a.priority || 0;
      if (p >= 9) counts.critical++;
      else if (p >= 7) counts.high++;
      else counts.medium++;
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

    // Search box
    html += '<input type="text" id="awards-search" class="awards-search" placeholder="Filter awards..." autocomplete="off">';
    html += "</div>";

    // Award cards
    html += '<div class="awards-list" id="awards-list">';
    html += renderAwardCards(awards, activeFilter, "");
    html += "</div>";

    container.innerHTML = MojoUtils.safeHTML(html);
    bindAwardsEvents(container, awards);
  }

  function renderAwardCards(awards, filter, searchQuery) {
    const q = (searchQuery || "").toLowerCase();
    let html = "";

    for (const award of awards) {
      const priorityVal = award.priority || 0;
      const priorityLabel = getPriorityLabel(priorityVal);
      const priorityClass = getPriorityClass(priorityVal);

      // Apply filter
      if (filter === "critical" && priorityVal < 9) continue;
      if (filter === "high" && (priorityVal < 7 || priorityVal >= 9)) continue;
      if (filter === "medium" && priorityVal >= 7) continue;

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
      const interfaceName = inferInterfaceName(award);

      html += `
        <div class="award-card ${priorityClass}" data-interface="${MojoUtils.escapeHtml(interfaceName)}">
          <div class="award-header">
            <div class="award-top-row">
              <div class="award-method">${methodHtml}</div>
              <span class="priority-badge ${priorityClass}">${priorityLabel}</span>
            </div>
            <div class="award-file">${fileHtml}</div>
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

  function bindAwardsEvents(container, awards) {
    // Filter buttons
    container.querySelectorAll(".awards-filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.dataset.filter;
        container.querySelectorAll(".awards-filter-btn").forEach((b) =>
          b.classList.toggle("active", b.dataset.filter === activeFilter),
        );
        const searchVal = document.getElementById("awards-search")?.value || "";
        const listEl = document.getElementById("awards-list");
        if (listEl) {
          listEl.innerHTML = MojoUtils.safeHTML(
            renderAwardCards(awards, activeFilter, searchVal),
          );
        }
      });
    });

    // Search box
    const searchInput = container.querySelector("#awards-search");
    if (searchInput) {
      let debounce = null;
      searchInput.addEventListener("input", () => {
        clearTimeout(debounce);
        debounce = setTimeout(() => {
          const listEl = document.getElementById("awards-list");
          if (listEl) {
            listEl.innerHTML = MojoUtils.safeHTML(
              renderAwardCards(awards, activeFilter, searchInput.value),
            );
          }
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
  };
})(this);
