// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/webrtc_video_perf.mojom
// Module: media.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.WebrtcPredictionFeaturesSpec = { $: {} };
media.mojom.WebrtcVideoStatsSpec = { $: {} };
media.mojom.WebrtcVideoPerfRecorder = {};
media.mojom.WebrtcVideoPerfRecorder.$interfaceName = 'media.mojom.WebrtcVideoPerfRecorder';
media.mojom.WebrtcVideoPerfRecorder_UpdateRecord_ParamsSpec = { $: {} };
media.mojom.WebrtcVideoPerfHistory = {};
media.mojom.WebrtcVideoPerfHistory.$interfaceName = 'media.mojom.WebrtcVideoPerfHistory';
media.mojom.WebrtcVideoPerfHistory_GetPerfInfo_ParamsSpec = { $: {} };
media.mojom.WebrtcVideoPerfHistory_GetPerfInfo_ResponseParamsSpec = { $: {} };

// Struct: WebrtcPredictionFeatures
mojo.internal.Struct(
    media.mojom.WebrtcPredictionFeaturesSpec, 'media.mojom.WebrtcPredictionFeatures', [
      mojo.internal.StructField('profile', 0, 0, media.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('video_pixels', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_decode_stats', 12, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('hardware_accelerated', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebrtcVideoStats
mojo.internal.Struct(
    media.mojom.WebrtcVideoStatsSpec, 'media.mojom.WebrtcVideoStats', [
      mojo.internal.StructField('frames_processed', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_frames_processed', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('p99_processing_time_ms', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: WebrtcVideoPerfRecorder
mojo.internal.Struct(
    media.mojom.WebrtcVideoPerfRecorder_UpdateRecord_ParamsSpec, 'media.mojom.WebrtcVideoPerfRecorder_UpdateRecord_Params', [
      mojo.internal.StructField('features', 0, 0, media.mojom.WebrtcPredictionFeaturesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('video_stats', 8, 0, media.mojom.WebrtcVideoStatsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
  updateRecord(features, video_stats) {
    return this.$.updateRecord(features, video_stats);
  }
};

media.mojom.WebrtcVideoPerfRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebrtcVideoPerfRecorder', [
      { explicit: null },
    ]);
  }

  updateRecord(features, video_stats) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.WebrtcVideoPerfRecorder_UpdateRecord_ParamsSpec,
      null,
      [features, video_stats],
      false);
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

media.mojom.WebrtcVideoPerfRecorderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebrtcVideoPerfRecorder', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.WebrtcVideoPerfRecorder_UpdateRecord_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.WebrtcVideoPerfRecorder_UpdateRecord_ParamsSpec.$.structSpec);
          const result = this.impl.updateRecord(params.features, params.video_stats);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

media.mojom.WebrtcVideoPerfRecorderReceiver = media.mojom.WebrtcVideoPerfRecorderReceiver;

media.mojom.WebrtcVideoPerfRecorderPtr = media.mojom.WebrtcVideoPerfRecorderRemote;
media.mojom.WebrtcVideoPerfRecorderRequest = media.mojom.WebrtcVideoPerfRecorderPendingReceiver;


// Interface: WebrtcVideoPerfHistory
mojo.internal.Struct(
    media.mojom.WebrtcVideoPerfHistory_GetPerfInfo_ParamsSpec, 'media.mojom.WebrtcVideoPerfHistory_GetPerfInfo_Params', [
      mojo.internal.StructField('features', 0, 0, media.mojom.WebrtcPredictionFeaturesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frames_per_second', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.WebrtcVideoPerfHistory_GetPerfInfo_ResponseParamsSpec, 'media.mojom.WebrtcVideoPerfHistory_GetPerfInfo_ResponseParams', [
      mojo.internal.StructField('is_smooth', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getPerfInfo(features, frames_per_second) {
    return this.$.getPerfInfo(features, frames_per_second);
  }
};

media.mojom.WebrtcVideoPerfHistoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebrtcVideoPerfHistory', [
      { explicit: null },
    ]);
  }

  getPerfInfo(features, frames_per_second) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.WebrtcVideoPerfHistory_GetPerfInfo_ParamsSpec,
      media.mojom.WebrtcVideoPerfHistory_GetPerfInfo_ResponseParamsSpec,
      [features, frames_per_second],
      false);
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

media.mojom.WebrtcVideoPerfHistoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebrtcVideoPerfHistory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.WebrtcVideoPerfHistory_GetPerfInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.WebrtcVideoPerfHistory_GetPerfInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getPerfInfo(params.features, params.frames_per_second);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.WebrtcVideoPerfHistory_GetPerfInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

media.mojom.WebrtcVideoPerfHistoryReceiver = media.mojom.WebrtcVideoPerfHistoryReceiver;

media.mojom.WebrtcVideoPerfHistoryPtr = media.mojom.WebrtcVideoPerfHistoryRemote;
media.mojom.WebrtcVideoPerfHistoryRequest = media.mojom.WebrtcVideoPerfHistoryPendingReceiver;

