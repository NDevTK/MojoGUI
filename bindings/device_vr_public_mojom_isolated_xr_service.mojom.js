// Auto-generated MojoJS binding
// Source: chromium_src/device/vr/public/mojom/isolated_xr_service.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: XRSessionController
device.mojom.XRSessionController = {};

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
};

device.mojom.XRSessionControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setFrameDataRestricted(restricted) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.XRSessionController_SetFrameDataRestricted_ParamsSpec,
      null,
      [restricted]);
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

// ParamsSpec for SetFrameDataRestricted
device.mojom.XRSessionController_SetFrameDataRestricted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRSessionController.SetFrameDataRestricted_Params',
      packedSize: 16,
      fields: [
        { name: 'restricted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.XRSessionControllerPtr = device.mojom.XRSessionControllerRemote;
device.mojom.XRSessionControllerRequest = device.mojom.XRSessionControllerPendingReceiver;


// Interface: XRRuntimeEventListener
device.mojom.XRRuntimeEventListener = {};

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
};

device.mojom.XRRuntimeEventListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onVisibilityStateChanged(visibility_state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_ParamsSpec,
      null,
      [visibility_state]);
  }

  onExitPresent() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.XRRuntimeEventListener_OnExitPresent_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnVisibilityStateChanged
device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRRuntimeEventListener.OnVisibilityStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'visibility_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnExitPresent
device.mojom.XRRuntimeEventListener_OnExitPresent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRRuntimeEventListener.OnExitPresent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.XRRuntimeEventListenerPtr = device.mojom.XRRuntimeEventListenerRemote;
device.mojom.XRRuntimeEventListenerRequest = device.mojom.XRRuntimeEventListenerPendingReceiver;


// Interface: XRRuntime
device.mojom.XRRuntime = {};

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
};

device.mojom.XRRuntimeRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestSession(options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.XRRuntime_RequestSession_ParamsSpec,
      device.mojom.XRRuntime_RequestSession_ResponseParamsSpec,
      [options]);
  }

  shutdownSession() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.XRRuntime_ShutdownSession_ParamsSpec,
      null,
      []);
  }

  listenToDeviceChanges(listener) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.XRRuntime_ListenToDeviceChanges_ParamsSpec,
      null,
      [listener]);
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

// ParamsSpec for RequestSession
device.mojom.XRRuntime_RequestSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRRuntime.RequestSession_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.XRRuntime_RequestSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRRuntime.RequestSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShutdownSession
device.mojom.XRRuntime_ShutdownSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRRuntime.ShutdownSession_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ListenToDeviceChanges
device.mojom.XRRuntime_ListenToDeviceChanges_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRRuntime.ListenToDeviceChanges_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.XRRuntimePtr = device.mojom.XRRuntimeRemote;
device.mojom.XRRuntimeRequest = device.mojom.XRRuntimePendingReceiver;


// Interface: ImmersiveOverlay
device.mojom.ImmersiveOverlay = {};

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
};

device.mojom.ImmersiveOverlayRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestNextOverlayPose() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ParamsSpec,
      device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ResponseParamsSpec,
      []);
  }

  submitOverlayTexture(frame_id, texture, sync_token, left_bounds, right_bounds) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ParamsSpec,
      device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ResponseParamsSpec,
      [frame_id, texture, sync_token, left_bounds, right_bounds]);
  }

  setOverlayAndWebXRVisibility(overlay_visible, webxr_visible) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_ParamsSpec,
      null,
      [overlay_visible, webxr_visible]);
  }

  requestNotificationOnWebXrSubmitted() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ParamsSpec,
      null,
      []);
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

