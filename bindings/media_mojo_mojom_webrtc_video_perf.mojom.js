// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/webrtc_video_perf.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: WebrtcPredictionFeatures
media.mojom.WebrtcPredictionFeaturesSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WebrtcPredictionFeatures',
      packedSize: 24,
      fields: [
        { name: 'is_decode_stats', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'profile', packedOffset: 8, packedBitOffset: 0, type: media.mojom.VideoCodecProfileSpec, nullable: false, minVersion: 0 },
        { name: 'video_pixels', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'hardware_accelerated', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: WebrtcVideoStats
media.mojom.WebrtcVideoStatsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WebrtcVideoStats',
      packedSize: 24,
      fields: [
        { name: 'frames_processed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_frames_processed', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'p99_processing_time_ms', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: WebrtcVideoPerfRecorder
media.mojom.WebrtcVideoPerfRecorder = {};

media.mojom.WebrtcVideoPerfRecorderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.WebrtcVideoPerfRecorderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.WebrtcVideoPerfRecorder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.WebrtcVideoPerfRecorderPendingReceiver,
      handle);
    this.$ = new media.mojom.WebrtcVideoPerfRecorderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.WebrtcVideoPerfRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateRecord(features, video_stats) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.WebrtcVideoPerfRecorder_UpdateRecord_ParamsSpec,
      null,
      [features, video_stats]);
  }

};

media.mojom.WebrtcVideoPerfRecorder.getRemote = function() {
  let remote = new media.mojom.WebrtcVideoPerfRecorderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.WebrtcVideoPerfRecorder',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateRecord
media.mojom.WebrtcVideoPerfRecorder_UpdateRecord_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WebrtcVideoPerfRecorder.UpdateRecord_Params',
      packedSize: 24,
      fields: [
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: media.mojom.WebrtcPredictionFeaturesSpec, nullable: false, minVersion: 0 },
        { name: 'video_stats', packedOffset: 8, packedBitOffset: 0, type: media.mojom.WebrtcVideoStatsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
media.mojom.WebrtcVideoPerfRecorderPtr = media.mojom.WebrtcVideoPerfRecorderRemote;
media.mojom.WebrtcVideoPerfRecorderRequest = media.mojom.WebrtcVideoPerfRecorderPendingReceiver;


// Interface: WebrtcVideoPerfHistory
media.mojom.WebrtcVideoPerfHistory = {};

media.mojom.WebrtcVideoPerfHistoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.WebrtcVideoPerfHistoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.WebrtcVideoPerfHistory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.WebrtcVideoPerfHistoryPendingReceiver,
      handle);
    this.$ = new media.mojom.WebrtcVideoPerfHistoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.WebrtcVideoPerfHistoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPerfInfo(features, frames_per_second) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.WebrtcVideoPerfHistory_GetPerfInfo_ParamsSpec,
      media.mojom.WebrtcVideoPerfHistory_GetPerfInfo_ResponseParamsSpec,
      [features, frames_per_second]);
  }

};

media.mojom.WebrtcVideoPerfHistory.getRemote = function() {
  let remote = new media.mojom.WebrtcVideoPerfHistoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.WebrtcVideoPerfHistory',
    'context');
  return remote.$;
};

// ParamsSpec for GetPerfInfo
media.mojom.WebrtcVideoPerfHistory_GetPerfInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WebrtcVideoPerfHistory.GetPerfInfo_Params',
      packedSize: 24,
      fields: [
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: media.mojom.WebrtcPredictionFeaturesSpec, nullable: false, minVersion: 0 },
        { name: 'frames_per_second', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.WebrtcVideoPerfHistory_GetPerfInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WebrtcVideoPerfHistory.GetPerfInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_smooth', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.WebrtcVideoPerfHistoryPtr = media.mojom.WebrtcVideoPerfHistoryRemote;
media.mojom.WebrtcVideoPerfHistoryRequest = media.mojom.WebrtcVideoPerfHistoryPendingReceiver;

