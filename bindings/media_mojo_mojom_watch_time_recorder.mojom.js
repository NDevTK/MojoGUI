// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/watch_time_recorder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: PlaybackProperties
media.mojom.PlaybackPropertiesSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PlaybackProperties',
      packedSize: 24,
      fields: [
        { name: 'has_audio', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_video', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_background', packedOffset: 12, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_muted', packedOffset: 12, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_eme', packedOffset: 12, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_embedded_media_experience', packedOffset: 12, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'media_stream_type', packedOffset: 0, packedBitOffset: 0, type: media.mojom.MediaStreamTypeSpec, nullable: false, minVersion: 0 },
        { name: 'renderer_type', packedOffset: 4, packedBitOffset: 0, type: media.mojom.RendererTypeSpec, nullable: false, minVersion: 0 },
        { name: 'demuxer_type', packedOffset: 8, packedBitOffset: 0, type: media.mojom.DemuxerTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SecondaryPlaybackProperties
media.mojom.SecondaryPlaybackPropertiesSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SecondaryPlaybackProperties',
      packedSize: 80,
      fields: [
        { name: 'audio_codec', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioCodecSpec, nullable: false, minVersion: 0 },
        { name: 'video_codec', packedOffset: 8, packedBitOffset: 0, type: media.mojom.VideoCodecSpec, nullable: false, minVersion: 0 },
        { name: 'audio_codec_profile', packedOffset: 16, packedBitOffset: 0, type: media.mojom.AudioCodecProfileSpec, nullable: false, minVersion: 0 },
        { name: 'video_codec_profile', packedOffset: 24, packedBitOffset: 0, type: media.mojom.VideoCodecProfileSpec, nullable: false, minVersion: 0 },
        { name: 'audio_decoder', packedOffset: 32, packedBitOffset: 0, type: media.mojom.AudioDecoderTypeSpec, nullable: false, minVersion: 0 },
        { name: 'video_decoder', packedOffset: 40, packedBitOffset: 0, type: media.mojom.VideoDecoderTypeSpec, nullable: false, minVersion: 0 },
        { name: 'audio_encryption_scheme', packedOffset: 48, packedBitOffset: 0, type: media.mojom.EncryptionSchemeSpec, nullable: false, minVersion: 0 },
        { name: 'video_encryption_scheme', packedOffset: 56, packedBitOffset: 0, type: media.mojom.EncryptionSchemeSpec, nullable: false, minVersion: 0 },
        { name: 'natural_size', packedOffset: 64, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Interface: WatchTimeRecorder
media.mojom.WatchTimeRecorder = {};

media.mojom.WatchTimeRecorder_RecordWatchTime_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WatchTimeRecorder_RecordWatchTime_Params',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: media.mojom.WatchTimeKeySpec, nullable: false, minVersion: 0 },
        { name: 'watch_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.WatchTimeRecorder_FinalizeWatchTime_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WatchTimeRecorder_FinalizeWatchTime_Params',
      packedSize: 16,
      fields: [
        { name: 'watch_time_keys', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.WatchTimeKeySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.WatchTimeRecorder_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WatchTimeRecorder_OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: media.mojom.PipelineStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.WatchTimeRecorder_UpdateSecondaryProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WatchTimeRecorder_UpdateSecondaryProperties_Params',
      packedSize: 16,
      fields: [
        { name: 'secondary_properties', packedOffset: 0, packedBitOffset: 0, type: media.mojom.SecondaryPlaybackPropertiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.WatchTimeRecorder_SetAutoplayInitiated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WatchTimeRecorder_SetAutoplayInitiated_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.WatchTimeRecorder_OnDurationChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WatchTimeRecorder_OnDurationChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.WatchTimeRecorder_UpdateVideoDecodeStats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WatchTimeRecorder_UpdateVideoDecodeStats_Params',
      packedSize: 16,
      fields: [
        { name: 'frames_decoded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'frames_dropped', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.WatchTimeRecorder_UpdateUnderflowCount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WatchTimeRecorder_UpdateUnderflowCount_Params',
      packedSize: 16,
      fields: [
        { name: 'total_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.WatchTimeRecorder_UpdateUnderflowDuration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WatchTimeRecorder_UpdateUnderflowDuration_Params',
      packedSize: 24,
      fields: [
        { name: 'total_completed_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'total_duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [key, watch_time]);
  }

  finalizeWatchTime(watch_time_keys) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.WatchTimeRecorder_FinalizeWatchTime_ParamsSpec,
      null,
      [watch_time_keys]);
  }

  onError(status) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.WatchTimeRecorder_OnError_ParamsSpec,
      null,
      [status]);
  }

  updateSecondaryProperties(secondary_properties) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.WatchTimeRecorder_UpdateSecondaryProperties_ParamsSpec,
      null,
      [secondary_properties]);
  }

  setAutoplayInitiated(value) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.WatchTimeRecorder_SetAutoplayInitiated_ParamsSpec,
      null,
      [value]);
  }

  onDurationChanged(duration) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.WatchTimeRecorder_OnDurationChanged_ParamsSpec,
      null,
      [duration]);
  }

  updateVideoDecodeStats(frames_decoded, frames_dropped) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.WatchTimeRecorder_UpdateVideoDecodeStats_ParamsSpec,
      null,
      [frames_decoded, frames_dropped]);
  }

  updateUnderflowCount(total_count) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.WatchTimeRecorder_UpdateUnderflowCount_ParamsSpec,
      null,
      [total_count]);
  }

  updateUnderflowDuration(total_completed_count, total_duration) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.WatchTimeRecorder_UpdateUnderflowDuration_ParamsSpec,
      null,
      [total_completed_count, total_duration]);
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

