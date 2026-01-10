// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_capture_service.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};


video_capture.mojom.mojom.kVideoCaptureSandbox = sandbox.mojom.Sandbox.kVideoCapture;

video_capture.mojom.mojom.kVideoCaptureSandbox = sandbox.mojom.Sandbox.kNoSandbox;

// Interface: AcceleratorFactory
video_capture.mojom.mojom.AcceleratorFactory = {};

video_capture.mojom.mojom.AcceleratorFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.mojom.AcceleratorFactoryRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.AcceleratorFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.mojom.AcceleratorFactoryPendingReceiver,
      handle);
    this.$ = new video_capture.mojom.mojom.AcceleratorFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.mojom.AcceleratorFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createJpegDecodeAccelerator(jda) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.mojom.AcceleratorFactory_CreateJpegDecodeAccelerator_ParamsSpec,
      null,
      [jda]);
  }

};

video_capture.mojom.mojom.AcceleratorFactory.getRemote = function() {
  let remote = new video_capture.mojom.mojom.AcceleratorFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.AcceleratorFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateJpegDecodeAccelerator
video_capture.mojom.mojom.AcceleratorFactory_CreateJpegDecodeAccelerator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.AcceleratorFactory.CreateJpegDecodeAccelerator_Params',
      packedSize: 16,
      fields: [
        { name: 'jda', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
video_capture.mojom.mojom.AcceleratorFactoryPtr = video_capture.mojom.mojom.AcceleratorFactoryRemote;
video_capture.mojom.mojom.AcceleratorFactoryRequest = video_capture.mojom.mojom.AcceleratorFactoryPendingReceiver;


// Interface: VideoCaptureService
video_capture.mojom.mojom.VideoCaptureService = {};

video_capture.mojom.mojom.VideoCaptureServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.mojom.VideoCaptureServiceRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.VideoCaptureService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.mojom.VideoCaptureServicePendingReceiver,
      handle);
    this.$ = new video_capture.mojom.mojom.VideoCaptureServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.mojom.VideoCaptureServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  injectGpuDependencies(accelerator_factory) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.mojom.VideoCaptureService_InjectGpuDependencies_ParamsSpec,
      null,
      [accelerator_factory]);
  }

  connectToCameraAppDeviceBridge(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.mojom.VideoCaptureService_ConnectToCameraAppDeviceBridge_ParamsSpec,
      null,
      [receiver]);
  }

  bindVideoCaptureDeviceFactory(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      video_capture.mojom.mojom.VideoCaptureService_BindVideoCaptureDeviceFactory_ParamsSpec,
      null,
      [receiver]);
  }

  connectToVideoSourceProvider(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      video_capture.mojom.mojom.VideoCaptureService_ConnectToVideoSourceProvider_ParamsSpec,
      null,
      [receiver]);
  }

  bindControlsForTesting(receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      video_capture.mojom.mojom.VideoCaptureService_BindControlsForTesting_ParamsSpec,
      null,
      [receiver]);
  }

  onGpuInfoUpdate(luid) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      video_capture.mojom.mojom.VideoCaptureService_OnGpuInfoUpdate_ParamsSpec,
      null,
      [luid]);
  }

};

video_capture.mojom.mojom.VideoCaptureService.getRemote = function() {
  let remote = new video_capture.mojom.mojom.VideoCaptureServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.VideoCaptureService',
    'context');
  return remote.$;
};

// ParamsSpec for InjectGpuDependencies
video_capture.mojom.mojom.VideoCaptureService_InjectGpuDependencies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoCaptureService.InjectGpuDependencies_Params',
      packedSize: 16,
      fields: [
        { name: 'accelerator_factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ConnectToCameraAppDeviceBridge
video_capture.mojom.mojom.VideoCaptureService_ConnectToCameraAppDeviceBridge_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoCaptureService.ConnectToCameraAppDeviceBridge_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindVideoCaptureDeviceFactory
video_capture.mojom.mojom.VideoCaptureService_BindVideoCaptureDeviceFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoCaptureService.BindVideoCaptureDeviceFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ConnectToVideoSourceProvider
video_capture.mojom.mojom.VideoCaptureService_ConnectToVideoSourceProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoCaptureService.ConnectToVideoSourceProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindControlsForTesting
video_capture.mojom.mojom.VideoCaptureService_BindControlsForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoCaptureService.BindControlsForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnGpuInfoUpdate
video_capture.mojom.mojom.VideoCaptureService_OnGpuInfoUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoCaptureService.OnGpuInfoUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'luid', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.LuidSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
video_capture.mojom.mojom.VideoCaptureServicePtr = video_capture.mojom.mojom.VideoCaptureServiceRemote;
video_capture.mojom.mojom.VideoCaptureServiceRequest = video_capture.mojom.mojom.VideoCaptureServicePendingReceiver;

