// Auto-generated MojoJS binding
// Source: chromium_src/components/global_media_controls/public/mojom/device_service.mojom
// Module: global_media_controls.mojom

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
var global_media_controls = global_media_controls || {};
global_media_controls.mojom = global_media_controls.mojom || {};
var mojo_base = mojo_base || {};
var media_session = media_session || {};
var gfx = gfx || {};

global_media_controls.mojom.IconTypeSpec = { $: mojo.internal.Enum() };
global_media_controls.mojom.DeviceSpec = { $: {} };
global_media_controls.mojom.DeviceListHost = {};
global_media_controls.mojom.DeviceListHost.$interfaceName = 'global_media_controls.mojom.DeviceListHost';
global_media_controls.mojom.DeviceListHost_SelectDevice_ParamsSpec = { $: {} };
global_media_controls.mojom.DeviceListClient = {};
global_media_controls.mojom.DeviceListClient.$interfaceName = 'global_media_controls.mojom.DeviceListClient';
global_media_controls.mojom.DeviceListClient_OnDevicesUpdated_ParamsSpec = { $: {} };
global_media_controls.mojom.DeviceListClient_OnPermissionRejected_ParamsSpec = { $: {} };
global_media_controls.mojom.DeviceService = {};
global_media_controls.mojom.DeviceService.$interfaceName = 'global_media_controls.mojom.DeviceService';
global_media_controls.mojom.DeviceService_GetDeviceListHostForSession_ParamsSpec = { $: {} };
global_media_controls.mojom.DeviceService_GetDeviceListHostForPresentation_ParamsSpec = { $: {} };
global_media_controls.mojom.DeviceService_SetDevicePickerProvider_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider = {};
global_media_controls.mojom.DevicePickerProvider.$interfaceName = 'global_media_controls.mojom.DevicePickerProvider';
global_media_controls.mojom.DevicePickerProvider_CreateItem_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_DeleteItem_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_ShowItem_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_HideItem_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_OnMetadataChanged_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_OnArtworkImageChanged_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_OnFaviconImageChanged_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_AddObserver_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_HideMediaUI_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerObserver = {};
global_media_controls.mojom.DevicePickerObserver.$interfaceName = 'global_media_controls.mojom.DevicePickerObserver';
global_media_controls.mojom.DevicePickerObserver_OnMediaUIOpened_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerObserver_OnMediaUIClosed_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerObserver_OnMediaUIUpdated_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerObserver_OnPickerDismissed_ParamsSpec = { $: {} };

// Enum: IconType
global_media_controls.mojom.IconType = {
  kUnknown: 0,
  kThrobber: 1,
  kInfo: 2,
  kTv: 3,
  kSpeaker: 4,
  kSpeakerGroup: 5,
  kInput: 6,
};

// Struct: Device
mojo.internal.Struct(
    global_media_controls.mojom.DeviceSpec, 'global_media_controls.mojom.Device', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('status_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon', 24, 0, global_media_controls.mojom.IconTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: DeviceListHost
mojo.internal.Struct(
    global_media_controls.mojom.DeviceListHost_SelectDevice_ParamsSpec, 'global_media_controls.mojom.DeviceListHost_SelectDevice_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

global_media_controls.mojom.DeviceListHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DeviceListHostRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DeviceListHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DeviceListHostPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DeviceListHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  selectDevice(device_id) {
    return this.$.selectDevice(device_id);
  }
};

global_media_controls.mojom.DeviceListHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceListHost', [
      { explicit: 0 },
    ]);
  }

  selectDevice(device_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      global_media_controls.mojom.DeviceListHost_SelectDevice_ParamsSpec,
      null,
      [device_id],
      false);
  }

};

global_media_controls.mojom.DeviceListHost.getRemote = function() {
  let remote = new global_media_controls.mojom.DeviceListHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DeviceListHost',
    'context');
  return remote.$;
};

