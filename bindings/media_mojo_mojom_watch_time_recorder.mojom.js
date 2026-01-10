// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/watch_time_recorder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

media.mojom.PlaybackPropertiesSpec = { $: {} };
media.mojom.SecondaryPlaybackPropertiesSpec = { $: {} };
media.mojom.WatchTimeRecorder = {};
media.mojom.WatchTimeRecorder.$interfaceName = 'media.mojom.WatchTimeRecorder';
media.mojom.WatchTimeRecorder_RecordWatchTime_ParamsSpec = { $: {} };
media.mojom.WatchTimeRecorder_FinalizeWatchTime_ParamsSpec = { $: {} };
media.mojom.WatchTimeRecorder_OnError_ParamsSpec = { $: {} };
media.mojom.WatchTimeRecorder_UpdateSecondaryProperties_ParamsSpec = { $: {} };
media.mojom.WatchTimeRecorder_SetAutoplayInitiated_ParamsSpec = { $: {} };
media.mojom.WatchTimeRecorder_OnDurationChanged_ParamsSpec = { $: {} };
media.mojom.WatchTimeRecorder_UpdateVideoDecodeStats_ParamsSpec = { $: {} };
media.mojom.WatchTimeRecorder_UpdateUnderflowCount_ParamsSpec = { $: {} };
media.mojom.WatchTimeRecorder_UpdateUnderflowDuration_ParamsSpec = { $: {} };

