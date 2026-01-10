// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/display_private.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};


// Interface: DisplayPrivate
viz.mojom.mojom.DisplayPrivate = {};

viz.mojom.mojom.DisplayPrivatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.mojom.DisplayPrivateRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.DisplayPrivate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.mojom.DisplayPrivatePendingReceiver,
      handle);
    this.$ = new viz.mojom.mojom.DisplayPrivateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.mojom.DisplayPrivateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setDisplayVisible(visible) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.mojom.DisplayPrivate_SetDisplayVisible_ParamsSpec,
      null,
      [visible]);
  }

  disableSwapUntilResize() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.mojom.DisplayPrivate_DisableSwapUntilResize_ParamsSpec,
      null,
      []);
  }

  resize(size) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.mojom.DisplayPrivate_Resize_ParamsSpec,
      null,
      [size]);
  }

  setDisplayColorMatrix(color_matrix) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.mojom.DisplayPrivate_SetDisplayColorMatrix_ParamsSpec,
      null,
      [color_matrix]);
  }

  setDisplayColorSpaces(display_color_spaces) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.mojom.DisplayPrivate_SetDisplayColorSpaces_ParamsSpec,
      null,
      [display_color_spaces]);
  }

  setOutputIsSecure(secure) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.mojom.DisplayPrivate_SetOutputIsSecure_ParamsSpec,
      null,
      [secure]);
  }

  setVSyncDisplayID(display_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.mojom.DisplayPrivate_SetVSyncDisplayID_ParamsSpec,
      null,
      [display_id]);
  }

  setDisplayVSyncParameters(timebase, interval) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      viz.mojom.mojom.DisplayPrivate_SetDisplayVSyncParameters_ParamsSpec,
      null,
      [timebase, interval]);
  }

  forceImmediateDrawAndSwapIfPossible() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      viz.mojom.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_ParamsSpec,
      null,
      []);
  }

  updateRefreshRate(refresh_rate) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      viz.mojom.mojom.DisplayPrivate_UpdateRefreshRate_ParamsSpec,
      null,
      [refresh_rate]);
  }

  setAdaptiveRefreshRateInfo(has_support, suggested_high, device_scale_factor) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      viz.mojom.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_ParamsSpec,
      null,
      [has_support, suggested_high, device_scale_factor]);
  }

  setSupportedRefreshRates(refresh_rates) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      viz.mojom.mojom.DisplayPrivate_SetSupportedRefreshRates_ParamsSpec,
      null,
      [refresh_rates]);
  }

  preserveChildSurfaceControls() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      viz.mojom.mojom.DisplayPrivate_PreserveChildSurfaceControls_ParamsSpec,
      null,
      []);
  }

  setSwapCompletionCallbackEnabled(enable) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      viz.mojom.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_ParamsSpec,
      null,
      [enable]);
  }

  addVSyncParameterObserver(observer) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      viz.mojom.mojom.DisplayPrivate_AddVSyncParameterObserver_ParamsSpec,
      null,
      [observer]);
  }

  setDelegatedInkPointRenderer(receiver) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      viz.mojom.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_ParamsSpec,
      null,
      [receiver]);
  }

  setStandaloneBeginFrameObserver(observer) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      viz.mojom.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_ParamsSpec,
      null,
      [observer]);
  }

  setMaxVSyncAndVrr(max_vsync_interval, vrr_state) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      viz.mojom.mojom.DisplayPrivate_SetMaxVSyncAndVrr_ParamsSpec,
      null,
      [max_vsync_interval, vrr_state]);
  }

};

viz.mojom.mojom.DisplayPrivate.getRemote = function() {
  let remote = new viz.mojom.mojom.DisplayPrivateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.DisplayPrivate',
    'context');
  return remote.$;
};

