// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/display_private.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var gpu = gpu || {};
var mojo_base = mojo_base || {};
var display = display || {};
var gfx = gfx || {};
var ui = ui || {};

viz.mojom.DisplayPrivate = {};
viz.mojom.DisplayPrivate.$interfaceName = 'viz.mojom.DisplayPrivate';
viz.mojom.DisplayPrivate_SetDisplayVisible_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_DisableSwapUntilResize_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_DisableSwapUntilResize_ResponseParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_Resize_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetDisplayColorMatrix_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetDisplayColorSpaces_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetOutputIsSecure_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetVSyncDisplayID_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetDisplayVSyncParameters_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_UpdateRefreshRate_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetSupportedRefreshRates_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_PreserveChildSurfaceControls_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_AddVSyncParameterObserver_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetMaxVSyncAndVrr_ParamsSpec = { $: {} };
viz.mojom.DisplayClient = {};
viz.mojom.DisplayClient.$interfaceName = 'viz.mojom.DisplayClient';
viz.mojom.DisplayClient_OnDisplayReceivedCALayerParams_ParamsSpec = { $: {} };
viz.mojom.DisplayClient_CreateLayeredWindowUpdater_ParamsSpec = { $: {} };
viz.mojom.DisplayClient_AddChildWindowToBrowser_ParamsSpec = { $: {} };
viz.mojom.DisplayClient_DidCompleteSwapWithSize_ParamsSpec = { $: {} };
viz.mojom.DisplayClient_DidCompleteSwapWithNewSize_ParamsSpec = { $: {} };
viz.mojom.DisplayClient_OnContextCreationResult_ParamsSpec = { $: {} };
viz.mojom.DisplayClient_SetWideColorEnabled_ParamsSpec = { $: {} };
viz.mojom.DisplayClient_SetPreferredRefreshRate_ParamsSpec = { $: {} };

