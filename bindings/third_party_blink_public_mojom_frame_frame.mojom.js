// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/frame.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: PluginActionType
blink.mojom.PluginActionType = {
  kRotate90Clockwise: 0,
  kRotate90Counterclockwise: 1,
};

// Enum: JavaScriptExecutionResultType
blink.mojom.JavaScriptExecutionResultType = {
  kSuccess: 0,
  kException: 1,
};

// Enum: TraverseCancelledReason
blink.mojom.TraverseCancelledReason = {
  kNotFound: 0,
  kSandboxViolation: 1,
  kAbortedBeforeCommit: 2,
};

// Enum: ViewTransitionSameOriginOptIn
blink.mojom.ViewTransitionSameOriginOptIn = {
  kDisabled: 0,
  kEnabled: 1,
};

// Enum: FrameOwnerElementType
blink.mojom.FrameOwnerElementType = {
  kNone: 0,
  kIframe: 1,
  kObject: 2,
  kEmbed: 3,
  kFrame: 4,
  kFencedframe: 5,
};

// Enum: NavigationApiEntryRestoreReason
blink.mojom.NavigationApiEntryRestoreReason = {
  kBFCache: 0,
  kPrerenderActivationPush: 1,
  kPrerenderActivationReplace: 2,
};

// Enum: StorageTypeAccessed
blink.mojom.StorageTypeAccessed = {
  kCacheStorage: 0,
  kIndexedDB: 1,
  kFileSystem: 2,
  kWebLocks: 3,
  kLocalStorage: 4,
  kSessionStorage: 5,
};

// Enum: WindowProxyAccessType
blink.mojom.WindowProxyAccessType = {
  kLocation: 0,
  kClosed: 1,
  kLength: 2,
  kSelf: 3,
  kWindow: 4,
  kFrames: 5,
  kOpener: 6,
  kParent: 7,
  kTop: 8,
  kPostMessage: 9,
  kAnonymousIndexedGetter: 10,
  kClose: 11,
  kFocus: 12,
  kBlur: 13,
  kAnonymousNamedGetter: 14,
};

// Struct: SavableSubframe
blink.mojom.SavableSubframe = class {
  constructor(values = {}) {
    this.subframe_token = values.subframe_token !== undefined ? values.subframe_token : null;
  }
};

// Struct: GetSavableResourceLinksReply
blink.mojom.GetSavableResourceLinksReply = class {
  constructor(values = {}) {
    this.subframes = values.subframes !== undefined ? values.subframes : [];
  }
};

// Struct: FindInPageResultAXParams
blink.mojom.FindInPageResultAXParams = class {
  constructor(values = {}) {
    this.end_offset = values.end_offset !== undefined ? values.end_offset : 0;
  }
};

// Struct: DownloadURLParams
blink.mojom.DownloadURLParams = class {
  constructor(values = {}) {
    this.blob_url_token = values.blob_url_token !== undefined ? values.blob_url_token : "";
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: IframeAttributes
blink.mojom.IframeAttributes = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : false;
    this.src = values.src !== undefined ? values.src : "";
  }
};

// Struct: LegacyTechEventCodeLocation
blink.mojom.LegacyTechEventCodeLocation = class {
  constructor(values = {}) {
    this.column = values.column !== undefined ? values.column : 0;
  }
};

