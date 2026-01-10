// Auto-generated MojoJS binding
// Source: chromium_src/content/common/child_process.mojom
// Module: content.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var IPC = IPC || {};
var mojo_base = mojo_base || {};
var tracing = tracing || {};

content.mojom.LoggingSettingsSpec = { $: {} };
content.mojom.ChildProcessHost = {};
content.mojom.ChildProcessHost.$interfaceName = 'content.mojom.ChildProcessHost';
content.mojom.ChildProcessHost_Ping_ParamsSpec = { $: {} };
content.mojom.ChildProcessHost_Ping_ResponseParamsSpec = { $: {} };
content.mojom.ChildProcessHost_BindHostReceiver_ParamsSpec = { $: {} };
content.mojom.ChildProcess = {};
content.mojom.ChildProcess.$interfaceName = 'content.mojom.ChildProcess';
content.mojom.ChildProcess_ProcessShutdown_ParamsSpec = { $: {} };
content.mojom.ChildProcess_GetTaskPort_ParamsSpec = { $: {} };
content.mojom.ChildProcess_GetTaskPort_ResponseParamsSpec = { $: {} };
content.mojom.ChildProcess_SetIPCLoggingEnabled_ParamsSpec = { $: {} };
content.mojom.ChildProcess_GetBackgroundTracingAgentProvider_ParamsSpec = { $: {} };
content.mojom.ChildProcess_EnableSystemTracingService_ParamsSpec = { $: {} };
content.mojom.ChildProcess_CrashHungProcess_ParamsSpec = { $: {} };
content.mojom.ChildProcess_BindServiceInterface_ParamsSpec = { $: {} };
content.mojom.ChildProcess_BindReceiver_ParamsSpec = { $: {} };
content.mojom.ChildProcess_SetProfilingFile_ParamsSpec = { $: {} };
content.mojom.ChildProcess_WriteClangProfilingProfile_ParamsSpec = { $: {} };
content.mojom.ChildProcess_WriteClangProfilingProfile_ResponseParamsSpec = { $: {} };
content.mojom.ChildProcess_SetPseudonymizationSalt_ParamsSpec = { $: {} };
content.mojom.ChildProcess_ReinitializeLogging_ParamsSpec = { $: {} };
content.mojom.ChildProcess_OnMemoryPressure_ParamsSpec = { $: {} };
content.mojom.ChildProcess_SetBatterySaverMode_ParamsSpec = { $: {} };

