// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_decode_stats_recorder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: VideoDecodeStatsRecorder
media.mojom.mojom.VideoDecodeStatsRecorder = {};

media.mojom.mojom.VideoDecodeStatsRecorderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.VideoDecodeStatsRecorderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoDecodeStatsRecorder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.VideoDecodeStatsRecorderPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.VideoDecodeStatsRecorderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.VideoDecodeStatsRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startNewRecord(features) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.VideoDecodeStatsRecorder_StartNewRecord_ParamsSpec,
      null,
      [features]);
  }

  updateRecord(targets) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.VideoDecodeStatsRecorder_UpdateRecord_ParamsSpec,
      null,
      [targets]);
  }

};

media.mojom.mojom.VideoDecodeStatsRecorder.getRemote = function() {
  let remote = new media.mojom.mojom.VideoDecodeStatsRecorderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoDecodeStatsRecorder',
    'context');
  return remote.$;
};

// ParamsSpec for StartNewRecord
media.mojom.mojom.VideoDecodeStatsRecorder_StartNewRecord_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecodeStatsRecorder.StartNewRecord_Params',
      packedSize: 16,
      fields: [
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: media.mojom.PredictionFeaturesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateRecord
media.mojom.mojom.VideoDecodeStatsRecorder_UpdateRecord_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecodeStatsRecorder.UpdateRecord_Params',
      packedSize: 16,
      fields: [
        { name: 'targets', packedOffset: 0, packedBitOffset: 0, type: media.mojom.PredictionTargetsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.VideoDecodeStatsRecorderPtr = media.mojom.mojom.VideoDecodeStatsRecorderRemote;
media.mojom.mojom.VideoDecodeStatsRecorderRequest = media.mojom.mojom.VideoDecodeStatsRecorderPendingReceiver;

