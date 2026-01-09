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
blink.mojom.SavableSubframeSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SavableSubframe',
      packedSize: 24,
      fields: [
        { name: 'original_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'subframe_token', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GetSavableResourceLinksReply
blink.mojom.GetSavableResourceLinksReplySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.GetSavableResourceLinksReply',
      packedSize: 32,
      fields: [
        { name: 'resources_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'referrer', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ReferrerSpec, nullable: false },
        { name: 'subframes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FindInPageResultAXParams
blink.mojom.FindInPageResultAXParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FindInPageResultAXParams',
      packedSize: 32,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'match_index', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'start_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'start_offset', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'end_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'end_offset', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DownloadURLParams
blink.mojom.DownloadURLParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DownloadURLParams',
      packedSize: 64,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'referrer', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ReferrerSpec, nullable: true },
        { name: 'initiator_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true },
        { name: 'suggested_name', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
        { name: 'cross_origin_redirects', packedOffset: 32, packedBitOffset: 0, type: network.mojom.RedirectModeSpec, nullable: false },
        { name: 'blob_url_token', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'data_url_blob', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'is_context_menu_save', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'has_user_gesture', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: IframeAttributes
blink.mojom.IframeAttributesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IframeAttributes',
      packedSize: 48,
      fields: [
        { name: 'parsed_csp_attribute', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ContentSecurityPolicySpec, nullable: true },
        { name: 'credentialless', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'browsing_topics', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'ad_auction_headers', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'shared_storage_writable_opted_in', packedOffset: 8, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'src', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LegacyTechEventCodeLocation
blink.mojom.LegacyTechEventCodeLocationSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LegacyTechEventCodeLocation',
      packedSize: 32,
      fields: [
        { name: 'filename', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'line', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'column', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: LocalFrameHost
blink.mojom.LocalFrameHost = {};

blink.mojom.LocalFrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.LocalFrameHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LocalFrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.LocalFrameHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.LocalFrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.LocalFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enterFullscreen(options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec,
      blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParamsSpec,
      [options]);
  }

  exitFullscreen() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec,
      null,
      []);
  }

  fullscreenStateChanged(is_fullscreen, options) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec,
      null,
      [is_fullscreen, options]);
  }

  registerProtocolHandler(scheme, url, user_gesture) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec,
      null,
      [scheme, url, user_gesture]);
  }

  unregisterProtocolHandler(scheme, url, user_gesture) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec,
      null,
      [scheme, url, user_gesture]);
  }

  didDisplayInsecureContent() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec,
      null,
      []);
  }

  didContainInsecureFormAction() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec,
      null,
      []);
  }

  mainDocumentElementAvailable(uses_temporary_zoom_level) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec,
      null,
      [uses_temporary_zoom_level]);
  }

  setNeedsOcclusionTracking(needs_tracking) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec,
      null,
      [needs_tracking]);
  }

  setVirtualKeyboardMode(type) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec,
      null,
      [type]);
  }

  visibilityChanged(visibility) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec,
      null,
      [visibility]);
  }

  didChangeThemeColor(theme_color) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.LocalFrameHost_DidChangeThemeColor_ParamsSpec,
      null,
      [theme_color]);
  }

  didChangeBackgroundColor(background_color, color_adjust) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.LocalFrameHost_DidChangeBackgroundColor_ParamsSpec,
      null,
      [background_color, color_adjust]);
  }

  didFailLoadWithError(url, error_code) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec,
      null,
      [url, error_code]);
  }

  didFocusFrame() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec,
      null,
      []);
  }

  didCallFocus() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec,
      null,
      []);
  }

  enforceInsecureRequestPolicy(policy_bitmap) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec,
      null,
      [policy_bitmap]);
  }

  enforceInsecureNavigationsSet(set) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec,
      null,
      [set]);
  }

  suddenTerminationDisablerChanged(present, disabler_type) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec,
      null,
      [present, disabler_type]);
  }

  hadStickyUserActivationBeforeNavigationChanged(has_gesture) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec,
      null,
      [has_gesture]);
  }

  scrollRectToVisibleInParentFrame(rect_to_scroll, params) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec,
      null,
      [rect_to_scroll, params]);
  }

  bubbleLogicalScrollInParentFrame(direction, granularity) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec,
      null,
      [direction, granularity]);
  }

  startLoadingForAsyncNavigationApiCommit() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec,
      null,
      []);
  }

  didBlockNavigation(blocked_url, reason) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec,
      null,
      [blocked_url, reason]);
  }

  didChangeLoadProgress(load_progress) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec,
      null,
      [load_progress]);
  }

  didFinishLoad(validated_url) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec,
      null,
      [validated_url]);
  }

  dispatchLoad() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec,
      null,
      []);
  }

  goToEntryAtOffset(offset, has_user_gesture, actual_navigation_start, soft_navigation_heuristics_task_id) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec,
      null,
      [offset, has_user_gesture, actual_navigation_start, soft_navigation_heuristics_task_id]);
  }

  navigateToNavigationApiKey(key, has_user_gesture, actual_navigation_start, soft_navigation_heuristics_task_id) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec,
      null,
      [key, has_user_gesture, actual_navigation_start, soft_navigation_heuristics_task_id]);
  }

  navigateEventHandlerPresenceChanged(present) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec,
      null,
      [present]);
  }

  updateTitle(title, title_direction) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec,
      null,
      [title, title_direction]);
  }

  updateApplicationTitle(application_title) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec,
      null,
      [application_title]);
  }

  updateUserActivationState(update_type, notification_type) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec,
      null,
      [update_type, notification_type]);
  }

  didConsumeHistoryUserActivation() {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec,
      null,
      []);
  }

  handleAccessibilityFindInPageResult(params) {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec,
      null,
      [params]);
  }

  handleAccessibilityFindInPageTermination() {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec,
      null,
      []);
  }

  documentOnLoadCompleted() {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec,
      null,
      []);
  }

  forwardResourceTimingToParent(timing) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec,
      null,
      [timing]);
  }

  didDispatchDOMContentLoadedEvent() {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec,
      null,
      []);
  }

  runModalAlertDialog(alert_message, disable_third_party_subframe_suppresion) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec,
      null,
      [alert_message, disable_third_party_subframe_suppresion]);
  }

  runModalConfirmDialog(alert_message, disable_third_party_subframe_suppresion) {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec,
      blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParamsSpec,
      [alert_message, disable_third_party_subframe_suppresion]);
  }

  runModalPromptDialog(alert_message, default_value, disable_third_party_subframe_suppresion) {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec,
      blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParamsSpec,
      [alert_message, default_value, disable_third_party_subframe_suppresion]);
  }

  runBeforeUnloadConfirm(is_reload) {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec,
      blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParamsSpec,
      [is_reload]);
  }

  updateFaviconURL(favicon_urls) {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec,
      null,
      [favicon_urls]);
  }

  downloadURL(params) {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec,
      null,
      [params]);
  }

  focusedElementChanged(is_editable_element, is_richly_editable_element, bounds_in_frame_widget, focus_type) {
    // Ordinal: 45
    return this.proxy.sendMessage(
      45,  // ordinal
      blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec,
      null,
      [is_editable_element, is_richly_editable_element, bounds_in_frame_widget, focus_type]);
  }

  textSelectionChanged(text, offset, range) {
    // Ordinal: 46
    return this.proxy.sendMessage(
      46,  // ordinal
      blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec,
      null,
      [text, offset, range]);
  }

  showPopupMenu(popup_client, bounds, font_size, selected_item, menu_items, right_aligned, allow_multiple_selection) {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec,
      null,
      [popup_client, bounds, font_size, selected_item, menu_items, right_aligned, allow_multiple_selection]);
  }

  createNewPopupWidget(popup_host, blink_widget_host, blink_widget) {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec,
      null,
      [popup_host, blink_widget_host, blink_widget]);
  }

  showContextMenu(client, params) {
    // Ordinal: 49
    return this.proxy.sendMessage(
      49,  // ordinal
      blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec,
      null,
      [client, params]);
  }

  didLoadResourceFromMemoryCache(url, http_method, mime_type, request_destination, include_credentials) {
    // Ordinal: 50
    return this.proxy.sendMessage(
      50,  // ordinal
      blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec,
      null,
      [url, http_method, mime_type, request_destination, include_credentials]);
  }

  didChangeFrameOwnerProperties(child_frame_token, frame_owner_properties) {
    // Ordinal: 51
    return this.proxy.sendMessage(
      51,  // ordinal
      blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec,
      null,
      [child_frame_token, frame_owner_properties]);
  }

  didChangeOpener(opener_frame) {
    // Ordinal: 52
    return this.proxy.sendMessage(
      52,  // ordinal
      blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec,
      null,
      [opener_frame]);
  }

  didChangeFramePolicy(child_frame_token, frame_policy) {
    // Ordinal: 53
    return this.proxy.sendMessage(
      53,  // ordinal
      blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec,
      null,
      [child_frame_token, frame_policy]);
  }

  didChangeIframeAttributes(child_frame_token, attributes) {
    // Ordinal: 54
    return this.proxy.sendMessage(
      54,  // ordinal
      blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec,
      null,
      [child_frame_token, attributes]);
  }

  capturePaintPreviewOfSubframe(clip_rect, guid) {
    // Ordinal: 55
    return this.proxy.sendMessage(
      55,  // ordinal
      blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec,
      null,
      [clip_rect, guid]);
  }

  setCloseListener(listener) {
    // Ordinal: 56
    return this.proxy.sendMessage(
      56,  // ordinal
      blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec,
      null,
      [listener]);
  }

  detach() {
    // Ordinal: 57
    return this.proxy.sendMessage(
      57,  // ordinal
      blink.mojom.LocalFrameHost_Detach_ParamsSpec,
      null,
      []);
  }

  getKeepAliveHandleFactory(factory) {
    // Ordinal: 58
    return this.proxy.sendMessage(
      58,  // ordinal
      blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec,
      null,
      [factory]);
  }

  didAddMessageToConsole(log_level, msg, line_number, source_id, untrusted_stack_trace) {
    // Ordinal: 59
    return this.proxy.sendMessage(
      59,  // ordinal
      blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec,
      null,
      [log_level, msg, line_number, source_id, untrusted_stack_trace]);
  }

  frameSizeChanged(size) {
    // Ordinal: 60
    return this.proxy.sendMessage(
      60,  // ordinal
      blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec,
      null,
      [size]);
  }

  didInferColorScheme(color_scheme) {
    // Ordinal: 61
    return this.proxy.sendMessage(
      61,  // ordinal
      blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec,
      null,
      [color_scheme]);
  }

  didChangeSrcDoc(child_frame_token, srcdoc_value) {
    // Ordinal: 62
    return this.proxy.sendMessage(
      62,  // ordinal
      blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec,
      null,
      [child_frame_token, srcdoc_value]);
  }

  receivedDelegatedCapability(delegated_capability) {
    // Ordinal: 63
    return this.proxy.sendMessage(
      63,  // ordinal
      blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec,
      null,
      [delegated_capability]);
  }

  sendFencedFrameReportingBeacon(event_data, event_type, destinations, cross_origin_exposed) {
    // Ordinal: 64
    return this.proxy.sendMessage(
      64,  // ordinal
      blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec,
      null,
      [event_data, event_type, destinations, cross_origin_exposed]);
  }

  sendFencedFrameReportingBeaconToCustomURL(destination_url, cross_origin_exposed) {
    // Ordinal: 65
    return this.proxy.sendMessage(
      65,  // ordinal
      blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec,
      null,
      [destination_url, cross_origin_exposed]);
  }

  disableUntrustedNetworkInFencedFrame() {
    // Ordinal: 66
    return this.proxy.sendMessage(
      66,  // ordinal
      blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ParamsSpec,
      null,
      []);
  }

  exemptUrlFromNetworkRevocationForTesting(exempted_url) {
    // Ordinal: 67
    return this.proxy.sendMessage(
      67,  // ordinal
      blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ParamsSpec,
      null,
      [exempted_url]);
  }

  sendLegacyTechEvent(type, code_location) {
    // Ordinal: 68
    return this.proxy.sendMessage(
      68,  // ordinal
      blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec,
      null,
      [type, code_location]);
  }

  setFencedFrameAutomaticBeaconReportEventData(event_type, event_data, destinations, once, cross_origin_exposed) {
    // Ordinal: 69
    return this.proxy.sendMessage(
      69,  // ordinal
      blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec,
      null,
      [event_type, event_data, destinations, once, cross_origin_exposed]);
  }

  sendPrivateAggregationRequestsForFencedFrameEvent(event_type) {
    // Ordinal: 70
    return this.proxy.sendMessage(
      70,  // ordinal
      blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec,
      null,
      [event_type]);
  }

  createFencedFrame(fenced_frame, remote_frame_interfaces, frame_token, devtools_frame_token) {
    // Ordinal: 71
    return this.proxy.sendMessage(
      71,  // ordinal
      blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec,
      null,
      [fenced_frame, remote_frame_interfaces, frame_token, devtools_frame_token]);
  }

  forwardFencedFrameEventAndUserActivationToEmbedder(event_type) {
    // Ordinal: 72
    return this.proxy.sendMessage(
      72,  // ordinal
      blink.mojom.LocalFrameHost_ForwardFencedFrameEventAndUserActivationToEmbedder_ParamsSpec,
      null,
      [event_type]);
  }

  onViewTransitionOptInChanged(view_transition_opt_in) {
    // Ordinal: 73
    return this.proxy.sendMessage(
      73,  // ordinal
      blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec,
      null,
      [view_transition_opt_in]);
  }

  startDragging(drag_data, operations_allowed, image, cursor_offset_in_dip, drag_obj_rect_in_dip, event_info) {
    // Ordinal: 74
    return this.proxy.sendMessage(
      74,  // ordinal
      blink.mojom.LocalFrameHost_StartDragging_ParamsSpec,
      null,
      [drag_data, operations_allowed, image, cursor_offset_in_dip, drag_obj_rect_in_dip, event_info]);
  }

  issueKeepAliveHandle(receiver) {
    // Ordinal: 75
    return this.proxy.sendMessage(
      75,  // ordinal
      blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec,
      null,
      [receiver]);
  }

  notifyStorageAccessed(storageType, blocked) {
    // Ordinal: 76
    return this.proxy.sendMessage(
      76,  // ordinal
      blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec,
      null,
      [storageType, blocked]);
  }

  recordWindowProxyUsageMetrics(target_frame_token, access_type) {
    // Ordinal: 77
    return this.proxy.sendMessage(
      77,  // ordinal
      blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec,
      null,
      [target_frame_token, access_type]);
  }

  notifyDocumentInteractive() {
    // Ordinal: 78
    return this.proxy.sendMessage(
      78,  // ordinal
      blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec,
      null,
      []);
  }

  setStorageAccessApiStatus(status) {
    // Ordinal: 79
    return this.proxy.sendMessage(
      79,  // ordinal
      blink.mojom.LocalFrameHost_SetStorageAccessApiStatus_ParamsSpec,
      null,
      [status]);
  }

  initializeCrashReportStorage(length) {
    // Ordinal: 80
    return this.proxy.sendMessage(
      80,  // ordinal
      blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ParamsSpec,
      null,
      [length]);
  }

  setCrashReportStorageKey(key, value) {
    // Ordinal: 81
    return this.proxy.sendMessage(
      81,  // ordinal
      blink.mojom.LocalFrameHost_SetCrashReportStorageKey_ParamsSpec,
      null,
      [key, value]);
  }

  removeCrashReportStorageKey(key) {
    // Ordinal: 82
    return this.proxy.sendMessage(
      82,  // ordinal
      blink.mojom.LocalFrameHost_RemoveCrashReportStorageKey_ParamsSpec,
      null,
      [key]);
  }

};

