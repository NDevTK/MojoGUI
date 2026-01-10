// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/privileged/mojom/indexed_db_control.mojom
// Module: storage.mojom

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
var storage = storage || {};
storage.mojom = storage.mojom || {};
var mojo_base = mojo_base || {};
var blink = blink || {};

storage.mojom.ForceCloseReasonSpec = { $: mojo.internal.Enum() };
storage.mojom.IndexedDBObserver = {};
storage.mojom.IndexedDBObserver.$interfaceName = 'storage.mojom.IndexedDBObserver';
storage.mojom.IndexedDBObserver_OnIndexedDBListChanged_ParamsSpec = { $: {} };
storage.mojom.IndexedDBObserver_OnIndexedDBContentChanged_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl = {};
storage.mojom.IndexedDBControl.$interfaceName = 'storage.mojom.IndexedDBControl';
storage.mojom.IndexedDBControl_BindIndexedDB_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_ForceClose_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_ForceClose_ResponseParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_DownloadBucketData_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_DownloadBucketData_ResponseParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_GetAllBucketsDetails_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_GetAllBucketsDetails_ResponseParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_StartMetadataRecording_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_StartMetadataRecording_ResponseParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_StopMetadataRecording_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_StopMetadataRecording_ResponseParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_SetForceKeepSessionState_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_AddObserver_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_ApplyPolicyUpdates_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_BindTestInterfaceForTesting_ParamsSpec = { $: {} };

// Enum: ForceCloseReason
storage.mojom.ForceCloseReason = {
  FORCE_CLOSE_DELETE_ORIGIN: 0,
  FORCE_CLOSE_BACKING_STORE_FAILURE: 1,
  FORCE_CLOSE_INTERNALS_PAGE: 2,
};

// Interface: IndexedDBObserver
mojo.internal.Struct(
    storage.mojom.IndexedDBObserver_OnIndexedDBListChanged_ParamsSpec, 'storage.mojom.IndexedDBObserver_OnIndexedDBListChanged_Params', [
      mojo.internal.StructField('bucket_locator', 0, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBObserver_OnIndexedDBContentChanged_ParamsSpec, 'storage.mojom.IndexedDBObserver_OnIndexedDBContentChanged_Params', [
      mojo.internal.StructField('bucket_locator', 0, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('database_name', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('object_store_name', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

storage.mojom.IndexedDBObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.IndexedDBObserverRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.IndexedDBObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.IndexedDBObserverPendingReceiver,
      handle);
    this.$ = new storage.mojom.IndexedDBObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onIndexedDBListChanged(bucket_locator) {
    return this.$.onIndexedDBListChanged(bucket_locator);
  }
  onIndexedDBContentChanged(bucket_locator, database_name, object_store_name) {
    return this.$.onIndexedDBContentChanged(bucket_locator, database_name, object_store_name);
  }
};

storage.mojom.IndexedDBObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IndexedDBObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onIndexedDBListChanged(bucket_locator) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      storage.mojom.IndexedDBObserver_OnIndexedDBListChanged_ParamsSpec,
      null,
      [bucket_locator],
      false);
  }

  onIndexedDBContentChanged(bucket_locator, database_name, object_store_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      storage.mojom.IndexedDBObserver_OnIndexedDBContentChanged_ParamsSpec,
      null,
      [bucket_locator, database_name, object_store_name],
      false);
  }

};

storage.mojom.IndexedDBObserver.getRemote = function() {
  let remote = new storage.mojom.IndexedDBObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.IndexedDBObserver',
    'context');
  return remote.$;
};

storage.mojom.IndexedDBObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IndexedDBObserver', [
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
        
        // Try Method 0: OnIndexedDBListChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBObserver_OnIndexedDBListChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnIndexedDBListChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnIndexedDBContentChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBObserver_OnIndexedDBContentChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnIndexedDBContentChanged (1)');
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
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBObserver_OnIndexedDBListChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onIndexedDBListChanged');
          const result = this.impl.onIndexedDBListChanged(params.bucket_locator);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBObserver_OnIndexedDBContentChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onIndexedDBContentChanged');
          const result = this.impl.onIndexedDBContentChanged(params.bucket_locator, params.database_name, params.object_store_name);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

storage.mojom.IndexedDBObserverReceiver = storage.mojom.IndexedDBObserverReceiver;

storage.mojom.IndexedDBObserverPtr = storage.mojom.IndexedDBObserverRemote;
storage.mojom.IndexedDBObserverRequest = storage.mojom.IndexedDBObserverPendingReceiver;


