// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/widget/platform_widget.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var ui = ui || {};
var services = services || {};
var ui = ui || {};

blink.mojom.WidgetCompositor = {};
blink.mojom.WidgetCompositor.$interfaceName = 'blink.mojom.WidgetCompositor';
blink.mojom.WidgetCompositor_VisualStateRequest_ParamsSpec = { $: {} };
blink.mojom.WidgetCompositor_VisualStateRequest_ResponseParamsSpec = { $: {} };
blink.mojom.WidgetHost = {};
blink.mojom.WidgetHost.$interfaceName = 'blink.mojom.WidgetHost';
blink.mojom.WidgetHost_SetCursor_ParamsSpec = { $: {} };
blink.mojom.WidgetHost_UpdateTooltipUnderCursor_ParamsSpec = { $: {} };
blink.mojom.WidgetHost_UpdateTooltipFromKeyboard_ParamsSpec = { $: {} };
blink.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_ParamsSpec = { $: {} };
blink.mojom.WidgetHost_TextInputStateChanged_ParamsSpec = { $: {} };
blink.mojom.WidgetHost_SelectionBoundsChanged_ParamsSpec = { $: {} };
blink.mojom.WidgetHost_CreateFrameSink_ParamsSpec = { $: {} };
blink.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_ParamsSpec = { $: {} };
blink.mojom.Widget = {};
blink.mojom.Widget.$interfaceName = 'blink.mojom.Widget';
blink.mojom.Widget_ForceRedraw_ParamsSpec = { $: {} };
blink.mojom.Widget_ForceRedraw_ResponseParamsSpec = { $: {} };
blink.mojom.Widget_UpdateVisualProperties_ParamsSpec = { $: {} };
blink.mojom.Widget_UpdateScreenRects_ParamsSpec = { $: {} };
blink.mojom.Widget_UpdateScreenRects_ResponseParamsSpec = { $: {} };
blink.mojom.Widget_WasHidden_ParamsSpec = { $: {} };
blink.mojom.Widget_WasShown_ParamsSpec = { $: {} };
blink.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_ParamsSpec = { $: {} };
blink.mojom.Widget_CancelSuccessfulPresentationTimeRequest_ParamsSpec = { $: {} };
blink.mojom.Widget_SetupBrowserRenderInputRouterConnections_ParamsSpec = { $: {} };
blink.mojom.RenderInputRouterClient = {};
blink.mojom.RenderInputRouterClient.$interfaceName = 'blink.mojom.RenderInputRouterClient';
blink.mojom.RenderInputRouterClient_GetWidgetInputHandler_ParamsSpec = { $: {} };
blink.mojom.RenderInputRouterClient_ShowContextMenu_ParamsSpec = { $: {} };
blink.mojom.RenderInputRouterClient_BindInputTargetClient_ParamsSpec = { $: {} };

// Interface: WidgetCompositor
mojo.internal.Struct(
    blink.mojom.WidgetCompositor_VisualStateRequest_ParamsSpec, 'blink.mojom.WidgetCompositor_VisualStateRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WidgetCompositor_VisualStateRequest_ResponseParamsSpec, 'blink.mojom.WidgetCompositor_VisualStateRequest_ResponseParams', [
    ],
    [[0, 8]]);

blink.mojom.WidgetCompositorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WidgetCompositorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WidgetCompositor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WidgetCompositorPendingReceiver,
      handle);
    this.$ = new blink.mojom.WidgetCompositorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WidgetCompositorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  visualStateRequest() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WidgetCompositor_VisualStateRequest_ParamsSpec,
      blink.mojom.WidgetCompositor_VisualStateRequest_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.WidgetCompositor.getRemote = function() {
  let remote = new blink.mojom.WidgetCompositorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WidgetCompositor',
    'context');
  return remote.$;
};

blink.mojom.WidgetCompositorPtr = blink.mojom.WidgetCompositorRemote;
blink.mojom.WidgetCompositorRequest = blink.mojom.WidgetCompositorPendingReceiver;


