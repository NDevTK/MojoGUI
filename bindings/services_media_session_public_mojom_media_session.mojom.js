// Auto-generated MojoJS binding
// Source: chromium_src/services/media_session/public/mojom/media_session.mojom
// Module: media_session.mojom

'use strict';

// Module namespace
var media_session = media_session || {};
media_session.mojom = media_session.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};


// Enum: MediaPlaybackState
media_session.mojom.MediaPlaybackState = {
  kPaused: 0,
  kPlaying: 1,
};
media_session.mojom.MediaPlaybackStateSpec = { $: mojo.internal.Enum() };

// Enum: MediaSessionAction
media_session.mojom.MediaSessionAction = {
  kPlay: 0,
  kPause: 1,
  kPreviousTrack: 2,
  kNextTrack: 3,
  kSeekBackward: 4,
  kSeekForward: 5,
  kSkipAd: 6,
  kStop: 7,
  kSeekTo: 8,
  kScrubTo: 9,
  kEnterPictureInPicture: 10,
  kExitPictureInPicture: 11,
  kSwitchAudioDevice: 12,
};
media_session.mojom.MediaSessionActionSpec = { $: mojo.internal.Enum() };

// Enum: MediaSessionImageType
media_session.mojom.MediaSessionImageType = {
  kArtwork: 0,
  kSourceIcon: 1,
};
media_session.mojom.MediaSessionImageTypeSpec = { $: mojo.internal.Enum() };

// Enum: MediaPictureInPictureState
media_session.mojom.MediaPictureInPictureState = {
  kNotInPictureInPicture: 0,
  kInPictureInPicture: 1,
};
media_session.mojom.MediaPictureInPictureStateSpec = { $: mojo.internal.Enum() };

// Enum: MediaAudioVideoState
media_session.mojom.MediaAudioVideoState = {
  kDeprecatedUnknown: 0,
  kAudioOnly: 1,
  kAudioVideo: 2,
};
media_session.mojom.MediaAudioVideoStateSpec = { $: mojo.internal.Enum() };

// Enum: MediaImageBitmapColorType
media_session.mojom.MediaImageBitmapColorType = {
  kRGBA_8888: 0,
  kBGRA_8888: 1,
};
media_session.mojom.MediaImageBitmapColorTypeSpec = { $: mojo.internal.Enum() };

// Enum: MicrophoneState
media_session.mojom.MicrophoneState = {
  kMuted: 0,
  kUnmuted: 1,
};
media_session.mojom.MicrophoneStateSpec = { $: mojo.internal.Enum() };

// Enum: CameraState
media_session.mojom.CameraState = {
  kTurnedOn: 0,
  kTurnedOff: 1,
};
media_session.mojom.CameraStateSpec = { $: mojo.internal.Enum() };

// Enum: SessionState
media_session.mojom.SessionState = {
  kActive: 0,
  kDucking: 1,
  kSuspended: 2,
  kInactive: 3,
};
media_session.mojom.SessionStateSpec = { $: mojo.internal.Enum() };

// Enum: SuspendType
media_session.mojom.SuspendType = {
  kSystem: 0,
  kUI: 1,
  kContent: 2,
};
media_session.mojom.SuspendTypeSpec = { $: mojo.internal.Enum() };

// Struct: MediaImage
media_session.mojom.MediaImageSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaImage',
      packedSize: 32,
      fields: [
        { name: 'src', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'sizes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.SizeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ChapterInformation
media_session.mojom.ChapterInformationSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.ChapterInformation',
      packedSize: 32,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'startTime', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'artwork', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(media_session.mojom.MediaImageSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: MediaMetadata
media_session.mojom.MediaMetadataSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaMetadata',
      packedSize: 48,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'artist', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'album', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'source_title', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'chapters', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(media_session.mojom.ChapterInformationSpec, false), nullable: true, minVersion: 21 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 21, packedSize: 48}]
    }
  }
};

// Struct: MediaImageBitmap
media_session.mojom.MediaImageBitmapSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaImageBitmap',
      packedSize: 32,
      fields: [
        { name: 'width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'pixel_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'color_type', packedOffset: 16, packedBitOffset: 0, type: media_session.mojom.MediaImageBitmapColorTypeSpec, nullable: false, minVersion: 5 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 5, packedSize: 32}]
    }
  }
};

// Struct: MediaPosition
media_session.mojom.MediaPositionSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaPosition',
      packedSize: 48,
      fields: [
        { name: 'playback_rate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'duration', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'position', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'last_updated_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'end_of_media', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 13 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 13, packedSize: 48}]
    }
  }
};

// Struct: RemotePlaybackMetadata
media_session.mojom.RemotePlaybackMetadataSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.RemotePlaybackMetadata',
      packedSize: 40,
      fields: [
        { name: 'video_codec', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'audio_codec', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'remote_playback_disabled', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'remote_playback_started', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 17 },
        { name: 'unused_field', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 17 },
        { name: 'is_encrypted_media', packedOffset: 16, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 18 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 17, packedSize: 40}, {version: 18, packedSize: 40}]
    }
  }
};

