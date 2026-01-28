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
   * Consolidate tracking: handle research findings, targets, and gaps in one tool.
   */
  track({ interface: iface, method, result, notes, type = "research", priority = "Medium", task, gap, impact }) {
    const data = this._read();
    const id = Math.random().toString(36).substr(2, 9);
    const timestamp = new Date().toISOString();

    if (type === "research") {
      // Log finding
      data.research.push({ id, timestamp, interface: iface, method, result, notes });
      
      // Auto-update target if it exists
      if (data.targets) {
        const target = data.targets.find(t => t.interface === iface);
        if (target) {
          target.status = "Completed";
          target.updatedAt = timestamp;
        }
      }
      this._write(data);
      return { success: true, id, message: `Research logged for ${iface}.${method}` };
    }

    if (type === "target") {
      if (!data.targets) data.targets = [];
      const existing = data.targets.find(t => t.interface === iface);
      if (existing) {
        existing.priority = priority;
        existing.notes = notes;
        existing.updatedAt = timestamp;
        this._write(data);
        return { success: true, message: `Target ${iface} updated.` };
      }
      data.targets.push({ id, timestamp, interface: iface, priority, notes, status: "Pending" });
      this._write(data);
      return { success: true, id, message: `Target ${iface} added.` };
    }

    if (type === "gap") {
      data.gaps.push({ id, timestamp, task, gap, impact, status: "Open" });
      this._write(data);
      return { success: true, id, message: "Capability gap logged." };
    }

    return { success: false, message: "Invalid track type." };
  },

  /**
   * Automatically log a research finding if it doesn't already exist.
   * Prevents duplicate automatic logs while ensuring coverage is tracked.
   */
  autoLogResearch({ interface: iface, method, result, notes }) {
    const { research } = this._read();
    
    // Check if we already have a finding for this specific interface/method/result combo
    const existing = research.find(r => 
      r.interface === iface && 
      r.method === method && 
      (r.result === result || this._getSimilarity(r.notes, notes) > 0.8)
    );

    if (existing) return { success: false, message: "Finding already exists." };

    return this.track({
      type: "research",
      interface: iface,
      method: method,
      result: result,
      notes: notes
    });
  },

  /**
   * Automatically log a capability gap.
   */
  autoLogGap({ task, gap, impact }) {
    const { gaps } = this._read();
    
    // Check if we already have this gap
    const existing = gaps.find(g => 
      g.status === "Open" && 
      (this._getSimilarity(g.gap, gap) > 0.8 || this._getSimilarity(g.task, task) > 0.8)
    );

    if (existing) return { success: false, message: "Gap already exists." };

    return this.track({
      type: "gap",
      task,
      gap,
      impact
    });
  },

  /**
   * Update an existing research entry.
   */
  updateResearch(id, { result, notes }) {
    const data = this._read();
    const entry = data.research.find(r => r.id === id);
    if (entry) {
      if (result) entry.result = result;
      if (notes) entry.notes = notes;
      entry.updatedAt = new Date().toISOString();
      this._write(data);
      return { success: true, message: `Research entry ${id} updated.` };
    }
    return { success: false, message: `Entry ${id} not found.` };
  },

  /**
   * Delete a research entry.
   */
  deleteResearch(id) {
    const data = this._read();
    const initialLength = data.research.length;
    data.research = data.research.filter(r => r.id !== id);
    
    if (data.research.length < initialLength) {
        this._write(data);
        return { success: true, message: `Research entry ${id} deleted.` };
    }
    return { success: false, message: `Entry ${id} not found.` };
  },

  _getSimilarity(str1, str2) {
    if (!str1 || !str2) return 0;
    const set1 = new Set(str1.toLowerCase().split(/\W+/).filter(x => x.length > 2));
    const set2 = new Set(str2.toLowerCase().split(/\W+/).filter(x => x.length > 2));
    if (set1.size === 0 || set2.size === 0) return 0;
    
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    return intersection.size / union.size;
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
    let { gaps, research, targets = [] } = this._read();

    if (filters.interface) {
      const regex = new RegExp(filters.interface, 'i');
      research = research.filter(r => regex.test(r.interface));
      targets = targets.filter(t => regex.test(t.interface));
    }

    if (filters.result) {
      research = research.filter(r => r.result.toLowerCase().includes(filters.result.toLowerCase()));
    }

    if (filters.status) {
      gaps = gaps.filter(g => g.status.toLowerCase() === filters.status.toLowerCase());
      targets = targets.filter(t => t.status.toLowerCase() === filters.status.toLowerCase());
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
      targets = targets.filter(t => 
        t.interface.toLowerCase().includes(q) || 
        t.notes.toLowerCase().includes(q)
      );
    }

    // Sort by newest first
    research.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    gaps.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    targets.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    if (filters.limit) {
      research = research.slice(0, filters.limit);
      gaps = gaps.slice(0, filters.limit);
      targets = targets.slice(0, filters.limit);
    }

    return { gaps, research, targets, count: { gaps: gaps.length, research: research.length, targets: targets.length }, path: PROGRESS_FILE };
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

  /**
   * Generates a detailed research summary for a specific interface.
   */
  getInterfaceSummary(interfaceName, totalMethods = 0) {
    const { research, gaps } = this._read();
    const interfaceResearch = research.filter(r => r.interface === interfaceName);
    
    // Also look for module-level context
    const moduleName = interfaceName ? interfaceName.split('.').slice(0, -1).join('.') : "";
    const moduleResearch = research.filter(r => 
        r.interface && 
        moduleName && 
        r.interface.startsWith(moduleName) && 
        r.interface !== interfaceName
    );

    const researchedMethods = new Set(interfaceResearch.map(r => r.method));
    const coverage = totalMethods > 0 ? `${researchedMethods.size}/${totalMethods}` : researchedMethods.size;

    const highImpactKeywords = ['bypass', 'leak', 'exploit', 'vulnerability', 'escalation', 'pwned'];
    const findings = {};
    
    interfaceResearch.forEach(r => {
        if (!findings[r.method]) findings[r.method] = [];
        const isHighImpact = highImpactKeywords.some(k => 
            r.result.toLowerCase().includes(k) || r.notes.toLowerCase().includes(k)
        );
        findings[r.method].push({
            id: r.id,
            result: r.result,
            isHighImpact,
            notes: r.notes // Keep full notes for technical context
        });
    });

    // Find relevant gaps
    const relevantGaps = gaps.filter(g => 
        g.status === "Open" && 
        (g.task.includes(interfaceName) || g.gap.includes(interfaceName) || g.task.includes(moduleName))
    );

    return {
        interfaceName,
        moduleName,
        coverage,
        findings,
        gaps: relevantGaps,
        moduleFindingCount: moduleResearch.length,
        hasModuleVulnerabilities: moduleResearch.some(r => highImpactKeywords.some(k => r.result.toLowerCase().includes(k)))
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
      fs.writeFileSync(PROGRESS_FILE, JSON.stringify({ gaps: [], research: [], targets: [] }, null, 2));
    }
  }
};
