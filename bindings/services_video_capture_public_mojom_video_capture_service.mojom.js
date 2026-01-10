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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = video_capture.mojom.AcceleratorFactory_CreateJpegDecodeAccelerator_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createJpegDecodeAccelerator(params.jda);
          break;
        }
      }
    });
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = video_capture.mojom.VideoCaptureService_InjectGpuDependencies_ParamsSpec.$.decode(message.payload);
          const result = this.impl.injectGpuDependencies(params.accelerator_factory);
          break;
        }
        case 1: {
          const params = video_capture.mojom.VideoCaptureService_ConnectToCameraAppDeviceBridge_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connectToCameraAppDeviceBridge(params.receiver);
          break;
        }
        case 2: {
          const params = video_capture.mojom.VideoCaptureService_BindVideoCaptureDeviceFactory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindVideoCaptureDeviceFactory(params.receiver);
          break;
        }
        case 3: {
          const params = video_capture.mojom.VideoCaptureService_ConnectToVideoSourceProvider_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connectToVideoSourceProvider(params.receiver);
          break;
        }
        case 4: {
          const params = video_capture.mojom.VideoCaptureService_BindControlsForTesting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindControlsForTesting(params.receiver);
          break;
        }
        case 5: {
          const params = video_capture.mojom.VideoCaptureService_OnGpuInfoUpdate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onGpuInfoUpdate(params.luid);
          break;
        }
      }
    });
  }
};

video_capture.mojom.VideoCaptureServiceReceiver = video_capture.mojom.VideoCaptureServiceReceiver;

video_capture.mojom.VideoCaptureServicePtr = video_capture.mojom.VideoCaptureServiceRemote;
video_capture.mojom.VideoCaptureServiceRequest = video_capture.mojom.VideoCaptureServicePendingReceiver;

