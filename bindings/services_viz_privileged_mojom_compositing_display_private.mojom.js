// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/display_private.mojom
// Module: viz.mojom

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
  setDisplayVisible(visible) {
    return this.$.setDisplayVisible(visible);
  }
  disableSwapUntilResize() {
    return this.$.disableSwapUntilResize();
  }
  resize(size) {
    return this.$.resize(size);
  }
  setDisplayColorMatrix(color_matrix) {
    return this.$.setDisplayColorMatrix(color_matrix);
  }
  setDisplayColorSpaces(display_color_spaces) {
    return this.$.setDisplayColorSpaces(display_color_spaces);
  }
  setOutputIsSecure(secure) {
    return this.$.setOutputIsSecure(secure);
  }
  setVSyncDisplayID(display_id) {
    return this.$.setVSyncDisplayID(display_id);
  }
  setDisplayVSyncParameters(timebase, interval) {
    return this.$.setDisplayVSyncParameters(timebase, interval);
  }
  forceImmediateDrawAndSwapIfPossible() {
    return this.$.forceImmediateDrawAndSwapIfPossible();
  }
  updateRefreshRate(refresh_rate) {
    return this.$.updateRefreshRate(refresh_rate);
  }
  setAdaptiveRefreshRateInfo(has_support, suggested_high, device_scale_factor) {
    return this.$.setAdaptiveRefreshRateInfo(has_support, suggested_high, device_scale_factor);
  }
  setSupportedRefreshRates(refresh_rates) {
    return this.$.setSupportedRefreshRates(refresh_rates);
  }
  preserveChildSurfaceControls() {
    return this.$.preserveChildSurfaceControls();
  }
  setSwapCompletionCallbackEnabled(enable) {
    return this.$.setSwapCompletionCallbackEnabled(enable);
  }
  addVSyncParameterObserver(observer) {
    return this.$.addVSyncParameterObserver(observer);
  }
  setDelegatedInkPointRenderer(receiver) {
    return this.$.setDelegatedInkPointRenderer(receiver);
  }
  setStandaloneBeginFrameObserver(observer) {
    return this.$.setStandaloneBeginFrameObserver(observer);
  }
  setMaxVSyncAndVrr(max_vsync_interval, vrr_state) {
    return this.$.setMaxVSyncAndVrr(max_vsync_interval, vrr_state);
  }
};

