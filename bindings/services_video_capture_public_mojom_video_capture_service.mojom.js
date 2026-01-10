// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_capture_service.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};
var sandbox = sandbox || {};
var chromeos_camera = chromeos_camera || {};
var cros = cros || {};
var crosapi = crosapi || {};
var gpu = gpu || {};

video_capture.mojom.AcceleratorFactory = {};
video_capture.mojom.AcceleratorFactory.$interfaceName = 'video_capture.mojom.AcceleratorFactory';
video_capture.mojom.AcceleratorFactory_CreateJpegDecodeAccelerator_ParamsSpec = { $: {} };
video_capture.mojom.VideoCaptureService = {};
video_capture.mojom.VideoCaptureService.$interfaceName = 'video_capture.mojom.VideoCaptureService';
video_capture.mojom.VideoCaptureService_InjectGpuDependencies_ParamsSpec = { $: {} };
video_capture.mojom.VideoCaptureService_ConnectToCameraAppDeviceBridge_ParamsSpec = { $: {} };
video_capture.mojom.VideoCaptureService_BindVideoCaptureDeviceFactory_ParamsSpec = { $: {} };
video_capture.mojom.VideoCaptureService_ConnectToVideoSourceProvider_ParamsSpec = { $: {} };
video_capture.mojom.VideoCaptureService_BindControlsForTesting_ParamsSpec = { $: {} };
video_capture.mojom.VideoCaptureService_OnGpuInfoUpdate_ParamsSpec = { $: {} };

video_capture.mojom.kVideoCaptureSandbox = sandbox.mojom.Sandbox.kVideoCapture;

video_capture.mojom.kVideoCaptureSandbox = sandbox.mojom.Sandbox.kNoSandbox;

// Interface: AcceleratorFactory
mojo.internal.Struct(
    video_capture.mojom.AcceleratorFactory_CreateJpegDecodeAccelerator_ParamsSpec, 'video_capture.mojom.AcceleratorFactory_CreateJpegDecodeAccelerator_Params', [
      mojo.internal.StructField('jda', 0, 0, mojo.internal.InterfaceRequest(chromeos_camera.mojom.MjpegDecodeAcceleratorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

video_capture.mojom.AcceleratorFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.AcceleratorFactoryRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.AcceleratorFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.AcceleratorFactoryPendingReceiver,
      handle);
    this.$ = new video_capture.mojom.AcceleratorFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.AcceleratorFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createJpegDecodeAccelerator(jda) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.AcceleratorFactory_CreateJpegDecodeAccelerator_ParamsSpec,
      null,
      [jda],
      false);
  }

};

video_capture.mojom.AcceleratorFactory.getRemote = function() {
  let remote = new video_capture.mojom.AcceleratorFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.AcceleratorFactory',
    'context');
  return remote.$;
};

