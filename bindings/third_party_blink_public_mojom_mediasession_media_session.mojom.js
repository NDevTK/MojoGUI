// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mediasession/media_session.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};

blink.mojom.MediaSessionPlaybackStateSpec = { $: mojo.internal.Enum() };
blink.mojom.MediaSessionEnterPictureInPictureReasonSpec = { $: mojo.internal.Enum() };
blink.mojom.MediaSessionActionDetailsSpec = { $: {} };
blink.mojom.MediaSessionSeekToDetailsSpec = { $: {} };
blink.mojom.MediaSessionEnterPictureInPictureDetailsSpec = { $: {} };
blink.mojom.SpecMediaMetadataSpec = { $: {} };
blink.mojom.MediaSessionClient = {};
blink.mojom.MediaSessionClient.$interfaceName = 'blink.mojom.MediaSessionClient';
blink.mojom.MediaSessionClient_DidReceiveAction_ParamsSpec = { $: {} };
blink.mojom.MediaSessionService = {};
blink.mojom.MediaSessionService.$interfaceName = 'blink.mojom.MediaSessionService';
blink.mojom.MediaSessionService_SetClient_ParamsSpec = { $: {} };
blink.mojom.MediaSessionService_SetPlaybackState_ParamsSpec = { $: {} };
blink.mojom.MediaSessionService_SetPositionState_ParamsSpec = { $: {} };
blink.mojom.MediaSessionService_SetMetadata_ParamsSpec = { $: {} };
blink.mojom.MediaSessionService_SetMicrophoneState_ParamsSpec = { $: {} };
blink.mojom.MediaSessionService_SetCameraState_ParamsSpec = { $: {} };
blink.mojom.MediaSessionService_EnableAction_ParamsSpec = { $: {} };
blink.mojom.MediaSessionService_DisableAction_ParamsSpec = { $: {} };

// Enum: MediaSessionPlaybackState
blink.mojom.MediaSessionPlaybackState = {
  NONE: 0,
  PAUSED: 1,
  PLAYING: 2,
};

// Enum: MediaSessionEnterPictureInPictureReason
blink.mojom.MediaSessionEnterPictureInPictureReason = {
  kOther: 0,
  kUserAction: 1,
  kContentOccluded: 2,
};

// Union: MediaSessionActionDetails
mojo.internal.Union(
    blink.mojom.MediaSessionActionDetailsSpec, 'blink.mojom.MediaSessionActionDetails', {
      'seek_to': {
        'ordinal': 0,
        'type': blink.mojom.MediaSessionSeekToDetailsSpec,
        'nullable': false,
      },
      'enter_picture_in_picture': {
        'ordinal': 1,
        'type': blink.mojom.MediaSessionEnterPictureInPictureDetailsSpec,
        'nullable': false,
      },
    });

