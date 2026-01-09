// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/glic/host/glic.mojom
// Module: glic.mojom

'use strict';

// Module namespace
var glic = glic || {};
glic.mojom = glic.mojom || {};


// Enum: ProfileReadyState
glic.mojom.ProfileReadyState = {
  kUnknownError: 0,
  kSignInRequired: 1,
  kReady: 2,
  kIneligible: 3,
  kDisabledByAdmin: 4,
};
glic.mojom.ProfileReadyStateSpec = { $: mojo.internal.Enum() };

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
glic.mojom.WebUiStateSpec = { $: mojo.internal.Enum() };

// Enum: MetricUserInputReactionType
glic.mojom.MetricUserInputReactionType = {
  kCanned: 0,
  kModel: 1,
};
glic.mojom.MetricUserInputReactionTypeSpec = { $: mojo.internal.Enum() };

// Enum: PrepareForClientResult
glic.mojom.PrepareForClientResult = {
  kSuccess: 0,
  kErrorResyncingCookies: 1,
  kRequiresSignIn: 2,
};
glic.mojom.PrepareForClientResultSpec = { $: mojo.internal.Enum() };

// Enum: PerformActionsErrorReason
glic.mojom.PerformActionsErrorReason = {
};
glic.mojom.PerformActionsErrorReasonSpec = { $: mojo.internal.Enum() };

// Enum: CreateTaskErrorReason
glic.mojom.CreateTaskErrorReason = {
  kTaskSystemUnavailable: 0,
};
glic.mojom.CreateTaskErrorReasonSpec = { $: mojo.internal.Enum() };

// Enum: ActorTaskState
glic.mojom.ActorTaskState = {
  kIdle: 0,
  kActing: 1,
  kPaused: 2,
  kStopped: 3,
};
glic.mojom.ActorTaskStateSpec = { $: mojo.internal.Enum() };

// Enum: ActorTaskPauseReason
glic.mojom.ActorTaskPauseReason = {
  kPausedByUser: 0,
};
glic.mojom.ActorTaskPauseReasonSpec = { $: mojo.internal.Enum() };

// Enum: ActorTaskStopReason
glic.mojom.ActorTaskStopReason = {
  kStoppedByUser: 0,
};
glic.mojom.ActorTaskStopReasonSpec = { $: mojo.internal.Enum() };

// Enum: CaptureScreenshotErrorReason
glic.mojom.CaptureScreenshotErrorReason = {
  kScreenCaptureRequestThrottled: 0,
  kUserCancelledScreenPickerDialog: 1,
};
glic.mojom.CaptureScreenshotErrorReasonSpec = { $: mojo.internal.Enum() };

// Enum: Platform
glic.mojom.Platform = {
  kUnknown: 0,
  kMacOS: 1,
  kWindows: 2,
  kLinux: 3,
  kChromeOS: 4,
};
glic.mojom.PlatformSpec = { $: mojo.internal.Enum() };

// Enum: ScrollToErrorReason
glic.mojom.ScrollToErrorReason = {
};
glic.mojom.ScrollToErrorReasonSpec = { $: mojo.internal.Enum() };

// Enum: SkillSource
glic.mojom.SkillSource = {
  kFirstParty: 0,
  kUserCreated: 1,
};
glic.mojom.SkillSourceSpec = { $: mojo.internal.Enum() };

// Enum: PinTrigger
glic.mojom.PinTrigger = {
  kCandidatesToggle: 0,
  kAtMention: 1,
  kActuation: 2,
};
glic.mojom.PinTriggerSpec = { $: mojo.internal.Enum() };

// Enum: UnpinTrigger
glic.mojom.UnpinTrigger = {
  kCandidatesToggle: 0,
  kChip: 1,
  kActuation: 2,
};
glic.mojom.UnpinTriggerSpec = { $: mojo.internal.Enum() };

// Enum: CancelActionsResult
glic.mojom.CancelActionsResult = {
  kSuccess: 0,
  kTaskNotFound: 1,
  kFailed: 2,
};
glic.mojom.CancelActionsResultSpec = { $: mojo.internal.Enum() };

// Enum: SwitchConversationErrorReason
glic.mojom.SwitchConversationErrorReason = {
};
glic.mojom.SwitchConversationErrorReasonSpec = { $: mojo.internal.Enum() };

// Enum: RegisterConversationErrorReason
glic.mojom.RegisterConversationErrorReason = {
  kInstanceAlreadyHasConversationId: 0,
};
glic.mojom.RegisterConversationErrorReasonSpec = { $: mojo.internal.Enum() };

// Enum: PanelStateKind
glic.mojom.PanelStateKind = {
  kHidden: 0,
  kDetached: 1,
  kAttached: 2,
};
glic.mojom.PanelStateKindSpec = { $: mojo.internal.Enum() };

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
};
glic.mojom.InvocationSourceSpec = { $: mojo.internal.Enum() };

// Enum: WebClientMode
glic.mojom.WebClientMode = {
  kText: 0,
  kAudio: 1,
};
glic.mojom.WebClientModeSpec = { $: mojo.internal.Enum() };

// Enum: WebClientModel
glic.mojom.WebClientModel = {
  kActor: 0,
};
glic.mojom.WebClientModelSpec = { $: mojo.internal.Enum() };

// Enum: WebUseCounter
glic.mojom.WebUseCounter = {
  kSubmitPromptWithAutoMode: 0,
  kTaskInterruptedForUserConfirmation: 1,
  kTaskInterruptedForUserClarification: 2,
};
glic.mojom.WebUseCounterSpec = { $: mojo.internal.Enum() };

// Enum: ResponseStopCause
glic.mojom.ResponseStopCause = {
  kUser: 0,
  kOther: 1,
};
glic.mojom.ResponseStopCauseSpec = { $: mojo.internal.Enum() };

// Enum: CaptureRegionErrorReason
glic.mojom.CaptureRegionErrorReason = {
  kNoFocusableTab: 0,
};
glic.mojom.CaptureRegionErrorReasonSpec = { $: mojo.internal.Enum() };

// Enum: SettingsPageField
glic.mojom.SettingsPageField = {
  kOsHotkey: 0,
  kOsEntrypointToggle: 1,
};
glic.mojom.SettingsPageFieldSpec = { $: mojo.internal.Enum() };

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
glic.mojom.HostCapabilitySpec = { $: mojo.internal.Enum() };

// Enum: CurrentView
glic.mojom.CurrentView = {
  kConversation: 0,
  kActuation: 1,
};
glic.mojom.CurrentViewSpec = { $: mojo.internal.Enum() };

// Union: GetContextResult
glic.mojom.GetContextResultSpec = { $: mojo.internal.Union(
    'glic.mojom.GetContextResult', {
      'error_reason': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'tab_context': {
        'ordinal': 1,
        'type': glic.mojom.TabContextSpec,
      }},
    })
};

// Union: CaptureScreenshotResult
glic.mojom.CaptureScreenshotResultSpec = { $: mojo.internal.Union(
    'glic.mojom.CaptureScreenshotResult', {
      'error_reason': {
        'ordinal': 0,
        'type': glic.mojom.CaptureScreenshotErrorReasonSpec,
      }},
      'screenshot': {
        'ordinal': 1,
        'type': glic.mojom.ScreenshotSpec,
      }},
    })
};

// Union: ScrollToSelector
glic.mojom.ScrollToSelectorSpec = { $: mojo.internal.Union(
    'glic.mojom.ScrollToSelector', {
      'exact_text_selector': {
        'ordinal': 0,
        'type': glic.mojom.ScrollToTextSelectorSpec,
      }},
      'text_fragment_selector': {
        'ordinal': 1,
        'type': glic.mojom.ScrollToTextFragmentSelectorSpec,
      }},
      'node_selector': {
        'ordinal': 2,
        'type': glic.mojom.ScrollToNodeSelectorSpec,
      }},
    })
};

// Union: AdditionalContextPart
glic.mojom.AdditionalContextPartSpec = { $: mojo.internal.Union(
    'glic.mojom.AdditionalContextPart', {
      'data': {
        'ordinal': 0,
        'type': glic.mojom.ContextDataSpec,
      }},
      'screenshot': {
        'ordinal': 1,
        'type': glic.mojom.ScreenshotSpec,
      }},
      'web_page_data': {
        'ordinal': 2,
        'type': glic.mojom.WebPageDataSpec,
      }},
      'annotated_page_data': {
        'ordinal': 3,
        'type': glic.mojom.AnnotatedPageDataSpec,
      }},
      'pdf_document_data': {
        'ordinal': 4,
        'type': glic.mojom.PdfDocumentDataSpec,
      }},
      'tab_context': {
        'ordinal': 5,
        'type': glic.mojom.TabContextSpec,
      }},
      'region': {
        'ordinal': 6,
        'type': glic.mojom.CapturedRegionSpec,
      }},
    })
};

