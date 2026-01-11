// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/device/device.mojom
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

mojo.internal.bindings.blink.mojom.DeviceAttributeResultSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ManagedConfigurationObserver = {};
mojo.internal.bindings.blink.mojom.ManagedConfigurationObserverSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.ManagedConfigurationObserver.$interfaceName = 'blink.mojom.ManagedConfigurationObserver';
mojo.internal.bindings.blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DeviceAPIService = {};
mojo.internal.bindings.blink.mojom.DeviceAPIServiceSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.DeviceAPIService.$interfaceName = 'blink.mojom.DeviceAPIService';
mojo.internal.bindings.blink.mojom.DeviceAPIService_GetDirectoryId_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DeviceAPIService_GetDirectoryId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DeviceAPIService_GetHostname_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DeviceAPIService_GetHostname_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DeviceAPIService_GetSerialNumber_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DeviceAPIService_GetSerialNumber_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DeviceAPIService_GetAnnotatedLocation_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DeviceAPIService_GetAnnotatedLocation_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ManagedConfigurationService = {};
mojo.internal.bindings.blink.mojom.ManagedConfigurationServiceSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.ManagedConfigurationService.$interfaceName = 'blink.mojom.ManagedConfigurationService';
mojo.internal.bindings.blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_ParamsSpec = { $: {} };

// Union: DeviceAttributeResult
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.DeviceAttributeResultSpec, 'blink.mojom.DeviceAttributeResult', {
      'arg_error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_attribute': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': true,
      },
    });

// Interface: ManagedConfigurationObserver
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_ParamsSpec, 'blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.blink.mojom.ManagedConfigurationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.ManagedConfigurationObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ManagedConfigurationObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.ManagedConfigurationObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.ManagedConfigurationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onConfigurationChanged() {
    return this.$.onConfigurationChanged();
  }
};

mojo.internal.bindings.blink.mojom.ManagedConfigurationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ManagedConfigurationObserver', [
      { explicit: null },
    ]);
  }

  onConfigurationChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.ManagedConfigurationObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.ManagedConfigurationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ManagedConfigurationObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.ManagedConfigurationObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ManagedConfigurationObserver', [
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
        
        // Try Method 0: OnConfigurationChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConfigurationChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onConfigurationChanged');
          const result = this.impl.onConfigurationChanged();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.ManagedConfigurationObserverReceiver = mojo.internal.bindings.blink.mojom.ManagedConfigurationObserverReceiver;

mojo.internal.bindings.blink.mojom.ManagedConfigurationObserverPtr = mojo.internal.bindings.blink.mojom.ManagedConfigurationObserverRemote;
mojo.internal.bindings.blink.mojom.ManagedConfigurationObserverRequest = mojo.internal.bindings.blink.mojom.ManagedConfigurationObserverPendingReceiver;


// Interface: DeviceAPIService
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DeviceAPIService_GetDirectoryId_ParamsSpec, 'blink.mojom.DeviceAPIService_GetDirectoryId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DeviceAPIService_GetDirectoryId_ResponseParamsSpec, 'blink.mojom.DeviceAPIService_GetDirectoryId_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.DeviceAttributeResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DeviceAPIService_GetHostname_ParamsSpec, 'blink.mojom.DeviceAPIService_GetHostname_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DeviceAPIService_GetHostname_ResponseParamsSpec, 'blink.mojom.DeviceAPIService_GetHostname_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.DeviceAttributeResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DeviceAPIService_GetSerialNumber_ParamsSpec, 'blink.mojom.DeviceAPIService_GetSerialNumber_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DeviceAPIService_GetSerialNumber_ResponseParamsSpec, 'blink.mojom.DeviceAPIService_GetSerialNumber_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.DeviceAttributeResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ParamsSpec, 'blink.mojom.DeviceAPIService_GetAnnotatedAssetId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ResponseParamsSpec, 'blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.DeviceAttributeResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DeviceAPIService_GetAnnotatedLocation_ParamsSpec, 'blink.mojom.DeviceAPIService_GetAnnotatedLocation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DeviceAPIService_GetAnnotatedLocation_ResponseParamsSpec, 'blink.mojom.DeviceAPIService_GetAnnotatedLocation_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.DeviceAttributeResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.DeviceAPIServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.DeviceAPIServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DeviceAPIService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.DeviceAPIServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.DeviceAPIServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDirectoryId() {
    return this.$.getDirectoryId();
  }
  getHostname() {
    return this.$.getHostname();
  }
  getSerialNumber() {
    return this.$.getSerialNumber();
  }
  getAnnotatedAssetId() {
    return this.$.getAnnotatedAssetId();
  }
  getAnnotatedLocation() {
    return this.$.getAnnotatedLocation();
  }
};

