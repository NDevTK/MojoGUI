// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/frame.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var cc = cc || {};
var mojo_base = mojo_base || {};
var network = network || {};
var viz = viz || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};

blink.mojom.PluginActionTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.JavaScriptExecutionResultTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.TraverseCancelledReasonSpec = { $: mojo.internal.Enum() };
blink.mojom.ViewTransitionSameOriginOptInSpec = { $: mojo.internal.Enum() };
blink.mojom.FrameOwnerElementTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.NavigationApiEntryRestoreReasonSpec = { $: mojo.internal.Enum() };
blink.mojom.StorageTypeAccessedSpec = { $: mojo.internal.Enum() };
blink.mojom.WindowProxyAccessTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.SavableSubframeSpec = { $: {} };
blink.mojom.GetSavableResourceLinksReplySpec = { $: {} };
blink.mojom.FindInPageResultAXParamsSpec = { $: {} };
blink.mojom.DownloadURLParamsSpec = { $: {} };
blink.mojom.IframeAttributesSpec = { $: {} };
blink.mojom.LegacyTechEventCodeLocationSpec = { $: {} };
blink.mojom.LocalFrameHost = {};
blink.mojom.LocalFrameHost.$interfaceName = 'blink.mojom.LocalFrameHost';
blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidChangeThemeColor_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidChangeBackgroundColor_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_Detach_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_ForwardFencedFrameEventAndUserActivationToEmbedder_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_StartDragging_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_SetStorageAccessApiStatus_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ResponseParamsSpec = { $: {} };
blink.mojom.NonAssociatedLocalFrameHost = {};
blink.mojom.NonAssociatedLocalFrameHost.$interfaceName = 'blink.mojom.NonAssociatedLocalFrameHost';
blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec = { $: {} };
blink.mojom.LocalFrame = {};
blink.mojom.LocalFrame.$interfaceName = 'blink.mojom.LocalFrame';
blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_CheckCompleted_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_StopLoading_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_Collapse_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_Focus_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_CopyImageAt_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_SaveImageAt_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_BeforeUnload_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_BeforeUnload_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrame_PluginActionAt_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrame_GetCharacterIndexAtPoint_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_GetFirstRectForRange_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_GetStringForRange_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_GetStringForRange_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_UpdateOpener_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrame_MixedContentFound_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_ExtractSmartClipData_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_ExtractSmartClipData_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec = { $: {} };
blink.mojom.LocalFrame_GetScrollPosition_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrame_PerformSpellCheck_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrame = {};
blink.mojom.LocalMainFrame.$interfaceName = 'blink.mojom.LocalMainFrame';
blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrame_ClosePage_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrame_ClosePage_ResponseParamsSpec = { $: {} };
blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParamsSpec = { $: {} };
blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrame_Discard_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrame_Discard_ResponseParamsSpec = { $: {} };
blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost = {};
blink.mojom.LocalMainFrameHost.$interfaceName = 'blink.mojom.LocalMainFrameHost';
blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost_TextAutosizerPageInfoChanged_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ResponseParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost_Restore_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec = { $: {} };
blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec = { $: {} };

blink.mojom.kMaxTitleChars = 4096;

