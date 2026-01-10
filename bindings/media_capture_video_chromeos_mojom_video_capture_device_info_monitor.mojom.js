// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/video_capture_device_info_monitor.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Interface: VideoCaptureDeviceInfoObserver
cros.mojom.mojom.VideoCaptureDeviceInfoObserver = {};

cros.mojom.mojom.VideoCaptureDeviceInfoObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.VideoCaptureDeviceInfoObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.VideoCaptureDeviceInfoObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.VideoCaptureDeviceInfoObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.VideoCaptureDeviceInfoObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.VideoCaptureDeviceInfoObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onGetCameraIdToDeviceIdMapping(camera_id, device_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.VideoCaptureDeviceInfoObserver_OnGetCameraIdToDeviceIdMapping_ParamsSpec,
      null,
      [camera_id, device_id]);
  }

};

cros.mojom.mojom.VideoCaptureDeviceInfoObserver.getRemote = function() {
  let remote = new cros.mojom.mojom.VideoCaptureDeviceInfoObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.VideoCaptureDeviceInfoObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnGetCameraIdToDeviceIdMapping
cros.mojom.mojom.VideoCaptureDeviceInfoObserver_OnGetCameraIdToDeviceIdMapping_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.VideoCaptureDeviceInfoObserver.OnGetCameraIdToDeviceIdMapping_Params',
      packedSize: 24,
      fields: [
        { name: 'camera_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.VideoCaptureDeviceInfoObserverPtr = cros.mojom.mojom.VideoCaptureDeviceInfoObserverRemote;
cros.mojom.mojom.VideoCaptureDeviceInfoObserverRequest = cros.mojom.mojom.VideoCaptureDeviceInfoObserverPendingReceiver;


// Interface: VideoCaptureDeviceInfoMonitor
cros.mojom.mojom.VideoCaptureDeviceInfoMonitor = {};

cros.mojom.mojom.VideoCaptureDeviceInfoMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.VideoCaptureDeviceInfoMonitorRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.VideoCaptureDeviceInfoMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.VideoCaptureDeviceInfoMonitorPendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.VideoCaptureDeviceInfoMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.VideoCaptureDeviceInfoMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addVideoCaptureDeviceInfoObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.VideoCaptureDeviceInfoMonitor_AddVideoCaptureDeviceInfoObserver_ParamsSpec,
      null,
      [observer]);
  }

};

cros.mojom.mojom.VideoCaptureDeviceInfoMonitor.getRemote = function() {
  let remote = new cros.mojom.mojom.VideoCaptureDeviceInfoMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.VideoCaptureDeviceInfoMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for AddVideoCaptureDeviceInfoObserver
cros.mojom.mojom.VideoCaptureDeviceInfoMonitor_AddVideoCaptureDeviceInfoObserver_ParamsSpec = {
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
cros.mojom.mojom.VideoCaptureDeviceInfoMonitorPtr = cros.mojom.mojom.VideoCaptureDeviceInfoMonitorRemote;
cros.mojom.mojom.VideoCaptureDeviceInfoMonitorRequest = cros.mojom.mojom.VideoCaptureDeviceInfoMonitorPendingReceiver;

