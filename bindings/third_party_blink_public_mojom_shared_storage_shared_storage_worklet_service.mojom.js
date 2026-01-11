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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.blink.mojom.GetInterestGroupsResultSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletPermissionsPolicyStateSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageKeyAndOrValueSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PrivateAggregationOperationDetailsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageEntriesListener = {};
mojo.internal.bindings.blink.mojom.SharedStorageEntriesListenerSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.SharedStorageEntriesListener.$interfaceName = 'blink.mojom.SharedStorageEntriesListener';
mojo.internal.bindings.blink.mojom.SharedStorageEntriesListener_DidReadEntries_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient = {};
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClientSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient.$interfaceName = 'blink.mojom.SharedStorageWorkletServiceClient';
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageKeys_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageEntries_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_DidAddMessageToConsole_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_RecordUseCounters_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletService = {};
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletService.$interfaceName = 'blink.mojom.SharedStorageWorkletService';
mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_Initialize_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_Initialize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_AddModule_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_AddModule_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_RunOperation_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_RunOperation_ResponseParamsSpec = { $: {} };

// Union: GetInterestGroupsResult
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.GetInterestGroupsResultSpec, 'blink.mojom.GetInterestGroupsResult', {
      'arg_error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_groups': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.bindings.blink.mojom.StorageInterestGroupSpec.$, false),
        'nullable': false,
      },
    });

// Struct: SharedStorageWorkletPermissionsPolicyState
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletPermissionsPolicyStateSpec, 'blink.mojom.SharedStorageWorkletPermissionsPolicyState', [
      mojo.internal.StructField('arg_private_aggregation_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_join_ad_interest_group_allowed', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_run_ad_auction_allowed', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SharedStorageKeyAndOrValue
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageKeyAndOrValueSpec, 'blink.mojom.SharedStorageKeyAndOrValue', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PrivateAggregationOperationDetails
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PrivateAggregationOperationDetailsSpec, 'blink.mojom.PrivateAggregationOperationDetails', [
      mojo.internal.StructField('arg_pa_host', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.PrivateAggregationHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_filtering_id_max_bytes', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SharedStorageEntriesListener
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageEntriesListener_DidReadEntries_ParamsSpec, 'blink.mojom.SharedStorageEntriesListener_DidReadEntries_Params', [
      mojo.internal.StructField('arg_error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_entries', 8, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.SharedStorageKeyAndOrValueSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_total_queued_to_send', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_success', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_more_entries', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.blink.mojom.SharedStorageEntriesListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.SharedStorageEntriesListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedStorageEntriesListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.SharedStorageEntriesListenerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.SharedStorageEntriesListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  didReadEntries(arg_success, arg_error_message, arg_entries, arg_has_more_entries, arg_total_queued_to_send) {
    return this.$.didReadEntries(arg_success, arg_error_message, arg_entries, arg_has_more_entries, arg_total_queued_to_send);
  }
};

mojo.internal.bindings.blink.mojom.SharedStorageEntriesListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.SharedStorageEntriesListener', [
      { explicit: null },
    ]);
  }

  didReadEntries(arg_success, arg_error_message, arg_entries, arg_has_more_entries, arg_total_queued_to_send) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.SharedStorageEntriesListener_DidReadEntries_ParamsSpec,
      null,
      [arg_success, arg_error_message, arg_entries, arg_has_more_entries, arg_total_queued_to_send],
      false);
  }

};