// ParamsSpec for SetDisplayVisible
viz.mojom.mojom.DisplayPrivate_SetDisplayVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetDisplayVisible_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisableSwapUntilResize
viz.mojom.mojom.DisplayPrivate_DisableSwapUntilResize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.DisableSwapUntilResize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Resize
viz.mojom.mojom.DisplayPrivate_Resize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.Resize_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDisplayColorMatrix
viz.mojom.mojom.DisplayPrivate_SetDisplayColorMatrix_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetDisplayColorMatrix_Params',
      packedSize: 16,
      fields: [
        { name: 'color_matrix', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDisplayColorSpaces
viz.mojom.mojom.DisplayPrivate_SetDisplayColorSpaces_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetDisplayColorSpaces_Params',
      packedSize: 16,
      fields: [
        { name: 'display_color_spaces', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.DisplayColorSpacesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetOutputIsSecure
viz.mojom.mojom.DisplayPrivate_SetOutputIsSecure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetOutputIsSecure_Params',
      packedSize: 16,
      fields: [
        { name: 'secure', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetVSyncDisplayID
viz.mojom.mojom.DisplayPrivate_SetVSyncDisplayID_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetVSyncDisplayID_Params',
      packedSize: 16,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDisplayVSyncParameters
viz.mojom.mojom.DisplayPrivate_SetDisplayVSyncParameters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetDisplayVSyncParameters_Params',
      packedSize: 24,
      fields: [
        { name: 'timebase', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'interval', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ForceImmediateDrawAndSwapIfPossible
viz.mojom.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.ForceImmediateDrawAndSwapIfPossible_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for UpdateRefreshRate
viz.mojom.mojom.DisplayPrivate_UpdateRefreshRate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.UpdateRefreshRate_Params',
      packedSize: 16,
      fields: [
        { name: 'refresh_rate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAdaptiveRefreshRateInfo
viz.mojom.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetAdaptiveRefreshRateInfo_Params',
      packedSize: 24,
      fields: [
        { name: 'has_support', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'suggested_high', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'device_scale_factor', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetSupportedRefreshRates
viz.mojom.mojom.DisplayPrivate_SetSupportedRefreshRates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetSupportedRefreshRates_Params',
      packedSize: 16,
      fields: [
        { name: 'refresh_rates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Float, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PreserveChildSurfaceControls
viz.mojom.mojom.DisplayPrivate_PreserveChildSurfaceControls_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.PreserveChildSurfaceControls_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetSwapCompletionCallbackEnabled
viz.mojom.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetSwapCompletionCallbackEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddVSyncParameterObserver
viz.mojom.mojom.DisplayPrivate_AddVSyncParameterObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.AddVSyncParameterObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDelegatedInkPointRenderer
viz.mojom.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetDelegatedInkPointRenderer_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetStandaloneBeginFrameObserver
viz.mojom.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetStandaloneBeginFrameObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetMaxVSyncAndVrr
viz.mojom.mojom.DisplayPrivate_SetMaxVSyncAndVrr_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetMaxVSyncAndVrr_Params',
      packedSize: 24,
      fields: [
        { name: 'max_vsync_interval', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'vrr_state', packedOffset: 8, packedBitOffset: 0, type: display.mojom.VariableRefreshRateStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
viz.mojom.mojom.DisplayPrivatePtr = viz.mojom.mojom.DisplayPrivateRemote;
viz.mojom.mojom.DisplayPrivateRequest = viz.mojom.mojom.DisplayPrivatePendingReceiver;


// Interface: DisplayClient
viz.mojom.mojom.DisplayClient = {};

viz.mojom.mojom.DisplayClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.mojom.DisplayClientRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.DisplayClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.mojom.DisplayClientPendingReceiver,
      handle);
    this.$ = new viz.mojom.mojom.DisplayClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.mojom.DisplayClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDisplayReceivedCALayerParams(ca_layer_params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.mojom.DisplayClient_OnDisplayReceivedCALayerParams_ParamsSpec,
      null,
      [ca_layer_params]);
  }

  createLayeredWindowUpdater(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.mojom.DisplayClient_CreateLayeredWindowUpdater_ParamsSpec,
      null,
      [receiver]);
  }

  addChildWindowToBrowser(child_window) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.mojom.DisplayClient_AddChildWindowToBrowser_ParamsSpec,
      null,
      [child_window]);
  }

  didCompleteSwapWithSize(size) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.mojom.DisplayClient_DidCompleteSwapWithSize_ParamsSpec,
      null,
      [size]);
  }

  didCompleteSwapWithNewSize(size) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.mojom.DisplayClient_DidCompleteSwapWithNewSize_ParamsSpec,
      null,
      [size]);
  }

  onContextCreationResult(result) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.mojom.DisplayClient_OnContextCreationResult_ParamsSpec,
      null,
      [result]);
  }

  setWideColorEnabled(enabled) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.mojom.DisplayClient_SetWideColorEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  setPreferredRefreshRate(refresh_rate) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      viz.mojom.mojom.DisplayClient_SetPreferredRefreshRate_ParamsSpec,
      null,
      [refresh_rate]);
  }

};

viz.mojom.mojom.DisplayClient.getRemote = function() {
  let remote = new viz.mojom.mojom.DisplayClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.DisplayClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnDisplayReceivedCALayerParams
viz.mojom.mojom.DisplayClient_OnDisplayReceivedCALayerParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayClient.OnDisplayReceivedCALayerParams_Params',
      packedSize: 16,
      fields: [
        { name: 'ca_layer_params', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.CALayerParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateLayeredWindowUpdater
viz.mojom.mojom.DisplayClient_CreateLayeredWindowUpdater_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayClient.CreateLayeredWindowUpdater_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddChildWindowToBrowser
viz.mojom.mojom.DisplayClient_AddChildWindowToBrowser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayClient.AddChildWindowToBrowser_Params',
      packedSize: 16,
      fields: [
        { name: 'child_window', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.SurfaceHandleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DidCompleteSwapWithSize
viz.mojom.mojom.DisplayClient_DidCompleteSwapWithSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayClient.DidCompleteSwapWithSize_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DidCompleteSwapWithNewSize
viz.mojom.mojom.DisplayClient_DidCompleteSwapWithNewSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayClient.DidCompleteSwapWithNewSize_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnContextCreationResult
viz.mojom.mojom.DisplayClient_OnContextCreationResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayClient.OnContextCreationResult_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.ContextResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetWideColorEnabled
viz.mojom.mojom.DisplayClient_SetWideColorEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayClient.SetWideColorEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPreferredRefreshRate
viz.mojom.mojom.DisplayClient_SetPreferredRefreshRate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayClient.SetPreferredRefreshRate_Params',
      packedSize: 16,
      fields: [
        { name: 'refresh_rate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.mojom.DisplayClientPtr = viz.mojom.mojom.DisplayClientRemote;
viz.mojom.mojom.DisplayClientRequest = viz.mojom.mojom.DisplayClientPendingReceiver;

