// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/permissions/permission.mojom
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
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.blink.mojom.PermissionNameSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.PermissionDescriptorExtensionSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MidiPermissionDescriptorSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardPermissionDescriptorSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CameraDevicePermissionDescriptorSpec = { $: {} };
mojo.internal.bindings.blink.mojom.TopLevelStorageAccessPermissionDescriptorSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FullscreenPermissionDescriptorSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PermissionDescriptorSpec = { $: {} };
mojo.internal.bindings.blink.mojom.GeolocationEmbeddedPermissionRequestDescriptorSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedPermissionRequestDescriptorSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PermissionObserver = {};
mojo.internal.bindings.blink.mojom.PermissionObserverSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.PermissionObserver.$interfaceName = 'blink.mojom.PermissionObserver';
mojo.internal.bindings.blink.mojom.PermissionObserver_OnPermissionStatusChange_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClient = {};
mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClientSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClient.$interfaceName = 'blink.mojom.EmbeddedPermissionControlClient';
mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClient_OnEmbeddedPermissionControlRegistered_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PermissionService = {};
mojo.internal.bindings.blink.mojom.PermissionServiceSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.PermissionService.$interfaceName = 'blink.mojom.PermissionService';
mojo.internal.bindings.blink.mojom.PermissionService_HasPermission_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PermissionService_HasPermission_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PermissionService_RegisterPageEmbeddedPermissionControl_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PermissionService_RequestPageEmbeddedPermission_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PermissionService_RequestPageEmbeddedPermission_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PermissionService_RequestPermission_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PermissionService_RequestPermission_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PermissionService_RequestPermissions_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PermissionService_RequestPermissions_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PermissionService_RevokePermission_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PermissionService_RevokePermission_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PermissionService_AddPermissionObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PermissionService_AddPageEmbeddedPermissionObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PermissionService_NotifyEventListener_ParamsSpec = { $: {} };

// Enum: PermissionName
mojo.internal.bindings.blink.mojom.PermissionName = {
  GEOLOCATION: 0,
  NOTIFICATIONS: 1,
  MIDI: 2,
  PROTECTED_MEDIA_IDENTIFIER: 3,
  DURABLE_STORAGE: 4,
  AUDIO_CAPTURE: 5,
  VIDEO_CAPTURE: 6,
  BACKGROUND_SYNC: 7,
  SENSORS: 8,
  CLIPBOARD_READ: 9,
  CLIPBOARD_WRITE: 10,
  PAYMENT_HANDLER: 11,
  BACKGROUND_FETCH: 12,
  IDLE_DETECTION: 13,
  PERIODIC_BACKGROUND_SYNC: 14,
  SCREEN_WAKE_LOCK: 15,
  SYSTEM_WAKE_LOCK: 16,
  NFC: 17,
  STORAGE_ACCESS: 18,
  WINDOW_MANAGEMENT: 19,
  LOCAL_FONTS: 20,
  DISPLAY_CAPTURE: 21,
  TOP_LEVEL_STORAGE_ACCESS: 22,
  CAPTURED_SURFACE_CONTROL: 23,
  SPEAKER_SELECTION: 24,
  KEYBOARD_LOCK: 25,
  POINTER_LOCK: 26,
  FULLSCREEN: 27,
  WEB_APP_INSTALLATION: 28,
  LOCAL_NETWORK_ACCESS: 29,
  LOCAL_NETWORK: 30,
  LOOPBACK_NETWORK: 31,
  VR: 32,
  AR: 33,
  HAND_TRACKING: 34,
  WEB_PRINTING: 35,
  SMART_CARD: 36,
  GEOLOCATION_APPROXIMATE: 37,
};

// Enum: EmbeddedPermissionControlResult
mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlResult = {
  kDismissed: 0,
  kGranted: 1,
  kDenied: 2,
  kNotSupported: 3,
  kResolvedNoUserGesture: 4,
};

