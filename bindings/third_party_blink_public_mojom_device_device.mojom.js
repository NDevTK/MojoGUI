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

blink.mojom.DeviceAttributeResultSpec = { $: {} };
blink.mojom.ManagedConfigurationObserver = {};
blink.mojom.ManagedConfigurationObserver.$interfaceName = 'blink.mojom.ManagedConfigurationObserver';
blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_ParamsSpec = { $: {} };
blink.mojom.DeviceAPIService = {};
blink.mojom.DeviceAPIService.$interfaceName = 'blink.mojom.DeviceAPIService';
blink.mojom.DeviceAPIService_GetDirectoryId_ParamsSpec = { $: {} };
blink.mojom.DeviceAPIService_GetDirectoryId_ResponseParamsSpec = { $: {} };
blink.mojom.DeviceAPIService_GetHostname_ParamsSpec = { $: {} };
blink.mojom.DeviceAPIService_GetHostname_ResponseParamsSpec = { $: {} };
blink.mojom.DeviceAPIService_GetSerialNumber_ParamsSpec = { $: {} };
blink.mojom.DeviceAPIService_GetSerialNumber_ResponseParamsSpec = { $: {} };
blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ParamsSpec = { $: {} };
blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ResponseParamsSpec = { $: {} };
blink.mojom.DeviceAPIService_GetAnnotatedLocation_ParamsSpec = { $: {} };
blink.mojom.DeviceAPIService_GetAnnotatedLocation_ResponseParamsSpec = { $: {} };
blink.mojom.ManagedConfigurationService = {};
blink.mojom.ManagedConfigurationService.$interfaceName = 'blink.mojom.ManagedConfigurationService';
blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ParamsSpec = { $: {} };
blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ResponseParamsSpec = { $: {} };
blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_ParamsSpec = { $: {} };

// Union: DeviceAttributeResult
mojo.internal.Union(
    blink.mojom.DeviceAttributeResultSpec, 'blink.mojom.DeviceAttributeResult', {
      'error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'attribute': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': true,
      },
    });

// Interface: ManagedConfigurationObserver
mojo.internal.Struct(
    blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_ParamsSpec, 'blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_Params', [
    ],
    [[0, 8]]);

blink.mojom.ManagedConfigurationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ManagedConfigurationObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ManagedConfigurationObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ManagedConfigurationObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.ManagedConfigurationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ManagedConfigurationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ManagedConfigurationObserver', [
      { explicit: null },
    ]);
  }

  onConfigurationChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.ManagedConfigurationObserver.getRemote = function() {
  let remote = new blink.mojom.ManagedConfigurationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ManagedConfigurationObserver',
    'context');
  return remote.$;
};

blink.mojom.ManagedConfigurationObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ManagedConfigurationObserver', [
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
             decoder.decodeStructInline(blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_ParamsSpec.$.structSpec);
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

blink.mojom.ManagedConfigurationObserverReceiver = blink.mojom.ManagedConfigurationObserverReceiver;

blink.mojom.ManagedConfigurationObserverPtr = blink.mojom.ManagedConfigurationObserverRemote;
blink.mojom.ManagedConfigurationObserverRequest = blink.mojom.ManagedConfigurationObserverPendingReceiver;


