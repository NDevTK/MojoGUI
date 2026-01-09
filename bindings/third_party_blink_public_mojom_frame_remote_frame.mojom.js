// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/remote_frame.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: NavigationStateKeepAliveHandle
blink.mojom.NavigationStateKeepAliveHandle = {};

blink.mojom.NavigationStateKeepAliveHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.NavigationStateKeepAliveHandleRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.NavigationStateKeepAliveHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.NavigationStateKeepAliveHandlePendingReceiver,
      handle);
    this.$ = new blink.mojom.NavigationStateKeepAliveHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.NavigationStateKeepAliveHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

blink.mojom.NavigationStateKeepAliveHandle.getRemote = function() {
  let remote = new blink.mojom.NavigationStateKeepAliveHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.NavigationStateKeepAliveHandle',
    'context');
  return remote.$;
};

// Legacy compatibility
blink.mojom.NavigationStateKeepAliveHandlePtr = blink.mojom.NavigationStateKeepAliveHandleRemote;
blink.mojom.NavigationStateKeepAliveHandleRequest = blink.mojom.NavigationStateKeepAliveHandlePendingReceiver;


// Interface: RemoteFrameHost
blink.mojom.RemoteFrameHost = {};

blink.mojom.RemoteFrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RemoteFrameHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteFrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RemoteFrameHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.RemoteFrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RemoteFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setInheritedEffectiveTouchAction(touch_action) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.RemoteFrameHost_SetInheritedEffectiveTouchAction_ParamsSpec,
      null,
      null,
      [touch_action],
      undefined,
      undefined
    );
  }

  updateRenderThrottlingStatus(is_throttled, subtree_throttled, display_locked) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.RemoteFrameHost_UpdateRenderThrottlingStatus_ParamsSpec,
      null,
      null,
      [is_throttled, subtree_throttled, display_locked],
      undefined,
      undefined
    );
  }

  visibilityChanged(visibility) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.RemoteFrameHost_VisibilityChanged_ParamsSpec,
      null,
      null,
      [visibility],
      undefined,
      undefined
    );
  }

  didFocusFrame() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.RemoteFrameHost_DidFocusFrame_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  checkCompleted() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.RemoteFrameHost_CheckCompleted_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  capturePaintPreviewOfCrossProcessSubframe(clip_rect, guid) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.RemoteFrameHost_CapturePaintPreviewOfCrossProcessSubframe_ParamsSpec,
      null,
      null,
      [clip_rect, guid],
      undefined,
      undefined
    );
  }

  setIsInert(inert) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.RemoteFrameHost_SetIsInert_ParamsSpec,
      null,
      null,
      [inert],
      undefined,
      undefined
    );
  }

  didChangeOpener(opener_frame) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.RemoteFrameHost_DidChangeOpener_ParamsSpec,
      null,
      null,
      [opener_frame],
      undefined,
      undefined
    );
  }

  advanceFocus(focus_type, source_frame_token) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.RemoteFrameHost_AdvanceFocus_ParamsSpec,
      null,
      null,
      [focus_type, source_frame_token],
      undefined,
      undefined
    );
  }

  routeMessageEvent(source_frame_token, source_origin, target_origin, message) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.RemoteFrameHost_RouteMessageEvent_ParamsSpec,
      null,
      null,
      [source_frame_token, source_origin, target_origin, message],
      undefined,
      undefined
    );
  }

  printCrossProcessSubframe(frame_content_rect, document_cookie) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.RemoteFrameHost_PrintCrossProcessSubframe_ParamsSpec,
      null,
      null,
      [frame_content_rect, document_cookie],
      undefined,
      undefined
    );
  }

  detach() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.RemoteFrameHost_Detach_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  updateViewportIntersection(intersection_state, visual_properties) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.RemoteFrameHost_UpdateViewportIntersection_ParamsSpec,
      null,
      null,
      [intersection_state, visual_properties],
      undefined,
      undefined
    );
  }

  synchronizeVisualProperties(properties) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.RemoteFrameHost_SynchronizeVisualProperties_ParamsSpec,
      null,
      null,
      [properties],
      undefined,
      undefined
    );
  }

  openURL(params) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.RemoteFrameHost_OpenURL_ParamsSpec,
      null,
      null,
      [params],
      undefined,
      undefined
    );
  }

};

blink.mojom.RemoteFrameHost.getRemote = function() {
  let remote = new blink.mojom.RemoteFrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteFrameHost',
    'context');
  return remote.$;
};

