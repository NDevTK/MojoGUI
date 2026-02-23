/**
 * MojoGUI Awards Feature
 * Auto-generates high-value security research targets from index.json
 * metadata. Scores every interface by: renderer accessibility, security
 * gates, method risk patterns, domain risk, and attack surface size.
 */
(function (global) {
  "use strict";

  const containerId = "tab-awards";
  let allAwards = [];
  let activeFilter = "all";

  // ── Risk scoring tables ──────────────────────────────────────────

  /** Method-name patterns that indicate dangerous primitives. */
  const METHOD_RISK = [
    { re: /^(Write|Send|Push|Transmit|Control)/i, weight: 2, tag: "write-primitive" },
    { re: /^(Open|Create|Install|Execute|Run|Launch)/i, weight: 2, tag: "instantiation" },
    { re: /(Unsanitized|Unsafe|Raw|Arbitrary)/i, weight: 3, tag: "unsanitized" },
    { re: /(File|Path|Directory|FileDescriptor)/i, weight: 2, tag: "fs-access" },
    { re: /(Socket|Port|Connect|Tcp|Udp)/i, weight: 2, tag: "network" },
    { re: /(Deserialize|Parse|Decode|Compile|Wasm)/i, weight: 2, tag: "parser" },
    { re: /(Navigate|Load|Redirect|Commit|Origin)/i, weight: 1, tag: "navigation" },
    { re: /^(Register|Bind|Attach|Mount)/i, weight: 1, tag: "lifecycle" },
    { re: /^(Delete|Remove|Drop|Clear|Reset)/i, weight: 1, tag: "destructive" },
    { re: /(Transfer|Stream|Data|Buffer|Blob|Chunk)/i, weight: 1, tag: "data-flow" },
  ];

  /** Module / interface name patterns that indicate high-risk domains. */
  const DOMAIN_RISK = [
    { re: /\b(usb|hid|serial|nfc|smart_card|midi|bluetooth)\b/i, weight: 3, label: "hardware" },
    { re: /\b(direct_socket|tcp_socket|udp_socket)\b/i, weight: 3, label: "raw-network" },
    { re: /\b(file_system|file_backed|clipboard)\b/i, weight: 2, label: "fs/clipboard" },
    { re: /\b(blob|blob_url)\b/i, weight: 1, label: "blob" },
    { re: /\b(ai_manager|webnn|translation|handwriting|speech_recogn|screen_ai)\b/i, weight: 2, label: "ai/ml" },
    { re: /\b(print|pdf|media|codec|video|audio|renderer)\b/i, weight: 1, label: "media/parsing" },
    { re: /\b(web_install|payment|webshare|webxr|web_lock)\b/i, weight: 1, label: "web-api" },
    { re: /\b(shared_storage|fenced_frame|attribution|interest_group)\b/i, weight: 2, label: "privacy-sandbox" },
    { re: /\b(devtools|extensions|plugin)\b/i, weight: 1, label: "privileged" },
  ];

  // ── Scoring engine ───────────────────────────────────────────────

  function scoreInterface(iface) {
    const meta = iface.metadata || {};
    const category = meta.category || "internal";
    const scope = meta.scope || "context";
    const gates = meta.gates || [];
    const methods = iface.methods || [];
    const usage = meta.usage || {};
    const usageDirect = (usage.direct || []).join(" ");
    const usageAssoc = (usage.associated || []).join(" ");
    const usageAll = usageDirect + " " + usageAssoc;
    const name = iface.name || "";
    const module = iface.module || "";
    const moduleName = module + " " + name;

    let score = 0;
    const signals = [];
    const tags = new Set();

    // 1. Category: how reachable is this from the renderer?
    if (category === "direct") {
      score += 3;
      signals.push("Directly bindable from renderer");
    } else if (category === "associated") {
      score += 2;
      signals.push("Associated interface (frame-scoped)");
    } else {
      // Internal – only interesting if reachable through a manager
      if (/\.(Get|Create|Open)\w+/.test(usageAll) ||
          /Service\.\w+/.test(usageAll)) {
        score += 1;
        signals.push("Obtainable through manager interface");
      }
    }

    // 2. Domain risk from module/interface name
    const domainLabels = [];
    for (const d of DOMAIN_RISK) {
      if (d.re.test(moduleName) || d.re.test(iface.file || "")) {
        score += d.weight;
        domainLabels.push(d.label);
        tags.add(d.label);
      }
    }
    if (domainLabels.length) {
      signals.push("Domain: " + domainLabels.join(", "));
    }

    // 3. Method risk analysis
    const riskMethods = [];
    for (const m of methods) {
      for (const p of METHOD_RISK) {
        if (p.re.test(m)) {
          score += p.weight;
          riskMethods.push(m);
          tags.add(p.tag);
          break; // one pattern per method
        }
      }
    }

    // 4. Attack surface size
    if (methods.length >= 10) {
      score += 2;
      signals.push(methods.length + " methods (large surface)");
    } else if (methods.length >= 5) {
      score += 1;
      signals.push(methods.length + " methods");
    }

    // 5. No security gates (if the gates field exists)
    if (gates.length === 0) {
      // Only count as a strong signal for direct/associated (renderer can just bind it)
      if (category === "direct" || category === "associated") {
        score += 2;
        signals.push("No security gates");
      }
    }

    // 6. Process scope – available to entire renderer, not just one frame
    if (scope === "process") {
      score += 1;
      signals.push("Process-scoped");
    }

    // 7. Unscrambled ordinals – easier to exploit (no version-dependent salt)
    if (meta.scrambled === false) {
      score += 1;
      signals.push("Unscrambled ordinals");
      tags.add("no-scramble");
    }

    return { score, signals, riskMethods, tags: Array.from(tags) };
  }

  // ── Award generation ─────────────────────────────────────────────

  function generateAwards() {
    const interfaces = (global.MojoGUI_State || {}).interfaces || [];
    if (!interfaces.length) return [];

    const awards = [];

    for (const iface of interfaces) {
      const { score, signals, riskMethods, tags } = scoreInterface(iface);

      // Threshold: must score at least 5 to be worth showing
      if (score < 5) continue;

      // Priority mapping: 6-9
      const priority = Math.min(9, Math.max(6, Math.floor(score / 3) + 5));

      // Pick the best method to highlight
      const topMethod = riskMethods[0] || (iface.methods || [])[0] || iface.name;

      // Build reason from signals + risky methods
      let reason = signals.join("; ");
      if (riskMethods.length > 0) {
        const shown = riskMethods.slice(0, 4).join(", ");
        const extra = riskMethods.length > 4 ? " (+" + (riskMethods.length - 4) + " more)" : "";
        reason += ". Key methods: " + shown + extra;
      }
      reason += ".";

      awards.push({
        file: iface.module + " / " + iface.name,
        method: topMethod,
        reason: reason,
        priority: priority,
        _iface: iface,
        _tags: tags,
        _score: score,
      });
    }

    // Sort by score descending
    awards.sort((a, b) => b._score - a._score);
    return awards;
  }

  // ── Loading ──────────────────────────────────────────────────────

  function loadAwards() {
    allAwards = generateAwards();

    if (allAwards.length === 0) {
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = MojoUtils.safeHTML(
          '<div class="empty-state"><p>No interfaces loaded yet. Awards are generated from the bindings index.</p></div>',
        );
      }
      return;
    }

    renderAwards(allAwards);
  }

  // ── Rendering helpers ────────────────────────────────────────────

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

  function codeSearchUrl(award) {
    const iface = award._iface;
    const method = award.method || "";
    const source = (iface && iface.file) || award.file || "";
    const query = method + " " + source;
    return `https://source.chromium.org/search?q=${encodeURIComponent(query)}&sq=&ss=chromium`;
  }

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

    // Ungated indicator for direct/associated (positive signal for researchers)
    if ((category === "direct" || category === "associated") && gates.length === 0) {
      badges += '<span class="award-meta-badge meta-ungated" title="No feature flags or permission checks found">Ungated</span>';
    }

    // Tag badges
    const tagLabels = (award._tags || []).slice(0, 3);
    for (const t of tagLabels) {
      badges += `<span class="award-meta-badge meta-tag">${MojoUtils.escapeHtml(t)}</span>`;
    }

    // Method count
    const methodCount = (iface.methods || []).length;
    if (methodCount > 0) {
      badges += `<span class="award-meta-badge meta-methods" title="${methodCount} methods">${methodCount}m</span>`;
    }

    badges += "</div>";
    return badges;
  }

  // ── Main render ──────────────────────────────────────────────────

  function renderAwards(awards) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Sort by priority then score
    awards.sort((a, b) => (b.priority - a.priority) || (b._score - a._score));

    // Count by priority
    const counts = { all: awards.length, critical: 0, high: 0, medium: 0 };
    for (const a of awards) {
      const p = a.priority || 0;
      if (p >= 9) counts.critical++;
      else if (p >= 7) counts.high++;
      else counts.medium++;
    }

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
    html += '<input type="text" id="awards-search" class="awards-search" placeholder="Filter awards..." autocomplete="off">';
    html += "</div>";

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

      if (filter === "critical" && priorityVal < 9) continue;
      if (filter === "high" && (priorityVal < 7 || priorityVal >= 9)) continue;
      if (filter === "medium" && priorityVal >= 7) continue;

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
      const interfaceName = award._iface ? award._iface.name : "";
      const metaBadges = renderMetaBadges(award);

      html += `
        <div class="award-card ${priorityClass}" data-interface="${MojoUtils.escapeHtml(interfaceName)}">
          <div class="award-header">
            <div class="award-top-row">
              <div class="award-method">${methodHtml}</div>
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

  // ── Events ───────────────────────────────────────────────────────

  function reRenderList(container, awards) {
    const searchVal = document.getElementById("awards-search")?.value || "";
    const listEl = document.getElementById("awards-list");
    if (listEl) {
      listEl.innerHTML = MojoUtils.safeHTML(
        renderAwardCards(awards, activeFilter, searchVal),
      );
    }
  }

  function bindAwardsEvents(container, awards) {
    container.querySelectorAll(".awards-filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.dataset.filter;
        container.querySelectorAll(".awards-filter-btn").forEach((b) =>
          b.classList.toggle("active", b.dataset.filter === activeFilter),
        );
        reRenderList(container, awards);
      });
    });

    const searchInput = container.querySelector("#awards-search");
    if (searchInput) {
      let debounce = null;
      searchInput.addEventListener("input", () => {
        clearTimeout(debounce);
        debounce = setTimeout(() => reRenderList(container, awards), 150);
      });
    }

    container.addEventListener("click", (e) => {
      const researchBtn = e.target.closest(".award-action-research");
      if (researchBtn) {
        navigateToInterface(researchBtn.dataset.interface);
        return;
      }
      const fuzzBtn = e.target.closest(".award-action-fuzz");
      if (fuzzBtn) {
        navigateToInterface(fuzzBtn.dataset.interface);
        setTimeout(() => {
          const tab = document.querySelector('[data-tab="fuzzer"]');
          if (tab) tab.click();
        }, 300);
      }
    });
  }

  function navigateToInterface(name) {
    if (!name) return;
    const interfaces = (global.MojoGUI_State || {}).interfaces || [];
    const q = name.toLowerCase();

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
      const tab = document.querySelector('[data-tab="interfaces"]');
      if (tab) tab.click();
      const internal = global.__MojoGUI_Internal;
      if (internal && internal.selectInterface) {
        internal.selectInterface(match.name, match.module);
      }
    } else if (global.showToast) {
      global.showToast(`Interface "${name}" not found in loaded bindings`, "warning");
    }
  }

  // ── Init ─────────────────────────────────────────────────────────

  // Awards depend on MojoGUI_State.interfaces which are loaded asynchronously.
  // We attempt to load on DOMContentLoaded (in case interfaces were cached/fast),
  // but the primary trigger is app.js calling MojoAwards.load() after loadInterfaces().
  document.addEventListener("DOMContentLoaded", () => {
    const interfaces = (global.MojoGUI_State || {}).interfaces || [];
    if (interfaces.length > 0) {
      loadAwards();
    }
  });

  global.MojoAwards = {
    load: loadAwards,
    navigateToInterface,
  };
})(this);
