// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_decode_perf_history.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.VideoDecodePerfHistory = {};
media.mojom.VideoDecodePerfHistory.$interfaceName = 'media.mojom.VideoDecodePerfHistory';
media.mojom.VideoDecodePerfHistory_GetPerfInfo_ParamsSpec = { $: {} };
media.mojom.VideoDecodePerfHistory_GetPerfInfo_ResponseParamsSpec = { $: {} };

// Interface: VideoDecodePerfHistory
mojo.internal.Struct(
    media.mojom.VideoDecodePerfHistory_GetPerfInfo_ParamsSpec, 'media.mojom.VideoDecodePerfHistory_GetPerfInfo_Params', [
      mojo.internal.StructField('features', 0, 0, media.mojom.PredictionFeaturesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoDecodePerfHistory_GetPerfInfo_ResponseParamsSpec, 'media.mojom.VideoDecodePerfHistory_GetPerfInfo_ResponseParams', [
      mojo.internal.StructField('is_smooth', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_power_efficient', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [features],
      false);
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

media.mojom.VideoDecodePerfHistoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.VideoDecodePerfHistory_GetPerfInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPerfInfo(params.features);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.VideoDecodePerfHistory_GetPerfInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

media.mojom.VideoDecodePerfHistoryReceiver = media.mojom.VideoDecodePerfHistoryReceiver;

media.mojom.VideoDecodePerfHistoryPtr = media.mojom.VideoDecodePerfHistoryRemote;
media.mojom.VideoDecodePerfHistoryRequest = media.mojom.VideoDecodePerfHistoryPendingReceiver;

