/**
 * VersionTracker
 * Tracks changes in Mojo interfaces between sessions using localStorage.
 */
const VersionTracker = (function () {
  const STORAGE_KEY = "mojo_gui_version_snapshot";

  /**
   * Creates a snapshot of the current interfaces.
   * @param {Array} interfaces - List of interface objects from the parser.
   * @returns {Object} map of interface name -> { module, methodCount }
   */
  function createSnapshot(interfaces) {
    const snapshot = {};
    interfaces.forEach((iface) => {
      snapshot[iface.name] = {
        module: iface.module,
        methodCount: iface.methods ? iface.methods.length : 0,
      };
    });
    return snapshot;
  }

  /**
   * Compares two snapshots to find changes.
   * @param {Object} oldSnapshot
   * @param {Object} newSnapshot
   * @returns {Object} { added: [], removed: [], changed: [] } or null if no changes
   */
  function compareSnapshots(oldSnapshot, newSnapshot) {
    if (!oldSnapshot) return { isFirstVisit: true };

    const added = [];
    const removed = [];
    const changed = [];

    // Find added and changed
    for (const [name, info] of Object.entries(newSnapshot)) {
      if (!oldSnapshot[name]) {
        added.push({ name, ...info });
      } else {
        const oldInfo = oldSnapshot[name];
        if (oldInfo.methodCount !== info.methodCount) {
          changed.push({
            name,
            oldMethods: oldInfo.methodCount,
            newMethods: info.methodCount,
            module: info.module,
          });
        }
      }
    }

    // Find removed
    for (const name of Object.keys(oldSnapshot)) {
      if (!newSnapshot[name]) {
        removed.push({ name, ...oldSnapshot[name] });
      }
    }

    if (added.length === 0 && removed.length === 0 && changed.length === 0) {
      return null;
    }

    return { added, removed, changed };
  }

  return {
    /**
     * Checks for updates against various stored state.
     * @param {Array} currentInterfaces - The current list of parsed interfaces.
     * @returns {Object|null} update info or null if no significant changes
     */
    checkUpdates: function (currentInterfaces, currentBrowserVersion) {
      const rawLast = localStorage.getItem(STORAGE_KEY);
      const lastSnapshot = rawLast ? JSON.parse(rawLast) : null;
      const currentSnapshot = createSnapshot(currentInterfaces);

      // Add version meta
      if (currentBrowserVersion) {
        currentSnapshot.meta = { browserVersion: currentBrowserVersion };
      }

      // Save the current state as the new baseline
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentSnapshot));

      const diff = compareSnapshots(lastSnapshot, currentSnapshot);

      // Enrich diff with version info if available
      if (
        diff &&
        lastSnapshot &&
        lastSnapshot.meta &&
        lastSnapshot.meta.browserVersion
      ) {
        diff.lastVersion = lastSnapshot.meta.browserVersion;
      }

      return diff;
    },

    /**
     * Clears history (debug util)
     */
    reset: function () {
      localStorage.removeItem(STORAGE_KEY);
    },
  };
})();

window.VersionTracker = VersionTracker;