// Union: PermissionDescriptorExtension
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.PermissionDescriptorExtensionSpec, 'blink.mojom.PermissionDescriptorExtension', {
      'arg_midi': {
        'ordinal': 0,
        'type': mojo.internal.bindings.blink.mojom.MidiPermissionDescriptorSpec.$,
        'nullable': false,
      },
      'arg_clipboard': {
        'ordinal': 1,
        'type': mojo.internal.bindings.blink.mojom.ClipboardPermissionDescriptorSpec.$,
        'nullable': false,
      },
      'arg_camera_device': {
        'ordinal': 2,
        'type': mojo.internal.bindings.blink.mojom.CameraDevicePermissionDescriptorSpec.$,
        'nullable': false,
      },
      'arg_top_level_storage_access': {
        'ordinal': 3,
        'type': mojo.internal.bindings.blink.mojom.TopLevelStorageAccessPermissionDescriptorSpec.$,
        'nullable': false,
      },
      'arg_fullscreen': {
        'ordinal': 4,
        'type': mojo.internal.bindings.blink.mojom.FullscreenPermissionDescriptorSpec.$,
        'nullable': false,
      },
    });

// Struct: MidiPermissionDescriptor
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MidiPermissionDescriptorSpec, 'blink.mojom.MidiPermissionDescriptor', [
      mojo.internal.StructField('arg_sysex', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ClipboardPermissionDescriptor
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardPermissionDescriptorSpec, 'blink.mojom.ClipboardPermissionDescriptor', [
      mojo.internal.StructField('arg_has_user_gesture', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_will_be_sanitized', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CameraDevicePermissionDescriptor
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CameraDevicePermissionDescriptorSpec, 'blink.mojom.CameraDevicePermissionDescriptor', [
      mojo.internal.StructField('arg_panTiltZoom', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TopLevelStorageAccessPermissionDescriptor
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.TopLevelStorageAccessPermissionDescriptorSpec, 'blink.mojom.TopLevelStorageAccessPermissionDescriptor', [
      mojo.internal.StructField('arg_requestedOrigin', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FullscreenPermissionDescriptor
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FullscreenPermissionDescriptorSpec, 'blink.mojom.FullscreenPermissionDescriptor', [
      mojo.internal.StructField('arg_allow_without_user_gesture', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PermissionDescriptor
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PermissionDescriptorSpec, 'blink.mojom.PermissionDescriptor', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.bindings.blink.mojom.PermissionNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_extension', 8, 0, mojo.internal.bindings.blink.mojom.PermissionDescriptorExtensionSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GeolocationEmbeddedPermissionRequestDescriptor
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.GeolocationEmbeddedPermissionRequestDescriptorSpec, 'blink.mojom.GeolocationEmbeddedPermissionRequestDescriptor', [
      mojo.internal.StructField('arg_autolocate', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: EmbeddedPermissionRequestDescriptor
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedPermissionRequestDescriptorSpec, 'blink.mojom.EmbeddedPermissionRequestDescriptor', [
      mojo.internal.StructField('arg_element_position', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_geolocation', 8, 0, mojo.internal.bindings.blink.mojom.GeolocationEmbeddedPermissionRequestDescriptorSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PermissionObserver
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PermissionObserver_OnPermissionStatusChange_ParamsSpec, 'blink.mojom.PermissionObserver_OnPermissionStatusChange_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.PermissionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.PermissionObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PermissionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.PermissionObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.PermissionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPermissionStatusChange(arg_status) {
    return this.$.onPermissionStatusChange(arg_status);
  }
};

mojo.internal.bindings.blink.mojom.PermissionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.PermissionObserver', [
      { explicit: null },
    ]);
  }

  onPermissionStatusChange(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.PermissionObserver_OnPermissionStatusChange_ParamsSpec,
      null,
      [arg_status],
      false);
  }

};

mojo.internal.bindings.blink.mojom.PermissionObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.PermissionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PermissionObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.PermissionObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.PermissionObserver', [
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
        
        // Try Method 0: OnPermissionStatusChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionObserver_OnPermissionStatusChange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPermissionStatusChange (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionObserver_OnPermissionStatusChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPermissionStatusChange');
          const result = this.impl.onPermissionStatusChange(params.arg_status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.PermissionObserverReceiver = mojo.internal.bindings.blink.mojom.PermissionObserverReceiver;

mojo.internal.bindings.blink.mojom.PermissionObserverPtr = mojo.internal.bindings.blink.mojom.PermissionObserverRemote;
mojo.internal.bindings.blink.mojom.PermissionObserverRequest = mojo.internal.bindings.blink.mojom.PermissionObserverPendingReceiver;


// Interface: EmbeddedPermissionControlClient
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClient_OnEmbeddedPermissionControlRegistered_ParamsSpec, 'blink.mojom.EmbeddedPermissionControlClient_OnEmbeddedPermissionControlRegistered_Params', [
      mojo.internal.StructField('arg_statuses', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.PermissionStatusSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_allow', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.EmbeddedPermissionControlClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onEmbeddedPermissionControlRegistered(arg_allow, arg_statuses) {
    return this.$.onEmbeddedPermissionControlRegistered(arg_allow, arg_statuses);
  }
};

mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.EmbeddedPermissionControlClient', [
      { explicit: null },
    ]);
  }

  onEmbeddedPermissionControlRegistered(arg_allow, arg_statuses) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClient_OnEmbeddedPermissionControlRegistered_ParamsSpec,
      null,
      [arg_allow, arg_statuses],
      false);
  }

};

mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClient.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.EmbeddedPermissionControlClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.EmbeddedPermissionControlClient', [
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
        
        // Try Method 0: OnEmbeddedPermissionControlRegistered
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClient_OnEmbeddedPermissionControlRegistered_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEmbeddedPermissionControlRegistered (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClient_OnEmbeddedPermissionControlRegistered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEmbeddedPermissionControlRegistered');
          const result = this.impl.onEmbeddedPermissionControlRegistered(params.arg_allow, params.arg_statuses);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClientReceiver = mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClientReceiver;

mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClientPtr = mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClientRemote;
mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClientRequest = mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClientPendingReceiver;


// Interface: PermissionService
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PermissionService_HasPermission_ParamsSpec, 'blink.mojom.PermissionService_HasPermission_Params', [
      mojo.internal.StructField('arg_permission', 0, 0, mojo.internal.bindings.blink.mojom.PermissionDescriptorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PermissionService_HasPermission_ResponseParamsSpec, 'blink.mojom.PermissionService_HasPermission_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PermissionService_RegisterPageEmbeddedPermissionControl_ParamsSpec, 'blink.mojom.PermissionService_RegisterPageEmbeddedPermissionControl_Params', [
      mojo.internal.StructField('arg_permissions', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.PermissionDescriptorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_descriptor', 8, 0, mojo.internal.bindings.blink.mojom.EmbeddedPermissionRequestDescriptorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PermissionService_RequestPageEmbeddedPermission_ParamsSpec, 'blink.mojom.PermissionService_RequestPageEmbeddedPermission_Params', [
      mojo.internal.StructField('arg_permissions', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.PermissionDescriptorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_descriptor', 8, 0, mojo.internal.bindings.blink.mojom.EmbeddedPermissionRequestDescriptorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PermissionService_RequestPageEmbeddedPermission_ResponseParamsSpec, 'blink.mojom.PermissionService_RequestPageEmbeddedPermission_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.EmbeddedPermissionControlResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PermissionService_RequestPermission_ParamsSpec, 'blink.mojom.PermissionService_RequestPermission_Params', [
      mojo.internal.StructField('arg_permission', 0, 0, mojo.internal.bindings.blink.mojom.PermissionDescriptorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_user_gesture', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PermissionService_RequestPermission_ResponseParamsSpec, 'blink.mojom.PermissionService_RequestPermission_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PermissionService_RequestPermissions_ParamsSpec, 'blink.mojom.PermissionService_RequestPermissions_Params', [
      mojo.internal.StructField('arg_permission', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.PermissionDescriptorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_user_gesture', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PermissionService_RequestPermissions_ResponseParamsSpec, 'blink.mojom.PermissionService_RequestPermissions_ResponseParams', [
      mojo.internal.StructField('arg_statuses', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.PermissionStatusSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PermissionService_RevokePermission_ParamsSpec, 'blink.mojom.PermissionService_RevokePermission_Params', [
      mojo.internal.StructField('arg_permission', 0, 0, mojo.internal.bindings.blink.mojom.PermissionDescriptorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PermissionService_RevokePermission_ResponseParamsSpec, 'blink.mojom.PermissionService_RevokePermission_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PermissionService_AddPermissionObserver_ParamsSpec, 'blink.mojom.PermissionService_AddPermissionObserver_Params', [
      mojo.internal.StructField('arg_permission', 0, 0, mojo.internal.bindings.blink.mojom.PermissionDescriptorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_known_status', 8, 0, mojo.internal.bindings.blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.PermissionObserverRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PermissionService_AddPageEmbeddedPermissionObserver_ParamsSpec, 'blink.mojom.PermissionService_AddPageEmbeddedPermissionObserver_Params', [
      mojo.internal.StructField('arg_permission', 0, 0, mojo.internal.bindings.blink.mojom.PermissionDescriptorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_known_status', 8, 0, mojo.internal.bindings.blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.PermissionObserverRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PermissionService_NotifyEventListener_ParamsSpec, 'blink.mojom.PermissionService_NotifyEventListener_Params', [
      mojo.internal.StructField('arg_permission', 0, 0, mojo.internal.bindings.blink.mojom.PermissionDescriptorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_event_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_added', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.blink.mojom.PermissionServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.PermissionServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PermissionService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.PermissionServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.PermissionServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  hasPermission(arg_permission) {
    return this.$.hasPermission(arg_permission);
  }
  registerPageEmbeddedPermissionControl(arg_permissions, arg_descriptor, arg_client) {
    return this.$.registerPageEmbeddedPermissionControl(arg_permissions, arg_descriptor, arg_client);
  }
  requestPageEmbeddedPermission(arg_permissions, arg_descriptor) {
    return this.$.requestPageEmbeddedPermission(arg_permissions, arg_descriptor);
  }
  requestPermission(arg_permission, arg_user_gesture) {
    return this.$.requestPermission(arg_permission, arg_user_gesture);
  }
  requestPermissions(arg_permission, arg_user_gesture) {
    return this.$.requestPermissions(arg_permission, arg_user_gesture);
  }
  revokePermission(arg_permission) {
    return this.$.revokePermission(arg_permission);
  }
  addPermissionObserver(arg_permission, arg_last_known_status, arg_observer) {
    return this.$.addPermissionObserver(arg_permission, arg_last_known_status, arg_observer);
  }
  addPageEmbeddedPermissionObserver(arg_permission, arg_last_known_status, arg_observer) {
    return this.$.addPageEmbeddedPermissionObserver(arg_permission, arg_last_known_status, arg_observer);
  }
  notifyEventListener(arg_permission, arg_event_type, arg_is_added) {
    return this.$.notifyEventListener(arg_permission, arg_event_type, arg_is_added);
  }
};

mojo.internal.bindings.blink.mojom.PermissionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.PermissionService', [
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

  hasPermission(arg_permission) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.PermissionService_HasPermission_ParamsSpec,
      mojo.internal.bindings.blink.mojom.PermissionService_HasPermission_ResponseParamsSpec,
      [arg_permission],
      false);
  }

  registerPageEmbeddedPermissionControl(arg_permissions, arg_descriptor, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.PermissionService_RegisterPageEmbeddedPermissionControl_ParamsSpec,
      null,
      [arg_permissions, arg_descriptor, arg_client],
      false);
  }

  requestPageEmbeddedPermission(arg_permissions, arg_descriptor) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.PermissionService_RequestPageEmbeddedPermission_ParamsSpec,
      mojo.internal.bindings.blink.mojom.PermissionService_RequestPageEmbeddedPermission_ResponseParamsSpec,
      [arg_permissions, arg_descriptor],
      false);
  }

  requestPermission(arg_permission, arg_user_gesture) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.PermissionService_RequestPermission_ParamsSpec,
      mojo.internal.bindings.blink.mojom.PermissionService_RequestPermission_ResponseParamsSpec,
      [arg_permission, arg_user_gesture],
      false);
  }

  requestPermissions(arg_permission, arg_user_gesture) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.PermissionService_RequestPermissions_ParamsSpec,
      mojo.internal.bindings.blink.mojom.PermissionService_RequestPermissions_ResponseParamsSpec,
      [arg_permission, arg_user_gesture],
      false);
  }

  revokePermission(arg_permission) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.PermissionService_RevokePermission_ParamsSpec,
      mojo.internal.bindings.blink.mojom.PermissionService_RevokePermission_ResponseParamsSpec,
      [arg_permission],
      false);
  }

  addPermissionObserver(arg_permission, arg_last_known_status, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.PermissionService_AddPermissionObserver_ParamsSpec,
      null,
      [arg_permission, arg_last_known_status, arg_observer],
      false);
  }

  addPageEmbeddedPermissionObserver(arg_permission, arg_last_known_status, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.PermissionService_AddPageEmbeddedPermissionObserver_ParamsSpec,
      null,
      [arg_permission, arg_last_known_status, arg_observer],
      false);
  }

  notifyEventListener(arg_permission, arg_event_type, arg_is_added) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.PermissionService_NotifyEventListener_ParamsSpec,
      null,
      [arg_permission, arg_event_type, arg_is_added],
      false);
  }

};

