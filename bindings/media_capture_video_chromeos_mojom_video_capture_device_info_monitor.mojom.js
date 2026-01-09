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

  onGetCameraIdToDeviceIdMapping(camera_id, device_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.VideoCaptureDeviceInfoObserver_OnGetCameraIdToDeviceIdMapping_ParamsSpec,
      null,
      [camera_id, device_id]);
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

// ParamsSpec for OnGetCameraIdToDeviceIdMapping
cros.mojom.VideoCaptureDeviceInfoObserver_OnGetCameraIdToDeviceIdMapping_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.VideoCaptureDeviceInfoObserver.OnGetCameraIdToDeviceIdMapping_Params',
      packedSize: 24,
      fields: [
        { name: 'camera_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
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

  addVideoCaptureDeviceInfoObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.VideoCaptureDeviceInfoMonitor_AddVideoCaptureDeviceInfoObserver_ParamsSpec,
      null,
      [observer]);
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

// ParamsSpec for AddVideoCaptureDeviceInfoObserver
cros.mojom.VideoCaptureDeviceInfoMonitor_AddVideoCaptureDeviceInfoObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.VideoCaptureDeviceInfoMonitor.AddVideoCaptureDeviceInfoObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.VideoCaptureDeviceInfoMonitorPtr = cros.mojom.VideoCaptureDeviceInfoMonitorRemote;
cros.mojom.VideoCaptureDeviceInfoMonitorRequest = cros.mojom.VideoCaptureDeviceInfoMonitorPendingReceiver;

