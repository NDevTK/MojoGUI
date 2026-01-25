import fs from "fs";
import path from "path";
import os from "os";

const APPDATA = process.env.APPDATA || (process.platform === 'darwin' ? path.join(os.homedir(), 'Library', 'Application Support') : path.join(os.homedir(), '.config'));
const DATA_DIR = path.join(APPDATA, "MojoGUI");
const PROGRESS_FILE = path.join(DATA_DIR, "PROGRESS.json");

/**
 * Tracks Mojo interface research coverage and capability gaps in JSON format.
 * Optimized for Chromium security research with advanced filtering.
 */
export const SelfImprovement = {
  /**
   * Log a capability gap.
   */
  logGap(task, gap, impact) {
    const data = this._read();
    data.gaps.push({
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
      task,
      gap,
      impact,
      status: "Open"
    });
    this._write(data);
    return { success: true, message: "Capability gap logged to " + PROGRESS_FILE };
  },

  /**
   * Log research progress.
   */
  logResearch(interfaceName, method, result, notes) {
    const data = this._read();
    data.research.push({
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
      interface: interfaceName,
      method,
      result,
      notes
    });
    this._write(data);
    return { success: true, message: "Research progress logged to " + PROGRESS_FILE };
  },

  /**
   * Close a capability gap.
   */
  closeGap(id) {
    const data = this._read();
    const gap = data.gaps.find(g => g.id === id);
    if (gap) {
      gap.status = "Closed";
      gap.closedAt = new Date().toISOString();
      this._write(data);
      return { success: true, message: `Capability gap ${id} closed.` };
    }
    return { success: false, message: `Gap ${id} not found.` };
  },

  /**
   * Get filtered progress data.
   */
  getProgress(filters = {}) {
    let { gaps, research } = this._read();

    if (filters.interface) {
      const regex = new RegExp(filters.interface, 'i');
      research = research.filter(r => regex.test(r.interface));
    }

    if (filters.result) {
      research = research.filter(r => r.result.toLowerCase().includes(filters.result.toLowerCase()));
    }

    if (filters.status) {
      gaps = gaps.filter(g => g.status.toLowerCase() === filters.status.toLowerCase());
    }

    if (filters.search) {
      const q = filters.search.toLowerCase();
      research = research.filter(r => 
        r.notes.toLowerCase().includes(q) || 
        r.method.toLowerCase().includes(q)
      );
      gaps = gaps.filter(g => 
        g.task.toLowerCase().includes(q) || 
        g.gap.toLowerCase().includes(q) || 
        g.impact.toLowerCase().includes(q)
      );
    }

    // Sort by newest first
    research.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    gaps.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    if (filters.limit) {
      research = research.slice(0, filters.limit);
      gaps = gaps.slice(0, filters.limit);
    }

    return { gaps, research, count: { gaps: gaps.length, research: research.length }, path: PROGRESS_FILE };
  },

  /**
   * Check a research idea against existing findings and gaps.
   * Useful for avoiding duplicate work and identifying known blockers.
   */
  checkIdea(idea) {
    const { gaps, research } = this._read();
    const q = idea.toLowerCase();

    // Find direct matches or high-similarity keywords
    const relevantResearch = research.filter(r => 
      r.interface.toLowerCase().includes(q) || 
      r.method.toLowerCase().includes(q) ||
      r.notes.toLowerCase().includes(q)
    );

    const relevantGaps = gaps.filter(g => 
      g.task.toLowerCase().includes(q) || 
      g.gap.toLowerCase().includes(q) || 
      g.impact.toLowerCase().includes(q)
    );

    // Identify patterns (e.g. "Renderer crashed" or "User Gesture Bypass")
    const outcomePatterns = {};
    relevantResearch.forEach(r => {
      outcomePatterns[r.result] = (outcomePatterns[r.result] || 0) + 1;
    });

    return {
      idea,
      alreadyResearched: relevantResearch.length > 0,
      knownBlockers: relevantGaps.filter(g => g.status === "Open").length > 0,
      findings: relevantResearch.slice(0, 10), // Limit to top 10 relevant findings
      gaps: relevantGaps.slice(0, 10),
      patterns: outcomePatterns,
      summary: `Found ${relevantResearch.length} relevant research entries and ${relevantGaps.length} gaps.`
    };
  },

  _read() {
    this.init();
    try {
      return JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8"));
    } catch (e) {
      return { gaps: [], research: [], error: "Failed to parse PROGRESS.json" };
    }
  },

  _write(data) {
    this.init();
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify(data, null, 2));
  },

  init() {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(PROGRESS_FILE)) {
      fs.writeFileSync(PROGRESS_FILE, JSON.stringify({ gaps: [], research: [] }, null, 2));
    }
  }
};
