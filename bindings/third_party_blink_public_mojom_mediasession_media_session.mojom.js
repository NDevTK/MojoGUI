// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mediasession/media_session.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var media_session = media_session || {};

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
        'type': blink.mojom.MediaSessionSeekToDetailsSpec.$,
        'nullable': false,
      },
      'enter_picture_in_picture': {
        'ordinal': 1,
        'type': blink.mojom.MediaSessionEnterPictureInPictureDetailsSpec.$,
        'nullable': false,
      },
    });

// Struct: MediaSessionSeekToDetails
mojo.internal.Struct(
    blink.mojom.MediaSessionSeekToDetailsSpec, 'blink.mojom.MediaSessionSeekToDetails', [
      mojo.internal.StructField('seek_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fast_seek', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MediaSessionEnterPictureInPictureDetails
mojo.internal.Struct(
    blink.mojom.MediaSessionEnterPictureInPictureDetailsSpec, 'blink.mojom.MediaSessionEnterPictureInPictureDetails', [
      mojo.internal.StructField('reason', 0, 0, blink.mojom.MediaSessionEnterPictureInPictureReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SpecMediaMetadata
mojo.internal.Struct(
    blink.mojom.SpecMediaMetadataSpec, 'blink.mojom.SpecMediaMetadata', [
      mojo.internal.StructField('title', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('artist', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('album', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('artwork', 24, 0, mojo.internal.Array(media_session.mojom.MediaImageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('chapterInfo', 32, 0, mojo.internal.Array(media_session.mojom.ChapterInformationSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: MediaSessionClient
mojo.internal.Struct(
    blink.mojom.MediaSessionClient_DidReceiveAction_ParamsSpec, 'blink.mojom.MediaSessionClient_DidReceiveAction_Params', [
      mojo.internal.StructField('action', 0, 0, media_session.mojom.MediaSessionActionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('details', 8, 0, blink.mojom.MediaSessionActionDetailsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

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
  didReceiveAction(action, details) {
    return this.$.didReceiveAction(action, details);
  }
};

blink.mojom.MediaSessionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaSessionClient', [
      { explicit: null },
    ]);
  }

  didReceiveAction(action, details) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.MediaSessionClient_DidReceiveAction_ParamsSpec,
      null,
      [action, details],
      false);
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

blink.mojom.MediaSessionClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaSessionClient', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaSessionClient_DidReceiveAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MediaSessionClient_DidReceiveAction_ParamsSpec.$.structSpec);
          const result = this.impl.didReceiveAction(params.action, params.details);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.MediaSessionClientReceiver = blink.mojom.MediaSessionClientReceiver;

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
      mojo.internal.StructField('state', 0, 0, blink.mojom.MediaSessionPlaybackStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaSessionService_SetPositionState_ParamsSpec, 'blink.mojom.MediaSessionService_SetPositionState_Params', [
      mojo.internal.StructField('position', 0, 0, media_session.mojom.MediaPositionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaSessionService_SetMetadata_ParamsSpec, 'blink.mojom.MediaSessionService_SetMetadata_Params', [
      mojo.internal.StructField('metadata', 0, 0, blink.mojom.SpecMediaMetadataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaSessionService_SetMicrophoneState_ParamsSpec, 'blink.mojom.MediaSessionService_SetMicrophoneState_Params', [
      mojo.internal.StructField('microphone_state', 0, 0, media_session.mojom.MicrophoneStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaSessionService_SetCameraState_ParamsSpec, 'blink.mojom.MediaSessionService_SetCameraState_Params', [
      mojo.internal.StructField('camera_state', 0, 0, media_session.mojom.CameraStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaSessionService_EnableAction_ParamsSpec, 'blink.mojom.MediaSessionService_EnableAction_Params', [
      mojo.internal.StructField('action', 0, 0, media_session.mojom.MediaSessionActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaSessionService_DisableAction_ParamsSpec, 'blink.mojom.MediaSessionService_DisableAction_Params', [
      mojo.internal.StructField('action', 0, 0, media_session.mojom.MediaSessionActionSpec.$, null, false, 0, undefined),
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
  setClient(client) {
    return this.$.setClient(client);
  }
  setPlaybackState(state) {
    return this.$.setPlaybackState(state);
  }
  setPositionState(position) {
    return this.$.setPositionState(position);
  }
  setMetadata(metadata) {
    return this.$.setMetadata(metadata);
  }
  setMicrophoneState(microphone_state) {
    return this.$.setMicrophoneState(microphone_state);
  }
  setCameraState(camera_state) {
    return this.$.setCameraState(camera_state);
  }
  enableAction(action) {
    return this.$.enableAction(action);
  }
  disableAction(action) {
    return this.$.disableAction(action);
  }
};

blink.mojom.MediaSessionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaSessionService', [
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

  setClient(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.MediaSessionService_SetClient_ParamsSpec,
      null,
      [client],
      false);
  }

  setPlaybackState(state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.MediaSessionService_SetPlaybackState_ParamsSpec,
      null,
      [state],
      false);
  }

  setPositionState(position) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.MediaSessionService_SetPositionState_ParamsSpec,
      null,
      [position],
      false);
  }

  setMetadata(metadata) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.MediaSessionService_SetMetadata_ParamsSpec,
      null,
      [metadata],
      false);
  }

  setMicrophoneState(microphone_state) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.MediaSessionService_SetMicrophoneState_ParamsSpec,
      null,
      [microphone_state],
      false);
  }

  setCameraState(camera_state) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.MediaSessionService_SetCameraState_ParamsSpec,
      null,
      [camera_state],
      false);
  }

  enableAction(action) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.MediaSessionService_EnableAction_ParamsSpec,
      null,
      [action],
      false);
  }

  disableAction(action) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.MediaSessionService_DisableAction_ParamsSpec,
      null,
      [action],
      false);
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

blink.mojom.MediaSessionServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaSessionService', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaSessionService_SetClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaSessionService_SetPlaybackState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaSessionService_SetPositionState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaSessionService_SetMetadata_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaSessionService_SetMicrophoneState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaSessionService_SetCameraState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaSessionService_EnableAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaSessionService_DisableAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MediaSessionService_SetClient_ParamsSpec.$.structSpec);
          const result = this.impl.setClient(params.client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MediaSessionService_SetPlaybackState_ParamsSpec.$.structSpec);
          const result = this.impl.setPlaybackState(params.state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MediaSessionService_SetPositionState_ParamsSpec.$.structSpec);
          const result = this.impl.setPositionState(params.position);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MediaSessionService_SetMetadata_ParamsSpec.$.structSpec);
          const result = this.impl.setMetadata(params.metadata);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MediaSessionService_SetMicrophoneState_ParamsSpec.$.structSpec);
          const result = this.impl.setMicrophoneState(params.microphone_state);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MediaSessionService_SetCameraState_ParamsSpec.$.structSpec);
          const result = this.impl.setCameraState(params.camera_state);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MediaSessionService_EnableAction_ParamsSpec.$.structSpec);
          const result = this.impl.enableAction(params.action);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MediaSessionService_DisableAction_ParamsSpec.$.structSpec);
          const result = this.impl.disableAction(params.action);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.MediaSessionServiceReceiver = blink.mojom.MediaSessionServiceReceiver;

blink.mojom.MediaSessionServicePtr = blink.mojom.MediaSessionServiceRemote;
blink.mojom.MediaSessionServiceRequest = blink.mojom.MediaSessionServicePendingReceiver;

