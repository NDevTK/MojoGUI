// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_decode_stats_recorder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: VideoDecodeStatsRecorder
media.mojom.VideoDecodeStatsRecorder = {};

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
      media.mojom.VideoDecodeStatsRecorder_StartNewRecord_ParamsSpec.$,
      null,
      [features]);
  }

  updateRecord(targets) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.VideoDecodeStatsRecorder_UpdateRecord_ParamsSpec.$,
      null,
      [targets]);
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

// ParamsSpec for StartNewRecord
media.mojom.VideoDecodeStatsRecorder_StartNewRecord_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecodeStatsRecorder.StartNewRecord_Params',
      packedSize: 16,
      fields: [
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateRecord
media.mojom.VideoDecodeStatsRecorder_UpdateRecord_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecodeStatsRecorder.UpdateRecord_Params',
      packedSize: 16,
      fields: [
        { name: 'targets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.VideoDecodeStatsRecorderPtr = media.mojom.VideoDecodeStatsRecorderRemote;
media.mojom.VideoDecodeStatsRecorderRequest = media.mojom.VideoDecodeStatsRecorderPendingReceiver;