// Interface: DeviceAPIService
mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetDirectoryId_ParamsSpec, 'blink.mojom.DeviceAPIService_GetDirectoryId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetDirectoryId_ResponseParamsSpec, 'blink.mojom.DeviceAPIService_GetDirectoryId_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.DeviceAttributeResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetHostname_ParamsSpec, 'blink.mojom.DeviceAPIService_GetHostname_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetHostname_ResponseParamsSpec, 'blink.mojom.DeviceAPIService_GetHostname_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.DeviceAttributeResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetSerialNumber_ParamsSpec, 'blink.mojom.DeviceAPIService_GetSerialNumber_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetSerialNumber_ResponseParamsSpec, 'blink.mojom.DeviceAPIService_GetSerialNumber_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.DeviceAttributeResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ParamsSpec, 'blink.mojom.DeviceAPIService_GetAnnotatedAssetId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ResponseParamsSpec, 'blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.DeviceAttributeResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetAnnotatedLocation_ParamsSpec, 'blink.mojom.DeviceAPIService_GetAnnotatedLocation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetAnnotatedLocation_ResponseParamsSpec, 'blink.mojom.DeviceAPIService_GetAnnotatedLocation_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.DeviceAttributeResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.DeviceAPIServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DeviceAPIServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DeviceAPIService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DeviceAPIServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.DeviceAPIServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DeviceAPIServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceAPIService', [
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
      blink.mojom.DeviceAPIService_GetDirectoryId_ParamsSpec,
      blink.mojom.DeviceAPIService_GetDirectoryId_ResponseParamsSpec,
      [],
      false);
  }

  getHostname() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.DeviceAPIService_GetHostname_ParamsSpec,
      blink.mojom.DeviceAPIService_GetHostname_ResponseParamsSpec,
      [],
      false);
  }

  getSerialNumber() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.DeviceAPIService_GetSerialNumber_ParamsSpec,
      blink.mojom.DeviceAPIService_GetSerialNumber_ResponseParamsSpec,
      [],
      false);
  }

  getAnnotatedAssetId() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ParamsSpec,
      blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ResponseParamsSpec,
      [],
      false);
  }

  getAnnotatedLocation() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.DeviceAPIService_GetAnnotatedLocation_ParamsSpec,
      blink.mojom.DeviceAPIService_GetAnnotatedLocation_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.DeviceAPIService.getRemote = function() {
  let remote = new blink.mojom.DeviceAPIServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DeviceAPIService',
    'context');
  return remote.$;
};

blink.mojom.DeviceAPIServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DeviceAPIService', [
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
             decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetDirectoryId_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetHostname_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetSerialNumber_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetAnnotatedLocation_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetDirectoryId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDirectoryId');
          const result = this.impl.getDirectoryId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DeviceAPIService_GetDirectoryId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetHostname_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHostname');
          const result = this.impl.getHostname();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DeviceAPIService_GetHostname_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetSerialNumber_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSerialNumber');
          const result = this.impl.getSerialNumber();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DeviceAPIService_GetSerialNumber_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAnnotatedAssetId');
          const result = this.impl.getAnnotatedAssetId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetAnnotatedLocation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAnnotatedLocation');
          const result = this.impl.getAnnotatedLocation();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DeviceAPIService_GetAnnotatedLocation_ResponseParamsSpec);
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

blink.mojom.DeviceAPIServiceReceiver = blink.mojom.DeviceAPIServiceReceiver;

blink.mojom.DeviceAPIServicePtr = blink.mojom.DeviceAPIServiceRemote;
blink.mojom.DeviceAPIServiceRequest = blink.mojom.DeviceAPIServicePendingReceiver;


// Interface: ManagedConfigurationService
mojo.internal.Struct(
    blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ParamsSpec, 'blink.mojom.ManagedConfigurationService_GetManagedConfiguration_Params', [
      mojo.internal.StructField('keys', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ResponseParamsSpec, 'blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ResponseParams', [
      mojo.internal.StructField('configurations', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_ParamsSpec, 'blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.ManagedConfigurationObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ManagedConfigurationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ManagedConfigurationServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ManagedConfigurationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ManagedConfigurationServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.ManagedConfigurationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ManagedConfigurationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ManagedConfigurationService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getManagedConfiguration(keys) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ParamsSpec,
      blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ResponseParamsSpec,
      [keys],
      false);
  }

  subscribeToManagedConfiguration(observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_ParamsSpec,
      null,
      [observer],
      false);
  }

};

blink.mojom.ManagedConfigurationService.getRemote = function() {
  let remote = new blink.mojom.ManagedConfigurationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ManagedConfigurationService',
    'context');
  return remote.$;
};

blink.mojom.ManagedConfigurationServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ManagedConfigurationService', [
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
             decoder.decodeStructInline(blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getManagedConfiguration');
          const result = this.impl.getManagedConfiguration(params.keys);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.subscribeToManagedConfiguration');
          const result = this.impl.subscribeToManagedConfiguration(params.observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.ManagedConfigurationServiceReceiver = blink.mojom.ManagedConfigurationServiceReceiver;

blink.mojom.ManagedConfigurationServicePtr = blink.mojom.ManagedConfigurationServiceRemote;
blink.mojom.ManagedConfigurationServiceRequest = blink.mojom.ManagedConfigurationServicePendingReceiver;

