// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/permissions/permission.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};
var gfx = gfx || {};

blink.mojom.PermissionNameSpec = { $: mojo.internal.Enum() };
blink.mojom.EmbeddedPermissionControlResultSpec = { $: mojo.internal.Enum() };
blink.mojom.PermissionDescriptorExtensionSpec = { $: {} };
blink.mojom.MidiPermissionDescriptorSpec = { $: {} };
blink.mojom.ClipboardPermissionDescriptorSpec = { $: {} };
blink.mojom.CameraDevicePermissionDescriptorSpec = { $: {} };
blink.mojom.TopLevelStorageAccessPermissionDescriptorSpec = { $: {} };
blink.mojom.FullscreenPermissionDescriptorSpec = { $: {} };
blink.mojom.PermissionDescriptorSpec = { $: {} };
blink.mojom.GeolocationEmbeddedPermissionRequestDescriptorSpec = { $: {} };
blink.mojom.EmbeddedPermissionRequestDescriptorSpec = { $: {} };
blink.mojom.PermissionObserver = {};
blink.mojom.PermissionObserver.$interfaceName = 'blink.mojom.PermissionObserver';
blink.mojom.PermissionObserver_OnPermissionStatusChange_ParamsSpec = { $: {} };
blink.mojom.EmbeddedPermissionControlClient = {};
blink.mojom.EmbeddedPermissionControlClient.$interfaceName = 'blink.mojom.EmbeddedPermissionControlClient';
blink.mojom.EmbeddedPermissionControlClient_OnEmbeddedPermissionControlRegistered_ParamsSpec = { $: {} };
blink.mojom.PermissionService = {};
blink.mojom.PermissionService.$interfaceName = 'blink.mojom.PermissionService';
blink.mojom.PermissionService_HasPermission_ParamsSpec = { $: {} };
blink.mojom.PermissionService_HasPermission_ResponseParamsSpec = { $: {} };
blink.mojom.PermissionService_RegisterPageEmbeddedPermissionControl_ParamsSpec = { $: {} };
blink.mojom.PermissionService_RequestPageEmbeddedPermission_ParamsSpec = { $: {} };
blink.mojom.PermissionService_RequestPageEmbeddedPermission_ResponseParamsSpec = { $: {} };
blink.mojom.PermissionService_RequestPermission_ParamsSpec = { $: {} };
blink.mojom.PermissionService_RequestPermission_ResponseParamsSpec = { $: {} };
blink.mojom.PermissionService_RequestPermissions_ParamsSpec = { $: {} };
blink.mojom.PermissionService_RequestPermissions_ResponseParamsSpec = { $: {} };
blink.mojom.PermissionService_RevokePermission_ParamsSpec = { $: {} };
blink.mojom.PermissionService_RevokePermission_ResponseParamsSpec = { $: {} };
blink.mojom.PermissionService_AddPermissionObserver_ParamsSpec = { $: {} };
blink.mojom.PermissionService_AddPageEmbeddedPermissionObserver_ParamsSpec = { $: {} };
blink.mojom.PermissionService_NotifyEventListener_ParamsSpec = { $: {} };

