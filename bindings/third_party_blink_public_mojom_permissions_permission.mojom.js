// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/permissions/permission.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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

// Struct: MidiPermissionDescriptor
blink.mojom.MidiPermissionDescriptorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MidiPermissionDescriptor',
      packedSize: 16,
      fields: [
        { name: 'sysex', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ClipboardPermissionDescriptor
blink.mojom.ClipboardPermissionDescriptorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardPermissionDescriptor',
      packedSize: 16,
      fields: [
        { name: 'has_user_gesture', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'will_be_sanitized', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CameraDevicePermissionDescriptor
blink.mojom.CameraDevicePermissionDescriptorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CameraDevicePermissionDescriptor',
      packedSize: 16,
      fields: [
        { name: 'panTiltZoom', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TopLevelStorageAccessPermissionDescriptor
blink.mojom.TopLevelStorageAccessPermissionDescriptorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TopLevelStorageAccessPermissionDescriptor',
      packedSize: 16,
      fields: [
        { name: 'requestedOrigin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FullscreenPermissionDescriptor
blink.mojom.FullscreenPermissionDescriptorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FullscreenPermissionDescriptor',
      packedSize: 16,
      fields: [
        { name: 'allow_without_user_gesture', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PermissionDescriptor
blink.mojom.PermissionDescriptorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PermissionDescriptor',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PermissionNameSpec, nullable: false },
        { name: 'extension', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PermissionDescriptorExtensionSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GeolocationEmbeddedPermissionRequestDescriptor
blink.mojom.GeolocationEmbeddedPermissionRequestDescriptorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.GeolocationEmbeddedPermissionRequestDescriptor',
      packedSize: 16,
      fields: [
        { name: 'autolocate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EmbeddedPermissionRequestDescriptor
blink.mojom.EmbeddedPermissionRequestDescriptorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedPermissionRequestDescriptor',
      packedSize: 24,
      fields: [
        { name: 'element_position', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'geolocation', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.GeolocationEmbeddedPermissionRequestDescriptorSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PermissionObserver
blink.mojom.PermissionObserver = {};

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
      [status]);
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

// ParamsSpec for OnPermissionStatusChange
blink.mojom.PermissionObserver_OnPermissionStatusChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PermissionObserver.OnPermissionStatusChange_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PermissionStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.PermissionObserverPtr = blink.mojom.PermissionObserverRemote;
blink.mojom.PermissionObserverRequest = blink.mojom.PermissionObserverPendingReceiver;


// Interface: EmbeddedPermissionControlClient
blink.mojom.EmbeddedPermissionControlClient = {};

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
      [allow, statuses]);
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

// ParamsSpec for OnEmbeddedPermissionControlRegistered
blink.mojom.EmbeddedPermissionControlClient_OnEmbeddedPermissionControlRegistered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedPermissionControlClient.OnEmbeddedPermissionControlRegistered_Params',
      packedSize: 24,
      fields: [
        { name: 'statuses', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'allow', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.EmbeddedPermissionControlClientPtr = blink.mojom.EmbeddedPermissionControlClientRemote;
blink.mojom.EmbeddedPermissionControlClientRequest = blink.mojom.EmbeddedPermissionControlClientPendingReceiver;


// Interface: PermissionService
blink.mojom.PermissionService = {};

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
      [permission]);
  }

  registerPageEmbeddedPermissionControl(permissions, descriptor, client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PermissionService_RegisterPageEmbeddedPermissionControl_ParamsSpec,
      null,
      [permissions, descriptor, client]);
  }

  requestPageEmbeddedPermission(permissions, descriptor) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PermissionService_RequestPageEmbeddedPermission_ParamsSpec,
      blink.mojom.PermissionService_RequestPageEmbeddedPermission_ResponseParamsSpec,
      [permissions, descriptor]);
  }

  requestPermission(permission, user_gesture) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.PermissionService_RequestPermission_ParamsSpec,
      blink.mojom.PermissionService_RequestPermission_ResponseParamsSpec,
      [permission, user_gesture]);
  }

  requestPermissions(permission, user_gesture) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.PermissionService_RequestPermissions_ParamsSpec,
      blink.mojom.PermissionService_RequestPermissions_ResponseParamsSpec,
      [permission, user_gesture]);
  }

  revokePermission(permission) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.PermissionService_RevokePermission_ParamsSpec,
      blink.mojom.PermissionService_RevokePermission_ResponseParamsSpec,
      [permission]);
  }

  addPermissionObserver(permission, last_known_status, observer) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.PermissionService_AddPermissionObserver_ParamsSpec,
      null,
      [permission, last_known_status, observer]);
  }

  addPageEmbeddedPermissionObserver(permission, last_known_status, observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.PermissionService_AddPageEmbeddedPermissionObserver_ParamsSpec,
      null,
      [permission, last_known_status, observer]);
  }

  notifyEventListener(permission, event_type, is_added) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.PermissionService_NotifyEventListener_ParamsSpec,
      null,
      [permission, event_type, is_added]);
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

