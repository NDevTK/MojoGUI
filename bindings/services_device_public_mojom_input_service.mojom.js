// Auto-generated MojoJS binding
 // Source: chromium_src/services/device/public/mojom/input_service.mojom
 // Module: device.mojom

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
 

 mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};

mojo.internal.bindings.device.mojom.InputDeviceSubsystemSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.InputDeviceTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.InputDeviceInfoSpec = { $: {} };
mojo.internal.bindings.device.mojom.InputDeviceManagerClient = {};
mojo.internal.bindings.device.mojom.InputDeviceManagerClient.$interfaceName = 'device.mojom.InputDeviceManagerClient';
mojo.internal.bindings.device.mojom.InputDeviceManagerClient_InputDeviceAdded_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.InputDeviceManagerClient_InputDeviceRemoved_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.InputDeviceManager = {};
mojo.internal.bindings.device.mojom.InputDeviceManager.$interfaceName = 'device.mojom.InputDeviceManager';
mojo.internal.bindings.device.mojom.InputDeviceManager_GetDevicesAndSetClient_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.InputDeviceManager_GetDevicesAndSetClient_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.InputDeviceManager_GetDevices_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.InputDeviceManager_GetDevices_ResponseParamsSpec = { $: {} };

// Enum: InputDeviceSubsystem
mojo.internal.bindings.device.mojom.InputDeviceSubsystem = {
  SUBSYSTEM_HID: 0,
  SUBSYSTEM_INPUT: 1,
  SUBSYSTEM_UNKNOWN: 2,
};

// Enum: InputDeviceType
mojo.internal.bindings.device.mojom.InputDeviceType = {
  TYPE_BLUETOOTH: 0,
  TYPE_USB: 1,
  TYPE_SERIO: 2,
  TYPE_UNKNOWN: 3,
};

// Struct: InputDeviceInfo
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.InputDeviceInfoSpec, 'device.mojom.InputDeviceInfo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_subsystem', 16, 0, mojo.internal.bindings.device.mojom.InputDeviceSubsystemSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 24, 0, mojo.internal.bindings.device.mojom.InputDeviceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_accelerometer', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_joystick', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_key', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_keyboard', 32, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_mouse', 32, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_tablet', 32, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_touchpad', 32, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_touchscreen', 32, 7, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: InputDeviceManagerClient
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.InputDeviceManagerClient_InputDeviceAdded_ParamsSpec, 'device.mojom.InputDeviceManagerClient_InputDeviceAdded_Params', [
      mojo.internal.StructField('arg_device_info', 0, 0, mojo.internal.bindings.device.mojom.InputDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.InputDeviceManagerClient_InputDeviceRemoved_ParamsSpec, 'device.mojom.InputDeviceManagerClient_InputDeviceRemoved_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.InputDeviceManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.InputDeviceManagerClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.InputDeviceManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.InputDeviceManagerClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.InputDeviceManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  inputDeviceAdded(arg_device_info) {
    return this.$.inputDeviceAdded(arg_device_info);
  }
  inputDeviceRemoved(arg_id) {
    return this.$.inputDeviceRemoved(arg_id);
  }
};

mojo.internal.bindings.device.mojom.InputDeviceManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InputDeviceManagerClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  inputDeviceAdded(arg_device_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.InputDeviceManagerClient_InputDeviceAdded_ParamsSpec,
      null,
      [arg_device_info],
      false);
  }

  inputDeviceRemoved(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.InputDeviceManagerClient_InputDeviceRemoved_ParamsSpec,
      null,
      [arg_id],
      false);
  }

};

mojo.internal.bindings.device.mojom.InputDeviceManagerClient.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.InputDeviceManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.InputDeviceManagerClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.InputDeviceManagerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InputDeviceManagerClient', [
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
        
        // Try Method 0: InputDeviceAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.InputDeviceManagerClient_InputDeviceAdded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InputDeviceAdded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: InputDeviceRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.InputDeviceManagerClient_InputDeviceRemoved_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InputDeviceRemoved (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.InputDeviceManagerClient_InputDeviceAdded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.inputDeviceAdded');
          const result = this.impl.inputDeviceAdded(params.arg_device_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.InputDeviceManagerClient_InputDeviceRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.inputDeviceRemoved');
          const result = this.impl.inputDeviceRemoved(params.arg_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.InputDeviceManagerClientReceiver = mojo.internal.bindings.device.mojom.InputDeviceManagerClientReceiver;

mojo.internal.bindings.device.mojom.InputDeviceManagerClientPtr = mojo.internal.bindings.device.mojom.InputDeviceManagerClientRemote;
mojo.internal.bindings.device.mojom.InputDeviceManagerClientRequest = mojo.internal.bindings.device.mojom.InputDeviceManagerClientPendingReceiver;


// Interface: InputDeviceManager
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.InputDeviceManager_GetDevicesAndSetClient_ParamsSpec, 'device.mojom.InputDeviceManager_GetDevicesAndSetClient_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.device.mojom.InputDeviceManagerClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.InputDeviceManager_GetDevicesAndSetClient_ResponseParamsSpec, 'device.mojom.InputDeviceManager_GetDevicesAndSetClient_ResponseParams', [
      mojo.internal.StructField('arg_devices', 0, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.InputDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.InputDeviceManager_GetDevices_ParamsSpec, 'device.mojom.InputDeviceManager_GetDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.InputDeviceManager_GetDevices_ResponseParamsSpec, 'device.mojom.InputDeviceManager_GetDevices_ResponseParams', [
      mojo.internal.StructField('arg_devices', 0, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.InputDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.InputDeviceManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.InputDeviceManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.InputDeviceManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.InputDeviceManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.InputDeviceManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDevicesAndSetClient(arg_client) {
    return this.$.getDevicesAndSetClient(arg_client);
  }
  getDevices() {
    return this.$.getDevices();
  }
};

mojo.internal.bindings.device.mojom.InputDeviceManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InputDeviceManager', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getDevicesAndSetClient(arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.InputDeviceManager_GetDevicesAndSetClient_ParamsSpec,
      mojo.internal.bindings.device.mojom.InputDeviceManager_GetDevicesAndSetClient_ResponseParamsSpec,
      [arg_client],
      false);
  }

  getDevices() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.InputDeviceManager_GetDevices_ParamsSpec,
      mojo.internal.bindings.device.mojom.InputDeviceManager_GetDevices_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.device.mojom.InputDeviceManager.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.InputDeviceManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.InputDeviceManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.InputDeviceManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InputDeviceManager', [
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
        
        // Try Method 0: GetDevicesAndSetClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.InputDeviceManager_GetDevicesAndSetClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDevicesAndSetClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.InputDeviceManager_GetDevices_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDevices (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.InputDeviceManager_GetDevicesAndSetClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDevicesAndSetClient');
          const result = this.impl.getDevicesAndSetClient(params.arg_client);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.InputDeviceManager_GetDevicesAndSetClient_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDevicesAndSetClient FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.InputDeviceManager_GetDevices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDevices');
          const result = this.impl.getDevices();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.InputDeviceManager_GetDevices_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDevices FAILED:', e));
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

mojo.internal.bindings.device.mojom.InputDeviceManagerReceiver = mojo.internal.bindings.device.mojom.InputDeviceManagerReceiver;

mojo.internal.bindings.device.mojom.InputDeviceManagerPtr = mojo.internal.bindings.device.mojom.InputDeviceManagerRemote;
mojo.internal.bindings.device.mojom.InputDeviceManagerRequest = mojo.internal.bindings.device.mojom.InputDeviceManagerPendingReceiver;

