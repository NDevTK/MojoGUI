// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/glic/host/glic.mojom
// Module: glic.mojom

'use strict';

// Module namespace
var glic = glic || {};
glic.mojom = glic.mojom || {};


// Enum: ProfileReadyState
glic.mojom.ProfileReadyState = {
  and: 0,
  but: 1,
};

// Enum: WebUiState
glic.mojom.WebUiState = {
  combined: 0,
  will: 1,
  but: 2,
  or: 3,
  but: 4,
  but: 5,
};

// Enum: MetricUserInputReactionType
glic.mojom.MetricUserInputReactionType = {
};

// Enum: PrepareForClientResult
glic.mojom.PrepareForClientResult = {
  and: 0,
};

// Enum: PerformActionsErrorReason
glic.mojom.PerformActionsErrorReason = {
};

// Enum: CreateTaskErrorReason
glic.mojom.CreateTaskErrorReason = {
};

// Enum: ActorTaskState
glic.mojom.ActorTaskState = {
};

// Enum: ActorTaskPauseReason
glic.mojom.ActorTaskPauseReason = {
};

// Enum: ActorTaskStopReason
glic.mojom.ActorTaskStopReason = {
};

// Enum: CaptureScreenshotErrorReason
glic.mojom.CaptureScreenshotErrorReason = {
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
  or: 0,
  may: 1,
  or: 2,
};

// Enum: SkillSource
glic.mojom.SkillSource = {
};

// Enum: PinTrigger
glic.mojom.PinTrigger = {
};

// Enum: UnpinTrigger
glic.mojom.UnpinTrigger = {
};

// Enum: SwitchConversationErrorReason
glic.mojom.SwitchConversationErrorReason = {
};

// Enum: RegisterConversationErrorReason
glic.mojom.RegisterConversationErrorReason = {
};

// Enum: PanelStateKind
glic.mojom.PanelStateKind = {
  detached: 0,
  attached: 1,
};

// Enum: InvocationSource
glic.mojom.InvocationSource = {
  so: 0,
};

// Enum: WebClientMode
glic.mojom.WebClientMode = {
};

// Enum: WebClientModel
glic.mojom.WebClientModel = {
};

// Enum: WebUseCounter
glic.mojom.WebUseCounter = {
  kSubmitPromptWithAutoMode: 0,
  kTaskInterruptedForUserConfirmation: 1,
  kTaskInterruptedForUserClarification: 2,
};

// Enum: ResponseStopCause
glic.mojom.ResponseStopCause = {
  kUser: 0,
  kOther: 1,
};

// Enum: CaptureRegionErrorReason
glic.mojom.CaptureRegionErrorReason = {
};

// Enum: SettingsPageField
glic.mojom.SettingsPageField = {
};

// Enum: HostCapability
glic.mojom.HostCapability = {
  bypassing: 0,
  bypassing: 1,
};

// Enum: CurrentView
glic.mojom.CurrentView = {
  aural: 0,
};

// Struct: ProfileEnablement
glic.mojom.ProfileEnablement = class {
  constructor(values = {}) {
    this.not_regular_profile = values.not_regular_profile !== undefined ? values.not_regular_profile : false;
    this.not_rolled_out = values.not_rolled_out !== undefined ? values.not_rolled_out : false;
    this.not_consented = values.not_consented !== undefined ? values.not_consented : false;
  }
};

// Struct: GetContextResultWithActionResultCode
glic.mojom.GetContextResultWithActionResultCode = class {
  constructor(values = {}) {
    this.get_context_result = values.get_context_result !== undefined ? values.get_context_result : null;
    this.action_result = values.action_result !== undefined ? values.action_result : 0;
  }
};

// Struct: UserProfileInfo
glic.mojom.UserProfileInfo = class {
  constructor(values = {}) {
    this.is_managed = values.is_managed !== undefined ? values.is_managed : false;
  }
};

// Struct: WebClientInitialState
glic.mojom.WebClientInitialState = class {
  constructor(values = {}) {
    this.skill_previews = values.skill_previews !== undefined ? values.skill_previews : false;
  }
};

// Struct: GetTabContextOptions
glic.mojom.GetTabContextOptions = class {
  constructor(values = {}) {
    this.include_pdf = values.include_pdf !== undefined ? values.include_pdf : 0;
    this.pdf_size_limit = values.pdf_size_limit !== undefined ? values.pdf_size_limit : 0;
    this.0 = values.0 !== undefined ? values.0 : 0;
  }
};

// Struct: GetPinCandidatesOptions
glic.mojom.GetPinCandidatesOptions = class {
  constructor(values = {}) {
    this.query = values.query !== undefined ? values.query : 0;
  }
};