blink.mojom.kMaxCrashReportStorageSize = 65536;

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
mojo.internal.Struct(
    blink.mojom.SavableSubframeSpec, 'blink.mojom.SavableSubframe', [
      mojo.internal.StructField('original_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subframe_token', 8, 0, blink.mojom.FrameTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GetSavableResourceLinksReply
mojo.internal.Struct(
    blink.mojom.GetSavableResourceLinksReplySpec, 'blink.mojom.GetSavableResourceLinksReply', [
      mojo.internal.StructField('resources_list', 0, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('referrer', 8, 0, blink.mojom.ReferrerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subframes', 16, 0, mojo.internal.Array(blink.mojom.SavableSubframeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: FindInPageResultAXParams
mojo.internal.Struct(
    blink.mojom.FindInPageResultAXParamsSpec, 'blink.mojom.FindInPageResultAXParams', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('match_index', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('start_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('start_offset', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('end_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('end_offset', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DownloadURLParams
mojo.internal.Struct(
    blink.mojom.DownloadURLParamsSpec, 'blink.mojom.DownloadURLParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('referrer', 8, 0, blink.mojom.ReferrerSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('initiator_origin', 16, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('suggested_name', 24, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('cross_origin_redirects', 32, 0, network.mojom.RedirectModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('blob_url_token', 40, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobURLTokenRemote), null, true, 0, undefined),
      mojo.internal.StructField('data_url_blob', 48, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobRemote), null, true, 0, undefined),
      mojo.internal.StructField('is_context_menu_save', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_user_gesture', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: IframeAttributes
mojo.internal.Struct(
    blink.mojom.IframeAttributesSpec, 'blink.mojom.IframeAttributes', [
      mojo.internal.StructField('parsed_csp_attribute', 0, 0, network.mojom.ContentSecurityPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('src', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('credentialless', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('browsing_topics', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ad_auction_headers', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shared_storage_writable_opted_in', 32, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: LegacyTechEventCodeLocation
mojo.internal.Struct(
    blink.mojom.LegacyTechEventCodeLocationSpec, 'blink.mojom.LegacyTechEventCodeLocation', [
      mojo.internal.StructField('filename', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('line', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('column', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: LocalFrameHost
mojo.internal.Struct(
    blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec, 'blink.mojom.LocalFrameHost_EnterFullscreen_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.FullscreenOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParams', [
      mojo.internal.StructField('granted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec, 'blink.mojom.LocalFrameHost_ExitFullscreen_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_FullscreenStateChanged_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.FullscreenOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_fullscreen', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec, 'blink.mojom.LocalFrameHost_RegisterProtocolHandler_Params', [
      mojo.internal.StructField('scheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('user_gesture', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec, 'blink.mojom.LocalFrameHost_UnregisterProtocolHandler_Params', [
      mojo.internal.StructField('scheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('user_gesture', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec, 'blink.mojom.LocalFrameHost_DidDisplayInsecureContent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec, 'blink.mojom.LocalFrameHost_DidContainInsecureFormAction_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec, 'blink.mojom.LocalFrameHost_MainDocumentElementAvailable_Params', [
      mojo.internal.StructField('uses_temporary_zoom_level', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec, 'blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_Params', [
      mojo.internal.StructField('needs_tracking', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec, 'blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_Params', [
      mojo.internal.StructField('type', 0, 0, ui.mojom.VirtualKeyboardModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_VisibilityChanged_Params', [
      mojo.internal.StructField('visibility', 0, 0, blink.mojom.FrameVisibilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidChangeThemeColor_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeThemeColor_Params', [
      mojo.internal.StructField('theme_color', 0, 0, skia.mojom.SkColorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidChangeBackgroundColor_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeBackgroundColor_Params', [
      mojo.internal.StructField('background_color', 0, 0, skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('color_adjust', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec, 'blink.mojom.LocalFrameHost_DidFailLoadWithError_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_code', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec, 'blink.mojom.LocalFrameHost_DidFocusFrame_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec, 'blink.mojom.LocalFrameHost_DidCallFocus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec, 'blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_Params', [
      mojo.internal.StructField('policy_bitmap', 0, 0, blink.mojom.InsecureRequestPolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec, 'blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_Params', [
      mojo.internal.StructField('set', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_Params', [
      mojo.internal.StructField('disabler_type', 0, 0, blink.mojom.SuddenTerminationDisablerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('present', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_Params', [
      mojo.internal.StructField('has_gesture', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec, 'blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_Params', [
      mojo.internal.StructField('rect_to_scroll', 0, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('params', 8, 0, blink.mojom.ScrollIntoViewParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec, 'blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_Params', [
      mojo.internal.StructField('direction', 0, 0, blink.mojom.ScrollDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('granularity', 8, 0, ui.mojom.ScrollGranularitySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec, 'blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec, 'blink.mojom.LocalFrameHost_DidBlockNavigation_Params', [
      mojo.internal.StructField('blocked_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, blink.mojom.NavigationBlockedReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeLoadProgress_Params', [
      mojo.internal.StructField('load_progress', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec, 'blink.mojom.LocalFrameHost_DidFinishLoad_Params', [
      mojo.internal.StructField('validated_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec, 'blink.mojom.LocalFrameHost_DispatchLoad_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec, 'blink.mojom.LocalFrameHost_GoToEntryAtOffset_Params', [
      mojo.internal.StructField('actual_navigation_start', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('soft_navigation_heuristics_task_id', 8, 0, blink.mojom.TaskAttributionIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('offset', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_user_gesture', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec, 'blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('actual_navigation_start', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('soft_navigation_heuristics_task_id', 16, 0, blink.mojom.TaskAttributionIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('has_user_gesture', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_Params', [
      mojo.internal.StructField('present', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec, 'blink.mojom.LocalFrameHost_UpdateTitle_Params', [
      mojo.internal.StructField('title', 0, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('title_direction', 8, 0, mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec, 'blink.mojom.LocalFrameHost_UpdateApplicationTitle_Params', [
      mojo.internal.StructField('application_title', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec, 'blink.mojom.LocalFrameHost_UpdateUserActivationState_Params', [
      mojo.internal.StructField('update_type', 0, 0, blink.mojom.UserActivationUpdateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('notification_type', 8, 0, blink.mojom.UserActivationNotificationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec, 'blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec, 'blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_Params', [
      mojo.internal.StructField('params', 0, 0, blink.mojom.FindInPageResultAXParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec, 'blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec, 'blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec, 'blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_Params', [
      mojo.internal.StructField('timing', 0, 0, blink.mojom.ResourceTimingInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec, 'blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec, 'blink.mojom.LocalFrameHost_RunModalAlertDialog_Params', [
      mojo.internal.StructField('alert_message', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('disable_third_party_subframe_suppresion', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec, 'blink.mojom.LocalFrameHost_RunModalConfirmDialog_Params', [
      mojo.internal.StructField('alert_message', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('disable_third_party_subframe_suppresion', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec, 'blink.mojom.LocalFrameHost_RunModalPromptDialog_Params', [
      mojo.internal.StructField('alert_message', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('default_value', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('disable_third_party_subframe_suppresion', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec, 'blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_Params', [
      mojo.internal.StructField('is_reload', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec, 'blink.mojom.LocalFrameHost_UpdateFaviconURL_Params', [
      mojo.internal.StructField('favicon_urls', 0, 0, mojo.internal.Array(blink.mojom.FaviconURLSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec, 'blink.mojom.LocalFrameHost_DownloadURL_Params', [
      mojo.internal.StructField('params', 0, 0, blink.mojom.DownloadURLParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_FocusedElementChanged_Params', [
      mojo.internal.StructField('bounds_in_frame_widget', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('focus_type', 8, 0, blink.mojom.FocusTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_editable_element', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_richly_editable_element', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_TextSelectionChanged_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('range', 8, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('offset', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec, 'blink.mojom.LocalFrameHost_ShowPopupMenu_Params', [
      mojo.internal.StructField('popup_client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.PopupMenuClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('font_size', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('menu_items', 24, 0, mojo.internal.Array(blink.mojom.MenuItemSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('selected_item', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('right_aligned', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_multiple_selection', 36, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec, 'blink.mojom.LocalFrameHost_CreateNewPopupWidget_Params', [
      mojo.internal.StructField('popup_host', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('blink_widget_host', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('blink_widget', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec, 'blink.mojom.LocalFrameHost_ShowContextMenu_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('params', 8, 0, blink.mojom.UntrustworthyContextMenuParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec, 'blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('http_method', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_destination', 24, 0, network.mojom.RequestDestinationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('include_credentials', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_Params', [
      mojo.internal.StructField('child_frame_token', 0, 0, blink.mojom.FrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_owner_properties', 8, 0, blink.mojom.FrameOwnerPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeOpener_Params', [
      mojo.internal.StructField('opener_frame', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeFramePolicy_Params', [
      mojo.internal.StructField('child_frame_token', 0, 0, blink.mojom.FrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_policy', 8, 0, blink.mojom.FramePolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeIframeAttributes_Params', [
      mojo.internal.StructField('child_frame_token', 0, 0, blink.mojom.FrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attributes', 8, 0, blink.mojom.IframeAttributesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec, 'blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_Params', [
      mojo.internal.StructField('clip_rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('guid', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec, 'blink.mojom.LocalFrameHost_SetCloseListener_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.CloseListenerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_Detach_ParamsSpec, 'blink.mojom.LocalFrameHost_Detach_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec, 'blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_Params', [
      mojo.internal.StructField('factory', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.KeepAliveHandleFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec, 'blink.mojom.LocalFrameHost_DidAddMessageToConsole_Params', [
      mojo.internal.StructField('log_level', 0, 0, blink.mojom.ConsoleMessageLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('msg', 8, 0, mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_id', 16, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('untrusted_stack_trace', 24, 0, mojo_base.mojom.BigString16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('line_number', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_FrameSizeChanged_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec, 'blink.mojom.LocalFrameHost_DidInferColorScheme_Params', [
      mojo.internal.StructField('color_scheme', 0, 0, blink.mojom.PreferredColorSchemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeSrcDoc_Params', [
      mojo.internal.StructField('child_frame_token', 0, 0, blink.mojom.FrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('srcdoc_value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec, 'blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_Params', [
      mojo.internal.StructField('delegated_capability', 0, 0, blink.mojom.DelegatedCapabilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec, 'blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_Params', [
      mojo.internal.StructField('event_data', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('event_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('destinations', 16, 0, mojo.internal.Array(blink.mojom.ReportingDestinationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('cross_origin_exposed', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec, 'blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_Params', [
      mojo.internal.StructField('destination_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cross_origin_exposed', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ParamsSpec, 'blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ParamsSpec, 'blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_Params', [
      mojo.internal.StructField('exempted_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec, 'blink.mojom.LocalFrameHost_SendLegacyTechEvent_Params', [
      mojo.internal.StructField('type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('code_location', 8, 0, blink.mojom.LegacyTechEventCodeLocationSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec, 'blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_Params', [
      mojo.internal.StructField('event_type', 0, 0, blink.mojom.AutomaticBeaconTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('destinations', 16, 0, mojo.internal.Array(blink.mojom.ReportingDestinationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('once', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('cross_origin_exposed', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec, 'blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_Params', [
      mojo.internal.StructField('event_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec, 'blink.mojom.LocalFrameHost_CreateFencedFrame_Params', [
      mojo.internal.StructField('fenced_frame', 0, 0, pending_associated_receiver<blink.mojom.FencedFrameOwnerHost>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_frame_interfaces', 8, 0, blink.mojom.RemoteFrameInterfacesFromRendererSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_token', 16, 0, blink.mojom.RemoteFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_frame_token', 24, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_ForwardFencedFrameEventAndUserActivationToEmbedder_ParamsSpec, 'blink.mojom.LocalFrameHost_ForwardFencedFrameEventAndUserActivationToEmbedder_Params', [
      mojo.internal.StructField('event_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_Params', [
      mojo.internal.StructField('view_transition_opt_in', 0, 0, blink.mojom.ViewTransitionSameOriginOptInSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_StartDragging_ParamsSpec, 'blink.mojom.LocalFrameHost_StartDragging_Params', [
      mojo.internal.StructField('drag_data', 0, 0, blink.mojom.DragDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('operations_allowed', 8, 0, blink.mojom.AllowedDragOperationsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image', 16, 0, skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('cursor_offset_in_dip', 24, 0, gfx.mojom.Vector2dSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('drag_obj_rect_in_dip', 32, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_info', 40, 0, blink.mojom.DragEventSourceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec, 'blink.mojom.LocalFrameHost_IssueKeepAliveHandle_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.NavigationStateKeepAliveHandleRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec, 'blink.mojom.LocalFrameHost_NotifyStorageAccessed_Params', [
      mojo.internal.StructField('storageType', 0, 0, blink.mojom.StorageTypeAccessedSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('blocked', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec, 'blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_Params', [
      mojo.internal.StructField('target_frame_token', 0, 0, blink.mojom.FrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('access_type', 8, 0, blink.mojom.WindowProxyAccessTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec, 'blink.mojom.LocalFrameHost_NotifyDocumentInteractive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_SetStorageAccessApiStatus_ParamsSpec, 'blink.mojom.LocalFrameHost_SetStorageAccessApiStatus_Params', [
      mojo.internal.StructField('status', 0, 0, network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ParamsSpec, 'blink.mojom.LocalFrameHost_InitializeCrashReportStorage_Params', [
      mojo.internal.StructField('length', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ResponseParams', [
      mojo.internal.StructField('region', 0, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  enterFullscreen(options) {
    return this.$.enterFullscreen(options);
  }
  exitFullscreen() {
    return this.$.exitFullscreen();
  }
  fullscreenStateChanged(is_fullscreen, options) {
    return this.$.fullscreenStateChanged(is_fullscreen, options);
  }
  registerProtocolHandler(scheme, url, user_gesture) {
    return this.$.registerProtocolHandler(scheme, url, user_gesture);
  }
  unregisterProtocolHandler(scheme, url, user_gesture) {
    return this.$.unregisterProtocolHandler(scheme, url, user_gesture);
  }
  didDisplayInsecureContent() {
    return this.$.didDisplayInsecureContent();
  }
  didContainInsecureFormAction() {
    return this.$.didContainInsecureFormAction();
  }
  mainDocumentElementAvailable(uses_temporary_zoom_level) {
    return this.$.mainDocumentElementAvailable(uses_temporary_zoom_level);
  }
  setNeedsOcclusionTracking(needs_tracking) {
    return this.$.setNeedsOcclusionTracking(needs_tracking);
  }
  setVirtualKeyboardMode(type) {
    return this.$.setVirtualKeyboardMode(type);
  }
  visibilityChanged(visibility) {
    return this.$.visibilityChanged(visibility);
  }
  didChangeThemeColor(theme_color) {
    return this.$.didChangeThemeColor(theme_color);
  }
  didChangeBackgroundColor(background_color, color_adjust) {
    return this.$.didChangeBackgroundColor(background_color, color_adjust);
  }
  didFailLoadWithError(url, error_code) {
    return this.$.didFailLoadWithError(url, error_code);
  }
  didFocusFrame() {
    return this.$.didFocusFrame();
  }
  didCallFocus() {
    return this.$.didCallFocus();
  }
  enforceInsecureRequestPolicy(policy_bitmap) {
    return this.$.enforceInsecureRequestPolicy(policy_bitmap);
  }
  enforceInsecureNavigationsSet(set) {
    return this.$.enforceInsecureNavigationsSet(set);
  }
  suddenTerminationDisablerChanged(present, disabler_type) {
    return this.$.suddenTerminationDisablerChanged(present, disabler_type);
  }
  hadStickyUserActivationBeforeNavigationChanged(has_gesture) {
    return this.$.hadStickyUserActivationBeforeNavigationChanged(has_gesture);
  }
  scrollRectToVisibleInParentFrame(rect_to_scroll, params) {
    return this.$.scrollRectToVisibleInParentFrame(rect_to_scroll, params);
  }
  bubbleLogicalScrollInParentFrame(direction, granularity) {
    return this.$.bubbleLogicalScrollInParentFrame(direction, granularity);
  }
  startLoadingForAsyncNavigationApiCommit() {
    return this.$.startLoadingForAsyncNavigationApiCommit();
  }
  didBlockNavigation(blocked_url, reason) {
    return this.$.didBlockNavigation(blocked_url, reason);
  }
  didChangeLoadProgress(load_progress) {
    return this.$.didChangeLoadProgress(load_progress);
  }
  didFinishLoad(validated_url) {
    return this.$.didFinishLoad(validated_url);
  }
  dispatchLoad() {
    return this.$.dispatchLoad();
  }
  goToEntryAtOffset(offset, has_user_gesture, actual_navigation_start, soft_navigation_heuristics_task_id) {
    return this.$.goToEntryAtOffset(offset, has_user_gesture, actual_navigation_start, soft_navigation_heuristics_task_id);
  }
  navigateToNavigationApiKey(key, has_user_gesture, actual_navigation_start, soft_navigation_heuristics_task_id) {
    return this.$.navigateToNavigationApiKey(key, has_user_gesture, actual_navigation_start, soft_navigation_heuristics_task_id);
  }
  navigateEventHandlerPresenceChanged(present) {
    return this.$.navigateEventHandlerPresenceChanged(present);
  }
  updateTitle(title, title_direction) {
    return this.$.updateTitle(title, title_direction);
  }
  updateApplicationTitle(application_title) {
    return this.$.updateApplicationTitle(application_title);
  }
  updateUserActivationState(update_type, notification_type) {
    return this.$.updateUserActivationState(update_type, notification_type);
  }
  didConsumeHistoryUserActivation() {
    return this.$.didConsumeHistoryUserActivation();
  }
  handleAccessibilityFindInPageResult(params) {
    return this.$.handleAccessibilityFindInPageResult(params);
  }
  handleAccessibilityFindInPageTermination() {
    return this.$.handleAccessibilityFindInPageTermination();
  }
  documentOnLoadCompleted() {
    return this.$.documentOnLoadCompleted();
  }
  forwardResourceTimingToParent(timing) {
    return this.$.forwardResourceTimingToParent(timing);
  }
  didDispatchDOMContentLoadedEvent() {
    return this.$.didDispatchDOMContentLoadedEvent();
  }
  runModalAlertDialog(alert_message, disable_third_party_subframe_suppresion) {
    return this.$.runModalAlertDialog(alert_message, disable_third_party_subframe_suppresion);
  }
  runModalConfirmDialog(alert_message, disable_third_party_subframe_suppresion) {
    return this.$.runModalConfirmDialog(alert_message, disable_third_party_subframe_suppresion);
  }
  runModalPromptDialog(alert_message, default_value, disable_third_party_subframe_suppresion) {
    return this.$.runModalPromptDialog(alert_message, default_value, disable_third_party_subframe_suppresion);
  }
  runBeforeUnloadConfirm(is_reload) {
    return this.$.runBeforeUnloadConfirm(is_reload);
  }
  updateFaviconURL(favicon_urls) {
    return this.$.updateFaviconURL(favicon_urls);
  }
  downloadURL(params) {
    return this.$.downloadURL(params);
  }
  focusedElementChanged(is_editable_element, is_richly_editable_element, bounds_in_frame_widget, focus_type) {
    return this.$.focusedElementChanged(is_editable_element, is_richly_editable_element, bounds_in_frame_widget, focus_type);
  }
  textSelectionChanged(text, offset, range) {
    return this.$.textSelectionChanged(text, offset, range);
  }
  showPopupMenu(popup_client, bounds, font_size, selected_item, menu_items, right_aligned, allow_multiple_selection) {
    return this.$.showPopupMenu(popup_client, bounds, font_size, selected_item, menu_items, right_aligned, allow_multiple_selection);
  }
  createNewPopupWidget(popup_host, blink_widget_host, blink_widget) {
    return this.$.createNewPopupWidget(popup_host, blink_widget_host, blink_widget);
  }
  showContextMenu(client, params) {
    return this.$.showContextMenu(client, params);
  }
  didLoadResourceFromMemoryCache(url, http_method, mime_type, request_destination, include_credentials) {
    return this.$.didLoadResourceFromMemoryCache(url, http_method, mime_type, request_destination, include_credentials);
  }
  didChangeFrameOwnerProperties(child_frame_token, frame_owner_properties) {
    return this.$.didChangeFrameOwnerProperties(child_frame_token, frame_owner_properties);
  }
  didChangeOpener(opener_frame) {
    return this.$.didChangeOpener(opener_frame);
  }
  didChangeFramePolicy(child_frame_token, frame_policy) {
    return this.$.didChangeFramePolicy(child_frame_token, frame_policy);
  }
  didChangeIframeAttributes(child_frame_token, attributes) {
    return this.$.didChangeIframeAttributes(child_frame_token, attributes);
  }
  capturePaintPreviewOfSubframe(clip_rect, guid) {
    return this.$.capturePaintPreviewOfSubframe(clip_rect, guid);
  }
  setCloseListener(listener) {
    return this.$.setCloseListener(listener);
  }
  detach() {
    return this.$.detach();
  }
  getKeepAliveHandleFactory(factory) {
    return this.$.getKeepAliveHandleFactory(factory);
  }
  didAddMessageToConsole(log_level, msg, line_number, source_id, untrusted_stack_trace) {
    return this.$.didAddMessageToConsole(log_level, msg, line_number, source_id, untrusted_stack_trace);
  }
  frameSizeChanged(size) {
    return this.$.frameSizeChanged(size);
  }
  didInferColorScheme(color_scheme) {
    return this.$.didInferColorScheme(color_scheme);
  }
  didChangeSrcDoc(child_frame_token, srcdoc_value) {
    return this.$.didChangeSrcDoc(child_frame_token, srcdoc_value);
  }
  receivedDelegatedCapability(delegated_capability) {
    return this.$.receivedDelegatedCapability(delegated_capability);
  }
  sendFencedFrameReportingBeacon(event_data, event_type, destinations, cross_origin_exposed) {
    return this.$.sendFencedFrameReportingBeacon(event_data, event_type, destinations, cross_origin_exposed);
  }
  sendFencedFrameReportingBeaconToCustomURL(destination_url, cross_origin_exposed) {
    return this.$.sendFencedFrameReportingBeaconToCustomURL(destination_url, cross_origin_exposed);
  }
  disableUntrustedNetworkInFencedFrame() {
    return this.$.disableUntrustedNetworkInFencedFrame();
  }
  exemptUrlFromNetworkRevocationForTesting(exempted_url) {
    return this.$.exemptUrlFromNetworkRevocationForTesting(exempted_url);
  }
  sendLegacyTechEvent(type, code_location) {
    return this.$.sendLegacyTechEvent(type, code_location);
  }
  setFencedFrameAutomaticBeaconReportEventData(event_type, event_data, destinations, once, cross_origin_exposed) {
    return this.$.setFencedFrameAutomaticBeaconReportEventData(event_type, event_data, destinations, once, cross_origin_exposed);
  }
  sendPrivateAggregationRequestsForFencedFrameEvent(event_type) {
    return this.$.sendPrivateAggregationRequestsForFencedFrameEvent(event_type);
  }
  createFencedFrame(fenced_frame, remote_frame_interfaces, frame_token, devtools_frame_token) {
    return this.$.createFencedFrame(fenced_frame, remote_frame_interfaces, frame_token, devtools_frame_token);
  }
  forwardFencedFrameEventAndUserActivationToEmbedder(event_type) {
    return this.$.forwardFencedFrameEventAndUserActivationToEmbedder(event_type);
  }
  onViewTransitionOptInChanged(view_transition_opt_in) {
    return this.$.onViewTransitionOptInChanged(view_transition_opt_in);
  }
  startDragging(drag_data, operations_allowed, image, cursor_offset_in_dip, drag_obj_rect_in_dip, event_info) {
    return this.$.startDragging(drag_data, operations_allowed, image, cursor_offset_in_dip, drag_obj_rect_in_dip, event_info);
  }
  issueKeepAliveHandle(receiver) {
    return this.$.issueKeepAliveHandle(receiver);
  }
  notifyStorageAccessed(storageType, blocked) {
    return this.$.notifyStorageAccessed(storageType, blocked);
  }
  recordWindowProxyUsageMetrics(target_frame_token, access_type) {
    return this.$.recordWindowProxyUsageMetrics(target_frame_token, access_type);
  }
  notifyDocumentInteractive() {
    return this.$.notifyDocumentInteractive();
  }
  setStorageAccessApiStatus(status) {
    return this.$.setStorageAccessApiStatus(status);
  }
  initializeCrashReportStorage(length) {
    return this.$.initializeCrashReportStorage(length);
  }
};

blink.mojom.LocalFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LocalFrameHost', [
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

  enterFullscreen(options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec,
      blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParamsSpec,
      [options],
      false);
  }

  exitFullscreen() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec,
      null,
      [],
      false);
  }

  fullscreenStateChanged(is_fullscreen, options) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec,
      null,
      [is_fullscreen, options],
      false);
  }

  registerProtocolHandler(scheme, url, user_gesture) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec,
      null,
      [scheme, url, user_gesture],
      false);
  }

  unregisterProtocolHandler(scheme, url, user_gesture) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec,
      null,
      [scheme, url, user_gesture],
      false);
  }

  didDisplayInsecureContent() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec,
      null,
      [],
      false);
  }

  didContainInsecureFormAction() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec,
      null,
      [],
      false);
  }

  mainDocumentElementAvailable(uses_temporary_zoom_level) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec,
      null,
      [uses_temporary_zoom_level],
      false);
  }

  setNeedsOcclusionTracking(needs_tracking) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec,
      null,
      [needs_tracking],
      false);
  }

  setVirtualKeyboardMode(type) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec,
      null,
      [type],
      false);
  }

  visibilityChanged(visibility) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec,
      null,
      [visibility],
      false);
  }

  didChangeThemeColor(theme_color) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      blink.mojom.LocalFrameHost_DidChangeThemeColor_ParamsSpec,
      null,
      [theme_color],
      false);
  }

  didChangeBackgroundColor(background_color, color_adjust) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      blink.mojom.LocalFrameHost_DidChangeBackgroundColor_ParamsSpec,
      null,
      [background_color, color_adjust],
      false);
  }

  didFailLoadWithError(url, error_code) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec,
      null,
      [url, error_code],
      false);
  }

  didFocusFrame() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec,
      null,
      [],
      false);
  }

  didCallFocus() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec,
      null,
      [],
      false);
  }

  enforceInsecureRequestPolicy(policy_bitmap) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec,
      null,
      [policy_bitmap],
      false);
  }

  enforceInsecureNavigationsSet(set) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec,
      null,
      [set],
      false);
  }

  suddenTerminationDisablerChanged(present, disabler_type) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec,
      null,
      [present, disabler_type],
      false);
  }

  hadStickyUserActivationBeforeNavigationChanged(has_gesture) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec,
      null,
      [has_gesture],
      false);
  }

  scrollRectToVisibleInParentFrame(rect_to_scroll, params) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec,
      null,
      [rect_to_scroll, params],
      false);
  }

  bubbleLogicalScrollInParentFrame(direction, granularity) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec,
      null,
      [direction, granularity],
      false);
  }

  startLoadingForAsyncNavigationApiCommit() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec,
      null,
      [],
      false);
  }

  didBlockNavigation(blocked_url, reason) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec,
      null,
      [blocked_url, reason],
      false);
  }

  didChangeLoadProgress(load_progress) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec,
      null,
      [load_progress],
      false);
  }

  didFinishLoad(validated_url) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec,
      null,
      [validated_url],
      false);
  }

  dispatchLoad() {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec,
      null,
      [],
      false);
  }

  goToEntryAtOffset(offset, has_user_gesture, actual_navigation_start, soft_navigation_heuristics_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec,
      null,
      [offset, has_user_gesture, actual_navigation_start, soft_navigation_heuristics_task_id],
      false);
  }

  navigateToNavigationApiKey(key, has_user_gesture, actual_navigation_start, soft_navigation_heuristics_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec,
      null,
      [key, has_user_gesture, actual_navigation_start, soft_navigation_heuristics_task_id],
      false);
  }

  navigateEventHandlerPresenceChanged(present) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec,
      null,
      [present],
      false);
  }

  updateTitle(title, title_direction) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec,
      null,
      [title, title_direction],
      false);
  }

  updateApplicationTitle(application_title) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec,
      null,
      [application_title],
      false);
  }

  updateUserActivationState(update_type, notification_type) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec,
      null,
      [update_type, notification_type],
      false);
  }

  didConsumeHistoryUserActivation() {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec,
      null,
      [],
      false);
  }

  handleAccessibilityFindInPageResult(params) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec,
      null,
      [params],
      false);
  }

  handleAccessibilityFindInPageTermination() {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec,
      null,
      [],
      false);
  }

  documentOnLoadCompleted() {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec,
      null,
      [],
      false);
  }

  forwardResourceTimingToParent(timing) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec,
      null,
      [timing],
      false);
  }

  didDispatchDOMContentLoadedEvent() {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec,
      null,
      [],
      false);
  }

  runModalAlertDialog(alert_message, disable_third_party_subframe_suppresion) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec,
      blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParamsSpec,
      [alert_message, disable_third_party_subframe_suppresion],
      false);
  }

  runModalConfirmDialog(alert_message, disable_third_party_subframe_suppresion) {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec,
      blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParamsSpec,
      [alert_message, disable_third_party_subframe_suppresion],
      false);
  }

  runModalPromptDialog(alert_message, default_value, disable_third_party_subframe_suppresion) {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec,
      blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParamsSpec,
      [alert_message, default_value, disable_third_party_subframe_suppresion],
      false);
  }

  runBeforeUnloadConfirm(is_reload) {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec,
      blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParamsSpec,
      [is_reload],
      false);
  }

  updateFaviconURL(favicon_urls) {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec,
      null,
      [favicon_urls],
      false);
  }

  downloadURL(params) {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec,
      null,
      [params],
      false);
  }

  focusedElementChanged(is_editable_element, is_richly_editable_element, bounds_in_frame_widget, focus_type) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec,
      null,
      [is_editable_element, is_richly_editable_element, bounds_in_frame_widget, focus_type],
      false);
  }

  textSelectionChanged(text, offset, range) {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec,
      null,
      [text, offset, range],
      false);
  }

  showPopupMenu(popup_client, bounds, font_size, selected_item, menu_items, right_aligned, allow_multiple_selection) {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec,
      null,
      [popup_client, bounds, font_size, selected_item, menu_items, right_aligned, allow_multiple_selection],
      false);
  }

  createNewPopupWidget(popup_host, blink_widget_host, blink_widget) {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec,
      null,
      [popup_host, blink_widget_host, blink_widget],
      false);
  }

  showContextMenu(client, params) {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec,
      null,
      [client, params],
      false);
  }

  didLoadResourceFromMemoryCache(url, http_method, mime_type, request_destination, include_credentials) {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec,
      null,
      [url, http_method, mime_type, request_destination, include_credentials],
      false);
  }

  didChangeFrameOwnerProperties(child_frame_token, frame_owner_properties) {
    return this.proxy.sendMessage(
      this.ordinals[51],  // ordinal
      blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec,
      null,
      [child_frame_token, frame_owner_properties],
      false);
  }

  didChangeOpener(opener_frame) {
    return this.proxy.sendMessage(
      this.ordinals[52],  // ordinal
      blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec,
      null,
      [opener_frame],
      false);
  }

  didChangeFramePolicy(child_frame_token, frame_policy) {
    return this.proxy.sendMessage(
      this.ordinals[53],  // ordinal
      blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec,
      null,
      [child_frame_token, frame_policy],
      false);
  }

  didChangeIframeAttributes(child_frame_token, attributes) {
    return this.proxy.sendMessage(
      this.ordinals[54],  // ordinal
      blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec,
      null,
      [child_frame_token, attributes],
      false);
  }

  capturePaintPreviewOfSubframe(clip_rect, guid) {
    return this.proxy.sendMessage(
      this.ordinals[55],  // ordinal
      blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec,
      null,
      [clip_rect, guid],
      false);
  }

  setCloseListener(listener) {
    return this.proxy.sendMessage(
      this.ordinals[56],  // ordinal
      blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec,
      null,
      [listener],
      false);
  }

  detach() {
    return this.proxy.sendMessage(
      this.ordinals[57],  // ordinal
      blink.mojom.LocalFrameHost_Detach_ParamsSpec,
      null,
      [],
      false);
  }

  getKeepAliveHandleFactory(factory) {
    return this.proxy.sendMessage(
      this.ordinals[58],  // ordinal
      blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec,
      null,
      [factory],
      false);
  }

  didAddMessageToConsole(log_level, msg, line_number, source_id, untrusted_stack_trace) {
    return this.proxy.sendMessage(
      this.ordinals[59],  // ordinal
      blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec,
      null,
      [log_level, msg, line_number, source_id, untrusted_stack_trace],
      false);
  }

  frameSizeChanged(size) {
    return this.proxy.sendMessage(
      this.ordinals[60],  // ordinal
      blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec,
      null,
      [size],
      false);
  }

  didInferColorScheme(color_scheme) {
    return this.proxy.sendMessage(
      this.ordinals[61],  // ordinal
      blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec,
      null,
      [color_scheme],
      false);
  }

  didChangeSrcDoc(child_frame_token, srcdoc_value) {
    return this.proxy.sendMessage(
      this.ordinals[62],  // ordinal
      blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec,
      null,
      [child_frame_token, srcdoc_value],
      false);
  }

  receivedDelegatedCapability(delegated_capability) {
    return this.proxy.sendMessage(
      this.ordinals[63],  // ordinal
      blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec,
      null,
      [delegated_capability],
      false);
  }

  sendFencedFrameReportingBeacon(event_data, event_type, destinations, cross_origin_exposed) {
    return this.proxy.sendMessage(
      this.ordinals[64],  // ordinal
      blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec,
      null,
      [event_data, event_type, destinations, cross_origin_exposed],
      false);
  }

  sendFencedFrameReportingBeaconToCustomURL(destination_url, cross_origin_exposed) {
    return this.proxy.sendMessage(
      this.ordinals[65],  // ordinal
      blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec,
      null,
      [destination_url, cross_origin_exposed],
      false);
  }

  disableUntrustedNetworkInFencedFrame() {
    return this.proxy.sendMessage(
      this.ordinals[66],  // ordinal
      blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ParamsSpec,
      blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ResponseParamsSpec,
      [],
      false);
  }

  exemptUrlFromNetworkRevocationForTesting(exempted_url) {
    return this.proxy.sendMessage(
      this.ordinals[67],  // ordinal
      blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ParamsSpec,
      blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ResponseParamsSpec,
      [exempted_url],
      false);
  }

  sendLegacyTechEvent(type, code_location) {
    return this.proxy.sendMessage(
      this.ordinals[68],  // ordinal
      blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec,
      null,
      [type, code_location],
      false);
  }

  setFencedFrameAutomaticBeaconReportEventData(event_type, event_data, destinations, once, cross_origin_exposed) {
    return this.proxy.sendMessage(
      this.ordinals[69],  // ordinal
      blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec,
      null,
      [event_type, event_data, destinations, once, cross_origin_exposed],
      false);
  }

  sendPrivateAggregationRequestsForFencedFrameEvent(event_type) {
    return this.proxy.sendMessage(
      this.ordinals[70],  // ordinal
      blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec,
      null,
      [event_type],
      false);
  }

  createFencedFrame(fenced_frame, remote_frame_interfaces, frame_token, devtools_frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[71],  // ordinal
      blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec,
      null,
      [fenced_frame, remote_frame_interfaces, frame_token, devtools_frame_token],
      false);
  }

  forwardFencedFrameEventAndUserActivationToEmbedder(event_type) {
    return this.proxy.sendMessage(
      this.ordinals[72],  // ordinal
      blink.mojom.LocalFrameHost_ForwardFencedFrameEventAndUserActivationToEmbedder_ParamsSpec,
      null,
      [event_type],
      false);
  }

  onViewTransitionOptInChanged(view_transition_opt_in) {
    return this.proxy.sendMessage(
      this.ordinals[73],  // ordinal
      blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec,
      null,
      [view_transition_opt_in],
      false);
  }

  startDragging(drag_data, operations_allowed, image, cursor_offset_in_dip, drag_obj_rect_in_dip, event_info) {
    return this.proxy.sendMessage(
      this.ordinals[74],  // ordinal
      blink.mojom.LocalFrameHost_StartDragging_ParamsSpec,
      null,
      [drag_data, operations_allowed, image, cursor_offset_in_dip, drag_obj_rect_in_dip, event_info],
      false);
  }

  issueKeepAliveHandle(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[75],  // ordinal
      blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec,
      null,
      [receiver],
      false);
  }

  notifyStorageAccessed(storageType, blocked) {
    return this.proxy.sendMessage(
      this.ordinals[76],  // ordinal
      blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec,
      null,
      [storageType, blocked],
      false);
  }

  recordWindowProxyUsageMetrics(target_frame_token, access_type) {
    return this.proxy.sendMessage(
      this.ordinals[77],  // ordinal
      blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec,
      null,
      [target_frame_token, access_type],
      false);
  }

  notifyDocumentInteractive() {
    return this.proxy.sendMessage(
      this.ordinals[78],  // ordinal
      blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec,
      null,
      [],
      false);
  }

  setStorageAccessApiStatus(status) {
    return this.proxy.sendMessage(
      this.ordinals[79],  // ordinal
      blink.mojom.LocalFrameHost_SetStorageAccessApiStatus_ParamsSpec,
      null,
      [status],
      false);
  }

  initializeCrashReportStorage(length) {
    return this.proxy.sendMessage(
      this.ordinals[80],  // ordinal
      blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ParamsSpec,
      blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ResponseParamsSpec,
      [length],
      false);
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

blink.mojom.LocalFrameHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LocalFrameHost', [
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
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidChangeThemeColor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidChangeBackgroundColor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec);
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec);
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec);
             this.mapOrdinal(header.ordinal, 43);
             dispatchId = 43;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec);
             this.mapOrdinal(header.ordinal, 44);
             dispatchId = 44;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 45);
             dispatchId = 45;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 46);
             dispatchId = 46;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 47);
             dispatchId = 47;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec);
             this.mapOrdinal(header.ordinal, 48);
             dispatchId = 48;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 49);
             dispatchId = 49;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec);
             this.mapOrdinal(header.ordinal, 50);
             dispatchId = 50;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec);
             this.mapOrdinal(header.ordinal, 51);
             dispatchId = 51;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec);
             this.mapOrdinal(header.ordinal, 52);
             dispatchId = 52;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 53);
             dispatchId = 53;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec);
             this.mapOrdinal(header.ordinal, 54);
             dispatchId = 54;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 55);
             dispatchId = 55;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec);
             this.mapOrdinal(header.ordinal, 56);
             dispatchId = 56;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_Detach_ParamsSpec);
             this.mapOrdinal(header.ordinal, 57);
             dispatchId = 57;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 58);
             dispatchId = 58;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec);
             this.mapOrdinal(header.ordinal, 59);
             dispatchId = 59;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 60);
             dispatchId = 60;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec);
             this.mapOrdinal(header.ordinal, 61);
             dispatchId = 61;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec);
             this.mapOrdinal(header.ordinal, 62);
             dispatchId = 62;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec);
             this.mapOrdinal(header.ordinal, 63);
             dispatchId = 63;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec);
             this.mapOrdinal(header.ordinal, 64);
             dispatchId = 64;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec);
             this.mapOrdinal(header.ordinal, 65);
             dispatchId = 65;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 66);
             dispatchId = 66;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 67);
             dispatchId = 67;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 68);
             dispatchId = 68;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 69);
             dispatchId = 69;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 70);
             dispatchId = 70;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 71);
             dispatchId = 71;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_ForwardFencedFrameEventAndUserActivationToEmbedder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 72);
             dispatchId = 72;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 73);
             dispatchId = 73;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_StartDragging_ParamsSpec);
             this.mapOrdinal(header.ordinal, 74);
             dispatchId = 74;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 75);
             dispatchId = 75;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 76);
             dispatchId = 76;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec);
             this.mapOrdinal(header.ordinal, 77);
             dispatchId = 77;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 78);
             dispatchId = 78;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_SetStorageAccessApiStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 79);
             dispatchId = 79;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 80);
             dispatchId = 80;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec.$.structSpec);
          const result = this.impl.enterFullscreen(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec.$.structSpec);
          const result = this.impl.exitFullscreen();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.fullscreenStateChanged(params.is_fullscreen, params.options);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec.$.structSpec);
          const result = this.impl.registerProtocolHandler(params.scheme, params.url, params.user_gesture);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec.$.structSpec);
          const result = this.impl.unregisterProtocolHandler(params.scheme, params.url, params.user_gesture);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec.$.structSpec);
          const result = this.impl.didDisplayInsecureContent();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec.$.structSpec);
          const result = this.impl.didContainInsecureFormAction();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec.$.structSpec);
          const result = this.impl.mainDocumentElementAvailable(params.uses_temporary_zoom_level);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec.$.structSpec);
          const result = this.impl.setNeedsOcclusionTracking(params.needs_tracking);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec.$.structSpec);
          const result = this.impl.setVirtualKeyboardMode(params.type);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec.$.structSpec);
          const result = this.impl.visibilityChanged(params.visibility);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidChangeThemeColor_ParamsSpec.$.structSpec);
          const result = this.impl.didChangeThemeColor(params.theme_color);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidChangeBackgroundColor_ParamsSpec.$.structSpec);
          const result = this.impl.didChangeBackgroundColor(params.background_color, params.color_adjust);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec.$.structSpec);
          const result = this.impl.didFailLoadWithError(params.url, params.error_code);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec.$.structSpec);
          const result = this.impl.didFocusFrame();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec.$.structSpec);
          const result = this.impl.didCallFocus();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec.$.structSpec);
          const result = this.impl.enforceInsecureRequestPolicy(params.policy_bitmap);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec.$.structSpec);
          const result = this.impl.enforceInsecureNavigationsSet(params.set);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec.$.structSpec);
          const result = this.impl.suddenTerminationDisablerChanged(params.present, params.disabler_type);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec.$.structSpec);
          const result = this.impl.hadStickyUserActivationBeforeNavigationChanged(params.has_gesture);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec.$.structSpec);
          const result = this.impl.scrollRectToVisibleInParentFrame(params.rect_to_scroll, params.params);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec.$.structSpec);
          const result = this.impl.bubbleLogicalScrollInParentFrame(params.direction, params.granularity);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec.$.structSpec);
          const result = this.impl.startLoadingForAsyncNavigationApiCommit();
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec.$.structSpec);
          const result = this.impl.didBlockNavigation(params.blocked_url, params.reason);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec.$.structSpec);
          const result = this.impl.didChangeLoadProgress(params.load_progress);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec.$.structSpec);
          const result = this.impl.didFinishLoad(params.validated_url);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec.$.structSpec);
          const result = this.impl.dispatchLoad();
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec.$.structSpec);
          const result = this.impl.goToEntryAtOffset(params.offset, params.has_user_gesture, params.actual_navigation_start, params.soft_navigation_heuristics_task_id);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec.$.structSpec);
          const result = this.impl.navigateToNavigationApiKey(params.key, params.has_user_gesture, params.actual_navigation_start, params.soft_navigation_heuristics_task_id);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec.$.structSpec);
          const result = this.impl.navigateEventHandlerPresenceChanged(params.present);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec.$.structSpec);
          const result = this.impl.updateTitle(params.title, params.title_direction);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec.$.structSpec);
          const result = this.impl.updateApplicationTitle(params.application_title);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec.$.structSpec);
          const result = this.impl.updateUserActivationState(params.update_type, params.notification_type);
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec.$.structSpec);
          const result = this.impl.didConsumeHistoryUserActivation();
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec.$.structSpec);
          const result = this.impl.handleAccessibilityFindInPageResult(params.params);
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec.$.structSpec);
          const result = this.impl.handleAccessibilityFindInPageTermination();
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec.$.structSpec);
          const result = this.impl.documentOnLoadCompleted();
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec.$.structSpec);
          const result = this.impl.forwardResourceTimingToParent(params.timing);
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec.$.structSpec);
          const result = this.impl.didDispatchDOMContentLoadedEvent();
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec.$.structSpec);
          const result = this.impl.runModalAlertDialog(params.alert_message, params.disable_third_party_subframe_suppresion);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec.$.structSpec);
          const result = this.impl.runModalConfirmDialog(params.alert_message, params.disable_third_party_subframe_suppresion);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec.$.structSpec);
          const result = this.impl.runModalPromptDialog(params.alert_message, params.default_value, params.disable_third_party_subframe_suppresion);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec.$.structSpec);
          const result = this.impl.runBeforeUnloadConfirm(params.is_reload);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec.$.structSpec);
          const result = this.impl.updateFaviconURL(params.favicon_urls);
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec.$.structSpec);
          const result = this.impl.downloadURL(params.params);
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec.$.structSpec);
          const result = this.impl.focusedElementChanged(params.is_editable_element, params.is_richly_editable_element, params.bounds_in_frame_widget, params.focus_type);
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec.$.structSpec);
          const result = this.impl.textSelectionChanged(params.text, params.offset, params.range);
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec.$.structSpec);
          const result = this.impl.showPopupMenu(params.popup_client, params.bounds, params.font_size, params.selected_item, params.menu_items, params.right_aligned, params.allow_multiple_selection);
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec.$.structSpec);
          const result = this.impl.createNewPopupWidget(params.popup_host, params.blink_widget_host, params.blink_widget);
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec.$.structSpec);
          const result = this.impl.showContextMenu(params.client, params.params);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec.$.structSpec);
          const result = this.impl.didLoadResourceFromMemoryCache(params.url, params.http_method, params.mime_type, params.request_destination, params.include_credentials);
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec.$.structSpec);
          const result = this.impl.didChangeFrameOwnerProperties(params.child_frame_token, params.frame_owner_properties);
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec.$.structSpec);
          const result = this.impl.didChangeOpener(params.opener_frame);
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec.$.structSpec);
          const result = this.impl.didChangeFramePolicy(params.child_frame_token, params.frame_policy);
          break;
        }
        case 54: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec.$.structSpec);
          const result = this.impl.didChangeIframeAttributes(params.child_frame_token, params.attributes);
          break;
        }
        case 55: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec.$.structSpec);
          const result = this.impl.capturePaintPreviewOfSubframe(params.clip_rect, params.guid);
          break;
        }
        case 56: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec.$.structSpec);
          const result = this.impl.setCloseListener(params.listener);
          break;
        }
        case 57: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_Detach_ParamsSpec.$.structSpec);
          const result = this.impl.detach();
          break;
        }
        case 58: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec.$.structSpec);
          const result = this.impl.getKeepAliveHandleFactory(params.factory);
          break;
        }
        case 59: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec.$.structSpec);
          const result = this.impl.didAddMessageToConsole(params.log_level, params.msg, params.line_number, params.source_id, params.untrusted_stack_trace);
          break;
        }
        case 60: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec.$.structSpec);
          const result = this.impl.frameSizeChanged(params.size);
          break;
        }
        case 61: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec.$.structSpec);
          const result = this.impl.didInferColorScheme(params.color_scheme);
          break;
        }
        case 62: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec.$.structSpec);
          const result = this.impl.didChangeSrcDoc(params.child_frame_token, params.srcdoc_value);
          break;
        }
        case 63: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec.$.structSpec);
          const result = this.impl.receivedDelegatedCapability(params.delegated_capability);
          break;
        }
        case 64: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec.$.structSpec);
          const result = this.impl.sendFencedFrameReportingBeacon(params.event_data, params.event_type, params.destinations, params.cross_origin_exposed);
          break;
        }
        case 65: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec.$.structSpec);
          const result = this.impl.sendFencedFrameReportingBeaconToCustomURL(params.destination_url, params.cross_origin_exposed);
          break;
        }
        case 66: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ParamsSpec.$.structSpec);
          const result = this.impl.disableUntrustedNetworkInFencedFrame();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 67: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ParamsSpec.$.structSpec);
          const result = this.impl.exemptUrlFromNetworkRevocationForTesting(params.exempted_url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 68: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec.$.structSpec);
          const result = this.impl.sendLegacyTechEvent(params.type, params.code_location);
          break;
        }
        case 69: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec.$.structSpec);
          const result = this.impl.setFencedFrameAutomaticBeaconReportEventData(params.event_type, params.event_data, params.destinations, params.once, params.cross_origin_exposed);
          break;
        }
        case 70: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec.$.structSpec);
          const result = this.impl.sendPrivateAggregationRequestsForFencedFrameEvent(params.event_type);
          break;
        }
        case 71: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec.$.structSpec);
          const result = this.impl.createFencedFrame(params.fenced_frame, params.remote_frame_interfaces, params.frame_token, params.devtools_frame_token);
          break;
        }
        case 72: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_ForwardFencedFrameEventAndUserActivationToEmbedder_ParamsSpec.$.structSpec);
          const result = this.impl.forwardFencedFrameEventAndUserActivationToEmbedder(params.event_type);
          break;
        }
        case 73: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onViewTransitionOptInChanged(params.view_transition_opt_in);
          break;
        }
        case 74: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_StartDragging_ParamsSpec.$.structSpec);
          const result = this.impl.startDragging(params.drag_data, params.operations_allowed, params.image, params.cursor_offset_in_dip, params.drag_obj_rect_in_dip, params.event_info);
          break;
        }
        case 75: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec.$.structSpec);
          const result = this.impl.issueKeepAliveHandle(params.receiver);
          break;
        }
        case 76: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec.$.structSpec);
          const result = this.impl.notifyStorageAccessed(params.storageType, params.blocked);
          break;
        }
        case 77: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec.$.structSpec);
          const result = this.impl.recordWindowProxyUsageMetrics(params.target_frame_token, params.access_type);
          break;
        }
        case 78: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec.$.structSpec);
          const result = this.impl.notifyDocumentInteractive();
          break;
        }
        case 79: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_SetStorageAccessApiStatus_ParamsSpec.$.structSpec);
          const result = this.impl.setStorageAccessApiStatus(params.status);
          break;
        }
        case 80: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ParamsSpec.$.structSpec);
          const result = this.impl.initializeCrashReportStorage(params.length);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.LocalFrameHostReceiver = blink.mojom.LocalFrameHostReceiver;

