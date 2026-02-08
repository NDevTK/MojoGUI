/**
 * MojoGUI Fuzzer
 * Structure-aware Mojo IPC fuzzer for security research.
 */
(function (global) {
  "use strict";

  const safe = global.safeHTML || ((s) => s);
  const escapeHtml = MojoUtils.escapeHtml;

  // ========================================
  // Fuzz Value Generators
  // ========================================
  const FuzzGenerators = {
    _pick(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },

    _randomString(len) {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let s = "";
      for (let i = 0; i < len; i++)
        s += chars[Math.floor(Math.random() * chars.length)];
      return s;
    },

    number() {
      return this._pick([
        0,
        1,
        -1,
        2,
        -2,
        255,
        256,
        65535,
        65536,
        0x7fffffff,
        -0x80000000,
        0xffffffff,
        0x7fff,
        0xffff,
        0xff,
        NaN,
        Infinity,
        -Infinity,
        -0,
        1.7976931348623157e308,
        5e-324,
        Math.floor(Math.random() * 1000000),
        -Math.floor(Math.random() * 1000000),
        Math.random(),
      ]);
    },

    int64() {
      return this._pick([
        0n,
        1n,
        -1n,
        2n,
        -2n,
        2n ** 63n - 1n,
        -(2n ** 63n),
        2n ** 32n,
        2n ** 32n - 1n,
        2n ** 64n - 1n,
        BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)),
      ]);
    },

    string() {
      return this._pick([
        "",
        "A",
        "A".repeat(256),
        "A".repeat(10000),
        "A".repeat(100000),
        "%n%n%n%n%n%n",
        "%s%s%s%s%s%s",
        "\x00",
        "\x00".repeat(100),
        "null",
        "undefined",
        "true",
        "false",
        "<script>alert(1)</script>",
        "{{7*7}}",
        "${7*7}",
        "../../../etc/passwd",
        "..\\..\\..\\windows\\system32",
        "file:///etc/passwd",
        "\\\\server\\share",
        "/dev/null",
        "CON",
        "NUL",
        "\uFEFF",
        "\uD800",
        "\uDFFF",
        "\u0000\u0001\u0002\u0003",
        "\u202Ehello",
        "a]b",
        this._randomString(100),
        this._randomString(1000),
        String.fromCharCode(...Array.from({ length: 128 }, (_, i) => i)),
      ]);
    },

    bool() {
      return this._pick([true, false]);
    },

    enum(paramDef) {
      const options =
        (paramDef.type && paramDef.type.options) || paramDef.enumOptions;
      if (options && typeof options === "object") {
        const values = Object.values(options).filter(
          (v) => typeof v === "number",
        );
        const candidates = [...values, -1, -2, 9999, values.length, 0xffffffff];
        return this._pick(candidates);
      }
      return this._pick([0, 1, -1, 9999]);
    },

    array(paramDef, depth) {
      if (depth > 3) return [];
      const elementSpec = paramDef.elementSpec;
      const length = this._pick([0, 1, 2, 5, 50, 100]);
      const arr = [];
      for (let i = 0; i < length; i++) {
        arr.push(this.generateForType(elementSpec, depth + 1));
      }
      return arr;
    },

    struct(paramDef, depth) {
      if (depth > 5) return null;
      const spec = paramDef.structSpec;
      if (!spec || !spec.fields) return {};

      const result = {};
      const fields = Array.isArray(spec.fields)
        ? spec.fields
        : Object.entries(spec.fields).map(([name, f]) => ({ name, ...f }));

      for (const field of fields) {
        if (field.nullable && Math.random() < 0.3) {
          result[field.name] = null;
          continue;
        }
        const fieldType = MojoReflectionService.inferType(
          field.type,
          field.name,
        );
        result[field.name] = this.generate(
          {
            name: field.name,
            type: fieldType,
            rawType: field.type,
            structSpec:
              field.type?.$?.structSpec ||
              field.type?.structSpec,
            elementSpec:
              field.type?.elementType ||
              field.type?.$?.elementType ||
              field.type?.$?.arraySpec?.elementType,
            mapSpec:
              field.type?.keyType || field.type?.$?.mapSpec
                ? {
                    key:
                      field.type?.keyType ||
                      field.type?.$?.mapSpec?.keyType,
                    value:
                      field.type?.valueType ||
                      field.type?.$?.mapSpec?.valueType,
                  }
                : null,
            optional: !!field.nullable,
            defaultValue: field.defaultValue,
          },
          depth + 1,
        );
      }
      return result;
    },

    union(paramDef, depth) {
      if (depth > 5) return {};
      const spec = paramDef.structSpec;
      if (!spec || !spec.fields) return {};

      const fieldEntries =
        typeof spec.fields === "object" && !Array.isArray(spec.fields)
          ? Object.entries(spec.fields)
          : (spec.fields || []).map((f) => [f.name, f]);

      if (fieldEntries.length === 0) return {};
      const [tag, field] = this._pick(fieldEntries);
      const fieldType = MojoReflectionService.inferType(
        field.type || field,
        tag,
      );

      return {
        [tag]: this.generate(
          {
            name: tag,
            type: fieldType,
            rawType: field.type || field,
            structSpec: (field.type || field)?.$?.structSpec,
            optional: false,
          },
          depth + 1,
        ),
      };
    },

    map(paramDef, depth) {
      if (depth > 3) return {};
      const mapSpec = paramDef.mapSpec;
      if (!mapSpec) return {};

      const length = this._pick([0, 1, 3, 10]);
      const result = {};
      for (let i = 0; i < length; i++) {
        const key = this.generateForType(mapSpec.key, depth + 1);
        const value = this.generateForType(mapSpec.value, depth + 1);
        if (key !== null && key !== undefined) {
          result[String(key)] = value;
        }
      }
      return result;
    },

    url() {
      return this._pick([
        "",
        "http://example.com",
        "https://evil.com/path?q=1#frag",
        "javascript:alert(1)",
        "data:text/html,<h1>test</h1>",
        "file:///etc/passwd",
        "file:///C:/Windows/System32/config/SAM",
        "ftp://ftp.example.com",
        "blob:http://example.com/uuid",
        "about:blank",
        "chrome://settings",
        "chrome-extension://aaaa/manifest.json",
        "http://[::1]/",
        "http://0x7f000001/",
        "http://127.0.0.1:0/",
        "http://example.com/" + "A".repeat(10000),
        "://missing-scheme",
        "http://",
        "http:///",
        "http://example.com/\x00evil",
        "https://example.com/path/../../../etc/passwd",
      ]);
    },

    filepath() {
      return this._pick([
        "",
        "/tmp/test.txt",
        "C:\\Windows\\System32\\cmd.exe",
        "/etc/passwd",
        "../../../etc/shadow",
        "..\\..\\..\\windows\\system32\\config\\sam",
        "/dev/null",
        "CON",
        "NUL",
        "/proc/self/exe",
        "A".repeat(1000),
        "/tmp/" + this._randomString(50),
      ]);
    },

    bigstring() {
      return this.string();
    },

    bigstring16() {
      return this.string();
    },

    string16() {
      return this.string();
    },

    handle() {
      return null;
    },

    pending_remote(paramDef) {
      if (paramDef.interface && Math.random() < 0.5) {
        return {
          __mojoType: "Handle",
          action: "bind_listener",
          interface: paramDef.interface,
        };
      }
      return null;
    },

    pending_receiver() {
      return null;
    },

    pending_associated_remote() {
      return null;
    },

    pending_associated_receiver() {
      return null;
    },

    mojo_handle() {
      return null;
    },

    "handle<platform>"() {
      return null;
    },

    any() {
      const gen = this._pick(["number", "string", "bool"]);
      return this[gen]();
    },

    generateForType(typeSpec, depth) {
      if (!typeSpec) return this.any();
      const type = MojoReflectionService.inferType(typeSpec);
      return this.generate({ type, rawType: typeSpec }, depth);
    },

    generate(paramDef, depth) {
      if (depth === undefined) depth = 0;
      if (depth > 8) return null;

      const type = paramDef.type;

      if (type && typeof type === "object" && type.type === "enum") {
        return this.enum(paramDef);
      }

      switch (type) {
        case "number":
          return this.number();
        case "int64":
          return this.int64();
        case "string":
          return this.string();
        case "bool":
          return this.bool();
        case "array":
          return this.array(paramDef, depth);
        case "struct":
          return this.struct(paramDef, depth);
        case "union":
          return this.union(paramDef, depth);
        case "map":
          return this.map(paramDef, depth);
        case "Url":
          return this.url();
        case "filepath":
          return this.filepath();
        case "bigstring":
          return this.bigstring();
        case "bigstring16":
          return this.bigstring16();
        case "string16":
          return this.string16();
        case "pending_remote":
          return this.pending_remote(paramDef);
        case "pending_receiver":
          return this.pending_receiver();
        case "pending_associated_remote":
          return this.pending_associated_remote();
        case "pending_associated_receiver":
          return this.pending_associated_receiver();
        case "mojo_handle":
          return this.mojo_handle();
        case "handle<platform>":
          return this["handle<platform>"]();
        case "enum":
          return this.enum(paramDef);
        default:
          return this.any();
      }
    },
  };

  // ========================================
  // Fuzzer Engine & UI
  // ========================================
  const MojoFuzzer = {
    running: false,
    aborted: false,
    stats: { calls: 0, successes: 0, errors: 0, crashes: 0, startTime: 0 },
    results: [],
    uniqueErrors: new Map(),
    _objectCache: {},

    init() {
      this.renderUI();
    },

    renderUI() {
      const container = document.querySelector(".fuzzer-container");
      if (!container) return;

      container.innerHTML = safe(
        `
        <div class="fuzzer-card">
          <h4 style="color: var(--accent-primary);">Fuzzer Configuration</h4>
          <div class="fuzzer-controls">
            <label>Interface</label>
            <select id="fuzzer-interface-select">
              <option value="" disabled selected>Select an interface...</option>
            </select>

            <label>Method</label>
            <select id="fuzzer-method-select" disabled>
              <option value="" disabled selected>Select interface first...</option>
            </select>

            <label>Strategy</label>
            <select id="fuzzer-strategy-select">
              <option value="selected_method">Selected Method</option>
              <option value="all_methods">All Methods on Interface</option>
              <option value="all_interfaces">All Interfaces</option>
            </select>

            <div style="display: flex; gap: var(--space-sm);">
              <div style="flex: 1;">
                <label>Iterations</label>
                <input type="number" id="fuzzer-iterations" value="100" min="1" max="100000">
              </div>
              <div style="flex: 1;">
                <label>Delay (ms)</label>
                <input type="number" id="fuzzer-delay" value="50" min="0" max="10000">
              </div>
            </div>
          </div>

          <div class="fuzzer-btn-row">
            <button class="btn btn-primary btn-small" id="fuzzer-start-btn" disabled>
              Start Fuzzing
            </button>
            <button class="btn btn-secondary btn-small" id="fuzzer-stop-btn" disabled>
              Stop
            </button>
          </div>
        </div>

        <div class="fuzzer-card" id="fuzzer-progress-card" style="display: none;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div class="fuzzer-running-indicator" id="fuzzer-running-indicator">
              <span class="pulse-dot"></span>
              <span>Fuzzing...</span>
            </div>
            <span id="fuzzer-progress-text" style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">0 / 0</span>
          </div>
          <div class="fuzzer-progress">
            <div class="fuzzer-progress-bar" id="fuzzer-progress-bar" style="width: 0%;"></div>
          </div>
        </div>

        <div class="fuzzer-card">
          <h4>Live Stats</h4>
          <div class="fuzzer-stats">
            <div class="fuzzer-stat">
              <div class="fuzzer-stat-value" id="fuzzer-stat-calls">0</div>
              <div class="fuzzer-stat-label">Calls</div>
            </div>
            <div class="fuzzer-stat stat-success">
              <div class="fuzzer-stat-value" id="fuzzer-stat-success">0</div>
              <div class="fuzzer-stat-label">Success</div>
            </div>
            <div class="fuzzer-stat stat-error">
              <div class="fuzzer-stat-value" id="fuzzer-stat-errors">0</div>
              <div class="fuzzer-stat-label">Errors</div>
            </div>
            <div class="fuzzer-stat stat-crash">
              <div class="fuzzer-stat-value" id="fuzzer-stat-crashes">0</div>
              <div class="fuzzer-stat-label">Crashes</div>
            </div>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
            Rate: <span id="fuzzer-stat-rate">0</span> calls/sec
            | Unique Errors: <span id="fuzzer-stat-unique">0</span>
          </div>
        </div>

        <div class="fuzzer-card" id="fuzzer-errors-card" style="display: none;">
          <h4>Unique Errors</h4>
          <div class="fuzzer-errors-list" id="fuzzer-errors-list"></div>
        </div>

        <div class="fuzzer-card" style="flex: 1; min-height: 0;">
          <h4>
            Results Log
            <button class="btn btn-secondary btn-small" id="fuzzer-clear-btn" style="margin-left: auto; font-size: 0.7rem; padding: 2px 8px;">Clear</button>
          </h4>
          <div class="fuzzer-results" id="fuzzer-results-log">
            <div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 20px;">
              Configure and start fuzzing to see results
            </div>
          </div>
        </div>
      `,
      );

      this.populateInterfaces();
      this.bindEvents();
    },

    bindEvents() {
      const container = document.querySelector(".fuzzer-container");
      if (!container) return;

      const ifaceSelect = container.querySelector("#fuzzer-interface-select");
      if (ifaceSelect) {
        ifaceSelect.addEventListener("change", (e) => {
          this.populateMethods(e.target.value);
          this.updateStartButton();
        });
      }

      const methodSelect = container.querySelector("#fuzzer-method-select");
      if (methodSelect) {
        methodSelect.addEventListener("change", () =>
          this.updateStartButton(),
        );
      }

      const strategySelect = container.querySelector(
        "#fuzzer-strategy-select",
      );
      if (strategySelect) {
        strategySelect.addEventListener("change", () =>
          this.updateStartButton(),
        );
      }

      const startBtn = container.querySelector("#fuzzer-start-btn");
      if (startBtn) {
        startBtn.addEventListener("click", () => this.start());
      }

      const stopBtn = container.querySelector("#fuzzer-stop-btn");
      if (stopBtn) {
        stopBtn.addEventListener("click", () => this.stop());
      }

      const clearBtn = container.querySelector("#fuzzer-clear-btn");
      if (clearBtn) {
        clearBtn.addEventListener("click", () => this.clearResults());
      }

      const resultsLog = container.querySelector("#fuzzer-results-log");
      if (resultsLog) {
        resultsLog.addEventListener("click", (e) => {
          const replayBtn = e.target.closest("[data-action='replay']");
          if (replayBtn) {
            e.stopPropagation();
            const index = parseInt(replayBtn.dataset.index);
            this.replayCase(index);
            return;
          }

          const entry = e.target.closest(".fuzzer-result-entry");
          if (entry) {
            const index = parseInt(entry.dataset.index);
            this.toggleResultDetail(index, entry);
          }
        });
      }
    },

    populateInterfaces() {
      const select = document.getElementById("fuzzer-interface-select");
      if (!select) return;

      const interfaces = (global.MojoGUI_State || {}).interfaces || [];
      const options = interfaces
        .map((iface) => {
          const fqn = iface.module + "." + iface.name;
          return `<option value="${escapeHtml(fqn)}">${escapeHtml(fqn)}</option>`;
        })
        .sort()
        .join("");

      select.innerHTML = safe(
        '<option value="" disabled selected>Select an interface...</option>' +
          options,
      );
    },

    async populateMethods(interfaceFqn) {
      const select = document.getElementById("fuzzer-method-select");
      if (!select) return;

      select.disabled = true;
      select.innerHTML = safe(
        '<option value="" disabled selected>Loading...</option>',
      );

      try {
        await MojoLoader.ensureBinding(interfaceFqn);

        const iface = (global.MojoGUI_State || {}).interfaces.find(
          (i) =>
            i.module + "." + i.name === interfaceFqn ||
            i.name === interfaceFqn,
        );

        if (iface && iface.methods) {
          const options = iface.methods
            .map((m) => {
              const name = typeof m === "string" ? m : m.name;
              return `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`;
            })
            .join("");

          select.innerHTML = safe(
            '<option value="" disabled selected>Select a method...</option>' +
              options,
          );
          select.disabled = false;
        }
      } catch (e) {
        select.innerHTML = safe(
          '<option value="" disabled selected>Failed to load binding</option>',
        );
        console.error("[Fuzzer] Failed to load binding:", e);
      }
    },

    updateStartButton() {
      const strategySelect = document.getElementById(
        "fuzzer-strategy-select",
      );
      const ifaceSelect = document.getElementById("fuzzer-interface-select");
      const methodSelect = document.getElementById("fuzzer-method-select");
      const startBtn = document.getElementById("fuzzer-start-btn");
      if (!startBtn) return;

      const strategy = strategySelect?.value;
      const hasInterface = !!ifaceSelect?.value;
      const hasMethod = !!methodSelect?.value;

      let enabled = false;
      if (strategy === "all_interfaces") enabled = true;
      else if (strategy === "all_methods") enabled = hasInterface;
      else if (strategy === "selected_method")
        enabled = hasInterface && hasMethod;

      startBtn.disabled =
        !enabled ||
        !(global.MojoGUI_State || {}).mojoAvailable ||
        this.running;
    },

    async start() {
      if (this.running) return;

      const strategySelect = document.getElementById(
        "fuzzer-strategy-select",
      );
      const ifaceSelect = document.getElementById("fuzzer-interface-select");
      const methodSelect = document.getElementById("fuzzer-method-select");
      const iterationsInput = document.getElementById("fuzzer-iterations");
      const delayInput = document.getElementById("fuzzer-delay");

      const strategy = strategySelect.value;
      const interfaceFqn = ifaceSelect.value;
      const methodName = methodSelect.value;
      const iterations = parseInt(iterationsInput.value) || 100;
      const delay = parseInt(delayInput.value) || 0;

      if (strategy === "selected_method" && (!interfaceFqn || !methodName)) {
        global.showToast("Select an interface and method", "warning");
        return;
      }
      if (strategy === "all_methods" && !interfaceFqn) {
        global.showToast("Select an interface", "warning");
        return;
      }

      this.running = true;
      this.aborted = false;
      this._objectCache = {};
      this.resetStats();

      document.getElementById("fuzzer-start-btn").disabled = true;
      document.getElementById("fuzzer-stop-btn").disabled = false;
      document.getElementById("fuzzer-progress-card").style.display = "block";

      const indicator = document.getElementById("fuzzer-running-indicator");
      if (indicator) {
        indicator.innerHTML = safe(
          '<span class="pulse-dot"></span><span>Fuzzing...</span>',
        );
      }

      let targets = [];

      if (strategy === "selected_method") {
        targets = [{ interface: interfaceFqn, method: methodName }];
      } else if (strategy === "all_methods") {
        const iface = (global.MojoGUI_State || {}).interfaces.find(
          (i) => i.module + "." + i.name === interfaceFqn,
        );
        if (iface && iface.methods) {
          targets = iface.methods.map((m) => ({
            interface: interfaceFqn,
            method: typeof m === "string" ? m : m.name,
          }));
        }
      } else if (strategy === "all_interfaces") {
        const interfaces = (global.MojoGUI_State || {}).interfaces || [];
        for (const iface of interfaces) {
          if (!iface.methods) continue;
          const fqn = iface.module + "." + iface.name;
          for (const m of iface.methods) {
            targets.push({
              interface: fqn,
              method: typeof m === "string" ? m : m.name,
            });
          }
        }
      }

      if (targets.length === 0) {
        global.showToast("No targets to fuzz", "warning");
        this.stop();
        return;
      }

      this.stats.startTime = Date.now();
      const outerIterations =
        strategy === "all_interfaces" ? 1 : iterations;
      const totalCalls = outerIterations * targets.length;

      let callIndex = 0;

      try {
        for (let i = 0; i < outerIterations && !this.aborted; i++) {
          for (const target of targets) {
            if (this.aborted) break;

            callIndex++;

            const pct = Math.floor((callIndex / totalCalls) * 100);
            const progressBar = document.getElementById(
              "fuzzer-progress-bar",
            );
            const progressText = document.getElementById(
              "fuzzer-progress-text",
            );
            if (progressBar) progressBar.style.width = pct + "%";
            if (progressText)
              progressText.textContent = `${callIndex} / ${totalCalls}`;

            await this.fuzzMethod(
              target.interface,
              target.method,
              callIndex,
            );

            if (delay > 0) {
              await new Promise((resolve) => setTimeout(resolve, delay));
            }
          }
        }
      } catch (e) {
        console.error("[Fuzzer] Unexpected engine error:", e);
      }

      this.stop();
      global.showToast(
        `Fuzzing complete: ${this.stats.calls} calls, ${this.stats.errors} errors, ${this.stats.crashes} crashes`,
        this.stats.crashes > 0 ? "warning" : "success",
      );
    },

    stop() {
      this.aborted = true;
      this.running = false;

      const startBtn = document.getElementById("fuzzer-start-btn");
      const stopBtn = document.getElementById("fuzzer-stop-btn");
      if (startBtn) startBtn.disabled = false;
      if (stopBtn) stopBtn.disabled = true;

      const indicator = document.getElementById("fuzzer-running-indicator");
      if (indicator) {
        indicator.innerHTML = safe(
          '<span style="color: var(--text-muted);">Stopped</span>',
        );
      }

      this.updateStartButton();
    },

    async fuzzMethod(interfaceFqn, methodName, iteration) {
      let params = {};
      let status = "success";
      let resultData = null;
      let errorMsg = null;

      try {
        await MojoLoader.ensureBinding(interfaceFqn);

        const methodDef = MojoReflectionService.findMethodDefinition(
          interfaceFqn,
          methodName,
        );

        if (methodDef && methodDef.parameters && methodDef.parameters.length > 0) {
          for (const param of methodDef.parameters) {
            params[param.name] = FuzzGenerators.generate(param);
          }
        }

        const target = this._objectCache[interfaceFqn]
          ? {
              objectId: this._objectCache[interfaceFqn],
              interface: interfaceFqn,
            }
          : { interface: interfaceFqn };

        const result = await MojoExecutionService.call(
          target,
          methodName,
          params,
          {},
        );

        resultData = result;
        status = "success";
        this.stats.successes++;

        if (result && result.objectId) {
          this._objectCache[interfaceFqn] = result.objectId;
        }
      } catch (e) {
        errorMsg = e.message || String(e);

        const isCrash =
          errorMsg.includes("pipe") ||
          errorMsg.includes("disconnect") ||
          errorMsg.includes("connection") ||
          errorMsg.includes("closed") ||
          errorMsg.includes("reset");

        status = isCrash ? "crash" : "error";

        if (isCrash) {
          this.stats.crashes++;
          delete this._objectCache[interfaceFqn];
        } else {
          this.stats.errors++;
        }

        const errorKey = `${interfaceFqn}.${methodName}: ${errorMsg.substring(0, 200)}`;
        const existing = this.uniqueErrors.get(errorKey);
        if (existing) {
          existing.count++;
        } else {
          this.uniqueErrors.set(errorKey, {
            count: 1,
            firstParams: params,
            firstMethod: methodName,
            firstInterface: interfaceFqn,
            error: errorMsg,
          });
        }
      }

      this.stats.calls++;

      this.addResult({
        index: iteration,
        interface: interfaceFqn,
        method: methodName,
        params,
        status,
        result: resultData,
        error: errorMsg,
        timestamp: Date.now(),
      });

      this.updateStats();
    },

    addResult(entry) {
      this.results.push(entry);

      const log = document.getElementById("fuzzer-results-log");
      if (!log) return;

      if (this.results.length === 1) {
        log.innerHTML = "";
      }

      const statusClass =
        entry.status === "success"
          ? "result-success"
          : entry.status === "crash"
            ? "result-crash"
            : "result-error";

      const statusLabel =
        entry.status === "success"
          ? "OK"
          : entry.status === "crash"
            ? "CRASH"
            : "ERR";

      const shortMethod =
        entry.method.length > 20
          ? entry.method.substring(0, 20) + "..."
          : entry.method;

      const div = document.createElement("div");
      div.className = `fuzzer-result-entry ${statusClass}`;
      div.dataset.index = entry.index;
      div.innerHTML = safe(
        `<span class="result-index">#${entry.index}</span>` +
          `<span class="result-method" title="${escapeHtml(entry.interface + "." + entry.method)}">${escapeHtml(shortMethod)}</span>` +
          `<span class="result-status">${statusLabel}</span>`,
      );

      log.appendChild(div);
      log.scrollTop = log.scrollHeight;
    },

    toggleResultDetail(index, entryElement) {
      const existing = entryElement.nextElementSibling;
      if (
        existing &&
        existing.classList.contains("fuzzer-result-detail")
      ) {
        existing.remove();
        return;
      }

      const entry = this.results.find((r) => r.index === index);
      if (!entry) return;

      const detail = document.createElement("div");
      detail.className = "fuzzer-result-detail";

      let detailText = `Interface: ${entry.interface}\n`;
      detailText += `Method: ${entry.method}\n`;
      detailText += `Status: ${entry.status}\n`;
      detailText += `Params: ${MojoUtils.safeStringify(entry.params, 2)}\n`;

      if (entry.error) {
        detailText += `Error: ${entry.error}\n`;
      }
      if (entry.result) {
        detailText += `Result: ${MojoUtils.safeStringify(entry.result, 2)}\n`;
      }

      detail.textContent = detailText;

      const replayBtn = document.createElement("button");
      replayBtn.className = "btn btn-secondary btn-small";
      replayBtn.style.cssText =
        "margin-top: 6px; font-size: 0.7rem;";
      replayBtn.dataset.action = "replay";
      replayBtn.dataset.index = index;
      replayBtn.textContent = "Replay This Case";
      detail.appendChild(replayBtn);

      entryElement.after(detail);
    },

    updateStats() {
      const el = (id) => document.getElementById(id);

      const callsEl = el("fuzzer-stat-calls");
      const successEl = el("fuzzer-stat-success");
      const errorsEl = el("fuzzer-stat-errors");
      const crashesEl = el("fuzzer-stat-crashes");
      const uniqueEl = el("fuzzer-stat-unique");
      const rateEl = el("fuzzer-stat-rate");

      if (callsEl) callsEl.textContent = this.stats.calls;
      if (successEl) successEl.textContent = this.stats.successes;
      if (errorsEl) errorsEl.textContent = this.stats.errors;
      if (crashesEl) crashesEl.textContent = this.stats.crashes;
      if (uniqueEl) uniqueEl.textContent = this.uniqueErrors.size;

      const elapsed = (Date.now() - this.stats.startTime) / 1000;
      const rate = elapsed > 0 ? (this.stats.calls / elapsed).toFixed(1) : "0";
      if (rateEl) rateEl.textContent = rate;

      if (this.uniqueErrors.size > 0) {
        const errorsCard = document.getElementById("fuzzer-errors-card");
        if (errorsCard) errorsCard.style.display = "block";

        const errorsList = document.getElementById("fuzzer-errors-list");
        if (errorsList) {
          let html = "";
          for (const [key, data] of this.uniqueErrors) {
            const shortKey =
              key.length > 80 ? key.substring(0, 80) + "..." : key;
            html +=
              `<div class="fuzzer-error-item">` +
              `<span title="${escapeHtml(key)}">${escapeHtml(shortKey)}</span>` +
              `<span class="fuzzer-error-count">${data.count}x</span>` +
              `</div>`;
          }
          errorsList.innerHTML = safe(html);
        }
      }
    },

    async replayCase(index) {
      const entry = this.results.find((r) => r.index === index);
      if (!entry) return;

      global.showToast(
        `Replaying ${entry.interface}.${entry.method}...`,
        "info",
      );

      try {
        await MojoExecutionService.call(
          { interface: entry.interface },
          entry.method,
          entry.params,
          {},
        );
        global.showToast("Replay succeeded", "success");
      } catch (e) {
        global.showToast("Replay error: " + e.message, "error");
      }
    },

    resetStats() {
      this.stats = {
        calls: 0,
        successes: 0,
        errors: 0,
        crashes: 0,
        startTime: 0,
      };
      this.results = [];
      this.uniqueErrors.clear();
      this.updateStats();

      const errorsCard = document.getElementById("fuzzer-errors-card");
      if (errorsCard) errorsCard.style.display = "none";
    },

    clearResults() {
      this.results = [];
      const log = document.getElementById("fuzzer-results-log");
      if (log) {
        log.innerHTML = safe(
          '<div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 20px;">Results cleared</div>',
        );
      }
    },
  };

  global.MojoFuzzer = MojoFuzzer;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => MojoFuzzer.init());
  } else {
    MojoFuzzer.init();
  }
})(this);