// Struct: ScrollToParams
glic.mojom.ScrollToParams = class {
  constructor(values = {}) {
    this.highlight = values.highlight !== undefined ? values.highlight : false;
    this.document_id = values.document_id !== undefined ? values.document_id : null;
    this.url = values.url !== undefined ? values.url : null;
  }
};

// Struct: ScrollToTextSelector
glic.mojom.ScrollToTextSelector = class {
  constructor(values = {}) {
    this.text = values.text !== undefined ? values.text : "";
    this.search_range_start_node_id = values.search_range_start_node_id !== undefined ? values.search_range_start_node_id : 0;
  }
};

// Struct: ScrollToTextFragmentSelector
glic.mojom.ScrollToTextFragmentSelector = class {
  constructor(values = {}) {
    this.text_end = values.text_end !== undefined ? values.text_end : "";
    this.search_range_start_node_id = values.search_range_start_node_id !== undefined ? values.search_range_start_node_id : 0;
  }
};

// Struct: ScrollToNodeSelector
glic.mojom.ScrollToNodeSelector = class {
  constructor(values = {}) {
    this.node_id = values.node_id !== undefined ? values.node_id : 0;
  }
};

// Struct: SuggestionContent
glic.mojom.SuggestionContent = class {
  constructor(values = {}) {
    this.suggestion = values.suggestion !== undefined ? values.suggestion : "";
  }
};

// Struct: SkillPreview
glic.mojom.SkillPreview = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : "";
    this.source = values.source !== undefined ? values.source : "";
  }
};

// Struct: Skill
glic.mojom.Skill = class {
  constructor(values = {}) {
    this.prompt = values.prompt !== undefined ? values.prompt : "";
  }
};

// Struct: CreateSkillRequest
glic.mojom.CreateSkillRequest = class {
  constructor(values = {}) {
    this.prompt = values.prompt !== undefined ? values.prompt : "";
  }
};

// Struct: UpdateSkillRequest
glic.mojom.UpdateSkillRequest = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : "";
  }
};

// Struct: ZeroStateSuggestions
glic.mojom.ZeroStateSuggestions = class {
  constructor(values = {}) {
    this.tab_url = values.tab_url !== undefined ? values.tab_url : 0;
  }
};

// Struct: ZeroStateSuggestionsV2
glic.mojom.ZeroStateSuggestionsV2 = class {
  constructor(values = {}) {
    this.is_pending = values.is_pending !== undefined ? values.is_pending : false;
  }
};

// Struct: ZeroStateSuggestionsOptions
glic.mojom.ZeroStateSuggestionsOptions = class {
  constructor(values = {}) {
    this.supported_tools = values.supported_tools !== undefined ? values.supported_tools : false;
  }
};

// Struct: PinCandidate
glic.mojom.PinCandidate = class {
  constructor(values = {}) {
    this.tab_data = values.tab_data !== undefined ? values.tab_data : null;
  }
};

// Struct: PinTabsOptions
glic.mojom.PinTabsOptions = class {
  constructor(values = {}) {
    this.pin_trigger = values.pin_trigger !== undefined ? values.pin_trigger : 0;
  }
};

// Struct: UnpinTabsOptions
glic.mojom.UnpinTabsOptions = class {
  constructor(values = {}) {
    this.unpin_trigger = values.unpin_trigger !== undefined ? values.unpin_trigger : 0;
  }
};

// Struct: ConversationInfo
glic.mojom.ConversationInfo = class {
  constructor(values = {}) {
    this.client_data = values.client_data !== undefined ? values.client_data : "";
  }
};

// Struct: PanelOpeningData
glic.mojom.PanelOpeningData = class {
  constructor(values = {}) {
    this.invocation_source = values.invocation_source !== undefined ? values.invocation_source : null;
    this.a = values.a !== undefined ? values.a : null;
    this.conversation_info = values.conversation_info !== undefined ? values.conversation_info : "";
  }
};

// Struct: PanelState
glic.mojom.PanelState = class {
  constructor(values = {}) {
    this.kind = values.kind !== undefined ? values.kind : null;
    this.window_id = values.window_id !== undefined ? values.window_id : 0;
  }
};

// Struct: OnResponseStoppedDetails
glic.mojom.OnResponseStoppedDetails = class {
  constructor(values = {}) {
    this.cause = values.cause !== undefined ? values.cause : null;
  }
};

// Struct: OpenPanelInfo
glic.mojom.OpenPanelInfo = class {
  constructor(values = {}) {
    this.web_client_mode = values.web_client_mode !== undefined ? values.web_client_mode : null;
    this.can_user_resize = values.can_user_resize !== undefined ? values.can_user_resize : false;
  }
};