// Struct: LoggingSettings
mojo.internal.Struct(
    content.mojom.LoggingSettingsSpec, 'content.mojom.LoggingSettings', [
      mojo.internal.StructField('log_file_descriptor', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('logging_dest', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ChildProcessHost
mojo.internal.Struct(
    content.mojom.ChildProcessHost_Ping_ParamsSpec, 'content.mojom.ChildProcessHost_Ping_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.ChildProcessHost_Ping_ResponseParamsSpec, 'content.mojom.ChildProcessHost_Ping_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.ChildProcessHost_BindHostReceiver_ParamsSpec, 'content.mojom.ChildProcessHost_BindHostReceiver_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo_base.mojom.GenericPendingReceiverSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.ChildProcessHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.ChildProcessHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.ChildProcessHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.ChildProcessHostPendingReceiver,
      handle);
    this.$ = new content.mojom.ChildProcessHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.ChildProcessHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ChildProcessHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  ping() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.ChildProcessHost_Ping_ParamsSpec,
      content.mojom.ChildProcessHost_Ping_ResponseParamsSpec,
      [],
      false);
  }

  bindHostReceiver(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.mojom.ChildProcessHost_BindHostReceiver_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

content.mojom.ChildProcessHost.getRemote = function() {
  let remote = new content.mojom.ChildProcessHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.ChildProcessHost',
    'context');
  return remote.$;
};

content.mojom.ChildProcessHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ChildProcessHost', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Ping
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcessHost_Ping_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Ping (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindHostReceiver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcessHost_BindHostReceiver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindHostReceiver (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcessHost_Ping_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.ping');
          const result = this.impl.ping();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.ChildProcessHost_Ping_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcessHost_BindHostReceiver_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.bindHostReceiver');
          const result = this.impl.bindHostReceiver(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.ChildProcessHostReceiver = content.mojom.ChildProcessHostReceiver;

content.mojom.ChildProcessHostPtr = content.mojom.ChildProcessHostRemote;
content.mojom.ChildProcessHostRequest = content.mojom.ChildProcessHostPendingReceiver;


// Interface: ChildProcess
mojo.internal.Struct(
    content.mojom.ChildProcess_ProcessShutdown_ParamsSpec, 'content.mojom.ChildProcess_ProcessShutdown_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_GetTaskPort_ParamsSpec, 'content.mojom.ChildProcess_GetTaskPort_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_GetTaskPort_ResponseParamsSpec, 'content.mojom.ChildProcess_GetTaskPort_ResponseParams', [
      mojo.internal.StructField('task_port', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_SetIPCLoggingEnabled_ParamsSpec, 'content.mojom.ChildProcess_SetIPCLoggingEnabled_Params', [
      mojo.internal.StructField('on', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_GetBackgroundTracingAgentProvider_ParamsSpec, 'content.mojom.ChildProcess_GetBackgroundTracingAgentProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(tracing.mojom.BackgroundTracingAgentProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_EnableSystemTracingService_ParamsSpec, 'content.mojom.ChildProcess_EnableSystemTracingService_Params', [
      mojo.internal.StructField('remote', 0, 0, mojo.internal.InterfaceProxy(tracing.mojom.SystemTracingServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_CrashHungProcess_ParamsSpec, 'content.mojom.ChildProcess_CrashHungProcess_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_BindServiceInterface_ParamsSpec, 'content.mojom.ChildProcess_BindServiceInterface_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo_base.mojom.GenericPendingReceiverSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_BindReceiver_ParamsSpec, 'content.mojom.ChildProcess_BindReceiver_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo_base.mojom.GenericPendingReceiverSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_SetProfilingFile_ParamsSpec, 'content.mojom.ChildProcess_SetProfilingFile_Params', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_WriteClangProfilingProfile_ParamsSpec, 'content.mojom.ChildProcess_WriteClangProfilingProfile_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_WriteClangProfilingProfile_ResponseParamsSpec, 'content.mojom.ChildProcess_WriteClangProfilingProfile_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_SetPseudonymizationSalt_ParamsSpec, 'content.mojom.ChildProcess_SetPseudonymizationSalt_Params', [
      mojo.internal.StructField('salt', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_ReinitializeLogging_ParamsSpec, 'content.mojom.ChildProcess_ReinitializeLogging_Params', [
      mojo.internal.StructField('settings', 0, 0, content.mojom.LoggingSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_OnMemoryPressure_ParamsSpec, 'content.mojom.ChildProcess_OnMemoryPressure_Params', [
      mojo.internal.StructField('memory_pressure_level', 0, 0, mojo_base.mojom.MemoryPressureLevelSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_SetBatterySaverMode_ParamsSpec, 'content.mojom.ChildProcess_SetBatterySaverMode_Params', [
      mojo.internal.StructField('battery_saver_mode_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.ChildProcessPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.ChildProcessRemote = class {
  static get $interfaceName() {
    return 'content.mojom.ChildProcess';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.ChildProcessPendingReceiver,
      handle);
    this.$ = new content.mojom.ChildProcessRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.ChildProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ChildProcess', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  processShutdown() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.ChildProcess_ProcessShutdown_ParamsSpec,
      null,
      [],
      false);
  }

  getTaskPort() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.mojom.ChildProcess_GetTaskPort_ParamsSpec,
      content.mojom.ChildProcess_GetTaskPort_ResponseParamsSpec,
      [],
      false);
  }

  setIPCLoggingEnabled(on) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      content.mojom.ChildProcess_SetIPCLoggingEnabled_ParamsSpec,
      null,
      [on],
      false);
  }

  getBackgroundTracingAgentProvider(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      content.mojom.ChildProcess_GetBackgroundTracingAgentProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  enableSystemTracingService(remote) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      content.mojom.ChildProcess_EnableSystemTracingService_ParamsSpec,
      null,
      [remote],
      false);
  }

  crashHungProcess() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      content.mojom.ChildProcess_CrashHungProcess_ParamsSpec,
      null,
      [],
      false);
  }

  bindServiceInterface(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      content.mojom.ChildProcess_BindServiceInterface_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindReceiver(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      content.mojom.ChildProcess_BindReceiver_ParamsSpec,
      null,
      [receiver],
      false);
  }

  setProfilingFile(file) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      content.mojom.ChildProcess_SetProfilingFile_ParamsSpec,
      null,
      [file],
      false);
  }

  writeClangProfilingProfile() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      content.mojom.ChildProcess_WriteClangProfilingProfile_ParamsSpec,
      content.mojom.ChildProcess_WriteClangProfilingProfile_ResponseParamsSpec,
      [],
      false);
  }

  setPseudonymizationSalt(salt) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      content.mojom.ChildProcess_SetPseudonymizationSalt_ParamsSpec,
      null,
      [salt],
      false);
  }

  reinitializeLogging(settings) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      content.mojom.ChildProcess_ReinitializeLogging_ParamsSpec,
      null,
      [settings],
      false);
  }

  onMemoryPressure(memory_pressure_level) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      content.mojom.ChildProcess_OnMemoryPressure_ParamsSpec,
      null,
      [memory_pressure_level],
      false);
  }

  setBatterySaverMode(battery_saver_mode_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      content.mojom.ChildProcess_SetBatterySaverMode_ParamsSpec,
      null,
      [battery_saver_mode_enabled],
      false);
  }

};

