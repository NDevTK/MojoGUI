// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/glic/host/glic.mojom
// Module: glic.mojom

// Module namespace
var glic = glic || {};
glic.mojom = glic.mojom || {};
var actor = actor || {};
var content_settings = content_settings || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var blink = blink || {};
var gfx = gfx || {};
var url = url || {};

glic.mojom.ProfileReadyStateSpec = { $: mojo.internal.Enum() };
glic.mojom.WebUiStateSpec = { $: mojo.internal.Enum() };
glic.mojom.MetricUserInputReactionTypeSpec = { $: mojo.internal.Enum() };
glic.mojom.PrepareForClientResultSpec = { $: mojo.internal.Enum() };
glic.mojom.PerformActionsErrorReasonSpec = { $: mojo.internal.Enum() };
glic.mojom.CreateTaskErrorReasonSpec = { $: mojo.internal.Enum() };
glic.mojom.ActorTaskStateSpec = { $: mojo.internal.Enum() };
glic.mojom.ActorTaskPauseReasonSpec = { $: mojo.internal.Enum() };
glic.mojom.ActorTaskStopReasonSpec = { $: mojo.internal.Enum() };
glic.mojom.CaptureScreenshotErrorReasonSpec = { $: mojo.internal.Enum() };
glic.mojom.PlatformSpec = { $: mojo.internal.Enum() };
glic.mojom.ScrollToErrorReasonSpec = { $: mojo.internal.Enum() };
glic.mojom.SkillSourceSpec = { $: mojo.internal.Enum() };
glic.mojom.PinTriggerSpec = { $: mojo.internal.Enum() };
glic.mojom.UnpinTriggerSpec = { $: mojo.internal.Enum() };
glic.mojom.CancelActionsResultSpec = { $: mojo.internal.Enum() };
glic.mojom.SwitchConversationErrorReasonSpec = { $: mojo.internal.Enum() };
glic.mojom.RegisterConversationErrorReasonSpec = { $: mojo.internal.Enum() };
glic.mojom.PanelStateKindSpec = { $: mojo.internal.Enum() };
glic.mojom.InvocationSourceSpec = { $: mojo.internal.Enum() };
glic.mojom.WebClientModeSpec = { $: mojo.internal.Enum() };
glic.mojom.WebClientModelSpec = { $: mojo.internal.Enum() };
glic.mojom.WebUseCounterSpec = { $: mojo.internal.Enum() };
glic.mojom.ResponseStopCauseSpec = { $: mojo.internal.Enum() };
glic.mojom.CaptureRegionErrorReasonSpec = { $: mojo.internal.Enum() };
glic.mojom.SettingsPageFieldSpec = { $: mojo.internal.Enum() };
glic.mojom.HostCapabilitySpec = { $: mojo.internal.Enum() };
glic.mojom.CurrentViewSpec = { $: mojo.internal.Enum() };
glic.mojom.GetContextResultSpec = { $: {} };
glic.mojom.CaptureScreenshotResultSpec = { $: {} };
glic.mojom.ScrollToSelectorSpec = { $: {} };
glic.mojom.AdditionalContextPartSpec = { $: {} };
glic.mojom.FocusedTabDataSpec = { $: {} };
glic.mojom.CapturedRegionSpec = { $: {} };
glic.mojom.ViewChangeRequestDetailsSpec = { $: {} };
glic.mojom.ProfileEnablementSpec = { $: {} };
glic.mojom.GetContextResultWithActionResultCodeSpec = { $: {} };
glic.mojom.UserProfileInfoSpec = { $: {} };
glic.mojom.WebClientInitialStateSpec = { $: {} };
glic.mojom.GetTabContextOptionsSpec = { $: {} };
glic.mojom.GetPinCandidatesOptionsSpec = { $: {} };
glic.mojom.ScrollToParamsSpec = { $: {} };
glic.mojom.ScrollToTextSelectorSpec = { $: {} };
glic.mojom.ScrollToTextFragmentSelectorSpec = { $: {} };
glic.mojom.ScrollToNodeSelectorSpec = { $: {} };
glic.mojom.SuggestionContentSpec = { $: {} };
glic.mojom.SkillPreviewSpec = { $: {} };
glic.mojom.SkillSpec = { $: {} };
glic.mojom.CreateSkillRequestSpec = { $: {} };
glic.mojom.UpdateSkillRequestSpec = { $: {} };
glic.mojom.ZeroStateSuggestionsSpec = { $: {} };
glic.mojom.ZeroStateSuggestionsV2Spec = { $: {} };
glic.mojom.ZeroStateSuggestionsOptionsSpec = { $: {} };
glic.mojom.PinCandidateSpec = { $: {} };
glic.mojom.PinTabsOptionsSpec = { $: {} };
glic.mojom.UnpinTabsOptionsSpec = { $: {} };
glic.mojom.ConversationInfoSpec = { $: {} };
glic.mojom.PanelOpeningDataSpec = { $: {} };
glic.mojom.PanelStateSpec = { $: {} };
glic.mojom.OnResponseStoppedDetailsSpec = { $: {} };
glic.mojom.OpenPanelInfoSpec = { $: {} };
glic.mojom.ContextDataSpec = { $: {} };
glic.mojom.AdditionalContextSpec = { $: {} };
glic.mojom.TabContextSpec = { $: {} };
glic.mojom.WebPageDataSpec = { $: {} };
glic.mojom.DocumentDataSpec = { $: {} };
glic.mojom.PdfDocumentDataSpec = { $: {} };
glic.mojom.TabDataSpec = { $: {} };
glic.mojom.NoFocusedTabDataSpec = { $: {} };
glic.mojom.AnnotatedPageDataSpec = { $: {} };
glic.mojom.ImageOriginAnnotationsSpec = { $: {} };
glic.mojom.JournalSpec = { $: {} };
glic.mojom.CaptureRegionResultSpec = { $: {} };
glic.mojom.ScreenshotSpec = { $: {} };
glic.mojom.OpenSettingsOptionsSpec = { $: {} };
glic.mojom.ViewChangeRequestActuationSpec = { $: {} };
glic.mojom.ViewChangeRequestConversationSpec = { $: {} };
glic.mojom.ViewChangeRequestSpec = { $: {} };
glic.mojom.ViewChangedNotificationSpec = { $: {} };
glic.mojom.PreloadPage = {};
glic.mojom.PreloadPage.$interfaceName = 'glic.mojom.PreloadPage';
glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec = { $: {} };
glic.mojom.Page = {};
glic.mojom.Page.$interfaceName = 'glic.mojom.Page';
glic.mojom.Page_IntentToShow_ParamsSpec = { $: {} };
glic.mojom.Page_SetProfileReadyState_ParamsSpec = { $: {} };
glic.mojom.Page_UpdatePageState_ParamsSpec = { $: {} };
glic.mojom.GlicPreloadHandler = {};
glic.mojom.GlicPreloadHandler.$interfaceName = 'glic.mojom.GlicPreloadHandler';
glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec = { $: {} };
glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec = { $: {} };
glic.mojom.GlicPreloadHandlerFactory = {};
glic.mojom.GlicPreloadHandlerFactory.$interfaceName = 'glic.mojom.GlicPreloadHandlerFactory';
glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec = { $: {} };
glic.mojom.PageHandlerFactory = {};
glic.mojom.PageHandlerFactory.$interfaceName = 'glic.mojom.PageHandlerFactory';
glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
glic.mojom.PageHandler = {};
glic.mojom.PageHandler.$interfaceName = 'glic.mojom.PageHandler';
glic.mojom.PageHandler_CreateWebClient_ParamsSpec = { $: {} };
glic.mojom.PageHandler_PrepareForClient_ParamsSpec = { $: {} };
glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec = { $: {} };
glic.mojom.PageHandler_WebviewCommitted_ParamsSpec = { $: {} };
glic.mojom.PageHandler_ClosePanel_ParamsSpec = { $: {} };
glic.mojom.PageHandler_ClosePanel_ResponseParamsSpec = { $: {} };
glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec = { $: {} };
glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec = { $: {} };
glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec = { $: {} };
glic.mojom.PageHandler_ResizeWidget_ParamsSpec = { $: {} };
glic.mojom.PageHandler_ResizeWidget_ResponseParamsSpec = { $: {} };
glic.mojom.PageHandler_EnableDragResize_ParamsSpec = { $: {} };
glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec = { $: {} };
glic.mojom.PageHandler_GetProfileEnablement_ParamsSpec = { $: {} };
glic.mojom.PageHandler_GetProfileEnablement_ResponseParamsSpec = { $: {} };
glic.mojom.PinCandidatesObserver = {};
glic.mojom.PinCandidatesObserver.$interfaceName = 'glic.mojom.PinCandidatesObserver';
glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler = {};
glic.mojom.WebClientHandler.$interfaceName = 'glic.mojom.WebClientHandler';
glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_CreateTab_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_ClosePanel_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_AttachPanel_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_DetachPanel_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_OnModeChange_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_GetContextForActorFromTab_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_GetContextForActorFromTab_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_PinTabs_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_CreateSkill_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_CreateSkill_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_UpdateSkill_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_UpdateSkill_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_GetSkill_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_GetSkill_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_CreateTask_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_PerformActions_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_CancelActions_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_CancelActions_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_StopActorTask_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_PauseActorTask_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_ResumeActorTask_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_ResumeActorTask_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_InterruptActorTask_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_UninterruptActorTask_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_CreateActorTab_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_CreateActorTab_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_ActivateTab_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_ResizeWidget_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetPanelDraggableAreas_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetPanelDraggableAreas_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetMicrophonePermissionState_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetLocationPermissionState_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetTabContextPermissionState_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetActuationOnWebSetting_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SyncCookies_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_LogBeginAsyncEvent_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_LogEndAsyncEvent_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_LogInstantEvent_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_JournalClear_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_JournalSnapshot_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_JournalSnapshot_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_JournalStart_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_JournalStop_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_JournalRecordFeedback_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_OnReaction_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_OnModelChanged_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_OnRecordUseCounter_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_ScrollTo_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_ScrollTo_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_DropScrollToHighlight_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_OnViewChanged_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec = { $: {} };
glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec = { $: {} };
glic.mojom.TabDataHandler = {};
glic.mojom.TabDataHandler.$interfaceName = 'glic.mojom.TabDataHandler';
glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient = {};
glic.mojom.WebClient.$interfaceName = 'glic.mojom.WebClient';
glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyPanelWasClosed_ResponseParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifySkillPreviewsChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifySkillPreviewChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifySkillToInvokeChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyActorTaskStateChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_RequestViewChange_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ParamsSpec = { $: {} };
glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec = { $: {} };
glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec = { $: {} };
glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec = { $: {} };
glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ParamsSpec = { $: {} };
glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec = { $: {} };
glic.mojom.WebClient_RequestToConfirmNavigation_ParamsSpec = { $: {} };
glic.mojom.WebClient_RequestToConfirmNavigation_ResponseParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec = { $: {} };
glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec = { $: {} };
glic.mojom.CaptureRegionObserver = {};
glic.mojom.CaptureRegionObserver.$interfaceName = 'glic.mojom.CaptureRegionObserver';
glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec = { $: {} };

// Enum: ProfileReadyState
glic.mojom.ProfileReadyState = {
  kUnknownError: 0,
  kSignInRequired: 1,
  kReady: 2,
  kIneligible: 3,
  kDisabledByAdmin: 4,
};

// Enum: WebUiState
glic.mojom.WebUiState = {
  kUninitialized: 0,
  kBeginLoad: 1,
  kShowLoading: 2,
  kHoldLoading: 3,
  kFinishLoading: 4,
  kError: 5,
  kOffline: 6,
  kUnavailable: 7,
  kReady: 8,
  kUnresponsive: 9,
  kSignIn: 10,
  kGuestError: 11,
  kDisabledByAdmin: 12,
};

// Enum: MetricUserInputReactionType
glic.mojom.MetricUserInputReactionType = {
  kUnknown: 0,
  kCanned: 1,
  kModel: 2,
};

// Enum: PrepareForClientResult
glic.mojom.PrepareForClientResult = {
  kSuccess: 0,
  kErrorResyncingCookies: 1,
  kRequiresSignIn: 2,
};

// Enum: PerformActionsErrorReason
glic.mojom.PerformActionsErrorReason = {
  kUnknown: 0,
  MinVersion: 0,
  MinVersion: 0,
};

// Enum: CreateTaskErrorReason
glic.mojom.CreateTaskErrorReason = {
  kUnknown: 0,
  kTaskSystemUnavailable: 1,
};

// Enum: ActorTaskState
glic.mojom.ActorTaskState = {
  kUnknown: 0,
  kIdle: 1,
  kActing: 2,
  kPaused: 3,
  kStopped: 4,
};

// Enum: ActorTaskPauseReason
glic.mojom.ActorTaskPauseReason = {
  kPausedByModel: 0,
  kPausedByUser: 1,
};

// Enum: ActorTaskStopReason
glic.mojom.ActorTaskStopReason = {
  kTaskComplete: 0,
  kStoppedByUser: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
};

// Enum: CaptureScreenshotErrorReason
glic.mojom.CaptureScreenshotErrorReason = {
  kUnknown: 0,
  kScreenCaptureRequestThrottled: 1,
  kUserCancelledScreenPickerDialog: 2,
};

// Enum: Platform
glic.mojom.Platform = {
  kUnknown: 0,
  kMacOS: 1,
  kWindows: 2,
  kLinux: 3,
  kChromeOS: 4,
};

// Enum: ScrollToErrorReason
glic.mojom.ScrollToErrorReason = {
  kNotSupported: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
};

// Enum: SkillSource
glic.mojom.SkillSource = {
  kUnknown: 0,
  kFirstParty: 1,
  kUserCreated: 2,
};

// Enum: PinTrigger
glic.mojom.PinTrigger = {
  kWebClientUnknown: 0,
  kCandidatesToggle: 1,
  kAtMention: 2,
  kActuation: 3,
};

// Enum: UnpinTrigger
glic.mojom.UnpinTrigger = {
  kWebClientUnknown: 0,
  kCandidatesToggle: 1,
  kChip: 2,
  kActuation: 3,
};

// Enum: CancelActionsResult
glic.mojom.CancelActionsResult = {
  kUnknown: 0,
  kSuccess: 1,
  kTaskNotFound: 2,
  kFailed: 3,
};

// Enum: SwitchConversationErrorReason
glic.mojom.SwitchConversationErrorReason = {
  kUnknown: 0,
};

// Enum: RegisterConversationErrorReason
glic.mojom.RegisterConversationErrorReason = {
  kUnknown: 0,
  kInstanceAlreadyHasConversationId: 1,
};

// Enum: PanelStateKind
glic.mojom.PanelStateKind = {
  kHidden: 0,
  kDetached: 1,
  kAttached: 2,
};

// Enum: InvocationSource
glic.mojom.InvocationSource = {
  kOsButton: 0,
  kOsButtonMenu: 1,
  kOsHotkey: 2,
  kTopChromeButton: 3,
  kFre: 4,
  kProfilePicker: 5,
  kNudge: 6,
  kThreeDotsMenu: 7,
  kUnsupported: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
};

// Enum: WebClientMode
glic.mojom.WebClientMode = {
  kUnknown: 2,
  kText: 0,
  kAudio: 1,
};

// Enum: WebClientModel
glic.mojom.WebClientModel = {
  kDefault: 0,
  kActor: 1,
};