// Struct: ContextData
glic.mojom.ContextData = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : "";
  }
};

// Struct: AdditionalContext
glic.mojom.AdditionalContext = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : "";
    this.parts = values.parts !== undefined ? values.parts : 0;
  }
};

// Struct: TabContext
glic.mojom.TabContext = class {
  constructor(values = {}) {
    this.tab_data = values.tab_data !== undefined ? values.tab_data : null;
    this.viewport_screenshot = values.viewport_screenshot !== undefined ? values.viewport_screenshot : null;
    this.annotated_page_data = values.annotated_page_data !== undefined ? values.annotated_page_data : null;
  }
};

// Struct: WebPageData
glic.mojom.WebPageData = class {
  constructor(values = {}) {
    this.main_document = values.main_document !== undefined ? values.main_document : null;
  }
};

// Struct: DocumentData
glic.mojom.DocumentData = class {
  constructor(values = {}) {
    this.inner_text_truncated = values.inner_text_truncated !== undefined ? values.inner_text_truncated : false;
  }
};

// Struct: PdfDocumentData
glic.mojom.PdfDocumentData = class {
  constructor(values = {}) {
    this.pdf_data = values.pdf_data !== undefined ? values.pdf_data : 0;
    this.size_limit_exceeded = values.size_limit_exceeded !== undefined ? values.size_limit_exceeded : false;
  }
};

// Struct: TabData
glic.mojom.TabData = class {
  constructor(values = {}) {
    this.is_observable = values.is_observable !== undefined ? values.is_observable : 0;
    this.UI. = values.UI. !== undefined ? values.UI. : null;
    this.is_media_active = values.is_media_active !== undefined ? values.is_media_active : false;
    this.is_window_active = values.is_window_active !== undefined ? values.is_window_active : false;
  }
};

// Struct: NoFocusedTabData
glic.mojom.NoFocusedTabData = class {
  constructor(values = {}) {
    this.no_focus_reason = values.no_focus_reason !== undefined ? values.no_focus_reason : "";
  }
};

// Struct: AnnotatedPageData
glic.mojom.AnnotatedPageData = class {
  constructor(values = {}) {
    this.metadata = values.metadata !== undefined ? values.metadata : null;
  }
};

// Struct: ImageOriginAnnotations
glic.mojom.ImageOriginAnnotations = class {
  constructor(values = {}) {
  }
};

// Struct: Journal
glic.mojom.Journal = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : 0;
  }
};

// Struct: CaptureRegionResult
glic.mojom.CaptureRegionResult = class {
  constructor(values = {}) {
    this.region = values.region !== undefined ? values.region : 0;
  }
};

// Struct: Screenshot
glic.mojom.Screenshot = class {
  constructor(values = {}) {
    this.origin_annotations = values.origin_annotations !== undefined ? values.origin_annotations : 0;
  }
};

// Struct: OpenSettingsOptions
glic.mojom.OpenSettingsOptions = class {
  constructor(values = {}) {
    this.highlightField = values.highlightField !== undefined ? values.highlightField : null;
  }
};

// Struct: ViewChangeRequestActuation
glic.mojom.ViewChangeRequestActuation = class {
  constructor(values = {}) {
  }
};

// Struct: ViewChangeRequestConversation
glic.mojom.ViewChangeRequestConversation = class {
  constructor(values = {}) {
  }
};

// Struct: ViewChangeRequest
glic.mojom.ViewChangeRequest = class {
  constructor(values = {}) {
    this.details = values.details !== undefined ? values.details : null;
  }
};

// Struct: ViewChangedNotification
glic.mojom.ViewChangedNotification = class {
  constructor(values = {}) {
    this.current_view = values.current_view !== undefined ? values.current_view : null;
  }
};

// Interface: PreloadPage
glic.mojom.PreloadPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'glic.mojom.PreloadPage';
  }

  setProfileReadyState(ready_state) {
    // Method: SetProfileReadyState
    // Call: SetProfileReadyState(ready_state)
  }

};

glic.mojom.PreloadPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
glic.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'glic.mojom.Page';
  }

  intentToShow() {
    // Method: IntentToShow
    // Call: IntentToShow()
  }

  setProfileReadyState(ready_state) {
    // Method: SetProfileReadyState
    // Call: SetProfileReadyState(ready_state)
  }

  updatePageState(panelStateKind) {
    // Method: UpdatePageState
    // Call: UpdatePageState(panelStateKind)
  }

};

glic.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GlicPreloadHandler
glic.mojom.GlicPreloadHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'glic.mojom.GlicPreloadHandler';
  }

  prepareForClient() {
    // Method: PrepareForClient
    return new Promise((resolve) => {
      // Call: PrepareForClient()
      resolve({});
    });
  }

};

