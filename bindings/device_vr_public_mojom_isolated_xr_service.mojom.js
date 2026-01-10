// Auto-generated MojoJS binding
// Source: chromium_src/device/vr/public/mojom/isolated_xr_service.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


device.mojom.mojom.kXrSandbox = sandbox.mojom.Sandbox.kXrCompositing;

device.mojom.mojom.kXrSandbox = sandbox.mojom.Sandbox.kUtility;

// Struct: XRRuntimeSessionOptions
device.mojom.mojom.XRRuntimeSessionOptionsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRRuntimeSessionOptions',
      packedSize: 64,
      fields: [
        { name: 'mode', packedOffset: 40, packedBitOffset: 0, type: device.mojom.XRSessionModeSpec, nullable: false, minVersion: 0 },
        { name: 'required_features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.XRSessionFeatureSpec, false), nullable: false, minVersion: 0 },
        { name: 'optional_features', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.XRSessionFeatureSpec, false), nullable: false, minVersion: 0 },
        { name: 'render_process_id', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'render_frame_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'tracked_images', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.XRTrackedImageSpec, false), nullable: false, minVersion: 0 },
        { name: 'depth_options', packedOffset: 24, packedBitOffset: 0, type: device.mojom.XRDepthOptionsSpec, nullable: true, minVersion: 0 },
        { name: 'trace_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: XRRuntimeSessionResult
device.mojom.mojom.XRRuntimeSessionResultSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRRuntimeSessionResult',
      packedSize: 32,
      fields: [
        { name: 'controller', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRSessionSpec, nullable: false, minVersion: 0 },
        { name: 'frame_sink_id', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: true, minVersion: 0 },
        { name: 'overlay', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: XRDeviceData
device.mojom.mojom.XRDeviceDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRDeviceData',
      packedSize: 32,
      fields: [
        { name: 'supported_features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.XRSessionFeatureSpec, false), nullable: false, minVersion: 0 },
        { name: 'luid', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.LuidSpec, nullable: true, minVersion: 0 },
        { name: 'is_ar_blend_mode_supported', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: XRSessionController
device.mojom.mojom.XRSessionController = {};

device.mojom.mojom.XRSessionControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.XRSessionControllerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRSessionController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.XRSessionControllerPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.XRSessionControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.XRSessionControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setFrameDataRestricted(restricted) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.XRSessionController_SetFrameDataRestricted_ParamsSpec,
      null,
      [restricted]);
  }

};

device.mojom.mojom.XRSessionController.getRemote = function() {
  let remote = new device.mojom.mojom.XRSessionControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRSessionController',
    'context');
  return remote.$;
};

// ParamsSpec for SetFrameDataRestricted
device.mojom.mojom.XRSessionController_SetFrameDataRestricted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRSessionController.SetFrameDataRestricted_Params',
      packedSize: 16,
      fields: [
        { name: 'restricted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.XRSessionControllerPtr = device.mojom.mojom.XRSessionControllerRemote;
device.mojom.mojom.XRSessionControllerRequest = device.mojom.mojom.XRSessionControllerPendingReceiver;


// Interface: XRRuntimeEventListener
device.mojom.mojom.XRRuntimeEventListener = {};

device.mojom.mojom.XRRuntimeEventListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.XRRuntimeEventListenerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRRuntimeEventListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.XRRuntimeEventListenerPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.XRRuntimeEventListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.XRRuntimeEventListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onVisibilityStateChanged(visibility_state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_ParamsSpec,
      null,
      [visibility_state]);
  }

  onExitPresent() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.XRRuntimeEventListener_OnExitPresent_ParamsSpec,
      null,
      []);
  }

};

device.mojom.mojom.XRRuntimeEventListener.getRemote = function() {
  let remote = new device.mojom.mojom.XRRuntimeEventListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRRuntimeEventListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnVisibilityStateChanged
device.mojom.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRRuntimeEventListener.OnVisibilityStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'visibility_state', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRVisibilityStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnExitPresent
device.mojom.mojom.XRRuntimeEventListener_OnExitPresent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRRuntimeEventListener.OnExitPresent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.XRRuntimeEventListenerPtr = device.mojom.mojom.XRRuntimeEventListenerRemote;
device.mojom.mojom.XRRuntimeEventListenerRequest = device.mojom.mojom.XRRuntimeEventListenerPendingReceiver;


// Interface: XRRuntime
device.mojom.mojom.XRRuntime = {};

device.mojom.mojom.XRRuntimePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.XRRuntimeRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRRuntime';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.XRRuntimePendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.XRRuntimeRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.XRRuntimeRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestSession(options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.XRRuntime_RequestSession_ParamsSpec,
      device.mojom.mojom.XRRuntime_RequestSession_ResponseParamsSpec,
      [options]);
  }

  shutdownSession() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.XRRuntime_ShutdownSession_ParamsSpec,
      null,
      []);
  }

  listenToDeviceChanges(listener) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.mojom.XRRuntime_ListenToDeviceChanges_ParamsSpec,
      null,
      [listener]);
  }

};

