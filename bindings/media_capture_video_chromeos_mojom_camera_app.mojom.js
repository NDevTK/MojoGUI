// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/camera_app.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};
var media = media || {};
var gfx = gfx || {};

cros.mojom.EffectSpec = { $: mojo.internal.Enum() };
cros.mojom.StreamTypeSpec = { $: mojo.internal.Enum() };
cros.mojom.GetCameraAppDeviceStatusSpec = { $: mojo.internal.Enum() };
cros.mojom.CaptureIntentSpec = { $: mojo.internal.Enum() };
cros.mojom.CameraAppDeviceProvider = {};
cros.mojom.CameraAppDeviceProvider.$interfaceName = 'cros.mojom.CameraAppDeviceProvider';
cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceProvider_IsSupported_ParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceProvider_IsSupported_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceBridge = {};
cros.mojom.CameraAppDeviceBridge.$interfaceName = 'cros.mojom.CameraAppDeviceBridge';
cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceBridge_IsSupported_ParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceBridge_IsSupported_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice = {};
cros.mojom.CameraAppDevice.$interfaceName = 'cros.mojom.CameraAppDevice';
cros.mojom.CameraAppDevice_TakePortraitModePhoto_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_TakePortraitModePhoto_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetFpsRange_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetFpsRange_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetStillCaptureResolution_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetStillCaptureResolution_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetCaptureIntent_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetCaptureIntent_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_AddResultMetadataObserver_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_AddResultMetadataObserver_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_AddCameraEventObserver_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_AddCameraEventObserver_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_GetCameraFrameRotation_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_GetCameraFrameRotation_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetCropRegion_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetCropRegion_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_ResetCropRegion_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_ResetCropRegion_ResponseParamsSpec = { $: {} };
cros.mojom.ResultMetadataObserver = {};
cros.mojom.ResultMetadataObserver.$interfaceName = 'cros.mojom.ResultMetadataObserver';
cros.mojom.ResultMetadataObserver_OnMetadataAvailable_ParamsSpec = { $: {} };
cros.mojom.CameraEventObserver = {};
cros.mojom.CameraEventObserver.$interfaceName = 'cros.mojom.CameraEventObserver';
cros.mojom.CameraEventObserver_OnShutterDone_ParamsSpec = { $: {} };
cros.mojom.DocumentCornersObserver = {};
cros.mojom.DocumentCornersObserver.$interfaceName = 'cros.mojom.DocumentCornersObserver';
cros.mojom.DocumentCornersObserver_OnDocumentCornersUpdated_ParamsSpec = { $: {} };
cros.mojom.CameraInfoObserver = {};
cros.mojom.CameraInfoObserver.$interfaceName = 'cros.mojom.CameraInfoObserver';
cros.mojom.CameraInfoObserver_OnCameraInfoUpdated_ParamsSpec = { $: {} };
cros.mojom.StillCaptureResultObserver = {};
cros.mojom.StillCaptureResultObserver.$interfaceName = 'cros.mojom.StillCaptureResultObserver';
cros.mojom.StillCaptureResultObserver_OnStillCaptureDone_ParamsSpec = { $: {} };

// Enum: Effect
cros.mojom.Effect = {
  kNoEffect: 0,
  kPortraitMode: 1,
};

// Enum: StreamType
cros.mojom.StreamType = {
  kPreviewOutput: 0,
  kJpegOutput: 1,
  kJpegPortraitOutput: 2,
  kRecordingOutput: 3,
  kUnknown: 4,
};

// Enum: GetCameraAppDeviceStatus
cros.mojom.GetCameraAppDeviceStatus = {
  kSuccess: 0,
  kErrorInvalidId: 1,
};

// Enum: CaptureIntent
cros.mojom.CaptureIntent = {
  kDefault: 0,
  kVideoRecord: 1,
  kStillCapture: 2,
  kPortraitCapture: 3,
};

