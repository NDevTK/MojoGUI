// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/watch_time_recorder.mojom
// Module: media.mojom

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
  recordWatchTime(key, watch_time) {
    return this.$.recordWatchTime(key, watch_time);
  }
  finalizeWatchTime(watch_time_keys) {
    return this.$.finalizeWatchTime(watch_time_keys);
  }
  onError(status) {
    return this.$.onError(status);
  }
  updateSecondaryProperties(secondary_properties) {
    return this.$.updateSecondaryProperties(secondary_properties);
  }
  setAutoplayInitiated(value) {
    return this.$.setAutoplayInitiated(value);
  }
  onDurationChanged(duration) {
    return this.$.onDurationChanged(duration);
  }
  updateVideoDecodeStats(frames_decoded, frames_dropped) {
    return this.$.updateVideoDecodeStats(frames_decoded, frames_dropped);
  }
  updateUnderflowCount(total_count) {
    return this.$.updateUnderflowCount(total_count);
  }
  updateUnderflowDuration(total_completed_count, total_duration) {
    return this.$.updateUnderflowDuration(total_completed_count, total_duration);
  }
};

media.mojom.WatchTimeRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WatchTimeRecorder', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  recordWatchTime(key, watch_time) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.WatchTimeRecorder_RecordWatchTime_ParamsSpec,
      null,
      [key, watch_time],
      false);
  }

  finalizeWatchTime(watch_time_keys) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.WatchTimeRecorder_FinalizeWatchTime_ParamsSpec,
      null,
      [watch_time_keys],
      false);
  }

  onError(status) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.WatchTimeRecorder_OnError_ParamsSpec,
      null,
      [status],
      false);
  }

  updateSecondaryProperties(secondary_properties) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.WatchTimeRecorder_UpdateSecondaryProperties_ParamsSpec,
      null,
      [secondary_properties],
      false);
  }

  setAutoplayInitiated(value) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.WatchTimeRecorder_SetAutoplayInitiated_ParamsSpec,
      null,
      [value],
      false);
  }

  onDurationChanged(duration) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.WatchTimeRecorder_OnDurationChanged_ParamsSpec,
      null,
      [duration],
      false);
  }

  updateVideoDecodeStats(frames_decoded, frames_dropped) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      media.mojom.WatchTimeRecorder_UpdateVideoDecodeStats_ParamsSpec,
      null,
      [frames_decoded, frames_dropped],
      false);
  }

  updateUnderflowCount(total_count) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      media.mojom.WatchTimeRecorder_UpdateUnderflowCount_ParamsSpec,
      null,
      [total_count],
      false);
  }

  updateUnderflowDuration(total_completed_count, total_duration) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('WatchTimeRecorder', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(media.mojom.WatchTimeRecorder_RecordWatchTime_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.WatchTimeRecorder_FinalizeWatchTime_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.WatchTimeRecorder_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.WatchTimeRecorder_UpdateSecondaryProperties_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.WatchTimeRecorder_SetAutoplayInitiated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.WatchTimeRecorder_OnDurationChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.WatchTimeRecorder_UpdateVideoDecodeStats_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.WatchTimeRecorder_UpdateUnderflowCount_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.WatchTimeRecorder_UpdateUnderflowDuration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.WatchTimeRecorder_RecordWatchTime_ParamsSpec.$.structSpec);
          const result = this.impl.recordWatchTime(params.key, params.watch_time);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.WatchTimeRecorder_FinalizeWatchTime_ParamsSpec.$.structSpec);
          const result = this.impl.finalizeWatchTime(params.watch_time_keys);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.WatchTimeRecorder_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError(params.status);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.WatchTimeRecorder_UpdateSecondaryProperties_ParamsSpec.$.structSpec);
          const result = this.impl.updateSecondaryProperties(params.secondary_properties);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.WatchTimeRecorder_SetAutoplayInitiated_ParamsSpec.$.structSpec);
          const result = this.impl.setAutoplayInitiated(params.value);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.WatchTimeRecorder_OnDurationChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onDurationChanged(params.duration);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.WatchTimeRecorder_UpdateVideoDecodeStats_ParamsSpec.$.structSpec);
          const result = this.impl.updateVideoDecodeStats(params.frames_decoded, params.frames_dropped);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.WatchTimeRecorder_UpdateUnderflowCount_ParamsSpec.$.structSpec);
          const result = this.impl.updateUnderflowCount(params.total_count);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.WatchTimeRecorder_UpdateUnderflowDuration_ParamsSpec.$.structSpec);
          const result = this.impl.updateUnderflowDuration(params.total_completed_count, params.total_duration);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.WatchTimeRecorderReceiver = media.mojom.WatchTimeRecorderReceiver;

media.mojom.WatchTimeRecorderPtr = media.mojom.WatchTimeRecorderRemote;
media.mojom.WatchTimeRecorderRequest = media.mojom.WatchTimeRecorderPendingReceiver;

