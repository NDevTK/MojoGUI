// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/cros_camera_service.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};
var chromeos_camera = chromeos_camera || {};
var mojo_base = mojo_base || {};

cros.mojom.CameraClientTypeSpec = { $: mojo.internal.Enum() };
cros.mojom.CameraPrivacySwitchStateSpec = { $: mojo.internal.Enum() };
cros.mojom.CameraAutoFramingStateSpec = { $: mojo.internal.Enum() };
cros.mojom.KioskVisionErrorSpec = { $: mojo.internal.Enum() };
cros.mojom.KioskVisionDetectionSpec = { $: {} };
cros.mojom.KioskVisionTrackSpec = { $: {} };
cros.mojom.KioskVisionAppearanceSpec = { $: {} };
cros.mojom.KioskVisionFaceDetectionSpec = { $: {} };
cros.mojom.KioskVisionBodyDetectionSpec = { $: {} };
cros.mojom.KioskVisionBoundingBoxSpec = { $: {} };
cros.mojom.KioskVisionObserver = {};
cros.mojom.KioskVisionObserver.$interfaceName = 'cros.mojom.KioskVisionObserver';
cros.mojom.KioskVisionObserver_OnFrameProcessed_ParamsSpec = { $: {} };
cros.mojom.KioskVisionObserver_OnTrackCompleted_ParamsSpec = { $: {} };
cros.mojom.KioskVisionObserver_OnError_ParamsSpec = { $: {} };
cros.mojom.CameraHalDispatcher = {};
cros.mojom.CameraHalDispatcher.$interfaceName = 'cros.mojom.CameraHalDispatcher';
cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ParamsSpec = { $: {} };
cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ResponseParamsSpec = { $: {} };
cros.mojom.CrosCameraServiceObserver = {};
cros.mojom.CrosCameraServiceObserver.$interfaceName = 'cros.mojom.CrosCameraServiceObserver';
cros.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_ParamsSpec = { $: {} };
cros.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_ParamsSpec = { $: {} };
cros.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_ParamsSpec = { $: {} };
cros.mojom.CrosCameraServiceObserver_CameraEffectChange_ParamsSpec = { $: {} };
cros.mojom.CrosCameraServiceObserver_AutoFramingStateChange_ParamsSpec = { $: {} };
cros.mojom.CrosCameraService = {};
cros.mojom.CrosCameraService.$interfaceName = 'cros.mojom.CrosCameraService';
cros.mojom.CrosCameraService_GetCameraModule_ParamsSpec = { $: {} };
cros.mojom.CrosCameraService_GetCameraModule_ResponseParamsSpec = { $: {} };
cros.mojom.CrosCameraService_SetTracingEnabled_ParamsSpec = { $: {} };
cros.mojom.CrosCameraService_SetAutoFramingState_ParamsSpec = { $: {} };
cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ParamsSpec = { $: {} };
cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ResponseParamsSpec = { $: {} };
cros.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_ParamsSpec = { $: {} };
cros.mojom.CrosCameraService_GetAutoFramingSupported_ParamsSpec = { $: {} };
cros.mojom.CrosCameraService_GetAutoFramingSupported_ResponseParamsSpec = { $: {} };
cros.mojom.CrosCameraService_SetCameraEffect_ParamsSpec = { $: {} };
cros.mojom.CrosCameraService_SetCameraEffect_ResponseParamsSpec = { $: {} };
cros.mojom.CrosCameraService_AddCrosCameraServiceObserver_ParamsSpec = { $: {} };
cros.mojom.CrosCameraService_StartKioskVisionDetection_ParamsSpec = { $: {} };

// Enum: CameraClientType
cros.mojom.CameraClientType = {
  UNKNOWN: 0,
  TESTING: 1,
  CHROME: 2,
  ANDROID: 3,
  PLUGINVM: 4,
  ASH_CHROME: 5,
};

// Enum: CameraPrivacySwitchState
cros.mojom.CameraPrivacySwitchState = {
  UNKNOWN: 0,
  ON: 1,
  OFF: 2,
};