device.mojom.mojom.XRRuntime.getRemote = function() {
  let remote = new device.mojom.mojom.XRRuntimeRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRRuntime',
    'context');
  return remote.$;
};

// ParamsSpec for RequestSession
device.mojom.mojom.XRRuntime_RequestSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRRuntime.RequestSession_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRRuntimeSessionOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.mojom.XRRuntime_RequestSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRRuntime.RequestSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRRuntimeSessionResultSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShutdownSession
device.mojom.mojom.XRRuntime_ShutdownSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRRuntime.ShutdownSession_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ListenToDeviceChanges
device.mojom.mojom.XRRuntime_ListenToDeviceChanges_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRRuntime.ListenToDeviceChanges_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.XRRuntimePtr = device.mojom.mojom.XRRuntimeRemote;
device.mojom.mojom.XRRuntimeRequest = device.mojom.mojom.XRRuntimePendingReceiver;


// Interface: ImmersiveOverlay
device.mojom.mojom.ImmersiveOverlay = {};

device.mojom.mojom.ImmersiveOverlayPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.ImmersiveOverlayRemote = class {
  static get $interfaceName() {
    return 'device.mojom.ImmersiveOverlay';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.ImmersiveOverlayPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.ImmersiveOverlayRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.ImmersiveOverlayRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestNextOverlayPose() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.ImmersiveOverlay_RequestNextOverlayPose_ParamsSpec,
      device.mojom.mojom.ImmersiveOverlay_RequestNextOverlayPose_ResponseParamsSpec,
      []);
  }

  submitOverlayTexture(frame_id, texture, sync_token, left_bounds, right_bounds) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.ImmersiveOverlay_SubmitOverlayTexture_ParamsSpec,
      device.mojom.mojom.ImmersiveOverlay_SubmitOverlayTexture_ResponseParamsSpec,
      [frame_id, texture, sync_token, left_bounds, right_bounds]);
  }

  setOverlayAndWebXRVisibility(overlay_visible, webxr_visible) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_ParamsSpec,
      null,
      [overlay_visible, webxr_visible]);
  }

  requestNotificationOnWebXrSubmitted() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ParamsSpec,
      null,
      []);
  }

};

device.mojom.mojom.ImmersiveOverlay.getRemote = function() {
  let remote = new device.mojom.mojom.ImmersiveOverlayRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.ImmersiveOverlay',
    'context');
  return remote.$;
};

// ParamsSpec for RequestNextOverlayPose
device.mojom.mojom.ImmersiveOverlay_RequestNextOverlayPose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ImmersiveOverlay.RequestNextOverlayPose_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.mojom.ImmersiveOverlay_RequestNextOverlayPose_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ImmersiveOverlay.RequestNextOverlayPose_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'render_info', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRRenderInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SubmitOverlayTexture
device.mojom.mojom.ImmersiveOverlay_SubmitOverlayTexture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ImmersiveOverlay.SubmitOverlayTexture_Params',
      packedSize: 48,
      fields: [
        { name: 'frame_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
        { name: 'texture', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.GpuMemoryBufferHandleSpec, nullable: false, minVersion: 0 },
        { name: 'sync_token', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false, minVersion: 0 },
        { name: 'left_bounds', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'right_bounds', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

device.mojom.mojom.ImmersiveOverlay_SubmitOverlayTexture_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ImmersiveOverlay.SubmitOverlayTexture_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetOverlayAndWebXRVisibility
device.mojom.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ImmersiveOverlay.SetOverlayAndWebXRVisibility_Params',
      packedSize: 16,
      fields: [
        { name: 'overlay_visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'webxr_visible', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestNotificationOnWebXrSubmitted
device.mojom.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ImmersiveOverlay.RequestNotificationOnWebXrSubmitted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.ImmersiveOverlayPtr = device.mojom.mojom.ImmersiveOverlayRemote;
device.mojom.mojom.ImmersiveOverlayRequest = device.mojom.mojom.ImmersiveOverlayPendingReceiver;


// Interface: IsolatedXRRuntimeProviderClient
device.mojom.mojom.IsolatedXRRuntimeProviderClient = {};

device.mojom.mojom.IsolatedXRRuntimeProviderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.IsolatedXRRuntimeProviderClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.IsolatedXRRuntimeProviderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.IsolatedXRRuntimeProviderClientPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.IsolatedXRRuntimeProviderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.IsolatedXRRuntimeProviderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDeviceAdded(runtime, device_data, device_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_ParamsSpec,
      null,
      [runtime, device_data, device_id]);
  }

  onDeviceRemoved(device_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_ParamsSpec,
      null,
      [device_index]);
  }

  onDevicesEnumerated() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_ParamsSpec,
      null,
      []);
  }

};

