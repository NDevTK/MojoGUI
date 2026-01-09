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
};

// Struct: MidiPermissionDescriptor
blink.mojom.MidiPermissionDescriptor = class {
  constructor(values = {}) {
    this.sysex = values.sysex !== undefined ? values.sysex : false;
  }
};

// Struct: ClipboardPermissionDescriptor
blink.mojom.ClipboardPermissionDescriptor = class {
  constructor(values = {}) {
    this.will_be_sanitized = values.will_be_sanitized !== undefined ? values.will_be_sanitized : false;
  }
};

// Struct: CameraDevicePermissionDescriptor
blink.mojom.CameraDevicePermissionDescriptor = class {
  constructor(values = {}) {
    this.panTiltZoom = values.panTiltZoom !== undefined ? values.panTiltZoom : false;
  }
};

// Struct: TopLevelStorageAccessPermissionDescriptor
blink.mojom.TopLevelStorageAccessPermissionDescriptor = class {
  constructor(values = {}) {
    this.stricter = values.stricter !== undefined ? values.stricter : null;
    this.requestedOrigin = values.requestedOrigin !== undefined ? values.requestedOrigin : null;
  }
};

// Struct: FullscreenPermissionDescriptor
blink.mojom.FullscreenPermissionDescriptor = class {
  constructor(values = {}) {
    this.allow_without_user_gesture = values.allow_without_user_gesture !== undefined ? values.allow_without_user_gesture : false;
  }
};

// Struct: PermissionDescriptor
blink.mojom.PermissionDescriptor = class {
  constructor(values = {}) {
    this.extension = values.extension !== undefined ? values.extension : null;
  }
};

// Struct: GeolocationEmbeddedPermissionRequestDescriptor
blink.mojom.GeolocationEmbeddedPermissionRequestDescriptor = class {
  constructor(values = {}) {
    this.autolocate = values.autolocate !== undefined ? values.autolocate : false;
  }
};

// Struct: EmbeddedPermissionRequestDescriptor
blink.mojom.EmbeddedPermissionRequestDescriptor = class {
  constructor(values = {}) {
    this.element_position = values.element_position !== undefined ? values.element_position : null;
    this.geolocation = values.geolocation !== undefined ? values.geolocation : null;
  }
};

// Interface: PermissionObserver
blink.mojom.PermissionObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PermissionObserver';
  }

  onPermissionStatusChange(status) {
    // Method: OnPermissionStatusChange
    // Call: OnPermissionStatusChange(status)
  }

};

blink.mojom.PermissionObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: EmbeddedPermissionControlClient
blink.mojom.EmbeddedPermissionControlClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.EmbeddedPermissionControlClient';
  }

  onEmbeddedPermissionControlRegistered(allow, statuses) {
    // Method: OnEmbeddedPermissionControlRegistered
    // Call: OnEmbeddedPermissionControlRegistered(allow, statuses)
  }

};

blink.mojom.EmbeddedPermissionControlClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PermissionService
blink.mojom.PermissionServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PermissionService';
  }

  hasPermission(permission) {
    // Method: HasPermission
    return new Promise((resolve) => {
      // Call: HasPermission(permission)
      resolve({});
    });
  }

  registerPageEmbeddedPermissionControl(permissions, descriptor, client) {
    // Method: RegisterPageEmbeddedPermissionControl
    // Call: RegisterPageEmbeddedPermissionControl(permissions, descriptor, client)
  }

  requestPageEmbeddedPermission(permissions, descriptor) {
    // Method: RequestPageEmbeddedPermission
    return new Promise((resolve) => {
      // Call: RequestPageEmbeddedPermission(permissions, descriptor)
      resolve({});
    });
  }

  requestPermission(permission, user_gesture) {
    // Method: RequestPermission
    return new Promise((resolve) => {
      // Call: RequestPermission(permission, user_gesture)
      resolve({});
    });
  }

  requestPermissions(permission, user_gesture) {
    // Method: RequestPermissions
    return new Promise((resolve) => {
      // Call: RequestPermissions(permission, user_gesture)
      resolve({});
    });
  }

  revokePermission(permission) {
    // Method: RevokePermission
    return new Promise((resolve) => {
      // Call: RevokePermission(permission)
      resolve({});
    });
  }

  addPermissionObserver(permission, last_known_status, observer) {
    // Method: AddPermissionObserver
    // Call: AddPermissionObserver(permission, last_known_status, observer)
  }

  addPageEmbeddedPermissionObserver(permission, last_known_status, observer) {
    // Method: AddPageEmbeddedPermissionObserver
    // Call: AddPageEmbeddedPermissionObserver(permission, last_known_status, observer)
  }

  notifyEventListener(permission, event_type, is_added) {
    // Method: NotifyEventListener
    // Call: NotifyEventListener(permission, event_type, is_added)
  }

};

blink.mojom.PermissionServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