// Interface: LocalFrameHost
blink.mojom.LocalFrameHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.LocalFrameHost';
  }

  enterFullscreen(options) {
    // Method: EnterFullscreen
    return new Promise((resolve) => {
      // Call: EnterFullscreen(options)
      resolve({});
    });
  }

  exitFullscreen() {
    // Method: ExitFullscreen
    // Call: ExitFullscreen()
  }

  fullscreenStateChanged(is_fullscreen, options) {
    // Method: FullscreenStateChanged
    // Call: FullscreenStateChanged(is_fullscreen, options)
  }

  registerProtocolHandler(scheme, url, user_gesture) {
    // Method: RegisterProtocolHandler
    // Call: RegisterProtocolHandler(scheme, url, user_gesture)
  }

  unregisterProtocolHandler(scheme, url, user_gesture) {
    // Method: UnregisterProtocolHandler
    // Call: UnregisterProtocolHandler(scheme, url, user_gesture)
  }

  didDisplayInsecureContent() {
    // Method: DidDisplayInsecureContent
    // Call: DidDisplayInsecureContent()
  }

  didContainInsecureFormAction() {
    // Method: DidContainInsecureFormAction
    // Call: DidContainInsecureFormAction()
  }

  mainDocumentElementAvailable(uses_temporary_zoom_level) {
    // Method: MainDocumentElementAvailable
    // Call: MainDocumentElementAvailable(uses_temporary_zoom_level)
  }

  setNeedsOcclusionTracking(needs_tracking) {
    // Method: SetNeedsOcclusionTracking
    // Call: SetNeedsOcclusionTracking(needs_tracking)
  }

  setVirtualKeyboardMode(type) {
    // Method: SetVirtualKeyboardMode
    // Call: SetVirtualKeyboardMode(type)
  }

  visibilityChanged(visibility) {
    // Method: VisibilityChanged
    // Call: VisibilityChanged(visibility)
  }

  didChangeThemeColor(theme_color) {
    // Method: DidChangeThemeColor
    // Call: DidChangeThemeColor(theme_color)
  }

  didChangeBackgroundColor(background_color, color_adjust) {
    // Method: DidChangeBackgroundColor
    // Call: DidChangeBackgroundColor(background_color, color_adjust)
  }

  didFailLoadWithError(url, error_code) {
    // Method: DidFailLoadWithError
    // Call: DidFailLoadWithError(url, error_code)
  }

  didFocusFrame() {
    // Method: DidFocusFrame
    // Call: DidFocusFrame()
  }

  didCallFocus() {
    // Method: DidCallFocus
    // Call: DidCallFocus()
  }

  enforceInsecureRequestPolicy(policy_bitmap) {
    // Method: EnforceInsecureRequestPolicy
    // Call: EnforceInsecureRequestPolicy(policy_bitmap)
  }

  enforceInsecureNavigationsSet(set) {
    // Method: EnforceInsecureNavigationsSet
    // Call: EnforceInsecureNavigationsSet(set)
  }

  suddenTerminationDisablerChanged(present, disabler_type) {
    // Method: SuddenTerminationDisablerChanged
    // Call: SuddenTerminationDisablerChanged(present, disabler_type)
  }

  hadStickyUserActivationBeforeNavigationChanged(has_gesture) {
    // Method: HadStickyUserActivationBeforeNavigationChanged
    // Call: HadStickyUserActivationBeforeNavigationChanged(has_gesture)
  }

  scrollRectToVisibleInParentFrame(rect_to_scroll, params) {
    // Method: ScrollRectToVisibleInParentFrame
    // Call: ScrollRectToVisibleInParentFrame(rect_to_scroll, params)
  }

  bubbleLogicalScrollInParentFrame(direction, granularity) {
    // Method: BubbleLogicalScrollInParentFrame
    // Call: BubbleLogicalScrollInParentFrame(direction, granularity)
  }

  startLoadingForAsyncNavigationApiCommit() {
    // Method: StartLoadingForAsyncNavigationApiCommit
    // Call: StartLoadingForAsyncNavigationApiCommit()
  }

  didBlockNavigation(blocked_url, reason) {
    // Method: DidBlockNavigation
    // Call: DidBlockNavigation(blocked_url, reason)
  }

  didChangeLoadProgress(load_progress) {
    // Method: DidChangeLoadProgress
    // Call: DidChangeLoadProgress(load_progress)
  }

  didFinishLoad(validated_url) {
    // Method: DidFinishLoad
    // Call: DidFinishLoad(validated_url)
  }

  dispatchLoad() {
    // Method: DispatchLoad
    // Call: DispatchLoad()
  }

  goToEntryAtOffset(offset, has_user_gesture, actual_navigation_start, soft_navigation_heuristics_task_id) {
    // Method: GoToEntryAtOffset
    // Call: GoToEntryAtOffset(offset, has_user_gesture, actual_navigation_start, soft_navigation_heuristics_task_id)
  }

  navigateToNavigationApiKey(key, has_user_gesture, actual_navigation_start, soft_navigation_heuristics_task_id) {
    // Method: NavigateToNavigationApiKey
    // Call: NavigateToNavigationApiKey(key, has_user_gesture, actual_navigation_start, soft_navigation_heuristics_task_id)
  }

  navigateEventHandlerPresenceChanged(present) {
    // Method: NavigateEventHandlerPresenceChanged
    // Call: NavigateEventHandlerPresenceChanged(present)
  }

  updateTitle(title, title_direction) {
    // Method: UpdateTitle
    // Call: UpdateTitle(title, title_direction)
  }

  updateApplicationTitle(application_title) {
    // Method: UpdateApplicationTitle
    // Call: UpdateApplicationTitle(application_title)
  }

  updateUserActivationState(update_type, notification_type) {
    // Method: UpdateUserActivationState
    // Call: UpdateUserActivationState(update_type, notification_type)
  }

  didConsumeHistoryUserActivation() {
    // Method: DidConsumeHistoryUserActivation
    // Call: DidConsumeHistoryUserActivation()
  }

  handleAccessibilityFindInPageResult(params) {
    // Method: HandleAccessibilityFindInPageResult
    // Call: HandleAccessibilityFindInPageResult(params)
  }

  handleAccessibilityFindInPageTermination() {
    // Method: HandleAccessibilityFindInPageTermination
    // Call: HandleAccessibilityFindInPageTermination()
  }

  documentOnLoadCompleted() {
    // Method: DocumentOnLoadCompleted
    // Call: DocumentOnLoadCompleted()
  }

  forwardResourceTimingToParent(timing) {
    // Method: ForwardResourceTimingToParent
    // Call: ForwardResourceTimingToParent(timing)
  }

  didDispatchDOMContentLoadedEvent() {
    // Method: DidDispatchDOMContentLoadedEvent
    // Call: DidDispatchDOMContentLoadedEvent()
  }

  runModalAlertDialog(alert_message, disable_third_party_subframe_suppresion) {
    // Method: RunModalAlertDialog
    // Call: RunModalAlertDialog(alert_message, disable_third_party_subframe_suppresion)
  }

  runModalConfirmDialog(alert_message, disable_third_party_subframe_suppresion) {
    // Method: RunModalConfirmDialog
    return new Promise((resolve) => {
      // Call: RunModalConfirmDialog(alert_message, disable_third_party_subframe_suppresion)
      resolve({});
    });
  }

  runModalPromptDialog(alert_message, default_value, disable_third_party_subframe_suppresion) {
    // Method: RunModalPromptDialog
    return new Promise((resolve) => {
      // Call: RunModalPromptDialog(alert_message, default_value, disable_third_party_subframe_suppresion)
      resolve({});
    });
  }

  runBeforeUnloadConfirm(is_reload) {
    // Method: RunBeforeUnloadConfirm
    return new Promise((resolve) => {
      // Call: RunBeforeUnloadConfirm(is_reload)
      resolve({});
    });
  }

  updateFaviconURL(favicon_urls) {
    // Method: UpdateFaviconURL
    // Call: UpdateFaviconURL(favicon_urls)
  }

  downloadURL(params) {
    // Method: DownloadURL
    // Call: DownloadURL(params)
  }

  focusedElementChanged(is_editable_element, is_richly_editable_element, bounds_in_frame_widget, focus_type) {
    // Method: FocusedElementChanged
    // Call: FocusedElementChanged(is_editable_element, is_richly_editable_element, bounds_in_frame_widget, focus_type)
  }

  textSelectionChanged(text, offset, range) {
    // Method: TextSelectionChanged
    // Call: TextSelectionChanged(text, offset, range)
  }

  showPopupMenu(popup_client, bounds, font_size, selected_item, menu_items, right_aligned, allow_multiple_selection) {
    // Method: ShowPopupMenu
    // Call: ShowPopupMenu(popup_client, bounds, font_size, selected_item, menu_items, right_aligned, allow_multiple_selection)
  }

  createNewPopupWidget(popup_host, blink_widget_host, blink_widget) {
    // Method: CreateNewPopupWidget
    // Call: CreateNewPopupWidget(popup_host, blink_widget_host, blink_widget)
  }

  showContextMenu(client, params) {
    // Method: ShowContextMenu
    // Call: ShowContextMenu(client, params)
  }

  didLoadResourceFromMemoryCache(url, http_method, mime_type, request_destination, include_credentials) {
    // Method: DidLoadResourceFromMemoryCache
    // Call: DidLoadResourceFromMemoryCache(url, http_method, mime_type, request_destination, include_credentials)
  }

  didChangeFrameOwnerProperties(child_frame_token, frame_owner_properties) {
    // Method: DidChangeFrameOwnerProperties
    // Call: DidChangeFrameOwnerProperties(child_frame_token, frame_owner_properties)
  }

  didChangeOpener(opener_frame) {
    // Method: DidChangeOpener
    // Call: DidChangeOpener(opener_frame)
  }

  didChangeFramePolicy(child_frame_token, frame_policy) {
    // Method: DidChangeFramePolicy
    // Call: DidChangeFramePolicy(child_frame_token, frame_policy)
  }

  didChangeIframeAttributes(child_frame_token, attributes) {
    // Method: DidChangeIframeAttributes
    // Call: DidChangeIframeAttributes(child_frame_token, attributes)
  }

  capturePaintPreviewOfSubframe(clip_rect, guid) {
    // Method: CapturePaintPreviewOfSubframe
    // Call: CapturePaintPreviewOfSubframe(clip_rect, guid)
  }

  setCloseListener(listener) {
    // Method: SetCloseListener
    // Call: SetCloseListener(listener)
  }

  detach() {
    // Method: Detach
    // Call: Detach()
  }

  getKeepAliveHandleFactory(factory) {
    // Method: GetKeepAliveHandleFactory
    // Call: GetKeepAliveHandleFactory(factory)
  }

  didAddMessageToConsole(log_level, msg, line_number, source_id, untrusted_stack_trace) {
    // Method: DidAddMessageToConsole
    // Call: DidAddMessageToConsole(log_level, msg, line_number, source_id, untrusted_stack_trace)
  }

  frameSizeChanged(size) {
    // Method: FrameSizeChanged
    // Call: FrameSizeChanged(size)
  }

  didInferColorScheme(color_scheme) {
    // Method: DidInferColorScheme
    // Call: DidInferColorScheme(color_scheme)
  }

  didChangeSrcDoc(child_frame_token, srcdoc_value) {
    // Method: DidChangeSrcDoc
    // Call: DidChangeSrcDoc(child_frame_token, srcdoc_value)
  }

  receivedDelegatedCapability(delegated_capability) {
    // Method: ReceivedDelegatedCapability
    // Call: ReceivedDelegatedCapability(delegated_capability)
  }

};