blink.mojom.LocalFrameHostPtr = blink.mojom.LocalFrameHostRemote;
blink.mojom.LocalFrameHostRequest = blink.mojom.LocalFrameHostPendingReceiver;


// Interface: NonAssociatedLocalFrameHost
mojo.internal.Struct(
    blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec, 'blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_Params', [
      mojo.internal.StructField('urls', 0, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  maybeStartOutermostMainFrameNavigation(urls) {
    return this.$.maybeStartOutermostMainFrameNavigation(urls);
  }
};

blink.mojom.NonAssociatedLocalFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NonAssociatedLocalFrameHost', [
      { explicit: null },
    ]);
  }

  maybeStartOutermostMainFrameNavigation(urls) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec,
      null,
      [urls],
      false);
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

blink.mojom.NonAssociatedLocalFrameHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NonAssociatedLocalFrameHost', [
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
             decoder.decodeStructInline(blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec.$.structSpec);
          const result = this.impl.maybeStartOutermostMainFrameNavigation(params.urls);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.NonAssociatedLocalFrameHostReceiver = blink.mojom.NonAssociatedLocalFrameHostReceiver;

blink.mojom.NonAssociatedLocalFrameHostPtr = blink.mojom.NonAssociatedLocalFrameHostRemote;
blink.mojom.NonAssociatedLocalFrameHostRequest = blink.mojom.NonAssociatedLocalFrameHostPendingReceiver;


