// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/shared_storage/shared_storage_worklet_service.mojom
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
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var url = url || {};

blink.mojom.GetInterestGroupsResultSpec = { $: {} };
blink.mojom.SharedStorageWorkletPermissionsPolicyStateSpec = { $: {} };
blink.mojom.SharedStorageKeyAndOrValueSpec = { $: {} };
blink.mojom.PrivateAggregationOperationDetailsSpec = { $: {} };
blink.mojom.SharedStorageEntriesListener = {};
blink.mojom.SharedStorageEntriesListener.$interfaceName = 'blink.mojom.SharedStorageEntriesListener';
blink.mojom.SharedStorageEntriesListener_DidReadEntries_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient = {};
blink.mojom.SharedStorageWorkletServiceClient.$interfaceName = 'blink.mojom.SharedStorageWorkletServiceClient';
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageKeys_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageEntries_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_DidAddMessageToConsole_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_RecordUseCounters_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletService = {};
blink.mojom.SharedStorageWorkletService.$interfaceName = 'blink.mojom.SharedStorageWorkletService';
blink.mojom.SharedStorageWorkletService_Initialize_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletService_Initialize_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletService_AddModule_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletService_AddModule_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletService_RunOperation_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletService_RunOperation_ResponseParamsSpec = { $: {} };

// Union: GetInterestGroupsResult
mojo.internal.Union(
    blink.mojom.GetInterestGroupsResultSpec, 'blink.mojom.GetInterestGroupsResult', {
      'error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'groups': {
        'ordinal': 1,
        'type': mojo.internal.Array(blink.mojom.StorageInterestGroupSpec.$, false),
        'nullable': false,
      },
    });

// Struct: SharedStorageWorkletPermissionsPolicyState
mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletPermissionsPolicyStateSpec, 'blink.mojom.SharedStorageWorkletPermissionsPolicyState', [
      mojo.internal.StructField('private_aggregation_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('join_ad_interest_group_allowed', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('run_ad_auction_allowed', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SharedStorageKeyAndOrValue
mojo.internal.Struct(
    blink.mojom.SharedStorageKeyAndOrValueSpec, 'blink.mojom.SharedStorageKeyAndOrValue', [
      mojo.internal.StructField('key', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PrivateAggregationOperationDetails
mojo.internal.Struct(
    blink.mojom.PrivateAggregationOperationDetailsSpec, 'blink.mojom.PrivateAggregationOperationDetails', [
      mojo.internal.StructField('pa_host', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.PrivateAggregationHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('filtering_id_max_bytes', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SharedStorageEntriesListener
mojo.internal.Struct(
    blink.mojom.SharedStorageEntriesListener_DidReadEntries_ParamsSpec, 'blink.mojom.SharedStorageEntriesListener_DidReadEntries_Params', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('entries', 8, 0, mojo.internal.Array(blink.mojom.SharedStorageKeyAndOrValueSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('total_queued_to_send', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('success', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_more_entries', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

blink.mojom.SharedStorageEntriesListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SharedStorageEntriesListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedStorageEntriesListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SharedStorageEntriesListenerPendingReceiver,
      handle);
    this.$ = new blink.mojom.SharedStorageEntriesListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SharedStorageEntriesListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SharedStorageEntriesListener', [
      { explicit: null },
    ]);
  }

  didReadEntries(success, error_message, entries, has_more_entries, total_queued_to_send) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.SharedStorageEntriesListener_DidReadEntries_ParamsSpec,
      null,
      [success, error_message, entries, has_more_entries, total_queued_to_send],
      false);
  }

};

blink.mojom.SharedStorageEntriesListener.getRemote = function() {
  let remote = new blink.mojom.SharedStorageEntriesListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedStorageEntriesListener',
    'context');
  return remote.$;
};

blink.mojom.SharedStorageEntriesListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SharedStorageEntriesListener', [
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
        
        // Try Method 0: DidReadEntries
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageEntriesListener_DidReadEntries_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidReadEntries (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageEntriesListener_DidReadEntries_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.didReadEntries');
          const result = this.impl.didReadEntries(params.success, params.error_message, params.entries, params.has_more_entries, params.total_queued_to_send);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.SharedStorageEntriesListenerReceiver = blink.mojom.SharedStorageEntriesListenerReceiver;

blink.mojom.SharedStorageEntriesListenerPtr = blink.mojom.SharedStorageEntriesListenerRemote;
blink.mojom.SharedStorageEntriesListenerRequest = blink.mojom.SharedStorageEntriesListenerPendingReceiver;


// Interface: SharedStorageWorkletServiceClient
mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_Params', [
      mojo.internal.StructField('method_with_options', 0, 0, network.mojom.SharedStorageModifierMethodWithOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_Params', [
      mojo.internal.StructField('methods_with_options', 0, 0, network.mojom.SharedStorageBatchUpdateMethodsArgumentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('with_lock', 8, 0, network.mojom.LockNameSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_Params', [
      mojo.internal.StructField('key', 0, 0, network.mojom.SharedStorageKeyArgumentSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.SharedStorageGetStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageKeys_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageKeys_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.SharedStorageEntriesListenerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageEntries_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageEntries_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.SharedStorageEntriesListenerSpec), null, false, 0, undefined),
      mojo.internal.StructField('values_only', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('success', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bits', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.GetInterestGroupsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_DidAddMessageToConsole_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_DidAddMessageToConsole_Params', [
      mojo.internal.StructField('log_level', 0, 0, blink.mojom.ConsoleMessageLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_RecordUseCounters_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_RecordUseCounters_Params', [
      mojo.internal.StructField('features', 0, 0, mojo.internal.Array(blink.mojom.WebFeatureSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SharedStorageWorkletServiceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SharedStorageWorkletServiceClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedStorageWorkletServiceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SharedStorageWorkletServiceClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.SharedStorageWorkletServiceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SharedStorageWorkletServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SharedStorageWorkletServiceClient', [
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

  sharedStorageUpdate(method_with_options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ResponseParamsSpec,
      [method_with_options],
      false);
  }

  sharedStorageBatchUpdate(methods_with_options, with_lock) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ResponseParamsSpec,
      [methods_with_options, with_lock],
      false);
  }

  sharedStorageGet(key) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ResponseParamsSpec,
      [key],
      false);
  }

  sharedStorageKeys(listener) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageKeys_ParamsSpec,
      null,
      [listener],
      false);
  }

  sharedStorageEntries(listener, values_only) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageEntries_ParamsSpec,
      null,
      [listener, values_only],
      false);
  }

  sharedStorageLength() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ResponseParamsSpec,
      [],
      false);
  }

  sharedStorageRemainingBudget() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ResponseParamsSpec,
      [],
      false);
  }

  getInterestGroups() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ResponseParamsSpec,
      [],
      false);
  }

  didAddMessageToConsole(log_level, message) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_DidAddMessageToConsole_ParamsSpec,
      null,
      [log_level, message],
      false);
  }

  recordUseCounters(features) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_RecordUseCounters_ParamsSpec,
      null,
      [features],
      false);
  }

};