// ParamsSpec for SetInheritedEffectiveTouchAction
blink.mojom.RemoteFrameHost_SetInheritedEffectiveTouchAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.SetInheritedEffectiveTouchAction_Params',
      packedSize: 16,
      fields: [
        { name: 'touch_action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateRenderThrottlingStatus
blink.mojom.RemoteFrameHost_UpdateRenderThrottlingStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.UpdateRenderThrottlingStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'is_throttled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'subtree_throttled', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'display_locked', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for VisibilityChanged
blink.mojom.RemoteFrameHost_VisibilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.VisibilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'visibility', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DidFocusFrame
blink.mojom.RemoteFrameHost_DidFocusFrame_ParamsSpec = {
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
blink.mojom.RemoteFrameHost_CheckCompleted_ParamsSpec = {
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
blink.mojom.RemoteFrameHost_CapturePaintPreviewOfCrossProcessSubframe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.CapturePaintPreviewOfCrossProcessSubframe_Params',
      packedSize: 24,
      fields: [
        { name: 'clip_rect', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'guid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetIsInert
blink.mojom.RemoteFrameHost_SetIsInert_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.SetIsInert_Params',
      packedSize: 16,
      fields: [
        { name: 'inert', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DidChangeOpener
blink.mojom.RemoteFrameHost_DidChangeOpener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.DidChangeOpener_Params',
      packedSize: 16,
      fields: [
        { name: 'opener_frame', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AdvanceFocus
blink.mojom.RemoteFrameHost_AdvanceFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.AdvanceFocus_Params',
      packedSize: 24,
      fields: [
        { name: 'focus_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'source_frame_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RouteMessageEvent
blink.mojom.RemoteFrameHost_RouteMessageEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.RouteMessageEvent_Params',
      packedSize: 40,
      fields: [
        { name: 'source_frame_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'source_origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'target_origin', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'message', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for PrintCrossProcessSubframe
blink.mojom.RemoteFrameHost_PrintCrossProcessSubframe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.PrintCrossProcessSubframe_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_content_rect', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'document_cookie', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Detach
blink.mojom.RemoteFrameHost_Detach_ParamsSpec = {
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
blink.mojom.RemoteFrameHost_UpdateViewportIntersection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.UpdateViewportIntersection_Params',
      packedSize: 24,
      fields: [
        { name: 'intersection_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'visual_properties', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SynchronizeVisualProperties
blink.mojom.RemoteFrameHost_SynchronizeVisualProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.SynchronizeVisualProperties_Params',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenURL
blink.mojom.RemoteFrameHost_OpenURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameHost.OpenURL_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.RemoteFrameHostPtr = blink.mojom.RemoteFrameHostRemote;
blink.mojom.RemoteFrameHostRequest = blink.mojom.RemoteFrameHostPendingReceiver;


// Interface: RemoteFrame
blink.mojom.RemoteFrame = {};

blink.mojom.RemoteFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RemoteFrameRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RemoteFramePendingReceiver,
      handle);
    this.$ = new blink.mojom.RemoteFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RemoteFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  willEnterFullscreen(options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.RemoteFrame_WillEnterFullscreen_ParamsSpec,
      null,
      null,
      [options],
      undefined,
      undefined
    );
  }

  enforceInsecureNavigationsSet(set) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.RemoteFrame_EnforceInsecureNavigationsSet_ParamsSpec,
      null,
      null,
      [set],
      undefined,
      undefined
    );
  }

  setFrameOwnerProperties(properties) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.RemoteFrame_SetFrameOwnerProperties_ParamsSpec,
      null,
      null,
      [properties],
      undefined,
      undefined
    );
  }

  enforceInsecureRequestPolicy(policy) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.RemoteFrame_EnforceInsecureRequestPolicy_ParamsSpec,
      null,
      null,
      [policy],
      undefined,
      undefined
    );
  }

  setReplicatedOrigin(origin, is_potentially_trustworthy_unique_origin) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.RemoteFrame_SetReplicatedOrigin_ParamsSpec,
      null,
      null,
      [origin, is_potentially_trustworthy_unique_origin],
      undefined,
      undefined
    );
  }

  setReplicatedIsAdFrame(is_ad_frame) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.RemoteFrame_SetReplicatedIsAdFrame_ParamsSpec,
      null,
      null,
      [is_ad_frame],
      undefined,
      undefined
    );
  }

  setReplicatedName(name, unique_name) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.RemoteFrame_SetReplicatedName_ParamsSpec,
      null,
      null,
      [name, unique_name],
      undefined,
      undefined
    );
  }

  dispatchLoadEventForFrameOwner() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.RemoteFrame_DispatchLoadEventForFrameOwner_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setNeedsOcclusionTracking(needs_tracking) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.RemoteFrame_SetNeedsOcclusionTracking_ParamsSpec,
      null,
      null,
      [needs_tracking],
      undefined,
      undefined
    );
  }

  collapse(collapsed) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.RemoteFrame_Collapse_ParamsSpec,
      null,
      null,
      [collapsed],
      undefined,
      undefined
    );
  }

  focus() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.RemoteFrame_Focus_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setHadStickyUserActivationBeforeNavigation(has_gesture) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.RemoteFrame_SetHadStickyUserActivationBeforeNavigation_ParamsSpec,
      null,
      null,
      [has_gesture],
      undefined,
      undefined
    );
  }

  bubbleLogicalScroll(direction, granularity) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.RemoteFrame_BubbleLogicalScroll_ParamsSpec,
      null,
      null,
      [direction, granularity],
      undefined,
      undefined
    );
  }

  updateUserActivationState(state_update_type, notification_type) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.RemoteFrame_UpdateUserActivationState_ParamsSpec,
      null,
      null,
      [state_update_type, notification_type],
      undefined,
      undefined
    );
  }

  setEmbeddingToken(embedding_token) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.RemoteFrame_SetEmbeddingToken_ParamsSpec,
      null,
      null,
      [embedding_token],
      undefined,
      undefined
    );
  }

  setPageFocus(is_focused) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.RemoteFrame_SetPageFocus_ParamsSpec,
      null,
      null,
      [is_focused],
      undefined,
      undefined
    );
  }

  renderFallbackContent() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      blink.mojom.RemoteFrame_RenderFallbackContent_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  addResourceTimingFromChild(timing) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      blink.mojom.RemoteFrame_AddResourceTimingFromChild_ParamsSpec,
      null,
      null,
      [timing],
      undefined,
      undefined
    );
  }

  scrollRectToVisible(rect, params) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      blink.mojom.RemoteFrame_ScrollRectToVisible_ParamsSpec,
      null,
      null,
      [rect, params],
      undefined,
      undefined
    );
  }

  didStartLoading() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      blink.mojom.RemoteFrame_DidStartLoading_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  didStopLoading() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      blink.mojom.RemoteFrame_DidStopLoading_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  intrinsicSizingInfoOfChildChanged(sizing_info) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      blink.mojom.RemoteFrame_IntrinsicSizingInfoOfChildChanged_ParamsSpec,
      null,
      null,
      [sizing_info],
      undefined,
      undefined
    );
  }

  didSetFramePolicyHeaders(sandbox_flags, parsed_permissions_policy) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      blink.mojom.RemoteFrame_DidSetFramePolicyHeaders_ParamsSpec,
      null,
      null,
      [sandbox_flags, parsed_permissions_policy],
      undefined,
      undefined
    );
  }

  didUpdateFramePolicy(frame_policy) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      blink.mojom.RemoteFrame_DidUpdateFramePolicy_ParamsSpec,
      null,
      null,
      [frame_policy],
      undefined,
      undefined
    );
  }

  updateOpener(opener_frame_token) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      blink.mojom.RemoteFrame_UpdateOpener_ParamsSpec,
      null,
      null,
      [opener_frame_token],
      undefined,
      undefined
    );
  }

  detachAndDispose() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      blink.mojom.RemoteFrame_DetachAndDispose_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  enableAutoResize(min_size, max_size) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      blink.mojom.RemoteFrame_EnableAutoResize_ParamsSpec,
      null,
      null,
      [min_size, max_size],
      undefined,
      undefined
    );
  }

  disableAutoResize() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      blink.mojom.RemoteFrame_DisableAutoResize_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  didUpdateVisualProperties(metadata) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      blink.mojom.RemoteFrame_DidUpdateVisualProperties_ParamsSpec,
      null,
      null,
      [metadata],
      undefined,
      undefined
    );
  }

  setFrameSinkId(frame_sink_id, allow_paint_holding) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      blink.mojom.RemoteFrame_SetFrameSinkId_ParamsSpec,
      null,
      null,
      [frame_sink_id, allow_paint_holding],
      undefined,
      undefined
    );
  }

  childProcessGone() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      blink.mojom.RemoteFrame_ChildProcessGone_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  createRemoteChild(token, opener_frame_token, tree_scope_type, replication_state, owner_properties, is_loading, devtools_frame_token, remote_frame_interfaces) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      blink.mojom.RemoteFrame_CreateRemoteChild_ParamsSpec,
      null,
      null,
      [token, opener_frame_token, tree_scope_type, replication_state, owner_properties, is_loading, devtools_frame_token, remote_frame_interfaces],
      undefined,
      undefined
    );
  }

  createRemoteChildren(params, navigation_metrics_token) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      blink.mojom.RemoteFrame_CreateRemoteChildren_ParamsSpec,
      null,
      null,
      [params, navigation_metrics_token],
      undefined,
      undefined
    );
  }

  forwardFencedFrameEventToEmbedder(event_type) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      blink.mojom.RemoteFrame_ForwardFencedFrameEventToEmbedder_ParamsSpec,
      null,
      null,
      [event_type],
      undefined,
      undefined
    );
  }

};

