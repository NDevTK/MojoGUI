import fs from "fs";
import path from "path";
import os from "os";

const APPDATA = process.env.APPDATA || (process.platform === 'darwin' ? path.join(os.homedir(), 'Library', 'Application Support') : path.join(os.homedir(), '.config'));
const DATA_DIR = path.join(APPDATA, "MojoGUI");
const PROGRESS_FILE = path.join(DATA_DIR, "PROGRESS.json");

class Mutex {
    constructor() {
        this.queue = Promise.resolve();
    }

    lock() {
        let release;
        const p = new Promise(resolve => release = resolve);
        const currentQueue = this.queue;
        this.queue = this.queue.then(() => p);
        return currentQueue.then(() => release);
    }
}

const mutex = new Mutex();

/**
 * Tracks Mojo interface research coverage and capability gaps in JSON format.
 * Optimized for Chromium security research with advanced filtering.
 */
export const SelfImprovement = {
  _cache: null,
  _initialized: false,
  _writeTimer: null,

  /**
   * Consolidate tracking: handle research findings, targets, and gaps in one tool.
   */
  async track(params) {
    const release = await mutex.lock();
    try {
      const data = await this._read();
      const result = this._applyTrack(data, params);
      await this._write(data);
      return result;
    } finally {
      release();
    }
  },

  _applyTrack(data, { interface: iface, method, result, notes, type = "research", priority = "Medium", task, gap, impact }) {
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
      return { success: true, id, message: `Research logged for ${iface}.${method}` };
    }

    if (type === "target") {
      if (!data.targets) data.targets = [];
      const existing = data.targets.find(t => t.interface === iface);
      if (existing) {
        existing.priority = priority;
        existing.notes = notes;
        existing.updatedAt = timestamp;
        return { success: true, message: `Target ${iface} updated.` };
      }
      data.targets.push({ id, timestamp, interface: iface, priority, notes, status: "Pending" });
      return { success: true, id, message: `Target ${iface} added.` };
    }

    if (type === "gap") {
      data.gaps.push({ id, timestamp, task, gap, impact, status: "Open" });
      return { success: true, id, message: "Capability gap logged." };
    }

    return { success: false, message: "Invalid track type." };
  },

  /**
   * Remove a research target.
   */
  async removeTarget(id) {
    const release = await mutex.lock();
    try {
      const data = await this._read();
      const initialLength = (data.targets || []).length;
      if (!data.targets) {
          return { success: false, message: "No targets found." };
      }

      data.targets = data.targets.filter(t => t.id !== id && t.interface !== id);

      if (data.targets.length < initialLength) {
          await this._write(data);
          return { success: true, message: `Target ${id} removed.` };
      }
      return { success: false, message: `Target ${id} not found.` };
    } finally {
      release();
    }
  },

  /**
   * Automatically log a research finding if it doesn't already exist.
   * Prevents duplicate automatic logs while ensuring coverage is tracked.
   */
  async autoLogResearch({ interface: iface, method, result, notes }) {
    const release = await mutex.lock();
    try {
      const data = await this._read();
      const { research } = data;

      // Check if we already have a finding for this specific interface/method/result combo
      const existing = research.find(r =>
        r.interface === iface &&
        r.method === method &&
        (r.result === result || this._getSimilarity(r.notes, notes) > 0.8)
      );

      if (existing) return { success: false, message: "Finding already exists." };

      const res = this._applyTrack(data, {
        type: "research",
        interface: iface,
        method: method,
        result: result,
        notes: notes
      });
      await this._write(data);
      return res;
    } finally {
      release();
    }
  },

  /**
   * Automatically log a capability gap.
   */
  async autoLogGap({ task, gap, impact }) {
    const release = await mutex.lock();
    try {
      const data = await this._read();
      const { gaps } = data;

      // Check if we already have this gap
      const existing = gaps.find(g =>
        g.status === "Open" &&
        (this._getSimilarity(g.gap, gap) > 0.8 || this._getSimilarity(g.task, task) > 0.8)
      );

      if (existing) return { success: false, message: "Gap already exists." };

      const res = this._applyTrack(data, {
        type: "gap",
        task,
        gap,
        impact
      });
      await this._write(data);
      return res;
    } finally {
      release();
    }
  },

  /**
   * Update an existing research entry.
   */
  async updateResearch(id, { result, notes }) {
    const release = await mutex.lock();
    try {
      const data = await this._read();
      const entry = data.research.find(r => r.id === id);
      if (entry) {
        if (result) entry.result = result;
        if (notes) entry.notes = notes;
        entry.updatedAt = new Date().toISOString();
        await this._write(data);
        return { success: true, message: `Research entry ${id} updated.` };
      }
      return { success: false, message: `Entry ${id} not found.` };
    } finally {
      release();
    }
  },

  /**
   * Delete a research entry.
   */
  async deleteResearch(id) {
    const release = await mutex.lock();
    try {
      const data = await this._read();
      const initialLength = data.research.length;
      data.research = data.research.filter(r => r.id !== id);

      if (data.research.length < initialLength) {
          await this._write(data);
          return { success: true, message: `Research entry ${id} deleted.` };
      }
      return { success: false, message: `Entry ${id} not found.` };
    } finally {
      release();
    }
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
  async closeGap(id) {
    const release = await mutex.lock();
    try {
      const data = await this._read();
      const gap = data.gaps.find(g => g.id === id);
      if (gap) {
        gap.status = "Closed";
        gap.closedAt = new Date().toISOString();
        await this._write(data);
        return { success: true, message: `Capability gap ${id} closed.` };
      }
      return { success: false, message: `Gap ${id} not found.` };
    } finally {
      release();
    }
  },

  /**
   * Get filtered progress data.
   */
  async getProgress(filters = {}) {
    // Read only, but lock to ensure consistency
    const release = await mutex.lock();
    try {
      let { gaps, research, targets = [] } = await this._read();

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

      // Sort by newest first (always clone to avoid mutating cache)
      research = research.slice().sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      gaps = gaps.slice().sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      targets = targets.slice().sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      // Build crash pattern summary
      const crashPatterns = {};
      for (const r of research) {
        if (!r.result || !r.result.toLowerCase().includes('crash')) continue;
        const codeMatch = r.notes?.match(/crashed with (\w+)/i);
        const code = codeMatch ? codeMatch[1] : 'Unknown';
        const mod = r.interface ? r.interface.split('.').slice(0, -1).join('.') : 'unknown';
        const key = `${code}@${mod}`;
        if (!crashPatterns[key]) crashPatterns[key] = { code, module: mod, count: 0, interfaces: [] };
        crashPatterns[key].count++;
        if (!crashPatterns[key].interfaces.includes(r.interface)) {
          crashPatterns[key].interfaces.push(r.interface);
        }
      }

      const significantCrashPatterns = Object.values(crashPatterns).filter(p => p.count >= 2);

      if (filters.limit) {
        research = research.slice(0, filters.limit);
        gaps = gaps.slice(0, filters.limit);
        targets = targets.slice(0, filters.limit);
      }

      return {
        gaps, research, targets,
        count: { gaps: gaps.length, research: research.length, targets: targets.length },
        crashPatterns: significantCrashPatterns.length > 0 ? significantCrashPatterns : undefined,
        path: PROGRESS_FILE
      };
    } finally {
      release();
    }
  },

  /**
   * Check a research idea against existing findings and gaps.
   * Useful for avoiding duplicate work and identifying known blockers.
   */
  async checkIdea(idea) {
    const release = await mutex.lock();
    try {
      const { gaps, research, targets = [] } = await this._read();
      const q = idea.toLowerCase();

      // Extract likely module/interface from the idea
      const ideaParts = idea.split('.');
      const likelyModule = ideaParts.length >= 2 ? ideaParts.slice(0, -1).join('.') : null;

      // Direct matches
      const relevantResearch = research.filter(r =>
        r.interface?.toLowerCase().includes(q) ||
        r.method?.toLowerCase().includes(q) ||
        r.notes?.toLowerCase().includes(q) ||
        this._getSimilarity(r.notes, idea) > 0.3
      );

      const relevantGaps = gaps.filter(g =>
        g.task?.toLowerCase().includes(q) ||
        g.gap?.toLowerCase().includes(q) ||
        g.impact?.toLowerCase().includes(q)
      );

      // Module-level context: if the idea mentions an interface, find sibling findings
      let moduleContext = null;
      if (likelyModule) {
        const moduleResearch = research.filter(r =>
          r.interface && r.interface.startsWith(likelyModule) &&
          !relevantResearch.includes(r)
        );
        if (moduleResearch.length > 0) {
          const moduleOutcomes = {};
          const moduleInterfaces = new Set();
          for (const r of moduleResearch) {
            moduleOutcomes[r.result] = (moduleOutcomes[r.result] || 0) + 1;
            moduleInterfaces.add(r.interface);
          }
          const highImpact = moduleResearch.filter(r => {
            const text = `${r.result} ${r.notes}`.toLowerCase();
            return ['bypass', 'leak', 'exploit', 'vulnerability', 'escalation', 'pwned'].some(k => text.includes(k));
          });
          moduleContext = {
            module: likelyModule,
            siblingFindings: moduleResearch.length,
            siblingInterfaces: [...moduleInterfaces],
            outcomes: moduleOutcomes,
            hasHighImpact: highImpact.length > 0,
            highImpactCount: highImpact.length,
            suggestion: highImpact.length > 0
              ? `Module '${likelyModule}' has ${highImpact.length} high-impact findings in sibling interfaces - this area is worth investigating.`
              : `Module '${likelyModule}' has ${moduleResearch.length} findings but none high-impact yet.`
          };
        }
      }

      // Outcome distribution for direct matches
      const outcomePatterns = {};
      for (const r of relevantResearch) {
        outcomePatterns[r.result] = (outcomePatterns[r.result] || 0) + 1;
      }

      // Related targets
      const relatedTargets = targets.filter(t =>
        t.interface?.toLowerCase().includes(q) ||
        (likelyModule && t.interface?.startsWith(likelyModule))
      );

      // Verdict
      const openBlockers = relevantGaps.filter(g => g.status === "Open");
      let verdict = "New area - no prior research found.";
      if (relevantResearch.length > 0 && openBlockers.length > 0) {
        verdict = `Partially researched with ${openBlockers.length} open blocker(s). Review gaps before proceeding.`;
      } else if (relevantResearch.length > 0) {
        verdict = `Already researched (${relevantResearch.length} findings). Check if new angles exist.`;
      } else if (moduleContext?.hasHighImpact) {
        verdict = `Not directly researched, but sibling interfaces in ${likelyModule} have critical findings - high potential.`;
      }

      return {
        idea,
        verdict,
        alreadyResearched: relevantResearch.length > 0,
        knownBlockers: openBlockers.length > 0,
        findings: relevantResearch.slice(0, 10),
        gaps: relevantGaps.slice(0, 10),
        patterns: outcomePatterns,
        moduleContext,
        relatedTargets: relatedTargets.slice(0, 5),
        summary: `Found ${relevantResearch.length} relevant research entries, ${relevantGaps.length} gaps, and ${relatedTargets.length} related targets.`
      };
    } finally {
      release();
    }
  },

  /**
   * Suggest the most promising interfaces to research next.
   * Uses module vulnerability density, untested method counts, crash clusters,
   * and pending target priority to rank suggestions.
   */
  async suggestNextTarget(limit = 5) {
    const release = await mutex.lock();
    try {
      const { research, targets, gaps } = await this._read();

      // Build module-level stats
      const moduleStats = {};
      const researchedInterfaces = new Set();

      for (const r of research) {
        if (!r.interface) continue;
        researchedInterfaces.add(r.interface);
        const mod = r.interface.split('.').slice(0, -1).join('.');
        if (!mod) continue;
        if (!moduleStats[mod]) moduleStats[mod] = { findings: 0, criticals: 0, crashes: 0, interfaces: new Set() };
        moduleStats[mod].findings++;
        moduleStats[mod].interfaces.add(r.interface);

        const text = `${r.result} ${r.notes}`.toLowerCase();
        if (['bypass', 'leak', 'exploit', 'vulnerability', 'escalation', 'pwned'].some(k => text.includes(k))) {
          moduleStats[mod].criticals++;
        }
        if (text.includes('crash')) {
          moduleStats[mod].crashes++;
        }
      }

      // Build crash pattern clusters
      const crashPatterns = {};
      for (const r of research) {
        if (!r.result || !r.result.toLowerCase().includes('crash')) continue;
        const codeMatch = r.notes?.match(/crashed with (\w+)/i);
        const code = codeMatch ? codeMatch[1] : 'Unknown';
        const mod = r.interface ? r.interface.split('.').slice(0, -1).join('.') : 'unknown';
        const key = `${code}@${mod}`;
        if (!crashPatterns[key]) crashPatterns[key] = { code, module: mod, count: 0, interfaces: [] };
        crashPatterns[key].count++;
        if (!crashPatterns[key].interfaces.includes(r.interface)) {
          crashPatterns[key].interfaces.push(r.interface);
        }
      }

      // Pending targets get a boost
      const pendingTargets = (targets || []).filter(t => t.status === 'Pending');
      const pendingSet = new Set(pendingTargets.map(t => t.interface));

      // Score pending targets
      const suggestions = pendingTargets.map(t => {
        const mod = t.interface ? t.interface.split('.').slice(0, -1).join('.') : '';
        const modData = moduleStats[mod];
        const priorityScore = t.priority === 'High' ? 30 : t.priority === 'Medium' ? 15 : 5;
        const moduleVulnScore = modData ? (modData.criticals * 20 + modData.findings * 2) : 0;

        return {
          interface: t.interface,
          reason: `Pending target (${t.priority} priority)${modData ? `, module has ${modData.criticals} critical findings` : ''}`,
          score: priorityScore + moduleVulnScore,
          source: 'target',
          notes: t.notes
        };
      });

      // Suggest unexplored interfaces in high-vulnerability modules
      for (const [mod, stats] of Object.entries(moduleStats)) {
        if (stats.criticals === 0) continue;
        // Find interfaces we know about in this module that haven't been fully explored
        // We can't enumerate all interfaces here, but we can flag the module
        suggestions.push({
          interface: `${mod}.*`,
          reason: `Module has ${stats.criticals} critical findings across ${stats.interfaces.size} interfaces - unexplored siblings may have similar issues`,
          score: stats.criticals * 15 + stats.findings * 2,
          source: 'module_pattern'
        });
      }

      // Flag crash clusters as interesting
      for (const pattern of Object.values(crashPatterns)) {
        if (pattern.count >= 2 && pattern.code !== 'RESULT_CODE_KILLED_BAD_MESSAGE') {
          suggestions.push({
            interface: pattern.interfaces[0],
            reason: `Crash cluster: ${pattern.count} ${pattern.code} crashes in ${pattern.module} - may indicate exploitable conditions`,
            score: pattern.count * 25,
            source: 'crash_cluster',
            relatedInterfaces: pattern.interfaces
          });
        }
      }

      // Deduplicate by interface, keep highest score
      const seen = new Map();
      for (const s of suggestions) {
        const existing = seen.get(s.interface);
        if (!existing || s.score > existing.score) {
          seen.set(s.interface, s);
        }
      }

      const ranked = [...seen.values()]
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);

      // Open gaps that might inform strategy
      const openGaps = gaps.filter(g => g.status === 'Open').slice(0, 5);

      return {
        suggestions: ranked,
        stats: {
          totalResearched: researchedInterfaces.size,
          pendingTargets: pendingTargets.length,
          openGaps: openGaps.length,
          crashClusters: Object.keys(crashPatterns).length
        },
        openGaps,
        crashPatterns: Object.values(crashPatterns).filter(p => p.count >= 2)
      };
    } finally {
      release();
    }
  },

  /**
   * Generates a detailed research summary for a specific interface.
   */
  async getInterfaceSummary(interfaceName, totalMethods = 0) {
    const release = await mutex.lock();
    try {
      const { research, gaps } = await this._read();
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
    } finally {
      release();
    }
  },

  async _read() {
    await this.init();
    if (this._cache) return this._cache;
    try {
      const content = await fs.promises.readFile(PROGRESS_FILE, "utf8");
      this._cache = JSON.parse(content);
      return this._cache;
    } catch (e) {
      this._cache = { gaps: [], research: [], targets: [], error: "Failed to parse PROGRESS.json" };
    }
    return this._cache;
  },

  async _write(data) {
    await this.init();
    this._cache = data;
    await fs.promises.writeFile(PROGRESS_FILE, JSON.stringify(data, null, 2));
  },

  async init() {
    if (this._initialized) return;

    // Check if directory exists
    try {
        await fs.promises.access(DATA_DIR);
    } catch {
        // Directory doesn't exist, create it
        try {
            await fs.promises.mkdir(DATA_DIR, { recursive: true });
        } catch (e) {
            // Ignore if it was created concurrently
            if (e.code !== 'EEXIST') throw e;
        }
    }

    // Create file only if it doesn't exist (wx = exclusive create, fails if exists)
    try {
        await fs.promises.writeFile(
            PROGRESS_FILE,
            JSON.stringify({ gaps: [], research: [], targets: [] }, null, 2),
            { flag: 'wx' }
        );
    } catch (e) {
        // EEXIST is expected if file already exists - safe to ignore
        if (e.code !== 'EEXIST') throw e;
    }
    this._initialized = true;
  },

  // Public init to be called at start, needs to be async now
  async ensureInit() {
      await this.init();
  }
};
