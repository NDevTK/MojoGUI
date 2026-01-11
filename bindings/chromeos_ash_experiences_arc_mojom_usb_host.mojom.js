// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/usb_host.mojom
 // Module: arc.mojom

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
 

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.device = mojo.internal.bindings.device || {};

mojo.internal.bindings.arc.mojom.UsbHostHost = {};
mojo.internal.bindings.arc.mojom.UsbHostHostSpec = { $ : {} };
mojo.internal.bindings.arc.mojom.UsbHostHost.$interfaceName = 'arc.mojom.UsbHostHost';
mojo.internal.bindings.arc.mojom.UsbHostHost_OpenDevice_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.UsbHostHost_OpenDevice_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.UsbHostHost_RequestPermission_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.UsbHostHost_RequestPermission_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.UsbHostInstance = {};
mojo.internal.bindings.arc.mojom.UsbHostInstanceSpec = { $ : {} };
mojo.internal.bindings.arc.mojom.UsbHostInstance.$interfaceName = 'arc.mojom.UsbHostInstance';
mojo.internal.bindings.arc.mojom.UsbHostInstance_Init_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.UsbHostInstance_Init_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec = { $: {} };

// Interface: UsbHostHost
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.UsbHostHost_OpenDevice_ParamsSpec, 'arc.mojom.UsbHostHost_OpenDevice_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_pkg_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.UsbHostHost_OpenDevice_ResponseParamsSpec, 'arc.mojom.UsbHostHost_OpenDevice_ResponseParams', [
      mojo.internal.StructField('arg_usb_fd', 0, 0, mojo.internal.Handle, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec, 'arc.mojom.UsbHostHost_GetDeviceInfo_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParamsSpec, 'arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParams', [
      mojo.internal.StructField('arg_device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_info', 8, 0, mojo.internal.bindings.device.mojom.UsbDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.UsbHostHost_RequestPermission_ParamsSpec, 'arc.mojom.UsbHostHost_RequestPermission_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_pkg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_interactive', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.UsbHostHost_RequestPermission_ResponseParamsSpec, 'arc.mojom.UsbHostHost_RequestPermission_ResponseParams', [
      mojo.internal.StructField('arg_authorized', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.UsbHostHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.UsbHostHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.UsbHostHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.UsbHostHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.UsbHostHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  openDevice(arg_guid, arg_pkg_name) {
    return this.$.openDevice(arg_guid, arg_pkg_name);
  }
  getDeviceInfo(arg_guid) {
    return this.$.getDeviceInfo(arg_guid);
  }
  requestPermission(arg_guid, arg_pkg_name, arg_interactive) {
    return this.$.requestPermission(arg_guid, arg_pkg_name, arg_interactive);
  }
};

mojo.internal.bindings.arc.mojom.UsbHostHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('arc.mojom.UsbHostHost', [
      { explicit: 3 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  openDevice(arg_guid, arg_pkg_name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.UsbHostHost_OpenDevice_ParamsSpec,
      mojo.internal.bindings.arc.mojom.UsbHostHost_OpenDevice_ResponseParamsSpec,
      [arg_guid, arg_pkg_name],
      false);
  }

  getDeviceInfo(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec,
      mojo.internal.bindings.arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParamsSpec,
      [arg_guid],
      false);
  }

  requestPermission(arg_guid, arg_pkg_name, arg_interactive) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.UsbHostHost_RequestPermission_ParamsSpec,
      mojo.internal.bindings.arc.mojom.UsbHostHost_RequestPermission_ResponseParamsSpec,
      [arg_guid, arg_pkg_name, arg_interactive],
      false);
  }

};

mojo.internal.bindings.arc.mojom.UsbHostHost.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.UsbHostHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.UsbHostHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.UsbHostHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('arc.mojom.UsbHostHost', [
      { explicit: 3 },
      { explicit: 1 },
      { explicit: 2 },
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
        
        // Try Method 0: OpenDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.UsbHostHost_OpenDevice_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDevice (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetDeviceInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceInfo (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RequestPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.UsbHostHost_RequestPermission_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPermission (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.UsbHostHost_OpenDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openDevice');
          const result = this.impl.openDevice(params.arg_guid, params.arg_pkg_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.UsbHostHost_OpenDevice_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenDevice FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceInfo');
          const result = this.impl.getDeviceInfo(params.arg_guid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDeviceInfo FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.UsbHostHost_RequestPermission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPermission');
          const result = this.impl.requestPermission(params.arg_guid, params.arg_pkg_name, params.arg_interactive);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.UsbHostHost_RequestPermission_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestPermission FAILED:', e));
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

mojo.internal.bindings.arc.mojom.UsbHostHostReceiver = mojo.internal.bindings.arc.mojom.UsbHostHostReceiver;

mojo.internal.bindings.arc.mojom.UsbHostHostPtr = mojo.internal.bindings.arc.mojom.UsbHostHostRemote;
mojo.internal.bindings.arc.mojom.UsbHostHostRequest = mojo.internal.bindings.arc.mojom.UsbHostHostPendingReceiver;


// Interface: UsbHostInstance
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.UsbHostInstance_Init_ParamsSpec, 'arc.mojom.UsbHostInstance_Init_Params', [
      mojo.internal.StructField('arg_host_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.UsbHostHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.UsbHostInstance_Init_ResponseParamsSpec, 'arc.mojom.UsbHostInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec, 'arc.mojom.UsbHostInstance_OnDeviceAdded_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_event_receiver_packages', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 2, undefined),
    ],
    [[0, 16], [2, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec, 'arc.mojom.UsbHostInstance_OnDeviceRemoved_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_event_receiver_packages', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 2, undefined),
    ],
    [[0, 16], [2, 24]]);

mojo.internal.bindings.arc.mojom.UsbHostInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.UsbHostInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.UsbHostInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.UsbHostInstancePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.UsbHostInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(arg_host_remote) {
    return this.$.init(arg_host_remote);
  }
  onDeviceAdded(arg_guid, arg_event_receiver_packages) {
    return this.$.onDeviceAdded(arg_guid, arg_event_receiver_packages);
  }
  onDeviceRemoved(arg_guid, arg_event_receiver_packages) {
    return this.$.onDeviceRemoved(arg_guid, arg_event_receiver_packages);
  }
};

mojo.internal.bindings.arc.mojom.UsbHostInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('arc.mojom.UsbHostInstance', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  init(arg_host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.UsbHostInstance_Init_ParamsSpec,
      mojo.internal.bindings.arc.mojom.UsbHostInstance_Init_ResponseParamsSpec,
      [arg_host_remote],
      false);
  }

  onDeviceAdded(arg_guid, arg_event_receiver_packages) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec,
      null,
      [arg_guid, arg_event_receiver_packages],
      false);
  }

  onDeviceRemoved(arg_guid, arg_event_receiver_packages) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec,
      null,
      [arg_guid, arg_event_receiver_packages],
      false);
  }

};

mojo.internal.bindings.arc.mojom.UsbHostInstance.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.UsbHostInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.UsbHostInstance',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.UsbHostInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('arc.mojom.UsbHostInstance', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
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
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.UsbHostInstance_Init_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnDeviceAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceAdded (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnDeviceRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceRemoved (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.UsbHostInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.arg_host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.UsbHostInstance_Init_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Init FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceAdded');
          const result = this.impl.onDeviceAdded(params.arg_guid, params.arg_event_receiver_packages);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceRemoved');
          const result = this.impl.onDeviceRemoved(params.arg_guid, params.arg_event_receiver_packages);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.UsbHostInstanceReceiver = mojo.internal.bindings.arc.mojom.UsbHostInstanceReceiver;

mojo.internal.bindings.arc.mojom.UsbHostInstancePtr = mojo.internal.bindings.arc.mojom.UsbHostInstanceRemote;
mojo.internal.bindings.arc.mojom.UsbHostInstanceRequest = mojo.internal.bindings.arc.mojom.UsbHostInstancePendingReceiver;

