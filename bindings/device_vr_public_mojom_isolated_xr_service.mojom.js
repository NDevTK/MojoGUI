// Auto-generated MojoJS binding
// Source: chromium_src/device/vr/public/mojom/isolated_xr_service.mojom
// Module: device.mojom

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var device_test = device_test || {};
var gpu = gpu || {};
var sandbox = sandbox || {};
var viz = viz || {};
var gfx = gfx || {};

device.mojom.XRRuntimeSessionOptionsSpec = { $: {} };
device.mojom.XRRuntimeSessionResultSpec = { $: {} };
device.mojom.XRDeviceDataSpec = { $: {} };
device.mojom.XRSessionController = {};
device.mojom.XRSessionController.$interfaceName = 'device.mojom.XRSessionController';
device.mojom.XRSessionController_SetFrameDataRestricted_ParamsSpec = { $: {} };
device.mojom.XRRuntimeEventListener = {};
device.mojom.XRRuntimeEventListener.$interfaceName = 'device.mojom.XRRuntimeEventListener';
device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_ParamsSpec = { $: {} };
device.mojom.XRRuntimeEventListener_OnExitPresent_ParamsSpec = { $: {} };
device.mojom.XRRuntime = {};
device.mojom.XRRuntime.$interfaceName = 'device.mojom.XRRuntime';
device.mojom.XRRuntime_RequestSession_ParamsSpec = { $: {} };
device.mojom.XRRuntime_RequestSession_ResponseParamsSpec = { $: {} };
device.mojom.XRRuntime_ShutdownSession_ParamsSpec = { $: {} };
device.mojom.XRRuntime_ShutdownSession_ResponseParamsSpec = { $: {} };
device.mojom.XRRuntime_ListenToDeviceChanges_ParamsSpec = { $: {} };
device.mojom.ImmersiveOverlay = {};
device.mojom.ImmersiveOverlay.$interfaceName = 'device.mojom.ImmersiveOverlay';
device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ParamsSpec = { $: {} };
device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ResponseParamsSpec = { $: {} };
device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ParamsSpec = { $: {} };
device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ResponseParamsSpec = { $: {} };
device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_ParamsSpec = { $: {} };
device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ParamsSpec = { $: {} };
device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ResponseParamsSpec = { $: {} };
device.mojom.IsolatedXRRuntimeProviderClient = {};
device.mojom.IsolatedXRRuntimeProviderClient.$interfaceName = 'device.mojom.IsolatedXRRuntimeProviderClient';
device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_ParamsSpec = { $: {} };
device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_ParamsSpec = { $: {} };
device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_ParamsSpec = { $: {} };
device.mojom.IsolatedXRRuntimeProvider = {};
device.mojom.IsolatedXRRuntimeProvider.$interfaceName = 'device.mojom.IsolatedXRRuntimeProvider';
device.mojom.IsolatedXRRuntimeProvider_RequestDevices_ParamsSpec = { $: {} };
device.mojom.XRDeviceService = {};
device.mojom.XRDeviceService.$interfaceName = 'device.mojom.XRDeviceService';
device.mojom.XRDeviceService_BindRuntimeProvider_ParamsSpec = { $: {} };
device.mojom.XRDeviceService_BindTestHook_ParamsSpec = { $: {} };
device.mojom.XRDeviceServiceHost = {};
device.mojom.XRDeviceServiceHost.$interfaceName = 'device.mojom.XRDeviceServiceHost';
device.mojom.XRDeviceServiceHost_BindGpu_ParamsSpec = { $: {} };

device.mojom.kXrSandbox = sandbox.mojom.Sandbox.kXrCompositing;

device.mojom.kXrSandbox = sandbox.mojom.Sandbox.kUtility;