// Union: FocusedTabData
glic.mojom.FocusedTabDataSpec = { $: mojo.internal.Union(
    'glic.mojom.FocusedTabData', {
      'focused_tab': {
        'ordinal': 0,
        'type': glic.mojom.TabDataSpec,
      }},
      'no_focused_tab_data': {
        'ordinal': 1,
        'type': glic.mojom.NoFocusedTabDataSpec,
      }},
    })
};

// Union: CapturedRegion
glic.mojom.CapturedRegionSpec = { $: mojo.internal.Union(
    'glic.mojom.CapturedRegion', {
      'rect': {
        'ordinal': 0,
        'type': gfx.mojom.RectSpec,
      }},
    })
};

// Union: ViewChangeRequestDetails
glic.mojom.ViewChangeRequestDetailsSpec = { $: mojo.internal.Union(
    'glic.mojom.ViewChangeRequestDetails', {
      'actuation': {
        'ordinal': 0,
        'type': glic.mojom.ViewChangeRequestActuationSpec,
      }},
      'conversation': {
        'ordinal': 1,
        'type': glic.mojom.ViewChangeRequestConversationSpec,
      }},
    })
};

// Struct: ProfileEnablement
glic.mojom.ProfileEnablementSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.ProfileEnablement',
      packedSize: 16,
      fields: [
        { name: 'feature_disabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'not_regular_profile', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'not_rolled_out', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'primary_account_not_capable', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disallowed_by_chrome_policy', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disallowed_by_remote_admin', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disallowed_by_remote_other', packedOffset: 0, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'not_consented', packedOffset: 0, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: GetContextResultWithActionResultCode
glic.mojom.GetContextResultWithActionResultCodeSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.GetContextResultWithActionResultCode',
      packedSize: 32,
      fields: [
        { name: 'get_context_result', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.GetContextResultSpec, nullable: false, minVersion: 0 },
        { name: 'action_result_$flag', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'action_result_$value', originalFieldName: 'action_result' } },
        { name: 'action_result_$value', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'action_result_$flag', originalFieldName: 'action_result' } },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: UserProfileInfo
glic.mojom.UserProfileInfoSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.UserProfileInfo',
      packedSize: 56,
      fields: [
        { name: 'avatar_icon', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true, minVersion: 0 },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'local_profile_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'email', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'given_name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_managed', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: WebClientInitialState
glic.mojom.WebClientInitialStateSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientInitialState',
      packedSize: 72,
      fields: [
        { name: 'panel_state', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.PanelStateSpec, nullable: false, minVersion: 0 },
        { name: 'focused_tab_data', packedOffset: 8, packedBitOffset: 0, type: glic.mojom.FocusedTabDataSpec, nullable: false, minVersion: 0 },
        { name: 'microphone_permission_enabled', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'location_permission_enabled', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'tab_context_permission_enabled', packedOffset: 24, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'os_location_permission_enabled', packedOffset: 24, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'hotkey', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'chrome_version', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.VersionSpec, nullable: false, minVersion: 0 },
        { name: 'platform', packedOffset: 28, packedBitOffset: 0, type: glic.mojom.PlatformSpec, nullable: false, minVersion: 0 },
        { name: 'can_attach', packedOffset: 24, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'panel_is_active', packedOffset: 24, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'browser_is_open', packedOffset: 24, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'instance_is_active', packedOffset: 24, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'always_detached_mode', packedOffset: 25, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_zero_state_suggestions', packedOffset: 25, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_act_in_focused_tab', packedOffset: 25, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_scroll_to', packedOffset: 25, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_default_tab_context_setting_feature', packedOffset: 25, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'default_tab_context_setting_enabled', packedOffset: 25, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_closed_captioning_feature', packedOffset: 25, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'closed_captioning_setting_enabled', packedOffset: 25, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_maybe_refresh_user_status', packedOffset: 26, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_multi_tab', packedOffset: 26, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_get_context_actor', packedOffset: 26, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'host_capabilities', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(glic.mojom.HostCapabilitySpec, false), nullable: false, minVersion: 0 },
        { name: 'enable_get_page_metadata', packedOffset: 26, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_api_activation_gating', packedOffset: 26, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_capture_region', packedOffset: 26, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_web_actuation_setting_feature', packedOffset: 26, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'actuation_on_web_setting_enabled', packedOffset: 26, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'can_act_on_web', packedOffset: 27, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_activate_tab', packedOffset: 27, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_get_tab_by_id', packedOffset: 27, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_open_password_manager_settings_page', packedOffset: 27, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_load_and_extract_content', packedOffset: 27, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_trust_first_onboarding', packedOffset: 27, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'onboarding_completed', packedOffset: 27, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_skills', packedOffset: 27, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'skill_previews', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(glic.mojom.SkillPreviewSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: GetTabContextOptions
glic.mojom.GetTabContextOptionsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.GetTabContextOptions',
      packedSize: 32,
      fields: [
        { name: 'include_inner_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'inner_text_bytes_limit', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'include_viewport_screenshot', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'include_annotated_page_content', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'max_meta_tags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'include_pdf', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'pdf_size_limit', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'annotated_page_content_mode', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: GetPinCandidatesOptions
glic.mojom.GetPinCandidatesOptionsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.GetPinCandidatesOptions',
      packedSize: 24,
      fields: [
        { name: 'max_candidates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'query', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ScrollToParams
glic.mojom.ScrollToParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.ScrollToParams',
      packedSize: 48,
      fields: [
        { name: 'selector', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.ScrollToSelectorSpec, nullable: false, minVersion: 0 },
        { name: 'highlight', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'document_id', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'url', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: ScrollToTextSelector
glic.mojom.ScrollToTextSelectorSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.ScrollToTextSelector',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'search_range_start_node_id_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'search_range_start_node_id_$value', originalFieldName: 'search_range_start_node_id' } },
        { name: 'search_range_start_node_id_$value', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'search_range_start_node_id_$flag', originalFieldName: 'search_range_start_node_id' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ScrollToTextFragmentSelector
glic.mojom.ScrollToTextFragmentSelectorSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.ScrollToTextFragmentSelector',
      packedSize: 32,
      fields: [
        { name: 'text_start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'text_end', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'search_range_start_node_id_$flag', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'search_range_start_node_id_$value', originalFieldName: 'search_range_start_node_id' } },
        { name: 'search_range_start_node_id_$value', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'search_range_start_node_id_$flag', originalFieldName: 'search_range_start_node_id' } },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ScrollToNodeSelector
glic.mojom.ScrollToNodeSelectorSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.ScrollToNodeSelector',
      packedSize: 16,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SuggestionContent
glic.mojom.SuggestionContentSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.SuggestionContent',
      packedSize: 16,
      fields: [
        { name: 'suggestion', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SkillPreview
glic.mojom.SkillPreviewSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.SkillPreview',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'icon', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 24, packedBitOffset: 0, type: glic.mojom.SkillSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Skill
glic.mojom.SkillSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.Skill',
      packedSize: 24,
      fields: [
        { name: 'preview', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.SkillPreviewSpec, nullable: false, minVersion: 0 },
        { name: 'prompt', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CreateSkillRequest
glic.mojom.CreateSkillRequestSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.CreateSkillRequest',
      packedSize: 16,
      fields: [
        { name: 'prompt', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: UpdateSkillRequest
glic.mojom.UpdateSkillRequestSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.UpdateSkillRequest',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ZeroStateSuggestions
glic.mojom.ZeroStateSuggestionsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.ZeroStateSuggestions',
      packedSize: 32,
      fields: [
        { name: 'suggestions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(glic.mojom.SuggestionContentSpec, false), nullable: false, minVersion: 0 },
        { name: 'tab_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'tab_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ZeroStateSuggestionsV2
glic.mojom.ZeroStateSuggestionsV2Spec = {
  $: {
    structSpec: {
      name: 'glic.mojom.ZeroStateSuggestionsV2',
      packedSize: 24,
      fields: [
        { name: 'suggestions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(glic.mojom.SuggestionContentSpec, false), nullable: false, minVersion: 0 },
        { name: 'is_pending', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ZeroStateSuggestionsOptions
glic.mojom.ZeroStateSuggestionsOptionsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.ZeroStateSuggestionsOptions',
      packedSize: 24,
      fields: [
        { name: 'is_first_run', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'supported_tools', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PinCandidate
glic.mojom.PinCandidateSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PinCandidate',
      packedSize: 16,
      fields: [
        { name: 'tab_data', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.TabDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PinTabsOptions
glic.mojom.PinTabsOptionsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PinTabsOptions',
      packedSize: 16,
      fields: [
        { name: 'pin_trigger', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.PinTriggerSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: UnpinTabsOptions
glic.mojom.UnpinTabsOptionsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.UnpinTabsOptions',
      packedSize: 16,
      fields: [
        { name: 'unpin_trigger', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.UnpinTriggerSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ConversationInfo
glic.mojom.ConversationInfoSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.ConversationInfo',
      packedSize: 32,
      fields: [
        { name: 'conversation_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'conversation_title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'client_data', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PanelOpeningData
glic.mojom.PanelOpeningDataSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PanelOpeningData',
      packedSize: 56,
      fields: [
        { name: 'panel_state', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.PanelStateSpec, nullable: false, minVersion: 0 },
        { name: 'invocation_source', packedOffset: 8, packedBitOffset: 0, type: glic.mojom.InvocationSourceSpec, nullable: false, minVersion: 0 },
        { name: 'prompt_suggestion', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'skill_to_invoke', packedOffset: 24, packedBitOffset: 0, type: glic.mojom.SkillSpec, nullable: true, minVersion: 0 },
        { name: 'recently_active_conversations', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(glic.mojom.ConversationInfoSpec, false), nullable: true, minVersion: 0 },
        { name: 'conversation_info', packedOffset: 40, packedBitOffset: 0, type: glic.mojom.ConversationInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: PanelState
glic.mojom.PanelStateSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PanelState',
      packedSize: 24,
      fields: [
        { name: 'kind', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.PanelStateKindSpec, nullable: false, minVersion: 0 },
        { name: 'window_id_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'window_id_$value', originalFieldName: 'window_id' } },
        { name: 'window_id_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'window_id_$flag', originalFieldName: 'window_id' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: OnResponseStoppedDetails
glic.mojom.OnResponseStoppedDetailsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.OnResponseStoppedDetails',
      packedSize: 16,
      fields: [
        { name: 'cause', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.ResponseStopCauseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: OpenPanelInfo
glic.mojom.OpenPanelInfoSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.OpenPanelInfo',
      packedSize: 32,
      fields: [
        { name: 'web_client_mode', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.WebClientModeSpec, nullable: false, minVersion: 0 },
        { name: 'panelSize', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: true, minVersion: 0 },
        { name: 'resizeDuration', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'can_user_resize', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ContextData
glic.mojom.ContextDataSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.ContextData',
      packedSize: 32,
      fields: [
        { name: 'mime_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: AdditionalContext
glic.mojom.AdditionalContextSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.AdditionalContext',
      packedSize: 48,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'tab_id_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'tab_id_$value', originalFieldName: 'tab_id' } },
        { name: 'tab_id_$value', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'tab_id_$flag', originalFieldName: 'tab_id' } },
        { name: 'origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'frameUrl', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'parts', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(glic.mojom.AdditionalContextPartSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: TabContext
glic.mojom.TabContextSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.TabContext',
      packedSize: 48,
      fields: [
        { name: 'tab_data', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.TabDataSpec, nullable: false, minVersion: 0 },
        { name: 'web_page_data', packedOffset: 8, packedBitOffset: 0, type: glic.mojom.WebPageDataSpec, nullable: true, minVersion: 0 },
        { name: 'viewport_screenshot', packedOffset: 16, packedBitOffset: 0, type: glic.mojom.ScreenshotSpec, nullable: true, minVersion: 0 },
        { name: 'pdf_document_data', packedOffset: 24, packedBitOffset: 0, type: glic.mojom.PdfDocumentDataSpec, nullable: true, minVersion: 0 },
        { name: 'annotated_page_data', packedOffset: 32, packedBitOffset: 0, type: glic.mojom.AnnotatedPageDataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: WebPageData
glic.mojom.WebPageDataSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebPageData',
      packedSize: 16,
      fields: [
        { name: 'main_document', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.DocumentDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DocumentData
glic.mojom.DocumentDataSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.DocumentData',
      packedSize: 32,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'inner_text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'inner_text_truncated', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PdfDocumentData
glic.mojom.PdfDocumentDataSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PdfDocumentData',
      packedSize: 32,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'pdf_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'size_limit_exceeded', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: TabData
glic.mojom.TabDataSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.TabData',
      packedSize: 64,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'window_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'favicon', packedOffset: 24, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true, minVersion: 0 },
        { name: 'favicon_url', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'document_mime_type', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_observable_$flag', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_observable_$value', originalFieldName: 'is_observable' } },
        { name: 'is_observable_$value', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_observable_$flag', originalFieldName: 'is_observable' } },
        { name: 'is_media_active_$flag', packedOffset: 48, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_media_active_$value', originalFieldName: 'is_media_active' } },
        { name: 'is_media_active_$value', packedOffset: 48, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_media_active_$flag', originalFieldName: 'is_media_active' } },
        { name: 'is_tab_content_captured_$flag', packedOffset: 48, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_tab_content_captured_$value', originalFieldName: 'is_tab_content_captured' } },
        { name: 'is_tab_content_captured_$value', packedOffset: 48, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_tab_content_captured_$flag', originalFieldName: 'is_tab_content_captured' } },
        { name: 'is_active_in_window_$flag', packedOffset: 48, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_active_in_window_$value', originalFieldName: 'is_active_in_window' } },
        { name: 'is_active_in_window_$value', packedOffset: 48, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_active_in_window_$flag', originalFieldName: 'is_active_in_window' } },
        { name: 'is_window_active_$flag', packedOffset: 49, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_window_active_$value', originalFieldName: 'is_window_active' } },
        { name: 'is_window_active_$value', packedOffset: 49, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_window_active_$flag', originalFieldName: 'is_window_active' } },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: NoFocusedTabData
glic.mojom.NoFocusedTabDataSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.NoFocusedTabData',
      packedSize: 24,
      fields: [
        { name: 'active_tab_data', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.TabDataSpec, nullable: true, minVersion: 0 },
        { name: 'no_focus_reason', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AnnotatedPageData
glic.mojom.AnnotatedPageDataSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.AnnotatedPageData',
      packedSize: 24,
      fields: [
        { name: 'annotated_page_content', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProtoWrapperSpec, nullable: true, minVersion: 0 },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PageMetadataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ImageOriginAnnotations
glic.mojom.ImageOriginAnnotationsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.ImageOriginAnnotations',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: Journal
glic.mojom.JournalSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.Journal',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CaptureRegionResult
glic.mojom.CaptureRegionResultSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.CaptureRegionResult',
      packedSize: 32,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'region', packedOffset: 8, packedBitOffset: 0, type: glic.mojom.CapturedRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Screenshot
glic.mojom.ScreenshotSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.Screenshot',
      packedSize: 40,
      fields: [
        { name: 'width_pixels', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'height_pixels', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'mime_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'origin_annotations', packedOffset: 24, packedBitOffset: 0, type: glic.mojom.ImageOriginAnnotationsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: OpenSettingsOptions
glic.mojom.OpenSettingsOptionsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.OpenSettingsOptions',
      packedSize: 16,
      fields: [
        { name: 'highlightField', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.SettingsPageFieldSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ViewChangeRequestActuation
glic.mojom.ViewChangeRequestActuationSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.ViewChangeRequestActuation',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: ViewChangeRequestConversation
glic.mojom.ViewChangeRequestConversationSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.ViewChangeRequestConversation',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: ViewChangeRequest
glic.mojom.ViewChangeRequestSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.ViewChangeRequest',
      packedSize: 24,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.ViewChangeRequestDetailsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ViewChangedNotification
glic.mojom.ViewChangedNotificationSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.ViewChangedNotification',
      packedSize: 16,
      fields: [
        { name: 'current_view', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.CurrentViewSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: PreloadPage
glic.mojom.PreloadPage = {};

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
};

glic.mojom.PreloadPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setProfileReadyState(ready_state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec,
      null,
      [ready_state]);
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

// ParamsSpec for SetProfileReadyState
glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PreloadPage.SetProfileReadyState_Params',
      packedSize: 16,
      fields: [
        { name: 'ready_state', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.ProfileReadyStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
glic.mojom.PreloadPagePtr = glic.mojom.PreloadPageRemote;
glic.mojom.PreloadPageRequest = glic.mojom.PreloadPagePendingReceiver;


// Interface: Page
glic.mojom.Page = {};

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
};

glic.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  intentToShow() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.Page_IntentToShow_ParamsSpec,
      null,
      []);
  }

  setProfileReadyState(ready_state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      glic.mojom.Page_SetProfileReadyState_ParamsSpec,
      null,
      [ready_state]);
  }

  updatePageState(panelStateKind) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      glic.mojom.Page_UpdatePageState_ParamsSpec,
      null,
      [panelStateKind]);
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

// ParamsSpec for IntentToShow
glic.mojom.Page_IntentToShow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.Page.IntentToShow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetProfileReadyState
glic.mojom.Page_SetProfileReadyState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.Page.SetProfileReadyState_Params',
      packedSize: 16,
      fields: [
        { name: 'ready_state', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.ProfileReadyStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdatePageState
glic.mojom.Page_UpdatePageState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.Page.UpdatePageState_Params',
      packedSize: 16,
      fields: [
        { name: 'panelStateKind', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.PanelStateKindSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
glic.mojom.PagePtr = glic.mojom.PageRemote;
glic.mojom.PageRequest = glic.mojom.PagePendingReceiver;


// Interface: GlicPreloadHandler
glic.mojom.GlicPreloadHandler = {};

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
};

glic.mojom.GlicPreloadHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  prepareForClient() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec,
      glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec,
      []);
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

// ParamsSpec for PrepareForClient
glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.GlicPreloadHandler.PrepareForClient_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.PrepareForClientResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
glic.mojom.GlicPreloadHandlerPtr = glic.mojom.GlicPreloadHandlerRemote;
glic.mojom.GlicPreloadHandlerRequest = glic.mojom.GlicPreloadHandlerPendingReceiver;


// Interface: GlicPreloadHandlerFactory
glic.mojom.GlicPreloadHandlerFactory = {};

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
};

glic.mojom.GlicPreloadHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPreloadHandler(receiver, page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec,
      null,
      [receiver, page]);
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

// ParamsSpec for CreatePreloadHandler
glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.GlicPreloadHandlerFactory.CreatePreloadHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'page', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
glic.mojom.GlicPreloadHandlerFactoryPtr = glic.mojom.GlicPreloadHandlerFactoryRemote;
glic.mojom.GlicPreloadHandlerFactoryRequest = glic.mojom.GlicPreloadHandlerFactoryPendingReceiver;


// Interface: PageHandlerFactory
glic.mojom.PageHandlerFactory = {};

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
};

glic.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(receiver, page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [receiver, page]);
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

// ParamsSpec for CreatePageHandler
glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'page', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
glic.mojom.PageHandlerFactoryPtr = glic.mojom.PageHandlerFactoryRemote;
glic.mojom.PageHandlerFactoryRequest = glic.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
glic.mojom.PageHandler = {};

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
};

glic.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWebClient(web_client_receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.PageHandler_CreateWebClient_ParamsSpec,
      null,
      [web_client_receiver]);
  }

  prepareForClient() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      glic.mojom.PageHandler_PrepareForClient_ParamsSpec,
      glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec,
      []);
  }

  webviewCommitted(url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      glic.mojom.PageHandler_WebviewCommitted_ParamsSpec,
      null,
      [url]);
  }

  closePanel() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      glic.mojom.PageHandler_ClosePanel_ParamsSpec,
      null,
      []);
  }

  openProfilePickerAndClosePanel() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec,
      null,
      []);
  }

  openDisabledByAdminLinkAndClosePanel() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec,
      null,
      []);
  }

  signInAndClosePanel() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec,
      null,
      []);
  }

  resizeWidget(size, duration) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      glic.mojom.PageHandler_ResizeWidget_ParamsSpec,
      null,
      [size, duration]);
  }

  enableDragResize(enabled) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      glic.mojom.PageHandler_EnableDragResize_ParamsSpec,
      null,
      [enabled]);
  }

  webUiStateChanged(new_state) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec,
      null,
      [new_state]);
  }

  getProfileEnablement() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      glic.mojom.PageHandler_GetProfileEnablement_ParamsSpec,
      glic.mojom.PageHandler_GetProfileEnablement_ResponseParamsSpec,
      []);
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

// ParamsSpec for CreateWebClient
glic.mojom.PageHandler_CreateWebClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.CreateWebClient_Params',
      packedSize: 16,
      fields: [
        { name: 'web_client_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PrepareForClient
glic.mojom.PageHandler_PrepareForClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.PrepareForClient_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.PrepareForClientResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WebviewCommitted
glic.mojom.PageHandler_WebviewCommitted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.WebviewCommitted_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClosePanel
glic.mojom.PageHandler_ClosePanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.ClosePanel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenProfilePickerAndClosePanel
glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.OpenProfilePickerAndClosePanel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenDisabledByAdminLinkAndClosePanel
glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.OpenDisabledByAdminLinkAndClosePanel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SignInAndClosePanel
glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.SignInAndClosePanel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ResizeWidget
glic.mojom.PageHandler_ResizeWidget_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.ResizeWidget_Params',
      packedSize: 24,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'duration', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EnableDragResize
glic.mojom.PageHandler_EnableDragResize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.EnableDragResize_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WebUiStateChanged
glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.WebUiStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'new_state', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.WebUiStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetProfileEnablement
glic.mojom.PageHandler_GetProfileEnablement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.GetProfileEnablement_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

glic.mojom.PageHandler_GetProfileEnablement_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enablement', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.ProfileEnablementSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
glic.mojom.PageHandlerPtr = glic.mojom.PageHandlerRemote;
glic.mojom.PageHandlerRequest = glic.mojom.PageHandlerPendingReceiver;


// Interface: PinCandidatesObserver
glic.mojom.PinCandidatesObserver = {};

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
};

glic.mojom.PinCandidatesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPinCandidatesChanged(candidates) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec,
      null,
      [candidates]);
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

// ParamsSpec for OnPinCandidatesChanged
glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PinCandidatesObserver.OnPinCandidatesChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'candidates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(glic.mojom.PinCandidateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
glic.mojom.PinCandidatesObserverPtr = glic.mojom.PinCandidatesObserverRemote;
glic.mojom.PinCandidatesObserverRequest = glic.mojom.PinCandidatesObserverPendingReceiver;


// Interface: WebClientHandler
glic.mojom.WebClientHandler = {};

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
};

glic.mojom.WebClientHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  webClientCreated(web_client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec,
      glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec,
      [web_client]);
  }

  webClientInitialized() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec,
      null,
      []);
  }

  webClientInitializeFailed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec,
      null,
      []);
  }

  createTab(url, open_in_background, window_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      glic.mojom.WebClientHandler_CreateTab_ParamsSpec,
      glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec,
      [url, open_in_background, window_id]);
  }

  openLinkInPopup(url, popup_width, popup_height) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec,
      null,
      [url, popup_width, popup_height]);
  }

  openGlicSettingsPage(options) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec,
      null,
      [options]);
  }

  openPasswordManagerSettingsPage() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec,
      null,
      []);
  }

  closePanel() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      glic.mojom.WebClientHandler_ClosePanel_ParamsSpec,
      null,
      []);
  }

  closePanelAndShutdown() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec,
      null,
      []);
  }

  attachPanel() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      glic.mojom.WebClientHandler_AttachPanel_ParamsSpec,
      null,
      []);
  }

  detachPanel() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      glic.mojom.WebClientHandler_DetachPanel_ParamsSpec,
      null,
      []);
  }

  onModeChange(new_mode) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      glic.mojom.WebClientHandler_OnModeChange_ParamsSpec,
      null,
      [new_mode]);
  }

  showProfilePicker() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec,
      null,
      []);
  }

  getModelQualityClientId() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec,
      glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec,
      []);
  }

  getContextFromFocusedTab(options) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec,
      glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec,
      [options]);
  }

  getContextFromTab(tab_id, options) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec,
      glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec,
      [tab_id, options]);
  }

  getContextForActorFromTab(tab_id, options) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      glic.mojom.WebClientHandler_GetContextForActorFromTab_ParamsSpec,
      glic.mojom.WebClientHandler_GetContextForActorFromTab_ResponseParamsSpec,
      [tab_id, options]);
  }

  setMaximumNumberOfPinnedTabs(requested_max) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec,
      glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec,
      [requested_max]);
  }

  pinTabs(tab_ids, options) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      glic.mojom.WebClientHandler_PinTabs_ParamsSpec,
      glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec,
      [tab_ids, options]);
  }

  unpinTabs(tab_ids, options) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec,
      glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec,
      [tab_ids, options]);
  }

  unpinAllTabs(options) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec,
      null,
      [options]);
  }

  createSkill(request) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      glic.mojom.WebClientHandler_CreateSkill_ParamsSpec,
      glic.mojom.WebClientHandler_CreateSkill_ResponseParamsSpec,
      [request]);
  }

  updateSkill(request) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      glic.mojom.WebClientHandler_UpdateSkill_ParamsSpec,
      glic.mojom.WebClientHandler_UpdateSkill_ResponseParamsSpec,
      [request]);
  }

  getSkill(id) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      glic.mojom.WebClientHandler_GetSkill_ParamsSpec,
      glic.mojom.WebClientHandler_GetSkill_ResponseParamsSpec,
      [id]);
  }

  subscribeToPinCandidates(options, observer) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec,
      null,
      [options, observer]);
  }

  createTask(task_options) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      glic.mojom.WebClientHandler_CreateTask_ParamsSpec,
      null,
      [task_options]);
  }

  performActions(actions_proto) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      glic.mojom.WebClientHandler_PerformActions_ParamsSpec,
      null,
      [actions_proto]);
  }

  cancelActions(task_id) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      glic.mojom.WebClientHandler_CancelActions_ParamsSpec,
      glic.mojom.WebClientHandler_CancelActions_ResponseParamsSpec,
      [task_id]);
  }

  stopActorTask(task_id, stop_reason) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      glic.mojom.WebClientHandler_StopActorTask_ParamsSpec,
      null,
      [task_id, stop_reason]);
  }

  pauseActorTask(task_id, pause_reason, tab_id) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      glic.mojom.WebClientHandler_PauseActorTask_ParamsSpec,
      null,
      [task_id, pause_reason, tab_id]);
  }

  resumeActorTask(task_id, context_options) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      glic.mojom.WebClientHandler_ResumeActorTask_ParamsSpec,
      glic.mojom.WebClientHandler_ResumeActorTask_ResponseParamsSpec,
      [task_id, context_options]);
  }

  interruptActorTask(task_id) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      glic.mojom.WebClientHandler_InterruptActorTask_ParamsSpec,
      null,
      [task_id]);
  }

  uninterruptActorTask(task_id) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      glic.mojom.WebClientHandler_UninterruptActorTask_ParamsSpec,
      null,
      [task_id]);
  }

  createActorTab(task_id, open_in_background, initiator_tab_id, initiator_window_id) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      glic.mojom.WebClientHandler_CreateActorTab_ParamsSpec,
      glic.mojom.WebClientHandler_CreateActorTab_ResponseParamsSpec,
      [task_id, open_in_background, initiator_tab_id, initiator_window_id]);
  }

  activateTab(task_id) {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      glic.mojom.WebClientHandler_ActivateTab_ParamsSpec,
      null,
      [task_id]);
  }

  resizeWidget(size, duration) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec,
      null,
      [size, duration]);
  }

  captureScreenshot() {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec,
      glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec,
      []);
  }

  captureRegion(observer) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec,
      null,
      [observer]);
  }

  setAudioDucking(enable) {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec,
      glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec,
      [enable]);
  }

  setPanelDraggableAreas(draggable_areas) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      glic.mojom.WebClientHandler_SetPanelDraggableAreas_ParamsSpec,
      null,
      [draggable_areas]);
  }

  setMinimumPanelSize(size) {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec,
      null,
      [size]);
  }

  setMicrophonePermissionState(enabled) {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec,
      null,
      [enabled]);
  }

  setLocationPermissionState(enabled) {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec,
      null,
      [enabled]);
  }

  setTabContextPermissionState(enabled) {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec,
      null,
      [enabled]);
  }

  setClosedCaptioningSetting(enabled) {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec,
      null,
      [enabled]);
  }

  setActuationOnWebSetting(enabled) {
    // Ordinal: 45
    return this.proxy.sendMessage(
      45,  // ordinal
      glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec,
      null,
      [enabled]);
  }

  shouldAllowMediaPermissionRequest() {
    // Ordinal: 46
    return this.proxy.sendMessage(
      46,  // ordinal
      glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec,
      glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec,
      []);
  }

  shouldAllowGeolocationPermissionRequest() {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec,
      glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec,
      []);
  }

  setContextAccessIndicator(enabled) {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec,
      null,
      [enabled]);
  }

  getUserProfileInfo() {
    // Ordinal: 49
    return this.proxy.sendMessage(
      49,  // ordinal
      glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec,
      glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec,
      []);
  }

  syncCookies() {
    // Ordinal: 50
    return this.proxy.sendMessage(
      50,  // ordinal
      glic.mojom.WebClientHandler_SyncCookies_ParamsSpec,
      glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec,
      []);
  }

  logBeginAsyncEvent(event_async_id, task_id, event, details) {
    // Ordinal: 51
    return this.proxy.sendMessage(
      51,  // ordinal
      glic.mojom.WebClientHandler_LogBeginAsyncEvent_ParamsSpec,
      null,
      [event_async_id, task_id, event, details]);
  }

  logEndAsyncEvent(event_async_id, details) {
    // Ordinal: 52
    return this.proxy.sendMessage(
      52,  // ordinal
      glic.mojom.WebClientHandler_LogEndAsyncEvent_ParamsSpec,
      null,
      [event_async_id, details]);
  }

  logInstantEvent(task_id, event, details) {
    // Ordinal: 53
    return this.proxy.sendMessage(
      53,  // ordinal
      glic.mojom.WebClientHandler_LogInstantEvent_ParamsSpec,
      null,
      [task_id, event, details]);
  }

  journalClear() {
    // Ordinal: 54
    return this.proxy.sendMessage(
      54,  // ordinal
      glic.mojom.WebClientHandler_JournalClear_ParamsSpec,
      null,
      []);
  }

  journalSnapshot(clear_journal) {
    // Ordinal: 55
    return this.proxy.sendMessage(
      55,  // ordinal
      glic.mojom.WebClientHandler_JournalSnapshot_ParamsSpec,
      glic.mojom.WebClientHandler_JournalSnapshot_ResponseParamsSpec,
      [clear_journal]);
  }

  journalStart(max_bytes, capture_screenshots) {
    // Ordinal: 56
    return this.proxy.sendMessage(
      56,  // ordinal
      glic.mojom.WebClientHandler_JournalStart_ParamsSpec,
      null,
      [max_bytes, capture_screenshots]);
  }

  journalStop() {
    // Ordinal: 57
    return this.proxy.sendMessage(
      57,  // ordinal
      glic.mojom.WebClientHandler_JournalStop_ParamsSpec,
      null,
      []);
  }

  journalRecordFeedback(positive, reason) {
    // Ordinal: 58
    return this.proxy.sendMessage(
      58,  // ordinal
      glic.mojom.WebClientHandler_JournalRecordFeedback_ParamsSpec,
      null,
      [positive, reason]);
  }

  onUserInputSubmitted(mode) {
    // Ordinal: 59
    return this.proxy.sendMessage(
      59,  // ordinal
      glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec,
      null,
      [mode]);
  }

  onContextUploadStarted() {
    // Ordinal: 60
    return this.proxy.sendMessage(
      60,  // ordinal
      glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec,
      null,
      []);
  }

  onContextUploadCompleted() {
    // Ordinal: 61
    return this.proxy.sendMessage(
      61,  // ordinal
      glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec,
      null,
      []);
  }

  onReaction(reactionType) {
    // Ordinal: 62
    return this.proxy.sendMessage(
      62,  // ordinal
      glic.mojom.WebClientHandler_OnReaction_ParamsSpec,
      null,
      [reactionType]);
  }

  onResponseStarted() {
    // Ordinal: 63
    return this.proxy.sendMessage(
      63,  // ordinal
      glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec,
      null,
      []);
  }

  onResponseStopped(details) {
    // Ordinal: 64
    return this.proxy.sendMessage(
      64,  // ordinal
      glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec,
      null,
      [details]);
  }

  onSessionTerminated() {
    // Ordinal: 65
    return this.proxy.sendMessage(
      65,  // ordinal
      glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec,
      null,
      []);
  }

  onTurnCompleted(model, duration) {
    // Ordinal: 66
    return this.proxy.sendMessage(
      66,  // ordinal
      glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec,
      null,
      [model, duration]);
  }

  onModelChanged(model) {
    // Ordinal: 67
    return this.proxy.sendMessage(
      67,  // ordinal
      glic.mojom.WebClientHandler_OnModelChanged_ParamsSpec,
      null,
      [model]);
  }

  onRecordUseCounter(counter) {
    // Ordinal: 68
    return this.proxy.sendMessage(
      68,  // ordinal
      glic.mojom.WebClientHandler_OnRecordUseCounter_ParamsSpec,
      null,
      [counter]);
  }

  onResponseRated(positive) {
    // Ordinal: 69
    return this.proxy.sendMessage(
      69,  // ordinal
      glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec,
      null,
      [positive]);
  }

  onClosedCaptionsShown() {
    // Ordinal: 70
    return this.proxy.sendMessage(
      70,  // ordinal
      glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec,
      null,
      []);
  }

  scrollTo(params) {
    // Ordinal: 71
    return this.proxy.sendMessage(
      71,  // ordinal
      glic.mojom.WebClientHandler_ScrollTo_ParamsSpec,
      glic.mojom.WebClientHandler_ScrollTo_ResponseParamsSpec,
      [params]);
  }

  dropScrollToHighlight() {
    // Ordinal: 72
    return this.proxy.sendMessage(
      72,  // ordinal
      glic.mojom.WebClientHandler_DropScrollToHighlight_ParamsSpec,
      null,
      []);
  }

  setSyntheticExperimentState(trial_name, group_name) {
    // Ordinal: 73
    return this.proxy.sendMessage(
      73,  // ordinal
      glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec,
      null,
      [trial_name, group_name]);
  }

  openOsPermissionSettingsMenu(type) {
    // Ordinal: 74
    return this.proxy.sendMessage(
      74,  // ordinal
      glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec,
      null,
      [type]);
  }

  getOsMicrophonePermissionStatus() {
    // Ordinal: 75
    return this.proxy.sendMessage(
      75,  // ordinal
      glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec,
      glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec,
      []);
  }

  getZeroStateSuggestionsAndSubscribe(is_live, options) {
    // Ordinal: 76
    return this.proxy.sendMessage(
      76,  // ordinal
      glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec,
      glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec,
      [is_live, options]);
  }

  getZeroStateSuggestionsForFocusedTab(is_first_run) {
    // Ordinal: 77
    return this.proxy.sendMessage(
      77,  // ordinal
      glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec,
      glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec,
      [is_first_run]);
  }

  maybeRefreshUserStatus() {
    // Ordinal: 78
    return this.proxy.sendMessage(
      78,  // ordinal
      glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec,
      null,
      []);
  }

  isDebuggerAttached() {
    // Ordinal: 79
    return this.proxy.sendMessage(
      79,  // ordinal
      glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec,
      glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec,
      []);
  }

  onViewChanged(notification) {
    // Ordinal: 80
    return this.proxy.sendMessage(
      80,  // ordinal
      glic.mojom.WebClientHandler_OnViewChanged_ParamsSpec,
      null,
      [notification]);
  }

  subscribeToPageMetadata(tab_id, names) {
    // Ordinal: 81
    return this.proxy.sendMessage(
      81,  // ordinal
      glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec,
      glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec,
      [tab_id, names]);
  }

  switchConversation(info) {
    // Ordinal: 82
    return this.proxy.sendMessage(
      82,  // ordinal
      glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec,
      glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec,
      [info]);
  }

  registerConversation(info) {
    // Ordinal: 83
    return this.proxy.sendMessage(
      83,  // ordinal
      glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec,
      glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec,
      [info]);
  }

  setOnboardingCompleted() {
    // Ordinal: 84
    return this.proxy.sendMessage(
      84,  // ordinal
      glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec,
      null,
      []);
  }

  subscribeToTabData(tab_id, receiver) {
    // Ordinal: 85
    return this.proxy.sendMessage(
      85,  // ordinal
      glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec,
      null,
      [tab_id, receiver]);
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

// ParamsSpec for WebClientCreated
glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.WebClientCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'web_client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'initial_state', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.WebClientInitialStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WebClientInitialized
glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.WebClientInitialized_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for WebClientInitializeFailed
glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.WebClientInitializeFailed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CreateTab
glic.mojom.WebClientHandler_CreateTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.CreateTab_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'open_in_background', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'window_id_$flag', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'window_id_$value', originalFieldName: 'window_id' } },
        { name: 'window_id_$value', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'window_id_$flag', originalFieldName: 'window_id' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tab_data', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.TabDataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenLinkInPopup
glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OpenLinkInPopup_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'popup_width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'popup_height', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OpenGlicSettingsPage
glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OpenGlicSettingsPage_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.OpenSettingsOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenPasswordManagerSettingsPage
glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OpenPasswordManagerSettingsPage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ClosePanel
glic.mojom.WebClientHandler_ClosePanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ClosePanel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ClosePanelAndShutdown
glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ClosePanelAndShutdown_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for AttachPanel
glic.mojom.WebClientHandler_AttachPanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.AttachPanel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DetachPanel
glic.mojom.WebClientHandler_DetachPanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.DetachPanel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnModeChange
glic.mojom.WebClientHandler_OnModeChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnModeChange_Params',
      packedSize: 16,
      fields: [
        { name: 'new_mode', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.WebClientModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowProfilePicker
glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ShowProfilePicker_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetModelQualityClientId
glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetModelQualityClientId_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'model_quality_client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetContextFromFocusedTab
glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetContextFromFocusedTab_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.GetTabContextOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.GetContextResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetContextFromTab
glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetContextFromTab_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: glic.mojom.GetTabContextOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.GetContextResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetContextForActorFromTab
glic.mojom.WebClientHandler_GetContextForActorFromTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetContextForActorFromTab_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: glic.mojom.GetTabContextOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

glic.mojom.WebClientHandler_GetContextForActorFromTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.GetContextResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetMaximumNumberOfPinnedTabs
glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetMaximumNumberOfPinnedTabs_Params',
      packedSize: 16,
      fields: [
        { name: 'requested_max', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'effective_max', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PinTabs
glic.mojom.WebClientHandler_PinTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.PinTabs_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: glic.mojom.PinTabsOptionsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pinned_all', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UnpinTabs
glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.UnpinTabs_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: glic.mojom.UnpinTabsOptionsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'unpinned_all', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UnpinAllTabs
glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.UnpinAllTabs_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.UnpinTabsOptionsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateSkill
glic.mojom.WebClientHandler_CreateSkill_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.CreateSkill_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.CreateSkillRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.WebClientHandler_CreateSkill_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'modal_opened', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateSkill
glic.mojom.WebClientHandler_UpdateSkill_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.UpdateSkill_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.UpdateSkillRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.WebClientHandler_UpdateSkill_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'modal_opened', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSkill
glic.mojom.WebClientHandler_GetSkill_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetSkill_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.WebClientHandler_GetSkill_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'skill', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.SkillSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SubscribeToPinCandidates
glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SubscribeToPinCandidates_Params',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.GetPinCandidatesOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateTask
glic.mojom.WebClientHandler_CreateTask_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.CreateTask_Params',
      packedSize: 16,
      fields: [
        { name: 'task_options', packedOffset: 0, packedBitOffset: 0, type: actor.webui.mojom.TaskOptionsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PerformActions
glic.mojom.WebClientHandler_PerformActions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.PerformActions_Params',
      packedSize: 16,
      fields: [
        { name: 'actions_proto', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CancelActions
glic.mojom.WebClientHandler_CancelActions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.CancelActions_Params',
      packedSize: 16,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.WebClientHandler_CancelActions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.CancelActionsResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopActorTask
glic.mojom.WebClientHandler_StopActorTask_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.StopActorTask_Params',
      packedSize: 16,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'stop_reason', packedOffset: 4, packedBitOffset: 0, type: glic.mojom.ActorTaskStopReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PauseActorTask
glic.mojom.WebClientHandler_PauseActorTask_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.PauseActorTask_Params',
      packedSize: 24,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'pause_reason', packedOffset: 4, packedBitOffset: 0, type: glic.mojom.ActorTaskPauseReasonSpec, nullable: false, minVersion: 0 },
        { name: 'tab_id_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'tab_id_$value', originalFieldName: 'tab_id' } },
        { name: 'tab_id_$value', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'tab_id_$flag', originalFieldName: 'tab_id' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ResumeActorTask
glic.mojom.WebClientHandler_ResumeActorTask_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ResumeActorTask_Params',
      packedSize: 24,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'context_options', packedOffset: 8, packedBitOffset: 0, type: glic.mojom.GetTabContextOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

glic.mojom.WebClientHandler_ResumeActorTask_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.GetContextResultWithActionResultCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InterruptActorTask
glic.mojom.WebClientHandler_InterruptActorTask_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.InterruptActorTask_Params',
      packedSize: 16,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UninterruptActorTask
glic.mojom.WebClientHandler_UninterruptActorTask_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.UninterruptActorTask_Params',
      packedSize: 16,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateActorTab
glic.mojom.WebClientHandler_CreateActorTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.CreateActorTab_Params',
      packedSize: 24,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'open_in_background', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'initiator_tab_id_$flag', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'initiator_tab_id_$value', originalFieldName: 'initiator_tab_id' } },
        { name: 'initiator_tab_id_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'initiator_tab_id_$flag', originalFieldName: 'initiator_tab_id' } },
        { name: 'initiator_window_id_$flag', packedOffset: 4, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'initiator_window_id_$value', originalFieldName: 'initiator_window_id' } },
        { name: 'initiator_window_id_$value', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'initiator_window_id_$flag', originalFieldName: 'initiator_window_id' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

glic.mojom.WebClientHandler_CreateActorTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tab_data', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.TabDataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ActivateTab
glic.mojom.WebClientHandler_ActivateTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ActivateTab_Params',
      packedSize: 16,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ResizeWidget
glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ResizeWidget_Params',
      packedSize: 24,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'duration', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CaptureScreenshot
glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.CaptureScreenshot_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.CaptureScreenshotResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CaptureRegion
glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.CaptureRegion_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAudioDucking
glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetAudioDucking_Params',
      packedSize: 16,
      fields: [
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPanelDraggableAreas
glic.mojom.WebClientHandler_SetPanelDraggableAreas_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetPanelDraggableAreas_Params',
      packedSize: 16,
      fields: [
        { name: 'draggable_areas', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.RectSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetMinimumPanelSize
glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetMinimumPanelSize_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetMicrophonePermissionState
glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetMicrophonePermissionState_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetLocationPermissionState
glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetLocationPermissionState_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTabContextPermissionState
glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetTabContextPermissionState_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetClosedCaptioningSetting
glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetClosedCaptioningSetting_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetActuationOnWebSetting
glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetActuationOnWebSetting_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShouldAllowMediaPermissionRequest
glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ShouldAllowMediaPermissionRequest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShouldAllowGeolocationPermissionRequest
glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ShouldAllowGeolocationPermissionRequest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetContextAccessIndicator
glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetContextAccessIndicator_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetUserProfileInfo
glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetUserProfileInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'profile_info', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.UserProfileInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SyncCookies
glic.mojom.WebClientHandler_SyncCookies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SyncCookies_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LogBeginAsyncEvent
glic.mojom.WebClientHandler_LogBeginAsyncEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.LogBeginAsyncEvent_Params',
      packedSize: 40,
      fields: [
        { name: 'event_async_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'task_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'event', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for LogEndAsyncEvent
glic.mojom.WebClientHandler_LogEndAsyncEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.LogEndAsyncEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'event_async_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for LogInstantEvent
glic.mojom.WebClientHandler_LogInstantEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.LogInstantEvent_Params',
      packedSize: 32,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'event', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for JournalClear
glic.mojom.WebClientHandler_JournalClear_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.JournalClear_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for JournalSnapshot
glic.mojom.WebClientHandler_JournalSnapshot_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.JournalSnapshot_Params',
      packedSize: 16,
      fields: [
        { name: 'clear_journal', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.WebClientHandler_JournalSnapshot_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'journal', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.JournalSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for JournalStart
glic.mojom.WebClientHandler_JournalStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.JournalStart_Params',
      packedSize: 24,
      fields: [
        { name: 'max_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'capture_screenshots', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for JournalStop
glic.mojom.WebClientHandler_JournalStop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.JournalStop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for JournalRecordFeedback
glic.mojom.WebClientHandler_JournalRecordFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.JournalRecordFeedback_Params',
      packedSize: 24,
      fields: [
        { name: 'positive', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnUserInputSubmitted
glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnUserInputSubmitted_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.WebClientModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnContextUploadStarted
glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnContextUploadStarted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnContextUploadCompleted
glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnContextUploadCompleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnReaction
glic.mojom.WebClientHandler_OnReaction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnReaction_Params',
      packedSize: 16,
      fields: [
        { name: 'reactionType', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.MetricUserInputReactionTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnResponseStarted
glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnResponseStarted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnResponseStopped
glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnResponseStopped_Params',
      packedSize: 16,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.OnResponseStoppedDetailsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSessionTerminated
glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnSessionTerminated_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnTurnCompleted
glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnTurnCompleted_Params',
      packedSize: 24,
      fields: [
        { name: 'model', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.WebClientModelSpec, nullable: false, minVersion: 0 },
        { name: 'duration', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnModelChanged
glic.mojom.WebClientHandler_OnModelChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnModelChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'model', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.WebClientModelSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnRecordUseCounter
glic.mojom.WebClientHandler_OnRecordUseCounter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnRecordUseCounter_Params',
      packedSize: 16,
      fields: [
        { name: 'counter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnResponseRated
glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnResponseRated_Params',
      packedSize: 16,
      fields: [
        { name: 'positive', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnClosedCaptionsShown
glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnClosedCaptionsShown_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ScrollTo
glic.mojom.WebClientHandler_ScrollTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ScrollTo_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.ScrollToParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.WebClientHandler_ScrollTo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_reason', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.ScrollToErrorReasonSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DropScrollToHighlight
glic.mojom.WebClientHandler_DropScrollToHighlight_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.DropScrollToHighlight_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetSyntheticExperimentState
glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetSyntheticExperimentState_Params',
      packedSize: 24,
      fields: [
        { name: 'trial_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'group_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OpenOsPermissionSettingsMenu
glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OpenOsPermissionSettingsMenu_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: content_settings.mojom.ContentSettingsTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOsMicrophonePermissionStatus
glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetOsMicrophonePermissionStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetZeroStateSuggestionsAndSubscribe
glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetZeroStateSuggestionsAndSubscribe_Params',
      packedSize: 24,
      fields: [
        { name: 'is_live', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: glic.mojom.ZeroStateSuggestionsOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'zero_state_suggestions', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.ZeroStateSuggestionsV2Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetZeroStateSuggestionsForFocusedTab
glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetZeroStateSuggestionsForFocusedTab_Params',
      packedSize: 16,
      fields: [
        { name: 'is_first_run_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_first_run_$value', originalFieldName: 'is_first_run' } },
        { name: 'is_first_run_$value', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_first_run_$flag', originalFieldName: 'is_first_run' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'suggestions', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.ZeroStateSuggestionsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MaybeRefreshUserStatus
glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.MaybeRefreshUserStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for IsDebuggerAttached
glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.IsDebuggerAttached_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_attached_to_webview', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnViewChanged
glic.mojom.WebClientHandler_OnViewChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnViewChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'notification', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.ViewChangedNotificationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SubscribeToPageMetadata
glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SubscribeToPageMetadata_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'names', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SwitchConversation
glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SwitchConversation_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.ConversationInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_reason', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.SwitchConversationErrorReasonSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterConversation
glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.RegisterConversation_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.ConversationInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_reason', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.RegisterConversationErrorReasonSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetOnboardingCompleted
glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetOnboardingCompleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SubscribeToTabData
glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SubscribeToTabData_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
glic.mojom.WebClientHandlerPtr = glic.mojom.WebClientHandlerRemote;
glic.mojom.WebClientHandlerRequest = glic.mojom.WebClientHandlerPendingReceiver;


// Interface: TabDataHandler
glic.mojom.TabDataHandler = {};

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
};

glic.mojom.TabDataHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTabDataChanged(tab_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec,
      null,
      [tab_data]);
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

// ParamsSpec for OnTabDataChanged
glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.TabDataHandler.OnTabDataChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_data', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.TabDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
glic.mojom.TabDataHandlerPtr = glic.mojom.TabDataHandlerRemote;
glic.mojom.TabDataHandlerRequest = glic.mojom.TabDataHandlerPendingReceiver;


// Interface: WebClient
glic.mojom.WebClient = {};

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
};

glic.mojom.WebClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyPanelWillOpen(panel_opening_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec,
      glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec,
      [panel_opening_data]);
  }

  notifyPanelWasClosed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec,
      null,
      []);
  }

  notifyPanelStateChange(panel_state) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec,
      null,
      [panel_state]);
  }

  notifyPanelActiveChange(panel_active) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec,
      null,
      [panel_active]);
  }

  notifyPanelCanAttachChange(can_attach) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec,
      null,
      [can_attach]);
  }

  notifyMicrophonePermissionStateChanged(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec,
      null,
      [enabled]);
  }

  notifyLocationPermissionStateChanged(enabled) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec,
      null,
      [enabled]);
  }

  notifyTabContextPermissionStateChanged(enabled) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec,
      null,
      [enabled]);
  }

  notifyOsLocationPermissionStateChanged(enabled) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec,
      null,
      [enabled]);
  }

  notifyFocusedTabChanged(focused_tab_data) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec,
      null,
      [focused_tab_data]);
  }

  notifyManualResizeChanged(resizing) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec,
      null,
      [resizing]);
  }

  notifyOsHotkeyStateChanged(hotkey) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec,
      null,
      [hotkey]);
  }

  notifyBrowserIsOpenChanged(browser_is_open) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec,
      null,
      [browser_is_open]);
  }

  notifyInstanceActivationChanged(instance_active) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec,
      null,
      [instance_active]);
  }

  notifyClosedCaptioningSettingChanged(enabled) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec,
      null,
      [enabled]);
  }

  notifyPinnedTabsChanged(tab_data) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec,
      null,
      [tab_data]);
  }

  notifyPinnedTabDataChanged(tab_data) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec,
      null,
      [tab_data]);
  }

  notifySkillPreviewsChanged(skill_previews) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      glic.mojom.WebClient_NotifySkillPreviewsChanged_ParamsSpec,
      null,
      [skill_previews]);
  }

  notifySkillPreviewChanged(skill_preview) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      glic.mojom.WebClient_NotifySkillPreviewChanged_ParamsSpec,
      null,
      [skill_preview]);
  }

  notifySkillToInvokeChanged(skill) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      glic.mojom.WebClient_NotifySkillToInvokeChanged_ParamsSpec,
      null,
      [skill]);
  }

  notifyZeroStateSuggestionsChanged(suggestions, options) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec,
      null,
      [suggestions, options]);
  }

  notifyActorTaskStateChanged(task_id, state) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      glic.mojom.WebClient_NotifyActorTaskStateChanged_ParamsSpec,
      null,
      [task_id, state]);
  }

  requestViewChange(request) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      glic.mojom.WebClient_RequestViewChange_ParamsSpec,
      null,
      [request]);
  }

  notifyPageMetadataChanged(tab_id, metadata) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec,
      null,
      [tab_id, metadata]);
  }

  notifyDefaultTabContextPermissionStateChanged(enabled) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec,
      null,
      [enabled]);
  }

  requestToShowCredentialSelectionDialog(request) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ParamsSpec,
      glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec,
      [request]);
  }

  requestToShowAutofillSuggestionsDialog(request) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec,
      glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec,
      [request]);
  }

  requestToShowUserConfirmationDialog(request) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ParamsSpec,
      glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec,
      [request]);
  }

  requestToConfirmNavigation(request) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      glic.mojom.WebClient_RequestToConfirmNavigation_ParamsSpec,
      glic.mojom.WebClient_RequestToConfirmNavigation_ResponseParamsSpec,
      [request]);
  }

  notifyAdditionalContext(context) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec,
      null,
      [context]);
  }

  notifyActuationOnWebSettingChanged(enabled) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec,
      null,
      [enabled]);
  }

  notifyActOnWebCapabilityChanged(can_act_on_web) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec,
      null,
      [can_act_on_web]);
  }

  notifyOnboardingCompletedChanged(completed) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec,
      null,
      [completed]);
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