// Enum: WebUseCounter
glic.mojom.WebUseCounter = {
  kDefault: 0,
  kSubmitPromptWithAutoMode: 1,
  kTaskInterruptedForUserConfirmation: 2,
  kTaskInterruptedForUserClarification: 3,
};

// Enum: ResponseStopCause
glic.mojom.ResponseStopCause = {
  kUnknown: 0,
  kUser: 1,
  kOther: 2,
};

// Enum: CaptureRegionErrorReason
glic.mojom.CaptureRegionErrorReason = {
  kUnknown: 0,
  kNoFocusableTab: 1,
};

// Enum: SettingsPageField
glic.mojom.SettingsPageField = {
  kNone: 0,
  kOsHotkey: 1,
  kOsEntrypointToggle: 2,
};

// Enum: HostCapability
glic.mojom.HostCapability = {
  kScrollToPdf: 0,
  kResetSizeAndLocationOnOpen: 1,
  kGetModelQualityClientId: 2,
  kMultiInstance: 3,
  kTrustFirstOnboardingArm1: 4,
  kTrustFirstOnboardingArm2: 5,
  kShareAdditionalImageContext: 6,
};

// Enum: CurrentView
glic.mojom.CurrentView = {
  kConversation: 0,
  kActuation: 1,
};

// Union: GetContextResult
mojo.internal.Union(
    glic.mojom.GetContextResultSpec, 'glic.mojom.GetContextResult', {
      'error_reason': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'tab_context': {
        'ordinal': 1,
        'type': glic.mojom.TabContextSpec.$,
        'nullable': false,
      },
    });

// Union: CaptureScreenshotResult
mojo.internal.Union(
    glic.mojom.CaptureScreenshotResultSpec, 'glic.mojom.CaptureScreenshotResult', {
      'error_reason': {
        'ordinal': 0,
        'type': glic.mojom.CaptureScreenshotErrorReasonSpec.$,
        'nullable': false,
      },
      'screenshot': {
        'ordinal': 1,
        'type': glic.mojom.ScreenshotSpec.$,
        'nullable': false,
      },
    });

// Union: ScrollToSelector
mojo.internal.Union(
    glic.mojom.ScrollToSelectorSpec, 'glic.mojom.ScrollToSelector', {
      'exact_text_selector': {
        'ordinal': 0,
        'type': glic.mojom.ScrollToTextSelectorSpec.$,
        'nullable': false,
      },
      'text_fragment_selector': {
        'ordinal': 1,
        'type': glic.mojom.ScrollToTextFragmentSelectorSpec.$,
        'nullable': false,
      },
      'node_selector': {
        'ordinal': 2,
        'type': glic.mojom.ScrollToNodeSelectorSpec.$,
        'nullable': false,
      },
    });

// Union: AdditionalContextPart
mojo.internal.Union(
    glic.mojom.AdditionalContextPartSpec, 'glic.mojom.AdditionalContextPart', {
      'data': {
        'ordinal': 0,
        'type': glic.mojom.ContextDataSpec.$,
        'nullable': false,
      },
      'screenshot': {
        'ordinal': 1,
        'type': glic.mojom.ScreenshotSpec.$,
        'nullable': false,
      },
      'web_page_data': {
        'ordinal': 2,
        'type': glic.mojom.WebPageDataSpec.$,
        'nullable': false,
      },
      'annotated_page_data': {
        'ordinal': 3,
        'type': glic.mojom.AnnotatedPageDataSpec.$,
        'nullable': false,
      },
      'pdf_document_data': {
        'ordinal': 4,
        'type': glic.mojom.PdfDocumentDataSpec.$,
        'nullable': false,
      },
      'tab_context': {
        'ordinal': 5,
        'type': glic.mojom.TabContextSpec.$,
        'nullable': false,
      },
      'region': {
        'ordinal': 6,
        'type': glic.mojom.CapturedRegionSpec.$,
        'nullable': false,
      },
    });

// Union: FocusedTabData
mojo.internal.Union(
    glic.mojom.FocusedTabDataSpec, 'glic.mojom.FocusedTabData', {
      'focused_tab': {
        'ordinal': 0,
        'type': glic.mojom.TabDataSpec.$,
        'nullable': false,
      },
      'no_focused_tab_data': {
        'ordinal': 1,
        'type': glic.mojom.NoFocusedTabDataSpec.$,
        'nullable': false,
      },
    });

// Union: CapturedRegion
mojo.internal.Union(
    glic.mojom.CapturedRegionSpec, 'glic.mojom.CapturedRegion', {
      'rect': {
        'ordinal': 0,
        'type': gfx.mojom.RectSpec.$,
        'nullable': false,
      },
    });

// Union: ViewChangeRequestDetails
mojo.internal.Union(
    glic.mojom.ViewChangeRequestDetailsSpec, 'glic.mojom.ViewChangeRequestDetails', {
      'actuation': {
        'ordinal': 0,
        'type': glic.mojom.ViewChangeRequestActuationSpec.$,
        'nullable': false,
      },
      'conversation': {
        'ordinal': 1,
        'type': glic.mojom.ViewChangeRequestConversationSpec.$,
        'nullable': false,
      },
    });