// Interface: DisplayPrivate
mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetDisplayVisible_ParamsSpec, 'viz.mojom.DisplayPrivate_SetDisplayVisible_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_DisableSwapUntilResize_ParamsSpec, 'viz.mojom.DisplayPrivate_DisableSwapUntilResize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_DisableSwapUntilResize_ResponseParamsSpec, 'viz.mojom.DisplayPrivate_DisableSwapUntilResize_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_Resize_ParamsSpec, 'viz.mojom.DisplayPrivate_Resize_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetDisplayColorMatrix_ParamsSpec, 'viz.mojom.DisplayPrivate_SetDisplayColorMatrix_Params', [
      mojo.internal.StructField('color_matrix', 0, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetDisplayColorSpaces_ParamsSpec, 'viz.mojom.DisplayPrivate_SetDisplayColorSpaces_Params', [
      mojo.internal.StructField('display_color_spaces', 0, 0, gfx.mojom.DisplayColorSpacesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetOutputIsSecure_ParamsSpec, 'viz.mojom.DisplayPrivate_SetOutputIsSecure_Params', [
      mojo.internal.StructField('secure', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetVSyncDisplayID_ParamsSpec, 'viz.mojom.DisplayPrivate_SetVSyncDisplayID_Params', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetDisplayVSyncParameters_ParamsSpec, 'viz.mojom.DisplayPrivate_SetDisplayVSyncParameters_Params', [
      mojo.internal.StructField('timebase', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('interval', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_ParamsSpec, 'viz.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_UpdateRefreshRate_ParamsSpec, 'viz.mojom.DisplayPrivate_UpdateRefreshRate_Params', [
      mojo.internal.StructField('refresh_rate', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_ParamsSpec, 'viz.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_Params', [
      mojo.internal.StructField('suggested_high', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('has_support', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetSupportedRefreshRates_ParamsSpec, 'viz.mojom.DisplayPrivate_SetSupportedRefreshRates_Params', [
      mojo.internal.StructField('refresh_rates', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_PreserveChildSurfaceControls_ParamsSpec, 'viz.mojom.DisplayPrivate_PreserveChildSurfaceControls_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_ParamsSpec, 'viz.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_Params', [
      mojo.internal.StructField('enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_AddVSyncParameterObserver_ParamsSpec, 'viz.mojom.DisplayPrivate_AddVSyncParameterObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(viz.mojom.VSyncParameterObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_ParamsSpec, 'viz.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(gfx.mojom.DelegatedInkPointRendererRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_ParamsSpec, 'viz.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(viz.mojom.BeginFrameObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetMaxVSyncAndVrr_ParamsSpec, 'viz.mojom.DisplayPrivate_SetMaxVSyncAndVrr_Params', [
      mojo.internal.StructField('max_vsync_interval', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('vrr_state', 8, 0, display.mojom.VariableRefreshRateStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

viz.mojom.DisplayPrivatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.DisplayPrivateRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.DisplayPrivate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.DisplayPrivatePendingReceiver,
      handle);
    this.$ = new viz.mojom.DisplayPrivateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.DisplayPrivateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setDisplayVisible(visible) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.DisplayPrivate_SetDisplayVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  disableSwapUntilResize() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.DisplayPrivate_DisableSwapUntilResize_ParamsSpec,
      viz.mojom.DisplayPrivate_DisableSwapUntilResize_ResponseParamsSpec,
      [],
      false);
  }

  resize(size) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.DisplayPrivate_Resize_ParamsSpec,
      null,
      [size],
      false);
  }

  setDisplayColorMatrix(color_matrix) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.DisplayPrivate_SetDisplayColorMatrix_ParamsSpec,
      null,
      [color_matrix],
      false);
  }

  setDisplayColorSpaces(display_color_spaces) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.DisplayPrivate_SetDisplayColorSpaces_ParamsSpec,
      null,
      [display_color_spaces],
      false);
  }

  setOutputIsSecure(secure) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.DisplayPrivate_SetOutputIsSecure_ParamsSpec,
      null,
      [secure],
      false);
  }

  setVSyncDisplayID(display_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.DisplayPrivate_SetVSyncDisplayID_ParamsSpec,
      null,
      [display_id],
      false);
  }

  setDisplayVSyncParameters(timebase, interval) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      viz.mojom.DisplayPrivate_SetDisplayVSyncParameters_ParamsSpec,
      null,
      [timebase, interval],
      false);
  }

  forceImmediateDrawAndSwapIfPossible() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      viz.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_ParamsSpec,
      null,
      [],
      false);
  }

  updateRefreshRate(refresh_rate) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      viz.mojom.DisplayPrivate_UpdateRefreshRate_ParamsSpec,
      null,
      [refresh_rate],
      false);
  }

  setAdaptiveRefreshRateInfo(has_support, suggested_high, device_scale_factor) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      viz.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_ParamsSpec,
      null,
      [has_support, suggested_high, device_scale_factor],
      false);
  }

  setSupportedRefreshRates(refresh_rates) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      viz.mojom.DisplayPrivate_SetSupportedRefreshRates_ParamsSpec,
      null,
      [refresh_rates],
      false);
  }

  preserveChildSurfaceControls() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      viz.mojom.DisplayPrivate_PreserveChildSurfaceControls_ParamsSpec,
      null,
      [],
      false);
  }

  setSwapCompletionCallbackEnabled(enable) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      viz.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_ParamsSpec,
      null,
      [enable],
      false);
  }

  addVSyncParameterObserver(observer) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      viz.mojom.DisplayPrivate_AddVSyncParameterObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  setDelegatedInkPointRenderer(receiver) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      viz.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_ParamsSpec,
      null,
      [receiver],
      false);
  }

  setStandaloneBeginFrameObserver(observer) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      viz.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  setMaxVSyncAndVrr(max_vsync_interval, vrr_state) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      viz.mojom.DisplayPrivate_SetMaxVSyncAndVrr_ParamsSpec,
      null,
      [max_vsync_interval, vrr_state],
      false);
  }

};

viz.mojom.DisplayPrivate.getRemote = function() {
  let remote = new viz.mojom.DisplayPrivateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.DisplayPrivate',
    'context');
  return remote.$;
};

