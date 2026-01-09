// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/key_system_support.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: CdmCapabilityQueryStatus
media.mojom.CdmCapabilityQueryStatus = {
};

// Struct: VideoCodecInfo
media.mojom.VideoCodecInfo = class {
  constructor(values = {}) {
    this.true = values.true !== undefined ? values.true : false;
  }
};

// Struct: CdmCapability
media.mojom.CdmCapability = class {
  constructor(values = {}) {
    this.version = values.version !== undefined ? values.version : [];
  }
};

// Struct: KeySystemCapability
media.mojom.KeySystemCapability = class {
  constructor(values = {}) {
    this.hw_secure_capability_query_status = values.hw_secure_capability_query_status !== undefined ? values.hw_secure_capability_query_status : null;
  }
};

// Interface: KeySystemSupportObserver
media.mojom.KeySystemSupportObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.KeySystemSupportObserver';
  }

  onKeySystemSupportUpdated(key_systems) {
    // Method: OnKeySystemSupportUpdated
    // Call: OnKeySystemSupportUpdated(key_systems)
  }

};

media.mojom.KeySystemSupportObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: KeySystemSupport
media.mojom.KeySystemSupportPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.KeySystemSupport';
  }

  setObserver(observer) {
    // Method: SetObserver
    // Call: SetObserver(observer)
  }

};

media.mojom.KeySystemSupportRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