// Struct: ProfileEnablement
mojo.internal.Struct(
    glic.mojom.ProfileEnablementSpec, 'glic.mojom.ProfileEnablement', [
      mojo.internal.StructField('feature_disabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('not_regular_profile', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('not_rolled_out', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('primary_account_not_capable', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disallowed_by_chrome_policy', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disallowed_by_remote_admin', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disallowed_by_remote_other', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('not_consented', 0, 7, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GetContextResultWithActionResultCode
mojo.internal.Struct(
    glic.mojom.GetContextResultWithActionResultCodeSpec, 'glic.mojom.GetContextResultWithActionResultCode', [
      mojo.internal.StructField('get_context_result', 0, 0, glic.mojom.GetContextResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action_result_$value', 8, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'action_result_$flag', originalFieldName: 'action_result' }),
      mojo.internal.StructField('action_result_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'action_result_$value', originalFieldName: 'action_result' }),
    ],
    [[0, 24]]);

// Struct: UserProfileInfo
mojo.internal.Struct(
    glic.mojom.UserProfileInfoSpec, 'glic.mojom.UserProfileInfo', [
      mojo.internal.StructField('avatar_icon', 0, 0, skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('local_profile_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('email', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('given_name', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_managed', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: WebClientInitialState
mojo.internal.Struct(
    glic.mojom.WebClientInitialStateSpec, 'glic.mojom.WebClientInitialState', [
      mojo.internal.StructField('panel_state', 0, 0, glic.mojom.PanelStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('focused_tab_data', 8, 0, glic.mojom.FocusedTabDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hotkey', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('chrome_version', 24, 0, mojo_base.mojom.VersionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('platform', 32, 0, glic.mojom.PlatformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('host_capabilities', 40, 0, mojo.internal.Array(glic.mojom.HostCapabilitySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('skill_previews', 48, 0, mojo.internal.Array(glic.mojom.SkillPreviewSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('microphone_permission_enabled', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('location_permission_enabled', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('tab_context_permission_enabled', 56, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('os_location_permission_enabled', 56, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('can_attach', 56, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('panel_is_active', 56, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('browser_is_open', 56, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('instance_is_active', 56, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('always_detached_mode', 57, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_zero_state_suggestions', 57, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_act_in_focused_tab', 57, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_scroll_to', 57, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_default_tab_context_setting_feature', 57, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('default_tab_context_setting_enabled', 57, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_closed_captioning_feature', 57, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('closed_captioning_setting_enabled', 57, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_maybe_refresh_user_status', 58, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_multi_tab', 58, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_get_context_actor', 58, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_get_page_metadata', 58, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_api_activation_gating', 58, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_capture_region', 58, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_web_actuation_setting_feature', 58, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('actuation_on_web_setting_enabled', 58, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('can_act_on_web', 59, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_activate_tab', 59, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_get_tab_by_id', 59, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_open_password_manager_settings_page', 59, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_load_and_extract_content', 59, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_trust_first_onboarding', 59, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('onboarding_completed', 59, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_skills', 59, 7, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: GetTabContextOptions
mojo.internal.Struct(
    glic.mojom.GetTabContextOptionsSpec, 'glic.mojom.GetTabContextOptions', [
      mojo.internal.StructField('inner_text_bytes_limit', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_meta_tags', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pdf_size_limit', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('annotated_page_content_mode', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('include_inner_text', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('include_viewport_screenshot', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('include_annotated_page_content', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('include_pdf', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GetPinCandidatesOptions
mojo.internal.Struct(
    glic.mojom.GetPinCandidatesOptionsSpec, 'glic.mojom.GetPinCandidatesOptions', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('max_candidates', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ScrollToParams
mojo.internal.Struct(
    glic.mojom.ScrollToParamsSpec, 'glic.mojom.ScrollToParams', [
      mojo.internal.StructField('selector', 0, 0, glic.mojom.ScrollToSelectorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('highlight', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ScrollToTextSelector
mojo.internal.Struct(
    glic.mojom.ScrollToTextSelectorSpec, 'glic.mojom.ScrollToTextSelector', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('search_range_start_node_id_$value', 8, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'search_range_start_node_id_$flag', originalFieldName: 'search_range_start_node_id' }),
      mojo.internal.StructField('search_range_start_node_id_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'search_range_start_node_id_$value', originalFieldName: 'search_range_start_node_id' }),
    ],
    [[0, 24]]);

// Struct: ScrollToTextFragmentSelector
mojo.internal.Struct(
    glic.mojom.ScrollToTextFragmentSelectorSpec, 'glic.mojom.ScrollToTextFragmentSelector', [
      mojo.internal.StructField('text_start', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_end', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('search_range_start_node_id_$value', 16, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'search_range_start_node_id_$flag', originalFieldName: 'search_range_start_node_id' }),
      mojo.internal.StructField('search_range_start_node_id_$flag', 20, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'search_range_start_node_id_$value', originalFieldName: 'search_range_start_node_id' }),
    ],
    [[0, 32]]);

// Struct: ScrollToNodeSelector
mojo.internal.Struct(
    glic.mojom.ScrollToNodeSelectorSpec, 'glic.mojom.ScrollToNodeSelector', [
      mojo.internal.StructField('node_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SuggestionContent
mojo.internal.Struct(
    glic.mojom.SuggestionContentSpec, 'glic.mojom.SuggestionContent', [
      mojo.internal.StructField('suggestion', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SkillPreview
mojo.internal.Struct(
    glic.mojom.SkillPreviewSpec, 'glic.mojom.SkillPreview', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source', 24, 0, glic.mojom.SkillSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Skill
mojo.internal.Struct(
    glic.mojom.SkillSpec, 'glic.mojom.Skill', [
      mojo.internal.StructField('preview', 0, 0, glic.mojom.SkillPreviewSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('prompt', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CreateSkillRequest
mojo.internal.Struct(
    glic.mojom.CreateSkillRequestSpec, 'glic.mojom.CreateSkillRequest', [
      mojo.internal.StructField('prompt', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UpdateSkillRequest
mojo.internal.Struct(
    glic.mojom.UpdateSkillRequestSpec, 'glic.mojom.UpdateSkillRequest', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ZeroStateSuggestions
mojo.internal.Struct(
    glic.mojom.ZeroStateSuggestionsSpec, 'glic.mojom.ZeroStateSuggestions', [
      mojo.internal.StructField('suggestions', 0, 0, mojo.internal.Array(glic.mojom.SuggestionContentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('tab_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ZeroStateSuggestionsV2
mojo.internal.Struct(
    glic.mojom.ZeroStateSuggestionsV2Spec, 'glic.mojom.ZeroStateSuggestionsV2', [
      mojo.internal.StructField('suggestions', 0, 0, mojo.internal.Array(glic.mojom.SuggestionContentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('is_pending', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ZeroStateSuggestionsOptions
mojo.internal.Struct(
    glic.mojom.ZeroStateSuggestionsOptionsSpec, 'glic.mojom.ZeroStateSuggestionsOptions', [
      mojo.internal.StructField('supported_tools', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('is_first_run', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PinCandidate
mojo.internal.Struct(
    glic.mojom.PinCandidateSpec, 'glic.mojom.PinCandidate', [
      mojo.internal.StructField('tab_data', 0, 0, glic.mojom.TabDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PinTabsOptions
mojo.internal.Struct(
    glic.mojom.PinTabsOptionsSpec, 'glic.mojom.PinTabsOptions', [
      mojo.internal.StructField('pin_trigger', 0, 0, glic.mojom.PinTriggerSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UnpinTabsOptions
mojo.internal.Struct(
    glic.mojom.UnpinTabsOptionsSpec, 'glic.mojom.UnpinTabsOptions', [
      mojo.internal.StructField('unpin_trigger', 0, 0, glic.mojom.UnpinTriggerSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ConversationInfo
mojo.internal.Struct(
    glic.mojom.ConversationInfoSpec, 'glic.mojom.ConversationInfo', [
      mojo.internal.StructField('conversation_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('conversation_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('client_data', 16, 0, mojo_base.mojom.ByteStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PanelOpeningData
mojo.internal.Struct(
    glic.mojom.PanelOpeningDataSpec, 'glic.mojom.PanelOpeningData', [
      mojo.internal.StructField('panel_state', 0, 0, glic.mojom.PanelStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('invocation_source', 8, 0, glic.mojom.InvocationSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('prompt_suggestion', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('skill_to_invoke', 24, 0, glic.mojom.SkillSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('recently_active_conversations', 32, 0, mojo.internal.Array(glic.mojom.ConversationInfoSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('conversation_info', 40, 0, glic.mojom.ConversationInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: PanelState
mojo.internal.Struct(
    glic.mojom.PanelStateSpec, 'glic.mojom.PanelState', [
      mojo.internal.StructField('kind', 0, 0, glic.mojom.PanelStateKindSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('window_id_$value', 8, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'window_id_$flag', originalFieldName: 'window_id' }),
      mojo.internal.StructField('window_id_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'window_id_$value', originalFieldName: 'window_id' }),
    ],
    [[0, 24]]);

// Struct: OnResponseStoppedDetails
mojo.internal.Struct(
    glic.mojom.OnResponseStoppedDetailsSpec, 'glic.mojom.OnResponseStoppedDetails', [
      mojo.internal.StructField('cause', 0, 0, glic.mojom.ResponseStopCauseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: OpenPanelInfo
mojo.internal.Struct(
    glic.mojom.OpenPanelInfoSpec, 'glic.mojom.OpenPanelInfo', [
      mojo.internal.StructField('web_client_mode', 0, 0, glic.mojom.WebClientModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('panelSize', 8, 0, gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('resizeDuration', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('can_user_resize', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ContextData
mojo.internal.Struct(
    glic.mojom.ContextDataSpec, 'glic.mojom.ContextData', [
      mojo.internal.StructField('mime_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AdditionalContext
mojo.internal.Struct(
    glic.mojom.AdditionalContextSpec, 'glic.mojom.AdditionalContext', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('origin', 8, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('frameUrl', 16, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('parts', 24, 0, mojo.internal.Array(glic.mojom.AdditionalContextPartSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('tab_id_$value', 32, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'tab_id_$flag', originalFieldName: 'tab_id' }),
      mojo.internal.StructField('tab_id_$flag', 36, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'tab_id_$value', originalFieldName: 'tab_id' }),
    ],
    [[0, 48]]);

// Struct: TabContext
mojo.internal.Struct(
    glic.mojom.TabContextSpec, 'glic.mojom.TabContext', [
      mojo.internal.StructField('tab_data', 0, 0, glic.mojom.TabDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('web_page_data', 8, 0, glic.mojom.WebPageDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('viewport_screenshot', 16, 0, glic.mojom.ScreenshotSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('pdf_document_data', 24, 0, glic.mojom.PdfDocumentDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('annotated_page_data', 32, 0, glic.mojom.AnnotatedPageDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: WebPageData
mojo.internal.Struct(
    glic.mojom.WebPageDataSpec, 'glic.mojom.WebPageData', [
      mojo.internal.StructField('main_document', 0, 0, glic.mojom.DocumentDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DocumentData
mojo.internal.Struct(
    glic.mojom.DocumentDataSpec, 'glic.mojom.DocumentData', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('inner_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('inner_text_truncated', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PdfDocumentData
mojo.internal.Struct(
    glic.mojom.PdfDocumentDataSpec, 'glic.mojom.PdfDocumentData', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pdf_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('size_limit_exceeded', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TabData
mojo.internal.Struct(
    glic.mojom.TabDataSpec, 'glic.mojom.TabData', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('favicon', 16, 0, skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('favicon_url', 24, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('document_mime_type', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('window_id', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_observable_$flag', 48, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_observable_$value', originalFieldName: 'is_observable' }),
      mojo.internal.StructField('is_observable_$value', 48, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_observable_$flag', originalFieldName: 'is_observable' }),
      mojo.internal.StructField('is_media_active_$flag', 48, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_media_active_$value', originalFieldName: 'is_media_active' }),
      mojo.internal.StructField('is_media_active_$value', 48, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_media_active_$flag', originalFieldName: 'is_media_active' }),
      mojo.internal.StructField('is_tab_content_captured_$flag', 48, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_tab_content_captured_$value', originalFieldName: 'is_tab_content_captured' }),
      mojo.internal.StructField('is_tab_content_captured_$value', 48, 5, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_tab_content_captured_$flag', originalFieldName: 'is_tab_content_captured' }),
      mojo.internal.StructField('is_active_in_window_$flag', 48, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_active_in_window_$value', originalFieldName: 'is_active_in_window' }),
      mojo.internal.StructField('is_active_in_window_$value', 48, 7, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_active_in_window_$flag', originalFieldName: 'is_active_in_window' }),
      mojo.internal.StructField('is_window_active_$flag', 49, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_window_active_$value', originalFieldName: 'is_window_active' }),
      mojo.internal.StructField('is_window_active_$value', 49, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_window_active_$flag', originalFieldName: 'is_window_active' }),
    ],
    [[0, 64]]);

// Struct: NoFocusedTabData
mojo.internal.Struct(
    glic.mojom.NoFocusedTabDataSpec, 'glic.mojom.NoFocusedTabData', [
      mojo.internal.StructField('active_tab_data', 0, 0, glic.mojom.TabDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('no_focus_reason', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnnotatedPageData
mojo.internal.Struct(
    glic.mojom.AnnotatedPageDataSpec, 'glic.mojom.AnnotatedPageData', [
      mojo.internal.StructField('annotated_page_content', 0, 0, mojo_base.mojom.ProtoWrapperSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('metadata', 8, 0, blink.mojom.PageMetadataSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ImageOriginAnnotations
mojo.internal.Struct(
    glic.mojom.ImageOriginAnnotationsSpec, 'glic.mojom.ImageOriginAnnotations', [
    ],
    [[0, 8]]);

// Struct: Journal
mojo.internal.Struct(
    glic.mojom.JournalSpec, 'glic.mojom.Journal', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CaptureRegionResult
mojo.internal.Struct(
    glic.mojom.CaptureRegionResultSpec, 'glic.mojom.CaptureRegionResult', [
      mojo.internal.StructField('region', 0, 0, glic.mojom.CapturedRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Screenshot
mojo.internal.Struct(
    glic.mojom.ScreenshotSpec, 'glic.mojom.Screenshot', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('origin_annotations', 16, 0, glic.mojom.ImageOriginAnnotationsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('width_pixels', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height_pixels', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: OpenSettingsOptions
mojo.internal.Struct(
    glic.mojom.OpenSettingsOptionsSpec, 'glic.mojom.OpenSettingsOptions', [
      mojo.internal.StructField('highlightField', 0, 0, glic.mojom.SettingsPageFieldSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ViewChangeRequestActuation
mojo.internal.Struct(
    glic.mojom.ViewChangeRequestActuationSpec, 'glic.mojom.ViewChangeRequestActuation', [
    ],
    [[0, 8]]);

// Struct: ViewChangeRequestConversation
mojo.internal.Struct(
    glic.mojom.ViewChangeRequestConversationSpec, 'glic.mojom.ViewChangeRequestConversation', [
    ],
    [[0, 8]]);

// Struct: ViewChangeRequest
mojo.internal.Struct(
    glic.mojom.ViewChangeRequestSpec, 'glic.mojom.ViewChangeRequest', [
      mojo.internal.StructField('details', 0, 0, glic.mojom.ViewChangeRequestDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ViewChangedNotification
mojo.internal.Struct(
    glic.mojom.ViewChangedNotificationSpec, 'glic.mojom.ViewChangedNotification', [
      mojo.internal.StructField('current_view', 0, 0, glic.mojom.CurrentViewSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: PreloadPage
mojo.internal.Struct(
    glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec, 'glic.mojom.PreloadPage_SetProfileReadyState_Params', [
      mojo.internal.StructField('ready_state', 0, 0, glic.mojom.ProfileReadyStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

glic.mojom.PreloadPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.PreloadPageRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.PreloadPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.PreloadPagePendingReceiver,
      handle);
    this.$ = new glic.mojom.PreloadPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setProfileReadyState(ready_state) {
    return this.$.setProfileReadyState(ready_state);
  }
};

glic.mojom.PreloadPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PreloadPage', [
      { explicit: null },
    ]);
  }

  setProfileReadyState(ready_state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec,
      null,
      [ready_state],
      false);
  }

};

glic.mojom.PreloadPage.getRemote = function() {
  let remote = new glic.mojom.PreloadPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.PreloadPage',
    'context');
  return remote.$;
};

glic.mojom.PreloadPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PreloadPage', [
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
             decoder.decodeStructInline(glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec.$.structSpec);
          const result = this.impl.setProfileReadyState(params.ready_state);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

glic.mojom.PreloadPageReceiver = glic.mojom.PreloadPageReceiver;

glic.mojom.PreloadPagePtr = glic.mojom.PreloadPageRemote;
glic.mojom.PreloadPageRequest = glic.mojom.PreloadPagePendingReceiver;


// Interface: Page
mojo.internal.Struct(
    glic.mojom.Page_IntentToShow_ParamsSpec, 'glic.mojom.Page_IntentToShow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.Page_SetProfileReadyState_ParamsSpec, 'glic.mojom.Page_SetProfileReadyState_Params', [
      mojo.internal.StructField('ready_state', 0, 0, glic.mojom.ProfileReadyStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.Page_UpdatePageState_ParamsSpec, 'glic.mojom.Page_UpdatePageState_Params', [
      mojo.internal.StructField('panelStateKind', 0, 0, glic.mojom.PanelStateKindSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

glic.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.PagePendingReceiver,
      handle);
    this.$ = new glic.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  intentToShow() {
    return this.$.intentToShow();
  }
  setProfileReadyState(ready_state) {
    return this.$.setProfileReadyState(ready_state);
  }
  updatePageState(panelStateKind) {
    return this.$.updatePageState(panelStateKind);
  }
};

glic.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  intentToShow() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      glic.mojom.Page_IntentToShow_ParamsSpec,
      null,
      [],
      false);
  }

  setProfileReadyState(ready_state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      glic.mojom.Page_SetProfileReadyState_ParamsSpec,
      null,
      [ready_state],
      false);
  }

  updatePageState(panelStateKind) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      glic.mojom.Page_UpdatePageState_ParamsSpec,
      null,
      [panelStateKind],
      false);
  }

};

glic.mojom.Page.getRemote = function() {
  let remote = new glic.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.Page',
    'context');
  return remote.$;
};

glic.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
             decoder.decodeStructInline(glic.mojom.Page_IntentToShow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.Page_SetProfileReadyState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.Page_UpdatePageState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.Page_IntentToShow_ParamsSpec.$.structSpec);
          const result = this.impl.intentToShow();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.Page_SetProfileReadyState_ParamsSpec.$.structSpec);
          const result = this.impl.setProfileReadyState(params.ready_state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.Page_UpdatePageState_ParamsSpec.$.structSpec);
          const result = this.impl.updatePageState(params.panelStateKind);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

glic.mojom.PageReceiver = glic.mojom.PageReceiver;

glic.mojom.PagePtr = glic.mojom.PageRemote;
glic.mojom.PageRequest = glic.mojom.PagePendingReceiver;


// Interface: GlicPreloadHandler
mojo.internal.Struct(
    glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec, 'glic.mojom.GlicPreloadHandler_PrepareForClient_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec, 'glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, glic.mojom.PrepareForClientResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

glic.mojom.GlicPreloadHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.GlicPreloadHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.GlicPreloadHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.GlicPreloadHandlerPendingReceiver,
      handle);
    this.$ = new glic.mojom.GlicPreloadHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  prepareForClient() {
    return this.$.prepareForClient();
  }
};

glic.mojom.GlicPreloadHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GlicPreloadHandler', [
      { explicit: null },
    ]);
  }

  prepareForClient() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec,
      glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec,
      [],
      false);
  }

};

glic.mojom.GlicPreloadHandler.getRemote = function() {
  let remote = new glic.mojom.GlicPreloadHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.GlicPreloadHandler',
    'context');
  return remote.$;
};

glic.mojom.GlicPreloadHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GlicPreloadHandler', [
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
             decoder.decodeStructInline(glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec.$.structSpec);
          const result = this.impl.prepareForClient();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec);
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

glic.mojom.GlicPreloadHandlerReceiver = glic.mojom.GlicPreloadHandlerReceiver;

glic.mojom.GlicPreloadHandlerPtr = glic.mojom.GlicPreloadHandlerRemote;
glic.mojom.GlicPreloadHandlerRequest = glic.mojom.GlicPreloadHandlerPendingReceiver;


// Interface: GlicPreloadHandlerFactory
mojo.internal.Struct(
    glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec, 'glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(glic.mojom.GlicPreloadHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(glic.mojom.PreloadPageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

glic.mojom.GlicPreloadHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.GlicPreloadHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.GlicPreloadHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.GlicPreloadHandlerFactoryPendingReceiver,
      handle);
    this.$ = new glic.mojom.GlicPreloadHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPreloadHandler(receiver, page) {
    return this.$.createPreloadHandler(receiver, page);
  }
};

glic.mojom.GlicPreloadHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GlicPreloadHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPreloadHandler(receiver, page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec,
      null,
      [receiver, page],
      false);
  }

};

glic.mojom.GlicPreloadHandlerFactory.getRemote = function() {
  let remote = new glic.mojom.GlicPreloadHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.GlicPreloadHandlerFactory',
    'context');
  return remote.$;
};

glic.mojom.GlicPreloadHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GlicPreloadHandlerFactory', [
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
             decoder.decodeStructInline(glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPreloadHandler(params.receiver, params.page);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

glic.mojom.GlicPreloadHandlerFactoryReceiver = glic.mojom.GlicPreloadHandlerFactoryReceiver;

glic.mojom.GlicPreloadHandlerFactoryPtr = glic.mojom.GlicPreloadHandlerFactoryRemote;
glic.mojom.GlicPreloadHandlerFactoryRequest = glic.mojom.GlicPreloadHandlerFactoryPendingReceiver;


// Interface: PageHandlerFactory
mojo.internal.Struct(
    glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'glic.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(glic.mojom.PageHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(glic.mojom.PageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

glic.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new glic.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(receiver, page) {
    return this.$.createPageHandler(receiver, page);
  }
};

glic.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(receiver, page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [receiver, page],
      false);
  }

};

glic.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new glic.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

glic.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
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
             decoder.decodeStructInline(glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.receiver, params.page);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

glic.mojom.PageHandlerFactoryReceiver = glic.mojom.PageHandlerFactoryReceiver;

glic.mojom.PageHandlerFactoryPtr = glic.mojom.PageHandlerFactoryRemote;
glic.mojom.PageHandlerFactoryRequest = glic.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    glic.mojom.PageHandler_CreateWebClient_ParamsSpec, 'glic.mojom.PageHandler_CreateWebClient_Params', [
      mojo.internal.StructField('web_client_receiver', 0, 0, mojo.internal.InterfaceRequest(glic.mojom.WebClientHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.PageHandler_PrepareForClient_ParamsSpec, 'glic.mojom.PageHandler_PrepareForClient_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec, 'glic.mojom.PageHandler_PrepareForClient_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, glic.mojom.PrepareForClientResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.PageHandler_WebviewCommitted_ParamsSpec, 'glic.mojom.PageHandler_WebviewCommitted_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.PageHandler_ClosePanel_ParamsSpec, 'glic.mojom.PageHandler_ClosePanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.PageHandler_ClosePanel_ResponseParamsSpec, 'glic.mojom.PageHandler_ClosePanel_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec, 'glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec, 'glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec, 'glic.mojom.PageHandler_SignInAndClosePanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.PageHandler_ResizeWidget_ParamsSpec, 'glic.mojom.PageHandler_ResizeWidget_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('duration', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.PageHandler_ResizeWidget_ResponseParamsSpec, 'glic.mojom.PageHandler_ResizeWidget_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.PageHandler_EnableDragResize_ParamsSpec, 'glic.mojom.PageHandler_EnableDragResize_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec, 'glic.mojom.PageHandler_WebUiStateChanged_Params', [
      mojo.internal.StructField('new_state', 0, 0, glic.mojom.WebUiStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.PageHandler_GetProfileEnablement_ParamsSpec, 'glic.mojom.PageHandler_GetProfileEnablement_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.PageHandler_GetProfileEnablement_ResponseParamsSpec, 'glic.mojom.PageHandler_GetProfileEnablement_ResponseParams', [
      mojo.internal.StructField('enablement', 0, 0, glic.mojom.ProfileEnablementSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

glic.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new glic.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createWebClient(web_client_receiver) {
    return this.$.createWebClient(web_client_receiver);
  }
  prepareForClient() {
    return this.$.prepareForClient();
  }
  webviewCommitted(url) {
    return this.$.webviewCommitted(url);
  }
  closePanel() {
    return this.$.closePanel();
  }
  openProfilePickerAndClosePanel() {
    return this.$.openProfilePickerAndClosePanel();
  }
  openDisabledByAdminLinkAndClosePanel() {
    return this.$.openDisabledByAdminLinkAndClosePanel();
  }
  signInAndClosePanel() {
    return this.$.signInAndClosePanel();
  }
  resizeWidget(size, duration) {
    return this.$.resizeWidget(size, duration);
  }
  enableDragResize(enabled) {
    return this.$.enableDragResize(enabled);
  }
  webUiStateChanged(new_state) {
    return this.$.webUiStateChanged(new_state);
  }
  getProfileEnablement() {
    return this.$.getProfileEnablement();
  }
};

glic.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
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

  createWebClient(web_client_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      glic.mojom.PageHandler_CreateWebClient_ParamsSpec,
      null,
      [web_client_receiver],
      false);
  }

  prepareForClient() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      glic.mojom.PageHandler_PrepareForClient_ParamsSpec,
      glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec,
      [],
      false);
  }

  webviewCommitted(url) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      glic.mojom.PageHandler_WebviewCommitted_ParamsSpec,
      null,
      [url],
      false);
  }

  closePanel() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      glic.mojom.PageHandler_ClosePanel_ParamsSpec,
      glic.mojom.PageHandler_ClosePanel_ResponseParamsSpec,
      [],
      false);
  }

  openProfilePickerAndClosePanel() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec,
      null,
      [],
      false);
  }

  openDisabledByAdminLinkAndClosePanel() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec,
      null,
      [],
      false);
  }

  signInAndClosePanel() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec,
      null,
      [],
      false);
  }

  resizeWidget(size, duration) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      glic.mojom.PageHandler_ResizeWidget_ParamsSpec,
      glic.mojom.PageHandler_ResizeWidget_ResponseParamsSpec,
      [size, duration],
      false);
  }

  enableDragResize(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      glic.mojom.PageHandler_EnableDragResize_ParamsSpec,
      null,
      [enabled],
      false);
  }

  webUiStateChanged(new_state) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec,
      null,
      [new_state],
      false);
  }

  getProfileEnablement() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      glic.mojom.PageHandler_GetProfileEnablement_ParamsSpec,
      glic.mojom.PageHandler_GetProfileEnablement_ResponseParamsSpec,
      [],
      false);
  }

};

glic.mojom.PageHandler.getRemote = function() {
  let remote = new glic.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.PageHandler',
    'context');
  return remote.$;
};

glic.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(glic.mojom.PageHandler_CreateWebClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_PrepareForClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_WebviewCommitted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_ClosePanel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_ResizeWidget_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_EnableDragResize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_GetProfileEnablement_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandler_CreateWebClient_ParamsSpec.$.structSpec);
          const result = this.impl.createWebClient(params.web_client_receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandler_PrepareForClient_ParamsSpec.$.structSpec);
          const result = this.impl.prepareForClient();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandler_WebviewCommitted_ParamsSpec.$.structSpec);
          const result = this.impl.webviewCommitted(params.url);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandler_ClosePanel_ParamsSpec.$.structSpec);
          const result = this.impl.closePanel();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.PageHandler_ClosePanel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec.$.structSpec);
          const result = this.impl.openProfilePickerAndClosePanel();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec.$.structSpec);
          const result = this.impl.openDisabledByAdminLinkAndClosePanel();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec.$.structSpec);
          const result = this.impl.signInAndClosePanel();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandler_ResizeWidget_ParamsSpec.$.structSpec);
          const result = this.impl.resizeWidget(params.size, params.duration);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.PageHandler_ResizeWidget_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandler_EnableDragResize_ParamsSpec.$.structSpec);
          const result = this.impl.enableDragResize(params.enabled);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.webUiStateChanged(params.new_state);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandler_GetProfileEnablement_ParamsSpec.$.structSpec);
          const result = this.impl.getProfileEnablement();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.PageHandler_GetProfileEnablement_ResponseParamsSpec);
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

glic.mojom.PageHandlerReceiver = glic.mojom.PageHandlerReceiver;

glic.mojom.PageHandlerPtr = glic.mojom.PageHandlerRemote;
glic.mojom.PageHandlerRequest = glic.mojom.PageHandlerPendingReceiver;


// Interface: PinCandidatesObserver
mojo.internal.Struct(
    glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec, 'glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_Params', [
      mojo.internal.StructField('candidates', 0, 0, mojo.internal.Array(glic.mojom.PinCandidateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

glic.mojom.PinCandidatesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.PinCandidatesObserverRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.PinCandidatesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.PinCandidatesObserverPendingReceiver,
      handle);
    this.$ = new glic.mojom.PinCandidatesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPinCandidatesChanged(candidates) {
    return this.$.onPinCandidatesChanged(candidates);
  }
};

glic.mojom.PinCandidatesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PinCandidatesObserver', [
      { explicit: null },
    ]);
  }

  onPinCandidatesChanged(candidates) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec,
      null,
      [candidates],
      false);
  }

};

glic.mojom.PinCandidatesObserver.getRemote = function() {
  let remote = new glic.mojom.PinCandidatesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.PinCandidatesObserver',
    'context');
  return remote.$;
};

glic.mojom.PinCandidatesObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PinCandidatesObserver', [
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
             decoder.decodeStructInline(glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onPinCandidatesChanged(params.candidates);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

glic.mojom.PinCandidatesObserverReceiver = glic.mojom.PinCandidatesObserverReceiver;

glic.mojom.PinCandidatesObserverPtr = glic.mojom.PinCandidatesObserverRemote;
glic.mojom.PinCandidatesObserverRequest = glic.mojom.PinCandidatesObserverPendingReceiver;


// Interface: WebClientHandler
mojo.internal.Struct(
    glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec, 'glic.mojom.WebClientHandler_WebClientCreated_Params', [
      mojo.internal.StructField('web_client', 0, 0, mojo.internal.InterfaceProxy(glic.mojom.WebClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec, 'glic.mojom.WebClientHandler_WebClientCreated_ResponseParams', [
      mojo.internal.StructField('initial_state', 0, 0, glic.mojom.WebClientInitialStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec, 'glic.mojom.WebClientHandler_WebClientInitialized_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec, 'glic.mojom.WebClientHandler_WebClientInitializeFailed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_CreateTab_ParamsSpec, 'glic.mojom.WebClientHandler_CreateTab_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('window_id_$value', 8, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'window_id_$flag', originalFieldName: 'window_id' }),
      mojo.internal.StructField('open_in_background', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('window_id_$flag', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'window_id_$value', originalFieldName: 'window_id' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec, 'glic.mojom.WebClientHandler_CreateTab_ResponseParams', [
      mojo.internal.StructField('tab_data', 0, 0, glic.mojom.TabDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec, 'glic.mojom.WebClientHandler_OpenLinkInPopup_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('popup_width', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('popup_height', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec, 'glic.mojom.WebClientHandler_OpenGlicSettingsPage_Params', [
      mojo.internal.StructField('options', 0, 0, glic.mojom.OpenSettingsOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec, 'glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_ClosePanel_ParamsSpec, 'glic.mojom.WebClientHandler_ClosePanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec, 'glic.mojom.WebClientHandler_ClosePanelAndShutdown_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_AttachPanel_ParamsSpec, 'glic.mojom.WebClientHandler_AttachPanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_DetachPanel_ParamsSpec, 'glic.mojom.WebClientHandler_DetachPanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_OnModeChange_ParamsSpec, 'glic.mojom.WebClientHandler_OnModeChange_Params', [
      mojo.internal.StructField('new_mode', 0, 0, glic.mojom.WebClientModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec, 'glic.mojom.WebClientHandler_ShowProfilePicker_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec, 'glic.mojom.WebClientHandler_GetModelQualityClientId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParams', [
      mojo.internal.StructField('model_quality_client_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec, 'glic.mojom.WebClientHandler_GetContextFromFocusedTab_Params', [
      mojo.internal.StructField('options', 0, 0, glic.mojom.GetTabContextOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, glic.mojom.GetContextResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec, 'glic.mojom.WebClientHandler_GetContextFromTab_Params', [
      mojo.internal.StructField('options', 0, 0, glic.mojom.GetTabContextOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetContextFromTab_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, glic.mojom.GetContextResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_GetContextForActorFromTab_ParamsSpec, 'glic.mojom.WebClientHandler_GetContextForActorFromTab_Params', [
      mojo.internal.StructField('options', 0, 0, glic.mojom.GetTabContextOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_GetContextForActorFromTab_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetContextForActorFromTab_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, glic.mojom.GetContextResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec, 'glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_Params', [
      mojo.internal.StructField('requested_max', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParams', [
      mojo.internal.StructField('effective_max', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_PinTabs_ParamsSpec, 'glic.mojom.WebClientHandler_PinTabs_Params', [
      mojo.internal.StructField('tab_ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, glic.mojom.PinTabsOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec, 'glic.mojom.WebClientHandler_PinTabs_ResponseParams', [
      mojo.internal.StructField('pinned_all', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec, 'glic.mojom.WebClientHandler_UnpinTabs_Params', [
      mojo.internal.StructField('tab_ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, glic.mojom.UnpinTabsOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec, 'glic.mojom.WebClientHandler_UnpinTabs_ResponseParams', [
      mojo.internal.StructField('unpinned_all', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec, 'glic.mojom.WebClientHandler_UnpinAllTabs_Params', [
      mojo.internal.StructField('options', 0, 0, glic.mojom.UnpinTabsOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_CreateSkill_ParamsSpec, 'glic.mojom.WebClientHandler_CreateSkill_Params', [
      mojo.internal.StructField('request', 0, 0, glic.mojom.CreateSkillRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_CreateSkill_ResponseParamsSpec, 'glic.mojom.WebClientHandler_CreateSkill_ResponseParams', [
      mojo.internal.StructField('modal_opened', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_UpdateSkill_ParamsSpec, 'glic.mojom.WebClientHandler_UpdateSkill_Params', [
      mojo.internal.StructField('request', 0, 0, glic.mojom.UpdateSkillRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_UpdateSkill_ResponseParamsSpec, 'glic.mojom.WebClientHandler_UpdateSkill_ResponseParams', [
      mojo.internal.StructField('modal_opened', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_GetSkill_ParamsSpec, 'glic.mojom.WebClientHandler_GetSkill_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_GetSkill_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetSkill_ResponseParams', [
      mojo.internal.StructField('skill', 0, 0, glic.mojom.SkillSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec, 'glic.mojom.WebClientHandler_SubscribeToPinCandidates_Params', [
      mojo.internal.StructField('options', 0, 0, glic.mojom.GetPinCandidatesOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(glic.mojom.PinCandidatesObserverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_CreateTask_ParamsSpec, 'glic.mojom.WebClientHandler_CreateTask_Params', [
      mojo.internal.StructField('task_options', 0, 0, actor.webui.mojom.TaskOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_PerformActions_ParamsSpec, 'glic.mojom.WebClientHandler_PerformActions_Params', [
      mojo.internal.StructField('actions_proto', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_CancelActions_ParamsSpec, 'glic.mojom.WebClientHandler_CancelActions_Params', [
      mojo.internal.StructField('task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_CancelActions_ResponseParamsSpec, 'glic.mojom.WebClientHandler_CancelActions_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, glic.mojom.CancelActionsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_StopActorTask_ParamsSpec, 'glic.mojom.WebClientHandler_StopActorTask_Params', [
      mojo.internal.StructField('stop_reason', 0, 0, glic.mojom.ActorTaskStopReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('task_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_PauseActorTask_ParamsSpec, 'glic.mojom.WebClientHandler_PauseActorTask_Params', [
      mojo.internal.StructField('pause_reason', 0, 0, glic.mojom.ActorTaskPauseReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('task_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('tab_id_$value', 12, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'tab_id_$flag', originalFieldName: 'tab_id' }),
      mojo.internal.StructField('tab_id_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'tab_id_$value', originalFieldName: 'tab_id' }),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_ResumeActorTask_ParamsSpec, 'glic.mojom.WebClientHandler_ResumeActorTask_Params', [
      mojo.internal.StructField('context_options', 0, 0, glic.mojom.GetTabContextOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('task_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_ResumeActorTask_ResponseParamsSpec, 'glic.mojom.WebClientHandler_ResumeActorTask_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, glic.mojom.GetContextResultWithActionResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_InterruptActorTask_ParamsSpec, 'glic.mojom.WebClientHandler_InterruptActorTask_Params', [
      mojo.internal.StructField('task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_UninterruptActorTask_ParamsSpec, 'glic.mojom.WebClientHandler_UninterruptActorTask_Params', [
      mojo.internal.StructField('task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_CreateActorTab_ParamsSpec, 'glic.mojom.WebClientHandler_CreateActorTab_Params', [
      mojo.internal.StructField('task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('initiator_tab_id_$value', 4, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'initiator_tab_id_$flag', originalFieldName: 'initiator_tab_id' }),
      mojo.internal.StructField('initiator_window_id_$value', 8, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'initiator_window_id_$flag', originalFieldName: 'initiator_window_id' }),
      mojo.internal.StructField('open_in_background', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('initiator_tab_id_$flag', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'initiator_tab_id_$value', originalFieldName: 'initiator_tab_id' }),
      mojo.internal.StructField('initiator_window_id_$flag', 12, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'initiator_window_id_$value', originalFieldName: 'initiator_window_id' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_CreateActorTab_ResponseParamsSpec, 'glic.mojom.WebClientHandler_CreateActorTab_ResponseParams', [
      mojo.internal.StructField('tab_data', 0, 0, glic.mojom.TabDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_ActivateTab_ParamsSpec, 'glic.mojom.WebClientHandler_ActivateTab_Params', [
      mojo.internal.StructField('task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec, 'glic.mojom.WebClientHandler_ResizeWidget_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('duration', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_ResizeWidget_ResponseParamsSpec, 'glic.mojom.WebClientHandler_ResizeWidget_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec, 'glic.mojom.WebClientHandler_CaptureScreenshot_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec, 'glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, glic.mojom.CaptureScreenshotResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec, 'glic.mojom.WebClientHandler_CaptureRegion_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(glic.mojom.CaptureRegionObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec, 'glic.mojom.WebClientHandler_SetAudioDucking_Params', [
      mojo.internal.StructField('enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetAudioDucking_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetPanelDraggableAreas_ParamsSpec, 'glic.mojom.WebClientHandler_SetPanelDraggableAreas_Params', [
      mojo.internal.StructField('draggable_areas', 0, 0, mojo.internal.Array(gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetPanelDraggableAreas_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetPanelDraggableAreas_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec, 'glic.mojom.WebClientHandler_SetMinimumPanelSize_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec, 'glic.mojom.WebClientHandler_SetMicrophonePermissionState_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetMicrophonePermissionState_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetMicrophonePermissionState_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec, 'glic.mojom.WebClientHandler_SetLocationPermissionState_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetLocationPermissionState_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetLocationPermissionState_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec, 'glic.mojom.WebClientHandler_SetTabContextPermissionState_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetTabContextPermissionState_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetTabContextPermissionState_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec, 'glic.mojom.WebClientHandler_SetClosedCaptioningSetting_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec, 'glic.mojom.WebClientHandler_SetActuationOnWebSetting_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetActuationOnWebSetting_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetActuationOnWebSetting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec, 'glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec, 'glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParams', [
      mojo.internal.StructField('is_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec, 'glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec, 'glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParams', [
      mojo.internal.StructField('is_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec, 'glic.mojom.WebClientHandler_SetContextAccessIndicator_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec, 'glic.mojom.WebClientHandler_GetUserProfileInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParams', [
      mojo.internal.StructField('profile_info', 0, 0, glic.mojom.UserProfileInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SyncCookies_ParamsSpec, 'glic.mojom.WebClientHandler_SyncCookies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SyncCookies_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_LogBeginAsyncEvent_ParamsSpec, 'glic.mojom.WebClientHandler_LogBeginAsyncEvent_Params', [
      mojo.internal.StructField('event_async_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('event', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('details', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('task_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_LogEndAsyncEvent_ParamsSpec, 'glic.mojom.WebClientHandler_LogEndAsyncEvent_Params', [
      mojo.internal.StructField('event_async_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('details', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_LogInstantEvent_ParamsSpec, 'glic.mojom.WebClientHandler_LogInstantEvent_Params', [
      mojo.internal.StructField('event', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('details', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('task_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_JournalClear_ParamsSpec, 'glic.mojom.WebClientHandler_JournalClear_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_JournalSnapshot_ParamsSpec, 'glic.mojom.WebClientHandler_JournalSnapshot_Params', [
      mojo.internal.StructField('clear_journal', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_JournalSnapshot_ResponseParamsSpec, 'glic.mojom.WebClientHandler_JournalSnapshot_ResponseParams', [
      mojo.internal.StructField('journal', 0, 0, glic.mojom.JournalSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_JournalStart_ParamsSpec, 'glic.mojom.WebClientHandler_JournalStart_Params', [
      mojo.internal.StructField('max_bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('capture_screenshots', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_JournalStop_ParamsSpec, 'glic.mojom.WebClientHandler_JournalStop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_JournalRecordFeedback_ParamsSpec, 'glic.mojom.WebClientHandler_JournalRecordFeedback_Params', [
      mojo.internal.StructField('reason', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('positive', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec, 'glic.mojom.WebClientHandler_OnUserInputSubmitted_Params', [
      mojo.internal.StructField('mode', 0, 0, glic.mojom.WebClientModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec, 'glic.mojom.WebClientHandler_OnContextUploadStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec, 'glic.mojom.WebClientHandler_OnContextUploadCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_OnReaction_ParamsSpec, 'glic.mojom.WebClientHandler_OnReaction_Params', [
      mojo.internal.StructField('reactionType', 0, 0, glic.mojom.MetricUserInputReactionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec, 'glic.mojom.WebClientHandler_OnResponseStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec, 'glic.mojom.WebClientHandler_OnResponseStopped_Params', [
      mojo.internal.StructField('details', 0, 0, glic.mojom.OnResponseStoppedDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec, 'glic.mojom.WebClientHandler_OnSessionTerminated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec, 'glic.mojom.WebClientHandler_OnTurnCompleted_Params', [
      mojo.internal.StructField('model', 0, 0, glic.mojom.WebClientModelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('duration', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_OnModelChanged_ParamsSpec, 'glic.mojom.WebClientHandler_OnModelChanged_Params', [
      mojo.internal.StructField('model', 0, 0, glic.mojom.WebClientModelSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_OnRecordUseCounter_ParamsSpec, 'glic.mojom.WebClientHandler_OnRecordUseCounter_Params', [
      mojo.internal.StructField('counter', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec, 'glic.mojom.WebClientHandler_OnResponseRated_Params', [
      mojo.internal.StructField('positive', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec, 'glic.mojom.WebClientHandler_OnClosedCaptionsShown_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_ScrollTo_ParamsSpec, 'glic.mojom.WebClientHandler_ScrollTo_Params', [
      mojo.internal.StructField('params', 0, 0, glic.mojom.ScrollToParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_ScrollTo_ResponseParamsSpec, 'glic.mojom.WebClientHandler_ScrollTo_ResponseParams', [
      mojo.internal.StructField('error_reason', 0, 0, glic.mojom.ScrollToErrorReasonSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_DropScrollToHighlight_ParamsSpec, 'glic.mojom.WebClientHandler_DropScrollToHighlight_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec, 'glic.mojom.WebClientHandler_SetSyntheticExperimentState_Params', [
      mojo.internal.StructField('trial_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('group_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec, 'glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_Params', [
      mojo.internal.StructField('type', 0, 0, content_settings.mojom.ContentSettingsTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec, 'glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec, 'glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_Params', [
      mojo.internal.StructField('options', 0, 0, glic.mojom.ZeroStateSuggestionsOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_live', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParams', [
      mojo.internal.StructField('zero_state_suggestions', 0, 0, glic.mojom.ZeroStateSuggestionsV2Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec, 'glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_Params', [
      mojo.internal.StructField('is_first_run_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_first_run_$value', originalFieldName: 'is_first_run' }),
      mojo.internal.StructField('is_first_run_$value', 0, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_first_run_$flag', originalFieldName: 'is_first_run' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParams', [
      mojo.internal.StructField('suggestions', 0, 0, glic.mojom.ZeroStateSuggestionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec, 'glic.mojom.WebClientHandler_MaybeRefreshUserStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec, 'glic.mojom.WebClientHandler_IsDebuggerAttached_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec, 'glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParams', [
      mojo.internal.StructField('is_attached_to_webview', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_OnViewChanged_ParamsSpec, 'glic.mojom.WebClientHandler_OnViewChanged_Params', [
      mojo.internal.StructField('notification', 0, 0, glic.mojom.ViewChangedNotificationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec, 'glic.mojom.WebClientHandler_SubscribeToPageMetadata_Params', [
      mojo.internal.StructField('names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec, 'glic.mojom.WebClientHandler_SwitchConversation_Params', [
      mojo.internal.StructField('info', 0, 0, glic.mojom.ConversationInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SwitchConversation_ResponseParams', [
      mojo.internal.StructField('error_reason', 0, 0, glic.mojom.SwitchConversationErrorReasonSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec, 'glic.mojom.WebClientHandler_RegisterConversation_Params', [
      mojo.internal.StructField('info', 0, 0, glic.mojom.ConversationInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec, 'glic.mojom.WebClientHandler_RegisterConversation_ResponseParams', [
      mojo.internal.StructField('error_reason', 0, 0, glic.mojom.RegisterConversationErrorReasonSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec, 'glic.mojom.WebClientHandler_SetOnboardingCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec, 'glic.mojom.WebClientHandler_SubscribeToTabData_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceProxy(glic.mojom.TabDataHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

glic.mojom.WebClientHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.WebClientHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.WebClientHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.WebClientHandlerPendingReceiver,
      handle);
    this.$ = new glic.mojom.WebClientHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  webClientCreated(web_client) {
    return this.$.webClientCreated(web_client);
  }
  webClientInitialized() {
    return this.$.webClientInitialized();
  }
  webClientInitializeFailed() {
    return this.$.webClientInitializeFailed();
  }
  createTab(url, open_in_background, window_id) {
    return this.$.createTab(url, open_in_background, window_id);
  }
  openLinkInPopup(url, popup_width, popup_height) {
    return this.$.openLinkInPopup(url, popup_width, popup_height);
  }
  openGlicSettingsPage(options) {
    return this.$.openGlicSettingsPage(options);
  }
  openPasswordManagerSettingsPage() {
    return this.$.openPasswordManagerSettingsPage();
  }
  closePanel() {
    return this.$.closePanel();
  }
  closePanelAndShutdown() {
    return this.$.closePanelAndShutdown();
  }
  attachPanel() {
    return this.$.attachPanel();
  }
  detachPanel() {
    return this.$.detachPanel();
  }
  onModeChange(new_mode) {
    return this.$.onModeChange(new_mode);
  }
  showProfilePicker() {
    return this.$.showProfilePicker();
  }
  getModelQualityClientId() {
    return this.$.getModelQualityClientId();
  }
  getContextFromFocusedTab(options) {
    return this.$.getContextFromFocusedTab(options);
  }
  getContextFromTab(tab_id, options) {
    return this.$.getContextFromTab(tab_id, options);
  }
  getContextForActorFromTab(tab_id, options) {
    return this.$.getContextForActorFromTab(tab_id, options);
  }
  setMaximumNumberOfPinnedTabs(requested_max) {
    return this.$.setMaximumNumberOfPinnedTabs(requested_max);
  }
  pinTabs(tab_ids, options) {
    return this.$.pinTabs(tab_ids, options);
  }
  unpinTabs(tab_ids, options) {
    return this.$.unpinTabs(tab_ids, options);
  }
  unpinAllTabs(options) {
    return this.$.unpinAllTabs(options);
  }
  createSkill(request) {
    return this.$.createSkill(request);
  }
  updateSkill(request) {
    return this.$.updateSkill(request);
  }
  getSkill(id) {
    return this.$.getSkill(id);
  }
  subscribeToPinCandidates(options, observer) {
    return this.$.subscribeToPinCandidates(options, observer);
  }
  createTask(task_options) {
    return this.$.createTask(task_options);
  }
  performActions(actions_proto) {
    return this.$.performActions(actions_proto);
  }
  cancelActions(task_id) {
    return this.$.cancelActions(task_id);
  }
  stopActorTask(task_id, stop_reason) {
    return this.$.stopActorTask(task_id, stop_reason);
  }
  pauseActorTask(task_id, pause_reason, tab_id) {
    return this.$.pauseActorTask(task_id, pause_reason, tab_id);
  }
  resumeActorTask(task_id, context_options) {
    return this.$.resumeActorTask(task_id, context_options);
  }
  interruptActorTask(task_id) {
    return this.$.interruptActorTask(task_id);
  }
  uninterruptActorTask(task_id) {
    return this.$.uninterruptActorTask(task_id);
  }
  createActorTab(task_id, open_in_background, initiator_tab_id, initiator_window_id) {
    return this.$.createActorTab(task_id, open_in_background, initiator_tab_id, initiator_window_id);
  }
  activateTab(task_id) {
    return this.$.activateTab(task_id);
  }
  resizeWidget(size, duration) {
    return this.$.resizeWidget(size, duration);
  }
  captureScreenshot() {
    return this.$.captureScreenshot();
  }
  captureRegion(observer) {
    return this.$.captureRegion(observer);
  }
  setAudioDucking(enable) {
    return this.$.setAudioDucking(enable);
  }
  setPanelDraggableAreas(draggable_areas) {
    return this.$.setPanelDraggableAreas(draggable_areas);
  }
  setMinimumPanelSize(size) {
    return this.$.setMinimumPanelSize(size);
  }
  setMicrophonePermissionState(enabled) {
    return this.$.setMicrophonePermissionState(enabled);
  }
  setLocationPermissionState(enabled) {
    return this.$.setLocationPermissionState(enabled);
  }
  setTabContextPermissionState(enabled) {
    return this.$.setTabContextPermissionState(enabled);
  }
  setClosedCaptioningSetting(enabled) {
    return this.$.setClosedCaptioningSetting(enabled);
  }
  setActuationOnWebSetting(enabled) {
    return this.$.setActuationOnWebSetting(enabled);
  }
  shouldAllowMediaPermissionRequest() {
    return this.$.shouldAllowMediaPermissionRequest();
  }
  shouldAllowGeolocationPermissionRequest() {
    return this.$.shouldAllowGeolocationPermissionRequest();
  }
  setContextAccessIndicator(enabled) {
    return this.$.setContextAccessIndicator(enabled);
  }
  getUserProfileInfo() {
    return this.$.getUserProfileInfo();
  }
  syncCookies() {
    return this.$.syncCookies();
  }
  logBeginAsyncEvent(event_async_id, task_id, event, details) {
    return this.$.logBeginAsyncEvent(event_async_id, task_id, event, details);
  }
  logEndAsyncEvent(event_async_id, details) {
    return this.$.logEndAsyncEvent(event_async_id, details);
  }
  logInstantEvent(task_id, event, details) {
    return this.$.logInstantEvent(task_id, event, details);
  }
  journalClear() {
    return this.$.journalClear();
  }
  journalSnapshot(clear_journal) {
    return this.$.journalSnapshot(clear_journal);
  }
  journalStart(max_bytes, capture_screenshots) {
    return this.$.journalStart(max_bytes, capture_screenshots);
  }
  journalStop() {
    return this.$.journalStop();
  }
  journalRecordFeedback(positive, reason) {
    return this.$.journalRecordFeedback(positive, reason);
  }
  onUserInputSubmitted(mode) {
    return this.$.onUserInputSubmitted(mode);
  }
  onContextUploadStarted() {
    return this.$.onContextUploadStarted();
  }
  onContextUploadCompleted() {
    return this.$.onContextUploadCompleted();
  }
  onReaction(reactionType) {
    return this.$.onReaction(reactionType);
  }
  onResponseStarted() {
    return this.$.onResponseStarted();
  }
  onResponseStopped(details) {
    return this.$.onResponseStopped(details);
  }
  onSessionTerminated() {
    return this.$.onSessionTerminated();
  }
  onTurnCompleted(model, duration) {
    return this.$.onTurnCompleted(model, duration);
  }
  onModelChanged(model) {
    return this.$.onModelChanged(model);
  }
  onRecordUseCounter(counter) {
    return this.$.onRecordUseCounter(counter);
  }
  onResponseRated(positive) {
    return this.$.onResponseRated(positive);
  }
  onClosedCaptionsShown() {
    return this.$.onClosedCaptionsShown();
  }
  scrollTo(params) {
    return this.$.scrollTo(params);
  }
  dropScrollToHighlight() {
    return this.$.dropScrollToHighlight();
  }
  setSyntheticExperimentState(trial_name, group_name) {
    return this.$.setSyntheticExperimentState(trial_name, group_name);
  }
  openOsPermissionSettingsMenu(type) {
    return this.$.openOsPermissionSettingsMenu(type);
  }
  getOsMicrophonePermissionStatus() {
    return this.$.getOsMicrophonePermissionStatus();
  }
  getZeroStateSuggestionsAndSubscribe(is_live, options) {
    return this.$.getZeroStateSuggestionsAndSubscribe(is_live, options);
  }
  getZeroStateSuggestionsForFocusedTab(is_first_run) {
    return this.$.getZeroStateSuggestionsForFocusedTab(is_first_run);
  }
  maybeRefreshUserStatus() {
    return this.$.maybeRefreshUserStatus();
  }
  isDebuggerAttached() {
    return this.$.isDebuggerAttached();
  }
  onViewChanged(notification) {
    return this.$.onViewChanged(notification);
  }
  subscribeToPageMetadata(tab_id, names) {
    return this.$.subscribeToPageMetadata(tab_id, names);
  }
  switchConversation(info) {
    return this.$.switchConversation(info);
  }
  registerConversation(info) {
    return this.$.registerConversation(info);
  }
  setOnboardingCompleted() {
    return this.$.setOnboardingCompleted();
  }
  subscribeToTabData(tab_id, receiver) {
    return this.$.subscribeToTabData(tab_id, receiver);
  }
};

glic.mojom.WebClientHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebClientHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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

  webClientCreated(web_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec,
      glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec,
      [web_client],
      false);
  }

  webClientInitialized() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec,
      null,
      [],
      false);
  }

  webClientInitializeFailed() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec,
      null,
      [],
      false);
  }

  createTab(url, open_in_background, window_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      glic.mojom.WebClientHandler_CreateTab_ParamsSpec,
      glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec,
      [url, open_in_background, window_id],
      false);
  }

  openLinkInPopup(url, popup_width, popup_height) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec,
      null,
      [url, popup_width, popup_height],
      false);
  }

  openGlicSettingsPage(options) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec,
      null,
      [options],
      false);
  }

  openPasswordManagerSettingsPage() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec,
      null,
      [],
      false);
  }

  closePanel() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      glic.mojom.WebClientHandler_ClosePanel_ParamsSpec,
      null,
      [],
      false);
  }

  closePanelAndShutdown() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec,
      null,
      [],
      false);
  }

  attachPanel() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      glic.mojom.WebClientHandler_AttachPanel_ParamsSpec,
      null,
      [],
      false);
  }

  detachPanel() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      glic.mojom.WebClientHandler_DetachPanel_ParamsSpec,
      null,
      [],
      false);
  }

  onModeChange(new_mode) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      glic.mojom.WebClientHandler_OnModeChange_ParamsSpec,
      null,
      [new_mode],
      false);
  }

  showProfilePicker() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec,
      null,
      [],
      false);
  }

  getModelQualityClientId() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec,
      glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec,
      [],
      false);
  }

  getContextFromFocusedTab(options) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec,
      glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec,
      [options],
      false);
  }

  getContextFromTab(tab_id, options) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec,
      glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec,
      [tab_id, options],
      false);
  }

  getContextForActorFromTab(tab_id, options) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      glic.mojom.WebClientHandler_GetContextForActorFromTab_ParamsSpec,
      glic.mojom.WebClientHandler_GetContextForActorFromTab_ResponseParamsSpec,
      [tab_id, options],
      false);
  }

  setMaximumNumberOfPinnedTabs(requested_max) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec,
      glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec,
      [requested_max],
      false);
  }

  pinTabs(tab_ids, options) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      glic.mojom.WebClientHandler_PinTabs_ParamsSpec,
      glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec,
      [tab_ids, options],
      false);
  }

  unpinTabs(tab_ids, options) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec,
      glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec,
      [tab_ids, options],
      false);
  }

  unpinAllTabs(options) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec,
      null,
      [options],
      false);
  }

  createSkill(request) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      glic.mojom.WebClientHandler_CreateSkill_ParamsSpec,
      glic.mojom.WebClientHandler_CreateSkill_ResponseParamsSpec,
      [request],
      false);
  }

  updateSkill(request) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      glic.mojom.WebClientHandler_UpdateSkill_ParamsSpec,
      glic.mojom.WebClientHandler_UpdateSkill_ResponseParamsSpec,
      [request],
      false);
  }

  getSkill(id) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      glic.mojom.WebClientHandler_GetSkill_ParamsSpec,
      glic.mojom.WebClientHandler_GetSkill_ResponseParamsSpec,
      [id],
      false);
  }

  subscribeToPinCandidates(options, observer) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec,
      null,
      [options, observer],
      false);
  }

  createTask(task_options) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      glic.mojom.WebClientHandler_CreateTask_ParamsSpec,
      null,
      [task_options],
      false);
  }

  performActions(actions_proto) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      glic.mojom.WebClientHandler_PerformActions_ParamsSpec,
      null,
      [actions_proto],
      false);
  }

  cancelActions(task_id) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      glic.mojom.WebClientHandler_CancelActions_ParamsSpec,
      glic.mojom.WebClientHandler_CancelActions_ResponseParamsSpec,
      [task_id],
      false);
  }

  stopActorTask(task_id, stop_reason) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      glic.mojom.WebClientHandler_StopActorTask_ParamsSpec,
      null,
      [task_id, stop_reason],
      false);
  }

  pauseActorTask(task_id, pause_reason, tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      glic.mojom.WebClientHandler_PauseActorTask_ParamsSpec,
      null,
      [task_id, pause_reason, tab_id],
      false);
  }

  resumeActorTask(task_id, context_options) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      glic.mojom.WebClientHandler_ResumeActorTask_ParamsSpec,
      glic.mojom.WebClientHandler_ResumeActorTask_ResponseParamsSpec,
      [task_id, context_options],
      false);
  }

  interruptActorTask(task_id) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      glic.mojom.WebClientHandler_InterruptActorTask_ParamsSpec,
      null,
      [task_id],
      false);
  }

  uninterruptActorTask(task_id) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      glic.mojom.WebClientHandler_UninterruptActorTask_ParamsSpec,
      null,
      [task_id],
      false);
  }

  createActorTab(task_id, open_in_background, initiator_tab_id, initiator_window_id) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      glic.mojom.WebClientHandler_CreateActorTab_ParamsSpec,
      glic.mojom.WebClientHandler_CreateActorTab_ResponseParamsSpec,
      [task_id, open_in_background, initiator_tab_id, initiator_window_id],
      false);
  }

  activateTab(task_id) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      glic.mojom.WebClientHandler_ActivateTab_ParamsSpec,
      null,
      [task_id],
      false);
  }

  resizeWidget(size, duration) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec,
      glic.mojom.WebClientHandler_ResizeWidget_ResponseParamsSpec,
      [size, duration],
      false);
  }

  captureScreenshot() {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec,
      glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec,
      [],
      false);
  }

  captureRegion(observer) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec,
      null,
      [observer],
      false);
  }

  setAudioDucking(enable) {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec,
      glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec,
      [enable],
      false);
  }

  setPanelDraggableAreas(draggable_areas) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      glic.mojom.WebClientHandler_SetPanelDraggableAreas_ParamsSpec,
      glic.mojom.WebClientHandler_SetPanelDraggableAreas_ResponseParamsSpec,
      [draggable_areas],
      false);
  }

  setMinimumPanelSize(size) {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec,
      null,
      [size],
      false);
  }

  setMicrophonePermissionState(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec,
      glic.mojom.WebClientHandler_SetMicrophonePermissionState_ResponseParamsSpec,
      [enabled],
      false);
  }

  setLocationPermissionState(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec,
      glic.mojom.WebClientHandler_SetLocationPermissionState_ResponseParamsSpec,
      [enabled],
      false);
  }

  setTabContextPermissionState(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec,
      glic.mojom.WebClientHandler_SetTabContextPermissionState_ResponseParamsSpec,
      [enabled],
      false);
  }

  setClosedCaptioningSetting(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec,
      glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ResponseParamsSpec,
      [enabled],
      false);
  }

  setActuationOnWebSetting(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec,
      glic.mojom.WebClientHandler_SetActuationOnWebSetting_ResponseParamsSpec,
      [enabled],
      false);
  }

  shouldAllowMediaPermissionRequest() {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec,
      glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec,
      [],
      false);
  }

  shouldAllowGeolocationPermissionRequest() {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec,
      glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec,
      [],
      false);
  }

  setContextAccessIndicator(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec,
      null,
      [enabled],
      false);
  }

  getUserProfileInfo() {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec,
      glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec,
      [],
      false);
  }

  syncCookies() {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      glic.mojom.WebClientHandler_SyncCookies_ParamsSpec,
      glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec,
      [],
      false);
  }

  logBeginAsyncEvent(event_async_id, task_id, event, details) {
    return this.proxy.sendMessage(
      this.ordinals[51],  // ordinal
      glic.mojom.WebClientHandler_LogBeginAsyncEvent_ParamsSpec,
      null,
      [event_async_id, task_id, event, details],
      false);
  }

  logEndAsyncEvent(event_async_id, details) {
    return this.proxy.sendMessage(
      this.ordinals[52],  // ordinal
      glic.mojom.WebClientHandler_LogEndAsyncEvent_ParamsSpec,
      null,
      [event_async_id, details],
      false);
  }

  logInstantEvent(task_id, event, details) {
    return this.proxy.sendMessage(
      this.ordinals[53],  // ordinal
      glic.mojom.WebClientHandler_LogInstantEvent_ParamsSpec,
      null,
      [task_id, event, details],
      false);
  }

  journalClear() {
    return this.proxy.sendMessage(
      this.ordinals[54],  // ordinal
      glic.mojom.WebClientHandler_JournalClear_ParamsSpec,
      null,
      [],
      false);
  }

  journalSnapshot(clear_journal) {
    return this.proxy.sendMessage(
      this.ordinals[55],  // ordinal
      glic.mojom.WebClientHandler_JournalSnapshot_ParamsSpec,
      glic.mojom.WebClientHandler_JournalSnapshot_ResponseParamsSpec,
      [clear_journal],
      false);
  }

  journalStart(max_bytes, capture_screenshots) {
    return this.proxy.sendMessage(
      this.ordinals[56],  // ordinal
      glic.mojom.WebClientHandler_JournalStart_ParamsSpec,
      null,
      [max_bytes, capture_screenshots],
      false);
  }

  journalStop() {
    return this.proxy.sendMessage(
      this.ordinals[57],  // ordinal
      glic.mojom.WebClientHandler_JournalStop_ParamsSpec,
      null,
      [],
      false);
  }

  journalRecordFeedback(positive, reason) {
    return this.proxy.sendMessage(
      this.ordinals[58],  // ordinal
      glic.mojom.WebClientHandler_JournalRecordFeedback_ParamsSpec,
      null,
      [positive, reason],
      false);
  }

  onUserInputSubmitted(mode) {
    return this.proxy.sendMessage(
      this.ordinals[59],  // ordinal
      glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec,
      null,
      [mode],
      false);
  }

  onContextUploadStarted() {
    return this.proxy.sendMessage(
      this.ordinals[60],  // ordinal
      glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec,
      null,
      [],
      false);
  }

  onContextUploadCompleted() {
    return this.proxy.sendMessage(
      this.ordinals[61],  // ordinal
      glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec,
      null,
      [],
      false);
  }

  onReaction(reactionType) {
    return this.proxy.sendMessage(
      this.ordinals[62],  // ordinal
      glic.mojom.WebClientHandler_OnReaction_ParamsSpec,
      null,
      [reactionType],
      false);
  }

  onResponseStarted() {
    return this.proxy.sendMessage(
      this.ordinals[63],  // ordinal
      glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec,
      null,
      [],
      false);
  }

  onResponseStopped(details) {
    return this.proxy.sendMessage(
      this.ordinals[64],  // ordinal
      glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec,
      null,
      [details],
      false);
  }

  onSessionTerminated() {
    return this.proxy.sendMessage(
      this.ordinals[65],  // ordinal
      glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec,
      null,
      [],
      false);
  }

  onTurnCompleted(model, duration) {
    return this.proxy.sendMessage(
      this.ordinals[66],  // ordinal
      glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec,
      null,
      [model, duration],
      false);
  }

  onModelChanged(model) {
    return this.proxy.sendMessage(
      this.ordinals[67],  // ordinal
      glic.mojom.WebClientHandler_OnModelChanged_ParamsSpec,
      null,
      [model],
      false);
  }

  onRecordUseCounter(counter) {
    return this.proxy.sendMessage(
      this.ordinals[68],  // ordinal
      glic.mojom.WebClientHandler_OnRecordUseCounter_ParamsSpec,
      null,
      [counter],
      false);
  }

  onResponseRated(positive) {
    return this.proxy.sendMessage(
      this.ordinals[69],  // ordinal
      glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec,
      null,
      [positive],
      false);
  }

  onClosedCaptionsShown() {
    return this.proxy.sendMessage(
      this.ordinals[70],  // ordinal
      glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec,
      null,
      [],
      false);
  }

  scrollTo(params) {
    return this.proxy.sendMessage(
      this.ordinals[71],  // ordinal
      glic.mojom.WebClientHandler_ScrollTo_ParamsSpec,
      glic.mojom.WebClientHandler_ScrollTo_ResponseParamsSpec,
      [params],
      false);
  }

  dropScrollToHighlight() {
    return this.proxy.sendMessage(
      this.ordinals[72],  // ordinal
      glic.mojom.WebClientHandler_DropScrollToHighlight_ParamsSpec,
      null,
      [],
      false);
  }

  setSyntheticExperimentState(trial_name, group_name) {
    return this.proxy.sendMessage(
      this.ordinals[73],  // ordinal
      glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec,
      null,
      [trial_name, group_name],
      false);
  }

  openOsPermissionSettingsMenu(type) {
    return this.proxy.sendMessage(
      this.ordinals[74],  // ordinal
      glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec,
      null,
      [type],
      false);
  }

  getOsMicrophonePermissionStatus() {
    return this.proxy.sendMessage(
      this.ordinals[75],  // ordinal
      glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec,
      glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec,
      [],
      false);
  }

  getZeroStateSuggestionsAndSubscribe(is_live, options) {
    return this.proxy.sendMessage(
      this.ordinals[76],  // ordinal
      glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec,
      glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec,
      [is_live, options],
      false);
  }

  getZeroStateSuggestionsForFocusedTab(is_first_run) {
    return this.proxy.sendMessage(
      this.ordinals[77],  // ordinal
      glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec,
      glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec,
      [is_first_run],
      false);
  }

  maybeRefreshUserStatus() {
    return this.proxy.sendMessage(
      this.ordinals[78],  // ordinal
      glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec,
      null,
      [],
      false);
  }

  isDebuggerAttached() {
    return this.proxy.sendMessage(
      this.ordinals[79],  // ordinal
      glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec,
      glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec,
      [],
      false);
  }

  onViewChanged(notification) {
    return this.proxy.sendMessage(
      this.ordinals[80],  // ordinal
      glic.mojom.WebClientHandler_OnViewChanged_ParamsSpec,
      null,
      [notification],
      false);
  }

  subscribeToPageMetadata(tab_id, names) {
    return this.proxy.sendMessage(
      this.ordinals[81],  // ordinal
      glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec,
      glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec,
      [tab_id, names],
      false);
  }

  switchConversation(info) {
    return this.proxy.sendMessage(
      this.ordinals[82],  // ordinal
      glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec,
      glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec,
      [info],
      false);
  }

  registerConversation(info) {
    return this.proxy.sendMessage(
      this.ordinals[83],  // ordinal
      glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec,
      glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec,
      [info],
      false);
  }

  setOnboardingCompleted() {
    return this.proxy.sendMessage(
      this.ordinals[84],  // ordinal
      glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec,
      null,
      [],
      false);
  }

  subscribeToTabData(tab_id, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[85],  // ordinal
      glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec,
      null,
      [tab_id, receiver],
      false);
  }

};

glic.mojom.WebClientHandler.getRemote = function() {
  let remote = new glic.mojom.WebClientHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.WebClientHandler',
    'context');
  return remote.$;
};

glic.mojom.WebClientHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebClientHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_CreateTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_ClosePanel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_AttachPanel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_DetachPanel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnModeChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_GetContextForActorFromTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_PinTabs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_CreateSkill_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_UpdateSkill_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_GetSkill_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_CreateTask_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_PerformActions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_CancelActions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_StopActorTask_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_PauseActorTask_ParamsSpec);
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_ResumeActorTask_ParamsSpec);
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_InterruptActorTask_ParamsSpec);
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_UninterruptActorTask_ParamsSpec);
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_CreateActorTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_ActivateTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec);
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec);
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec);
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetPanelDraggableAreas_ParamsSpec);
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 43);
             dispatchId = 43;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 44);
             dispatchId = 44;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 45);
             dispatchId = 45;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 46);
             dispatchId = 46;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 47);
             dispatchId = 47;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec);
             this.mapOrdinal(header.ordinal, 48);
             dispatchId = 48;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 49);
             dispatchId = 49;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SyncCookies_ParamsSpec);
             this.mapOrdinal(header.ordinal, 50);
             dispatchId = 50;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_LogBeginAsyncEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 51);
             dispatchId = 51;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_LogEndAsyncEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 52);
             dispatchId = 52;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_LogInstantEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 53);
             dispatchId = 53;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_JournalClear_ParamsSpec);
             this.mapOrdinal(header.ordinal, 54);
             dispatchId = 54;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_JournalSnapshot_ParamsSpec);
             this.mapOrdinal(header.ordinal, 55);
             dispatchId = 55;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_JournalStart_ParamsSpec);
             this.mapOrdinal(header.ordinal, 56);
             dispatchId = 56;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_JournalStop_ParamsSpec);
             this.mapOrdinal(header.ordinal, 57);
             dispatchId = 57;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_JournalRecordFeedback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 58);
             dispatchId = 58;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 59);
             dispatchId = 59;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 60);
             dispatchId = 60;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 61);
             dispatchId = 61;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnReaction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 62);
             dispatchId = 62;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 63);
             dispatchId = 63;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec);
             this.mapOrdinal(header.ordinal, 64);
             dispatchId = 64;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 65);
             dispatchId = 65;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 66);
             dispatchId = 66;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnModelChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 67);
             dispatchId = 67;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnRecordUseCounter_ParamsSpec);
             this.mapOrdinal(header.ordinal, 68);
             dispatchId = 68;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 69);
             dispatchId = 69;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec);
             this.mapOrdinal(header.ordinal, 70);
             dispatchId = 70;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_ScrollTo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 71);
             dispatchId = 71;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_DropScrollToHighlight_ParamsSpec);
             this.mapOrdinal(header.ordinal, 72);
             dispatchId = 72;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 73);
             dispatchId = 73;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 74);
             dispatchId = 74;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 75);
             dispatchId = 75;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 76);
             dispatchId = 76;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 77);
             dispatchId = 77;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 78);
             dispatchId = 78;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec);
             this.mapOrdinal(header.ordinal, 79);
             dispatchId = 79;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnViewChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 80);
             dispatchId = 80;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec);
             this.mapOrdinal(header.ordinal, 81);
             dispatchId = 81;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 82);
             dispatchId = 82;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 83);
             dispatchId = 83;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 84);
             dispatchId = 84;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 85);
             dispatchId = 85;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec.$.structSpec);
          const result = this.impl.webClientCreated(params.web_client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec.$.structSpec);
          const result = this.impl.webClientInitialized();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec.$.structSpec);
          const result = this.impl.webClientInitializeFailed();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_CreateTab_ParamsSpec.$.structSpec);
          const result = this.impl.createTab(params.url, params.open_in_background, params.window_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec.$.structSpec);
          const result = this.impl.openLinkInPopup(params.url, params.popup_width, params.popup_height);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec.$.structSpec);
          const result = this.impl.openGlicSettingsPage(params.options);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec.$.structSpec);
          const result = this.impl.openPasswordManagerSettingsPage();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_ClosePanel_ParamsSpec.$.structSpec);
          const result = this.impl.closePanel();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec.$.structSpec);
          const result = this.impl.closePanelAndShutdown();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_AttachPanel_ParamsSpec.$.structSpec);
          const result = this.impl.attachPanel();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_DetachPanel_ParamsSpec.$.structSpec);
          const result = this.impl.detachPanel();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnModeChange_ParamsSpec.$.structSpec);
          const result = this.impl.onModeChange(params.new_mode);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec.$.structSpec);
          const result = this.impl.showProfilePicker();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec.$.structSpec);
          const result = this.impl.getModelQualityClientId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec.$.structSpec);
          const result = this.impl.getContextFromFocusedTab(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec.$.structSpec);
          const result = this.impl.getContextFromTab(params.tab_id, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_GetContextForActorFromTab_ParamsSpec.$.structSpec);
          const result = this.impl.getContextForActorFromTab(params.tab_id, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_GetContextForActorFromTab_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec.$.structSpec);
          const result = this.impl.setMaximumNumberOfPinnedTabs(params.requested_max);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_PinTabs_ParamsSpec.$.structSpec);
          const result = this.impl.pinTabs(params.tab_ids, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec.$.structSpec);
          const result = this.impl.unpinTabs(params.tab_ids, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec.$.structSpec);
          const result = this.impl.unpinAllTabs(params.options);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_CreateSkill_ParamsSpec.$.structSpec);
          const result = this.impl.createSkill(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_CreateSkill_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_UpdateSkill_ParamsSpec.$.structSpec);
          const result = this.impl.updateSkill(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_UpdateSkill_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_GetSkill_ParamsSpec.$.structSpec);
          const result = this.impl.getSkill(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_GetSkill_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec.$.structSpec);
          const result = this.impl.subscribeToPinCandidates(params.options, params.observer);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_CreateTask_ParamsSpec.$.structSpec);
          const result = this.impl.createTask(params.task_options);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_PerformActions_ParamsSpec.$.structSpec);
          const result = this.impl.performActions(params.actions_proto);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_CancelActions_ParamsSpec.$.structSpec);
          const result = this.impl.cancelActions(params.task_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_CancelActions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_StopActorTask_ParamsSpec.$.structSpec);
          const result = this.impl.stopActorTask(params.task_id, params.stop_reason);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_PauseActorTask_ParamsSpec.$.structSpec);
          const result = this.impl.pauseActorTask(params.task_id, params.pause_reason, params.tab_id);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_ResumeActorTask_ParamsSpec.$.structSpec);
          const result = this.impl.resumeActorTask(params.task_id, params.context_options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_ResumeActorTask_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_InterruptActorTask_ParamsSpec.$.structSpec);
          const result = this.impl.interruptActorTask(params.task_id);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_UninterruptActorTask_ParamsSpec.$.structSpec);
          const result = this.impl.uninterruptActorTask(params.task_id);
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_CreateActorTab_ParamsSpec.$.structSpec);
          const result = this.impl.createActorTab(params.task_id, params.open_in_background, params.initiator_tab_id, params.initiator_window_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_CreateActorTab_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_ActivateTab_ParamsSpec.$.structSpec);
          const result = this.impl.activateTab(params.task_id);
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec.$.structSpec);
          const result = this.impl.resizeWidget(params.size, params.duration);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_ResizeWidget_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec.$.structSpec);
          const result = this.impl.captureScreenshot();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec.$.structSpec);
          const result = this.impl.captureRegion(params.observer);
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec.$.structSpec);
          const result = this.impl.setAudioDucking(params.enable);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SetPanelDraggableAreas_ParamsSpec.$.structSpec);
          const result = this.impl.setPanelDraggableAreas(params.draggable_areas);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_SetPanelDraggableAreas_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec.$.structSpec);
          const result = this.impl.setMinimumPanelSize(params.size);
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec.$.structSpec);
          const result = this.impl.setMicrophonePermissionState(params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_SetMicrophonePermissionState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec.$.structSpec);
          const result = this.impl.setLocationPermissionState(params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_SetLocationPermissionState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec.$.structSpec);
          const result = this.impl.setTabContextPermissionState(params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_SetTabContextPermissionState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec.$.structSpec);
          const result = this.impl.setClosedCaptioningSetting(params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec.$.structSpec);
          const result = this.impl.setActuationOnWebSetting(params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_SetActuationOnWebSetting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec.$.structSpec);
          const result = this.impl.shouldAllowMediaPermissionRequest();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec.$.structSpec);
          const result = this.impl.shouldAllowGeolocationPermissionRequest();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec.$.structSpec);
          const result = this.impl.setContextAccessIndicator(params.enabled);
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getUserProfileInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SyncCookies_ParamsSpec.$.structSpec);
          const result = this.impl.syncCookies();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_LogBeginAsyncEvent_ParamsSpec.$.structSpec);
          const result = this.impl.logBeginAsyncEvent(params.event_async_id, params.task_id, params.event, params.details);
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_LogEndAsyncEvent_ParamsSpec.$.structSpec);
          const result = this.impl.logEndAsyncEvent(params.event_async_id, params.details);
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_LogInstantEvent_ParamsSpec.$.structSpec);
          const result = this.impl.logInstantEvent(params.task_id, params.event, params.details);
          break;
        }
        case 54: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_JournalClear_ParamsSpec.$.structSpec);
          const result = this.impl.journalClear();
          break;
        }
        case 55: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_JournalSnapshot_ParamsSpec.$.structSpec);
          const result = this.impl.journalSnapshot(params.clear_journal);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_JournalSnapshot_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 56: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_JournalStart_ParamsSpec.$.structSpec);
          const result = this.impl.journalStart(params.max_bytes, params.capture_screenshots);
          break;
        }
        case 57: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_JournalStop_ParamsSpec.$.structSpec);
          const result = this.impl.journalStop();
          break;
        }
        case 58: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_JournalRecordFeedback_ParamsSpec.$.structSpec);
          const result = this.impl.journalRecordFeedback(params.positive, params.reason);
          break;
        }
        case 59: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec.$.structSpec);
          const result = this.impl.onUserInputSubmitted(params.mode);
          break;
        }
        case 60: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec.$.structSpec);
          const result = this.impl.onContextUploadStarted();
          break;
        }
        case 61: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec.$.structSpec);
          const result = this.impl.onContextUploadCompleted();
          break;
        }
        case 62: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnReaction_ParamsSpec.$.structSpec);
          const result = this.impl.onReaction(params.reactionType);
          break;
        }
        case 63: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec.$.structSpec);
          const result = this.impl.onResponseStarted();
          break;
        }
        case 64: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec.$.structSpec);
          const result = this.impl.onResponseStopped(params.details);
          break;
        }
        case 65: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec.$.structSpec);
          const result = this.impl.onSessionTerminated();
          break;
        }
        case 66: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec.$.structSpec);
          const result = this.impl.onTurnCompleted(params.model, params.duration);
          break;
        }
        case 67: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnModelChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onModelChanged(params.model);
          break;
        }
        case 68: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnRecordUseCounter_ParamsSpec.$.structSpec);
          const result = this.impl.onRecordUseCounter(params.counter);
          break;
        }
        case 69: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec.$.structSpec);
          const result = this.impl.onResponseRated(params.positive);
          break;
        }
        case 70: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec.$.structSpec);
          const result = this.impl.onClosedCaptionsShown();
          break;
        }
        case 71: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_ScrollTo_ParamsSpec.$.structSpec);
          const result = this.impl.scrollTo(params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_ScrollTo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 72: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_DropScrollToHighlight_ParamsSpec.$.structSpec);
          const result = this.impl.dropScrollToHighlight();
          break;
        }
        case 73: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec.$.structSpec);
          const result = this.impl.setSyntheticExperimentState(params.trial_name, params.group_name);
          break;
        }
        case 74: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec.$.structSpec);
          const result = this.impl.openOsPermissionSettingsMenu(params.type);
          break;
        }
        case 75: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec.$.structSpec);
          const result = this.impl.getOsMicrophonePermissionStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 76: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec.$.structSpec);
          const result = this.impl.getZeroStateSuggestionsAndSubscribe(params.is_live, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 77: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec.$.structSpec);
          const result = this.impl.getZeroStateSuggestionsForFocusedTab(params.is_first_run);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 78: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec.$.structSpec);
          const result = this.impl.maybeRefreshUserStatus();
          break;
        }
        case 79: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec.$.structSpec);
          const result = this.impl.isDebuggerAttached();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 80: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnViewChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onViewChanged(params.notification);
          break;
        }
        case 81: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec.$.structSpec);
          const result = this.impl.subscribeToPageMetadata(params.tab_id, params.names);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 82: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec.$.structSpec);
          const result = this.impl.switchConversation(params.info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 83: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec.$.structSpec);
          const result = this.impl.registerConversation(params.info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 84: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec.$.structSpec);
          const result = this.impl.setOnboardingCompleted();
          break;
        }
        case 85: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec.$.structSpec);
          const result = this.impl.subscribeToTabData(params.tab_id, params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

glic.mojom.WebClientHandlerReceiver = glic.mojom.WebClientHandlerReceiver;

glic.mojom.WebClientHandlerPtr = glic.mojom.WebClientHandlerRemote;
glic.mojom.WebClientHandlerRequest = glic.mojom.WebClientHandlerPendingReceiver;


// Interface: TabDataHandler
mojo.internal.Struct(
    glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec, 'glic.mojom.TabDataHandler_OnTabDataChanged_Params', [
      mojo.internal.StructField('tab_data', 0, 0, glic.mojom.TabDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

glic.mojom.TabDataHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.TabDataHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.TabDataHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.TabDataHandlerPendingReceiver,
      handle);
    this.$ = new glic.mojom.TabDataHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onTabDataChanged(tab_data) {
    return this.$.onTabDataChanged(tab_data);
  }
};

glic.mojom.TabDataHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TabDataHandler', [
      { explicit: null },
    ]);
  }

  onTabDataChanged(tab_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec,
      null,
      [tab_data],
      false);
  }

};