// Interface: WidgetHost
mojo.internal.Struct(
    blink.mojom.WidgetHost_SetCursor_ParamsSpec, 'blink.mojom.WidgetHost_SetCursor_Params', [
      mojo.internal.StructField('cursor', 0, 0, ui.mojom.CursorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetHost_UpdateTooltipUnderCursor_ParamsSpec, 'blink.mojom.WidgetHost_UpdateTooltipUnderCursor_Params', [
      mojo.internal.StructField('tooltip_text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_direction_hint', 8, 0, mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WidgetHost_UpdateTooltipFromKeyboard_ParamsSpec, 'blink.mojom.WidgetHost_UpdateTooltipFromKeyboard_Params', [
      mojo.internal.StructField('tooltip_text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_direction_hint', 8, 0, mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounds', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_ParamsSpec, 'blink.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WidgetHost_TextInputStateChanged_ParamsSpec, 'blink.mojom.WidgetHost_TextInputStateChanged_Params', [
      mojo.internal.StructField('state', 0, 0, ui.mojom.TextInputStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetHost_SelectionBoundsChanged_ParamsSpec, 'blink.mojom.WidgetHost_SelectionBoundsChanged_Params', [
      mojo.internal.StructField('anchor_rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('anchor_dir', 8, 0, mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('focus_rect', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('focus_dir', 24, 0, mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounding_box_rect', 32, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_anchor_first', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    blink.mojom.WidgetHost_CreateFrameSink_ParamsSpec, 'blink.mojom.WidgetHost_CreateFrameSink_Params', [
      mojo.internal.StructField('compositor_frame_sink_receiver', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.CompositorFrameSinkRemote), null, false, 0, undefined),
      mojo.internal.StructField('compositor_frame_sink_client', 8, 0, mojo.internal.InterfaceProxy(viz.mojom.CompositorFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('render_input_router_client', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.RenderInputRouterClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_ParamsSpec, 'blink.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_Params', [
      mojo.internal.StructField('render_frame_metadata_observer_client_receiver', 0, 0, mojo.internal.InterfaceRequest(cc.mojom.RenderFrameMetadataObserverClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('render_frame_metadata_observer', 8, 0, mojo.internal.InterfaceProxy(cc.mojom.RenderFrameMetadataObserverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.WidgetHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WidgetHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WidgetHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WidgetHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.WidgetHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WidgetHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setCursor(cursor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WidgetHost_SetCursor_ParamsSpec,
      null,
      [cursor],
      false);
  }

  updateTooltipUnderCursor(tooltip_text, text_direction_hint) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WidgetHost_UpdateTooltipUnderCursor_ParamsSpec,
      null,
      [tooltip_text, text_direction_hint],
      false);
  }

  updateTooltipFromKeyboard(tooltip_text, text_direction_hint, bounds) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.WidgetHost_UpdateTooltipFromKeyboard_ParamsSpec,
      null,
      [tooltip_text, text_direction_hint, bounds],
      false);
  }

  clearKeyboardTriggeredTooltip() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_ParamsSpec,
      null,
      [],
      false);
  }

  textInputStateChanged(state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.WidgetHost_TextInputStateChanged_ParamsSpec,
      null,
      [state],
      false);
  }

  selectionBoundsChanged(anchor_rect, anchor_dir, focus_rect, focus_dir, bounding_box_rect, is_anchor_first) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.WidgetHost_SelectionBoundsChanged_ParamsSpec,
      null,
      [anchor_rect, anchor_dir, focus_rect, focus_dir, bounding_box_rect, is_anchor_first],
      false);
  }

  createFrameSink(compositor_frame_sink_receiver, compositor_frame_sink_client, render_input_router_client) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.WidgetHost_CreateFrameSink_ParamsSpec,
      null,
      [compositor_frame_sink_receiver, compositor_frame_sink_client, render_input_router_client],
      false);
  }

  registerRenderFrameMetadataObserver(render_frame_metadata_observer_client_receiver, render_frame_metadata_observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_ParamsSpec,
      null,
      [render_frame_metadata_observer_client_receiver, render_frame_metadata_observer],
      false);
  }

};

blink.mojom.WidgetHost.getRemote = function() {
  let remote = new blink.mojom.WidgetHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WidgetHost',
    'context');
  return remote.$;
};

blink.mojom.WidgetHostPtr = blink.mojom.WidgetHostRemote;
blink.mojom.WidgetHostRequest = blink.mojom.WidgetHostPendingReceiver;


// Interface: Widget
mojo.internal.Struct(
    blink.mojom.Widget_ForceRedraw_ParamsSpec, 'blink.mojom.Widget_ForceRedraw_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.Widget_ForceRedraw_ResponseParamsSpec, 'blink.mojom.Widget_ForceRedraw_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.Widget_UpdateVisualProperties_ParamsSpec, 'blink.mojom.Widget_UpdateVisualProperties_Params', [
      mojo.internal.StructField('visual_properties', 0, 0, blink.mojom.VisualPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.Widget_UpdateScreenRects_ParamsSpec, 'blink.mojom.Widget_UpdateScreenRects_Params', [
      mojo.internal.StructField('widget_screen_rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('window_screen_rect', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.Widget_UpdateScreenRects_ResponseParamsSpec, 'blink.mojom.Widget_UpdateScreenRects_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.Widget_WasHidden_ParamsSpec, 'blink.mojom.Widget_WasHidden_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.Widget_WasShown_ParamsSpec, 'blink.mojom.Widget_WasShown_Params', [
      mojo.internal.StructField('was_evicted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('record_tab_switch_time_request', 8, 0, blink.mojom.RecordContentToVisibleTimeRequestSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_ParamsSpec, 'blink.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_Params', [
      mojo.internal.StructField('visible_time_request', 0, 0, blink.mojom.RecordContentToVisibleTimeRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.Widget_CancelSuccessfulPresentationTimeRequest_ParamsSpec, 'blink.mojom.Widget_CancelSuccessfulPresentationTimeRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.Widget_SetupBrowserRenderInputRouterConnections_ParamsSpec, 'blink.mojom.Widget_SetupBrowserRenderInputRouterConnections_Params', [
      mojo.internal.StructField('browser_client', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.RenderInputRouterClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.WidgetPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WidgetRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.Widget';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WidgetPendingReceiver,
      handle);
    this.$ = new blink.mojom.WidgetRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WidgetRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  forceRedraw() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.Widget_ForceRedraw_ParamsSpec,
      blink.mojom.Widget_ForceRedraw_ResponseParamsSpec,
      [],
      false);
  }

  updateVisualProperties(visual_properties) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.Widget_UpdateVisualProperties_ParamsSpec,
      null,
      [visual_properties],
      false);
  }

  updateScreenRects(widget_screen_rect, window_screen_rect) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.Widget_UpdateScreenRects_ParamsSpec,
      blink.mojom.Widget_UpdateScreenRects_ResponseParamsSpec,
      [widget_screen_rect, window_screen_rect],
      false);
  }

  wasHidden() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.Widget_WasHidden_ParamsSpec,
      null,
      [],
      false);
  }

  wasShown(was_evicted, record_tab_switch_time_request) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.Widget_WasShown_ParamsSpec,
      null,
      [was_evicted, record_tab_switch_time_request],
      false);
  }

  requestSuccessfulPresentationTimeForNextFrame(visible_time_request) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_ParamsSpec,
      null,
      [visible_time_request],
      false);
  }

  cancelSuccessfulPresentationTimeRequest() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.Widget_CancelSuccessfulPresentationTimeRequest_ParamsSpec,
      null,
      [],
      false);
  }

  setupBrowserRenderInputRouterConnections(browser_client) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.Widget_SetupBrowserRenderInputRouterConnections_ParamsSpec,
      null,
      [browser_client],
      false);
  }

};