blink.mojom.LocalFrameHost.getRemote = function() {
  let remote = new blink.mojom.LocalFrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LocalFrameHost',
    'context');
  return remote.$;
};

// ParamsSpec for EnterFullscreen
blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.EnterFullscreen_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FullscreenOptionsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.EnterFullscreen_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'granted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExitFullscreen
blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.ExitFullscreen_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FullscreenStateChanged
blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.FullscreenStateChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'is_fullscreen', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FullscreenOptionsSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterProtocolHandler
blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.RegisterProtocolHandler_Params',
      packedSize: 32,
      fields: [
        { name: 'scheme', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'user_gesture', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UnregisterProtocolHandler
blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.UnregisterProtocolHandler_Params',
      packedSize: 32,
      fields: [
        { name: 'scheme', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'user_gesture', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidDisplayInsecureContent
blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidDisplayInsecureContent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidContainInsecureFormAction
blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidContainInsecureFormAction_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MainDocumentElementAvailable
blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.MainDocumentElementAvailable_Params',
      packedSize: 16,
      fields: [
        { name: 'uses_temporary_zoom_level', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNeedsOcclusionTracking
blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.SetNeedsOcclusionTracking_Params',
      packedSize: 16,
      fields: [
        { name: 'needs_tracking', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetVirtualKeyboardMode
blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.SetVirtualKeyboardMode_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.VirtualKeyboardModeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for VisibilityChanged
blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.VisibilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'visibility', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameVisibilitySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidChangeThemeColor
blink.mojom.LocalFrameHost_DidChangeThemeColor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidChangeThemeColor_Params',
      packedSize: 16,
      fields: [
        { name: 'theme_color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidChangeBackgroundColor
blink.mojom.LocalFrameHost_DidChangeBackgroundColor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidChangeBackgroundColor_Params',
      packedSize: 24,
      fields: [
        { name: 'background_color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false },
        { name: 'color_adjust', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidFailLoadWithError
blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidFailLoadWithError_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'error_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidFocusFrame
blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidFocusFrame_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidCallFocus
blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidCallFocus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnforceInsecureRequestPolicy
blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.EnforceInsecureRequestPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'policy_bitmap', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.InsecureRequestPolicySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnforceInsecureNavigationsSet
blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.EnforceInsecureNavigationsSet_Params',
      packedSize: 16,
      fields: [
        { name: 'set', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SuddenTerminationDisablerChanged
blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.SuddenTerminationDisablerChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'present', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'disabler_type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.SuddenTerminationDisablerTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HadStickyUserActivationBeforeNavigationChanged
blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.HadStickyUserActivationBeforeNavigationChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'has_gesture', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ScrollRectToVisibleInParentFrame
blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.ScrollRectToVisibleInParentFrame_Params',
      packedSize: 24,
      fields: [
        { name: 'rect_to_scroll', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ScrollIntoViewParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BubbleLogicalScrollInParentFrame
blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.BubbleLogicalScrollInParentFrame_Params',
      packedSize: 24,
      fields: [
        { name: 'direction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ScrollDirectionSpec, nullable: false },
        { name: 'granularity', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.ScrollGranularitySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartLoadingForAsyncNavigationApiCommit
blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.StartLoadingForAsyncNavigationApiCommit_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidBlockNavigation
blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidBlockNavigation_Params',
      packedSize: 24,
      fields: [
        { name: 'blocked_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.NavigationBlockedReasonSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidChangeLoadProgress
blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidChangeLoadProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'load_progress', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidFinishLoad
blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidFinishLoad_Params',
      packedSize: 16,
      fields: [
        { name: 'validated_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchLoad
blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DispatchLoad_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GoToEntryAtOffset
blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.GoToEntryAtOffset_Params',
      packedSize: 40,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'has_user_gesture', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'actual_navigation_start', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'soft_navigation_heuristics_task_id', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.TaskAttributionIdSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NavigateToNavigationApiKey
blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.NavigateToNavigationApiKey_Params',
      packedSize: 40,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'has_user_gesture', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'actual_navigation_start', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'soft_navigation_heuristics_task_id', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.TaskAttributionIdSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NavigateEventHandlerPresenceChanged
blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.NavigateEventHandlerPresenceChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'present', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateTitle
blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.UpdateTitle_Params',
      packedSize: 24,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
        { name: 'title_direction', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TextDirectionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateApplicationTitle
blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.UpdateApplicationTitle_Params',
      packedSize: 16,
      fields: [
        { name: 'application_title', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateUserActivationState
blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.UpdateUserActivationState_Params',
      packedSize: 24,
      fields: [
        { name: 'update_type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.UserActivationUpdateTypeSpec, nullable: false },
        { name: 'notification_type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.UserActivationNotificationTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidConsumeHistoryUserActivation
blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidConsumeHistoryUserActivation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HandleAccessibilityFindInPageResult
blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.HandleAccessibilityFindInPageResult_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FindInPageResultAXParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HandleAccessibilityFindInPageTermination
blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.HandleAccessibilityFindInPageTermination_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DocumentOnLoadCompleted
blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DocumentOnLoadCompleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ForwardResourceTimingToParent
blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.ForwardResourceTimingToParent_Params',
      packedSize: 16,
      fields: [
        { name: 'timing', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ResourceTimingInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidDispatchDOMContentLoadedEvent
blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidDispatchDOMContentLoadedEvent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RunModalAlertDialog
blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.RunModalAlertDialog_Params',
      packedSize: 24,
      fields: [
        { name: 'alert_message', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'disable_third_party_subframe_suppresion', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RunModalConfirmDialog
blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.RunModalConfirmDialog_Params',
      packedSize: 24,
      fields: [
        { name: 'alert_message', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'disable_third_party_subframe_suppresion', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.RunModalConfirmDialog_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RunModalPromptDialog
blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.RunModalPromptDialog_Params',
      packedSize: 32,
      fields: [
        { name: 'alert_message', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'default_value', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'disable_third_party_subframe_suppresion', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.RunModalPromptDialog_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RunBeforeUnloadConfirm
blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.RunBeforeUnloadConfirm_Params',
      packedSize: 16,
      fields: [
        { name: 'is_reload', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.RunBeforeUnloadConfirm_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateFaviconURL
blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.UpdateFaviconURL_Params',
      packedSize: 16,
      fields: [
        { name: 'favicon_urls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DownloadURL
blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DownloadURL_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DownloadURLParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FocusedElementChanged
blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.FocusedElementChanged_Params',
      packedSize: 32,
      fields: [
        { name: 'is_editable_element', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_richly_editable_element', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'bounds_in_frame_widget', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'focus_type', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.FocusTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TextSelectionChanged
blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.TextSelectionChanged_Params',
      packedSize: 32,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigString16Spec, nullable: false },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'range', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowPopupMenu
blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.ShowPopupMenu_Params',
      packedSize: 56,
      fields: [
        { name: 'popup_client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'font_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'selected_item', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'menu_items', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'right_aligned', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_multiple_selection', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateNewPopupWidget
blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.CreateNewPopupWidget_Params',
      packedSize: 24,
      fields: [
        { name: 'popup_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
        { name: 'blink_widget_host', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
        { name: 'blink_widget', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowContextMenu
blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.ShowContextMenu_Params',
      packedSize: 24,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.UntrustworthyContextMenuParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidLoadResourceFromMemoryCache
blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidLoadResourceFromMemoryCache_Params',
      packedSize: 48,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'http_method', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'mime_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'request_destination', packedOffset: 24, packedBitOffset: 0, type: network.mojom.RequestDestinationSpec, nullable: false },
        { name: 'include_credentials', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidChangeFrameOwnerProperties
blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidChangeFrameOwnerProperties_Params',
      packedSize: 24,
      fields: [
        { name: 'child_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: false },
        { name: 'frame_owner_properties', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FrameOwnerPropertiesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidChangeOpener
blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidChangeOpener_Params',
      packedSize: 16,
      fields: [
        { name: 'opener_frame', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidChangeFramePolicy
blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidChangeFramePolicy_Params',
      packedSize: 24,
      fields: [
        { name: 'child_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: false },
        { name: 'frame_policy', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FramePolicySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidChangeIframeAttributes
blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidChangeIframeAttributes_Params',
      packedSize: 24,
      fields: [
        { name: 'child_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: false },
        { name: 'attributes', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.IframeAttributesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CapturePaintPreviewOfSubframe
blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.CapturePaintPreviewOfSubframe_Params',
      packedSize: 24,
      fields: [
        { name: 'clip_rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'guid', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCloseListener
blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.SetCloseListener_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Detach
blink.mojom.LocalFrameHost_Detach_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.Detach_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetKeepAliveHandleFactory
blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.GetKeepAliveHandleFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidAddMessageToConsole
blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidAddMessageToConsole_Params',
      packedSize: 48,
      fields: [
        { name: 'log_level', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ConsoleMessageLevelSpec, nullable: false },
        { name: 'msg', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.BigString16Spec, nullable: false },
        { name: 'line_number', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'source_id', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
        { name: 'untrusted_stack_trace', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.BigString16Spec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FrameSizeChanged
blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.FrameSizeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidInferColorScheme
blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidInferColorScheme_Params',
      packedSize: 16,
      fields: [
        { name: 'color_scheme', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PreferredColorSchemeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidChangeSrcDoc
blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DidChangeSrcDoc_Params',
      packedSize: 24,
      fields: [
        { name: 'child_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: false },
        { name: 'srcdoc_value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReceivedDelegatedCapability
blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.ReceivedDelegatedCapability_Params',
      packedSize: 16,
      fields: [
        { name: 'delegated_capability', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DelegatedCapabilitySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendFencedFrameReportingBeacon
blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.SendFencedFrameReportingBeacon_Params',
      packedSize: 40,
      fields: [
        { name: 'event_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'event_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'destinations', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'cross_origin_exposed', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendFencedFrameReportingBeaconToCustomURL
blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.SendFencedFrameReportingBeaconToCustomURL_Params',
      packedSize: 24,
      fields: [
        { name: 'destination_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'cross_origin_exposed', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DisableUntrustedNetworkInFencedFrame
blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.DisableUntrustedNetworkInFencedFrame_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExemptUrlFromNetworkRevocationForTesting
blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.ExemptUrlFromNetworkRevocationForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'exempted_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendLegacyTechEvent
blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.SendLegacyTechEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'code_location', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.LegacyTechEventCodeLocationSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetFencedFrameAutomaticBeaconReportEventData
blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.SetFencedFrameAutomaticBeaconReportEventData_Params',
      packedSize: 40,
      fields: [
        { name: 'event_type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AutomaticBeaconTypeSpec, nullable: false },
        { name: 'event_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'destinations', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'once', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'cross_origin_exposed', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendPrivateAggregationRequestsForFencedFrameEvent
blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.SendPrivateAggregationRequestsForFencedFrameEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateFencedFrame
blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.CreateFencedFrame_Params',
      packedSize: 40,
      fields: [
        { name: 'fenced_frame', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
        { name: 'remote_frame_interfaces', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.RemoteFrameInterfacesFromRendererSpec, nullable: false },
        { name: 'frame_token', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.RemoteFrameTokenSpec, nullable: false },
        { name: 'devtools_frame_token', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ForwardFencedFrameEventAndUserActivationToEmbedder
blink.mojom.LocalFrameHost_ForwardFencedFrameEventAndUserActivationToEmbedder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.ForwardFencedFrameEventAndUserActivationToEmbedder_Params',
      packedSize: 16,
      fields: [
        { name: 'event_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnViewTransitionOptInChanged
blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.OnViewTransitionOptInChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'view_transition_opt_in', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ViewTransitionSameOriginOptInSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartDragging
blink.mojom.LocalFrameHost_StartDragging_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.StartDragging_Params',
      packedSize: 56,
      fields: [
        { name: 'drag_data', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DragDataSpec, nullable: false },
        { name: 'operations_allowed', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AllowedDragOperationsSpec, nullable: false },
        { name: 'image', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true },
        { name: 'cursor_offset_in_dip', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.Vector2dSpec, nullable: false },
        { name: 'drag_obj_rect_in_dip', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'event_info', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.DragEventSourceInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IssueKeepAliveHandle
blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.IssueKeepAliveHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyStorageAccessed
blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.NotifyStorageAccessed_Params',
      packedSize: 24,
      fields: [
        { name: 'storageType', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.StorageTypeAccessedSpec, nullable: false },
        { name: 'blocked', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordWindowProxyUsageMetrics
blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.RecordWindowProxyUsageMetrics_Params',
      packedSize: 24,
      fields: [
        { name: 'target_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: false },
        { name: 'access_type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.WindowProxyAccessTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyDocumentInteractive
blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.NotifyDocumentInteractive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetStorageAccessApiStatus
blink.mojom.LocalFrameHost_SetStorageAccessApiStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.SetStorageAccessApiStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: network.mojom.StorageAccessApiStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InitializeCrashReportStorage
blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.InitializeCrashReportStorage_Params',
      packedSize: 16,
      fields: [
        { name: 'length', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCrashReportStorageKey
blink.mojom.LocalFrameHost_SetCrashReportStorageKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.SetCrashReportStorageKey_Params',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveCrashReportStorageKey
blink.mojom.LocalFrameHost_RemoveCrashReportStorageKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameHost.RemoveCrashReportStorageKey_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.LocalFrameHostPtr = blink.mojom.LocalFrameHostRemote;
blink.mojom.LocalFrameHostRequest = blink.mojom.LocalFrameHostPendingReceiver;


// Interface: NonAssociatedLocalFrameHost
blink.mojom.NonAssociatedLocalFrameHost = {};

blink.mojom.NonAssociatedLocalFrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.NonAssociatedLocalFrameHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.NonAssociatedLocalFrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.NonAssociatedLocalFrameHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.NonAssociatedLocalFrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.NonAssociatedLocalFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  maybeStartOutermostMainFrameNavigation(urls) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec,
      null,
      [urls]);
  }

};

blink.mojom.NonAssociatedLocalFrameHost.getRemote = function() {
  let remote = new blink.mojom.NonAssociatedLocalFrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.NonAssociatedLocalFrameHost',
    'context');
  return remote.$;
};

// ParamsSpec for MaybeStartOutermostMainFrameNavigation
blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NonAssociatedLocalFrameHost.MaybeStartOutermostMainFrameNavigation_Params',
      packedSize: 16,
      fields: [
        { name: 'urls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.NonAssociatedLocalFrameHostPtr = blink.mojom.NonAssociatedLocalFrameHostRemote;
blink.mojom.NonAssociatedLocalFrameHostRequest = blink.mojom.NonAssociatedLocalFrameHostPendingReceiver;


// Interface: LocalFrame
blink.mojom.LocalFrame = {};

blink.mojom.LocalFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.LocalFrameRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LocalFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.LocalFramePendingReceiver,
      handle);
    this.$ = new blink.mojom.LocalFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.LocalFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTextSurroundingSelection(max_length) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec,
      blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParamsSpec,
      [max_length]);
  }

  sendInterventionReport(id, message, child_frame_token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec,
      null,
      [id, message, child_frame_token]);
  }

  setFrameOwnerProperties(properties) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec,
      null,
      [properties]);
  }

  notifyUserActivation(notification_type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec,
      null,
      [notification_type]);
  }

  notifyVirtualKeyboardOverlayRect(keyboard_rect) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec,
      null,
      [keyboard_rect]);
  }

  showInterestInElement(nodeID) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec,
      null,
      [nodeID]);
  }

  addMessageToConsole(level, message, discard_duplicates) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec,
      null,
      [level, message, discard_duplicates]);
  }

  swapInImmediately() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec,
      null,
      []);
  }

  checkCompleted() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.LocalFrame_CheckCompleted_ParamsSpec,
      null,
      []);
  }

  stopLoading() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.LocalFrame_StopLoading_ParamsSpec,
      null,
      []);
  }

  collapse(collapsed) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.LocalFrame_Collapse_ParamsSpec,
      null,
      [collapsed]);
  }

  enableViewSourceMode() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec,
      null,
      []);
  }

  focus() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.LocalFrame_Focus_ParamsSpec,
      null,
      []);
  }

  clearFocusedElement() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec,
      null,
      []);
  }

  copyImageAt(window_point) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.LocalFrame_CopyImageAt_ParamsSpec,
      null,
      [window_point]);
  }

  saveImageAt(window_point) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.LocalFrame_SaveImageAt_ParamsSpec,
      null,
      [window_point]);
  }

  reportBlinkFeatureUsage(features) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec,
      null,
      [features]);
  }

  renderFallbackContent() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec,
      null,
      []);
  }

  beforeUnload(is_reload) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      blink.mojom.LocalFrame_BeforeUnload_ParamsSpec,
      blink.mojom.LocalFrame_BeforeUnload_ResponseParamsSpec,
      [is_reload]);
  }

  mediaPlayerActionAt(location, action) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec,
      null,
      [location, action]);
  }

  requestVideoFrameAtWithBoundsHint(location, max_size, max_area) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec,
      blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParamsSpec,
      [location, max_size, max_area]);
  }

  pluginActionAt(location, action) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      blink.mojom.LocalFrame_PluginActionAt_ParamsSpec,
      null,
      [location, action]);
  }

  advanceFocusInFrame(focus_type, source_frame_token) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec,
      null,
      [focus_type, source_frame_token]);
  }

  advanceFocusForIME(focus_type) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec,
      null,
      [focus_type]);
  }

  reportContentSecurityPolicyViolation(violation) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec,
      null,
      [violation]);
  }

  didUpdateFramePolicy(frame_policy) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec,
      null,
      [frame_policy]);
  }

  onFrameVisibilityChanged(visibility) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec,
      null,
      [visibility]);
  }

  postMessageEvent(source_frame_token, source_origin, target_origin, message) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec,
      null,
      [source_frame_token, source_origin, target_origin, message]);
  }

  javaScriptMethodExecuteRequest(object_name, method_name, arguments, wants_result) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec,
      blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParamsSpec,
      [object_name, method_name, arguments, wants_result]);
  }

  javaScriptExecuteRequest(javascript, wants_result) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec,
      blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParamsSpec,
      [javascript, wants_result]);
  }

  javaScriptExecuteRequestForTests(javascript, has_user_gesture, resolve_promises, honor_js_content_settings, world_id) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec,
      blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParamsSpec,
      [javascript, has_user_gesture, resolve_promises, honor_js_content_settings, world_id]);
  }

  javaScriptExecuteRequestInIsolatedWorld(javascript, wants_result, world_id) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec,
      blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParamsSpec,
      [javascript, wants_result, world_id]);
  }

  getCharacterIndexAtPoint(location) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      blink.mojom.LocalFrame_GetCharacterIndexAtPoint_ParamsSpec,
      null,
      [location]);
  }

  getFirstRectForRange(range) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      blink.mojom.LocalFrame_GetFirstRectForRange_ParamsSpec,
      null,
      [range]);
  }

  getStringForRange(range) {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      blink.mojom.LocalFrame_GetStringForRange_ParamsSpec,
      blink.mojom.LocalFrame_GetStringForRange_ResponseParamsSpec,
      [range]);
  }

  bindReportingObserver(receiver) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec,
      null,
      [receiver]);
  }

  updateOpener(opener_frame_token) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      blink.mojom.LocalFrame_UpdateOpener_ParamsSpec,
      null,
      [opener_frame_token]);
  }

  getSavableResourceLinks() {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec,
      blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParamsSpec,
      []);
  }

  mixedContentFound(main_resource_url, mixed_content_url, request_context, was_allowed, url_before_redirects, had_redirect, source_location) {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      blink.mojom.LocalFrame_MixedContentFound_ParamsSpec,
      null,
      [main_resource_url, mixed_content_url, request_context, was_allowed, url_before_redirects, had_redirect, source_location]);
  }

  bindDevToolsAgent(agent_host, agent) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec,
      null,
      [agent_host, agent]);
  }

  extractSmartClipData(rect) {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      blink.mojom.LocalFrame_ExtractSmartClipData_ParamsSpec,
      blink.mojom.LocalFrame_ExtractSmartClipData_ResponseParamsSpec,
      [rect]);
  }

  handleRendererDebugURL(url) {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec,
      null,
      [url]);
  }

  getCanonicalUrlForSharing() {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec,
      blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParamsSpec,
      []);
  }

  getOpenGraphMetadata() {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec,
      blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParamsSpec,
      []);
  }

  setNavigationApiHistoryEntriesForRestore(entry_arrays, restore_reason) {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec,
      null,
      [entry_arrays, restore_reason]);
  }

  updatePrerenderURL(matched_url) {
    // Ordinal: 45
    return this.proxy.sendMessage(
      45,  // ordinal
      blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec,
      null,
      [matched_url]);
  }

  notifyNavigationApiOfDisposedEntries(keys) {
    // Ordinal: 46
    return this.proxy.sendMessage(
      46,  // ordinal
      blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec,
      null,
      [keys]);
  }

  traverseCancelled(navigation_api_key, reason) {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec,
      null,
      [navigation_api_key, reason]);
  }

  dispatchNavigateEventForCrossDocumentTraversal(url, page_state, is_browser_initiated) {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec,
      null,
      [url, page_state, is_browser_initiated]);
  }

  snapshotDocumentForViewTransition(transition_token, page_swap_event_params) {
    // Ordinal: 49
    return this.proxy.sendMessage(
      49,  // ordinal
      blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec,
      blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParamsSpec,
      [transition_token, page_swap_event_params]);
  }

  notifyViewTransitionAbortedToOldDocument() {
    // Ordinal: 50
    return this.proxy.sendMessage(
      50,  // ordinal
      blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec,
      null,
      []);
  }

  dispatchPageSwap(page_swap_event_params) {
    // Ordinal: 51
    return this.proxy.sendMessage(
      51,  // ordinal
      blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec,
      null,
      [page_swap_event_params]);
  }

  addResourceTimingEntryForFailedSubframeNavigation(subframe_token, initial_url, start_time, redirect_time, request_start, response_start, response_code, mime_type, load_timing_info, connection_info, alpn_negotiated_protocol, is_secure_transport, is_validated, normalized_server_timing, completion_status) {
    // Ordinal: 52
    return this.proxy.sendMessage(
      52,  // ordinal
      blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec,
      null,
      [subframe_token, initial_url, start_time, redirect_time, request_start, response_start, response_code, mime_type, load_timing_info, connection_info, alpn_negotiated_protocol, is_secure_transport, is_validated, normalized_server_timing, completion_status]);
  }

  getScrollPosition() {
    // Ordinal: 53
    return this.proxy.sendMessage(
      53,  // ordinal
      blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec,
      blink.mojom.LocalFrame_GetScrollPosition_ResponseParamsSpec,
      []);
  }

  performSpellCheck() {
    // Ordinal: 54
    return this.proxy.sendMessage(
      54,  // ordinal
      blink.mojom.LocalFrame_PerformSpellCheck_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.LocalFrame.getRemote = function() {
  let remote = new blink.mojom.LocalFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LocalFrame',
    'context');
  return remote.$;
};

// ParamsSpec for GetTextSurroundingSelection
blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.GetTextSurroundingSelection_Params',
      packedSize: 16,
      fields: [
        { name: 'max_length', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.GetTextSurroundingSelection_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'content', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'start_offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'end_offset', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendInterventionReport
blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.SendInterventionReport_Params',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'child_frame_token', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetFrameOwnerProperties
blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.SetFrameOwnerProperties_Params',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameOwnerPropertiesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyUserActivation
blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.NotifyUserActivation_Params',
      packedSize: 16,
      fields: [
        { name: 'notification_type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.UserActivationNotificationTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyVirtualKeyboardOverlayRect
blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.NotifyVirtualKeyboardOverlayRect_Params',
      packedSize: 16,
      fields: [
        { name: 'keyboard_rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowInterestInElement
blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.ShowInterestInElement_Params',
      packedSize: 16,
      fields: [
        { name: 'nodeID', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddMessageToConsole
blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.AddMessageToConsole_Params',
      packedSize: 32,
      fields: [
        { name: 'level', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ConsoleMessageLevelSpec, nullable: false },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'discard_duplicates', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SwapInImmediately
blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.SwapInImmediately_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CheckCompleted
blink.mojom.LocalFrame_CheckCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.CheckCompleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopLoading
blink.mojom.LocalFrame_StopLoading_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.StopLoading_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Collapse
blink.mojom.LocalFrame_Collapse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.Collapse_Params',
      packedSize: 16,
      fields: [
        { name: 'collapsed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnableViewSourceMode
blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.EnableViewSourceMode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Focus
blink.mojom.LocalFrame_Focus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.Focus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearFocusedElement
blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.ClearFocusedElement_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CopyImageAt
blink.mojom.LocalFrame_CopyImageAt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.CopyImageAt_Params',
      packedSize: 16,
      fields: [
        { name: 'window_point', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SaveImageAt
blink.mojom.LocalFrame_SaveImageAt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.SaveImageAt_Params',
      packedSize: 16,
      fields: [
        { name: 'window_point', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReportBlinkFeatureUsage
blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.ReportBlinkFeatureUsage_Params',
      packedSize: 16,
      fields: [
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RenderFallbackContent
blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.RenderFallbackContent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BeforeUnload
blink.mojom.LocalFrame_BeforeUnload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.BeforeUnload_Params',
      packedSize: 16,
      fields: [
        { name: 'is_reload', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LocalFrame_BeforeUnload_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.BeforeUnload_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'proceed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'before_unload_start_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'before_unload_end_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MediaPlayerActionAt
blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.MediaPlayerActionAt_Params',
      packedSize: 24,
      fields: [
        { name: 'location', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
        { name: 'action', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaPlayerActionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestVideoFrameAtWithBoundsHint
blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.RequestVideoFrameAtWithBoundsHint_Params',
      packedSize: 32,
      fields: [
        { name: 'location', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
        { name: 'max_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'max_area', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.RequestVideoFrameAtWithBoundsHint_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'bitmap', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PluginActionAt
blink.mojom.LocalFrame_PluginActionAt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.PluginActionAt_Params',
      packedSize: 24,
      fields: [
        { name: 'location', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
        { name: 'action', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PluginActionTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AdvanceFocusInFrame
blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.AdvanceFocusInFrame_Params',
      packedSize: 24,
      fields: [
        { name: 'focus_type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FocusTypeSpec, nullable: false },
        { name: 'source_frame_token', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.RemoteFrameTokenSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AdvanceFocusForIME
blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.AdvanceFocusForIME_Params',
      packedSize: 16,
      fields: [
        { name: 'focus_type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FocusTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReportContentSecurityPolicyViolation
blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.ReportContentSecurityPolicyViolation_Params',
      packedSize: 16,
      fields: [
        { name: 'violation', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CSPViolationSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidUpdateFramePolicy
blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.DidUpdateFramePolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_policy', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FramePolicySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFrameVisibilityChanged
blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.OnFrameVisibilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'visibility', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameVisibilitySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PostMessageEvent
blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.PostMessageEvent_Params',
      packedSize: 40,
      fields: [
        { name: 'source_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.RemoteFrameTokenSpec, nullable: true },
        { name: 'source_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true },
        { name: 'target_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true },
        { name: 'message', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.TransferableMessageSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for JavaScriptMethodExecuteRequest
blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.JavaScriptMethodExecuteRequest_Params',
      packedSize: 40,
      fields: [
        { name: 'object_name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'method_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'arguments', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ListValueSpec, nullable: false },
        { name: 'wants_result', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.JavaScriptMethodExecuteRequest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for JavaScriptExecuteRequest
blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.JavaScriptExecuteRequest_Params',
      packedSize: 24,
      fields: [
        { name: 'javascript', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigString16Spec, nullable: false },
        { name: 'wants_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.JavaScriptExecuteRequest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for JavaScriptExecuteRequestForTests
blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.JavaScriptExecuteRequestForTests_Params',
      packedSize: 32,
      fields: [
        { name: 'javascript', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigString16Spec, nullable: false },
        { name: 'has_user_gesture', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'resolve_promises', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'honor_js_content_settings', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'world_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.JavaScriptExecuteRequestForTests_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result_type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.JavaScriptExecutionResultTypeSpec, nullable: false },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for JavaScriptExecuteRequestInIsolatedWorld
blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.JavaScriptExecuteRequestInIsolatedWorld_Params',
      packedSize: 32,
      fields: [
        { name: 'javascript', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigString16Spec, nullable: false },
        { name: 'wants_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'world_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.JavaScriptExecuteRequestInIsolatedWorld_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetCharacterIndexAtPoint
blink.mojom.LocalFrame_GetCharacterIndexAtPoint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.GetCharacterIndexAtPoint_Params',
      packedSize: 16,
      fields: [
        { name: 'location', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetFirstRectForRange
blink.mojom.LocalFrame_GetFirstRectForRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.GetFirstRectForRange_Params',
      packedSize: 16,
      fields: [
        { name: 'range', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetStringForRange
blink.mojom.LocalFrame_GetStringForRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.GetStringForRange_Params',
      packedSize: 16,
      fields: [
        { name: 'range', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LocalFrame_GetStringForRange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.GetStringForRange_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'string', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.AttributedStringSpec, nullable: true },
        { name: 'baseline_point', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindReportingObserver
blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.BindReportingObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateOpener
blink.mojom.LocalFrame_UpdateOpener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.UpdateOpener_Params',
      packedSize: 16,
      fields: [
        { name: 'opener_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSavableResourceLinks
blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.GetSavableResourceLinks_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.GetSavableResourceLinks_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'reply', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.GetSavableResourceLinksReplySpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MixedContentFound
blink.mojom.LocalFrame_MixedContentFound_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.MixedContentFound_Params',
      packedSize: 64,
      fields: [
        { name: 'main_resource_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'mixed_content_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'request_context', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.RequestContextTypeSpec, nullable: false },
        { name: 'was_allowed', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'url_before_redirects', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'had_redirect', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'source_location', packedOffset: 48, packedBitOffset: 0, type: network.mojom.SourceLocationSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindDevToolsAgent
blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.BindDevToolsAgent_Params',
      packedSize: 16,
      fields: [
        { name: 'agent_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
        { name: 'agent', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExtractSmartClipData
blink.mojom.LocalFrame_ExtractSmartClipData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.ExtractSmartClipData_Params',
      packedSize: 16,
      fields: [
        { name: 'rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LocalFrame_ExtractSmartClipData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.ExtractSmartClipData_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'html', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'clip_rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HandleRendererDebugURL
blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.HandleRendererDebugURL_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetCanonicalUrlForSharing
blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.GetCanonicalUrlForSharing_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.GetCanonicalUrlForSharing_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'canonical_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetOpenGraphMetadata
blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.GetOpenGraphMetadata_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.GetOpenGraphMetadata_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.OpenGraphMetadataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNavigationApiHistoryEntriesForRestore
blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.SetNavigationApiHistoryEntriesForRestore_Params',
      packedSize: 24,
      fields: [
        { name: 'entry_arrays', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.NavigationApiHistoryEntryArraysSpec, nullable: false },
        { name: 'restore_reason', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.NavigationApiEntryRestoreReasonSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdatePrerenderURL
blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.UpdatePrerenderURL_Params',
      packedSize: 16,
      fields: [
        { name: 'matched_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyNavigationApiOfDisposedEntries
blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.NotifyNavigationApiOfDisposedEntries_Params',
      packedSize: 16,
      fields: [
        { name: 'keys', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TraverseCancelled
blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.TraverseCancelled_Params',
      packedSize: 24,
      fields: [
        { name: 'navigation_api_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.TraverseCancelledReasonSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchNavigateEventForCrossDocumentTraversal
blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.DispatchNavigateEventForCrossDocumentTraversal_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'page_state', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false },
        { name: 'is_browser_initiated', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SnapshotDocumentForViewTransition
blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.SnapshotDocumentForViewTransition_Params',
      packedSize: 24,
      fields: [
        { name: 'transition_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ViewTransitionTokenSpec, nullable: false },
        { name: 'page_swap_event_params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PageSwapEventParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.SnapshotDocumentForViewTransition_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'view_transition_state', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ViewTransitionStateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyViewTransitionAbortedToOldDocument
blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.NotifyViewTransitionAbortedToOldDocument_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchPageSwap
blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.DispatchPageSwap_Params',
      packedSize: 16,
      fields: [
        { name: 'page_swap_event_params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PageSwapEventParamsSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddResourceTimingEntryForFailedSubframeNavigation
blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.AddResourceTimingEntryForFailedSubframeNavigation_Params',
      packedSize: 120,
      fields: [
        { name: 'subframe_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: false },
        { name: 'initial_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'start_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'redirect_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'request_start', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'response_start', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'response_code', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'mime_type', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'load_timing_info', packedOffset: 64, packedBitOffset: 0, type: network.mojom.LoadTimingInfoSpec, nullable: false },
        { name: 'connection_info', packedOffset: 72, packedBitOffset: 0, type: network.mojom.ConnectionInfoSpec, nullable: false },
        { name: 'alpn_negotiated_protocol', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_secure_transport', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_validated', packedOffset: 88, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'normalized_server_timing', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'completion_status', packedOffset: 104, packedBitOffset: 0, type: network.mojom.URLLoaderCompletionStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetScrollPosition
blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.GetScrollPosition_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LocalFrame_GetScrollPosition_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.GetScrollPosition_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'scroll_position', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PerformSpellCheck
blink.mojom.LocalFrame_PerformSpellCheck_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrame.PerformSpellCheck_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.LocalFramePtr = blink.mojom.LocalFrameRemote;
blink.mojom.LocalFrameRequest = blink.mojom.LocalFramePendingReceiver;


// Interface: LocalMainFrame
blink.mojom.LocalMainFrame = {};

blink.mojom.LocalMainFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.LocalMainFrameRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LocalMainFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.LocalMainFramePendingReceiver,
      handle);
    this.$ = new blink.mojom.LocalMainFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.LocalMainFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  animateDoubleTapZoom(point, rect) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec,
      null,
      [point, rect]);
  }

  setScaleFactor(scale) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec,
      null,
      [scale]);
  }

  closePage() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.LocalMainFrame_ClosePage_ParamsSpec,
      null,
      []);
  }

  getFullPageSize() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec,
      blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParamsSpec,
      []);
  }

  setInitialFocus(reverse) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec,
      null,
      [reverse]);
  }

  enablePreferredSizeChangedMode() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec,
      null,
      []);
  }

  zoomToFindInPageRect(rect_in_root_frame) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec,
      null,
      [rect_in_root_frame]);
  }

  installCoopAccessMonitor(accessed_window, coop_reporter_info) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec,
      null,
      [accessed_window, coop_reporter_info]);
  }

  updateBrowserControlsState(constraints, current, animate, offset_tag_modifications) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec,
      null,
      [constraints, current, animate, offset_tag_modifications]);
  }

  setV8CompileHints(data) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec,
      null,
      [data]);
  }

  discard() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.LocalMainFrame_Discard_ParamsSpec,
      null,
      []);
  }

  finalizeNavigationConfidence(randomized_trigger_rate, confidence) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec,
      null,
      [randomized_trigger_rate, confidence]);
  }

};

blink.mojom.LocalMainFrame.getRemote = function() {
  let remote = new blink.mojom.LocalMainFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LocalMainFrame',
    'context');
  return remote.$;
};

// ParamsSpec for AnimateDoubleTapZoom
blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrame.AnimateDoubleTapZoom_Params',
      packedSize: 24,
      fields: [
        { name: 'point', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
        { name: 'rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetScaleFactor
blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrame.SetScaleFactor_Params',
      packedSize: 16,
      fields: [
        { name: 'scale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClosePage
blink.mojom.LocalMainFrame_ClosePage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrame.ClosePage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetFullPageSize
blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrame.GetFullPageSize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrame.GetFullPageSize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'full_page_size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetInitialFocus
blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrame.SetInitialFocus_Params',
      packedSize: 16,
      fields: [
        { name: 'reverse', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnablePreferredSizeChangedMode
blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrame.EnablePreferredSizeChangedMode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ZoomToFindInPageRect
blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrame.ZoomToFindInPageRect_Params',
      packedSize: 16,
      fields: [
        { name: 'rect_in_root_frame', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InstallCoopAccessMonitor
blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrame.InstallCoopAccessMonitor_Params',
      packedSize: 24,
      fields: [
        { name: 'accessed_window', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: false },
        { name: 'coop_reporter_info', packedOffset: 8, packedBitOffset: 0, type: network.mojom.CrossOriginOpenerPolicyReporterParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateBrowserControlsState
blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrame.UpdateBrowserControlsState_Params',
      packedSize: 40,
      fields: [
        { name: 'constraints', packedOffset: 0, packedBitOffset: 0, type: cc.mojom.BrowserControlsStateSpec, nullable: false },
        { name: 'current', packedOffset: 8, packedBitOffset: 0, type: cc.mojom.BrowserControlsStateSpec, nullable: false },
        { name: 'animate', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'offset_tag_modifications', packedOffset: 24, packedBitOffset: 0, type: cc.mojom.BrowserControlsOffsetTagModificationsSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetV8CompileHints
blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrame.SetV8CompileHints_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Discard
blink.mojom.LocalMainFrame_Discard_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrame.Discard_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FinalizeNavigationConfidence
blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrame.FinalizeNavigationConfidence_Params',
      packedSize: 24,
      fields: [
        { name: 'randomized_trigger_rate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'confidence', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ConfidenceLevelSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.LocalMainFramePtr = blink.mojom.LocalMainFrameRemote;
blink.mojom.LocalMainFrameRequest = blink.mojom.LocalMainFramePendingReceiver;


// Interface: LocalMainFrameHost
blink.mojom.LocalMainFrameHost = {};

blink.mojom.LocalMainFrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.LocalMainFrameHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LocalMainFrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.LocalMainFrameHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.LocalMainFrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.LocalMainFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  scaleFactorChanged(scale) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec,
      null,
      [scale]);
  }

  contentsPreferredSizeChanged(pref_size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec,
      null,
      [pref_size]);
  }

  textAutosizerPageInfoChanged(page_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.LocalMainFrameHost_TextAutosizerPageInfoChanged_ParamsSpec,
      null,
      [page_info]);
  }

  focusPage() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec,
      null,
      []);
  }

  takeFocus(reverse) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec,
      null,
      [reverse]);
  }

  updateTargetURL(url) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec,
      null,
      [url]);
  }

  requestClose() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec,
      null,
      []);
  }

  showCreatedWindow(opener_frame_token, disposition, window_features, opened_by_user_gesture) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ParamsSpec,
      null,
      [opener_frame_token, disposition, window_features, opened_by_user_gesture]);
  }

  setWindowRect(bounds) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec,
      null,
      [bounds]);
  }

  didFirstVisuallyNonEmptyPaint() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec,
      null,
      []);
  }

  didAccessInitialMainDocument() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec,
      null,
      []);
  }

  maximize() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec,
      null,
      []);
  }

  minimize() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec,
      null,
      []);
  }

  restore() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.LocalMainFrameHost_Restore_ParamsSpec,
      null,
      []);
  }

  setResizable(resizable) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec,
      null,
      [resizable]);
  }

  draggableRegionsChanged(regions) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec,
      null,
      [regions]);
  }

  onFirstContentfulPaint(duration) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec,
      null,
      [duration]);
  }

};

blink.mojom.LocalMainFrameHost.getRemote = function() {
  let remote = new blink.mojom.LocalMainFrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LocalMainFrameHost',
    'context');
  return remote.$;
};

// ParamsSpec for ScaleFactorChanged
blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrameHost.ScaleFactorChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'scale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ContentsPreferredSizeChanged
blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrameHost.ContentsPreferredSizeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'pref_size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TextAutosizerPageInfoChanged
blink.mojom.LocalMainFrameHost_TextAutosizerPageInfoChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrameHost.TextAutosizerPageInfoChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'page_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.TextAutosizerPageInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FocusPage
blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrameHost.FocusPage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TakeFocus
blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrameHost.TakeFocus_Params',
      packedSize: 16,
      fields: [
        { name: 'reverse', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateTargetURL
blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrameHost.UpdateTargetURL_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestClose
blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrameHost.RequestClose_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowCreatedWindow
blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrameHost.ShowCreatedWindow_Params',
      packedSize: 40,
      fields: [
        { name: 'opener_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false },
        { name: 'disposition', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.WindowOpenDispositionSpec, nullable: false },
        { name: 'window_features', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.WindowFeaturesSpec, nullable: false },
        { name: 'opened_by_user_gesture', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetWindowRect
blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrameHost.SetWindowRect_Params',
      packedSize: 16,
      fields: [
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidFirstVisuallyNonEmptyPaint
blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrameHost.DidFirstVisuallyNonEmptyPaint_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidAccessInitialMainDocument
blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrameHost.DidAccessInitialMainDocument_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Maximize
blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrameHost.Maximize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Minimize
blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrameHost.Minimize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Restore
blink.mojom.LocalMainFrameHost_Restore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrameHost.Restore_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetResizable
blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrameHost.SetResizable_Params',
      packedSize: 16,
      fields: [
        { name: 'resizable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DraggableRegionsChanged
blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrameHost.DraggableRegionsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'regions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFirstContentfulPaint
blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalMainFrameHost.OnFirstContentfulPaint_Params',
      packedSize: 16,
      fields: [
        { name: 'duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.LocalMainFrameHostPtr = blink.mojom.LocalMainFrameHostRemote;
blink.mojom.LocalMainFrameHostRequest = blink.mojom.LocalMainFrameHostPendingReceiver;

