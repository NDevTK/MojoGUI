// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/widget/platform_widget.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: WidgetCompositor
blink.mojom.WidgetCompositor = {};

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
      null,
      []);
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

// ParamsSpec for VisualStateRequest
blink.mojom.WidgetCompositor_VisualStateRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetCompositor.VisualStateRequest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.WidgetCompositorPtr = blink.mojom.WidgetCompositorRemote;
blink.mojom.WidgetCompositorRequest = blink.mojom.WidgetCompositorPendingReceiver;


// Interface: WidgetHost
blink.mojom.WidgetHost = {};

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
      [cursor]);
  }

  updateTooltipUnderCursor(tooltip_text, text_direction_hint) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WidgetHost_UpdateTooltipUnderCursor_ParamsSpec,
      null,
      [tooltip_text, text_direction_hint]);
  }

  updateTooltipFromKeyboard(tooltip_text, text_direction_hint, bounds) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.WidgetHost_UpdateTooltipFromKeyboard_ParamsSpec,
      null,
      [tooltip_text, text_direction_hint, bounds]);
  }

  clearKeyboardTriggeredTooltip() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_ParamsSpec,
      null,
      []);
  }

  textInputStateChanged(state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.WidgetHost_TextInputStateChanged_ParamsSpec,
      null,
      [state]);
  }

  selectionBoundsChanged(anchor_rect, anchor_dir, focus_rect, focus_dir, bounding_box_rect, is_anchor_first) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.WidgetHost_SelectionBoundsChanged_ParamsSpec,
      null,
      [anchor_rect, anchor_dir, focus_rect, focus_dir, bounding_box_rect, is_anchor_first]);
  }

  createFrameSink(compositor_frame_sink_receiver, compositor_frame_sink_client, render_input_router_client) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.WidgetHost_CreateFrameSink_ParamsSpec,
      null,
      [compositor_frame_sink_receiver, compositor_frame_sink_client, render_input_router_client]);
  }

  registerRenderFrameMetadataObserver(render_frame_metadata_observer_client_receiver, render_frame_metadata_observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_ParamsSpec,
      null,
      [render_frame_metadata_observer_client_receiver, render_frame_metadata_observer]);
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

// ParamsSpec for SetCursor
blink.mojom.WidgetHost_SetCursor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetHost.SetCursor_Params',
      packedSize: 16,
      fields: [
        { name: 'cursor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateTooltipUnderCursor
blink.mojom.WidgetHost_UpdateTooltipUnderCursor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetHost.UpdateTooltipUnderCursor_Params',
      packedSize: 24,
      fields: [
        { name: 'tooltip_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'text_direction_hint', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateTooltipFromKeyboard
blink.mojom.WidgetHost_UpdateTooltipFromKeyboard_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetHost.UpdateTooltipFromKeyboard_Params',
      packedSize: 32,
      fields: [
        { name: 'tooltip_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'text_direction_hint', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'bounds', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearKeyboardTriggeredTooltip
blink.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetHost.ClearKeyboardTriggeredTooltip_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TextInputStateChanged
blink.mojom.WidgetHost_TextInputStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetHost.TextInputStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SelectionBoundsChanged
blink.mojom.WidgetHost_SelectionBoundsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetHost.SelectionBoundsChanged_Params',
      packedSize: 56,
      fields: [
        { name: 'anchor_rect', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'anchor_dir', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'focus_rect', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'focus_dir', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'bounding_box_rect', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_anchor_first', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateFrameSink
blink.mojom.WidgetHost_CreateFrameSink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetHost.CreateFrameSink_Params',
      packedSize: 24,
      fields: [
        { name: 'compositor_frame_sink_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'compositor_frame_sink_client', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'render_input_router_client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterRenderFrameMetadataObserver
blink.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetHost.RegisterRenderFrameMetadataObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'render_frame_metadata_observer_client_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'render_frame_metadata_observer', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.WidgetHostPtr = blink.mojom.WidgetHostRemote;
blink.mojom.WidgetHostRequest = blink.mojom.WidgetHostPendingReceiver;


// Interface: Widget
blink.mojom.Widget = {};

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
      null,
      []);
  }

  updateVisualProperties(visual_properties) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.Widget_UpdateVisualProperties_ParamsSpec,
      null,
      [visual_properties]);
  }

  updateScreenRects(widget_screen_rect, window_screen_rect) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.Widget_UpdateScreenRects_ParamsSpec,
      null,
      [widget_screen_rect, window_screen_rect]);
  }

  wasHidden() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.Widget_WasHidden_ParamsSpec,
      null,
      []);
  }

  wasShown(was_evicted, record_tab_switch_time_request) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.Widget_WasShown_ParamsSpec,
      null,
      [was_evicted, record_tab_switch_time_request]);
  }

  requestSuccessfulPresentationTimeForNextFrame(visible_time_request) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_ParamsSpec,
      null,
      [visible_time_request]);
  }

  cancelSuccessfulPresentationTimeRequest() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.Widget_CancelSuccessfulPresentationTimeRequest_ParamsSpec,
      null,
      []);
  }

  setupBrowserRenderInputRouterConnections(browser_client) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.Widget_SetupBrowserRenderInputRouterConnections_ParamsSpec,
      null,
      [browser_client]);
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