blink.mojom.LocalFrameHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NonAssociatedLocalFrameHost
blink.mojom.NonAssociatedLocalFrameHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.NonAssociatedLocalFrameHost';
  }

  maybeStartOutermostMainFrameNavigation(urls) {
    // Method: MaybeStartOutermostMainFrameNavigation
    // Call: MaybeStartOutermostMainFrameNavigation(urls)
  }

};

blink.mojom.NonAssociatedLocalFrameHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: LocalFrame
blink.mojom.LocalFramePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.LocalFrame';
  }

  getTextSurroundingSelection(max_length) {
    // Method: GetTextSurroundingSelection
    return new Promise((resolve) => {
      // Call: GetTextSurroundingSelection(max_length)
      resolve({});
    });
  }

  sendInterventionReport(id, message, child_frame_token) {
    // Method: SendInterventionReport
    // Call: SendInterventionReport(id, message, child_frame_token)
  }

  setFrameOwnerProperties(properties) {
    // Method: SetFrameOwnerProperties
    // Call: SetFrameOwnerProperties(properties)
  }

  notifyUserActivation(notification_type) {
    // Method: NotifyUserActivation
    // Call: NotifyUserActivation(notification_type)
  }

  notifyVirtualKeyboardOverlayRect(keyboard_rect) {
    // Method: NotifyVirtualKeyboardOverlayRect
    // Call: NotifyVirtualKeyboardOverlayRect(keyboard_rect)
  }

  showInterestInElement(nodeID) {
    // Method: ShowInterestInElement
    // Call: ShowInterestInElement(nodeID)
  }

  addMessageToConsole(level, message, discard_duplicates) {
    // Method: AddMessageToConsole
    // Call: AddMessageToConsole(level, message, discard_duplicates)
  }

  swapInImmediately() {
    // Method: SwapInImmediately
    // Call: SwapInImmediately()
  }

  checkCompleted() {
    // Method: CheckCompleted
    // Call: CheckCompleted()
  }

  stopLoading() {
    // Method: StopLoading
    // Call: StopLoading()
  }

  collapse(collapsed) {
    // Method: Collapse
    // Call: Collapse(collapsed)
  }

  enableViewSourceMode() {
    // Method: EnableViewSourceMode
    // Call: EnableViewSourceMode()
  }

  focus() {
    // Method: Focus
    // Call: Focus()
  }

  clearFocusedElement() {
    // Method: ClearFocusedElement
    // Call: ClearFocusedElement()
  }

  copyImageAt(window_point) {
    // Method: CopyImageAt
    // Call: CopyImageAt(window_point)
  }

  saveImageAt(window_point) {
    // Method: SaveImageAt
    // Call: SaveImageAt(window_point)
  }

  reportBlinkFeatureUsage(features) {
    // Method: ReportBlinkFeatureUsage
    // Call: ReportBlinkFeatureUsage(features)
  }

  renderFallbackContent() {
    // Method: RenderFallbackContent
    // Call: RenderFallbackContent()
  }

  beforeUnload(is_reload) {
    // Method: BeforeUnload
    return new Promise((resolve) => {
      // Call: BeforeUnload(is_reload)
      resolve({});
    });
  }

  mediaPlayerActionAt(location, action) {
    // Method: MediaPlayerActionAt
    // Call: MediaPlayerActionAt(location, action)
  }

  requestVideoFrameAtWithBoundsHint(location, max_size, max_area) {
    // Method: RequestVideoFrameAtWithBoundsHint
    return new Promise((resolve) => {
      // Call: RequestVideoFrameAtWithBoundsHint(location, max_size, max_area)
      resolve({});
    });
  }

  pluginActionAt(location, action) {
    // Method: PluginActionAt
    // Call: PluginActionAt(location, action)
  }

  advanceFocusInFrame(focus_type, source_frame_token) {
    // Method: AdvanceFocusInFrame
    // Call: AdvanceFocusInFrame(focus_type, source_frame_token)
  }

  advanceFocusForIME(focus_type) {
    // Method: AdvanceFocusForIME
    // Call: AdvanceFocusForIME(focus_type)
  }

  reportContentSecurityPolicyViolation(violation) {
    // Method: ReportContentSecurityPolicyViolation
    // Call: ReportContentSecurityPolicyViolation(violation)
  }

  didUpdateFramePolicy(frame_policy) {
    // Method: DidUpdateFramePolicy
    // Call: DidUpdateFramePolicy(frame_policy)
  }

  onFrameVisibilityChanged(visibility) {
    // Method: OnFrameVisibilityChanged
    // Call: OnFrameVisibilityChanged(visibility)
  }

  postMessageEvent(source_frame_token, source_origin, target_origin, message) {
    // Method: PostMessageEvent
    // Call: PostMessageEvent(source_frame_token, source_origin, target_origin, message)
  }

  javaScriptMethodExecuteRequest(object_name, method_name, arguments, wants_result) {
    // Method: JavaScriptMethodExecuteRequest
    return new Promise((resolve) => {
      // Call: JavaScriptMethodExecuteRequest(object_name, method_name, arguments, wants_result)
      resolve({});
    });
  }

  javaScriptExecuteRequest(javascript, wants_result) {
    // Method: JavaScriptExecuteRequest
    return new Promise((resolve) => {
      // Call: JavaScriptExecuteRequest(javascript, wants_result)
      resolve({});
    });
  }

  javaScriptExecuteRequestForTests(javascript, has_user_gesture, resolve_promises, honor_js_content_settings, world_id) {
    // Method: JavaScriptExecuteRequestForTests
    return new Promise((resolve) => {
      // Call: JavaScriptExecuteRequestForTests(javascript, has_user_gesture, resolve_promises, honor_js_content_settings, world_id)
      resolve({});
    });
  }

  javaScriptExecuteRequestInIsolatedWorld(javascript, wants_result, world_id) {
    // Method: JavaScriptExecuteRequestInIsolatedWorld
    return new Promise((resolve) => {
      // Call: JavaScriptExecuteRequestInIsolatedWorld(javascript, wants_result, world_id)
      resolve({});
    });
  }

  getCharacterIndexAtPoint(location) {
    // Method: GetCharacterIndexAtPoint
    // Call: GetCharacterIndexAtPoint(location)
  }

  getFirstRectForRange(range) {
    // Method: GetFirstRectForRange
    // Call: GetFirstRectForRange(range)
  }

  getStringForRange(range) {
    // Method: GetStringForRange
    return new Promise((resolve) => {
      // Call: GetStringForRange(range)
      resolve({});
    });
  }

  bindReportingObserver(receiver) {
    // Method: BindReportingObserver
    // Call: BindReportingObserver(receiver)
  }

  updateOpener(opener_frame_token) {
    // Method: UpdateOpener
    // Call: UpdateOpener(opener_frame_token)
  }

  getSavableResourceLinks() {
    // Method: GetSavableResourceLinks
    return new Promise((resolve) => {
      // Call: GetSavableResourceLinks()
      resolve({});
    });
  }

  mixedContentFound(main_resource_url, mixed_content_url, request_context, was_allowed, url_before_redirects, had_redirect, source_location) {
    // Method: MixedContentFound
    // Call: MixedContentFound(main_resource_url, mixed_content_url, request_context, was_allowed, url_before_redirects, had_redirect, source_location)
  }

  bindDevToolsAgent(agent_host, agent) {
    // Method: BindDevToolsAgent
    // Call: BindDevToolsAgent(agent_host, agent)
  }

  extractSmartClipData(rect) {
    // Method: ExtractSmartClipData
    return new Promise((resolve) => {
      // Call: ExtractSmartClipData(rect)
      resolve({});
    });
  }

  handleRendererDebugURL(url) {
    // Method: HandleRendererDebugURL
    // Call: HandleRendererDebugURL(url)
  }

  getCanonicalUrlForSharing() {
    // Method: GetCanonicalUrlForSharing
    return new Promise((resolve) => {
      // Call: GetCanonicalUrlForSharing()
      resolve({});
    });
  }

  getOpenGraphMetadata() {
    // Method: GetOpenGraphMetadata
    return new Promise((resolve) => {
      // Call: GetOpenGraphMetadata()
      resolve({});
    });
  }

  setNavigationApiHistoryEntriesForRestore(entry_arrays, restore_reason) {
    // Method: SetNavigationApiHistoryEntriesForRestore
    // Call: SetNavigationApiHistoryEntriesForRestore(entry_arrays, restore_reason)
  }

  updatePrerenderURL(matched_url) {
    // Method: UpdatePrerenderURL
    // Call: UpdatePrerenderURL(matched_url)
  }

  notifyNavigationApiOfDisposedEntries(keys) {
    // Method: NotifyNavigationApiOfDisposedEntries
    // Call: NotifyNavigationApiOfDisposedEntries(keys)
  }

  traverseCancelled(navigation_api_key, reason) {
    // Method: TraverseCancelled
    // Call: TraverseCancelled(navigation_api_key, reason)
  }

  dispatchNavigateEventForCrossDocumentTraversal(url, page_state, is_browser_initiated) {
    // Method: DispatchNavigateEventForCrossDocumentTraversal
    // Call: DispatchNavigateEventForCrossDocumentTraversal(url, page_state, is_browser_initiated)
  }

  snapshotDocumentForViewTransition(transition_token, page_swap_event_params) {
    // Method: SnapshotDocumentForViewTransition
    return new Promise((resolve) => {
      // Call: SnapshotDocumentForViewTransition(transition_token, page_swap_event_params)
      resolve({});
    });
  }

  notifyViewTransitionAbortedToOldDocument() {
    // Method: NotifyViewTransitionAbortedToOldDocument
    // Call: NotifyViewTransitionAbortedToOldDocument()
  }

  dispatchPageSwap(page_swap_event_params) {
    // Method: DispatchPageSwap
    // Call: DispatchPageSwap(page_swap_event_params)
  }

  addResourceTimingEntryForFailedSubframeNavigation(subframe_token, initial_url, start_time, redirect_time, request_start, response_start, response_code, mime_type, load_timing_info, connection_info, alpn_negotiated_protocol, is_secure_transport, is_validated, normalized_server_timing, completion_status) {
    // Method: AddResourceTimingEntryForFailedSubframeNavigation
    // Call: AddResourceTimingEntryForFailedSubframeNavigation(subframe_token, initial_url, start_time, redirect_time, request_start, response_start, response_code, mime_type, load_timing_info, connection_info, alpn_negotiated_protocol, is_secure_transport, is_validated, normalized_server_timing, completion_status)
  }

  getScrollPosition() {
    // Method: GetScrollPosition
    return new Promise((resolve) => {
      // Call: GetScrollPosition()
      resolve({});
    });
  }

  performSpellCheck() {
    // Method: PerformSpellCheck
    // Call: PerformSpellCheck()
  }

};