mojo.internal.bindings.blink.mojom.DeviceAPIServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.DeviceAPIService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getDirectoryId() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.DeviceAPIService_GetDirectoryId_ParamsSpec,
      mojo.internal.bindings.blink.mojom.DeviceAPIService_GetDirectoryId_ResponseParamsSpec,
      [],
      false);
  }

  getHostname() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.DeviceAPIService_GetHostname_ParamsSpec,
      mojo.internal.bindings.blink.mojom.DeviceAPIService_GetHostname_ResponseParamsSpec,
      [],
      false);
  }

  getSerialNumber() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.DeviceAPIService_GetSerialNumber_ParamsSpec,
      mojo.internal.bindings.blink.mojom.DeviceAPIService_GetSerialNumber_ResponseParamsSpec,
      [],
      false);
  }

  getAnnotatedAssetId() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ParamsSpec,
      mojo.internal.bindings.blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ResponseParamsSpec,
      [],
      false);
  }

  getAnnotatedLocation() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.DeviceAPIService_GetAnnotatedLocation_ParamsSpec,
      mojo.internal.bindings.blink.mojom.DeviceAPIService_GetAnnotatedLocation_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.DeviceAPIService.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.DeviceAPIServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DeviceAPIService',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.DeviceAPIServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.DeviceAPIService', [
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
        
        // Try Method 0: GetDirectoryId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DeviceAPIService_GetDirectoryId_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDirectoryId (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetHostname
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DeviceAPIService_GetHostname_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHostname (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetSerialNumber
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DeviceAPIService_GetSerialNumber_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSerialNumber (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetAnnotatedAssetId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAnnotatedAssetId (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetAnnotatedLocation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DeviceAPIService_GetAnnotatedLocation_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAnnotatedLocation (4)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DeviceAPIService_GetDirectoryId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDirectoryId');
          const result = this.impl.getDirectoryId();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.DeviceAPIService_GetDirectoryId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDirectoryId FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DeviceAPIService_GetHostname_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHostname');
          const result = this.impl.getHostname();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.DeviceAPIService_GetHostname_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetHostname FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DeviceAPIService_GetSerialNumber_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSerialNumber');
          const result = this.impl.getSerialNumber();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.DeviceAPIService_GetSerialNumber_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSerialNumber FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAnnotatedAssetId');
          const result = this.impl.getAnnotatedAssetId();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAnnotatedAssetId FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.DeviceAPIService_GetAnnotatedLocation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAnnotatedLocation');
          const result = this.impl.getAnnotatedLocation();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.DeviceAPIService_GetAnnotatedLocation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAnnotatedLocation FAILED:', e));
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

mojo.internal.bindings.blink.mojom.DeviceAPIServiceReceiver = mojo.internal.bindings.blink.mojom.DeviceAPIServiceReceiver;

mojo.internal.bindings.blink.mojom.DeviceAPIServicePtr = mojo.internal.bindings.blink.mojom.DeviceAPIServiceRemote;
mojo.internal.bindings.blink.mojom.DeviceAPIServiceRequest = mojo.internal.bindings.blink.mojom.DeviceAPIServicePendingReceiver;


// Interface: ManagedConfigurationService
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ParamsSpec, 'blink.mojom.ManagedConfigurationService_GetManagedConfiguration_Params', [
      mojo.internal.StructField('arg_keys', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ResponseParamsSpec, 'blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ResponseParams', [
      mojo.internal.StructField('arg_configurations', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_ParamsSpec, 'blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.ManagedConfigurationObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.ManagedConfigurationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.ManagedConfigurationServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ManagedConfigurationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.ManagedConfigurationServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.ManagedConfigurationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getManagedConfiguration(arg_keys) {
    return this.$.getManagedConfiguration(arg_keys);
  }
  subscribeToManagedConfiguration(arg_observer) {
    return this.$.subscribeToManagedConfiguration(arg_observer);
  }
};

mojo.internal.bindings.blink.mojom.ManagedConfigurationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ManagedConfigurationService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getManagedConfiguration(arg_keys) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ResponseParamsSpec,
      [arg_keys],
      false);
  }

  subscribeToManagedConfiguration(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

};

mojo.internal.bindings.blink.mojom.ManagedConfigurationService.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.ManagedConfigurationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ManagedConfigurationService',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.ManagedConfigurationServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ManagedConfigurationService', [
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
        
        // Try Method 0: GetManagedConfiguration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetManagedConfiguration (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SubscribeToManagedConfiguration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubscribeToManagedConfiguration (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getManagedConfiguration');
          const result = this.impl.getManagedConfiguration(params.arg_keys);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetManagedConfiguration FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.subscribeToManagedConfiguration');
          const result = this.impl.subscribeToManagedConfiguration(params.arg_observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.ManagedConfigurationServiceReceiver = mojo.internal.bindings.blink.mojom.ManagedConfigurationServiceReceiver;

mojo.internal.bindings.blink.mojom.ManagedConfigurationServicePtr = mojo.internal.bindings.blink.mojom.ManagedConfigurationServiceRemote;
mojo.internal.bindings.blink.mojom.ManagedConfigurationServiceRequest = mojo.internal.bindings.blink.mojom.ManagedConfigurationServicePendingReceiver;