global_media_controls.mojom.DeviceListHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DeviceListHost', [
      { explicit: 0 },
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
        
        // Try Method 0: SelectDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DeviceListHost_SelectDevice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectDevice (0)');
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
          const params = decoder.decodeStructInline(global_media_controls.mojom.DeviceListHost_SelectDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectDevice');
          const result = this.impl.selectDevice(params.device_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

global_media_controls.mojom.DeviceListHostReceiver = global_media_controls.mojom.DeviceListHostReceiver;

global_media_controls.mojom.DeviceListHostPtr = global_media_controls.mojom.DeviceListHostRemote;
global_media_controls.mojom.DeviceListHostRequest = global_media_controls.mojom.DeviceListHostPendingReceiver;


// Interface: DeviceListClient
mojo.internal.Struct(
    global_media_controls.mojom.DeviceListClient_OnDevicesUpdated_ParamsSpec, 'global_media_controls.mojom.DeviceListClient_OnDevicesUpdated_Params', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(global_media_controls.mojom.DeviceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    global_media_controls.mojom.DeviceListClient_OnPermissionRejected_ParamsSpec, 'global_media_controls.mojom.DeviceListClient_OnPermissionRejected_Params', [
    ],
    [[0, 8]]);

global_media_controls.mojom.DeviceListClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DeviceListClientRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DeviceListClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DeviceListClientPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DeviceListClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDevicesUpdated(devices) {
    return this.$.onDevicesUpdated(devices);
  }
  onPermissionRejected() {
    return this.$.onPermissionRejected();
  }
};

global_media_controls.mojom.DeviceListClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceListClient', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onDevicesUpdated(devices) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      global_media_controls.mojom.DeviceListClient_OnDevicesUpdated_ParamsSpec,
      null,
      [devices],
      false);
  }

  onPermissionRejected() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      global_media_controls.mojom.DeviceListClient_OnPermissionRejected_ParamsSpec,
      null,
      [],
      false);
  }

};

global_media_controls.mojom.DeviceListClient.getRemote = function() {
  let remote = new global_media_controls.mojom.DeviceListClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DeviceListClient',
    'context');
  return remote.$;
};

