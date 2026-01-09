// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/display_private.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: DisplayPrivate
viz.mojom.DisplayPrivate = {};

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
      null,
      [visible],
      undefined,
      undefined
    );
  }

  disableSwapUntilResize() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.DisplayPrivate_DisableSwapUntilResize_ParamsSpec,
      null,
      null,
      [],
      undefined,
      mojo.internal.kMessageFlagIsSync
    );
  }

  resize(size) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.DisplayPrivate_Resize_ParamsSpec,
      null,
      null,
      [size],
      undefined,
      undefined
    );
  }

  setDisplayColorMatrix(color_matrix) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.DisplayPrivate_SetDisplayColorMatrix_ParamsSpec,
      null,
      null,
      [color_matrix],
      undefined,
      undefined
    );
  }

  setDisplayColorSpaces(display_color_spaces) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.DisplayPrivate_SetDisplayColorSpaces_ParamsSpec,
      null,
      null,
      [display_color_spaces],
      undefined,
      undefined
    );
  }

  setOutputIsSecure(secure) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.DisplayPrivate_SetOutputIsSecure_ParamsSpec,
      null,
      null,
      [secure],
      undefined,
      undefined
    );
  }

  setVSyncDisplayID(display_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.DisplayPrivate_SetVSyncDisplayID_ParamsSpec,
      null,
      null,
      [display_id],
      undefined,
      undefined
    );
  }

  setDisplayVSyncParameters(timebase, interval) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      viz.mojom.DisplayPrivate_SetDisplayVSyncParameters_ParamsSpec,
      null,
      null,
      [timebase, interval],
      undefined,
      undefined
    );
  }

  forceImmediateDrawAndSwapIfPossible() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      viz.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  updateRefreshRate(refresh_rate) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      viz.mojom.DisplayPrivate_UpdateRefreshRate_ParamsSpec,
      null,
      null,
      [refresh_rate],
      undefined,
      undefined
    );
  }

  setAdaptiveRefreshRateInfo(has_support, suggested_high, device_scale_factor) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      viz.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_ParamsSpec,
      null,
      null,
      [has_support, suggested_high, device_scale_factor],
      undefined,
      undefined
    );
  }

  setSupportedRefreshRates(refresh_rates) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      viz.mojom.DisplayPrivate_SetSupportedRefreshRates_ParamsSpec,
      null,
      null,
      [refresh_rates],
      undefined,
      undefined
    );
  }

  preserveChildSurfaceControls() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      viz.mojom.DisplayPrivate_PreserveChildSurfaceControls_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setSwapCompletionCallbackEnabled(enable) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      viz.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_ParamsSpec,
      null,
      null,
      [enable],
      undefined,
      undefined
    );
  }

  addVSyncParameterObserver(observer) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      viz.mojom.DisplayPrivate_AddVSyncParameterObserver_ParamsSpec,
      null,
      null,
      [observer],
      undefined,
      undefined
    );
  }

  setDelegatedInkPointRenderer(receiver) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      viz.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  setStandaloneBeginFrameObserver(observer) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      viz.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_ParamsSpec,
      null,
      null,
      [observer],
      undefined,
      undefined
    );
  }

  setMaxVSyncAndVrr(max_vsync_interval, vrr_state) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      viz.mojom.DisplayPrivate_SetMaxVSyncAndVrr_ParamsSpec,
      null,
      null,
      [max_vsync_interval, vrr_state],
      undefined,
      undefined
    );
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