// Interface: CameraAppDeviceProvider
mojo.internal.Struct(
    cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ParamsSpec, 'cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ResponseParamsSpec, 'cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, cros.mojom.GetCameraAppDeviceStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device', 8, 0, mojo.internal.InterfaceProxy(cros.mojom.CameraAppDeviceSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceProvider_IsSupported_ParamsSpec, 'cros.mojom.CameraAppDeviceProvider_IsSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceProvider_IsSupported_ResponseParamsSpec, 'cros.mojom.CameraAppDeviceProvider_IsSupported_ResponseParams', [
      mojo.internal.StructField('is_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ParamsSpec, 'cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ResponseParamsSpec, 'cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ResponseParams', [
      mojo.internal.StructField('in_use', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.CameraAppDeviceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraAppDeviceProviderRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraAppDeviceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraAppDeviceProviderPendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraAppDeviceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CameraAppDeviceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getCameraAppDevice(source_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ParamsSpec,
      cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ResponseParamsSpec,
      [source_id],
      false);
  }

  isSupported() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.CameraAppDeviceProvider_IsSupported_ParamsSpec,
      cros.mojom.CameraAppDeviceProvider_IsSupported_ResponseParamsSpec,
      [],
      false);
  }

  isDeviceInUse(source_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ParamsSpec,
      cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ResponseParamsSpec,
      [source_id],
      false);
  }

};

cros.mojom.CameraAppDeviceProvider.getRemote = function() {
  let remote = new cros.mojom.CameraAppDeviceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraAppDeviceProvider',
    'context');
  return remote.$;
};

cros.mojom.CameraAppDeviceProviderReceiver = class {
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
        
        // Try Method 0: GetCameraAppDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCameraAppDevice (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: IsSupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDeviceProvider_IsSupported_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsSupported (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: IsDeviceInUse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsDeviceInUse (2)');
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
          const params = decoder.decodeStruct(cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getCameraAppDevice');
          const result = this.impl.getCameraAppDevice(params.source_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CameraAppDeviceProvider_IsSupported_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isSupported');
          const result = this.impl.isSupported();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDeviceProvider_IsSupported_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isDeviceInUse');
          const result = this.impl.isDeviceInUse(params.source_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ResponseParamsSpec);
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

cros.mojom.CameraAppDeviceProviderReceiver = cros.mojom.CameraAppDeviceProviderReceiver;

cros.mojom.CameraAppDeviceProviderPtr = cros.mojom.CameraAppDeviceProviderRemote;
cros.mojom.CameraAppDeviceProviderRequest = cros.mojom.CameraAppDeviceProviderPendingReceiver;


// Interface: CameraAppDeviceBridge
mojo.internal.Struct(
    cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ParamsSpec, 'cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ResponseParamsSpec, 'cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, cros.mojom.GetCameraAppDeviceStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device', 8, 0, mojo.internal.InterfaceProxy(cros.mojom.CameraAppDeviceSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceBridge_IsSupported_ParamsSpec, 'cros.mojom.CameraAppDeviceBridge_IsSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceBridge_IsSupported_ResponseParamsSpec, 'cros.mojom.CameraAppDeviceBridge_IsSupported_ResponseParams', [
      mojo.internal.StructField('is_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ParamsSpec, 'cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ResponseParamsSpec, 'cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ParamsSpec, 'cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ResponseParamsSpec, 'cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ResponseParams', [
      mojo.internal.StructField('in_use', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.CameraAppDeviceBridgePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraAppDeviceBridgeRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraAppDeviceBridge';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraAppDeviceBridgePendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraAppDeviceBridgeRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CameraAppDeviceBridgeRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getCameraAppDevice(device_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ParamsSpec,
      cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ResponseParamsSpec,
      [device_id],
      false);
  }

  isSupported() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.CameraAppDeviceBridge_IsSupported_ParamsSpec,
      cros.mojom.CameraAppDeviceBridge_IsSupported_ResponseParamsSpec,
      [],
      false);
  }

  setVirtualDeviceEnabled(device_id, enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ParamsSpec,
      cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ResponseParamsSpec,
      [device_id, enabled],
      false);
  }

  isDeviceInUse(device_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ParamsSpec,
      cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ResponseParamsSpec,
      [device_id],
      false);
  }

};

cros.mojom.CameraAppDeviceBridge.getRemote = function() {
  let remote = new cros.mojom.CameraAppDeviceBridgeRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraAppDeviceBridge',
    'context');
  return remote.$;
};

cros.mojom.CameraAppDeviceBridgeReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: GetCameraAppDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCameraAppDevice (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: IsSupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDeviceBridge_IsSupported_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsSupported (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetVirtualDeviceEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVirtualDeviceEnabled (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: IsDeviceInUse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsDeviceInUse (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStruct(cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getCameraAppDevice');
          const result = this.impl.getCameraAppDevice(params.device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CameraAppDeviceBridge_IsSupported_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isSupported');
          const result = this.impl.isSupported();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDeviceBridge_IsSupported_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setVirtualDeviceEnabled');
          const result = this.impl.setVirtualDeviceEnabled(params.device_id, params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isDeviceInUse');
          const result = this.impl.isDeviceInUse(params.device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ResponseParamsSpec);
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

cros.mojom.CameraAppDeviceBridgeReceiver = cros.mojom.CameraAppDeviceBridgeReceiver;

cros.mojom.CameraAppDeviceBridgePtr = cros.mojom.CameraAppDeviceBridgeRemote;
cros.mojom.CameraAppDeviceBridgeRequest = cros.mojom.CameraAppDeviceBridgePendingReceiver;


// Interface: CameraAppDevice
mojo.internal.Struct(
    cros.mojom.CameraAppDevice_TakePortraitModePhoto_ParamsSpec, 'cros.mojom.CameraAppDevice_TakePortraitModePhoto_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.StillCaptureResultObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_TakePortraitModePhoto_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_TakePortraitModePhoto_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetFpsRange_ParamsSpec, 'cros.mojom.CameraAppDevice_SetFpsRange_Params', [
      mojo.internal.StructField('fps_range', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetFpsRange_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_SetFpsRange_ResponseParams', [
      mojo.internal.StructField('is_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetStillCaptureResolution_ParamsSpec, 'cros.mojom.CameraAppDevice_SetStillCaptureResolution_Params', [
      mojo.internal.StructField('resolution', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetStillCaptureResolution_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_SetStillCaptureResolution_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetCaptureIntent_ParamsSpec, 'cros.mojom.CameraAppDevice_SetCaptureIntent_Params', [
      mojo.internal.StructField('intent', 0, 0, cros.mojom.CaptureIntentSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetCaptureIntent_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_SetCaptureIntent_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_AddResultMetadataObserver_ParamsSpec, 'cros.mojom.CameraAppDevice_AddResultMetadataObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.ResultMetadataObserverSpec), null, false, 0, undefined),
      mojo.internal.StructField('stream_type', 8, 0, cros.mojom.StreamTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_AddResultMetadataObserver_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_AddResultMetadataObserver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_AddCameraEventObserver_ParamsSpec, 'cros.mojom.CameraAppDevice_AddCameraEventObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.CameraEventObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_AddCameraEventObserver_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_AddCameraEventObserver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ParamsSpec, 'cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_Params', [
      mojo.internal.StructField('is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ResponseParams', [
      mojo.internal.StructField('is_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_GetCameraFrameRotation_ParamsSpec, 'cros.mojom.CameraAppDevice_GetCameraFrameRotation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_GetCameraFrameRotation_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_GetCameraFrameRotation_ResponseParams', [
      mojo.internal.StructField('rotation', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ParamsSpec, 'cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.DocumentCornersObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ParamsSpec, 'cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ParamsSpec, 'cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.CameraInfoObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetCropRegion_ParamsSpec, 'cros.mojom.CameraAppDevice_SetCropRegion_Params', [
      mojo.internal.StructField('crop_region', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetCropRegion_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_SetCropRegion_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_ResetCropRegion_ParamsSpec, 'cros.mojom.CameraAppDevice_ResetCropRegion_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_ResetCropRegion_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_ResetCropRegion_ResponseParams', [
    ],
    [[0, 8]]);

cros.mojom.CameraAppDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraAppDeviceRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraAppDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraAppDevicePendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraAppDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CameraAppDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  takePortraitModePhoto(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CameraAppDevice_TakePortraitModePhoto_ParamsSpec,
      cros.mojom.CameraAppDevice_TakePortraitModePhoto_ResponseParamsSpec,
      [observer],
      false);
  }

  setFpsRange(fps_range) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.CameraAppDevice_SetFpsRange_ParamsSpec,
      cros.mojom.CameraAppDevice_SetFpsRange_ResponseParamsSpec,
      [fps_range],
      false);
  }

  setStillCaptureResolution(resolution) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.CameraAppDevice_SetStillCaptureResolution_ParamsSpec,
      cros.mojom.CameraAppDevice_SetStillCaptureResolution_ResponseParamsSpec,
      [resolution],
      false);
  }

  setCaptureIntent(intent) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.CameraAppDevice_SetCaptureIntent_ParamsSpec,
      cros.mojom.CameraAppDevice_SetCaptureIntent_ResponseParamsSpec,
      [intent],
      false);
  }

  addResultMetadataObserver(observer, stream_type) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      cros.mojom.CameraAppDevice_AddResultMetadataObserver_ParamsSpec,
      cros.mojom.CameraAppDevice_AddResultMetadataObserver_ResponseParamsSpec,
      [observer, stream_type],
      false);
  }

  addCameraEventObserver(observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      cros.mojom.CameraAppDevice_AddCameraEventObserver_ParamsSpec,
      cros.mojom.CameraAppDevice_AddCameraEventObserver_ResponseParamsSpec,
      [observer],
      false);
  }

  setCameraFrameRotationEnabledAtSource(is_enabled) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ParamsSpec,
      cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ResponseParamsSpec,
      [is_enabled],
      false);
  }

  getCameraFrameRotation() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      cros.mojom.CameraAppDevice_GetCameraFrameRotation_ParamsSpec,
      cros.mojom.CameraAppDevice_GetCameraFrameRotation_ResponseParamsSpec,
      [],
      false);
  }

  registerDocumentCornersObserver(observer) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ParamsSpec,
      cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ResponseParamsSpec,
      [observer],
      false);
  }

  setMultipleStreamsEnabled(enabled) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ParamsSpec,
      cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ResponseParamsSpec,
      [enabled],
      false);
  }

  registerCameraInfoObserver(observer) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ParamsSpec,
      cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ResponseParamsSpec,
      [observer],
      false);
  }

  setCropRegion(crop_region) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      cros.mojom.CameraAppDevice_SetCropRegion_ParamsSpec,
      cros.mojom.CameraAppDevice_SetCropRegion_ResponseParamsSpec,
      [crop_region],
      false);
  }

  resetCropRegion() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      cros.mojom.CameraAppDevice_ResetCropRegion_ParamsSpec,
      cros.mojom.CameraAppDevice_ResetCropRegion_ResponseParamsSpec,
      [],
      false);
  }

};

