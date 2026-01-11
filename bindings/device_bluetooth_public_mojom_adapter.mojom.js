// Auto-generated MojoJS binding
 // Source: chromium_src/device/bluetooth/public/mojom/adapter.mojom
 // Module: bluetooth.mojom

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
 

 mojo.internal.bindings.bluetooth = mojo.internal.bindings.bluetooth || {};
mojo.internal.bindings.bluetooth.mojom = mojo.internal.bindings.bluetooth.mojom || {};

mojo.internal.bindings.bluetooth.mojom.ConnectResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.bluetooth.mojom.LocalCharacteristicReadResultSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.ConnectToServiceResultSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.AcceptConnectionResultSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.AdapterInfoSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Advertisement = {};
mojo.internal.bindings.bluetooth.mojom.Advertisement.$interfaceName = 'bluetooth.mojom.Advertisement';
mojo.internal.bindings.bluetooth.mojom.Advertisement_Unregister_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Advertisement_Unregister_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.DiscoverySession = {};
mojo.internal.bindings.bluetooth.mojom.DiscoverySession.$interfaceName = 'bluetooth.mojom.DiscoverySession';
mojo.internal.bindings.bluetooth.mojom.DiscoverySession_IsActive_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.DiscoverySession_IsActive_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.DiscoverySession_Stop_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.DiscoverySession_Stop_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Socket = {};
mojo.internal.bindings.bluetooth.mojom.Socket.$interfaceName = 'bluetooth.mojom.Socket';
mojo.internal.bindings.bluetooth.mojom.Socket_Disconnect_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Socket_Disconnect_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.ServerSocket = {};
mojo.internal.bindings.bluetooth.mojom.ServerSocket.$interfaceName = 'bluetooth.mojom.ServerSocket';
mojo.internal.bindings.bluetooth.mojom.ServerSocket_Accept_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.ServerSocket_Accept_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.ServerSocket_Disconnect_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.ServerSocket_Disconnect_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.GattService = {};
mojo.internal.bindings.bluetooth.mojom.GattService.$interfaceName = 'bluetooth.mojom.GattService';
mojo.internal.bindings.bluetooth.mojom.GattService_CreateCharacteristic_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.GattService_CreateCharacteristic_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.GattService_Register_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.GattService_Register_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.GattServiceObserver = {};
mojo.internal.bindings.bluetooth.mojom.GattServiceObserver.$interfaceName = 'bluetooth.mojom.GattServiceObserver';
mojo.internal.bindings.bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter = {};
mojo.internal.bindings.bluetooth.mojom.Adapter.$interfaceName = 'bluetooth.mojom.Adapter';
mojo.internal.bindings.bluetooth.mojom.Adapter_ConnectToDevice_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_ConnectToDevice_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_GetDevices_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_GetDevices_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_GetInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_GetInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_AddObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_AddObserver_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_RegisterAdvertisement_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_RegisterAdvertisement_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_SetDiscoverable_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_SetDiscoverable_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_SetName_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_SetName_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_StartDiscoverySession_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_StartDiscoverySession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_CreateLocalGattService_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_CreateLocalGattService_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.AdapterObserver = {};
mojo.internal.bindings.bluetooth.mojom.AdapterObserver.$interfaceName = 'bluetooth.mojom.AdapterObserver';
mojo.internal.bindings.bluetooth.mojom.AdapterObserver_PresentChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.AdapterObserver_PoweredChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DiscoverableChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DiscoveringChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DeviceAdded_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DeviceChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DeviceRemoved_ParamsSpec = { $: {} };

// Enum: ConnectResult
mojo.internal.bindings.bluetooth.mojom.ConnectResult = {
  SUCCESS: 0,
  AUTH_CANCELED: 1,
  AUTH_FAILED: 2,
  AUTH_REJECTED: 3,
  AUTH_TIMEOUT: 4,
  FAILED: 5,
  INPROGRESS: 6,
  UNKNOWN: 7,
  UNSUPPORTED_DEVICE: 8,
  DEVICE_NO_LONGER_IN_RANGE: 9,
  NOT_READY: 10,
  ALREADY_CONNECTED: 11,
  ALREADY_EXISTS: 12,
  NOT_CONNECTED: 13,
  DOES_NOT_EXIST: 14,
  INVALID_ARGS: 15,
  NON_AUTH_TIMEOUT: 16,
  NO_MEMORY: 17,
  JNI_ENVIRONMENT: 18,
  JNI_THREAD_ATTACH: 19,
  WAKELOCK: 20,
  UNEXPECTED_STATE: 21,
  SOCKET: 22,
};