blink.mojom.Widget.getRemote = function() {
  let remote = new blink.mojom.WidgetRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.Widget',
    'context');
  return remote.$;
};

blink.mojom.WidgetPtr = blink.mojom.WidgetRemote;
blink.mojom.WidgetRequest = blink.mojom.WidgetPendingReceiver;


// Interface: RenderInputRouterClient
mojo.internal.Struct(
    blink.mojom.RenderInputRouterClient_GetWidgetInputHandler_ParamsSpec, 'blink.mojom.RenderInputRouterClient_GetWidgetInputHandler_Params', [
      mojo.internal.StructField('request', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.WidgetInputHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.WidgetInputHandlerHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('from_viz', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.RenderInputRouterClient_ShowContextMenu_ParamsSpec, 'blink.mojom.RenderInputRouterClient_ShowContextMenu_Params', [
      mojo.internal.StructField('source_type', 0, 0, ui.mojom.MenuSourceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('location', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RenderInputRouterClient_BindInputTargetClient_ParamsSpec, 'blink.mojom.RenderInputRouterClient_BindInputTargetClient_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.InputTargetClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.RenderInputRouterClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RenderInputRouterClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RenderInputRouterClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RenderInputRouterClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.RenderInputRouterClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RenderInputRouterClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getWidgetInputHandler(request, host, from_viz) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.RenderInputRouterClient_GetWidgetInputHandler_ParamsSpec,
      null,
      [request, host, from_viz],
      false);
  }

  showContextMenu(source_type, location) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.RenderInputRouterClient_ShowContextMenu_ParamsSpec,
      null,
      [source_type, location],
      false);
  }

  bindInputTargetClient(host) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.RenderInputRouterClient_BindInputTargetClient_ParamsSpec,
      null,
      [host],
      false);
  }

};

blink.mojom.RenderInputRouterClient.getRemote = function() {
  let remote = new blink.mojom.RenderInputRouterClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RenderInputRouterClient',
    'context');
  return remote.$;
};

blink.mojom.RenderInputRouterClientPtr = blink.mojom.RenderInputRouterClientRemote;
blink.mojom.RenderInputRouterClientRequest = blink.mojom.RenderInputRouterClientPendingReceiver;

