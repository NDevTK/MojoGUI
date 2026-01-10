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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetDisplayVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayPrivate_SetDisplayVisible_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDisplayVisible (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: DisableSwapUntilResize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayPrivate_DisableSwapUntilResize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableSwapUntilResize (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: Resize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayPrivate_Resize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resize (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: SetDisplayColorMatrix
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayPrivate_SetDisplayColorMatrix_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDisplayColorMatrix (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: SetDisplayColorSpaces
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayPrivate_SetDisplayColorSpaces_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDisplayColorSpaces (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: SetOutputIsSecure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayPrivate_SetOutputIsSecure_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOutputIsSecure (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: SetVSyncDisplayID
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayPrivate_SetVSyncDisplayID_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVSyncDisplayID (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: SetDisplayVSyncParameters
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayPrivate_SetDisplayVSyncParameters_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDisplayVSyncParameters (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: ForceImmediateDrawAndSwapIfPossible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceImmediateDrawAndSwapIfPossible (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 9: UpdateRefreshRate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayPrivate_UpdateRefreshRate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateRefreshRate (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 10: SetAdaptiveRefreshRateInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAdaptiveRefreshRateInfo (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 11: SetSupportedRefreshRates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayPrivate_SetSupportedRefreshRates_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSupportedRefreshRates (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 12: PreserveChildSurfaceControls
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayPrivate_PreserveChildSurfaceControls_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreserveChildSurfaceControls (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 13: SetSwapCompletionCallbackEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSwapCompletionCallbackEnabled (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 14: AddVSyncParameterObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayPrivate_AddVSyncParameterObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddVSyncParameterObserver (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 15: SetDelegatedInkPointRenderer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDelegatedInkPointRenderer (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 16: SetStandaloneBeginFrameObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetStandaloneBeginFrameObserver (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 17: SetMaxVSyncAndVrr
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayPrivate_SetMaxVSyncAndVrr_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMaxVSyncAndVrr (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayPrivate_SetDisplayVisible_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setDisplayVisible');
          const result = this.impl.setDisplayVisible(params.visible);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayPrivate_DisableSwapUntilResize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.disableSwapUntilResize');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayPrivate_Resize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resize');
          const result = this.impl.resize(params.size);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayPrivate_SetDisplayColorMatrix_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setDisplayColorMatrix');
          const result = this.impl.setDisplayColorMatrix(params.color_matrix);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayPrivate_SetDisplayColorSpaces_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setDisplayColorSpaces');
          const result = this.impl.setDisplayColorSpaces(params.display_color_spaces);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayPrivate_SetOutputIsSecure_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setOutputIsSecure');
          const result = this.impl.setOutputIsSecure(params.secure);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayPrivate_SetVSyncDisplayID_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setVSyncDisplayID');
          const result = this.impl.setVSyncDisplayID(params.display_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayPrivate_SetDisplayVSyncParameters_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setDisplayVSyncParameters');
          const result = this.impl.setDisplayVSyncParameters(params.timebase, params.interval);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.forceImmediateDrawAndSwapIfPossible');
          const result = this.impl.forceImmediateDrawAndSwapIfPossible();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayPrivate_UpdateRefreshRate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateRefreshRate');
          const result = this.impl.updateRefreshRate(params.refresh_rate);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setAdaptiveRefreshRateInfo');
          const result = this.impl.setAdaptiveRefreshRateInfo(params.has_support, params.suggested_high, params.device_scale_factor);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayPrivate_SetSupportedRefreshRates_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setSupportedRefreshRates');
          const result = this.impl.setSupportedRefreshRates(params.refresh_rates);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayPrivate_PreserveChildSurfaceControls_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.preserveChildSurfaceControls');
          const result = this.impl.preserveChildSurfaceControls();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setSwapCompletionCallbackEnabled');
          const result = this.impl.setSwapCompletionCallbackEnabled(params.enable);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayPrivate_AddVSyncParameterObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addVSyncParameterObserver');
          const result = this.impl.addVSyncParameterObserver(params.observer);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setDelegatedInkPointRenderer');
          const result = this.impl.setDelegatedInkPointRenderer(params.receiver);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setStandaloneBeginFrameObserver');
          const result = this.impl.setStandaloneBeginFrameObserver(params.observer);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayPrivate_SetMaxVSyncAndVrr_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setMaxVSyncAndVrr');
          const result = this.impl.setMaxVSyncAndVrr(params.max_vsync_interval, params.vrr_state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnDisplayReceivedCALayerParams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayClient_OnDisplayReceivedCALayerParams_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDisplayReceivedCALayerParams (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: CreateLayeredWindowUpdater
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayClient_CreateLayeredWindowUpdater_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateLayeredWindowUpdater (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: AddChildWindowToBrowser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayClient_AddChildWindowToBrowser_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddChildWindowToBrowser (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: DidCompleteSwapWithSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayClient_DidCompleteSwapWithSize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidCompleteSwapWithSize (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: DidCompleteSwapWithNewSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayClient_DidCompleteSwapWithNewSize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidCompleteSwapWithNewSize (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: OnContextCreationResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayClient_OnContextCreationResult_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnContextCreationResult (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: SetWideColorEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayClient_SetWideColorEnabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWideColorEnabled (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: SetPreferredRefreshRate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.DisplayClient_SetPreferredRefreshRate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPreferredRefreshRate (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayClient_OnDisplayReceivedCALayerParams_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDisplayReceivedCALayerParams');
          const result = this.impl.onDisplayReceivedCALayerParams(params.ca_layer_params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayClient_CreateLayeredWindowUpdater_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createLayeredWindowUpdater');
          const result = this.impl.createLayeredWindowUpdater(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayClient_AddChildWindowToBrowser_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addChildWindowToBrowser');
          const result = this.impl.addChildWindowToBrowser(params.child_window);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayClient_DidCompleteSwapWithSize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didCompleteSwapWithSize');
          const result = this.impl.didCompleteSwapWithSize(params.size);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayClient_DidCompleteSwapWithNewSize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didCompleteSwapWithNewSize');
          const result = this.impl.didCompleteSwapWithNewSize(params.size);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayClient_OnContextCreationResult_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onContextCreationResult');
          const result = this.impl.onContextCreationResult(params.result);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayClient_SetWideColorEnabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setWideColorEnabled');
          const result = this.impl.setWideColorEnabled(params.enabled);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.DisplayClient_SetPreferredRefreshRate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPreferredRefreshRate');
          const result = this.impl.setPreferredRefreshRate(params.refresh_rate);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.DisplayClientReceiver = viz.mojom.DisplayClientReceiver;

viz.mojom.DisplayClientPtr = viz.mojom.DisplayClientRemote;
viz.mojom.DisplayClientRequest = viz.mojom.DisplayClientPendingReceiver;