mojo.internal.bindings.blink.mojom.PermissionService.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.PermissionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PermissionService',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.PermissionServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.PermissionService', [
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
        
        // Try Method 0: HasPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionService_HasPermission_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasPermission (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RegisterPageEmbeddedPermissionControl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionService_RegisterPageEmbeddedPermissionControl_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterPageEmbeddedPermissionControl (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RequestPageEmbeddedPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionService_RequestPageEmbeddedPermission_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPageEmbeddedPermission (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RequestPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionService_RequestPermission_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPermission (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RequestPermissions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionService_RequestPermissions_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPermissions (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RevokePermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionService_RevokePermission_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RevokePermission (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: AddPermissionObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionService_AddPermissionObserver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddPermissionObserver (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: AddPageEmbeddedPermissionObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionService_AddPageEmbeddedPermissionObserver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddPageEmbeddedPermissionObserver (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: NotifyEventListener
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionService_NotifyEventListener_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyEventListener (8)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionService_HasPermission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hasPermission');
          const result = this.impl.hasPermission(params.arg_permission);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.PermissionService_HasPermission_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HasPermission FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionService_RegisterPageEmbeddedPermissionControl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerPageEmbeddedPermissionControl');
          const result = this.impl.registerPageEmbeddedPermissionControl(params.arg_permissions, params.arg_descriptor, params.arg_client);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionService_RequestPageEmbeddedPermission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPageEmbeddedPermission');
          const result = this.impl.requestPageEmbeddedPermission(params.arg_permissions, params.arg_descriptor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.PermissionService_RequestPageEmbeddedPermission_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestPageEmbeddedPermission FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionService_RequestPermission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPermission');
          const result = this.impl.requestPermission(params.arg_permission, params.arg_user_gesture);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.PermissionService_RequestPermission_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestPermission FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionService_RequestPermissions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPermissions');
          const result = this.impl.requestPermissions(params.arg_permission, params.arg_user_gesture);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.PermissionService_RequestPermissions_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestPermissions FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionService_RevokePermission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.revokePermission');
          const result = this.impl.revokePermission(params.arg_permission);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.PermissionService_RevokePermission_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RevokePermission FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionService_AddPermissionObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addPermissionObserver');
          const result = this.impl.addPermissionObserver(params.arg_permission, params.arg_last_known_status, params.arg_observer);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionService_AddPageEmbeddedPermissionObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addPageEmbeddedPermissionObserver');
          const result = this.impl.addPageEmbeddedPermissionObserver(params.arg_permission, params.arg_last_known_status, params.arg_observer);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PermissionService_NotifyEventListener_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyEventListener');
          const result = this.impl.notifyEventListener(params.arg_permission, params.arg_event_type, params.arg_is_added);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.PermissionServiceReceiver = mojo.internal.bindings.blink.mojom.PermissionServiceReceiver;

mojo.internal.bindings.blink.mojom.PermissionServicePtr = mojo.internal.bindings.blink.mojom.PermissionServiceRemote;
mojo.internal.bindings.blink.mojom.PermissionServiceRequest = mojo.internal.bindings.blink.mojom.PermissionServicePendingReceiver;

