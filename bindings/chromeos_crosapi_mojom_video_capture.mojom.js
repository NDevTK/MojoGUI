// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/video_capture.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: DeviceAccessResultCode
crosapi.mojom.DeviceAccessResultCode = {
  NOT_INITIALIZED: 0,
  SUCCESS: 1,
  ERROR_DEVICE_NOT_FOUND: 2,
};

// Enum: VideoRotation
crosapi.mojom.VideoRotation = {
  kVideoRotation0: 0,
  kVideoRotation90: 1,
  kVideoRotation180: 2,
  kVideoRotation270: 3,
};

// Interface: ScopedAccessPermission
crosapi.mojom.ScopedAccessPermission = {};

crosapi.mojom.ScopedAccessPermissionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.ScopedAccessPermissionRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.ScopedAccessPermission';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.ScopedAccessPermissionPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.ScopedAccessPermissionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.ScopedAccessPermissionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.ScopedAccessPermission.getRemote = function() {
  let remote = new crosapi.mojom.ScopedAccessPermissionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.ScopedAccessPermission',
    'context');
  return remote.$;
};

// Legacy compatibility
crosapi.mojom.ScopedAccessPermissionPtr = crosapi.mojom.ScopedAccessPermissionRemote;
crosapi.mojom.ScopedAccessPermissionRequest = crosapi.mojom.ScopedAccessPermissionPendingReceiver;


// Interface: VideoFrameHandler
crosapi.mojom.VideoFrameHandler = {};

crosapi.mojom.VideoFrameHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.VideoFrameHandlerRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.VideoFrameHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.VideoFrameHandlerPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.VideoFrameHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.VideoFrameHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.VideoFrameHandler.getRemote = function() {
  let remote = new crosapi.mojom.VideoFrameHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.VideoFrameHandler',
    'context');
  return remote.$;
};

// Legacy compatibility
crosapi.mojom.VideoFrameHandlerPtr = crosapi.mojom.VideoFrameHandlerRemote;
crosapi.mojom.VideoFrameHandlerRequest = crosapi.mojom.VideoFrameHandlerPendingReceiver;


// Interface: VideoCaptureDevice
crosapi.mojom.VideoCaptureDevice = {};

crosapi.mojom.VideoCaptureDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.VideoCaptureDeviceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.VideoCaptureDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.VideoCaptureDevicePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.VideoCaptureDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.VideoCaptureDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.VideoCaptureDevice.getRemote = function() {
  let remote = new crosapi.mojom.VideoCaptureDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.VideoCaptureDevice',
    'context');
  return remote.$;
};

// Legacy compatibility
crosapi.mojom.VideoCaptureDevicePtr = crosapi.mojom.VideoCaptureDeviceRemote;
crosapi.mojom.VideoCaptureDeviceRequest = crosapi.mojom.VideoCaptureDevicePendingReceiver;


// Interface: VideoCaptureDeviceFactory
crosapi.mojom.VideoCaptureDeviceFactory = {};

crosapi.mojom.VideoCaptureDeviceFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.VideoCaptureDeviceFactoryRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.VideoCaptureDeviceFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.VideoCaptureDeviceFactoryPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.VideoCaptureDeviceFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.VideoCaptureDeviceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.VideoCaptureDeviceFactory.getRemote = function() {
  let remote = new crosapi.mojom.VideoCaptureDeviceFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.VideoCaptureDeviceFactory',
    'context');
  return remote.$;
};

// Legacy compatibility
crosapi.mojom.VideoCaptureDeviceFactoryPtr = crosapi.mojom.VideoCaptureDeviceFactoryRemote;
crosapi.mojom.VideoCaptureDeviceFactoryRequest = crosapi.mojom.VideoCaptureDeviceFactoryPendingReceiver;