glic.mojom.GlicPreloadHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GlicPreloadHandlerFactory
glic.mojom.GlicPreloadHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'glic.mojom.GlicPreloadHandlerFactory';
  }

  createPreloadHandler(receiver, page) {
    // Method: CreatePreloadHandler
    // Call: CreatePreloadHandler(receiver, page)
  }

};

glic.mojom.GlicPreloadHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandlerFactory
glic.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'glic.mojom.PageHandlerFactory';
  }

  createPageHandler(receiver, page) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(receiver, page)
  }

};

glic.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
glic.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'glic.mojom.PageHandler';
  }

  createWebClient(web_client_receiver) {
    // Method: CreateWebClient
    // Call: CreateWebClient(web_client_receiver)
  }

  prepareForClient() {
    // Method: PrepareForClient
    return new Promise((resolve) => {
      // Call: PrepareForClient()
      resolve({});
    });
  }

  webviewCommitted(url) {
    // Method: WebviewCommitted
    // Call: WebviewCommitted(url)
  }

  closePanel() {
    // Method: ClosePanel
    // Call: ClosePanel()
  }

  openProfilePickerAndClosePanel() {
    // Method: OpenProfilePickerAndClosePanel
    // Call: OpenProfilePickerAndClosePanel()
  }

  openDisabledByAdminLinkAndClosePanel() {
    // Method: OpenDisabledByAdminLinkAndClosePanel
    // Call: OpenDisabledByAdminLinkAndClosePanel()
  }

  signInAndClosePanel() {
    // Method: SignInAndClosePanel
    // Call: SignInAndClosePanel()
  }

  resizeWidget(size, duration) {
    // Method: ResizeWidget
    // Call: ResizeWidget(size, duration)
  }

  enableDragResize(enabled) {
    // Method: EnableDragResize
    // Call: EnableDragResize(enabled)
  }

  webUiStateChanged(new_state) {
    // Method: WebUiStateChanged
    // Call: WebUiStateChanged(new_state)
  }

  getProfileEnablement() {
    // Method: GetProfileEnablement
    return new Promise((resolve) => {
      // Call: GetProfileEnablement()
      resolve({});
    });
  }

};

glic.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PinCandidatesObserver
glic.mojom.PinCandidatesObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'glic.mojom.PinCandidatesObserver';
  }

  onPinCandidatesChanged(candidates) {
    // Method: OnPinCandidatesChanged
    // Call: OnPinCandidatesChanged(candidates)
  }

};