// Union: LocalCharacteristicReadResult
mojo.internal.Union(
    mojo.internal.bindings.bluetooth.mojom.LocalCharacteristicReadResultSpec, 'bluetooth.mojom.LocalCharacteristicReadResult', {
      'arg_error_code': {
        'ordinal': 0,
        'type': mojo.internal.bindings.bluetooth.mojom.GattServiceErrorCodeSpec.$,
        'nullable': false,
      },
      'arg_data': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
    });

// Struct: ConnectToServiceResult
mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.ConnectToServiceResultSpec, 'bluetooth.mojom.ConnectToServiceResult', [
      mojo.internal.StructField('arg_socket', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.bluetooth.mojom.SocketSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_receive_stream', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_send_stream', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AcceptConnectionResult
mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.AcceptConnectionResultSpec, 'bluetooth.mojom.AcceptConnectionResult', [
      mojo.internal.StructField('arg_device', 0, 0, mojo.internal.bindings.bluetooth.mojom.DeviceInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_socket', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.bluetooth.mojom.SocketSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_receive_stream', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_send_stream', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AdapterInfo
mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.AdapterInfoSpec, 'bluetooth.mojom.AdapterInfo', [
      mojo.internal.StructField('arg_address', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_system_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_floss', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_extended_advertisement_support', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_initialized', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_present', 24, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_powered', 24, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_discoverable', 24, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_discovering', 24, 6, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: Advertisement
mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Advertisement_Unregister_ParamsSpec, 'bluetooth.mojom.Advertisement_Unregister_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Advertisement_Unregister_ResponseParamsSpec, 'bluetooth.mojom.Advertisement_Unregister_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.bluetooth.mojom.AdvertisementPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.bluetooth.mojom.AdvertisementRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.Advertisement';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.bluetooth.mojom.AdvertisementPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.bluetooth.mojom.AdvertisementRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  unregister() {
    return this.$.unregister();
  }
};

mojo.internal.bindings.bluetooth.mojom.AdvertisementRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Advertisement', [
      { explicit: null },
    ]);
  }

  unregister() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Advertisement_Unregister_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Advertisement_Unregister_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.bluetooth.mojom.Advertisement.getRemote = function() {
  let remote = new mojo.internal.bindings.bluetooth.mojom.AdvertisementRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.Advertisement',
    'context');
  return remote.$;
};

mojo.internal.bindings.bluetooth.mojom.AdvertisementReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Advertisement', [
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
        
        // Try Method 0: Unregister
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Advertisement_Unregister_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Unregister (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Advertisement_Unregister_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unregister');
          const result = this.impl.unregister();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Advertisement_Unregister_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Unregister FAILED:', e));
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

mojo.internal.bindings.bluetooth.mojom.AdvertisementReceiver = mojo.internal.bindings.bluetooth.mojom.AdvertisementReceiver;

mojo.internal.bindings.bluetooth.mojom.AdvertisementPtr = mojo.internal.bindings.bluetooth.mojom.AdvertisementRemote;
mojo.internal.bindings.bluetooth.mojom.AdvertisementRequest = mojo.internal.bindings.bluetooth.mojom.AdvertisementPendingReceiver;


// Interface: DiscoverySession
mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.DiscoverySession_IsActive_ParamsSpec, 'bluetooth.mojom.DiscoverySession_IsActive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.DiscoverySession_IsActive_ResponseParamsSpec, 'bluetooth.mojom.DiscoverySession_IsActive_ResponseParams', [
      mojo.internal.StructField('arg_active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.DiscoverySession_Stop_ParamsSpec, 'bluetooth.mojom.DiscoverySession_Stop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.DiscoverySession_Stop_ResponseParamsSpec, 'bluetooth.mojom.DiscoverySession_Stop_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.bluetooth.mojom.DiscoverySessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.bluetooth.mojom.DiscoverySessionRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.DiscoverySession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.bluetooth.mojom.DiscoverySessionPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.bluetooth.mojom.DiscoverySessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  isActive() {
    return this.$.isActive();
  }
  stop() {
    return this.$.stop();
  }
};

mojo.internal.bindings.bluetooth.mojom.DiscoverySessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DiscoverySession', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  isActive() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.DiscoverySession_IsActive_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.DiscoverySession_IsActive_ResponseParamsSpec,
      [],
      false);
  }

  stop() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.DiscoverySession_Stop_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.DiscoverySession_Stop_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.bluetooth.mojom.DiscoverySession.getRemote = function() {
  let remote = new mojo.internal.bindings.bluetooth.mojom.DiscoverySessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.DiscoverySession',
    'context');
  return remote.$;
};