// ParamsSpec for ForceRedraw
blink.mojom.Widget_ForceRedraw_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Widget.ForceRedraw_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateVisualProperties
blink.mojom.Widget_UpdateVisualProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Widget.UpdateVisualProperties_Params',
      packedSize: 16,
      fields: [
        { name: 'visual_properties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateScreenRects
blink.mojom.Widget_UpdateScreenRects_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Widget.UpdateScreenRects_Params',
      packedSize: 24,
      fields: [
        { name: 'widget_screen_rect', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'window_screen_rect', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WasHidden
blink.mojom.Widget_WasHidden_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Widget.WasHidden_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WasShown
blink.mojom.Widget_WasShown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Widget.WasShown_Params',
      packedSize: 24,
      fields: [
        { name: 'record_tab_switch_time_request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'was_evicted', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestSuccessfulPresentationTimeForNextFrame
blink.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Widget.RequestSuccessfulPresentationTimeForNextFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'visible_time_request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CancelSuccessfulPresentationTimeRequest
blink.mojom.Widget_CancelSuccessfulPresentationTimeRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Widget.CancelSuccessfulPresentationTimeRequest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetupBrowserRenderInputRouterConnections
blink.mojom.Widget_SetupBrowserRenderInputRouterConnections_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Widget.SetupBrowserRenderInputRouterConnections_Params',
      packedSize: 16,
      fields: [
        { name: 'browser_client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.WidgetPtr = blink.mojom.WidgetRemote;
blink.mojom.WidgetRequest = blink.mojom.WidgetPendingReceiver;


// Interface: RenderInputRouterClient
blink.mojom.RenderInputRouterClient = {};

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
      [request, host, from_viz]);
  }

  showContextMenu(source_type, location) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.RenderInputRouterClient_ShowContextMenu_ParamsSpec,
      null,
      [source_type, location]);
  }

  bindInputTargetClient(host) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.RenderInputRouterClient_BindInputTargetClient_ParamsSpec,
      null,
      [host]);
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

// ParamsSpec for GetWidgetInputHandler
blink.mojom.RenderInputRouterClient_GetWidgetInputHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RenderInputRouterClient.GetWidgetInputHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'host', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'from_viz', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowContextMenu
blink.mojom.RenderInputRouterClient_ShowContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RenderInputRouterClient.ShowContextMenu_Params',
      packedSize: 24,
      fields: [
        { name: 'source_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'location', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindInputTargetClient
blink.mojom.RenderInputRouterClient_BindInputTargetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RenderInputRouterClient.BindInputTargetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.RenderInputRouterClientPtr = blink.mojom.RenderInputRouterClientRemote;
blink.mojom.RenderInputRouterClientRequest = blink.mojom.RenderInputRouterClientPendingReceiver;

