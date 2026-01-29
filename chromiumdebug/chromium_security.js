/// =============================================================================
/// Chromium Security Research WinDbg Script
/// =============================================================================
/// A comprehensive debugging toolkit for Chromium security research.
/// Load this script with: .scriptload chromium_security.js
/// =============================================================================

"use strict";

/// Global state
var g_rendererAttachCommands = [];
var g_spoofMap = new Map(); // Map<ClientId, {currentUrl: string, pid: number}>
var g_registeredPids = new Set();
var g_exitHandlerRegistered = false;

/// Constants
const DEBUG_MODE = false; // Set to true to enable verbose error logging
const MAX_PATCHES = 50;
const MAX_CALLER_DISPLAY = 3;
const BROWSER_CMDLINE_MIN_LENGTH = 500;
const USER_MODE_ADDR_LIMIT = "0x7fffffffffff";
const MIN_PTR_VALUE_LENGTH = 4;
const MAX_DOM_TRAVERSAL_NODES = 5000;
// StringImpl memory layout (x64): RefCount:4 + Length:4 + Hash/Flags:4 = 12 bytes header
// Data starts immediately after the header at offset 12
const STRINGIMPL_DATA_OFFSET = 12;
const MAX_URL_STRING_LENGTH = 10000; // Maximum reasonable URL length for validation
const MAX_BACKWARD_SCAN_BYTES = 1536; // 1.5KB backward scan limit for vtable detection
const MAX_INTEGRITY_DISPLAY_LENGTH = 25; // Truncation length for integrity level display
const CMDLINE_DISPLAY_LENGTH = 200; // Truncation length for command line display
const ELEMENT_DATA_UNIQUE_FLAG = 0x1; // Bit 0 indicates UniqueElementData vs ShareableElementData
const ELEMENT_DATA_ARRAY_SIZE_MASK = 0xFFFFFFF; // Bits 1-28 contain array size
const MIN_VALID_VTABLE_ADDR = 0x10000; // Minimum valid address for vtable pointer validation
const MAX_CACHE_SIZE_PER_PID = 1000; // Maximum number of symbols to cache per PID to prevent leaks
const MAX_PID_CACHE_SIZE = 10; // Maximum number of PIDs to track to prevent memory leaks

/// Helper: Check if string is empty or null
function isEmpty(str) {
    return !str || str === "";
}

/// Helper: Parse integer from string, auto-detecting hex (0x prefix) or decimal
function parseIntAuto(str) {
    if (!str) return 0;
    var s = str.toString().trim();
    return s.startsWith("0x") || s.startsWith("0X") ? parseInt(s, 16) : parseInt(s, 10);
}

/// Helper: Clean up a type name from messy characters (references, extra stars, etc.)
function cleanType(typeStr) {
    if (!typeStr) return null;
    return typeStr
        .replace(/&/g, "")           // Remove references
        .replace(/\s+/g, " ")        // Normalize whitespace
        .replace(/\*\s*\*/g, "*")    // Convert ** to * (often we just want the base pointer)
        .replace(/\s*\*$/g, "*")     // Normalize trailing pointer
        .replace(/^(class|struct)\s+/, "") // Strip class/struct prefix
        .trim();
}

/// Helper: Check if a BigInt value is a valid user-mode pointer
/// On x64 Chromium, CppGC/Oilpan heap addresses are always above 4GB (0x100000000)
/// Compressed pointers like 0x80080ede are 32-bit values and should NOT pass this check
/// @param val - BigInt value to check
/// @returns true if val is within valid 64-bit user-mode heap address range
function isValidUserModePointer(val) {
    if (typeof val !== "bigint") return false;
    // On x64, Chromium heaps are above 4GB. 32-bit values are compressed pointers.
    const MIN_64BIT_HEAP_ADDR = BigInt("0x100000000"); // 4GB - addresses below this are likely compressed
    return val >= MIN_64BIT_HEAP_ADDR && val < BigInt(USER_MODE_ADDR_LIMIT);
}

/// Helper: Normalize a type name to a pointer cast format
/// Ensures the type is wrapped in parentheses with a pointer suffix for dx casting
/// @param typeName - Type name to normalize (e.g., "blink::Document" or "(blink::Document*)")
/// @returns Normalized type hint (e.g., "(blink::Document*)")
function normalizeTypeHint(typeName) {
    if (!typeName) return null;

    var clean = cleanType(typeName);
    if (!clean) return null;

    // Already in pointer cast format
    if (clean.startsWith("(") && clean.endsWith(")")) {
        return clean;
    }
    // Already has pointer suffix, just wrap in parens
    if (clean.endsWith("*")) {
        return "(" + clean + ")";
    }
    // Check if it looks like a class/namespace (contains ::) or starts with uppercase
    if (clean.includes("::") || /^[A-Z]/.test(clean)) {
        return "(" + clean + "*)";
    }
    // Primitive or unknown type, return as-is (no pointer)
    return clean;
}

/// Helper: Register sxe cpr handler for renderer attach
function _registerRendererSxeHandler(commandString, displayLabel) {
    try {
        var ctl = SymbolUtils.getControl();
        // Escape quotes for nesting
        var escapedCmd = commandString.replace(/"/g, "'");
        var handlerCmd = "sxe -c \"" + escapedCmd + "; g\" cpr";
        Logger.info("  Setting up: " + handlerCmd);
        ctl.ExecuteCommand(handlerCmd);
        Logger.empty();
        Logger.info("  Handler registered. " + (displayLabel || "Command") + " will run in new renderer processes.");
        Logger.empty();
    } catch (e) {
        Logger.warn("Note: Auto-setup failed. Manually use sxe command.");
        Logger.empty();
    }
}

/// =============================================================================
/// PROCESS CACHE
/// =============================================================================

class ProcessCache {
    // Map<PID, Map<Key, Value>>
    static _symbolCache = new Map();
    static _reverseSymbolCache = new Map();
    static _v8CageBaseCache = new Map(); // Map<PID, AddressString>
    static _cppgcCageBaseCache = new Map(); // Map<PID, AddressString>
    static _vtableTypeCache = new Map(); // Map<PID, Map<VTableAddr, TypeName>>
    static _offsetCache = new Map(); // Map<PID, Map<ClassMember, Offset>>
    static _returnTypeCache = new Map(); // Map<PID, Map<Symbol, TypeName>>
    static _patternCache = new Map(); // Map<PID, Map<Pattern, Array<{addr, name}>>>
    static _verboseSymbolCache = new Map(); // Map<PID, Map<Pattern, Array<SymbolInfo>>>

    static _getPid() {
        try {
            var pid = parseInt(host.currentProcess.Id);
            // Safety: Avoid caching for PID 0 (System) or invalid PIDs
            if (pid === 0 || isNaN(pid)) return null;
            return pid;
        } catch (e) { return null; }
    }

    // Generic LRU Get: returns value or undefined, moves to end if found
    static getLru(map, key) {
        if (map && map.has(key)) {
            const val = map.get(key);
            map.delete(key);
            map.set(key, val);
            return val;
        }
        return undefined;
    }

    // Generic LRU Set: sets value, moves to end, enforces size limit
    static setLru(map, key, value, maxSize) {
        if (!map) return;
        if (map.has(key)) {
            map.delete(key);
        } else if (map.size >= maxSize) {
            const oldest = map.keys().next().value;
            map.delete(oldest);
        }
        map.set(key, value);
    }

    // Helper: Ensure a PID cache exists in the given map, creating if needed
    static _ensurePidCache(cacheMap, pid) {
        if (!cacheMap.has(pid)) {
            // Enforce PID cache limit before adding new entry
            if (cacheMap.size >= MAX_PID_CACHE_SIZE) {
                const oldest = cacheMap.keys().next().value;
                cacheMap.delete(oldest);
            }
            cacheMap.set(pid, new Map());
        }
        return cacheMap.get(pid);
    }

    static getSymbol(symbolName) {
        var pid = this._getPid();
        if (!pid) return undefined;
        var pidCache = this.getLru(this._symbolCache, pid);
        return pidCache ? this.getLru(pidCache, symbolName) : undefined;
    }

    static setSymbol(symbolName, address) {
        var pid = this._getPid();
        if (!pid) return;

        var pidCache = this._ensurePidCache(this._symbolCache, pid);
        this.setLru(pidCache, symbolName, address, MAX_CACHE_SIZE_PER_PID);
    }

    static getSymbolName(address) {
        var pid = this._getPid();
        if (!pid) return undefined;
        var pidCache = this.getLru(this._reverseSymbolCache, pid);
        return pidCache ? this.getLru(pidCache, address) : undefined;
    }

    static setSymbolName(address, name) {
        var pid = this._getPid();
        if (!pid) return;

        var pidCache = this._ensurePidCache(this._reverseSymbolCache, pid);
        this.setLru(pidCache, address, name, MAX_CACHE_SIZE_PER_PID);
    }

    static getV8Cage() {
        var pid = this._getPid();
        if (!pid) return undefined;
        return this.getLru(this._v8CageBaseCache, pid);
    }

    static setV8Cage(address) {
        var pid = this._getPid();
        if (!pid) return;
        this.setLru(this._v8CageBaseCache, pid, address, MAX_PID_CACHE_SIZE);
    }

    static getCppgcCage() {
        var pid = this._getPid();
        if (!pid) return undefined;
        return this.getLru(this._cppgcCageBaseCache, pid);
    }

    static setCppgcCage(address) {
        var pid = this._getPid();
        if (!pid) return;
        this.setLru(this._cppgcCageBaseCache, pid, address, MAX_PID_CACHE_SIZE);
    }

    // VTable Type Cache
    static getVTableType(vtableAddr) {
        var pid = this._getPid();
        if (!pid) return undefined;
        var pidCache = this.getLru(this._vtableTypeCache, pid);
        return pidCache ? this.getLru(pidCache, vtableAddr) : undefined;
    }

    static setVTableType(vtableAddr, type) {
        var pid = this._getPid();
        if (!pid) return;
        var pidCache = this._ensurePidCache(this._vtableTypeCache, pid);
        this.setLru(pidCache, vtableAddr, type, MAX_CACHE_SIZE_PER_PID);
    }

    // Offset Cache
    // key = className + "->" + memberName from helper functions
    static getOffset(key) {
        var pid = this._getPid();
        if (!pid) return undefined;
        var pidCache = this.getLru(this._offsetCache, pid);
        return pidCache ? this.getLru(pidCache, key) : undefined;
    }

    static setOffset(key, offsetData) {
        var pid = this._getPid();
        if (!pid) return;
        var pidCache = this._ensurePidCache(this._offsetCache, pid);
        this.setLru(pidCache, key, offsetData, MAX_CACHE_SIZE_PER_PID);
    }

    // Return Type Cache
    static getReturnType(symbolName) {
        var pid = this._getPid();
        if (!pid) return undefined;
        var pidCache = this.getLru(this._returnTypeCache, pid);
        return pidCache ? this.getLru(pidCache, symbolName) : undefined;
    }

    static setReturnType(symbolName, type) {
        var pid = this._getPid();
        if (!pid) return;
        var pidCache = this._ensurePidCache(this._returnTypeCache, pid);
        this.setLru(pidCache, symbolName, type, MAX_CACHE_SIZE_PER_PID);
    }

    // Pattern Cache (Wildcards)
    static getPattern(pattern) {
        var pid = this._getPid();
        if (!pid) return undefined;
        var pidCache = this.getLru(this._patternCache, pid);
        return pidCache ? this.getLru(pidCache, pattern) : undefined;
    }

    static setPattern(pattern, list) {
        var pid = this._getPid();
        if (!pid) return;
        var pidCache = this._ensurePidCache(this._patternCache, pid);
        this.setLru(pidCache, pattern, list, MAX_CACHE_SIZE_PER_PID);
    }

    // Verbose Symbol Cache (x /v output)
    static getVerboseSymbols(pattern) {
        var pid = this._getPid();
        if (!pid) return undefined;
        var pidCache = this.getLru(this._verboseSymbolCache, pid);
        return pidCache ? this.getLru(pidCache, pattern) : undefined;
    }

    static setVerboseSymbols(pattern, list) {
        var pid = this._getPid();
        if (!pid) return;
        var pidCache = this._ensurePidCache(this._verboseSymbolCache, pid);
        this.setLru(pidCache, pattern, list, MAX_CACHE_SIZE_PER_PID);
    }

    static clearCurrent() {
        var pid = this._getPid();
        if (pid) this.clearPid(pid);
    }

    static clearPid(pid) {
        this._symbolCache.delete(pid);
        this._reverseSymbolCache.delete(pid);
        this._v8CageBaseCache.delete(pid);
        this._cppgcCageBaseCache.delete(pid);
        this._vtableTypeCache.delete(pid);
        this._offsetCache.delete(pid);
        this._returnTypeCache.delete(pid);
        this._patternCache.delete(pid);
        this._verboseSymbolCache.delete(pid);
    }

    static clearAll() {
        this._symbolCache.clear();
        this._reverseSymbolCache.clear();
        this._v8CageBaseCache.clear();
        this._cppgcCageBaseCache.clear();
        this._patternCache.clear();
        this._verboseSymbolCache.clear();
        this._vtableTypeCache.clear();
        this._offsetCache.clear();
        this._returnTypeCache.clear();
    }
}

/// =============================================================================
/// UTILITIES & CLASSES
/// =============================================================================

class Logger {
    static log(msg) { host.diagnostics.debugLog(msg); }
    static empty() { host.diagnostics.debugLog("\n"); }

    static section(title) {
        this.log("\n=== " + title + " ===\n\n");
    }

    static header(title) {
        this.log("  " + title + "\n");
        this.log("  " + "-".repeat(Math.max(40, title.length)) + "\n");
    }

    static info(msg, indent = 2) {
        this.log(" ".repeat(indent) + msg + "\n");
    }

    static warn(msg) {
        this.log("  [WARNING] " + msg + "\n\n");
    }

    static error(msg) {
        this.log("  [ERROR] " + msg + "\n\n");
    }

    /// Debug output - only logs when DEBUG_MODE is true
    static debug(msg) {
        if (DEBUG_MODE) {
            this.log("  [DEBUG] " + msg + "\n");
        }
    }

    static separator(width = 40) {
        this.log("  " + "-".repeat(width) + "\n");
    }

    static showUsage(title, usage, examples) {
        this.section(title);
        this.info("Usage: " + usage);
        this.empty();
        if (examples && examples.length > 0) {
            this.info("Examples:");
            for (var i = 0; i < examples.length; i++) {
                this.info("  " + examples[i]);
            }
            this.empty();
        }
    }

    /// Display filtered command line switches
    static displaySwitches(switches, filterList) {
        for (var i = 0; i < switches.length; i++) {
            if (filterList.indexOf(switches[i].name) !== -1) {
                var val = switches[i].value ? ("=" + switches[i].value) : "";
                this.info("  --" + switches[i].name + val);
            }
        }
    }
}

class SymbolUtils {
    static getControl() { return host.namespace.Debugger.Utility.Control; }

    /// Extract hex address from a line of debugger output (removes backticks)
    static extractAddress(line) {
        var match = line.toString().match(/^([0-9a-fA-F`]+)/);
        return match ? match[1].replace(/`/g, "") : null;
    }

    static getVerboseSymbols(pattern) {
        var cached = ProcessCache.getVerboseSymbols(pattern);
        if (cached) return cached;

        var results = [];
        try {
            var output = this.getControl().ExecuteCommand("x /v " + pattern);
            for (var line of output) {
                var lineStr = line.toString().trim(); // Trim for easier matching

                // Check for Type line (continuation of previous symbol)
                // Format: "Type: bool" or "Type: blink::Document *"
                if (lineStr.startsWith("Type:") && results.length > 0) {
                    var lastResult = results[results.length - 1];
                    var typeMatch = lineStr.match(/^Type:\s*(.+)/);
                    if (typeMatch) {
                        lastResult.returnType = typeMatch[1].trim();
                        // Clean up type string (remove (void) args if present)
                        lastResult.returnType = lastResult.returnType.split("(")[0].trim();
                    }
                    continue;
                }

                var type = null;
                if (lineStr.indexOf("prv inline") !== -1) type = "inline";
                else if (lineStr.indexOf("prv func") !== -1) type = "func";

                if (type) {
                    // Match: ADDR SIZE(hex) ... chrome!NAME
                    var match = lineStr.match(/([0-9a-fA-F`]+)\s+([0-9a-fA-F]+)\s+.*chrome!(.+)/);
                    if (match) {
                        results.push({
                            type: type,
                            address: "0x" + match[1].replace(/`/g, ""),
                            size: parseInt(match[2], 16),  // Parse as hex
                            name: "chrome!" + match[3].trim(),
                            line: lineStr,
                            returnType: null // Will be filled by next line if available
                        });
                    }
                }
            }
        } catch (e) { Logger.debug("getVerboseSymbols failed: " + e.message); }

        ProcessCache.setVerboseSymbols(pattern, results);
        return results;
    }

    static getSymbolInfo(pattern) {
        var results = this.getVerboseSymbols(pattern);
        return (results && results.length > 0) ? results[0] : null;
    }

    /// Get non-inlined function symbol (for fallback when inline is rejected)
    static getNonInlinedFunc(pattern) {
        var results = this.getVerboseSymbols(pattern);
        if (!results) return null;
        for (var r of results) {
            if (r.type === "func") return r;
        }
        return null;
    }

    static findSymbols(pattern) {
        // Check cache first
        var cached = ProcessCache.getPattern(pattern);
        if (cached) return cached;

        var results = [];
        try {
            var output = this.getControl().ExecuteCommand("x " + pattern);
            for (var line of output) {
                var lineStr = line.toString();
                // Extract BOTH the address and symbol name
                // Matches: 00007ffc`12345678 module!Symbol
                var match = lineStr.match(/^([0-9a-fA-F`]+)\s+(.+)/);
                if (match) {
                    var addr = match[1].replace(/`/g, "");
                    var symName = match[2].trim();
                    results.push({ addr: addr, name: symName });
                }
            }
        } catch (e) { Logger.debug("findSymbols failed: " + e.message); }

        // Cache result (even if empty, to avoid re-searching)
        ProcessCache.setPattern(pattern, results);
        return results;
    }

    static findSymbolAddress(pattern) {
        // For exact match, try legacy cache first (optimized for single address)
        var isExact = pattern.indexOf("*") === -1 && pattern.indexOf("?") === -1;
        if (isExact) {
            var cached = ProcessCache.getSymbol(pattern);
            if (cached) return cached;
        }

        // Use generic finder
        var symbols = this.findSymbols(pattern);
        if (symbols.length > 0) {
            var addr = symbols[0].addr;
            if (isExact) ProcessCache.setSymbol(pattern, addr);
            return addr;
        }
        return null;
    }

    /// Execute command with fallback on error (DRY helper)
    static tryExecute(cmd, fallback = []) {
        try { return this.getControl().ExecuteCommand(cmd); } catch (e) { Logger.debug("tryExecute '" + cmd + "' failed: " + e.message); return fallback; }
    }

    static execute(cmd) {
        return this.tryExecute(cmd, []);
    }

    static evaluate(expression) {
        try {
            // Use '?' to evaluate expression
            var output = this.execute("? " + expression);
            for (var line of output) {
                var match = line.toString().match(/=\s+([0-9a-fA-F`]+)/);
                if (match) return match[1].replace(/`/g, "");
            }
        } catch (e) { Logger.debug("evaluate failed: " + e.message); }
        return null;
    }



    /// Get symbol name for a given address (using ln /i for inline function support)
    /// @param subsysAddr - Address to resolve
    /// @param debug - Enable debug logging
    /// @param includeInline - If true, use ln /i to resolve S_INLINESITE entries (default: true)
    static getSymbolName(subsysAddr, debug, includeInline) {
        var hexAddr = normalizeAddress(subsysAddr);
        if (!hexAddr) return null;

        // Default includeInline to true for better inline function resolution
        if (includeInline === undefined) includeInline = true;

        var cached = ProcessCache.getSymbolName(hexAddr);
        if (cached) return cached;

        try {
            // Use ln /i (list nearest with inline info) to resolve S_INLINESITE entries
            // This is the WinDbg equivalent of resolving inline function call sites
            var cmd = includeInline ? "ln /i " + hexAddr : "ln " + hexAddr;
            if (debug) Logger.info("  [Debug] Running: " + cmd);

            var output = this.getControl().ExecuteCommand(cmd);
            var inlinedSymbol = null;
            var outerSymbol = null;

            for (var line of output) {
                var lineStr = line.toString();
                if (debug) Logger.info("  [Debug] ln output: " + lineStr);

                // Check for inlined function line first (takes precedence)
                // Format: "   Inlined function: chrome!blink::SomeClass::SomeMethod (00007ff`12345680 - ...)"
                // Use non-greedy match to capture symbol name before the address (starts with hex in parens)
                var inlineMatch = lineStr.match(/Inlined function:\s+(.+?)\s+\([0-9a-fA-F]/);
                if (inlineMatch) {
                    inlinedSymbol = inlineMatch[1].trim();
                    if (debug) Logger.info("  [Debug] Matched inlined symbol: " + inlinedSymbol);
                    continue;
                }

                // Format: (00007ffc`12345678)   module!SymbolName   |  (0000...) ...
                // or:     (00007ffc`12345678)   module!SymbolName
                // Match the symbol name part, allowing . ? @ $ which appear in mangled names
                var match = lineStr.match(/\)\s+([a-zA-Z0-9_!:.?@$]+)/);
                if (match && !outerSymbol) {
                    outerSymbol = match[1];
                    if (debug) Logger.info("  [Debug] Matched outer symbol: " + outerSymbol);
                }
            }

            // Prefer inlined symbol over outer symbol when available
            var resultSymbol = inlinedSymbol || outerSymbol;
            if (resultSymbol) {
                ProcessCache.setSymbolName(hexAddr, resultSymbol);
                return resultSymbol;
            }
        } catch (e) {
            if (debug) Logger.info("  [Debug] ln /i failed: " + e.message);
            // Fallback: try without /i if that was the cause
            if (includeInline) {
                if (debug) Logger.info("  [Debug] Retrying without /i...");
                return this.getSymbolName(subsysAddr, debug, false);
            }
        }
        return null;
    }

    /// Programmatically get the return type of a function symbol or address
    static getReturnType(symbolOrAddr) {
        if (!symbolOrAddr) return null;
        var symbolName = symbolOrAddr;
        if (symbolOrAddr.toString().startsWith("0x")) {
            symbolName = this.getSymbolName(symbolOrAddr);
        }
        if (!symbolName || symbolName.startsWith("0x")) return null;

        // Check cache
        if (ProcessCache.getReturnType(symbolName)) {
            return ProcessCache.getReturnType(symbolName);
        }


        // Use dx -r0 to get return type from PDB (reliable for all symbol types)
        try {
            var ctl = SymbolUtils.getControl();
            var output = ctl.ExecuteCommand("dx -r0 " + symbolName);
            for (var line of output) {
                var lineStr = line.toString();
                // Match: [Type: blink::KURL (__cdecl*)(void)]
                var m = lineStr.match(/\[Type:\s*([^\]]+)\]/);
                if (m) {
                    var sig = m[1].replace(/\s*(__cdecl|__stdcall|__fastcall|__thiscall)/g, "").trim();
                    var retMatch = sig.match(/^([^(]+)\s*\(/);
                    var type = retMatch ? retMatch[1].trim() : sig;
                    Logger.info("    [Type Detection] PDB Signature: " + type);
                    type = cleanType(type);
                    ProcessCache.setReturnType(symbolName, type);
                    return type;
                }
            }
        } catch (e) { Logger.debug("getReturnType dx fallback failed: " + e.message); }

        // 4. Inlined function fallback: query symbol via host JavaScript API
        try {
            var cleanSym = symbolName.includes("!") ? symbolName.split("!")[1] : symbolName;

            // Try accessing the symbol through host API
            var chromeModule = null;
            for (var mod of host.currentProcess.Modules) {
                var modName = mod.Name.toLowerCase();
                if (modName === "chrome.dll" || modName === "chrome.exe") {
                    chromeModule = mod;
                    break;
                }
            }

            if (chromeModule && chromeModule.Contents && chromeModule.Contents.Symbols) {
                try {
                    var sym = chromeModule.Contents.Symbols.getValueAt(cleanSym);
                    if (sym && sym.Type && sym.Type.functionReturnType) {
                        var typeName = sym.Type.functionReturnType.Name || sym.Type.functionReturnType.name;
                        if (typeName) {
                            if (typeName) {
                                Logger.info("    [Type Detection] Host Symbol Type: " + typeName);
                                ProcessCache.setReturnType(symbolName, typeName);
                                return typeName;
                            }
                        }
                    }
                } catch (symErr) { Logger.debug("getReturnType symbol access failed: " + symErr.message); }
            }
        } catch (e) { Logger.debug("getReturnType inlined function fallback failed: " + e.message); }

        return null;
    }
}

class MemoryUtils {
    /// Try to find cage bases (V8 and CppGC)
    static findCageBases() {
        this.getV8CageBase();
        this.getCppgcCageBase();
    }

    static readGlobalPointer(symbolName) {
        try {
            var addr = SymbolUtils.findSymbolAddress(symbolName);
            if (addr) {
                var dqOutput = SymbolUtils.execute("dq 0x" + addr + " L1");
                for (var dline of dqOutput) {
                    var dMatch = dline.toString().match(/[0-9a-fA-F`]+\s+([0-9a-fA-F`]+)/);
                    if (dMatch) return dMatch[1].replace(/`/g, "");
                }
            }
        } catch (e) { Logger.debug("readGlobalPointer failed for " + symbolName + ": " + e.message); }
        return null;
    }

    static parseBigInt(input) {
        if (typeof input === "bigint") {
            return input;
        } else if (typeof input === "string") {
            var ptrStr = input.replace(/`/g, "");
            if (ptrStr.startsWith("0x") || ptrStr.startsWith("0X")) return BigInt(ptrStr);
            // If string is purely numeric digits, assume decimal
            if (/^\d+$/.test(ptrStr)) return BigInt(ptrStr);
            // Otherwise assume hex (pointers etc)
            return BigInt("0x" + ptrStr);
        } else if (typeof input === "number") {
            // Handle JavaScript numbers - convert to unsigned hex
            if (input < 0) {
                // Negative number - convert to unsigned 32-bit
                input = input >>> 0;
            }
            return BigInt("0x" + input.toString(16));
        } else {
            // WinDbg host objects - convert to string first, then to hex
            // This handles host.Int64 and similar types
            try {
                var str = input.toString(16);
                return BigInt("0x" + str.replace(/`/g, ""));
            } catch (e) {
                // Fallback: try direct BigInt conversion
                return BigInt(input);
            }
        }
    }

    static getV8CageBase() {
        var cached = ProcessCache.getV8Cage();
        if (cached) return cached;

        var val = this.readGlobalPointer("chrome!v8::internal::MainCage::base_");
        if (val) ProcessCache.setV8Cage(val);
        return val;
    }

    static getCppgcCageBase() {
        var cached = ProcessCache.getCppgcCage();
        if (cached) return cached;

        var val = this.readGlobalPointer("chrome!cppgc::internal::CageBaseGlobal::g_base_");
        if (val) ProcessCache.setCppgcCage(val);
        return val;
    }

    static decompressV8Ptr(compressedPtr) {
        var cageBase = this.getV8CageBase();
        if (!cageBase) return null;

        var base = BigInt("0x" + cageBase);
        var compressed = this.parseBigInt(compressedPtr);

        // Sign-extend 32-bit (V8 uses signed offsets)
        if (compressed > 0x7FFFFFFFn) {
            compressed = compressed - 0x100000000n;
        }

        var fullPtr = base + compressed;
        return fullPtr.toString(16);
    }

    static decompressCppgcPtr(compressedPtr, contextAddr) {
        const kPointerCompressionShift = 3n;
        const kCageBaseMask = BigInt("0xFFFFFFFC00000000");

        var compressed = this.parseBigInt(compressedPtr);
        if (compressed === 0n) return null;

        // Mask to 32-bit unsigned value
        compressed = compressed & 0xFFFFFFFFn;

        // Shift left
        var offset = compressed << kPointerCompressionShift;

        // Get cage base from context address
        var base = 0n;
        if (contextAddr) {
            try {
                var context = BigInt(contextAddr.toString().startsWith("0x") ? contextAddr : "0x" + contextAddr);
                base = context & kCageBaseMask;
            } catch (e) { Logger.debug("Context address parse failed: " + e.message); }
        }

        if (base === 0n) {
            // Fallback to global cage base
            var cage = this.getCppgcCageBase();
            if (cage) {
                base = BigInt("0x" + cage);
            }
        }

        if (base !== 0n) {
            return (base | offset).toString(16);
        }

        return null;
    }

    /// Write bytes to memory
    static writeMemory(addr, bytes) {
        var ctl = SymbolUtils.getControl();
        var hexBytes = bytes.map(b => b.toString(16).padStart(2, '0')).join(" ");
        var cmd = "eb 0x" + addr + " " + hexBytes;
        ctl.ExecuteCommand(cmd);
    }

    /// Write a single byte (U8)
    static writeU8(addr, value) {
        this.writeMemory(addr, [value & 0xFF]);
    }

    /// Write a 32-bit integer (U32)
    static writeU32(addr, value) {
        var ctl = SymbolUtils.getControl();
        var hexVal = value.toString(16);
        var cmd = "ed 0x" + addr + " 0x" + hexVal;
        ctl.ExecuteCommand(cmd);
    }

    /// Write a 64-bit integer (U64)
    static writeU64(addr, value) {
        var ctl = SymbolUtils.getControl();
        // toString(16) works for both Number and BigInt
        var valStr = value.toString(16);
        var cmd = "eq 0x" + addr + " 0x" + valStr;
        ctl.ExecuteCommand(cmd);
    }

    /// Write string to memory (overwriting existing buffer)
    static writeStringImpl(implAddr, newString) {
        var ctl = SymbolUtils.getControl();
        var hexAddr = implAddr.toString().startsWith("0x") ? implAddr : "0x" + implAddr;

        var is8Bit = true; // Default to 8-bit (ASCII) - most strings are ASCII
        var currentLen = 0;
        var flags = 0;

        // Try raw memory read first (more reliable than dx symbols sometimes)
        // Layout assumption (x64):
        // +0: RefCount (4b)
        // +4: Length (4b)
        // +8: Hash/Flags (4b) - Bit 0 of flags (at offset +8) often indicates is_8bit
        try {
            var cmd = "dd " + hexAddr + " L4";
            var out = ctl.ExecuteCommand(cmd);
            for (var line of out) {
                var parts = line.toString().trim().split(/\s+/);
                if (parts.length >= 4) {
                    // parts[1] = RefCount, parts[2] = Length, parts[3] = Hash/Flags
                    currentLen = parseInt(parts[2], 16);
                    flags = parseInt(parts[3], 16);

                    // In WTF::StringImpl, the is_8bit flag is typically in the lower bits
                    // If bit 0 of hash_and_flags is 1, it's 8-bit
                    // This varies by Chromium version, so we check multiple patterns
                    // Low bit = 1 often means 8-bit
                    is8Bit = (flags & 1) === 1;
                }
                break;
            }
        } catch (e) { Logger.debug("writeStringImpl header read failed: " + e.message); }

        // Try dx for is8Bit if raw didn't confirm
        try {
            var cmd = "dx ((WTF::StringImpl*)" + hexAddr + ")->is8Bit()";
            var out = ctl.ExecuteCommand(cmd);
            for (var line of out) {
                var lineStr = line.toString();
                if (lineStr.includes("true") || lineStr.includes("1")) is8Bit = true;
                else if (lineStr.includes("false") || lineStr.includes("0")) is8Bit = false;
            }
        } catch (e) {
            // dx failed - rely on flags check or default
        }

        Logger.info("  String: Len=" + currentLen + " is8Bit=" + is8Bit + " (Flags=0x" + flags.toString(16) + ")");

        if (currentLen === 0) {
            Logger.warn("  [Warning] Length detected as 0. This might be empty string OR read failure.");
            // If we write to 0 length, we corrupt memory if it's not actually 0.
            // If target string is empty, we shouldn't be here (attr loop check).
            // Memory safety: Do not proceed if we can't verify the length field.
            if (newString.length > 0) {
                Logger.error("Cannot overwrite: Existing string length appears to be 0 or unreadable.");
            }
            return; // Always return when currentLen is 0 to prevent memory corruption
        }

        if (newString.length > currentLen) {
            Logger.warn("New string length (" + newString.length + ") > current capacity (" + currentLen + "). Truncating.");
            newString = newString.substring(0, currentLen);
        }

        // Data Address
        // If 64-bit, header is usually 12 bytes or 16 bytes aligned.
        // Data likely at +12 or +16.
        // dx &characters... is best.
        var dataAddr = null;
        var charType = is8Bit ? "characters8" : "characters16";

        // 1. Try Offset Cache
        var cachedOffset = ProcessCache.getOffset("WTF::StringImpl->" + charType);
        if (cachedOffset) {
            var baseInt = BigInt(hexAddr);
            dataAddr = (baseInt + BigInt(cachedOffset.offset)).toString(16);
        }

        // 2. Try dx
        if (!dataAddr) {
            try {
                var cmd = "dx &((WTF::StringImpl*)" + hexAddr + ")->" + charType + "()[0]";
                var out = ctl.ExecuteCommand(cmd);
                for (var line of out) {
                    var m = line.toString().match(/:\s*(0x[0-9a-fA-F]+)/);
                    if (m) {
                        dataAddr = m[1];
                        // Cache it
                        var baseInt = BigInt(hexAddr);
                        var addrBig = BigInt(dataAddr);
                        var offset = addrBig - baseInt;
                        if (offset >= 0n && offset < 100n) { // Header size is small
                            ProcessCache.setOffset("WTF::StringImpl->" + charType, { offset: offset.toString(), path: charType });
                        }
                    }
                }
            } catch (e) { Logger.debug("writeStringImpl dx characters failed: " + e.message); }
        }

        // Fallback: Assume offset 12 (packed) or 16 (aligned)
        if (!dataAddr) {
            // StringImpl is explicitly aligned?
            // Usually sizeof(StringImpl) = 12 on 32-bit (?), 16 on 64-bit (due to alignment padding after offset 12?)
            // Let's assume +12 if header is 3x4 bytes.
            // But on x64, 16 is safer guess?
            var baseInt = BigInt(hexAddr);
            // Data starts after header (RefCount:4 + Length:4 + Hash/Flags:4 = 12 bytes)
            // Use the defined constant for consistency
            dataAddr = (baseInt + BigInt(STRINGIMPL_DATA_OFFSET)).toString(16);
            Logger.warn("  [Warning] guessing data address at offset +0xC.");
        }

        // Write
        var bytes = [];
        if (is8Bit) {
            for (var i = 0; i < newString.length; i++) bytes.push(newString.charCodeAt(i));
            // Pad remainder with nulls
            while (bytes.length < currentLen) bytes.push(0);
        } else {
            // 16-bit write
            for (var i = 0; i < newString.length; i++) {
                var c = newString.charCodeAt(i);
                bytes.push(c & 0xFF);
                bytes.push((c >> 8) & 0xFF);
            }
            // Pad remainder with nulls (2 bytes per char)
            while (bytes.length < currentLen * 2) bytes.push(0);
        }
        this.writeMemory(dataAddr, bytes);

        // Update length
        // ed expects hex by default (usually), or we explicitly use 0x prefix.
        // If length is 13, toString(16) is "d".
        var lenCmd = "ed " + hexAddr + "+4 0x" + newString.length.toString(16);
        ctl.ExecuteCommand(lenCmd);

        Logger.info("Overwrote string in memory at 0x" + dataAddr + ".");
    }

    /// Allocate memory in the target process (wrapper for .dvalloc)
    static alloc(size) {
        if (!size || size <= 0) return null;
        var ctl = SymbolUtils.getControl();
        try {
            // Allocate memory (PAGE_EXECUTE_READWRITE for flexibility)
            // .dvalloc [Options] size
            var cmd = ".dvalloc " + size;
            var output = ctl.ExecuteCommand(cmd);
            for (var line of output) {
                // Output format: Allocating 100 bytes starting at 0000021c`3d250000
                var match = line.toString().match(/starting at ([0-9a-fA-F`]+)/);
                if (match) {
                    return match[1].replace(/`/g, "");
                }
            }
        } catch (e) {
            Logger.error("Memory allocation failed: " + e.message);
        }
        return null;
    }

    /// Free memory in the target process (wrapper for .dvfree)
    static free(addr, size) {
        if (!addr) return;
        var ctl = SymbolUtils.getControl();
        try {
            // .dvfree /d [BaseAddress] [Size]
            // Note: .dvfree usually takes base address.
            var cmd = ".dvfree " + addr + " " + (size ? size : "0");
            ctl.ExecuteCommand(cmd);
        } catch (e) {
            Logger.debug("Memory free failed for " + addr + ": " + e.message);
        }
    }
}

class CommandLineUtils {
    static get() {
        try {
            var peb = host.currentProcess.Environment.EnvironmentBlock;
            var cmdLine = peb.ProcessParameters.CommandLine.Buffer;
            return host.memory.readWideString(cmdLine);
        } catch (e) { return ""; }
    }

    static parseSwitches(cmdLine) {
        var switches = [];
        var regex = /--([\w-]+)(=("[^"]*"|[^\s]*))?/g;
        var match;
        while ((match = regex.exec(cmdLine)) !== null) {
            switches.push({ name: match[1], value: (match[3] || "").replace(/"/g, '') });
        }
        return switches;
    }

    static escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    static getSwitch(cmdLine, name) {
        var escapedName = this.escapeRegExp(name);
        var match = cmdLine.match(new RegExp("--" + escapedName + "(=([^\\s\"]+|\"[^\"]*\"))?"));
        return match ? (match[2] || "true").replace(/"/g, "") : null;
    }

    static getHostFromUrl(url) {
        if (!url) return "";
        // Match any scheme (http, https, chrome, file, etc.)
        var match = url.match(/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\/([^\/]+)/);
        return match ? match[1] : url;
    }
}

class BreakpointManager {
    static set(title, targets, description) {
        Logger.section(title);
        var ctl = SymbolUtils.getControl();

        for (var t of targets) {
            var sym = (typeof t === 'string') ? t : t.sym;
            var desc = (typeof t === 'string') ? "" : (" (" + t.desc + ")");
            var cmd = (typeof t === 'string') ? ("bp " + t) : (t.cmd ? t.cmd : "bp " + t.sym);

            Logger.info(cmd + desc);
            try { ctl.ExecuteCommand(cmd); } catch (e) { Logger.debug("Breakpoint set failed for " + sym + ": " + e.message); }
        }

        if (description) Logger.info("Useful for: " + description + "\n");
    }
}

/// Integrity level SID lookup table
const INTEGRITY_LEVELS = {
    "S-1-16-0": "Untrusted",
    "S-1-16-4096": "Low",
    "S-1-16-8192": "Medium",
    "S-1-16-12288": "High",
    "S-1-16-16384": "System",
    "S-1-15-2": "AppContainer"
};

/// Centralized breakpoint configurations (DRY)
const BREAKPOINT_CONFIGS = {
    element: {
        title: "DOM Element Creation Breakpoints",
        targets: [
            "chrome!blink::Document::CreateRawElement",
            "chrome!blink::Document::createElement",
            "chrome!blink::HTMLElement::insertAdjacentHTML"
        ],
        desc: "DOM clobbering, XSS sink analysis"
    },
    nav: {
        title: "Navigation Breakpoints",
        targets: [

            "chrome!blink::Location::SetLocation",
            "chrome!blink::Location::assign",
            "chrome!blink::Location::replace",
            "chrome!blink::FrameLoader::StartNavigation"
        ],
        desc: "Navigation hijacking, URL spoofing"
    },
    pm: {
        title: "postMessage Breakpoints",
        targets: [
            "chrome!blink::LocalDOMWindow::DispatchPostMessage",
            "chrome!blink::MessageEvent::Create"
        ],
        desc: "Cross-origin message interception"
    },
    fetch: {
        title: "Fetch/XHR Breakpoints",
        targets: [
            "chrome!blink::FetchManager::Fetch",
            "chrome!blink::XMLHttpRequest::send",
            "chrome!blink::XMLHttpRequest::open"
        ],
        desc: "Request interception, CORS bypass"
    },
    compile: {
        title: "V8 Script Compilation Breakpoints",
        targets: [
            "chrome!v8::Script::Compile",
            "chrome!v8::ScriptCompiler::Compile",
            "chrome!v8::internal::Compiler::Compile"
        ],
        desc: "Analyzing JIT compilation, CSP bypass"
    },
    gc: {
        title: "V8 Garbage Collection Breakpoints",
        targets: [
            "chrome!v8::internal::Heap::CollectGarbage",
            "chrome!v8::internal::Heap::PerformGarbageCollection",
            "chrome!v8::internal::MarkCompactCollector::CollectGarbage"
        ],
        desc: "UAF exploitation, heap grooming"
    },
    wasm: {
        title: "WebAssembly Breakpoints",
        targets: [
            "chrome!v8::internal::wasm::CompileLazy",
            "chrome!v8::internal::wasm::WasmEngine::SyncCompile",
            "chrome!v8::internal::wasm::WasmCodeManager::Commit"
        ],
        desc: "WASM JIT bugs, RWX page analysis"
    },
    jit: {
        title: "V8 JIT Code Generation Breakpoints",
        targets: [
            "chrome!v8::internal::OptimizedCompilationJob::ExecuteJob",
            "chrome!v8::internal::Builtins::Generate_*",
            "chrome!v8::internal::MacroAssembler::Call"
        ],
        desc: "JIT spray, code injection analysis"
    }
};

/// Helper: Create breakpoint handler from config key
function _bpFromConfig(key) {
    var cfg = BREAKPOINT_CONFIGS[key];
    return set_breakpoints(cfg.title, cfg.targets, cfg.desc);
}

/// Helper: Extract URL from dx output line
function extractUrlFromLine(lineStr) {
    var urlMatch = lineStr.match(/"(https?:\/\/[^"]+)"/) ||
        lineStr.match(/"(chrome-extension:\/\/[^"]+)"/) ||
        lineStr.match(/"(chrome:\/\/[^"]+)"/);
    return urlMatch ? urlMatch[1] : null;
}

/// Helper: Normalize an address to hex format with 0x prefix
/// Handles: decimal numbers, hex strings with/without 0x prefix, BigInt
function normalizeAddress(addr) {
    if (addr === null || addr === undefined) return null;
    var addrStr = addr.toString();
    if (addrStr.startsWith("0x") || addrStr.startsWith("0X")) {
        return addrStr;
    } else if (/^\d+$/.test(addrStr)) {
        // Decimal number - convert to hex
        return "0x" + BigInt(addrStr).toString(16);
    } else {
        // Assume hex without prefix
        return "0x" + addrStr;
    }
}

/// Helper: Check if a pointer value is valid (not null/zero)
/// Handles various representations: null, "0", "00000000", 0, BigInt(0), etc.
function isValidPointer(ptr) {
    if (ptr === null || ptr === undefined) return false;
    if (ptr === 0 || ptr === 0n) return false;
    var str = ptr.toString().replace(/`/g, "");
    if (str === "0" || str === "00000000" || str === "0000000000000000") return false;
    if (str === "0x0" || str === "0x00000000" || str === "0x0000000000000000") return false;
    return true;
}

/// Helper: Check if an address is likely a compressed CppGC/Oilpan pointer
/// Compressed pointers are 32-bit values that look like valid heap offsets
/// but fall outside the normal user-mode address range when used directly.
/// @param addr - Address value (string, number, or BigInt)
/// @returns true if address looks like a compressed pointer
function isLikelyCompressedPointer(addr) {
    if (!addr) return false;
    var addrBig = 0n;
    try {
        addrBig = MemoryUtils.parseBigInt(addr);
    } catch (e) { return false; }

    // Null or zero is not a compressed pointer
    if (addrBig === 0n) return false;

    // Compressed pointers are typically 32-bit values in the range ~0x00010000 to ~0xFFFFFFFF
    // They are NOT valid 64-bit user-mode addresses (which are typically > 0x7FF000000000)
    // Key heuristic: If the value fits in 32 bits and is above MIN_VALID_VTABLE_ADDR
    // but below the typical cage base start, it's likely compressed
    const MAX_COMPRESSED = BigInt("0xFFFFFFFF");
    const MIN_HEAP_OFFSET = BigInt(MIN_VALID_VTABLE_ADDR); // 0x10000

    // If address is in the 32-bit range (excluding low invalid addresses)
    // and NOT a valid 64-bit user-mode pointer, it's likely compressed
    if (addrBig >= MIN_HEAP_OFFSET && addrBig <= MAX_COMPRESSED) {
        // Check if it could be a valid 64-bit address (unlikely for compressed ptrs)
        // Valid user-mode 64-bit addresses are typically > 0x10000000000 on Windows
        return !isValidUserModePointer(addrBig);
    }
    return false;
}

/// Helper: Attempt to decompress an address if it looks like a compressed pointer
/// Returns the decompressed address or the original address if not compressed.
/// @param addr - Address to potentially decompress
/// @param contextAddr - Optional context address for cage base derivation
/// @returns Normalized hex address string (with 0x prefix)
function tryDecompressAddress(addr, contextAddr) {
    var normalized = normalizeAddress(addr);
    if (!normalized) return null;

    var addrBig = 0n;
    try {
        addrBig = MemoryUtils.parseBigInt(normalized);
    } catch (e) { return normalized; }

    // If already a valid full pointer, return as-is
    if (isValidUserModePointer(addrBig)) {
        return normalized;
    }

    // Check if this looks like a compressed pointer
    if (isLikelyCompressedPointer(addrBig)) {
        // Try to decompress using CppGC decompression
        var decompressed = MemoryUtils.decompressCppgcPtr(addrBig, contextAddr);
        if (decompressed && decompressed !== "0") {
            var decompressedBig = BigInt("0x" + decompressed);
            if (isValidUserModePointer(decompressedBig)) {
                return "0x" + decompressed;
            }
        }
    }

    // Return original if decompression failed or not needed
    return normalized;
}

/// Helper: Check if memory address is writable
/// @param addr - Address to check (host.Int64 or hex string)
/// @returns true if PAGE_READWRITE or PAGE_WRITECOPY
function _isWritable(addr) {
    try {
        var ctl = SymbolUtils.getControl();
        var addrStr = (typeof addr === 'string') ? addr : addr.toString(16);
        if (!addrStr.startsWith('0x')) addrStr = '0x' + addrStr;
        var out = ctl.ExecuteCommand("!address " + addrStr);
        for (var line of out) {
            var s = line.toString();
            if (s.includes("Protect:")) {
                if (s.includes("PAGE_READWRITE") || s.includes("PAGE_WRITECOPY") ||
                    s.includes("PAGE_EXECUTE_READWRITE") || s.includes("PAGE_EXECUTE_WRITECOPY")) {
                    return true;
                }
                return false;
            }
        }
    } catch (e) {
        Logger.debug("_isWritable check failed: " + e.message);
    }
    // If check fails, assume not writable for safety
    return false;
}

/// Helper: Extract pointee type from smart pointer types
/// Examples:
///   "scoped_refptr<blink::SecurityOrigin>" -> "(blink::SecurityOrigin*)"
///   "scoped_refptr<const blink::SecurityOrigin>" -> "(const blink::SecurityOrigin*)"
///   "Member<blink::Document>" -> "(blink::Document*)"
///   "cppgc::internal::BasicMember<blink::ElementData,..." -> "(blink::ElementData*)"
///   "blink::SecurityOrigin *" -> "(blink::SecurityOrigin*)"
/// @param typeStr - Type string from dx output
/// @returns Type cast string like "(blink::SecurityOrigin*)" or null
function extractPointeeType(typeStr) {
    if (!typeStr) return null;

    // Pattern 1: scoped_refptr<T>, unique_ptr<T>, Member<T>, DataRef<T>, RefPtr<T>, etc.
    var match = typeStr.match(/(?:scoped_refptr|unique_ptr|Member|WeakMember|Persistent|CrossThreadPersistent|DataRef|RefPtr|base::RefCountedData)\s*<\s*([^<>,]+)/);
    if (match) {
        return "(" + cleanType(match[1]) + "*)";
    }

    // Pattern 2: cppgc::internal::BasicMember<T, ...>
    match = typeStr.match(/BasicMember\s*<\s*([^,<>]+)/);
    if (match) {
        return "(" + cleanType(match[1]) + "*)";
    }

    // Pattern 3: Already a pointer type "T *" or "T*"
    match = typeStr.match(/^([a-zA-Z_][a-zA-Z0-9_:]*(?:\s+const)?)\s*\*?\s*&?\s*\*?\s*$/);
    if (match) {
        var base = cleanType(match[1]);
        return "(" + base + "*)";
    }

    // Pattern 4: Any template with single type arg - extract inner type as best guess
    // e.g., "SomeWrapper<blink::StyleFoo>" -> "(blink::StyleFoo*)"
    match = typeStr.match(/^[a-zA-Z_][a-zA-Z0-9_:]*\s*<\s*([a-zA-Z_][a-zA-Z0-9_:]+)\s*>$/);
    if (match) {
        return "(" + cleanType(match[1]) + "*)";
    }

    return null;
}

/// Helper: Get a compressed member pointer value using symbols
/// @param baseAddr - Base address (with or without 0x prefix)
/// @param typeCast - Type cast string, e.g. "(blink::WebLocalFrameImpl*)"
/// @param memberName - Member name to read
/// @returns Compressed pointer value or null
function getCompressedMember(baseAddr, typeCast, memberName) {
    // Auto-decompress the base address if it's a compressed pointer
    var decompressedAddr = tryDecompressAddress(baseAddr);
    if (!decompressedAddr) return null;

    var baseBig = MemoryUtils.parseBigInt(decompressedAddr);
    if (baseBig === 0n) return null;

    // 1. Try Offset Cache
    var className = null;
    var match = typeCast.match(/\((?:const\s+)?([a-zA-Z0-9_:]+)(?:\s*\*|\*)\)/);
    if (match) className = match[1];

    if (className) {
        var cached = ProcessCache.getOffset(className + "->" + memberName);
        if (cached) {
            var memberAddr = baseBig + BigInt(cached.offset);
            try {
                // Read 32-bit compressed pointer value
                return host.memory.readMemoryValues(host.parseInt64(memberAddr.toString(16), 16), 1, 4)[0];
            } catch (e) {
                // Fallback to dx if direct read fails
            }
        }
    }

    // 2. Fallback to dx command
    try {
        var ctl = SymbolUtils.getControl();
        var cmd = "dx &(" + typeCast + "0x" + baseBig.toString(16) + ")->" + memberName;
        var out = ctl.ExecuteCommand(cmd);
        for (var line of out) {
            var l = line.toString();
            var m = l.match(/:\s*(0x[0-9a-fA-F`]+)/);
            if (m) {
                var addrStr = m[1].replace(/`/g, "");
                var addrBig = MemoryUtils.parseBigInt(addrStr);

                // Cache the offset
                if (className) {
                    var calcedOffset = addrBig - baseBig;
                    // Sanity check: Offset should be positive and reasonable
                    if (calcedOffset >= 0n && calcedOffset < 0x10000n) {
                        ProcessCache.setOffset(className + "->" + memberName, { offset: calcedOffset.toString(), path: memberName });
                    }
                }

                try {
                    var ptrVal = host.memory.readMemoryValues(host.parseInt64(addrStr, 16), 1, 4)[0];
                    return ptrVal;
                } catch (e) { Logger.error("ReadMem failed: " + e.message); }
            }
        }
    } catch (e) { Logger.debug("getCompressedMember failed: " + e.message); }
    return null;
}

/// Helper: Read URL string from dx output for a url_.string_ member
/// @param addr - Address of the object containing url_
/// @param typeCast - Type cast string, e.g. "(blink::DocumentLoader*)"
/// @returns URL string or null
function readUrlStringFromDx(addr, typeCast) {
    try {
        var ctl = SymbolUtils.getControl();
        var dxCmd = "dx -r2 (" + typeCast + "0x" + addr + ")->url_.string_";
        var output = ctl.ExecuteCommand(dxCmd);
        for (var line of output) {
            var sLine = line.toString();
            if (sLine.indexOf("AsciiText") !== -1 || sLine.indexOf("Text") !== -1) {
                var m = sLine.match(/\"(.*)\"/);
                if (m) return m[1];
            }
        }
    } catch (e) { Logger.debug("readUrlStringFromDx failed: " + e.message); }
    return null;
}

/// Helper: Validate if an address looks like a StringImpl header
/// @param dataAddr - Address where string data starts
/// @param minLen - Minimum length to match
/// @param logFailures - If true, log detailed reasons for validation failures
/// @returns Object {valid: bool, lengthAddr: host.Int64|null, refCountAddr: host.Int64|null} or null
/// Helper: Validate if an address looks like a StringImpl header
/// @param dataAddr - Address where string data starts
/// @param searchStr - The string content to validate flags against
/// @param logFailures - If true, log detailed reasons for validation failures
/// @returns Object {valid: bool, lengthAddr: host.Int64|null, refCountAddr: host.Int64|null} or null
function _validateStringImplHeader(dataAddr, searchStr, logFailures) {
    var addrVal = host.parseInt64(dataAddr, 16);
    var minLen = searchStr.length;

    // Scan window: -32 to +32 bytes
    var startScan = addrVal.subtract(32);
    var bytes = null;
    var ints = null;

    try {
        ints = host.memory.readMemoryValues(startScan, 16, 4);
        bytes = [];
        for (var i = 0; i < ints.length; i++) {
            var val = ints[i];
            bytes.push(val & 0xFF);
            bytes.push((val >> 8) & 0xFF);
            bytes.push((val >> 16) & 0xFF);
            bytes.push((val >> 24) & 0xFF);
        }

        // Calculate expected flags based on searchStr
        var isAscii = /^[\x00-\x7F]*$/.test(searchStr);
        var isLower = isAscii && /^[a-z0-9\W]*$/.test(searchStr); // Lowercase or non-alpha

        // Define flags
        // kIs8Bit = 1 << 0
        // kStatic = 1 << 1
        // kAtomic = 1 << 2
        // kAsciiPropertyCheckDone = 1 << 3
        // kContainsOnlyAscii = 1 << 4
        // kIsLowerAscii = 1 << 5

        var kIs8Bit = 1;
        var kIsStatic = 2; // 1 << 1
        var kIsAtomic = 4; // 1 << 2
        var kContainsOnlyAscii = 16;
        var kIsLowerAscii = 32;

        for (var i = 0; i < bytes.length; i++) {
            var offsetFromData = i - 32;

            // Restrict 32-bit header search to EXACTLY -8 (Length offset)
            if (offsetFromData === -8 && i + 4 <= bytes.length) {
                var val32 = bytes[i] | (bytes[i + 1] << 8) | (bytes[i + 2] << 16) | (bytes[i + 3] << 24);
                val32 = val32 >>> 0;

                // Check Flags at -4 from Data (Offset +4 from length)
                // Flags = hash_and_flags_ & 0xFF
                if (i + 4 < bytes.length) {
                    var flags = bytes[i + 4];



                    // 1. Reject Atomic Strings (avoid corrupting AtomicStringTable)
                    if ((flags & kIsAtomic) === kIsAtomic) {
                        if (logFailures) Logger.info("  [DEBUG] Rejected Length at -8: Atomic String.");
                        continue;
                    }
                }

                // 2. Check RefCount at -12 (Data - 12)
                if (i - 4 >= 0) {
                    var refCount = bytes[i - 4] | (bytes[i - 3] << 8) | (bytes[i - 2] << 16) | (bytes[i - 1] << 24);
                    if (refCount === 0) {
                        if (logFailures) Logger.info("  [DEBUG] Rejected Length at -8: RefCount is 0 (Dead Object).");
                        continue;
                    }
                }

                // Check Length (Raw or SMI)
                if (val32 >= minLen && val32 < minLen + 1000) {
                    return { valid: true, lengthAddr: startScan.add(i), encoding: 'raw', actualLen: val32 };
                }
                var valSmi = val32 >> 1;
                if ((val32 & 1) === 0 && valSmi >= minLen && valSmi < minLen + 1000) {
                    return { valid: true, lengthAddr: startScan.add(i), encoding: 'smi', actualLen: valSmi };
                }
            }
        }
    } catch (e) {
        if (logFailures) Logger.info("  [DEBUG] Scan failed: " + e.message);
    }
    return { valid: false, lengthAddr: null };
}

/// Helper: Patch strings in memory (used by spoof_origin)
/// @param ctl - Debugger control object
/// @param searchStr - String to search for
/// @param replaceStr - Replacement string
/// @param label - Label for logging
/// @param isUnicode - Whether to search for Unicode strings
/// @returns Number of patched occurrences
function _patchStringInMemory(ctl, searchStr, replaceStr, label, isUnicode) {
    if (replaceStr.length > searchStr.length) {
        Logger.warn("  " + label + ": Replacement string too long (" + replaceStr.length + " > " + searchStr.length + "). Aborting to prevent overflow.");
        return 0;
    }

    var needsLengthUpdate = (replaceStr.length !== searchStr.length);

    try {
        var cmdType = isUnicode ? "-u" : "-a";
        var searchCmd = 's ' + cmdType + ' 0 L?' + USER_MODE_ADDR_LIMIT + ' "' + searchStr + '"';
        var output = ctl.ExecuteCommand(searchCmd);

        var addresses = [];
        for (var line of output) {
            var addr = SymbolUtils.extractAddress(line);
            if (addr) addresses.push(addr);
        }

        if (addresses.length === 0) {
            return 0;
        }

        var patched = 0;
        var skipped = 0;
        var hasLoggedFailure = false;

        // Get RSP to filter out stack addresses
        var rsp = null;
        try {
            var rspOutput = ctl.ExecuteCommand('.printf "%I64x", @rsp');
            for (var line of rspOutput) {
                var s = line.toString().trim();
                if (/^[0-9a-fA-F]+$/.test(s)) {
                    rsp = BigInt("0x" + s);
                    break;
                }
            }
        } catch (e) { }

        for (var addr of addresses) {
            try {
                if (typeof addr === 'string') {
                    addr = host.parseInt64(addr, 16);
                }

                // Skip stack addresses (within 1MB of RSP) - these are temporary
                if (rsp) {
                    var addrBig = BigInt("0x" + addr.toString(16));
                    var stackDistance = addrBig > rsp ? addrBig - rsp : rsp - addrBig;
                    if (stackDistance < 0x100000n) {
                        skipped++;
                        continue;
                    }
                }

                if (!_isWritable(addr)) {
                    skipped++;
                    continue;
                }

                var headerInfo = null;

                // If lengths differ, we try to find and update the length field
                if (needsLengthUpdate) {
                    var doLog = (skipped < 3);
                    headerInfo = _validateStringImplHeader(addr, searchStr, doLog);

                    if (headerInfo && headerInfo.valid) {
                        var finalNewLen = replaceStr.length;
                        var actualOldLen = headerInfo.actualLen || searchStr.length;
                        var suffixBytes = [];

                        // Check if we found a larger string (backing store)
                        if (actualOldLen > searchStr.length) {
                            var suffixLen = actualOldLen - searchStr.length;
                            // Sanity check
                            if (suffixLen < 5000) {
                                // Read existing suffix
                                var suffixAddr = addr.add(searchStr.length * (isUnicode ? 2 : 1));
                                var suffixBytesCount = suffixLen * (isUnicode ? 2 : 1);
                                try {
                                    var suffixInts = host.memory.readMemoryValues(suffixAddr, Math.ceil(suffixBytesCount / 4), 4);

                                    for (var v of suffixInts) {
                                        suffixBytes.push(v & 0xFF);
                                        suffixBytes.push((v >> 8) & 0xFF);
                                        suffixBytes.push((v >> 16) & 0xFF);
                                        suffixBytes.push((v >> 24) & 0xFF);
                                    }
                                    if (suffixBytes.length > suffixBytesCount) {
                                        suffixBytes = suffixBytes.slice(0, suffixBytesCount);
                                    }
                                    Logger.info("  [" + label + "] Preserving suffix of length " + suffixLen);
                                } catch (e) { }
                            }
                        }

                        finalNewLen = replaceStr.length + (suffixBytes.length / (isUnicode ? 2 : 1));

                        // Update Header
                        var lenAddrStr = headerInfo.lengthAddr.toString(16);

                        // Safety: Check if Length Header is writable
                        if (_isWritable(headerInfo.lengthAddr)) {
                            if (headerInfo.encoding === "smi") {
                                MemoryUtils.writeU32(lenAddrStr, finalNewLen << 1);
                            } else if (headerInfo.encoding === "smi_byte") {
                                MemoryUtils.writeMemory(lenAddrStr, [(finalNewLen << 1) & 0xFF]);
                            } else if (headerInfo.encoding === "raw_byte") {
                                MemoryUtils.writeMemory(lenAddrStr, [finalNewLen & 0xFF]);
                            } else {
                                MemoryUtils.writeU32(lenAddrStr, finalNewLen);
                            }
                        } else {
                            Logger.warn("Skipping Header Update: Address RO " + lenAddrStr);
                            skipped++;
                            continue;
                        }

                        // Write Suffix at new offset
                        if (suffixBytes.length > 0) {
                            var newSuffixAddr = addr.add(replaceStr.length * (isUnicode ? 2 : 1));
                            if (_isWritable(newSuffixAddr)) {
                                MemoryUtils.writeMemory(newSuffixAddr.toString(16), suffixBytes);
                            }
                        }
                    } else {
                        skipped++;
                        continue;
                    }
                } else {
                    // Same-length replacement: still validate this is a StringImpl
                    var doLog = (skipped < 3);
                    headerInfo = _validateStringImplHeader(addr, searchStr, doLog);
                    if (!headerInfo || !headerInfo.valid) {
                        skipped++;
                        continue;
                    }
                }

                // Write the replacement string data
                var bytes = [];
                for (var i = 0; i < replaceStr.length; i++) {
                    var code = replaceStr.charCodeAt(i);
                    if (isUnicode) {
                        bytes.push(code & 0xFF);
                        bytes.push((code >> 8) & 0xFF);
                    } else {
                        bytes.push(code & 0xFF);
                    }
                }

                MemoryUtils.writeMemory(addr.toString(16), bytes);
                patched++;

            } catch (e) {
                Logger.info("  Error patching address " + addr + ": " + e.message);
                skipped++;
            }
        }

        if (skipped > 0 && !hasLoggedFailure) {
            Logger.info("  " + label + ": Patched " + patched + "/" + addresses.length + " (Skipped " + skipped + " due to missing headers/strict mode)");
            hasLoggedFailure = true;
        } else if (skipped === 0) {
            Logger.info("  " + label + ": Patched " + patched + "/" + addresses.length + " occurrences");
        }
        return patched;

    } catch (e) {
        Logger.info("  Error executing search for " + label + ": " + e.message);
        return 0;
    }
}

/// =============================================================================
/// BLINK DOM UNWRAPPING UTILITIES
/// =============================================================================

/// BlinkUnwrap: Utility class for traversing Blink DOM objects using pointer decompression
class BlinkUnwrap {
    /// Get LocalFrame from WebLocalFrameImpl
    /// Path: WebLocalFrameImpl -> frame_ (compressed) -> LocalFrame
    static getLocalFrame(webFrameAddr) {
        var webFrameHex = normalizeAddress(webFrameAddr);
        if (!webFrameHex) return null;
        var frameCompressed = getCompressedMember(webFrameHex, "(blink::WebLocalFrameImpl*)", "frame_");
        if (frameCompressed === null) return null;
        return MemoryUtils.decompressCppgcPtr(frameCompressed, webFrameAddr);
    }

    /// Get LocalDOMWindow from LocalFrame
    /// Path: LocalFrame -> dom_window_ (compressed) -> LocalDOMWindow
    static getDomWindow(localFrameAddr) {
        var frameHex = normalizeAddress(localFrameAddr);
        if (!frameHex) return null;
        var windowCompressed = getCompressedMember(frameHex, "(blink::LocalFrame*)", "dom_window_");
        if (windowCompressed === null) return null;
        return MemoryUtils.decompressCppgcPtr(windowCompressed, localFrameAddr);
    }

    /// Get Document from LocalDOMWindow
    /// Path: LocalDOMWindow -> document_ (compressed) -> Document
    static getDocument(domWindowAddr) {
        var windowHex = normalizeAddress(domWindowAddr);
        if (!windowHex) return null;
        var docCompressed = getCompressedMember(windowHex, "(blink::LocalDOMWindow*)", "document_");
        if (docCompressed === null) return null;
        return MemoryUtils.decompressCppgcPtr(docCompressed, domWindowAddr);
    }

    /// Get Document directly from LocalFrame (convenience method)
    static getDocumentFromFrame(localFrameAddr) {
        var domWindow = this.getDomWindow(localFrameAddr);
        if (!domWindow || domWindow === "0") return null;
        return this.getDocument(domWindow);
    }

    /// Get SecurityOrigin URL from Document
    static getSecurityOriginUrl(documentAddr) {
        try {
            var ctl = SymbolUtils.getControl();
            var docHex = normalizeAddress(documentAddr);
            if (!docHex) return null;
            var cmd = "dx -r3 ((blink::Document*)" + docHex + ")->GetExecutionContext()->GetSecurityOrigin()->ToUrlOrigin().GetDebugString()";
            var output = ctl.ExecuteCommand(cmd);
            for (var line of output) {
                var lineStr = line.toString();
                var urlMatch = lineStr.match(/"([^"]+)"/);
                if (urlMatch) return urlMatch[1];
            }
            return readUrlStringFromDx(documentAddr.replace(/^0x/, ""), "(blink::Document*)");
        } catch (e) { }
        return null;
    }

    /// Helper: Read a string member (WTF::String, KURL, etc.) from an object
    static _readStringMember(objHex, typeCast, memberPath, type) {
        var ctl = SymbolUtils.getControl();
        try {
            var memberAddrCmd = "dx &((" + typeCast + objHex + ")->" + memberPath + ")";
            var memberAddrOutput = ctl.ExecuteCommand(memberAddrCmd);
            for (var maLine of memberAddrOutput) {
                var maMatch = maLine.toString().match(/:\s+(0x[0-9a-fA-F`]+)/);
                if (maMatch) {
                    var maAddr = maMatch[1].replace(/`/g, "");
                    return BlinkUnwrap.readString(maAddr);
                }
            }
        } catch (e) { }
        return null;
    }

    /// Get a C++ member value from an object
    /// @param objectAddr - Address of the object
    /// @param typeCast - Type cast string, e.g. "(blink::Element*)"
    /// @param memberPath - Member name or path (e.g., "node_flags_" or "element_data_.ptr_")
    /// @returns Object with {value, type, raw} or null if failed
    static getCppMember(objectAddr, typeCast, memberPath) {
        var objHex = tryDecompressAddress(objectAddr);
        if (!objHex) return null;

        var ctl = SymbolUtils.getControl();
        try {
            var cmd = "dx -r0 (" + typeCast + objHex + ")->" + memberPath;
            var output = ctl.ExecuteCommand(cmd);
            for (var line of output) {
                var lineStr = line.toString();

                // Check for error messages
                if (lineStr.indexOf("Unable to bind") !== -1) return null;
                if (lineStr.indexOf("Error:") !== -1) return null;
                if (lineStr.indexOf("Couldn't resolve") !== -1) return null;
                if (lineStr.indexOf("No type information") !== -1) return null;

                // Extract type first
                var typeMatch = lineStr.match(/\[Type:\s*([^\]]+)\]/);
                var typeStr = typeMatch ? typeMatch[1] : "unknown";

                // Check if this is a BasicMember/Member pointer type that needs decompression
                if (typeStr.indexOf("BasicMember") !== -1 || typeStr.indexOf("Member<") !== -1 ||
                    typeStr.indexOf("scoped_refptr") !== -1 || typeStr.indexOf("WeakMember") !== -1) {
                    // For pointer types, get the raw compressed value and decompress it
                    try {
                        var rawCmd = "dx &((" + typeCast + objHex + ")->" + memberPath + ".raw_)";
                        var rawOutput = ctl.ExecuteCommand(rawCmd);
                        var rawAddr = null;
                        for (var rawLine of rawOutput) {
                            var rawMatch = rawLine.toString().match(/:\s+(0x[0-9a-fA-F`]+)/);
                            if (rawMatch) {
                                rawAddr = rawMatch[1].replace(/`/g, "");
                                break;
                            }
                        }
                        if (rawAddr) {
                            var compressedVal = host.memory.readMemoryValues(host.parseInt64(rawAddr, 16), 1, 4)[0];
                            if (compressedVal === 0) {
                                return { value: "null", type: typeStr, raw: lineStr };
                            }
                            var decompressed = MemoryUtils.decompressCppgcPtr(compressedVal, objHex);
                            if (decompressed && decompressed !== "0") {
                                var pointeeType = extractPointeeType(typeStr);
                                return { value: "0x" + decompressed + (pointeeType ? " " + pointeeType : ""), type: typeStr, raw: lineStr };
                            }
                        }
                    } catch (ptrErr) { }
                    // Fallback: return the type description
                    return { value: "(pointer type - use frame_attrs)", type: typeStr, raw: lineStr };
                }

                // Parse value from "member : value [Type: ...]" format
                // Fix: Require space after colon to avoid matching "blink::Type"
                var match = lineStr.match(/:\s+(.+?)\s*(?:\[Type:|$)/);
                if (match) {
                    var rawValue = match[1].trim();
                    // Skip if value looks like an error
                    if (rawValue.indexOf("Unable to") !== -1) return null;

                    // DRY: Use _readStringMember if this is a string type and value is opaque
                    if ((typeStr.indexOf("String") !== -1 || typeStr.indexOf("KURL") !== -1) &&
                        (rawValue === "{...}" || rawValue.startsWith("0x"))) {
                        var strVal = this._readStringMember(objHex, typeCast, memberPath, typeStr);
                        if (strVal !== null) return { value: "\"" + strVal + "\"", type: typeStr, raw: lineStr };
                    }

                    return { value: rawValue, type: typeStr, raw: lineStr };
                }
            }
        } catch (e) { }
        return null;
    }

    /// Set a C++ member value on an object (integers/pointers only)
    /// @param objectAddr - Address of the object
    /// @param typeCast - Type cast string, e.g. "(blink::Element*)"
    /// @param memberPath - Member name
    /// @param value - Value to write (number or hex string)
    /// @returns true if successful
    static setCppMember(objectAddr, typeCast, memberPath, value) {
        var objHex = tryDecompressAddress(objectAddr);
        if (!objHex) return false;

        var ctl = SymbolUtils.getControl();
        try {
            // First, get member info (address and type)
            var memberCmd = "dx &(" + typeCast + objHex + ")->" + memberPath;
            var memberOutput = ctl.ExecuteCommand(memberCmd);
            var memberAddr = null;
            for (var line of memberOutput) {
                var m = line.toString().match(/:\s+(0x[0-9a-fA-F`]+)/);
                if (m) {
                    memberAddr = m[1].replace(/`/g, "");
                    break;
                }
            }
            if (!memberAddr) {
                Logger.error("Could not get member address");
                return false;
            }

            // Get member type from dx
            var typeCmd = "dx (" + typeCast + objHex + ")->" + memberPath;
            var typeOutput = ctl.ExecuteCommand(typeCmd);
            var memberType = "";
            for (var line of typeOutput) {
                var typeMatch = line.toString().match(/\[Type:\s*([^\]]+)\]/);
                if (typeMatch) {
                    memberType = typeMatch[1].trim();
                    break;
                }
            }

            // Handle different types
            var isStringLike = memberType.indexOf("String") !== -1 || memberType.indexOf("KURL") !== -1;

            if (isStringLike) {
                var stringPath = memberPath;
                if (memberType.indexOf("KURL") !== -1) {
                    stringPath += ".string_";
                    Logger.info("[C++] Targeting KURL underlying string: " + stringPath);
                }

                if (memberType.indexOf("AtomicString") !== -1) {
                    Logger.warn("[CAUTION] Mutating AtomicString. These are shared/unique across the process.");
                    Logger.warn("          Changing this value may affect other objects!");
                }

                // String type - find StringImpl and write characters
                var implCmd = "dx &((" + typeCast + objHex + ")->" + stringPath + ".impl_.ptr_)";
                var implOutput = ctl.ExecuteCommand(implCmd);
                var implPtrAddr = null;
                for (var line of implOutput) {
                    var m = line.toString().match(/:\s+(0x[0-9a-fA-F`]+)/);
                    if (m) {
                        implPtrAddr = m[1].replace(/`/g, "");
                        break;
                    }
                }

                if (implPtrAddr) {
                    // Read the StringImpl* from the impl_.ptr_ field
                    var implPtr = host.memory.readMemoryValues(host.parseInt64(implPtrAddr, 16), 1, 8)[0];
                    var implAddrBig = MemoryUtils.parseBigInt(implPtr);
                    if (implAddrBig !== 0n) {
                        var implAddr = "0x" + implAddrBig.toString(16);
                        MemoryUtils.writeStringImpl(implAddr, value);
                        Logger.info("[C++] String written via StringImpl at " + implAddr);
                        return true;
                    }
                }
                Logger.error("Could not find StringImpl for string-like member: " + memberType);
                return false;
            }
            else if (memberType === "bool") {
                // Boolean - write 1 byte
                var boolVal = (value === "true" || value === "1" || value === true) ? 1 : 0;
                var writeCmd = "eb " + memberAddr + " " + boolVal;
                ctl.ExecuteCommand(writeCmd);
                return true;
            }
            else if (memberType.indexOf("unsigned int") !== -1 || memberType.indexOf("uint32_t") !== -1 ||
                memberType.indexOf("int") !== -1 || memberType.indexOf("uint16_t") !== -1 ||
                memberType.indexOf("short") !== -1) {
                // 32-bit or smaller integer
                MemoryUtils.writeU32(memberAddr, parseIntAuto(value));
                return true;
            }
            else if (memberType.indexOf("uint64_t") !== -1 || memberType.indexOf("size_t") !== -1 ||
                memberType.indexOf("uintptr_t") !== -1 || memberType.indexOf("*") !== -1) {
                // 64-bit value or pointer
                var numericValue = BigInt(parseIntAuto(value));
                var writeCmd = "eq " + memberAddr + " " + numericValue.toString(16);
                ctl.ExecuteCommand(writeCmd);
                return true;
            }
            else {
                // Default: try 32-bit write
                Logger.info("[C++] Unknown type '" + memberType + "', trying 32-bit write...");
                var numericValue = parseIntAuto(value);
                if (isNaN(numericValue)) {
                    Logger.error("Cannot convert value '" + value + "' to numeric");
                    return false;
                }
                MemoryUtils.writeU32(memberAddr, numericValue);
                return true;
            }
        } catch (e) {
            Logger.error("setCppMember failed: " + e.message);
        }
        return false;
    }

    /// Enumerate C++ members of an object
    /// @param objectAddr - Address of the object
    /// @param typeCast - Type cast string, e.g. "(blink::Element*)"
    /// @returns Array of {name, value, type} objects
    static getCppMembers(objectAddr, typeCast) {
        var objHex = tryDecompressAddress(objectAddr);
        if (!objHex) return [];

        var ctl = SymbolUtils.getControl();
        var members = [];
        try {
            var cmd = "dx -r1 (" + typeCast + objHex + ")";
            var output = ctl.ExecuteCommand(cmd);
            for (var line of output) {
                var lineStr = line.toString();

                // Skip empty lines and header
                if (lineStr.trim().length === 0) continue;
                if (lineStr.indexOf("(" + typeCast) !== -1) continue; // Header line

                // Parse format: "    [+0x048] tag_name_        : value [Type: ...]"
                // or: "    [+0x058] element_data_    [Type: ...]" (no colon before type)
                var offsetMatch = lineStr.match(/\[\+0x[0-9a-fA-F]+\]\s+(.+)$/);
                if (!offsetMatch) continue;

                var afterOffset = offsetMatch[1];

                // Skip base class entries like "blink::ContainerNode [Type: ...]"
                if (afterOffset.match(/^[a-zA-Z_][a-zA-Z0-9_]*::[a-zA-Z_]/)) continue;

                // Try to parse "member_ : value [Type: ...]" format
                var colonMatch = afterOffset.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*:\s*(.+)$/);
                if (colonMatch) {
                    var name = colonMatch[1];
                    var rest = colonMatch[2].trim();
                    var typeMatch = rest.match(/\[Type:\s*([^\]]+)\]\s*$/);
                    var type = typeMatch ? typeMatch[1] : "unknown";
                    var value = typeMatch ? rest.replace(/\s*\[Type:[^\]]+\]\s*$/, "").trim() : rest;
                    if (value.length === 0) value = "{...}";

                    // DRY: Use _readStringMember for opaque string/URL members
                    if ((type.indexOf("String") !== -1 || type.indexOf("KURL") !== -1) &&
                        (value === "{...}" || value.startsWith("0x"))) {
                        var strVal = this._readStringMember(objHex, typeCast, name, type);
                        if (strVal !== null) value = "\"" + strVal + "\"";
                    }

                    members.push({ name: name, value: value, type: type });
                    continue;
                }

                // Try to parse "member_ [Type: ...]" format (no colon)
                var noColonMatch = afterOffset.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s+\[Type:\s*([^\]]+)\]/);
                if (noColonMatch) {
                    var memberName = noColonMatch[1];
                    var memberType = noColonMatch[2];
                    var value = "{...}";

                    // DRY: Use _readStringMember for opaque string/URL members
                    if (memberType.indexOf("String") !== -1 || memberType.indexOf("KURL") !== -1) {
                        var strVal = this._readStringMember(objHex, typeCast, memberName, memberType);
                        if (strVal !== null) value = "\"" + strVal + "\"";
                    }
                    members.push({ name: memberName, value: value, type: memberType });
                }
            }
        } catch (e) { Logger.debug("getCppMembers parse error: " + e.message); }
        return members;
    }





    /// Inspect an address and return structured information (Type, String, Pointer, etc.)
    static inspect(addr, options) {
        options = options || {};
        var objHex = tryDecompressAddress(addr);
        if (!objHex) return null;
        var addrBig = MemoryUtils.parseBigInt(objHex);
        var debug = options.debug === true;

        var result = {
            address: objHex,
            type: null,
            vtable: null,
            stringValue: null,
            isPointer: false,
            pointerTarget: null,
            pointerType: null
        };

        // 1. Detect C++ type via VTable
        result.type = this.detectType(objHex, debug);
        if (!result.type && options.typeHint) {
            result.type = normalizeTypeHint(options.typeHint);
        }

        // 2. Try to read as a String/KURL
        // Priority: If type hint says String/KURL, try that. 
        // If no type, try reading anyway (cheap check for StringImpl)
        var isStringy = result.type && (result.type.indexOf("String") !== -1 || result.type.indexOf("KURL") !== -1);
        if (isStringy || (!result.type && addrBig > 0x10000n)) {
            try {
                result.stringValue = this.readString(objHex);
            } catch (e) { }
        }

        // 3. Pointer Analysis (Raw or Compressed)
        // If we have a non-zero value and it's not obviously a string content pointer 
        // (unless it's a Member<String>, but Member<T> is usually handled by dx)
        if (addrBig > 0x10000n && !result.stringValue) {
            var val64 = addrBig;
            var high32 = Number(val64 >> 32n);
            var low32 = Number(val64 & 0xFFFFFFFFn);

            if (isValidUserModePointer(val64)) {
                // Potential raw pointer
                var sym = SymbolUtils.getSymbolName(objHex);
                if (sym && (sym.indexOf("vftable") !== -1 || sym.indexOf("??_7") !== -1)) {
                    result.vtable = objHex;
                } else {
                    result.isPointer = true;
                    result.pointerTarget = objHex;
                    result.pointerType = "Raw 64-bit pointer";
                }
            } else if (high32 === 0 && low32 !== 0) {
                // Potential compressed pointer
                var cppgcPtr = MemoryUtils.decompressCppgcPtr(low32, objHex);
                if (cppgcPtr && cppgcPtr !== "0") {
                    result.isPointer = true;
                    result.pointerTarget = "0x" + cppgcPtr;
                    result.pointerType = "Compressed CppGC pointer (Member<T>)";
                }
            }
        }

        return result;
    }

    /// Detect the type of a Blink object using its vtable
    /// Supports backward scanning to detect embedded struct types.
    static detectType(objectAddr, debug, noScan) {
        var objHex = tryDecompressAddress(objectAddr);
        if (!objHex) return null;

        try {
            // 1. Direct VTable Check
            var vtablePtr = host.memory.readMemoryValues(host.parseInt64(objHex, 16), 1, 8)[0];
            if (debug) Logger.info("  [Debug] VTable Ptr at " + objHex + ": 0x" + vtablePtr.toString(16));

            if (vtablePtr.compareTo(0) !== 0) {
                var vtableHex = vtablePtr.toString(16);

                // Check ProcessCache (VTable) first
                if (ProcessCache.getVTableType(vtableHex)) {
                    var cached = ProcessCache.getVTableType(vtableHex);
                    if (debug) Logger.info("  [Debug] Type Cache Hit: " + cached);
                    return cached;
                }

                var symName = SymbolUtils.getSymbolName(vtableHex, debug);
                if (symName) {
                    var resultType = null;

                    // Pattern 1: Standard vtable symbol (chrome!blink::ClassName::`vftable' or ::vftable)
                    // Handle both ::vftable and ::`vftable' formats
                    var matchVftable = symName.match(/!([a-zA-Z0-9_:]+)::(?:`vftable'|vftable)/);
                    if (matchVftable) {
                        var className = matchVftable[1];
                        if (debug) Logger.info("  [Debug] Detected Type (Std): " + className);
                        resultType = "(" + className + "*)";
                    }

                    // Pattern 2: MSVC mangled vtable symbol (??_7...)
                    if (!resultType) {
                        var matchMangled = symName.match(/\?\?_7([a-zA-Z0-9_]+)/);
                        if (matchMangled) {
                            var rawName = matchMangled[1];
                            // Strip "blink" suffix from mangled names (5 = "blink".length)
                            if (rawName.endsWith("blink") && rawName.length > "blink".length) {
                                rawName = rawName.substring(0, rawName.length - "blink".length);
                            }
                            var fullType = (rawName.indexOf("::") === -1) ? "blink::" + rawName : rawName;
                            if (debug) Logger.info("  [Debug] Detected Type (Mangled): " + fullType);
                            resultType = "(" + fullType + "*)";
                        }
                    }

                    // Pattern 3: Fallback - any symbol with module!namespace::ClassName:: pattern
                    if (!resultType) {
                        var matchFallback = symName.match(/!([a-zA-Z_][a-zA-Z0-9_:]*)::/)
                        if (matchFallback) {
                            var className = matchFallback[1];
                            if (debug) Logger.info("  [Debug] Detected Type (Fallback): " + className);
                            resultType = "(" + className + "*)";
                        }
                    }

                    // Cache and return result
                    if (resultType) {
                        ProcessCache.setVTableType(vtableHex, resultType);
                        return resultType;
                    }
                }
            }
        } catch (e) {
            if (debug) Logger.info("  [Debug] detectType direct check failed: " + e.message);
        }

        // NOTE: Backward scan disabled - it was slow and produced false matches.
        // Types without vtables (like SecurityOrigin) cannot be auto-detected.
        // The pointer-following logic will still work; users can cast manually with dx.

        return null;
    }

    /// Get C++ member using detected type
    /// @param objectAddr - Address of the object
    /// @param memberPath - Member name
    /// @param typeHint - Optional type hint for non-vtable types
    /// @returns Object with {value, type, raw, typeCast} or null
    static getCppMemberWithFallback(objectAddr, memberPath, typeHint) {
        // Try detected type first
        var detectedType = this.detectType(objectAddr);
        if (detectedType) {
            var result = this.getCppMember(objectAddr, detectedType, memberPath);
            if (result) {
                result.typeCast = detectedType;
                return result;
            }
        }

        // If typeHint provided, try that
        if (typeHint) {
            var result = this.getCppMember(objectAddr, typeHint, memberPath);
            if (result) {
                result.typeCast = typeHint;
                return result;
            }
        }

        return null;
    }

    /// Get the pointer address of a member (with decompression if needed)
    /// @param objectAddr - Address of the object
    /// @param typeCast - Type cast string
    /// @param memberPath - Member name
    /// @returns Decompressed pointer address string or null
    static getMemberPointer(objectAddr, typeCast, memberPath) {
        var objHex = tryDecompressAddress(objectAddr);
        if (!objHex) return null;
        var baseBig = MemoryUtils.parseBigInt(objHex);

        // 1. Try Offset Cache
        var className = null;
        var match = typeCast.match(/\((?:const\s+)?([a-zA-Z0-9_:]+)(?:\s*\*|\*)\)/);
        if (match) className = match[1];

        if (className) {
            var cached = ProcessCache.getOffset(className + "->" + memberPath);
            if (cached) {
                var memberAddr = baseBig + BigInt(cached.offset);
                return "0x" + memberAddr.toString(16);
            }
        }

        var ctl = SymbolUtils.getControl();
        try {
            // Try to get the address of the member
            var cmd = "dx &(" + typeCast + objHex + ")->" + memberPath;
            var output = ctl.ExecuteCommand(cmd);
            for (var line of output) {
                var lineStr = line.toString();
                // Look for address like "0x12345678" or "0x12345678`abcdefab"
                // Fix: Ensure we match the value after the colon (space required)
                var match = lineStr.match(/:\s+(0x[0-9a-fA-F`]+)/);
                if (match) {
                    var addr = match[1].replace(/`/g, "");
                    var addrBig = MemoryUtils.parseBigInt(addr);

                    // Cache the offset
                    if (className) {
                        var calcedOffset = addrBig - baseBig;
                        // Sanity check: Offset should be positive and reasonable
                        if (calcedOffset >= 0n && calcedOffset < 0x10000n) {
                            ProcessCache.setOffset(className + "->" + memberPath, { offset: calcedOffset.toString(), path: memberPath });
                        }
                    }

                    // Check if this is a compressed pointer (high bits are 0)
                    if (addr.length <= 10) { // Compressed (32-bit)
                        // Try to decompress
                        var decompressed = MemoryUtils.decompressCppgcPtr(addr, objHex);
                        if (decompressed) return "0x" + decompressed;
                    }
                    return addr;
                }
            }
        } catch (e) { }
        return null;
    }

    /// Set C++ member using detected type
    /// @param objectAddr - Address of the object
    /// @param memberPath - Member name
    /// @param value - Value to write
    /// @param typeHint - Optional type hint for non-vtable types
    /// @returns true if successful
    static setCppMemberWithFallback(objectAddr, memberPath, value, typeHint) {
        // Try detected type first
        var detectedType = this.detectType(objectAddr);
        if (detectedType) {
            if (this.setCppMember(objectAddr, detectedType, memberPath, value)) {
                return true;
            }
        }

        // If typeHint provided, try that
        if (typeHint) {
            if (this.setCppMember(objectAddr, typeHint, memberPath, value)) {
                return true;
            }
        }

        return false;
    }

    /// Get C++ members with fallback across multiple Blink types
    /// @param objectAddr - Address of the object
    /// @param debug - Enable debug logging
    /// @param typeHint - Optional type hint (e.g., "(blink::SecurityOrigin*)") to try if vtable detection fails
    /// @returns Object with {members: Array, typeCast: string} or {members: [], typeCast: null}
    static getCppMembersWithFallback(objectAddr, debug, typeHint) {
        // 1. Try detected type first (vtable-based)
        var detectedType = this.detectType(objectAddr, debug);
        if (detectedType) {
            var members = this.getCppMembers(objectAddr, detectedType);
            if (members.length > 0) {
                return { members: members, typeCast: detectedType };
            }
        }

        // 2. If typeHint provided, try that
        if (typeHint) {
            var members = this.getCppMembers(objectAddr, typeHint);
            if (members.length > 0) {
                return { members: members, typeCast: typeHint };
            }
        }

        // 3. No type detected or hinted - return empty
        return { members: [], typeCast: null };
    }

    /// Get Document URL
    static getDocumentUrl(documentAddr) {
        var docHex = documentAddr.toString().replace(/^0x/, "");
        return readUrlStringFromDx(docHex, "(blink::Document*)");
    }

    /// Get first child of a node (ContainerNode::first_child_)
    static getFirstChild(nodeAddr) {
        var nodeHex = normalizeAddress(nodeAddr);
        if (!nodeHex) return null;
        var childCompressed = getCompressedMember(nodeHex, "(blink::ContainerNode*)", "first_child_");
        if (childCompressed === null) return null;
        var res = MemoryUtils.decompressCppgcPtr(childCompressed, nodeAddr);
        return res;
    }

    /// Get next sibling of a node (Node::next_)
    static getNextSibling(nodeAddr) {
        var nodeHex = normalizeAddress(nodeAddr);
        if (!nodeHex) return null;
        var siblingCompressed = getCompressedMember(nodeHex, "(blink::Node*)", "next_");
        if (siblingCompressed === null) return null;
        return MemoryUtils.decompressCppgcPtr(siblingCompressed, nodeAddr);
    }

    /// Helper: Parse string from dx output
    static _parseStringFromDxOutput(output) {
        for (var line of output) {
            var s = line.toString();
            // Check for [AsciiText] : "value" or [Text] : "value"
            var match = s.match(/\[(Ascii)?Text\]\s*:\s*"([^"]*)"/);
            if (match) return match[2];

            // Check for "value" (simple quote) - but not empty
            var match2 = s.match(/^"([^"]+)"$/);
            if (match2) return match2[1];

            // Check for Prop : "value" pattern
            var match3 = s.match(/:\s*"([^"]+)"/);
            if (match3) return match3[1];

            // Check for string_ : ... "value" pattern
            var match4 = s.match(/string_.*"([^"]+)"/);
            if (match4) return match4[1];

            // Check for impl_ with quoted string
            var match5 = s.match(/impl_.*"([^"]+)"/);
            if (match5) return match5[1];

            // Fallback: look for any quoted string with Text label
            if (s.indexOf("Text") !== -1) {
                var m = s.match(/"([^"]+)"/);
                if (m) return m[1];
            }

            // Look for URL patterns (often appear in attribute values)
            var urlMatch = s.match(/(https?:\/\/[^\s"]+)/);
            if (urlMatch) return urlMatch[1];
        }
        return null;
    }

    /// Helper: Extract attribute value using multiple fallback paths
    /// @param base - Base dx expression for the attribute (e.g., "((blink::UniqueElementData*)0x...)->attribute_vector_[0]")
    /// @returns The attribute value string or null
    static _extractAttributeValue(base) {
        var ctl = SymbolUtils.getControl();
        var valStr = null;

        // Path 1: Direct value_ access
        try {
            var vOut = ctl.ExecuteCommand("dx -r3 " + base + ".value_");
            valStr = BlinkUnwrap._parseStringFromDxOutput(vOut);
            if (valStr) return valStr;
        } catch (e) { }

        // Path 2: Try value_.string_ for AtomicString
        try {
            var vOut2 = ctl.ExecuteCommand("dx -r3 " + base + ".value_.string_");
            valStr = BlinkUnwrap._parseStringFromDxOutput(vOut2);
            if (valStr) return valStr;
        } catch (e) { }

        // Path 3: Direct AtomicString impl access
        try {
            var vOut3 = ctl.ExecuteCommand("dx -r2 " + base + ".value_.impl_");
            valStr = BlinkUnwrap._parseStringFromDxOutput(vOut3);
            if (valStr) return valStr;
        } catch (e) { }

        // Path 4: Fallback to looking for any quoted string in dx output
        try {
            var vOut4 = ctl.ExecuteCommand("dx -r4 " + base);
            for (var line of vOut4) {
                var lineStr = line.toString();
                if (lineStr.indexOf("value_") !== -1 || lineStr.indexOf("Value") !== -1) {
                    var m = lineStr.match(/"([^"]+)"/);
                    if (m) return m[1];
                }
            }
            // Last resort: any quoted string
            for (var line of vOut4) {
                var m = line.toString().match(/"([^"]+)"/);
                if (m) return m[1];
            }
        } catch (e) { }

        return null;
    }

    /// Get node name (tag name)
    static getNodeName(nodeAddr) {
        var ctl = SymbolUtils.getControl();
        var nodeHex = normalizeAddress(nodeAddr);
        if (!nodeHex) return null;

        try {
            // Read node_flags_ to check type (avoid virtual calls)
            var cmd = "dx -r0 ((blink::Node*)" + nodeHex + ")->node_flags_";
            var output = ctl.ExecuteCommand(cmd);
            var flags = null;
            for (var line of output) {
                var s = line.toString();
                // Match decimal or hex from "node_flags_ : value"
                var m = s.match(/:[ ]*(0x[0-9a-fA-F]+|\d+)/);
                if (m) {
                    flags = parseIntAuto(m[1]);
                    break;
                }
            }

            if (flags !== null) {
                var type = flags & 0xF;
                // kElementNode = 1
                if (type === 1) {
                    var cmdE = "dx -r2 ((blink::Element*)" + nodeHex + ")->tag_name_.impl_->local_name_.string_";
                    var res = BlinkUnwrap._parseStringFromDxOutput(ctl.ExecuteCommand(cmdE));
                    if (res) return res;
                    return "ELEMENT (Name unreadable)";
                }
                if (type === 3) return "#text";
                if (type === 8) return "#comment";
                if (type === 9) return "#document";
                if (type === 10) return "#doctype";
                if (type === 11) return "#document-fragment";
            }
        } catch (e) { }

        // Fallback: Try virtual function if flags check failed
        try {
            var cmd = "dx -r2 ((blink::Node*)" + nodeHex + ")->nodeName()";
            var res = BlinkUnwrap._parseStringFromDxOutput(ctl.ExecuteCommand(cmd));
            if (res) return res;
        } catch (e) { }

        return null;
    }

    /// Recursively find which class in the hierarchy defines a member
    /// @param className - Starting class name (e.g. "blink::LocalDOMWindow")
    /// @param thisPtr - Object pointer string
    /// @param memberName - Member to find (e.g. "security_origin_")
    /// @returns Object { fullCast: "blink::SecurityContext", offset: ... } or null
    /// Recursively find member in hierarchy OR composition
    /// @returns Object { path: "->member" (e.g. "->security_context_.security_origin_") } or null
    static findMemberDeep(className, thisPtr, memberName) {
        var ctl = SymbolUtils.getControl();
        // Queue items: { class: "blink::Foo", path: "" }
        var queue = [{ cls: className, path: "" }];
        var visited = new Set();
        visited.add(className);

        var checks = 0;
        var maxChecks = 50; // Allow more checks for composition

        Logger.info("    [Deep Search] Starting BFS for '" + memberName + "' from '" + className + "'");

        while (queue.length > 0 && checks < maxChecks) {
            var item = queue.shift();
            var currentClass = item.cls;
            var currentPath = item.path;

            // normalized visited check (without module prefix)
            var normClass = currentClass.replace(/^(chrome!|blink::)/, "");
            // visited.add(normClass); // Don't block revisit via different path?? No, block cycles.

            checks++;

            // Use * pointer dereference to see structure
            var lookupClass = currentClass;
            if (lookupClass.indexOf("!") === -1) lookupClass = "chrome!" + lookupClass;

            // Construct expression to inspect: *((Class*)this)
            // We use 0 if thisPtr is invalid, but better to use real ptr
            var inspectExpr = "*((" + lookupClass + "*)" + thisPtr + ")";

            // Logger.info("    [Deep Search] Checking " + currentClass + " (Path: " + (currentPath||"root") + ")");

            try {
                var output = ctl.ExecuteCommand("dx -r1 " + inspectExpr);
                var pendingDelegates = [];

                for (var line of output) {
                    var lineStr = line.toString();

                    // 1. Check for DIRECT MATCH of member
                    // Line format: [+0x10] security_origin_ [Type: ...]
                    // Or: security_origin_ : ...
                    // Regex: Look for memberName followed by space or colon or [
                    var memberRegex = new RegExp("(?:^|\\s)" + memberName + "(?:\\s|:|$)");
                    if (memberRegex.test(lineStr)) {
                        Logger.info("    [Deep Search] FOUND '" + memberName + "' in " + currentClass + " via path: " + currentPath);
                        return { path: currentPath + "->" + memberName };
                    }

                    // 2. Identify Base Classes
                    // [Base Class] : class blink::SecurityContext
                    if (lineStr.indexOf("Base Class") !== -1) {
                        var match = lineStr.match(/:\s*(?:class|struct)?\s*([a-zA-Z0-9_:]+)/);
                        if (match) {
                            var baseCls = match[1].replace(/^(public|private|protected)\s+/, "");
                            if (!visited.has(baseCls)) {
                                visited.add(baseCls);
                                // Base class path is TRANSPARENT (no ->base needed in C++)
                                // So we keep currentPath. 
                                // Note: technically we should check if baseCls has the member.
                                queue.push({ cls: baseCls, path: currentPath });
                            }
                        }
                    }

                    // 3. Identify Composite Delegates (e.g. security_context_)
                    // Look for specific delegate patterns to avoid traversing everything
                    // Pattern: *_context_, *_impl_, *controller_
                    // And Type must be a defined class (blink::...)
                    if (lineStr.indexOf("blink::") !== -1 && (lineStr.indexOf("context_") !== -1 || lineStr.indexOf("impl_") !== -1)) {
                        // Extract Member Name and Type
                        // [+0x0f8] security_context_ [Type: blink::SecurityContext]
                        var matchComp = lineStr.match(/\]\s*([a-zA-Z0-9_]+)\s*\[Type:\s*([a-zA-Z0-9_:]+)/);
                        if (matchComp) {
                            var member = matchComp[1];
                            var type = matchComp[2];
                            if (!visited.has(type)) {
                                // Add to queue with updated path
                                pendingDelegates.push({ cls: type, path: currentPath + "->" + member });
                            }
                        }
                    }
                }

                // Process delegates after direct checks to prioritize direct/base
                for (var d of pendingDelegates) queue.push(d);

            } catch (e) { }
        }

        Logger.info("    [Deep Search] Failed after checking " + checks + " nodes.");
        return null;
    }
    /// Helper: Traverse attributes of an element
    /// callback(name, baseExpression) -> return true to stop
    /// @param elementAddr - Element address
    /// @param callback - Function to call for each attribute
    /// @param debug - If true, output debug info
    static _traverseAttributes(elementAddr, callback, debug) {
        var elemHex = normalizeAddress(elementAddr);
        if (!elemHex) {
            if (debug) Logger.warn("_traverseAttributes: Invalid element address");
            return;
        }

        var ctl = SymbolUtils.getControl();

        // First, try to read element_data_ as a compressed pointer
        var dataCompressed = getCompressedMember(elemHex, "(blink::Element*)", "element_data_");

        if (debug) {
            Logger.info("  [Debug] Element: " + elemHex);
            Logger.info("  [Debug] element_data_ compressed: " + (dataCompressed !== null ? "0x" + dataCompressed.toString(16) : "null"));
        }

        // If compressed pointer approach failed, try direct dx access
        if (!dataCompressed || dataCompressed === 0) {
            // Try direct dx to see if element_data_ exists
            if (debug) {
                try {
                    var dxCmd = "dx -r1 ((blink::Element*)" + elemHex + ")->element_data_";
                    var dxOut = ctl.ExecuteCommand(dxCmd);
                    for (var line of dxOut) {
                        Logger.info("  [Debug] dx element_data_: " + line.toString());
                    }
                } catch (e) {
                    Logger.info("  [Debug] dx element_data_ failed: " + e.message);
                }
            }
            return;
        }

        var dataAddr = MemoryUtils.decompressCppgcPtr(dataCompressed, elemHex);

        if (debug) {
            Logger.info("  [Debug] ElementData decompressed: 0x" + dataAddr);
        }

        if (!isValidPointer(dataAddr)) return;

        // Try to determine ElementData type via bit_field_ first
        // ElementData::bit_field_ contains is_unique flag in bit 0
        var bitField = 0;
        var isUnique = null; // null = unknown, true/false = detected

        try {
            var cmd = "dx -r0 ((blink::ElementData*)0x" + dataAddr + ")->bit_field_.bits_";
            var output = ctl.ExecuteCommand(cmd);
            for (var line of output) {
                var lineStr = line.toString();
                if (lineStr.indexOf("Unable to") !== -1 || lineStr.indexOf("Error") !== -1) continue;
                var m = lineStr.match(/:\s*(0x[0-9a-fA-F]+|\d+)/);
                if (m) {
                    bitField = parseIntAuto(m[1]);
                    // bit 0 = is_unique flag
                    isUnique = (bitField & ELEMENT_DATA_UNIQUE_FLAG) !== 0;
                    if (debug) {
                        Logger.info("  [Debug] bitField: 0x" + bitField.toString(16) + " isUnique: " + isUnique);
                    }
                    break;
                }
            }
        } catch (e) {
            if (debug) Logger.info("  [Debug] bit_field_ read failed: " + e.message);
        }

        var count = 0;

        // If bitfield detection failed, try probing both types
        if (isUnique === null) {
            if (debug) Logger.info("  [Debug] bitField detection failed, probing types...");

            // Try UniqueElementData first (more common for elements with attributes)
            try {
                var probeCmd = "dx -r0 ((blink::UniqueElementData*)0x" + dataAddr + ")->attribute_vector_[0]";
                var probeOut = ctl.ExecuteCommand(probeCmd);
                for (var line of probeOut) {
                    var lineStr = line.toString();
                    if (lineStr.indexOf("[Type:") !== -1 && lineStr.indexOf("Unable to") === -1) {
                        isUnique = true;
                        if (debug) Logger.info("  [Debug] Detected UniqueElementData via probe");
                        break;
                    }
                }
            } catch (e) { }

            if (isUnique === null) {
                // Try ShareableElementData
                try {
                    var probeCmd2 = "dx -r0 ((blink::ShareableElementData*)0x" + dataAddr + ")->attribute_array_[0]";
                    var probeOut2 = ctl.ExecuteCommand(probeCmd2);
                    for (var line of probeOut2) {
                        var lineStr = line.toString();
                        if (lineStr.indexOf("[Type:") !== -1 && lineStr.indexOf("Unable to") === -1) {
                            isUnique = false;
                            if (debug) Logger.info("  [Debug] Detected ShareableElementData via probe");
                            break;
                        }
                    }
                } catch (e) { }
            }
        }

        // If still unknown, give up
        if (isUnique === null) {
            if (debug) Logger.info("  [Debug] Could not determine ElementData type - skipping");
            return;
        }

        if (isUnique) {
            // UniqueElementData: probe to find count since size_ may be unreliable
            for (var probe = 0; probe < 100; probe++) {
                try {
                    var probeCmd = "dx -r0 ((blink::UniqueElementData*)0x" + dataAddr + ")->attribute_vector_[" + probe + "]";
                    var probeOut = ctl.ExecuteCommand(probeCmd);
                    var valid = false;
                    for (var line of probeOut) {
                        var lineStr = line.toString();
                        if (lineStr.indexOf("out of bounds") !== -1 ||
                            lineStr.indexOf("Unable to") !== -1 ||
                            lineStr.indexOf("invalid") !== -1 ||
                            lineStr.indexOf("Error:") !== -1) {
                            break;
                        }
                        if (lineStr.indexOf("[Type:") !== -1) {
                            valid = true;
                        }
                    }
                    if (!valid) break;
                    count = probe + 1;
                } catch (e) { break; }
            }
            if (debug) Logger.info("  [Debug] UniqueElementData count via probe: " + count);
        } else {
            // ShareableElementData: use arraySize from bitfield
            var arraySize = (bitField >> 1) & ELEMENT_DATA_ARRAY_SIZE_MASK;
            if (arraySize >= 0 && arraySize <= 1000) {
                count = arraySize;
            }
            if (debug) Logger.info("  [Debug] ShareableElementData count from bitfield: " + count);
        }

        if (debug) Logger.info("  [Debug] Final count: " + count);

        for (var i = 0; i < count; i++) {
            try {
                var base = isUnique
                    ? "((blink::UniqueElementData*)0x" + dataAddr + ")->attribute_vector_[" + i + "]"
                    : "((blink::ShareableElementData*)0x" + dataAddr + ")->attribute_array_[" + i + "]";

                var nameStr = "";
                var nCmd = "dx -r2 " + base + ".name_.impl_->local_name_.string_";
                var nOut = ctl.ExecuteCommand(nCmd);
                nameStr = BlinkUnwrap._parseStringFromDxOutput(nOut);

                if (!nameStr) {
                    var fallbackCmd = "dx -r1 " + base + ".name_";
                    var fallbackOut = ctl.ExecuteCommand(fallbackCmd);
                    for (var line of fallbackOut) {
                        var m = line.toString().match(/:\s*\.\s+([^\s\[]+)/);
                        if (m) { nameStr = m[1]; break; }
                    }
                }

                if (nameStr) {
                    if (callback(nameStr, base) === true) return;
                }
            } catch (e) { Logger.debug("Attribute traversal error at index " + i + ": " + e.message); }
        }
    }

    /// Get all attributes of an element as an array of objects
    static getAttributes(elementAddr) {
        var attrs = [];

        BlinkUnwrap._traverseAttributes(elementAddr, (name, base) => {
            var valStr = BlinkUnwrap._extractAttributeValue(base);
            attrs.push({ name: name, value: valStr || "" });
        });
        return attrs;
    }

    /// Get specific attribute value
    static getAttribute(elementAddr, attrName) {
        var val = null;
        BlinkUnwrap._traverseAttributes(elementAddr, (name, base) => {
            if (name === attrName) {
                val = BlinkUnwrap._extractAttributeValue(base);
                return true; // Stop iteration
            }
        });
        return val;
    }

    /// Find StringImpl address for attribute modification
    static findAttributeStringImplAddress(elementAddr, attrName) {
        var result = null;
        var ctl = SymbolUtils.getControl();

        BlinkUnwrap._traverseAttributes(elementAddr, (name, base) => {
            if (name === attrName) {
                var ptrCmd = "dx -r0 " + base + ".value_.string_.impl_.ptr_";
                var out = ctl.ExecuteCommand(ptrCmd);
                for (var line of out) {
                    var m = line.toString().match(/:\s*(0x[0-9a-fA-F]+)/);
                    if (m) {
                        result = m[1];
                        return true;
                    }
                }
            }
        });
        return result;
    }

    /// Robustly read a WTF::String, AtomicString, KURL, or StringImpl from a pointer
    static readString(addr) {
        if (!isValidPointer(addr)) return null;
        var hexAddr = normalizeAddress(addr);
        var ctl = SymbolUtils.getControl();
        var bestCandidate = null; // Store empty results as fallback, prefer manual read if dx is empty

        // 1. Try as WTF::String object (contains impl_ pointer to StringImpl)
        try {
            var output = ctl.ExecuteCommand("dx ((WTF::String*)" + hexAddr + ")");
            var str = BlinkUnwrap._parseStringFromDxOutput(output);
            if (str !== null && str.length > 0) return str;
            if (str !== null) bestCandidate = str;
        } catch (e) { }

        // 2. Try as direct StringImpl* (the address is the StringImpl itself)
        try {
            var output = ctl.ExecuteCommand("dx ((WTF::StringImpl*)" + hexAddr + ")");
            var str = BlinkUnwrap._parseStringFromDxOutput(output);
            if (str !== null && str.length > 0) return str;
            if (str !== null) bestCandidate = str;
        } catch (e) { }

        // 3. Try as KURL (contains string_ member)
        try {
            var output = ctl.ExecuteCommand("dx ((blink::KURL*)" + hexAddr + ")->string_");
            var str = BlinkUnwrap._parseStringFromDxOutput(output);
            if (str !== null && str.length > 0) return str;
            if (str !== null) bestCandidate = str;
        } catch (e) { }

        // 4. For WTF::String, first read the impl_ pointer, then read the StringImpl
        try {
            // WTF::String has impl_ at offset 0 (usually a raw pointer to StringImpl)
            var implPtr = host.memory.readMemoryValues(host.parseInt64(hexAddr, 16), 1, 8)[0];
            var implAddrBig = MemoryUtils.parseBigInt(implPtr);
            if (implAddrBig !== 0n && isValidUserModePointer(implAddrBig)) {
                var implAddr = "0x" + implAddrBig.toString(16);
                // Try dx on the dereferenced StringImpl
                var output = ctl.ExecuteCommand("dx ((WTF::StringImpl*)" + implAddr + ")");
                var str = BlinkUnwrap._parseStringFromDxOutput(output);
                if (str !== null && str.length > 0) return str;
                if (str !== null) bestCandidate = str;
            }
        } catch (e) { }

        // 4.5. Manual memory read for WTF::String (read ptr at offset 0, then read StringImpl)
        try {
            var ptrVal = host.memory.readMemoryValues(host.parseInt64(hexAddr, 16), 1, 8)[0];
            var implAddrBig = MemoryUtils.parseBigInt(ptrVal);

            if (implAddrBig > 0x10000n && isValidUserModePointer(implAddrBig)) {
                // Now read the StringImpl at implAddrBig
                // Must use host.parseInt64 to get an object compatible with .add() and readMemoryValues
                var baseAddr = host.parseInt64(implAddrBig.toString(16), 16);
                var header = host.memory.readMemoryValues(baseAddr.add(4), 2, 4);
                var length = header[0];
                var flags = header[1];

                if (length > 0 && length < 5000000) {
                    var is8Bit = (flags & 1) === 1;
                    var dataAddr = baseAddr.add(STRINGIMPL_DATA_OFFSET);
                    if (is8Bit) {
                        return host.memory.readString(dataAddr, length);
                    } else {
                        return host.memory.readWideString(dataAddr, length);
                    }
                }
            }
        } catch (e) { }

        // 5. Manual memory read fallback for StringImpl (works without full symbols)
        try {
            // StringImpl layout: RefCount(4), Length(4), Hash/Flags(4), Data...
            // Read Length (offset 4) and Hash/Flags (offset 8)
            var addrClean = hexAddr.replace(/^0x/i, "");
            var baseAddr = host.parseInt64(addrClean, 16);
            var header = host.memory.readMemoryValues(baseAddr.add(4), 2, 4);
            var length = header[0];
            var flags = header[1];

            if (length > 0 && length < 20000) {
                // Bit 0 of flags often indicates is_8bit
                var is8Bit = (flags & 1) === 1;
                var dataAddr = baseAddr.add(STRINGIMPL_DATA_OFFSET);

                if (is8Bit) {
                    return host.memory.readString(dataAddr, length);
                } else {
                    return host.memory.readWideString(dataAddr, length);
                }
            }
        } catch (e) { }

        return bestCandidate;
    }

    /// Inspect a Blink Node using robust logic
    static inspectNode(nodeAddr) {
        var addr = normalizeAddress(nodeAddr);
        if (!addr) {
            Logger.error("Invalid node address");
            return;
        }
        Logger.section("Blink Object Inspection: " + addr);

        // Use robust name resolution
        var name = BlinkUnwrap.getNodeName(addr);
        Logger.info("Resolved Node Name: " + (name ? name : "(Unable to resolve)"));

        // Standard Object Dump
        Logger.info("[*] Object Dump (blink::Node*):");
        var ctl = SymbolUtils.getControl();
        try {
            var cmd = "dx -r1 ((blink::Node*)" + addr + ")";
            for (var line of ctl.ExecuteCommand(cmd)) Logger.info("    " + line);
        } catch (e) { Logger.error("Error dumping object: " + e.message); }
    }
}

/// Helper: Get frame by index from frame map
function _getFrameByIndex(idx) {
    var ctl = SymbolUtils.getControl();
    var lazyInstanceAddr = _findFrameMapAddress(ctl);
    if (!lazyInstanceAddr) return null;
    var mapAddr = _readFrameMapPointer(lazyInstanceAddr);
    if (!mapAddr) return null;
    var frames = _parseFrameMapEntries(ctl, mapAddr);
    if (idx < 0 || idx >= frames.length) return null;
    return frames[idx];
}

/// Set a C++ member value on any Blink object (or DOM attribute on Element)
/// @param objectAddr - Address of the object
/// @param memberName - Member name
/// @param value - New value
/// @param typeHint - Optional type hint for non-vtable types
function frame_setattr(objectAddr, memberName, value, typeHint) {
    if (isEmpty(objectAddr) || isEmpty(memberName)) {
        Logger.showUsage("Set Object Member", "!frame_setattr <addr> <member> <value>", [
            "!frame_setattr 0x1234 \"sandbox_flags_\" \"0x0\"  - LocalFrame member",
            "!frame_setattr 0x1234 \"id\" \"newId\"            - Element DOM attr",
            "!frame_setattr(0x1234, \"host_\", \"evil.com\", \"(blink::SecurityOrigin*)\") - With type hint"
        ]);
        Logger.info("Works with: LocalFrame, Document, LocalDOMWindow, Element, Node, etc.");
        Logger.empty();
        return "";
    }

    var objHex = tryDecompressAddress(objectAddr);
    var member = memberName.replace(/"/g, "");
    var newValue = value ? value.replace(/"/g, "") : "";
    var typeHintStr = typeHint || null;

    Logger.section("Set Member: " + member);
    Logger.info("Object: " + objHex);
    Logger.info("Target Value: \"" + newValue + "\"");
    Logger.empty();

    // 1. First try DOM attribute (only works for Elements)
    try {
        var implAddr = BlinkUnwrap.findAttributeStringImplAddress(objHex, member);
        if (implAddr && implAddr !== "0") {
            Logger.info("[DOM] Found StringImpl at: " + implAddr);
            Logger.warn("[CAUTION] Mutating DOM attribute. These are AtomicStrings and often interned.");
            Logger.warn("          Changing this value may affect other elements with the same attribute value!");
            MemoryUtils.writeStringImpl(implAddr, newValue);
            Logger.info("[DOM] Attribute value overwritten in memory.");
            Logger.info("Verify with !frame_getattr " + objHex + " \"" + member + "\"");
            Logger.empty();
            return "";
        }
    } catch (e) { /* Not an element */ }

    // 2. Try as C++ member with multi-type fallback (and optional type hint)
    Logger.info("Trying as C++ member...");

    var cppResult = BlinkUnwrap.getCppMemberWithFallback(objHex, member, typeHintStr);
    if (cppResult) {
        Logger.info("[C++] Current value: " + cppResult.value);
        Logger.info("[C++] Type: " + cppResult.type);
        Logger.info("[C++] Via:  " + cppResult.typeCast);

        var success = BlinkUnwrap.setCppMemberWithFallback(objHex, member, newValue, typeHintStr);
        if (success) {
            Logger.info("[C++] Member value written.");
            Logger.info("Verify with !frame_getattr " + objHex + " \"" + member + "\"");
        } else {
            Logger.error("[C++] Failed to write member value.");
            Logger.info("Manual: dx &(" + cppResult.typeCast + objHex + ")->" + member);
            Logger.info("Then use: ed <addr> <value>");
        }
        Logger.empty();
        return "";
    }

    Logger.error("'" + member + "' not found.");
    Logger.info("Use !frame_attrs to list available members.");
    Logger.empty();
    return "";
}

/// =============================================================================
/// PER-FRAME DEVTOOLS COMMANDS
/// =============================================================================

/// Get Document object for frame at index
function frame_document(idx) {
    if (idx === undefined || idx === null || idx === "") {
        Logger.showUsage("Frame Document", "!frame_doc <frame_index>", ["!frame_doc 0", "!frame_doc 1"]);
        Logger.info("Use !frames to list all frames with indices.");
        Logger.empty();
        return "";
    }

    var frameIdx = parseInt(idx);
    var frame = _getFrameByIndex(frameIdx);
    if (!frame) {
        Logger.error("Frame not found at index " + frameIdx + ". Use !frames to list frames.");
        return "";
    }

    Logger.section("Frame Document - Index " + frameIdx);

    var localFrame = BlinkUnwrap.getLocalFrame(frame.webFrame);
    if (!isValidPointer(localFrame)) {
        Logger.error("Could not get LocalFrame from WebLocalFrameImpl");
        return "";
    }
    Logger.info("LocalFrame:      0x" + localFrame);

    var domWindow = BlinkUnwrap.getDomWindow(localFrame);
    if (!isValidPointer(domWindow)) {
        Logger.error("Could not get LocalDOMWindow from LocalFrame");
        return "";
    }
    Logger.info("LocalDOMWindow:  0x" + domWindow);

    var document = BlinkUnwrap.getDocument(domWindow);
    if (!isValidPointer(document)) {
        Logger.error("Could not get Document from LocalDOMWindow");
        return "";
    }
    Logger.info("Document:        0x" + document);

    var url = BlinkUnwrap.getDocumentUrl(document);
    if (url) Logger.info("URL:             " + url);

    Logger.empty();
    Logger.info("Inspect with:");
    Logger.info("  dx ((blink::Document*)0x" + document + ")");
    Logger.info("  dx ((blink::Document*)0x" + document + ")->documentElement()");
    Logger.empty();
    return "0x" + document;
}

/// Get LocalDOMWindow object for frame at index
function frame_window(idx) {
    if (idx === undefined || idx === null || idx === "") {
        Logger.showUsage("Frame Window", "!frame_win <frame_index>", ["!frame_win 0", "!frame_win 1"]);
        Logger.info("Use !frames to list all frames with indices.");
        Logger.empty();
        return "";
    }

    var frameIdx = parseInt(idx);
    var frame = _getFrameByIndex(frameIdx);
    if (!frame) {
        Logger.error("Frame not found at index " + frameIdx + ". Use !frames to list frames.");
        return "";
    }

    Logger.section("Frame Window - Index " + frameIdx);

    var localFrame = BlinkUnwrap.getLocalFrame(frame.webFrame);
    if (!isValidPointer(localFrame)) {
        Logger.error("Could not get LocalFrame from WebLocalFrameImpl");
        return "";
    }
    Logger.info("LocalFrame:      0x" + localFrame);

    var domWindow = BlinkUnwrap.getDomWindow(localFrame);
    if (!isValidPointer(domWindow)) {
        Logger.error("Could not get LocalDOMWindow from LocalFrame");
        return "";
    }
    Logger.info("LocalDOMWindow:  0x" + domWindow);

    Logger.empty();
    Logger.info("Inspect with:");
    Logger.info("  dx ((blink::LocalDOMWindow*)0x" + domWindow + ")");
    Logger.info("  dx ((blink::LocalDOMWindow*)0x" + domWindow + ")->location()");
    Logger.empty();
    return "0x" + domWindow;
}

/// Get SecurityOrigin for frame at index
function frame_origin(idx) {
    if (idx === undefined || idx === null || idx === "") {
        Logger.showUsage("Frame Origin", "!frame_origin <frame_index>", ["!frame_origin 0", "!frame_origin 1"]);
        Logger.info("Use !frames to list all frames with indices.");
        Logger.empty();
        return "";
    }

    var frameIdx = parseInt(idx);
    var frame = _getFrameByIndex(frameIdx);
    if (!frame) {
        Logger.error("Frame not found at index " + frameIdx + ". Use !frames to list frames.");
        return "";
    }

    Logger.section("Frame Origin - Index " + frameIdx);

    var localFrame = BlinkUnwrap.getLocalFrame(frame.webFrame);
    if (!isValidPointer(localFrame)) {
        Logger.error("Could not get LocalFrame from WebLocalFrameImpl");
        return "";
    }

    var domWindow = BlinkUnwrap.getDomWindow(localFrame);
    if (!isValidPointer(domWindow)) {
        Logger.error("Could not get LocalDOMWindow from LocalFrame");
        return "";
    }

    var document = BlinkUnwrap.getDocument(domWindow);
    if (!isValidPointer(document)) {
        Logger.error("Could not get Document from LocalDOMWindow");
        return "";
    }

    var originUrl = BlinkUnwrap.getSecurityOriginUrl(document);
    var docUrl = BlinkUnwrap.getDocumentUrl(document);

    Logger.info("Document:        0x" + document);
    if (docUrl) Logger.info("Document URL:    " + docUrl);
    if (originUrl) Logger.info("Security Origin: " + originUrl);
    else Logger.info("Security Origin: (use dx to inspect)");

    Logger.empty();
    Logger.info("Inspect with:");
    Logger.info("  dx ((blink::Document*)0x" + document + ")->GetExecutionContext()->GetSecurityOrigin()");
    Logger.empty();
    return originUrl || "";
}

/// List elements by tag name in a frame
function frame_elements(idx, tagName) {
    if (idx === undefined || idx === null || idx === "") {
        Logger.showUsage("Frame Elements", "!frame_elem <frame_index> [tag_name]", ["!frame_elem 0", "!frame_elem 0 \"div\"", "!frame_elem 1 \"iframe\""]);
        Logger.info("Use !frames to list all frames with indices.");
        Logger.empty();
        return "";
    }

    var frameIdx = parseInt(idx);
    var frame = _getFrameByIndex(frameIdx);
    if (!frame) {
        Logger.error("Frame not found at index " + frameIdx + ". Use !frames to list frames.");
        return "";
    }

    var filterTag = tagName ? tagName.toLowerCase().replace(/"/g, "") : null;
    Logger.section("Frame Elements - Index " + frameIdx + (filterTag ? " (tag: " + filterTag + ")" : ""));

    var localFrame = BlinkUnwrap.getLocalFrame(frame.webFrame);
    if (!isValidPointer(localFrame)) {
        Logger.error("Could not get LocalFrame from WebLocalFrameImpl");
        return "";
    }

    var document = BlinkUnwrap.getDocumentFromFrame(localFrame);
    if (!isValidPointer(document)) {
        Logger.error("Could not get Document from LocalFrame");
        return "";
    }

    Logger.info("Document: 0x" + document);
    Logger.empty();

    try {
        if (filterTag) {
            Logger.info("Searching for <" + filterTag + "> elements (DOM Walk)...");
            Logger.empty();

            var startNode = BlinkUnwrap.getFirstChild(document);
            if (!startNode || startNode === "0") {
                Logger.info("  Document is empty (no children).");
                return "";
            }

            var stack = [startNode];
            var visited = 0;
            var found = 0;
            var maxNodes = MAX_DOM_TRAVERSAL_NODES;
            var visitedSet = new Set(); // Track visited nodes to prevent infinite loops

            while (stack.length > 0) {
                if (visited > maxNodes) {
                    Logger.warn("  Traversal limit reached (" + maxNodes + " nodes).");
                    break;
                }

                var node = stack.pop();

                // Skip if already visited (prevents infinite loops from corrupted DOM)
                var nodeKey = normalizeAddress(node);
                if (visitedSet.has(nodeKey)) {
                    continue;
                }
                visitedSet.add(nodeKey);
                visited++;

                // Process Node
                var nodeName = BlinkUnwrap.getNodeName(node);

                // Compare case-insensitive
                if (nodeName && nodeName.toLowerCase() === filterTag) {
                    // Extract ID/Class if possible for context? 
                    // For now just address and tag
                    Logger.info("  [" + found + "] 0x" + node + " <" + nodeName + ">");
                    found++;
                }

                // TRAVERSAL: Push Sibling then Child (DFS order: Process child first)
                var sibling = BlinkUnwrap.getNextSibling(node);
                var siblingKey = sibling ? normalizeAddress(sibling) : null;
                if (sibling && sibling !== "0" && siblingKey && !visitedSet.has(siblingKey)) {
                    stack.push(sibling);
                }

                // Only traverse children for ContainerNodes (skip text/comments/doctype)
                // If nodeName is null (unknown), we assume it might have children and try anyway
                if (!nodeName || (nodeName !== "#text" && nodeName !== "#comment" && nodeName !== "#doctype")) {
                    var child = BlinkUnwrap.getFirstChild(node);
                    var childKey = child ? normalizeAddress(child) : null;
                    if (child && child !== "0" && childKey && !visitedSet.has(childKey)) {
                        stack.push(child);
                    }
                }
            }

            if (found === 0) Logger.info("  No <" + filterTag + "> elements found.");
            else Logger.info("  Found " + found + " element(s).");

        } else {
            Logger.info("Document structure:");
            Logger.info("  dx ((blink::Document*)0x" + document + ")->documentElement()");
            Logger.info("  dx ((blink::Document*)0x" + document + ")->body()");
            Logger.info("  dx ((blink::Document*)0x" + document + ")->head()");
            Logger.empty();
            Logger.info("Query elements by tag:");
            Logger.info("  !frame_elem " + frameIdx + " \"div\"");
            Logger.info("  !frame_elem " + frameIdx + " \"iframe\"");
            Logger.info("  !frame_elem " + frameIdx + " \"script\"");
        }
    } catch (e) {
        Logger.error("Error querying elements: " + e.message);
    }

    Logger.empty();
    return "";
}

/// Get a C++ member value from any Blink object (or DOM attribute from Element)
/// @param objectAddr - Address of the object
/// @param memberName - Member name
/// @param typeHint - Optional type hint for non-vtable types (e.g., "(blink::SecurityOrigin*)")
function frame_getattr(objectAddr, memberName, typeHint) {
    if (isEmpty(objectAddr) || isEmpty(memberName)) {
        Logger.showUsage("Get Object Member", "!frame_getattr <addr> <member>", [
            "!frame_getattr 0x1234 \"sandbox_flags_\"  - LocalFrame member",
            "!frame_getattr 0x1234 \"lifecycle_state_\" - Document member",
            "!frame_getattr 0x1234 \"id\"              - Element DOM attr",
            "!frame_getattr(0x1234, \"host_\", \"(blink::SecurityOrigin*)\") - With type hint"
        ]);
        Logger.info("Works with: LocalFrame, Document, LocalDOMWindow, Element, Node, etc.");
        Logger.empty();
        return "";
    }

    var objHex = tryDecompressAddress(objectAddr);
    var member = memberName.replace(/"/g, "");
    var typeHintStr = typeHint || null;

    Logger.section("Get Member: " + member);
    Logger.info("Object: " + objHex);
    Logger.empty();

    // 1. First try DOM attribute (only works for Elements)
    try {
        var val = BlinkUnwrap.getAttribute(objHex, member);
        if (val !== null) {
            Logger.info("[DOM] " + member + "=\"" + val + "\"");
            return val;
        }
    } catch (e) { /* Not an element */ }

    var cppResult = BlinkUnwrap.getCppMemberWithFallback(objHex, member, typeHintStr);
    if (cppResult) {
        Logger.info("[C++] " + member + " = " + cppResult.value);
        Logger.info("       Type: " + cppResult.type);
        Logger.info("       Via:  " + cppResult.typeCast);

        // Enhanced inspection for the retrieved value if it's a pointer
        var valMatch = cppResult.value.match(/^(0x[0-9a-fA-F]+)/);
        if (valMatch) {
            var valHex = valMatch[1];
            var inspection = BlinkUnwrap.inspect(valHex, { typeHint: extractPointeeType(cppResult.type) });
            if (inspection.stringValue) {
                Logger.info("       Value: \"" + inspection.stringValue + "\"");
            } else if (inspection.type) {
                Logger.info("       Target Type: " + inspection.type);
            }
        }

        Logger.empty();
        return cppResult.value;
    }

    Logger.info("Member not found.");
    Logger.info("Use !frame_attrs to list available members.");
    Logger.empty();
    return "";
}

/// List all attributes of an object (DOM attributes and C++ members)
/// Works with Element, LocalFrame, Document, LocalDOMWindow, etc.
/// @param objectAddr - Address of the object
/// @param debug - Enable debug output
/// @param typeHint - Optional type hint (e.g., "(blink::SecurityOrigin*)") for non-vtable types
function frame_attrs(objectAddr, debug, typeHint) {
    if (isEmpty(objectAddr)) {
        Logger.showUsage("Object Attributes & Members", "!frame_attrs <addr>", [
            "!frame_attrs 0x12345678              - Any Blink object",
            "!frame_attrs(0x12345678, true)       - Enable debug output"
        ]);
        Logger.info("Works with: LocalFrame, Document, LocalDOMWindow, Element, Node, etc.");
        return "";
    }

    var enableDebug = debug === true || debug === "true";
    var typeHintStr = typeHint || null;

    // Auto-decompress compressed pointers before any memory operations
    var originalAddr = normalizeAddress(objectAddr);
    var objHex = tryDecompressAddress(objectAddr);

    // Report if decompression occurred
    if (objHex !== originalAddr) {
        Logger.section("Object Attributes & Members: " + objHex);
        Logger.info("[Decompressed] " + originalAddr + " -> " + objHex);
        Logger.empty();
    } else {
        Logger.section("Object Attributes & Members: " + objHex);
    }

    // Check if address is still invalid after decompression attempt
    var addrBig = 0n;
    try { addrBig = MemoryUtils.parseBigInt(objHex); } catch (e) { }

    if (!isValidUserModePointer(addrBig) && addrBig !== 0n) {
        Logger.error("Address " + objHex + " appears to be a compressed pointer that could not be decompressed.");
        Logger.info("This may happen if the CppGC cage base is not yet available.");
        Logger.info("Try: !v8_cage to check cage bases, or provide a full 64-bit address.");
        Logger.empty();
        return "";
    }

    // 1. Try DOM attributes (only works for Elements)
    var attrs = [];
    try {
        BlinkUnwrap._traverseAttributes(objHex, (name, base) => {
            var valStr = BlinkUnwrap._extractAttributeValue(base);
            attrs.push({ name: name, value: valStr || "" });
        }, enableDebug);
    } catch (e) { /* Not an element, skip DOM attrs */ }

    if (attrs.length > 0) {
        Logger.info("[DOM Attributes]");
        for (var a of attrs) {
            Logger.info("  " + a.name + "=\"" + a.value + "\"");
        }
        Logger.empty();
    }

    // 2. Direct String/URL Preview

    // 3. List C++ members with multi-type fallback
    Logger.info("[C++ Members]");

    // Update ProcessCache if hint provided
    if (typeHintStr) {
        try {
            var vtablePtr = host.memory.readMemoryValues(host.parseInt64(objHex, 16), 1, 8)[0];
            if (vtablePtr.compareTo(0) !== 0) {
                ProcessCache.setVTableType(vtablePtr.toString(16), typeHintStr);
            }
        } catch (e) { }
    }

    var result = BlinkUnwrap.getCppMembersWithFallback(objHex, enableDebug, typeHintStr);

    // 4. Enhanced Inspection (String Preview & Pointer Analysis)
    var activeType = result.typeCast || typeHintStr;
    var inspection = BlinkUnwrap.inspect(objHex, { debug: enableDebug, typeHint: activeType });

    if (inspection.stringValue !== null) {
        Logger.info("[String Content]  \"" + inspection.stringValue + "\"");
        Logger.empty();
    }

    // Helper for displaying members consistently
    var displayMembers = (members, typeCast) => {
        if (!members || members.length === 0) return;
        Logger.info("  Detected type: " + typeCast);
        Logger.empty();

        for (var m of members) {
            var displayVal = m.value;

            // Leverage SymbolUtils.getReturnType for function pointers
            if (m.type.indexOf("(*)") !== -1 || m.type.indexOf("__cdecl") !== -1) {
                var retType = SymbolUtils.getReturnType(m.value);
                if (retType) displayVal += " [Returns: " + retType + "]";
            }

            // If value is {...} or a complex object, try to get its address and pointee type
            if (displayVal === "{...}" || displayVal.indexOf("{...}") !== -1) {
                var memberAddr = BlinkUnwrap.getMemberPointer(objHex, typeCast, m.name);
                if (memberAddr) {
                    var memberTypeHint = extractPointeeType(m.type);
                    if (memberTypeHint) {
                        try {
                            var ptrVal = host.memory.readMemoryValues(host.parseInt64(memberAddr, 16), 1, 8)[0];
                            var ptrValBig = MemoryUtils.parseBigInt(ptrVal);
                            if (ptrValBig !== 0n && isValidUserModePointer(ptrValBig)) {
                                var targetAddr = "0x" + ptrValBig.toString(16);
                                Logger.info("  " + m.name + " -> " + targetAddr + "  !frame_attrs(" + targetAddr + ", false, \"" + memberTypeHint + "\")");
                            } else if (ptrValBig === 0n) {
                                Logger.info("  " + m.name + " = null  !frame_getattr(" + objHex + ", \"" + m.name + "\", \"" + typeCast + "\")");
                            } else {
                                // Try to decompress using parent object as context for cage base
                                var decompressed = MemoryUtils.decompressCppgcPtr(ptrValBig, objHex);
                                if (decompressed && decompressed !== "0") {
                                    var decompAddr = "0x" + decompressed;
                                    Logger.info("  " + m.name + " -> " + decompAddr + "  !frame_attrs(" + decompAddr + ", false, \"" + memberTypeHint + "\")");
                                } else {
                                    // Fallback: show original value with warning
                                    Logger.info("  " + m.name + " -> 0x" + ptrValBig.toString(16) + " (compressed?)  !frame_getattr(" + objHex + ", \"" + m.name + "\", \"" + typeCast + "\")");
                                }
                            }
                        } catch (e) {
                            Logger.info("  " + m.name + " -> " + memberAddr + "  !frame_attrs(" + memberAddr + ", false, \"" + memberTypeHint + "\")");
                        }
                    } else {
                        var structType = "(" + m.type + "*)";
                        Logger.info("  " + m.name + " -> " + memberAddr + "  !frame_attrs(" + memberAddr + ", false, \"" + structType + "\")");
                    }
                    continue;
                }
            }

            if (displayVal.length > 50) {
                displayVal = displayVal.substring(0, 47) + "...";
            }
            Logger.info("  " + m.name + " = " + displayVal + "  !frame_getattr(" + objHex + ", \"" + m.name + "\", \"" + typeCast + "\")");
        }
    };

    if (result.members.length === 0) {
        if (inspection.isPointer && inspection.pointerTarget && addrBig > 0) {
            // Check for recursion/loops
            if (normalizeAddress(inspection.pointerTarget) === objHex) {
                Logger.warn("  [Recursion] Pointer target is same as current object.");
                return "";
            }
            Logger.info("  [" + inspection.pointerType + " -> " + inspection.pointerTarget + "]");
            Logger.empty();
            return frame_attrs(inspection.pointerTarget, debug, typeHintStr);
        }

        if (addrBig === 0n) {
            Logger.info("  [NULL pointer]");
        } else {
            if (activeType) {
                var members = BlinkUnwrap.getCppMembers(objHex, activeType);
                if (members.length > 0) {
                    displayMembers(members, activeType);
                } else {
                    Logger.info("  (Type hint " + activeType + " did not yield members)");
                }
            } else {
                Logger.info("  (Type unknown - no vtable, no type hint)");
                Logger.info("  Provide type: !frame_attrs(" + objHex + ", false, \"(blink::TypeName*)\")");
            }
        }
    } else {
        displayMembers(result.members, result.typeCast);
    }

    Logger.empty();
    return "";
}


class ProcessUtils {
    static getCurrentSysId() {
        var pidToSysId = this.getPidToSysIdMap();
        try {
            var currentPid = parseInt(host.currentProcess.Id.toString());
            return pidToSysId.has(currentPid) ? pidToSysId.get(currentPid) : 0;
        } catch (e) { return 0; }
    }

    static parseInfoWithFallback(cmdLine) {
        if (!cmdLine || cmdLine === "") {
            return { type: "renderer", extra: "(sandboxed/locked)" };
        }
        return this.parseInfo(cmdLine);
    }

    static getPidToSysIdMap() {
        var map = new Map();
        try {
            var lines = SymbolUtils.execute("|");
            for (var line of lines) {
                var match = line.toString().match(/(\d+)\s+id:\s*([0-9a-fA-F]+)/);
                if (match) map.set(parseInt(match[2], 16), parseInt(match[1]));
            }
        } catch (e) { }
        return map;
    }

    static getList(filterType) {
        var processes = host.currentSession.Processes;
        var pidToSysId = this.getPidToSysIdMap();
        var results = [];

        // Remember original process to restore after iteration
        var originalId = this.getCurrentSysId();

        for (var proc of processes) {
            try {
                var pid = parseInt(proc.Id.toString());
                var sysId = pidToSysId.has(pid) ? pidToSysId.get(pid) : "?";
                var info = this.getInfoSafe(proc, sysId);

                if (filterType && info.type !== filterType) continue;

                var procObj = {
                    pid: pid,
                    sysId: sysId,
                    type: info.type,
                    extra: info.extra,
                    cmdLine: info.cmdLine,
                    clientId: null
                };

                if (info.type === "renderer" && info.extra) {
                    var clientMatch = info.extra.match(/client=(\d+)/);
                    if (clientMatch) procObj.clientId = clientMatch[1];
                }
                results.push(procObj);
            } catch (e) { }
        }

        // Restore original process context
        try {
            if (originalId !== null && originalId !== 0) {
                SymbolUtils.execute("|" + originalId + "s");
            }
        } catch (e) { }

        return results;
    }

    static getInfoSafe(proc, sysId, skipContextSwitch) {
        var cmdLine = "";
        var readSuccess = false;
        try {
            // Only switch context if not skipped (caller may have already switched)
            if (!skipContextSwitch && sysId !== undefined && sysId !== null && sysId !== "?") {
                try { SymbolUtils.execute("|" + sysId + "s"); } catch (e) { }
            }
            cmdLine = CommandLineUtils.get();
            readSuccess = (cmdLine !== "");
        } catch (e) { }

        if (readSuccess) {
            var info = this.parseInfo(cmdLine);
            return { type: info.type, extra: info.extra, cmdLine: cmdLine, locked: false };
        } else {
            return { type: "renderer", extra: "(sandboxed/locked)", cmdLine: "", locked: true };
        }
    }

    static parseInfo(cmdLine) {
        if (isEmpty(cmdLine)) return { type: "unknown", extra: "" };
        var typeMatch = cmdLine.match(/--type=([^\s"]+)/);
        var extra = "";
        if (typeMatch) {
            var type = typeMatch[1];
            if (type === "renderer") {
                var clientMatch = cmdLine.match(/--renderer-client-id=(\d+)/);
                if (clientMatch) extra = "client=" + clientMatch[1];
            } else if (type === "utility") {
                var utilMatch = cmdLine.match(/--utility-sub-type=([^\s"]+)/);
                if (utilMatch) extra = utilMatch[1].split('.').pop();
            }
            return { type: type, extra: extra };
        }
        if (cmdLine.toLowerCase().indexOf("chrome.exe") !== -1) {
            if (cmdLine.indexOf("--monitor-self") !== -1 || cmdLine.indexOf("crashpad") !== -1) return { type: "crashpad-handler", extra: "" };
            if (cmdLine.indexOf("--enable-features") !== -1 && cmdLine.indexOf("--field-trial-handle") !== -1) return { type: "browser", extra: "" };
            if (cmdLine.length < BROWSER_CMDLINE_MIN_LENGTH || cmdLine.indexOf("--user-data-dir") !== -1) return { type: "browser", extra: "" };
        }
        return { type: "unknown", extra: "" };
    }

    static forEachProcess(filterType, callback) {
        var processes = this.getList(filterType);
        if (processes.length === 0) return 0;

        // Remember original process to restore after iteration
        var originalId = this.getCurrentSysId();
        var count = 0;
        for (var proc of processes) {
            if (proc.sysId === "?" || proc.sysId === null) continue;
            try {
                SymbolUtils.execute("|" + proc.sysId + "s");
                var result = callback(proc);
                count++;
                if (result === false) break;
            } catch (e) { Logger.error("Error in process " + proc.pid + ": " + e.message); }
        }
        // Restore original process context
        try {
            if (originalId !== null && originalId !== 0) {
                SymbolUtils.execute("|" + originalId + "s");
            } else {
                SymbolUtils.execute("|0s");
            }
        } catch (e) { }
        return count;
    }

    /// Execute callback in a specific process context, then restore original context
    static withContext(sysId, callback) {
        var originalId = this.getCurrentSysId();
        try {
            SymbolUtils.execute("|" + sysId + "s");
            return callback();
        } finally {
            try { SymbolUtils.execute("|" + originalId + "s"); } catch (e) { }
        }
    }

    static runInType(targetType, command) {
        // Check current process first
        var currentType = this.parseInfo(CommandLineUtils.get()).type || "renderer"; // heuristic
        if (currentType === targetType) {
            Logger.info("  [" + targetType.toUpperCase() + " PID:" + host.currentProcess.Id + "] Executing: " + command);
            try {
                var output = SymbolUtils.execute(command);
                for (var l of output) Logger.log("  " + l + "\n");
            } catch (e) { Logger.error(e.message); }
            return "executed";
        }

        Logger.section("Running in All " + targetType.toUpperCase() + " Processes");

        var matchCount = this.forEachProcess(targetType, function (info) {
            Logger.info("  [" + targetType.toUpperCase() + " PID:" + info.pid + "] Executing: " + command);
            var output = SymbolUtils.execute(command);
            for (var l of output) Logger.log("    " + l + "\n");
        });

        if (matchCount === 0) {
            Logger.info("  No " + targetType + " processes found.");
            Logger.empty();
            return "no_match";
        }

        Logger.info("  Executed in " + matchCount + " processes");
        Logger.empty();
        return "executed_in_" + matchCount;
    }
}


/// =============================================================================
/// EXECUTION ENGINE (!exec)
/// =============================================================================

class Exec {
    static _forcedContext = null;

    /// Convert value to array of 8 bytes (64-bit Little Endian)
    static _to64BitLE(val) {
        var big = BigInt(val);
        if (big < 0n) big = big + 0x10000000000000000n; // Handle negative
        var bytes = [];
        for (var i = 0; i < 8; i++) {
            bytes.push(Number(big & 0xFFn));
            big >>= 8n;
        }
        return bytes;
    }

    /// Helper: Normalize a type string to pointer hint format for chaining
    /// e.g., "blink::KURL" -> "(blink::KURL*)", "String" -> "String" (already simple)
    static _normalizeTypeHint(type) {
        if (!type) return null;
        // Already a hint format or simple type
        if (type.startsWith("(") || type === "String" || type === "bool" || type === "int") {
            return type;
        }
        // Class/struct types need pointer format for chaining
        if (!type.endsWith("*") && (type.includes("::") || /^[A-Z]/.test(type))) {
            return "(" + type + "*)";
        }
        return type;
    }

    /// Helper: Detect return type from member offset using dt command
    /// For inlined getters like "ADD rcx, 0x138", finds the member at that offset
    /// @param targetSymbol - Full symbol name (e.g., "chrome!blink::Document::Url")
    /// @param offset - Member offset in bytes
    /// @returns Normalized type hint or null
    static _detectTypeFromOffset(targetSymbol, offset) {
        if (offset <= 0) return null;

        var cleanSym = targetSymbol.includes("!") ? targetSymbol.split("!")[1] : targetSymbol;
        var lastCC = cleanSym.lastIndexOf("::");
        if (lastCC === -1) return null;

        var className = cleanSym.substring(0, lastCC);
        var offsetHex = offset.toString(16).toLowerCase();

        // 1. Find member name at this offset
        var memberName = this._getMemberAtOffset(className, offset);

        if (memberName) {
            // 2. Get full semantic type info using unified helper
            var typeInfo = this._getMemberTypeInfo(className, memberName);

            if (typeInfo) {
                Logger.info("    [Type Detection] dt offset 0x" + offsetHex.toUpperCase() + " -> " + memberName + " : " + typeInfo.typeName);

                // 3. Cache the result! 
                // This ensures future accesses (inline or direct) use the correct complex object logic
                ProcessCache.setOffset(className + "->" + memberName, {
                    offset: typeInfo.offset,
                    path: memberName,
                    isComplexObject: typeInfo.isComplexObject,
                    typeName: typeInfo.typeName
                });

                return this._normalizeTypeHint(typeInfo.typeName);
            }
        }

        return null;
    }

    static exec(cmdString) {
        Logger.section("Exec Command");
        if (isEmpty(cmdString)) {
            Logger.showUsage("!exec", '!exec "Target(Args)"', [
                '!exec "chrome!blink::Document::IsSecureContext(0x12345678)"',
                '!exec "0x12345678->MyMethod(10, true)"',
                '!exec "chrome!Func()->Method()"  // Chained calls'
            ]);
            return;
        }

        // Clear stale forced context from previous commands to prevent side effects
        this._forcedContext = null;
        this.currentThis = null;

        // Check for chained calls: Func()->Method() or Func()->Method()->Method2()
        var chain = this._parseChain(cmdString.trim());
        if (chain.length > 1) {
            return this._execChain(chain);
        }

        // Single call (original logic)
        return this._execSingle(cmdString.trim(), null);
    }

    /// Parse chained expression like "Func()->Method()->prop" into array of call descriptors
    static _parseChain(cmdString) {
        var calls = [];
        var currentCall = "";
        var depth = 0;
        var inQuote = false;

        for (var i = 0; i < cmdString.length; i++) {
            var c = cmdString[i];

            if (c === '"' && (i === 0 || cmdString[i - 1] !== '\\')) {
                inQuote = !inQuote;
            }

            if (!inQuote) {
                // Check for "->" separator at depth 0
                if (depth === 0) {
                    var isArrow = (c === '-' && i + 1 < cmdString.length && cmdString[i + 1] === '>');
                    var isDot = (c === '.');

                    if (isArrow || isDot) {
                        if (currentCall.trim().length > 0) {
                            calls.push(currentCall.trim());
                        }
                        currentCall = "";
                        if (isArrow) i++; // Skip '>'
                        continue;
                    }
                }

                if (c === '(') depth++;
                else if (c === ')') depth--;
            }

            currentCall += c;
        }

        // Add final segment
        if (currentCall.trim().length > 0) {
            calls.push(currentCall.trim());
        }

        if (depth !== 0) {
            Logger.error("Unbalanced parentheses in expression.");
            return [cmdString]; // Fallback
        }

        return calls;
    }

    /// Execute a chain of calls, passing each result as 'this' for the next
    static _execChain(calls) {
        var currentThis = null;
        var result = null;
        var prevHint = null; // Store hint from previous call for next calling context

        for (var i = 0; i < calls.length; i++) {
            var call = calls[i];
            Logger.info("  [Chain " + (i + 1) + "/" + calls.length + "] " + call);

            try {
                result = this._execSingle(call, currentThis, prevHint);
                prevHint = this.currentReturnTypeHint;
            } catch (e) {
                Logger.error("  [Trace] _execSingle threw: " + e.message);
                return null;
            }

            // check for null result or zero - but only for INTERMEDIATE calls
            // The final call can return 0x0 as a valid boolean (false)
            var isLastCall = (i === calls.length - 1);
            var isNullOrZero = (result === null || result === undefined ||
                result === "0x0" || result === "0" || result === 0n);
            if (isNullOrZero && !isLastCall) {
                Logger.error("  Chain terminated: intermediate call returned null/0.");
                return null;
            }

            // Use result as 'this' for next call
            currentThis = result;

            // Only pin context if it looks like a pointer (starts with 0x)
            // This prevents string results (e.g. "https://...") from being pinned
            if (currentThis && typeof currentThis === 'string' && currentThis.startsWith("0x")) {
                this._forcedContext = currentThis;
                this.currentThis = currentThis;
            } else {
                // If intermediate result is not a pointer (e.g. string), we can't chain off it
                // But we still persist currentThis for the loop (though next call will likely fail)
                this._forcedContext = null;
            }
        }
        // Return final result for chaining (already a hex string, safe to return)
        return result;
    }



    /// Helper: Auto-resolve 'this' pointer for common Blink classes (REPL style)
    /// @param className - Fully qualified class name (e.g., "blink::Document")
    /// @param frameIndex - Optional frame index (default: 0)
    static _resolveAutoThis(className, frameIndex = 0) {
        // If we have a forced context pinned, try to use it
        if (this._forcedContext) {
            Logger.info("    [Auto-This] Attempting resolution from pinned context: " + this._forcedContext);
            var detected = BlinkUnwrap.detectType(this._forcedContext);
            if (detected) {
                var detectedName = detected.replace(/[()*]/g, "").trim();
                // Exact match
                if (detectedName === className) {
                    Logger.info("    [Auto-This] Pinned context matches " + className + ": " + this._forcedContext);
                    return this._forcedContext;
                }
                // Check if pinned context could be cast to requested class (base class match)
                // e.g., if pinned is Document and we want Node, Document IS-A Node
                if (this._isSubclassOf(detectedName, className)) {
                    Logger.info("    [Auto-This] Pinned context " + detectedName + " is subclass of " + className);
                    return this._forcedContext;
                }
            }
        }

        // Expanded lookup table: className -> resolver function (takes localFrame, returns instance)
        // Each resolver returns an address string (hex) or null
        var resolvers = {
            // Core frame hierarchy
            "blink::LocalFrame": function (lf) { return lf; },
            "blink::Frame": function (lf) { return lf; }, // LocalFrame IS-A Frame
            "blink::LocalDOMWindow": function (lf) { return BlinkUnwrap.getDomWindow(lf); },
            "blink::DOMWindow": function (lf) { return BlinkUnwrap.getDomWindow(lf); }, // LocalDOMWindow IS-A DOMWindow
            "blink::ExecutionContext": function (lf) { return BlinkUnwrap.getDomWindow(lf); },

            // Document and related
            "blink::Document": function (lf) {
                var win = BlinkUnwrap.getDomWindow(lf);
                return win ? BlinkUnwrap.getDocument(win) : null;
            },
            "blink::ContainerNode": function (lf) {
                var win = BlinkUnwrap.getDomWindow(lf);
                return win ? BlinkUnwrap.getDocument(win) : null; // Document IS-A ContainerNode
            },
            "blink::Node": function (lf) {
                var win = BlinkUnwrap.getDomWindow(lf);
                return win ? BlinkUnwrap.getDocument(win) : null; // Document IS-A Node
            },
            "blink::TreeScope": function (lf) {
                var win = BlinkUnwrap.getDomWindow(lf);
                return win ? BlinkUnwrap.getDocument(win) : null; // Document IS-A TreeScope
            },

            // Security-related (from Document)
            "blink::SecurityOrigin": function (lf) {
                var win = BlinkUnwrap.getDomWindow(lf);
                if (!win) return null;
                var doc = BlinkUnwrap.getDocument(win);
                if (!doc) return null;
                // Try to get SecurityOrigin via ExecutionContext
                try {
                    var ctl = SymbolUtils.getControl();
                    var cmd = "dx ((blink::Document*)0x" + doc + ")->GetExecutionContext()->GetSecurityOrigin()";
                    var output = ctl.ExecuteCommand(cmd);
                    for (var line of output) {
                        var m = line.toString().match(/0x([0-9a-fA-F`]+)/);
                        if (m) return m[1].replace(/`/g, "");
                    }
                } catch (e) { }
                return null;
            },

            // URL (from Document)  
            "blink::KURL": function (lf) {
                var win = BlinkUnwrap.getDomWindow(lf);
                if (!win) return null;
                var doc = BlinkUnwrap.getDocument(win);
                if (!doc) return null;
                // Use offset 0x138 for url_ (cached from previous runs)
                var docBig = MemoryUtils.parseBigInt(doc);
                var urlAddr = docBig + BigInt(0x138);
                return "0x" + urlAddr.toString(16); // Must have 0x prefix for thisPtr processing
            }
        };

        // Try exact match first
        var resolver = resolvers[className];

        // Base class fallback: try known parent classes
        if (!resolver) {
            var classHierarchy = {
                // Map subclasses to their resolvable parent
                "blink::HTMLDocument": "blink::Document",
                "blink::XMLDocument": "blink::Document",
                "blink::HTMLBodyElement": "blink::Document",  // Can't get element directly, fall back to document
                "blink::HTMLElement": "blink::Document",
                "blink::Element": "blink::Document",
                "blink::CharacterData": "blink::Document",
                "blink::Text": "blink::Document",
                "blink::DocumentLoader": "blink::LocalFrame",
                "blink::FrameLoader": "blink::LocalFrame",
                "blink::ScriptState": "blink::LocalDOMWindow",
                "blink::LocalWindowProxy": "blink::LocalDOMWindow"
            };

            var fallbackClass = classHierarchy[className];
            if (fallbackClass && resolvers[fallbackClass]) {
                Logger.info("    [Auto-This] Using " + fallbackClass + " as fallback for " + className);
                resolver = resolvers[fallbackClass];
            }
        }

        if (!resolver) {
            Logger.debug("    [Auto-This] No resolver for class: " + className);
            return null;
        }

        // Get LocalFrame for requested frame index
        var frame = _getFrameByIndex(frameIndex);
        if (!frame) {
            Logger.debug("    [Auto-This] No frame at index " + frameIndex);
            return null;
        }

        var localFrame = BlinkUnwrap.getLocalFrame(frame.webFrame);
        if (!localFrame) {
            Logger.debug("    [Auto-This] Could not get LocalFrame from WebLocalFrameImpl");
            return null;
        }

        var result = resolver(localFrame);
        if (result) {
            // Normalize result to have 0x prefix for logging (some resolvers return with, some without)
            var logResult = result.toString().startsWith("0x") ? result : "0x" + result;
            Logger.info("    [Auto-This] Using " + className + " from Frame " + frameIndex + ": " + logResult);
        }
        return result;
    }

    /// Helper: Check if subClass inherits from parentClass (simplified Blink hierarchy)
    static _isSubclassOf(subClass, parentClass) {
        // Simplified inheritance map for common Blink classes
        var inheritance = {
            "blink::Document": ["blink::ContainerNode", "blink::Node", "blink::TreeScope", "blink::ExecutionContext"],
            "blink::HTMLDocument": ["blink::Document", "blink::ContainerNode", "blink::Node"],
            "blink::LocalDOMWindow": ["blink::DOMWindow", "blink::ExecutionContext", "blink::EventTarget"],
            "blink::LocalFrame": ["blink::Frame"],
            "blink::HTMLElement": ["blink::Element", "blink::ContainerNode", "blink::Node"],
            "blink::Element": ["blink::ContainerNode", "blink::Node"]
        };

        var parents = inheritance[subClass];
        return parents && parents.indexOf(parentClass) !== -1;
    }

    /// Execute a single call expression, optionally with a 'this' pointer override
    static _execSingle(entry, thisOverride, previousHint) {
        var parenStart = entry.indexOf('(');
        var parenEnd = entry.lastIndexOf(')');

        var namePart, argsPart;

        if (parenStart === -1) {
            // Supports property access or 0-arg call without parens: "blink::Node::parentNode"
            namePart = entry.trim();
            argsPart = "";
        } else {
            if (parenEnd === -1 || parenEnd < parenStart) {
                Logger.error("Invalid format. Expected: Name(Args)");
                return null;
            }
            namePart = entry.substring(0, parenStart).trim();
            argsPart = entry.substring(parenStart + 1, parenEnd);
        }

        // Support raw hex address as a segment: !exec "0x1234->Func()"
        var trimEntry = entry.trim();
        if (trimEntry.startsWith("0x") && trimEntry.indexOf("->") === -1 && trimEntry.indexOf("(") === -1) {
            // Regex to verify it's just a hex address (allowing backticks)
            if (/^0x[0-9a-fA-F`]+$/.test(trimEntry)) {
                var addr = trimEntry.replace(/`/g, "");
                Logger.info("    [Segment] Detected raw address. Pining context: " + addr);
                this._forcedContext = addr;
                return addr;
            }
        }

        var targetSymbol = namePart;
        var thisPtr = thisOverride;

        // Handle 0xAddr->Method(...) syntax (only if no override)
        if (!thisOverride && namePart.indexOf("->") !== -1) {
            var parts = namePart.split("->");
            if (parts.length === 2) {
                var ptrPart = parts[0].trim();
                var methodPart = parts[1].trim();

                if (methodPart.indexOf("!") === -1) {
                    // Try to auto-detect type
                    var detectedType = BlinkUnwrap.detectType(ptrPart);
                    if (detectedType) {
                        // detectedType format: (chrome!Class*)
                        var className = detectedType.replace(/[()*]/g, "").trim();
                        targetSymbol = className + "::" + methodPart;
                        Logger.info("    [Auto-Detect] Resolved method: " + targetSymbol);
                    } else {
                        Logger.error("Cannot resolve method '" + methodPart + "' without type information/symbol.");
                        Logger.info("    Provide fully qualified name, e.g., !exec \"0x...->chrome!Class::Method(...)\"");
                        return null;
                    }
                } else {
                    targetSymbol = methodPart;
                }
                thisPtr = ptrPart;
                this._forcedContext = thisPtr; // Pin context from explicit pointer
            }
        }

        // AUTO-THIS RESOLUTION (Repl Style)
        // If no 'this' provided, but symbol looks like Method or Class::Method
        if (!thisPtr) {
            var className = null;
            var methodName = null;

            // parsing "blink::Document::Url" -> class="blink::Document"
            if (targetSymbol.includes("::")) {
                var lastCC = targetSymbol.lastIndexOf("::");
                className = targetSymbol.substring(0, lastCC);
                methodName = targetSymbol.substring(lastCC + 2);
            }

            if (className) {
                // Strip module prefix (e.g., "chrome!blink::Document" -> "blink::Document")
                if (className.includes("!")) {
                    className = className.split("!")[1];
                }
                // Try to resolve a default instance for this class
                var autoThis = this._resolveAutoThis(className);
                if (autoThis) {
                    thisPtr = autoThis;
                }
            }
            // Note: If className is null, we can't resolve auto-this
        }

        // Set the global currentThis for context (decompression etc)
        this.currentThis = thisPtr;

        // If we have a thisOverride for chained calls, we need to resolve the method symbol
        // The namePart is just "Method" or "chrome!Class::Method" - prepend type if needed
        if (thisOverride && namePart.indexOf("!") === -1 && namePart.indexOf("::") === -1) {
            // Try to detect type from thisOverride pointer
            var detectedType = BlinkUnwrap.detectType(thisOverride);

            // Fallback: Use previous return type hint if available (for chaining)
            if (!detectedType && previousHint) {
                detectedType = previousHint;
                Logger.info("    [Chain] Using type from previous call: " + detectedType);
            }

            if (detectedType) {
                var className = detectedType.replace(/[()*&]/g, "").trim();
                targetSymbol = className + "::" + namePart;
                Logger.info("    [Chain Auto-Detect] " + thisOverride + " -> " + targetSymbol);
            } else {
                Logger.error("    [Chain] Type detection failed for '" + namePart + "'.");
                Logger.info("    Please use explicit type qualification: e.g. 'blink::ClassName::" + namePart + "'");
                return null;
            }
        }

        // Resolve Target
        // Auto-prepend chrome! if no module prefix found
        var symInfo = null;
        if (targetSymbol.indexOf("!") === -1 && !targetSymbol.startsWith("0x")) {
            // Try with chrome! prefix first
            symInfo = SymbolUtils.getSymbolInfo("chrome!" + targetSymbol);
            if (symInfo) {
                Logger.info("    [Auto-Module] Resolved as chrome!" + targetSymbol);
                targetSymbol = "chrome!" + targetSymbol; // Update for getReturnType lookup
            }
        }

        if (!symInfo) {
            symInfo = SymbolUtils.getSymbolInfo(targetSymbol);
        }

        // Infer return type hint for analysis
        this.currentReturnTypeHint = null;

        // Try programmatic detection first (WinDbg JS Object Model)
        var detectedReturnType = SymbolUtils.getReturnType(targetSymbol);
        if (detectedReturnType) {
            Logger.info("    [Type Detection] Programmatically detected: " + detectedReturnType);
            this.currentReturnTypeHint = this._normalizeTypeHint(detectedReturnType);
        }

        if (!this.currentReturnTypeHint) {
            var methodOnly = targetSymbol;
            var classOnly = null;
            if (targetSymbol.includes("::")) {
                var lastCC = targetSymbol.lastIndexOf("::");
                methodOnly = targetSymbol.substring(lastCC + 2);
                classOnly = targetSymbol.substring(0, lastCC);
                if (classOnly.includes("!")) classOnly = classOnly.split("!")[1];
            }

            var inferredType = Exec._inferReturnType(methodOnly, classOnly);
            if (inferredType) {
                Logger.info("    [Type Inference] Inferred return type (Fallback): " + inferredType);
                this.currentReturnTypeHint = inferredType;
            }
        }

        // Parse Args (before execution paths branch)
        var args = this._parseArgs(argsPart);
        if (thisPtr) {
            args.unshift(this._processArg(thisPtr));
        }

        // Handle Inlined Function Candidates - Find the best one
        if (symInfo && symInfo.type === 'inline_candidates') {
            Logger.info("    [Chain] Found " + symInfo.candidates.length + " inlined candidates for '" + targetSymbol + "'");

            var bestCandidate = null;
            var bestOffset = 999999;
            var bestRegs = null;

            for (var cand of symInfo.candidates) {
                // Safety Check: Skip candidates with control flow or RIP-relative addressing
                if (!this._checkRelocatable(cand.address, cand.size)) {
                    Logger.warn("    [Chain] Skipping non-relocatable candidate @ " + cand.address);
                    continue;
                }

                var regs = this._getInlinedRegs(cand.address);

                // Heuristic: We want a simple getter, usually offset is small positive.
                // If offset is 0x10, it's likely "mov rax, [rcx+10h]".
                // If offset is huge (e.g. 0xB0), it might be "mov rax, [rcx+B0h]" where rcx is NOT 'this'.
                // We prefer the smallest positive offset.
                if (regs.offset >= 0 && regs.offset < bestOffset) {
                    bestOffset = regs.offset;
                    bestCandidate = cand;
                    bestRegs = regs;
                }
            }

            if (bestCandidate) {
                Logger.info("    [Chain] Selected best inlined candidate @ " + bestCandidate.address + " (Offset: 0x" + bestOffset.toString(16) + ")");

                // Inferred return type using DRY helper
                var inlinedSymbol = bestCandidate.foundClass + "::" + bestCandidate.foundMethod;
                var inlinedReturnType = SymbolUtils.getReturnType("chrome!" + inlinedSymbol);
                if (inlinedReturnType) {
                    this.currentReturnTypeHint = this._normalizeTypeHint(inlinedReturnType);
                    if (this.currentReturnTypeHint) {
                        Logger.info("    [Type Detection] Inlined return type: " + this.currentReturnTypeHint);
                    }
                }

                // Adjust 'this' pointer for multi-inheritance if method is on a different class
                // Extract the original class from targetSymbol to compare with bestCandidate.foundClass
                var targetClass = targetSymbol.replace(/^chrome!/, "");
                var lastCC = targetClass.lastIndexOf("::");
                if (lastCC !== -1) targetClass = targetClass.substring(0, lastCC);

                if (thisPtr && bestCandidate.foundClass !== targetClass) {
                    var adjustedThis = this._adjustThisPointer(thisPtr, "chrome!" + inlinedSymbol);
                    if (adjustedThis !== thisPtr && args.length > 0) {
                        args[0] = this._processArg(adjustedThis);
                    }
                }

                return this._executeInlinedCode(bestCandidate.address, bestCandidate.size, args, bestRegs.inputReg, bestRegs.outputReg);
            } else {
                Logger.error("    [Chain] Could not find a suitable inlined candidate.");
                return null;
            }
        }

        // Handle Single Inline (Legacy/Fallback if getSymbolInfo behaves differently)
        if (symInfo && symInfo.type === 'inline') {
            // Safety Check: Ensure code is relocatable
            if (!this._checkRelocatable(symInfo.address, symInfo.size)) {
                Logger.error("    [Inline] Code contains control flow or RIP-relative addressing. Cannot relocate safely.");
                return null;
            }

            // Get register info (includes offset for ADD pattern getters)
            var regs = this._getInlinedRegs(symInfo.address);

            // Infer return type from member offset via DRY helper
            if (regs.offset > 0) {
                var detectedType = this._detectTypeFromOffset(targetSymbol, regs.offset);
                if (detectedType) {
                    this.currentReturnTypeHint = detectedType;
                    Logger.info("    [Type Detection] Inlined return type: " + this.currentReturnTypeHint);
                }
            }

            return this._executeInlinedCode(symInfo.address, symInfo.size, args, regs.inputReg, regs.outputReg);
        }

        var targetAddr = symInfo ? symInfo.address : null;

        // If symbol not found, try dx-based evaluation (for inlined functions)
        if (!targetAddr && !targetSymbol.startsWith("0x")) {
            return this._execViaDx(targetSymbol, argsPart, thisPtr);
        }

        if (!targetAddr) {
            // Try strict address
            if (targetSymbol.startsWith("0x")) targetAddr = targetSymbol;
            else {
                Logger.error("Symbol not found: " + targetSymbol);
                return null;
            }
        }

        // Safety Check

        // Safety Check: If it looks like an instance method (has ::) but no 'this' pointer
        // and arguments don't include it (args.length == 0 check is rough heuristic, valid static methods exist)
        // But for Blink, most :: calls are instance methods. Static ones usually take args or are singletons.
        // If we have 0 args and no 'thisPtr', and it's Blink/content, warn user.
        if (!thisPtr && args.length === 0 && targetSymbol.includes("::")) {
            // Heuristic: If implicit 'this' failed, we warn.
            Logger.warn("Running method without 'this' pointer (and Auto-This failed).");
            Logger.warn("If this is an instance method, it will likely crash or return 0.");
            Logger.warn("Ensure you are in a valid frame with 'g_frame_map' or provide explicit 'this'.");
        }

        // Multi-Inheritance Support: Adjust 'this' pointer if method belongs to a base class
        if (thisPtr && targetSymbol.includes("::")) {
            thisPtr = this._adjustThisPointer(thisPtr, targetSymbol);
        }

        Logger.info("    Target: " + targetSymbol + " @ " + targetAddr);
        Logger.info("    Args: " + JSON.stringify(args, (k, v) => (typeof v === 'bigint' ? v.toString() : v)));

        return this._runX64(targetAddr, args, this.currentReturnTypeHint);
    }

    /// Fallback for inlined functions: synthesize shellcode to read member
    /// Uses dx to find member offset, then generates shellcode to read [this + offset]
    static _execViaDx(symbol, argsStr, thisPtr) {
        Logger.info("    [Direct] Symbol not found, attempting direct member access...");

        var ctl = SymbolUtils.getControl();

        // Extract class and method from symbol
        var lastColonColon = symbol.lastIndexOf("::");
        if (lastColonColon === -1) {
            Logger.error("Cannot parse symbol: " + symbol);
            return null;
        }

        var className = symbol.substring(0, lastColonColon);
        var methodName = symbol.substring(lastColonColon + 2);

        if (!thisPtr) {
            Logger.error("Member access requires a 'this' pointer.");
            Logger.info("    Use: !exec \"0x<address>->" + symbol + "\"");
            return null;
        }

        // STRICT MODE: No guessing. Use the exact member name provided.
        var memberName = methodName;

        Logger.info("    [Direct] Checking member: " + memberName);

        var thisBigInt = MemoryUtils.parseBigInt(thisPtr);
        var memberOffset = null;
        var foundPath = null;

        // Check cache first (using ProcessCache)
        var cached = ProcessCache.getOffset(className + "->" + memberName);
        if (cached) {
            Logger.info("    [Cache Hit] " + className + "->" + memberName + " offset=0x" + cached.offset.toString(16));
            return this._readCachedMember(cached, thisPtr);
        }

        // Automatic hierarchy search ("Deep Member Lookup")
        Logger.info("    [Deep Search] Searching hierarchy for " + memberName + "...");

        // 1. Try simple search (current class) + chrome! prefix
        // 2. Try recursive search (base classes + composition)
        var hit = BlinkUnwrap.findMemberDeep(className, thisPtr, memberName);
        if (!hit) {
            // Try valid chrome! prefix if original didn't have it
            if (className.indexOf("!") === -1) {
                hit = BlinkUnwrap.findMemberDeep("chrome!" + className, thisPtr, memberName);
            }
        }

        if (hit) {
            foundPath = hit.path;
            Logger.info("    [Deep Search] Found member via path: " + foundPath);

            // Calculate offset: &((StartClass*)this)->path - this
            // Note: hit.path usually starts with "->"

            // We need to use the class name that WORKED for the search (hit usually implies start class was ok)
            // But if we retried with chrome!, we should use that.
            var useClass = className;
            if (className.indexOf("!") === -1) {
                // If the hit was found, it implies the class name was likely resolveable with or without prefix.
                // Safest to force chrome! if missing, as dx often prefers it.
                useClass = "chrome!" + className;
            }

            var castExpr = "&((" + useClass + "*)" + thisPtr + ")" + foundPath;
            try {
                // Logger.info("    [Offset Calc] " + castExpr);
                var output = ctl.ExecuteCommand("dx -r0 " + castExpr);
                for (var line of output) {
                    var lineStr = line.toString();
                    // Match address after colon:  ... : 0x12345 ...
                    var m = lineStr.match(/:\s*(0x[0-9a-fA-F`]+)/);
                    if (m) {
                        var memberAddr = MemoryUtils.parseBigInt(m[1].replace(/`/g, ""));
                        memberOffset = memberAddr - thisBigInt;
                        break;
                    }
                }
            } catch (e) { }
        }

        if (memberOffset === null) {
            // Before giving up, try PDB lookup for inlined functions
            // This uses x /v to find non-inlined versions or disassemble inlined code
            var inlineResult = this._execViaInline(className, methodName, thisPtr);
            if (inlineResult !== null) {
                return inlineResult;
            }

            Logger.error("Cannot find backing member '" + memberName + "' for " + methodName);
            Logger.info("    Class: " + className);
            Logger.info("    Make sure to provide the EXACT member name (e.g. 'url_' not 'Url')");
            Logger.info("    Use !frame_attrs 0x... to see actual members.");
            return null;
        }

        // Cache the result (using ProcessCache)
        ProcessCache.setOffset(className + "->" + memberName, { offset: memberOffset, path: foundPath });

        Logger.info("    Member offset: 0x" + memberOffset.toString(16));

        // Generate shellcode to read [RCX + offset]
        // This synthesizes: MOV RAX, [RCX + offset]; RET
        return this._readMember(thisPtr, memberOffset);
    }

    /// Helper: Adjust 'this' pointer for multiple inheritance
    /// Uses dx to cast pointer - dx understands C++ semantics and adjusts for base class offsets
    static _adjustThisPointer(thisPtr, targetSymbol) {
        try {
            // 1. Detect Original Type
            var originalType = BlinkUnwrap.detectType(thisPtr);
            if (!originalType) return thisPtr;

            // Format: (chrome!blink::LocalDOMWindow*) -> blink::LocalDOMWindow
            var originalClass = originalType.replace(/[()*]/g, "").trim().replace(/^chrome!/, "");

            // 2. Extract Target Class from Symbol
            // format: chrome!blink::ExecutionContext::GetSecurityOrigin
            var symClean = targetSymbol.replace(/^chrome!/, "");
            var lastColon = symClean.lastIndexOf("::");
            if (lastColon === -1) return thisPtr;
            var targetClass = symClean.substring(0, lastColon);

            // 3. Compare (if same, no adjustment needed)
            if (originalClass === targetClass) return thisPtr;

            // 4. Perform Cast via dx (NOT '?' which doesn't handle C++ inheritance)
            // dx understands C++ semantics and will adjust pointer for multiple inheritance
            // Format: (TargetClass*)(OriginalClass*)ptr - dx returns adjusted address
            var ctl = SymbolUtils.getControl();
            var castExpr = "dx (chrome!" + targetClass + "*)((chrome!" + originalClass + "*)" + thisPtr + ")";

            try {
                var output = ctl.ExecuteCommand(castExpr);
                for (var line of output) {
                    // dx output: (chrome!blink::ExecutionContext *) : 0x1234...
                    var m = line.toString().match(/:\s*(0x[0-9a-fA-F`]+)/);
                    if (m) {
                        var adjustedPtr = m[1].replace(/`/g, "");

                        if (adjustedPtr !== thisPtr && adjustedPtr !== "0x0") {
                            var thisBig = MemoryUtils.parseBigInt(thisPtr);
                            var adjBig = MemoryUtils.parseBigInt(adjustedPtr);
                            var diff = adjBig - thisBig;
                            var sign = diff >= 0n ? "+" : "";

                            Logger.info("    [Multi-Inheritance] Adjusted 'this': " + thisPtr + " -> " + adjustedPtr +
                                " (Offset: " + sign + diff.toString(16) + ")");
                            return adjustedPtr;
                        }
                    }
                }
            } catch (e) {
                Logger.debug("    [Multi-Inheritance] dx cast failed: " + e.message);
            }
        } catch (e) {
            // Fail silently and return original
        }
        return thisPtr;
    }


    /// Find and call a method using PDB inlined function info
    /// Uses x /v to find:
    ///   1. Non-inlined version (prv func) → call directly
    ///   2. Inlined version (prv inline) → disassemble to extract offset → synthesize
    /// @param className - The class name (e.g., "blink::ExecutionContext")
    /// @param methodName - The method name (e.g., "GetSecurityContext")
    /// @param thisPtr - The object pointer
    /// @returns Result string or null if not found
    static _execViaInline(className, methodName, thisPtr) {
        Logger.info("    [PDB] Looking up: " + className + "::" + methodName);

        var ctl = SymbolUtils.getControl();

        // Check cache first (method address or offset)
        var cached = ProcessCache.getOffset(className + "->" + methodName);
        if (cached && cached.offset !== undefined && cached.offset !== null) {
            Logger.info("    [Cache Hit] Offset = 0x" + cached.offset.toString(16));
            return this._readCachedMember(cached, thisPtr);
        }

        // Use x /v to find function info from PDB
        // NOTE: WinDbg's x command doesn't return 'prv inline' entries with exact names
        // Wildcards are REQUIRED to find inline function instances
        // We try multiple patterns:
        //   1. Targeted wildcard for exact class (primary)
        //   2. Exact match fallback
        //   3. Method-only wildcard to find on base classes (fallback for inheritance)
        // Ensure we don't double-prefix if className already has "chrome!" etc.
        var modulePrefix = className.includes("!") ? "" : "chrome!";
        var patterns = [
            modulePrefix + "*" + className + "::" + methodName + "*",  // Wildcard for inlines (primary)
            modulePrefix + className + "::" + methodName,              // Exact match
            "chrome!*::" + methodName                                  // Method-only search (finds base class methods)
        ];

        var inlineAddr = null;
        var inlineSize = 0;
        var exactFuncAddr = null;
        var inlineCandidates = [];  // Collect all inline candidates

        for (var i = 0; i < patterns.length; i++) {
            var pattern = patterns[i];
            var isExactMatch = pattern.indexOf("*") === -1;  // Only exact if no wildcards

            try {
                Logger.info("    [PDB] x /v " + pattern);
                var symbols = SymbolUtils.getVerboseSymbols(pattern);

                if (symbols) {
                    for (var sym of symbols) {
                        // Skip template instantiations when using broad wildcard (pattern 3)
                        // These often match wrong methods like sync_pb::EstimateMemoryUsage<sync_pb::Url
                        if (pattern === "chrome!*::" + methodName && sym.name.indexOf("<") !== -1) {
                            Logger.debug("    [PDB] Skipping template: " + sym.name);
                            continue;
                        }

                        // Skip unrelated namespaces when using broad wildcard (pattern 3)
                        // Only accept blink::, content::, WTF::, base::, or the exact className namespace
                        if (pattern === "chrome!*::" + methodName) {
                            var symClean = sym.name.replace(/^chrome!/, "");
                            var targetNs = className.split("::")[0]; // e.g., "blink" from "blink::Document"
                            var allowedNs = ["blink", "content", "WTF", "base", targetNs];
                            var symNs = symClean.split("::")[0];
                            if (allowedNs.indexOf(symNs) === -1) {
                                Logger.debug("    [PDB] Skipping unrelated namespace: " + symNs);
                                continue;
                            }
                        }

                        // Look for non-inlined function (prv func) - only for exact matches
                        if (isExactMatch && sym.type === "func") {
                            exactFuncAddr = sym.address;
                            Logger.info("    [PDB] Found exact non-inlined: " + exactFuncAddr);
                        }

                        // Look for inlined function (prv inline)
                        if (sym.type === "inline" && sym.name.indexOf("::" + methodName) !== -1) {
                            // extract class name from sym.name (chrome!ClassName::MethodName)
                            // remove "chrome!" and "::MethodName"
                            var cleanName = sym.name.replace(/^chrome!/, "");
                            var methodIdx = cleanName.lastIndexOf("::" + methodName);
                            if (methodIdx !== -1) {
                                var foundClass = cleanName.substring(0, methodIdx);
                                inlineCandidates.push({
                                    addr: sym.address,
                                    size: sym.size,
                                    foundClass: foundClass,
                                    foundMethod: methodName,
                                    returnType: sym.returnType // Capture return type from symbol
                                });
                            }
                        }
                    }
                }

                // If we found candidates in this pattern, break (prefer earlier patterns)
                if (inlineCandidates.length > 0) break;
            } catch (e) { Logger.debug("    [PDB] Pattern lookup failed: " + e.message); }
        }

        // Select best RELOCATABLE inline candidate based on class hierarchy heuristics
        // We try candidates in priority order, checking relocatability for each
        if (inlineCandidates.length > 0) {
            // Build ordered candidate list by priority
            var orderedCandidates = [];

            // Priority 1: Add exact class matches
            for (var cand of inlineCandidates) {
                if (cand.foundClass === className) {
                    cand.priority = 1;
                    orderedCandidates.push(cand);
                }
            }

            // Priority 2: Add base class matches
            for (var cand of inlineCandidates) {
                if (cand.priority) continue;  // Already added
                var shortClassName = className.split("::").pop();
                var shortFoundClass = cand.foundClass.split("::").pop();
                if (shortClassName.endsWith(shortFoundClass)) {
                    cand.priority = 2;
                    orderedCandidates.push(cand);
                }
            }

            // Priority 3: Skip remaining candidates from unrelated classes
            // Even if offset validation passes, code designed for a different object type
            // (e.g., FrameFetchContext::Url vs Document::Url) will produce incorrect results
            // because the inlined code may rely on other class-specific state/layout

            // Try each candidate in order, checking relocatability
            for (var cand of orderedCandidates) {
                var priorityName = cand.priority === 1 ? "Exact class" : "Base class";
                Logger.info("    [PDB] Trying " + priorityName + " match: " + cand.foundClass + "::" + cand.foundMethod);

                // Check relocatability BEFORE selecting
                if (!this._checkRelocatable(cand.addr, cand.size)) {
                    Logger.warn("    [PDB] Skipping (contains control flow): " + cand.addr);
                    continue;
                }

                // Get register info for execution
                var regs = this._getInlinedRegs(cand.addr);

                // This candidate is relocatable - use it!
                Logger.info("    [PDB] Selected inlined at: " + cand.addr + " (size=" + cand.size + ")");

                // Inferred return type for chaining: Use the resolved symbol
                var inlinedSymbol = cand.foundClass + "::" + cand.foundMethod;
                var inlinedReturnType = cand.returnType || SymbolUtils.getReturnType("chrome!" + inlinedSymbol);
                if (inlinedReturnType) {
                    // Normalize to pointer hint for chaining
                    this.currentReturnTypeHint = this._normalizeTypeHint(inlinedReturnType);
                    Logger.info("    [Type Detection] Inlined return type: " + this.currentReturnTypeHint);
                }

                Logger.info("    [PDB] Executing real inlined code from " + cand.addr + " (" + cand.size + " bytes)");

                // Adjust 'this' pointer for multi-inheritance if method is on a base class
                var adjustedThis = thisPtr;
                if (cand.foundClass !== className) {
                    adjustedThis = this._adjustThisPointer(thisPtr, "chrome!" + inlinedSymbol);
                }

                var inlineArgs = [{ type: 'int', realValue: MemoryUtils.parseBigInt(adjustedThis) }];
                return this._executeInlinedCode(cand.addr, cand.size, inlineArgs, regs.inputReg, regs.outputReg);
            }

            // All inline candidates had control flow - fall back to non-inlined
            Logger.warn("    [PDB] All " + orderedCandidates.length + " inline candidates contain control flow");
            if (exactFuncAddr) {
                Logger.info("    [PDB] Falling back to non-inlined version @ " + exactFuncAddr);
                return this._execViaInline_Part2(exactFuncAddr, thisPtr);
            }

            Logger.warn("    [PDB] No relocatable inline found and no non-inlined function available (falling back to member lookup)");
            // return null; // Removed to allow fallthrough to member fallback
        }

        // No inline candidates found - try member variable fallback
        // Convert method name to member name (CamelCase -> snake_case_)
        var memberName = this._methodToMember(methodName);
        if (memberName && thisPtr) {
            Logger.info("    [Fallback] Trying member variable: " + memberName);
            var result = this._readMemberDirect(thisPtr, className, memberName);
            if (result) return result;

            // Retry without "get_" prefix if present
            if (memberName.startsWith("get_")) {
                var altMember = memberName.substring(4); // remove "get_"
                Logger.info("    [Fallback] Trying alternative member: " + altMember);
                result = this._readMemberDirect(thisPtr, className, altMember);
                if (result) return result;
            }
        }

        // Final fallback: Try vtable dispatch for virtual methods
        if (thisPtr && className && methodName) {
            var vtableResult = this._execViaVtable(thisPtr, className, methodName);
            if (vtableResult) return vtableResult;
        }

        Logger.error("    [PDB] No PDB entry found for " + className + "::" + methodName);
        return null;
    }

    /// Execute a virtual method via vtable dispatch
    /// @param thisPtr - Object pointer
    /// @param className - Class name (may include module prefix)
    /// @param methodName - Method name to call
    static _execViaVtable(thisPtr, className, methodName) {
        Logger.info("    [Vtable] Attempting vtable dispatch for " + methodName);

        var ctl = SymbolUtils.getControl();
        var thisBig = MemoryUtils.parseBigInt(thisPtr);

        try {
            // 1. Read vtable pointer from [this + 0]
            var vtablePtrRaw = host.memory.readMemoryValues(host.parseInt64(thisBig.toString(16), 16), 1, 8)[0];
            // Convert via hex string to avoid 64-bit precision loss
            var vtablePtr = BigInt("0x" + vtablePtrRaw.toString(16));

            if (vtablePtr < 0x10000n) {
                Logger.warn("    [Vtable] Invalid vtable pointer: 0x" + vtablePtr.toString(16));
                return null;
            }

            // Validate vtable pointer is in valid address range (user-mode, not obviously garbage)
            if (vtablePtr > 0x7FFFFFFFFFFFn) {
                Logger.warn("    [Vtable] Vtable pointer out of user-mode range: 0x" + vtablePtr.toString(16));
                return null;
            }

            Logger.info("    [Vtable] Vtable at: 0x" + vtablePtr.toString(16));

            // 2. Verify this is actually a vtable using ln command
            var vtableName = null;
            var isValidVtable = false;
            try {
                var lnOut = ctl.ExecuteCommand("ln 0x" + vtablePtr.toString(16));
                for (var line of lnOut) {
                    var lineStr = line.toString();
                    // Look for pattern like "chrome!blink::SecurityOrigin::`vftable'"
                    var vtMatch = lineStr.match(/(\w+![^`]+)::`vftable'/);
                    if (vtMatch) {
                        vtableName = vtMatch[1];
                        isValidVtable = true;
                        Logger.info("    [Vtable] Type: " + vtableName);
                        break;
                    }
                }
            } catch (e) { Logger.debug("    [Vtable] Slot resolution failed: " + e.message); }

            if (!isValidVtable) {
                Logger.warn("    [Vtable] Address 0x" + vtablePtr.toString(16) + " is not a valid vtable (class may not be polymorphic)");
                return null;
            }

            // 3. Find the method slot offset in the vtable
            // Use dx to enumerate the vtable and find matching method
            var slotOffset = null;
            var funcAddr = null;

            // Try direct dx on vtable as function pointer array
            // Pattern: dx -r1 (void**)0x<vtable>
            try {
                var dxCmd = "dx -r1 ((void**)0x" + vtablePtr.toString(16) + ")";
                var dxOut = ctl.ExecuteCommand(dxCmd);
                var slotIdx = 0;

                for (var line of dxOut) {
                    var lineStr = line.toString();

                    // Look for method name in demangled form
                    // Pattern: [0] : 0x... : chrome!ClassName::MethodName
                    if (lineStr.indexOf("::" + methodName) !== -1) {
                        // Extract address
                        var addrMatch = lineStr.match(/0x([0-9a-fA-F]+)/);
                        if (addrMatch) {
                            funcAddr = BigInt("0x" + addrMatch[1]);
                            slotOffset = slotIdx * 8;
                            Logger.info("    [Vtable] Found " + methodName + " at slot " + slotIdx + " -> 0x" + funcAddr.toString(16));
                            break;
                        }
                    }

                    // Track slot index
                    var slotMatch = lineStr.match(/\[(\d+)\]/);
                    if (slotMatch) {
                        slotIdx = parseInt(slotMatch[1]) + 1;
                    }
                }
            } catch (e) {
                Logger.warn("    [Vtable] dx enumeration failed: " + e.message);
            }

            // Alternative: Try "dqs" to dump vtable with symbols
            if (!funcAddr) {
                try {
                    var dqsOut = ctl.ExecuteCommand("dqs 0x" + vtablePtr.toString(16) + " L20");
                    var slotIdx = 0;

                    for (var line of dqsOut) {
                        var lineStr = line.toString();

                        // Pattern: addr  funcAddr  chrome!Class::Method
                        if (lineStr.indexOf("::" + methodName) !== -1) {
                            var parts = lineStr.trim().split(/\s+/);
                            if (parts.length >= 2) {
                                var addrStr = parts[1].replace(/`/g, "");
                                if (/^[0-9a-fA-F]+$/.test(addrStr)) {
                                    funcAddr = BigInt("0x" + addrStr);
                                    Logger.info("    [Vtable] Found " + methodName + " via dqs -> 0x" + funcAddr.toString(16));
                                    break;
                                }
                            }
                        }
                        slotIdx++;
                    }
                } catch (e) {
                    Logger.warn("    [Vtable] dqs failed: " + e.message);
                }
            }

            if (!funcAddr) {
                Logger.warn("    [Vtable] Method " + methodName + " not found in vtable");
                return null;
            }

            // 4. Call the virtual function
            Logger.info("    [Vtable] Calling virtual method at 0x" + funcAddr.toString(16));

            var args = [{ type: 'int', realValue: thisBig }];
            return this._runX64("0x" + funcAddr.toString(16), args, this.currentReturnTypeHint);

        } catch (e) {
            Logger.error("    [Vtable] Dispatch failed: " + e.message);
            return null;
        }
    }

    /// Helper: Convert CamelCase method name to snake_case member name
    /// e.g., "MayContainShadowRoots" -> "may_contain_shadow_roots_"
    ///       "IsPrerendering" -> "is_prerendering_"
    ///       "WellFormed" -> "well_formed_"
    static _methodToMember(methodName) {
        if (!methodName) return null;

        // Remove trailing parentheses if present
        methodName = methodName.replace(/\(\)$/, "");

        // Convert CamelCase to snake_case, handling acronyms gracefully
        // 1. "innerHTML" -> "inner_html"
        // 2. "URL" -> "url" (not u_r_l)
        // 3. "GetURL" -> "get_url"

        // Strategy: 
        // 1. Insert underscore between lowercase and uppercase: "inner" "HTML" -> "inner_HTML"
        // 2. Insert underscore between uppercase and uppercase followed by lowercase: "Get" "URL" "Spec" -> "Get_URL_Spec" (requires lookahead)
        // 3. Lowercase everything.

        var snakeCase = methodName
            .replace(/([a-z])([A-Z])/g, '$1_$2') // lower-Upper -> lower_Upper
            .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2') // UPPER-UpperLower -> UPPER_UpperLower (e.g. SVGLength -> SVG_Length)
            .toLowerCase();

        // Add trailing underscore for member variable
        return snakeCase + "_";
    }

    /// Helper: Get member offset from class using dt command
    /// @param className - Class name (e.g., "blink::LocalDOMWindow")
    /// @param memberName - Member name (e.g., "document_")
    /// @returns Offset as integer, or null if not found
    static _getMemberOffset(className, memberName) {
        // Check cache first
        var cached = ProcessCache.getOffset(className + "->" + memberName);
        if (cached && cached.offset !== undefined) {
            return parseInt(cached.offset);
        }

        // Use dt command to get offset
        var ctl = SymbolUtils.getControl();
        try {
            var qualifiedClass = className.indexOf("!") === -1 ? "chrome!" + className : className;
            var output = ctl.ExecuteCommand("dt " + qualifiedClass + " " + memberName);
            for (var line of output) {
                var lineStr = line.toString();
                // Match offset pattern: +0x214 document_
                var m = lineStr.match(/\+0x([0-9a-fA-F]+)\s+/);
                if (m) {
                    var offset = parseInt(m[1], 16);
                    // Cache the result
                    ProcessCache.setOffset(className + "->" + memberName, { offset: offset.toString(), path: memberName });
                    return offset;
                }
            }
        } catch (e) { Logger.debug("    [Offset] dt command failed: " + e.message); }
        return null;
    }

    /// Helper: Get member name at a specific offset in a class
    static _getMemberAtOffset(className, offset) {
        var ctl = SymbolUtils.getControl();
        try {
            var qualifiedClass = className.indexOf("!") === -1 ? "chrome!" + className : className;
            var output = ctl.ExecuteCommand("dt " + qualifiedClass);
            for (var line of output) {
                var lineStr = line.toString();
                // Match: +0x028 member_name_ : Type
                var m = lineStr.match(/\+0x([0-9a-fA-F]+)\s+(\w+)/);
                if (m) {
                    var memberOffset = parseInt(m[1], 16);
                    if (Math.abs(memberOffset - offset) <= 4) {
                        Logger.debug("    [Offset Check] Found '" + m[2] + "' at 0x" + m[1]);
                        return m[2]; // Return member name
                    }
                }
            }
        } catch (e) { Logger.debug("    [MemberAtOffset] dt lookup failed: " + e.message); }
        return null;
    }

    /// Get complete type information for a class member using dt command
    /// This is the canonical way to determine if a member is a complex object (embedded struct)
    /// vs a pointer, primitive, or other simple type.
    /// @param className - Class name (e.g., "blink::Document")
    /// @param memberName - Member name (e.g., "url_")
    /// @returns {offset: number, typeName: string, isComplexObject: boolean} or null if not found
    static _getMemberTypeInfo(className, memberName) {
        var ctl = SymbolUtils.getControl();
        try {
            var qualifiedClass = className.indexOf("!") === -1 ? "chrome!" + className : className;
            var output = ctl.ExecuteCommand("dt " + qualifiedClass + " " + memberName);

            for (var line of output) {
                var lineStr = line.toString();

                // dt output format: +0x138 url_ : blink::KURL
                // or: +0x028 element_ : blink::Element *
                // or: +0x010 flags_ : unsigned int
                var m = lineStr.match(/\+0x([0-9a-fA-F]+)\s+(\w+)\s+:\s+(.+)/);
                if (m) {
                    var offset = parseInt(m[1], 16);
                    var foundMember = m[2];
                    var typeName = m[3].trim();

                    // Determine if this is a complex embedded object:
                    // - NOT a pointer (doesn't end with *)
                    // - NOT a primitive (int, bool, float, double, char, etc.)
                    // Complex objects are embedded structs/classes that should return address

                    var isPointer = typeName.endsWith("*");
                    var isReference = typeName.endsWith("&");

                    // Primitive types (including sized variants)
                    var primitiveTypes = [
                        "bool", "int", "unsigned int", "signed int",
                        "short", "unsigned short", "long", "unsigned long",
                        "long long", "unsigned long long", "__int64", "unsigned __int64",
                        "char", "unsigned char", "signed char", "wchar_t",
                        "float", "double", "void",
                        "size_t", "ptrdiff_t", "intptr_t", "uintptr_t",
                        "int8_t", "int16_t", "int32_t", "int64_t",
                        "uint8_t", "uint16_t", "uint32_t", "uint64_t"
                    ];

                    var isPrimitive = primitiveTypes.indexOf(typeName) !== -1;

                    // Also check for Bitfield pseudo-types: Pos 0, 1 Bit or similar
                    var isBitfield = /^Pos\s+\d+/.test(typeName);

                    // Complex object = not pointer, not reference, not primitive, not bitfield
                    // Examples: blink::KURL, blink::String, content::FrameTree
                    var isComplexObject = !isPointer && !isReference && !isPrimitive && !isBitfield;

                    Logger.debug("    [TypeInfo] " + foundMember + " @ 0x" + offset.toString(16) +
                        " : " + typeName + " (complex=" + isComplexObject + ")");

                    return {
                        offset: offset,
                        typeName: typeName,
                        isComplexObject: isComplexObject,
                        isPointer: isPointer
                    };
                }
            }
        } catch (e) {
            Logger.debug("    [TypeInfo] dt lookup failed: " + e.message);
        }
        return null;
    }

    /// Helper: Infer return type from method name
    /// e.g., "GetSecurityOrigin" -> "blink::SecurityOrigin*"
    ///       "GetDocument" -> "blink::Document*"
    ///       "document" -> "blink::Document*"
    static _inferReturnType(methodName, className) {
        if (!methodName) return null;

        // Remove trailing parentheses if present
        methodName = methodName.replace(/\(\)$/, "");

        // String Return detection (Heuristic)
        // Methods usually returning string by value (requires Hidden Argument ABI)
        // e.g. GetName(), ToString(), title(), href()
        if (/^(Get)?(Name|Title|Href|Value|Id|String|Text|Message)$/i.test(methodName) ||
            /^ToString$/i.test(methodName)) {
            return "String";
        }

        // Extract namespace from className if available (e.g., "blink" from "blink::ExecutionContext")
        var namespace = "";
        var nsMatch = className ? className.match(/^([^:]+)::/) : null;
        if (nsMatch) namespace = nsMatch[1] + "::";

        // Pattern: Get<TypeName>() -> (chrome!<TypeName>*)
        var getMatch = methodName.match(/^[Gg]et([A-Z]\w+)$/);
        if (getMatch) {
            return "(chrome!" + namespace + getMatch[1] + "*)";
        }

        // Pattern: <typename>() (lowercase first letter) -> (chrome!<TypeName>*)
        // e.g., document() -> Document*, securityOrigin() -> SecurityOrigin*
        if (methodName.length > 0 && methodName[0] === methodName[0].toLowerCase()) {
            var typeName = methodName.charAt(0).toUpperCase() + methodName.slice(1);
            // Avoid primitive types like 'int', 'bool' being cast as pointers
            if (!/^(int|bool|float|double|void|size|length|count)$/.test(methodName)) {
                return "(chrome!" + namespace + typeName + "*)";
            }
        }

        return null;
    }

    /// Helper: Read a member variable directly using dx
    static _readMemberDirect(thisPtr, className, memberName) {
        // 1. Check Offset Cache for fast path
        var cached = ProcessCache.getOffset(className + "->" + memberName);
        if (cached) {
            Logger.info("    [Cache] Reading member at offset 0x" + cached.offset.toString(16));
            return this._readCachedMember(cached, thisPtr);
        }

        var ctl = SymbolUtils.getControl();
        var result = null;

        // 2. Try semantic type detection using dt command (PDB-based, reliable)
        var typeInfo = this._getMemberTypeInfo(className, memberName);
        if (typeInfo) {
            Logger.info("    [TypeInfo] Using PDB type: " + typeInfo.typeName + " (complex=" + typeInfo.isComplexObject + ")");

            // Cache the result with full type info
            ProcessCache.setOffset(className + "->" + memberName, {
                offset: typeInfo.offset,
                path: memberName,
                isComplexObject: typeInfo.isComplexObject,
                typeName: typeInfo.typeName
            });

            if (typeInfo.isComplexObject) {
                // Complex embedded object: return address (this + offset)
                this.currentReturnTypeHint = typeInfo.typeName;
                Logger.info("    [Type Hint] Set hint for next call: " + typeInfo.typeName);
                var addr = MemoryUtils.parseBigInt(thisPtr) + BigInt(typeInfo.offset);
                var addrStr = "0x" + addr.toString(16);
                Logger.info("    [TypeInfo] Result (Object Address): " + addrStr);
                return addrStr;
            } else {
                // Pointer or primitive: read the value
                return this._readMember(thisPtr, typeInfo.offset);
            }
        }

        // 3. Fallback to dx command (when dt fails or member not found)
        try {
            // Build dx expression: ((<type>*)<addr>)->member_
            var expr = "((" + className + "*)0x" +
                MemoryUtils.parseBigInt(thisPtr).toString(16) + ")->" + memberName;

            Logger.info("    [Fallback] dx " + expr);
            var output = ctl.ExecuteCommand("dx " + expr);

            // Helper to cache offset
            var cacheOffset = () => {
                try {
                    var offsetCmd = "dx &((" + className + "*)0)->" + memberName;
                    var offsetOut = ctl.ExecuteCommand(offsetCmd);
                    for (var line of offsetOut) {
                        var m = line.toString().match(/:\s*(0x[0-9a-fA-F]+)/);
                        if (m) {
                            ProcessCache.setOffset(className + "->" + memberName, { offset: BigInt(m[1]), path: "cached" });
                            Logger.info("    [Cache] Stored offset 0x" + m[1] + " for " + memberName);
                            break;
                        }
                    }
                } catch (e) { }
            };

            var isFirstLine = true;
            for (var line of output) {
                var lineStr = line.toString();

                // First pass: Check if the result itself is a struct/object (first line)
                // e.g. ((blink::HTMLDocument*)0x...)->cookie_url_                 [Type: blink::KURL]
                if (isFirstLine) {
                    isFirstLine = false;

                    // Check if it has a Type field that implies complex object
                    var typeMatch = lineStr.match(/\[Type:\s*([^\]]+)\]/);
                    if (typeMatch) {
                        var typeName = typeMatch[1].trim();
                        // If it's NOT a primitive (bool, int, etc) and NOT a pointer (pointers are handled by standard dx value read usually, but here we want address of member)
                        // Actually, pointers usually show as `member : 0x... [Type: T*]`.
                        // Structs show as `member [Type: T]`.
                        // So if it DOESN'T look like `key : value` we assume it's the struct itself.

                        // Robust check: If Type is NOT bool and line does NOT contain " : " (value assignment)
                        // This handles "cookie_url_ [Type: blink::KURL]" vs "is_valid_ : true [Type: bool]"
                        if (typeName !== "bool" && lineStr.indexOf(" : ") === -1 && !lineStr.match(/:\s*(true|false|\d+|0x)/)) {
                            Logger.info("    [Fallback] Detected complex object: " + typeName);

                            // Set return type hint for next chain execution
                            this.currentReturnTypeHint = typeName;
                            Logger.info("    [Type Hint] Set hint for next call: " + typeName);

                            // We need the offset to return the address (this + offset)
                            var offsetCmd = "dx &((" + className + "*)0)->" + memberName;
                            var offsetOut = ctl.ExecuteCommand(offsetCmd);
                            for (var offLine of offsetOut) {
                                var m = offLine.toString().match(/:\s*(0x[0-9a-fA-F]+)/);
                                if (m) {
                                    var offset = BigInt(m[1]);
                                    ProcessCache.setOffset(className + "->" + memberName, { offset: offset, path: "cached", isComplexObject: true, typeName: typeName });
                                    Logger.info("    [Cache] Stored offset 0x" + m[1] + " for " + memberName + " (complex object: " + typeName + ")");
                                    // Return address: thisPtr + offset
                                    var addr = MemoryUtils.parseBigInt(thisPtr) + offset;
                                    var addrStr = "0x" + addr.toString(16);
                                    Logger.info("    [Fallback] Result (Object Address): " + addrStr);
                                    return addrStr;
                                }
                            }
                        }
                    }
                }

                // Check for errors
                if (lineStr.indexOf("Error") !== -1 || lineStr.indexOf("Unable") !== -1) {
                    Logger.warn("    [Fallback] dx failed: " + lineStr);
                    return null;
                }

                // Parse boolean result: "... : true [Type: bool]" or "... : false [Type: bool]"
                // STRICTER: Only if name matches memberName or it's the main result line (no name)
                var boolMatch = lineStr.match(/:\s*(true|false)\s*\[Type:\s*bool\]/i);
                if (boolMatch) {
                    result = boolMatch[1].toLowerCase() === "true" ? "0x1" : "0x0";
                    Logger.info("    [Fallback] Result (bool): " + boolMatch[1] + " (" + result + ")");
                    cacheOffset();
                    return result;
                }

                // Parse String types: use BlinkUnwrap._readStringMember for proper string handling
                // Matches: [Type: blink::String], [Type: blink::AtomicString], [Type: WTF::String]
                if (lineStr.match(/\[Type:.*(?:String|AtomicString)/i)) {
                    var strContent = BlinkUnwrap._readStringMember(thisPtr, "(" + className + "*)", memberName, "String");
                    if (strContent !== null) {
                        Logger.info("    [Fallback] Result (String): \"" + strContent + "\"");
                        cacheOffset();
                        return strContent;
                    }
                }

                // Parse integer result: "... : 0x123 [Type: ...]" or "... : 123 [Type: ...]"
                var intMatch = lineStr.match(/:\s*(0x[0-9a-fA-F]+|\d+)\s*\[Type:/);
                if (intMatch) {
                    var val = intMatch[1];
                    if (!val.startsWith("0x")) val = "0x" + parseInt(val, 10).toString(16);
                    Logger.info("    [Fallback] Result (int): " + val);
                    result = val;
                    cacheOffset();
                    return result;
                }

                // Parse enum result: "... : kEnumName (0x2) [Type: ...]"
                var enumMatch = lineStr.match(/:\s*(\w+)\s*\((\d+|0x[0-9a-fA-F]+)\)\s*\[Type:/);
                if (enumMatch) {
                    var enumVal = enumMatch[2];
                    if (!enumVal.startsWith("0x")) enumVal = "0x" + parseInt(enumVal, 10).toString(16);
                    Logger.info("    [Fallback] Result (enum): " + enumMatch[1] + " (" + enumVal + ")");
                    result = enumVal;
                    cacheOffset();
                    return result;
                }
            }

            Logger.warn("    [Fallback] Could not parse dx output");
            return null;

        } catch (e) {
            Logger.error("    [Fallback] dx failed: " + e.message);
            return null;
        }
    }

    /// Helper: Analyze inlined function assembly to detect input/output registers
    static _getInlinedRegs(inlineAddr) {
        var ctl = SymbolUtils.getControl();
        var inputReg = "rcx";  // Default input (this)
        var outputReg = "rax"; // Default output (result)
        var offset = null;     // Default to null (not found)

        try {
            var uOutput = ctl.ExecuteCommand("u " + inlineAddr + " L5");
            for (var line of uOutput) {
                var lineStr = line.toString();

                // LEA (pointer return): lea rax,[rcx+offset]
                var leaMatch = lineStr.match(/lea\s+(\w+),.*?\[(\w+)(?:\+([0-9a-fA-F]+)h?)?\]/i);
                if (leaMatch) {
                    outputReg = leaMatch[1];
                    inputReg = leaMatch[2];
                    offset = leaMatch[3] ? parseInt(leaMatch[3], 16) : 0;
                    Logger.info("    [PDB] Pattern: LEA " + outputReg + ", [" + inputReg + "+0x" + offset.toString(16) + "]");
                    break;
                }

                // MOVSS/MOVSD (float/double): movss xmm0, ...
                var movssMatch = lineStr.match(/movs[sd]\s+(\w+),.*?\[(\w+)(?:\+([0-9a-fA-F]+)h?)?\]/i);
                if (movssMatch) {
                    outputReg = movssMatch[1];
                    inputReg = movssMatch[2];
                    offset = movssMatch[3] ? parseInt(movssMatch[3], 16) : 0;
                    Logger.info("    [PDB] Pattern: MOVSS/SD " + outputReg + ", [" + inputReg + "+0x" + offset.toString(16) + "]");
                    break;
                }

                // MOV (value read): mov rax,qword ptr [rcx+offset]
                var movMatch = lineStr.match(/mov\s+(\w+),.*?\[(\w+)(?:\+([0-9a-fA-F]+)h?)?\]/i);
                if (movMatch) {
                    outputReg = movMatch[1];
                    inputReg = movMatch[2];
                    offset = movMatch[3] ? parseInt(movMatch[3], 16) : 0;
                    Logger.info("    [PDB] Pattern: MOV " + outputReg + ", [" + inputReg + "+0x" + offset.toString(16) + "]");
                    break;
                }

                // ADD (pointer arithmetic): add r14,offset
                // In this case, input and output are SAME register
                var addMatch = lineStr.match(/add\s+(\w+),([0-9a-fA-F]+)h/i);
                if (addMatch) {
                    inputReg = addMatch[1];
                    outputReg = addMatch[1]; // Result stays in same register
                    offset = parseInt(addMatch[2], 16);
                    Logger.info("    [PDB] Pattern: ADD " + inputReg + ", 0x" + offset.toString(16));
                    break;
                }

                // MOVSXD (compressed pointer logic): movsxd rcx,dword ptr [rbx+28h]
                var movsxdMatch = lineStr.match(/movsxd\s+(\w+),.*?\[(\w+)(?:\+([0-9a-fA-F]+)h?)?\]/i);
                if (movsxdMatch) {
                    outputReg = movsxdMatch[1];
                    inputReg = movsxdMatch[2];
                    offset = movsxdMatch[3] ? parseInt(movsxdMatch[3], 16) : 0;
                    Logger.info("    [PDB] Pattern: MOVSXD " + outputReg + ", [" + inputReg + "+0x" + offset.toString(16) + "]");
                    break;
                }
            }
        } catch (e) {
            Logger.info("    [PDB] Register detection failed: " + e.message);
        }
        return { inputReg: inputReg, outputReg: outputReg, offset: offset };
    }

    /// Check if code range contains relative control flow (call, jmp, jcc) which breaks on relocation
    static _checkRelocatable(addr, size) {
        var ctl = SymbolUtils.getControl();
        try {
            // Disassemble entire range
            var output = ctl.ExecuteCommand("u " + addr + " L" + (size < 20 ? "10" : "50"));
            // Start address as BigInt for range check
            var startBn = BigInt(addr.replace(/`/g, ""));
            var endBn = startBn + BigInt(size);

            for (var line of output) {
                var lineStr = line.toString();
                // Extract address
                var m = lineStr.match(/^([0-9a-fA-F`]+)/);
                if (!m) continue;
                var currBn = BigInt("0x" + m[1].replace(/`/g, ""));

                if (currBn >= endBn) break; // Past the inline range

                // Check mnemonics: call, jmp, je, jne, jnz, etc.
                // Regex for control flow
                if (/\s(call|jmp|je|jne|jz|jnz|jg|jge|jl|jle|ja|jae|jb|jbe|jo|jno|js|jns)\s/.test(lineStr)) {
                    Logger.warn("    [RelocationCheck] Found control flow: " + lineStr.trim());
                    return false;
                }

                // Check for RIP-relative addressing: [rip+...] or [rip-...]
                if (/\[rip[+\-]/i.test(lineStr)) {
                    Logger.warn("    [RelocationCheck] Found RIP-relative addressing: " + lineStr.trim());
                    return false;
                }
            }
        } catch (e) {
            Logger.warn("    [RelocationCheck] Failed: " + e.message);
            // safe to proceed? Assume no.
            return false;
        }
        return true;
    }

    static _execViaInline_Part2(exactFuncAddr, thisPtr) {
        // Fallback: Use exact class match non-inlined if available
        if (exactFuncAddr) {
            Logger.info("    [PDB] Using exact class non-inlined function @ " + exactFuncAddr);
            var args = [{ type: 'int', realValue: MemoryUtils.parseBigInt(thisPtr) }];
            return this._runX64(exactFuncAddr, args);
        }

        Logger.info("    [PDB] Method not found in PDB");
        return null;
    }

    /// Helper: Prepare a StringView argument in scratch memory
    /// @param str - The string value
    /// @param scratchBase - Base address of scratch memory (BigInt)
    /// @param currentOffset - Current offset in scratch memory (BigInt)
    /// @returns Object { realValue: BigInt (pointer to StringView), sizeUsed: BigInt }
    static _prepareStringArg(str, scratchBase, currentOffset) {
        // 1. Resolve Blink's static empty StringImpl pointers (used for literals)
        // StringImpl::empty_ is used as a marker for 8-bit strings
        // StringImpl::empty16_bit_ is used as a marker for 16-bit strings
        // These MUST be valid - if null, Is8Bit() will crash when dereferencing impl_
        var empty8 = MemoryUtils.readGlobalPointer("chrome!blink::StringImpl::empty_");
        var empty16 = MemoryUtils.readGlobalPointer("chrome!blink::StringImpl::empty16_bit_");

        // Also try WTF:: namespace if blink:: fails
        if (!empty8) {
            empty8 = MemoryUtils.readGlobalPointer("chrome!WTF::StringImpl::empty_");
        }
        if (!empty16) {
            empty16 = MemoryUtils.readGlobalPointer("chrome!WTF::StringImpl::empty16_bit_");
        }

        // 2. Determine encoding
        var is8Bit = true;
        for (var j = 0; j < str.length; j++) {
            if (str.charCodeAt(j) > 0xFF) { is8Bit = false; break; }
        }

        // Validate we have the required marker pointer
        var implPtrVal = 0n;
        if (is8Bit) {
            if (!empty8) {
                Logger.error("    [StringView] Cannot resolve StringImpl::empty_ - string argument preparation will fail!");
                Logger.error("    [StringView] This is required for passing string arguments to Blink functions.");
                Logger.info("    [StringView] Try running: dx chrome!blink::StringImpl::empty_");
                throw new Error("StringImpl::empty_ not found - cannot construct 8-bit StringView");
            }
            implPtrVal = BigInt("0x" + empty8);
        } else {
            if (!empty16) {
                Logger.error("    [StringView] Cannot resolve StringImpl::empty16_bit_ - string argument preparation will fail!");
                throw new Error("StringImpl::empty16_bit_ not found - cannot construct 16-bit StringView");
            }
            implPtrVal = BigInt("0x" + empty16);
        }

        // 3. Write raw character data (with null terminator for safety)
        var strDataAddr = scratchBase + currentOffset;
        var charBytes = [];
        if (is8Bit) {
            for (var j = 0; j < str.length; j++) charBytes.push(str.charCodeAt(j));
            charBytes.push(0); // Null terminator (safety for some API expectations)
        } else {
            for (var j = 0; j < str.length; j++) {
                var code = str.charCodeAt(j);
                charBytes.push(code & 0xFF); charBytes.push((code >> 8) & 0xFF);
            }
            charBytes.push(0, 0); // Null terminator (2 bytes for UChar)
        }
        MemoryUtils.writeMemory(strDataAddr.toString(16), charBytes);
        Logger.info("    [StringView] Data (\"" + str + "\", " + (is8Bit ? "8-bit" : "16-bit") + ") at: 0x" + strDataAddr.toString(16));

        // 4. Create StringView Struct (24 bytes total, aligned)
        // Layout: impl_ (8 bytes) | bytes_ (8 bytes) | length_ (4 bytes) | padding (4 bytes)
        var dataSize = BigInt(charBytes.length);
        if (dataSize % 8n !== 0n) dataSize += (8n - (dataSize % 8n)); // Align data section
        var viewAddr = scratchBase + currentOffset + dataSize;

        // +0x00: impl_ (StringImpl* - marker for Is8Bit())
        var implBytes = []; var tempImpl = implPtrVal;
        for (var m = 0; m < 8; m++) { implBytes.push(Number(tempImpl & 0xFFn)); tempImpl >>= 8n; }
        MemoryUtils.writeMemory(viewAddr.toString(16), implBytes);

        // +0x08: bytes_ (pointer to character data)
        var ptrBytes = []; var tempPtr = strDataAddr;
        for (var k = 0; k < 8; k++) { ptrBytes.push(Number(tempPtr & 0xFFn)); tempPtr >>= 8n; }
        MemoryUtils.writeMemory((viewAddr + 8n).toString(16), ptrBytes);

        // +0x10: length_ (4 bytes unsigned)
        var lenVal = str.length;
        var lenBytes = [lenVal & 0xFF, (lenVal >> 8) & 0xFF, (lenVal >> 16) & 0xFF, (lenVal >> 24) & 0xFF];
        MemoryUtils.writeMemory((viewAddr + 16n).toString(16), lenBytes);

        Logger.info("    [StringView] Struct at: 0x" + viewAddr.toString(16) + " (impl=0x" + implPtrVal.toString(16) + ", len=" + str.length + ")");
        return { realValue: viewAddr, sizeUsed: dataSize + 24n };
    }

    /// Helper: Prepare an Array argument in scratch memory
    /// Allocates contiguous block of 64-bit integers and returns pointer to start
    static _prepareArrayArg(arr, scratchBase, currentOffset) {
        var arrayAddr = scratchBase + currentOffset;
        var bytes = [];

        for (var i = 0; i < arr.length; i++) {
            var val = BigInt(arr[i]); // Support both int and hex strings via BigInt constructor if simple
            // But arr[i] from JSON.parse is number or string. 
            // If it's a string hex "0x...", BigInt handles it. 
            // If it's a number, BigInt handles it.
            // We need to pack it as 64-bit LE
            for (var b = 0; b < 8; b++) {
                bytes.push(Number(val & 0xFFn));
                val >>= 8n;
            }
        }

        MemoryUtils.writeMemory(arrayAddr.toString(16), bytes);
        Logger.debug("    [Array] Data (" + arr.length + " elements) at: 0x" + arrayAddr.toString(16));

        var sizeUsed = BigInt(bytes.length);
        return { realValue: arrayAddr, sizeUsed: sizeUsed };
    }

    /// Helper: Iterate and prepare all arguments (String, Array, Integer)
    /// @param args - The arguments array
    /// @param scratchBase - Base address for data allocation (BigInt) or null
    /// @param currentOffset - Starting offset in scratch memory (BigInt)
    /// @returns BigInt - The new current offset after allocations
    static _prepareAllArgs(args, scratchBase, currentOffset) {
        for (var i = 0; i < args.length; i++) {
            if (args[i].type === 'string') {
                if (!scratchBase) throw new Error("Scratch memory required for string argument");
                var result = this._prepareStringArg(args[i].value, scratchBase, currentOffset);
                args[i].realValue = result.realValue;
                currentOffset += result.sizeUsed;
                if (currentOffset % 8n !== 0n) currentOffset += (8n - (currentOffset % 8n));

            } else if (args[i].type === 'array') {
                if (!scratchBase) throw new Error("Scratch memory required for array argument");
                var result = this._prepareArrayArg(args[i].value, scratchBase, currentOffset);
                args[i].realValue = result.realValue;
                currentOffset += result.sizeUsed;
                if (currentOffset % 8n !== 0n) currentOffset += (8n - (currentOffset % 8n));

            } else if (args[i].realValue === undefined) {
                // Parse simple integer/pointer if not already parsed
                args[i].realValue = MemoryUtils.parseBigInt(args[i].value);
            }
        }
        return currentOffset;
    }


    /// Execute real inlined code by copying it to a buffer and running it
    /// @param inlineAddr - Address where inlined code starts
    /// @param inlineSize - Size of inlined code in bytes
    /// @param args - Array of argument objects from _parseArgs (args[0] is 'this')
    /// @param inputReg - Register that holds 'this' (e.g. "rcx", "r14")
    /// @param outputReg - Register that holds result (e.g. "rax", "r14")
    static _executeInlinedCode(inlineAddr, inlineSize, args, inputReg, outputReg) {
        var ctl = SymbolUtils.getControl();

        // Valid x64 registers (GPR 64/32/16/8-bit + XMM)
        var validRegs = [
            // 64-bit
            "rax", "rbx", "rcx", "rdx", "rsi", "rdi", "rbp", "rsp",
            "r8", "r9", "r10", "r11", "r12", "r13", "r14", "r15",
            // 32-bit
            "eax", "ebx", "ecx", "edx", "esi", "edi", "ebp", "esp",
            "r8d", "r9d", "r10d", "r11d", "r12d", "r13d", "r14d", "r15d",
            // 16-bit
            "ax", "bx", "cx", "dx", "si", "di", "bp", "sp",
            "r8w", "r9w", "r10w", "r11w", "r12w", "r13w", "r14w", "r15w",
            // 8-bit (low)
            "al", "bl", "cl", "dl", "sil", "dil", "bpl", "spl",
            "r8b", "r9b", "r10b", "r11b", "r12b", "r13b", "r14b", "r15b",
            // 8-bit (high, legacy)
            "ah", "bh", "ch", "dh",
            // XMM
            "xmm0", "xmm1", "xmm2", "xmm3", "xmm4", "xmm5", "xmm6", "xmm7"
        ];

        inputReg = (inputReg || "rcx").toLowerCase();
        outputReg = (outputReg || "rax").toLowerCase();

        // Validate registers to prevent command injection
        if (validRegs.indexOf(inputReg) === -1) {
            Logger.warn("    Invalid inputReg '" + inputReg + "', defaulting to rcx");
            inputReg = "rcx";
        }
        if (validRegs.indexOf(outputReg) === -1) {
            Logger.warn("    Invalid outputReg '" + outputReg + "', defaulting to rax");
            outputReg = "rax";
        }

        // Declare all allocation variables outside try so finally can access them
        var bufSize = inlineSize + 16;  // Extra space for RET and alignment
        var buf = null;
        var scratchBase = null;
        var currentScratchOffset = 0n;

        try {
            // Allocate buffer for code + RET
            buf = MemoryUtils.alloc(bufSize);
            if (!buf) {
                Logger.error("Failed to allocate execution buffer");
                return null;
            }

            // Preparation: Check if we need scratch memory
            var needsScratch = false;
            for (var i = 0; i < args.length; i++) {
                if (args[i].type === 'string' || args[i].type === 'array') {
                    needsScratch = true;
                    break;
                }
            }

            if (needsScratch) {
                var scratchHex = MemoryUtils.alloc(0x1000);
                if (!scratchHex) {
                    Logger.error("Failed to allocate scratch memory");
                    return null;
                }
                scratchBase = BigInt("0x" + scratchHex);

                // Prepare all arguments using the shared helper
                try {
                    currentScratchOffset = this._prepareAllArgs(args, scratchBase, currentScratchOffset);
                } catch (e) {
                    Logger.error("Argument preparation failed: " + e.message);
                    return null;
                }
            } else {
                // Even if no scratch needed, ensure integers are parsed
                this._prepareAllArgs(args, null, 0n);
            }

            var thisPtr = args[0] ? args[0].realValue : 0n;

            Logger.info("    Execution buffer: " + buf);
            Logger.info("    Input: " + inputReg + " = 0x" + thisPtr.toString(16));
            Logger.info("    Output: " + outputReg);

            // 1. Copy real inlined bytes from target (bulk read for performance)
            var srcAddr = MemoryUtils.parseBigInt(inlineAddr);

            // Sanity check: Verify source address looks reasonable (should be in module range)
            if (srcAddr < 0x10000n || srcAddr > BigInt("0x7FFFFFFFFFFF")) {
                Logger.error("    [Sanity Check] Source address 0x" + srcAddr.toString(16) + " is outside valid range!");
                Logger.info("    This may indicate stale cache. Try: ProcessCache.clearCurrent()");
                return null;
            }

            var codeBytes = [];
            try {
                var values = host.memory.readMemoryValues(host.parseInt64("0x" + srcAddr.toString(16)), inlineSize, 1);
                for (var v of values) {
                    codeBytes.push(Number(v));
                }
            } catch (readErr) {
                Logger.error("    [Code Copy] Failed to read from 0x" + srcAddr.toString(16) + ": " + readErr.message);
                Logger.info("    Auto-clearing symbol cache for this process...");
                // Auto-invalidate cache to force fresh lookup next time
                ProcessCache.clearCurrent();
                return null;
            }

            // Sanity check: First bytes should look like valid x86 code (not all zeros or 0xCC)
            var codeInvalid = false;
            if (codeBytes.length > 0) {
                var allZeros = codeBytes.slice(0, Math.min(4, codeBytes.length)).every(b => b === 0);
                var allInt3 = codeBytes.slice(0, Math.min(4, codeBytes.length)).every(b => b === 0xCC);
                if (allZeros || allInt3) {
                    Logger.warn("    [Sanity Check] Copied code looks invalid (all zeros or INT3)");
                    Logger.info("    First bytes: " + codeBytes.slice(0, 8).map(b => b.toString(16).padStart(2, '0')).join(' '));
                    Logger.info("    Auto-clearing symbol cache...");
                    ProcessCache.clearCurrent();
                    codeInvalid = true;
                }
            }

            // Pattern verification: Verify first instruction matches expected type
            // This catches cases where the wrong inline candidate was selected
            if (!codeInvalid && codeBytes.length >= 4) {
                var firstByte = codeBytes[0];
                var secondByte = codeBytes.length > 1 ? codeBytes[1] : 0;
                var thirdByte = codeBytes.length > 2 ? codeBytes[2] : 0;

                // Expected patterns based on outputReg detection:
                // ADD: 48 81 C1 xx (add rcx, imm32) or 48 83 C1 xx (add rcx, imm8)
                // LEA: 48 8D xx (lea rxx, [...])
                // MOV: 48 8B xx (mov rxx, [...]) or 48 89 xx (mov [...], rxx)
                // MOVSXD: 48 63 xx (movsxd rxx, [...])
                // MOVSS/SD: F3 0F 10 (movss) or F2 0F 10 (movsd)

                var looksLikeValidCode = false;

                // REX.W prefix (0x48, 0x49, 0x4C, 0x4D) followed by opcode
                if ((firstByte >= 0x48 && firstByte <= 0x4F)) {
                    // ADD, LEA, MOV, MOVSXD all start with REX prefix
                    if (secondByte === 0x81 || secondByte === 0x83 || // ADD
                        secondByte === 0x8D || // LEA
                        secondByte === 0x8B || secondByte === 0x89 || // MOV
                        secondByte === 0x63) { // MOVSXD
                        looksLikeValidCode = true;
                    }
                }
                // SSE prefix (F2/F3) for float operations
                if (firstByte === 0xF2 || firstByte === 0xF3) {
                    if (secondByte === 0x0F) {
                        looksLikeValidCode = true;
                    }
                }
                // Non-REX instructions (less common but valid)
                if (firstByte === 0x8B || firstByte === 0x8D || firstByte === 0x89) {
                    looksLikeValidCode = true;
                }

                if (!looksLikeValidCode) {
                    Logger.warn("    [Pattern Check] First instruction doesn't match expected getter pattern");
                    Logger.info("    First bytes: " + codeBytes.slice(0, 8).map(b => b.toString(16).padStart(2, '0')).join(' '));
                    // Don't fail, but log for debugging - some valid patterns might not be recognized
                }
            }

            // 2. Append INT3 as fallback (in case no RET found in copied code)
            codeBytes.push(0xCC);

            // 3. Write to our buffer
            MemoryUtils.writeMemory(buf, codeBytes);

            // Debug: Show what code we copied (only in DEBUG_MODE)
            if (DEBUG_MODE) {
                Logger.info("    [Debug] Copied " + inlineSize + " bytes from 0x" + srcAddr.toString(16));
                try {
                    var debugDisasm = ctl.ExecuteCommand("u 0x" + buf + " L10");
                    Logger.info("    [Debug] Disassembly of copied code:");
                    var lineCount = 0;
                    for (var dLine of debugDisasm) {
                        if (lineCount++ < 5) {  // Show first 5 instructions
                            Logger.info("      " + dLine.toString().trim());
                        }
                    }
                } catch (e) { }
            }

            // 4. Find the first RET in the copied code and replace it with INT3
            // This ensures we break at the right place regardless of PDB inlineSize accuracy
            var retOffset = null;
            try {
                var disasm = ctl.ExecuteCommand("u 0x" + buf + " L50");
                for (var dLine of disasm) {
                    var lineStr = dLine.toString();

                    // Look for RET instruction
                    if (retOffset === null && (/\sret[nf]?\s*$/.test(lineStr) || /\sret\s/.test(lineStr))) {
                        // Extract address from start of line
                        var addrMatch = lineStr.match(/^([0-9a-fA-F`]+)/);
                        if (addrMatch) {
                            var retAddrStr = addrMatch[1].replace(/`/g, "");
                            var bufAddr = BigInt("0x" + buf);
                            retOffset = BigInt("0x" + retAddrStr) - bufAddr;
                        }
                    }
                }
            } catch (e) { }

            // Replace the RET with INT3 if found
            if (retOffset !== null && retOffset < BigInt(codeBytes.length)) {
                codeBytes[Number(retOffset)] = 0xCC; // INT3
                // Re-write the modified code
                MemoryUtils.writeMemory(buf, codeBytes);
            }

            // 4. Save registers (using $t0-$t8 for WinDbg)
            // Note: Saving XMM registers to pseudo-regs ($t0) often fails/crashes, so skips them
            ctl.ExecuteCommand("r @$t0 = @rip");
            ctl.ExecuteCommand("r @$t1 = @rsp");
            ctl.ExecuteCommand("r @$t2 = @" + inputReg);
            if (!outputReg.toLowerCase().startsWith("xmm")) ctl.ExecuteCommand("r @$t3 = @" + outputReg);
            ctl.ExecuteCommand("r @$t4 = @rdx");
            ctl.ExecuteCommand("r @$t5 = @r8");
            ctl.ExecuteCommand("r @$t6 = @r9");
            ctl.ExecuteCommand("r @$t7 = @rcx");
            ctl.ExecuteCommand("r @$t8 = @rax");

            // 5. Setup Stack for Args > 4 (Shadow Space + Args)
            var stackAlloc = null;
            var stackAllocSize = 0;  // Track allocated size for proper deallocation
            if (args.length > 4) {
                // Shadow space (32) + (args-4)*8
                var stackSize = 32 + (args.length - 4) * 8;
                // Align to 16 bytes
                if (stackSize % 16 !== 0) stackSize += (16 - (stackSize % 16));

                // Allocate STACK memory with SAFETY BUFFER (4KB below RSP)
                // Layout: [Safety Buffer 4KB] [RSP Point (Args Start)] [Args...]
                var safetyBuffer = 0x1000;
                var totalStackSize = stackSize + safetyBuffer;

                var stackHex = MemoryUtils.alloc(totalStackSize);
                if (stackHex) {
                    stackAlloc = BigInt("0x" + stackHex);
                    stackAllocSize = totalStackSize;  // Store size for later deallocation

                    // RSP should point to where arguments start (conceptually "top" of used stack)
                    // The function will access [RSP+0x28] for arg 5.
                    // The function might PUSH, writing to [RSP-8].
                    // So we set RSP = stackAlloc + safetyBuffer.
                    var rspAddr = stackAlloc + BigInt(safetyBuffer);

                    // Write args at rspAddr + 32 (Shadow Space)
                    for (var i = 4; i < args.length; i++) {
                        var offset = 32 + (i - 4) * 8;
                        var argVal = args[i].realValue;
                        var valBytes = this._to64BitLE(argVal);
                        var addr = rspAddr + BigInt(offset);
                        MemoryUtils.writeMemory(addr.toString(16), valBytes);
                    }

                    Logger.info("    [Stack] Safe Stack setup at " + rspAddr.toString(16) + " (Base: " + stackHex + ")");
                    ctl.ExecuteCommand("r @rsp = " + rspAddr.toString(16));
                }
            } else {
                // Even if no extra args, providing a safe stack is good practice?
                // Current stack might be unsafe if proper alignment is needed.
                // For now, only override if args > 4 to minimize risk.
            }

            // 5. Set up for execution
            // Set RIP first to establish context
            ctl.ExecuteCommand("r @rip = 0x" + buf);

            // Argument 0: this -> inputReg
            var inputRegLower = inputReg.toLowerCase();
            ctl.ExecuteCommand("r @" + inputReg + " = 0x" + thisPtr.toString(16));

            // Arguments 1-3: rdx, r8, r9 (skip if inputReg is the same register to avoid overwriting 'this')
            if (args.length > 1 && inputRegLower !== "rdx") {
                ctl.ExecuteCommand("r @rdx = 0x" + args[1].realValue.toString(16));
            }
            if (args.length > 2 && inputRegLower !== "r8") {
                ctl.ExecuteCommand("r @r8 = 0x" + args[2].realValue.toString(16));
            }
            if (args.length > 3 && inputRegLower !== "r9") {
                ctl.ExecuteCommand("r @r9 = 0x" + args[3].realValue.toString(16));
            }

            // Note: We no longer use "bc *" as it clears ALL user breakpoints.
            // The INT3 we inject will cause a break without needing to clear others.

            Logger.info("    Executing real inlined code (with args)...");
            // Use gH (go with exception handled) to clear any pending exception state
            ctl.ExecuteCommand("gH");

            // Debug: Show where we stopped and register state (only in DEBUG_MODE)
            if (DEBUG_MODE) {
                try {
                    var ripOut = ctl.ExecuteCommand('.printf "%I64x", @rip');
                    var ripVal = "";
                    for (var line of ripOut) {
                        var s = line.toString().trim();
                        if (/^[0-9a-fA-F]+$/.test(s)) { ripVal = s; break; }
                    }
                    var bufBigInt = BigInt("0x" + buf);
                    var ripBigInt = BigInt("0x" + ripVal);
                    var offsetInBuf = ripBigInt - bufBigInt;
                    Logger.info("    [Debug] Stopped at RIP: 0x" + ripVal + " (offset 0x" + offsetInBuf.toString(16) + " in buffer)");

                    // Show the output register value
                    var regOut = ctl.ExecuteCommand('.printf "%I64x", @' + outputReg);
                    for (var line of regOut) {
                        var s = line.toString().trim();
                        if (/^[0-9a-fA-F]+$/.test(s)) {
                            Logger.info("    [Debug] " + outputReg.toUpperCase() + " after execution: 0x" + s);
                            break;
                        }
                    }
                } catch (e) { }
            }



            // 7. Read output register and xmm0 (for float support)
            var resultVal = 0n;
            var floatVal = 0n;

            try {
                // Use .printf for reliable hex output
                var outLines = ctl.ExecuteCommand('.printf "%I64x", @' + outputReg);
                for (var line of outLines) {
                    var s = line.toString().trim();
                    if (/^[0-9a-fA-F]+$/.test(s)) {
                        resultVal = BigInt("0x" + s);
                        break;
                    }
                }

                // If outputReg IS xmm, use it as floatVal
                if (outputReg.toLowerCase().startsWith("xmm")) {
                    floatVal = resultVal;
                } else {
                    // Capture xmm0 for potential float returns
                    var xmmLines = ctl.ExecuteCommand('.printf "%I64x", @xmm0');
                    for (var line of xmmLines) {
                        var s = line.toString().trim();
                        if (/^[0-9a-fA-F]+$/.test(s)) {
                            floatVal = BigInt("0x" + s);
                            break;
                        }
                    }
                }
            } catch (e) {
                Logger.error("Failed to read result registers: " + e.message);
            }

            // Note: We no longer clear breakpoints here as bc * is too destructive

            // 9. Restore registers
            ctl.ExecuteCommand("r @rip = @$t0");
            ctl.ExecuteCommand("r @rsp = @$t1");
            ctl.ExecuteCommand("r @" + inputReg + " = @$t2");
            if (!outputReg.toLowerCase().startsWith("xmm")) ctl.ExecuteCommand("r @" + outputReg + " = @$t3");
            ctl.ExecuteCommand("r @rdx = @$t4");
            ctl.ExecuteCommand("r @r8 = @$t5");
            ctl.ExecuteCommand("r @r9 = @$t6");
            ctl.ExecuteCommand("r @rcx = @$t7");
            ctl.ExecuteCommand("r @rax = @$t8");

            Logger.info("    Result (Literal): 0x" + resultVal.toString(16));

            // Safety Check: Result matches Code Buffer?
            var bufBig = BigInt("0x" + buf);
            if (resultVal >= bufBig && resultVal < (bufBig + BigInt(bufSize))) {
                Logger.warn("    [WARNING] Result points to execution buffer. Register corruption suspected.");
                Logger.warn("    This usually means 'this' was not passed correctly in " + inputReg);
            }

            // Analyze & Decompress (passing floatVal!)
            resultVal = this._analyzeResult(resultVal, floatVal);

            Logger.info("    Final Result: 0x" + resultVal.toString(16));
            return "0x" + resultVal.toString(16);

        } catch (e) {
            Logger.error("Inlined execution failed: " + e.message);
            // Try to restore state
            try {
                ctl.ExecuteCommand("bc *");
                ctl.ExecuteCommand("r @rip = @$t0");
                ctl.ExecuteCommand("r @rsp = @$t1");
                ctl.ExecuteCommand("r @" + inputReg + " = @$t2");
                ctl.ExecuteCommand("r @rdx = @$t4");
                ctl.ExecuteCommand("r @r8 = @$t5");
                ctl.ExecuteCommand("r @r9 = @$t6");
                ctl.ExecuteCommand("r @rcx = @$t7");
                ctl.ExecuteCommand("r @rax = @$t8");
            } catch (e2) { }
            return null;
        } finally {
            if (buf) {
                MemoryUtils.free(buf, bufSize);
                Logger.debug("    Freed execution buffer: " + buf);
            }
            if (stackAlloc) {
                MemoryUtils.free(stackAlloc.toString(16), stackAllocSize);
                Logger.debug("    Freed stack buffer (" + stackAllocSize + " bytes).");
            }
            if (scratchBase) {
                MemoryUtils.free(scratchBase.toString(16), 0x1000);
                Logger.debug("    Freed scratch buffer.");
            }
        }
    }

    /// Return a pointer (this + offset) - for LEA/ADD patterns
    /// Used for reference-returning getters like GetSecurityContext() -> SecurityContext&
    static _returnPointer(thisPtr, offset) {
        var thisAddr = MemoryUtils.parseBigInt(thisPtr);
        var memberAddr = thisAddr + offset;

        Logger.info("    Pointer: 0x" + thisAddr.toString(16) + " + 0x" + offset.toString(16));
        Logger.info("    Result: 0x" + memberAddr.toString(16));

        this._analyzeResult(memberAddr);
        return "0x" + memberAddr.toString(16);
    }

    /// Read a member value at offset from 'this' pointer
    /// Used for value-returning getters (MOV pattern)
    static _readMember(thisPtr, offset) {
        var thisAddr = MemoryUtils.parseBigInt(thisPtr);
        var memberAddr = BigInt(thisAddr) + BigInt(offset);

        Logger.info("    Reading [0x" + thisAddr.toString(16) + " + 0x" + offset.toString(16) + "]");
        Logger.info("    Member address: 0x" + memberAddr.toString(16));

        try {
            var value = host.memory.readMemoryValues(host.parseInt64(memberAddr.toString(16), 16), 1, 8)[0];
            var result = BigInt(value);

            Logger.info("    Result (Literal): 0x" + result.toString(16));

            // Analyze & Decompress
            result = this._analyzeResult(result);

            Logger.info("    Final Result: 0x" + result.toString(16));
            return "0x" + result.toString(16);
        } catch (e) {
            Logger.error("Failed to read memory at 0x" + memberAddr.toString(16) + ": " + e.message);
            return null;
        }
    }

    /// Read a cached member, handling both complex objects and simple values
    /// For complex objects: returns address (this + offset) and sets type hint
    /// For simple values: reads 8 bytes from memory at offset
    /// @param cached - Cache entry with {offset, isComplexObject?, typeName?}
    /// @param thisPtr - The object pointer
    /// @returns Address string or memory value
    static _readCachedMember(cached, thisPtr) {
        if (cached.isComplexObject) {
            // Complex object: return address, set type hint for chaining
            if (cached.typeName) {
                this.currentReturnTypeHint = cached.typeName;
                Logger.info("    [Cache] Type hint restored: " + cached.typeName);
            }
            var addr = MemoryUtils.parseBigInt(thisPtr) + BigInt(cached.offset);
            var addrStr = "0x" + addr.toString(16);
            Logger.info("    [Cache] Result (Object Address): " + addrStr);
            return addrStr;
        }
        // Simple value: read memory
        return this._readMember(thisPtr, cached.offset);
    }

    static _analyzeResult(resultVal, floatValBitcast) {
        if (resultVal === 0n && (!floatValBitcast)) return 0n;

        // Check for float/double return (if captured)
        var isFloat = false;
        if (floatValBitcast !== undefined && floatValBitcast !== 0n) {
            try {
                var buf = new ArrayBuffer(8);
                var view = new DataView(buf);
                if (view.setBigUint64) {
                    view.setBigUint64(0, floatValBitcast, true);
                    var dVal = view.getFloat64(0, true); // Little Endian

                    // Check Float32 (Low 32 bits)
                    view.setUint32(0, Number(floatValBitcast & 0xFFFFFFFFn), true);
                    var fVal = view.getFloat32(0, true);

                    // Logic to distinguish Float32 vs Double
                    // If Double is extremely small (denormalized) and Float is normal, pick Float.
                    // E.g. 1.5 (float) is 0x3fc00000. As Double it is ~5e-315.
                    var isDoubleTiny = (Math.abs(dVal) > 0 && Math.abs(dVal) < 1e-300);
                    // Minimal normal float is ~1e-38 (excluding denormals)
                    var isFloatNormal = (Math.abs(fVal) > 1e-38 && Math.abs(fVal) < 1e38) || fVal === 0;

                    if (isDoubleTiny && isFloatNormal) {
                        Logger.info("    Result (Float): " + fVal);
                        isFloat = true;
                    } else {
                        Logger.info("    Result (Double): " + dVal);
                        // If valid double, set isFloat
                        if (!isNaN(dVal) && isFinite(dVal)) isFloat = true;
                    }
                }
            } catch (e) { }
        }

        if (resultVal === 0n && !isFloat) return 0n;

        // Check for boolean return value
        var isBoolHint = (this.currentReturnTypeHint && this.currentReturnTypeHint.toLowerCase() === "bool");
        var lowByte = resultVal & 0xFFn;
        var upperBytes = resultVal >> 8n;

        if (isBoolHint) {
            var boolVal = resultVal !== 0n;
            Logger.info("    Result (bool hint): " + boolVal + " (0x" + resultVal.toString(16) + ")");
            return resultVal !== 0n ? 1n : 0n;
        }

        // Check for String return type - blink::String is only 8 bytes (pointer to StringImpl)
        // When returned by value, RAX contains the impl_ pointer directly
        var isStringHint = this.currentReturnTypeHint && (
            this.currentReturnTypeHint.includes("String") ||
            this.currentReturnTypeHint.includes("AtomicString")
        );
        if (isStringHint && resultVal > 0x10000n) {
            try {
                // RAX is the StringImpl pointer - read it directly
                var implAddr = "0x" + resultVal.toString(16);
                var strResult = BlinkUnwrap.readString(implAddr);
                if (strResult !== null && strResult.length > 0) {
                    Logger.info("    String Result: \"" + strResult + "\"");
                    // Store string for potential use, but return the pointer for chaining
                    this.lastStringResult = strResult;
                }
            } catch (e) {
                Logger.debug("    [String Read] Failed: " + e.message);
            }
        }

        // Fallback boolean heuristic for cases without hints
        var skipBoolCheck = (this.currentReturnTypeHint && this.currentReturnTypeHint !== "bool");
        if (resultVal > 0x10000n) skipBoolCheck = true;

        if (!skipBoolCheck && (lowByte === 0n || lowByte === 1n) && upperBytes !== 0n && !isFloat) {
            var boolStr = lowByte === 1n ? "true" : "false";
            Logger.info("    Result (bool heuristic): " + boolStr + " (0x" + lowByte.toString(16) + ")");
            return lowByte;
        }

        // Decimal (clean output, no signed by default unless negative)
        Logger.info("    Decimal (Unsigned): " + resultVal.toString());

        // Check for compressed pointers (CppGC / Oilpan)
        // MOVSXD and other inlined loads often sign-extend or leave garbage in high bits.
        // If high bits are set (> 1TB) but it's not a valid user-mode pointer, 
        // try extracting the low 32 bits for decompression.
        if (!isFloat && resultVal > 0x10000n) {
            var low32 = resultVal & 0xFFFFFFFFn;
            var high32 = resultVal >> 32n;

            // If it's sign-extended (high bits != 0) and not a valid pointer, try low32 recovery
            if (high32 !== 0n && !isValidUserModePointer(resultVal)) {
                if (this.currentThis && low32 > 0n) {
                    var recovered = false;
                    try {
                        // Inlined code (MOVSXD) often returns cage-relative offset directly
                        // Try adding cage base WITHOUT shift first
                        var context = BigInt(this.currentThis.toString().startsWith("0x") ? this.currentThis : "0x" + this.currentThis);
                        var cageBase = context & BigInt("0xFFFFFFFC00000000");
                        var directResult = cageBase + low32;

                        if (isValidUserModePointer(directResult)) {
                            Logger.info("    [Pointer recovered] 0x" + resultVal.toString(16) + " -> 0x" + directResult.toString(16));
                            resultVal = directResult;
                            recovered = true;
                        }

                        if (!recovered) {
                            // Fallback: Try compressed pointer decompression (with shift)
                            var decompressed = MemoryUtils.decompressCppgcPtr(low32, this.currentThis);
                            if (decompressed && decompressed !== low32.toString(16)) {
                                var decompressedBig = BigInt("0x" + decompressed);
                                if (isValidUserModePointer(decompressedBig)) {
                                    Logger.info("    [Pointer decompressed] 0x" + resultVal.toString(16) + " -> 0x" + decompressed);
                                    resultVal = decompressedBig;
                                    recovered = true;
                                }
                            }
                        }
                    } catch (e) { }
                }
            }

            // Standard compressed pointer check (up to 1TB raw value)
            // Exclude small negative 32-bit integers (0xFFFF0000 - 0xFFFFFFFF) which are likely error codes
            var looksLikeNegativeInt = (resultVal >= 0xFFFF0000n && resultVal <= 0xFFFFFFFFn);
            if (resultVal <= 0xFFFFFFFFFFn && this.currentThis && !looksLikeNegativeInt) {
                try {
                    var decompressed = MemoryUtils.decompressCppgcPtr(resultVal, this.currentThis);
                    if (decompressed && decompressed !== resultVal.toString(16)) {
                        Logger.info("    [Pointer Decompressed] -> 0x" + decompressed);
                        resultVal = BigInt("0x" + decompressed);
                    }
                } catch (e) { }
            }
        }

        // Pointer Analysis & Inspection using Master Inspector
        if (!isFloat && resultVal > 0x10000n) {
            var inspection = BlinkUnwrap.inspect(resultVal, { typeHint: this.currentReturnTypeHint });

            if (inspection.type) {
                Logger.info("    C++ Object Detected (" + inspection.type + "):");
                try {
                    frame_attrs(resultVal, false, inspection.type);
                } catch (e) { }
            } else if (inspection.stringValue !== null) {
                Logger.info("    String Result:      \"" + inspection.stringValue + "\"");
            } else if (inspection.isPointer) {
                Logger.info("    [" + inspection.pointerType + " -> " + inspection.pointerTarget + "]");
            }

            // Special case for raw char* fallback (if type is char* but inspection didn't read it as WTF::String)
            if (inspection.type && (inspection.type.indexOf("char*") !== -1 || inspection.type.indexOf("char *") !== -1) && inspection.stringValue === null) {
                try {
                    var s = host.memory.readString(resultVal);
                    if (s && s.length > 0 && /^[\x20-\x7E]+$/.test(s)) {
                        if (s.length > 200) s = s.substring(0, 200) + "...";
                        Logger.info("    String (ASCII):     \"" + s + "\"");
                    }
                } catch (e) { }
            }
        }
        return resultVal;
    }

    static _parseArgs(argsStr) {
        if (!argsStr || argsStr.trim() === "") return [];
        var args = [];
        var current = "";
        var inQuote = false;
        var depth = 0;  // Track parenthesis depth

        for (var i = 0; i < argsStr.length; i++) {
            var c = argsStr[i];

            if (c === '"' && (i === 0 || argsStr[i - 1] !== '\\')) {
                inQuote = !inQuote;
            }

            if (!inQuote) {
                if (c === '(') depth++;
                else if (c === ')') depth--;
            }

            // Only split on comma if not in quote AND at depth 0
            if (c === ',' && !inQuote && depth === 0) {
                args.push(this._processArg(current.trim()));
                current = "";
                continue;
            }
            current += c;
        }
        if (current.trim()) args.push(this._processArg(current.trim()));
        return args;
    }

    static _processArg(arg) {
        // String literal
        if (arg.startsWith('"') && arg.endsWith('"')) {
            // Unescape internal escaped quotes
            var str = arg.slice(1, -1).replace(/\\"/g, '"');
            return { type: 'string', value: str };
        }
        // Boolean
        if (arg === 'true') return { type: 'int', value: 1 };
        if (arg === 'false') return { type: 'int', value: 0 };
        // Null pointer
        if (arg === 'null' || arg === 'nullptr') return { type: 'int', value: 0 };
        // Hex / Number (allow with or without 0x prefix)
        if (/^(0x)?[0-9a-fA-F]+$/.test(arg)) {
            return { type: 'int', value: arg };
        }
        // Symbol?
        if (arg.indexOf('!') !== -1) {
            var addr = SymbolUtils.findSymbolAddress(arg);
            if (addr) return { type: 'int', value: addr };
        }

        if (arg.trim().startsWith('[') && arg.trim().endsWith(']')) {
            try {
                var arr = JSON.parse(arg);
                if (Array.isArray(arr)) return { type: 'array', value: arr };
            } catch (e) {
                Logger.warn("    [Args] Failed to parse array: " + e.message);
            }
        }

        // Fallback: treat as raw value (may cause issues if not valid)
        Logger.warn("    [Args] Unrecognized argument format: '" + arg + "' - treating as literal");
        return { type: 'int', value: arg };
    }

    static _runX64(targetAddr, args, returnType = null) {
        // Detect if return type is a complex struct that needs hidden return pointer
        // 
        // Chrome/Blink uses a NON-STANDARD calling convention for String returns:
        //   - Standard MSVC: RCX = return buffer, RDX = this
        //   - Chrome/Clang:  RCX = this,          RDX = return buffer
        //
        // This was confirmed by disassembling SecurityOrigin::ToString() which accesses
        // [rcx+38h] and [rcx+8] for member fields, proving RCX is 'this'.
        //
        var isStructReturn = returnType && (
            returnType.includes("String") ||
            returnType.includes("KURL") ||
            returnType.includes("AtomicString")
        );
        // Exclude actual pointer returns (e.g., "String*" or "String **")
        // The normalized hint adds one "*", so "String" becomes "(String*)" 
        // But "String*" return would become "(String**)"
        if (isStructReturn && (returnType.includes("**") || returnType.includes("* *"))) {
            isStructReturn = false;
        }

        Logger.debug("    [_runX64] returnType=" + returnType + ", isStructReturn=" + isStructReturn);

        // 1. Allocate scratch Memory
        // Need space for: Shellcode + String Data + Result + Struct Return Buffer
        var allocSize = 0x1000;
        var baseAddrHex = MemoryUtils.alloc(allocSize);
        if (!baseAddrHex) {
            Logger.error("Failed to allocate execution buffer");
            return null;
        }

        var baseAddr = BigInt("0x" + baseAddrHex);

        // Layout:
        // +0x000: Result (8 bytes for RAX)
        // +0x008: XMM0 result (8 bytes for float)
        // +0x010: String Data Start...
        // +0x700: Struct Return Buffer (256 bytes, should be enough for blink::String etc.)
        // +0x800: Code Start (Arbitrary safe offset)

        var resultOffset = 0x0n;
        var dataOffset = 0x10n;
        var structReturnOffset = 0x700n;
        var codeOffset = 0x800n;

        var currentDataOffset = dataOffset;

        // Prepare All Arguments (Strings, Arrays, Ints)
        try {
            currentDataOffset = this._prepareAllArgs(args, baseAddr, currentDataOffset);
        } catch (e) {
            Logger.error("Argument preparation failed in _runX64: " + e.message);
            return null;
        }

        // Generate Shellcode
        var code = [];

        // Prologue
        // sub rsp, 0x28 (Shadow space 32 bytes + align) -> Actually just generic shadow space
        // If we push args, we need to balance stack.
        // Stack must be 16-byte aligned BEFORE the CALL instruction.
        // 'int 3' acts as return point.

        // Standard: Shadow space (32 bytes) is required.
        // + stack args.
        // For struct returns, one register is consumed by hidden return pointer
        var effectiveArgCount = isStructReturn ? args.length + 1 : args.length;
        var stackArgsCount = (effectiveArgCount > 4) ? (effectiveArgCount - 4) : 0;
        var stackSpace = stackArgsCount * 8;
        // Always allocate 0x20 shadow space.
        // Total alloc = 0x20 + stackSpace.
        // Check alignment. 
        // Initial RSP (at breakage) is aligned? Assume WinDbg context.
        // We should align RSP to 16 bytes.

        // Safety: Ensure RSP is 16-byte aligned.
        // and rsp, -16
        code.push(0x48, 0x83, 0xE4, 0xF0); // and rsp, -16

        var totalStack = 0x20 + stackSpace;
        if (totalStack % 16 !== 0) totalStack += 8; // align

        // sub rsp, totalStack
        if (totalStack < 128) {
            code.push(0x48, 0x83, 0xEC, totalStack);
        } else {
            // sub rsp, imm32
            code.push(0x48, 0x81, 0xEC);
            code = code.concat([totalStack & 0xFF, (totalStack >> 8) & 0xFF, 0, 0]);
        }

        // Load Register Args (RCX, RDX, R8, R9)
        // For Chrome/Clang struct returns: RCX = this, RDX = return buffer
        // (This is DIFFERENT from standard MSVC which uses RCX = buffer, RDX = this)
        var registers = [
            [0x48, 0xB9], // mov rcx, imm64
            [0x48, 0xBA], // mov rdx, imm64
            [0x49, 0xB8], // mov r8, imm64
            [0x49, 0xB9]  // mov r9, imm64
        ];

        var structReturnAddr = baseAddr + structReturnOffset;

        if (isStructReturn && args.length > 0) {
            // Chrome/Clang convention: RCX = this, RDX = return buffer
            Logger.debug("    [Struct Return] Using Chrome/Clang convention: RCX=this, RDX=buffer");
            Logger.debug("    [Struct Return] Return buffer at: 0x" + structReturnAddr.toString(16));

            // RCX = this (first arg)
            code = code.concat(registers[0]); // mov rcx, this
            code = code.concat(this._to64BitLE(args[0].realValue));

            // RDX = return buffer
            code = code.concat(registers[1]); // mov rdx, structReturnAddr
            code = code.concat(this._to64BitLE(structReturnAddr));

            // Remaining args go to R8, R9, stack
            for (var i = 1; i < args.length && i < 3; i++) {
                code = code.concat(registers[i + 1]); // R8, R9
                code = code.concat(this._to64BitLE(args[i].realValue));
            }
        } else {
            // Standard calling: RCX, RDX, R8, R9
            for (var i = 0; i < args.length && i < 4; i++) {
                code = code.concat(registers[i]);
                code = code.concat(this._to64BitLE(args[i].realValue));
            }
        }

        // Push Stack Args
        // Args that didn't fit in registers go to stack [rsp + 0x20], [rsp + 0x28]...
        // Warning: The space is already allocated (sub rsp). We should MOV them.
        // For struct returns, regIndex started at 1, so fewer args fit in registers
        var stackStartIdx = isStructReturn ? 3 : 4;  // 4 regs - 1 hidden = 3 for struct return

        for (var i = stackStartIdx; i < args.length; i++) {
            // mov rax, argVal
            code.push(0x48, 0xB8);
            code = code.concat(this._to64BitLE(args[i].realValue));

            // mov [rsp + offset], rax
            var offset = 0x20 + (i - stackStartIdx) * 8;
            if (offset < 0x80) {
                // Short encoding: mov [rsp + disp8], rax
                code.push(0x48, 0x89, 0x44, 0x24, offset & 0xFF);
            } else {
                // Long encoding: mov [rsp + disp32], rax
                code.push(0x48, 0x89, 0x84, 0x24);
                code = code.concat([offset & 0xFF, (offset >> 8) & 0xFF, 0, 0]);
            }
        }

        // Call Target
        // mov rax, targetAddr
        code.push(0x48, 0xB8);
        code = code.concat(this._to64BitLE(MemoryUtils.parseBigInt(targetAddr)));
        // call rax
        code.push(0xFF, 0xD0);

        // Save Result
        // mov rbx, resultAddr (pointer to baseAddr)
        code.push(0x48, 0xBB);
        code = code.concat(this._to64BitLE(baseAddr));

        // Save XMM0 (double/float) to [rbx + 8]
        // movsd [rbx + 8], xmm0  (F2 0F 11 43 08)
        code.push(0xF2, 0x0F, 0x11, 0x43, 0x08);

        // mov [rbx], rax - save primary result
        code.push(0x48, 0x89, 0x03);

        // mov [rbx + 16], rdx - save RDX for small struct returns (RAX:RDX pairs like StringView)
        // Encoding: 48 89 53 10 = mov [rbx+0x10], rdx
        code.push(0x48, 0x89, 0x53, 0x10);

        // Clean Stack (epilogue)
        if (totalStack < 128) {
            code.push(0x48, 0x83, 0xC4, totalStack);
        } else {
            code.push(0x48, 0x81, 0xC4);
            code = code.concat([totalStack & 0xFF, (totalStack >> 8) & 0xFF, 0, 0]);
        }

        // Break
        code.push(0xCC);

        // Write Code
        var codeAddr = baseAddr + codeOffset;
        MemoryUtils.writeMemory(codeAddr.toString(16), code);

        Logger.info("  Code injected at: 0x" + codeAddr.toString(16));
        Logger.info("  Executing...");

        // Execute via RIP hijacking
        var ctl = SymbolUtils.getControl();

        // Save current registers
        // Using 'r' command to save to psuedo-registers
        ctl.ExecuteCommand("r @$t0 = @rip");
        ctl.ExecuteCommand("r @$t1 = @rsp");
        ctl.ExecuteCommand("r @$t2 = @rcx");
        ctl.ExecuteCommand("r @$t3 = @rdx");
        ctl.ExecuteCommand("r @$t4 = @r8");
        ctl.ExecuteCommand("r @$t5 = @r9");
        ctl.ExecuteCommand("r @$t6 = @rax");
        ctl.ExecuteCommand("r @$t7 = @rbx");  // RBX is clobbered by shellcode

        // Set RIP and Go
        ctl.ExecuteCommand("r @rip = 0x" + codeAddr.toString(16));

        // Run!
        try {
            ctl.ExecuteCommand("g");
        } catch (e) {
            Logger.warn("Execution finished (or break hit).");
        }

        // Read Result (and XMM0)
        // Wrap in try-catch to handle cases where execution crashed and corrupted memory
        var result = 0n;
        var resultXmm = 0n;
        try {
            // Use explicit 0x prefix for reliable parsing
            var addrStr = "0x" + baseAddr.toString(16);
            var resultVals = host.memory.readMemoryValues(host.parseInt64(addrStr), 2, 8);
            result = BigInt(resultVals[0]);
            resultXmm = BigInt(resultVals[1]);
        } catch (memReadErr) {
            Logger.error("Failed to read result from execution buffer: " + memReadErr.message);
            Logger.error("This usually means the shellcode execution crashed or caused an exception.");

            // Diagnostic: Check current RIP to see where we crashed
            try {
                var ripOut = ctl.ExecuteCommand('.printf "%I64x", @rip');
                for (var line of ripOut) {
                    var s = line.toString().trim();
                    if (/^[0-9a-fA-F]+$/.test(s)) {
                        var currentRip = "0x" + s;
                        Logger.info("  [Diagnostic] Current RIP: " + currentRip);
                        // Check if RIP is in our shellcode buffer
                        var ripBig = BigInt(currentRip);
                        if (ripBig >= baseAddr && ripBig < baseAddr + BigInt(allocSize)) {
                            var offset = ripBig - baseAddr;
                            Logger.info("  [Diagnostic] Crash in shellcode buffer at offset 0x" + offset.toString(16));
                        } else {
                            // Try to resolve symbol at RIP
                            var symName = SymbolUtils.getSymbolName(currentRip);
                            if (symName) {
                                Logger.info("  [Diagnostic] Crash at symbol: " + symName);
                            }
                        }
                        break;
                    }
                }
            } catch (diagErr) { }

            // Diagnostic: Check exception record
            try {
                var exrOut = ctl.ExecuteCommand(".exr -1");
                for (var line of exrOut) {
                    var lineStr = line.toString();
                    if (lineStr.indexOf("ExceptionCode:") !== -1 || lineStr.indexOf("ExceptionAddress:") !== -1) {
                        Logger.info("  [Diagnostic] " + lineStr.trim());
                    }
                }
            } catch (exrErr) { }

            Logger.info("  Attempting to restore registers and check state...");

            // Auto-clear cache to help recover from potential transient issues
            Logger.info("  Auto-clearing symbol cache in case of stale data...");
            ProcessCache.clearCurrent();

            // Try to restore registers even on failure
            try {
                ctl.ExecuteCommand("r @rip = @$t0");
                ctl.ExecuteCommand("r @rsp = @$t1");
                ctl.ExecuteCommand("r @rcx = @$t2");
                ctl.ExecuteCommand("r @rdx = @$t3");
                ctl.ExecuteCommand("r @r8 = @$t4");
                ctl.ExecuteCommand("r @r9 = @$t5");
                ctl.ExecuteCommand("r @rax = @$t6");
                ctl.ExecuteCommand("r @rbx = @$t7");
                Logger.info("  Registers restored.");
            } catch (restoreErr) {
                Logger.error("  Failed to restore registers: " + restoreErr.message);
            }

            // Try to free allocation
            try {
                if (baseAddrHex) MemoryUtils.free(baseAddrHex, allocSize);
            } catch (freeErr) { }

            // Try to read RAX directly as a fallback (the function may have returned)
            try {
                var raxOut = ctl.ExecuteCommand('.printf "%I64x", @rax');
                for (var line of raxOut) {
                    var s = line.toString().trim();
                    if (/^[0-9a-fA-F]+$/.test(s)) {
                        result = BigInt("0x" + s);
                        Logger.info("  Fallback: Read RAX directly = 0x" + result.toString(16));
                        break;
                    }
                }
            } catch (raxErr) { }

            // If we got a result from RAX, continue with analysis
            if (result !== 0n) {
                result = this._analyzeResult(result, 0n);
                return "0x" + result.toString(16);
            }

            return null;
        }

        // Restore Registers first (before any analysis that might fail)
        ctl.ExecuteCommand("r @rip = @$t0");
        ctl.ExecuteCommand("r @rsp = @$t1");
        ctl.ExecuteCommand("r @rcx = @$t2");
        ctl.ExecuteCommand("r @rdx = @$t3");
        ctl.ExecuteCommand("r @r8 = @$t4");
        ctl.ExecuteCommand("r @r9 = @$t5");
        ctl.ExecuteCommand("r @rax = @$t6");
        ctl.ExecuteCommand("r @rbx = @$t7");

        Logger.info("  State restored.");
        Logger.info("  [Trace] Returning result...");

        // Handle struct return - read from buffer instead of RAX
        // Skip _analyzeResult since result is in buffer, not RAX
        if (isStructReturn) {
            var structAddrHex = "0x" + structReturnAddr.toString(16);
            Logger.info("  [Struct Return] Reading result from buffer: " + structAddrHex);

            // For StringView: can be returned in RAX:RDX or written to hidden buffer
            if (returnType.includes("StringView")) {
                Logger.info("  [StringView] Detected StringView return type");
                try {
                    // Read saved RAX from baseAddr (offset 0)
                    var savedVals = host.memory.readMemoryValues(host.parseInt64(baseAddrHex, 16), 1, 8);
                    var raxVal = BigInt(savedVals[0]);

                    var dataPtr, length, is8Bit;

                    // Check if function used hidden pointer convention (RAX = buffer address)
                    if (raxVal === structReturnAddr) {
                        // Hidden pointer return: struct is written to buffer
                        // StringView layout (from Chromium source):
                        //   offset 0:  StringImpl* impl_  (8 bytes) - used for is_8bit flag
                        //   offset 8:  void* bytes_       (8 bytes) - actual data pointer
                        //   offset 16: unsigned length_   (4 bytes) - string length
                        Logger.info("  [StringView] Using hidden pointer buffer");

                        // Read all values from struct buffer
                        var structData = host.memory.readMemoryValues(host.parseInt64(structAddrHex, 16), 3, 8);
                        var implPtr = BigInt(structData[0]);    // offset 0: impl_
                        dataPtr = BigInt(structData[1]);        // offset 8: bytes_

                        // Read length at offset 16 (4 bytes)
                        var lengthData = host.memory.readMemoryValues(host.parseInt64((structReturnAddr + 16n).toString(16), 16), 1, 4);
                        length = lengthData[0];

                        // Check is_8bit from impl_ if it's valid (impl_->Is8Bit())
                        // For simplicity, try reading a byte near impl_ or assume 8-bit for ASCII hostnames
                        is8Bit = true; // Default assumption for URL components
                        if (implPtr > 0x10000n) {
                            // StringImpl has method Is8Bit() - it stores a flag
                            // The is_8bit flag is typically at a fixed offset in StringImpl
                            // For now, we'll assume 8-bit for URL host (ASCII)
                            try {
                                // Try to infer from impl_ - but this is complex, default to 8-bit
                                Logger.debug("  [StringView] impl_=0x" + implPtr.toString(16));
                            } catch (e) { }
                        }
                    } else {
                        // RAX:RDX register return: RAX = data ptr, RDX = length+flags
                        dataPtr = raxVal;
                        var rdxVals = host.memory.readMemoryValues(host.parseInt64((baseAddr + 16n).toString(16), 16), 1, 8);
                        var rdxVal = BigInt(rdxVals[0]);
                        length = Number(rdxVal & 0xFFFFFFFFn);
                        var flags = Number((rdxVal >> 32n) & 0xFFFFFFFFn);
                        is8Bit = (flags & 1) !== 0;
                    }

                    Logger.info("  [StringView] data=0x" + dataPtr.toString(16) + " len=" + length + " is8bit=" + is8Bit);

                    if (dataPtr > 0x10000n && length > 0 && length < 10000) {
                        var strResult = "";
                        if (is8Bit) {
                            var chars = host.memory.readMemoryValues(host.parseInt64(dataPtr.toString(16), 16), length, 1);
                            for (var i = 0; i < chars.length; i++) {
                                strResult += String.fromCharCode(chars[i]);
                            }
                        } else {
                            var chars = host.memory.readMemoryValues(host.parseInt64(dataPtr.toString(16), 16), length, 2);
                            for (var i = 0; i < chars.length; i++) {
                                strResult += String.fromCharCode(chars[i]);
                            }
                        }
                        Logger.info("  [StringView] Result: " + strResult);
                        if (baseAddrHex) MemoryUtils.free(baseAddrHex, allocSize);
                        return strResult;
                    } else if (length === 0) {
                        Logger.info("  [StringView] Empty string");
                        if (baseAddrHex) MemoryUtils.free(baseAddrHex, allocSize);
                        return "";
                    }
                    Logger.warn("  [StringView] Invalid data or length");
                } catch (e) {
                    Logger.warn("  [StringView] Read failed: " + e.message);
                }
            }

            // For String/KURL types, try BlinkUnwrap.readString
            if (returnType.includes("String") || returnType.includes("KURL") || returnType.includes("AtomicString")) {
                try {
                    var strResult = BlinkUnwrap.readString(structAddrHex);
                    if (strResult !== null && strResult.length > 0) {
                        Logger.info("  [Struct Return] String result: " + strResult);
                        if (baseAddrHex) MemoryUtils.free(baseAddrHex, allocSize);
                        return strResult;
                    }
                    Logger.warn("  [Struct Return] readString returned empty/null");
                } catch (e) {
                    Logger.warn("  [Struct Return] String read failed: " + e.message);
                }
            }

            // Fallback: return buffer address for other struct types
            if (baseAddrHex) MemoryUtils.free(baseAddrHex, allocSize);
            return structAddrHex;
        }


        // For non-struct returns, analyze RAX result
        result = this._analyzeResult(result, resultXmm);

        // Return result for chaining (standard RAX return)
        // Return as HEX STRING to avoid BigInt marshalling crashes
        try {
            var bi = BigInt(result);
            var hexStr = "0x" + bi.toString(16);
            Logger.info("  [Trace] Result returning as string: " + hexStr);
            return hexStr;
        } catch (e) {
            Logger.error("  [Trace] Result conversion failed: " + e.message);
            return "0x0";
        } finally {
            if (baseAddrHex) {
                MemoryUtils.free(baseAddrHex, allocSize);
                Logger.debug("    Freed execution buffer: " + baseAddrHex);
            }
        }
    }
}

/// =============================================================================

function exec_command(cmd) {
    return Exec.exec(cmd);
}

function initializeScript() {
    return [
        new host.apiVersionSupport(1, 7),
        // Exec
        new host.functionAlias(exec_command, "exec"),
        // Process info
        new host.functionAlias(chrome_process_type, "proc"),
        new host.functionAlias(chrome_cmdline, "cmdline"),
        new host.functionAlias(chrome_processes, "procs"),
        new host.functionAlias(renderer_frames, "frames"),
        // Sandbox
        new host.functionAlias(sandbox_state, "sandbox_state"),
        new host.functionAlias(sandbox_status_all, "sandbox_all"),
        new host.functionAlias(sandbox_token, "sandbox_token"),
        // Breakpoints
        new host.functionAlias(bp_renderer_launch, "bp_renderer"),
        new host.functionAlias(bp_sandbox_lower, "bp_sandbox"),
        new host.functionAlias(bp_mojo_interface, "bp_mojo"),
        new host.functionAlias(bp_ipc_message, "bp_ipc"),
        new host.functionAlias(bp_bad_message, "bp_bad"),
        new host.functionAlias(bp_security_check, "bp_security"),
        new host.functionAlias(trace_ipc, "trace_ipc"),
        // Vuln hunting
        new host.functionAlias(vuln_hunt, "vuln_hunt"),
        new host.functionAlias(heap_info, "heap_info"),
        // Spoofing & patching
        new host.functionAlias(patch_function, "patch"),
        new host.functionAlias(spoof_origin, "spoof"),
        new host.functionAlias(on_process_exit, "on_process_exit"),
        // Cross-process execution
        new host.functionAlias(run_in_renderer, "run_renderer"),
        new host.functionAlias(run_in_browser, "run_browser"),
        new host.functionAlias(run_in_gpu, "run_gpu"),
        new host.functionAlias(run_script_in_renderer, "script_renderer"),
        new host.functionAlias(on_renderer_attach, "on_attach"),
        new host.functionAlias(script_in_renderer_attach, "script_attach"),
        // Help
        new host.functionAlias(help, "chelp"),
        // Blink Hooks
        new host.functionAlias(blink_help, "blink_help"),
        new host.functionAlias(bp_element, "bp_element"),
        new host.functionAlias(bp_nav, "bp_nav"),
        new host.functionAlias(bp_pm, "bp_pm"),
        new host.functionAlias(bp_fetch, "bp_fetch"),
        // V8 Hooks
        new host.functionAlias(v8_help, "v8_help"),
        new host.functionAlias(bp_compile, "bp_compile"),
        new host.functionAlias(bp_gc, "bp_gc"),
        new host.functionAlias(bp_wasm, "bp_wasm"),
        new host.functionAlias(bp_jit, "bp_jit"),
        // V8 Pointer Compression
        new host.functionAlias(v8_cage_info, "v8_cage"),
        new host.functionAlias(decompress, "decompress"),
        new host.functionAlias(decompress_gc, "decompress_gc"),
        // Site Isolation
        new host.functionAlias(site_isolation_status, "site_iso"),
        // Mojo Interface Introspection
        new host.functionAlias(mojo_interfaces, "mojo_interfaces"),
        // Per-Frame DOM Inspection
        new host.functionAlias(frame_document, "frame_doc"),
        new host.functionAlias(frame_window, "frame_win"),
        new host.functionAlias(frame_origin, "frame_origin"),
        new host.functionAlias(frame_elements, "frame_elem"),
        new host.functionAlias(frame_getattr, "frame_getattr"),
        new host.functionAlias(frame_setattr, "frame_setattr"),
        new host.functionAlias(frame_attrs, "frame_attrs"),

        // Cache Management
        new host.functionAlias(cache_clear, "cache_clear")
    ];
}

/// Clean up global state when script is unloaded (prevents issues on reload)
function uninitializeScript() {
    // Reset global state to prevent stale data on script reload
    g_rendererAttachCommands = [];
    g_spoofMap.clear();
    g_registeredPids.clear();
    g_exitHandlerRegistered = false;

    // Invalidate cached memory addresses
    ProcessCache.clearAll();
}

/// Initialize the Chrome debugging environment
function chrome_init() {
    Logger.header("Chromium Security Research Debugger - Initialized");
    Logger.info("Type !chelp for available commands");
    Logger.empty();

    // Set up useful aliases
    try {
        var ctl = SymbolUtils.getControl();
        ctl.ExecuteCommand(".prefer_dml 1");
    } catch (e) {
        // Ignore if fails
    }

    return "Chromium debugger initialized. Use !chelp for commands.";
}

/// =============================================================================
/// HELP
/// =============================================================================

function help() {
    Logger.section("Chromium Security Research Debugger - Commands");

    Logger.info("PROCESS IDENTIFICATION:");
    Logger.info("  !proc                 - Show process type (+ site if renderer)");
    Logger.info("  !cmdline              - Show the command line for the current process");
    Logger.info("  !procs                - List all Chrome processes with types");
    Logger.info("  !frames               - List all frames in current renderer process");
    Logger.empty();

    Logger.info("SANDBOX & SECURITY:");
    Logger.info("  !sandbox_all          - Dashboard of sandbox status for ALL processes");
    Logger.info("  !sandbox_state        - Check sandbox status of CURRENT process");
    Logger.info("  !sandbox_token        - Dump process token info and integrity level");
    Logger.empty();

    Logger.info("SECURITY BREAKPOINTS:");
    Logger.info("  !bp_renderer          - Break when renderer processes are launched");
    Logger.info("  !bp_sandbox           - Break when sandbox lowers token");
    Logger.info("  !bp_mojo              - Break on Mojo interface binding");
    Logger.info("  !bp_ipc               - Break on IPC message dispatch");
    Logger.info("  !bp_bad               - Break on mojo::ReportBadMessage (security violations!)");
    Logger.info("  !bp_security          - Break on ChildProcessSecurityPolicy checks");
    Logger.info("  !trace_ipc            - Enable IPC message logging (noisy)");
    Logger.info("  !mojo_interfaces      - List mojo interfaces exposed to current renderer");
    Logger.empty();

    Logger.info("VULNERABILITY HUNTING:");
    Logger.info("  !vuln_hunt            - UAF, type confusion, race condition breakpoints");
    Logger.info("  !heap_info            - PartitionAlloc/V8 heap inspection guide");
    Logger.empty();

    Logger.info("ORIGIN SPOOFING & FUNCTION PATCHING (renderer only):");
    Logger.info("  !spoof(\"url\")                       - Spoof origin by patching memory");
    Logger.info("  !patch(\"FullscreenIsSupported\",\"false\") - Patch function (auto-inlining detection)");
    Logger.empty();

    Logger.info("BLINK DOM HOOKS:");
    Logger.info("  !blink_help           - Show full Blink DOM help");
    Logger.info("  !bp_element           - Break on DOM element creation");
    Logger.info("  !bp_nav               - Break on navigation");
    Logger.info("  !bp_pm                - Break on postMessage");
    Logger.info("  !bp_fetch             - Break on Fetch/XHR");
    Logger.empty();

    Logger.info("PER-FRAME INSPECTION (DOM attrs + C++ members):");
    Logger.info("  !frame_doc(idx)       - Get Document for frame at index");
    Logger.info("  !frame_win(idx)       - Get LocalDOMWindow for frame at index");
    Logger.info("  !frame_origin(idx)    - Get SecurityOrigin for frame at index");
    Logger.info("  !frame_elem(idx,tag)  - List elements by tag name in frame");
    Logger.info("  !frame_getattr(el,a)  - Get DOM attribute OR C++ member (auto-detect)");
    Logger.info("  !frame_setattr(el,a,v)- Set DOM attribute OR C++ member (auto-detect)");
    Logger.info("  !frame_attrs(el)      - List all DOM attributes AND C++ members");
    Logger.empty();

    Logger.info("V8 EXPLOITATION HOOKS:");
    Logger.info("  !v8_help              - Show full V8 help");
    Logger.info("  !bp_compile           - Break on script compilation");
    Logger.info("  !bp_gc                - Break on Garbage Collection");
    Logger.info("  !bp_wasm              - Break on WebAssembly");
    Logger.info("  !bp_jit               - Break on JIT compilation");
    Logger.empty();

    Logger.info("V8 POINTER COMPRESSION:");
    Logger.info("  !v8_cage              - Show V8 cage base address");
    Logger.info("  !decompress(ptr)      - Decompress a 32-bit V8 compressed pointer");
    Logger.empty();

    Logger.info("PROCESS-SPECIFIC EXECUTION (works from any process):");
    Logger.info("  !run_renderer(\"cmd\")      - Run command in all renderer processes");
    Logger.info("  !run_browser(\"cmd\")       - Run command in browser process");
    Logger.info("  !run_gpu(\"cmd\")           - Run command in GPU process");
    Logger.info("  !script_renderer(\"path\")  - Load script in all renderers");
    Logger.info("  !on_attach(\"cmd\")         - Auto-run command when renderers attach");
    Logger.info("  !script_attach(\"path\")    - Auto-load script when renderers attach");
    Logger.empty();

    Logger.info("TIPS:");
    Logger.info("  - Use '|' to switch between processes: |0s, |1s, etc.");
    Logger.info("  - Use '||' to list all debugged processes");
    Logger.info("  - Use '~*k' to get stacks from all threads");
    Logger.empty();
    return "";
}

function cache_clear() {
    ProcessCache.clearAll();
    Logger.info("Global security script cache cleared.");
    return "";
}

/// =============================================================================
/// INTERNAL HELPERS
/// =============================================================================

/// Display cage base info for both V8 and cppgc/Oilpan
function v8_cage_info() {
    Logger.section("Pointer Compression Cages");

    var v8CageBase = MemoryUtils.getV8CageBase();
    if (v8CageBase) {
        Logger.info("V8 Cage Base:     0x" + v8CageBase);
        Logger.info("  Formula: Full = CageBase + SignExtend32(Compressed)");
    } else {
        Logger.info("V8 Cage Base:     (not found)");
    }
    Logger.empty();

    var cppgcCageBase = MemoryUtils.getCppgcCageBase();
    if (cppgcCageBase) {
        Logger.info("Oilpan Cage Base: 0x" + cppgcCageBase);
        Logger.info("  Formula: Full = (SignExtend32(Compressed) << 3) & Base");
    } else {
        Logger.info("Oilpan Cage Base: (not found)");
    }
    Logger.empty();

    Logger.info("Commands:");
    Logger.info("  !decompress <ptr>      - V8 decompression");
    Logger.info("  !decompress_gc <ptr>   - Oilpan/cppgc decompression");
    Logger.empty();

    return "";
}

/// Decompress command - exposed to user
function decompress(ptr) {
    if (isEmpty(ptr)) {
        Logger.showUsage(
            "V8 Pointer Decompression",
            "!decompress <compressed_ptr>",
            ["!decompress 0x12345678"]
        );
        return "";
    }

    var result = MemoryUtils.decompressV8Ptr(ptr);
    if (result) {
        Logger.empty();
        Logger.info("Compressed: " + ptr);
        Logger.info("Full ptr:   0x" + result);
        Logger.empty();
    } else {
        Logger.empty();
        Logger.warn("Could not decompress - cage base not found.");
        Logger.info("Try !v8_cage to see cage info.");
        Logger.empty();
    }
    return "";
}

/// Decompress Oilpan/cppgc pointer - exposed to user
function decompress_gc(ptr) {
    if (isEmpty(ptr)) {
        Logger.showUsage(
            "Oilpan/cppgc Pointer Decompression",
            "!decompress_gc <compressed_ptr>",
            ["!decompress_gc 0x12345678", "Used for blink::Member<T>, cppgc::internal::BasicMember<T>"]
        );
        return "";
    }

    var result = MemoryUtils.decompressCppgcPtr(ptr);

    if (result === null) {
        Logger.empty();
        Logger.warn("Could not decompress - cage base not found.");
        Logger.info("Try !decompress_gc <ptr> <context_address> to derive base from an object.");
        Logger.empty();
    } else {
        Logger.empty();
        Logger.info("Compressed: " + ptr);
        Logger.info("Full ptr:   0x" + result);
        Logger.empty();
    }
    return "";
}


/// Helper: Set multiple breakpoints with a title and description
function set_breakpoints(title, targets, description) {
    BreakpointManager.set(title, targets, description);
    return "";
}


/// Helper: Find the browser process System ID
function get_browser_sysid() {
    var processes = host.currentSession.Processes;
    var pidToSysId = ProcessUtils.getPidToSysIdMap();

    // Remember original process to restore after searching
    var originalId = ProcessUtils.getCurrentSysId();
    var result = null;

    for (var proc of processes) {
        var pid = parseInt(proc.Id.toString());
        if (pidToSysId.has(pid)) {
            var sysId = pidToSysId.get(pid);
            var info = ProcessUtils.getInfoSafe(proc, sysId);
            if (info.type === "browser") {
                result = sysId;
                break;
            }
        }
    }

    // Restore original process context
    try {
        if (originalId !== null && originalId !== 0) {
            SymbolUtils.execute("|" + originalId + "s");
        }
    } catch (e) { }

    return result;
}

/// Helper: Get map of Renderer Client ID -> Site Lock URL
/// Uses GetProcessLock to query each child ID individually.
/// @param browserSysId - WinDbg system ID for the browser process
/// @param childIds - Array of child IDs to query (from command line parsing)
function get_site_locks(browserSysId, childIds) {
    var locks = new Map();
    var ctl = SymbolUtils.getControl();

    if (browserSysId === null || !childIds || childIds.length === 0) {
        return locks;
    }

    // Remember original process to restore after querying
    var originalId = ProcessUtils.getCurrentSysId();


    // Step 1: Get the GetInstance symbol address
    var funcAddr = SymbolUtils.findSymbolAddress("chrome!content::ChildProcessSecurityPolicyImpl::GetInstance");

    if (!funcAddr) {
        // Early exit - will restore in finally
        return locks;
    }

    // Step 2: Find a browser with chrome.dll and accessible singleton
    var instanceAddr = null;
    var workingBrowserId = null;

    ProcessUtils.forEachProcess("browser", function (proc) {
        try {
            // Check if chrome is loaded in this browser
            var lmOut = SymbolUtils.execute("lm m chrome");
            var hasChrome = false;
            for (var lmLine of lmOut) {
                var lmStr = lmLine.toString();
                if (lmStr.indexOf("chrome") !== -1 && lmStr.indexOf("start") === -1 && lmStr.indexOf("Browse") === -1) {
                    hasChrome = true;
                    break;
                }
            }

            if (!hasChrome) return;

            // Use poi() to read the singleton pointer from the correct process context
            var disasm = SymbolUtils.execute("u " + funcAddr + " L15");
            for (var dLine of disasm) {
                var dLineStr = dLine.toString();
                var addrMatch = dLineStr.match(/\(([0-9a-fA-F`]+)\)\]/);
                if (addrMatch) {
                    var addrStr = addrMatch[1].replace(/`/g, "");
                    try {
                        var poiOut = SymbolUtils.execute("? poi(0x" + addrStr + ")");
                        for (var poiLine of poiOut) {
                            var poiMatch = poiLine.toString().match(/= ([0-9a-fA-F`]+)/);
                            if (poiMatch) {
                                var ptrVal = poiMatch[1].replace(/`/g, "");
                                if (isValidPointer(ptrVal) && ptrVal.length > MIN_PTR_VALUE_LENGTH) {
                                    var candidateAddr = "0x" + ptrVal;

                                    // Verify memory is accessible
                                    var memoryOk = false;
                                    try {
                                        var dqsCheck = SymbolUtils.execute("dqs " + candidateAddr + " L1");
                                        for (var dqsLine of dqsCheck) {
                                            var dqsStr = dqsLine.toString();
                                            if (dqsStr.indexOf("????????") === -1 && dqsStr.indexOf(ptrVal.substring(0, 8)) !== -1) {
                                                memoryOk = true;
                                            }
                                        }
                                    } catch (e) { }

                                    if (memoryOk) {
                                        instanceAddr = candidateAddr;
                                        workingBrowserId = proc.sysId;
                                        return false; // Break loop
                                    }
                                }
                            }
                        }
                    } catch (e) { }
                }
            }
        } catch (e) { }
        if (instanceAddr) return false;
    });

    if (!instanceAddr) {
        return locks;
    }

    var originalId = host.currentProcess.Id;

    try {
        // Step 3: Switch to browser context for dx command
        try {
            if (workingBrowserId !== null) {
                SymbolUtils.execute("|" + workingBrowserId + "s");
            }
        } catch (e) { }

        // Step 4: Enumerate all entries in security_states_ map
        // Use dx with Select to extract only the properties we need (Child ID and URL)
        var enumCmd = "dx -r2 ((chrome!content::ChildProcessSecurityPolicyImpl*)" + instanceAddr +
            ")->security_states_.security_state_.Select(e => new { Id = e.first, Url = e.second->process_lock_.site_info_.site_url_.spec_ })";

        var enumOutput = ctl.ExecuteCommand(enumCmd);

        var currentChildId = null;

        for (var line of enumOutput) {
            var lineStr = line.toString();

            var idMatch = lineStr.match(/Id\s*:\s*(\d+)/);
            var urlMatch = lineStr.match(/Url\s*:\s*"(.*)"/);

            if (idMatch) {
                currentChildId = idMatch[1];
            }

            if (urlMatch && currentChildId !== null) {
                var url = urlMatch[1];
                if (url) {
                    locks.set(currentChildId.toString(), url);
                    currentChildId = null;
                }
            }
        }
        return locks;

    } finally {
        // Always restore original process context
        try {
            if (originalId !== null) {
                SymbolUtils.execute("|" + originalId + "s");
            }
        } catch (e) { }
    }
}


/// =============================================================================
/// PROCESS IDENTIFICATION
/// =============================================================================

/// Get the command line for the current process (alias for CommandLineUtils.get)
var getCommandLine = CommandLineUtils.get.bind(CommandLineUtils);

/// Identify the current Chrome process type (and site if renderer)
function chrome_process_type() {
    var cmdLine = getCommandLine();
    var info = ProcessUtils.parseInfoWithFallback(cmdLine);

    var pid = host.currentProcess.Id;
    var pidVal = parseInt(pid.toString());

    Logger.empty();
    Logger.info("PID:  " + pidVal);
    Logger.info("Type: " + info.type);
    if (info.extra) {
        Logger.info(" (" + info.extra + ")");
    }
    Logger.empty();

    // If renderer, also show the locked site
    if (info.type === "renderer") {
        try {
            renderer_site(); // Prints site info directly
        } catch (e) { Logger.debug("renderer_site failed: " + e.message); }
    }

    return info.type;
}

/// Display parsed command line switches
function chrome_cmdline() {
    var cmdLine = getCommandLine();

    if (isEmpty(cmdLine)) {
        return "Unable to read command line (process may be sandboxed/locked)";
    }

    Logger.section("Chrome Command Line");

    // Parse switches
    var switches = CommandLineUtils.parseSwitches(cmdLine);

    // Categorize and display
    var securitySwitches = ["no-sandbox", "disable-web-security", "disable-site-isolation-trials",
        "site-per-process", "disable-features", "enable-features"];
    var processSwitches = ["type", "renderer-client-id", "utility-sub-type", "field-trial-handle"];

    Logger.info("Security-Relevant Switches:");
    Logger.info("-".repeat(60));
    Logger.displaySwitches(switches, securitySwitches);

    Logger.info("Process Switches:");
    Logger.info("-".repeat(60));
    Logger.displaySwitches(switches, processSwitches);

    Logger.info("Full command line:");
    Logger.info(cmdLine.substring(0, CMDLINE_DISPLAY_LENGTH) + "...");
    Logger.empty();

    return "";
}


/// List all Chrome processes in the debug session with site isolation info
function chrome_processes() {
    Logger.section("Chrome Processes in Debug Session");

    var ctl = SymbolUtils.getControl();

    // 1. Get List using helper
    var processInfoList = ProcessUtils.getList();
    var pidToSysId = ProcessUtils.getPidToSysIdMap();

    // Remember which process we're currently in
    var originalId = ProcessUtils.getCurrentSysId();

    // 2. Find browser process
    var browserSysId = null;
    var browserCmdLine = "";

    for (var pInfo of processInfoList) {
        if (pInfo.type === "browser") {
            browserSysId = pInfo.sysId;
            browserCmdLine = pInfo.cmdLine;
            break;
        }
    }

    // 3. Collect all child IDs for site lock lookup
    var childIds = [];
    for (var pInfo of processInfoList) {
        if (pInfo.clientId) {
            childIds.push(parseInt(pInfo.clientId));
        }
    }

    // 4. Get Site Isolation Runtime State (from browser process)
    var childIdToSite = get_site_locks(browserSysId, childIds);

    // 5. Display site isolation configuration
    var sitePerProcess = browserCmdLine.indexOf("--site-per-process") !== -1;
    var disableSI = browserCmdLine.indexOf("--disable-site-isolation") !== -1;
    var isolateOrigins = browserCmdLine.indexOf("--isolate-origins") !== -1;

    Logger.info("[Site Isolation] ");
    if (disableSI) {
        Logger.info("DISABLED (--disable-site-isolation)");
    } else if (sitePerProcess) {
        Logger.info("ENABLED (--site-per-process)");
    } else if (isolateOrigins) {
        Logger.info("PARTIAL (--isolate-origins)");
    } else {
        Logger.info("Default");
    }
    Logger.empty();

    // 6. Display process list with site info inline
    Logger.info("  ID    PID       Type            Site / Extra Info");
    Logger.info("  " + "-".repeat(70));

    for (var pInfo of processInfoList) {
        var displayExtra = pInfo.extra;

        // For renderers, show site URL if available
        if (pInfo.type === "renderer" && pInfo.clientId) {
            var site = childIdToSite.get(pInfo.clientId);
            if (site && site !== "(no lock)") {
                displayExtra = site;
            } else if (pInfo.extra) {
                displayExtra = pInfo.extra;
            }
            // Check for spoofing
            if (g_spoofMap.has(pInfo.clientId)) {
                displayExtra += " [SPOOFED: " + g_spoofMap.get(pInfo.clientId).currentUrl + "]";
            }
        }

        var sysIdStr = pInfo.sysId !== null ? pInfo.sysId.toString() : "?";
        Logger.info("  " + sysIdStr.padEnd(6) +
            pInfo.pid.toString().padEnd(10) +
            pInfo.type.padEnd(16) +
            displayExtra);
    }

    // Switch back to original process
    try {
        if (originalId !== null && originalId !== 0) ctl.ExecuteCommand("|" + originalId + "s");
    } catch (e) { }

    Logger.empty();
    Logger.info("Use |<ID>s to switch to a process (e.g., |1s)");
    Logger.empty();
    return "";
}

/// Show the locked site for the current renderer process
function renderer_site() {
    var ctl = SymbolUtils.getControl();

    // Get current process info
    var cmdLine = getCommandLine();
    var info = ProcessUtils.parseInfoWithFallback(cmdLine);

    if (info.type !== "renderer") {
        Logger.info("  Not a renderer process (current: " + info.type + ")");
        return "";
    }

    // Get client ID from command line or extra info
    var clientId = null;
    if (cmdLine) {
        var clientMatch = cmdLine.match(/--renderer-client-id=(\d+)/);
        if (clientMatch) clientId = clientMatch[1];
    }

    if (!clientId && info.extra) {
        var extraMatch = info.extra.match(/client=(\d+)/);
        if (extraMatch) clientId = extraMatch[1];
    }

    if (!clientId) {
        Logger.info("  Unable to determine renderer client ID");
        return "";
    }

    // Remember current process
    var originalId = ProcessUtils.getCurrentSysId();

    // Find browser process
    var browserSysId = get_browser_sysid();

    if (browserSysId === null) {
        Logger.info("  Unable to find browser process");
        return "";
    }

    // Query security state via helper
    var site = "(unknown)";
    try {
        var locks = get_site_locks(browserSysId, [parseInt(clientId)]);
        if (locks.has(clientId)) {
            site = locks.get(clientId);
        }
    } catch (e) {
        site = "(error: " + e.message + ")";
    }

    // Switch back
    try {
        ctl.ExecuteCommand("|" + originalId + "s");
    } catch (e) { }

    Logger.empty();
    Logger.info("  Renderer Client ID: " + clientId);
    if (g_spoofMap.has(clientId)) {
        Logger.info("  Locked Site:        " + site + " (Browser)");
        Logger.info("  Spoofed Site:       " + g_spoofMap.get(clientId).currentUrl + " (Active)");
    } else {
        Logger.info("  Locked Site:        " + site);
    }
    Logger.empty();

    return site;
}

/// =============================================================================
/// MOJO INTERFACE INTROSPECTION
/// =============================================================================

/// List mojo interfaces exposed to the current renderer process
/// Requires running from a renderer, switches to browser to read BinderMap
function mojo_interfaces() {
    Logger.section("Mojo Interfaces Exposed to Renderer");

    var ctl = SymbolUtils.getControl();

    // 1. Verify we're in a renderer
    var cmdLine = getCommandLine();
    var info = ProcessUtils.parseInfoWithFallback(cmdLine);

    if (info.type !== "renderer") {
        Logger.warn("This command must be run from a renderer process.");
        Logger.info("Current process type: " + info.type);
        Logger.empty();
        Logger.info("Use !procs to list processes, then |<id>s to switch to a renderer.");
        Logger.empty();
        return "";
    }

    // 2. Get renderer client ID
    var clientId = null;
    if (cmdLine) {
        var clientMatch = cmdLine.match(/--renderer-client-id=(\d+)/);
        if (clientMatch) clientId = clientMatch[1];
    }

    if (!clientId) {
        Logger.warn("Could not determine renderer client ID.");
        Logger.empty();
        return "";
    }

    Logger.info("Renderer Client ID: " + clientId);
    Logger.empty();

    // 3. Remember current process to restore later  
    var originalId = ProcessUtils.getCurrentSysId();

    // Save renderer PID BEFORE switching context
    var rendererPid = host.currentProcess.Id;

    // 4. Find browser process
    var browserSysId = get_browser_sysid();
    if (browserSysId === null) {
        Logger.warn("Could not find browser process.");
        Logger.empty();
        return "";
    }

    var interfaces = [];

    try {
        // 5. Switch to browser process
        SymbolUtils.execute("|" + browserSysId + "s");

        Logger.info("Querying interface binders from browser process...");
        Logger.info("Filtering for renderer client ID: " + clientId + " (PID: " + rendererPid + ")");
        Logger.empty();

        // 6. Find RenderFrameHostImpl for this renderer and read its binder maps
        // Structure: g_routing_id_frame_map -> flat_hash_map<GlobalRenderFrameHostId, RenderFrameHostImpl*>
        // GlobalRenderFrameHostId contains child_id (ChildProcessId) which maps to renderer-client-id
        // RenderFrameHostImpl -> broker_holder_ -> broker_ -> binder_map_ -> binders_

        // Use SymbolUtils for cached symbol lookup
        var frameMapAddr = SymbolUtils.findSymbolAddress("chrome!*g_routing_id_frame_map*");

        if (!frameMapAddr) {
            Logger.warn("Could not find g_routing_id_frame_map symbol.");
            Logger.info("Try: .reload /f chrome.dll");
            Logger.empty();
            return "";
        }

        Logger.info("g_routing_id_frame_map (LazyInstance) at: 0x" + frameMapAddr);

        // Read the LazyInstance::private_instance_ pointer to get actual map address
        var mapPtr = null;
        try {
            var lazyAddrVal = BigInt("0x" + frameMapAddr);
            var ptrValue = host.memory.readMemoryValues(host.parseInt64(lazyAddrVal.toString(16), 16), 1, 8)[0];
            mapPtr = ptrValue.toString(16);
        } catch (e) {
            Logger.warn("Failed to read LazyInstance pointer: " + e.message);
        }

        if (!mapPtr || mapPtr === "0") {
            Logger.warn("LazyInstance not initialized or map pointer is null.");
            Logger.empty();
            return "";
        }

        Logger.info("RoutingIDFrameMap at: 0x" + mapPtr);
        Logger.empty();

        // Enumerate the flat_hash_map to find RenderFrameHostImpl pointers
        // Filter to only those matching our renderer's client ID
        var rfhAddresses = [];
        try {
            // Cast the actual map pointer (not the LazyInstance wrapper)
            var dxCmd = "dx -r5 (*((content::`anonymous namespace'::RoutingIDFrameMap*)0x" + mapPtr + "))";
            var dxOutput = ctl.ExecuteCommand(dxCmd);

            var currentProcessId = null;
            for (var line of dxOutput) {
                var lineStr = line.toString();

                // Look for child_id in the GlobalRenderFrameHostId key
                // Format varies - try multiple patterns
                var processIdMatch = lineStr.match(/child_id_.*?id_\s*[=:]\s*(\d+)/i) ||
                    lineStr.match(/child_id\s*[=:]\s*(\d+)/i) ||
                    lineStr.match(/process_id.*?[=:]\s*(\d+)/i);
                if (processIdMatch) {
                    currentProcessId = processIdMatch[1];
                }

                // Look for RenderFrameHostImpl* values 
                var rfhMatch = lineStr.match(/second\s*[=:]\s*(0x[0-9a-fA-F`]+)/i) ||
                    lineStr.match(/RenderFrameHostImpl\s*\*?\s*[=:]\s*(0x[0-9a-fA-F`]+)/i);
                if (rfhMatch) {
                    var rfhAddr = rfhMatch[1].replace(/`/g, "");

                    // Filter: only include RFHIs from our renderer (matching client ID)
                    if (rfhAddr !== "0x0" && rfhAddr !== "0" && currentProcessId === clientId) {
                        rfhAddresses.push(rfhAddr);
                    }
                    currentProcessId = null; // Reset for next entry
                }
            }
        } catch (e) {
            // Map enumeration failed
        }

        Logger.info("Found " + rfhAddresses.length + " RenderFrameHostImpl(s) for this renderer");
        Logger.empty();

        // For each RFH, read the broker's binder maps
        var foundInterfaces = new Map();

        for (var rfhAddr of rfhAddresses) {
            try {
                // Read broker binder map interfaces
                // Path: rfh->broker_holder_->broker_->binder_map_->binders_

                // Use deep recursion to find all interface names in the broker structure
                var binderCmd = "dx -r6 ((content::RenderFrameHostImpl*)" + rfhAddr + ")->broker_holder_";
                var binderOutput = ctl.ExecuteCommand(binderCmd);

                for (var bLine of binderOutput) {
                    var bStr = bLine.toString();

                    // Capture ANY quoted string containing ".mojom." - don't be restrictive
                    // This ensures we don't miss interfaces with unusual naming patterns
                    var matches = bStr.match(/"([^"]*\.mojom\.[^"]+)"/g);
                    if (matches) {
                        for (var m of matches) {
                            var ifaceName = m.replace(/"/g, "");
                            foundInterfaces.set(ifaceName, true);
                        }
                    }
                }

            } catch (rfhErr) {
                // May fail for some RFHIs, continue
            }
        }

        // Convert Map keys to array
        interfaces = Array.from(foundInterfaces.keys()).sort();

    } finally {
        // 7. Always restore original process context
        try {
            if (originalId !== null && originalId !== 0) {
                SymbolUtils.execute("|" + originalId + "s");
            }
        } catch (e) { }
    }

    // 8. Display results
    if (interfaces.length === 0) {
        Logger.info("No interfaces found.");
        Logger.empty();
        return "";
    }

    Logger.info("Found " + interfaces.length + " mojo interface(s) exposed to renderer:");
    Logger.info("-".repeat(70));
    Logger.empty();

    // Group by namespace
    var byNamespace = new Map();
    for (var iface of interfaces) {
        var dotIdx = iface.lastIndexOf(".");
        var ns = dotIdx > 0 ? iface.substring(0, dotIdx) : "(unknown)";
        if (!byNamespace.has(ns)) {
            byNamespace.set(ns, []);
        }
        byNamespace.get(ns).push(iface);
    }

    // Display grouped
    for (var entry of byNamespace) {
        var namespace = entry[0];
        var ifaces = entry[1];

        Logger.info("  " + namespace + " (" + ifaces.length + " interfaces):");

        for (var iface of ifaces) {
            var className = iface.substring(iface.lastIndexOf(".") + 1);
            Logger.info("    - " + className);
        }
        Logger.empty();
    }

    Logger.info("Total: " + interfaces.length + " interfaces");
    Logger.empty();

    Logger.info("Chromium Source Reference:");
    Logger.info("  https://source.chromium.org/chromium/chromium/src/+/main:content/browser/browser_interface_binders.cc");
    Logger.empty();

    Logger.info("To find .mojom file for an interface:");
    Logger.info("  https://source.chromium.org/search?q=<interface_name>.mojom");
    Logger.empty();

    return "";
}

/// =============================================================================
/// FUNCTION PATCHING & ORIGIN SPOOFING
/// =============================================================================

/// Patch a function to return a specific value
/// Usage: !patch_function "FunctionName" "return_value"
function patch_function(funcName, returnValue) {
    Logger.section("Patch Function");

    if (isEmpty(funcName)) {
        Logger.info("  Usage: !patch(\"ClassName::FunctionName\",\"value\")");
        Logger.info("  Values: true, false, 0, 1, 0x1234, or any number");
        Logger.info("  Examples:");
        Logger.info("    !patch(\"FullscreenIsSupported\",\"false\")");
        Logger.info("    !patch(\"IsFeatureEnabled\",\"0\")");
        Logger.info("    !patch(\"*CanAccess*\",\"true\")");
        Logger.empty();
        Logger.info("  Auto-detects inlining and patches callers if needed.");
        Logger.empty();
        return "";
    }

    // Architecture Check
    try {
        var ctl = SymbolUtils.getControl();
        var session = host.currentSession;
        // Check effective machine. 0x8664 is AMD64/x64.
        // We can also check attributes on current process or target.
        // Simple heuristic: check pointer size or .effmach
        var isX64 = false;
        var out = ctl.ExecuteCommand(".effmach");
        for (var line of out) {
            if (line.toString().toLowerCase().indexOf("x64") !== -1 || line.toString().indexOf("AMD64") !== -1) {
                isX64 = true;
                break;
            }
        }

        if (!isX64) {
            Logger.error("Patching is currently only supported on x64 architectures.");
            Logger.error("Your current effective machine does not appear to be x64.");
            return "";
        }
    } catch (e) {
        // Fallback: proceed with caution if check fails
    }

    // ctl already declared above in architecture check, reuse it

    // Parse return value - support true/false/hex/decimal
    var retVal = 0;
    if (isEmpty(returnValue)) {
        retVal = 0;
    } else if (typeof returnValue === "boolean") {
        retVal = returnValue ? 1 : 0;
    } else if (returnValue === "true" || returnValue === "TRUE" || returnValue === "True") {
        retVal = 1;
    } else if (returnValue === "false" || returnValue === "FALSE" || returnValue === "False") {
        retVal = 0;
    } else if (returnValue.toString().startsWith("0x") || returnValue.toString().startsWith("0X")) {
        retVal = parseInt(returnValue, 16);
    } else {
        retVal = parseInt(returnValue) || 0;
    }

    // String Support: If returnValue is a string that wasn't parsed as hex/bool
    // or if the user explicitly provided a quoted string that resulted in 0/NaN
    if (typeof returnValue === "string" && !returnValue.toString().startsWith("0x") &&
        returnValue !== "true" && returnValue !== "false" && isNaN(parseInt(returnValue))) {

        Logger.info("  Detected string input: \"" + returnValue + "\"");
        var strLen = returnValue.length;
        // Allocate memory for the string (plus null terminator)
        // If 64-bit, we might want to align, but dvalloc usually page-aligns or 16-byte aligns.
        // We'll treat it as a raw C-string (const char*).
        var allocAddr = MemoryUtils.alloc(strLen + 1);

        if (allocAddr) {
            Logger.info("  Allocated memory for string at: 0x" + allocAddr);

            // Write string bytes
            var bytes = [];
            for (var i = 0; i < strLen; i++) {
                bytes.push(returnValue.charCodeAt(i) & 0xFF);
            }
            bytes.push(0); // Null terminator

            MemoryUtils.writeMemory(allocAddr, bytes);

            // Set return value to the address of the string
            retVal = BigInt("0x" + allocAddr);
            Logger.info("  Patching function to return pointer: 0x" + allocAddr);
        } else {
            Logger.error("  Failed to allocate memory for string. Aborting patch.");
            return "";
        }
    }

    Logger.info("  Return value: " + retVal.toString(16) + (retVal === 0 ? " (false)" : retVal === 1 ? " (true)" : ""));
    Logger.empty();

    try {
        var symbols = [];

        // If it contains '!' it's already a full symbol - resolve its address
        if (funcName.indexOf("!") !== -1) {
            symbols = SymbolUtils.findSymbols(funcName);
        } else {
            // Search for matching symbols
            Logger.info("  Searching for: *" + funcName + "*");
            Logger.empty();

            var patterns = [
                "chrome!*" + funcName + "*",
                "blink_core!*" + funcName + "*",
                "blink_modules!*" + funcName + "*"
            ];

            for (var pattern of patterns) {
                var found = SymbolUtils.findSymbols(pattern);
                for (var f of found) {
                    // Avoid duplicates
                    var exists = false;
                    for (var s of symbols) {
                        if (s.addr === f.addr) { exists = true; break; }
                    }
                    if (!exists) symbols.push(f);
                }
            }
        }

        if (symbols.length === 0) {
            Logger.info("  No matching symbols found.");
            Logger.empty();
            return "";
        }

        Logger.info("  Found " + symbols.length + " symbol(s):");
        Logger.empty();

        // Direct code patching: write "mov eax, VALUE; ret" at function start
        // This is more reliable than breakpoints for getters/inlined code
        // x64: mov eax, imm32 = B8 xx xx xx xx; ret = C3 (6 bytes total)
        // For 0: xor eax,eax = 31 C0; ret = C3 (3 bytes)

        var count = 0;
        for (var sym of symbols) {
            if (count >= MAX_PATCHES) {
                Logger.info("  ... (limited to " + MAX_PATCHES + ")");
                break;
            }
            try {
                var funcAddr = sym.addr;

                // Write patch bytes directly to function
                // mov eax, VALUE (B8 + 4 bytes little-endian) then ret (C3)
                if (retVal === 0) {
                    // xor eax, eax; ret = 31 C0 C3
                    MemoryUtils.writeMemory(funcAddr, [0x31, 0xC0, 0xC3]);
                } else if (retVal === 1) {
                    // mov eax, 1; ret = B8 01 00 00 00 C3
                    MemoryUtils.writeMemory(funcAddr, [0xB8, 0x01, 0x00, 0x00, 0x00, 0xC3]);
                } else if (typeof retVal === "bigint") {
                    // mov rax, IMM64; ret = 48 B8 ... C3
                    var bytes = [0x48, 0xB8];
                    for (var i = 0; i < 8; i++) {
                        bytes.push(Number((retVal >> BigInt(i * 8)) & 0xFFn));
                    }
                    bytes.push(0xC3);
                    MemoryUtils.writeMemory(funcAddr, bytes);
                } else {
                    // mov eax, VALUE; ret
                    // Use unsigned right shift (>>>) to handle large positive values correctly
                    var b0 = retVal & 0xFF;
                    var b1 = (retVal >>> 8) & 0xFF;
                    var b2 = (retVal >>> 16) & 0xFF;
                    var b3 = (retVal >>> 24) & 0xFF;
                    MemoryUtils.writeMemory(funcAddr, [0xB8, b0, b1, b2, b3, 0xC3]);
                }

                Logger.info("  [PATCHED] " + sym.name + " @ 0x" + funcAddr);
                count++;
            } catch (e) {
                Logger.error("  [FAILED] " + sym.name + " @ 0x" + sym.addr + ": " + e.message);
            }
        }

        Logger.empty();
        Logger.info("  " + count + " function(s) patched -> return " + retVal);
        Logger.info("  NOTE: Patches are direct code modifications (not breakpoints)");
        Logger.info("  TIP: V8 caches results - navigate to a new page to see effect in JS");
        Logger.empty();

        // Auto inlining detection: analyze if function might be inlined
        // by looking for callers that contain calls to related functions
        if (count > 0 && funcName.indexOf("!") === -1) {
            // Extract short name for caller search
            var shortName = funcName;
            if (shortName.indexOf("::") !== -1) {
                var parts = shortName.split("::");
                shortName = parts[parts.length - 1];
            }

            // Look for V8 accessor callbacks that might inline this function
            var callerPatterns = [
                "chrome!*" + shortName + "*AttributeGetCallback*",
                "chrome!*" + shortName + "*Callback*"
            ];

            var callers = [];
            for (var callerPattern of callerPatterns) {
                var foundCallers = SymbolUtils.findSymbols(callerPattern);
                for (var caller of foundCallers) {
                    // Check if this caller is different from what we patched
                    var isDifferent = true;
                    for (var patched of symbols) {
                        if (patched.addr === caller.addr) { isDifferent = false; break; }
                    }
                    if (isDifferent) {
                        callers.push(caller);
                    }
                }
            }

            if (callers.length > 0) {
                Logger.info("  Found " + callers.length + " potential caller(s) that may inline this function.");
                Logger.info("  If patch doesn't work, try: !patch(\"<caller_name>\",\"" + retVal + "\")");
                for (var c = 0; c < Math.min(callers.length, MAX_CALLER_DISPLAY); c++) {
                    Logger.info("    - " + callers[c].name);
                }
                Logger.empty();
            }
        }

    } catch (e) {
        Logger.error("Error: " + e.message);
    }

    return "";
}

// _ensureExitHandler moved below spoof_origin to consolidate duplicate definitions

/// Helper: Handler for process exit (runs on every process exit)
function on_process_exit() {
    // This runs frequently, so keep it lightweight and silent unless action is taken
    try {
        if (g_spoofMap.size === 0) return;

        // Get current PID
        var currentPid = host.currentProcess.Id;

        // Check if this PID is in our spoof map
        var idsToRemove = [];
        for (var entry of g_spoofMap) {
            var clientId = entry[0];
            var activeSpoof = entry[1];
            if (activeSpoof.pid === currentPid) {
                idsToRemove.push(clientId);
            }
        }

        // Cleanup
        for (var id of idsToRemove) {
            var spoof = g_spoofMap.get(id);
            g_spoofMap.delete(id);
            Logger.info("\n  [Cleanup] Spoof state cleaned up for PID " + currentPid + " (Url: " + spoof.currentUrl + ")");
        }

        // Cache Cleanup: Remove broken/stale cache entries for this PID to prevent PID reuse issues
        ProcessCache.clearPid(currentPid);

    } catch (e) {
        // Suppress errors in exit handler to avoid spam
    }
}

/// Usage: !spoof_origin "https://target.com"
/// Generic memory string replacement and origin spoofing
/// Modes:
///   - "origin" (default): Auto-detect current origin, replace host and scheme
///   - "host": Replace only the host component
///   - "scheme": Replace only the scheme/protocol component
///   - "full": Replace the full origin URL (scheme://host)
///   - "string": Generic string replacement (requires searchStr and replaceStr)
///   - "unicode": Generic Unicode string replacement
/// @param arg1 - Target URL (for origin modes) or search string (for string mode)
/// @param arg2 - Optional: replacement string (for string mode) or mode override
/// @param arg3 - Optional: mode when arg2 is replacement string
function spoof_origin(arg1, arg2, arg3) {
    Logger.section("Memory String Replacement");

    var ctl = SymbolUtils.getControl();

    // Determine mode and arguments
    var mode = "origin";  // Default mode
    var targetUrl = null;
    var searchStr = null;
    var replaceStr = null;

    // Parse arguments based on what was provided
    if (isEmpty(arg1)) {
        // No arguments - show usage
        Logger.info("  Usage:");
        Logger.empty();
        Logger.info("  Origin Spoofing (default):");
        Logger.info("    !spoof(\"https://target.com\")              - Spoof to target origin");
        Logger.info("    !spoof(\"https://target.com\", \"host\")      - Replace host only");
        Logger.info("    !spoof(\"https://target.com\", \"scheme\")    - Replace scheme only");
        Logger.info("    !spoof(\"https://target.com\", \"full\")      - Replace full origin URL");
        Logger.empty();
        Logger.info("  Generic String Replacement:");
        Logger.info("    !spoof(\"oldstring\", \"newstring\", \"string\")  - Replace ASCII string");
        Logger.info("    !spoof(\"oldstring\", \"newstring\", \"unicode\") - Replace Unicode string");
        Logger.empty();
        Logger.info("  Examples:");
        Logger.info("    !spoof(\"https://evil.com\")                - Spoof origin to evil.com");
        Logger.info("    !spoof(\"example.com\", \"evil.com\", \"string\") - Replace all 'example.com'");
        Logger.info("    !spoof(\"secret\", \"public\", \"string\")      - Replace 'secret' with 'public'");
        Logger.empty();
        Logger.info("  Note: Replacement must be <= search length to prevent buffer overflow.");
        Logger.empty();
        return "";
    }

    // Clean up arg1
    arg1 = String(arg1).replace(/"/g, "");

    // Determine mode based on arguments
    if (arg3 !== undefined && arg3 !== null) {
        // Three arguments: spoof(search, replace, mode)
        mode = String(arg3).replace(/"/g, "").toLowerCase();
        searchStr = arg1;
        replaceStr = String(arg2).replace(/"/g, "");
    } else if (arg2 !== undefined && arg2 !== null) {
        // Two arguments - could be (target, mode) or (search, replace)
        var arg2Clean = String(arg2).replace(/"/g, "");
        var knownModes = ["origin", "host", "scheme", "full", "string", "unicode"];
        if (knownModes.indexOf(arg2Clean.toLowerCase()) !== -1) {
            // (target, mode) - e.g. !spoof("target", "host")
            mode = arg2Clean.toLowerCase();
            targetUrl = arg1;
        } else {
            // (search, replace) - e.g. !spoof("search", "replace")
            mode = "string";
            searchStr = arg1;
            replaceStr = arg2Clean;
        }
    } else {
        // One argument: target URL for origin mode
        targetUrl = arg1;
    }

    // Handle string/unicode replacement modes
    if (mode === "string" || mode === "unicode") {
        if (!searchStr || !replaceStr) {
            Logger.error("String mode requires both search and replace strings.");
            Logger.info("  Usage: !spoof(\"search\", \"replace\", \"string\")");
            return "";
        }

        Logger.info("  Mode: " + (mode === "unicode" ? "Unicode" : "ASCII") + " String Replacement");
        Logger.info("  Search:  \"" + searchStr + "\" (len=" + searchStr.length + ")");
        Logger.info("  Replace: \"" + replaceStr + "\" (len=" + replaceStr.length + ")");
        Logger.empty();

        var isUnicode = (mode === "unicode");
        var patched = _patchStringInMemory(ctl, searchStr, replaceStr, "String", isUnicode);

        Logger.empty();
        Logger.info("  Total: Patched " + patched + " locations");
        Logger.empty();
        return "";
    }

    // Origin-based modes (origin, host, scheme, full)
    if (!targetUrl) {
        Logger.error("Target URL required for origin mode.");
        return "";
    }

    // Normalize target
    var targetOrigin = targetUrl.replace(/\/+$/, "");

    // Parse target into scheme and host
    var targetMatch = targetOrigin.match(/^([a-zA-Z][a-zA-Z0-9+.-]*):\/\/(.+)$/);
    if (!targetMatch) {
        Logger.warn("Invalid URL format. Use scheme://host (e.g., https://example.com)");
        return "";
    }
    var targetScheme = targetMatch[1];
    var targetHost = targetMatch[2];

    // Get current origin from renderer_site
    Logger.info("  Mode: " + mode.charAt(0).toUpperCase() + mode.slice(1));
    Logger.info("  Target: " + targetOrigin);
    Logger.info("  Detecting current origin...");

    var trueOrigin = "";
    var clientId = null;
    try {
        var cmdLine = getCommandLine();
        var clientMatch = cmdLine ? cmdLine.match(/--renderer-client-id=(\d+)/) : null;
        if (clientMatch) clientId = clientMatch[1];

        var site = renderer_site();
        if (site && site !== "" && site !== "(unknown)") {
            trueOrigin = site.replace(/\/+$/, "");
        }
    } catch (e) { }

    if (!trueOrigin) {
        Logger.empty();
        Logger.warn("Could not detect current origin.");
        Logger.info("Make sure you're in a renderer with a loaded page.");
        Logger.info("For generic string replacement, use: !spoof(\"old\", \"new\", \"string\")");
        Logger.empty();
        return "";
    }

    // Determine current values (may have been spoofed before)
    var currentOrigin = trueOrigin;
    if (clientId && g_spoofMap.has(clientId)) {
        currentOrigin = g_spoofMap.get(clientId).currentUrl;
        Logger.info("  [State] Active spoof detected: " + currentOrigin);
    }

    // Parse current origin
    var currentMatch = currentOrigin.match(/^([a-zA-Z][a-zA-Z0-9+.-]*):\/\/(.+)$/);
    if (!currentMatch) {
        Logger.warn("Could not parse current origin: " + currentOrigin);
        return "";
    }
    var currentScheme = currentMatch[1];
    var currentHost = currentMatch[2];

    if (currentOrigin === targetOrigin) {
        Logger.info("  Target matches current origin. No changes needed.");
        return "";
    }

    Logger.info("  Current: " + currentOrigin);
    Logger.empty();

    var totalPatched = 0;

    // Apply patches based on mode
    switch (mode) {
        case "scheme":
            if (currentScheme !== targetScheme) {
                totalPatched += _patchStringInMemory(ctl, currentScheme, targetScheme, "Scheme", false);
            } else {
                Logger.info("  Schemes are identical, skipping");
            }
            break;

        case "host":
            if (currentHost !== targetHost) {
                totalPatched += _patchStringInMemory(ctl, currentHost, targetHost, "Host", false);
            } else {
                Logger.info("  Hosts are identical, skipping");
            }
            break;

        case "full":
            if (currentOrigin !== targetOrigin) {
                totalPatched += _patchStringInMemory(ctl, currentOrigin, targetOrigin, "Full Origin", false);
            }
            break;

        case "origin":
        default:
            // Mode: Origin (Updates everything to match target)

            // 1. Patch Full Origin (Scheme://Host) - High priority
            // Finding the full string is most likely to find the "Owner" StringImpl
            // which has the correct length header.
            if (currentOrigin !== targetOrigin) {
                totalPatched += _patchStringInMemory(ctl, currentOrigin, targetOrigin, "Full Origin (ASCII)", false);
            }

            // 2. Patch Scheme
            if (currentScheme !== targetScheme) {
                totalPatched += _patchStringInMemory(ctl, currentScheme, targetScheme, "Scheme (ASCII)", false);
            } else {
                Logger.info("  Schemes identical (" + currentScheme + "), skipping");
            }

            // 3. Patch Host
            if (currentHost !== targetHost) {
                totalPatched += _patchStringInMemory(ctl, currentHost, targetHost, "Host (ASCII)", false);
            } else {
                Logger.info("  Hosts identical (" + currentHost + "), skipping");
            }
            break;
    }

    Logger.empty();
    Logger.info("  Total: Patched " + totalPatched + " locations");
    Logger.empty();

    // Update state for origin-based modes
    if (clientId && totalPatched > 0) {
        if (targetOrigin === trueOrigin) {
            Logger.info("  Reverted to true origin. Clearing spoof state.");
            g_spoofMap.delete(clientId);
        } else {
            var currentPid = host.currentProcess.Id;
            g_spoofMap.set(clientId, { currentUrl: targetOrigin, pid: currentPid });
            _ensureExitHandler();
        }
    } else if (clientId && totalPatched === 0 && targetOrigin !== trueOrigin) {
        Logger.warn("  No patches applied. Spoof state not updated.");
    }

    return "";
}

/// Helper: Register process exit handler for cleanup
/// Uses both debugger exception handler (global) and per-PID event handler
function _ensureExitHandler() {
    var pid = host.currentProcess.Id;

    // Register global debugger exception handler once
    if (!g_exitHandlerRegistered) {
        try {
            var ctl = SymbolUtils.getControl();
            // Register handler for Process Exit (epr) exception
            var cmd = "sxe -c \"!on_process_exit; g\" epr";
            ctl.ExecuteCommand(cmd);
            g_exitHandlerRegistered = true;
            Logger.info("  [Setup] Registered global exit handler for cleanup.");
        } catch (e) {
            Logger.debug("Failed to register global exit handler: " + e.message);
        }
    }

    // Register per-PID handler if not already registered
    if (g_registeredPids.has(pid)) return;

    try {
        host.currentProcess.on("exit", function () {
            Logger.info("  [Cleanup] Process " + pid + " exiting. Clearing related spoofing entries.");
            // Remove only entries for this PID
            for (var [cid, data] of g_spoofMap.entries()) {
                if (data.pid === pid) {
                    g_spoofMap.delete(cid);
                }
            }
            g_registeredPids.delete(pid);
        });
        g_registeredPids.add(pid);
        Logger.info("  [Setup] Registered exit handler for PID " + pid);
    } catch (e) {
        Logger.debug("Failed to register per-PID exit handler for " + pid + ": " + e.message);
    }
}





/// =============================================================================
/// SANDBOX INSPECTION
/// =============================================================================

/// Check sandbox state
function sandbox_state() {
    Logger.section("Sandbox State");

    var processType = chrome_process_type();

    if (processType === "browser") {
        Logger.info("  Browser process - not sandboxed");
        Logger.empty();
        return "browser (not sandboxed)";
    }

    // Try to find sandbox state symbols
    Logger.info("  Checking sandbox state...");
    Logger.empty();

    try {
        var ctl = SymbolUtils.getControl();

        // Try to examine process token
        Logger.info("  Token Information:");
        Logger.info("  " + "-".repeat(40));

        // Get token integrity level using !token
        var tokenOutput = ctl.ExecuteCommand("!token -n");
        for (var line of tokenOutput) {
            if (line.indexOf("Impersonation") !== -1 ||
                line.indexOf("Integrity") !== -1 ||
                line.indexOf("Restricted") !== -1) {
                Logger.info("    " + line);
            }
        }
    } catch (e) {
        Logger.warn("Unable to query token (symbols may be needed)");
    }

    Logger.empty();

    // Check for sandbox::TargetServicesBase if symbols are available
    Logger.info("  Sandbox Breakpoints (for detailed analysis):");
    Logger.info("  " + "-".repeat(40));
    Logger.info("    bp sandbox!TargetServicesBase::Init");
    Logger.info("    bp sandbox!TargetServicesBase::LowerToken");
    Logger.empty();

    return "";
}

/// Analyze process token
function sandbox_token() {
    Logger.section("Process Token Analysis");

    try {
        var ctl = SymbolUtils.getControl();

        // Get detailed token info
        Logger.info("  Running !token...");
        Logger.empty();
        var tokenOutput = ctl.ExecuteCommand("!token");
        for (var line of tokenOutput) {
            Logger.info("  " + line);
        }
    } catch (e) {
        Logger.error("Error: " + e.message);
        Logger.info("Try: .reload /f ntdll.dll");
    }

    Logger.empty();
    return "";
}

/// =============================================================================
/// SECURITY BREAKPOINTS
/// =============================================================================

/// Set breakpoint on renderer process launch
function bp_renderer_launch() {
    return set_breakpoints(
        "Renderer Launch Breakpoints",
        [
            "chrome!content::RenderProcessHostImpl::Init",
            "chrome!content::RenderProcessHostImpl::OnProcessLaunched",
            "chrome!content::ChildProcessLauncher::Launch"
        ],
        "Breaking when renderer processes start"
    );
}

/// Set breakpoint on sandbox token lowering
function bp_sandbox_lower() {
    return set_breakpoints(
        "Sandbox Token Breakpoints",
        [
            "chrome!sandbox::TargetServicesBase::LowerToken",
            "chrome!sandbox::ProcessState::SetRevertedToSelf"
        ],
        "Breaking when sandbox restricts token"
    );
}

/// Set breakpoint on Mojo interface binding
function bp_mojo_interface() {
    return set_breakpoints(
        "Mojo Interface Breakpoints",
        [
            "chrome!content::BrowserInterfaceBrokerImpl::GetInterface",
            "chrome!content::RenderProcessHostImpl::BindReceiver",
            "chrome!mojo::core::MessagePipeDispatcher::WriteMessage"
        ],
        "Tracking Mojo IPC"
    );
}

/// Set breakpoint on IPC message dispatch
function bp_ipc_message() {
    return set_breakpoints(
        "IPC Message Breakpoints",
        [
            "chrome!content::ChildProcessHost::OnMessageReceived",
            "chrome!IPC::ChannelMojo::OnMessageReceived"
        ],
        "IPC message logging"
    );
}



/// =============================================================================
/// PROCESS-SPECIFIC EXECUTION
/// =============================================================================

/// Get the process type of the current process
function getProcessType() {
    // Reuse safe helper logic without context switch (we are in current context)
    try {
        // Reuse logic of chrome_process_type
        var cmdLine = getCommandLine();
        if (isEmpty(cmdLine)) {
            return "renderer"; // Heuristic
        }
        var info = ProcessUtils.parseInfo(cmdLine);
        return info.type;
    } catch (e) {
        return "renderer";
    }
}

/// Check if current process matches a type
function isProcessType(targetType) {
    return getProcessType() === targetType;
}




/// Check sandbox status for ALL processes
function sandbox_status_all() {
    Logger.section("Sandbox Status Dashboard");
    Logger.info("  ID    PID       Type              Integrity Level           Status");
    Logger.info("  " + "-".repeat(90));

    var ctl = SymbolUtils.getControl();

    // Use our trusted helpers
    var processList = ProcessUtils.getList();

    // Remember original context
    var originalId = ProcessUtils.getCurrentSysId();

    for (var proc of processList) {
        try {
            var sysId = proc.sysId;
            if (sysId === "?" || sysId === null) continue;

            var type = proc.type;
            var pid = proc.pid;

            var status = "Unknown";

            // Switch and query token safely
            var integrity = ProcessUtils.withContext(sysId, function () {
                var result = "Unknown";
                try {
                    var output = SymbolUtils.execute("!token");
                    for (var line of output) {
                        // Match "Integrity Level" or "IntegrityLevel" followed by colon
                        if (/Integrity.*Level.*:/i.test(line)) {
                            var parts = line.split(":");
                            if (parts.length > 1) result = parts[1].trim();
                            break;
                        }
                    }
                } catch (e) { result = "Error reading token"; }
                return result;
            });

            // Map SIDs to Names using lookup table
            var sids = Object.keys(INTEGRITY_LEVELS);
            for (var i = 0; i < sids.length; i++) {
                var sid = sids[i];
                if (integrity.indexOf(sid) !== -1) {
                    integrity = INTEGRITY_LEVELS[sid] + " (" + sid + ")";
                    break;
                }
            }

            // Determine status based on type and integrity
            if (type === "browser") {
                // Browser should be Medium or High
                status = (integrity.indexOf("Medium") !== -1 || integrity.indexOf("High") !== -1) ? "OK" : "WARN";
            } else if (type === "renderer") {
                // Renderer MUST be Low, Untrusted, or AppContainer
                if (integrity.indexOf("Untrusted") !== -1 ||
                    integrity.indexOf("Low") !== -1 ||
                    integrity.indexOf("AppContainer") !== -1 ||
                    integrity.indexOf("Restricted") !== -1) {
                    status = "OK (Sandboxed)";
                } else {
                    status = "DANGER (Weak Sandbox)";
                }
            } else if (type === "gpu-process") {
                // GPU varies but usually Low or AppContainer
                status = (integrity.indexOf("Medium") === -1) ? "OK" : "WARN (Medium)";
            } else if (type === "utility") {
                // Utilities should generally be low/untrusted too, but some network/storage run higher
                status = (integrity.indexOf("Medium") === -1) ? "OK" : "Info (Medium)";
            } else {
                status = "-";
            }

            // Shorten integrity string for display
            if (integrity.length > MAX_INTEGRITY_DISPLAY_LENGTH) integrity = integrity.substring(0, MAX_INTEGRITY_DISPLAY_LENGTH - 3) + "...";

            Logger.info(
                "  " + sysId.toString().padEnd(6) +
                pid.toString().padEnd(10) +
                type.padEnd(18) +
                integrity.padEnd(26) +
                status
            );

        } catch (e) {
            Logger.error("Error processing PID " + pid);
        }
    }

    Logger.empty();
    return "";
}



/// =============================================================================
/// SITE ISOLATION
/// =============================================================================

/// Check Site Isolation status
function site_isolation_status() {
    Logger.section("Site Isolation Status");

    var cmdLine = getCommandLine();

    // Check command line flags
    var flags = {
        "site-per-process": cmdLine.indexOf("--site-per-process") !== -1,
        "disable-site-isolation": cmdLine.indexOf("--disable-site-isolation") !== -1,
        "isolate-origins": cmdLine.indexOf("--isolate-origins") !== -1
    };

    Logger.info("  Command Line Flags:");
    Logger.info("  " + "-".repeat(40));
    Logger.info("    --site-per-process:          " + (flags["site-per-process"] ? "ENABLED" : "not set"));
    Logger.info("    --disable-site-isolation:    " + (flags["disable-site-isolation"] ? "WARNING: DISABLED" : "not set"));
    Logger.info("    --isolate-origins:           " + (flags["isolate-origins"] ? "ENABLED" : "not set"));

    // Extract isolated origins if present
    if (flags["isolate-origins"]) {
        var match = cmdLine.match(/--isolate-origins=([^\s"]+)/);
        if (match) {
            Logger.info("");
            Logger.info("  Isolated Origins: " + match[1]);
        }
    }

    Logger.info("");
    Logger.info("  Runtime Check Breakpoints:");
    Logger.info("  " + "-".repeat(40));
    Logger.info("    bp chrome!content::SiteIsolationPolicy::UseDedicatedProcessesForAllSites");
    Logger.info("    bp chrome!content::SiteInstanceImpl::GetSiteForURL");
    Logger.empty();

    return "";
}

/// Helper: Check if chrome.dll module is loaded in current process
function _hasChromeModule() {
    try {
        var modules = host.currentProcess.Modules;
        for (var mod of modules) {
            var modName = mod.Name.toLowerCase();
            if (modName === "chrome.dll" || modName.endsWith("\\chrome.dll")) {
                Logger.info("    Found module: " + mod.Name);
                return true;
            }
        }
    } catch (modErr) {
        Logger.warn("    Warning: Could not enumerate modules");
    }
    return false;
}

/// Helper: Find g_frame_map LazyInstance address
function _findFrameMapAddress(ctl) {
    try {
        var pattern = "chrome!*g_frame_map*";
        // SymbolUtils.findSymbolAddress now handles wildcard caching internally
        var addr = SymbolUtils.findSymbolAddress(pattern);
        if (addr) {
            Logger.info("    > Found symbol at: " + addr);
            return addr;
        }
    } catch (xErr) {
        Logger.error("Symbol lookup failed: " + (xErr.message || xErr));
        Logger.info("Try: .reload /f chrome.dll");
    }
    return null;
}

/// Helper: Read FrameMap pointer from LazyInstance
function _readFrameMapPointer(lazyInstanceAddr) {
    try {
        var lazyAddrVal = BigInt("0x" + lazyInstanceAddr);
        var ptrValue = host.memory.readMemoryValues(host.parseInt64(lazyAddrVal.toString(16), 16), 1, 8)[0];
        var mapAddr = ptrValue.toString(16);
        if (isValidPointer(mapAddr)) {
            return mapAddr;
        }
    } catch (e) { }
    return null;
}

/// Helper: Parse frame entries from dx output
function _parseFrameMapEntries(ctl, mapAddr) {
    var frames = [];
    var currentWebFrame = null;
    var dxCmd = "dx -r5 *((content::`anonymous namespace'::FrameMap*)0x" + mapAddr + ")";
    var mapOutput = ctl.ExecuteCommand(dxCmd);

    for (var line of mapOutput) {
        var lineStr = line.toString();
        var firstMatch = lineStr.match(/first\s*:\s*(0x[0-9a-fA-F`]+)\s*\[Type:\s*blink::WebFrame/i);
        if (firstMatch) {
            currentWebFrame = firstMatch[1].replace(/`/g, "");
        }
        var secondMatch = lineStr.match(/second\s*:\s*(0x[0-9a-fA-F`]+)\s*\[Type:\s*content::RenderFrameImpl/i);
        if (secondMatch && currentWebFrame) {
            frames.push({
                webFrame: currentWebFrame,
                renderFrame: secondMatch[1].replace(/`/g, "")
            });
            currentWebFrame = null;
        }
    }
    return frames;
}

/// Helper: Extract URL from a frame using various methods
function _extractFrameUrl(ctl, f) {
    var webFrameHex = normalizeAddress(f.webFrame);
    if (!webFrameHex) return "";
    var localFrameAddr = null;
    var frameCompressed = getCompressedMember(webFrameHex, "(blink::WebLocalFrameImpl*)", "frame_");
    if (frameCompressed !== null) {
        localFrameAddr = MemoryUtils.decompressCppgcPtr(frameCompressed, f.webFrame);
    }

    if (!localFrameAddr) return "";

    // Try via FrameLoader -> DocumentLoader
    var loaderCompressed = getCompressedMember(normalizeAddress(localFrameAddr), "(blink::LocalFrame*)", "loader_");
    if (loaderCompressed !== null) {
        var loaderAddr = MemoryUtils.decompressCppgcPtr(loaderCompressed, localFrameAddr);
        if (isValidPointer(loaderAddr)) {
            var docLoaderCompressed = getCompressedMember(normalizeAddress(loaderAddr), "(blink::FrameLoader*)", "document_loader_");
            if (docLoaderCompressed !== null) {
                var docLoaderAddr = MemoryUtils.decompressCppgcPtr(docLoaderCompressed, loaderAddr);
                if (isValidPointer(docLoaderAddr)) {
                    var url = readUrlStringFromDx(docLoaderAddr.toString(16), "(blink::DocumentLoader*)");
                    if (url) return url;
                }
            }
        }
    }

    // Fallback: Try via dom_window_ -> document_ -> url_
    var windowCompressed = getCompressedMember(normalizeAddress(localFrameAddr), "(blink::LocalFrame*)", "dom_window_");
    if (windowCompressed !== null) {
        var windowAddr = MemoryUtils.decompressCppgcPtr(windowCompressed, localFrameAddr);
        if (isValidPointer(windowAddr)) {
            var docCompressed = getCompressedMember(normalizeAddress(windowAddr), "(blink::LocalDOMWindow*)", "document_");
            if (docCompressed !== null) {
                var docAddr = MemoryUtils.decompressCppgcPtr(docCompressed, windowAddr);
                if (isValidPointer(docAddr)) {
                    return readUrlStringFromDx(docAddr, "(blink::Document*)") || "";
                }
            }
        }
    }
    return "";
}

/// Helper: Get process_label_id_ from RenderFrameImpl
function _getFrameLabelId(ctl, renderFrame) {
    try {
        var rfCmd = "dx -r0 ((content::RenderFrameImpl*)" + renderFrame + ")->process_label_id_";
        var rfOutput = ctl.ExecuteCommand(rfCmd);
        for (var rfLine of rfOutput) {
            if (rfLine.toString().indexOf("process_label_id_") !== -1) {
                var idMatch = rfLine.toString().match(/:\s*(\d+)/);
                if (idMatch) return idMatch[1];
            }
        }
    } catch (e) { }
    return "N/A";
}

/// Helper: Display single frame info
function _displayFrameInfo(ctl, f, index) {
    var rfId = _getFrameLabelId(ctl, f.renderFrame);
    Logger.info("  [Index: " + index + "] RenderFrameImpl:  " + f.renderFrame);
    Logger.info("       WebFrame:         " + f.webFrame);

    // Get LocalFrame address (what frame commands work with)
    var localFrame = BlinkUnwrap.getLocalFrame(f.webFrame);
    if (localFrame && localFrame !== "0") {
        Logger.info("       LocalFrame:       0x" + localFrame);
    }

    var urlStr = _extractFrameUrl(ctl, f);
    if (urlStr) {
        Logger.info("       URL:              " + urlStr);
    } else {
        Logger.info("       URL:              (use dx to inspect)");
    }
    Logger.empty();
}

/// List all frames in the current renderer process
function renderer_frames() {
    Logger.section("Renderer Frames");

    var ctl;
    try {
        ctl = SymbolUtils.getControl();
    } catch (e) {
        Logger.error("Cannot get debugger control interface.");
        return "";
    }

    // Verify we're in a renderer
    try {
        var cmdLine = getCommandLine();
        if (cmdLine) {
            var info = ProcessUtils.parseInfo(cmdLine);
            if (info && info.type !== "renderer") {
                Logger.warn("May not be a renderer (detected: " + info.type + ")");
                Logger.info("  Continuing anyway...");
                Logger.empty();
            }
        }
    } catch (e) {
        Logger.warn("Could not verify process type (continuing anyway)");
        Logger.empty();
    }

    try {
        Logger.info("  Step 1: Looking for g_frame_map symbol...");

        if (!_hasChromeModule()) {
            Logger.info("  chrome.dll not found in this process.");
            Logger.info("  This command only works in renderer processes.");
            Logger.info("  Use !procs to list processes and |<id>s to switch.");
            Logger.empty();
            return "";
        }

        var lazyInstanceAddr = _findFrameMapAddress(ctl);
        if (!lazyInstanceAddr) {
            Logger.warn("Could not find g_frame_map symbol.");
            Logger.info("Make sure symbols are loaded (try: .reload /f chrome.dll)");
            Logger.empty();
            return "";
        }

        Logger.info("  g_frame_map (LazyInstance) at: 0x" + lazyInstanceAddr);
        Logger.info("  Step 2: Reading private_instance_ pointer...");

        var mapAddr = _readFrameMapPointer(lazyInstanceAddr);
        if (!mapAddr) {
            Logger.info("  LazyInstance not yet initialized (no frames created yet).");
            Logger.empty();
            return "";
        }

        Logger.info("  FrameMap (actual map) at: 0x" + mapAddr);
        Logger.empty();
        Logger.info("  Enumerating frames...");
        Logger.info("  " + "-".repeat(70));
        Logger.empty();

        var frames = _parseFrameMapEntries(ctl, mapAddr);

        if (frames.length > 0) {
            Logger.info("  Found " + frames.length + " frame(s):");
            Logger.empty();

            var oilpanBase = MemoryUtils.getCppgcCageBase();
            if (oilpanBase) {
                Logger.info("  (Oilpan Cage Base: 0x" + oilpanBase + ")");
                Logger.empty();
            }

            for (var i = 0; i < frames.length; i++) {
                _displayFrameInfo(ctl, frames[i], i);
            }
        } else {
            Logger.info("  No frames found. Map may be empty.");
            Logger.empty();
            Logger.info("  Manual inspection commands:");
            Logger.info("    dq 0x" + mapAddr + " L10");
            Logger.info("    dx *((content::`anonymous namespace'::FrameMap*)0x" + mapAddr + ")");
            Logger.empty();
        }

        Logger.empty();
        Logger.info("  Useful commands:");
        Logger.info("    dx ((content::RenderFrameImpl*)<addr>)         - Inspect RenderFrameImpl");
        Logger.info("    dx ((content::RenderFrameImpl*)<addr>)->frame_ - Get WebLocalFrame");
        Logger.info("    dx ((blink::WebLocalFrame*)<addr>)             - Inspect WebFrame");
        Logger.empty();

    } catch (e) {
        Logger.error("Error: " + (e.message || e.toString()));
        if (e.stack) {
            Logger.info("  Stack: " + e.stack);
        }
        Logger.empty();
        Logger.info("  Manual approach:");
        Logger.info("    x chrome!*g_frame_map*");
        Logger.info("    dq <addr> L1                ; Read LazyInstance.private_instance_");
        Logger.info("    dx *((content::`anonymous namespace'::FrameMap*)<ptr>)");
        Logger.empty();
    }

    return "";
}



/// Helper: Show usage for run_in_* commands and execute if command provided
function _runInProcessType(command, processType, exampleCmd) {
    if (isEmpty(command)) {
        var displayName = processType.charAt(0).toUpperCase() + processType.slice(1);
        Logger.section("Run in " + displayName);
        Logger.info("  Usage: !run_in_" + processType + " \"<windbg command>\"");
        Logger.info("  Example: !run_in_" + processType + " \"" + exampleCmd + "\"");
        Logger.empty();
        Logger.info("  Works from ANY process - automatically finds and runs in " + processType + ".");
        Logger.empty();
        return "";
    }
    return ProcessUtils.runInType(processType, command);
}


/// Execute a command only in renderer processes (works from any process context)
function run_in_renderer(command) {
    return _runInProcessType(command, "renderer", "bp chrome!v8::internal::Heap::CollectGarbage");
}

/// Execute a command only in browser process (works from any process context)
function run_in_browser(command) {
    return _runInProcessType(command, "browser", "bp chrome!Browser::Create");
}

/// Execute a command only in GPU process (works from any process context)
function run_in_gpu(command) {
    return _runInProcessType(command, "gpu-process", "bp chrome!gpu::CommandBufferService::Flush");
}



/// Set up commands to run automatically when a renderer process attaches
function on_renderer_attach(command) {
    Logger.section("Renderer Auto-Attach Setup");

    if (isEmpty(command)) {
        Logger.info("  This sets up commands to run when new renderer processes attach.");
        Logger.empty();
        Logger.info("  Usage: !on_renderer_attach \"<windbg command>\"");
        Logger.empty();
        Logger.info("  Examples:");
        Logger.info("    !on_renderer_attach \"!sandbox_state\"");
        Logger.info("    !on_renderer_attach \"bp chrome!blink::Document::CreateRawElement\"");
        Logger.info("    !on_renderer_attach \".echo Renderer attached!\"");
        Logger.empty();
        Logger.header("Registered commands:");
        for (var i = 0; i < g_rendererAttachCommands.length; i++) {
            Logger.info("    " + (i + 1) + ": " + g_rendererAttachCommands[i]);
        }
        if (g_rendererAttachCommands.length === 0) {
            Logger.info("    (none)");
        }
        Logger.empty();
        Logger.info("  TIP: To trigger on child process creation, use WinDbg:");
        Logger.info("    sxe -c \"!run_in_renderer \\\"<cmd>\\\"\" cpr");
        Logger.empty();
        return "";
    }

    g_rendererAttachCommands.push(command);
    Logger.info("  Added: " + command);
    Logger.info("  Total registered commands: " + g_rendererAttachCommands.length);
    Logger.empty();

    // Use helper to register sxe handler
    _registerRendererSxeHandler("!run_in_renderer \"" + command + "\"", "Command");

    return "";
}

/// Execute a script file only in renderer processes (works from any process context)
function run_script_in_renderer(scriptPath) {
    if (isEmpty(scriptPath)) {
        Logger.section("Run Script in Renderer");
        Logger.info("  Usage: !run_script_in_renderer \"<path to .js script>\"");
        Logger.empty();
        Logger.info("  Examples:");
        Logger.info("    !run_script_in_renderer \"C:\\scripts\\renderer_hooks.js\"");
        Logger.info("    !run_script_in_renderer \"renderer_security.js\"");
        Logger.empty();
        Logger.info("  Works from ANY process - automatically loads in all renderers.");
        Logger.empty();
        return "";
    }

    // Reuse run_in_renderer to handle process iteration
    var loadCmd = ".scriptload " + scriptPath;
    return run_in_renderer(loadCmd);
}

/// Set up a script to load automatically when renderer processes attach
function script_in_renderer_attach(scriptPath) {
    Logger.section("Script Auto-Load on Renderer Attach");

    if (isEmpty(scriptPath)) {
        Logger.info("  Usage: !script_in_renderer_attach \"<path to .js script>\"");
        Logger.empty();
        Logger.info("  This will auto-load the script when new renderer processes spawn.");
        Logger.empty();
        Logger.info("  Examples:");
        Logger.info("    !script_in_renderer_attach \"renderer_hooks.js\"");
        Logger.info("    !script_in_renderer_attach \"C:\\research\\exploit_test.js\"");
        Logger.empty();
        return "";
    }

    Logger.info("  Registering: " + scriptPath);
    Logger.empty();

    // Use helper to register sxe handler
    var escapedPath = scriptPath.replace(/\\/g, "\\\\");
    _registerRendererSxeHandler("!run_script_in_renderer \"" + escapedPath + "\"", "Script");

    return "";
}

/// =============================================================================
/// SECURITY RESEARCH BREAKPOINTS
/// =============================================================================

/// Break on mojo::ReportBadMessage - catches security boundary violations
function bp_bad_message() {
    return set_breakpoints(
        "Bad Message Breakpoints (Security Violations)",
        [
            "chrome!mojo::ReportBadMessage"
        ],
        "Breaking on security violations (check message string)"
    );
}

/// Break on security policy checks
function bp_security_check() {
    return set_breakpoints(
        "Security Policy Breakpoints",
        [
            { sym: "chrome!content::ChildProcessSecurityPolicyImpl::CanAccessDataForOrigin", desc: "Origin access check" },
            { sym: "chrome!content::ChildProcessSecurityPolicyImpl::CanCommitURL", desc: "URL commit check" },
            { sym: "chrome!content::ChildProcessSecurityPolicyImpl::GetProcessLock", desc: "Process lock query" },
            { sym: "chrome!content::SiteIsolationPolicy::UseDedicatedProcessesForAllSites", desc: "Site isolation check" },
            { sym: "chrome!content::SiteInstanceImpl::GetProcess", desc: "SiteInstance process" },
            { sym: "chrome!sandbox::TargetServicesBase::LowerToken", desc: "Sandbox token lowering" }
        ],
        "Breaking on security policy checks"
    );
}

/// Enable IPC/Mojo message tracing
function trace_ipc() {
    return set_breakpoints(
        "IPC Tracing Mode",
        [
            { sym: "chrome!mojo::MessageDispatcher::Accept", desc: "Mojo message accept", cmd: 'bp chrome!mojo::MessageDispatcher::Accept ".echo [IPC] Mojo message accept; k 3; g"' },
            { sym: "chrome!content::BrowserInterfaceBrokerImpl::GetInterface", desc: "Interface broker", cmd: 'bp chrome!content::BrowserInterfaceBrokerImpl::GetInterface ".echo [IPC] Interface broker; k 3; g"' },
            { sym: "chrome!IPC::ChannelMojo::OnMessageReceived", desc: "Legacy IPC receive", cmd: 'bp chrome!IPC::ChannelMojo::OnMessageReceived ".echo [IPC] Legacy IPC receive; k 3; g"' }
        ],
        "Logging IPC traffic (noisy!)"
    );
}

/// =============================================================================
/// VULNERABILITY HUNTING
/// =============================================================================

/// Set breakpoints for common vulnerability patterns
function vuln_hunt() {
    Logger.section("Vulnerability Hunting Mode");
    Logger.info("  Setting breakpoints for common vulnerability patterns.");
    Logger.empty();

    try {
        var ctl = SymbolUtils.getControl();

        var categories = [
            {
                name: "Use-After-Free Indicators",
                targets: [
                    { sym: "ntdll!RtlFreeHeap", desc: "Heap free (watch for double-free)" },
                    { sym: "chrome!base::PartitionFree", desc: "PartitionAlloc free" },
                    { sym: "chrome!content::RenderProcessHostImpl::Cleanup", desc: "Renderer cleanup" }
                ]
            },
            {
                name: "Type Confusion Points",
                targets: [
                    { sym: "chrome!blink::V8ScriptValueDeserializer::Deserialize", desc: "Deserialization" },
                    { sym: "chrome!v8::internal::Object::ToObject", desc: "V8 type coercion" }
                ]
            },
            {
                name: "Race Condition Hotspots",
                targets: [
                    { sym: "chrome!content::ChildProcessHost::OnMessageReceived", desc: "IPC receive (browser)" },
                    { sym: "chrome!content::ChildThreadImpl::OnMessageReceived", desc: "IPC receive (renderer)" }
                ]
            },
            {
                name: "Memory Corruption Detectors",
                targets: [
                    { sym: "chrome!base::debug::BreakDebugger", desc: "Debug break (crash)" },
                    { sym: "chrome!base::debug::CollectStackTrace", desc: "Stack trace (crash path)" }
                ]
            }
        ];

        for (var c = 0; c < categories.length; c++) {
            var cat = categories[c];
            Logger.info("  " + cat.name + ":");
            Logger.info("  " + "-".repeat(50));

            for (var i = 0; i < cat.targets.length; i++) {
                var target = cat.targets[i];
                Logger.info("    [" + target.desc + "]");
                Logger.info("      bp " + target.sym);
                try {
                    ctl.ExecuteCommand("bp " + target.sym);
                } catch (e) { }
            }
            Logger.empty();
        }

        Logger.info("  Breakpoints set. Use 'bl' to list, 'bc *' to clear.");
        Logger.empty();

    } catch (e) {
        Logger.error("Error: " + e.message);
    }

    return "";
}

/// Display heap/allocator information
function heap_info() {
    Logger.section("Heap / PartitionAlloc Info");

    try {
        var ctl = SymbolUtils.getControl();
        var procType = getProcessType();

        Logger.info("  Process Type: " + procType);
        Logger.empty();

        Logger.info("  PartitionAlloc Structures:");
        Logger.info("  " + "-".repeat(50));
        Logger.info("    dt chrome!base::PartitionRoot");
        Logger.info("    dt chrome!base::internal::SlotSpanMetadata");
        Logger.empty();

        Logger.info("  Useful Commands:");
        Logger.info("  " + "-".repeat(50));
        Logger.info("    !heap -s                           - NT heap summary");
        Logger.info("    !heap -a <addr>                    - Analyze heap address");
        Logger.info("    dps <addr> L10                     - Dump pointers at address");
        Logger.info("    !address <addr>                    - Memory region info");
        Logger.empty();

        Logger.info("  PartitionAlloc Breakpoints:");
        Logger.info("  " + "-".repeat(50));

        var paTargets = [
            "base::PartitionRoot::Alloc",
            "base::PartitionRoot::Free",
            "base::internal::PartitionBucket::SlowPathAlloc"
        ];

        for (var i = 0; i < paTargets.length; i++) {
            var sym = "chrome!" + paTargets[i];
            Logger.info("    bp " + sym);
        }

        Logger.empty();
        Logger.info("  V8 Heap (renderer only):");
        Logger.info("  " + "-".repeat(50));
        Logger.info("    dt chrome!v8::internal::Heap");
        Logger.info("    bp chrome!v8::internal::Heap::CollectGarbage");
        Logger.empty();

    } catch (e) {
        Logger.error("Error: " + e.message);
    }

    return "";
}

/// =============================================================================
/// BLINK HOOKS
/// =============================================================================

function blink_help() {
    Logger.section("Blink DOM Security Hooks");
    Logger.info("  !bp_element   - Break on DOM element creation");
    Logger.info("  !bp_nav       - Break on navigation/location changes");
    Logger.info("  !bp_pm        - Break on postMessage (cross-origin comms)");
    Logger.info("  !bp_fetch     - Break on fetch/XHR requests");
    Logger.empty();
    Logger.info("  Target symbols (chrome.dll):");
    Logger.info("    blink::Document::CreateRawElement");
    Logger.info("    blink::LocalDOMWindow::DispatchPostMessage");
    Logger.info("    blink::FetchManager::Fetch");
    Logger.empty();
    return "";
}

function bp_element() {
    return _bpFromConfig("element");
}

function bp_nav() {
    return _bpFromConfig("nav");
}

function bp_pm() {
    return _bpFromConfig("pm");
}

function bp_fetch() {
    return _bpFromConfig("fetch");
}

/// =============================================================================
/// V8 HOOKS
/// =============================================================================

function v8_help() {
    Logger.section("V8 Exploitation Hooks");
    Logger.info("  !bp_compile   - Break on script compilation");
    Logger.info("  !bp_gc        - Break on garbage collection");
    Logger.info("  !bp_wasm      - Break on WebAssembly compilation");
    Logger.info("  !bp_jit       - Break on JIT code generation");
    Logger.empty();
    Logger.info("  Target module: chrome.dll (v8 is statically linked)");
    Logger.empty();
    Logger.info("  Tips:");
    Logger.info("  - V8 symbols are large, use: .symopt+0x10 for deferred loading");
    Logger.info("  - For heap inspection: dt chrome!v8::internal::Heap");
    Logger.empty();
    return "";
}

function bp_compile() {
    return _bpFromConfig("compile");
}

function bp_gc() {
    return _bpFromConfig("gc");
}

function bp_wasm() {
    return _bpFromConfig("wasm");
}

function bp_jit() {
    return _bpFromConfig("jit");
}