// Struct: MediaSessionInfo
media_session.mojom.MediaSessionInfoSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSessionInfo',
      packedSize: 16,
      fields: [
        { name: 'kActive', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: MediaSessionDebugInfo
media_session.mojom.MediaSessionDebugInfoSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSessionDebugInfo',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'owner', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: MediaSessionObserver
media_session.mojom.MediaSessionObserver = {};

media_session.mojom.MediaSessionObserver_MediaSessionInfoChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSessionObserver_MediaSessionInfoChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaSessionInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaSessionObserver_MediaSessionMetadataChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSessionObserver_MediaSessionMetadataChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaMetadataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaSessionObserver_MediaSessionActionsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSessionObserver_MediaSessionActionsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media_session.mojom.MediaSessionActionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaSessionObserver_MediaSessionImagesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSessionObserver_MediaSessionImagesChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'images', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(media_session.mojom.MediaSessionImageTypeSpec, mojo.internal.Array(media_session.mojom.MediaImageSpec, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaSessionObserver_MediaSessionPositionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSessionObserver_MediaSessionPositionChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaPositionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaSessionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_session.mojom.MediaSessionObserverRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaSessionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_session.mojom.MediaSessionObserverPendingReceiver,
      handle);
    this.$ = new media_session.mojom.MediaSessionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_session.mojom.MediaSessionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  mediaSessionInfoChanged(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_session.mojom.MediaSessionObserver_MediaSessionInfoChanged_ParamsSpec,
      null,
      [info]);
  }

  mediaSessionMetadataChanged(metadata) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_session.mojom.MediaSessionObserver_MediaSessionMetadataChanged_ParamsSpec,
      null,
      [metadata]);
  }

  mediaSessionActionsChanged(action) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_session.mojom.MediaSessionObserver_MediaSessionActionsChanged_ParamsSpec,
      null,
      [action]);
  }

  mediaSessionImagesChanged(images) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media_session.mojom.MediaSessionObserver_MediaSessionImagesChanged_ParamsSpec,
      null,
      [images]);
  }

  mediaSessionPositionChanged(position) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media_session.mojom.MediaSessionObserver_MediaSessionPositionChanged_ParamsSpec,
      null,
      [position]);
  }

};

media_session.mojom.MediaSessionObserver.getRemote = function() {
  let remote = new media_session.mojom.MediaSessionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaSessionObserver',
    'context');
  return remote.$;
};