global_media_controls.mojom.DeviceListClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DeviceListClient', [
      { explicit: 0 },
      { explicit: 1 },
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
        
        // Try Method 0: OnDevicesUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DeviceListClient_OnDevicesUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDevicesUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnPermissionRejected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DeviceListClient_OnPermissionRejected_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPermissionRejected (1)');
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
          const params = decoder.decodeStructInline(global_media_controls.mojom.DeviceListClient_OnDevicesUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDevicesUpdated');
          const result = this.impl.onDevicesUpdated(params.devices);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DeviceListClient_OnPermissionRejected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPermissionRejected');
          const result = this.impl.onPermissionRejected();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

global_media_controls.mojom.DeviceListClientReceiver = global_media_controls.mojom.DeviceListClientReceiver;

global_media_controls.mojom.DeviceListClientPtr = global_media_controls.mojom.DeviceListClientRemote;
global_media_controls.mojom.DeviceListClientRequest = global_media_controls.mojom.DeviceListClientPendingReceiver;


// Interface: DeviceService
mojo.internal.Struct(
    global_media_controls.mojom.DeviceService_GetDeviceListHostForSession_ParamsSpec, 'global_media_controls.mojom.DeviceService_GetDeviceListHostForSession_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('host_receiver', 8, 0, mojo.internal.InterfaceRequest(global_media_controls.mojom.DeviceListHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('client_remote', 16, 0, mojo.internal.InterfaceProxy(global_media_controls.mojom.DeviceListClientSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    global_media_controls.mojom.DeviceService_GetDeviceListHostForPresentation_ParamsSpec, 'global_media_controls.mojom.DeviceService_GetDeviceListHostForPresentation_Params', [
      mojo.internal.StructField('host_receiver', 0, 0, mojo.internal.InterfaceRequest(global_media_controls.mojom.DeviceListHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('client_remote', 8, 0, mojo.internal.InterfaceProxy(global_media_controls.mojom.DeviceListClientSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    global_media_controls.mojom.DeviceService_SetDevicePickerProvider_ParamsSpec, 'global_media_controls.mojom.DeviceService_SetDevicePickerProvider_Params', [
      mojo.internal.StructField('provider_remote', 0, 0, mojo.internal.InterfaceProxy(global_media_controls.mojom.DevicePickerProviderSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

global_media_controls.mojom.DeviceServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DeviceServiceRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DeviceService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DeviceServicePendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DeviceServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDeviceListHostForSession(session_id, host_receiver, client_remote) {
    return this.$.getDeviceListHostForSession(session_id, host_receiver, client_remote);
  }
  getDeviceListHostForPresentation(host_receiver, client_remote) {
    return this.$.getDeviceListHostForPresentation(host_receiver, client_remote);
  }
  setDevicePickerProvider(provider_remote) {
    return this.$.setDevicePickerProvider(provider_remote);
  }
};

global_media_controls.mojom.DeviceServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  getDeviceListHostForSession(session_id, host_receiver, client_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      global_media_controls.mojom.DeviceService_GetDeviceListHostForSession_ParamsSpec,
      null,
      [session_id, host_receiver, client_remote],
      false);
  }

  getDeviceListHostForPresentation(host_receiver, client_remote) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      global_media_controls.mojom.DeviceService_GetDeviceListHostForPresentation_ParamsSpec,
      null,
      [host_receiver, client_remote],
      false);
  }

  setDevicePickerProvider(provider_remote) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      global_media_controls.mojom.DeviceService_SetDevicePickerProvider_ParamsSpec,
      null,
      [provider_remote],
      false);
  }

};

global_media_controls.mojom.DeviceService.getRemote = function() {
  let remote = new global_media_controls.mojom.DeviceServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DeviceService',
    'context');
  return remote.$;
};

global_media_controls.mojom.DeviceServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DeviceService', [
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
        
        // Try Method 0: GetDeviceListHostForSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DeviceService_GetDeviceListHostForSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceListHostForSession (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetDeviceListHostForPresentation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DeviceService_GetDeviceListHostForPresentation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceListHostForPresentation (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetDevicePickerProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DeviceService_SetDevicePickerProvider_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDevicePickerProvider (2)');
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
          const params = decoder.decodeStructInline(global_media_controls.mojom.DeviceService_GetDeviceListHostForSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceListHostForSession');
          const result = this.impl.getDeviceListHostForSession(params.session_id, params.host_receiver, params.client_remote);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DeviceService_GetDeviceListHostForPresentation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceListHostForPresentation');
          const result = this.impl.getDeviceListHostForPresentation(params.host_receiver, params.client_remote);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DeviceService_SetDevicePickerProvider_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDevicePickerProvider');
          const result = this.impl.setDevicePickerProvider(params.provider_remote);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

global_media_controls.mojom.DeviceServiceReceiver = global_media_controls.mojom.DeviceServiceReceiver;

global_media_controls.mojom.DeviceServicePtr = global_media_controls.mojom.DeviceServiceRemote;
global_media_controls.mojom.DeviceServiceRequest = global_media_controls.mojom.DeviceServicePendingReceiver;


// Interface: DevicePickerProvider
mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_CreateItem_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_CreateItem_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_DeleteItem_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_DeleteItem_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_ShowItem_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_ShowItem_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_HideItem_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_HideItem_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_OnMetadataChanged_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_OnMetadataChanged_Params', [
      mojo.internal.StructField('metadata', 0, 0, media_session.mojom.MediaMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_OnArtworkImageChanged_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_OnArtworkImageChanged_Params', [
      mojo.internal.StructField('artwork_image', 0, 0, gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_OnFaviconImageChanged_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_OnFaviconImageChanged_Params', [
      mojo.internal.StructField('favicon_image', 0, 0, gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_AddObserver_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(global_media_controls.mojom.DevicePickerObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_HideMediaUI_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_HideMediaUI_Params', [
    ],
    [[0, 8]]);

global_media_controls.mojom.DevicePickerProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DevicePickerProviderRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DevicePickerProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DevicePickerProviderPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DevicePickerProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createItem(source_id) {
    return this.$.createItem(source_id);
  }
  deleteItem() {
    return this.$.deleteItem();
  }
  showItem() {
    return this.$.showItem();
  }
  hideItem() {
    return this.$.hideItem();
  }
  onMetadataChanged(metadata) {
    return this.$.onMetadataChanged(metadata);
  }
  onArtworkImageChanged(artwork_image) {
    return this.$.onArtworkImageChanged(artwork_image);
  }
  onFaviconImageChanged(favicon_image) {
    return this.$.onFaviconImageChanged(favicon_image);
  }
  addObserver(observer) {
    return this.$.addObserver(observer);
  }
  hideMediaUI() {
    return this.$.hideMediaUI();
  }
};

global_media_controls.mojom.DevicePickerProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DevicePickerProvider', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
    ]);
  }

  createItem(source_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      global_media_controls.mojom.DevicePickerProvider_CreateItem_ParamsSpec,
      null,
      [source_id],
      false);
  }

  deleteItem() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      global_media_controls.mojom.DevicePickerProvider_DeleteItem_ParamsSpec,
      null,
      [],
      false);
  }

  showItem() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      global_media_controls.mojom.DevicePickerProvider_ShowItem_ParamsSpec,
      null,
      [],
      false);
  }

  hideItem() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      global_media_controls.mojom.DevicePickerProvider_HideItem_ParamsSpec,
      null,
      [],
      false);
  }

  onMetadataChanged(metadata) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      global_media_controls.mojom.DevicePickerProvider_OnMetadataChanged_ParamsSpec,
      null,
      [metadata],
      false);
  }

  onArtworkImageChanged(artwork_image) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      global_media_controls.mojom.DevicePickerProvider_OnArtworkImageChanged_ParamsSpec,
      null,
      [artwork_image],
      false);
  }

  onFaviconImageChanged(favicon_image) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      global_media_controls.mojom.DevicePickerProvider_OnFaviconImageChanged_ParamsSpec,
      null,
      [favicon_image],
      false);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      global_media_controls.mojom.DevicePickerProvider_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  hideMediaUI() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      global_media_controls.mojom.DevicePickerProvider_HideMediaUI_ParamsSpec,
      null,
      [],
      false);
  }

};

