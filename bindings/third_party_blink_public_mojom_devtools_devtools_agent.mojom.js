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

         const p = window.mojoVersion.split('.');
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.blink.mojom.DevToolsExecutionContextTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.DevToolsMessageSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DevToolsSessionStateSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DevToolsAgent = {};
mojo.internal.bindings.blink.mojom.DevToolsAgent.$interfaceName = 'blink.mojom.DevToolsAgent';
mojo.internal.bindings.blink.mojom.DevToolsAgent_AttachDevToolsSession_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DevToolsAgent_InspectElement_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DevToolsAgent_ReportChildTargets_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DevToolsAgent_ReportChildTargets_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DevToolsAgentHost = {};
mojo.internal.bindings.blink.mojom.DevToolsAgentHost.$interfaceName = 'blink.mojom.DevToolsAgentHost';
mojo.internal.bindings.blink.mojom.DevToolsAgentHost_ChildTargetCreated_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DevToolsAgentHost_BringToForeground_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DevToolsSession = {};
mojo.internal.bindings.blink.mojom.DevToolsSession.$interfaceName = 'blink.mojom.DevToolsSession';
mojo.internal.bindings.blink.mojom.DevToolsSession_DispatchProtocolCommand_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DevToolsSession_UnpauseAndTerminate_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DevToolsSessionHost = {};
mojo.internal.bindings.blink.mojom.DevToolsSessionHost.$interfaceName = 'blink.mojom.DevToolsSessionHost';
mojo.internal.bindings.blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec = { $: {} };

// Enum: DevToolsExecutionContextType
mojo.internal.bindings.blink.mojom.DevToolsExecutionContextType = {
  kDedicatedWorker: 0,
  kWorklet: 1,
};

// Struct: DevToolsMessage
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DevToolsMessageSpec, 'blink.mojom.DevToolsMessage', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DevToolsSessionState
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DevToolsSessionStateSpec, 'blink.mojom.DevToolsSessionState', [
      mojo.internal.StructField('arg_entries', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.Uint8, false), false), null, true, 0, undefined),
    ],
    [[0, 16]]);

// Interface: DevToolsAgent
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DevToolsAgent_AttachDevToolsSession_ParamsSpec, 'blink.mojom.DevToolsAgent_AttachDevToolsSession_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.DevToolsSessionHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 8, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.blink.mojom.DevToolsSessionSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_io_session', 16, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.DevToolsSessionSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_reattach_session_state', 24, 0, mojo.internal.bindings.blink.mojom.DevToolsSessionStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_script_to_evaluate_on_load', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_client_expects_binary_responses', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_client_is_trusted', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_session_waits_for_debugger', 48, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DevToolsAgent_InspectElement_ParamsSpec, 'blink.mojom.DevToolsAgent_InspectElement_Params', [
      mojo.internal.StructField('arg_point', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DevToolsAgent_ReportChildTargets_ParamsSpec, 'blink.mojom.DevToolsAgent_ReportChildTargets_Params', [
      mojo.internal.StructField('arg_report', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_wait_for_debugger', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DevToolsAgent_ReportChildTargets_ResponseParamsSpec, 'blink.mojom.DevToolsAgent_ReportChildTargets_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.blink.mojom.DevToolsAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.DevToolsAgentRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.DevToolsAgentPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.DevToolsAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  attachDevToolsSession(arg_host, arg_session, arg_io_session, arg_reattach_session_state, arg_script_to_evaluate_on_load, arg_client_expects_binary_responses, arg_client_is_trusted, arg_session_id, arg_session_waits_for_debugger) {
    return this.$.attachDevToolsSession(arg_host, arg_session, arg_io_session, arg_reattach_session_state, arg_script_to_evaluate_on_load, arg_client_expects_binary_responses, arg_client_is_trusted, arg_session_id, arg_session_waits_for_debugger);
  }
  inspectElement(arg_point) {
    return this.$.inspectElement(arg_point);
  }
  reportChildTargets(arg_report, arg_wait_for_debugger) {
    return this.$.reportChildTargets(arg_report, arg_wait_for_debugger);
  }
};

mojo.internal.bindings.blink.mojom.DevToolsAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DevToolsAgent', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  attachDevToolsSession(arg_host, arg_session, arg_io_session, arg_reattach_session_state, arg_script_to_evaluate_on_load, arg_client_expects_binary_responses, arg_client_is_trusted, arg_session_id, arg_session_waits_for_debugger) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.DevToolsAgent_AttachDevToolsSession_ParamsSpec,
      null,
      [arg_host, arg_session, arg_io_session, arg_reattach_session_state, arg_script_to_evaluate_on_load, arg_client_expects_binary_responses, arg_client_is_trusted, arg_session_id, arg_session_waits_for_debugger],
      false);
  }

  inspectElement(arg_point) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.DevToolsAgent_InspectElement_ParamsSpec,
      null,
      [arg_point],
      false);
  }

  reportChildTargets(arg_report, arg_wait_for_debugger) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.DevToolsAgent_ReportChildTargets_ParamsSpec,
      mojo.internal.bindings.blink.mojom.DevToolsAgent_ReportChildTargets_ResponseParamsSpec,
      [arg_report, arg_wait_for_debugger],
      false);
  }

};