// ParamsSpec for MediaSessionInfoChanged
media_session.mojom.MediaSessionObserver_MediaSessionInfoChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSessionObserver.MediaSessionInfoChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaSessionInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MediaSessionMetadataChanged
media_session.mojom.MediaSessionObserver_MediaSessionMetadataChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSessionObserver.MediaSessionMetadataChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaMetadataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MediaSessionActionsChanged
media_session.mojom.MediaSessionObserver_MediaSessionActionsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSessionObserver.MediaSessionActionsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media_session.mojom.MediaSessionActionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MediaSessionImagesChanged
media_session.mojom.MediaSessionObserver_MediaSessionImagesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSessionObserver.MediaSessionImagesChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'images', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(media_session.mojom.MediaSessionImageTypeSpec, mojo.internal.Array(media_session.mojom.MediaImageSpec, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MediaSessionPositionChanged
media_session.mojom.MediaSessionObserver_MediaSessionPositionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSessionObserver.MediaSessionPositionChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaPositionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media_session.mojom.MediaSessionObserverPtr = media_session.mojom.MediaSessionObserverRemote;
media_session.mojom.MediaSessionObserverRequest = media_session.mojom.MediaSessionObserverPendingReceiver;


// Interface: MediaSession
media_session.mojom.MediaSession = {};

media_session.mojom.MediaSession_GetMediaSessionInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_GetMediaSessionInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_GetDebugInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_GetDebugInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_StartDucking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_StartDucking_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_StopDucking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_StopDucking_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_Suspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_Suspend_Params',
      packedSize: 16,
      fields: [
        { name: 'suspend_type', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.SuspendTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaSession_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_Resume_Params',
      packedSize: 16,
      fields: [
        { name: 'suspend_type', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.SuspendTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaSession_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media_session.mojom.MediaSessionObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaSession_PreviousTrack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_PreviousTrack_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_NextTrack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_NextTrack_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_Seek_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_Seek_Params',
      packedSize: 16,
      fields: [
        { name: 'seek_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaSession_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_Stop_Params',
      packedSize: 16,
      fields: [
        { name: 'suspend_type', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.SuspendTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaSession_SkipAd_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_SkipAd_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_GetMediaImageBitmap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_GetMediaImageBitmap_Params',
      packedSize: 24,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaImageSpec, nullable: false, minVersion: 0 },
        { name: 'minimum_size_px', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'desired_size_px', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media_session.mojom.MediaSession_SeekTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_SeekTo_Params',
      packedSize: 16,
      fields: [
        { name: 'seek_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaSession_ScrubTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_ScrubTo_Params',
      packedSize: 16,
      fields: [
        { name: 'seek_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaSession_EnterPictureInPicture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_EnterPictureInPicture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_ExitPictureInPicture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_ExitPictureInPicture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_SetAudioSinkId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_SetAudioSinkId_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaSession_ToggleMicrophone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_ToggleMicrophone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_ToggleCamera_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_ToggleCamera_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_HangUp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_HangUp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_Raise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_Raise_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_SetMute_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_SetMute_Params',
      packedSize: 16,
      fields: [
        { name: 'mute', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaSession_RequestMediaRemoting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_RequestMediaRemoting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_PreviousSlide_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_PreviousSlide_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_NextSlide_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_NextSlide_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_EnterAutoPictureInPicture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_EnterAutoPictureInPicture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_GetVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession_GetVisibility_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_session.mojom.MediaSessionRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_session.mojom.MediaSessionPendingReceiver,
      handle);
    this.$ = new media_session.mojom.MediaSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_session.mojom.MediaSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getMediaSessionInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_session.mojom.MediaSession_GetMediaSessionInfo_ParamsSpec,
      media_session.mojom.MediaSession_GetMediaSessionInfo_ResponseParamsSpec,
      []);
  }

  getDebugInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_session.mojom.MediaSession_GetDebugInfo_ParamsSpec,
      media_session.mojom.MediaSession_GetDebugInfo_ResponseParamsSpec,
      []);
  }

  startDucking() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_session.mojom.MediaSession_StartDucking_ParamsSpec,
      null,
      []);
  }

  stopDucking() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media_session.mojom.MediaSession_StopDucking_ParamsSpec,
      null,
      []);
  }

  suspend(suspend_type) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media_session.mojom.MediaSession_Suspend_ParamsSpec,
      null,
      [suspend_type]);
  }

  resume(suspend_type) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media_session.mojom.MediaSession_Resume_ParamsSpec,
      null,
      [suspend_type]);
  }

  addObserver(observer) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media_session.mojom.MediaSession_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  previousTrack() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media_session.mojom.MediaSession_PreviousTrack_ParamsSpec,
      null,
      []);
  }

  nextTrack() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media_session.mojom.MediaSession_NextTrack_ParamsSpec,
      null,
      []);
  }

  seek(seek_time) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media_session.mojom.MediaSession_Seek_ParamsSpec,
      null,
      [seek_time]);
  }

  stop(suspend_type) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      media_session.mojom.MediaSession_Stop_ParamsSpec,
      null,
      [suspend_type]);
  }

  skipAd() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      media_session.mojom.MediaSession_SkipAd_ParamsSpec,
      null,
      []);
  }

  getMediaImageBitmap(image, minimum_size_px, desired_size_px) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      media_session.mojom.MediaSession_GetMediaImageBitmap_ParamsSpec,
      media_session.mojom.MediaSession_GetMediaImageBitmap_ResponseParamsSpec,
      [image, minimum_size_px, desired_size_px]);
  }

  seekTo(seek_time) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      media_session.mojom.MediaSession_SeekTo_ParamsSpec,
      null,
      [seek_time]);
  }

  scrubTo(seek_time) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      media_session.mojom.MediaSession_ScrubTo_ParamsSpec,
      null,
      [seek_time]);
  }

  enterPictureInPicture() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      media_session.mojom.MediaSession_EnterPictureInPicture_ParamsSpec,
      null,
      []);
  }

  exitPictureInPicture() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      media_session.mojom.MediaSession_ExitPictureInPicture_ParamsSpec,
      null,
      []);
  }

  setAudioSinkId(id) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      media_session.mojom.MediaSession_SetAudioSinkId_ParamsSpec,
      null,
      [id]);
  }

  toggleMicrophone() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      media_session.mojom.MediaSession_ToggleMicrophone_ParamsSpec,
      null,
      []);
  }

  toggleCamera() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      media_session.mojom.MediaSession_ToggleCamera_ParamsSpec,
      null,
      []);
  }

  hangUp() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      media_session.mojom.MediaSession_HangUp_ParamsSpec,
      null,
      []);
  }

  raise() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      media_session.mojom.MediaSession_Raise_ParamsSpec,
      null,
      []);
  }

  setMute(mute) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      media_session.mojom.MediaSession_SetMute_ParamsSpec,
      null,
      [mute]);
  }

  requestMediaRemoting() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      media_session.mojom.MediaSession_RequestMediaRemoting_ParamsSpec,
      null,
      []);
  }

  previousSlide() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      media_session.mojom.MediaSession_PreviousSlide_ParamsSpec,
      null,
      []);
  }

  nextSlide() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      media_session.mojom.MediaSession_NextSlide_ParamsSpec,
      null,
      []);
  }

  enterAutoPictureInPicture() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      media_session.mojom.MediaSession_EnterAutoPictureInPicture_ParamsSpec,
      null,
      []);
  }

  getVisibility() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      media_session.mojom.MediaSession_GetVisibility_ParamsSpec,
      media_session.mojom.MediaSession_GetVisibility_ResponseParamsSpec,
      []);
  }

};