glic.mojom.PinCandidatesObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebClientHandler
glic.mojom.WebClientHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'glic.mojom.WebClientHandler';
  }

  webClientCreated(web_client) {
    // Method: WebClientCreated
    return new Promise((resolve) => {
      // Call: WebClientCreated(web_client)
      resolve({});
    });
  }

  webClientInitialized() {
    // Method: WebClientInitialized
    // Call: WebClientInitialized()
  }

  webClientInitializeFailed() {
    // Method: WebClientInitializeFailed
    // Call: WebClientInitializeFailed()
  }

  createTab(url, open_in_background, window_id) {
    // Method: CreateTab
    return new Promise((resolve) => {
      // Call: CreateTab(url, open_in_background, window_id)
      resolve({});
    });
  }

  openLinkInPopup(url, popup_width, popup_height) {
    // Method: OpenLinkInPopup
    // Call: OpenLinkInPopup(url, popup_width, popup_height)
  }

  openGlicSettingsPage(options) {
    // Method: OpenGlicSettingsPage
    // Call: OpenGlicSettingsPage(options)
  }

  openPasswordManagerSettingsPage() {
    // Method: OpenPasswordManagerSettingsPage
    // Call: OpenPasswordManagerSettingsPage()
  }

  closePanel() {
    // Method: ClosePanel
    // Call: ClosePanel()
  }

  closePanelAndShutdown() {
    // Method: ClosePanelAndShutdown
    // Call: ClosePanelAndShutdown()
  }

  attachPanel() {
    // Method: AttachPanel
    // Call: AttachPanel()
  }

  detachPanel() {
    // Method: DetachPanel
    // Call: DetachPanel()
  }

  onModeChange(new_mode) {
    // Method: OnModeChange
    // Call: OnModeChange(new_mode)
  }

  showProfilePicker() {
    // Method: ShowProfilePicker
    // Call: ShowProfilePicker()
  }

  getModelQualityClientId() {
    // Method: GetModelQualityClientId
    return new Promise((resolve) => {
      // Call: GetModelQualityClientId()
      resolve({});
    });
  }

  getContextFromFocusedTab(options) {
    // Method: GetContextFromFocusedTab
    return new Promise((resolve) => {
      // Call: GetContextFromFocusedTab(options)
      resolve({});
    });
  }

  getContextFromTab(tab_id, options) {
    // Method: GetContextFromTab
    return new Promise((resolve) => {
      // Call: GetContextFromTab(tab_id, options)
      resolve({});
    });
  }

  getContextForActorFromTab(tab_id, options) {
    // Method: GetContextForActorFromTab
    return new Promise((resolve) => {
      // Call: GetContextForActorFromTab(tab_id, options)
      resolve({});
    });
  }

  setMaximumNumberOfPinnedTabs(requested_max) {
    // Method: SetMaximumNumberOfPinnedTabs
    return new Promise((resolve) => {
      // Call: SetMaximumNumberOfPinnedTabs(requested_max)
      resolve({});
    });
  }

  pinTabs(tab_ids, options) {
    // Method: PinTabs
    return new Promise((resolve) => {
      // Call: PinTabs(tab_ids, options)
      resolve({});
    });
  }

  unpinTabs(tab_ids, options) {
    // Method: UnpinTabs
    return new Promise((resolve) => {
      // Call: UnpinTabs(tab_ids, options)
      resolve({});
    });
  }

  unpinAllTabs(options) {
    // Method: UnpinAllTabs
    // Call: UnpinAllTabs(options)
  }

  createSkill(request) {
    // Method: CreateSkill
    return new Promise((resolve) => {
      // Call: CreateSkill(request)
      resolve({});
    });
  }

  updateSkill(request) {
    // Method: UpdateSkill
    return new Promise((resolve) => {
      // Call: UpdateSkill(request)
      resolve({});
    });
  }

  getSkill(id) {
    // Method: GetSkill
    return new Promise((resolve) => {
      // Call: GetSkill(id)
      resolve({});
    });
  }

  subscribeToPinCandidates(options, observer) {
    // Method: SubscribeToPinCandidates
    // Call: SubscribeToPinCandidates(options, observer)
  }

  createTask(task_options) {
    // Method: CreateTask
    // Call: CreateTask(task_options)
  }

  performActions(actions_proto) {
    // Method: PerformActions
    // Call: PerformActions(actions_proto)
  }

  stopActorTask(task_id, stop_reason) {
    // Method: StopActorTask
    // Call: StopActorTask(task_id, stop_reason)
  }

  pauseActorTask(task_id, pause_reason, tab_id) {
    // Method: PauseActorTask
    // Call: PauseActorTask(task_id, pause_reason, tab_id)
  }

  resumeActorTask(task_id, context_options) {
    // Method: ResumeActorTask
    return new Promise((resolve) => {
      // Call: ResumeActorTask(task_id, context_options)
      resolve({});
    });
  }

  interruptActorTask(task_id) {
    // Method: InterruptActorTask
    // Call: InterruptActorTask(task_id)
  }

  uninterruptActorTask(task_id) {
    // Method: UninterruptActorTask
    // Call: UninterruptActorTask(task_id)
  }

  createActorTab(task_id, open_in_background, initiator_tab_id, initiator_window_id) {
    // Method: CreateActorTab
    return new Promise((resolve) => {
      // Call: CreateActorTab(task_id, open_in_background, initiator_tab_id, initiator_window_id)
      resolve({});
    });
  }

  activateTab(task_id) {
    // Method: ActivateTab
    // Call: ActivateTab(task_id)
  }

  resizeWidget(size, duration) {
    // Method: ResizeWidget
    // Call: ResizeWidget(size, duration)
  }

  captureScreenshot() {
    // Method: CaptureScreenshot
    return new Promise((resolve) => {
      // Call: CaptureScreenshot()
      resolve({});
    });
  }

  captureRegion(observer) {
    // Method: CaptureRegion
    // Call: CaptureRegion(observer)
  }

  setAudioDucking(enable) {
    // Method: SetAudioDucking
    return new Promise((resolve) => {
      // Call: SetAudioDucking(enable)
      resolve({});
    });
  }

  setPanelDraggableAreas(draggable_areas) {
    // Method: SetPanelDraggableAreas
    // Call: SetPanelDraggableAreas(draggable_areas)
  }

  setMinimumPanelSize(size) {
    // Method: SetMinimumPanelSize
    // Call: SetMinimumPanelSize(size)
  }

  setMicrophonePermissionState(enabled) {
    // Method: SetMicrophonePermissionState
    // Call: SetMicrophonePermissionState(enabled)
  }

  setLocationPermissionState(enabled) {
    // Method: SetLocationPermissionState
    // Call: SetLocationPermissionState(enabled)
  }

  setTabContextPermissionState(enabled) {
    // Method: SetTabContextPermissionState
    // Call: SetTabContextPermissionState(enabled)
  }

  setClosedCaptioningSetting(enabled) {
    // Method: SetClosedCaptioningSetting
    // Call: SetClosedCaptioningSetting(enabled)
  }

  setActuationOnWebSetting(enabled) {
    // Method: SetActuationOnWebSetting
    // Call: SetActuationOnWebSetting(enabled)
  }

  shouldAllowMediaPermissionRequest() {
    // Method: ShouldAllowMediaPermissionRequest
    return new Promise((resolve) => {
      // Call: ShouldAllowMediaPermissionRequest()
      resolve({});
    });
  }

  shouldAllowGeolocationPermissionRequest() {
    // Method: ShouldAllowGeolocationPermissionRequest
    return new Promise((resolve) => {
      // Call: ShouldAllowGeolocationPermissionRequest()
      resolve({});
    });
  }

  setContextAccessIndicator(enabled) {
    // Method: SetContextAccessIndicator
    // Call: SetContextAccessIndicator(enabled)
  }

  getUserProfileInfo() {
    // Method: GetUserProfileInfo
    return new Promise((resolve) => {
      // Call: GetUserProfileInfo()
      resolve({});
    });
  }

  syncCookies() {
    // Method: SyncCookies
    return new Promise((resolve) => {
      // Call: SyncCookies()
      resolve({});
    });
  }

  logBeginAsyncEvent(event_async_id, task_id, event, details) {
    // Method: LogBeginAsyncEvent
    // Call: LogBeginAsyncEvent(event_async_id, task_id, event, details)
  }

  logEndAsyncEvent(event_async_id, details) {
    // Method: LogEndAsyncEvent
    // Call: LogEndAsyncEvent(event_async_id, details)
  }

  logInstantEvent(task_id, event, details) {
    // Method: LogInstantEvent
    // Call: LogInstantEvent(task_id, event, details)
  }

  journalClear() {
    // Method: JournalClear
    // Call: JournalClear()
  }

  journalSnapshot(clear_journal) {
    // Method: JournalSnapshot
    return new Promise((resolve) => {
      // Call: JournalSnapshot(clear_journal)
      resolve({});
    });
  }

  journalStart(max_bytes, capture_screenshots) {
    // Method: JournalStart
    // Call: JournalStart(max_bytes, capture_screenshots)
  }

  journalStop() {
    // Method: JournalStop
    // Call: JournalStop()
  }

  journalRecordFeedback(positive, reason) {
    // Method: JournalRecordFeedback
    // Call: JournalRecordFeedback(positive, reason)
  }

  onUserInputSubmitted(mode) {
    // Method: OnUserInputSubmitted
    // Call: OnUserInputSubmitted(mode)
  }

  onContextUploadStarted() {
    // Method: OnContextUploadStarted
    // Call: OnContextUploadStarted()
  }

  onContextUploadCompleted() {
    // Method: OnContextUploadCompleted
    // Call: OnContextUploadCompleted()
  }

  onReaction(reactionType) {
    // Method: OnReaction
    // Call: OnReaction(reactionType)
  }

  onResponseStarted() {
    // Method: OnResponseStarted
    // Call: OnResponseStarted()
  }

  onResponseStopped(details) {
    // Method: OnResponseStopped
    // Call: OnResponseStopped(details)
  }

  onSessionTerminated() {
    // Method: OnSessionTerminated
    // Call: OnSessionTerminated()
  }

  onTurnCompleted(model, duration) {
    // Method: OnTurnCompleted
    // Call: OnTurnCompleted(model, duration)
  }

  onModelChanged(model) {
    // Method: OnModelChanged
    // Call: OnModelChanged(model)
  }

  onRecordUseCounter(counter) {
    // Method: OnRecordUseCounter
    // Call: OnRecordUseCounter(counter)
  }

  onResponseRated(positive) {
    // Method: OnResponseRated
    // Call: OnResponseRated(positive)
  }

  onClosedCaptionsShown() {
    // Method: OnClosedCaptionsShown
    // Call: OnClosedCaptionsShown()
  }

  scrollTo(params) {
    // Method: ScrollTo
    return new Promise((resolve) => {
      // Call: ScrollTo(params)
      resolve({});
    });
  }

  dropScrollToHighlight() {
    // Method: DropScrollToHighlight
    // Call: DropScrollToHighlight()
  }

  setSyntheticExperimentState(trial_name, group_name) {
    // Method: SetSyntheticExperimentState
    // Call: SetSyntheticExperimentState(trial_name, group_name)
  }

  openOsPermissionSettingsMenu(type) {
    // Method: OpenOsPermissionSettingsMenu
    // Call: OpenOsPermissionSettingsMenu(type)
  }

  getOsMicrophonePermissionStatus() {
    // Method: GetOsMicrophonePermissionStatus
    return new Promise((resolve) => {
      // Call: GetOsMicrophonePermissionStatus()
      resolve({});
    });
  }

  getZeroStateSuggestionsAndSubscribe(is_live, options) {
    // Method: GetZeroStateSuggestionsAndSubscribe
    return new Promise((resolve) => {
      // Call: GetZeroStateSuggestionsAndSubscribe(is_live, options)
      resolve({});
    });
  }

  getZeroStateSuggestionsForFocusedTab(is_first_run) {
    // Method: GetZeroStateSuggestionsForFocusedTab
    return new Promise((resolve) => {
      // Call: GetZeroStateSuggestionsForFocusedTab(is_first_run)
      resolve({});
    });
  }

  maybeRefreshUserStatus() {
    // Method: MaybeRefreshUserStatus
    // Call: MaybeRefreshUserStatus()
  }

  isDebuggerAttached() {
    // Method: IsDebuggerAttached
    return new Promise((resolve) => {
      // Call: IsDebuggerAttached()
      resolve({});
    });
  }

  onViewChanged(notification) {
    // Method: OnViewChanged
    // Call: OnViewChanged(notification)
  }

  subscribeToPageMetadata(tab_id, names) {
    // Method: SubscribeToPageMetadata
    return new Promise((resolve) => {
      // Call: SubscribeToPageMetadata(tab_id, names)
      resolve({});
    });
  }

  switchConversation(info) {
    // Method: SwitchConversation
    return new Promise((resolve) => {
      // Call: SwitchConversation(info)
      resolve({});
    });
  }

  registerConversation(info) {
    // Method: RegisterConversation
    return new Promise((resolve) => {
      // Call: RegisterConversation(info)
      resolve({});
    });
  }

  setOnboardingCompleted() {
    // Method: SetOnboardingCompleted
    // Call: SetOnboardingCompleted()
  }

  subscribeToTabData(tab_id, receiver) {
    // Method: SubscribeToTabData
    // Call: SubscribeToTabData(tab_id, receiver)
  }

};

