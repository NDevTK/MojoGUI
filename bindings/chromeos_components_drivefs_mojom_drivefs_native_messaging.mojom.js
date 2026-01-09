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
  }
};

// Interface: NativeMessagingPort
drivefs.mojom.NativeMessagingPortPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'drivefs.mojom.NativeMessagingPort';
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

};

drivefs.mojom.NativeMessagingHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
