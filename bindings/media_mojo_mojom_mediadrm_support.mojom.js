// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/mediadrm_support.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: MediaDrmSupportResult
media.mojom.MediaDrmSupportResult = class {
  constructor(values = {}) {
    this.key_system_version = values.key_system_version !== undefined ? values.key_system_version : false;
  }
};

// Interface: MediaDrmSupport
media.mojom.MediaDrmSupportPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.MediaDrmSupport';
  }

  isKeySystemSupported(key_system, is_secure) {
    // Method: IsKeySystemSupported
    return new Promise((resolve) => {
      // Call: IsKeySystemSupported(key_system, is_secure)
      resolve({});
    });
  }

};

media.mojom.MediaDrmSupportRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