// Struct: XRRuntimeSessionOptions
mojo.internal.Struct(
    device.mojom.XRRuntimeSessionOptionsSpec, 'device.mojom.XRRuntimeSessionOptions', [
      mojo.internal.StructField('mode', 0, 0, device.mojom.XRSessionModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('required_features', 8, 0, mojo.internal.Array(device.mojom.XRSessionFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('optional_features', 16, 0, mojo.internal.Array(device.mojom.XRSessionFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('tracked_images', 24, 0, mojo.internal.Array(device.mojom.XRTrackedImageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('depth_options', 32, 0, device.mojom.XRDepthOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('trace_id', 40, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('render_process_id', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('render_frame_id', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: XRRuntimeSessionResult
mojo.internal.Struct(
    device.mojom.XRRuntimeSessionResultSpec, 'device.mojom.XRRuntimeSessionResult', [
      mojo.internal.StructField('controller', 0, 0, mojo.internal.InterfaceProxy(device.mojom.XRSessionControllerRemote), null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, device.mojom.XRSessionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_id', 16, 0, viz.mojom.FrameSinkIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('overlay', 24, 0, mojo.internal.InterfaceProxy(device.mojom.ImmersiveOverlayRemote), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: XRDeviceData
mojo.internal.Struct(
    device.mojom.XRDeviceDataSpec, 'device.mojom.XRDeviceData', [
      mojo.internal.StructField('supported_features', 0, 0, mojo.internal.Array(device.mojom.XRSessionFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('luid', 8, 0, gpu.mojom.LuidSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_ar_blend_mode_supported', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: XRSessionController
mojo.internal.Struct(
    device.mojom.XRSessionController_SetFrameDataRestricted_ParamsSpec, 'device.mojom.XRSessionController_SetFrameDataRestricted_Params', [
      mojo.internal.StructField('restricted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.XRSessionControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.XRSessionControllerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRSessionController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.XRSessionControllerPendingReceiver,
      handle);
    this.$ = new device.mojom.XRSessionControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setFrameDataRestricted(restricted) {
    return this.$.setFrameDataRestricted(restricted);
  }
};

device.mojom.XRSessionControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRSessionController', [
      { explicit: null },
    ]);
  }

  setFrameDataRestricted(restricted) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.XRSessionController_SetFrameDataRestricted_ParamsSpec,
      null,
      [restricted],
      false);
  }

};

device.mojom.XRSessionController.getRemote = function() {
  let remote = new device.mojom.XRSessionControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRSessionController',
    'context');
  return remote.$;
};

device.mojom.XRSessionControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRSessionController', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(device.mojom.XRSessionController_SetFrameDataRestricted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRSessionController_SetFrameDataRestricted_ParamsSpec.$.structSpec);
          const result = this.impl.setFrameDataRestricted(params.restricted);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.XRSessionControllerReceiver = device.mojom.XRSessionControllerReceiver;

device.mojom.XRSessionControllerPtr = device.mojom.XRSessionControllerRemote;
device.mojom.XRSessionControllerRequest = device.mojom.XRSessionControllerPendingReceiver;


// Interface: XRRuntimeEventListener
mojo.internal.Struct(
    device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_ParamsSpec, 'device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_Params', [
      mojo.internal.StructField('visibility_state', 0, 0, device.mojom.XRVisibilityStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.XRRuntimeEventListener_OnExitPresent_ParamsSpec, 'device.mojom.XRRuntimeEventListener_OnExitPresent_Params', [
    ],
    [[0, 8]]);

device.mojom.XRRuntimeEventListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.XRRuntimeEventListenerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRRuntimeEventListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.XRRuntimeEventListenerPendingReceiver,
      handle);
    this.$ = new device.mojom.XRRuntimeEventListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onVisibilityStateChanged(visibility_state) {
    return this.$.onVisibilityStateChanged(visibility_state);
  }
  onExitPresent() {
    return this.$.onExitPresent();
  }
};

device.mojom.XRRuntimeEventListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRRuntimeEventListener', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onVisibilityStateChanged(visibility_state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_ParamsSpec,
      null,
      [visibility_state],
      false);
  }

  onExitPresent() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.XRRuntimeEventListener_OnExitPresent_ParamsSpec,
      null,
      [],
      false);
  }

};

device.mojom.XRRuntimeEventListener.getRemote = function() {
  let remote = new device.mojom.XRRuntimeEventListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRRuntimeEventListener',
    'context');
  return remote.$;
};

device.mojom.XRRuntimeEventListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRRuntimeEventListener', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.XRRuntimeEventListener_OnExitPresent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onVisibilityStateChanged(params.visibility_state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRRuntimeEventListener_OnExitPresent_ParamsSpec.$.structSpec);
          const result = this.impl.onExitPresent();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.XRRuntimeEventListenerReceiver = device.mojom.XRRuntimeEventListenerReceiver;

device.mojom.XRRuntimeEventListenerPtr = device.mojom.XRRuntimeEventListenerRemote;
device.mojom.XRRuntimeEventListenerRequest = device.mojom.XRRuntimeEventListenerPendingReceiver;


// Interface: XRRuntime
mojo.internal.Struct(
    device.mojom.XRRuntime_RequestSession_ParamsSpec, 'device.mojom.XRRuntime_RequestSession_Params', [
      mojo.internal.StructField('options', 0, 0, device.mojom.XRRuntimeSessionOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.XRRuntime_RequestSession_ResponseParamsSpec, 'device.mojom.XRRuntime_RequestSession_ResponseParams', [
      mojo.internal.StructField('session', 0, 0, device.mojom.XRRuntimeSessionResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.XRRuntime_ShutdownSession_ParamsSpec, 'device.mojom.XRRuntime_ShutdownSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.XRRuntime_ShutdownSession_ResponseParamsSpec, 'device.mojom.XRRuntime_ShutdownSession_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.XRRuntime_ListenToDeviceChanges_ParamsSpec, 'device.mojom.XRRuntime_ListenToDeviceChanges_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.XRRuntimePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.XRRuntimeRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRRuntime';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.XRRuntimePendingReceiver,
      handle);
    this.$ = new device.mojom.XRRuntimeRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestSession(options) {
    return this.$.requestSession(options);
  }
  shutdownSession() {
    return this.$.shutdownSession();
  }
  listenToDeviceChanges(listener) {
    return this.$.listenToDeviceChanges(listener);
  }
};

device.mojom.XRRuntimeRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRRuntime', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestSession(options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.XRRuntime_RequestSession_ParamsSpec,
      device.mojom.XRRuntime_RequestSession_ResponseParamsSpec,
      [options],
      false);
  }

  shutdownSession() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.XRRuntime_ShutdownSession_ParamsSpec,
      device.mojom.XRRuntime_ShutdownSession_ResponseParamsSpec,
      [],
      false);
  }

  listenToDeviceChanges(listener) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.XRRuntime_ListenToDeviceChanges_ParamsSpec,
      null,
      [listener],
      false);
  }

};

device.mojom.XRRuntime.getRemote = function() {
  let remote = new device.mojom.XRRuntimeRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRRuntime',
    'context');
  return remote.$;
};

device.mojom.XRRuntimeReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRRuntime', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(device.mojom.XRRuntime_RequestSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.XRRuntime_ShutdownSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.XRRuntime_ListenToDeviceChanges_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRRuntime_RequestSession_ParamsSpec.$.structSpec);
          const result = this.impl.requestSession(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.XRRuntime_RequestSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRRuntime_ShutdownSession_ParamsSpec.$.structSpec);
          const result = this.impl.shutdownSession();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.XRRuntime_ShutdownSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRRuntime_ListenToDeviceChanges_ParamsSpec.$.structSpec);
          const result = this.impl.listenToDeviceChanges(params.listener);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.XRRuntimeReceiver = device.mojom.XRRuntimeReceiver;

device.mojom.XRRuntimePtr = device.mojom.XRRuntimeRemote;
device.mojom.XRRuntimeRequest = device.mojom.XRRuntimePendingReceiver;


// Interface: ImmersiveOverlay
mojo.internal.Struct(
    device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ParamsSpec, 'device.mojom.ImmersiveOverlay_RequestNextOverlayPose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ResponseParamsSpec, 'device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ResponseParams', [
      mojo.internal.StructField('render_info', 0, 0, device.mojom.XRRenderInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ParamsSpec, 'device.mojom.ImmersiveOverlay_SubmitOverlayTexture_Params', [
      mojo.internal.StructField('texture', 0, 0, gfx.mojom.GpuMemoryBufferHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sync_token', 8, 0, gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('left_bounds', 16, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('right_bounds', 24, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_id', 32, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ResponseParamsSpec, 'device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_ParamsSpec, 'device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_Params', [
      mojo.internal.StructField('overlay_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('webxr_visible', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ParamsSpec, 'device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ResponseParamsSpec, 'device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ResponseParams', [
    ],
    [[0, 8]]);

device.mojom.ImmersiveOverlayPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.ImmersiveOverlayRemote = class {
  static get $interfaceName() {
    return 'device.mojom.ImmersiveOverlay';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.ImmersiveOverlayPendingReceiver,
      handle);
    this.$ = new device.mojom.ImmersiveOverlayRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestNextOverlayPose() {
    return this.$.requestNextOverlayPose();
  }
  submitOverlayTexture(frame_id, texture, sync_token, left_bounds, right_bounds) {
    return this.$.submitOverlayTexture(frame_id, texture, sync_token, left_bounds, right_bounds);
  }
  setOverlayAndWebXRVisibility(overlay_visible, webxr_visible) {
    return this.$.setOverlayAndWebXRVisibility(overlay_visible, webxr_visible);
  }
  requestNotificationOnWebXrSubmitted() {
    return this.$.requestNotificationOnWebXrSubmitted();
  }
};

device.mojom.ImmersiveOverlayRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ImmersiveOverlay', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestNextOverlayPose() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ParamsSpec,
      device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ResponseParamsSpec,
      [],
      false);
  }

  submitOverlayTexture(frame_id, texture, sync_token, left_bounds, right_bounds) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ParamsSpec,
      device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ResponseParamsSpec,
      [frame_id, texture, sync_token, left_bounds, right_bounds],
      false);
  }

  setOverlayAndWebXRVisibility(overlay_visible, webxr_visible) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_ParamsSpec,
      null,
      [overlay_visible, webxr_visible],
      false);
  }

  requestNotificationOnWebXrSubmitted() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ParamsSpec,
      device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ResponseParamsSpec,
      [],
      false);
  }

};

