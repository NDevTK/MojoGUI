// Auto-generated MojoJS binding
// Source: chromium_src/components/content_settings/common/content_settings_manager.mojom
// Module: content_settings.mojom

'use strict';

// Module namespace
var content_settings = content_settings || {};
content_settings.mojom = content_settings.mojom || {};
var blink = blink || {};
var url = url || {};


// Enum: StorageType
content_settings.mojom.mojom.StorageType = {
  LOCAL_STORAGE: 0,
  SESSION_STORAGE: 1,
  FILE_SYSTEM: 2,
  INDEXED_DB: 3,
  CACHE: 4,
  WEB_LOCKS: 5,
};
content_settings.mojom.mojom.StorageTypeSpec = { $: mojo.internal.Enum() };

// Interface: ContentSettingsManager
content_settings.mojom.mojom.ContentSettingsManager = {};

content_settings.mojom.mojom.ContentSettingsManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content_settings.mojom.mojom.ContentSettingsManagerRemote = class {
  static get $interfaceName() {
    return 'content_settings.mojom.ContentSettingsManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content_settings.mojom.mojom.ContentSettingsManagerPendingReceiver,
      handle);
    this.$ = new content_settings.mojom.mojom.ContentSettingsManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content_settings.mojom.mojom.ContentSettingsManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  clone(clone) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content_settings.mojom.mojom.ContentSettingsManager_Clone_ParamsSpec,
      null,
      [clone]);
  }

  allowStorageAccess(frame_token, storage_type, origin, site_for_cookies, top_frame_origin) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content_settings.mojom.mojom.ContentSettingsManager_AllowStorageAccess_ParamsSpec,
      content_settings.mojom.mojom.ContentSettingsManager_AllowStorageAccess_ResponseParamsSpec,
      [frame_token, storage_type, origin, site_for_cookies, top_frame_origin]);
  }

  onContentBlocked(frame_token, type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content_settings.mojom.mojom.ContentSettingsManager_OnContentBlocked_ParamsSpec,
      null,
      [frame_token, type]);
  }

};

content_settings.mojom.mojom.ContentSettingsManager.getRemote = function() {
  let remote = new content_settings.mojom.mojom.ContentSettingsManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content_settings.mojom.ContentSettingsManager',
    'context');
  return remote.$;
};

// ParamsSpec for Clone
content_settings.mojom.mojom.ContentSettingsManager_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content_settings.mojom.ContentSettingsManager.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'clone', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AllowStorageAccess
content_settings.mojom.mojom.ContentSettingsManager_AllowStorageAccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content_settings.mojom.ContentSettingsManager.AllowStorageAccess_Params',
      packedSize: 48,
      fields: [
        { name: 'frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'storage_type', packedOffset: 32, packedBitOffset: 0, type: content_settings.mojom.StorageTypeSpec, nullable: false, minVersion: 0 },
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'site_for_cookies', packedOffset: 16, packedBitOffset: 0, type: network.mojom.SiteForCookiesSpec, nullable: false, minVersion: 0 },
        { name: 'top_frame_origin', packedOffset: 24, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

content_settings.mojom.mojom.ContentSettingsManager_AllowStorageAccess_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content_settings.mojom.ContentSettingsManager.AllowStorageAccess_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnContentBlocked
content_settings.mojom.mojom.ContentSettingsManager_OnContentBlocked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content_settings.mojom.ContentSettingsManager.OnContentBlocked_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: content_settings.mojom.ContentSettingsTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
content_settings.mojom.mojom.ContentSettingsManagerPtr = content_settings.mojom.mojom.ContentSettingsManagerRemote;
content_settings.mojom.mojom.ContentSettingsManagerRequest = content_settings.mojom.mojom.ContentSettingsManagerPendingReceiver;