glic.mojom.WebClientHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TabDataHandler
glic.mojom.TabDataHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'glic.mojom.TabDataHandler';
  }

  onTabDataChanged(tab_data) {
    // Method: OnTabDataChanged
    // Call: OnTabDataChanged(tab_data)
  }

};

glic.mojom.TabDataHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebClient
glic.mojom.WebClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'glic.mojom.WebClient';
  }

  notifyPanelWillOpen(panel_opening_data) {
    // Method: NotifyPanelWillOpen
    return new Promise((resolve) => {
      // Call: NotifyPanelWillOpen(panel_opening_data)
      resolve({});
    });
  }

  notifyPanelWasClosed() {
    // Method: NotifyPanelWasClosed
    // Call: NotifyPanelWasClosed()
  }

  notifyPanelStateChange(panel_state) {
    // Method: NotifyPanelStateChange
    // Call: NotifyPanelStateChange(panel_state)
  }

  notifyPanelActiveChange(panel_active) {
    // Method: NotifyPanelActiveChange
    // Call: NotifyPanelActiveChange(panel_active)
  }

  notifyPanelCanAttachChange(can_attach) {
    // Method: NotifyPanelCanAttachChange
    // Call: NotifyPanelCanAttachChange(can_attach)
  }

  notifyMicrophonePermissionStateChanged(enabled) {
    // Method: NotifyMicrophonePermissionStateChanged
    // Call: NotifyMicrophonePermissionStateChanged(enabled)
  }

  notifyLocationPermissionStateChanged(enabled) {
    // Method: NotifyLocationPermissionStateChanged
    // Call: NotifyLocationPermissionStateChanged(enabled)
  }

  notifyTabContextPermissionStateChanged(enabled) {
    // Method: NotifyTabContextPermissionStateChanged
    // Call: NotifyTabContextPermissionStateChanged(enabled)
  }

  notifyOsLocationPermissionStateChanged(enabled) {
    // Method: NotifyOsLocationPermissionStateChanged
    // Call: NotifyOsLocationPermissionStateChanged(enabled)
  }

  notifyFocusedTabChanged(focused_tab_data) {
    // Method: NotifyFocusedTabChanged
    // Call: NotifyFocusedTabChanged(focused_tab_data)
  }

  notifyManualResizeChanged(resizing) {
    // Method: NotifyManualResizeChanged
    // Call: NotifyManualResizeChanged(resizing)
  }

  notifyOsHotkeyStateChanged(hotkey) {
    // Method: NotifyOsHotkeyStateChanged
    // Call: NotifyOsHotkeyStateChanged(hotkey)
  }

  notifyBrowserIsOpenChanged(browser_is_open) {
    // Method: NotifyBrowserIsOpenChanged
    // Call: NotifyBrowserIsOpenChanged(browser_is_open)
  }

  notifyInstanceActivationChanged(instance_active) {
    // Method: NotifyInstanceActivationChanged
    // Call: NotifyInstanceActivationChanged(instance_active)
  }

  notifyClosedCaptioningSettingChanged(enabled) {
    // Method: NotifyClosedCaptioningSettingChanged
    // Call: NotifyClosedCaptioningSettingChanged(enabled)
  }

  notifyPinnedTabsChanged(tab_data) {
    // Method: NotifyPinnedTabsChanged
    // Call: NotifyPinnedTabsChanged(tab_data)
  }

  notifyPinnedTabDataChanged(tab_data) {
    // Method: NotifyPinnedTabDataChanged
    // Call: NotifyPinnedTabDataChanged(tab_data)
  }

  notifySkillPreviewsChanged(skill_previews) {
    // Method: NotifySkillPreviewsChanged
    // Call: NotifySkillPreviewsChanged(skill_previews)
  }

  notifySkillPreviewChanged(skill_preview) {
    // Method: NotifySkillPreviewChanged
    // Call: NotifySkillPreviewChanged(skill_preview)
  }

  notifySkillToInvokeChanged(skill) {
    // Method: NotifySkillToInvokeChanged
    // Call: NotifySkillToInvokeChanged(skill)
  }

  notifyZeroStateSuggestionsChanged(suggestions, options) {
    // Method: NotifyZeroStateSuggestionsChanged
    // Call: NotifyZeroStateSuggestionsChanged(suggestions, options)
  }

  notifyActorTaskStateChanged(task_id, state) {
    // Method: NotifyActorTaskStateChanged
    // Call: NotifyActorTaskStateChanged(task_id, state)
  }

  requestViewChange(request) {
    // Method: RequestViewChange
    // Call: RequestViewChange(request)
  }

  notifyPageMetadataChanged(tab_id, metadata) {
    // Method: NotifyPageMetadataChanged
    // Call: NotifyPageMetadataChanged(tab_id, metadata)
  }

  notifyDefaultTabContextPermissionStateChanged(enabled) {
    // Method: NotifyDefaultTabContextPermissionStateChanged
    // Call: NotifyDefaultTabContextPermissionStateChanged(enabled)
  }

  requestToShowCredentialSelectionDialog(request) {
    // Method: RequestToShowCredentialSelectionDialog
    return new Promise((resolve) => {
      // Call: RequestToShowCredentialSelectionDialog(request)
      resolve({});
    });
  }

  requestToShowAutofillSuggestionsDialog(request) {
    // Method: RequestToShowAutofillSuggestionsDialog
    return new Promise((resolve) => {
      // Call: RequestToShowAutofillSuggestionsDialog(request)
      resolve({});
    });
  }

  requestToShowUserConfirmationDialog(request) {
    // Method: RequestToShowUserConfirmationDialog
    return new Promise((resolve) => {
      // Call: RequestToShowUserConfirmationDialog(request)
      resolve({});
    });
  }

  requestToConfirmNavigation(request) {
    // Method: RequestToConfirmNavigation
    return new Promise((resolve) => {
      // Call: RequestToConfirmNavigation(request)
      resolve({});
    });
  }

  notifyAdditionalContext(context) {
    // Method: NotifyAdditionalContext
    // Call: NotifyAdditionalContext(context)
  }

  notifyActuationOnWebSettingChanged(enabled) {
    // Method: NotifyActuationOnWebSettingChanged
    // Call: NotifyActuationOnWebSettingChanged(enabled)
  }

  notifyActOnWebCapabilityChanged(can_act_on_web) {
    // Method: NotifyActOnWebCapabilityChanged
    // Call: NotifyActOnWebCapabilityChanged(can_act_on_web)
  }

  notifyOnboardingCompletedChanged(completed) {
    // Method: NotifyOnboardingCompletedChanged
    // Call: NotifyOnboardingCompletedChanged(completed)
  }

};

glic.mojom.WebClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CaptureRegionObserver
glic.mojom.CaptureRegionObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'glic.mojom.CaptureRegionObserver';
  }

  onUpdate(result, reason) {
    // Method: OnUpdate
    // Call: OnUpdate(result, reason)
  }

};

glic.mojom.CaptureRegionObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