viz.mojom.DisplayPrivateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DisplayPrivate', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setDisplayVisible(visible) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.DisplayPrivate_SetDisplayVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  disableSwapUntilResize() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.DisplayPrivate_DisableSwapUntilResize_ParamsSpec,
      viz.mojom.DisplayPrivate_DisableSwapUntilResize_ResponseParamsSpec,
      [],
      false);
  }

  resize(size) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      viz.mojom.DisplayPrivate_Resize_ParamsSpec,
      null,
      [size],
      false);
  }

  setDisplayColorMatrix(color_matrix) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      viz.mojom.DisplayPrivate_SetDisplayColorMatrix_ParamsSpec,
      null,
      [color_matrix],
      false);
  }

  setDisplayColorSpaces(display_color_spaces) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      viz.mojom.DisplayPrivate_SetDisplayColorSpaces_ParamsSpec,
      null,
      [display_color_spaces],
      false);
  }

  setOutputIsSecure(secure) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      viz.mojom.DisplayPrivate_SetOutputIsSecure_ParamsSpec,
      null,
      [secure],
      false);
  }

  setVSyncDisplayID(display_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      viz.mojom.DisplayPrivate_SetVSyncDisplayID_ParamsSpec,
      null,
      [display_id],
      false);
  }

  setDisplayVSyncParameters(timebase, interval) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      viz.mojom.DisplayPrivate_SetDisplayVSyncParameters_ParamsSpec,
      null,
      [timebase, interval],
      false);
  }

  forceImmediateDrawAndSwapIfPossible() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      viz.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_ParamsSpec,
      null,
      [],
      false);
  }

  updateRefreshRate(refresh_rate) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      viz.mojom.DisplayPrivate_UpdateRefreshRate_ParamsSpec,
      null,
      [refresh_rate],
      false);
  }

  setAdaptiveRefreshRateInfo(has_support, suggested_high, device_scale_factor) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      viz.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_ParamsSpec,
      null,
      [has_support, suggested_high, device_scale_factor],
      false);
  }

  setSupportedRefreshRates(refresh_rates) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      viz.mojom.DisplayPrivate_SetSupportedRefreshRates_ParamsSpec,
      null,
      [refresh_rates],
      false);
  }

  preserveChildSurfaceControls() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      viz.mojom.DisplayPrivate_PreserveChildSurfaceControls_ParamsSpec,
      null,
      [],
      false);
  }

  setSwapCompletionCallbackEnabled(enable) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      viz.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_ParamsSpec,
      null,
      [enable],
      false);
  }

  addVSyncParameterObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      viz.mojom.DisplayPrivate_AddVSyncParameterObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  setDelegatedInkPointRenderer(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      viz.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_ParamsSpec,
      null,
      [receiver],
      false);
  }

  setStandaloneBeginFrameObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      viz.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  setMaxVSyncAndVrr(max_vsync_interval, vrr_state) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('DisplayPrivate', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDisplayVisible_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_DisableSwapUntilResize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_Resize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDisplayColorMatrix_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDisplayColorSpaces_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetOutputIsSecure_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetVSyncDisplayID_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDisplayVSyncParameters_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_UpdateRefreshRate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetSupportedRefreshRates_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_PreserveChildSurfaceControls_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_AddVSyncParameterObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetMaxVSyncAndVrr_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDisplayVisible_ParamsSpec.$.structSpec);
          const result = this.impl.setDisplayVisible(params.visible);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_DisableSwapUntilResize_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_Resize_ParamsSpec.$.structSpec);
          const result = this.impl.resize(params.size);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDisplayColorMatrix_ParamsSpec.$.structSpec);
          const result = this.impl.setDisplayColorMatrix(params.color_matrix);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDisplayColorSpaces_ParamsSpec.$.structSpec);
          const result = this.impl.setDisplayColorSpaces(params.display_color_spaces);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetOutputIsSecure_ParamsSpec.$.structSpec);
          const result = this.impl.setOutputIsSecure(params.secure);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetVSyncDisplayID_ParamsSpec.$.structSpec);
          const result = this.impl.setVSyncDisplayID(params.display_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDisplayVSyncParameters_ParamsSpec.$.structSpec);
          const result = this.impl.setDisplayVSyncParameters(params.timebase, params.interval);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_ParamsSpec.$.structSpec);
          const result = this.impl.forceImmediateDrawAndSwapIfPossible();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_UpdateRefreshRate_ParamsSpec.$.structSpec);
          const result = this.impl.updateRefreshRate(params.refresh_rate);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_ParamsSpec.$.structSpec);
          const result = this.impl.setAdaptiveRefreshRateInfo(params.has_support, params.suggested_high, params.device_scale_factor);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetSupportedRefreshRates_ParamsSpec.$.structSpec);
          const result = this.impl.setSupportedRefreshRates(params.refresh_rates);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_PreserveChildSurfaceControls_ParamsSpec.$.structSpec);
          const result = this.impl.preserveChildSurfaceControls();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setSwapCompletionCallbackEnabled(params.enable);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_AddVSyncParameterObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addVSyncParameterObserver(params.observer);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_ParamsSpec.$.structSpec);
          const result = this.impl.setDelegatedInkPointRenderer(params.receiver);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_ParamsSpec.$.structSpec);
          const result = this.impl.setStandaloneBeginFrameObserver(params.observer);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetMaxVSyncAndVrr_ParamsSpec.$.structSpec);
          const result = this.impl.setMaxVSyncAndVrr(params.max_vsync_interval, params.vrr_state);
          break;
        }
      }
      } catch (err) {}
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
  onDisplayReceivedCALayerParams(ca_layer_params) {
    return this.$.onDisplayReceivedCALayerParams(ca_layer_params);
  }
  createLayeredWindowUpdater(receiver) {
    return this.$.createLayeredWindowUpdater(receiver);
  }
  addChildWindowToBrowser(child_window) {
    return this.$.addChildWindowToBrowser(child_window);
  }
  didCompleteSwapWithSize(size) {
    return this.$.didCompleteSwapWithSize(size);
  }
  didCompleteSwapWithNewSize(size) {
    return this.$.didCompleteSwapWithNewSize(size);
  }
  onContextCreationResult(result) {
    return this.$.onContextCreationResult(result);
  }
  setWideColorEnabled(enabled) {
    return this.$.setWideColorEnabled(enabled);
  }
  setPreferredRefreshRate(refresh_rate) {
    return this.$.setPreferredRefreshRate(refresh_rate);
  }
};

