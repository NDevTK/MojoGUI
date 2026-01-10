// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/widget/platform_widget.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var ui = ui || {};
var ui = ui || {};


// Interface: WidgetCompositor
blink.mojom.mojom.WidgetCompositor = {};

blink.mojom.mojom.WidgetCompositorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.WidgetCompositorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WidgetCompositor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.WidgetCompositorPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.WidgetCompositorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.WidgetCompositorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  visualStateRequest() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.WidgetCompositor_VisualStateRequest_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.WidgetCompositor.getRemote = function() {
  let remote = new blink.mojom.mojom.WidgetCompositorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WidgetCompositor',
    'context');
  return remote.$;
};

// ParamsSpec for VisualStateRequest
blink.mojom.mojom.WidgetCompositor_VisualStateRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetCompositor.VisualStateRequest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.WidgetCompositorPtr = blink.mojom.mojom.WidgetCompositorRemote;
blink.mojom.mojom.WidgetCompositorRequest = blink.mojom.mojom.WidgetCompositorPendingReceiver;


// Interface: WidgetHost
blink.mojom.mojom.WidgetHost = {};

blink.mojom.mojom.WidgetHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.WidgetHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WidgetHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.WidgetHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.WidgetHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.WidgetHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setCursor(cursor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.WidgetHost_SetCursor_ParamsSpec,
      null,
      [cursor]);
  }

  updateTooltipUnderCursor(tooltip_text, text_direction_hint) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.WidgetHost_UpdateTooltipUnderCursor_ParamsSpec,
      null,
      [tooltip_text, text_direction_hint]);
  }

  updateTooltipFromKeyboard(tooltip_text, text_direction_hint, bounds) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.WidgetHost_UpdateTooltipFromKeyboard_ParamsSpec,
      null,
      [tooltip_text, text_direction_hint, bounds]);
  }

  clearKeyboardTriggeredTooltip() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_ParamsSpec,
      null,
      []);
  }

  textInputStateChanged(state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.WidgetHost_TextInputStateChanged_ParamsSpec,
      null,
      [state]);
  }

  selectionBoundsChanged(anchor_rect, anchor_dir, focus_rect, focus_dir, bounding_box_rect, is_anchor_first) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.mojom.WidgetHost_SelectionBoundsChanged_ParamsSpec,
      null,
      [anchor_rect, anchor_dir, focus_rect, focus_dir, bounding_box_rect, is_anchor_first]);
  }

  createFrameSink(compositor_frame_sink_receiver, compositor_frame_sink_client, render_input_router_client) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.mojom.WidgetHost_CreateFrameSink_ParamsSpec,
      null,
      [compositor_frame_sink_receiver, compositor_frame_sink_client, render_input_router_client]);
  }

  registerRenderFrameMetadataObserver(render_frame_metadata_observer_client_receiver, render_frame_metadata_observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_ParamsSpec,
      null,
      [render_frame_metadata_observer_client_receiver, render_frame_metadata_observer]);
  }

};

blink.mojom.mojom.WidgetHost.getRemote = function() {
  let remote = new blink.mojom.mojom.WidgetHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WidgetHost',
    'context');
  return remote.$;
};

// ParamsSpec for SetCursor
blink.mojom.mojom.WidgetHost_SetCursor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetHost.SetCursor_Params',
      packedSize: 16,
      fields: [
        { name: 'cursor', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.CursorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateTooltipUnderCursor
blink.mojom.mojom.WidgetHost_UpdateTooltipUnderCursor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetHost.UpdateTooltipUnderCursor_Params',
      packedSize: 24,
      fields: [
        { name: 'tooltip_text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'text_direction_hint', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TextDirectionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateTooltipFromKeyboard
blink.mojom.mojom.WidgetHost_UpdateTooltipFromKeyboard_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetHost.UpdateTooltipFromKeyboard_Params',
      packedSize: 32,
      fields: [
        { name: 'tooltip_text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'text_direction_hint', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TextDirectionSpec, nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ClearKeyboardTriggeredTooltip
blink.mojom.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetHost.ClearKeyboardTriggeredTooltip_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for TextInputStateChanged
blink.mojom.mojom.WidgetHost_TextInputStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetHost.TextInputStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.TextInputStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SelectionBoundsChanged
blink.mojom.mojom.WidgetHost_SelectionBoundsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetHost.SelectionBoundsChanged_Params',
      packedSize: 48,
      fields: [
        { name: 'anchor_rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'anchor_dir', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TextDirectionSpec, nullable: false, minVersion: 0 },
        { name: 'focus_rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'focus_dir', packedOffset: 28, packedBitOffset: 0, type: mojo_base.mojom.TextDirectionSpec, nullable: false, minVersion: 0 },
        { name: 'bounding_box_rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'is_anchor_first', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for CreateFrameSink
blink.mojom.mojom.WidgetHost_CreateFrameSink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetHost.CreateFrameSink_Params',
      packedSize: 32,
      fields: [
        { name: 'compositor_frame_sink_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(viz.mojom.CompositorFrameSinkRemote), nullable: false, minVersion: 0 },
        { name: 'compositor_frame_sink_client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(viz.mojom.CompositorFrameSinkClientRemote), nullable: false, minVersion: 0 },
        { name: 'render_input_router_client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.RenderInputRouterClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for RegisterRenderFrameMetadataObserver
blink.mojom.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetHost.RegisterRenderFrameMetadataObserver_Params',
      packedSize: 24,
      fields: [
        { name: 'render_frame_metadata_observer_client_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(cc.mojom.RenderFrameMetadataObserverClientRemote), nullable: false, minVersion: 0 },
        { name: 'render_frame_metadata_observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cc.mojom.RenderFrameMetadataObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.WidgetHostPtr = blink.mojom.mojom.WidgetHostRemote;
blink.mojom.mojom.WidgetHostRequest = blink.mojom.mojom.WidgetHostPendingReceiver;


// Interface: Widget
blink.mojom.mojom.Widget = {};

blink.mojom.mojom.WidgetPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.WidgetRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.Widget';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.WidgetPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.WidgetRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.WidgetRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  forceRedraw() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.Widget_ForceRedraw_ParamsSpec,
      null,
      []);
  }

  updateVisualProperties(visual_properties) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.Widget_UpdateVisualProperties_ParamsSpec,
      null,
      [visual_properties]);
  }

  updateScreenRects(widget_screen_rect, window_screen_rect) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.Widget_UpdateScreenRects_ParamsSpec,
      null,
      [widget_screen_rect, window_screen_rect]);
  }

  wasHidden() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.Widget_WasHidden_ParamsSpec,
      null,
      []);
  }

  wasShown(was_evicted, record_tab_switch_time_request) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.Widget_WasShown_ParamsSpec,
      null,
      [was_evicted, record_tab_switch_time_request]);
  }

  requestSuccessfulPresentationTimeForNextFrame(visible_time_request) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_ParamsSpec,
      null,
      [visible_time_request]);
  }

  cancelSuccessfulPresentationTimeRequest() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.mojom.Widget_CancelSuccessfulPresentationTimeRequest_ParamsSpec,
      null,
      []);
  }

  setupBrowserRenderInputRouterConnections(browser_client) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.mojom.Widget_SetupBrowserRenderInputRouterConnections_ParamsSpec,
      null,
      [browser_client]);
  }

};

