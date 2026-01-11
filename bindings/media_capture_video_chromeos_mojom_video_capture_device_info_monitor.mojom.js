// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/video_capture_device_info_monitor.mojom
// Module: cros.mojom

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};

cros.mojom.VideoCaptureDeviceInfoObserver = {};
cros.mojom.VideoCaptureDeviceInfoObserver.$interfaceName = 'cros.mojom.VideoCaptureDeviceInfoObserver';
cros.mojom.VideoCaptureDeviceInfoObserver_OnGetCameraIdToDeviceIdMapping_ParamsSpec = { $: {} };
cros.mojom.VideoCaptureDeviceInfoMonitor = {};
cros.mojom.VideoCaptureDeviceInfoMonitor.$interfaceName = 'cros.mojom.VideoCaptureDeviceInfoMonitor';
cros.mojom.VideoCaptureDeviceInfoMonitor_AddVideoCaptureDeviceInfoObserver_ParamsSpec = { $: {} };

// Interface: VideoCaptureDeviceInfoObserver
mojo.internal.Struct(
    cros.mojom.VideoCaptureDeviceInfoObserver_OnGetCameraIdToDeviceIdMapping_ParamsSpec, 'cros.mojom.VideoCaptureDeviceInfoObserver_OnGetCameraIdToDeviceIdMapping_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('camera_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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
  onGetCameraIdToDeviceIdMapping(camera_id, device_id) {
    return this.$.onGetCameraIdToDeviceIdMapping(camera_id, device_id);
  }
};

cros.mojom.VideoCaptureDeviceInfoObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoCaptureDeviceInfoObserver', [
      { explicit: 0 },
    ]);
  }

  onGetCameraIdToDeviceIdMapping(camera_id, device_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cros.mojom.VideoCaptureDeviceInfoObserver_OnGetCameraIdToDeviceIdMapping_ParamsSpec,
      null,
      [camera_id, device_id],
      false);
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

cros.mojom.VideoCaptureDeviceInfoObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoCaptureDeviceInfoObserver', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.VideoCaptureDeviceInfoObserver_OnGetCameraIdToDeviceIdMapping_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.VideoCaptureDeviceInfoObserver_OnGetCameraIdToDeviceIdMapping_ParamsSpec.$.structSpec);
          const result = this.impl.onGetCameraIdToDeviceIdMapping(params.camera_id, params.device_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

cros.mojom.VideoCaptureDeviceInfoObserverReceiver = cros.mojom.VideoCaptureDeviceInfoObserverReceiver;

cros.mojom.VideoCaptureDeviceInfoObserverPtr = cros.mojom.VideoCaptureDeviceInfoObserverRemote;
cros.mojom.VideoCaptureDeviceInfoObserverRequest = cros.mojom.VideoCaptureDeviceInfoObserverPendingReceiver;


// Interface: VideoCaptureDeviceInfoMonitor
mojo.internal.Struct(
    cros.mojom.VideoCaptureDeviceInfoMonitor_AddVideoCaptureDeviceInfoObserver_ParamsSpec, 'cros.mojom.VideoCaptureDeviceInfoMonitor_AddVideoCaptureDeviceInfoObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.VideoCaptureDeviceInfoObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  addVideoCaptureDeviceInfoObserver(observer) {
    return this.$.addVideoCaptureDeviceInfoObserver(observer);
  }
};

cros.mojom.VideoCaptureDeviceInfoMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoCaptureDeviceInfoMonitor', [
      { explicit: 0 },
    ]);
  }

  addVideoCaptureDeviceInfoObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cros.mojom.VideoCaptureDeviceInfoMonitor_AddVideoCaptureDeviceInfoObserver_ParamsSpec,
      null,
      [observer],
      false);
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

cros.mojom.VideoCaptureDeviceInfoMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoCaptureDeviceInfoMonitor', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.VideoCaptureDeviceInfoMonitor_AddVideoCaptureDeviceInfoObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.VideoCaptureDeviceInfoMonitor_AddVideoCaptureDeviceInfoObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addVideoCaptureDeviceInfoObserver(params.observer);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

cros.mojom.VideoCaptureDeviceInfoMonitorReceiver = cros.mojom.VideoCaptureDeviceInfoMonitorReceiver;

cros.mojom.VideoCaptureDeviceInfoMonitorPtr = cros.mojom.VideoCaptureDeviceInfoMonitorRemote;
cros.mojom.VideoCaptureDeviceInfoMonitorRequest = cros.mojom.VideoCaptureDeviceInfoMonitorPendingReceiver;

