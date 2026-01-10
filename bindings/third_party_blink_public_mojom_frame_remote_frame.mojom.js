// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/remote_frame.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};
var url = url || {};


// Struct: RemoteMainFrameInterfaces
blink.mojom.mojom.RemoteMainFrameInterfacesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteMainFrameInterfaces',
      packedSize: 16,
      fields: [
        { name: 'main_frame_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'main_frame', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: RemoteFrameInterfacesFromRenderer
blink.mojom.mojom.RemoteFrameInterfacesFromRendererSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameInterfacesFromRenderer',
      packedSize: 16,
      fields: [
        { name: 'frame', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'frame_host_receiver', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: RemoteFrameInterfacesFromBrowser
blink.mojom.mojom.RemoteFrameInterfacesFromBrowserSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameInterfacesFromBrowser',
      packedSize: 16,
      fields: [
        { name: 'frame_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'frame_host', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CreateRemoteChildParams
blink.mojom.mojom.CreateRemoteChildParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CreateRemoteChildParams',
      packedSize: 80,
      fields: [
        { name: 'token', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.RemoteFrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'opener_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: true, minVersion: 0 },
        { name: 'tree_scope_type', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.TreeScopeTypeSpec, nullable: false, minVersion: 0 },
        { name: 'replication_state', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.FrameReplicationStateSpec, nullable: false, minVersion: 0 },
        { name: 'owner_properties', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.FrameOwnerPropertiesSpec, nullable: false, minVersion: 0 },
        { name: 'is_loading', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'devtools_frame_token', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'frame_interfaces', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.RemoteFrameInterfacesFromBrowserSpec, nullable: false, minVersion: 0 },
        { name: 'child_params', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.CreateRemoteChildParamsSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Struct: OpenURLParams
blink.mojom.mojom.OpenURLParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OpenURLParams',
      packedSize: 136,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'initiator_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'initiator_base_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'actual_navigation_start', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'initiator_frame_token', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: true, minVersion: 0 },
        { name: 'post_body', packedOffset: 40, packedBitOffset: 0, type: network.mojom.URLRequestBodySpec, nullable: true, minVersion: 0 },
        { name: 'extra_headers', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'referrer', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.ReferrerSpec, nullable: false, minVersion: 0 },
        { name: 'is_form_submission', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disposition', packedOffset: 96, packedBitOffset: 0, type: ui.mojom.WindowOpenDispositionSpec, nullable: false, minVersion: 0 },
        { name: 'should_replace_current_entry', packedOffset: 120, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'user_gesture', packedOffset: 120, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_unfenced_top_navigation', packedOffset: 120, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'triggering_event_info', packedOffset: 100, packedBitOffset: 0, type: blink.mojom.TriggeringEventInfoSpec, nullable: false, minVersion: 0 },
        { name: 'blob_url_token', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'href_translate', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'impression', packedOffset: 72, packedBitOffset: 0, type: blink.mojom.ImpressionSpec, nullable: true, minVersion: 0 },
        { name: 'download_policy', packedOffset: 80, packedBitOffset: 0, type: blink.mojom.NavigationDownloadPolicySpec, nullable: false, minVersion: 0 },
        { name: 'source_location', packedOffset: 88, packedBitOffset: 0, type: network.mojom.SourceLocationSpec, nullable: false, minVersion: 0 },
        { name: 'initiator_navigation_state_keep_alive_handle', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'initiator_activation_and_ad_status', packedOffset: 112, packedBitOffset: 0, type: blink.mojom.NavigationInitiatorActivationAndAdStatusSpec, nullable: false, minVersion: 0 },
        { name: 'is_container_initiated', packedOffset: 120, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_rel_opener', packedOffset: 120, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'storage_access_api_status', packedOffset: 116, packedBitOffset: 0, type: network.mojom.StorageAccessApiStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 136}]
    }
  }
};

// Interface: NavigationStateKeepAliveHandle
blink.mojom.mojom.NavigationStateKeepAliveHandle = {};

blink.mojom.mojom.NavigationStateKeepAliveHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.NavigationStateKeepAliveHandleRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.NavigationStateKeepAliveHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.NavigationStateKeepAliveHandlePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.NavigationStateKeepAliveHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.NavigationStateKeepAliveHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

blink.mojom.mojom.NavigationStateKeepAliveHandle.getRemote = function() {
  let remote = new blink.mojom.mojom.NavigationStateKeepAliveHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.NavigationStateKeepAliveHandle',
    'context');
  return remote.$;
};

// Legacy compatibility
blink.mojom.mojom.NavigationStateKeepAliveHandlePtr = blink.mojom.mojom.NavigationStateKeepAliveHandleRemote;
blink.mojom.mojom.NavigationStateKeepAliveHandleRequest = blink.mojom.mojom.NavigationStateKeepAliveHandlePendingReceiver;


// Interface: RemoteFrameHost
blink.mojom.mojom.RemoteFrameHost = {};

blink.mojom.mojom.RemoteFrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.RemoteFrameHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteFrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.RemoteFrameHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.RemoteFrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.RemoteFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setInheritedEffectiveTouchAction(touch_action) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.RemoteFrameHost_SetInheritedEffectiveTouchAction_ParamsSpec,
      null,
      [touch_action]);
  }

  updateRenderThrottlingStatus(is_throttled, subtree_throttled, display_locked) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.RemoteFrameHost_UpdateRenderThrottlingStatus_ParamsSpec,
      null,
      [is_throttled, subtree_throttled, display_locked]);
  }

  visibilityChanged(visibility) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.RemoteFrameHost_VisibilityChanged_ParamsSpec,
      null,
      [visibility]);
  }

  didFocusFrame() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.RemoteFrameHost_DidFocusFrame_ParamsSpec,
      null,
      []);
  }

  checkCompleted() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.RemoteFrameHost_CheckCompleted_ParamsSpec,
      null,
      []);
  }

  capturePaintPreviewOfCrossProcessSubframe(clip_rect, guid) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.mojom.RemoteFrameHost_CapturePaintPreviewOfCrossProcessSubframe_ParamsSpec,
      null,
      [clip_rect, guid]);
  }

  setIsInert(inert) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.mojom.RemoteFrameHost_SetIsInert_ParamsSpec,
      null,
      [inert]);
  }

  didChangeOpener(opener_frame) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.mojom.RemoteFrameHost_DidChangeOpener_ParamsSpec,
      null,
      [opener_frame]);
  }

  advanceFocus(focus_type, source_frame_token) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.mojom.RemoteFrameHost_AdvanceFocus_ParamsSpec,
      null,
      [focus_type, source_frame_token]);
  }

  routeMessageEvent(source_frame_token, source_origin, target_origin, message) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.mojom.RemoteFrameHost_RouteMessageEvent_ParamsSpec,
      null,
      [source_frame_token, source_origin, target_origin, message]);
  }

  printCrossProcessSubframe(frame_content_rect, document_cookie) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.mojom.RemoteFrameHost_PrintCrossProcessSubframe_ParamsSpec,
      null,
      [frame_content_rect, document_cookie]);
  }

  detach() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.mojom.RemoteFrameHost_Detach_ParamsSpec,
      null,
      []);
  }

  updateViewportIntersection(intersection_state, visual_properties) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.mojom.RemoteFrameHost_UpdateViewportIntersection_ParamsSpec,
      null,
      [intersection_state, visual_properties]);
  }

  synchronizeVisualProperties(properties) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.mojom.RemoteFrameHost_SynchronizeVisualProperties_ParamsSpec,
      null,
      [properties]);
  }

  openURL(params) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.mojom.RemoteFrameHost_OpenURL_ParamsSpec,
      null,
      [params]);
  }

};

