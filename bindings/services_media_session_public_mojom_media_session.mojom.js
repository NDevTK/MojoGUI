// Auto-generated MojoJS binding
// Source: chromium_src/services/media_session/public/mojom/media_session.mojom
// Module: media_session.mojom

'use strict';

// Module namespace
var media_session = media_session || {};
media_session.mojom = media_session.mojom || {};


// Enum: MediaPlaybackState
media_session.mojom.MediaPlaybackState = {
  kPaused: 0,
  kPlaying: 1,
};

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

// Enum: MediaSessionImageType
media_session.mojom.MediaSessionImageType = {
  kArtwork: 0,
  kSourceIcon: 1,
};

// Enum: MediaPictureInPictureState
media_session.mojom.MediaPictureInPictureState = {
  kNotInPictureInPicture: 0,
  kInPictureInPicture: 1,
};

// Enum: MediaAudioVideoState
media_session.mojom.MediaAudioVideoState = {
  kDeprecatedUnknown: 0,
  kAudioOnly: 1,
  kAudioVideo: 2,
};

// Enum: MediaImageBitmapColorType
media_session.mojom.MediaImageBitmapColorType = {
  kRGBA_8888: 0,
  kBGRA_8888: 1,
};

// Enum: MicrophoneState
media_session.mojom.MicrophoneState = {
  kMuted: 0,
  kUnmuted: 1,
};

// Enum: CameraState
media_session.mojom.CameraState = {
  kTurnedOn: 0,
  kTurnedOff: 1,
};

// Enum: SessionState
media_session.mojom.SessionState = {
  kActive: 0,
  kDucking: 1,
  kSuspended: 2,
  kInactive: 3,
};

// Enum: SuspendType
media_session.mojom.SuspendType = {
  kSystem: 0,
  kUI: 1,
  kContent: 2,
};

// Struct: MediaImage
media_session.mojom.MediaImageSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaImage',
      packedSize: 32,
      fields: [
        { name: 'src', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'sizes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'startTime', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'artwork', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MediaMetadata
media_session.mojom.MediaMetadataSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaMetadata',
      packedSize: 40,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'artist', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'album', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'source_title', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MediaImageBitmap
media_session.mojom.MediaImageBitmapSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaImageBitmap',
      packedSize: 24,
      fields: [
        { name: 'pixel_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'height', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MediaPosition
media_session.mojom.MediaPositionSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaPosition',
      packedSize: 40,
      fields: [
        { name: 'playback_rate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'duration', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'position', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'last_updated_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RemotePlaybackMetadata
media_session.mojom.RemotePlaybackMetadataSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.RemotePlaybackMetadata',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
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
        { name: 'kActive', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'owner', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'state', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: MediaSessionObserver
media_session.mojom.MediaSessionObserver = {};

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

// Legacy compatibility
media_session.mojom.MediaSessionObserverPtr = media_session.mojom.MediaSessionObserverRemote;
media_session.mojom.MediaSessionObserverRequest = media_session.mojom.MediaSessionObserverPendingReceiver;


// Interface: MediaSession
media_session.mojom.MediaSession = {};

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

// Legacy compatibility
media_session.mojom.MediaSessionPtr = media_session.mojom.MediaSessionRemote;
media_session.mojom.MediaSessionRequest = media_session.mojom.MediaSessionPendingReceiver;