blink.mojom.mojom.Widget.getRemote = function() {
  let remote = new blink.mojom.mojom.WidgetRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.Widget',
    'context');
  return remote.$;
};

// ParamsSpec for ForceRedraw
blink.mojom.mojom.Widget_ForceRedraw_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Widget.ForceRedraw_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for UpdateVisualProperties
blink.mojom.mojom.Widget_UpdateVisualProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Widget.UpdateVisualProperties_Params',
      packedSize: 16,
      fields: [
        { name: 'visual_properties', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.VisualPropertiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateScreenRects
blink.mojom.mojom.Widget_UpdateScreenRects_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Widget.UpdateScreenRects_Params',
      packedSize: 24,
      fields: [
        { name: 'widget_screen_rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'window_screen_rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for WasHidden
blink.mojom.mojom.Widget_WasHidden_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Widget.WasHidden_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for WasShown
blink.mojom.mojom.Widget_WasShown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Widget.WasShown_Params',
      packedSize: 24,
      fields: [
        { name: 'was_evicted', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'record_tab_switch_time_request', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.RecordContentToVisibleTimeRequestSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RequestSuccessfulPresentationTimeForNextFrame
blink.mojom.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Widget.RequestSuccessfulPresentationTimeForNextFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'visible_time_request', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.RecordContentToVisibleTimeRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CancelSuccessfulPresentationTimeRequest
blink.mojom.mojom.Widget_CancelSuccessfulPresentationTimeRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Widget.CancelSuccessfulPresentationTimeRequest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetupBrowserRenderInputRouterConnections
blink.mojom.mojom.Widget_SetupBrowserRenderInputRouterConnections_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Widget.SetupBrowserRenderInputRouterConnections_Params',
      packedSize: 16,
      fields: [
        { name: 'browser_client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.RenderInputRouterClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.WidgetPtr = blink.mojom.mojom.WidgetRemote;
blink.mojom.mojom.WidgetRequest = blink.mojom.mojom.WidgetPendingReceiver;


// Interface: RenderInputRouterClient
blink.mojom.mojom.RenderInputRouterClient = {};

blink.mojom.mojom.RenderInputRouterClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.RenderInputRouterClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RenderInputRouterClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.RenderInputRouterClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.RenderInputRouterClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.RenderInputRouterClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getWidgetInputHandler(request, host, from_viz) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.RenderInputRouterClient_GetWidgetInputHandler_ParamsSpec,
      null,
      [request, host, from_viz]);
  }

  showContextMenu(source_type, location) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.RenderInputRouterClient_ShowContextMenu_ParamsSpec,
      null,
      [source_type, location]);
  }

  bindInputTargetClient(host) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.RenderInputRouterClient_BindInputTargetClient_ParamsSpec,
      null,
      [host]);
  }

};

blink.mojom.mojom.RenderInputRouterClient.getRemote = function() {
  let remote = new blink.mojom.mojom.RenderInputRouterClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RenderInputRouterClient',
    'context');
  return remote.$;
};

// ParamsSpec for GetWidgetInputHandler
blink.mojom.mojom.RenderInputRouterClient_GetWidgetInputHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RenderInputRouterClient.GetWidgetInputHandler_Params',
      packedSize: 32,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.WidgetInputHandlerRemote), nullable: false, minVersion: 0 },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.WidgetInputHandlerHostRemote), nullable: false, minVersion: 0 },
        { name: 'from_viz', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ShowContextMenu
blink.mojom.mojom.RenderInputRouterClient_ShowContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RenderInputRouterClient.ShowContextMenu_Params',
      packedSize: 24,
      fields: [
        { name: 'source_type', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.MenuSourceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'location', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for BindInputTargetClient
blink.mojom.mojom.RenderInputRouterClient_BindInputTargetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RenderInputRouterClient.BindInputTargetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(viz.mojom.InputTargetClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.RenderInputRouterClientPtr = blink.mojom.mojom.RenderInputRouterClientRemote;
blink.mojom.mojom.RenderInputRouterClientRequest = blink.mojom.mojom.RenderInputRouterClientPendingReceiver;

