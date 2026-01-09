// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/devices_changed_observer.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};


// Interface: DevicesChangedObserver
video_capture.mojom.DevicesChangedObserver = {};

video_capture.mojom.DevicesChangedObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.DevicesChangedObserverRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.DevicesChangedObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.DevicesChangedObserverPendingReceiver,
      handle);
    this.$ = new video_capture.mojom.DevicesChangedObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.DevicesChangedObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDevicesChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.DevicesChangedObserver_OnDevicesChanged_ParamsSpec.$,
      null,
      []);
  }

};

video_capture.mojom.DevicesChangedObserver.getRemote = function() {
  let remote = new video_capture.mojom.DevicesChangedObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.DevicesChangedObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDevicesChanged
video_capture.mojom.DevicesChangedObserver_OnDevicesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.DevicesChangedObserver.OnDevicesChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
video_capture.mojom.DevicesChangedObserverPtr = video_capture.mojom.DevicesChangedObserverRemote;
video_capture.mojom.DevicesChangedObserverRequest = video_capture.mojom.DevicesChangedObserverPendingReceiver;

