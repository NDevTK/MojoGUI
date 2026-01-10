// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mediasession/media_session.mojom
// Module: blink.mojom

'use strict';

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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: DidReceiveAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaSessionClient_DidReceiveAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidReceiveAction (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
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
          const params = decoder.decodeStruct(blink.mojom.MediaSessionClient_DidReceiveAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didReceiveAction');
          const result = this.impl.didReceiveAction(params.action, params.details);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.MediaSessionClientReceiver = blink.mojom.MediaSessionClientReceiver;

blink.mojom.MediaSessionClientPtr = blink.mojom.MediaSessionClientRemote;
blink.mojom.MediaSessionClientRequest = blink.mojom.MediaSessionClientPendingReceiver;


// Interface: MediaSessionService
mojo.internal.Struct(
    blink.mojom.MediaSessionService_SetClient_ParamsSpec, 'blink.mojom.MediaSessionService_SetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.MediaSessionClientSpec), null, false, 0, undefined),
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
      [client],
      false);
  }

  setPlaybackState(state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.MediaSessionService_SetPlaybackState_ParamsSpec,
      null,
      [state],
      false);
  }

  setPositionState(position) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.MediaSessionService_SetPositionState_ParamsSpec,
      null,
      [position],
      false);
  }

  setMetadata(metadata) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.MediaSessionService_SetMetadata_ParamsSpec,
      null,
      [metadata],
      false);
  }

  setMicrophoneState(microphone_state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.MediaSessionService_SetMicrophoneState_ParamsSpec,
      null,
      [microphone_state],
      false);
  }

  setCameraState(camera_state) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.MediaSessionService_SetCameraState_ParamsSpec,
      null,
      [camera_state],
      false);
  }

  enableAction(action) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.MediaSessionService_EnableAction_ParamsSpec,
      null,
      [action],
      false);
  }

  disableAction(action) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
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
        
        // Try Method 0: SetClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaSessionService_SetClient_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetPlaybackState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaSessionService_SetPlaybackState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPlaybackState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetPositionState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaSessionService_SetPositionState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPositionState (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaSessionService_SetMetadata_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMetadata (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetMicrophoneState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaSessionService_SetMicrophoneState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMicrophoneState (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetCameraState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaSessionService_SetCameraState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCameraState (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: EnableAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaSessionService_EnableAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableAction (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: DisableAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaSessionService_DisableAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableAction (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
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
          const params = decoder.decodeStruct(blink.mojom.MediaSessionService_SetClient_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setClient');
          const result = this.impl.setClient(params.client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaSessionService_SetPlaybackState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPlaybackState');
          const result = this.impl.setPlaybackState(params.state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaSessionService_SetPositionState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPositionState');
          const result = this.impl.setPositionState(params.position);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaSessionService_SetMetadata_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setMetadata');
          const result = this.impl.setMetadata(params.metadata);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaSessionService_SetMicrophoneState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setMicrophoneState');
          const result = this.impl.setMicrophoneState(params.microphone_state);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaSessionService_SetCameraState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCameraState');
          const result = this.impl.setCameraState(params.camera_state);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaSessionService_EnableAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enableAction');
          const result = this.impl.enableAction(params.action);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaSessionService_DisableAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.disableAction');
          const result = this.impl.disableAction(params.action);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.MediaSessionServiceReceiver = blink.mojom.MediaSessionServiceReceiver;

blink.mojom.MediaSessionServicePtr = blink.mojom.MediaSessionServiceRemote;
blink.mojom.MediaSessionServiceRequest = blink.mojom.MediaSessionServicePendingReceiver;