mojo.internal.bindings.blink.mojom.DevToolsAgent.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.DevToolsAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsAgent',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.DevToolsAgentReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsAgent_AttachDevToolsSession_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsAgent_InspectElement_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsAgent_ReportChildTargets_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsAgent_AttachDevToolsSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.attachDevToolsSession');
          const result = this.impl.attachDevToolsSession(params.arg_host, params.arg_session, params.arg_io_session, params.arg_reattach_session_state, params.arg_script_to_evaluate_on_load, params.arg_client_expects_binary_responses, params.arg_client_is_trusted, params.arg_session_id, params.arg_session_waits_for_debugger);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsAgent_InspectElement_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.inspectElement');
          const result = this.impl.inspectElement(params.arg_point);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsAgent_ReportChildTargets_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportChildTargets');
          const result = this.impl.reportChildTargets(params.arg_report, params.arg_wait_for_debugger);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.DevToolsAgent_ReportChildTargets_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReportChildTargets FAILED:', e));
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

mojo.internal.bindings.blink.mojom.DevToolsAgentReceiver = mojo.internal.bindings.blink.mojom.DevToolsAgentReceiver;

mojo.internal.bindings.blink.mojom.DevToolsAgentPtr = mojo.internal.bindings.blink.mojom.DevToolsAgentRemote;
mojo.internal.bindings.blink.mojom.DevToolsAgentRequest = mojo.internal.bindings.blink.mojom.DevToolsAgentPendingReceiver;


// Interface: DevToolsAgentHost
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DevToolsAgentHost_ChildTargetCreated_ParamsSpec, 'blink.mojom.DevToolsAgentHost_ChildTargetCreated_Params', [
      mojo.internal.StructField('arg_worker_devtools_agent', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.DevToolsAgentSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_worker_devtools_agent_host', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.DevToolsAgentHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_devtools_worker_token', 32, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_context_type', 40, 0, mojo.internal.bindings.blink.mojom.DevToolsExecutionContextTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_waiting_for_debugger', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_ParamsSpec, 'blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_ParamsSpec, 'blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DevToolsAgentHost_BringToForeground_ParamsSpec, 'blink.mojom.DevToolsAgentHost_BringToForeground_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.blink.mojom.DevToolsAgentHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.DevToolsAgentHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsAgentHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.DevToolsAgentHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.DevToolsAgentHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  childTargetCreated(arg_worker_devtools_agent, arg_worker_devtools_agent_host, arg_url, arg_name, arg_devtools_worker_token, arg_waiting_for_debugger, arg_context_type) {
    return this.$.childTargetCreated(arg_worker_devtools_agent, arg_worker_devtools_agent_host, arg_url, arg_name, arg_devtools_worker_token, arg_waiting_for_debugger, arg_context_type);
  }
  mainThreadDebuggerPaused() {
    return this.$.mainThreadDebuggerPaused();
  }
  mainThreadDebuggerResumed() {
    return this.$.mainThreadDebuggerResumed();
  }
  bringToForeground() {
    return this.$.bringToForeground();
  }
};

mojo.internal.bindings.blink.mojom.DevToolsAgentHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DevToolsAgentHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  childTargetCreated(arg_worker_devtools_agent, arg_worker_devtools_agent_host, arg_url, arg_name, arg_devtools_worker_token, arg_waiting_for_debugger, arg_context_type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.DevToolsAgentHost_ChildTargetCreated_ParamsSpec,
      null,
      [arg_worker_devtools_agent, arg_worker_devtools_agent_host, arg_url, arg_name, arg_devtools_worker_token, arg_waiting_for_debugger, arg_context_type],
      false);
  }

  mainThreadDebuggerPaused() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_ParamsSpec,
      null,
      [],
      false);
  }

  mainThreadDebuggerResumed() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_ParamsSpec,
      null,
      [],
      false);
  }

  bringToForeground() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.DevToolsAgentHost_BringToForeground_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.DevToolsAgentHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.DevToolsAgentHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsAgentHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.DevToolsAgentHostReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsAgentHost_ChildTargetCreated_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsAgentHost_BringToForeground_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsAgentHost_ChildTargetCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.childTargetCreated');
          const result = this.impl.childTargetCreated(params.arg_worker_devtools_agent, params.arg_worker_devtools_agent_host, params.arg_url, params.arg_name, params.arg_devtools_worker_token, params.arg_waiting_for_debugger, params.arg_context_type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mainThreadDebuggerPaused');
          const result = this.impl.mainThreadDebuggerPaused();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mainThreadDebuggerResumed');
          const result = this.impl.mainThreadDebuggerResumed();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsAgentHost_BringToForeground_ParamsSpec.$.structSpec);
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