// Interface: LocalFrame
mojo.internal.Struct(
    blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec, 'blink.mojom.LocalFrame_GetTextSurroundingSelection_Params', [
      mojo.internal.StructField('max_length', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParams', [
      mojo.internal.StructField('content', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('start_offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end_offset', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec, 'blink.mojom.LocalFrame_SendInterventionReport_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('child_frame_token', 16, 0, blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec, 'blink.mojom.LocalFrame_SetFrameOwnerProperties_Params', [
      mojo.internal.StructField('properties', 0, 0, blink.mojom.FrameOwnerPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec, 'blink.mojom.LocalFrame_NotifyUserActivation_Params', [
      mojo.internal.StructField('notification_type', 0, 0, blink.mojom.UserActivationNotificationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec, 'blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_Params', [
      mojo.internal.StructField('keyboard_rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec, 'blink.mojom.LocalFrame_ShowInterestInElement_Params', [
      mojo.internal.StructField('nodeID', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec, 'blink.mojom.LocalFrame_AddMessageToConsole_Params', [
      mojo.internal.StructField('level', 0, 0, blink.mojom.ConsoleMessageLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('discard_duplicates', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec, 'blink.mojom.LocalFrame_SwapInImmediately_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_CheckCompleted_ParamsSpec, 'blink.mojom.LocalFrame_CheckCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_StopLoading_ParamsSpec, 'blink.mojom.LocalFrame_StopLoading_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_Collapse_ParamsSpec, 'blink.mojom.LocalFrame_Collapse_Params', [
      mojo.internal.StructField('collapsed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec, 'blink.mojom.LocalFrame_EnableViewSourceMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_Focus_ParamsSpec, 'blink.mojom.LocalFrame_Focus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec, 'blink.mojom.LocalFrame_ClearFocusedElement_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_CopyImageAt_ParamsSpec, 'blink.mojom.LocalFrame_CopyImageAt_Params', [
      mojo.internal.StructField('window_point', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_SaveImageAt_ParamsSpec, 'blink.mojom.LocalFrame_SaveImageAt_Params', [
      mojo.internal.StructField('window_point', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec, 'blink.mojom.LocalFrame_ReportBlinkFeatureUsage_Params', [
      mojo.internal.StructField('features', 0, 0, mojo.internal.Array(blink.mojom.WebFeatureSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec, 'blink.mojom.LocalFrame_RenderFallbackContent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_BeforeUnload_ParamsSpec, 'blink.mojom.LocalFrame_BeforeUnload_Params', [
      mojo.internal.StructField('is_reload', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_BeforeUnload_ResponseParamsSpec, 'blink.mojom.LocalFrame_BeforeUnload_ResponseParams', [
      mojo.internal.StructField('before_unload_start_time', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('before_unload_end_time', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('proceed', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec, 'blink.mojom.LocalFrame_MediaPlayerActionAt_Params', [
      mojo.internal.StructField('location', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action', 8, 0, blink.mojom.MediaPlayerActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec, 'blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_Params', [
      mojo.internal.StructField('location', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_area', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParamsSpec, 'blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParams', [
      mojo.internal.StructField('bitmap', 0, 0, skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_PluginActionAt_ParamsSpec, 'blink.mojom.LocalFrame_PluginActionAt_Params', [
      mojo.internal.StructField('location', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action', 8, 0, blink.mojom.PluginActionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec, 'blink.mojom.LocalFrame_AdvanceFocusInFrame_Params', [
      mojo.internal.StructField('focus_type', 0, 0, blink.mojom.FocusTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_frame_token', 8, 0, blink.mojom.RemoteFrameTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec, 'blink.mojom.LocalFrame_AdvanceFocusForIME_Params', [
      mojo.internal.StructField('focus_type', 0, 0, blink.mojom.FocusTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec, 'blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_Params', [
      mojo.internal.StructField('violation', 0, 0, network.mojom.CSPViolationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec, 'blink.mojom.LocalFrame_DidUpdateFramePolicy_Params', [
      mojo.internal.StructField('frame_policy', 0, 0, blink.mojom.FramePolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec, 'blink.mojom.LocalFrame_OnFrameVisibilityChanged_Params', [
      mojo.internal.StructField('visibility', 0, 0, blink.mojom.FrameVisibilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec, 'blink.mojom.LocalFrame_PostMessageEvent_Params', [
      mojo.internal.StructField('source_frame_token', 0, 0, blink.mojom.RemoteFrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('source_origin', 8, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('target_origin', 16, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('message', 24, 0, blink.mojom.TransferableMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec, 'blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_Params', [
      mojo.internal.StructField('object_name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('method_name', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arguments', 16, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wants_result', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParamsSpec, 'blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequest_Params', [
      mojo.internal.StructField('javascript', 0, 0, mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('wants_result', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_Params', [
      mojo.internal.StructField('javascript', 0, 0, mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('world_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_user_gesture', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('resolve_promises', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('honor_js_content_settings', 12, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParams', [
      mojo.internal.StructField('result_type', 0, 0, blink.mojom.JavaScriptExecutionResultTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_Params', [
      mojo.internal.StructField('javascript', 0, 0, mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('world_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('wants_result', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetCharacterIndexAtPoint_ParamsSpec, 'blink.mojom.LocalFrame_GetCharacterIndexAtPoint_Params', [
      mojo.internal.StructField('location', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetFirstRectForRange_ParamsSpec, 'blink.mojom.LocalFrame_GetFirstRectForRange_Params', [
      mojo.internal.StructField('range', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetStringForRange_ParamsSpec, 'blink.mojom.LocalFrame_GetStringForRange_Params', [
      mojo.internal.StructField('range', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetStringForRange_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetStringForRange_ResponseParams', [
      mojo.internal.StructField('string', 0, 0, ui.mojom.AttributedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('baseline_point', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec, 'blink.mojom.LocalFrame_BindReportingObserver_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.ReportingObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_UpdateOpener_ParamsSpec, 'blink.mojom.LocalFrame_UpdateOpener_Params', [
      mojo.internal.StructField('opener_frame_token', 0, 0, blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec, 'blink.mojom.LocalFrame_GetSavableResourceLinks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParams', [
      mojo.internal.StructField('reply', 0, 0, blink.mojom.GetSavableResourceLinksReplySpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_MixedContentFound_ParamsSpec, 'blink.mojom.LocalFrame_MixedContentFound_Params', [
      mojo.internal.StructField('main_resource_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mixed_content_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_context', 16, 0, blink.mojom.RequestContextTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url_before_redirects', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_location', 32, 0, network.mojom.SourceLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('was_allowed', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('had_redirect', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec, 'blink.mojom.LocalFrame_BindDevToolsAgent_Params', [
      mojo.internal.StructField('agent_host', 0, 0, pending_associated_remote<blink.mojom.DevToolsAgentHost>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('agent', 8, 0, pending_associated_receiver<blink.mojom.DevToolsAgent>Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_ExtractSmartClipData_ParamsSpec, 'blink.mojom.LocalFrame_ExtractSmartClipData_Params', [
      mojo.internal.StructField('rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_ExtractSmartClipData_ResponseParamsSpec, 'blink.mojom.LocalFrame_ExtractSmartClipData_ResponseParams', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('html', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('clip_rect', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec, 'blink.mojom.LocalFrame_HandleRendererDebugURL_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec, 'blink.mojom.LocalFrame_GetCanonicalUrlForSharing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParams', [
      mojo.internal.StructField('canonical_url', 0, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec, 'blink.mojom.LocalFrame_GetOpenGraphMetadata_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParams', [
      mojo.internal.StructField('metadata', 0, 0, blink.mojom.OpenGraphMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec, 'blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_Params', [
      mojo.internal.StructField('entry_arrays', 0, 0, blink.mojom.NavigationApiHistoryEntryArraysSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('restore_reason', 8, 0, blink.mojom.NavigationApiEntryRestoreReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec, 'blink.mojom.LocalFrame_UpdatePrerenderURL_Params', [
      mojo.internal.StructField('matched_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParamsSpec, 'blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec, 'blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_Params', [
      mojo.internal.StructField('keys', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec, 'blink.mojom.LocalFrame_TraverseCancelled_Params', [
      mojo.internal.StructField('navigation_api_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, blink.mojom.TraverseCancelledReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec, 'blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_state', 8, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_browser_initiated', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec, 'blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_Params', [
      mojo.internal.StructField('transition_token', 0, 0, blink.mojom.ViewTransitionTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_swap_event_params', 8, 0, blink.mojom.PageSwapEventParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParamsSpec, 'blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParams', [
      mojo.internal.StructField('view_transition_state', 0, 0, blink.mojom.ViewTransitionStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec, 'blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec, 'blink.mojom.LocalFrame_DispatchPageSwap_Params', [
      mojo.internal.StructField('page_swap_event_params', 0, 0, blink.mojom.PageSwapEventParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec, 'blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_Params', [
      mojo.internal.StructField('subframe_token', 0, 0, blink.mojom.FrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('initial_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('start_time', 16, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('redirect_time', 24, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_start', 32, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_start', 40, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('load_timing_info', 56, 0, network.mojom.LoadTimingInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('connection_info', 64, 0, network.mojom.ConnectionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('alpn_negotiated_protocol', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('normalized_server_timing', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('completion_status', 88, 0, network.mojom.URLLoaderCompletionStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_code', 96, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_secure_transport', 100, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_validated', 100, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 112]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec, 'blink.mojom.LocalFrame_GetScrollPosition_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetScrollPosition_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetScrollPosition_ResponseParams', [
      mojo.internal.StructField('scroll_position', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_PerformSpellCheck_ParamsSpec, 'blink.mojom.LocalFrame_PerformSpellCheck_Params', [
    ],
    [[0, 8]]);

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
  getTextSurroundingSelection(max_length) {
    return this.$.getTextSurroundingSelection(max_length);
  }
  sendInterventionReport(id, message, child_frame_token) {
    return this.$.sendInterventionReport(id, message, child_frame_token);
  }
  setFrameOwnerProperties(properties) {
    return this.$.setFrameOwnerProperties(properties);
  }
  notifyUserActivation(notification_type) {
    return this.$.notifyUserActivation(notification_type);
  }
  notifyVirtualKeyboardOverlayRect(keyboard_rect) {
    return this.$.notifyVirtualKeyboardOverlayRect(keyboard_rect);
  }
  showInterestInElement(nodeID) {
    return this.$.showInterestInElement(nodeID);
  }
  addMessageToConsole(level, message, discard_duplicates) {
    return this.$.addMessageToConsole(level, message, discard_duplicates);
  }
  swapInImmediately() {
    return this.$.swapInImmediately();
  }
  checkCompleted() {
    return this.$.checkCompleted();
  }
  stopLoading() {
    return this.$.stopLoading();
  }
  collapse(collapsed) {
    return this.$.collapse(collapsed);
  }
  enableViewSourceMode() {
    return this.$.enableViewSourceMode();
  }
  focus() {
    return this.$.focus();
  }
  clearFocusedElement() {
    return this.$.clearFocusedElement();
  }
  copyImageAt(window_point) {
    return this.$.copyImageAt(window_point);
  }
  saveImageAt(window_point) {
    return this.$.saveImageAt(window_point);
  }
  reportBlinkFeatureUsage(features) {
    return this.$.reportBlinkFeatureUsage(features);
  }
  renderFallbackContent() {
    return this.$.renderFallbackContent();
  }
  beforeUnload(is_reload) {
    return this.$.beforeUnload(is_reload);
  }
  mediaPlayerActionAt(location, action) {
    return this.$.mediaPlayerActionAt(location, action);
  }
  requestVideoFrameAtWithBoundsHint(location, max_size, max_area) {
    return this.$.requestVideoFrameAtWithBoundsHint(location, max_size, max_area);
  }
  pluginActionAt(location, action) {
    return this.$.pluginActionAt(location, action);
  }
  advanceFocusInFrame(focus_type, source_frame_token) {
    return this.$.advanceFocusInFrame(focus_type, source_frame_token);
  }
  advanceFocusForIME(focus_type) {
    return this.$.advanceFocusForIME(focus_type);
  }
  reportContentSecurityPolicyViolation(violation) {
    return this.$.reportContentSecurityPolicyViolation(violation);
  }
  didUpdateFramePolicy(frame_policy) {
    return this.$.didUpdateFramePolicy(frame_policy);
  }
  onFrameVisibilityChanged(visibility) {
    return this.$.onFrameVisibilityChanged(visibility);
  }
  postMessageEvent(source_frame_token, source_origin, target_origin, message) {
    return this.$.postMessageEvent(source_frame_token, source_origin, target_origin, message);
  }
  javaScriptMethodExecuteRequest(object_name, method_name, arguments, wants_result) {
    return this.$.javaScriptMethodExecuteRequest(object_name, method_name, arguments, wants_result);
  }
  javaScriptExecuteRequest(javascript, wants_result) {
    return this.$.javaScriptExecuteRequest(javascript, wants_result);
  }
  javaScriptExecuteRequestForTests(javascript, has_user_gesture, resolve_promises, honor_js_content_settings, world_id) {
    return this.$.javaScriptExecuteRequestForTests(javascript, has_user_gesture, resolve_promises, honor_js_content_settings, world_id);
  }
  javaScriptExecuteRequestInIsolatedWorld(javascript, wants_result, world_id) {
    return this.$.javaScriptExecuteRequestInIsolatedWorld(javascript, wants_result, world_id);
  }
  getCharacterIndexAtPoint(location) {
    return this.$.getCharacterIndexAtPoint(location);
  }
  getFirstRectForRange(range) {
    return this.$.getFirstRectForRange(range);
  }
  getStringForRange(range) {
    return this.$.getStringForRange(range);
  }
  bindReportingObserver(receiver) {
    return this.$.bindReportingObserver(receiver);
  }
  updateOpener(opener_frame_token) {
    return this.$.updateOpener(opener_frame_token);
  }
  getSavableResourceLinks() {
    return this.$.getSavableResourceLinks();
  }
  mixedContentFound(main_resource_url, mixed_content_url, request_context, was_allowed, url_before_redirects, had_redirect, source_location) {
    return this.$.mixedContentFound(main_resource_url, mixed_content_url, request_context, was_allowed, url_before_redirects, had_redirect, source_location);
  }
  bindDevToolsAgent(agent_host, agent) {
    return this.$.bindDevToolsAgent(agent_host, agent);
  }
  extractSmartClipData(rect) {
    return this.$.extractSmartClipData(rect);
  }
  handleRendererDebugURL(url) {
    return this.$.handleRendererDebugURL(url);
  }
  getCanonicalUrlForSharing() {
    return this.$.getCanonicalUrlForSharing();
  }
  getOpenGraphMetadata() {
    return this.$.getOpenGraphMetadata();
  }
  setNavigationApiHistoryEntriesForRestore(entry_arrays, restore_reason) {
    return this.$.setNavigationApiHistoryEntriesForRestore(entry_arrays, restore_reason);
  }
  updatePrerenderURL(matched_url) {
    return this.$.updatePrerenderURL(matched_url);
  }
  notifyNavigationApiOfDisposedEntries(keys) {
    return this.$.notifyNavigationApiOfDisposedEntries(keys);
  }
  traverseCancelled(navigation_api_key, reason) {
    return this.$.traverseCancelled(navigation_api_key, reason);
  }
  dispatchNavigateEventForCrossDocumentTraversal(url, page_state, is_browser_initiated) {
    return this.$.dispatchNavigateEventForCrossDocumentTraversal(url, page_state, is_browser_initiated);
  }
  snapshotDocumentForViewTransition(transition_token, page_swap_event_params) {
    return this.$.snapshotDocumentForViewTransition(transition_token, page_swap_event_params);
  }
  notifyViewTransitionAbortedToOldDocument() {
    return this.$.notifyViewTransitionAbortedToOldDocument();
  }
  dispatchPageSwap(page_swap_event_params) {
    return this.$.dispatchPageSwap(page_swap_event_params);
  }
  addResourceTimingEntryForFailedSubframeNavigation(subframe_token, initial_url, start_time, redirect_time, request_start, response_start, response_code, mime_type, load_timing_info, connection_info, alpn_negotiated_protocol, is_secure_transport, is_validated, normalized_server_timing, completion_status) {
    return this.$.addResourceTimingEntryForFailedSubframeNavigation(subframe_token, initial_url, start_time, redirect_time, request_start, response_start, response_code, mime_type, load_timing_info, connection_info, alpn_negotiated_protocol, is_secure_transport, is_validated, normalized_server_timing, completion_status);
  }
  getScrollPosition() {
    return this.$.getScrollPosition();
  }
  performSpellCheck() {
    return this.$.performSpellCheck();
  }
};

blink.mojom.LocalFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LocalFrame', [
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
      { explicit: null },
    ]);
  }

  getTextSurroundingSelection(max_length) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec,
      blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParamsSpec,
      [max_length],
      false);
  }

  sendInterventionReport(id, message, child_frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec,
      null,
      [id, message, child_frame_token],
      false);
  }

  setFrameOwnerProperties(properties) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec,
      null,
      [properties],
      false);
  }

  notifyUserActivation(notification_type) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec,
      null,
      [notification_type],
      false);
  }

  notifyVirtualKeyboardOverlayRect(keyboard_rect) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec,
      null,
      [keyboard_rect],
      false);
  }

  showInterestInElement(nodeID) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec,
      null,
      [nodeID],
      false);
  }

  addMessageToConsole(level, message, discard_duplicates) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec,
      null,
      [level, message, discard_duplicates],
      false);
  }

  swapInImmediately() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec,
      null,
      [],
      false);
  }

  checkCompleted() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.LocalFrame_CheckCompleted_ParamsSpec,
      null,
      [],
      false);
  }

  stopLoading() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.LocalFrame_StopLoading_ParamsSpec,
      null,
      [],
      false);
  }

  collapse(collapsed) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.LocalFrame_Collapse_ParamsSpec,
      null,
      [collapsed],
      false);
  }

  enableViewSourceMode() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec,
      null,
      [],
      false);
  }

  focus() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      blink.mojom.LocalFrame_Focus_ParamsSpec,
      null,
      [],
      false);
  }

  clearFocusedElement() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec,
      null,
      [],
      false);
  }

  copyImageAt(window_point) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      blink.mojom.LocalFrame_CopyImageAt_ParamsSpec,
      null,
      [window_point],
      false);
  }

  saveImageAt(window_point) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      blink.mojom.LocalFrame_SaveImageAt_ParamsSpec,
      null,
      [window_point],
      false);
  }

  reportBlinkFeatureUsage(features) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec,
      null,
      [features],
      false);
  }

  renderFallbackContent() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec,
      null,
      [],
      false);
  }

  beforeUnload(is_reload) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      blink.mojom.LocalFrame_BeforeUnload_ParamsSpec,
      blink.mojom.LocalFrame_BeforeUnload_ResponseParamsSpec,
      [is_reload],
      false);
  }

  mediaPlayerActionAt(location, action) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec,
      null,
      [location, action],
      false);
  }

  requestVideoFrameAtWithBoundsHint(location, max_size, max_area) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec,
      blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParamsSpec,
      [location, max_size, max_area],
      false);
  }

  pluginActionAt(location, action) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      blink.mojom.LocalFrame_PluginActionAt_ParamsSpec,
      null,
      [location, action],
      false);
  }

  advanceFocusInFrame(focus_type, source_frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec,
      null,
      [focus_type, source_frame_token],
      false);
  }

  advanceFocusForIME(focus_type) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec,
      null,
      [focus_type],
      false);
  }

  reportContentSecurityPolicyViolation(violation) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec,
      null,
      [violation],
      false);
  }

  didUpdateFramePolicy(frame_policy) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec,
      null,
      [frame_policy],
      false);
  }

  onFrameVisibilityChanged(visibility) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec,
      null,
      [visibility],
      false);
  }

  postMessageEvent(source_frame_token, source_origin, target_origin, message) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec,
      null,
      [source_frame_token, source_origin, target_origin, message],
      false);
  }

  javaScriptMethodExecuteRequest(object_name, method_name, arguments, wants_result) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec,
      blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParamsSpec,
      [object_name, method_name, arguments, wants_result],
      false);
  }

  javaScriptExecuteRequest(javascript, wants_result) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec,
      blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParamsSpec,
      [javascript, wants_result],
      false);
  }

  javaScriptExecuteRequestForTests(javascript, has_user_gesture, resolve_promises, honor_js_content_settings, world_id) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec,
      blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParamsSpec,
      [javascript, has_user_gesture, resolve_promises, honor_js_content_settings, world_id],
      false);
  }

  javaScriptExecuteRequestInIsolatedWorld(javascript, wants_result, world_id) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec,
      blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParamsSpec,
      [javascript, wants_result, world_id],
      false);
  }

  getCharacterIndexAtPoint(location) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      blink.mojom.LocalFrame_GetCharacterIndexAtPoint_ParamsSpec,
      null,
      [location],
      false);
  }

  getFirstRectForRange(range) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      blink.mojom.LocalFrame_GetFirstRectForRange_ParamsSpec,
      null,
      [range],
      false);
  }

  getStringForRange(range) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      blink.mojom.LocalFrame_GetStringForRange_ParamsSpec,
      blink.mojom.LocalFrame_GetStringForRange_ResponseParamsSpec,
      [range],
      false);
  }

  bindReportingObserver(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec,
      null,
      [receiver],
      false);
  }

  updateOpener(opener_frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      blink.mojom.LocalFrame_UpdateOpener_ParamsSpec,
      null,
      [opener_frame_token],
      false);
  }

  getSavableResourceLinks() {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec,
      blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParamsSpec,
      [],
      false);
  }

  mixedContentFound(main_resource_url, mixed_content_url, request_context, was_allowed, url_before_redirects, had_redirect, source_location) {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      blink.mojom.LocalFrame_MixedContentFound_ParamsSpec,
      null,
      [main_resource_url, mixed_content_url, request_context, was_allowed, url_before_redirects, had_redirect, source_location],
      false);
  }

  bindDevToolsAgent(agent_host, agent) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec,
      null,
      [agent_host, agent],
      false);
  }

  extractSmartClipData(rect) {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      blink.mojom.LocalFrame_ExtractSmartClipData_ParamsSpec,
      blink.mojom.LocalFrame_ExtractSmartClipData_ResponseParamsSpec,
      [rect],
      false);
  }

  handleRendererDebugURL(url) {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec,
      null,
      [url],
      false);
  }

  getCanonicalUrlForSharing() {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec,
      blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParamsSpec,
      [],
      false);
  }

  getOpenGraphMetadata() {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec,
      blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParamsSpec,
      [],
      false);
  }

  setNavigationApiHistoryEntriesForRestore(entry_arrays, restore_reason) {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec,
      null,
      [entry_arrays, restore_reason],
      false);
  }

  updatePrerenderURL(matched_url) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec,
      blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParamsSpec,
      [matched_url],
      false);
  }

  notifyNavigationApiOfDisposedEntries(keys) {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec,
      null,
      [keys],
      false);
  }

  traverseCancelled(navigation_api_key, reason) {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec,
      null,
      [navigation_api_key, reason],
      false);
  }

  dispatchNavigateEventForCrossDocumentTraversal(url, page_state, is_browser_initiated) {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec,
      null,
      [url, page_state, is_browser_initiated],
      false);
  }

  snapshotDocumentForViewTransition(transition_token, page_swap_event_params) {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec,
      blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParamsSpec,
      [transition_token, page_swap_event_params],
      false);
  }

  notifyViewTransitionAbortedToOldDocument() {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec,
      null,
      [],
      false);
  }

  dispatchPageSwap(page_swap_event_params) {
    return this.proxy.sendMessage(
      this.ordinals[51],  // ordinal
      blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec,
      null,
      [page_swap_event_params],
      false);
  }

  addResourceTimingEntryForFailedSubframeNavigation(subframe_token, initial_url, start_time, redirect_time, request_start, response_start, response_code, mime_type, load_timing_info, connection_info, alpn_negotiated_protocol, is_secure_transport, is_validated, normalized_server_timing, completion_status) {
    return this.proxy.sendMessage(
      this.ordinals[52],  // ordinal
      blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec,
      null,
      [subframe_token, initial_url, start_time, redirect_time, request_start, response_start, response_code, mime_type, load_timing_info, connection_info, alpn_negotiated_protocol, is_secure_transport, is_validated, normalized_server_timing, completion_status],
      false);
  }

  getScrollPosition() {
    return this.proxy.sendMessage(
      this.ordinals[53],  // ordinal
      blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec,
      blink.mojom.LocalFrame_GetScrollPosition_ResponseParamsSpec,
      [],
      false);
  }

  performSpellCheck() {
    return this.proxy.sendMessage(
      this.ordinals[54],  // ordinal
      blink.mojom.LocalFrame_PerformSpellCheck_ParamsSpec,
      null,
      [],
      false);
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

blink.mojom.LocalFrameReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LocalFrame', [
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
             decoder.decodeStructInline(blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_CheckCompleted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_StopLoading_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_Collapse_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_Focus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_CopyImageAt_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_SaveImageAt_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_BeforeUnload_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_PluginActionAt_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec);
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec);
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_GetCharacterIndexAtPoint_ParamsSpec);
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_GetFirstRectForRange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_GetStringForRange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_UpdateOpener_ParamsSpec);
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec);
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_MixedContentFound_ParamsSpec);
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_ExtractSmartClipData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec);
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec);
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec);
             this.mapOrdinal(header.ordinal, 43);
             dispatchId = 43;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec);
             this.mapOrdinal(header.ordinal, 44);
             dispatchId = 44;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec);
             this.mapOrdinal(header.ordinal, 45);
             dispatchId = 45;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec);
             this.mapOrdinal(header.ordinal, 46);
             dispatchId = 46;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 47);
             dispatchId = 47;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec);
             this.mapOrdinal(header.ordinal, 48);
             dispatchId = 48;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec);
             this.mapOrdinal(header.ordinal, 49);
             dispatchId = 49;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec);
             this.mapOrdinal(header.ordinal, 50);
             dispatchId = 50;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec);
             this.mapOrdinal(header.ordinal, 51);
             dispatchId = 51;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 52);
             dispatchId = 52;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec);
             this.mapOrdinal(header.ordinal, 53);
             dispatchId = 53;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalFrame_PerformSpellCheck_ParamsSpec);
             this.mapOrdinal(header.ordinal, 54);
             dispatchId = 54;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec.$.structSpec);
          const result = this.impl.getTextSurroundingSelection(params.max_length);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec.$.structSpec);
          const result = this.impl.sendInterventionReport(params.id, params.message, params.child_frame_token);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec.$.structSpec);
          const result = this.impl.setFrameOwnerProperties(params.properties);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec.$.structSpec);
          const result = this.impl.notifyUserActivation(params.notification_type);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec.$.structSpec);
          const result = this.impl.notifyVirtualKeyboardOverlayRect(params.keyboard_rect);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec.$.structSpec);
          const result = this.impl.showInterestInElement(params.nodeID);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec.$.structSpec);
          const result = this.impl.addMessageToConsole(params.level, params.message, params.discard_duplicates);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec.$.structSpec);
          const result = this.impl.swapInImmediately();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_CheckCompleted_ParamsSpec.$.structSpec);
          const result = this.impl.checkCompleted();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_StopLoading_ParamsSpec.$.structSpec);
          const result = this.impl.stopLoading();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_Collapse_ParamsSpec.$.structSpec);
          const result = this.impl.collapse(params.collapsed);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec.$.structSpec);
          const result = this.impl.enableViewSourceMode();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_Focus_ParamsSpec.$.structSpec);
          const result = this.impl.focus();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec.$.structSpec);
          const result = this.impl.clearFocusedElement();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_CopyImageAt_ParamsSpec.$.structSpec);
          const result = this.impl.copyImageAt(params.window_point);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_SaveImageAt_ParamsSpec.$.structSpec);
          const result = this.impl.saveImageAt(params.window_point);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec.$.structSpec);
          const result = this.impl.reportBlinkFeatureUsage(params.features);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec.$.structSpec);
          const result = this.impl.renderFallbackContent();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_BeforeUnload_ParamsSpec.$.structSpec);
          const result = this.impl.beforeUnload(params.is_reload);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrame_BeforeUnload_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec.$.structSpec);
          const result = this.impl.mediaPlayerActionAt(params.location, params.action);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec.$.structSpec);
          const result = this.impl.requestVideoFrameAtWithBoundsHint(params.location, params.max_size, params.max_area);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_PluginActionAt_ParamsSpec.$.structSpec);
          const result = this.impl.pluginActionAt(params.location, params.action);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec.$.structSpec);
          const result = this.impl.advanceFocusInFrame(params.focus_type, params.source_frame_token);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec.$.structSpec);
          const result = this.impl.advanceFocusForIME(params.focus_type);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec.$.structSpec);
          const result = this.impl.reportContentSecurityPolicyViolation(params.violation);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec.$.structSpec);
          const result = this.impl.didUpdateFramePolicy(params.frame_policy);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onFrameVisibilityChanged(params.visibility);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec.$.structSpec);
          const result = this.impl.postMessageEvent(params.source_frame_token, params.source_origin, params.target_origin, params.message);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec.$.structSpec);
          const result = this.impl.javaScriptMethodExecuteRequest(params.object_name, params.method_name, params.arguments, params.wants_result);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec.$.structSpec);
          const result = this.impl.javaScriptExecuteRequest(params.javascript, params.wants_result);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec.$.structSpec);
          const result = this.impl.javaScriptExecuteRequestForTests(params.javascript, params.has_user_gesture, params.resolve_promises, params.honor_js_content_settings, params.world_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec.$.structSpec);
          const result = this.impl.javaScriptExecuteRequestInIsolatedWorld(params.javascript, params.wants_result, params.world_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_GetCharacterIndexAtPoint_ParamsSpec.$.structSpec);
          const result = this.impl.getCharacterIndexAtPoint(params.location);
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_GetFirstRectForRange_ParamsSpec.$.structSpec);
          const result = this.impl.getFirstRectForRange(params.range);
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_GetStringForRange_ParamsSpec.$.structSpec);
          const result = this.impl.getStringForRange(params.range);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrame_GetStringForRange_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec.$.structSpec);
          const result = this.impl.bindReportingObserver(params.receiver);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_UpdateOpener_ParamsSpec.$.structSpec);
          const result = this.impl.updateOpener(params.opener_frame_token);
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec.$.structSpec);
          const result = this.impl.getSavableResourceLinks();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_MixedContentFound_ParamsSpec.$.structSpec);
          const result = this.impl.mixedContentFound(params.main_resource_url, params.mixed_content_url, params.request_context, params.was_allowed, params.url_before_redirects, params.had_redirect, params.source_location);
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec.$.structSpec);
          const result = this.impl.bindDevToolsAgent(params.agent_host, params.agent);
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_ExtractSmartClipData_ParamsSpec.$.structSpec);
          const result = this.impl.extractSmartClipData(params.rect);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrame_ExtractSmartClipData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec.$.structSpec);
          const result = this.impl.handleRendererDebugURL(params.url);
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec.$.structSpec);
          const result = this.impl.getCanonicalUrlForSharing();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec.$.structSpec);
          const result = this.impl.getOpenGraphMetadata();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec.$.structSpec);
          const result = this.impl.setNavigationApiHistoryEntriesForRestore(params.entry_arrays, params.restore_reason);
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec.$.structSpec);
          const result = this.impl.updatePrerenderURL(params.matched_url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec.$.structSpec);
          const result = this.impl.notifyNavigationApiOfDisposedEntries(params.keys);
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec.$.structSpec);
          const result = this.impl.traverseCancelled(params.navigation_api_key, params.reason);
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec.$.structSpec);
          const result = this.impl.dispatchNavigateEventForCrossDocumentTraversal(params.url, params.page_state, params.is_browser_initiated);
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec.$.structSpec);
          const result = this.impl.snapshotDocumentForViewTransition(params.transition_token, params.page_swap_event_params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec.$.structSpec);
          const result = this.impl.notifyViewTransitionAbortedToOldDocument();
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec.$.structSpec);
          const result = this.impl.dispatchPageSwap(params.page_swap_event_params);
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec.$.structSpec);
          const result = this.impl.addResourceTimingEntryForFailedSubframeNavigation(params.subframe_token, params.initial_url, params.start_time, params.redirect_time, params.request_start, params.response_start, params.response_code, params.mime_type, params.load_timing_info, params.connection_info, params.alpn_negotiated_protocol, params.is_secure_transport, params.is_validated, params.normalized_server_timing, params.completion_status);
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec.$.structSpec);
          const result = this.impl.getScrollPosition();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalFrame_GetScrollPosition_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 54: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalFrame_PerformSpellCheck_ParamsSpec.$.structSpec);
          const result = this.impl.performSpellCheck();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.LocalFrameReceiver = blink.mojom.LocalFrameReceiver;