// Enum: PermissionName
blink.mojom.PermissionName = {
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
blink.mojom.EmbeddedPermissionControlResult = {
  kDismissed: 0,
  kGranted: 1,
  kDenied: 2,
  kNotSupported: 3,
  kResolvedNoUserGesture: 4,
};

// Union: PermissionDescriptorExtension
mojo.internal.Union(
    blink.mojom.PermissionDescriptorExtensionSpec, 'blink.mojom.PermissionDescriptorExtension', {
      'midi': {
        'ordinal': 0,
        'type': blink.mojom.MidiPermissionDescriptorSpec.$,
        'nullable': false,
      },
      'clipboard': {
        'ordinal': 1,
        'type': blink.mojom.ClipboardPermissionDescriptorSpec.$,
        'nullable': false,
      },
      'camera_device': {
        'ordinal': 2,
        'type': blink.mojom.CameraDevicePermissionDescriptorSpec.$,
        'nullable': false,
      },
      'top_level_storage_access': {
        'ordinal': 3,
        'type': blink.mojom.TopLevelStorageAccessPermissionDescriptorSpec.$,
        'nullable': false,
      },
      'fullscreen': {
        'ordinal': 4,
        'type': blink.mojom.FullscreenPermissionDescriptorSpec.$,
        'nullable': false,
      },
    });

// Struct: MidiPermissionDescriptor
mojo.internal.Struct(
    blink.mojom.MidiPermissionDescriptorSpec, 'blink.mojom.MidiPermissionDescriptor', [
      mojo.internal.StructField('sysex', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ClipboardPermissionDescriptor
mojo.internal.Struct(
    blink.mojom.ClipboardPermissionDescriptorSpec, 'blink.mojom.ClipboardPermissionDescriptor', [
      mojo.internal.StructField('has_user_gesture', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('will_be_sanitized', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CameraDevicePermissionDescriptor
mojo.internal.Struct(
    blink.mojom.CameraDevicePermissionDescriptorSpec, 'blink.mojom.CameraDevicePermissionDescriptor', [
      mojo.internal.StructField('panTiltZoom', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TopLevelStorageAccessPermissionDescriptor
mojo.internal.Struct(
    blink.mojom.TopLevelStorageAccessPermissionDescriptorSpec, 'blink.mojom.TopLevelStorageAccessPermissionDescriptor', [
      mojo.internal.StructField('requestedOrigin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FullscreenPermissionDescriptor
mojo.internal.Struct(
    blink.mojom.FullscreenPermissionDescriptorSpec, 'blink.mojom.FullscreenPermissionDescriptor', [
      mojo.internal.StructField('allow_without_user_gesture', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PermissionDescriptor
mojo.internal.Struct(
    blink.mojom.PermissionDescriptorSpec, 'blink.mojom.PermissionDescriptor', [
      mojo.internal.StructField('name', 0, 0, blink.mojom.PermissionNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('extension', 8, 0, blink.mojom.PermissionDescriptorExtensionSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GeolocationEmbeddedPermissionRequestDescriptor
mojo.internal.Struct(
    blink.mojom.GeolocationEmbeddedPermissionRequestDescriptorSpec, 'blink.mojom.GeolocationEmbeddedPermissionRequestDescriptor', [
      mojo.internal.StructField('autolocate', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: EmbeddedPermissionRequestDescriptor
mojo.internal.Struct(
    blink.mojom.EmbeddedPermissionRequestDescriptorSpec, 'blink.mojom.EmbeddedPermissionRequestDescriptor', [
      mojo.internal.StructField('element_position', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('geolocation', 8, 0, blink.mojom.GeolocationEmbeddedPermissionRequestDescriptorSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PermissionObserver
mojo.internal.Struct(
    blink.mojom.PermissionObserver_OnPermissionStatusChange_ParamsSpec, 'blink.mojom.PermissionObserver_OnPermissionStatusChange_Params', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.PermissionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PermissionObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PermissionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PermissionObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.PermissionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PermissionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPermissionStatusChange(status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PermissionObserver_OnPermissionStatusChange_ParamsSpec,
      null,
      [status],
      false);
  }

};

blink.mojom.PermissionObserver.getRemote = function() {
  let remote = new blink.mojom.PermissionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PermissionObserver',
    'context');
  return remote.$;
};

blink.mojom.PermissionObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
             decoder.decodeStructInline(blink.mojom.PermissionObserver_OnPermissionStatusChange_ParamsSpec.$);
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
          const params = decoder.decodeStructInline(blink.mojom.PermissionObserver_OnPermissionStatusChange_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onPermissionStatusChange');
          const result = this.impl.onPermissionStatusChange(params.status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.PermissionObserverReceiver = blink.mojom.PermissionObserverReceiver;

blink.mojom.PermissionObserverPtr = blink.mojom.PermissionObserverRemote;
blink.mojom.PermissionObserverRequest = blink.mojom.PermissionObserverPendingReceiver;


// Interface: EmbeddedPermissionControlClient
mojo.internal.Struct(
    blink.mojom.EmbeddedPermissionControlClient_OnEmbeddedPermissionControlRegistered_ParamsSpec, 'blink.mojom.EmbeddedPermissionControlClient_OnEmbeddedPermissionControlRegistered_Params', [
      mojo.internal.StructField('statuses', 0, 0, mojo.internal.Array(blink.mojom.PermissionStatusSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('allow', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.EmbeddedPermissionControlClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.EmbeddedPermissionControlClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.EmbeddedPermissionControlClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.EmbeddedPermissionControlClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.EmbeddedPermissionControlClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.EmbeddedPermissionControlClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onEmbeddedPermissionControlRegistered(allow, statuses) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.EmbeddedPermissionControlClient_OnEmbeddedPermissionControlRegistered_ParamsSpec,
      null,
      [allow, statuses],
      false);
  }

};

blink.mojom.EmbeddedPermissionControlClient.getRemote = function() {
  let remote = new blink.mojom.EmbeddedPermissionControlClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.EmbeddedPermissionControlClient',
    'context');
  return remote.$;
};

blink.mojom.EmbeddedPermissionControlClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
             decoder.decodeStructInline(blink.mojom.EmbeddedPermissionControlClient_OnEmbeddedPermissionControlRegistered_ParamsSpec.$);
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
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedPermissionControlClient_OnEmbeddedPermissionControlRegistered_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onEmbeddedPermissionControlRegistered');
          const result = this.impl.onEmbeddedPermissionControlRegistered(params.allow, params.statuses);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.EmbeddedPermissionControlClientReceiver = blink.mojom.EmbeddedPermissionControlClientReceiver;

blink.mojom.EmbeddedPermissionControlClientPtr = blink.mojom.EmbeddedPermissionControlClientRemote;
blink.mojom.EmbeddedPermissionControlClientRequest = blink.mojom.EmbeddedPermissionControlClientPendingReceiver;


// Interface: PermissionService
mojo.internal.Struct(
    blink.mojom.PermissionService_HasPermission_ParamsSpec, 'blink.mojom.PermissionService_HasPermission_Params', [
      mojo.internal.StructField('permission', 0, 0, blink.mojom.PermissionDescriptorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PermissionService_HasPermission_ResponseParamsSpec, 'blink.mojom.PermissionService_HasPermission_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PermissionService_RegisterPageEmbeddedPermissionControl_ParamsSpec, 'blink.mojom.PermissionService_RegisterPageEmbeddedPermissionControl_Params', [
      mojo.internal.StructField('permissions', 0, 0, mojo.internal.Array(blink.mojom.PermissionDescriptorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('descriptor', 8, 0, blink.mojom.EmbeddedPermissionRequestDescriptorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.EmbeddedPermissionControlClientSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PermissionService_RequestPageEmbeddedPermission_ParamsSpec, 'blink.mojom.PermissionService_RequestPageEmbeddedPermission_Params', [
      mojo.internal.StructField('permissions', 0, 0, mojo.internal.Array(blink.mojom.PermissionDescriptorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('descriptor', 8, 0, blink.mojom.EmbeddedPermissionRequestDescriptorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PermissionService_RequestPageEmbeddedPermission_ResponseParamsSpec, 'blink.mojom.PermissionService_RequestPageEmbeddedPermission_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.EmbeddedPermissionControlResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PermissionService_RequestPermission_ParamsSpec, 'blink.mojom.PermissionService_RequestPermission_Params', [
      mojo.internal.StructField('permission', 0, 0, blink.mojom.PermissionDescriptorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('user_gesture', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PermissionService_RequestPermission_ResponseParamsSpec, 'blink.mojom.PermissionService_RequestPermission_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PermissionService_RequestPermissions_ParamsSpec, 'blink.mojom.PermissionService_RequestPermissions_Params', [
      mojo.internal.StructField('permission', 0, 0, mojo.internal.Array(blink.mojom.PermissionDescriptorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('user_gesture', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PermissionService_RequestPermissions_ResponseParamsSpec, 'blink.mojom.PermissionService_RequestPermissions_ResponseParams', [
      mojo.internal.StructField('statuses', 0, 0, mojo.internal.Array(blink.mojom.PermissionStatusSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PermissionService_RevokePermission_ParamsSpec, 'blink.mojom.PermissionService_RevokePermission_Params', [
      mojo.internal.StructField('permission', 0, 0, blink.mojom.PermissionDescriptorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PermissionService_RevokePermission_ResponseParamsSpec, 'blink.mojom.PermissionService_RevokePermission_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PermissionService_AddPermissionObserver_ParamsSpec, 'blink.mojom.PermissionService_AddPermissionObserver_Params', [
      mojo.internal.StructField('permission', 0, 0, blink.mojom.PermissionDescriptorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_known_status', 8, 0, blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.PermissionObserverSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PermissionService_AddPageEmbeddedPermissionObserver_ParamsSpec, 'blink.mojom.PermissionService_AddPageEmbeddedPermissionObserver_Params', [
      mojo.internal.StructField('permission', 0, 0, blink.mojom.PermissionDescriptorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_known_status', 8, 0, blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.PermissionObserverSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PermissionService_NotifyEventListener_ParamsSpec, 'blink.mojom.PermissionService_NotifyEventListener_Params', [
      mojo.internal.StructField('permission', 0, 0, blink.mojom.PermissionDescriptorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_added', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

blink.mojom.PermissionServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PermissionServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PermissionService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PermissionServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.PermissionServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PermissionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  hasPermission(permission) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PermissionService_HasPermission_ParamsSpec,
      blink.mojom.PermissionService_HasPermission_ResponseParamsSpec,
      [permission],
      false);
  }

  registerPageEmbeddedPermissionControl(permissions, descriptor, client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PermissionService_RegisterPageEmbeddedPermissionControl_ParamsSpec,
      null,
      [permissions, descriptor, client],
      false);
  }

  requestPageEmbeddedPermission(permissions, descriptor) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PermissionService_RequestPageEmbeddedPermission_ParamsSpec,
      blink.mojom.PermissionService_RequestPageEmbeddedPermission_ResponseParamsSpec,
      [permissions, descriptor],
      false);
  }

  requestPermission(permission, user_gesture) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.PermissionService_RequestPermission_ParamsSpec,
      blink.mojom.PermissionService_RequestPermission_ResponseParamsSpec,
      [permission, user_gesture],
      false);
  }

  requestPermissions(permission, user_gesture) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.PermissionService_RequestPermissions_ParamsSpec,
      blink.mojom.PermissionService_RequestPermissions_ResponseParamsSpec,
      [permission, user_gesture],
      false);
  }

  revokePermission(permission) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.PermissionService_RevokePermission_ParamsSpec,
      blink.mojom.PermissionService_RevokePermission_ResponseParamsSpec,
      [permission],
      false);
  }

  addPermissionObserver(permission, last_known_status, observer) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.PermissionService_AddPermissionObserver_ParamsSpec,
      null,
      [permission, last_known_status, observer],
      false);
  }

  addPageEmbeddedPermissionObserver(permission, last_known_status, observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.PermissionService_AddPageEmbeddedPermissionObserver_ParamsSpec,
      null,
      [permission, last_known_status, observer],
      false);
  }

  notifyEventListener(permission, event_type, is_added) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.PermissionService_NotifyEventListener_ParamsSpec,
      null,
      [permission, event_type, is_added],
      false);
  }

};

blink.mojom.PermissionService.getRemote = function() {
  let remote = new blink.mojom.PermissionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PermissionService',
    'context');
  return remote.$;
};

blink.mojom.PermissionServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
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
             decoder.decodeStructInline(blink.mojom.PermissionService_HasPermission_ParamsSpec.$);
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
             decoder.decodeStructInline(blink.mojom.PermissionService_RegisterPageEmbeddedPermissionControl_ParamsSpec.$);
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
             decoder.decodeStructInline(blink.mojom.PermissionService_RequestPageEmbeddedPermission_ParamsSpec.$);
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
             decoder.decodeStructInline(blink.mojom.PermissionService_RequestPermission_ParamsSpec.$);
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
             decoder.decodeStructInline(blink.mojom.PermissionService_RequestPermissions_ParamsSpec.$);
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
             decoder.decodeStructInline(blink.mojom.PermissionService_RevokePermission_ParamsSpec.$);
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
             decoder.decodeStructInline(blink.mojom.PermissionService_AddPermissionObserver_ParamsSpec.$);
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
             decoder.decodeStructInline(blink.mojom.PermissionService_AddPageEmbeddedPermissionObserver_ParamsSpec.$);
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
             decoder.decodeStructInline(blink.mojom.PermissionService_NotifyEventListener_ParamsSpec.$);
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
          const params = decoder.decodeStructInline(blink.mojom.PermissionService_HasPermission_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.hasPermission');
          const result = this.impl.hasPermission(params.permission);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PermissionService_HasPermission_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PermissionService_RegisterPageEmbeddedPermissionControl_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.registerPageEmbeddedPermissionControl');
          const result = this.impl.registerPageEmbeddedPermissionControl(params.permissions, params.descriptor, params.client);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PermissionService_RequestPageEmbeddedPermission_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.requestPageEmbeddedPermission');
          const result = this.impl.requestPageEmbeddedPermission(params.permissions, params.descriptor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PermissionService_RequestPageEmbeddedPermission_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PermissionService_RequestPermission_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.requestPermission');
          const result = this.impl.requestPermission(params.permission, params.user_gesture);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PermissionService_RequestPermission_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PermissionService_RequestPermissions_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.requestPermissions');
          const result = this.impl.requestPermissions(params.permission, params.user_gesture);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PermissionService_RequestPermissions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PermissionService_RevokePermission_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.revokePermission');
          const result = this.impl.revokePermission(params.permission);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PermissionService_RevokePermission_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PermissionService_AddPermissionObserver_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.addPermissionObserver');
          const result = this.impl.addPermissionObserver(params.permission, params.last_known_status, params.observer);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PermissionService_AddPageEmbeddedPermissionObserver_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.addPageEmbeddedPermissionObserver');
          const result = this.impl.addPageEmbeddedPermissionObserver(params.permission, params.last_known_status, params.observer);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PermissionService_NotifyEventListener_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.notifyEventListener');
          const result = this.impl.notifyEventListener(params.permission, params.event_type, params.is_added);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.PermissionServiceReceiver = blink.mojom.PermissionServiceReceiver;

blink.mojom.PermissionServicePtr = blink.mojom.PermissionServiceRemote;
blink.mojom.PermissionServiceRequest = blink.mojom.PermissionServicePendingReceiver;