// Struct: PlaybackProperties
mojo.internal.Struct(
    media.mojom.PlaybackPropertiesSpec, 'media.mojom.PlaybackProperties', [
      mojo.internal.StructField('media_stream_type', 0, 0, media.mojom.MediaStreamTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('renderer_type', 8, 0, media.mojom.RendererTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('demuxer_type', 16, 0, media.mojom.DemuxerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_audio', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_video', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_background', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_muted', 24, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_eme', 24, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_embedded_media_experience', 24, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SecondaryPlaybackProperties
mojo.internal.Struct(
    media.mojom.SecondaryPlaybackPropertiesSpec, 'media.mojom.SecondaryPlaybackProperties', [
      mojo.internal.StructField('audio_codec', 0, 0, media.mojom.AudioCodecSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('video_codec', 8, 0, media.mojom.VideoCodecSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('audio_codec_profile', 16, 0, media.mojom.AudioCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('video_codec_profile', 24, 0, media.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('audio_decoder', 32, 0, media.mojom.AudioDecoderTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('video_decoder', 40, 0, media.mojom.VideoDecoderTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('audio_encryption_scheme', 48, 0, media.mojom.EncryptionSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('video_encryption_scheme', 56, 0, media.mojom.EncryptionSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('natural_size', 64, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 80]]);

// Interface: WatchTimeRecorder
mojo.internal.Struct(
    media.mojom.WatchTimeRecorder_RecordWatchTime_ParamsSpec, 'media.mojom.WatchTimeRecorder_RecordWatchTime_Params', [
      mojo.internal.StructField('key', 0, 0, media.mojom.WatchTimeKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('watch_time', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.WatchTimeRecorder_FinalizeWatchTime_ParamsSpec, 'media.mojom.WatchTimeRecorder_FinalizeWatchTime_Params', [
      mojo.internal.StructField('watch_time_keys', 0, 0, mojo.internal.Array(media.mojom.WatchTimeKeySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.WatchTimeRecorder_OnError_ParamsSpec, 'media.mojom.WatchTimeRecorder_OnError_Params', [
      mojo.internal.StructField('status', 0, 0, media.mojom.PipelineStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.WatchTimeRecorder_UpdateSecondaryProperties_ParamsSpec, 'media.mojom.WatchTimeRecorder_UpdateSecondaryProperties_Params', [
      mojo.internal.StructField('secondary_properties', 0, 0, media.mojom.SecondaryPlaybackPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.WatchTimeRecorder_SetAutoplayInitiated_ParamsSpec, 'media.mojom.WatchTimeRecorder_SetAutoplayInitiated_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.WatchTimeRecorder_OnDurationChanged_ParamsSpec, 'media.mojom.WatchTimeRecorder_OnDurationChanged_Params', [
      mojo.internal.StructField('duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.WatchTimeRecorder_UpdateVideoDecodeStats_ParamsSpec, 'media.mojom.WatchTimeRecorder_UpdateVideoDecodeStats_Params', [
      mojo.internal.StructField('frames_decoded', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('frames_dropped', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.WatchTimeRecorder_UpdateUnderflowCount_ParamsSpec, 'media.mojom.WatchTimeRecorder_UpdateUnderflowCount_Params', [
      mojo.internal.StructField('total_count', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.WatchTimeRecorder_UpdateUnderflowDuration_ParamsSpec, 'media.mojom.WatchTimeRecorder_UpdateUnderflowDuration_Params', [
      mojo.internal.StructField('total_duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('total_completed_count', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.WatchTimeRecorderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.WatchTimeRecorderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.WatchTimeRecorder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.WatchTimeRecorderPendingReceiver,
      handle);
    this.$ = new media.mojom.WatchTimeRecorderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.WatchTimeRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  recordWatchTime(key, watch_time) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.WatchTimeRecorder_RecordWatchTime_ParamsSpec,
      null,
      [key, watch_time],
      false);
  }

  finalizeWatchTime(watch_time_keys) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.WatchTimeRecorder_FinalizeWatchTime_ParamsSpec,
      null,
      [watch_time_keys],
      false);
  }

  onError(status) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.WatchTimeRecorder_OnError_ParamsSpec,
      null,
      [status],
      false);
  }

  updateSecondaryProperties(secondary_properties) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.WatchTimeRecorder_UpdateSecondaryProperties_ParamsSpec,
      null,
      [secondary_properties],
      false);
  }

  setAutoplayInitiated(value) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.WatchTimeRecorder_SetAutoplayInitiated_ParamsSpec,
      null,
      [value],
      false);
  }

  onDurationChanged(duration) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.WatchTimeRecorder_OnDurationChanged_ParamsSpec,
      null,
      [duration],
      false);
  }

  updateVideoDecodeStats(frames_decoded, frames_dropped) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.WatchTimeRecorder_UpdateVideoDecodeStats_ParamsSpec,
      null,
      [frames_decoded, frames_dropped],
      false);
  }

  updateUnderflowCount(total_count) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.WatchTimeRecorder_UpdateUnderflowCount_ParamsSpec,
      null,
      [total_count],
      false);
  }

  updateUnderflowDuration(total_completed_count, total_duration) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.WatchTimeRecorder_UpdateUnderflowDuration_ParamsSpec,
      null,
      [total_completed_count, total_duration],
      false);
  }

};

media.mojom.WatchTimeRecorder.getRemote = function() {
  let remote = new media.mojom.WatchTimeRecorderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.WatchTimeRecorder',
    'context');
  return remote.$;
};

media.mojom.WatchTimeRecorderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
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
        
        // Try Method 0: RecordWatchTime
        try {
             decoder.decodeStruct(media.mojom.WatchTimeRecorder_RecordWatchTime_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordWatchTime (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: FinalizeWatchTime
        try {
             decoder.decodeStruct(media.mojom.WatchTimeRecorder_FinalizeWatchTime_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FinalizeWatchTime (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: OnError
        try {
             decoder.decodeStruct(media.mojom.WatchTimeRecorder_OnError_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: UpdateSecondaryProperties
        try {
             decoder.decodeStruct(media.mojom.WatchTimeRecorder_UpdateSecondaryProperties_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateSecondaryProperties (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: SetAutoplayInitiated
        try {
             decoder.decodeStruct(media.mojom.WatchTimeRecorder_SetAutoplayInitiated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAutoplayInitiated (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: OnDurationChanged
        try {
             decoder.decodeStruct(media.mojom.WatchTimeRecorder_OnDurationChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDurationChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: UpdateVideoDecodeStats
        try {
             decoder.decodeStruct(media.mojom.WatchTimeRecorder_UpdateVideoDecodeStats_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateVideoDecodeStats (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: UpdateUnderflowCount
        try {
             decoder.decodeStruct(media.mojom.WatchTimeRecorder_UpdateUnderflowCount_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateUnderflowCount (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: UpdateUnderflowDuration
        try {
             decoder.decodeStruct(media.mojom.WatchTimeRecorder_UpdateUnderflowDuration_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateUnderflowDuration (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.WatchTimeRecorder_RecordWatchTime_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordWatchTime');
          const result = this.impl.recordWatchTime(params.key, params.watch_time);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.WatchTimeRecorder_FinalizeWatchTime_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.finalizeWatchTime');
          const result = this.impl.finalizeWatchTime(params.watch_time_keys);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.WatchTimeRecorder_OnError_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.status);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.WatchTimeRecorder_UpdateSecondaryProperties_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateSecondaryProperties');
          const result = this.impl.updateSecondaryProperties(params.secondary_properties);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.WatchTimeRecorder_SetAutoplayInitiated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setAutoplayInitiated');
          const result = this.impl.setAutoplayInitiated(params.value);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.WatchTimeRecorder_OnDurationChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDurationChanged');
          const result = this.impl.onDurationChanged(params.duration);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.WatchTimeRecorder_UpdateVideoDecodeStats_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateVideoDecodeStats');
          const result = this.impl.updateVideoDecodeStats(params.frames_decoded, params.frames_dropped);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.WatchTimeRecorder_UpdateUnderflowCount_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateUnderflowCount');
          const result = this.impl.updateUnderflowCount(params.total_count);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.WatchTimeRecorder_UpdateUnderflowDuration_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateUnderflowDuration');
          const result = this.impl.updateUnderflowDuration(params.total_completed_count, params.total_duration);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.WatchTimeRecorderReceiver = media.mojom.WatchTimeRecorderReceiver;

media.mojom.WatchTimeRecorderPtr = media.mojom.WatchTimeRecorderRemote;
media.mojom.WatchTimeRecorderRequest = media.mojom.WatchTimeRecorderPendingReceiver;

