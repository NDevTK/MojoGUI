// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/webrtc_video_perf.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


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
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'video_stats', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'frames_per_second', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.WebrtcVideoPerfHistory_GetPerfInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WebrtcVideoPerfHistory.GetPerfInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_smooth', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.WebrtcVideoPerfHistoryPtr = media.mojom.WebrtcVideoPerfHistoryRemote;
media.mojom.WebrtcVideoPerfHistoryRequest = media.mojom.WebrtcVideoPerfHistoryPendingReceiver;