// ParamsSpec for NotifyPanelWillOpen
glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyPanelWillOpen_Params',
      packedSize: 16,
      fields: [
        { name: 'panel_opening_data', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.PanelOpeningDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'openPanelInfo', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.OpenPanelInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyPanelWasClosed
glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyPanelWasClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for NotifyPanelStateChange
glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyPanelStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'panel_state', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.PanelStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyPanelActiveChange
glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyPanelActiveChange_Params',
      packedSize: 16,
      fields: [
        { name: 'panel_active', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyPanelCanAttachChange
glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyPanelCanAttachChange_Params',
      packedSize: 16,
      fields: [
        { name: 'can_attach', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyMicrophonePermissionStateChanged
glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyMicrophonePermissionStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyLocationPermissionStateChanged
glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyLocationPermissionStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyTabContextPermissionStateChanged
glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyTabContextPermissionStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyOsLocationPermissionStateChanged
glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyOsLocationPermissionStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyFocusedTabChanged
glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyFocusedTabChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'focused_tab_data', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.FocusedTabDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for NotifyManualResizeChanged
glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyManualResizeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'resizing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyOsHotkeyStateChanged
glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyOsHotkeyStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'hotkey', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyBrowserIsOpenChanged
glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyBrowserIsOpenChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'browser_is_open', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyInstanceActivationChanged
glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyInstanceActivationChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_active', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyClosedCaptioningSettingChanged
glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyClosedCaptioningSettingChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyPinnedTabsChanged
glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyPinnedTabsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(glic.mojom.TabDataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyPinnedTabDataChanged
glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyPinnedTabDataChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_data', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.TabDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifySkillPreviewsChanged
glic.mojom.WebClient_NotifySkillPreviewsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifySkillPreviewsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'skill_previews', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(glic.mojom.SkillPreviewSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifySkillPreviewChanged
glic.mojom.WebClient_NotifySkillPreviewChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifySkillPreviewChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'skill_preview', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.SkillPreviewSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifySkillToInvokeChanged
glic.mojom.WebClient_NotifySkillToInvokeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifySkillToInvokeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'skill', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.SkillSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyZeroStateSuggestionsChanged
glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyZeroStateSuggestionsChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'suggestions', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.ZeroStateSuggestionsV2Spec, nullable: true, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: glic.mojom.ZeroStateSuggestionsOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for NotifyActorTaskStateChanged
glic.mojom.WebClient_NotifyActorTaskStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyActorTaskStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 4, packedBitOffset: 0, type: glic.mojom.ActorTaskStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestViewChange
glic.mojom.WebClient_RequestViewChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.RequestViewChange_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.ViewChangeRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyPageMetadataChanged
glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyPageMetadataChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PageMetadataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for NotifyDefaultTabContextPermissionStateChanged
glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyDefaultTabContextPermissionStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestToShowCredentialSelectionDialog
glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.RequestToShowCredentialSelectionDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: actor.webui.mojom.SelectCredentialDialogRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: actor.webui.mojom.SelectCredentialDialogResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestToShowAutofillSuggestionsDialog
glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.RequestToShowAutofillSuggestionsDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: actor.webui.mojom.SelectAutofillSuggestionsDialogRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: actor.webui.mojom.SelectAutofillSuggestionsDialogResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestToShowUserConfirmationDialog
glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.RequestToShowUserConfirmationDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: actor.webui.mojom.UserConfirmationDialogRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: actor.webui.mojom.UserConfirmationDialogResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestToConfirmNavigation
glic.mojom.WebClient_RequestToConfirmNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.RequestToConfirmNavigation_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: actor.webui.mojom.NavigationConfirmationRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.WebClient_RequestToConfirmNavigation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: actor.webui.mojom.NavigationConfirmationResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyAdditionalContext
glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyAdditionalContext_Params',
      packedSize: 16,
      fields: [
        { name: 'context', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.AdditionalContextSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyActuationOnWebSettingChanged
glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyActuationOnWebSettingChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyActOnWebCapabilityChanged
glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyActOnWebCapabilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'can_act_on_web', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyOnboardingCompletedChanged
glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyOnboardingCompletedChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'completed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
glic.mojom.WebClientPtr = glic.mojom.WebClientRemote;
glic.mojom.WebClientRequest = glic.mojom.WebClientPendingReceiver;


// Interface: CaptureRegionObserver
glic.mojom.CaptureRegionObserver = {};

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
};

glic.mojom.CaptureRegionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onUpdate(result, reason) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec,
      null,
      [result, reason]);
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

// ParamsSpec for OnUpdate
glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.CaptureRegionObserver.OnUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.CaptureRegionResultSpec, nullable: true, minVersion: 0 },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: glic.mojom.CaptureRegionErrorReasonSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
glic.mojom.CaptureRegionObserverPtr = glic.mojom.CaptureRegionObserverRemote;
glic.mojom.CaptureRegionObserverRequest = glic.mojom.CaptureRegionObserverPendingReceiver;

