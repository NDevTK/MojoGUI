// Auto-generated MojoJS binding
// Source: chromium_src/components/content_settings/common/content_settings_manager.mojom
// Module: content_settings.mojom

'use strict';

// Module namespace
var content_settings = content_settings || {};
content_settings.mojom = content_settings.mojom || {};
var network = network || {};
var blink = blink || {};
var url = url || {};

content_settings.mojom.StorageTypeSpec = { $: mojo.internal.Enum() };
content_settings.mojom.ContentSettingsManager = {};
content_settings.mojom.ContentSettingsManager.$interfaceName = 'content_settings.mojom.ContentSettingsManager';
content_settings.mojom.ContentSettingsManager_Clone_ParamsSpec = { $: {} };
content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ParamsSpec = { $: {} };
content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ResponseParamsSpec = { $: {} };
content_settings.mojom.ContentSettingsManager_OnContentBlocked_ParamsSpec = { $: {} };

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
mojo.internal.Struct(
    content_settings.mojom.ContentSettingsManager_Clone_ParamsSpec, 'content_settings.mojom.ContentSettingsManager_Clone_Params', [
      mojo.internal.StructField('clone', 0, 0, mojo.internal.InterfaceRequest(content_settings.mojom.ContentSettingsManagerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ParamsSpec, 'content_settings.mojom.ContentSettingsManager_AllowStorageAccess_Params', [
      mojo.internal.StructField('frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('storage_type', 8, 0, content_settings.mojom.StorageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin', 16, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('site_for_cookies', 24, 0, network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('top_frame_origin', 32, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ResponseParamsSpec, 'content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ResponseParams', [
      mojo.internal.StructField('allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content_settings.mojom.ContentSettingsManager_OnContentBlocked_ParamsSpec, 'content_settings.mojom.ContentSettingsManager_OnContentBlocked_Params', [
      mojo.internal.StructField('frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, content_settings.mojom.ContentSettingsTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      content_settings.mojom.ContentSettingsManager_Clone_ParamsSpec,
      null,
      [clone],
      false);
  }

  allowStorageAccess(frame_token, storage_type, origin, site_for_cookies, top_frame_origin) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ParamsSpec,
      content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ResponseParamsSpec,
      [frame_token, storage_type, origin, site_for_cookies, top_frame_origin],
      false);
  }

  onContentBlocked(frame_token, type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content_settings.mojom.ContentSettingsManager_OnContentBlocked_ParamsSpec,
      null,
      [frame_token, type],
      false);
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
};

content_settings.mojom.ContentSettingsManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = content_settings.mojom.ContentSettingsManager_Clone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clone(params.clone);
          break;
        }
        case 1: {
          const params = content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ParamsSpec.$.decode(message.payload);
          const result = this.impl.allowStorageAccess(params.frame_token, params.storage_type, params.origin, params.site_for_cookies, params.top_frame_origin);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = content_settings.mojom.ContentSettingsManager_OnContentBlocked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onContentBlocked(params.frame_token, params.type);
          break;
        }
      }
    });
  }
};

content_settings.mojom.ContentSettingsManagerReceiver = content_settings.mojom.ContentSettingsManagerReceiver;

content_settings.mojom.ContentSettingsManagerPtr = content_settings.mojom.ContentSettingsManagerRemote;
content_settings.mojom.ContentSettingsManagerRequest = content_settings.mojom.ContentSettingsManagerPendingReceiver;