glic.mojom.TabDataHandler.getRemote = function() {
  let remote = new glic.mojom.TabDataHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.TabDataHandler',
    'context');
  return remote.$;
};

glic.mojom.TabDataHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TabDataHandler', [
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
             decoder.decodeStructInline(glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onTabDataChanged(params.tab_data);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

glic.mojom.TabDataHandlerReceiver = glic.mojom.TabDataHandlerReceiver;

glic.mojom.TabDataHandlerPtr = glic.mojom.TabDataHandlerRemote;
glic.mojom.TabDataHandlerRequest = glic.mojom.TabDataHandlerPendingReceiver;


// Interface: WebClient
mojo.internal.Struct(
    glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec, 'glic.mojom.WebClient_NotifyPanelWillOpen_Params', [
      mojo.internal.StructField('panel_opening_data', 0, 0, glic.mojom.PanelOpeningDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec, 'glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParams', [
      mojo.internal.StructField('openPanelInfo', 0, 0, glic.mojom.OpenPanelInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec, 'glic.mojom.WebClient_NotifyPanelWasClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyPanelWasClosed_ResponseParamsSpec, 'glic.mojom.WebClient_NotifyPanelWasClosed_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec, 'glic.mojom.WebClient_NotifyPanelStateChange_Params', [
      mojo.internal.StructField('panel_state', 0, 0, glic.mojom.PanelStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec, 'glic.mojom.WebClient_NotifyPanelActiveChange_Params', [
      mojo.internal.StructField('panel_active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec, 'glic.mojom.WebClient_NotifyPanelCanAttachChange_Params', [
      mojo.internal.StructField('can_attach', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyLocationPermissionStateChanged_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyFocusedTabChanged_Params', [
      mojo.internal.StructField('focused_tab_data', 0, 0, glic.mojom.FocusedTabDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyManualResizeChanged_Params', [
      mojo.internal.StructField('resizing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyOsHotkeyStateChanged_Params', [
      mojo.internal.StructField('hotkey', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyBrowserIsOpenChanged_Params', [
      mojo.internal.StructField('browser_is_open', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyInstanceActivationChanged_Params', [
      mojo.internal.StructField('instance_active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyPinnedTabsChanged_Params', [
      mojo.internal.StructField('tab_data', 0, 0, mojo.internal.Array(glic.mojom.TabDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyPinnedTabDataChanged_Params', [
      mojo.internal.StructField('tab_data', 0, 0, glic.mojom.TabDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifySkillPreviewsChanged_ParamsSpec, 'glic.mojom.WebClient_NotifySkillPreviewsChanged_Params', [
      mojo.internal.StructField('skill_previews', 0, 0, mojo.internal.Array(glic.mojom.SkillPreviewSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifySkillPreviewChanged_ParamsSpec, 'glic.mojom.WebClient_NotifySkillPreviewChanged_Params', [
      mojo.internal.StructField('skill_preview', 0, 0, glic.mojom.SkillPreviewSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifySkillToInvokeChanged_ParamsSpec, 'glic.mojom.WebClient_NotifySkillToInvokeChanged_Params', [
      mojo.internal.StructField('skill', 0, 0, glic.mojom.SkillSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_Params', [
      mojo.internal.StructField('suggestions', 0, 0, glic.mojom.ZeroStateSuggestionsV2Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('options', 8, 0, glic.mojom.ZeroStateSuggestionsOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyActorTaskStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyActorTaskStateChanged_Params', [
      mojo.internal.StructField('state', 0, 0, glic.mojom.ActorTaskStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('task_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClient_RequestViewChange_ParamsSpec, 'glic.mojom.WebClient_RequestViewChange_Params', [
      mojo.internal.StructField('request', 0, 0, glic.mojom.ViewChangeRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyPageMetadataChanged_Params', [
      mojo.internal.StructField('metadata', 0, 0, blink.mojom.PageMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ParamsSpec, 'glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_Params', [
      mojo.internal.StructField('request', 0, 0, actor.webui.mojom.SelectCredentialDialogRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec, 'glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, actor.webui.mojom.SelectCredentialDialogResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec, 'glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_Params', [
      mojo.internal.StructField('request', 0, 0, actor.webui.mojom.SelectAutofillSuggestionsDialogRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec, 'glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, actor.webui.mojom.SelectAutofillSuggestionsDialogResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ParamsSpec, 'glic.mojom.WebClient_RequestToShowUserConfirmationDialog_Params', [
      mojo.internal.StructField('request', 0, 0, actor.webui.mojom.UserConfirmationDialogRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec, 'glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, actor.webui.mojom.UserConfirmationDialogResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_RequestToConfirmNavigation_ParamsSpec, 'glic.mojom.WebClient_RequestToConfirmNavigation_Params', [
      mojo.internal.StructField('request', 0, 0, actor.webui.mojom.NavigationConfirmationRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_RequestToConfirmNavigation_ResponseParamsSpec, 'glic.mojom.WebClient_RequestToConfirmNavigation_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, actor.webui.mojom.NavigationConfirmationResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec, 'glic.mojom.WebClient_NotifyAdditionalContext_Params', [
      mojo.internal.StructField('context', 0, 0, glic.mojom.AdditionalContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_Params', [
      mojo.internal.StructField('can_act_on_web', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyOnboardingCompletedChanged_Params', [
      mojo.internal.StructField('completed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

glic.mojom.WebClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.WebClientRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.WebClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.WebClientPendingReceiver,
      handle);
    this.$ = new glic.mojom.WebClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  notifyPanelWillOpen(panel_opening_data) {
    return this.$.notifyPanelWillOpen(panel_opening_data);
  }
  notifyPanelWasClosed() {
    return this.$.notifyPanelWasClosed();
  }
  notifyPanelStateChange(panel_state) {
    return this.$.notifyPanelStateChange(panel_state);
  }
  notifyPanelActiveChange(panel_active) {
    return this.$.notifyPanelActiveChange(panel_active);
  }
  notifyPanelCanAttachChange(can_attach) {
    return this.$.notifyPanelCanAttachChange(can_attach);
  }
  notifyMicrophonePermissionStateChanged(enabled) {
    return this.$.notifyMicrophonePermissionStateChanged(enabled);
  }
  notifyLocationPermissionStateChanged(enabled) {
    return this.$.notifyLocationPermissionStateChanged(enabled);
  }
  notifyTabContextPermissionStateChanged(enabled) {
    return this.$.notifyTabContextPermissionStateChanged(enabled);
  }
  notifyOsLocationPermissionStateChanged(enabled) {
    return this.$.notifyOsLocationPermissionStateChanged(enabled);
  }
  notifyFocusedTabChanged(focused_tab_data) {
    return this.$.notifyFocusedTabChanged(focused_tab_data);
  }
  notifyManualResizeChanged(resizing) {
    return this.$.notifyManualResizeChanged(resizing);
  }
  notifyOsHotkeyStateChanged(hotkey) {
    return this.$.notifyOsHotkeyStateChanged(hotkey);
  }
  notifyBrowserIsOpenChanged(browser_is_open) {
    return this.$.notifyBrowserIsOpenChanged(browser_is_open);
  }
  notifyInstanceActivationChanged(instance_active) {
    return this.$.notifyInstanceActivationChanged(instance_active);
  }
  notifyClosedCaptioningSettingChanged(enabled) {
    return this.$.notifyClosedCaptioningSettingChanged(enabled);
  }
  notifyPinnedTabsChanged(tab_data) {
    return this.$.notifyPinnedTabsChanged(tab_data);
  }
  notifyPinnedTabDataChanged(tab_data) {
    return this.$.notifyPinnedTabDataChanged(tab_data);
  }
  notifySkillPreviewsChanged(skill_previews) {
    return this.$.notifySkillPreviewsChanged(skill_previews);
  }
  notifySkillPreviewChanged(skill_preview) {
    return this.$.notifySkillPreviewChanged(skill_preview);
  }
  notifySkillToInvokeChanged(skill) {
    return this.$.notifySkillToInvokeChanged(skill);
  }
  notifyZeroStateSuggestionsChanged(suggestions, options) {
    return this.$.notifyZeroStateSuggestionsChanged(suggestions, options);
  }
  notifyActorTaskStateChanged(task_id, state) {
    return this.$.notifyActorTaskStateChanged(task_id, state);
  }
  requestViewChange(request) {
    return this.$.requestViewChange(request);
  }
  notifyPageMetadataChanged(tab_id, metadata) {
    return this.$.notifyPageMetadataChanged(tab_id, metadata);
  }
  notifyDefaultTabContextPermissionStateChanged(enabled) {
    return this.$.notifyDefaultTabContextPermissionStateChanged(enabled);
  }
  requestToShowCredentialSelectionDialog(request) {
    return this.$.requestToShowCredentialSelectionDialog(request);
  }
  requestToShowAutofillSuggestionsDialog(request) {
    return this.$.requestToShowAutofillSuggestionsDialog(request);
  }
  requestToShowUserConfirmationDialog(request) {
    return this.$.requestToShowUserConfirmationDialog(request);
  }
  requestToConfirmNavigation(request) {
    return this.$.requestToConfirmNavigation(request);
  }
  notifyAdditionalContext(context) {
    return this.$.notifyAdditionalContext(context);
  }
  notifyActuationOnWebSettingChanged(enabled) {
    return this.$.notifyActuationOnWebSettingChanged(enabled);
  }
  notifyActOnWebCapabilityChanged(can_act_on_web) {
    return this.$.notifyActOnWebCapabilityChanged(can_act_on_web);
  }
  notifyOnboardingCompletedChanged(completed) {
    return this.$.notifyOnboardingCompletedChanged(completed);
  }
};

glic.mojom.WebClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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

  notifyPanelWillOpen(panel_opening_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec,
      glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec,
      [panel_opening_data],
      false);
  }

  notifyPanelWasClosed() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec,
      glic.mojom.WebClient_NotifyPanelWasClosed_ResponseParamsSpec,
      [],
      false);
  }

  notifyPanelStateChange(panel_state) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec,
      null,
      [panel_state],
      false);
  }

  notifyPanelActiveChange(panel_active) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec,
      null,
      [panel_active],
      false);
  }

  notifyPanelCanAttachChange(can_attach) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec,
      null,
      [can_attach],
      false);
  }

  notifyMicrophonePermissionStateChanged(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec,
      null,
      [enabled],
      false);
  }

  notifyLocationPermissionStateChanged(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec,
      null,
      [enabled],
      false);
  }

  notifyTabContextPermissionStateChanged(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec,
      null,
      [enabled],
      false);
  }

  notifyOsLocationPermissionStateChanged(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec,
      null,
      [enabled],
      false);
  }

  notifyFocusedTabChanged(focused_tab_data) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec,
      null,
      [focused_tab_data],
      false);
  }

  notifyManualResizeChanged(resizing) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec,
      null,
      [resizing],
      false);
  }

  notifyOsHotkeyStateChanged(hotkey) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec,
      null,
      [hotkey],
      false);
  }

  notifyBrowserIsOpenChanged(browser_is_open) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec,
      null,
      [browser_is_open],
      false);
  }

  notifyInstanceActivationChanged(instance_active) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec,
      null,
      [instance_active],
      false);
  }

  notifyClosedCaptioningSettingChanged(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec,
      null,
      [enabled],
      false);
  }

  notifyPinnedTabsChanged(tab_data) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec,
      null,
      [tab_data],
      false);
  }

  notifyPinnedTabDataChanged(tab_data) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec,
      null,
      [tab_data],
      false);
  }

  notifySkillPreviewsChanged(skill_previews) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      glic.mojom.WebClient_NotifySkillPreviewsChanged_ParamsSpec,
      null,
      [skill_previews],
      false);
  }

  notifySkillPreviewChanged(skill_preview) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      glic.mojom.WebClient_NotifySkillPreviewChanged_ParamsSpec,
      null,
      [skill_preview],
      false);
  }

  notifySkillToInvokeChanged(skill) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      glic.mojom.WebClient_NotifySkillToInvokeChanged_ParamsSpec,
      null,
      [skill],
      false);
  }

  notifyZeroStateSuggestionsChanged(suggestions, options) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec,
      null,
      [suggestions, options],
      false);
  }

  notifyActorTaskStateChanged(task_id, state) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      glic.mojom.WebClient_NotifyActorTaskStateChanged_ParamsSpec,
      null,
      [task_id, state],
      false);
  }

  requestViewChange(request) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      glic.mojom.WebClient_RequestViewChange_ParamsSpec,
      null,
      [request],
      false);
  }

  notifyPageMetadataChanged(tab_id, metadata) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec,
      null,
      [tab_id, metadata],
      false);
  }

  notifyDefaultTabContextPermissionStateChanged(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec,
      null,
      [enabled],
      false);
  }

  requestToShowCredentialSelectionDialog(request) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ParamsSpec,
      glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec,
      [request],
      false);
  }

  requestToShowAutofillSuggestionsDialog(request) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec,
      glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec,
      [request],
      false);
  }

  requestToShowUserConfirmationDialog(request) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ParamsSpec,
      glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec,
      [request],
      false);
  }

  requestToConfirmNavigation(request) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      glic.mojom.WebClient_RequestToConfirmNavigation_ParamsSpec,
      glic.mojom.WebClient_RequestToConfirmNavigation_ResponseParamsSpec,
      [request],
      false);
  }

  notifyAdditionalContext(context) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec,
      null,
      [context],
      false);
  }

  notifyActuationOnWebSettingChanged(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec,
      null,
      [enabled],
      false);
  }

  notifyActOnWebCapabilityChanged(can_act_on_web) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec,
      null,
      [can_act_on_web],
      false);
  }

  notifyOnboardingCompletedChanged(completed) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec,
      null,
      [completed],
      false);
  }

};

