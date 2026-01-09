// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/remote_frame.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: RemoteMainFrameInterfaces
blink.mojom.RemoteMainFrameInterfaces = class {
  constructor(values = {}) {
    this.main_frame = values.main_frame !== undefined ? values.main_frame : null;
  }
};

// Struct: RemoteFrameInterfacesFromRenderer
blink.mojom.RemoteFrameInterfacesFromRenderer = class {
  constructor(values = {}) {
    this.frame_host_receiver = values.frame_host_receiver !== undefined ? values.frame_host_receiver : null;
  }
};

// Struct: RemoteFrameInterfacesFromBrowser
blink.mojom.RemoteFrameInterfacesFromBrowser = class {
  constructor(values = {}) {
    this.frame_host = values.frame_host !== undefined ? values.frame_host : null;
  }
};

// Struct: CreateRemoteChildParams
blink.mojom.CreateRemoteChildParams = class {
  constructor(values = {}) {
    this.child_params = values.child_params !== undefined ? values.child_params : 0;
  }
};

// Struct: OpenURLParams
blink.mojom.OpenURLParams = class {
  constructor(values = {}) {
    this.initiator_origin = values.initiator_origin !== undefined ? values.initiator_origin : null;
    this.should = values.should !== undefined ? values.should : null;
    this.initiator_base_url = values.initiator_base_url !== undefined ? values.initiator_base_url : null;
    this.the = values.the !== undefined ? values.the : null;
    this.excluding = values.excluding !== undefined ? values.excluding : null;
    this.user_gesture = values.user_gesture !== undefined ? values.user_gesture : false;
    this.download_policy = values.download_policy !== undefined ? values.download_policy : false;
    this.source_location = values.source_location !== undefined ? values.source_location : null;
    this.deleted = values.deleted !== undefined ? values.deleted : null;
    this.initiator_activation_and_ad_status = values.initiator_activation_and_ad_status !== undefined ? values.initiator_activation_and_ad_status : null;
    this.false = values.false !== undefined ? values.false : false;
    this.kNone = values.kNone !== undefined ? values.kNone : false;
  }
};

// Interface: NavigationStateKeepAliveHandle
blink.mojom.NavigationStateKeepAliveHandlePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.NavigationStateKeepAliveHandle';
  }

};

blink.mojom.NavigationStateKeepAliveHandleRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RemoteFrameHost
blink.mojom.RemoteFrameHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.RemoteFrameHost';
  }

  setInheritedEffectiveTouchAction(touch_action) {
    // Method: SetInheritedEffectiveTouchAction
    // Call: SetInheritedEffectiveTouchAction(touch_action)
  }

  updateRenderThrottlingStatus(is_throttled, subtree_throttled, display_locked) {
    // Method: UpdateRenderThrottlingStatus
    // Call: UpdateRenderThrottlingStatus(is_throttled, subtree_throttled, display_locked)
  }

  visibilityChanged(visibility) {
    // Method: VisibilityChanged
    // Call: VisibilityChanged(visibility)
  }

  didFocusFrame() {
    // Method: DidFocusFrame
    // Call: DidFocusFrame()
  }

  checkCompleted() {
    // Method: CheckCompleted
    // Call: CheckCompleted()
  }

  work(in) {
    // Method: work
    // Call: work(in)
  }

  capturePaintPreviewOfCrossProcessSubframe(clip_rect, guid) {
    // Method: CapturePaintPreviewOfCrossProcessSubframe
    // Call: CapturePaintPreviewOfCrossProcessSubframe(clip_rect, guid)
  }

  setIsInert(inert) {
    // Method: SetIsInert
    // Call: SetIsInert(inert)
  }

  didChangeOpener(opener_frame) {
    // Method: DidChangeOpener
    // Call: DidChangeOpener(opener_frame)
  }

  advanceFocus(focus_type, source_frame_token) {
    // Method: AdvanceFocus
    // Call: AdvanceFocus(focus_type, source_frame_token)
  }

  postMessageEvent() {
    // Method: PostMessageEvent
    // Call: PostMessageEvent()
  }

  routeMessageEvent(source_frame_token, source_origin, target_origin, message) {
    // Method: RouteMessageEvent
    // Call: RouteMessageEvent(source_frame_token, source_origin, target_origin, message)
  }

  printCrossProcessSubframe(frame_content_rect, document_cookie) {
    // Method: PrintCrossProcessSubframe
    // Call: PrintCrossProcessSubframe(frame_content_rect, document_cookie)
  }

  detach() {
    // Method: Detach
    // Call: Detach()
  }

  updateViewportIntersection(intersection_state, visual_properties) {
    // Method: UpdateViewportIntersection
    // Call: UpdateViewportIntersection(intersection_state, visual_properties)
  }

  synchronizeVisualProperties(properties) {
    // Method: SynchronizeVisualProperties
    // Call: SynchronizeVisualProperties(properties)
  }

  openURL(params) {
    // Method: OpenURL
    // Call: OpenURL(params)
  }

};

