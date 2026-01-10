// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mediasession/media_session.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: MediaSessionPlaybackState
blink.mojom.mojom.MediaSessionPlaybackState = {
  NONE: 0,
  PAUSED: 1,
  PLAYING: 2,
};
blink.mojom.mojom.MediaSessionPlaybackStateSpec = { $: mojo.internal.Enum() };

// Enum: MediaSessionEnterPictureInPictureReason
blink.mojom.mojom.MediaSessionEnterPictureInPictureReason = {
  kOther: 0,
  kUserAction: 1,
  kContentOccluded: 2,
};
blink.mojom.mojom.MediaSessionEnterPictureInPictureReasonSpec = { $: mojo.internal.Enum() };

// Union: MediaSessionActionDetails
blink.mojom.mojom.MediaSessionActionDetailsSpec = { $: mojo.internal.Union(
    'blink.mojom.MediaSessionActionDetails', {
      'seek_to': {
        'ordinal': 0,
        'type': blink.mojom.MediaSessionSeekToDetailsSpec,
      }},
      'enter_picture_in_picture': {
        'ordinal': 1,
        'type': blink.mojom.MediaSessionEnterPictureInPictureDetailsSpec,
      }},
    })
};

// Struct: MediaSessionSeekToDetails
blink.mojom.mojom.MediaSessionSeekToDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionSeekToDetails',
      packedSize: 24,
      fields: [
        { name: 'seek_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'fast_seek', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: MediaSessionEnterPictureInPictureDetails
blink.mojom.mojom.MediaSessionEnterPictureInPictureDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionEnterPictureInPictureDetails',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.MediaSessionEnterPictureInPictureReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SpecMediaMetadata
blink.mojom.mojom.SpecMediaMetadataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpecMediaMetadata',
      packedSize: 48,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'artist', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'album', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'artwork', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(media_session.mojom.MediaImageSpec, false), nullable: false, minVersion: 0 },
        { name: 'chapterInfo', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(media_session.mojom.ChapterInformationSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: MediaSessionClient
blink.mojom.mojom.MediaSessionClient = {};

blink.mojom.mojom.MediaSessionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.MediaSessionClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MediaSessionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.MediaSessionClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.MediaSessionClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.MediaSessionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didReceiveAction(action, details) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.MediaSessionClient_DidReceiveAction_ParamsSpec,
      null,
      [action, details]);
  }

};

blink.mojom.mojom.MediaSessionClient.getRemote = function() {
  let remote = new blink.mojom.mojom.MediaSessionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MediaSessionClient',
    'context');
  return remote.$;
};

// ParamsSpec for DidReceiveAction
blink.mojom.mojom.MediaSessionClient_DidReceiveAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionClient.DidReceiveAction_Params',
      packedSize: 32,
      fields: [
        { name: 'action', packedOffset: 16, packedBitOffset: 0, type: media_session.mojom.MediaSessionActionSpec, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.MediaSessionActionDetailsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.MediaSessionClientPtr = blink.mojom.mojom.MediaSessionClientRemote;
blink.mojom.mojom.MediaSessionClientRequest = blink.mojom.mojom.MediaSessionClientPendingReceiver;


// Interface: MediaSessionService
blink.mojom.mojom.MediaSessionService = {};

blink.mojom.mojom.MediaSessionServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.MediaSessionServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MediaSessionService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.MediaSessionServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.MediaSessionServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.MediaSessionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.MediaSessionService_SetClient_ParamsSpec,
      null,
      [client]);
  }

  setPlaybackState(state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.MediaSessionService_SetPlaybackState_ParamsSpec,
      null,
      [state]);
  }

  setPositionState(position) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.MediaSessionService_SetPositionState_ParamsSpec,
      null,
      [position]);
  }

  setMetadata(metadata) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.MediaSessionService_SetMetadata_ParamsSpec,
      null,
      [metadata]);
  }

  setMicrophoneState(microphone_state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.MediaSessionService_SetMicrophoneState_ParamsSpec,
      null,
      [microphone_state]);
  }

  setCameraState(camera_state) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.mojom.MediaSessionService_SetCameraState_ParamsSpec,
      null,
      [camera_state]);
  }

  enableAction(action) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.mojom.MediaSessionService_EnableAction_ParamsSpec,
      null,
      [action]);
  }

  disableAction(action) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.mojom.MediaSessionService_DisableAction_ParamsSpec,
      null,
      [action]);
  }

};

blink.mojom.mojom.MediaSessionService.getRemote = function() {
  let remote = new blink.mojom.mojom.MediaSessionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MediaSessionService',
    'context');
  return remote.$;
};

// ParamsSpec for SetClient
blink.mojom.mojom.MediaSessionService_SetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionService.SetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.MediaSessionClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPlaybackState
blink.mojom.mojom.MediaSessionService_SetPlaybackState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionService.SetPlaybackState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.MediaSessionPlaybackStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPositionState
blink.mojom.mojom.MediaSessionService_SetPositionState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionService.SetPositionState_Params',
      packedSize: 16,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaPositionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetMetadata
blink.mojom.mojom.MediaSessionService_SetMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionService.SetMetadata_Params',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SpecMediaMetadataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetMicrophoneState
blink.mojom.mojom.MediaSessionService_SetMicrophoneState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionService.SetMicrophoneState_Params',
      packedSize: 16,
      fields: [
        { name: 'microphone_state', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MicrophoneStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCameraState
blink.mojom.mojom.MediaSessionService_SetCameraState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionService.SetCameraState_Params',
      packedSize: 16,
      fields: [
        { name: 'camera_state', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.CameraStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnableAction
blink.mojom.mojom.MediaSessionService_EnableAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionService.EnableAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaSessionActionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisableAction
blink.mojom.mojom.MediaSessionService_DisableAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionService.DisableAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaSessionActionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.MediaSessionServicePtr = blink.mojom.mojom.MediaSessionServiceRemote;
blink.mojom.mojom.MediaSessionServiceRequest = blink.mojom.mojom.MediaSessionServicePendingReceiver;