glic.mojom.WebClient.getRemote = function() {
  let remote = new glic.mojom.WebClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.WebClient',
    'context');
  return remote.$;
};

glic.mojom.WebClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifySkillPreviewsChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifySkillPreviewChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifySkillToInvokeChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyActorTaskStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_RequestViewChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_RequestToConfirmNavigation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec);
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec.$.structSpec);
          const result = this.impl.notifyPanelWillOpen(params.panel_opening_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec.$.structSpec);
          const result = this.impl.notifyPanelWasClosed();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClient_NotifyPanelWasClosed_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec.$.structSpec);
          const result = this.impl.notifyPanelStateChange(params.panel_state);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec.$.structSpec);
          const result = this.impl.notifyPanelActiveChange(params.panel_active);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec.$.structSpec);
          const result = this.impl.notifyPanelCanAttachChange(params.can_attach);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyMicrophonePermissionStateChanged(params.enabled);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyLocationPermissionStateChanged(params.enabled);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyTabContextPermissionStateChanged(params.enabled);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyOsLocationPermissionStateChanged(params.enabled);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyFocusedTabChanged(params.focused_tab_data);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyManualResizeChanged(params.resizing);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyOsHotkeyStateChanged(params.hotkey);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyBrowserIsOpenChanged(params.browser_is_open);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyInstanceActivationChanged(params.instance_active);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyClosedCaptioningSettingChanged(params.enabled);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyPinnedTabsChanged(params.tab_data);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyPinnedTabDataChanged(params.tab_data);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifySkillPreviewsChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifySkillPreviewsChanged(params.skill_previews);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifySkillPreviewChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifySkillPreviewChanged(params.skill_preview);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifySkillToInvokeChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifySkillToInvokeChanged(params.skill);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyZeroStateSuggestionsChanged(params.suggestions, params.options);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyActorTaskStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyActorTaskStateChanged(params.task_id, params.state);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_RequestViewChange_ParamsSpec.$.structSpec);
          const result = this.impl.requestViewChange(params.request);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyPageMetadataChanged(params.tab_id, params.metadata);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyDefaultTabContextPermissionStateChanged(params.enabled);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ParamsSpec.$.structSpec);
          const result = this.impl.requestToShowCredentialSelectionDialog(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec.$.structSpec);
          const result = this.impl.requestToShowAutofillSuggestionsDialog(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ParamsSpec.$.structSpec);
          const result = this.impl.requestToShowUserConfirmationDialog(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_RequestToConfirmNavigation_ParamsSpec.$.structSpec);
          const result = this.impl.requestToConfirmNavigation(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.WebClient_RequestToConfirmNavigation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec.$.structSpec);
          const result = this.impl.notifyAdditionalContext(params.context);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyActuationOnWebSettingChanged(params.enabled);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyActOnWebCapabilityChanged(params.can_act_on_web);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyOnboardingCompletedChanged(params.completed);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