mojo.internal.bindings.bluetooth.mojom.DiscoverySessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DiscoverySession', [
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
        
        // Try Method 0: IsActive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.DiscoverySession_IsActive_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsActive (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Stop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.DiscoverySession_Stop_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Stop (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.DiscoverySession_IsActive_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isActive');
          const result = this.impl.isActive();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.DiscoverySession_IsActive_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsActive FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.DiscoverySession_Stop_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stop');
          const result = this.impl.stop();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.DiscoverySession_Stop_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Stop FAILED:', e));
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

mojo.internal.bindings.bluetooth.mojom.DiscoverySessionReceiver = mojo.internal.bindings.bluetooth.mojom.DiscoverySessionReceiver;

mojo.internal.bindings.bluetooth.mojom.DiscoverySessionPtr = mojo.internal.bindings.bluetooth.mojom.DiscoverySessionRemote;
mojo.internal.bindings.bluetooth.mojom.DiscoverySessionRequest = mojo.internal.bindings.bluetooth.mojom.DiscoverySessionPendingReceiver;


// Interface: Socket
mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Socket_Disconnect_ParamsSpec, 'bluetooth.mojom.Socket_Disconnect_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Socket_Disconnect_ResponseParamsSpec, 'bluetooth.mojom.Socket_Disconnect_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.bluetooth.mojom.SocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.bluetooth.mojom.SocketRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.Socket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.bluetooth.mojom.SocketPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.bluetooth.mojom.SocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  disconnect() {
    return this.$.disconnect();
  }
};

mojo.internal.bindings.bluetooth.mojom.SocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Socket', [
      { explicit: null },
    ]);
  }

  disconnect() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Socket_Disconnect_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Socket_Disconnect_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.bluetooth.mojom.Socket.getRemote = function() {
  let remote = new mojo.internal.bindings.bluetooth.mojom.SocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.Socket',
    'context');
  return remote.$;
};

mojo.internal.bindings.bluetooth.mojom.SocketReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Socket', [
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
        
        // Try Method 0: Disconnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Socket_Disconnect_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Disconnect (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Socket_Disconnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disconnect');
          const result = this.impl.disconnect();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Socket_Disconnect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Disconnect FAILED:', e));
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

mojo.internal.bindings.bluetooth.mojom.SocketReceiver = mojo.internal.bindings.bluetooth.mojom.SocketReceiver;

mojo.internal.bindings.bluetooth.mojom.SocketPtr = mojo.internal.bindings.bluetooth.mojom.SocketRemote;
mojo.internal.bindings.bluetooth.mojom.SocketRequest = mojo.internal.bindings.bluetooth.mojom.SocketPendingReceiver;


// Interface: ServerSocket
mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.ServerSocket_Accept_ParamsSpec, 'bluetooth.mojom.ServerSocket_Accept_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.ServerSocket_Accept_ResponseParamsSpec, 'bluetooth.mojom.ServerSocket_Accept_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.bluetooth.mojom.AcceptConnectionResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.ServerSocket_Disconnect_ParamsSpec, 'bluetooth.mojom.ServerSocket_Disconnect_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.ServerSocket_Disconnect_ResponseParamsSpec, 'bluetooth.mojom.ServerSocket_Disconnect_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.bluetooth.mojom.ServerSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.bluetooth.mojom.ServerSocketRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.ServerSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.bluetooth.mojom.ServerSocketPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.bluetooth.mojom.ServerSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  accept() {
    return this.$.accept();
  }
  disconnect() {
    return this.$.disconnect();
  }
};

mojo.internal.bindings.bluetooth.mojom.ServerSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServerSocket', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  accept() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.ServerSocket_Accept_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.ServerSocket_Accept_ResponseParamsSpec,
      [],
      false);
  }

  disconnect() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.ServerSocket_Disconnect_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.ServerSocket_Disconnect_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.bluetooth.mojom.ServerSocket.getRemote = function() {
  let remote = new mojo.internal.bindings.bluetooth.mojom.ServerSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.ServerSocket',
    'context');
  return remote.$;
};

