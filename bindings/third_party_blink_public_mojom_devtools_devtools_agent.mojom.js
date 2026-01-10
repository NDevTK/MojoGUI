// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/devtools/devtools_agent.mojom
// Module: blink.mojom

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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
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
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};
var url = url || {};

blink.mojom.DevToolsExecutionContextTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.DevToolsMessageSpec = { $: {} };
blink.mojom.DevToolsSessionStateSpec = { $: {} };
blink.mojom.DevToolsAgent = {};
blink.mojom.DevToolsAgent.$interfaceName = 'blink.mojom.DevToolsAgent';
blink.mojom.DevToolsAgent_AttachDevToolsSession_ParamsSpec = { $: {} };
blink.mojom.DevToolsAgent_InspectElement_ParamsSpec = { $: {} };
blink.mojom.DevToolsAgent_ReportChildTargets_ParamsSpec = { $: {} };
blink.mojom.DevToolsAgent_ReportChildTargets_ResponseParamsSpec = { $: {} };
blink.mojom.DevToolsAgentHost = {};
blink.mojom.DevToolsAgentHost.$interfaceName = 'blink.mojom.DevToolsAgentHost';
blink.mojom.DevToolsAgentHost_ChildTargetCreated_ParamsSpec = { $: {} };
blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_ParamsSpec = { $: {} };
blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_ParamsSpec = { $: {} };
blink.mojom.DevToolsAgentHost_BringToForeground_ParamsSpec = { $: {} };
blink.mojom.DevToolsSession = {};
blink.mojom.DevToolsSession.$interfaceName = 'blink.mojom.DevToolsSession';
blink.mojom.DevToolsSession_DispatchProtocolCommand_ParamsSpec = { $: {} };
blink.mojom.DevToolsSession_UnpauseAndTerminate_ParamsSpec = { $: {} };
blink.mojom.DevToolsSessionHost = {};
blink.mojom.DevToolsSessionHost.$interfaceName = 'blink.mojom.DevToolsSessionHost';
blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_ParamsSpec = { $: {} };
blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec = { $: {} };

// Enum: DevToolsExecutionContextType
blink.mojom.DevToolsExecutionContextType = {
  kDedicatedWorker: 0,
  kWorklet: 1,
};

// Struct: DevToolsMessage
mojo.internal.Struct(
    blink.mojom.DevToolsMessageSpec, 'blink.mojom.DevToolsMessage', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DevToolsSessionState
mojo.internal.Struct(
    blink.mojom.DevToolsSessionStateSpec, 'blink.mojom.DevToolsSessionState', [
      mojo.internal.StructField('entries', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.Uint8, false), false), null, true, 0, undefined),
    ],
    [[0, 16]]);

// Interface: DevToolsAgent
mojo.internal.Struct(
    blink.mojom.DevToolsAgent_AttachDevToolsSession_ParamsSpec, 'blink.mojom.DevToolsAgent_AttachDevToolsSession_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('io_session', 16, 0, mojo.internal.InterfaceRequest(blink.mojom.DevToolsSessionSpec), null, false, 0, undefined),
      mojo.internal.StructField('reattach_session_state', 24, 0, blink.mojom.DevToolsSessionStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('script_to_evaluate_on_load', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('client_expects_binary_responses', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('client_is_trusted', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('session_waits_for_debugger', 48, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    blink.mojom.DevToolsAgent_InspectElement_ParamsSpec, 'blink.mojom.DevToolsAgent_InspectElement_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DevToolsAgent_ReportChildTargets_ParamsSpec, 'blink.mojom.DevToolsAgent_ReportChildTargets_Params', [
      mojo.internal.StructField('report', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('wait_for_debugger', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DevToolsAgent_ReportChildTargets_ResponseParamsSpec, 'blink.mojom.DevToolsAgent_ReportChildTargets_ResponseParams', [
    ],
    [[0, 8]]);

blink.mojom.DevToolsAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DevToolsAgentRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DevToolsAgentPendingReceiver,
      handle);
    this.$ = new blink.mojom.DevToolsAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DevToolsAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DevToolsAgent', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  attachDevToolsSession(host, session, io_session, reattach_session_state, script_to_evaluate_on_load, client_expects_binary_responses, client_is_trusted, session_id, session_waits_for_debugger) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.DevToolsAgent_AttachDevToolsSession_ParamsSpec,
      null,
      [host, session, io_session, reattach_session_state, script_to_evaluate_on_load, client_expects_binary_responses, client_is_trusted, session_id, session_waits_for_debugger],
      false);
  }

  inspectElement(point) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.DevToolsAgent_InspectElement_ParamsSpec,
      null,
      [point],
      false);
  }

  reportChildTargets(report, wait_for_debugger) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.DevToolsAgent_ReportChildTargets_ParamsSpec,
      blink.mojom.DevToolsAgent_ReportChildTargets_ResponseParamsSpec,
      [report, wait_for_debugger],
      false);
  }

};