// Interface: IndexedDBControl
mojo.internal.Struct(
    storage.mojom.IndexedDBControl_BindIndexedDB_ParamsSpec, 'storage.mojom.IndexedDBControl_BindIndexedDB_Params', [
      mojo.internal.StructField('bucket_locator', 0, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_info', 8, 0, storage.mojom.BucketClientInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_state_checker_remote', 16, 0, mojo.internal.InterfaceProxy(storage.mojom.IndexedDBClientStateCheckerRemote), null, false, 0, undefined),
      mojo.internal.StructField('receiver', 24, 0, mojo.internal.InterfaceRequest(blink.mojom.IDBFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_ForceClose_ParamsSpec, 'storage.mojom.IndexedDBControl_ForceClose_Params', [
      mojo.internal.StructField('bucket_id', 0, 0, storage.mojom.BucketIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, storage.mojom.ForceCloseReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_ForceClose_ResponseParamsSpec, 'storage.mojom.IndexedDBControl_ForceClose_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_DownloadBucketData_ParamsSpec, 'storage.mojom.IndexedDBControl_DownloadBucketData_Params', [
      mojo.internal.StructField('bucket_id', 0, 0, storage.mojom.BucketIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_DownloadBucketData_ResponseParamsSpec, 'storage.mojom.IndexedDBControl_DownloadBucketData_ResponseParams', [
      mojo.internal.StructField('temp_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('zip_path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_GetAllBucketsDetails_ParamsSpec, 'storage.mojom.IndexedDBControl_GetAllBucketsDetails_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_GetAllBucketsDetails_ResponseParamsSpec, 'storage.mojom.IndexedDBControl_GetAllBucketsDetails_ResponseParams', [
      mojo.internal.StructField('details', 0, 0, mojo.internal.Array(storage.mojom.IdbOriginMetadataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('incognito', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_StartMetadataRecording_ParamsSpec, 'storage.mojom.IndexedDBControl_StartMetadataRecording_Params', [
      mojo.internal.StructField('bucket_id', 0, 0, storage.mojom.BucketIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_StartMetadataRecording_ResponseParamsSpec, 'storage.mojom.IndexedDBControl_StartMetadataRecording_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_StopMetadataRecording_ParamsSpec, 'storage.mojom.IndexedDBControl_StopMetadataRecording_Params', [
      mojo.internal.StructField('bucket_id', 0, 0, storage.mojom.BucketIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_StopMetadataRecording_ResponseParamsSpec, 'storage.mojom.IndexedDBControl_StopMetadataRecording_ResponseParams', [
      mojo.internal.StructField('metadata', 0, 0, mojo.internal.Array(storage.mojom.IdbBucketMetadataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_SetForceKeepSessionState_ParamsSpec, 'storage.mojom.IndexedDBControl_SetForceKeepSessionState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_AddObserver_ParamsSpec, 'storage.mojom.IndexedDBControl_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(storage.mojom.IndexedDBObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_ApplyPolicyUpdates_ParamsSpec, 'storage.mojom.IndexedDBControl_ApplyPolicyUpdates_Params', [
      mojo.internal.StructField('policy_updates', 0, 0, mojo.internal.Array(storage.mojom.StoragePolicyUpdateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_BindTestInterfaceForTesting_ParamsSpec, 'storage.mojom.IndexedDBControl_BindTestInterfaceForTesting_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(storage.mojom.IndexedDBControlTestRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

storage.mojom.IndexedDBControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.IndexedDBControlRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.IndexedDBControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.IndexedDBControlPendingReceiver,
      handle);
    this.$ = new storage.mojom.IndexedDBControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindIndexedDB(bucket_locator, client_info, client_state_checker_remote, receiver) {
    return this.$.bindIndexedDB(bucket_locator, client_info, client_state_checker_remote, receiver);
  }
  forceClose(bucket_id, reason) {
    return this.$.forceClose(bucket_id, reason);
  }
  downloadBucketData(bucket_id) {
    return this.$.downloadBucketData(bucket_id);
  }
  getAllBucketsDetails() {
    return this.$.getAllBucketsDetails();
  }
  startMetadataRecording(bucket_id) {
    return this.$.startMetadataRecording(bucket_id);
  }
  stopMetadataRecording(bucket_id) {
    return this.$.stopMetadataRecording(bucket_id);
  }
  setForceKeepSessionState() {
    return this.$.setForceKeepSessionState();
  }
  addObserver(observer) {
    return this.$.addObserver(observer);
  }
  applyPolicyUpdates(policy_updates) {
    return this.$.applyPolicyUpdates(policy_updates);
  }
  bindTestInterfaceForTesting(receiver) {
    return this.$.bindTestInterfaceForTesting(receiver);
  }
};

storage.mojom.IndexedDBControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IndexedDBControl', [
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

  bindIndexedDB(bucket_locator, client_info, client_state_checker_remote, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      storage.mojom.IndexedDBControl_BindIndexedDB_ParamsSpec,
      null,
      [bucket_locator, client_info, client_state_checker_remote, receiver],
      false);
  }

  forceClose(bucket_id, reason) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      storage.mojom.IndexedDBControl_ForceClose_ParamsSpec,
      storage.mojom.IndexedDBControl_ForceClose_ResponseParamsSpec,
      [bucket_id, reason],
      false);
  }

  downloadBucketData(bucket_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      storage.mojom.IndexedDBControl_DownloadBucketData_ParamsSpec,
      storage.mojom.IndexedDBControl_DownloadBucketData_ResponseParamsSpec,
      [bucket_id],
      false);
  }

  getAllBucketsDetails() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      storage.mojom.IndexedDBControl_GetAllBucketsDetails_ParamsSpec,
      storage.mojom.IndexedDBControl_GetAllBucketsDetails_ResponseParamsSpec,
      [],
      false);
  }

  startMetadataRecording(bucket_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      storage.mojom.IndexedDBControl_StartMetadataRecording_ParamsSpec,
      storage.mojom.IndexedDBControl_StartMetadataRecording_ResponseParamsSpec,
      [bucket_id],
      false);
  }

  stopMetadataRecording(bucket_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      storage.mojom.IndexedDBControl_StopMetadataRecording_ParamsSpec,
      storage.mojom.IndexedDBControl_StopMetadataRecording_ResponseParamsSpec,
      [bucket_id],
      false);
  }

  setForceKeepSessionState() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      storage.mojom.IndexedDBControl_SetForceKeepSessionState_ParamsSpec,
      null,
      [],
      false);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      storage.mojom.IndexedDBControl_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  applyPolicyUpdates(policy_updates) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      storage.mojom.IndexedDBControl_ApplyPolicyUpdates_ParamsSpec,
      null,
      [policy_updates],
      false);
  }

  bindTestInterfaceForTesting(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      storage.mojom.IndexedDBControl_BindTestInterfaceForTesting_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

storage.mojom.IndexedDBControl.getRemote = function() {
  let remote = new storage.mojom.IndexedDBControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.IndexedDBControl',
    'context');
  return remote.$;
};

storage.mojom.IndexedDBControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IndexedDBControl', [
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
        
        // Try Method 0: BindIndexedDB
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBControl_BindIndexedDB_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindIndexedDB (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ForceClose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBControl_ForceClose_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceClose (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DownloadBucketData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBControl_DownloadBucketData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DownloadBucketData (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetAllBucketsDetails
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBControl_GetAllBucketsDetails_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllBucketsDetails (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: StartMetadataRecording
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBControl_StartMetadataRecording_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartMetadataRecording (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: StopMetadataRecording
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBControl_StopMetadataRecording_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopMetadataRecording (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetForceKeepSessionState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBControl_SetForceKeepSessionState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetForceKeepSessionState (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBControl_AddObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ApplyPolicyUpdates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBControl_ApplyPolicyUpdates_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyPolicyUpdates (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: BindTestInterfaceForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBControl_BindTestInterfaceForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindTestInterfaceForTesting (9)');
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
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBControl_BindIndexedDB_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindIndexedDB');
          const result = this.impl.bindIndexedDB(params.bucket_locator, params.client_info, params.client_state_checker_remote, params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBControl_ForceClose_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forceClose');
          const result = this.impl.forceClose(params.bucket_id, params.reason);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IndexedDBControl_ForceClose_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBControl_DownloadBucketData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.downloadBucketData');
          const result = this.impl.downloadBucketData(params.bucket_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IndexedDBControl_DownloadBucketData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBControl_GetAllBucketsDetails_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllBucketsDetails');
          const result = this.impl.getAllBucketsDetails();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IndexedDBControl_GetAllBucketsDetails_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBControl_StartMetadataRecording_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startMetadataRecording');
          const result = this.impl.startMetadataRecording(params.bucket_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IndexedDBControl_StartMetadataRecording_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBControl_StopMetadataRecording_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopMetadataRecording');
          const result = this.impl.stopMetadataRecording(params.bucket_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IndexedDBControl_StopMetadataRecording_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBControl_SetForceKeepSessionState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setForceKeepSessionState');
          const result = this.impl.setForceKeepSessionState();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBControl_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBControl_ApplyPolicyUpdates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.applyPolicyUpdates');
          const result = this.impl.applyPolicyUpdates(params.policy_updates);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBControl_BindTestInterfaceForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindTestInterfaceForTesting');
          const result = this.impl.bindTestInterfaceForTesting(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

storage.mojom.IndexedDBControlReceiver = storage.mojom.IndexedDBControlReceiver;

storage.mojom.IndexedDBControlPtr = storage.mojom.IndexedDBControlRemote;
storage.mojom.IndexedDBControlRequest = storage.mojom.IndexedDBControlPendingReceiver;