// ParamsSpec for RequestNextOverlayPose
device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ImmersiveOverlay.RequestNextOverlayPose_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ImmersiveOverlay.RequestNextOverlayPose_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'render_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SubmitOverlayTexture
device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ImmersiveOverlay.SubmitOverlayTexture_Params',
      packedSize: 48,
      fields: [
        { name: 'frame_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false },
        { name: 'texture', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'sync_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'left_bounds', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'right_bounds', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ImmersiveOverlay.SubmitOverlayTexture_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetOverlayAndWebXRVisibility
device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ImmersiveOverlay.SetOverlayAndWebXRVisibility_Params',
      packedSize: 16,
      fields: [
        { name: 'overlay_visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'webxr_visible', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestNotificationOnWebXrSubmitted
device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ImmersiveOverlay.RequestNotificationOnWebXrSubmitted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.ImmersiveOverlayPtr = device.mojom.ImmersiveOverlayRemote;
device.mojom.ImmersiveOverlayRequest = device.mojom.ImmersiveOverlayPendingReceiver;


// Interface: IsolatedXRRuntimeProviderClient
device.mojom.IsolatedXRRuntimeProviderClient = {};

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
};

device.mojom.IsolatedXRRuntimeProviderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDeviceAdded(runtime, device_data, device_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_ParamsSpec,
      null,
      [runtime, device_data, device_id]);
  }

  onDeviceRemoved(device_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_ParamsSpec,
      null,
      [device_index]);
  }

  onDevicesEnumerated() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnDeviceAdded
device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.IsolatedXRRuntimeProviderClient.OnDeviceAdded_Params',
      packedSize: 32,
      fields: [
        { name: 'runtime', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'device_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'device_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDeviceRemoved
device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.IsolatedXRRuntimeProviderClient.OnDeviceRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'device_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDevicesEnumerated
device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.IsolatedXRRuntimeProviderClient.OnDevicesEnumerated_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.IsolatedXRRuntimeProviderClientPtr = device.mojom.IsolatedXRRuntimeProviderClientRemote;
device.mojom.IsolatedXRRuntimeProviderClientRequest = device.mojom.IsolatedXRRuntimeProviderClientPendingReceiver;


// Interface: IsolatedXRRuntimeProvider
device.mojom.IsolatedXRRuntimeProvider = {};

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
};

device.mojom.IsolatedXRRuntimeProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestDevices(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.IsolatedXRRuntimeProvider_RequestDevices_ParamsSpec,
      null,
      [client]);
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

// ParamsSpec for RequestDevices
device.mojom.IsolatedXRRuntimeProvider_RequestDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.IsolatedXRRuntimeProvider.RequestDevices_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.IsolatedXRRuntimeProviderPtr = device.mojom.IsolatedXRRuntimeProviderRemote;
device.mojom.IsolatedXRRuntimeProviderRequest = device.mojom.IsolatedXRRuntimeProviderPendingReceiver;


// Interface: XRDeviceService
device.mojom.XRDeviceService = {};

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
};

device.mojom.XRDeviceServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindRuntimeProvider(receiver, host) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.XRDeviceService_BindRuntimeProvider_ParamsSpec,
      null,
      [receiver, host]);
  }

  bindTestHook(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.XRDeviceService_BindTestHook_ParamsSpec,
      null,
      [receiver]);
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

// ParamsSpec for BindRuntimeProvider
device.mojom.XRDeviceService_BindRuntimeProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRDeviceService.BindRuntimeProvider_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindTestHook
device.mojom.XRDeviceService_BindTestHook_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRDeviceService.BindTestHook_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.XRDeviceServicePtr = device.mojom.XRDeviceServiceRemote;
device.mojom.XRDeviceServiceRequest = device.mojom.XRDeviceServicePendingReceiver;


// Interface: XRDeviceServiceHost
device.mojom.XRDeviceServiceHost = {};

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
};

device.mojom.XRDeviceServiceHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindGpu(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.XRDeviceServiceHost_BindGpu_ParamsSpec,
      null,
      [receiver]);
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

// ParamsSpec for BindGpu
device.mojom.XRDeviceServiceHost_BindGpu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRDeviceServiceHost.BindGpu_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.XRDeviceServiceHostPtr = device.mojom.XRDeviceServiceHostRemote;
device.mojom.XRDeviceServiceHostRequest = device.mojom.XRDeviceServiceHostPendingReceiver;