// ParamsSpec for HasPermission
blink.mojom.PermissionService_HasPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PermissionService.HasPermission_Params',
      packedSize: 16,
      fields: [
        { name: 'permission', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PermissionDescriptorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.PermissionService_HasPermission_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PermissionService.HasPermission_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PermissionStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterPageEmbeddedPermissionControl
blink.mojom.PermissionService_RegisterPageEmbeddedPermissionControl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PermissionService.RegisterPageEmbeddedPermissionControl_Params',
      packedSize: 32,
      fields: [
        { name: 'permissions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'descriptor', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.EmbeddedPermissionRequestDescriptorSpec, nullable: false },
        { name: 'client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestPageEmbeddedPermission
blink.mojom.PermissionService_RequestPageEmbeddedPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PermissionService.RequestPageEmbeddedPermission_Params',
      packedSize: 24,
      fields: [
        { name: 'permissions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'descriptor', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.EmbeddedPermissionRequestDescriptorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.PermissionService_RequestPageEmbeddedPermission_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PermissionService.RequestPageEmbeddedPermission_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.EmbeddedPermissionControlResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestPermission
blink.mojom.PermissionService_RequestPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PermissionService.RequestPermission_Params',
      packedSize: 24,
      fields: [
        { name: 'permission', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PermissionDescriptorSpec, nullable: false },
        { name: 'user_gesture', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.PermissionService_RequestPermission_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PermissionService.RequestPermission_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PermissionStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestPermissions
blink.mojom.PermissionService_RequestPermissions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PermissionService.RequestPermissions_Params',
      packedSize: 24,
      fields: [
        { name: 'permission', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'user_gesture', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.PermissionService_RequestPermissions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PermissionService.RequestPermissions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'statuses', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RevokePermission
blink.mojom.PermissionService_RevokePermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PermissionService.RevokePermission_Params',
      packedSize: 16,
      fields: [
        { name: 'permission', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PermissionDescriptorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.PermissionService_RevokePermission_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PermissionService.RevokePermission_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PermissionStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddPermissionObserver
blink.mojom.PermissionService_AddPermissionObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PermissionService.AddPermissionObserver_Params',
      packedSize: 32,
      fields: [
        { name: 'permission', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PermissionDescriptorSpec, nullable: false },
        { name: 'last_known_status', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PermissionStatusSpec, nullable: false },
        { name: 'observer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddPageEmbeddedPermissionObserver
blink.mojom.PermissionService_AddPageEmbeddedPermissionObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PermissionService.AddPageEmbeddedPermissionObserver_Params',
      packedSize: 32,
      fields: [
        { name: 'permission', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PermissionDescriptorSpec, nullable: false },
        { name: 'last_known_status', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PermissionStatusSpec, nullable: false },
        { name: 'observer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyEventListener
blink.mojom.PermissionService_NotifyEventListener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PermissionService.NotifyEventListener_Params',
      packedSize: 32,
      fields: [
        { name: 'permission', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PermissionDescriptorSpec, nullable: false },
        { name: 'event_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_added', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.PermissionServicePtr = blink.mojom.PermissionServiceRemote;
blink.mojom.PermissionServiceRequest = blink.mojom.PermissionServicePendingReceiver;