viz.mojom.DisplayPrivateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = viz.mojom.DisplayPrivate_SetDisplayVisible_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setDisplayVisible(params.visible);
          break;
        }
        case 1: {
          const params = viz.mojom.DisplayPrivate_DisableSwapUntilResize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.disableSwapUntilResize();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.DisplayPrivate_DisableSwapUntilResize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = viz.mojom.DisplayPrivate_Resize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resize(params.size);
          break;
        }
        case 3: {
          const params = viz.mojom.DisplayPrivate_SetDisplayColorMatrix_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setDisplayColorMatrix(params.color_matrix);
          break;
        }
        case 4: {
          const params = viz.mojom.DisplayPrivate_SetDisplayColorSpaces_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setDisplayColorSpaces(params.display_color_spaces);
          break;
        }
        case 5: {
          const params = viz.mojom.DisplayPrivate_SetOutputIsSecure_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setOutputIsSecure(params.secure);
          break;
        }
        case 6: {
          const params = viz.mojom.DisplayPrivate_SetVSyncDisplayID_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setVSyncDisplayID(params.display_id);
          break;
        }
        case 7: {
          const params = viz.mojom.DisplayPrivate_SetDisplayVSyncParameters_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setDisplayVSyncParameters(params.timebase, params.interval);
          break;
        }
        case 8: {
          const params = viz.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_ParamsSpec.$.decode(message.payload);
          const result = this.impl.forceImmediateDrawAndSwapIfPossible();
          break;
        }
        case 9: {
          const params = viz.mojom.DisplayPrivate_UpdateRefreshRate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateRefreshRate(params.refresh_rate);
          break;
        }
        case 10: {
          const params = viz.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setAdaptiveRefreshRateInfo(params.has_support, params.suggested_high, params.device_scale_factor);
          break;
        }
        case 11: {
          const params = viz.mojom.DisplayPrivate_SetSupportedRefreshRates_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setSupportedRefreshRates(params.refresh_rates);
          break;
        }
        case 12: {
          const params = viz.mojom.DisplayPrivate_PreserveChildSurfaceControls_ParamsSpec.$.decode(message.payload);
          const result = this.impl.preserveChildSurfaceControls();
          break;
        }
        case 13: {
          const params = viz.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setSwapCompletionCallbackEnabled(params.enable);
          break;
        }
        case 14: {
          const params = viz.mojom.DisplayPrivate_AddVSyncParameterObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addVSyncParameterObserver(params.observer);
          break;
        }
        case 15: {
          const params = viz.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setDelegatedInkPointRenderer(params.receiver);
          break;
        }
        case 16: {
          const params = viz.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setStandaloneBeginFrameObserver(params.observer);
          break;
        }
        case 17: {
          const params = viz.mojom.DisplayPrivate_SetMaxVSyncAndVrr_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setMaxVSyncAndVrr(params.max_vsync_interval, params.vrr_state);
          break;
        }
      }
    });
  }
};

viz.mojom.DisplayPrivateReceiver = viz.mojom.DisplayPrivateReceiver;

viz.mojom.DisplayPrivatePtr = viz.mojom.DisplayPrivateRemote;
viz.mojom.DisplayPrivateRequest = viz.mojom.DisplayPrivatePendingReceiver;


