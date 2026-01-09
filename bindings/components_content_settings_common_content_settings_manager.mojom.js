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
content_settings.mojom.ContentSettingsManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content_settings.mojom.ContentSettingsManagerRemote = class {
  static get $interfaceName() {
    return 'content_settings.mojom.ContentSettingsManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content_settings.mojom.ContentSettingsManagerPendingReceiver,
      handle);
    this.$ = new content_settings.mojom.ContentSettingsManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content_settings.mojom.ContentSettingsManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  clone(clone) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content_settings.mojom.ContentSettingsManager_Clone_ParamsSpec.$,
      null,
      [clone]);
  }

  allowStorageAccess(frame_token, storage_type, origin, site_for_cookies, top_frame_origin) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ParamsSpec.$,
      content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ResponseParamsSpec.$,
      [frame_token, storage_type, origin, site_for_cookies, top_frame_origin]);
  }

  onContentBlocked(frame_token, type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content_settings.mojom.ContentSettingsManager_OnContentBlocked_ParamsSpec.$,
      null,
      [frame_token, type]);
  }

};

content_settings.mojom.ContentSettingsManager.getRemote = function() {
  let remote = new content_settings.mojom.ContentSettingsManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content_settings.mojom.ContentSettingsManager',
    'context');
  return remote.$;
}};

// ParamsSpec for Clone
content_settings.mojom.ContentSettingsManager_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content_settings.mojom.ContentSettingsManager.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'clone', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for AllowStorageAccess
content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content_settings.mojom.ContentSettingsManager.AllowStorageAccess_Params',
      packedSize: 48,
      fields: [
        { name: 'frame_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'storage_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'origin', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'site_for_cookies', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'top_frame_origin', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content_settings.mojom.ContentSettingsManager.AllowStorageAccess_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnContentBlocked
content_settings.mojom.ContentSettingsManager_OnContentBlocked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content_settings.mojom.ContentSettingsManager.OnContentBlocked_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
content_settings.mojom.ContentSettingsManagerPtr = content_settings.mojom.ContentSettingsManagerRemote;
content_settings.mojom.ContentSettingsManagerRequest = content_settings.mojom.ContentSettingsManagerPendingReceiver;