// ParamsSpec for RecordWatchTime
media.mojom.WatchTimeRecorder_RecordWatchTime_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WatchTimeRecorder.RecordWatchTime_Params',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: media.mojom.WatchTimeKeySpec, nullable: false, minVersion: 0 },
        { name: 'watch_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for FinalizeWatchTime
media.mojom.WatchTimeRecorder_FinalizeWatchTime_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WatchTimeRecorder.FinalizeWatchTime_Params',
      packedSize: 16,
      fields: [
        { name: 'watch_time_keys', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.WatchTimeKeySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnError
media.mojom.WatchTimeRecorder_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WatchTimeRecorder.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: media.mojom.PipelineStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateSecondaryProperties
media.mojom.WatchTimeRecorder_UpdateSecondaryProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WatchTimeRecorder.UpdateSecondaryProperties_Params',
      packedSize: 16,
      fields: [
        { name: 'secondary_properties', packedOffset: 0, packedBitOffset: 0, type: media.mojom.SecondaryPlaybackPropertiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAutoplayInitiated
media.mojom.WatchTimeRecorder_SetAutoplayInitiated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WatchTimeRecorder.SetAutoplayInitiated_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDurationChanged
media.mojom.WatchTimeRecorder_OnDurationChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WatchTimeRecorder.OnDurationChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateVideoDecodeStats
media.mojom.WatchTimeRecorder_UpdateVideoDecodeStats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WatchTimeRecorder.UpdateVideoDecodeStats_Params',
      packedSize: 16,
      fields: [
        { name: 'frames_decoded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'frames_dropped', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateUnderflowCount
media.mojom.WatchTimeRecorder_UpdateUnderflowCount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WatchTimeRecorder.UpdateUnderflowCount_Params',
      packedSize: 16,
      fields: [
        { name: 'total_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateUnderflowDuration
media.mojom.WatchTimeRecorder_UpdateUnderflowDuration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WatchTimeRecorder.UpdateUnderflowDuration_Params',
      packedSize: 24,
      fields: [
        { name: 'total_completed_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'total_duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
media.mojom.WatchTimeRecorderPtr = media.mojom.WatchTimeRecorderRemote;
media.mojom.WatchTimeRecorderRequest = media.mojom.WatchTimeRecorderPendingReceiver;

