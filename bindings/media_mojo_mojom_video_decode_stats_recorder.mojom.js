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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: StartNewRecord
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.VideoDecodeStatsRecorder_StartNewRecord_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartNewRecord (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: UpdateRecord
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.VideoDecodeStatsRecorder_UpdateRecord_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateRecord (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.VideoDecodeStatsRecorder_StartNewRecord_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startNewRecord');
          const result = this.impl.startNewRecord(params.features);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.VideoDecodeStatsRecorder_UpdateRecord_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateRecord');
          const result = this.impl.updateRecord(params.targets);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.VideoDecodeStatsRecorderReceiver = media.mojom.VideoDecodeStatsRecorderReceiver;

media.mojom.VideoDecodeStatsRecorderPtr = media.mojom.VideoDecodeStatsRecorderRemote;
media.mojom.VideoDecodeStatsRecorderRequest = media.mojom.VideoDecodeStatsRecorderPendingReceiver;