content.mojom.ChildProcess.getRemote = function() {
  let remote = new content.mojom.ChildProcessRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.ChildProcess',
    'context');
  return remote.$;
};

content.mojom.ChildProcessReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ChildProcess', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ProcessShutdown
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_ProcessShutdown_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProcessShutdown (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetTaskPort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_GetTaskPort_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTaskPort (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetIPCLoggingEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_SetIPCLoggingEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIPCLoggingEnabled (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetBackgroundTracingAgentProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_GetBackgroundTracingAgentProvider_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBackgroundTracingAgentProvider (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: EnableSystemTracingService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_EnableSystemTracingService_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableSystemTracingService (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CrashHungProcess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_CrashHungProcess_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CrashHungProcess (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: BindServiceInterface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_BindServiceInterface_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindServiceInterface (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: BindReceiver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_BindReceiver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindReceiver (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetProfilingFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_SetProfilingFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetProfilingFile (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: WriteClangProfilingProfile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_WriteClangProfilingProfile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteClangProfilingProfile (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetPseudonymizationSalt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_SetPseudonymizationSalt_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPseudonymizationSalt (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: ReinitializeLogging
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_ReinitializeLogging_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReinitializeLogging (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OnMemoryPressure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_OnMemoryPressure_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMemoryPressure (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetBatterySaverMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_SetBatterySaverMode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBatterySaverMode (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_ProcessShutdown_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.processShutdown');
          const result = this.impl.processShutdown();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_GetTaskPort_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getTaskPort');
          const result = this.impl.getTaskPort();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.ChildProcess_GetTaskPort_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_SetIPCLoggingEnabled_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setIPCLoggingEnabled');
          const result = this.impl.setIPCLoggingEnabled(params.on);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_GetBackgroundTracingAgentProvider_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getBackgroundTracingAgentProvider');
          const result = this.impl.getBackgroundTracingAgentProvider(params.receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_EnableSystemTracingService_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.enableSystemTracingService');
          const result = this.impl.enableSystemTracingService(params.remote);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_CrashHungProcess_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.crashHungProcess');
          const result = this.impl.crashHungProcess();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_BindServiceInterface_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.bindServiceInterface');
          const result = this.impl.bindServiceInterface(params.receiver);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_BindReceiver_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.bindReceiver');
          const result = this.impl.bindReceiver(params.receiver);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_SetProfilingFile_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setProfilingFile');
          const result = this.impl.setProfilingFile(params.file);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_WriteClangProfilingProfile_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.writeClangProfilingProfile');
          const result = this.impl.writeClangProfilingProfile();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.ChildProcess_WriteClangProfilingProfile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_SetPseudonymizationSalt_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setPseudonymizationSalt');
          const result = this.impl.setPseudonymizationSalt(params.salt);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_ReinitializeLogging_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.reinitializeLogging');
          const result = this.impl.reinitializeLogging(params.settings);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_OnMemoryPressure_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onMemoryPressure');
          const result = this.impl.onMemoryPressure(params.memory_pressure_level);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_SetBatterySaverMode_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setBatterySaverMode');
          const result = this.impl.setBatterySaverMode(params.battery_saver_mode_enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.ChildProcessReceiver = content.mojom.ChildProcessReceiver;

content.mojom.ChildProcessPtr = content.mojom.ChildProcessRemote;
content.mojom.ChildProcessRequest = content.mojom.ChildProcessPendingReceiver;