cros.mojom.CameraAppDevice.getRemote = function() {
  let remote = new cros.mojom.CameraAppDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraAppDevice',
    'context');
  return remote.$;
};

cros.mojom.CameraAppDeviceReceiver = class {
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
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
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
        
        // Try Method 0: TakePortraitModePhoto
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDevice_TakePortraitModePhoto_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TakePortraitModePhoto (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetFpsRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDevice_SetFpsRange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFpsRange (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetStillCaptureResolution
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDevice_SetStillCaptureResolution_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetStillCaptureResolution (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetCaptureIntent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDevice_SetCaptureIntent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCaptureIntent (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: AddResultMetadataObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDevice_AddResultMetadataObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddResultMetadataObserver (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: AddCameraEventObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDevice_AddCameraEventObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddCameraEventObserver (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetCameraFrameRotationEnabledAtSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCameraFrameRotationEnabledAtSource (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetCameraFrameRotation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDevice_GetCameraFrameRotation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCameraFrameRotation (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RegisterDocumentCornersObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterDocumentCornersObserver (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetMultipleStreamsEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMultipleStreamsEnabled (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: RegisterCameraInfoObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterCameraInfoObserver (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetCropRegion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDevice_SetCropRegion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCropRegion (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: ResetCropRegion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraAppDevice_ResetCropRegion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetCropRegion (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStruct(cros.mojom.CameraAppDevice_TakePortraitModePhoto_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.takePortraitModePhoto');
          const result = this.impl.takePortraitModePhoto(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_TakePortraitModePhoto_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CameraAppDevice_SetFpsRange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setFpsRange');
          const result = this.impl.setFpsRange(params.fps_range);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_SetFpsRange_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CameraAppDevice_SetStillCaptureResolution_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setStillCaptureResolution');
          const result = this.impl.setStillCaptureResolution(params.resolution);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_SetStillCaptureResolution_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CameraAppDevice_SetCaptureIntent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCaptureIntent');
          const result = this.impl.setCaptureIntent(params.intent);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_SetCaptureIntent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CameraAppDevice_AddResultMetadataObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addResultMetadataObserver');
          const result = this.impl.addResultMetadataObserver(params.observer, params.stream_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_AddResultMetadataObserver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CameraAppDevice_AddCameraEventObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addCameraEventObserver');
          const result = this.impl.addCameraEventObserver(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_AddCameraEventObserver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCameraFrameRotationEnabledAtSource');
          const result = this.impl.setCameraFrameRotationEnabledAtSource(params.is_enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CameraAppDevice_GetCameraFrameRotation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getCameraFrameRotation');
          const result = this.impl.getCameraFrameRotation();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_GetCameraFrameRotation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.registerDocumentCornersObserver');
          const result = this.impl.registerDocumentCornersObserver(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setMultipleStreamsEnabled');
          const result = this.impl.setMultipleStreamsEnabled(params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.registerCameraInfoObserver');
          const result = this.impl.registerCameraInfoObserver(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CameraAppDevice_SetCropRegion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCropRegion');
          const result = this.impl.setCropRegion(params.crop_region);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_SetCropRegion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.CameraAppDevice_ResetCropRegion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resetCropRegion');
          const result = this.impl.resetCropRegion();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_ResetCropRegion_ResponseParamsSpec);
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

cros.mojom.CameraAppDeviceReceiver = cros.mojom.CameraAppDeviceReceiver;

cros.mojom.CameraAppDevicePtr = cros.mojom.CameraAppDeviceRemote;
cros.mojom.CameraAppDeviceRequest = cros.mojom.CameraAppDevicePendingReceiver;


// Interface: ResultMetadataObserver
mojo.internal.Struct(
    cros.mojom.ResultMetadataObserver_OnMetadataAvailable_ParamsSpec, 'cros.mojom.ResultMetadataObserver_OnMetadataAvailable_Params', [
      mojo.internal.StructField('camera_metadata', 0, 0, cros.mojom.CameraMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.ResultMetadataObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.ResultMetadataObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.ResultMetadataObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.ResultMetadataObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.ResultMetadataObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.ResultMetadataObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMetadataAvailable(camera_metadata) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.ResultMetadataObserver_OnMetadataAvailable_ParamsSpec,
      null,
      [camera_metadata],
      false);
  }

};

cros.mojom.ResultMetadataObserver.getRemote = function() {
  let remote = new cros.mojom.ResultMetadataObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.ResultMetadataObserver',
    'context');
  return remote.$;
};

cros.mojom.ResultMetadataObserverReceiver = class {
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
        
        // Try Method 0: OnMetadataAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.ResultMetadataObserver_OnMetadataAvailable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMetadataAvailable (0)');
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
          const params = decoder.decodeStruct(cros.mojom.ResultMetadataObserver_OnMetadataAvailable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onMetadataAvailable');
          const result = this.impl.onMetadataAvailable(params.camera_metadata);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.ResultMetadataObserverReceiver = cros.mojom.ResultMetadataObserverReceiver;

cros.mojom.ResultMetadataObserverPtr = cros.mojom.ResultMetadataObserverRemote;
cros.mojom.ResultMetadataObserverRequest = cros.mojom.ResultMetadataObserverPendingReceiver;


// Interface: CameraEventObserver
mojo.internal.Struct(
    cros.mojom.CameraEventObserver_OnShutterDone_ParamsSpec, 'cros.mojom.CameraEventObserver_OnShutterDone_Params', [
    ],
    [[0, 8]]);

cros.mojom.CameraEventObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraEventObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraEventObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraEventObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraEventObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CameraEventObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onShutterDone() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CameraEventObserver_OnShutterDone_ParamsSpec,
      null,
      [],
      false);
  }

};

cros.mojom.CameraEventObserver.getRemote = function() {
  let remote = new cros.mojom.CameraEventObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraEventObserver',
    'context');
  return remote.$;
};

cros.mojom.CameraEventObserverReceiver = class {
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
        
        // Try Method 0: OnShutterDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraEventObserver_OnShutterDone_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnShutterDone (0)');
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
          const params = decoder.decodeStruct(cros.mojom.CameraEventObserver_OnShutterDone_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onShutterDone');
          const result = this.impl.onShutterDone();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.CameraEventObserverReceiver = cros.mojom.CameraEventObserverReceiver;

cros.mojom.CameraEventObserverPtr = cros.mojom.CameraEventObserverRemote;
cros.mojom.CameraEventObserverRequest = cros.mojom.CameraEventObserverPendingReceiver;


// Interface: DocumentCornersObserver
mojo.internal.Struct(
    cros.mojom.DocumentCornersObserver_OnDocumentCornersUpdated_ParamsSpec, 'cros.mojom.DocumentCornersObserver_OnDocumentCornersUpdated_Params', [
      mojo.internal.StructField('corners', 0, 0, mojo.internal.Array(gfx.mojom.PointFSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.DocumentCornersObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.DocumentCornersObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.DocumentCornersObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.DocumentCornersObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.DocumentCornersObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.DocumentCornersObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDocumentCornersUpdated(corners) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.DocumentCornersObserver_OnDocumentCornersUpdated_ParamsSpec,
      null,
      [corners],
      false);
  }

};

cros.mojom.DocumentCornersObserver.getRemote = function() {
  let remote = new cros.mojom.DocumentCornersObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.DocumentCornersObserver',
    'context');
  return remote.$;
};

cros.mojom.DocumentCornersObserverReceiver = class {
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
        
        // Try Method 0: OnDocumentCornersUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.DocumentCornersObserver_OnDocumentCornersUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDocumentCornersUpdated (0)');
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
          const params = decoder.decodeStruct(cros.mojom.DocumentCornersObserver_OnDocumentCornersUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDocumentCornersUpdated');
          const result = this.impl.onDocumentCornersUpdated(params.corners);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.DocumentCornersObserverReceiver = cros.mojom.DocumentCornersObserverReceiver;

cros.mojom.DocumentCornersObserverPtr = cros.mojom.DocumentCornersObserverRemote;
cros.mojom.DocumentCornersObserverRequest = cros.mojom.DocumentCornersObserverPendingReceiver;


// Interface: CameraInfoObserver
mojo.internal.Struct(
    cros.mojom.CameraInfoObserver_OnCameraInfoUpdated_ParamsSpec, 'cros.mojom.CameraInfoObserver_OnCameraInfoUpdated_Params', [
      mojo.internal.StructField('camera_info', 0, 0, cros.mojom.CameraInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.CameraInfoObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraInfoObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraInfoObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraInfoObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraInfoObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CameraInfoObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCameraInfoUpdated(camera_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CameraInfoObserver_OnCameraInfoUpdated_ParamsSpec,
      null,
      [camera_info],
      false);
  }

};

cros.mojom.CameraInfoObserver.getRemote = function() {
  let remote = new cros.mojom.CameraInfoObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraInfoObserver',
    'context');
  return remote.$;
};

cros.mojom.CameraInfoObserverReceiver = class {
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
        
        // Try Method 0: OnCameraInfoUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.CameraInfoObserver_OnCameraInfoUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCameraInfoUpdated (0)');
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
          const params = decoder.decodeStruct(cros.mojom.CameraInfoObserver_OnCameraInfoUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onCameraInfoUpdated');
          const result = this.impl.onCameraInfoUpdated(params.camera_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.CameraInfoObserverReceiver = cros.mojom.CameraInfoObserverReceiver;

cros.mojom.CameraInfoObserverPtr = cros.mojom.CameraInfoObserverRemote;
cros.mojom.CameraInfoObserverRequest = cros.mojom.CameraInfoObserverPendingReceiver;


// Interface: StillCaptureResultObserver
mojo.internal.Struct(
    cros.mojom.StillCaptureResultObserver_OnStillCaptureDone_ParamsSpec, 'cros.mojom.StillCaptureResultObserver_OnStillCaptureDone_Params', [
      mojo.internal.StructField('effect', 0, 0, cros.mojom.EffectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('blob', 8, 0, media.mojom.BlobSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('status', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

cros.mojom.StillCaptureResultObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.StillCaptureResultObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.StillCaptureResultObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.StillCaptureResultObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.StillCaptureResultObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.StillCaptureResultObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStillCaptureDone(effect, status, blob) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.StillCaptureResultObserver_OnStillCaptureDone_ParamsSpec,
      null,
      [effect, status, blob],
      false);
  }

};

cros.mojom.StillCaptureResultObserver.getRemote = function() {
  let remote = new cros.mojom.StillCaptureResultObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.StillCaptureResultObserver',
    'context');
  return remote.$;
};

cros.mojom.StillCaptureResultObserverReceiver = class {
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
        
        // Try Method 0: OnStillCaptureDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cros.mojom.StillCaptureResultObserver_OnStillCaptureDone_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStillCaptureDone (0)');
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
          const params = decoder.decodeStruct(cros.mojom.StillCaptureResultObserver_OnStillCaptureDone_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onStillCaptureDone');
          const result = this.impl.onStillCaptureDone(params.effect, params.status, params.blob);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.StillCaptureResultObserverReceiver = cros.mojom.StillCaptureResultObserverReceiver;

cros.mojom.StillCaptureResultObserverPtr = cros.mojom.StillCaptureResultObserverRemote;
cros.mojom.StillCaptureResultObserverRequest = cros.mojom.StillCaptureResultObserverPendingReceiver;