blink.mojom.LocalFramePtr = blink.mojom.LocalFrameRemote;
blink.mojom.LocalFrameRequest = blink.mojom.LocalFramePendingReceiver;


// Interface: LocalMainFrame
mojo.internal.Struct(
    blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec, 'blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rect', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec, 'blink.mojom.LocalMainFrame_SetScaleFactor_Params', [
      mojo.internal.StructField('scale', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrame_ClosePage_ParamsSpec, 'blink.mojom.LocalMainFrame_ClosePage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrame_ClosePage_ResponseParamsSpec, 'blink.mojom.LocalMainFrame_ClosePage_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec, 'blink.mojom.LocalMainFrame_GetFullPageSize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParamsSpec, 'blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParams', [
      mojo.internal.StructField('full_page_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec, 'blink.mojom.LocalMainFrame_SetInitialFocus_Params', [
      mojo.internal.StructField('reverse', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec, 'blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec, 'blink.mojom.LocalMainFrame_ZoomToFindInPageRect_Params', [
      mojo.internal.StructField('rect_in_root_frame', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec, 'blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_Params', [
      mojo.internal.StructField('accessed_window', 0, 0, blink.mojom.FrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('coop_reporter_info', 8, 0, network.mojom.CrossOriginOpenerPolicyReporterParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec, 'blink.mojom.LocalMainFrame_UpdateBrowserControlsState_Params', [
      mojo.internal.StructField('constraints', 0, 0, cc.mojom.BrowserControlsStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('current', 8, 0, cc.mojom.BrowserControlsStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('offset_tag_modifications', 16, 0, cc.mojom.BrowserControlsOffsetTagModificationsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('animate', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec, 'blink.mojom.LocalMainFrame_SetV8CompileHints_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrame_Discard_ParamsSpec, 'blink.mojom.LocalMainFrame_Discard_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrame_Discard_ResponseParamsSpec, 'blink.mojom.LocalMainFrame_Discard_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec, 'blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_Params', [
      mojo.internal.StructField('randomized_trigger_rate', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('confidence', 8, 0, blink.mojom.ConfidenceLevelSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
  animateDoubleTapZoom(point, rect) {
    return this.$.animateDoubleTapZoom(point, rect);
  }
  setScaleFactor(scale) {
    return this.$.setScaleFactor(scale);
  }
  closePage() {
    return this.$.closePage();
  }
  getFullPageSize() {
    return this.$.getFullPageSize();
  }
  setInitialFocus(reverse) {
    return this.$.setInitialFocus(reverse);
  }
  enablePreferredSizeChangedMode() {
    return this.$.enablePreferredSizeChangedMode();
  }
  zoomToFindInPageRect(rect_in_root_frame) {
    return this.$.zoomToFindInPageRect(rect_in_root_frame);
  }
  installCoopAccessMonitor(accessed_window, coop_reporter_info) {
    return this.$.installCoopAccessMonitor(accessed_window, coop_reporter_info);
  }
  updateBrowserControlsState(constraints, current, animate, offset_tag_modifications) {
    return this.$.updateBrowserControlsState(constraints, current, animate, offset_tag_modifications);
  }
  setV8CompileHints(data) {
    return this.$.setV8CompileHints(data);
  }
  discard() {
    return this.$.discard();
  }
  finalizeNavigationConfidence(randomized_trigger_rate, confidence) {
    return this.$.finalizeNavigationConfidence(randomized_trigger_rate, confidence);
  }
};

blink.mojom.LocalMainFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LocalMainFrame', [
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

  animateDoubleTapZoom(point, rect) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec,
      null,
      [point, rect],
      false);
  }

  setScaleFactor(scale) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec,
      null,
      [scale],
      false);
  }

  closePage() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.LocalMainFrame_ClosePage_ParamsSpec,
      blink.mojom.LocalMainFrame_ClosePage_ResponseParamsSpec,
      [],
      false);
  }

  getFullPageSize() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec,
      blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParamsSpec,
      [],
      false);
  }

  setInitialFocus(reverse) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec,
      null,
      [reverse],
      false);
  }

  enablePreferredSizeChangedMode() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec,
      null,
      [],
      false);
  }

  zoomToFindInPageRect(rect_in_root_frame) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec,
      null,
      [rect_in_root_frame],
      false);
  }

  installCoopAccessMonitor(accessed_window, coop_reporter_info) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec,
      null,
      [accessed_window, coop_reporter_info],
      false);
  }

  updateBrowserControlsState(constraints, current, animate, offset_tag_modifications) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec,
      null,
      [constraints, current, animate, offset_tag_modifications],
      false);
  }

  setV8CompileHints(data) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec,
      null,
      [data],
      false);
  }

  discard() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.LocalMainFrame_Discard_ParamsSpec,
      blink.mojom.LocalMainFrame_Discard_ResponseParamsSpec,
      [],
      false);
  }

  finalizeNavigationConfidence(randomized_trigger_rate, confidence) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec,
      null,
      [randomized_trigger_rate, confidence],
      false);
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