viz.mojom.DisplayClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DisplayClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onDisplayReceivedCALayerParams(ca_layer_params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.DisplayClient_OnDisplayReceivedCALayerParams_ParamsSpec,
      null,
      [ca_layer_params],
      false);
  }

  createLayeredWindowUpdater(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.DisplayClient_CreateLayeredWindowUpdater_ParamsSpec,
      null,
      [receiver],
      false);
  }

  addChildWindowToBrowser(child_window) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      viz.mojom.DisplayClient_AddChildWindowToBrowser_ParamsSpec,
      null,
      [child_window],
      false);
  }

  didCompleteSwapWithSize(size) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      viz.mojom.DisplayClient_DidCompleteSwapWithSize_ParamsSpec,
      null,
      [size],
      false);
  }

  didCompleteSwapWithNewSize(size) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      viz.mojom.DisplayClient_DidCompleteSwapWithNewSize_ParamsSpec,
      null,
      [size],
      false);
  }

  onContextCreationResult(result) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      viz.mojom.DisplayClient_OnContextCreationResult_ParamsSpec,
      null,
      [result],
      false);
  }

  setWideColorEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      viz.mojom.DisplayClient_SetWideColorEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setPreferredRefreshRate(refresh_rate) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('DisplayClient', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(viz.mojom.DisplayClient_OnDisplayReceivedCALayerParams_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayClient_CreateLayeredWindowUpdater_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayClient_AddChildWindowToBrowser_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayClient_DidCompleteSwapWithSize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayClient_DidCompleteSwapWithNewSize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayClient_OnContextCreationResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayClient_SetWideColorEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayClient_SetPreferredRefreshRate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayClient_OnDisplayReceivedCALayerParams_ParamsSpec.$.structSpec);
          const result = this.impl.onDisplayReceivedCALayerParams(params.ca_layer_params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayClient_CreateLayeredWindowUpdater_ParamsSpec.$.structSpec);
          const result = this.impl.createLayeredWindowUpdater(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayClient_AddChildWindowToBrowser_ParamsSpec.$.structSpec);
          const result = this.impl.addChildWindowToBrowser(params.child_window);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayClient_DidCompleteSwapWithSize_ParamsSpec.$.structSpec);
          const result = this.impl.didCompleteSwapWithSize(params.size);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayClient_DidCompleteSwapWithNewSize_ParamsSpec.$.structSpec);
          const result = this.impl.didCompleteSwapWithNewSize(params.size);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayClient_OnContextCreationResult_ParamsSpec.$.structSpec);
          const result = this.impl.onContextCreationResult(params.result);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayClient_SetWideColorEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setWideColorEnabled(params.enabled);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayClient_SetPreferredRefreshRate_ParamsSpec.$.structSpec);
          const result = this.impl.setPreferredRefreshRate(params.refresh_rate);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

viz.mojom.DisplayClientReceiver = viz.mojom.DisplayClientReceiver;

viz.mojom.DisplayClientPtr = viz.mojom.DisplayClientRemote;
viz.mojom.DisplayClientRequest = viz.mojom.DisplayClientPendingReceiver;