video_capture.mojom.AcceleratorFactoryReceiver = class {
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
        
        // Try Method 0: CreateJpegDecodeAccelerator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(video_capture.mojom.AcceleratorFactory_CreateJpegDecodeAccelerator_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateJpegDecodeAccelerator (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(video_capture.mojom.AcceleratorFactory_CreateJpegDecodeAccelerator_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createJpegDecodeAccelerator');
          const result = this.impl.createJpegDecodeAccelerator(params.jda);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

video_capture.mojom.AcceleratorFactoryReceiver = video_capture.mojom.AcceleratorFactoryReceiver;

video_capture.mojom.AcceleratorFactoryPtr = video_capture.mojom.AcceleratorFactoryRemote;
video_capture.mojom.AcceleratorFactoryRequest = video_capture.mojom.AcceleratorFactoryPendingReceiver;


// Interface: VideoCaptureService
mojo.internal.Struct(
    video_capture.mojom.VideoCaptureService_InjectGpuDependencies_ParamsSpec, 'video_capture.mojom.VideoCaptureService_InjectGpuDependencies_Params', [
      mojo.internal.StructField('accelerator_factory', 0, 0, mojo.internal.InterfaceProxy(video_capture.mojom.AcceleratorFactorySpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoCaptureService_ConnectToCameraAppDeviceBridge_ParamsSpec, 'video_capture.mojom.VideoCaptureService_ConnectToCameraAppDeviceBridge_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(cros.mojom.CameraAppDeviceBridgeRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoCaptureService_BindVideoCaptureDeviceFactory_ParamsSpec, 'video_capture.mojom.VideoCaptureService_BindVideoCaptureDeviceFactory_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(crosapi.mojom.VideoCaptureDeviceFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoCaptureService_ConnectToVideoSourceProvider_ParamsSpec, 'video_capture.mojom.VideoCaptureService_ConnectToVideoSourceProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(video_capture.mojom.VideoSourceProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoCaptureService_BindControlsForTesting_ParamsSpec, 'video_capture.mojom.VideoCaptureService_BindControlsForTesting_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(video_capture.mojom.TestingControlsRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoCaptureService_OnGpuInfoUpdate_ParamsSpec, 'video_capture.mojom.VideoCaptureService_OnGpuInfoUpdate_Params', [
      mojo.internal.StructField('luid', 0, 0, gpu.mojom.LuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

video_capture.mojom.VideoCaptureServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.VideoCaptureServiceRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.VideoCaptureService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.VideoCaptureServicePendingReceiver,
      handle);
    this.$ = new video_capture.mojom.VideoCaptureServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.VideoCaptureServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  injectGpuDependencies(accelerator_factory) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.VideoCaptureService_InjectGpuDependencies_ParamsSpec,
      null,
      [accelerator_factory],
      false);
  }

  connectToCameraAppDeviceBridge(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.VideoCaptureService_ConnectToCameraAppDeviceBridge_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindVideoCaptureDeviceFactory(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      video_capture.mojom.VideoCaptureService_BindVideoCaptureDeviceFactory_ParamsSpec,
      null,
      [receiver],
      false);
  }

  connectToVideoSourceProvider(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      video_capture.mojom.VideoCaptureService_ConnectToVideoSourceProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindControlsForTesting(receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      video_capture.mojom.VideoCaptureService_BindControlsForTesting_ParamsSpec,
      null,
      [receiver],
      false);
  }

  onGpuInfoUpdate(luid) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      video_capture.mojom.VideoCaptureService_OnGpuInfoUpdate_ParamsSpec,
      null,
      [luid],
      false);
  }

};

video_capture.mojom.VideoCaptureService.getRemote = function() {
  let remote = new video_capture.mojom.VideoCaptureServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.VideoCaptureService',
    'context');
  return remote.$;
};

video_capture.mojom.VideoCaptureServiceReceiver = class {
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
        
        // Try Method 0: InjectGpuDependencies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(video_capture.mojom.VideoCaptureService_InjectGpuDependencies_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InjectGpuDependencies (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: ConnectToCameraAppDeviceBridge
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(video_capture.mojom.VideoCaptureService_ConnectToCameraAppDeviceBridge_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectToCameraAppDeviceBridge (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: BindVideoCaptureDeviceFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(video_capture.mojom.VideoCaptureService_BindVideoCaptureDeviceFactory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindVideoCaptureDeviceFactory (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: ConnectToVideoSourceProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(video_capture.mojom.VideoCaptureService_ConnectToVideoSourceProvider_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectToVideoSourceProvider (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: BindControlsForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(video_capture.mojom.VideoCaptureService_BindControlsForTesting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindControlsForTesting (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: OnGpuInfoUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(video_capture.mojom.VideoCaptureService_OnGpuInfoUpdate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGpuInfoUpdate (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(video_capture.mojom.VideoCaptureService_InjectGpuDependencies_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.injectGpuDependencies');
          const result = this.impl.injectGpuDependencies(params.accelerator_factory);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(video_capture.mojom.VideoCaptureService_ConnectToCameraAppDeviceBridge_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.connectToCameraAppDeviceBridge');
          const result = this.impl.connectToCameraAppDeviceBridge(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(video_capture.mojom.VideoCaptureService_BindVideoCaptureDeviceFactory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindVideoCaptureDeviceFactory');
          const result = this.impl.bindVideoCaptureDeviceFactory(params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(video_capture.mojom.VideoCaptureService_ConnectToVideoSourceProvider_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.connectToVideoSourceProvider');
          const result = this.impl.connectToVideoSourceProvider(params.receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(video_capture.mojom.VideoCaptureService_BindControlsForTesting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindControlsForTesting');
          const result = this.impl.bindControlsForTesting(params.receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(video_capture.mojom.VideoCaptureService_OnGpuInfoUpdate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onGpuInfoUpdate');
          const result = this.impl.onGpuInfoUpdate(params.luid);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

video_capture.mojom.VideoCaptureServiceReceiver = video_capture.mojom.VideoCaptureServiceReceiver;

video_capture.mojom.VideoCaptureServicePtr = video_capture.mojom.VideoCaptureServiceRemote;
video_capture.mojom.VideoCaptureServiceRequest = video_capture.mojom.VideoCaptureServicePendingReceiver;