blink.mojom.LocalMainFrameReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LocalMainFrame', [
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
             decoder.decodeStructInline(blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrame_ClosePage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrame_Discard_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec.$.structSpec);
          const result = this.impl.animateDoubleTapZoom(params.point, params.rect);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec.$.structSpec);
          const result = this.impl.setScaleFactor(params.scale);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrame_ClosePage_ParamsSpec.$.structSpec);
          const result = this.impl.closePage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalMainFrame_ClosePage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec.$.structSpec);
          const result = this.impl.getFullPageSize();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec.$.structSpec);
          const result = this.impl.setInitialFocus(params.reverse);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec.$.structSpec);
          const result = this.impl.enablePreferredSizeChangedMode();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec.$.structSpec);
          const result = this.impl.zoomToFindInPageRect(params.rect_in_root_frame);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec.$.structSpec);
          const result = this.impl.installCoopAccessMonitor(params.accessed_window, params.coop_reporter_info);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec.$.structSpec);
          const result = this.impl.updateBrowserControlsState(params.constraints, params.current, params.animate, params.offset_tag_modifications);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec.$.structSpec);
          const result = this.impl.setV8CompileHints(params.data);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrame_Discard_ParamsSpec.$.structSpec);
          const result = this.impl.discard();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalMainFrame_Discard_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec.$.structSpec);
          const result = this.impl.finalizeNavigationConfidence(params.randomized_trigger_rate, params.confidence);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.LocalMainFrameReceiver = blink.mojom.LocalMainFrameReceiver;

