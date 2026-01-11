// Auto-generated MojoJS binding
 // Source: chromium_src/services/network/public/mojom/reporting_service.mojom
 // Module: network.mojom

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
 

 mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.network.mojom.ReportingApiReportStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.ReportingApiReportSpec = { $: {} };
mojo.internal.bindings.network.mojom.ReportingApiEndpointSpec = { $: {} };
mojo.internal.bindings.network.mojom.ReportingApiObserver = {};
mojo.internal.bindings.network.mojom.ReportingApiObserver.$interfaceName = 'network.mojom.ReportingApiObserver';
mojo.internal.bindings.network.mojom.ReportingApiObserver_OnReportAdded_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.ReportingApiObserver_OnReportUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.ReportingApiObserver_OnEndpointsUpdatedForOrigin_ParamsSpec = { $: {} };

// Enum: ReportingApiReportStatus
mojo.internal.bindings.network.mojom.ReportingApiReportStatus = {
  kQueued: 0,
  kPending: 1,
  kDoomed: 2,
  kSuccess: 3,
};

// Struct: ReportingApiReport
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.ReportingApiReportSpec, 'network.mojom.ReportingApiReport', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_group', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_timestamp', 32, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_body', 40, 0, mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 48, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.ReportingApiReportStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_depth', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_attempts', 60, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: ReportingApiEndpoint
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.ReportingApiEndpointSpec, 'network.mojom.ReportingApiEndpoint', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_group_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 24, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reporting_source', 32, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_attempted_uploads', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_successful_uploads', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_attempted_reports', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_successful_reports', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_priority', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_weight', 60, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 72]]);

// Interface: ReportingApiObserver
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.ReportingApiObserver_OnReportAdded_ParamsSpec, 'network.mojom.ReportingApiObserver_OnReportAdded_Params', [
      mojo.internal.StructField('arg_report', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.ReportingApiReportSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.ReportingApiObserver_OnReportUpdated_ParamsSpec, 'network.mojom.ReportingApiObserver_OnReportUpdated_Params', [
      mojo.internal.StructField('arg_report', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.ReportingApiReportSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.ReportingApiObserver_OnEndpointsUpdatedForOrigin_ParamsSpec, 'network.mojom.ReportingApiObserver_OnEndpointsUpdatedForOrigin_Params', [
      mojo.internal.StructField('arg_endpoints', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.network.mojom.ReportingApiEndpointSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.ReportingApiObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.ReportingApiObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ReportingApiObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.ReportingApiObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.ReportingApiObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onReportAdded(arg_report) {
    return this.$.onReportAdded(arg_report);
  }
  onReportUpdated(arg_report) {
    return this.$.onReportUpdated(arg_report);
  }
  onEndpointsUpdatedForOrigin(arg_endpoints) {
    return this.$.onEndpointsUpdatedForOrigin(arg_endpoints);
  }
};

mojo.internal.bindings.network.mojom.ReportingApiObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ReportingApiObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onReportAdded(arg_report) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.ReportingApiObserver_OnReportAdded_ParamsSpec,
      null,
      [arg_report],
      false);
  }

  onReportUpdated(arg_report) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.ReportingApiObserver_OnReportUpdated_ParamsSpec,
      null,
      [arg_report],
      false);
  }

  onEndpointsUpdatedForOrigin(arg_endpoints) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.ReportingApiObserver_OnEndpointsUpdatedForOrigin_ParamsSpec,
      null,
      [arg_endpoints],
      false);
  }

};

mojo.internal.bindings.network.mojom.ReportingApiObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.ReportingApiObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ReportingApiObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.ReportingApiObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ReportingApiObserver', [
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
        
        // Try Method 0: OnReportAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ReportingApiObserver_OnReportAdded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReportAdded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnReportUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ReportingApiObserver_OnReportUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReportUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnEndpointsUpdatedForOrigin
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ReportingApiObserver_OnEndpointsUpdatedForOrigin_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEndpointsUpdatedForOrigin (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ReportingApiObserver_OnReportAdded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReportAdded');
          const result = this.impl.onReportAdded(params.arg_report);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ReportingApiObserver_OnReportUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReportUpdated');
          const result = this.impl.onReportUpdated(params.arg_report);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ReportingApiObserver_OnEndpointsUpdatedForOrigin_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEndpointsUpdatedForOrigin');
          const result = this.impl.onEndpointsUpdatedForOrigin(params.arg_endpoints);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.ReportingApiObserverReceiver = mojo.internal.bindings.network.mojom.ReportingApiObserverReceiver;

mojo.internal.bindings.network.mojom.ReportingApiObserverPtr = mojo.internal.bindings.network.mojom.ReportingApiObserverRemote;
mojo.internal.bindings.network.mojom.ReportingApiObserverRequest = mojo.internal.bindings.network.mojom.ReportingApiObserverPendingReceiver;