blink.mojom.RemoteFrameHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RemoteFrame
blink.mojom.RemoteFramePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.RemoteFrame';
  }

  willEnterFullscreen(options) {
    // Method: WillEnterFullscreen
    // Call: WillEnterFullscreen(options)
  }

  enforceInsecureNavigationsSet(set) {
    // Method: EnforceInsecureNavigationsSet
    // Call: EnforceInsecureNavigationsSet(set)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  setFrameOwnerProperties(properties) {
    // Method: SetFrameOwnerProperties
    // Call: SetFrameOwnerProperties(properties)
  }

  enforceInsecureRequestPolicy(policy) {
    // Method: EnforceInsecureRequestPolicy
    // Call: EnforceInsecureRequestPolicy(policy)
  }

  setReplicatedOrigin(origin, is_potentially_trustworthy_unique_origin) {
    // Method: SetReplicatedOrigin
    // Call: SetReplicatedOrigin(origin, is_potentially_trustworthy_unique_origin)
  }

  setReplicatedIsAdFrame(is_ad_frame) {
    // Method: SetReplicatedIsAdFrame
    // Call: SetReplicatedIsAdFrame(is_ad_frame)
  }

  setReplicatedName(name, unique_name) {
    // Method: SetReplicatedName
    // Call: SetReplicatedName(name, unique_name)
  }

  dispatchLoadEventForFrameOwner() {
    // Method: DispatchLoadEventForFrameOwner
    // Call: DispatchLoadEventForFrameOwner()
  }

  setNeedsOcclusionTracking(needs_tracking) {
    // Method: SetNeedsOcclusionTracking
    // Call: SetNeedsOcclusionTracking(needs_tracking)
  }

  collapse(collapsed) {
    // Method: Collapse
    // Call: Collapse(collapsed)
  }

  focus() {
    // Method: Focus
    // Call: Focus()
  }

  setHadStickyUserActivationBeforeNavigation(has_gesture) {
    // Method: SetHadStickyUserActivationBeforeNavigation
    // Call: SetHadStickyUserActivationBeforeNavigation(has_gesture)
  }

  bubbleLogicalScroll(direction, granularity) {
    // Method: BubbleLogicalScroll
    // Call: BubbleLogicalScroll(direction, granularity)
  }

  tree(for) {
    // Method: tree
    // Call: tree(for)
  }

  updateUserActivationState(state_update_type, notification_type) {
    // Method: UpdateUserActivationState
    // Call: UpdateUserActivationState(state_update_type, notification_type)
  }

  setEmbeddingToken(embedding_token) {
    // Method: SetEmbeddingToken
    // Call: SetEmbeddingToken(embedding_token)
  }

  setPageFocus(is_focused) {
    // Method: SetPageFocus
    // Call: SetPageFocus(is_focused)
  }

  navigation(or) {
    // Method: navigation
    // Call: navigation(or)
  }

  renderFallbackContent() {
    // Method: RenderFallbackContent
    // Call: RenderFallbackContent()
  }

  addResourceTimingFromChild(timing) {
    // Method: AddResourceTimingFromChild
    // Call: AddResourceTimingFromChild(timing)
  }

  scrollRectToVisible(rect, params) {
    // Method: ScrollRectToVisible
    // Call: ScrollRectToVisible(rect, params)
  }

  didStartLoading() {
    // Method: DidStartLoading
    // Call: DidStartLoading()
  }

  didStopLoading() {
    // Method: DidStopLoading
    // Call: DidStopLoading()
  }

  intrinsicSizingInfoOfChildChanged(sizing_info) {
    // Method: IntrinsicSizingInfoOfChildChanged
    // Call: IntrinsicSizingInfoOfChildChanged(sizing_info)
  }

  didSetFramePolicyHeaders(sandbox_flags, parsed_permissions_policy) {
    // Method: DidSetFramePolicyHeaders
    // Call: DidSetFramePolicyHeaders(sandbox_flags, parsed_permissions_policy)
  }

  didUpdateFramePolicy(frame_policy) {
    // Method: DidUpdateFramePolicy
    // Call: DidUpdateFramePolicy(frame_policy)
  }

  updateOpener(opener_frame_token) {
    // Method: UpdateOpener
    // Call: UpdateOpener(opener_frame_token)
  }

  detachAndDispose() {
    // Method: DetachAndDispose
    // Call: DetachAndDispose()
  }

  enableAutoResize(min_size, max_size) {
    // Method: EnableAutoResize
    // Call: EnableAutoResize(min_size, max_size)
  }

  disableAutoResize() {
    // Method: DisableAutoResize
    // Call: DisableAutoResize()
  }

  didUpdateVisualProperties(metadata) {
    // Method: DidUpdateVisualProperties
    // Call: DidUpdateVisualProperties(metadata)
  }

  destination() {
    // Method: destination
    // Call: destination()
  }

  setFrameSinkId(frame_sink_id, allow_paint_holding) {
    // Method: SetFrameSinkId
    // Call: SetFrameSinkId(frame_sink_id, allow_paint_holding)
  }

  childProcessGone() {
    // Method: ChildProcessGone
    // Call: ChildProcessGone()
  }

  element(<iframe>) {
    // Method: element
    // Call: element(<iframe>)
  }

  didStartLoading() {
    // Method: DidStartLoading
    // Call: DidStartLoading()
  }

  frames(remotes) {
    // Method: frames
    // Call: frames(remotes)
  }

  createRemoteChild(token, opener_frame_token, tree_scope_type, replication_state, owner_properties, is_loading, devtools_frame_token, remote_frame_interfaces) {
    // Method: CreateRemoteChild
    // Call: CreateRemoteChild(token, opener_frame_token, tree_scope_type, replication_state, owner_properties, is_loading, devtools_frame_token, remote_frame_interfaces)
  }

  root(https:) {
    // Method: root
    // Call: root(https:)
  }

  createRemoteChildren(params, navigation_metrics_token) {
    // Method: CreateRemoteChildren
    // Call: CreateRemoteChildren(params, navigation_metrics_token)
  }

  forwardFencedFrameEventToEmbedder(event_type) {
    // Method: ForwardFencedFrameEventToEmbedder
    // Call: ForwardFencedFrameEventToEmbedder(event_type)
  }

};

blink.mojom.RemoteFrameRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RemoteMainFrame
blink.mojom.RemoteMainFramePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.RemoteMainFrame';
  }

  updateTextAutosizerPageInfo(page_info) {
    // Method: UpdateTextAutosizerPageInfo
    // Call: UpdateTextAutosizerPageInfo(page_info)
  }

};

blink.mojom.RemoteMainFrameRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RemoteMainFrameHost
blink.mojom.RemoteMainFrameHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.RemoteMainFrameHost';
  }

  focusPage() {
    // Method: FocusPage
    // Call: FocusPage()
  }

  takeFocus(reverse) {
    // Method: TakeFocus
    // Call: TakeFocus(reverse)
  }

  action(link) {
    // Method: action
    // Call: action(link)
  }

  updateTargetURL(url) {
    // Method: UpdateTargetURL
    // Call: UpdateTargetURL(url)
  }

  routeCloseEvent() {
    // Method: RouteCloseEvent
    // Call: RouteCloseEvent()
  }

};

blink.mojom.RemoteMainFrameHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