blink.mojom.LocalMainFramePtr = blink.mojom.LocalMainFrameRemote;
blink.mojom.LocalMainFrameRequest = blink.mojom.LocalMainFramePendingReceiver;


// Interface: LocalMainFrameHost
mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec, 'blink.mojom.LocalMainFrameHost_ScaleFactorChanged_Params', [
      mojo.internal.StructField('scale', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec, 'blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_Params', [
      mojo.internal.StructField('pref_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_TextAutosizerPageInfoChanged_ParamsSpec, 'blink.mojom.LocalMainFrameHost_TextAutosizerPageInfoChanged_Params', [
      mojo.internal.StructField('page_info', 0, 0, blink.mojom.TextAutosizerPageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec, 'blink.mojom.LocalMainFrameHost_FocusPage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec, 'blink.mojom.LocalMainFrameHost_TakeFocus_Params', [
      mojo.internal.StructField('reverse', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec, 'blink.mojom.LocalMainFrameHost_UpdateTargetURL_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParamsSpec, 'blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec, 'blink.mojom.LocalMainFrameHost_RequestClose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ParamsSpec, 'blink.mojom.LocalMainFrameHost_ShowCreatedWindow_Params', [
      mojo.internal.StructField('opener_frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('disposition', 8, 0, ui.mojom.WindowOpenDispositionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('window_features', 16, 0, blink.mojom.WindowFeaturesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('opened_by_user_gesture', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ResponseParamsSpec, 'blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec, 'blink.mojom.LocalMainFrameHost_SetWindowRect_Params', [
      mojo.internal.StructField('bounds', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParamsSpec, 'blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec, 'blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec, 'blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec, 'blink.mojom.LocalMainFrameHost_Maximize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec, 'blink.mojom.LocalMainFrameHost_Minimize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_Restore_ParamsSpec, 'blink.mojom.LocalMainFrameHost_Restore_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec, 'blink.mojom.LocalMainFrameHost_SetResizable_Params', [
      mojo.internal.StructField('resizable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec, 'blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_Params', [
      mojo.internal.StructField('regions', 0, 0, mojo.internal.Array(blink.mojom.DraggableRegionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec, 'blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_Params', [
      mojo.internal.StructField('duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  scaleFactorChanged(scale) {
    return this.$.scaleFactorChanged(scale);
  }
  contentsPreferredSizeChanged(pref_size) {
    return this.$.contentsPreferredSizeChanged(pref_size);
  }
  textAutosizerPageInfoChanged(page_info) {
    return this.$.textAutosizerPageInfoChanged(page_info);
  }
  focusPage() {
    return this.$.focusPage();
  }
  takeFocus(reverse) {
    return this.$.takeFocus(reverse);
  }
  updateTargetURL(url) {
    return this.$.updateTargetURL(url);
  }
  requestClose() {
    return this.$.requestClose();
  }
  showCreatedWindow(opener_frame_token, disposition, window_features, opened_by_user_gesture) {
    return this.$.showCreatedWindow(opener_frame_token, disposition, window_features, opened_by_user_gesture);
  }
  setWindowRect(bounds) {
    return this.$.setWindowRect(bounds);
  }
  didFirstVisuallyNonEmptyPaint() {
    return this.$.didFirstVisuallyNonEmptyPaint();
  }
  didAccessInitialMainDocument() {
    return this.$.didAccessInitialMainDocument();
  }
  maximize() {
    return this.$.maximize();
  }
  minimize() {
    return this.$.minimize();
  }
  restore() {
    return this.$.restore();
  }
  setResizable(resizable) {
    return this.$.setResizable(resizable);
  }
  draggableRegionsChanged(regions) {
    return this.$.draggableRegionsChanged(regions);
  }
  onFirstContentfulPaint(duration) {
    return this.$.onFirstContentfulPaint(duration);
  }
};

blink.mojom.LocalMainFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LocalMainFrameHost', [
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

  scaleFactorChanged(scale) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec,
      null,
      [scale],
      false);
  }

  contentsPreferredSizeChanged(pref_size) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec,
      null,
      [pref_size],
      false);
  }

  textAutosizerPageInfoChanged(page_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.LocalMainFrameHost_TextAutosizerPageInfoChanged_ParamsSpec,
      null,
      [page_info],
      false);
  }

  focusPage() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec,
      null,
      [],
      false);
  }

  takeFocus(reverse) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec,
      null,
      [reverse],
      false);
  }

  updateTargetURL(url) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec,
      blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParamsSpec,
      [url],
      false);
  }

  requestClose() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec,
      null,
      [],
      false);
  }

  showCreatedWindow(opener_frame_token, disposition, window_features, opened_by_user_gesture) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ParamsSpec,
      blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ResponseParamsSpec,
      [opener_frame_token, disposition, window_features, opened_by_user_gesture],
      false);
  }

  setWindowRect(bounds) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec,
      blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParamsSpec,
      [bounds],
      false);
  }

  didFirstVisuallyNonEmptyPaint() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec,
      null,
      [],
      false);
  }

  didAccessInitialMainDocument() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec,
      null,
      [],
      false);
  }

  maximize() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec,
      null,
      [],
      false);
  }

  minimize() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec,
      null,
      [],
      false);
  }

  restore() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      blink.mojom.LocalMainFrameHost_Restore_ParamsSpec,
      null,
      [],
      false);
  }

  setResizable(resizable) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec,
      null,
      [resizable],
      false);
  }

  draggableRegionsChanged(regions) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec,
      null,
      [regions],
      false);
  }

  onFirstContentfulPaint(duration) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec,
      null,
      [duration],
      false);
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

