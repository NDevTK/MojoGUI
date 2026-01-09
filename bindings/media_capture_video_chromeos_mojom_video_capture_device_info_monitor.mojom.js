// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/video_capture_device_info_monitor.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Interface: VideoCaptureDeviceInfoObserver
cros.mojom.VideoCaptureDeviceInfoObserver = {};

cros.mojom.VideoCaptureDeviceInfoObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.VideoCaptureDeviceInfoObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.VideoCaptureDeviceInfoObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.VideoCaptureDeviceInfoObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.VideoCaptureDeviceInfoObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.VideoCaptureDeviceInfoObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

cros.mojom.VideoCaptureDeviceInfoObserver.getRemote = function() {
  let remote = new cros.mojom.VideoCaptureDeviceInfoObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.VideoCaptureDeviceInfoObserver',
    'context');
  return remote.$;
};

// Legacy compatibility
cros.mojom.VideoCaptureDeviceInfoObserverPtr = cros.mojom.VideoCaptureDeviceInfoObserverRemote;
cros.mojom.VideoCaptureDeviceInfoObserverRequest = cros.mojom.VideoCaptureDeviceInfoObserverPendingReceiver;


// Interface: VideoCaptureDeviceInfoMonitor
cros.mojom.VideoCaptureDeviceInfoMonitor = {};

cros.mojom.VideoCaptureDeviceInfoMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.VideoCaptureDeviceInfoMonitorRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.VideoCaptureDeviceInfoMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.VideoCaptureDeviceInfoMonitorPendingReceiver,
      handle);
    this.$ = new cros.mojom.VideoCaptureDeviceInfoMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.VideoCaptureDeviceInfoMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

cros.mojom.VideoCaptureDeviceInfoMonitor.getRemote = function() {
  let remote = new cros.mojom.VideoCaptureDeviceInfoMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.VideoCaptureDeviceInfoMonitor',
    'context');
  return remote.$;
};

// Legacy compatibility
cros.mojom.VideoCaptureDeviceInfoMonitorPtr = cros.mojom.VideoCaptureDeviceInfoMonitorRemote;
cros.mojom.VideoCaptureDeviceInfoMonitorRequest = cros.mojom.VideoCaptureDeviceInfoMonitorPendingReceiver;