global_media_controls.mojom.DevicePickerProvider.getRemote = function() {
  let remote = new global_media_controls.mojom.DevicePickerProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DevicePickerProvider',
    'context');
  return remote.$;
};

global_media_controls.mojom.DevicePickerProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DevicePickerProvider', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
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
        
        // Try Method 0: CreateItem
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_CreateItem_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateItem (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DeleteItem
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_DeleteItem_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteItem (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ShowItem
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_ShowItem_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowItem (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: HideItem
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_HideItem_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HideItem (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnMetadataChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_OnMetadataChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMetadataChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnArtworkImageChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_OnArtworkImageChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnArtworkImageChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnFaviconImageChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_OnFaviconImageChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFaviconImageChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_AddObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: HideMediaUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_HideMediaUI_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HideMediaUI (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_CreateItem_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createItem');
          const result = this.impl.createItem(params.source_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_DeleteItem_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteItem');
          const result = this.impl.deleteItem();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_ShowItem_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showItem');
          const result = this.impl.showItem();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_HideItem_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hideItem');
          const result = this.impl.hideItem();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_OnMetadataChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMetadataChanged');
          const result = this.impl.onMetadataChanged(params.metadata);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_OnArtworkImageChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onArtworkImageChanged');
          const result = this.impl.onArtworkImageChanged(params.artwork_image);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_OnFaviconImageChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFaviconImageChanged');
          const result = this.impl.onFaviconImageChanged(params.favicon_image);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_HideMediaUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hideMediaUI');
          const result = this.impl.hideMediaUI();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

global_media_controls.mojom.DevicePickerProviderReceiver = global_media_controls.mojom.DevicePickerProviderReceiver;

global_media_controls.mojom.DevicePickerProviderPtr = global_media_controls.mojom.DevicePickerProviderRemote;
global_media_controls.mojom.DevicePickerProviderRequest = global_media_controls.mojom.DevicePickerProviderPendingReceiver;


// Interface: DevicePickerObserver
mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerObserver_OnMediaUIOpened_ParamsSpec, 'global_media_controls.mojom.DevicePickerObserver_OnMediaUIOpened_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerObserver_OnMediaUIClosed_ParamsSpec, 'global_media_controls.mojom.DevicePickerObserver_OnMediaUIClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerObserver_OnMediaUIUpdated_ParamsSpec, 'global_media_controls.mojom.DevicePickerObserver_OnMediaUIUpdated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerObserver_OnPickerDismissed_ParamsSpec, 'global_media_controls.mojom.DevicePickerObserver_OnPickerDismissed_Params', [
    ],
    [[0, 8]]);

global_media_controls.mojom.DevicePickerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DevicePickerObserverRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DevicePickerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DevicePickerObserverPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DevicePickerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onMediaUIOpened() {
    return this.$.onMediaUIOpened();
  }
  onMediaUIClosed() {
    return this.$.onMediaUIClosed();
  }
  onMediaUIUpdated() {
    return this.$.onMediaUIUpdated();
  }
  onPickerDismissed() {
    return this.$.onPickerDismissed();
  }
};

global_media_controls.mojom.DevicePickerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DevicePickerObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  onMediaUIOpened() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      global_media_controls.mojom.DevicePickerObserver_OnMediaUIOpened_ParamsSpec,
      null,
      [],
      false);
  }

  onMediaUIClosed() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      global_media_controls.mojom.DevicePickerObserver_OnMediaUIClosed_ParamsSpec,
      null,
      [],
      false);
  }

  onMediaUIUpdated() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      global_media_controls.mojom.DevicePickerObserver_OnMediaUIUpdated_ParamsSpec,
      null,
      [],
      false);
  }

  onPickerDismissed() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      global_media_controls.mojom.DevicePickerObserver_OnPickerDismissed_ParamsSpec,
      null,
      [],
      false);
  }

};