blink.mojom.LocalFrameRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: LocalMainFrame
blink.mojom.LocalMainFramePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.LocalMainFrame';
  }

  animateDoubleTapZoom(point, rect) {
    // Method: AnimateDoubleTapZoom
    // Call: AnimateDoubleTapZoom(point, rect)
  }

  setScaleFactor(scale) {
    // Method: SetScaleFactor
    // Call: SetScaleFactor(scale)
  }

  closePage() {
    // Method: ClosePage
    // Call: ClosePage()
  }

  getFullPageSize() {
    // Method: GetFullPageSize
    return new Promise((resolve) => {
      // Call: GetFullPageSize()
      resolve({});
    });
  }

  setInitialFocus(reverse) {
    // Method: SetInitialFocus
    // Call: SetInitialFocus(reverse)
  }

  enablePreferredSizeChangedMode() {
    // Method: EnablePreferredSizeChangedMode
    // Call: EnablePreferredSizeChangedMode()
  }

  zoomToFindInPageRect(rect_in_root_frame) {
    // Method: ZoomToFindInPageRect
    // Call: ZoomToFindInPageRect(rect_in_root_frame)
  }

  installCoopAccessMonitor(accessed_window, coop_reporter_info) {
    // Method: InstallCoopAccessMonitor
    // Call: InstallCoopAccessMonitor(accessed_window, coop_reporter_info)
  }

  updateBrowserControlsState(constraints, current, animate, offset_tag_modifications) {
    // Method: UpdateBrowserControlsState
    // Call: UpdateBrowserControlsState(constraints, current, animate, offset_tag_modifications)
  }

  setV8CompileHints(data) {
    // Method: SetV8CompileHints
    // Call: SetV8CompileHints(data)
  }

  discard() {
    // Method: Discard
    // Call: Discard()
  }

  finalizeNavigationConfidence(randomized_trigger_rate, confidence) {
    // Method: FinalizeNavigationConfidence
    // Call: FinalizeNavigationConfidence(randomized_trigger_rate, confidence)
  }

};