blink.mojom.LocalMainFrameHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LocalMainFrameHost', [
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
             decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_TextAutosizerPageInfoChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_Restore_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec.$.structSpec);
          const result = this.impl.scaleFactorChanged(params.scale);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec.$.structSpec);
          const result = this.impl.contentsPreferredSizeChanged(params.pref_size);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_TextAutosizerPageInfoChanged_ParamsSpec.$.structSpec);
          const result = this.impl.textAutosizerPageInfoChanged(params.page_info);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec.$.structSpec);
          const result = this.impl.focusPage();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec.$.structSpec);
          const result = this.impl.takeFocus(params.reverse);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec.$.structSpec);
          const result = this.impl.updateTargetURL(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec.$.structSpec);
          const result = this.impl.requestClose();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ParamsSpec.$.structSpec);
          const result = this.impl.showCreatedWindow(params.opener_frame_token, params.disposition, params.window_features, params.opened_by_user_gesture);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec.$.structSpec);
          const result = this.impl.setWindowRect(params.bounds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec.$.structSpec);
          const result = this.impl.didFirstVisuallyNonEmptyPaint();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec.$.structSpec);
          const result = this.impl.didAccessInitialMainDocument();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec.$.structSpec);
          const result = this.impl.maximize();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec.$.structSpec);
          const result = this.impl.minimize();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_Restore_ParamsSpec.$.structSpec);
          const result = this.impl.restore();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec.$.structSpec);
          const result = this.impl.setResizable(params.resizable);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec.$.structSpec);
          const result = this.impl.draggableRegionsChanged(params.regions);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec.$.structSpec);
          const result = this.impl.onFirstContentfulPaint(params.duration);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.LocalMainFrameHostReceiver = blink.mojom.LocalMainFrameHostReceiver;

blink.mojom.LocalMainFrameHostPtr = blink.mojom.LocalMainFrameHostRemote;
blink.mojom.LocalMainFrameHostRequest = blink.mojom.LocalMainFrameHostPendingReceiver;