device.mojom.ImmersiveOverlay.getRemote = function() {
  let remote = new device.mojom.ImmersiveOverlayRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.ImmersiveOverlay',
    'context');
  return remote.$;
};

device.mojom.ImmersiveOverlayReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ImmersiveOverlay', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ParamsSpec.$.structSpec);
          const result = this.impl.requestNextOverlayPose();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ParamsSpec.$.structSpec);
          const result = this.impl.submitOverlayTexture(params.frame_id, params.texture, params.sync_token, params.left_bounds, params.right_bounds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_ParamsSpec.$.structSpec);
          const result = this.impl.setOverlayAndWebXRVisibility(params.overlay_visible, params.webxr_visible);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ParamsSpec.$.structSpec);
          const result = this.impl.requestNotificationOnWebXrSubmitted();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.ImmersiveOverlayReceiver = device.mojom.ImmersiveOverlayReceiver;

device.mojom.ImmersiveOverlayPtr = device.mojom.ImmersiveOverlayRemote;
device.mojom.ImmersiveOverlayRequest = device.mojom.ImmersiveOverlayPendingReceiver;


// Interface: IsolatedXRRuntimeProviderClient
mojo.internal.Struct(
    device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_ParamsSpec, 'device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_Params', [
      mojo.internal.StructField('runtime', 0, 0, mojo.internal.InterfaceProxy(device.mojom.XRRuntimeRemote), null, false, 0, undefined),
      mojo.internal.StructField('device_data', 8, 0, device.mojom.XRDeviceDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_id', 16, 0, device.mojom.XRDeviceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_ParamsSpec, 'device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_Params', [
      mojo.internal.StructField('device_index', 0, 0, device.mojom.XRDeviceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_ParamsSpec, 'device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_Params', [
    ],
    [[0, 8]]);

device.mojom.IsolatedXRRuntimeProviderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.IsolatedXRRuntimeProviderClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.IsolatedXRRuntimeProviderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.IsolatedXRRuntimeProviderClientPendingReceiver,
      handle);
    this.$ = new device.mojom.IsolatedXRRuntimeProviderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDeviceAdded(runtime, device_data, device_id) {
    return this.$.onDeviceAdded(runtime, device_data, device_id);
  }
  onDeviceRemoved(device_index) {
    return this.$.onDeviceRemoved(device_index);
  }
  onDevicesEnumerated() {
    return this.$.onDevicesEnumerated();
  }
};

device.mojom.IsolatedXRRuntimeProviderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IsolatedXRRuntimeProviderClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onDeviceAdded(runtime, device_data, device_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_ParamsSpec,
      null,
      [runtime, device_data, device_id],
      false);
  }

  onDeviceRemoved(device_index) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_ParamsSpec,
      null,
      [device_index],
      false);
  }

  onDevicesEnumerated() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_ParamsSpec,
      null,
      [],
      false);
  }

};