blink.mojom.mojom.RemoteFrameHost.getRemote = function() {
  let remote = new blink.mojom.mojom.RemoteFrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteFrameHost',
    'context');
  return remote.$;
};

// ParamsSpec for SetInheritedEffectiveTouchAction
blink.mojom.mojom.RemoteFrameHost_SetInheritedEffectiveTouchAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.SetInheritedEffectiveTouchAction_Params',
      packedSize: 16,
      fields: [
        { name: 'touch_action', packedOffset: 0, packedBitOffset: 0, type: cc.mojom.TouchActionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateRenderThrottlingStatus
blink.mojom.mojom.RemoteFrameHost_UpdateRenderThrottlingStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.UpdateRenderThrottlingStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'is_throttled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'subtree_throttled', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'display_locked', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for VisibilityChanged
blink.mojom.mojom.RemoteFrameHost_VisibilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.VisibilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'visibility', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameVisibilitySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DidFocusFrame
blink.mojom.mojom.RemoteFrameHost_DidFocusFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.DidFocusFrame_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CheckCompleted
blink.mojom.mojom.RemoteFrameHost_CheckCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.CheckCompleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CapturePaintPreviewOfCrossProcessSubframe
blink.mojom.mojom.RemoteFrameHost_CapturePaintPreviewOfCrossProcessSubframe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.CapturePaintPreviewOfCrossProcessSubframe_Params',
      packedSize: 24,
      fields: [
        { name: 'clip_rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'guid', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetIsInert
blink.mojom.mojom.RemoteFrameHost_SetIsInert_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.SetIsInert_Params',
      packedSize: 16,
      fields: [
        { name: 'inert', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DidChangeOpener
blink.mojom.mojom.RemoteFrameHost_DidChangeOpener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.DidChangeOpener_Params',
      packedSize: 16,
      fields: [
        { name: 'opener_frame', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AdvanceFocus
blink.mojom.mojom.RemoteFrameHost_AdvanceFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.AdvanceFocus_Params',
      packedSize: 24,
      fields: [
        { name: 'focus_type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FocusTypeSpec, nullable: false, minVersion: 0 },
        { name: 'source_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RouteMessageEvent
blink.mojom.mojom.RemoteFrameHost_RouteMessageEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.RouteMessageEvent_Params',
      packedSize: 40,
      fields: [
        { name: 'source_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: true, minVersion: 0 },
        { name: 'source_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'target_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'message', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.TransferableMessageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for PrintCrossProcessSubframe
blink.mojom.mojom.RemoteFrameHost_PrintCrossProcessSubframe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.PrintCrossProcessSubframe_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_content_rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'document_cookie', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Detach
blink.mojom.mojom.RemoteFrameHost_Detach_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.Detach_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for UpdateViewportIntersection
blink.mojom.mojom.RemoteFrameHost_UpdateViewportIntersection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.UpdateViewportIntersection_Params',
      packedSize: 24,
      fields: [
        { name: 'intersection_state', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ViewportIntersectionStateSpec, nullable: false, minVersion: 0 },
        { name: 'visual_properties', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FrameVisualPropertiesSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SynchronizeVisualProperties
blink.mojom.mojom.RemoteFrameHost_SynchronizeVisualProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.SynchronizeVisualProperties_Params',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameVisualPropertiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenURL
blink.mojom.mojom.RemoteFrameHost_OpenURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.OpenURL_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.OpenURLParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.RemoteFrameHostPtr = blink.mojom.mojom.RemoteFrameHostRemote;
blink.mojom.mojom.RemoteFrameHostRequest = blink.mojom.mojom.RemoteFrameHostPendingReceiver;


// Interface: RemoteFrame
blink.mojom.mojom.RemoteFrame = {};

blink.mojom.mojom.RemoteFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.RemoteFrameRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.RemoteFramePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.RemoteFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.RemoteFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  willEnterFullscreen(options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.RemoteFrame_WillEnterFullscreen_ParamsSpec,
      null,
      [options]);
  }

  enforceInsecureNavigationsSet(set) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.RemoteFrame_EnforceInsecureNavigationsSet_ParamsSpec,
      null,
      [set]);
  }

  setFrameOwnerProperties(properties) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.RemoteFrame_SetFrameOwnerProperties_ParamsSpec,
      null,
      [properties]);
  }

  enforceInsecureRequestPolicy(policy) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.RemoteFrame_EnforceInsecureRequestPolicy_ParamsSpec,
      null,
      [policy]);
  }

  setReplicatedOrigin(origin, is_potentially_trustworthy_unique_origin) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.RemoteFrame_SetReplicatedOrigin_ParamsSpec,
      null,
      [origin, is_potentially_trustworthy_unique_origin]);
  }

  setReplicatedIsAdFrame(is_ad_frame) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.mojom.RemoteFrame_SetReplicatedIsAdFrame_ParamsSpec,
      null,
      [is_ad_frame]);
  }

  setReplicatedName(name, unique_name) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.mojom.RemoteFrame_SetReplicatedName_ParamsSpec,
      null,
      [name, unique_name]);
  }

  dispatchLoadEventForFrameOwner() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.mojom.RemoteFrame_DispatchLoadEventForFrameOwner_ParamsSpec,
      null,
      []);
  }

  setNeedsOcclusionTracking(needs_tracking) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.mojom.RemoteFrame_SetNeedsOcclusionTracking_ParamsSpec,
      null,
      [needs_tracking]);
  }

  collapse(collapsed) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.mojom.RemoteFrame_Collapse_ParamsSpec,
      null,
      [collapsed]);
  }

  focus() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.mojom.RemoteFrame_Focus_ParamsSpec,
      null,
      []);
  }

  setHadStickyUserActivationBeforeNavigation(has_gesture) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.mojom.RemoteFrame_SetHadStickyUserActivationBeforeNavigation_ParamsSpec,
      null,
      [has_gesture]);
  }

  bubbleLogicalScroll(direction, granularity) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.mojom.RemoteFrame_BubbleLogicalScroll_ParamsSpec,
      null,
      [direction, granularity]);
  }

  updateUserActivationState(state_update_type, notification_type) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.mojom.RemoteFrame_UpdateUserActivationState_ParamsSpec,
      null,
      [state_update_type, notification_type]);
  }

  setEmbeddingToken(embedding_token) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.mojom.RemoteFrame_SetEmbeddingToken_ParamsSpec,
      null,
      [embedding_token]);
  }

  setPageFocus(is_focused) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.mojom.RemoteFrame_SetPageFocus_ParamsSpec,
      null,
      [is_focused]);
  }

  renderFallbackContent() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      blink.mojom.mojom.RemoteFrame_RenderFallbackContent_ParamsSpec,
      null,
      []);
  }

  addResourceTimingFromChild(timing) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      blink.mojom.mojom.RemoteFrame_AddResourceTimingFromChild_ParamsSpec,
      null,
      [timing]);
  }

  scrollRectToVisible(rect, params) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      blink.mojom.mojom.RemoteFrame_ScrollRectToVisible_ParamsSpec,
      null,
      [rect, params]);
  }

  didStartLoading() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      blink.mojom.mojom.RemoteFrame_DidStartLoading_ParamsSpec,
      null,
      []);
  }

  didStopLoading() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      blink.mojom.mojom.RemoteFrame_DidStopLoading_ParamsSpec,
      null,
      []);
  }

  intrinsicSizingInfoOfChildChanged(sizing_info) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      blink.mojom.mojom.RemoteFrame_IntrinsicSizingInfoOfChildChanged_ParamsSpec,
      null,
      [sizing_info]);
  }

  didSetFramePolicyHeaders(sandbox_flags, parsed_permissions_policy) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      blink.mojom.mojom.RemoteFrame_DidSetFramePolicyHeaders_ParamsSpec,
      null,
      [sandbox_flags, parsed_permissions_policy]);
  }

  didUpdateFramePolicy(frame_policy) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      blink.mojom.mojom.RemoteFrame_DidUpdateFramePolicy_ParamsSpec,
      null,
      [frame_policy]);
  }

  updateOpener(opener_frame_token) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      blink.mojom.mojom.RemoteFrame_UpdateOpener_ParamsSpec,
      null,
      [opener_frame_token]);
  }

  detachAndDispose() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      blink.mojom.mojom.RemoteFrame_DetachAndDispose_ParamsSpec,
      null,
      []);
  }

  enableAutoResize(min_size, max_size) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      blink.mojom.mojom.RemoteFrame_EnableAutoResize_ParamsSpec,
      null,
      [min_size, max_size]);
  }

  disableAutoResize() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      blink.mojom.mojom.RemoteFrame_DisableAutoResize_ParamsSpec,
      null,
      []);
  }

  didUpdateVisualProperties(metadata) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      blink.mojom.mojom.RemoteFrame_DidUpdateVisualProperties_ParamsSpec,
      null,
      [metadata]);
  }

  setFrameSinkId(frame_sink_id, allow_paint_holding) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      blink.mojom.mojom.RemoteFrame_SetFrameSinkId_ParamsSpec,
      null,
      [frame_sink_id, allow_paint_holding]);
  }

  childProcessGone() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      blink.mojom.mojom.RemoteFrame_ChildProcessGone_ParamsSpec,
      null,
      []);
  }

  createRemoteChild(token, opener_frame_token, tree_scope_type, replication_state, owner_properties, is_loading, devtools_frame_token, remote_frame_interfaces) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      blink.mojom.mojom.RemoteFrame_CreateRemoteChild_ParamsSpec,
      null,
      [token, opener_frame_token, tree_scope_type, replication_state, owner_properties, is_loading, devtools_frame_token, remote_frame_interfaces]);
  }

  createRemoteChildren(params, navigation_metrics_token) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      blink.mojom.mojom.RemoteFrame_CreateRemoteChildren_ParamsSpec,
      null,
      [params, navigation_metrics_token]);
  }

  forwardFencedFrameEventToEmbedder(event_type) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      blink.mojom.mojom.RemoteFrame_ForwardFencedFrameEventToEmbedder_ParamsSpec,
      null,
      [event_type]);
  }

};