blink.mojom.SharedStorageWorkletServiceClient.getRemote = function() {
  let remote = new blink.mojom.SharedStorageWorkletServiceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedStorageWorkletServiceClient',
    'context');
  return remote.$;
};

blink.mojom.SharedStorageWorkletServiceClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SharedStorageWorkletServiceClient', [
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
        
        // Try Method 0: SharedStorageUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SharedStorageUpdate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SharedStorageBatchUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SharedStorageBatchUpdate (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SharedStorageGet
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SharedStorageGet (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SharedStorageKeys
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_SharedStorageKeys_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SharedStorageKeys (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SharedStorageEntries
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_SharedStorageEntries_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SharedStorageEntries (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SharedStorageLength
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SharedStorageLength (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SharedStorageRemainingBudget
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SharedStorageRemainingBudget (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetInterestGroups
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInterestGroups (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DidAddMessageToConsole
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_DidAddMessageToConsole_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidAddMessageToConsole (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RecordUseCounters
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_RecordUseCounters_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordUseCounters (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.sharedStorageUpdate');
          const result = this.impl.sharedStorageUpdate(params.method_with_options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.sharedStorageBatchUpdate');
          const result = this.impl.sharedStorageBatchUpdate(params.methods_with_options, params.with_lock);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.sharedStorageGet');
          const result = this.impl.sharedStorageGet(params.key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_SharedStorageKeys_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.sharedStorageKeys');
          const result = this.impl.sharedStorageKeys(params.listener);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_SharedStorageEntries_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.sharedStorageEntries');
          const result = this.impl.sharedStorageEntries(params.listener, params.values_only);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.sharedStorageLength');
          const result = this.impl.sharedStorageLength();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.sharedStorageRemainingBudget');
          const result = this.impl.sharedStorageRemainingBudget();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getInterestGroups');
          const result = this.impl.getInterestGroups();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_DidAddMessageToConsole_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.didAddMessageToConsole');
          const result = this.impl.didAddMessageToConsole(params.log_level, params.message);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageWorkletServiceClient_RecordUseCounters_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.recordUseCounters');
          const result = this.impl.recordUseCounters(params.features);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.SharedStorageWorkletServiceClientReceiver = blink.mojom.SharedStorageWorkletServiceClientReceiver;

blink.mojom.SharedStorageWorkletServiceClientPtr = blink.mojom.SharedStorageWorkletServiceClientRemote;
blink.mojom.SharedStorageWorkletServiceClientRequest = blink.mojom.SharedStorageWorkletServiceClientPendingReceiver;


// Interface: SharedStorageWorkletService
mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletService_Initialize_ParamsSpec, 'blink.mojom.SharedStorageWorkletService_Initialize_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('permissions_policy_state', 8, 0, blink.mojom.SharedStorageWorkletPermissionsPolicyStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('embedder_context', 16, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletService_Initialize_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletService_Initialize_ResponseParams', [
      mojo.internal.StructField('token', 0, 0, blink.mojom.SharedStorageWorkletTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletService_AddModule_ParamsSpec, 'blink.mojom.SharedStorageWorkletService_AddModule_Params', [
      mojo.internal.StructField('url_loader_factory', 0, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('script_source_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletService_AddModule_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletService_AddModule_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ParamsSpec, 'blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('urls', 8, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('serialized_data', 16, 0, blink.mojom.CloneableMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pa_operation_details', 24, 0, blink.mojom.PrivateAggregationOperationDetailsSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('success', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletService_RunOperation_ParamsSpec, 'blink.mojom.SharedStorageWorkletService_RunOperation_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('serialized_data', 8, 0, blink.mojom.CloneableMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pa_operation_details', 16, 0, blink.mojom.PrivateAggregationOperationDetailsSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletService_RunOperation_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletService_RunOperation_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.SharedStorageWorkletServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SharedStorageWorkletServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedStorageWorkletService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SharedStorageWorkletServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.SharedStorageWorkletServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SharedStorageWorkletServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SharedStorageWorkletService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  initialize(client, permissions_policy_state, embedder_context) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.SharedStorageWorkletService_Initialize_ParamsSpec,
      blink.mojom.SharedStorageWorkletService_Initialize_ResponseParamsSpec,
      [client, permissions_policy_state, embedder_context],
      false);
  }

  addModule(url_loader_factory, script_source_url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.SharedStorageWorkletService_AddModule_ParamsSpec,
      blink.mojom.SharedStorageWorkletService_AddModule_ResponseParamsSpec,
      [url_loader_factory, script_source_url],
      false);
  }

  runURLSelectionOperation(name, urls, serialized_data, pa_operation_details) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ParamsSpec,
      blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ResponseParamsSpec,
      [name, urls, serialized_data, pa_operation_details],
      false);
  }

  runOperation(name, serialized_data, pa_operation_details) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.SharedStorageWorkletService_RunOperation_ParamsSpec,
      blink.mojom.SharedStorageWorkletService_RunOperation_ResponseParamsSpec,
      [name, serialized_data, pa_operation_details],
      false);
  }

};

blink.mojom.SharedStorageWorkletService.getRemote = function() {
  let remote = new blink.mojom.SharedStorageWorkletServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedStorageWorkletService',
    'context');
  return remote.$;
};

blink.mojom.SharedStorageWorkletServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SharedStorageWorkletService', [
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
        
        // Try Method 0: Initialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageWorkletService_Initialize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddModule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageWorkletService_AddModule_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddModule (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RunURLSelectionOperation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunURLSelectionOperation (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RunOperation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageWorkletService_RunOperation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunOperation (3)');
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
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageWorkletService_Initialize_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.client, params.permissions_policy_state, params.embedder_context);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageWorkletService_Initialize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageWorkletService_AddModule_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.addModule');
          const result = this.impl.addModule(params.url_loader_factory, params.script_source_url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageWorkletService_AddModule_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.runURLSelectionOperation');
          const result = this.impl.runURLSelectionOperation(params.name, params.urls, params.serialized_data, params.pa_operation_details);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageWorkletService_RunOperation_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.runOperation');
          const result = this.impl.runOperation(params.name, params.serialized_data, params.pa_operation_details);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageWorkletService_RunOperation_ResponseParamsSpec);
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

blink.mojom.SharedStorageWorkletServiceReceiver = blink.mojom.SharedStorageWorkletServiceReceiver;

blink.mojom.SharedStorageWorkletServicePtr = blink.mojom.SharedStorageWorkletServiceRemote;
blink.mojom.SharedStorageWorkletServiceRequest = blink.mojom.SharedStorageWorkletServicePendingReceiver;