blink.mojom.DevToolsAgent.getRemote = function() {
  let remote = new blink.mojom.DevToolsAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsAgent',
    'context');
  return remote.$;
};

blink.mojom.DevToolsAgentReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DevToolsAgent', [
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
        
        // Try Method 0: AttachDevToolsSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DevToolsAgent_AttachDevToolsSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AttachDevToolsSession (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: InspectElement
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DevToolsAgent_InspectElement_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InspectElement (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReportChildTargets
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DevToolsAgent_ReportChildTargets_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportChildTargets (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.DevToolsAgent_AttachDevToolsSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.attachDevToolsSession');
          const result = this.impl.attachDevToolsSession(params.host, params.session, params.io_session, params.reattach_session_state, params.script_to_evaluate_on_load, params.client_expects_binary_responses, params.client_is_trusted, params.session_id, params.session_waits_for_debugger);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DevToolsAgent_InspectElement_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.inspectElement');
          const result = this.impl.inspectElement(params.point);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DevToolsAgent_ReportChildTargets_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportChildTargets');
          const result = this.impl.reportChildTargets(params.report, params.wait_for_debugger);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DevToolsAgent_ReportChildTargets_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DevToolsAgentReceiver = blink.mojom.DevToolsAgentReceiver;

blink.mojom.DevToolsAgentPtr = blink.mojom.DevToolsAgentRemote;
blink.mojom.DevToolsAgentRequest = blink.mojom.DevToolsAgentPendingReceiver;


// Interface: DevToolsAgentHost
mojo.internal.Struct(
    blink.mojom.DevToolsAgentHost_ChildTargetCreated_ParamsSpec, 'blink.mojom.DevToolsAgentHost_ChildTargetCreated_Params', [
      mojo.internal.StructField('worker_devtools_agent', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.DevToolsAgentSpec), null, false, 0, undefined),
      mojo.internal.StructField('worker_devtools_agent_host', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.DevToolsAgentHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('devtools_worker_token', 32, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('context_type', 40, 0, blink.mojom.DevToolsExecutionContextTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('waiting_for_debugger', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_ParamsSpec, 'blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_ParamsSpec, 'blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.DevToolsAgentHost_BringToForeground_ParamsSpec, 'blink.mojom.DevToolsAgentHost_BringToForeground_Params', [
    ],
    [[0, 8]]);

blink.mojom.DevToolsAgentHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DevToolsAgentHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsAgentHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DevToolsAgentHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.DevToolsAgentHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DevToolsAgentHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DevToolsAgentHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  childTargetCreated(worker_devtools_agent, worker_devtools_agent_host, url, name, devtools_worker_token, waiting_for_debugger, context_type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.DevToolsAgentHost_ChildTargetCreated_ParamsSpec,
      null,
      [worker_devtools_agent, worker_devtools_agent_host, url, name, devtools_worker_token, waiting_for_debugger, context_type],
      false);
  }

  mainThreadDebuggerPaused() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_ParamsSpec,
      null,
      [],
      false);
  }

  mainThreadDebuggerResumed() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_ParamsSpec,
      null,
      [],
      false);
  }

  bringToForeground() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.DevToolsAgentHost_BringToForeground_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.DevToolsAgentHost.getRemote = function() {
  let remote = new blink.mojom.DevToolsAgentHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsAgentHost',
    'context');
  return remote.$;
};

