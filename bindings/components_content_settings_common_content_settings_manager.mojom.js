// Auto-generated MojoJS binding
// Source: chromium_src/components/content_settings/common/content_settings_manager.mojom
// Module: content_settings.mojom

'use strict';

// Module namespace
var content_settings = content_settings || {};
content_settings.mojom = content_settings.mojom || {};


// Enum: StorageType
content_settings.mojom.StorageType = {
  LOCAL_STORAGE: 0,
  SESSION_STORAGE: 1,
  FILE_SYSTEM: 2,
  INDEXED_DB: 3,
  CACHE: 4,
  WEB_LOCKS: 5,
};

// Interface: ContentSettingsManager
content_settings.mojom.ContentSettingsManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content_settings.mojom.ContentSettingsManager';
  }

  clone(clone) {
    // Method: Clone
    // Call: Clone(clone)
  }

  allowStorageAccess(frame_token, storage_type, origin, site_for_cookies, top_frame_origin) {
    // Method: AllowStorageAccess
    return new Promise((resolve) => {
      // Call: AllowStorageAccess(frame_token, storage_type, origin, site_for_cookies, top_frame_origin)
      resolve({});
    });
  }

  onContentBlocked(frame_token, type) {
    // Method: OnContentBlocked
    // Call: OnContentBlocked(frame_token, type)
  }

};

content_settings.mojom.ContentSettingsManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