// Enum: CameraAutoFramingState
cros.mojom.CameraAutoFramingState = {
  OFF: 0,
  ON_SINGLE: 1,
  ON_MULTI: 2,
};

// Enum: KioskVisionError
cros.mojom.KioskVisionError = {
  UNKNOWN: 0,
  DLC_ERROR: 1,
  MODEL_ERROR: 2,
};

// Struct: KioskVisionDetection
mojo.internal.Struct(
    cros.mojom.KioskVisionDetectionSpec, 'cros.mojom.KioskVisionDetection', [
      mojo.internal.StructField('timestamp_in_us', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('appearances', 8, 0, mojo.internal.Array(cros.mojom.KioskVisionAppearanceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KioskVisionTrack
mojo.internal.Struct(
    cros.mojom.KioskVisionTrackSpec, 'cros.mojom.KioskVisionTrack', [
      mojo.internal.StructField('start_timestamp_in_us', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('end_timestamp_in_us', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('appearances', 16, 0, mojo.internal.Array(cros.mojom.KioskVisionAppearanceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('person_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: KioskVisionAppearance
mojo.internal.Struct(
    cros.mojom.KioskVisionAppearanceSpec, 'cros.mojom.KioskVisionAppearance', [
      mojo.internal.StructField('timestamp_in_us', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('face', 8, 0, cros.mojom.KioskVisionFaceDetectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('body', 16, 0, cros.mojom.KioskVisionBodyDetectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('person_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: KioskVisionFaceDetection
mojo.internal.Struct(
    cros.mojom.KioskVisionFaceDetectionSpec, 'cros.mojom.KioskVisionFaceDetection', [
      mojo.internal.StructField('confidence', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('box', 8, 0, cros.mojom.KioskVisionBoundingBoxSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('roll', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('pan', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('tilt', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: KioskVisionBodyDetection
mojo.internal.Struct(
    cros.mojom.KioskVisionBodyDetectionSpec, 'cros.mojom.KioskVisionBodyDetection', [
      mojo.internal.StructField('confidence', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('box', 8, 0, cros.mojom.KioskVisionBoundingBoxSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KioskVisionBoundingBox
mojo.internal.Struct(
    cros.mojom.KioskVisionBoundingBoxSpec, 'cros.mojom.KioskVisionBoundingBox', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('width', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: KioskVisionObserver
mojo.internal.Struct(
    cros.mojom.KioskVisionObserver_OnFrameProcessed_ParamsSpec, 'cros.mojom.KioskVisionObserver_OnFrameProcessed_Params', [
      mojo.internal.StructField('detection', 0, 0, cros.mojom.KioskVisionDetectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.KioskVisionObserver_OnTrackCompleted_ParamsSpec, 'cros.mojom.KioskVisionObserver_OnTrackCompleted_Params', [
      mojo.internal.StructField('track', 0, 0, cros.mojom.KioskVisionTrackSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.KioskVisionObserver_OnError_ParamsSpec, 'cros.mojom.KioskVisionObserver_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, cros.mojom.KioskVisionErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.KioskVisionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.KioskVisionObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.KioskVisionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.KioskVisionObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.KioskVisionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.KioskVisionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFrameProcessed(detection) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.KioskVisionObserver_OnFrameProcessed_ParamsSpec,
      null,
      [detection],
      false);
  }

  onTrackCompleted(track) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.KioskVisionObserver_OnTrackCompleted_ParamsSpec,
      null,
      [track],
      false);
  }

  onError(error) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.KioskVisionObserver_OnError_ParamsSpec,
      null,
      [error],
      false);
  }

};

cros.mojom.KioskVisionObserver.getRemote = function() {
  let remote = new cros.mojom.KioskVisionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.KioskVisionObserver',
    'context');
  return remote.$;
};

cros.mojom.KioskVisionObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: OnFrameProcessed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.KioskVisionObserver_OnFrameProcessed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameProcessed (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnTrackCompleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.KioskVisionObserver_OnTrackCompleted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTrackCompleted (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.KioskVisionObserver_OnError_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStruct(cros.mojom.KioskVisionObserver_OnFrameProcessed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFrameProcessed');
          const result = this.impl.onFrameProcessed(params.detection);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.KioskVisionObserver_OnTrackCompleted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTrackCompleted');
          const result = this.impl.onTrackCompleted(params.track);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.KioskVisionObserver_OnError_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.KioskVisionObserverReceiver = cros.mojom.KioskVisionObserverReceiver;

cros.mojom.KioskVisionObserverPtr = cros.mojom.KioskVisionObserverRemote;
cros.mojom.KioskVisionObserverRequest = cros.mojom.KioskVisionObserverPendingReceiver;


// Interface: CameraHalDispatcher
mojo.internal.Struct(
    cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ParamsSpec, 'cros.mojom.CameraHalDispatcher_RegisterClientWithToken_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.CameraHalClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, cros.mojom.CameraClientTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('auth_token', 16, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ResponseParamsSpec, 'cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.CameraHalDispatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraHalDispatcherRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraHalDispatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraHalDispatcherPendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraHalDispatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CameraHalDispatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerClientWithToken(client, type, auth_token) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ParamsSpec,
      cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ResponseParamsSpec,
      [client, type, auth_token],
      false);
  }

};

cros.mojom.CameraHalDispatcher.getRemote = function() {
  let remote = new cros.mojom.CameraHalDispatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraHalDispatcher',
    'context');
  return remote.$;
};

cros.mojom.CameraHalDispatcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(5, 0); // Default ordinal 5 -> Index 0
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
        
        // Try Method 0: RegisterClientWithToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterClientWithToken (0)');
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
          const params = decoder.decodeStruct(cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.registerClientWithToken');
          const result = this.impl.registerClientWithToken(params.client, params.type, params.auth_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.CameraHalDispatcherReceiver = cros.mojom.CameraHalDispatcherReceiver;

cros.mojom.CameraHalDispatcherPtr = cros.mojom.CameraHalDispatcherRemote;
cros.mojom.CameraHalDispatcherRequest = cros.mojom.CameraHalDispatcherPendingReceiver;


// Interface: CrosCameraServiceObserver
mojo.internal.Struct(
    cros.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_ParamsSpec, 'cros.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_Params', [
      mojo.internal.StructField('type', 0, 0, cros.mojom.CameraClientTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('camera_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('opened', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_ParamsSpec, 'cros.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_Params', [
      mojo.internal.StructField('state', 0, 0, cros.mojom.CameraPrivacySwitchStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('camera_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_ParamsSpec, 'cros.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_Params', [
      mojo.internal.StructField('state', 0, 0, cros.mojom.CameraPrivacySwitchStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraServiceObserver_CameraEffectChange_ParamsSpec, 'cros.mojom.CrosCameraServiceObserver_CameraEffectChange_Params', [
      mojo.internal.StructField('config', 0, 0, cros.mojom.EffectsConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraServiceObserver_AutoFramingStateChange_ParamsSpec, 'cros.mojom.CrosCameraServiceObserver_AutoFramingStateChange_Params', [
      mojo.internal.StructField('state', 0, 0, cros.mojom.CameraAutoFramingStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.CrosCameraServiceObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CrosCameraServiceObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosCameraServiceObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CrosCameraServiceObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.CrosCameraServiceObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CrosCameraServiceObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  cameraDeviceActivityChange(camera_id, opened, type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_ParamsSpec,
      null,
      [camera_id, opened, type],
      false);
  }

  cameraPrivacySwitchStateChange(state, camera_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_ParamsSpec,
      null,
      [state, camera_id],
      false);
  }

  cameraSWPrivacySwitchStateChange(state) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_ParamsSpec,
      null,
      [state],
      false);
  }

  cameraEffectChange(config) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.CrosCameraServiceObserver_CameraEffectChange_ParamsSpec,
      null,
      [config],
      false);
  }

  autoFramingStateChange(state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      cros.mojom.CrosCameraServiceObserver_AutoFramingStateChange_ParamsSpec,
      null,
      [state],
      false);
  }

};

cros.mojom.CrosCameraServiceObserver.getRemote = function() {
  let remote = new cros.mojom.CrosCameraServiceObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosCameraServiceObserver',
    'context');
  return remote.$;
};

cros.mojom.CrosCameraServiceObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
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
        
        // Try Method 0: CameraDeviceActivityChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CameraDeviceActivityChange (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CameraPrivacySwitchStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CameraPrivacySwitchStateChange (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CameraSWPrivacySwitchStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CameraSWPrivacySwitchStateChange (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CameraEffectChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CrosCameraServiceObserver_CameraEffectChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CameraEffectChange (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: AutoFramingStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CrosCameraServiceObserver_AutoFramingStateChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AutoFramingStateChange (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStruct(cros.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cameraDeviceActivityChange');
          const result = this.impl.cameraDeviceActivityChange(params.camera_id, params.opened, params.type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cameraPrivacySwitchStateChange');
          const result = this.impl.cameraPrivacySwitchStateChange(params.state, params.camera_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cameraSWPrivacySwitchStateChange');
          const result = this.impl.cameraSWPrivacySwitchStateChange(params.state);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CrosCameraServiceObserver_CameraEffectChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cameraEffectChange');
          const result = this.impl.cameraEffectChange(params.config);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CrosCameraServiceObserver_AutoFramingStateChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.autoFramingStateChange');
          const result = this.impl.autoFramingStateChange(params.state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.CrosCameraServiceObserverReceiver = cros.mojom.CrosCameraServiceObserverReceiver;

cros.mojom.CrosCameraServiceObserverPtr = cros.mojom.CrosCameraServiceObserverRemote;
cros.mojom.CrosCameraServiceObserverRequest = cros.mojom.CrosCameraServiceObserverPendingReceiver;


// Interface: CrosCameraService
mojo.internal.Struct(
    cros.mojom.CrosCameraService_GetCameraModule_ParamsSpec, 'cros.mojom.CrosCameraService_GetCameraModule_Params', [
      mojo.internal.StructField('type', 0, 0, cros.mojom.CameraClientTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_GetCameraModule_ResponseParamsSpec, 'cros.mojom.CrosCameraService_GetCameraModule_ResponseParams', [
      mojo.internal.StructField('camera_module_receiver', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.CameraModuleRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_SetTracingEnabled_ParamsSpec, 'cros.mojom.CrosCameraService_SetTracingEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_SetAutoFramingState_ParamsSpec, 'cros.mojom.CrosCameraService_SetAutoFramingState_Params', [
      mojo.internal.StructField('state', 0, 0, cros.mojom.CameraAutoFramingStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ParamsSpec, 'cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ResponseParamsSpec, 'cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, cros.mojom.CameraPrivacySwitchStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_ParamsSpec, 'cros.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_Params', [
      mojo.internal.StructField('state', 0, 0, cros.mojom.CameraPrivacySwitchStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_GetAutoFramingSupported_ParamsSpec, 'cros.mojom.CrosCameraService_GetAutoFramingSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_GetAutoFramingSupported_ResponseParamsSpec, 'cros.mojom.CrosCameraService_GetAutoFramingSupported_ResponseParams', [
      mojo.internal.StructField('supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_SetCameraEffect_ParamsSpec, 'cros.mojom.CrosCameraService_SetCameraEffect_Params', [
      mojo.internal.StructField('config', 0, 0, cros.mojom.EffectsConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_SetCameraEffect_ResponseParamsSpec, 'cros.mojom.CrosCameraService_SetCameraEffect_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, cros.mojom.SetEffectResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_AddCrosCameraServiceObserver_ParamsSpec, 'cros.mojom.CrosCameraService_AddCrosCameraServiceObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.CrosCameraServiceObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_StartKioskVisionDetection_ParamsSpec, 'cros.mojom.CrosCameraService_StartKioskVisionDetection_Params', [
      mojo.internal.StructField('dlc_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(cros.mojom.KioskVisionObserverSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

cros.mojom.CrosCameraServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CrosCameraServiceRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosCameraService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CrosCameraServicePendingReceiver,
      handle);
    this.$ = new cros.mojom.CrosCameraServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CrosCameraServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getCameraModule(type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CrosCameraService_GetCameraModule_ParamsSpec,
      cros.mojom.CrosCameraService_GetCameraModule_ResponseParamsSpec,
      [type],
      false);
  }

  setTracingEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.CrosCameraService_SetTracingEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setAutoFramingState(state) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.CrosCameraService_SetAutoFramingState_ParamsSpec,
      null,
      [state],
      false);
  }

  getCameraSWPrivacySwitchState() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ParamsSpec,
      cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ResponseParamsSpec,
      [],
      false);
  }

  setCameraSWPrivacySwitchState(state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      cros.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_ParamsSpec,
      null,
      [state],
      false);
  }

  getAutoFramingSupported() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      cros.mojom.CrosCameraService_GetAutoFramingSupported_ParamsSpec,
      cros.mojom.CrosCameraService_GetAutoFramingSupported_ResponseParamsSpec,
      [],
      false);
  }

  setCameraEffect(config) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      cros.mojom.CrosCameraService_SetCameraEffect_ParamsSpec,
      cros.mojom.CrosCameraService_SetCameraEffect_ResponseParamsSpec,
      [config],
      false);
  }

  addCrosCameraServiceObserver(observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      cros.mojom.CrosCameraService_AddCrosCameraServiceObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  startKioskVisionDetection(dlc_path, observer) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      cros.mojom.CrosCameraService_StartKioskVisionDetection_ParamsSpec,
      null,
      [dlc_path, observer],
      false);
  }

};

cros.mojom.CrosCameraService.getRemote = function() {
  let remote = new cros.mojom.CrosCameraServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosCameraService',
    'context');
  return remote.$;
};

cros.mojom.CrosCameraServiceReceiver = class {
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
        
        // Try Method 0: GetCameraModule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CrosCameraService_GetCameraModule_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCameraModule (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetTracingEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CrosCameraService_SetTracingEnabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTracingEnabled (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetAutoFramingState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CrosCameraService_SetAutoFramingState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAutoFramingState (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetCameraSWPrivacySwitchState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCameraSWPrivacySwitchState (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetCameraSWPrivacySwitchState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCameraSWPrivacySwitchState (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetAutoFramingSupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CrosCameraService_GetAutoFramingSupported_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAutoFramingSupported (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetCameraEffect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CrosCameraService_SetCameraEffect_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCameraEffect (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: AddCrosCameraServiceObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CrosCameraService_AddCrosCameraServiceObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddCrosCameraServiceObserver (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: StartKioskVisionDetection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CrosCameraService_StartKioskVisionDetection_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartKioskVisionDetection (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStruct(cros.mojom.CrosCameraService_GetCameraModule_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getCameraModule');
          const result = this.impl.getCameraModule(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CrosCameraService_GetCameraModule_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CrosCameraService_SetTracingEnabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTracingEnabled');
          const result = this.impl.setTracingEnabled(params.enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CrosCameraService_SetAutoFramingState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setAutoFramingState');
          const result = this.impl.setAutoFramingState(params.state);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getCameraSWPrivacySwitchState');
          const result = this.impl.getCameraSWPrivacySwitchState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCameraSWPrivacySwitchState');
          const result = this.impl.setCameraSWPrivacySwitchState(params.state);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CrosCameraService_GetAutoFramingSupported_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAutoFramingSupported');
          const result = this.impl.getAutoFramingSupported();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CrosCameraService_GetAutoFramingSupported_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CrosCameraService_SetCameraEffect_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCameraEffect');
          const result = this.impl.setCameraEffect(params.config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CrosCameraService_SetCameraEffect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CrosCameraService_AddCrosCameraServiceObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addCrosCameraServiceObserver');
          const result = this.impl.addCrosCameraServiceObserver(params.observer);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CrosCameraService_StartKioskVisionDetection_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startKioskVisionDetection');
          const result = this.impl.startKioskVisionDetection(params.dlc_path, params.observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.CrosCameraServiceReceiver = cros.mojom.CrosCameraServiceReceiver;

cros.mojom.CrosCameraServicePtr = cros.mojom.CrosCameraServiceRemote;
cros.mojom.CrosCameraServiceRequest = cros.mojom.CrosCameraServicePendingReceiver;

