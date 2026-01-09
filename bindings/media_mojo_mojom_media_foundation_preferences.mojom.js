// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_foundation_preferences.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: MediaFoundationPreferences
media.mojom.MediaFoundationPreferencesPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.MediaFoundationPreferences';
  }

  isHardwareSecureDecryptionAllowed() {
    // Method: IsHardwareSecureDecryptionAllowed
    return new Promise((resolve) => {
      // Call: IsHardwareSecureDecryptionAllowed()
      resolve({});
    });
  }

};

media.mojom.MediaFoundationPreferencesRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
