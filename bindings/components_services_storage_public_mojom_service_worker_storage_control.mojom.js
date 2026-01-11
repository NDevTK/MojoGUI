// Auto-generated MojoJS binding
 // Source: chromium_src/components/services/storage/public/mojom/service_worker_storage_control.mojom
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.storage = mojo.internal.bindings.storage || {};
mojo.internal.bindings.storage.mojom = mojo.internal.bindings.storage.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.storage.mojom.ServiceWorkerStorageStorageKeyStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionInfoSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerFindRegistrationResultSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerUserDataSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionRef = {};
mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionRef.$interfaceName = 'storage.mojom.ServiceWorkerLiveVersionRef';
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader = {};
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader.$interfaceName = 'storage.mojom.ServiceWorkerResourceReader';
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_ReadData_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_ReadData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter = {};
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter.$interfaceName = 'storage.mojom.ServiceWorkerResourceWriter';
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter_WriteData_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter_WriteData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriter = {};
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriter.$interfaceName = 'storage.mojom.ServiceWorkerResourceMetadataWriter';
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl = {};
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl.$interfaceName = 'storage.mojom.ServiceWorkerStorageControl';
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Disable_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Disable_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Delete_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Delete_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Recover_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Recover_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_CreateResourceReader_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_CreateResourceWriter_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_CreateResourceMetadataWriter_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserData_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreUserData_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreUserData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserData_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ResponseParamsSpec = { $: {} };

// Enum: ServiceWorkerStorageStorageKeyState
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageStorageKeyState = {
  kKeep: 0,
  kDelete: 1,
};

