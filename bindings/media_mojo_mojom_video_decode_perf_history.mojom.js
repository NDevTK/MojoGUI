// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_decode_perf_history.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: VideoDecodePerfHistory
media.mojom.VideoDecodePerfHistory = {};

media.mojom.VideoDecodePerfHistoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoDecodePerfHistoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoDecodePerfHistory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoDecodePerfHistoryPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoDecodePerfHistoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.VideoDecodePerfHistoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPerfInfo(features) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.VideoDecodePerfHistory_GetPerfInfo_ParamsSpec,
      media.mojom.VideoDecodePerfHistory_GetPerfInfo_ResponseParamsSpec,
      [features]);
  }

};

media.mojom.VideoDecodePerfHistory.getRemote = function() {
  let remote = new media.mojom.VideoDecodePerfHistoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoDecodePerfHistory',
    'context');
  return remote.$;
};

// ParamsSpec for GetPerfInfo
media.mojom.VideoDecodePerfHistory_GetPerfInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecodePerfHistory.GetPerfInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.VideoDecodePerfHistory_GetPerfInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecodePerfHistory.GetPerfInfo_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'is_smooth', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_power_efficient', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.VideoDecodePerfHistoryPtr = media.mojom.VideoDecodePerfHistoryRemote;
media.mojom.VideoDecodePerfHistoryRequest = media.mojom.VideoDecodePerfHistoryPendingReceiver;