device.mojom.mojom.IsolatedXRRuntimeProviderClient.getRemote = function() {
  let remote = new device.mojom.mojom.IsolatedXRRuntimeProviderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.IsolatedXRRuntimeProviderClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnDeviceAdded
device.mojom.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.IsolatedXRRuntimeProviderClient.OnDeviceAdded_Params',
      packedSize: 24,
      fields: [
        { name: 'runtime', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'device_data', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRDeviceDataSpec, nullable: false, minVersion: 0 },
        { name: 'device_id', packedOffset: 12, packedBitOffset: 0, type: device.mojom.XRDeviceIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnDeviceRemoved
device.mojom.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.IsolatedXRRuntimeProviderClient.OnDeviceRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'device_index', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRDeviceIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDevicesEnumerated
device.mojom.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.IsolatedXRRuntimeProviderClient.OnDevicesEnumerated_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.IsolatedXRRuntimeProviderClientPtr = device.mojom.mojom.IsolatedXRRuntimeProviderClientRemote;
device.mojom.mojom.IsolatedXRRuntimeProviderClientRequest = device.mojom.mojom.IsolatedXRRuntimeProviderClientPendingReceiver;


// Interface: IsolatedXRRuntimeProvider
device.mojom.mojom.IsolatedXRRuntimeProvider = {};

device.mojom.mojom.IsolatedXRRuntimeProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.IsolatedXRRuntimeProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.IsolatedXRRuntimeProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.IsolatedXRRuntimeProviderPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.IsolatedXRRuntimeProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.IsolatedXRRuntimeProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestDevices(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.IsolatedXRRuntimeProvider_RequestDevices_ParamsSpec,
      null,
      [client]);
  }

};

device.mojom.mojom.IsolatedXRRuntimeProvider.getRemote = function() {
  let remote = new device.mojom.mojom.IsolatedXRRuntimeProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.IsolatedXRRuntimeProvider',
    'context');
  return remote.$;
};

// ParamsSpec for RequestDevices
device.mojom.mojom.IsolatedXRRuntimeProvider_RequestDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.IsolatedXRRuntimeProvider.RequestDevices_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.IsolatedXRRuntimeProviderPtr = device.mojom.mojom.IsolatedXRRuntimeProviderRemote;
device.mojom.mojom.IsolatedXRRuntimeProviderRequest = device.mojom.mojom.IsolatedXRRuntimeProviderPendingReceiver;


// Interface: XRDeviceService
device.mojom.mojom.XRDeviceService = {};

device.mojom.mojom.XRDeviceServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.XRDeviceServiceRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRDeviceService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.XRDeviceServicePendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.XRDeviceServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.XRDeviceServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindRuntimeProvider(receiver, host) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.XRDeviceService_BindRuntimeProvider_ParamsSpec,
      null,
      [receiver, host]);
  }

  bindTestHook(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.XRDeviceService_BindTestHook_ParamsSpec,
      null,
      [receiver]);
  }

};

device.mojom.mojom.XRDeviceService.getRemote = function() {
  let remote = new device.mojom.mojom.XRDeviceServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRDeviceService',
    'context');
  return remote.$;
};

// ParamsSpec for BindRuntimeProvider
device.mojom.mojom.XRDeviceService_BindRuntimeProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRDeviceService.BindRuntimeProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'host', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindTestHook
device.mojom.mojom.XRDeviceService_BindTestHook_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRDeviceService.BindTestHook_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.XRDeviceServicePtr = device.mojom.mojom.XRDeviceServiceRemote;
device.mojom.mojom.XRDeviceServiceRequest = device.mojom.mojom.XRDeviceServicePendingReceiver;


// Interface: XRDeviceServiceHost
device.mojom.mojom.XRDeviceServiceHost = {};

device.mojom.mojom.XRDeviceServiceHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.XRDeviceServiceHostRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRDeviceServiceHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.XRDeviceServiceHostPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.XRDeviceServiceHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.XRDeviceServiceHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindGpu(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.XRDeviceServiceHost_BindGpu_ParamsSpec,
      null,
      [receiver]);
  }

};

device.mojom.mojom.XRDeviceServiceHost.getRemote = function() {
  let remote = new device.mojom.mojom.XRDeviceServiceHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRDeviceServiceHost',
    'context');
  return remote.$;
};

// ParamsSpec for BindGpu
device.mojom.mojom.XRDeviceServiceHost_BindGpu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRDeviceServiceHost.BindGpu_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.XRDeviceServiceHostPtr = device.mojom.mojom.XRDeviceServiceHostRemote;
device.mojom.mojom.XRDeviceServiceHostRequest = device.mojom.mojom.XRDeviceServiceHostPendingReceiver;