mojo.internal.bindings.bluetooth.mojom.ServerSocketReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServerSocket', [
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
        
        // Try Method 0: Accept
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.ServerSocket_Accept_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Accept (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Disconnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.ServerSocket_Disconnect_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Disconnect (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.ServerSocket_Accept_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.accept');
          const result = this.impl.accept();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.ServerSocket_Accept_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Accept FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.ServerSocket_Disconnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disconnect');
          const result = this.impl.disconnect();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.ServerSocket_Disconnect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Disconnect FAILED:', e));
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

mojo.internal.bindings.bluetooth.mojom.ServerSocketReceiver = mojo.internal.bindings.bluetooth.mojom.ServerSocketReceiver;

mojo.internal.bindings.bluetooth.mojom.ServerSocketPtr = mojo.internal.bindings.bluetooth.mojom.ServerSocketRemote;
mojo.internal.bindings.bluetooth.mojom.ServerSocketRequest = mojo.internal.bindings.bluetooth.mojom.ServerSocketPendingReceiver;


// Interface: GattService
mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.GattService_CreateCharacteristic_ParamsSpec, 'bluetooth.mojom.GattService_CreateCharacteristic_Params', [
      mojo.internal.StructField('arg_characteristic_uuid', 0, 0, mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_permissions', 8, 0, mojo.internal.bindings.bluetooth.mojom.GattCharacteristicPermissionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_properties', 16, 0, mojo.internal.bindings.bluetooth.mojom.GattCharacteristicPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.GattService_CreateCharacteristic_ResponseParamsSpec, 'bluetooth.mojom.GattService_CreateCharacteristic_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.GattService_Register_ParamsSpec, 'bluetooth.mojom.GattService_Register_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.GattService_Register_ResponseParamsSpec, 'bluetooth.mojom.GattService_Register_ResponseParams', [
      mojo.internal.StructField('arg_error_code', 0, 0, mojo.internal.bindings.bluetooth.mojom.GattServiceErrorCodeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.bluetooth.mojom.GattServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.bluetooth.mojom.GattServiceRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.GattService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.bluetooth.mojom.GattServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.bluetooth.mojom.GattServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createCharacteristic(arg_characteristic_uuid, arg_permissions, arg_properties) {
    return this.$.createCharacteristic(arg_characteristic_uuid, arg_permissions, arg_properties);
  }
  register() {
    return this.$.register();
  }
};

mojo.internal.bindings.bluetooth.mojom.GattServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GattService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  createCharacteristic(arg_characteristic_uuid, arg_permissions, arg_properties) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.GattService_CreateCharacteristic_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.GattService_CreateCharacteristic_ResponseParamsSpec,
      [arg_characteristic_uuid, arg_permissions, arg_properties],
      false);
  }

  register() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.GattService_Register_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.GattService_Register_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.bluetooth.mojom.GattService.getRemote = function() {
  let remote = new mojo.internal.bindings.bluetooth.mojom.GattServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.GattService',
    'context');
  return remote.$;
};

mojo.internal.bindings.bluetooth.mojom.GattServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GattService', [
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
        
        // Try Method 0: CreateCharacteristic
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.GattService_CreateCharacteristic_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCharacteristic (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Register
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.GattService_Register_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Register (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.GattService_CreateCharacteristic_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCharacteristic');
          const result = this.impl.createCharacteristic(params.arg_characteristic_uuid, params.arg_permissions, params.arg_properties);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.GattService_CreateCharacteristic_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateCharacteristic FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.GattService_Register_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.register');
          const result = this.impl.register();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.GattService_Register_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Register FAILED:', e));
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

mojo.internal.bindings.bluetooth.mojom.GattServiceReceiver = mojo.internal.bindings.bluetooth.mojom.GattServiceReceiver;

mojo.internal.bindings.bluetooth.mojom.GattServicePtr = mojo.internal.bindings.bluetooth.mojom.GattServiceRemote;
mojo.internal.bindings.bluetooth.mojom.GattServiceRequest = mojo.internal.bindings.bluetooth.mojom.GattServicePendingReceiver;


// Interface: GattServiceObserver
mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ParamsSpec, 'bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_Params', [
      mojo.internal.StructField('arg_remote_device', 0, 0, mojo.internal.bindings.bluetooth.mojom.DeviceInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_characteristic_uuid', 8, 0, mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_service_uuid', 16, 0, mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ResponseParamsSpec, 'bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ResponseParams', [
      mojo.internal.StructField('arg_read_result', 0, 0, mojo.internal.bindings.bluetooth.mojom.LocalCharacteristicReadResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.bluetooth.mojom.GattServiceObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.bluetooth.mojom.GattServiceObserverRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.GattServiceObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.bluetooth.mojom.GattServiceObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.bluetooth.mojom.GattServiceObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onLocalCharacteristicRead(arg_remote_device, arg_characteristic_uuid, arg_service_uuid, arg_offset) {
    return this.$.onLocalCharacteristicRead(arg_remote_device, arg_characteristic_uuid, arg_service_uuid, arg_offset);
  }
};

mojo.internal.bindings.bluetooth.mojom.GattServiceObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GattServiceObserver', [
      { explicit: null },
    ]);
  }

  onLocalCharacteristicRead(arg_remote_device, arg_characteristic_uuid, arg_service_uuid, arg_offset) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ResponseParamsSpec,
      [arg_remote_device, arg_characteristic_uuid, arg_service_uuid, arg_offset],
      false);
  }

};

mojo.internal.bindings.bluetooth.mojom.GattServiceObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.bluetooth.mojom.GattServiceObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.GattServiceObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.bluetooth.mojom.GattServiceObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GattServiceObserver', [
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
        
        // Try Method 0: OnLocalCharacteristicRead
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLocalCharacteristicRead (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLocalCharacteristicRead');
          const result = this.impl.onLocalCharacteristicRead(params.arg_remote_device, params.arg_characteristic_uuid, params.arg_service_uuid, params.arg_offset);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnLocalCharacteristicRead FAILED:', e));
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

mojo.internal.bindings.bluetooth.mojom.GattServiceObserverReceiver = mojo.internal.bindings.bluetooth.mojom.GattServiceObserverReceiver;

mojo.internal.bindings.bluetooth.mojom.GattServiceObserverPtr = mojo.internal.bindings.bluetooth.mojom.GattServiceObserverRemote;
mojo.internal.bindings.bluetooth.mojom.GattServiceObserverRequest = mojo.internal.bindings.bluetooth.mojom.GattServiceObserverPendingReceiver;


// Interface: Adapter
mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_ConnectToDevice_ParamsSpec, 'bluetooth.mojom.Adapter_ConnectToDevice_Params', [
      mojo.internal.StructField('arg_address', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_ConnectToDevice_ResponseParamsSpec, 'bluetooth.mojom.Adapter_ConnectToDevice_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.bluetooth.mojom.ConnectResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.bluetooth.mojom.DeviceRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_GetDevices_ParamsSpec, 'bluetooth.mojom.Adapter_GetDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_GetDevices_ResponseParamsSpec, 'bluetooth.mojom.Adapter_GetDevices_ResponseParams', [
      mojo.internal.StructField('arg_devices', 0, 0, mojo.internal.Array(mojo.internal.bindings.bluetooth.mojom.DeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_GetInfo_ParamsSpec, 'bluetooth.mojom.Adapter_GetInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_GetInfo_ResponseParamsSpec, 'bluetooth.mojom.Adapter_GetInfo_ResponseParams', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.bluetooth.mojom.AdapterInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_AddObserver_ParamsSpec, 'bluetooth.mojom.Adapter_AddObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.bluetooth.mojom.AdapterObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_AddObserver_ResponseParamsSpec, 'bluetooth.mojom.Adapter_AddObserver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_RegisterAdvertisement_ParamsSpec, 'bluetooth.mojom.Adapter_RegisterAdvertisement_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_service_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_use_scan_response', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_connectable', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_RegisterAdvertisement_ResponseParamsSpec, 'bluetooth.mojom.Adapter_RegisterAdvertisement_ResponseParams', [
      mojo.internal.StructField('arg_advertisement', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.bluetooth.mojom.AdvertisementSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_SetDiscoverable_ParamsSpec, 'bluetooth.mojom.Adapter_SetDiscoverable_Params', [
      mojo.internal.StructField('arg_discoverable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_SetDiscoverable_ResponseParamsSpec, 'bluetooth.mojom.Adapter_SetDiscoverable_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_SetName_ParamsSpec, 'bluetooth.mojom.Adapter_SetName_Params', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_SetName_ResponseParamsSpec, 'bluetooth.mojom.Adapter_SetName_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_StartDiscoverySession_ParamsSpec, 'bluetooth.mojom.Adapter_StartDiscoverySession_Params', [
      mojo.internal.StructField('arg_client_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_StartDiscoverySession_ResponseParamsSpec, 'bluetooth.mojom.Adapter_StartDiscoverySession_ResponseParams', [
      mojo.internal.StructField('arg_session', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.bluetooth.mojom.DiscoverySessionSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ParamsSpec, 'bluetooth.mojom.Adapter_ConnectToServiceInsecurely_Params', [
      mojo.internal.StructField('arg_address', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_service_uuid', 8, 0, mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_should_unbond_on_error', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ResponseParamsSpec, 'bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.bluetooth.mojom.ConnectToServiceResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ParamsSpec, 'bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_Params', [
      mojo.internal.StructField('arg_service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_service_uuid', 8, 0, mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ResponseParamsSpec, 'bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ResponseParams', [
      mojo.internal.StructField('arg_server_socket', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.bluetooth.mojom.ServerSocketSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_CreateLocalGattService_ParamsSpec, 'bluetooth.mojom.Adapter_CreateLocalGattService_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.bluetooth.mojom.GattServiceObserverSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_CreateLocalGattService_ResponseParamsSpec, 'bluetooth.mojom.Adapter_CreateLocalGattService_ResponseParams', [
      mojo.internal.StructField('arg_gatt_service', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.bluetooth.mojom.GattServiceSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ParamsSpec, 'bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ResponseParamsSpec, 'bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ResponseParams', [
      mojo.internal.StructField('arg_is_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.bluetooth.mojom.AdapterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.bluetooth.mojom.AdapterRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.Adapter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.bluetooth.mojom.AdapterPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.bluetooth.mojom.AdapterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  connectToDevice(arg_address) {
    return this.$.connectToDevice(arg_address);
  }
  getDevices() {
    return this.$.getDevices();
  }
  getInfo() {
    return this.$.getInfo();
  }
  addObserver(arg_observer) {
    return this.$.addObserver(arg_observer);
  }
  registerAdvertisement(arg_service_id, arg_service_data, arg_use_scan_response, arg_connectable) {
    return this.$.registerAdvertisement(arg_service_id, arg_service_data, arg_use_scan_response, arg_connectable);
  }
  setDiscoverable(arg_discoverable) {
    return this.$.setDiscoverable(arg_discoverable);
  }
  setName(arg_name) {
    return this.$.setName(arg_name);
  }
  startDiscoverySession(arg_client_name) {
    return this.$.startDiscoverySession(arg_client_name);
  }
  connectToServiceInsecurely(arg_address, arg_service_uuid, arg_should_unbond_on_error) {
    return this.$.connectToServiceInsecurely(arg_address, arg_service_uuid, arg_should_unbond_on_error);
  }
  createRfcommServiceInsecurely(arg_service_name, arg_service_uuid) {
    return this.$.createRfcommServiceInsecurely(arg_service_name, arg_service_uuid);
  }
  createLocalGattService(arg_service_id, arg_observer) {
    return this.$.createLocalGattService(arg_service_id, arg_observer);
  }
  isLeScatternetDualRoleSupported() {
    return this.$.isLeScatternetDualRoleSupported();
  }
};

mojo.internal.bindings.bluetooth.mojom.AdapterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Adapter', [
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

  connectToDevice(arg_address) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Adapter_ConnectToDevice_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Adapter_ConnectToDevice_ResponseParamsSpec,
      [arg_address],
      false);
  }

  getDevices() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Adapter_GetDevices_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Adapter_GetDevices_ResponseParamsSpec,
      [],
      false);
  }

  getInfo() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Adapter_GetInfo_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Adapter_GetInfo_ResponseParamsSpec,
      [],
      false);
  }

  addObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Adapter_AddObserver_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Adapter_AddObserver_ResponseParamsSpec,
      [arg_observer],
      false);
  }

  registerAdvertisement(arg_service_id, arg_service_data, arg_use_scan_response, arg_connectable) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Adapter_RegisterAdvertisement_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Adapter_RegisterAdvertisement_ResponseParamsSpec,
      [arg_service_id, arg_service_data, arg_use_scan_response, arg_connectable],
      false);
  }

  setDiscoverable(arg_discoverable) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Adapter_SetDiscoverable_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Adapter_SetDiscoverable_ResponseParamsSpec,
      [arg_discoverable],
      false);
  }

  setName(arg_name) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Adapter_SetName_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Adapter_SetName_ResponseParamsSpec,
      [arg_name],
      false);
  }

  startDiscoverySession(arg_client_name) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Adapter_StartDiscoverySession_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Adapter_StartDiscoverySession_ResponseParamsSpec,
      [arg_client_name],
      false);
  }

  connectToServiceInsecurely(arg_address, arg_service_uuid, arg_should_unbond_on_error) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ResponseParamsSpec,
      [arg_address, arg_service_uuid, arg_should_unbond_on_error],
      false);
  }

  createRfcommServiceInsecurely(arg_service_name, arg_service_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ResponseParamsSpec,
      [arg_service_name, arg_service_uuid],
      false);
  }

  createLocalGattService(arg_service_id, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Adapter_CreateLocalGattService_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Adapter_CreateLocalGattService_ResponseParamsSpec,
      [arg_service_id, arg_observer],
      false);
  }

  isLeScatternetDualRoleSupported() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.bluetooth.mojom.Adapter.getRemote = function() {
  let remote = new mojo.internal.bindings.bluetooth.mojom.AdapterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.Adapter',
    'context');
  return remote.$;
};

