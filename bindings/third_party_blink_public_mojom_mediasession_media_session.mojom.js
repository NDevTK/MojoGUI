// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mediasession/media_session.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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

// Interface: MediaSessionClient
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
      blink.mojom.MediaSessionClient_DidReceiveAction_ParamsSpec.$,
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
}};

// ParamsSpec for DidReceiveAction
blink.mojom.MediaSessionClient_DidReceiveAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionClient.DidReceiveAction_Params',
      packedSize: 24,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'details', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
blink.mojom.MediaSessionClientPtr = blink.mojom.MediaSessionClientRemote;
blink.mojom.MediaSessionClientRequest = blink.mojom.MediaSessionClientPendingReceiver;


// Interface: MediaSessionService
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
      blink.mojom.MediaSessionService_SetClient_ParamsSpec.$,
      null,
      [client]);
  }

  setPlaybackState(state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.MediaSessionService_SetPlaybackState_ParamsSpec.$,
      null,
      [state]);
  }

  setPositionState(position) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.MediaSessionService_SetPositionState_ParamsSpec.$,
      null,
      [position]);
  }

  setMetadata(metadata) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.MediaSessionService_SetMetadata_ParamsSpec.$,
      null,
      [metadata]);
  }

  setMicrophoneState(microphone_state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.MediaSessionService_SetMicrophoneState_ParamsSpec.$,
      null,
      [microphone_state]);
  }

  setCameraState(camera_state) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.MediaSessionService_SetCameraState_ParamsSpec.$,
      null,
      [camera_state]);
  }

  enableAction(action) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.MediaSessionService_EnableAction_ParamsSpec.$,
      null,
      [action]);
  }

  disableAction(action) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.MediaSessionService_DisableAction_ParamsSpec.$,
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
}};

// ParamsSpec for SetClient
blink.mojom.MediaSessionService_SetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionService.SetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetPlaybackState
blink.mojom.MediaSessionService_SetPlaybackState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionService.SetPlaybackState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetPositionState
blink.mojom.MediaSessionService_SetPositionState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionService.SetPositionState_Params',
      packedSize: 16,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetMetadata
blink.mojom.MediaSessionService_SetMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionService.SetMetadata_Params',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetMicrophoneState
blink.mojom.MediaSessionService_SetMicrophoneState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionService.SetMicrophoneState_Params',
      packedSize: 16,
      fields: [
        { name: 'microphone_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetCameraState
blink.mojom.MediaSessionService_SetCameraState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionService.SetCameraState_Params',
      packedSize: 16,
      fields: [
        { name: 'camera_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for EnableAction
blink.mojom.MediaSessionService_EnableAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionService.EnableAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for DisableAction
blink.mojom.MediaSessionService_DisableAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaSessionService.DisableAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
blink.mojom.MediaSessionServicePtr = blink.mojom.MediaSessionServiceRemote;
blink.mojom.MediaSessionServiceRequest = blink.mojom.MediaSessionServicePendingReceiver;

