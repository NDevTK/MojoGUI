// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_decode_stats_recorder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.VideoDecodeStatsRecorder = {};
media.mojom.VideoDecodeStatsRecorder.$interfaceName = 'media.mojom.VideoDecodeStatsRecorder';
media.mojom.VideoDecodeStatsRecorder_StartNewRecord_ParamsSpec = { $: {} };
media.mojom.VideoDecodeStatsRecorder_UpdateRecord_ParamsSpec = { $: {} };

// Interface: VideoDecodeStatsRecorder
mojo.internal.Struct(
    media.mojom.VideoDecodeStatsRecorder_StartNewRecord_ParamsSpec, 'media.mojom.VideoDecodeStatsRecorder_StartNewRecord_Params', [
      mojo.internal.StructField('features', 0, 0, media.mojom.PredictionFeaturesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoDecodeStatsRecorder_UpdateRecord_ParamsSpec, 'media.mojom.VideoDecodeStatsRecorder_UpdateRecord_Params', [
      mojo.internal.StructField('targets', 0, 0, media.mojom.PredictionTargetsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.VideoDecodeStatsRecorderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoDecodeStatsRecorderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoDecodeStatsRecorder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoDecodeStatsRecorderPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoDecodeStatsRecorderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.VideoDecodeStatsRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startNewRecord(features) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.VideoDecodeStatsRecorder_StartNewRecord_ParamsSpec,
      null,
      [features],
      false);
  }

  updateRecord(targets) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.VideoDecodeStatsRecorder_UpdateRecord_ParamsSpec,
      null,
      [targets],
      false);
  }

};

media.mojom.VideoDecodeStatsRecorder.getRemote = function() {
  let remote = new media.mojom.VideoDecodeStatsRecorderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoDecodeStatsRecorder',
    'context');
  return remote.$;
};

media.mojom.VideoDecodeStatsRecorderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.VideoDecodeStatsRecorder_StartNewRecord_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startNewRecord(params.features);
          break;
        }
        case 1: {
          const params = media.mojom.VideoDecodeStatsRecorder_UpdateRecord_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateRecord(params.targets);
          break;
        }
      }
    });
  }
};

media.mojom.VideoDecodeStatsRecorderReceiver = media.mojom.VideoDecodeStatsRecorderReceiver;

media.mojom.VideoDecodeStatsRecorderPtr = media.mojom.VideoDecodeStatsRecorderRemote;
media.mojom.VideoDecodeStatsRecorderRequest = media.mojom.VideoDecodeStatsRecorderPendingReceiver;

