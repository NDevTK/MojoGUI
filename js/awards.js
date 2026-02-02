/**
 * MojoGUI Awards Feature
 * Displays curated high-risk Mojo interfaces.
 */
(function (global) {
  "use strict";

  const containerId = "tab-awards";

  async function loadAwards() {
    try {
      const response = await fetch("awards.json");
      if (!response.ok) throw new Error("Failed to load awards.json");
      const awards = await response.json();
      renderAwards(awards);
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

  function renderAwards(awards) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (awards.length === 0) {
      container.innerHTML = MojoUtils.safeHTML(
        `<div class="empty-state"><p>No awards found.</p></div>`,
      );
      return;
    }

    let html = '<div class="awards-list">';

    awards.forEach((award) => {
      // Safe rendering of content
      const file = MojoUtils.escapeHtml(award.file);
      const method = MojoUtils.escapeHtml(award.method);
      const reason = MojoUtils.escapeHtml(award.reason);

      html += `
          <div class="award-card">
            <div class="award-header">
              <div class="award-method">${method}</div>
              <div class="award-file">${file}</div>
            </div>
            <div class="award-reason">${reason}</div>
          </div>
        `;
    });

    html += "</div>";
    container.innerHTML = MojoUtils.safeHTML(html);
  }

  // Initialize
  document.addEventListener("DOMContentLoaded", () => {
    loadAwards();
  });

  // Expose for debugging
  global.MojoAwards = {
    load: loadAwards,
  };
})(this);