blink.mojom.mojom.RemoteFrame.getRemote = function() {
  let remote = new blink.mojom.mojom.RemoteFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteFrame',
    'context');
  return remote.$;
};

// ParamsSpec for WillEnterFullscreen
blink.mojom.mojom.RemoteFrame_WillEnterFullscreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.WillEnterFullscreen_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FullscreenOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnforceInsecureNavigationsSet
blink.mojom.mojom.RemoteFrame_EnforceInsecureNavigationsSet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.EnforceInsecureNavigationsSet_Params',
      packedSize: 16,
      fields: [
        { name: 'set', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetFrameOwnerProperties
blink.mojom.mojom.RemoteFrame_SetFrameOwnerProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.SetFrameOwnerProperties_Params',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameOwnerPropertiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnforceInsecureRequestPolicy
blink.mojom.mojom.RemoteFrame_EnforceInsecureRequestPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.EnforceInsecureRequestPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'policy', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.InsecureRequestPolicySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetReplicatedOrigin
blink.mojom.mojom.RemoteFrame_SetReplicatedOrigin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.SetReplicatedOrigin_Params',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'is_potentially_trustworthy_unique_origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetReplicatedIsAdFrame
blink.mojom.mojom.RemoteFrame_SetReplicatedIsAdFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.SetReplicatedIsAdFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'is_ad_frame', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetReplicatedName
blink.mojom.mojom.RemoteFrame_SetReplicatedName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.SetReplicatedName_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'unique_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DispatchLoadEventForFrameOwner
blink.mojom.mojom.RemoteFrame_DispatchLoadEventForFrameOwner_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.DispatchLoadEventForFrameOwner_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetNeedsOcclusionTracking
blink.mojom.mojom.RemoteFrame_SetNeedsOcclusionTracking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.SetNeedsOcclusionTracking_Params',
      packedSize: 16,
      fields: [
        { name: 'needs_tracking', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Collapse
blink.mojom.mojom.RemoteFrame_Collapse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.Collapse_Params',
      packedSize: 16,
      fields: [
        { name: 'collapsed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Focus
blink.mojom.mojom.RemoteFrame_Focus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.Focus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetHadStickyUserActivationBeforeNavigation
blink.mojom.mojom.RemoteFrame_SetHadStickyUserActivationBeforeNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.SetHadStickyUserActivationBeforeNavigation_Params',
      packedSize: 16,
      fields: [
        { name: 'has_gesture', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BubbleLogicalScroll
blink.mojom.mojom.RemoteFrame_BubbleLogicalScroll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.BubbleLogicalScroll_Params',
      packedSize: 24,
      fields: [
        { name: 'direction', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ScrollDirectionSpec, nullable: false, minVersion: 0 },
        { name: 'granularity', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.ScrollGranularitySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateUserActivationState
blink.mojom.mojom.RemoteFrame_UpdateUserActivationState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.UpdateUserActivationState_Params',
      packedSize: 16,
      fields: [
        { name: 'state_update_type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.UserActivationUpdateTypeSpec, nullable: false, minVersion: 0 },
        { name: 'notification_type', packedOffset: 4, packedBitOffset: 0, type: blink.mojom.UserActivationNotificationTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetEmbeddingToken
blink.mojom.mojom.RemoteFrame_SetEmbeddingToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.SetEmbeddingToken_Params',
      packedSize: 16,
      fields: [
        { name: 'embedding_token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPageFocus
blink.mojom.mojom.RemoteFrame_SetPageFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.SetPageFocus_Params',
      packedSize: 16,
      fields: [
        { name: 'is_focused', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RenderFallbackContent
blink.mojom.mojom.RemoteFrame_RenderFallbackContent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.RenderFallbackContent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for AddResourceTimingFromChild
blink.mojom.mojom.RemoteFrame_AddResourceTimingFromChild_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.AddResourceTimingFromChild_Params',
      packedSize: 16,
      fields: [
        { name: 'timing', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ResourceTimingInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ScrollRectToVisible
blink.mojom.mojom.RemoteFrame_ScrollRectToVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.ScrollRectToVisible_Params',
      packedSize: 24,
      fields: [
        { name: 'rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ScrollIntoViewParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DidStartLoading
blink.mojom.mojom.RemoteFrame_DidStartLoading_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.DidStartLoading_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DidStopLoading
blink.mojom.mojom.RemoteFrame_DidStopLoading_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.DidStopLoading_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for IntrinsicSizingInfoOfChildChanged
blink.mojom.mojom.RemoteFrame_IntrinsicSizingInfoOfChildChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.IntrinsicSizingInfoOfChildChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'sizing_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IntrinsicSizingInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DidSetFramePolicyHeaders
blink.mojom.mojom.RemoteFrame_DidSetFramePolicyHeaders_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.DidSetFramePolicyHeaders_Params',
      packedSize: 24,
      fields: [
        { name: 'sandbox_flags', packedOffset: 8, packedBitOffset: 0, type: network.mojom.WebSandboxFlagsSpec, nullable: false, minVersion: 0 },
        { name: 'parsed_permissions_policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.ParsedPermissionsPolicyDeclarationSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DidUpdateFramePolicy
blink.mojom.mojom.RemoteFrame_DidUpdateFramePolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.DidUpdateFramePolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_policy', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FramePolicySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateOpener
blink.mojom.mojom.RemoteFrame_UpdateOpener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.UpdateOpener_Params',
      packedSize: 24,
      fields: [
        { name: 'opener_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DetachAndDispose
blink.mojom.mojom.RemoteFrame_DetachAndDispose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.DetachAndDispose_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for EnableAutoResize
blink.mojom.mojom.RemoteFrame_EnableAutoResize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.EnableAutoResize_Params',
      packedSize: 24,
      fields: [
        { name: 'min_size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'max_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DisableAutoResize
blink.mojom.mojom.RemoteFrame_DisableAutoResize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.DisableAutoResize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DidUpdateVisualProperties
blink.mojom.mojom.RemoteFrame_DidUpdateVisualProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.DidUpdateVisualProperties_Params',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: cc.mojom.RenderFrameMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetFrameSinkId
blink.mojom.mojom.RemoteFrame_SetFrameSinkId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.SetFrameSinkId_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false, minVersion: 0 },
        { name: 'allow_paint_holding', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ChildProcessGone
blink.mojom.mojom.RemoteFrame_ChildProcessGone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.ChildProcessGone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CreateRemoteChild
blink.mojom.mojom.RemoteFrame_CreateRemoteChild_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.CreateRemoteChild_Params',
      packedSize: 72,
      fields: [
        { name: 'token', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.RemoteFrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'opener_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: true, minVersion: 0 },
        { name: 'tree_scope_type', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.TreeScopeTypeSpec, nullable: false, minVersion: 0 },
        { name: 'replication_state', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.FrameReplicationStateSpec, nullable: false, minVersion: 0 },
        { name: 'owner_properties', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.FrameOwnerPropertiesSpec, nullable: false, minVersion: 0 },
        { name: 'is_loading', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'devtools_frame_token', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'remote_frame_interfaces', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.RemoteFrameInterfacesFromBrowserSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// ParamsSpec for CreateRemoteChildren
blink.mojom.mojom.RemoteFrame_CreateRemoteChildren_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.CreateRemoteChildren_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.CreateRemoteChildParamsSpec, false), nullable: false, minVersion: 0 },
        { name: 'navigation_metrics_token', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ForwardFencedFrameEventToEmbedder
blink.mojom.mojom.RemoteFrame_ForwardFencedFrameEventToEmbedder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.ForwardFencedFrameEventToEmbedder_Params',
      packedSize: 16,
      fields: [
        { name: 'event_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.RemoteFramePtr = blink.mojom.mojom.RemoteFrameRemote;
blink.mojom.mojom.RemoteFrameRequest = blink.mojom.mojom.RemoteFramePendingReceiver;


// Interface: RemoteMainFrame
blink.mojom.mojom.RemoteMainFrame = {};

blink.mojom.mojom.RemoteMainFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.RemoteMainFrameRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteMainFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.RemoteMainFramePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.RemoteMainFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.RemoteMainFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateTextAutosizerPageInfo(page_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.RemoteMainFrame_UpdateTextAutosizerPageInfo_ParamsSpec,
      null,
      [page_info]);
  }

};

blink.mojom.mojom.RemoteMainFrame.getRemote = function() {
  let remote = new blink.mojom.mojom.RemoteMainFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteMainFrame',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateTextAutosizerPageInfo
blink.mojom.mojom.RemoteMainFrame_UpdateTextAutosizerPageInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteMainFrame.UpdateTextAutosizerPageInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'page_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.TextAutosizerPageInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.RemoteMainFramePtr = blink.mojom.mojom.RemoteMainFrameRemote;
blink.mojom.mojom.RemoteMainFrameRequest = blink.mojom.mojom.RemoteMainFramePendingReceiver;


// Interface: RemoteMainFrameHost
blink.mojom.mojom.RemoteMainFrameHost = {};

blink.mojom.mojom.RemoteMainFrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.RemoteMainFrameHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteMainFrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.RemoteMainFrameHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.RemoteMainFrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.RemoteMainFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  focusPage() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.RemoteMainFrameHost_FocusPage_ParamsSpec,
      null,
      []);
  }

  takeFocus(reverse) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.RemoteMainFrameHost_TakeFocus_ParamsSpec,
      null,
      [reverse]);
  }

  updateTargetURL(url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.RemoteMainFrameHost_UpdateTargetURL_ParamsSpec,
      null,
      [url]);
  }

  routeCloseEvent() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.RemoteMainFrameHost_RouteCloseEvent_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.RemoteMainFrameHost.getRemote = function() {
  let remote = new blink.mojom.mojom.RemoteMainFrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteMainFrameHost',
    'context');
  return remote.$;
};

// ParamsSpec for FocusPage
blink.mojom.mojom.RemoteMainFrameHost_FocusPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteMainFrameHost.FocusPage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for TakeFocus
blink.mojom.mojom.RemoteMainFrameHost_TakeFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteMainFrameHost.TakeFocus_Params',
      packedSize: 16,
      fields: [
        { name: 'reverse', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateTargetURL
blink.mojom.mojom.RemoteMainFrameHost_UpdateTargetURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteMainFrameHost.UpdateTargetURL_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RouteCloseEvent
blink.mojom.mojom.RemoteMainFrameHost_RouteCloseEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteMainFrameHost.RouteCloseEvent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.RemoteMainFrameHostPtr = blink.mojom.mojom.RemoteMainFrameHostRemote;
blink.mojom.mojom.RemoteMainFrameHostRequest = blink.mojom.mojom.RemoteMainFrameHostPendingReceiver;

