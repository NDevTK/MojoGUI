// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_decode_perf_history.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: VideoDecodePerfHistory
media.mojom.mojom.VideoDecodePerfHistory = {};

media.mojom.mojom.VideoDecodePerfHistoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.VideoDecodePerfHistoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoDecodePerfHistory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.VideoDecodePerfHistoryPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.VideoDecodePerfHistoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.VideoDecodePerfHistoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPerfInfo(features) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.VideoDecodePerfHistory_GetPerfInfo_ParamsSpec,
      media.mojom.mojom.VideoDecodePerfHistory_GetPerfInfo_ResponseParamsSpec,
      [features]);
  }

};

media.mojom.mojom.VideoDecodePerfHistory.getRemote = function() {
  let remote = new media.mojom.mojom.VideoDecodePerfHistoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoDecodePerfHistory',
    'context');
  return remote.$;
};

// ParamsSpec for GetPerfInfo
media.mojom.mojom.VideoDecodePerfHistory_GetPerfInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecodePerfHistory.GetPerfInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: media.mojom.PredictionFeaturesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.mojom.VideoDecodePerfHistory_GetPerfInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecodePerfHistory.GetPerfInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_smooth', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_power_efficient', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.VideoDecodePerfHistoryPtr = media.mojom.mojom.VideoDecodePerfHistoryRemote;
media.mojom.mojom.VideoDecodePerfHistoryRequest = media.mojom.mojom.VideoDecodePerfHistoryPendingReceiver;