blink.mojom.LocalMainFrameRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: LocalMainFrameHost
blink.mojom.LocalMainFrameHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.LocalMainFrameHost';
  }

  scaleFactorChanged(scale) {
    // Method: ScaleFactorChanged
    // Call: ScaleFactorChanged(scale)
  }

  contentsPreferredSizeChanged(pref_size) {
    // Method: ContentsPreferredSizeChanged
    // Call: ContentsPreferredSizeChanged(pref_size)
  }

  textAutosizerPageInfoChanged(page_info) {
    // Method: TextAutosizerPageInfoChanged
    // Call: TextAutosizerPageInfoChanged(page_info)
  }

  focusPage() {
    // Method: FocusPage
    // Call: FocusPage()
  }

  takeFocus(reverse) {
    // Method: TakeFocus
    // Call: TakeFocus(reverse)
  }

  updateTargetURL(url) {
    // Method: UpdateTargetURL
    // Call: UpdateTargetURL(url)
  }

  requestClose() {
    // Method: RequestClose
    // Call: RequestClose()
  }

  showCreatedWindow(opener_frame_token, disposition, window_features, opened_by_user_gesture) {
    // Method: ShowCreatedWindow
    // Call: ShowCreatedWindow(opener_frame_token, disposition, window_features, opened_by_user_gesture)
  }

  setWindowRect(bounds) {
    // Method: SetWindowRect
    // Call: SetWindowRect(bounds)
  }

  didFirstVisuallyNonEmptyPaint() {
    // Method: DidFirstVisuallyNonEmptyPaint
    // Call: DidFirstVisuallyNonEmptyPaint()
  }

  didAccessInitialMainDocument() {
    // Method: DidAccessInitialMainDocument
    // Call: DidAccessInitialMainDocument()
  }

  maximize() {
    // Method: Maximize
    // Call: Maximize()
  }

  minimize() {
    // Method: Minimize
    // Call: Minimize()
  }

  restore() {
    // Method: Restore
    // Call: Restore()
  }

  setResizable(resizable) {
    // Method: SetResizable
    // Call: SetResizable(resizable)
  }

  draggableRegionsChanged(regions) {
    // Method: DraggableRegionsChanged
    // Call: DraggableRegionsChanged(regions)
  }

  onFirstContentfulPaint(duration) {
    // Method: OnFirstContentfulPaint
    // Call: OnFirstContentfulPaint(duration)
  }

};

blink.mojom.LocalMainFrameHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