global_media_controls.mojom.DevicePickerObserver.getRemote = function() {
  let remote = new global_media_controls.mojom.DevicePickerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DevicePickerObserver',
    'context');
  return remote.$;
};

global_media_controls.mojom.DevicePickerObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DevicePickerObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
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
        
        // Try Method 0: OnMediaUIOpened
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerObserver_OnMediaUIOpened_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaUIOpened (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnMediaUIClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerObserver_OnMediaUIClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaUIClosed (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnMediaUIUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerObserver_OnMediaUIUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaUIUpdated (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnPickerDismissed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerObserver_OnPickerDismissed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPickerDismissed (3)');
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
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerObserver_OnMediaUIOpened_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMediaUIOpened');
          const result = this.impl.onMediaUIOpened();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerObserver_OnMediaUIClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMediaUIClosed');
          const result = this.impl.onMediaUIClosed();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerObserver_OnMediaUIUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMediaUIUpdated');
          const result = this.impl.onMediaUIUpdated();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerObserver_OnPickerDismissed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPickerDismissed');
          const result = this.impl.onPickerDismissed();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

global_media_controls.mojom.DevicePickerObserverReceiver = global_media_controls.mojom.DevicePickerObserverReceiver;

global_media_controls.mojom.DevicePickerObserverPtr = global_media_controls.mojom.DevicePickerObserverRemote;
global_media_controls.mojom.DevicePickerObserverRequest = global_media_controls.mojom.DevicePickerObserverPendingReceiver;

