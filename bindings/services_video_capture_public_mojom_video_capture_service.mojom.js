// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_capture_service.mojom
// Module: video_capture.mojom

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
  createJpegDecodeAccelerator(jda) {
    return this.$.createJpegDecodeAccelerator(jda);
  }
};

video_capture.mojom.AcceleratorFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AcceleratorFactory', [
      { explicit: null },
    ]);
  }

  createJpegDecodeAccelerator(jda) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('AcceleratorFactory', [
      { explicit: null },
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
             decoder.decodeStructInline(video_capture.mojom.AcceleratorFactory_CreateJpegDecodeAccelerator_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.AcceleratorFactory_CreateJpegDecodeAccelerator_ParamsSpec.$.structSpec);
          const result = this.impl.createJpegDecodeAccelerator(params.jda);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

video_capture.mojom.AcceleratorFactoryReceiver = video_capture.mojom.AcceleratorFactoryReceiver;

video_capture.mojom.AcceleratorFactoryPtr = video_capture.mojom.AcceleratorFactoryRemote;
video_capture.mojom.AcceleratorFactoryRequest = video_capture.mojom.AcceleratorFactoryPendingReceiver;


// Interface: VideoCaptureService
mojo.internal.Struct(
    video_capture.mojom.VideoCaptureService_InjectGpuDependencies_ParamsSpec, 'video_capture.mojom.VideoCaptureService_InjectGpuDependencies_Params', [
      mojo.internal.StructField('accelerator_factory', 0, 0, mojo.internal.InterfaceProxy(video_capture.mojom.AcceleratorFactoryRemote), null, false, 0, undefined),
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
  injectGpuDependencies(accelerator_factory) {
    return this.$.injectGpuDependencies(accelerator_factory);
  }
  connectToCameraAppDeviceBridge(receiver) {
    return this.$.connectToCameraAppDeviceBridge(receiver);
  }
  bindVideoCaptureDeviceFactory(receiver) {
    return this.$.bindVideoCaptureDeviceFactory(receiver);
  }
  connectToVideoSourceProvider(receiver) {
    return this.$.connectToVideoSourceProvider(receiver);
  }
  bindControlsForTesting(receiver) {
    return this.$.bindControlsForTesting(receiver);
  }
  onGpuInfoUpdate(luid) {
    return this.$.onGpuInfoUpdate(luid);
  }
};

video_capture.mojom.VideoCaptureServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoCaptureService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  injectGpuDependencies(accelerator_factory) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      video_capture.mojom.VideoCaptureService_InjectGpuDependencies_ParamsSpec,
      null,
      [accelerator_factory],
      false);
  }

  connectToCameraAppDeviceBridge(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      video_capture.mojom.VideoCaptureService_ConnectToCameraAppDeviceBridge_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindVideoCaptureDeviceFactory(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      video_capture.mojom.VideoCaptureService_BindVideoCaptureDeviceFactory_ParamsSpec,
      null,
      [receiver],
      false);
  }

  connectToVideoSourceProvider(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      video_capture.mojom.VideoCaptureService_ConnectToVideoSourceProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindControlsForTesting(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      video_capture.mojom.VideoCaptureService_BindControlsForTesting_ParamsSpec,
      null,
      [receiver],
      false);
  }

  onGpuInfoUpdate(luid) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('VideoCaptureService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_InjectGpuDependencies_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_ConnectToCameraAppDeviceBridge_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_BindVideoCaptureDeviceFactory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_ConnectToVideoSourceProvider_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_BindControlsForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_OnGpuInfoUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_InjectGpuDependencies_ParamsSpec.$.structSpec);
          const result = this.impl.injectGpuDependencies(params.accelerator_factory);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_ConnectToCameraAppDeviceBridge_ParamsSpec.$.structSpec);
          const result = this.impl.connectToCameraAppDeviceBridge(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_BindVideoCaptureDeviceFactory_ParamsSpec.$.structSpec);
          const result = this.impl.bindVideoCaptureDeviceFactory(params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_ConnectToVideoSourceProvider_ParamsSpec.$.structSpec);
          const result = this.impl.connectToVideoSourceProvider(params.receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_BindControlsForTesting_ParamsSpec.$.structSpec);
          const result = this.impl.bindControlsForTesting(params.receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_OnGpuInfoUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.onGpuInfoUpdate(params.luid);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

video_capture.mojom.VideoCaptureServiceReceiver = video_capture.mojom.VideoCaptureServiceReceiver;

video_capture.mojom.VideoCaptureServicePtr = video_capture.mojom.VideoCaptureServiceRemote;
video_capture.mojom.VideoCaptureServiceRequest = video_capture.mojom.VideoCaptureServicePendingReceiver;

