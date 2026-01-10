// Auto-generated MojoJS binding
// Source: chromium_src/components/input/render_input_router.mojom
// Module: input.mojom

'use strict';

// Module namespace
var input = input || {};
input.mojom = input.mojom || {};
var services = services || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var ui = ui || {};

input.mojom.RenderInputRouterConfigSpec = { $: {} };
input.mojom.TouchTransferStateSpec = { $: {} };
input.mojom.RenderInputRouterDelegate = {};
input.mojom.RenderInputRouterDelegate.$interfaceName = 'input.mojom.RenderInputRouterDelegate';
input.mojom.RenderInputRouterDelegate_StateOnTouchTransfer_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegate_ForceEnableZoomStateChanged_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegate_StopFlingingOnViz_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegate_RestartInputEventAckTimeoutIfNecessary_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegate_NotifyVisibilityChanged_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegate_ResetGestureDetection_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegateClient = {};
input.mojom.RenderInputRouterDelegateClient.$interfaceName = 'input.mojom.RenderInputRouterDelegateClient';
input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEvent_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEventAcks_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegateClient_OnInvalidInputEventSource_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegateClient_StateOnOverscrollTransfer_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegateClient_RendererInputResponsivenessChanged_ParamsSpec = { $: {} };

// Struct: RenderInputRouterConfig
mojo.internal.Struct(
    input.mojom.RenderInputRouterConfigSpec, 'input.mojom.RenderInputRouterConfig', [
      mojo.internal.StructField('rir_client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.RenderInputRouterClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('grouping_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('force_enable_zoom', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TouchTransferState
mojo.internal.Struct(
    input.mojom.TouchTransferStateSpec, 'input.mojom.TouchTransferState', [
      mojo.internal.StructField('down_time_ms', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('root_widget_frame_sink_id', 8, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('down_event', 16, 0, ui.mojom.CachedMotionEventAndroidSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('web_contents_y_offset_pix', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('dip_scale', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('browser_would_have_handled', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: RenderInputRouterDelegate
mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegate_StateOnTouchTransfer_ParamsSpec, 'input.mojom.RenderInputRouterDelegate_StateOnTouchTransfer_Params', [
      mojo.internal.StructField('state', 0, 0, input.mojom.TouchTransferStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegate_ForceEnableZoomStateChanged_ParamsSpec, 'input.mojom.RenderInputRouterDelegate_ForceEnableZoomStateChanged_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('force_enable_zoom', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegate_StopFlingingOnViz_ParamsSpec, 'input.mojom.RenderInputRouterDelegate_StopFlingingOnViz_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegate_RestartInputEventAckTimeoutIfNecessary_ParamsSpec, 'input.mojom.RenderInputRouterDelegate_RestartInputEventAckTimeoutIfNecessary_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegate_NotifyVisibilityChanged_ParamsSpec, 'input.mojom.RenderInputRouterDelegate_NotifyVisibilityChanged_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_hidden', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegate_ResetGestureDetection_ParamsSpec, 'input.mojom.RenderInputRouterDelegate_ResetGestureDetection_Params', [
      mojo.internal.StructField('root_widget_frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

input.mojom.RenderInputRouterDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

input.mojom.RenderInputRouterDelegateRemote = class {
  static get $interfaceName() {
    return 'input.mojom.RenderInputRouterDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      input.mojom.RenderInputRouterDelegatePendingReceiver,
      handle);
    this.$ = new input.mojom.RenderInputRouterDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

input.mojom.RenderInputRouterDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  stateOnTouchTransfer(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      input.mojom.RenderInputRouterDelegate_StateOnTouchTransfer_ParamsSpec,
      null,
      [state],
      false);
  }

  forceEnableZoomStateChanged(force_enable_zoom, frame_sink_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      input.mojom.RenderInputRouterDelegate_ForceEnableZoomStateChanged_ParamsSpec,
      null,
      [force_enable_zoom, frame_sink_id],
      false);
  }

  stopFlingingOnViz(frame_sink_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      input.mojom.RenderInputRouterDelegate_StopFlingingOnViz_ParamsSpec,
      null,
      [frame_sink_id],
      false);
  }

  restartInputEventAckTimeoutIfNecessary(frame_sink_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      input.mojom.RenderInputRouterDelegate_RestartInputEventAckTimeoutIfNecessary_ParamsSpec,
      null,
      [frame_sink_id],
      false);
  }

  notifyVisibilityChanged(frame_sink_id, is_hidden) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      input.mojom.RenderInputRouterDelegate_NotifyVisibilityChanged_ParamsSpec,
      null,
      [frame_sink_id, is_hidden],
      false);
  }

  resetGestureDetection(root_widget_frame_sink_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      input.mojom.RenderInputRouterDelegate_ResetGestureDetection_ParamsSpec,
      null,
      [root_widget_frame_sink_id],
      false);
  }

};

input.mojom.RenderInputRouterDelegate.getRemote = function() {
  let remote = new input.mojom.RenderInputRouterDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'input.mojom.RenderInputRouterDelegate',
    'context');
  return remote.$;
};

input.mojom.RenderInputRouterDelegatePtr = input.mojom.RenderInputRouterDelegateRemote;
input.mojom.RenderInputRouterDelegateRequest = input.mojom.RenderInputRouterDelegatePendingReceiver;


// Interface: RenderInputRouterDelegateClient
mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEvent_ParamsSpec, 'input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEvent_Params', [
      mojo.internal.StructField('event', 0, 0, blink.mojom.EventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dispatched_to_renderer', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEventAcks_ParamsSpec, 'input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEventAcks_Params', [
      mojo.internal.StructField('ack_source', 0, 0, blink.mojom.InputEventResultSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ack_result', 8, 0, blink.mojom.InputEventResultStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event', 16, 0, blink.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegateClient_OnInvalidInputEventSource_ParamsSpec, 'input.mojom.RenderInputRouterDelegateClient_OnInvalidInputEventSource_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegateClient_StateOnOverscrollTransfer_ParamsSpec, 'input.mojom.RenderInputRouterDelegateClient_StateOnOverscrollTransfer_Params', [
      mojo.internal.StructField('overscroll', 0, 0, blink.mojom.DidOverscrollParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegateClient_RendererInputResponsivenessChanged_ParamsSpec, 'input.mojom.RenderInputRouterDelegateClient_RendererInputResponsivenessChanged_Params', [
      mojo.internal.StructField('ack_timeout_ts', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_responsive', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

input.mojom.RenderInputRouterDelegateClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

input.mojom.RenderInputRouterDelegateClientRemote = class {
  static get $interfaceName() {
    return 'input.mojom.RenderInputRouterDelegateClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      input.mojom.RenderInputRouterDelegateClientPendingReceiver,
      handle);
    this.$ = new input.mojom.RenderInputRouterDelegateClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

input.mojom.RenderInputRouterDelegateClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyObserversOfInputEvent(event, dispatched_to_renderer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEvent_ParamsSpec,
      null,
      [event, dispatched_to_renderer],
      false);
  }

  notifyObserversOfInputEventAcks(ack_source, ack_result, event) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEventAcks_ParamsSpec,
      null,
      [ack_source, ack_result, event],
      false);
  }

  onInvalidInputEventSource() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      input.mojom.RenderInputRouterDelegateClient_OnInvalidInputEventSource_ParamsSpec,
      null,
      [],
      false);
  }

  stateOnOverscrollTransfer(overscroll) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      input.mojom.RenderInputRouterDelegateClient_StateOnOverscrollTransfer_ParamsSpec,
      null,
      [overscroll],
      false);
  }

  rendererInputResponsivenessChanged(is_responsive, ack_timeout_ts) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      input.mojom.RenderInputRouterDelegateClient_RendererInputResponsivenessChanged_ParamsSpec,
      null,
      [is_responsive, ack_timeout_ts],
      false);
  }

};

input.mojom.RenderInputRouterDelegateClient.getRemote = function() {
  let remote = new input.mojom.RenderInputRouterDelegateClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'input.mojom.RenderInputRouterDelegateClient',
    'context');
  return remote.$;
};

input.mojom.RenderInputRouterDelegateClientPtr = input.mojom.RenderInputRouterDelegateClientRemote;
input.mojom.RenderInputRouterDelegateClientRequest = input.mojom.RenderInputRouterDelegateClientPendingReceiver;

