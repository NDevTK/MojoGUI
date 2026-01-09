// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cast_application_media_info_manager.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


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
      versions: [{version: 0}]
    }
  }
};

media.mojom.CastApplicationMediaInfoManager_GetCastApplicationMediaInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CastApplicationMediaInfoManager.GetCastApplicationMediaInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'cast_application_media_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.CastApplicationMediaInfoManagerPtr = media.mojom.CastApplicationMediaInfoManagerRemote;
media.mojom.CastApplicationMediaInfoManagerRequest = media.mojom.CastApplicationMediaInfoManagerPendingReceiver;