device.mojom.IsolatedXRRuntimeProviderClient.getRemote = function() {
  let remote = new device.mojom.IsolatedXRRuntimeProviderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.IsolatedXRRuntimeProviderClient',
    'context');
  return remote.$;
};

device.mojom.IsolatedXRRuntimeProviderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IsolatedXRRuntimeProviderClient', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_ParamsSpec.$.structSpec);
          const result = this.impl.onDeviceAdded(params.runtime, params.device_data, params.device_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_ParamsSpec.$.structSpec);
          const result = this.impl.onDeviceRemoved(params.device_index);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_ParamsSpec.$.structSpec);
          const result = this.impl.onDevicesEnumerated();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.IsolatedXRRuntimeProviderClientReceiver = device.mojom.IsolatedXRRuntimeProviderClientReceiver;

device.mojom.IsolatedXRRuntimeProviderClientPtr = device.mojom.IsolatedXRRuntimeProviderClientRemote;
device.mojom.IsolatedXRRuntimeProviderClientRequest = device.mojom.IsolatedXRRuntimeProviderClientPendingReceiver;


// Interface: IsolatedXRRuntimeProvider
mojo.internal.Struct(
    device.mojom.IsolatedXRRuntimeProvider_RequestDevices_ParamsSpec, 'device.mojom.IsolatedXRRuntimeProvider_RequestDevices_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(device.mojom.IsolatedXRRuntimeProviderClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.IsolatedXRRuntimeProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.IsolatedXRRuntimeProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.IsolatedXRRuntimeProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.IsolatedXRRuntimeProviderPendingReceiver,
      handle);
    this.$ = new device.mojom.IsolatedXRRuntimeProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestDevices(client) {
    return this.$.requestDevices(client);
  }
};

device.mojom.IsolatedXRRuntimeProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IsolatedXRRuntimeProvider', [
      { explicit: null },
    ]);
  }

  requestDevices(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.IsolatedXRRuntimeProvider_RequestDevices_ParamsSpec,
      null,
      [client],
      false);
  }

};

device.mojom.IsolatedXRRuntimeProvider.getRemote = function() {
  let remote = new device.mojom.IsolatedXRRuntimeProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.IsolatedXRRuntimeProvider',
    'context');
  return remote.$;
};

device.mojom.IsolatedXRRuntimeProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IsolatedXRRuntimeProvider', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(device.mojom.IsolatedXRRuntimeProvider_RequestDevices_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.IsolatedXRRuntimeProvider_RequestDevices_ParamsSpec.$.structSpec);
          const result = this.impl.requestDevices(params.client);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.IsolatedXRRuntimeProviderReceiver = device.mojom.IsolatedXRRuntimeProviderReceiver;

device.mojom.IsolatedXRRuntimeProviderPtr = device.mojom.IsolatedXRRuntimeProviderRemote;
device.mojom.IsolatedXRRuntimeProviderRequest = device.mojom.IsolatedXRRuntimeProviderPendingReceiver;


// Interface: XRDeviceService
mojo.internal.Struct(
    device.mojom.XRDeviceService_BindRuntimeProvider_ParamsSpec, 'device.mojom.XRDeviceService_BindRuntimeProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.IsolatedXRRuntimeProviderRemote), null, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.InterfaceProxy(device.mojom.XRDeviceServiceHostRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.XRDeviceService_BindTestHook_ParamsSpec, 'device.mojom.XRDeviceService_BindTestHook_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device_test.mojom.XRServiceTestHookRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.XRDeviceServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.XRDeviceServiceRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRDeviceService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.XRDeviceServicePendingReceiver,
      handle);
    this.$ = new device.mojom.XRDeviceServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindRuntimeProvider(receiver, host) {
    return this.$.bindRuntimeProvider(receiver, host);
  }
  bindTestHook(receiver) {
    return this.$.bindTestHook(receiver);
  }
};