mojo.internal.bindings.blink.mojom.DevToolsAgentHostReceiver = mojo.internal.bindings.blink.mojom.DevToolsAgentHostReceiver;

mojo.internal.bindings.blink.mojom.DevToolsAgentHostPtr = mojo.internal.bindings.blink.mojom.DevToolsAgentHostRemote;
mojo.internal.bindings.blink.mojom.DevToolsAgentHostRequest = mojo.internal.bindings.blink.mojom.DevToolsAgentHostPendingReceiver;


// Interface: DevToolsSession
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DevToolsSession_DispatchProtocolCommand_ParamsSpec, 'blink.mojom.DevToolsSession_DispatchProtocolCommand_Params', [
      mojo.internal.StructField('arg_method', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_call_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DevToolsSession_UnpauseAndTerminate_ParamsSpec, 'blink.mojom.DevToolsSession_UnpauseAndTerminate_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.blink.mojom.DevToolsSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.DevToolsSessionRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.DevToolsSessionPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.DevToolsSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  dispatchProtocolCommand(arg_call_id, arg_method, arg_message) {
    return this.$.dispatchProtocolCommand(arg_call_id, arg_method, arg_message);
  }
  unpauseAndTerminate() {
    return this.$.unpauseAndTerminate();
  }
};

mojo.internal.bindings.blink.mojom.DevToolsSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DevToolsSession', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  dispatchProtocolCommand(arg_call_id, arg_method, arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.DevToolsSession_DispatchProtocolCommand_ParamsSpec,
      null,
      [arg_call_id, arg_method, arg_message],
      false);
  }

  unpauseAndTerminate() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.DevToolsSession_UnpauseAndTerminate_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.DevToolsSession.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.DevToolsSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsSession',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.DevToolsSessionReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsSession_DispatchProtocolCommand_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsSession_UnpauseAndTerminate_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsSession_DispatchProtocolCommand_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchProtocolCommand');
          const result = this.impl.dispatchProtocolCommand(params.arg_call_id, params.arg_method, params.arg_message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsSession_UnpauseAndTerminate_ParamsSpec.$.structSpec);
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

mojo.internal.bindings.blink.mojom.DevToolsSessionReceiver = mojo.internal.bindings.blink.mojom.DevToolsSessionReceiver;

mojo.internal.bindings.blink.mojom.DevToolsSessionPtr = mojo.internal.bindings.blink.mojom.DevToolsSessionRemote;
mojo.internal.bindings.blink.mojom.DevToolsSessionRequest = mojo.internal.bindings.blink.mojom.DevToolsSessionPendingReceiver;


// Interface: DevToolsSessionHost
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_ParamsSpec, 'blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.bindings.blink.mojom.DevToolsMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_updates', 8, 0, mojo.internal.bindings.blink.mojom.DevToolsSessionStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_call_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec, 'blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.bindings.blink.mojom.DevToolsMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_updates', 8, 0, mojo.internal.bindings.blink.mojom.DevToolsSessionStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.blink.mojom.DevToolsSessionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.DevToolsSessionHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsSessionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.DevToolsSessionHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.DevToolsSessionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  dispatchProtocolResponse(arg_message, arg_call_id, arg_updates) {
    return this.$.dispatchProtocolResponse(arg_message, arg_call_id, arg_updates);
  }
  dispatchProtocolNotification(arg_message, arg_updates) {
    return this.$.dispatchProtocolNotification(arg_message, arg_updates);
  }
};

mojo.internal.bindings.blink.mojom.DevToolsSessionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DevToolsSessionHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  dispatchProtocolResponse(arg_message, arg_call_id, arg_updates) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_ParamsSpec,
      null,
      [arg_message, arg_call_id, arg_updates],
      false);
  }

  dispatchProtocolNotification(arg_message, arg_updates) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec,
      null,
      [arg_message, arg_updates],
      false);
  }

};

mojo.internal.bindings.blink.mojom.DevToolsSessionHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.DevToolsSessionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsSessionHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.DevToolsSessionHostReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchProtocolResponse');
          const result = this.impl.dispatchProtocolResponse(params.arg_message, params.arg_call_id, params.arg_updates);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchProtocolNotification');
          const result = this.impl.dispatchProtocolNotification(params.arg_message, params.arg_updates);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.DevToolsSessionHostReceiver = mojo.internal.bindings.blink.mojom.DevToolsSessionHostReceiver;

mojo.internal.bindings.blink.mojom.DevToolsSessionHostPtr = mojo.internal.bindings.blink.mojom.DevToolsSessionHostRemote;
mojo.internal.bindings.blink.mojom.DevToolsSessionHostRequest = mojo.internal.bindings.blink.mojom.DevToolsSessionHostPendingReceiver;