mojo.internal.bindings.bluetooth.mojom.AdapterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Adapter', [
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
        
        // Try Method 0: ConnectToDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_ConnectToDevice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectToDevice (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_GetDevices_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDevices (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_GetInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInfo (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_AddObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RegisterAdvertisement
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_RegisterAdvertisement_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterAdvertisement (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetDiscoverable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_SetDiscoverable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDiscoverable (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_SetName_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetName (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: StartDiscoverySession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_StartDiscoverySession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDiscoverySession (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ConnectToServiceInsecurely
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectToServiceInsecurely (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: CreateRfcommServiceInsecurely
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateRfcommServiceInsecurely (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: CreateLocalGattService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_CreateLocalGattService_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateLocalGattService (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: IsLeScatternetDualRoleSupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsLeScatternetDualRoleSupported (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_ConnectToDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connectToDevice');
          const result = this.impl.connectToDevice(params.arg_address);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Adapter_ConnectToDevice_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ConnectToDevice FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_GetDevices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDevices');
          const result = this.impl.getDevices();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Adapter_GetDevices_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDevices FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_GetInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getInfo');
          const result = this.impl.getInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Adapter_GetInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetInfo FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.arg_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Adapter_AddObserver_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddObserver FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_RegisterAdvertisement_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerAdvertisement');
          const result = this.impl.registerAdvertisement(params.arg_service_id, params.arg_service_data, params.arg_use_scan_response, params.arg_connectable);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Adapter_RegisterAdvertisement_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RegisterAdvertisement FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_SetDiscoverable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDiscoverable');
          const result = this.impl.setDiscoverable(params.arg_discoverable);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Adapter_SetDiscoverable_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetDiscoverable FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_SetName_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setName');
          const result = this.impl.setName(params.arg_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Adapter_SetName_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetName FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_StartDiscoverySession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startDiscoverySession');
          const result = this.impl.startDiscoverySession(params.arg_client_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Adapter_StartDiscoverySession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartDiscoverySession FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connectToServiceInsecurely');
          const result = this.impl.connectToServiceInsecurely(params.arg_address, params.arg_service_uuid, params.arg_should_unbond_on_error);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ConnectToServiceInsecurely FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createRfcommServiceInsecurely');
          const result = this.impl.createRfcommServiceInsecurely(params.arg_service_name, params.arg_service_uuid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateRfcommServiceInsecurely FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_CreateLocalGattService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createLocalGattService');
          const result = this.impl.createLocalGattService(params.arg_service_id, params.arg_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Adapter_CreateLocalGattService_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateLocalGattService FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isLeScatternetDualRoleSupported');
          const result = this.impl.isLeScatternetDualRoleSupported();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsLeScatternetDualRoleSupported FAILED:', e));
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

mojo.internal.bindings.bluetooth.mojom.AdapterReceiver = mojo.internal.bindings.bluetooth.mojom.AdapterReceiver;

mojo.internal.bindings.bluetooth.mojom.AdapterPtr = mojo.internal.bindings.bluetooth.mojom.AdapterRemote;
mojo.internal.bindings.bluetooth.mojom.AdapterRequest = mojo.internal.bindings.bluetooth.mojom.AdapterPendingReceiver;


// Interface: AdapterObserver
mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.AdapterObserver_PresentChanged_ParamsSpec, 'bluetooth.mojom.AdapterObserver_PresentChanged_Params', [
      mojo.internal.StructField('arg_present', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.AdapterObserver_PoweredChanged_ParamsSpec, 'bluetooth.mojom.AdapterObserver_PoweredChanged_Params', [
      mojo.internal.StructField('arg_powered', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DiscoverableChanged_ParamsSpec, 'bluetooth.mojom.AdapterObserver_DiscoverableChanged_Params', [
      mojo.internal.StructField('arg_discoverable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DiscoveringChanged_ParamsSpec, 'bluetooth.mojom.AdapterObserver_DiscoveringChanged_Params', [
      mojo.internal.StructField('arg_discovering', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DeviceAdded_ParamsSpec, 'bluetooth.mojom.AdapterObserver_DeviceAdded_Params', [
      mojo.internal.StructField('arg_device', 0, 0, mojo.internal.bindings.bluetooth.mojom.DeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DeviceChanged_ParamsSpec, 'bluetooth.mojom.AdapterObserver_DeviceChanged_Params', [
      mojo.internal.StructField('arg_device', 0, 0, mojo.internal.bindings.bluetooth.mojom.DeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DeviceRemoved_ParamsSpec, 'bluetooth.mojom.AdapterObserver_DeviceRemoved_Params', [
      mojo.internal.StructField('arg_device', 0, 0, mojo.internal.bindings.bluetooth.mojom.DeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.bluetooth.mojom.AdapterObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.bluetooth.mojom.AdapterObserverRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.AdapterObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.bluetooth.mojom.AdapterObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.bluetooth.mojom.AdapterObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  presentChanged(arg_present) {
    return this.$.presentChanged(arg_present);
  }
  poweredChanged(arg_powered) {
    return this.$.poweredChanged(arg_powered);
  }
  discoverableChanged(arg_discoverable) {
    return this.$.discoverableChanged(arg_discoverable);
  }
  discoveringChanged(arg_discovering) {
    return this.$.discoveringChanged(arg_discovering);
  }
  deviceAdded(arg_device) {
    return this.$.deviceAdded(arg_device);
  }
  deviceChanged(arg_device) {
    return this.$.deviceChanged(arg_device);
  }
  deviceRemoved(arg_device) {
    return this.$.deviceRemoved(arg_device);
  }
};

mojo.internal.bindings.bluetooth.mojom.AdapterObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AdapterObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  presentChanged(arg_present) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.AdapterObserver_PresentChanged_ParamsSpec,
      null,
      [arg_present],
      false);
  }

  poweredChanged(arg_powered) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.AdapterObserver_PoweredChanged_ParamsSpec,
      null,
      [arg_powered],
      false);
  }

  discoverableChanged(arg_discoverable) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DiscoverableChanged_ParamsSpec,
      null,
      [arg_discoverable],
      false);
  }

  discoveringChanged(arg_discovering) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DiscoveringChanged_ParamsSpec,
      null,
      [arg_discovering],
      false);
  }

  deviceAdded(arg_device) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DeviceAdded_ParamsSpec,
      null,
      [arg_device],
      false);
  }

  deviceChanged(arg_device) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DeviceChanged_ParamsSpec,
      null,
      [arg_device],
      false);
  }

  deviceRemoved(arg_device) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DeviceRemoved_ParamsSpec,
      null,
      [arg_device],
      false);
  }

};

mojo.internal.bindings.bluetooth.mojom.AdapterObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.bluetooth.mojom.AdapterObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.AdapterObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.bluetooth.mojom.AdapterObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AdapterObserver', [
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
        
        // Try Method 0: PresentChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.AdapterObserver_PresentChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PresentChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PoweredChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.AdapterObserver_PoweredChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PoweredChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DiscoverableChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DiscoverableChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DiscoverableChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DiscoveringChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DiscoveringChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DiscoveringChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DeviceAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DeviceAdded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeviceAdded (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: DeviceChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DeviceChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeviceChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DeviceRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DeviceRemoved_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeviceRemoved (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.AdapterObserver_PresentChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.presentChanged');
          const result = this.impl.presentChanged(params.arg_present);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.AdapterObserver_PoweredChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.poweredChanged');
          const result = this.impl.poweredChanged(params.arg_powered);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DiscoverableChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.discoverableChanged');
          const result = this.impl.discoverableChanged(params.arg_discoverable);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DiscoveringChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.discoveringChanged');
          const result = this.impl.discoveringChanged(params.arg_discovering);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DeviceAdded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deviceAdded');
          const result = this.impl.deviceAdded(params.arg_device);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DeviceChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deviceChanged');
          const result = this.impl.deviceChanged(params.arg_device);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.AdapterObserver_DeviceRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deviceRemoved');
          const result = this.impl.deviceRemoved(params.arg_device);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.bluetooth.mojom.AdapterObserverReceiver = mojo.internal.bindings.bluetooth.mojom.AdapterObserverReceiver;

mojo.internal.bindings.bluetooth.mojom.AdapterObserverPtr = mojo.internal.bindings.bluetooth.mojom.AdapterObserverRemote;
mojo.internal.bindings.bluetooth.mojom.AdapterObserverRequest = mojo.internal.bindings.bluetooth.mojom.AdapterObserverPendingReceiver;

