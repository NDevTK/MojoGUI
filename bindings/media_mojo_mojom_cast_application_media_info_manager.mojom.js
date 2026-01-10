// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cast_application_media_info_manager.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: CastApplicationMediaInfo
media.mojom.CastApplicationMediaInfoSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CastApplicationMediaInfo',
      packedSize: 24,
      fields: [
        { name: 'application_session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'mixer_audio_enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_audio_only_session', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: CastApplicationMediaInfoManager
media.mojom.CastApplicationMediaInfoManager = {};

media.mojom.CastApplicationMediaInfoManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.CastApplicationMediaInfoManagerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CastApplicationMediaInfoManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.CastApplicationMediaInfoManagerPendingReceiver,
      handle);
    this.$ = new media.mojom.CastApplicationMediaInfoManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.CastApplicationMediaInfoManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getCastApplicationMediaInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.CastApplicationMediaInfoManager_GetCastApplicationMediaInfo_ParamsSpec,
      media.mojom.CastApplicationMediaInfoManager_GetCastApplicationMediaInfo_ResponseParamsSpec,
      []);
  }

};

media.mojom.CastApplicationMediaInfoManager.getRemote = function() {
  let remote = new media.mojom.CastApplicationMediaInfoManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CastApplicationMediaInfoManager',
    'context');
  return remote.$;
};

// ParamsSpec for GetCastApplicationMediaInfo
media.mojom.CastApplicationMediaInfoManager_GetCastApplicationMediaInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CastApplicationMediaInfoManager.GetCastApplicationMediaInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.CastApplicationMediaInfoManager_GetCastApplicationMediaInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CastApplicationMediaInfoManager.GetCastApplicationMediaInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'cast_application_media_info', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CastApplicationMediaInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.CastApplicationMediaInfoManagerPtr = media.mojom.CastApplicationMediaInfoManagerRemote;
media.mojom.CastApplicationMediaInfoManagerRequest = media.mojom.CastApplicationMediaInfoManagerPendingReceiver;