// Interface: DisplayClient
mojo.internal.Struct(
    viz.mojom.DisplayClient_OnDisplayReceivedCALayerParams_ParamsSpec, 'viz.mojom.DisplayClient_OnDisplayReceivedCALayerParams_Params', [
      mojo.internal.StructField('ca_layer_params', 0, 0, gfx.mojom.CALayerParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayClient_CreateLayeredWindowUpdater_ParamsSpec, 'viz.mojom.DisplayClient_CreateLayeredWindowUpdater_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.LayeredWindowUpdaterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayClient_AddChildWindowToBrowser_ParamsSpec, 'viz.mojom.DisplayClient_AddChildWindowToBrowser_Params', [
      mojo.internal.StructField('child_window', 0, 0, gpu.mojom.SurfaceHandleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayClient_DidCompleteSwapWithSize_ParamsSpec, 'viz.mojom.DisplayClient_DidCompleteSwapWithSize_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayClient_DidCompleteSwapWithNewSize_ParamsSpec, 'viz.mojom.DisplayClient_DidCompleteSwapWithNewSize_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayClient_OnContextCreationResult_ParamsSpec, 'viz.mojom.DisplayClient_OnContextCreationResult_Params', [
      mojo.internal.StructField('result', 0, 0, gpu.mojom.ContextResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayClient_SetWideColorEnabled_ParamsSpec, 'viz.mojom.DisplayClient_SetWideColorEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayClient_SetPreferredRefreshRate_ParamsSpec, 'viz.mojom.DisplayClient_SetPreferredRefreshRate_Params', [
      mojo.internal.StructField('refresh_rate', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

viz.mojom.DisplayClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.DisplayClientRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.DisplayClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.DisplayClientPendingReceiver,
      handle);
    this.$ = new viz.mojom.DisplayClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.DisplayClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDisplayReceivedCALayerParams(ca_layer_params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.DisplayClient_OnDisplayReceivedCALayerParams_ParamsSpec,
      null,
      [ca_layer_params],
      false);
  }

  createLayeredWindowUpdater(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.DisplayClient_CreateLayeredWindowUpdater_ParamsSpec,
      null,
      [receiver],
      false);
  }

  addChildWindowToBrowser(child_window) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.DisplayClient_AddChildWindowToBrowser_ParamsSpec,
      null,
      [child_window],
      false);
  }

  didCompleteSwapWithSize(size) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.DisplayClient_DidCompleteSwapWithSize_ParamsSpec,
      null,
      [size],
      false);
  }

  didCompleteSwapWithNewSize(size) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.DisplayClient_DidCompleteSwapWithNewSize_ParamsSpec,
      null,
      [size],
      false);
  }

  onContextCreationResult(result) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.DisplayClient_OnContextCreationResult_ParamsSpec,
      null,
      [result],
      false);
  }

  setWideColorEnabled(enabled) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.DisplayClient_SetWideColorEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setPreferredRefreshRate(refresh_rate) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      viz.mojom.DisplayClient_SetPreferredRefreshRate_ParamsSpec,
      null,
      [refresh_rate],
      false);
  }

};

viz.mojom.DisplayClient.getRemote = function() {
  let remote = new viz.mojom.DisplayClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.DisplayClient',
    'context');
  return remote.$;
};

viz.mojom.DisplayClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = viz.mojom.DisplayClient_OnDisplayReceivedCALayerParams_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDisplayReceivedCALayerParams(params.ca_layer_params);
          break;
        }
        case 1: {
          const params = viz.mojom.DisplayClient_CreateLayeredWindowUpdater_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createLayeredWindowUpdater(params.receiver);
          break;
        }
        case 2: {
          const params = viz.mojom.DisplayClient_AddChildWindowToBrowser_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addChildWindowToBrowser(params.child_window);
          break;
        }
        case 3: {
          const params = viz.mojom.DisplayClient_DidCompleteSwapWithSize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.didCompleteSwapWithSize(params.size);
          break;
        }
        case 4: {
          const params = viz.mojom.DisplayClient_DidCompleteSwapWithNewSize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.didCompleteSwapWithNewSize(params.size);
          break;
        }
        case 5: {
          const params = viz.mojom.DisplayClient_OnContextCreationResult_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onContextCreationResult(params.result);
          break;
        }
        case 6: {
          const params = viz.mojom.DisplayClient_SetWideColorEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setWideColorEnabled(params.enabled);
          break;
        }
        case 7: {
          const params = viz.mojom.DisplayClient_SetPreferredRefreshRate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPreferredRefreshRate(params.refresh_rate);
          break;
        }
      }
    });
  }
};

viz.mojom.DisplayClientReceiver = viz.mojom.DisplayClientReceiver;

viz.mojom.DisplayClientPtr = viz.mojom.DisplayClientRemote;
viz.mojom.DisplayClientRequest = viz.mojom.DisplayClientPendingReceiver;

