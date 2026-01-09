// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cast_application_media_info_manager.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: CastApplicationMediaInfo
media.mojom.CastApplicationMediaInfo = class {
  constructor(values = {}) {
    this.is_audio_only_session = values.is_audio_only_session !== undefined ? values.is_audio_only_session : false;
  }
};

// Interface: CastApplicationMediaInfoManager
media.mojom.CastApplicationMediaInfoManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.CastApplicationMediaInfoManager';
  }

  getCastApplicationMediaInfo() {
    // Method: GetCastApplicationMediaInfo
    return new Promise((resolve) => {
      // Call: GetCastApplicationMediaInfo()
      resolve({});
    });
  }

};

media.mojom.CastApplicationMediaInfoManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