media_session.mojom.MediaSession.getRemote = function() {
  let remote = new media_session.mojom.MediaSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaSession',
    'context');
  return remote.$;
};

// ParamsSpec for GetMediaSessionInfo
media_session.mojom.MediaSession_GetMediaSessionInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.GetMediaSessionInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_GetMediaSessionInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.GetMediaSessionInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaSessionInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDebugInfo
media_session.mojom.MediaSession_GetDebugInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.GetDebugInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_GetDebugInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.GetDebugInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaSessionDebugInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartDucking
media_session.mojom.MediaSession_StartDucking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.StartDucking_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StopDucking
media_session.mojom.MediaSession_StopDucking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.StopDucking_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Suspend
media_session.mojom.MediaSession_Suspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.Suspend_Params',
      packedSize: 16,
      fields: [
        { name: 'suspend_type', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.SuspendTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Resume
media_session.mojom.MediaSession_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.Resume_Params',
      packedSize: 16,
      fields: [
        { name: 'suspend_type', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.SuspendTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddObserver
media_session.mojom.MediaSession_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media_session.mojom.MediaSessionObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PreviousTrack
media_session.mojom.MediaSession_PreviousTrack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.PreviousTrack_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for NextTrack
media_session.mojom.MediaSession_NextTrack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.NextTrack_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Seek
media_session.mojom.MediaSession_Seek_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.Seek_Params',
      packedSize: 16,
      fields: [
        { name: 'seek_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Stop
media_session.mojom.MediaSession_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.Stop_Params',
      packedSize: 16,
      fields: [
        { name: 'suspend_type', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.SuspendTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SkipAd
media_session.mojom.MediaSession_SkipAd_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.SkipAd_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetMediaImageBitmap
media_session.mojom.MediaSession_GetMediaImageBitmap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.GetMediaImageBitmap_Params',
      packedSize: 24,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaImageSpec, nullable: false, minVersion: 0 },
        { name: 'minimum_size_px', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'desired_size_px', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media_session.mojom.MediaSession_GetMediaImageBitmap_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.GetMediaImageBitmap_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaImageBitmapSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SeekTo
media_session.mojom.MediaSession_SeekTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.SeekTo_Params',
      packedSize: 16,
      fields: [
        { name: 'seek_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ScrubTo
media_session.mojom.MediaSession_ScrubTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.ScrubTo_Params',
      packedSize: 16,
      fields: [
        { name: 'seek_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnterPictureInPicture
media_session.mojom.MediaSession_EnterPictureInPicture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.EnterPictureInPicture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ExitPictureInPicture
media_session.mojom.MediaSession_ExitPictureInPicture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.ExitPictureInPicture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetAudioSinkId
media_session.mojom.MediaSession_SetAudioSinkId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.SetAudioSinkId_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ToggleMicrophone
media_session.mojom.MediaSession_ToggleMicrophone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.ToggleMicrophone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ToggleCamera
media_session.mojom.MediaSession_ToggleCamera_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.ToggleCamera_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for HangUp
media_session.mojom.MediaSession_HangUp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.HangUp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Raise
media_session.mojom.MediaSession_Raise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.Raise_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetMute
media_session.mojom.MediaSession_SetMute_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.SetMute_Params',
      packedSize: 16,
      fields: [
        { name: 'mute', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestMediaRemoting
media_session.mojom.MediaSession_RequestMediaRemoting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.RequestMediaRemoting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for PreviousSlide
media_session.mojom.MediaSession_PreviousSlide_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.PreviousSlide_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for NextSlide
media_session.mojom.MediaSession_NextSlide_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.NextSlide_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for EnterAutoPictureInPicture
media_session.mojom.MediaSession_EnterAutoPictureInPicture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.EnterAutoPictureInPicture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetVisibility
media_session.mojom.MediaSession_GetVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.GetVisibility_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaSession_GetVisibility_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaSession.GetVisibility_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_sufficiently_visible_video', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media_session.mojom.MediaSessionPtr = media_session.mojom.MediaSessionRemote;
media_session.mojom.MediaSessionRequest = media_session.mojom.MediaSessionPendingReceiver;

