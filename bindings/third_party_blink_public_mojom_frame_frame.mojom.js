// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/frame.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var skia = skia || {};
var skia = skia || {};
var skia = skia || {};
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
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};
var url = url || {};
var ui = ui || {};

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
blink.mojom.LocalFrameHost_SetCrashReportStorageKey_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_SetCrashReportStorageKey_ResponseParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_RemoveCrashReportStorageKey_ParamsSpec = { $: {} };
blink.mojom.LocalFrameHost_RemoveCrashReportStorageKey_ResponseParamsSpec = { $: {} };
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

blink.mojom.kMaxCrashReportStorageSize = 5242880;

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
      mojo.internal.StructField('original_url', 16, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('subframe_token', 0, 0, blink.mojom.FrameTokenSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GetSavableResourceLinksReply
mojo.internal.Struct(
    blink.mojom.GetSavableResourceLinksReplySpec, 'blink.mojom.GetSavableResourceLinksReply', [
      mojo.internal.StructField('resources_list', 0, 0, mojo.internal.Array(url.mojom.UrlSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('referrer', 8, 0, blink.mojom.ReferrerSpec, null, false, 0, undefined),
      mojo.internal.StructField('subframes', 16, 0, mojo.internal.Array(blink.mojom.SavableSubframeSpec, false), null, false, 0, undefined),
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
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('referrer', 8, 0, blink.mojom.ReferrerSpec, null, true, 0, undefined),
      mojo.internal.StructField('initiator_origin', 16, 0, url.mojom.OriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('suggested_name', 24, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('cross_origin_redirects', 48, 0, network.mojom.RedirectModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('blob_url_token', 32, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobURLTokenRemote), null, true, 0, undefined),
      mojo.internal.StructField('data_url_blob', 40, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobRemote), null, true, 0, undefined),
      mojo.internal.StructField('is_context_menu_save', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_user_gesture', 52, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: IframeAttributes
mojo.internal.Struct(
    blink.mojom.IframeAttributesSpec, 'blink.mojom.IframeAttributes', [
      mojo.internal.StructField('parsed_csp_attribute', 0, 0, network.mojom.ContentSecurityPolicySpec, null, true, 0, undefined),
      mojo.internal.StructField('credentialless', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('browsing_topics', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ad_auction_headers', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shared_storage_writable_opted_in', 32, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('src', 24, 0, mojo.internal.String, null, true, 0, undefined),
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
      mojo.internal.StructField('options', 0, 0, blink.mojom.FullscreenOptionsSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('is_fullscreen', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('options', 0, 0, blink.mojom.FullscreenOptionsSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec, 'blink.mojom.LocalFrameHost_RegisterProtocolHandler_Params', [
      mojo.internal.StructField('scheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('user_gesture', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec, 'blink.mojom.LocalFrameHost_UnregisterProtocolHandler_Params', [
      mojo.internal.StructField('scheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('type', 0, 0, ui.mojom.VirtualKeyboardModeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_VisibilityChanged_Params', [
      mojo.internal.StructField('visibility', 0, 0, blink.mojom.FrameVisibilitySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidChangeThemeColor_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeThemeColor_Params', [
      mojo.internal.StructField('theme_color', 0, 0, skia.mojom.SkColorSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidChangeBackgroundColor_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeBackgroundColor_Params', [
      mojo.internal.StructField('background_color', 0, 0, skia.mojom.SkColor4fSpec, null, false, 0, undefined),
      mojo.internal.StructField('color_adjust', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec, 'blink.mojom.LocalFrameHost_DidFailLoadWithError_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('policy_bitmap', 0, 0, blink.mojom.InsecureRequestPolicySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec, 'blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_Params', [
      mojo.internal.StructField('set', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_Params', [
      mojo.internal.StructField('present', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disabler_type', 0, 0, blink.mojom.SuddenTerminationDisablerTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_Params', [
      mojo.internal.StructField('has_gesture', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec, 'blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_Params', [
      mojo.internal.StructField('rect_to_scroll', 0, 0, gfx.mojom.RectFSpec, null, false, 0, undefined),
      mojo.internal.StructField('params', 8, 0, blink.mojom.ScrollIntoViewParamsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec, 'blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_Params', [
      mojo.internal.StructField('direction', 8, 0, blink.mojom.ScrollDirectionSpec, null, false, 0, undefined),
      mojo.internal.StructField('granularity', 0, 0, ui.mojom.ScrollGranularitySpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec, 'blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec, 'blink.mojom.LocalFrameHost_DidBlockNavigation_Params', [
      mojo.internal.StructField('blocked_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, blink.mojom.NavigationBlockedReasonSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeLoadProgress_Params', [
      mojo.internal.StructField('load_progress', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec, 'blink.mojom.LocalFrameHost_DidFinishLoad_Params', [
      mojo.internal.StructField('validated_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec, 'blink.mojom.LocalFrameHost_DispatchLoad_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec, 'blink.mojom.LocalFrameHost_GoToEntryAtOffset_Params', [
      mojo.internal.StructField('offset', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_user_gesture', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('actual_navigation_start', 0, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('soft_navigation_heuristics_task_id', 8, 0, blink.mojom.TaskAttributionIdSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec, 'blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('has_user_gesture', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('actual_navigation_start', 8, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('soft_navigation_heuristics_task_id', 16, 0, blink.mojom.TaskAttributionIdSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_Params', [
      mojo.internal.StructField('present', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec, 'blink.mojom.LocalFrameHost_UpdateTitle_Params', [
      mojo.internal.StructField('title', 0, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('title_direction', 8, 0, mojo_base.mojom.TextDirectionSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec, 'blink.mojom.LocalFrameHost_UpdateApplicationTitle_Params', [
      mojo.internal.StructField('application_title', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec, 'blink.mojom.LocalFrameHost_UpdateUserActivationState_Params', [
      mojo.internal.StructField('update_type', 0, 0, blink.mojom.UserActivationUpdateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('notification_type', 4, 0, blink.mojom.UserActivationNotificationTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec, 'blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec, 'blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_Params', [
      mojo.internal.StructField('params', 0, 0, blink.mojom.FindInPageResultAXParamsSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('timing', 0, 0, blink.mojom.ResourceTimingInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec, 'blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec, 'blink.mojom.LocalFrameHost_RunModalAlertDialog_Params', [
      mojo.internal.StructField('alert_message', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('disable_third_party_subframe_suppresion', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec, 'blink.mojom.LocalFrameHost_RunModalConfirmDialog_Params', [
      mojo.internal.StructField('alert_message', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
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
      mojo.internal.StructField('alert_message', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('default_value', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('disable_third_party_subframe_suppresion', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParams', [
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
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
      mojo.internal.StructField('favicon_urls', 0, 0, mojo.internal.Array(blink.mojom.FaviconURLSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec, 'blink.mojom.LocalFrameHost_DownloadURL_Params', [
      mojo.internal.StructField('params', 0, 0, blink.mojom.DownloadURLParamsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_FocusedElementChanged_Params', [
      mojo.internal.StructField('is_editable_element', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_richly_editable_element', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('bounds_in_frame_widget', 0, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('focus_type', 8, 0, blink.mojom.FocusTypeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_TextSelectionChanged_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.BigString16Spec, null, false, 0, undefined),
      mojo.internal.StructField('offset', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('range', 8, 0, gfx.mojom.RangeSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec, 'blink.mojom.LocalFrameHost_ShowPopupMenu_Params', [
      mojo.internal.StructField('popup_client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.PopupMenuClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('font_size', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('selected_item', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('menu_items', 24, 0, mojo.internal.Array(blink.mojom.MenuItemSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('right_aligned', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_multiple_selection', 36, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec, 'blink.mojom.LocalFrameHost_CreateNewPopupWidget_Params', [
      mojo.internal.StructField('popup_host', 0, 0, mojo.internal.AssociatedInterfaceRequest(blink.mojom.PopupWidgetHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('blink_widget_host', 8, 0, mojo.internal.AssociatedInterfaceRequest(blink.mojom.WidgetHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('blink_widget', 16, 0, mojo.internal.AssociatedInterfaceProxy(blink.mojom.WidgetRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec, 'blink.mojom.LocalFrameHost_ShowContextMenu_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.AssociatedInterfaceProxy(blink.mojom.ContextMenuClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('params', 8, 0, blink.mojom.UntrustworthyContextMenuParamsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec, 'blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('http_method', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_destination', 24, 0, network.mojom.RequestDestinationSpec, null, false, 0, undefined),
      mojo.internal.StructField('include_credentials', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_Params', [
      mojo.internal.StructField('child_frame_token', 0, 0, blink.mojom.FrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_owner_properties', 16, 0, blink.mojom.FrameOwnerPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeOpener_Params', [
      mojo.internal.StructField('opener_frame', 0, 0, blink.mojom.LocalFrameTokenSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeFramePolicy_Params', [
      mojo.internal.StructField('child_frame_token', 0, 0, blink.mojom.FrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_policy', 16, 0, blink.mojom.FramePolicySpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeIframeAttributes_Params', [
      mojo.internal.StructField('child_frame_token', 0, 0, blink.mojom.FrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('attributes', 16, 0, blink.mojom.IframeAttributesSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec, 'blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_Params', [
      mojo.internal.StructField('clip_rect', 0, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('guid', 8, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('log_level', 24, 0, blink.mojom.ConsoleMessageLevelSpec, null, false, 0, undefined),
      mojo.internal.StructField('msg', 0, 0, mojo_base.mojom.BigString16Spec, null, false, 0, undefined),
      mojo.internal.StructField('line_number', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('source_id', 8, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('untrusted_stack_trace', 16, 0, mojo_base.mojom.BigString16Spec, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_FrameSizeChanged_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec, 'blink.mojom.LocalFrameHost_DidInferColorScheme_Params', [
      mojo.internal.StructField('color_scheme', 0, 0, blink.mojom.PreferredColorSchemeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeSrcDoc_Params', [
      mojo.internal.StructField('child_frame_token', 0, 0, blink.mojom.FrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('srcdoc_value', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec, 'blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_Params', [
      mojo.internal.StructField('delegated_capability', 0, 0, blink.mojom.DelegatedCapabilitySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec, 'blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_Params', [
      mojo.internal.StructField('event_data', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('event_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('destinations', 16, 0, mojo.internal.Array(blink.mojom.ReportingDestinationSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('cross_origin_exposed', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec, 'blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_Params', [
      mojo.internal.StructField('destination_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('exempted_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec, 'blink.mojom.LocalFrameHost_SendLegacyTechEvent_Params', [
      mojo.internal.StructField('type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('code_location', 8, 0, blink.mojom.LegacyTechEventCodeLocationSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec, 'blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_Params', [
      mojo.internal.StructField('event_type', 16, 0, blink.mojom.AutomaticBeaconTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_data', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('destinations', 8, 0, mojo.internal.Array(blink.mojom.ReportingDestinationSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('once', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('cross_origin_exposed', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec, 'blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_Params', [
      mojo.internal.StructField('event_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec, 'blink.mojom.LocalFrameHost_CreateFencedFrame_Params', [
      mojo.internal.StructField('fenced_frame', 0, 0, mojo.internal.AssociatedInterfaceRequest(blink.mojom.FencedFrameOwnerHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('remote_frame_interfaces', 8, 0, blink.mojom.RemoteFrameInterfacesFromRendererSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_token', 16, 0, blink.mojom.RemoteFrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('devtools_frame_token', 24, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_ForwardFencedFrameEventAndUserActivationToEmbedder_ParamsSpec, 'blink.mojom.LocalFrameHost_ForwardFencedFrameEventAndUserActivationToEmbedder_Params', [
      mojo.internal.StructField('event_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_Params', [
      mojo.internal.StructField('view_transition_opt_in', 0, 0, blink.mojom.ViewTransitionSameOriginOptInSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_StartDragging_ParamsSpec, 'blink.mojom.LocalFrameHost_StartDragging_Params', [
      mojo.internal.StructField('drag_data', 0, 0, blink.mojom.DragDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('operations_allowed', 8, 0, blink.mojom.AllowedDragOperationsSpec, null, false, 0, undefined),
      mojo.internal.StructField('image', 16, 0, skia.mojom.BitmapN32Spec, null, true, 0, undefined),
      mojo.internal.StructField('cursor_offset_in_dip', 24, 0, gfx.mojom.Vector2dSpec, null, false, 0, undefined),
      mojo.internal.StructField('drag_obj_rect_in_dip', 32, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_info', 40, 0, blink.mojom.DragEventSourceInfoSpec, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec, 'blink.mojom.LocalFrameHost_IssueKeepAliveHandle_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.NavigationStateKeepAliveHandleRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec, 'blink.mojom.LocalFrameHost_NotifyStorageAccessed_Params', [
      mojo.internal.StructField('storageType', 0, 0, blink.mojom.StorageTypeAccessedSpec, null, false, 0, undefined),
      mojo.internal.StructField('blocked', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec, 'blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_Params', [
      mojo.internal.StructField('target_frame_token', 0, 0, blink.mojom.FrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('access_type', 16, 0, blink.mojom.WindowProxyAccessTypeSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec, 'blink.mojom.LocalFrameHost_NotifyDocumentInteractive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_SetStorageAccessApiStatus_ParamsSpec, 'blink.mojom.LocalFrameHost_SetStorageAccessApiStatus_Params', [
      mojo.internal.StructField('status', 0, 0, network.mojom.StorageAccessApiStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ParamsSpec, 'blink.mojom.LocalFrameHost_InitializeCrashReportStorage_Params', [
      mojo.internal.StructField('length', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_SetCrashReportStorageKey_ParamsSpec, 'blink.mojom.LocalFrameHost_SetCrashReportStorageKey_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_SetCrashReportStorageKey_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_SetCrashReportStorageKey_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_RemoveCrashReportStorageKey_ParamsSpec, 'blink.mojom.LocalFrameHost_RemoveCrashReportStorageKey_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrameHost_RemoveCrashReportStorageKey_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_RemoveCrashReportStorageKey_ResponseParams', [
    ],
    [[0, 8]]);

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
      blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParamsSpec,
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
      blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ResponseParamsSpec,
      []);
  }

  exemptUrlFromNetworkRevocationForTesting(exempted_url) {
    // Ordinal: 67
    return this.proxy.sendMessage(
      67,  // ordinal
      blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ParamsSpec,
      blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ResponseParamsSpec,
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
      blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ResponseParamsSpec,
      [length]);
  }

  setCrashReportStorageKey(key, value) {
    // Ordinal: 81
    return this.proxy.sendMessage(
      81,  // ordinal
      blink.mojom.LocalFrameHost_SetCrashReportStorageKey_ParamsSpec,
      blink.mojom.LocalFrameHost_SetCrashReportStorageKey_ResponseParamsSpec,
      [key, value]);
  }

  removeCrashReportStorageKey(key) {
    // Ordinal: 82
    return this.proxy.sendMessage(
      82,  // ordinal
      blink.mojom.LocalFrameHost_RemoveCrashReportStorageKey_ParamsSpec,
      blink.mojom.LocalFrameHost_RemoveCrashReportStorageKey_ResponseParamsSpec,
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

blink.mojom.LocalFrameHostPtr = blink.mojom.LocalFrameHostRemote;
blink.mojom.LocalFrameHostRequest = blink.mojom.LocalFrameHostPendingReceiver;


// Interface: NonAssociatedLocalFrameHost
mojo.internal.Struct(
    blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec, 'blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_Params', [
      mojo.internal.StructField('urls', 0, 0, mojo.internal.Array(url.mojom.UrlSpec, false), null, false, 0, undefined),
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
      mojo.internal.StructField('content', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('start_offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end_offset', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec, 'blink.mojom.LocalFrame_SendInterventionReport_Params', [
      mojo.internal.StructField('id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('child_frame_token', 0, 0, blink.mojom.FrameTokenSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec, 'blink.mojom.LocalFrame_SetFrameOwnerProperties_Params', [
      mojo.internal.StructField('properties', 0, 0, blink.mojom.FrameOwnerPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec, 'blink.mojom.LocalFrame_NotifyUserActivation_Params', [
      mojo.internal.StructField('notification_type', 0, 0, blink.mojom.UserActivationNotificationTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec, 'blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_Params', [
      mojo.internal.StructField('keyboard_rect', 0, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec, 'blink.mojom.LocalFrame_ShowInterestInElement_Params', [
      mojo.internal.StructField('nodeID', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec, 'blink.mojom.LocalFrame_AddMessageToConsole_Params', [
      mojo.internal.StructField('level', 8, 0, blink.mojom.ConsoleMessageLevelSpec, null, false, 0, undefined),
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('discard_duplicates', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

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
      mojo.internal.StructField('window_point', 0, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_SaveImageAt_ParamsSpec, 'blink.mojom.LocalFrame_SaveImageAt_Params', [
      mojo.internal.StructField('window_point', 0, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec, 'blink.mojom.LocalFrame_ReportBlinkFeatureUsage_Params', [
      mojo.internal.StructField('features', 0, 0, mojo.internal.Array(blink.mojom.WebFeatureSpec, false), null, false, 0, undefined),
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
      mojo.internal.StructField('proceed', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('before_unload_start_time', 0, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('before_unload_end_time', 8, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec, 'blink.mojom.LocalFrame_MediaPlayerActionAt_Params', [
      mojo.internal.StructField('location', 0, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
      mojo.internal.StructField('action', 8, 0, blink.mojom.MediaPlayerActionSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec, 'blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_Params', [
      mojo.internal.StructField('location', 0, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
      mojo.internal.StructField('max_size', 8, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('max_area', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParamsSpec, 'blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParams', [
      mojo.internal.StructField('bitmap', 0, 0, skia.mojom.BitmapN32Spec, null, true, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_PluginActionAt_ParamsSpec, 'blink.mojom.LocalFrame_PluginActionAt_Params', [
      mojo.internal.StructField('location', 0, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
      mojo.internal.StructField('action', 8, 0, blink.mojom.PluginActionTypeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec, 'blink.mojom.LocalFrame_AdvanceFocusInFrame_Params', [
      mojo.internal.StructField('focus_type', 8, 0, blink.mojom.FocusTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('source_frame_token', 0, 0, blink.mojom.RemoteFrameTokenSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec, 'blink.mojom.LocalFrame_AdvanceFocusForIME_Params', [
      mojo.internal.StructField('focus_type', 0, 0, blink.mojom.FocusTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec, 'blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_Params', [
      mojo.internal.StructField('violation', 0, 0, network.mojom.CSPViolationSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec, 'blink.mojom.LocalFrame_DidUpdateFramePolicy_Params', [
      mojo.internal.StructField('frame_policy', 0, 0, blink.mojom.FramePolicySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec, 'blink.mojom.LocalFrame_OnFrameVisibilityChanged_Params', [
      mojo.internal.StructField('visibility', 0, 0, blink.mojom.FrameVisibilitySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec, 'blink.mojom.LocalFrame_PostMessageEvent_Params', [
      mojo.internal.StructField('source_frame_token', 0, 0, blink.mojom.RemoteFrameTokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('source_origin', 8, 0, url.mojom.OriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('target_origin', 16, 0, url.mojom.OriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('message', 24, 0, blink.mojom.TransferableMessageSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec, 'blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_Params', [
      mojo.internal.StructField('object_name', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('method_name', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arguments', 16, 0, mojo_base.mojom.ListValueSpec, null, false, 0, undefined),
      mojo.internal.StructField('wants_result', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParamsSpec, 'blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.ValueSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequest_Params', [
      mojo.internal.StructField('javascript', 0, 0, mojo_base.mojom.BigString16Spec, null, false, 0, undefined),
      mojo.internal.StructField('wants_result', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.ValueSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_Params', [
      mojo.internal.StructField('javascript', 0, 0, mojo_base.mojom.BigString16Spec, null, false, 0, undefined),
      mojo.internal.StructField('has_user_gesture', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('resolve_promises', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('honor_js_content_settings', 12, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('world_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParams', [
      mojo.internal.StructField('result_type', 16, 0, blink.mojom.JavaScriptExecutionResultTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.ValueSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_Params', [
      mojo.internal.StructField('javascript', 0, 0, mojo_base.mojom.BigString16Spec, null, false, 0, undefined),
      mojo.internal.StructField('wants_result', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('world_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.ValueSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetCharacterIndexAtPoint_ParamsSpec, 'blink.mojom.LocalFrame_GetCharacterIndexAtPoint_Params', [
      mojo.internal.StructField('location', 0, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetFirstRectForRange_ParamsSpec, 'blink.mojom.LocalFrame_GetFirstRectForRange_Params', [
      mojo.internal.StructField('range', 0, 0, gfx.mojom.RangeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetStringForRange_ParamsSpec, 'blink.mojom.LocalFrame_GetStringForRange_Params', [
      mojo.internal.StructField('range', 0, 0, gfx.mojom.RangeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetStringForRange_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetStringForRange_ResponseParams', [
      mojo.internal.StructField('string', 0, 0, ui.mojom.AttributedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('baseline_point', 8, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec, 'blink.mojom.LocalFrame_BindReportingObserver_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.ReportingObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_UpdateOpener_ParamsSpec, 'blink.mojom.LocalFrame_UpdateOpener_Params', [
      mojo.internal.StructField('opener_frame_token', 0, 0, blink.mojom.FrameTokenSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec, 'blink.mojom.LocalFrame_GetSavableResourceLinks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParams', [
      mojo.internal.StructField('reply', 0, 0, blink.mojom.GetSavableResourceLinksReplySpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_MixedContentFound_ParamsSpec, 'blink.mojom.LocalFrame_MixedContentFound_Params', [
      mojo.internal.StructField('main_resource_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('mixed_content_url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('request_context', 32, 0, blink.mojom.RequestContextTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('was_allowed', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('url_before_redirects', 16, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('had_redirect', 36, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('source_location', 24, 0, network.mojom.SourceLocationSpec, null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec, 'blink.mojom.LocalFrame_BindDevToolsAgent_Params', [
      mojo.internal.StructField('agent_host', 0, 0, mojo.internal.AssociatedInterfaceProxy(blink.mojom.DevToolsAgentHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('agent', 8, 0, mojo.internal.AssociatedInterfaceRequest(blink.mojom.DevToolsAgentRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_ExtractSmartClipData_ParamsSpec, 'blink.mojom.LocalFrame_ExtractSmartClipData_Params', [
      mojo.internal.StructField('rect', 0, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_ExtractSmartClipData_ResponseParamsSpec, 'blink.mojom.LocalFrame_ExtractSmartClipData_ResponseParams', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('html', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('clip_rect', 16, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec, 'blink.mojom.LocalFrame_HandleRendererDebugURL_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec, 'blink.mojom.LocalFrame_GetCanonicalUrlForSharing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParams', [
      mojo.internal.StructField('canonical_url', 0, 0, url.mojom.UrlSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec, 'blink.mojom.LocalFrame_GetOpenGraphMetadata_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParams', [
      mojo.internal.StructField('metadata', 0, 0, blink.mojom.OpenGraphMetadataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec, 'blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_Params', [
      mojo.internal.StructField('entry_arrays', 0, 0, blink.mojom.NavigationApiHistoryEntryArraysSpec, null, false, 0, undefined),
      mojo.internal.StructField('restore_reason', 8, 0, blink.mojom.NavigationApiEntryRestoreReasonSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec, 'blink.mojom.LocalFrame_UpdatePrerenderURL_Params', [
      mojo.internal.StructField('matched_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('reason', 8, 0, blink.mojom.TraverseCancelledReasonSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec, 'blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('page_state', 8, 0, mojo_base.mojom.ByteStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_browser_initiated', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec, 'blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_Params', [
      mojo.internal.StructField('transition_token', 0, 0, blink.mojom.ViewTransitionTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('page_swap_event_params', 8, 0, blink.mojom.PageSwapEventParamsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParamsSpec, 'blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParams', [
      mojo.internal.StructField('view_transition_state', 0, 0, blink.mojom.ViewTransitionStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec, 'blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec, 'blink.mojom.LocalFrame_DispatchPageSwap_Params', [
      mojo.internal.StructField('page_swap_event_params', 0, 0, blink.mojom.PageSwapEventParamsSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec, 'blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_Params', [
      mojo.internal.StructField('subframe_token', 0, 0, blink.mojom.FrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('initial_url', 16, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('start_time', 24, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('redirect_time', 32, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('request_start', 40, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('response_start', 48, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('response_code', 104, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('mime_type', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('load_timing_info', 64, 0, network.mojom.LoadTimingInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('connection_info', 72, 0, network.mojom.ConnectionInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('alpn_negotiated_protocol', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_secure_transport', 108, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_validated', 108, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('normalized_server_timing', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('completion_status', 96, 0, network.mojom.URLLoaderCompletionStatusSpec, null, false, 0, undefined),
    ],
    [[0, 120]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec, 'blink.mojom.LocalFrame_GetScrollPosition_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalFrame_GetScrollPosition_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetScrollPosition_ResponseParams', [
      mojo.internal.StructField('scroll_position', 0, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
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
      blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParamsSpec,
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

blink.mojom.LocalFramePtr = blink.mojom.LocalFrameRemote;
blink.mojom.LocalFrameRequest = blink.mojom.LocalFramePendingReceiver;


// Interface: LocalMainFrame
mojo.internal.Struct(
    blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec, 'blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
      mojo.internal.StructField('rect', 8, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('full_page_size', 0, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('rect_in_root_frame', 0, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec, 'blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_Params', [
      mojo.internal.StructField('accessed_window', 0, 0, blink.mojom.FrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('coop_reporter_info', 16, 0, network.mojom.CrossOriginOpenerPolicyReporterParamsSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec, 'blink.mojom.LocalMainFrame_UpdateBrowserControlsState_Params', [
      mojo.internal.StructField('constraints', 0, 0, cc.mojom.BrowserControlsStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('current', 8, 0, cc.mojom.BrowserControlsStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('animate', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('offset_tag_modifications', 16, 0, cc.mojom.BrowserControlsOffsetTagModificationsSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec, 'blink.mojom.LocalMainFrame_SetV8CompileHints_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('confidence', 8, 0, blink.mojom.ConfidenceLevelSpec, null, false, 0, undefined),
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
      blink.mojom.LocalMainFrame_ClosePage_ResponseParamsSpec,
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
      blink.mojom.LocalMainFrame_Discard_ResponseParamsSpec,
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
      mojo.internal.StructField('pref_size', 0, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_TextAutosizerPageInfoChanged_ParamsSpec, 'blink.mojom.LocalMainFrameHost_TextAutosizerPageInfoChanged_Params', [
      mojo.internal.StructField('page_info', 0, 0, blink.mojom.TextAutosizerPageInfoSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('opener_frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('disposition', 16, 0, ui.mojom.WindowOpenDispositionSpec, null, false, 0, undefined),
      mojo.internal.StructField('window_features', 8, 0, blink.mojom.WindowFeaturesSpec, null, false, 0, undefined),
      mojo.internal.StructField('opened_by_user_gesture', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ResponseParamsSpec, 'blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec, 'blink.mojom.LocalMainFrameHost_SetWindowRect_Params', [
      mojo.internal.StructField('bounds', 0, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('regions', 0, 0, mojo.internal.Array(blink.mojom.DraggableRegionSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec, 'blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_Params', [
      mojo.internal.StructField('duration', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
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
      blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParamsSpec,
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
      blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ResponseParamsSpec,
      [opener_frame_token, disposition, window_features, opened_by_user_gesture]);
  }

  setWindowRect(bounds) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec,
      blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParamsSpec,
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

blink.mojom.LocalMainFrameHostPtr = blink.mojom.LocalMainFrameHostRemote;
blink.mojom.LocalMainFrameHostRequest = blink.mojom.LocalMainFrameHostPendingReceiver;