blink.mojom.DevToolsAgentHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DevToolsAgentHost', [
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
        
        // Try Method 0: ChildTargetCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DevToolsAgentHost_ChildTargetCreated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ChildTargetCreated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: MainThreadDebuggerPaused
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MainThreadDebuggerPaused (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: MainThreadDebuggerResumed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MainThreadDebuggerResumed (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: BringToForeground
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DevToolsAgentHost_BringToForeground_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BringToForeground (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.DevToolsAgentHost_ChildTargetCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.childTargetCreated');
          const result = this.impl.childTargetCreated(params.worker_devtools_agent, params.worker_devtools_agent_host, params.url, params.name, params.devtools_worker_token, params.waiting_for_debugger, params.context_type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mainThreadDebuggerPaused');
          const result = this.impl.mainThreadDebuggerPaused();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mainThreadDebuggerResumed');
          const result = this.impl.mainThreadDebuggerResumed();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DevToolsAgentHost_BringToForeground_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bringToForeground');
          const result = this.impl.bringToForeground();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DevToolsAgentHostReceiver = blink.mojom.DevToolsAgentHostReceiver;

blink.mojom.DevToolsAgentHostPtr = blink.mojom.DevToolsAgentHostRemote;
blink.mojom.DevToolsAgentHostRequest = blink.mojom.DevToolsAgentHostPendingReceiver;


// Interface: DevToolsSession
mojo.internal.Struct(
    blink.mojom.DevToolsSession_DispatchProtocolCommand_ParamsSpec, 'blink.mojom.DevToolsSession_DispatchProtocolCommand_Params', [
      mojo.internal.StructField('method', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('call_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.DevToolsSession_UnpauseAndTerminate_ParamsSpec, 'blink.mojom.DevToolsSession_UnpauseAndTerminate_Params', [
    ],
    [[0, 8]]);

blink.mojom.DevToolsSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DevToolsSessionRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DevToolsSessionPendingReceiver,
      handle);
    this.$ = new blink.mojom.DevToolsSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DevToolsSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DevToolsSession', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  dispatchProtocolCommand(call_id, method, message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.DevToolsSession_DispatchProtocolCommand_ParamsSpec,
      null,
      [call_id, method, message],
      false);
  }

  unpauseAndTerminate() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.DevToolsSession_UnpauseAndTerminate_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.DevToolsSession.getRemote = function() {
  let remote = new blink.mojom.DevToolsSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsSession',
    'context');
  return remote.$;
};

blink.mojom.DevToolsSessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DevToolsSession', [
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
        
        // Try Method 0: DispatchProtocolCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DevToolsSession_DispatchProtocolCommand_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchProtocolCommand (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UnpauseAndTerminate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DevToolsSession_UnpauseAndTerminate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UnpauseAndTerminate (1)');
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
          const params = decoder.decodeStructInline(blink.mojom.DevToolsSession_DispatchProtocolCommand_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchProtocolCommand');
          const result = this.impl.dispatchProtocolCommand(params.call_id, params.method, params.message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DevToolsSession_UnpauseAndTerminate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unpauseAndTerminate');
          const result = this.impl.unpauseAndTerminate();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DevToolsSessionReceiver = blink.mojom.DevToolsSessionReceiver;

blink.mojom.DevToolsSessionPtr = blink.mojom.DevToolsSessionRemote;
blink.mojom.DevToolsSessionRequest = blink.mojom.DevToolsSessionPendingReceiver;


// Interface: DevToolsSessionHost
mojo.internal.Struct(
    blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_ParamsSpec, 'blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_Params', [
      mojo.internal.StructField('message', 0, 0, blink.mojom.DevToolsMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('updates', 8, 0, blink.mojom.DevToolsSessionStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('call_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec, 'blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_Params', [
      mojo.internal.StructField('message', 0, 0, blink.mojom.DevToolsMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('updates', 8, 0, blink.mojom.DevToolsSessionStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.DevToolsSessionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DevToolsSessionHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsSessionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DevToolsSessionHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.DevToolsSessionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DevToolsSessionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DevToolsSessionHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  dispatchProtocolResponse(message, call_id, updates) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_ParamsSpec,
      null,
      [message, call_id, updates],
      false);
  }

  dispatchProtocolNotification(message, updates) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec,
      null,
      [message, updates],
      false);
  }

};

blink.mojom.DevToolsSessionHost.getRemote = function() {
  let remote = new blink.mojom.DevToolsSessionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsSessionHost',
    'context');
  return remote.$;
};

blink.mojom.DevToolsSessionHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DevToolsSessionHost', [
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
        
        // Try Method 0: DispatchProtocolResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchProtocolResponse (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DispatchProtocolNotification
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchProtocolNotification (1)');
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
          const params = decoder.decodeStructInline(blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchProtocolResponse');
          const result = this.impl.dispatchProtocolResponse(params.message, params.call_id, params.updates);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchProtocolNotification');
          const result = this.impl.dispatchProtocolNotification(params.message, params.updates);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DevToolsSessionHostReceiver = blink.mojom.DevToolsSessionHostReceiver;

blink.mojom.DevToolsSessionHostPtr = blink.mojom.DevToolsSessionHostRemote;
blink.mojom.DevToolsSessionHostRequest = blink.mojom.DevToolsSessionHostPendingReceiver;