// Struct: ServiceWorkerLiveVersionInfo
mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionInfoSpec, 'storage.mojom.ServiceWorkerLiveVersionInfo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_purgeable_resources', 8, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_reference', 16, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionRefSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ServiceWorkerFindRegistrationResult
mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerFindRegistrationResultSpec, 'storage.mojom.ServiceWorkerFindRegistrationResult', [
      mojo.internal.StructField('arg_version_reference', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionRefSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_registration', 8, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerRegistrationDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_resources', 16, 0, mojo.internal.Array(mojo.internal.bindings.storage.mojom.ServiceWorkerResourceRecordSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ServiceWorkerUserData
mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerUserDataSpec, 'storage.mojom.ServiceWorkerUserData', [
      mojo.internal.StructField('arg_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 16, 0, mojo.internal.bindings.mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: ServiceWorkerLiveVersionRef
mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionRefPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionRefRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.ServiceWorkerLiveVersionRef';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionRefPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionRefRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionRefRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerLiveVersionRef', [
    ]);
  }

};

mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionRef.getRemote = function() {
  let remote = new mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionRefRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.ServiceWorkerLiveVersionRef',
    'context');
  return remote.$;
};

mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionRefReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerLiveVersionRef', [
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
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionRefReceiver = mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionRefReceiver;

mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionRefPtr = mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionRefRemote;
mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionRefRequest = mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionRefPendingReceiver;


// Interface: ServiceWorkerResourceReader
mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ParamsSpec, 'storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ResponseParamsSpec, 'storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ResponseParams', [
      mojo.internal.StructField('arg_response_head', 0, 0, mojo.internal.bindings.network.mojom.URLResponseHeadSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_metadata', 8, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_status', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ParamsSpec, 'storage.mojom.ServiceWorkerResourceReader_PrepareReadData_Params', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ResponseParamsSpec, 'storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ResponseParams', [
      mojo.internal.StructField('arg_pipe', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_ReadData_ParamsSpec, 'storage.mojom.ServiceWorkerResourceReader_ReadData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_ReadData_ResponseParamsSpec, 'storage.mojom.ServiceWorkerResourceReader_ReadData_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReaderRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.ServiceWorkerResourceReader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReaderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  readResponseHead() {
    return this.$.readResponseHead();
  }
  prepareReadData(arg_size) {
    return this.$.prepareReadData(arg_size);
  }
  readData() {
    return this.$.readData();
  }
};

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerResourceReader', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  readResponseHead() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ResponseParamsSpec,
      [],
      false);
  }

  prepareReadData(arg_size) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ResponseParamsSpec,
      [arg_size],
      false);
  }

  readData() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_ReadData_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_ReadData_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader.getRemote = function() {
  let remote = new mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.ServiceWorkerResourceReader',
    'context');
  return remote.$;
};

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReaderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerResourceReader', [
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
        
        // Try Method 0: ReadResponseHead
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadResponseHead (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PrepareReadData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrepareReadData (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReadData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_ReadData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadData (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readResponseHead');
          const result = this.impl.readResponseHead();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadResponseHead FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prepareReadData');
          const result = this.impl.prepareReadData(params.arg_size);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PrepareReadData FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_ReadData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readData');
          const result = this.impl.readData();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReader_ReadData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadData FAILED:', e));
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

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReaderReceiver = mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReaderReceiver;

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReaderPtr = mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReaderRemote;
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReaderRequest = mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReaderPendingReceiver;


// Interface: ServiceWorkerResourceWriter
mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ParamsSpec, 'storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_Params', [
      mojo.internal.StructField('arg_response_head', 0, 0, mojo.internal.bindings.network.mojom.URLResponseHeadSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ResponseParamsSpec, 'storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter_WriteData_ParamsSpec, 'storage.mojom.ServiceWorkerResourceWriter_WriteData_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter_WriteData_ResponseParamsSpec, 'storage.mojom.ServiceWorkerResourceWriter_WriteData_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriterRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.ServiceWorkerResourceWriter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriterPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  writeResponseHead(arg_response_head) {
    return this.$.writeResponseHead(arg_response_head);
  }
  writeData(arg_data) {
    return this.$.writeData(arg_data);
  }
};

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerResourceWriter', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  writeResponseHead(arg_response_head) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ResponseParamsSpec,
      [arg_response_head],
      false);
  }

  writeData(arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter_WriteData_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter_WriteData_ResponseParamsSpec,
      [arg_data],
      false);
  }

};

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter.getRemote = function() {
  let remote = new mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.ServiceWorkerResourceWriter',
    'context');
  return remote.$;
};

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerResourceWriter', [
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
        
        // Try Method 0: WriteResponseHead
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteResponseHead (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: WriteData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter_WriteData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteData (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeResponseHead');
          const result = this.impl.writeResponseHead(params.arg_response_head);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WriteResponseHead FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter_WriteData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeData');
          const result = this.impl.writeData(params.arg_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriter_WriteData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WriteData FAILED:', e));
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

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriterReceiver = mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriterReceiver;

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriterPtr = mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriterRemote;
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriterRequest = mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriterPendingReceiver;


// Interface: ServiceWorkerResourceMetadataWriter
mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ParamsSpec, 'storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ResponseParamsSpec, 'storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriterRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.ServiceWorkerResourceMetadataWriter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriterPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  writeMetadata(arg_data) {
    return this.$.writeMetadata(arg_data);
  }
};

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerResourceMetadataWriter', [
      { explicit: null },
    ]);
  }

  writeMetadata(arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ResponseParamsSpec,
      [arg_data],
      false);
  }

};

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriter.getRemote = function() {
  let remote = new mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.ServiceWorkerResourceMetadataWriter',
    'context');
  return remote.$;
};

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerResourceMetadataWriter', [
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
        
        // Try Method 0: WriteMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteMetadata (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeMetadata');
          const result = this.impl.writeMetadata(params.arg_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WriteMetadata FAILED:', e));
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

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriterReceiver = mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriterReceiver;

mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriterPtr = mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriterRemote;
mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriterRequest = mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriterPendingReceiver;


// Interface: ServiceWorkerStorageControl
mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Disable_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_Disable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Disable_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_Disable_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Delete_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_Delete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Delete_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_Delete_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Recover_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_Recover_Params', [
      mojo.internal.StructField('arg_versions', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Recover_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_Recover_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ResponseParams', [
      mojo.internal.StructField('arg_keys', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.StorageKeySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_Params', [
      mojo.internal.StructField('arg_client_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key', 8, 0, mojo.internal.bindings.blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.bindings.mojo.internal.bindings.storage.mojom.ServiceWorkerFindRegistrationResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_scopes', 16, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_Params', [
      mojo.internal.StructField('arg_scope', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key', 8, 0, mojo.internal.bindings.blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.bindings.mojo.internal.bindings.storage.mojom.ServiceWorkerFindRegistrationResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_Params', [
      mojo.internal.StructField('arg_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key', 8, 0, mojo.internal.bindings.blink.mojom.StorageKeySpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.bindings.mojo.internal.bindings.storage.mojom.ServiceWorkerFindRegistrationResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_Params', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.bindings.blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_registrations', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.storage.mojom.ServiceWorkerFindRegistrationResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_Params', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.bindings.blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_usage', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_registrations', 8, 0, mojo.internal.Array(mojo.internal.bindings.storage.mojom.ServiceWorkerRegistrationDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_Params', [
      mojo.internal.StructField('arg_client_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key', 8, 0, mojo.internal.bindings.blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.bindings.mojo.internal.bindings.storage.mojom.ServiceWorkerFindRegistrationResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_scopes', 16, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_StoreRegistration_Params', [
      mojo.internal.StructField('arg_registration', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerRegistrationDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_resources', 8, 0, mojo.internal.Array(mojo.internal.bindings.storage.mojom.ServiceWorkerResourceRecordSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_deleted_resources_size', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_Params', [
      mojo.internal.StructField('arg_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key', 8, 0, mojo.internal.bindings.blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_deleted_resources_size', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_storage_key_state', 16, 0, mojo.internal.bindings.mojo.internal.bindings.storage.mojom.ServiceWorkerStorageStorageKeyStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_Params', [
      mojo.internal.StructField('arg_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key', 8, 0, mojo.internal.bindings.blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_Params', [
      mojo.internal.StructField('arg_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key', 8, 0, mojo.internal.bindings.blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_update_check_time', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_Params', [
      mojo.internal.StructField('arg_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key', 8, 0, mojo.internal.bindings.blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_enable', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_Params', [
      mojo.internal.StructField('arg_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key', 8, 0, mojo.internal.bindings.blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_Params', [
      mojo.internal.StructField('arg_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key', 8, 0, mojo.internal.bindings.blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 16, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerFetchHandlerTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_Params', [
      mojo.internal.StructField('arg_registratation_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key', 8, 0, mojo.internal.bindings.blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_updated_sha256_checksums', 16, 0, mojo.internal.Map(mojo.internal.Int64, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ResponseParams', [
      mojo.internal.StructField('arg_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ResponseParams', [
      mojo.internal.StructField('arg_version_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_version_reference', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.storage.mojom.ServiceWorkerLiveVersionRefSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ResponseParams', [
      mojo.internal.StructField('arg_resource_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_CreateResourceReader_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_CreateResourceReader_Params', [
      mojo.internal.StructField('arg_resource_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_reader', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.storage.mojom.ServiceWorkerResourceReaderSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_CreateResourceWriter_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_CreateResourceWriter_Params', [
      mojo.internal.StructField('arg_resource_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_writer', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.storage.mojom.ServiceWorkerResourceWriterSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_CreateResourceMetadataWriter_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_CreateResourceMetadataWriter_Params', [
      mojo.internal.StructField('arg_resource_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_writer', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.storage.mojom.ServiceWorkerResourceMetadataWriterSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_Params', [
      mojo.internal.StructField('arg_resource_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_Params', [
      mojo.internal.StructField('arg_resource_ids', 0, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserData_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserData_Params', [
      mojo.internal.StructField('arg_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_keys', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserData_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserData_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_values', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.ByteStringSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreUserData_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_StoreUserData_Params', [
      mojo.internal.StructField('arg_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key', 8, 0, mojo.internal.bindings.blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_user_data', 16, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.storage.mojom.ServiceWorkerUserDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreUserData_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_StoreUserData_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserData_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_ClearUserData_Params', [
      mojo.internal.StructField('arg_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_keys', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserData_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_ClearUserData_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_Params', [
      mojo.internal.StructField('arg_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key_prefix', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_values', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.ByteStringSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_Params', [
      mojo.internal.StructField('arg_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key_prefix', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_user_data', 8, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.mojo_base.mojom.ByteStringSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_Params', [
      mojo.internal.StructField('arg_registratation_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key_prefixes', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_Params', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_values', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.storage.mojom.ServiceWorkerUserDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_Params', [
      mojo.internal.StructField('arg_key_prefix', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_values', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.storage.mojom.ServiceWorkerUserDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_Params', [
      mojo.internal.StructField('arg_key_prefix', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_Params', [
      mojo.internal.StructField('arg_policy_updates', 0, 0, mojo.internal.Array(mojo.internal.bindings.storage.mojom.StoragePolicyUpdateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_resource_ids', 8, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_Params', [
      mojo.internal.StructField('arg_version_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_resource_ids', 8, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_resource_ids', 8, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_resource_ids', 8, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControlRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.ServiceWorkerStorageControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControlPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  disable() {
    return this.$.disable();
  }
  delete() {
    return this.$.delete();
  }
  recover(arg_versions) {
    return this.$.recover(arg_versions);
  }
  getRegisteredStorageKeys() {
    return this.$.getRegisteredStorageKeys();
  }
  findRegistrationForClientUrl(arg_client_url, arg_key) {
    return this.$.findRegistrationForClientUrl(arg_client_url, arg_key);
  }
  findRegistrationForScope(arg_scope, arg_key) {
    return this.$.findRegistrationForScope(arg_scope, arg_key);
  }
  findRegistrationForId(arg_registration_id, arg_key) {
    return this.$.findRegistrationForId(arg_registration_id, arg_key);
  }
  getRegistrationsForStorageKey(arg_key) {
    return this.$.getRegistrationsForStorageKey(arg_key);
  }
  getUsageForStorageKey(arg_key) {
    return this.$.getUsageForStorageKey(arg_key);
  }
  getAllRegistrationsDeprecated() {
    return this.$.getAllRegistrationsDeprecated();
  }
  getFakeRegistrationForClientUrl(arg_client_url, arg_key) {
    return this.$.getFakeRegistrationForClientUrl(arg_client_url, arg_key);
  }
  storeRegistration(arg_registration, arg_resources) {
    return this.$.storeRegistration(arg_registration, arg_resources);
  }
  deleteRegistration(arg_registration_id, arg_key) {
    return this.$.deleteRegistration(arg_registration_id, arg_key);
  }
  updateToActiveState(arg_registration_id, arg_key) {
    return this.$.updateToActiveState(arg_registration_id, arg_key);
  }
  updateLastUpdateCheckTime(arg_registration_id, arg_key, arg_last_update_check_time) {
    return this.$.updateLastUpdateCheckTime(arg_registration_id, arg_key, arg_last_update_check_time);
  }
  updateNavigationPreloadEnabled(arg_registration_id, arg_key, arg_enable) {
    return this.$.updateNavigationPreloadEnabled(arg_registration_id, arg_key, arg_enable);
  }
  updateNavigationPreloadHeader(arg_registration_id, arg_key, arg_value) {
    return this.$.updateNavigationPreloadHeader(arg_registration_id, arg_key, arg_value);
  }
  updateFetchHandlerType(arg_registration_id, arg_key, arg_type) {
    return this.$.updateFetchHandlerType(arg_registration_id, arg_key, arg_type);
  }
  updateResourceSha256Checksums(arg_registratation_id, arg_key, arg_updated_sha256_checksums) {
    return this.$.updateResourceSha256Checksums(arg_registratation_id, arg_key, arg_updated_sha256_checksums);
  }
  getNewRegistrationId() {
    return this.$.getNewRegistrationId();
  }
  getNewVersionId() {
    return this.$.getNewVersionId();
  }
  getNewResourceId() {
    return this.$.getNewResourceId();
  }
  createResourceReader(arg_resource_id, arg_reader) {
    return this.$.createResourceReader(arg_resource_id, arg_reader);
  }
  createResourceWriter(arg_resource_id, arg_writer) {
    return this.$.createResourceWriter(arg_resource_id, arg_writer);
  }
  createResourceMetadataWriter(arg_resource_id, arg_writer) {
    return this.$.createResourceMetadataWriter(arg_resource_id, arg_writer);
  }
  storeUncommittedResourceId(arg_resource_id) {
    return this.$.storeUncommittedResourceId(arg_resource_id);
  }
  doomUncommittedResources(arg_resource_ids) {
    return this.$.doomUncommittedResources(arg_resource_ids);
  }
  getUserData(arg_registration_id, arg_keys) {
    return this.$.getUserData(arg_registration_id, arg_keys);
  }
  storeUserData(arg_registration_id, arg_key, arg_user_data) {
    return this.$.storeUserData(arg_registration_id, arg_key, arg_user_data);
  }
  clearUserData(arg_registration_id, arg_keys) {
    return this.$.clearUserData(arg_registration_id, arg_keys);
  }
  getUserDataByKeyPrefix(arg_registration_id, arg_key_prefix) {
    return this.$.getUserDataByKeyPrefix(arg_registration_id, arg_key_prefix);
  }
  getUserKeysAndDataByKeyPrefix(arg_registration_id, arg_key_prefix) {
    return this.$.getUserKeysAndDataByKeyPrefix(arg_registration_id, arg_key_prefix);
  }
  clearUserDataByKeyPrefixes(arg_registratation_id, arg_key_prefixes) {
    return this.$.clearUserDataByKeyPrefixes(arg_registratation_id, arg_key_prefixes);
  }
  getUserDataForAllRegistrations(arg_key) {
    return this.$.getUserDataForAllRegistrations(arg_key);
  }
  getUserDataForAllRegistrationsByKeyPrefix(arg_key_prefix) {
    return this.$.getUserDataForAllRegistrationsByKeyPrefix(arg_key_prefix);
  }
  clearUserDataForAllRegistrationsByKeyPrefix(arg_key_prefix) {
    return this.$.clearUserDataForAllRegistrationsByKeyPrefix(arg_key_prefix);
  }
  performStorageCleanup() {
    return this.$.performStorageCleanup();
  }
  applyPolicyUpdates(arg_policy_updates) {
    return this.$.applyPolicyUpdates(arg_policy_updates);
  }
  getPurgingResourceIdsForTest() {
    return this.$.getPurgingResourceIdsForTest();
  }
  getPurgingResourceIdsForLiveVersionForTest(arg_version_id) {
    return this.$.getPurgingResourceIdsForLiveVersionForTest(arg_version_id);
  }
  getPurgeableResourceIdsForTest() {
    return this.$.getPurgeableResourceIdsForTest();
  }
  getUncommittedResourceIdsForTest() {
    return this.$.getUncommittedResourceIdsForTest();
  }
  setPurgingCompleteCallbackForTest() {
    return this.$.setPurgingCompleteCallbackForTest();
  }
};

mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerStorageControl', [
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
      { explicit: null },
    ]);
  }

  disable() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Disable_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Disable_ResponseParamsSpec,
      [],
      false);
  }

  delete() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Delete_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Delete_ResponseParamsSpec,
      [],
      false);
  }

  recover(arg_versions) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Recover_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Recover_ResponseParamsSpec,
      [arg_versions],
      false);
  }

  getRegisteredStorageKeys() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ResponseParamsSpec,
      [],
      false);
  }

  findRegistrationForClientUrl(arg_client_url, arg_key) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ResponseParamsSpec,
      [arg_client_url, arg_key],
      false);
  }

  findRegistrationForScope(arg_scope, arg_key) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ResponseParamsSpec,
      [arg_scope, arg_key],
      false);
  }

  findRegistrationForId(arg_registration_id, arg_key) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ResponseParamsSpec,
      [arg_registration_id, arg_key],
      false);
  }

  getRegistrationsForStorageKey(arg_key) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ResponseParamsSpec,
      [arg_key],
      false);
  }

  getUsageForStorageKey(arg_key) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ResponseParamsSpec,
      [arg_key],
      false);
  }

  getAllRegistrationsDeprecated() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ResponseParamsSpec,
      [],
      false);
  }

  getFakeRegistrationForClientUrl(arg_client_url, arg_key) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ResponseParamsSpec,
      [arg_client_url, arg_key],
      false);
  }

  storeRegistration(arg_registration, arg_resources) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ResponseParamsSpec,
      [arg_registration, arg_resources],
      false);
  }

  deleteRegistration(arg_registration_id, arg_key) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ResponseParamsSpec,
      [arg_registration_id, arg_key],
      false);
  }

  updateToActiveState(arg_registration_id, arg_key) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ResponseParamsSpec,
      [arg_registration_id, arg_key],
      false);
  }

  updateLastUpdateCheckTime(arg_registration_id, arg_key, arg_last_update_check_time) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ResponseParamsSpec,
      [arg_registration_id, arg_key, arg_last_update_check_time],
      false);
  }

  updateNavigationPreloadEnabled(arg_registration_id, arg_key, arg_enable) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ResponseParamsSpec,
      [arg_registration_id, arg_key, arg_enable],
      false);
  }

  updateNavigationPreloadHeader(arg_registration_id, arg_key, arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ResponseParamsSpec,
      [arg_registration_id, arg_key, arg_value],
      false);
  }

  updateFetchHandlerType(arg_registration_id, arg_key, arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ResponseParamsSpec,
      [arg_registration_id, arg_key, arg_type],
      false);
  }

  updateResourceSha256Checksums(arg_registratation_id, arg_key, arg_updated_sha256_checksums) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ResponseParamsSpec,
      [arg_registratation_id, arg_key, arg_updated_sha256_checksums],
      false);
  }

  getNewRegistrationId() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ResponseParamsSpec,
      [],
      false);
  }

  getNewVersionId() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ResponseParamsSpec,
      [],
      false);
  }

  getNewResourceId() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ResponseParamsSpec,
      [],
      false);
  }

  createResourceReader(arg_resource_id, arg_reader) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_CreateResourceReader_ParamsSpec,
      null,
      [arg_resource_id, arg_reader],
      false);
  }

  createResourceWriter(arg_resource_id, arg_writer) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_CreateResourceWriter_ParamsSpec,
      null,
      [arg_resource_id, arg_writer],
      false);
  }

  createResourceMetadataWriter(arg_resource_id, arg_writer) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_CreateResourceMetadataWriter_ParamsSpec,
      null,
      [arg_resource_id, arg_writer],
      false);
  }

  storeUncommittedResourceId(arg_resource_id) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ResponseParamsSpec,
      [arg_resource_id],
      false);
  }

  doomUncommittedResources(arg_resource_ids) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ResponseParamsSpec,
      [arg_resource_ids],
      false);
  }

  getUserData(arg_registration_id, arg_keys) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserData_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserData_ResponseParamsSpec,
      [arg_registration_id, arg_keys],
      false);
  }

  storeUserData(arg_registration_id, arg_key, arg_user_data) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreUserData_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreUserData_ResponseParamsSpec,
      [arg_registration_id, arg_key, arg_user_data],
      false);
  }

  clearUserData(arg_registration_id, arg_keys) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserData_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserData_ResponseParamsSpec,
      [arg_registration_id, arg_keys],
      false);
  }

  getUserDataByKeyPrefix(arg_registration_id, arg_key_prefix) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ResponseParamsSpec,
      [arg_registration_id, arg_key_prefix],
      false);
  }

  getUserKeysAndDataByKeyPrefix(arg_registration_id, arg_key_prefix) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ResponseParamsSpec,
      [arg_registration_id, arg_key_prefix],
      false);
  }

  clearUserDataByKeyPrefixes(arg_registratation_id, arg_key_prefixes) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ResponseParamsSpec,
      [arg_registratation_id, arg_key_prefixes],
      false);
  }

  getUserDataForAllRegistrations(arg_key) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ResponseParamsSpec,
      [arg_key],
      false);
  }

  getUserDataForAllRegistrationsByKeyPrefix(arg_key_prefix) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec,
      [arg_key_prefix],
      false);
  }

  clearUserDataForAllRegistrationsByKeyPrefix(arg_key_prefix) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec,
      [arg_key_prefix],
      false);
  }

  performStorageCleanup() {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ResponseParamsSpec,
      [],
      false);
  }

  applyPolicyUpdates(arg_policy_updates) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ResponseParamsSpec,
      [arg_policy_updates],
      false);
  }

  getPurgingResourceIdsForTest() {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ResponseParamsSpec,
      [],
      false);
  }

  getPurgingResourceIdsForLiveVersionForTest(arg_version_id) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ResponseParamsSpec,
      [arg_version_id],
      false);
  }

  getPurgeableResourceIdsForTest() {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ResponseParamsSpec,
      [],
      false);
  }

  getUncommittedResourceIdsForTest() {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ResponseParamsSpec,
      [],
      false);
  }

  setPurgingCompleteCallbackForTest() {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ParamsSpec,
      mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl.getRemote = function() {
  let remote = new mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.ServiceWorkerStorageControl',
    'context');
  return remote.$;
};

mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerStorageControl', [
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
        
        // Try Method 0: Disable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Disable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Disable (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Delete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Delete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Delete (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Recover
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Recover_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Recover (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetRegisteredStorageKeys
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRegisteredStorageKeys (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: FindRegistrationForClientUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FindRegistrationForClientUrl (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: FindRegistrationForScope
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FindRegistrationForScope (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: FindRegistrationForId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FindRegistrationForId (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetRegistrationsForStorageKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRegistrationsForStorageKey (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetUsageForStorageKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUsageForStorageKey (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: GetAllRegistrationsDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllRegistrationsDeprecated (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetFakeRegistrationForClientUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFakeRegistrationForClientUrl (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: StoreRegistration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StoreRegistration (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: DeleteRegistration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteRegistration (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: UpdateToActiveState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateToActiveState (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: UpdateLastUpdateCheckTime
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateLastUpdateCheckTime (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: UpdateNavigationPreloadEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateNavigationPreloadEnabled (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: UpdateNavigationPreloadHeader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateNavigationPreloadHeader (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: UpdateFetchHandlerType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateFetchHandlerType (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: UpdateResourceSha256Checksums
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateResourceSha256Checksums (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: GetNewRegistrationId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNewRegistrationId (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: GetNewVersionId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNewVersionId (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: GetNewResourceId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNewResourceId (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: CreateResourceReader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_CreateResourceReader_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateResourceReader (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: CreateResourceWriter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_CreateResourceWriter_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateResourceWriter (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: CreateResourceMetadataWriter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_CreateResourceMetadataWriter_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateResourceMetadataWriter (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: StoreUncommittedResourceId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StoreUncommittedResourceId (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: DoomUncommittedResources
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DoomUncommittedResources (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: GetUserData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserData (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: StoreUserData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreUserData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StoreUserData (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: ClearUserData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearUserData (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: GetUserDataByKeyPrefix
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserDataByKeyPrefix (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: GetUserKeysAndDataByKeyPrefix
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserKeysAndDataByKeyPrefix (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: ClearUserDataByKeyPrefixes
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearUserDataByKeyPrefixes (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
           }
        }
        // Try Method 33: GetUserDataForAllRegistrations
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserDataForAllRegistrations (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 33 failed:', e);
           }
        }
        // Try Method 34: GetUserDataForAllRegistrationsByKeyPrefix
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserDataForAllRegistrationsByKeyPrefix (34)');
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 34 failed:', e);
           }
        }
        // Try Method 35: ClearUserDataForAllRegistrationsByKeyPrefix
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearUserDataForAllRegistrationsByKeyPrefix (35)');
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 35 failed:', e);
           }
        }
        // Try Method 36: PerformStorageCleanup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PerformStorageCleanup (36)');
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 36 failed:', e);
           }
        }
        // Try Method 37: ApplyPolicyUpdates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyPolicyUpdates (37)');
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 37 failed:', e);
           }
        }
        // Try Method 38: GetPurgingResourceIdsForTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPurgingResourceIdsForTest (38)');
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 38 failed:', e);
           }
        }
        // Try Method 39: GetPurgingResourceIdsForLiveVersionForTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPurgingResourceIdsForLiveVersionForTest (39)');
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 39 failed:', e);
           }
        }
        // Try Method 40: GetPurgeableResourceIdsForTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPurgeableResourceIdsForTest (40)');
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 40 failed:', e);
           }
        }
        // Try Method 41: GetUncommittedResourceIdsForTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUncommittedResourceIdsForTest (41)');
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 41 failed:', e);
           }
        }
        // Try Method 42: SetPurgingCompleteCallbackForTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPurgingCompleteCallbackForTest (42)');
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 42 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Disable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disable');
          const result = this.impl.disable();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Disable_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Disable FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Delete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.delete');
          const result = this.impl.delete();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Delete_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Delete FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Recover_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recover');
          const result = this.impl.recover(params.arg_versions);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_Recover_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Recover FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRegisteredStorageKeys');
          const result = this.impl.getRegisteredStorageKeys();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetRegisteredStorageKeys FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.findRegistrationForClientUrl');
          const result = this.impl.findRegistrationForClientUrl(params.arg_client_url, params.arg_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FindRegistrationForClientUrl FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.findRegistrationForScope');
          const result = this.impl.findRegistrationForScope(params.arg_scope, params.arg_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FindRegistrationForScope FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.findRegistrationForId');
          const result = this.impl.findRegistrationForId(params.arg_registration_id, params.arg_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FindRegistrationForId FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRegistrationsForStorageKey');
          const result = this.impl.getRegistrationsForStorageKey(params.arg_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetRegistrationsForStorageKey FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUsageForStorageKey');
          const result = this.impl.getUsageForStorageKey(params.arg_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUsageForStorageKey FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllRegistrationsDeprecated');
          const result = this.impl.getAllRegistrationsDeprecated();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAllRegistrationsDeprecated FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFakeRegistrationForClientUrl');
          const result = this.impl.getFakeRegistrationForClientUrl(params.arg_client_url, params.arg_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFakeRegistrationForClientUrl FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.storeRegistration');
          const result = this.impl.storeRegistration(params.arg_registration, params.arg_resources);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StoreRegistration FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteRegistration');
          const result = this.impl.deleteRegistration(params.arg_registration_id, params.arg_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteRegistration FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateToActiveState');
          const result = this.impl.updateToActiveState(params.arg_registration_id, params.arg_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateToActiveState FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateLastUpdateCheckTime');
          const result = this.impl.updateLastUpdateCheckTime(params.arg_registration_id, params.arg_key, params.arg_last_update_check_time);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateLastUpdateCheckTime FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateNavigationPreloadEnabled');
          const result = this.impl.updateNavigationPreloadEnabled(params.arg_registration_id, params.arg_key, params.arg_enable);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateNavigationPreloadEnabled FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateNavigationPreloadHeader');
          const result = this.impl.updateNavigationPreloadHeader(params.arg_registration_id, params.arg_key, params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateNavigationPreloadHeader FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateFetchHandlerType');
          const result = this.impl.updateFetchHandlerType(params.arg_registration_id, params.arg_key, params.arg_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateFetchHandlerType FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateResourceSha256Checksums');
          const result = this.impl.updateResourceSha256Checksums(params.arg_registratation_id, params.arg_key, params.arg_updated_sha256_checksums);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateResourceSha256Checksums FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNewRegistrationId');
          const result = this.impl.getNewRegistrationId();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetNewRegistrationId FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNewVersionId');
          const result = this.impl.getNewVersionId();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetNewVersionId FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNewResourceId');
          const result = this.impl.getNewResourceId();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetNewResourceId FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_CreateResourceReader_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createResourceReader');
          const result = this.impl.createResourceReader(params.arg_resource_id, params.arg_reader);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_CreateResourceWriter_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createResourceWriter');
          const result = this.impl.createResourceWriter(params.arg_resource_id, params.arg_writer);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_CreateResourceMetadataWriter_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createResourceMetadataWriter');
          const result = this.impl.createResourceMetadataWriter(params.arg_resource_id, params.arg_writer);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.storeUncommittedResourceId');
          const result = this.impl.storeUncommittedResourceId(params.arg_resource_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StoreUncommittedResourceId FAILED:', e));
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.doomUncommittedResources');
          const result = this.impl.doomUncommittedResources(params.arg_resource_ids);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DoomUncommittedResources FAILED:', e));
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUserData');
          const result = this.impl.getUserData(params.arg_registration_id, params.arg_keys);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUserData FAILED:', e));
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreUserData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.storeUserData');
          const result = this.impl.storeUserData(params.arg_registration_id, params.arg_key, params.arg_user_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_StoreUserData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StoreUserData FAILED:', e));
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearUserData');
          const result = this.impl.clearUserData(params.arg_registration_id, params.arg_keys);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearUserData FAILED:', e));
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUserDataByKeyPrefix');
          const result = this.impl.getUserDataByKeyPrefix(params.arg_registration_id, params.arg_key_prefix);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUserDataByKeyPrefix FAILED:', e));
          }
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUserKeysAndDataByKeyPrefix');
          const result = this.impl.getUserKeysAndDataByKeyPrefix(params.arg_registration_id, params.arg_key_prefix);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUserKeysAndDataByKeyPrefix FAILED:', e));
          }
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearUserDataByKeyPrefixes');
          const result = this.impl.clearUserDataByKeyPrefixes(params.arg_registratation_id, params.arg_key_prefixes);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearUserDataByKeyPrefixes FAILED:', e));
          }
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUserDataForAllRegistrations');
          const result = this.impl.getUserDataForAllRegistrations(params.arg_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUserDataForAllRegistrations FAILED:', e));
          }
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUserDataForAllRegistrationsByKeyPrefix');
          const result = this.impl.getUserDataForAllRegistrationsByKeyPrefix(params.arg_key_prefix);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUserDataForAllRegistrationsByKeyPrefix FAILED:', e));
          }
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearUserDataForAllRegistrationsByKeyPrefix');
          const result = this.impl.clearUserDataForAllRegistrationsByKeyPrefix(params.arg_key_prefix);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearUserDataForAllRegistrationsByKeyPrefix FAILED:', e));
          }
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.performStorageCleanup');
          const result = this.impl.performStorageCleanup();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PerformStorageCleanup FAILED:', e));
          }
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.applyPolicyUpdates');
          const result = this.impl.applyPolicyUpdates(params.arg_policy_updates);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ApplyPolicyUpdates FAILED:', e));
          }
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPurgingResourceIdsForTest');
          const result = this.impl.getPurgingResourceIdsForTest();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPurgingResourceIdsForTest FAILED:', e));
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPurgingResourceIdsForLiveVersionForTest');
          const result = this.impl.getPurgingResourceIdsForLiveVersionForTest(params.arg_version_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPurgingResourceIdsForLiveVersionForTest FAILED:', e));
          }
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPurgeableResourceIdsForTest');
          const result = this.impl.getPurgeableResourceIdsForTest();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPurgeableResourceIdsForTest FAILED:', e));
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUncommittedResourceIdsForTest');
          const result = this.impl.getUncommittedResourceIdsForTest();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUncommittedResourceIdsForTest FAILED:', e));
          }
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPurgingCompleteCallbackForTest');
          const result = this.impl.setPurgingCompleteCallbackForTest();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetPurgingCompleteCallbackForTest FAILED:', e));
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

mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControlReceiver = mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControlReceiver;

mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControlPtr = mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControlRemote;
mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControlRequest = mojo.internal.bindings.storage.mojom.ServiceWorkerStorageControlPendingReceiver;