// Struct: MediaSessionSeekToDetails
mojo.internal.Struct(
    blink.mojom.MediaSessionSeekToDetailsSpec, 'blink.mojom.MediaSessionSeekToDetails', [
      mojo.internal.StructField('seek_time', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('fast_seek', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MediaSessionEnterPictureInPictureDetails
mojo.internal.Struct(
    blink.mojom.MediaSessionEnterPictureInPictureDetailsSpec, 'blink.mojom.MediaSessionEnterPictureInPictureDetails', [
      mojo.internal.StructField('reason', 0, 0, blink.mojom.MediaSessionEnterPictureInPictureReasonSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SpecMediaMetadata
mojo.internal.Struct(
    blink.mojom.SpecMediaMetadataSpec, 'blink.mojom.SpecMediaMetadata', [
      mojo.internal.StructField('title', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('artist', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('album', 16, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('artwork', 24, 0, mojo.internal.Array(media_session.mojom.MediaImageSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('chapterInfo', 32, 0, mojo.internal.Array(media_session.mojom.ChapterInformationSpec, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: MediaSessionClient
mojo.internal.Struct(
    blink.mojom.MediaSessionClient_DidReceiveAction_ParamsSpec, 'blink.mojom.MediaSessionClient_DidReceiveAction_Params', [
      mojo.internal.StructField('action', 0, 0, media_session.mojom.MediaSessionActionSpec, null, false, 0, undefined),
      mojo.internal.StructField('details', 8, 0, blink.mojom.MediaSessionActionDetailsSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

blink.mojom.MediaSessionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.MediaSessionClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MediaSessionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.MediaSessionClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.MediaSessionClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.MediaSessionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didReceiveAction(action, details) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.MediaSessionClient_DidReceiveAction_ParamsSpec,
      null,
      [action, details]);
  }

};

blink.mojom.MediaSessionClient.getRemote = function() {
  let remote = new blink.mojom.MediaSessionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MediaSessionClient',
    'context');
  return remote.$;
};

blink.mojom.MediaSessionClientPtr = blink.mojom.MediaSessionClientRemote;
blink.mojom.MediaSessionClientRequest = blink.mojom.MediaSessionClientPendingReceiver;


// Interface: MediaSessionService
mojo.internal.Struct(
    blink.mojom.MediaSessionService_SetClient_ParamsSpec, 'blink.mojom.MediaSessionService_SetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.MediaSessionClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaSessionService_SetPlaybackState_ParamsSpec, 'blink.mojom.MediaSessionService_SetPlaybackState_Params', [
      mojo.internal.StructField('state', 0, 0, blink.mojom.MediaSessionPlaybackStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaSessionService_SetPositionState_ParamsSpec, 'blink.mojom.MediaSessionService_SetPositionState_Params', [
      mojo.internal.StructField('position', 0, 0, media_session.mojom.MediaPositionSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaSessionService_SetMetadata_ParamsSpec, 'blink.mojom.MediaSessionService_SetMetadata_Params', [
      mojo.internal.StructField('metadata', 0, 0, blink.mojom.SpecMediaMetadataSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaSessionService_SetMicrophoneState_ParamsSpec, 'blink.mojom.MediaSessionService_SetMicrophoneState_Params', [
      mojo.internal.StructField('microphone_state', 0, 0, media_session.mojom.MicrophoneStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaSessionService_SetCameraState_ParamsSpec, 'blink.mojom.MediaSessionService_SetCameraState_Params', [
      mojo.internal.StructField('camera_state', 0, 0, media_session.mojom.CameraStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaSessionService_EnableAction_ParamsSpec, 'blink.mojom.MediaSessionService_EnableAction_Params', [
      mojo.internal.StructField('action', 0, 0, media_session.mojom.MediaSessionActionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaSessionService_DisableAction_ParamsSpec, 'blink.mojom.MediaSessionService_DisableAction_Params', [
      mojo.internal.StructField('action', 0, 0, media_session.mojom.MediaSessionActionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.MediaSessionServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.MediaSessionServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MediaSessionService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.MediaSessionServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.MediaSessionServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.MediaSessionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.MediaSessionService_SetClient_ParamsSpec,
      null,
      [client]);
  }

  setPlaybackState(state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.MediaSessionService_SetPlaybackState_ParamsSpec,
      null,
      [state]);
  }

  setPositionState(position) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.MediaSessionService_SetPositionState_ParamsSpec,
      null,
      [position]);
  }

  setMetadata(metadata) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.MediaSessionService_SetMetadata_ParamsSpec,
      null,
      [metadata]);
  }

  setMicrophoneState(microphone_state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.MediaSessionService_SetMicrophoneState_ParamsSpec,
      null,
      [microphone_state]);
  }

  setCameraState(camera_state) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.MediaSessionService_SetCameraState_ParamsSpec,
      null,
      [camera_state]);
  }

  enableAction(action) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.MediaSessionService_EnableAction_ParamsSpec,
      null,
      [action]);
  }

  disableAction(action) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.MediaSessionService_DisableAction_ParamsSpec,
      null,
      [action]);
  }

};

blink.mojom.MediaSessionService.getRemote = function() {
  let remote = new blink.mojom.MediaSessionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MediaSessionService',
    'context');
  return remote.$;
};

blink.mojom.MediaSessionServicePtr = blink.mojom.MediaSessionServiceRemote;
blink.mojom.MediaSessionServiceRequest = blink.mojom.MediaSessionServicePendingReceiver;

