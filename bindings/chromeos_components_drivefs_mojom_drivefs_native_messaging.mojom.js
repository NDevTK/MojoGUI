// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/drivefs/mojom/drivefs_native_messaging.mojom
// Module: drivefs.mojom

'use strict';

// Module namespace
var drivefs = drivefs || {};
drivefs.mojom = drivefs.mojom || {};


// Enum: ExtensionConnectionStatus
drivefs.mojom.ExtensionConnectionStatus = {
  kSuccess: 0,
  kExtensionNotFound: 1,
  kFeatureNotEnabled: 2,
};

// Struct: ExtensionConnectionParams
drivefs.mojom.ExtensionConnectionParams = class {
  constructor(values = {}) {
    this.extension_id@0 = values.extension_id@0 !== undefined ? values.extension_id@0 : "";
  }
};

// Interface: NativeMessagingPort
drivefs.mojom.NativeMessagingPortPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'drivefs.mojom.NativeMessagingPort';
  }

  0(message) {
    // Method: 0
    // Call: 0(message)
  }

};

drivefs.mojom.NativeMessagingPortRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NativeMessagingHost
drivefs.mojom.NativeMessagingHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'drivefs.mojom.NativeMessagingHost';
  }

  0(message) {
    // Method: 0
    // Call: 0(message)
  }

};

drivefs.mojom.NativeMessagingHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