device.mojom.XRDeviceServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRDeviceService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindRuntimeProvider(receiver, host) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.XRDeviceService_BindRuntimeProvider_ParamsSpec,
      null,
      [receiver, host],
      false);
  }

  bindTestHook(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.XRDeviceService_BindTestHook_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

device.mojom.XRDeviceService.getRemote = function() {
  let remote = new device.mojom.XRDeviceServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRDeviceService',
    'context');
  return remote.$;
};

device.mojom.XRDeviceServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRDeviceService', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(device.mojom.XRDeviceService_BindRuntimeProvider_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.XRDeviceService_BindTestHook_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRDeviceService_BindRuntimeProvider_ParamsSpec.$.structSpec);
          const result = this.impl.bindRuntimeProvider(params.receiver, params.host);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRDeviceService_BindTestHook_ParamsSpec.$.structSpec);
          const result = this.impl.bindTestHook(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.XRDeviceServiceReceiver = device.mojom.XRDeviceServiceReceiver;

device.mojom.XRDeviceServicePtr = device.mojom.XRDeviceServiceRemote;
device.mojom.XRDeviceServiceRequest = device.mojom.XRDeviceServicePendingReceiver;


// Interface: XRDeviceServiceHost
mojo.internal.Struct(
    device.mojom.XRDeviceServiceHost_BindGpu_ParamsSpec, 'device.mojom.XRDeviceServiceHost_BindGpu_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.GpuRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.XRDeviceServiceHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.XRDeviceServiceHostRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRDeviceServiceHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.XRDeviceServiceHostPendingReceiver,
      handle);
    this.$ = new device.mojom.XRDeviceServiceHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindGpu(receiver) {
    return this.$.bindGpu(receiver);
  }
};

device.mojom.XRDeviceServiceHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRDeviceServiceHost', [
      { explicit: null },
    ]);
  }

  bindGpu(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.XRDeviceServiceHost_BindGpu_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

device.mojom.XRDeviceServiceHost.getRemote = function() {
  let remote = new device.mojom.XRDeviceServiceHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRDeviceServiceHost',
    'context');
  return remote.$;
};

device.mojom.XRDeviceServiceHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRDeviceServiceHost', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(device.mojom.XRDeviceServiceHost_BindGpu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRDeviceServiceHost_BindGpu_ParamsSpec.$.structSpec);
          const result = this.impl.bindGpu(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.XRDeviceServiceHostReceiver = device.mojom.XRDeviceServiceHostReceiver;

device.mojom.XRDeviceServiceHostPtr = device.mojom.XRDeviceServiceHostRemote;
device.mojom.XRDeviceServiceHostRequest = device.mojom.XRDeviceServiceHostPendingReceiver;

