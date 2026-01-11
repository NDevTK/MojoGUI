// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_decode_stats_recorder.mojom
// Module: media.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  startNewRecord(features) {
    return this.$.startNewRecord(features);
  }
  updateRecord(targets) {
    return this.$.updateRecord(targets);
  }
};

media.mojom.VideoDecodeStatsRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoDecodeStatsRecorder', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  startNewRecord(features) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.VideoDecodeStatsRecorder_StartNewRecord_ParamsSpec,
      null,
      [features],
      false);
  }

  updateRecord(targets) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoDecodeStatsRecorder', [
      { explicit: null },
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
             decoder.decodeStructInline(media.mojom.VideoDecodeStatsRecorder_StartNewRecord_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoDecodeStatsRecorder_UpdateRecord_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoDecodeStatsRecorder_StartNewRecord_ParamsSpec.$.structSpec);
          const result = this.impl.startNewRecord(params.features);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoDecodeStatsRecorder_UpdateRecord_ParamsSpec.$.structSpec);
          const result = this.impl.updateRecord(params.targets);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

media.mojom.VideoDecodeStatsRecorderReceiver = media.mojom.VideoDecodeStatsRecorderReceiver;

media.mojom.VideoDecodeStatsRecorderPtr = media.mojom.VideoDecodeStatsRecorderRemote;
media.mojom.VideoDecodeStatsRecorderRequest = media.mojom.VideoDecodeStatsRecorderPendingReceiver;