glic.mojom.WebClientReceiver = glic.mojom.WebClientReceiver;

glic.mojom.WebClientPtr = glic.mojom.WebClientRemote;
glic.mojom.WebClientRequest = glic.mojom.WebClientPendingReceiver;


// Interface: CaptureRegionObserver
mojo.internal.Struct(
    glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec, 'glic.mojom.CaptureRegionObserver_OnUpdate_Params', [
      mojo.internal.StructField('result', 0, 0, glic.mojom.CaptureRegionResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, glic.mojom.CaptureRegionErrorReasonSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

glic.mojom.CaptureRegionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.CaptureRegionObserverRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.CaptureRegionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.CaptureRegionObserverPendingReceiver,
      handle);
    this.$ = new glic.mojom.CaptureRegionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onUpdate(result, reason) {
    return this.$.onUpdate(result, reason);
  }
};

glic.mojom.CaptureRegionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CaptureRegionObserver', [
      { explicit: null },
    ]);
  }

  onUpdate(result, reason) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec,
      null,
      [result, reason],
      false);
  }

};

glic.mojom.CaptureRegionObserver.getRemote = function() {
  let remote = new glic.mojom.CaptureRegionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.CaptureRegionObserver',
    'context');
  return remote.$;
};

glic.mojom.CaptureRegionObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CaptureRegionObserver', [
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
             decoder.decodeStructInline(glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.onUpdate(params.result, params.reason);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

glic.mojom.CaptureRegionObserverReceiver = glic.mojom.CaptureRegionObserverReceiver;

glic.mojom.CaptureRegionObserverPtr = glic.mojom.CaptureRegionObserverRemote;
glic.mojom.CaptureRegionObserverRequest = glic.mojom.CaptureRegionObserverPendingReceiver;