// ParamsSpec for SetDisplayVisible
viz.mojom.DisplayPrivate_SetDisplayVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetDisplayVisible_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisableSwapUntilResize
viz.mojom.DisplayPrivate_DisableSwapUntilResize_ParamsSpec = {
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
viz.mojom.DisplayPrivate_Resize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.Resize_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDisplayColorMatrix
viz.mojom.DisplayPrivate_SetDisplayColorMatrix_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetDisplayColorMatrix_Params',
      packedSize: 16,
      fields: [
        { name: 'color_matrix', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDisplayColorSpaces
viz.mojom.DisplayPrivate_SetDisplayColorSpaces_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetDisplayColorSpaces_Params',
      packedSize: 16,
      fields: [
        { name: 'display_color_spaces', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetOutputIsSecure
viz.mojom.DisplayPrivate_SetOutputIsSecure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetOutputIsSecure_Params',
      packedSize: 16,
      fields: [
        { name: 'secure', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetVSyncDisplayID
viz.mojom.DisplayPrivate_SetVSyncDisplayID_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetVSyncDisplayID_Params',
      packedSize: 16,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDisplayVSyncParameters
viz.mojom.DisplayPrivate_SetDisplayVSyncParameters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetDisplayVSyncParameters_Params',
      packedSize: 24,
      fields: [
        { name: 'timebase', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'interval', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ForceImmediateDrawAndSwapIfPossible
viz.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_ParamsSpec = {
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
viz.mojom.DisplayPrivate_UpdateRefreshRate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.UpdateRefreshRate_Params',
      packedSize: 16,
      fields: [
        { name: 'refresh_rate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAdaptiveRefreshRateInfo
viz.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetAdaptiveRefreshRateInfo_Params',
      packedSize: 32,
      fields: [
        { name: 'has_support', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'suggested_high', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'device_scale_factor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for SetSupportedRefreshRates
viz.mojom.DisplayPrivate_SetSupportedRefreshRates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetSupportedRefreshRates_Params',
      packedSize: 16,
      fields: [
        { name: 'refresh_rates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PreserveChildSurfaceControls
viz.mojom.DisplayPrivate_PreserveChildSurfaceControls_ParamsSpec = {
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
viz.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetSwapCompletionCallbackEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddVSyncParameterObserver
viz.mojom.DisplayPrivate_AddVSyncParameterObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.AddVSyncParameterObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDelegatedInkPointRenderer
viz.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetDelegatedInkPointRenderer_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetStandaloneBeginFrameObserver
viz.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetStandaloneBeginFrameObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetMaxVSyncAndVrr
viz.mojom.DisplayPrivate_SetMaxVSyncAndVrr_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayPrivate.SetMaxVSyncAndVrr_Params',
      packedSize: 24,
      fields: [
        { name: 'max_vsync_interval', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'vrr_state', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
viz.mojom.DisplayPrivatePtr = viz.mojom.DisplayPrivateRemote;
viz.mojom.DisplayPrivateRequest = viz.mojom.DisplayPrivatePendingReceiver;


// Interface: DisplayClient
viz.mojom.DisplayClient = {};

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
      null,
      [ca_layer_params],
      undefined,
      undefined
    );
  }

  createLayeredWindowUpdater(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.DisplayClient_CreateLayeredWindowUpdater_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  addChildWindowToBrowser(child_window) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.DisplayClient_AddChildWindowToBrowser_ParamsSpec,
      null,
      null,
      [child_window],
      undefined,
      undefined
    );
  }

  didCompleteSwapWithSize(size) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.DisplayClient_DidCompleteSwapWithSize_ParamsSpec,
      null,
      null,
      [size],
      undefined,
      undefined
    );
  }

  didCompleteSwapWithNewSize(size) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.DisplayClient_DidCompleteSwapWithNewSize_ParamsSpec,
      null,
      null,
      [size],
      undefined,
      undefined
    );
  }

  onContextCreationResult(result) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.DisplayClient_OnContextCreationResult_ParamsSpec,
      null,
      null,
      [result],
      undefined,
      undefined
    );
  }

  setWideColorEnabled(enabled) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.DisplayClient_SetWideColorEnabled_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  setPreferredRefreshRate(refresh_rate) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      viz.mojom.DisplayClient_SetPreferredRefreshRate_ParamsSpec,
      null,
      null,
      [refresh_rate],
      undefined,
      undefined
    );
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

// ParamsSpec for OnDisplayReceivedCALayerParams
viz.mojom.DisplayClient_OnDisplayReceivedCALayerParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayClient.OnDisplayReceivedCALayerParams_Params',
      packedSize: 16,
      fields: [
        { name: 'ca_layer_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateLayeredWindowUpdater
viz.mojom.DisplayClient_CreateLayeredWindowUpdater_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayClient.CreateLayeredWindowUpdater_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddChildWindowToBrowser
viz.mojom.DisplayClient_AddChildWindowToBrowser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayClient.AddChildWindowToBrowser_Params',
      packedSize: 16,
      fields: [
        { name: 'child_window', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DidCompleteSwapWithSize
viz.mojom.DisplayClient_DidCompleteSwapWithSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayClient.DidCompleteSwapWithSize_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DidCompleteSwapWithNewSize
viz.mojom.DisplayClient_DidCompleteSwapWithNewSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayClient.DidCompleteSwapWithNewSize_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnContextCreationResult
viz.mojom.DisplayClient_OnContextCreationResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayClient.OnContextCreationResult_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetWideColorEnabled
viz.mojom.DisplayClient_SetWideColorEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayClient.SetWideColorEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPreferredRefreshRate
viz.mojom.DisplayClient_SetPreferredRefreshRate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DisplayClient.SetPreferredRefreshRate_Params',
      packedSize: 16,
      fields: [
        { name: 'refresh_rate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.DisplayClientPtr = viz.mojom.DisplayClientRemote;
viz.mojom.DisplayClientRequest = viz.mojom.DisplayClientPendingReceiver;