mojo.internal.bindings.blink.mojom.SharedStorageEntriesListener.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.SharedStorageEntriesListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedStorageEntriesListener',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.SharedStorageEntriesListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.SharedStorageEntriesListener', [
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageEntriesListener_DidReadEntries_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageEntriesListener_DidReadEntries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didReadEntries');
          const result = this.impl.didReadEntries(params.arg_success, params.arg_error_message, params.arg_entries, params.arg_has_more_entries, params.arg_total_queued_to_send);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.SharedStorageEntriesListenerReceiver = mojo.internal.bindings.blink.mojom.SharedStorageEntriesListenerReceiver;

mojo.internal.bindings.blink.mojom.SharedStorageEntriesListenerPtr = mojo.internal.bindings.blink.mojom.SharedStorageEntriesListenerRemote;
mojo.internal.bindings.blink.mojom.SharedStorageEntriesListenerRequest = mojo.internal.bindings.blink.mojom.SharedStorageEntriesListenerPendingReceiver;


// Interface: SharedStorageWorkletServiceClient
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_Params', [
      mojo.internal.StructField('arg_method_with_options', 0, 0, mojo.internal.bindings.network.mojom.SharedStorageModifierMethodWithOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ResponseParams', [
      mojo.internal.StructField('arg_error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_Params', [
      mojo.internal.StructField('arg_methods_with_options', 0, 0, mojo.internal.bindings.network.mojom.SharedStorageBatchUpdateMethodsArgumentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_with_lock', 8, 0, mojo.internal.bindings.network.mojom.LockNameSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ResponseParams', [
      mojo.internal.StructField('arg_error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_Params', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.bindings.network.mojom.SharedStorageKeyArgumentSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.SharedStorageGetStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 16, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageKeys_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageKeys_Params', [
      mojo.internal.StructField('arg_listener', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.SharedStorageEntriesListenerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageEntries_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageEntries_Params', [
      mojo.internal.StructField('arg_listener', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.SharedStorageEntriesListenerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_values_only', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ResponseParams', [
      mojo.internal.StructField('arg_error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_length', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_success', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ResponseParams', [
      mojo.internal.StructField('arg_error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_bits', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.GetInterestGroupsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_DidAddMessageToConsole_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_DidAddMessageToConsole_Params', [
      mojo.internal.StructField('arg_log_level', 0, 0, mojo.internal.bindings.blink.mojom.ConsoleMessageLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_RecordUseCounters_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_RecordUseCounters_Params', [
      mojo.internal.StructField('arg_features', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.WebFeatureSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedStorageWorkletServiceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  sharedStorageUpdate(arg_method_with_options) {
    return this.$.sharedStorageUpdate(arg_method_with_options);
  }
  sharedStorageBatchUpdate(arg_methods_with_options, arg_with_lock) {
    return this.$.sharedStorageBatchUpdate(arg_methods_with_options, arg_with_lock);
  }
  sharedStorageGet(arg_key) {
    return this.$.sharedStorageGet(arg_key);
  }
  sharedStorageKeys(arg_listener) {
    return this.$.sharedStorageKeys(arg_listener);
  }
  sharedStorageEntries(arg_listener, arg_values_only) {
    return this.$.sharedStorageEntries(arg_listener, arg_values_only);
  }
  sharedStorageLength() {
    return this.$.sharedStorageLength();
  }
  sharedStorageRemainingBudget() {
    return this.$.sharedStorageRemainingBudget();
  }
  getInterestGroups() {
    return this.$.getInterestGroups();
  }
  didAddMessageToConsole(arg_log_level, arg_message) {
    return this.$.didAddMessageToConsole(arg_log_level, arg_message);
  }
  recordUseCounters(arg_features) {
    return this.$.recordUseCounters(arg_features);
  }
};

mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.SharedStorageWorkletServiceClient', [
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

  sharedStorageUpdate(arg_method_with_options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ParamsSpec,
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ResponseParamsSpec,
      [arg_method_with_options],
      false);
  }

  sharedStorageBatchUpdate(arg_methods_with_options, arg_with_lock) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ParamsSpec,
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ResponseParamsSpec,
      [arg_methods_with_options, arg_with_lock],
      false);
  }

  sharedStorageGet(arg_key) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ParamsSpec,
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ResponseParamsSpec,
      [arg_key],
      false);
  }

  sharedStorageKeys(arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageKeys_ParamsSpec,
      null,
      [arg_listener],
      false);
  }

  sharedStorageEntries(arg_listener, arg_values_only) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageEntries_ParamsSpec,
      null,
      [arg_listener, arg_values_only],
      false);
  }

  sharedStorageLength() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ParamsSpec,
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ResponseParamsSpec,
      [],
      false);
  }

  sharedStorageRemainingBudget() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ParamsSpec,
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ResponseParamsSpec,
      [],
      false);
  }

  getInterestGroups() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ParamsSpec,
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ResponseParamsSpec,
      [],
      false);
  }

  didAddMessageToConsole(arg_log_level, arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_DidAddMessageToConsole_ParamsSpec,
      null,
      [arg_log_level, arg_message],
      false);
  }

  recordUseCounters(arg_features) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_RecordUseCounters_ParamsSpec,
      null,
      [arg_features],
      false);
  }

};

mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedStorageWorkletServiceClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.SharedStorageWorkletServiceClient', [
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageKeys_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageEntries_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_DidAddMessageToConsole_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_RecordUseCounters_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sharedStorageUpdate');
          const result = this.impl.sharedStorageUpdate(params.arg_method_with_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SharedStorageUpdate FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sharedStorageBatchUpdate');
          const result = this.impl.sharedStorageBatchUpdate(params.arg_methods_with_options, params.arg_with_lock);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SharedStorageBatchUpdate FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sharedStorageGet');
          const result = this.impl.sharedStorageGet(params.arg_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SharedStorageGet FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageKeys_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sharedStorageKeys');
          const result = this.impl.sharedStorageKeys(params.arg_listener);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageEntries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sharedStorageEntries');
          const result = this.impl.sharedStorageEntries(params.arg_listener, params.arg_values_only);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sharedStorageLength');
          const result = this.impl.sharedStorageLength();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SharedStorageLength FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sharedStorageRemainingBudget');
          const result = this.impl.sharedStorageRemainingBudget();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SharedStorageRemainingBudget FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getInterestGroups');
          const result = this.impl.getInterestGroups();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetInterestGroups FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_DidAddMessageToConsole_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didAddMessageToConsole');
          const result = this.impl.didAddMessageToConsole(params.arg_log_level, params.arg_message);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClient_RecordUseCounters_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordUseCounters');
          const result = this.impl.recordUseCounters(params.arg_features);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClientReceiver = mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClientReceiver;

mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClientPtr = mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClientRemote;
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClientRequest = mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClientPendingReceiver;


// Interface: SharedStorageWorkletService
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_Initialize_ParamsSpec, 'blink.mojom.SharedStorageWorkletService_Initialize_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_permissions_policy_state', 8, 0, mojo.internal.bindings.blink.mojom.SharedStorageWorkletPermissionsPolicyStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_embedder_context', 16, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_Initialize_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletService_Initialize_ResponseParams', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.bindings.blink.mojom.SharedStorageWorkletTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_AddModule_ParamsSpec, 'blink.mojom.SharedStorageWorkletService_AddModule_Params', [
      mojo.internal.StructField('arg_url_loader_factory', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_script_source_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_AddModule_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletService_AddModule_ResponseParams', [
      mojo.internal.StructField('arg_error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ParamsSpec, 'blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_Params', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_urls', 8, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_serialized_data', 16, 0, mojo.internal.bindings.blink.mojom.CloneableMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_pa_operation_details', 24, 0, mojo.internal.bindings.blink.mojom.PrivateAggregationOperationDetailsSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ResponseParams', [
      mojo.internal.StructField('arg_error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_success', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_RunOperation_ParamsSpec, 'blink.mojom.SharedStorageWorkletService_RunOperation_Params', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_serialized_data', 8, 0, mojo.internal.bindings.blink.mojom.CloneableMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_pa_operation_details', 16, 0, mojo.internal.bindings.blink.mojom.PrivateAggregationOperationDetailsSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_RunOperation_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletService_RunOperation_ResponseParams', [
      mojo.internal.StructField('arg_error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.blink.mojom.SharedStorageWorkletServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedStorageWorkletService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initialize(arg_client, arg_permissions_policy_state, arg_embedder_context) {
    return this.$.initialize(arg_client, arg_permissions_policy_state, arg_embedder_context);
  }
  addModule(arg_url_loader_factory, arg_script_source_url) {
    return this.$.addModule(arg_url_loader_factory, arg_script_source_url);
  }
  runURLSelectionOperation(arg_name, arg_urls, arg_serialized_data, arg_pa_operation_details) {
    return this.$.runURLSelectionOperation(arg_name, arg_urls, arg_serialized_data, arg_pa_operation_details);
  }
  runOperation(arg_name, arg_serialized_data, arg_pa_operation_details) {
    return this.$.runOperation(arg_name, arg_serialized_data, arg_pa_operation_details);
  }
};

mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.SharedStorageWorkletService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  initialize(arg_client, arg_permissions_policy_state, arg_embedder_context) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_Initialize_ParamsSpec,
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_Initialize_ResponseParamsSpec,
      [arg_client, arg_permissions_policy_state, arg_embedder_context],
      false);
  }

  addModule(arg_url_loader_factory, arg_script_source_url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_AddModule_ParamsSpec,
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_AddModule_ResponseParamsSpec,
      [arg_url_loader_factory, arg_script_source_url],
      false);
  }

  runURLSelectionOperation(arg_name, arg_urls, arg_serialized_data, arg_pa_operation_details) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ParamsSpec,
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ResponseParamsSpec,
      [arg_name, arg_urls, arg_serialized_data, arg_pa_operation_details],
      false);
  }

  runOperation(arg_name, arg_serialized_data, arg_pa_operation_details) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_RunOperation_ParamsSpec,
      mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_RunOperation_ResponseParamsSpec,
      [arg_name, arg_serialized_data, arg_pa_operation_details],
      false);
  }

};

mojo.internal.bindings.blink.mojom.SharedStorageWorkletService.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedStorageWorkletService',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.SharedStorageWorkletService', [
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_Initialize_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_AddModule_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_RunOperation_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_Initialize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.arg_client, params.arg_permissions_policy_state, params.arg_embedder_context);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_Initialize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Initialize FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_AddModule_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addModule');
          const result = this.impl.addModule(params.arg_url_loader_factory, params.arg_script_source_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_AddModule_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddModule FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runURLSelectionOperation');
          const result = this.impl.runURLSelectionOperation(params.arg_name, params.arg_urls, params.arg_serialized_data, params.arg_pa_operation_details);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunURLSelectionOperation FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_RunOperation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runOperation');
          const result = this.impl.runOperation(params.arg_name, params.arg_serialized_data, params.arg_pa_operation_details);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.SharedStorageWorkletService_RunOperation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunOperation FAILED:', e));
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

mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceReceiver = mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceReceiver;

mojo.internal.bindings.blink.mojom.SharedStorageWorkletServicePtr = mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceRemote;
mojo.internal.bindings.blink.mojom.SharedStorageWorkletServiceRequest = mojo.internal.bindings.blink.mojom.SharedStorageWorkletServicePendingReceiver;