blink.mojom.RemoteFrame.getRemote = function() {
  let remote = new blink.mojom.RemoteFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteFrame',
    'context');
  return remote.$;
};

// ParamsSpec for WillEnterFullscreen
blink.mojom.RemoteFrame_WillEnterFullscreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.WillEnterFullscreen_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnforceInsecureNavigationsSet
blink.mojom.RemoteFrame_EnforceInsecureNavigationsSet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.EnforceInsecureNavigationsSet_Params',
      packedSize: 16,
      fields: [
        { name: 'set', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetFrameOwnerProperties
blink.mojom.RemoteFrame_SetFrameOwnerProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.SetFrameOwnerProperties_Params',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnforceInsecureRequestPolicy
blink.mojom.RemoteFrame_EnforceInsecureRequestPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.EnforceInsecureRequestPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetReplicatedOrigin
blink.mojom.RemoteFrame_SetReplicatedOrigin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.SetReplicatedOrigin_Params',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_potentially_trustworthy_unique_origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetReplicatedIsAdFrame
blink.mojom.RemoteFrame_SetReplicatedIsAdFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.SetReplicatedIsAdFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'is_ad_frame', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetReplicatedName
blink.mojom.RemoteFrame_SetReplicatedName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.SetReplicatedName_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'unique_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DispatchLoadEventForFrameOwner
blink.mojom.RemoteFrame_DispatchLoadEventForFrameOwner_ParamsSpec = {
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
blink.mojom.RemoteFrame_SetNeedsOcclusionTracking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.SetNeedsOcclusionTracking_Params',
      packedSize: 16,
      fields: [
        { name: 'needs_tracking', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Collapse
blink.mojom.RemoteFrame_Collapse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.Collapse_Params',
      packedSize: 16,
      fields: [
        { name: 'collapsed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Focus
blink.mojom.RemoteFrame_Focus_ParamsSpec = {
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
blink.mojom.RemoteFrame_SetHadStickyUserActivationBeforeNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.SetHadStickyUserActivationBeforeNavigation_Params',
      packedSize: 16,
      fields: [
        { name: 'has_gesture', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BubbleLogicalScroll
blink.mojom.RemoteFrame_BubbleLogicalScroll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.BubbleLogicalScroll_Params',
      packedSize: 24,
      fields: [
        { name: 'direction', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'granularity', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateUserActivationState
blink.mojom.RemoteFrame_UpdateUserActivationState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.UpdateUserActivationState_Params',
      packedSize: 24,
      fields: [
        { name: 'state_update_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'notification_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetEmbeddingToken
blink.mojom.RemoteFrame_SetEmbeddingToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.SetEmbeddingToken_Params',
      packedSize: 16,
      fields: [
        { name: 'embedding_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPageFocus
blink.mojom.RemoteFrame_SetPageFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.SetPageFocus_Params',
      packedSize: 16,
      fields: [
        { name: 'is_focused', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RenderFallbackContent
blink.mojom.RemoteFrame_RenderFallbackContent_ParamsSpec = {
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
blink.mojom.RemoteFrame_AddResourceTimingFromChild_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.AddResourceTimingFromChild_Params',
      packedSize: 16,
      fields: [
        { name: 'timing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ScrollRectToVisible
blink.mojom.RemoteFrame_ScrollRectToVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.ScrollRectToVisible_Params',
      packedSize: 24,
      fields: [
        { name: 'rect', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DidStartLoading
blink.mojom.RemoteFrame_DidStartLoading_ParamsSpec = {
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
blink.mojom.RemoteFrame_DidStopLoading_ParamsSpec = {
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
blink.mojom.RemoteFrame_IntrinsicSizingInfoOfChildChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.IntrinsicSizingInfoOfChildChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'sizing_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DidSetFramePolicyHeaders
blink.mojom.RemoteFrame_DidSetFramePolicyHeaders_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.DidSetFramePolicyHeaders_Params',
      packedSize: 24,
      fields: [
        { name: 'sandbox_flags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'parsed_permissions_policy', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DidUpdateFramePolicy
blink.mojom.RemoteFrame_DidUpdateFramePolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.DidUpdateFramePolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateOpener
blink.mojom.RemoteFrame_UpdateOpener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.UpdateOpener_Params',
      packedSize: 16,
      fields: [
        { name: 'opener_frame_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DetachAndDispose
blink.mojom.RemoteFrame_DetachAndDispose_ParamsSpec = {
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
blink.mojom.RemoteFrame_EnableAutoResize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.EnableAutoResize_Params',
      packedSize: 24,
      fields: [
        { name: 'min_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'max_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DisableAutoResize
blink.mojom.RemoteFrame_DisableAutoResize_ParamsSpec = {
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
blink.mojom.RemoteFrame_DidUpdateVisualProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.DidUpdateVisualProperties_Params',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetFrameSinkId
blink.mojom.RemoteFrame_SetFrameSinkId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.SetFrameSinkId_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'allow_paint_holding', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ChildProcessGone
blink.mojom.RemoteFrame_ChildProcessGone_ParamsSpec = {
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
blink.mojom.RemoteFrame_CreateRemoteChild_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.CreateRemoteChild_Params',
      packedSize: 72,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'opener_frame_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'tree_scope_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'replication_state', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'owner_properties', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_loading', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'devtools_frame_token', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'remote_frame_interfaces', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// ParamsSpec for CreateRemoteChildren
blink.mojom.RemoteFrame_CreateRemoteChildren_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.CreateRemoteChildren_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'navigation_metrics_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ForwardFencedFrameEventToEmbedder
blink.mojom.RemoteFrame_ForwardFencedFrameEventToEmbedder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrame.ForwardFencedFrameEventToEmbedder_Params',
      packedSize: 16,
      fields: [
        { name: 'event_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.RemoteFramePtr = blink.mojom.RemoteFrameRemote;
blink.mojom.RemoteFrameRequest = blink.mojom.RemoteFramePendingReceiver;


// Interface: RemoteMainFrame
blink.mojom.RemoteMainFrame = {};

blink.mojom.RemoteMainFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RemoteMainFrameRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteMainFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RemoteMainFramePendingReceiver,
      handle);
    this.$ = new blink.mojom.RemoteMainFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RemoteMainFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateTextAutosizerPageInfo(page_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.RemoteMainFrame_UpdateTextAutosizerPageInfo_ParamsSpec,
      null,
      null,
      [page_info],
      undefined,
      undefined
    );
  }

};

blink.mojom.RemoteMainFrame.getRemote = function() {
  let remote = new blink.mojom.RemoteMainFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteMainFrame',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateTextAutosizerPageInfo
blink.mojom.RemoteMainFrame_UpdateTextAutosizerPageInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteMainFrame.UpdateTextAutosizerPageInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'page_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.RemoteMainFramePtr = blink.mojom.RemoteMainFrameRemote;
blink.mojom.RemoteMainFrameRequest = blink.mojom.RemoteMainFramePendingReceiver;


// Interface: RemoteMainFrameHost
blink.mojom.RemoteMainFrameHost = {};

blink.mojom.RemoteMainFrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RemoteMainFrameHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteMainFrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RemoteMainFrameHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.RemoteMainFrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RemoteMainFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  focusPage() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.RemoteMainFrameHost_FocusPage_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  takeFocus(reverse) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.RemoteMainFrameHost_TakeFocus_ParamsSpec,
      null,
      null,
      [reverse],
      undefined,
      undefined
    );
  }

  updateTargetURL(url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.RemoteMainFrameHost_UpdateTargetURL_ParamsSpec,
      null,
      null,
      [url],
      undefined,
      undefined
    );
  }

  routeCloseEvent() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.RemoteMainFrameHost_RouteCloseEvent_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

blink.mojom.RemoteMainFrameHost.getRemote = function() {
  let remote = new blink.mojom.RemoteMainFrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteMainFrameHost',
    'context');
  return remote.$;
};

// ParamsSpec for FocusPage
blink.mojom.RemoteMainFrameHost_FocusPage_ParamsSpec = {
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
blink.mojom.RemoteMainFrameHost_TakeFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteMainFrameHost.TakeFocus_Params',
      packedSize: 16,
      fields: [
        { name: 'reverse', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateTargetURL
blink.mojom.RemoteMainFrameHost_UpdateTargetURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteMainFrameHost.UpdateTargetURL_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RouteCloseEvent
blink.mojom.RemoteMainFrameHost_RouteCloseEvent_ParamsSpec = {
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
blink.mojom.RemoteMainFrameHostPtr = blink.mojom.RemoteMainFrameHostRemote;
blink.mojom.RemoteMainFrameHostRequest = blink.mojom.RemoteMainFrameHostPendingReceiver;

