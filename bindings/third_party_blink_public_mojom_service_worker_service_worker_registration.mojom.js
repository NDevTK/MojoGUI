// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_registration.mojom
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
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.blink.mojom.ChangedServiceWorkerObjectsMaskSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectInfoSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost = {};
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost.$interfaceName = 'blink.mojom.ServiceWorkerRegistrationObjectHost';
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObject = {};
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObject.$interfaceName = 'blink.mojom.ServiceWorkerRegistrationObject';
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObject_SetServiceWorkerObjects_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObject_SetUpdateViaCache_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObject_UpdateFound_ParamsSpec = { $: {} };

// Struct: ChangedServiceWorkerObjectsMask
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ChangedServiceWorkerObjectsMaskSpec, 'blink.mojom.ChangedServiceWorkerObjectsMask', [
      mojo.internal.StructField('arg_installing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_waiting', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_active', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ServiceWorkerRegistrationObjectInfo
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectInfoSpec, 'blink.mojom.ServiceWorkerRegistrationObjectInfo', [
      mojo.internal.StructField('arg_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_scope', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_update_via_cache', 16, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerUpdateViaCacheSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_host_remote', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_receiver', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_installing', 40, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerObjectInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_waiting', 48, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerObjectInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_active', 56, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerObjectInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Interface: ServiceWorkerRegistrationObjectHost
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_Update_Params', [
      mojo.internal.StructField('arg_outside_fetch_client_settings_object', 0, 0, mojo.internal.bindings.blink.mojom.FetchClientSettingsObjectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ResponseParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ResponseParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_Params', [
      mojo.internal.StructField('arg_enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ResponseParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ResponseParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_state', 16, 0, mojo.internal.bindings.blink.mojom.NavigationPreloadStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_Params', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ResponseParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerRegistrationObjectHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  update(arg_outside_fetch_client_settings_object) {
    return this.$.update(arg_outside_fetch_client_settings_object);
  }
  unregister() {
    return this.$.unregister();
  }
  enableNavigationPreload(arg_enable) {
    return this.$.enableNavigationPreload(arg_enable);
  }
  getNavigationPreloadState() {
    return this.$.getNavigationPreloadState();
  }
  setNavigationPreloadHeader(arg_value) {
    return this.$.setNavigationPreloadHeader(arg_value);
  }
};

mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerRegistrationObjectHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  update(arg_outside_fetch_client_settings_object) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ResponseParamsSpec,
      [arg_outside_fetch_client_settings_object],
      false);
  }

  unregister() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ResponseParamsSpec,
      [],
      false);
  }

  enableNavigationPreload(arg_enable) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ResponseParamsSpec,
      [arg_enable],
      false);
  }

  getNavigationPreloadState() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ResponseParamsSpec,
      [],
      false);
  }

  setNavigationPreloadHeader(arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ResponseParamsSpec,
      [arg_value],
      false);
  }

};

mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerRegistrationObjectHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerRegistrationObjectHost', [
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
        
        // Try Method 0: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Unregister
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Unregister (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: EnableNavigationPreload
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableNavigationPreload (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetNavigationPreloadState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNavigationPreloadState (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetNavigationPreloadHeader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNavigationPreloadHeader (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.arg_outside_fetch_client_settings_object);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Update FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unregister');
          const result = this.impl.unregister();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Unregister FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableNavigationPreload');
          const result = this.impl.enableNavigationPreload(params.arg_enable);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EnableNavigationPreload FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNavigationPreloadState');
          const result = this.impl.getNavigationPreloadState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetNavigationPreloadState FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNavigationPreloadHeader');
          const result = this.impl.setNavigationPreloadHeader(params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetNavigationPreloadHeader FAILED:', e));
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

mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHostReceiver = mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHostReceiver;

mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHostPtr = mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHostRemote;
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHostRequest = mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectHostPendingReceiver;


// Interface: ServiceWorkerRegistrationObject
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObject_SetServiceWorkerObjects_ParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObject_SetServiceWorkerObjects_Params', [
      mojo.internal.StructField('arg_changed_mask', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.ChangedServiceWorkerObjectsMaskSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_installing', 8, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerObjectInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_waiting', 16, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerObjectInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_active', 24, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerObjectInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObject_SetUpdateViaCache_ParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObject_SetUpdateViaCache_Params', [
      mojo.internal.StructField('arg_update_via_cache', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerUpdateViaCacheSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObject_UpdateFound_ParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObject_UpdateFound_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerRegistrationObject';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setServiceWorkerObjects(arg_changed_mask, arg_installing, arg_waiting, arg_active) {
    return this.$.setServiceWorkerObjects(arg_changed_mask, arg_installing, arg_waiting, arg_active);
  }
  setUpdateViaCache(arg_update_via_cache) {
    return this.$.setUpdateViaCache(arg_update_via_cache);
  }
  updateFound() {
    return this.$.updateFound();
  }
};

mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerRegistrationObject', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setServiceWorkerObjects(arg_changed_mask, arg_installing, arg_waiting, arg_active) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObject_SetServiceWorkerObjects_ParamsSpec,
      null,
      [arg_changed_mask, arg_installing, arg_waiting, arg_active],
      false);
  }

  setUpdateViaCache(arg_update_via_cache) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObject_SetUpdateViaCache_ParamsSpec,
      null,
      [arg_update_via_cache],
      false);
  }

  updateFound() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObject_UpdateFound_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObject.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerRegistrationObject',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerRegistrationObject', [
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
        
        // Try Method 0: SetServiceWorkerObjects
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObject_SetServiceWorkerObjects_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetServiceWorkerObjects (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetUpdateViaCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObject_SetUpdateViaCache_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUpdateViaCache (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateFound
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObject_UpdateFound_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateFound (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObject_SetServiceWorkerObjects_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setServiceWorkerObjects');
          const result = this.impl.setServiceWorkerObjects(params.arg_changed_mask, params.arg_installing, params.arg_waiting, params.arg_active);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObject_SetUpdateViaCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUpdateViaCache');
          const result = this.impl.setUpdateViaCache(params.arg_update_via_cache);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObject_UpdateFound_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateFound');
          const result = this.impl.updateFound();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectReceiver = mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectReceiver;

mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectPtr = mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectRemote;
mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectRequest = mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectPendingReceiver;

