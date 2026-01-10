// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/glic/host/glic.mojom
// Module: glic.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const p = window.mojoVersion.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetProfileReadyState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetProfileReadyState (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setProfileReadyState');
          const result = this.impl.setProfileReadyState(params.ready_state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: IntentToShow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.Page_IntentToShow_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IntentToShow (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetProfileReadyState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.Page_SetProfileReadyState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetProfileReadyState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdatePageState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.Page_UpdatePageState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdatePageState (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.Page_IntentToShow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.intentToShow');
          const result = this.impl.intentToShow();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.Page_SetProfileReadyState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setProfileReadyState');
          const result = this.impl.setProfileReadyState(params.ready_state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.Page_UpdatePageState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updatePageState');
          const result = this.impl.updatePageState(params.panelStateKind);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: PrepareForClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrepareForClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prepareForClient');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

glic.mojom.GlicPreloadHandlerReceiver = glic.mojom.GlicPreloadHandlerReceiver;

glic.mojom.GlicPreloadHandlerPtr = glic.mojom.GlicPreloadHandlerRemote;
glic.mojom.GlicPreloadHandlerRequest = glic.mojom.GlicPreloadHandlerPendingReceiver;


// Interface: GlicPreloadHandlerFactory
mojo.internal.Struct(
    glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec, 'glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(glic.mojom.GlicPreloadHandlerSpec), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(glic.mojom.PreloadPageSpec), null, false, 0, undefined),
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreatePreloadHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePreloadHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPreloadHandler');
          const result = this.impl.createPreloadHandler(params.receiver, params.page);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

glic.mojom.GlicPreloadHandlerFactoryReceiver = glic.mojom.GlicPreloadHandlerFactoryReceiver;

glic.mojom.GlicPreloadHandlerFactoryPtr = glic.mojom.GlicPreloadHandlerFactoryRemote;
glic.mojom.GlicPreloadHandlerFactoryRequest = glic.mojom.GlicPreloadHandlerFactoryPendingReceiver;


// Interface: PageHandlerFactory
mojo.internal.Struct(
    glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'glic.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(glic.mojom.PageHandlerSpec), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(glic.mojom.PageSpec), null, false, 0, undefined),
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.receiver, params.page);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

glic.mojom.PageHandlerFactoryReceiver = glic.mojom.PageHandlerFactoryReceiver;

glic.mojom.PageHandlerFactoryPtr = glic.mojom.PageHandlerFactoryRemote;
glic.mojom.PageHandlerFactoryRequest = glic.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    glic.mojom.PageHandler_CreateWebClient_ParamsSpec, 'glic.mojom.PageHandler_CreateWebClient_Params', [
      mojo.internal.StructField('web_client_receiver', 0, 0, mojo.internal.InterfaceRequest(glic.mojom.WebClientHandlerSpec), null, false, 0, undefined),
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateWebClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_CreateWebClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateWebClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PrepareForClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_PrepareForClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrepareForClient (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: WebviewCommitted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_WebviewCommitted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WebviewCommitted (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ClosePanel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_ClosePanel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClosePanel (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OpenProfilePickerAndClosePanel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenProfilePickerAndClosePanel (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OpenDisabledByAdminLinkAndClosePanel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDisabledByAdminLinkAndClosePanel (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SignInAndClosePanel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SignInAndClosePanel (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ResizeWidget
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_ResizeWidget_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResizeWidget (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: EnableDragResize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_EnableDragResize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableDragResize (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: WebUiStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WebUiStateChanged (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetProfileEnablement
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PageHandler_GetProfileEnablement_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProfileEnablement (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandler_CreateWebClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createWebClient');
          const result = this.impl.createWebClient(params.web_client_receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandler_PrepareForClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prepareForClient');
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
          console.log('[GeneratedReceiver] Calling impl.webviewCommitted');
          const result = this.impl.webviewCommitted(params.url);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandler_ClosePanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closePanel');
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
          console.log('[GeneratedReceiver] Calling impl.openProfilePickerAndClosePanel');
          const result = this.impl.openProfilePickerAndClosePanel();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openDisabledByAdminLinkAndClosePanel');
          const result = this.impl.openDisabledByAdminLinkAndClosePanel();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.signInAndClosePanel');
          const result = this.impl.signInAndClosePanel();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandler_ResizeWidget_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resizeWidget');
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
          console.log('[GeneratedReceiver] Calling impl.enableDragResize');
          const result = this.impl.enableDragResize(params.enabled);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.webUiStateChanged');
          const result = this.impl.webUiStateChanged(params.new_state);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PageHandler_GetProfileEnablement_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProfileEnablement');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnPinCandidatesChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPinCandidatesChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPinCandidatesChanged');
          const result = this.impl.onPinCandidatesChanged(params.candidates);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

glic.mojom.PinCandidatesObserverReceiver = glic.mojom.PinCandidatesObserverReceiver;

glic.mojom.PinCandidatesObserverPtr = glic.mojom.PinCandidatesObserverRemote;
glic.mojom.PinCandidatesObserverRequest = glic.mojom.PinCandidatesObserverPendingReceiver;


// Interface: WebClientHandler
mojo.internal.Struct(
    glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec, 'glic.mojom.WebClientHandler_WebClientCreated_Params', [
      mojo.internal.StructField('web_client', 0, 0, mojo.internal.InterfaceProxy(glic.mojom.WebClientSpec), null, false, 0, undefined),
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
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(glic.mojom.PinCandidatesObserverSpec), null, false, 0, undefined),
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
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(glic.mojom.CaptureRegionObserverSpec), null, false, 0, undefined),
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
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceProxy(glic.mojom.TabDataHandlerSpec), null, false, 0, undefined),
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: WebClientCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WebClientCreated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: WebClientInitialized
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WebClientInitialized (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: WebClientInitializeFailed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WebClientInitializeFailed (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CreateTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_CreateTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateTab (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OpenLinkInPopup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenLinkInPopup (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OpenGlicSettingsPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenGlicSettingsPage (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OpenPasswordManagerSettingsPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenPasswordManagerSettingsPage (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ClosePanel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_ClosePanel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClosePanel (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ClosePanelAndShutdown
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClosePanelAndShutdown (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: AttachPanel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_AttachPanel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AttachPanel (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: DetachPanel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_DetachPanel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DetachPanel (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnModeChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnModeChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnModeChange (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: ShowProfilePicker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowProfilePicker (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: GetModelQualityClientId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetModelQualityClientId (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: GetContextFromFocusedTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetContextFromFocusedTab (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: GetContextFromTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetContextFromTab (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: GetContextForActorFromTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_GetContextForActorFromTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetContextForActorFromTab (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: SetMaximumNumberOfPinnedTabs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMaximumNumberOfPinnedTabs (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: PinTabs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_PinTabs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PinTabs (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: UnpinTabs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UnpinTabs (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: UnpinAllTabs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UnpinAllTabs (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: CreateSkill
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_CreateSkill_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSkill (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: UpdateSkill
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_UpdateSkill_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateSkill (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: GetSkill
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_GetSkill_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSkill (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: SubscribeToPinCandidates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubscribeToPinCandidates (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: CreateTask
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_CreateTask_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateTask (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: PerformActions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_PerformActions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PerformActions (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: CancelActions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_CancelActions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelActions (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: StopActorTask
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_StopActorTask_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopActorTask (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: PauseActorTask
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_PauseActorTask_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PauseActorTask (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: ResumeActorTask
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_ResumeActorTask_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResumeActorTask (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: InterruptActorTask
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_InterruptActorTask_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InterruptActorTask (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: UninterruptActorTask
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_UninterruptActorTask_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UninterruptActorTask (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
           }
        }
        // Try Method 33: CreateActorTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_CreateActorTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateActorTab (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 33 failed:', e);
           }
        }
        // Try Method 34: ActivateTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_ActivateTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ActivateTab (34)');
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 34 failed:', e);
           }
        }
        // Try Method 35: ResizeWidget
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResizeWidget (35)');
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 35 failed:', e);
           }
        }
        // Try Method 36: CaptureScreenshot
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CaptureScreenshot (36)');
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 36 failed:', e);
           }
        }
        // Try Method 37: CaptureRegion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CaptureRegion (37)');
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 37 failed:', e);
           }
        }
        // Try Method 38: SetAudioDucking
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAudioDucking (38)');
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 38 failed:', e);
           }
        }
        // Try Method 39: SetPanelDraggableAreas
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetPanelDraggableAreas_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPanelDraggableAreas (39)');
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 39 failed:', e);
           }
        }
        // Try Method 40: SetMinimumPanelSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMinimumPanelSize (40)');
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 40 failed:', e);
           }
        }
        // Try Method 41: SetMicrophonePermissionState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMicrophonePermissionState (41)');
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 41 failed:', e);
           }
        }
        // Try Method 42: SetLocationPermissionState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLocationPermissionState (42)');
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 42 failed:', e);
           }
        }
        // Try Method 43: SetTabContextPermissionState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTabContextPermissionState (43)');
             this.mapOrdinal(header.ordinal, 43);
             dispatchId = 43;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 43 failed:', e);
           }
        }
        // Try Method 44: SetClosedCaptioningSetting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetClosedCaptioningSetting (44)');
             this.mapOrdinal(header.ordinal, 44);
             dispatchId = 44;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 44 failed:', e);
           }
        }
        // Try Method 45: SetActuationOnWebSetting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetActuationOnWebSetting (45)');
             this.mapOrdinal(header.ordinal, 45);
             dispatchId = 45;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 45 failed:', e);
           }
        }
        // Try Method 46: ShouldAllowMediaPermissionRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldAllowMediaPermissionRequest (46)');
             this.mapOrdinal(header.ordinal, 46);
             dispatchId = 46;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 46 failed:', e);
           }
        }
        // Try Method 47: ShouldAllowGeolocationPermissionRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldAllowGeolocationPermissionRequest (47)');
             this.mapOrdinal(header.ordinal, 47);
             dispatchId = 47;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 47 failed:', e);
           }
        }
        // Try Method 48: SetContextAccessIndicator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetContextAccessIndicator (48)');
             this.mapOrdinal(header.ordinal, 48);
             dispatchId = 48;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 48 failed:', e);
           }
        }
        // Try Method 49: GetUserProfileInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserProfileInfo (49)');
             this.mapOrdinal(header.ordinal, 49);
             dispatchId = 49;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 49 failed:', e);
           }
        }
        // Try Method 50: SyncCookies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SyncCookies_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SyncCookies (50)');
             this.mapOrdinal(header.ordinal, 50);
             dispatchId = 50;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 50 failed:', e);
           }
        }
        // Try Method 51: LogBeginAsyncEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_LogBeginAsyncEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogBeginAsyncEvent (51)');
             this.mapOrdinal(header.ordinal, 51);
             dispatchId = 51;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 51 failed:', e);
           }
        }
        // Try Method 52: LogEndAsyncEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_LogEndAsyncEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogEndAsyncEvent (52)');
             this.mapOrdinal(header.ordinal, 52);
             dispatchId = 52;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 52 failed:', e);
           }
        }
        // Try Method 53: LogInstantEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_LogInstantEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogInstantEvent (53)');
             this.mapOrdinal(header.ordinal, 53);
             dispatchId = 53;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 53 failed:', e);
           }
        }
        // Try Method 54: JournalClear
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_JournalClear_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> JournalClear (54)');
             this.mapOrdinal(header.ordinal, 54);
             dispatchId = 54;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 54 failed:', e);
           }
        }
        // Try Method 55: JournalSnapshot
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_JournalSnapshot_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> JournalSnapshot (55)');
             this.mapOrdinal(header.ordinal, 55);
             dispatchId = 55;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 55 failed:', e);
           }
        }
        // Try Method 56: JournalStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_JournalStart_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> JournalStart (56)');
             this.mapOrdinal(header.ordinal, 56);
             dispatchId = 56;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 56 failed:', e);
           }
        }
        // Try Method 57: JournalStop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_JournalStop_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> JournalStop (57)');
             this.mapOrdinal(header.ordinal, 57);
             dispatchId = 57;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 57 failed:', e);
           }
        }
        // Try Method 58: JournalRecordFeedback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_JournalRecordFeedback_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> JournalRecordFeedback (58)');
             this.mapOrdinal(header.ordinal, 58);
             dispatchId = 58;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 58 failed:', e);
           }
        }
        // Try Method 59: OnUserInputSubmitted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnUserInputSubmitted (59)');
             this.mapOrdinal(header.ordinal, 59);
             dispatchId = 59;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 59 failed:', e);
           }
        }
        // Try Method 60: OnContextUploadStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnContextUploadStarted (60)');
             this.mapOrdinal(header.ordinal, 60);
             dispatchId = 60;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 60 failed:', e);
           }
        }
        // Try Method 61: OnContextUploadCompleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnContextUploadCompleted (61)');
             this.mapOrdinal(header.ordinal, 61);
             dispatchId = 61;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 61 failed:', e);
           }
        }
        // Try Method 62: OnReaction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnReaction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReaction (62)');
             this.mapOrdinal(header.ordinal, 62);
             dispatchId = 62;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 62 failed:', e);
           }
        }
        // Try Method 63: OnResponseStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResponseStarted (63)');
             this.mapOrdinal(header.ordinal, 63);
             dispatchId = 63;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 63 failed:', e);
           }
        }
        // Try Method 64: OnResponseStopped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResponseStopped (64)');
             this.mapOrdinal(header.ordinal, 64);
             dispatchId = 64;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 64 failed:', e);
           }
        }
        // Try Method 65: OnSessionTerminated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSessionTerminated (65)');
             this.mapOrdinal(header.ordinal, 65);
             dispatchId = 65;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 65 failed:', e);
           }
        }
        // Try Method 66: OnTurnCompleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTurnCompleted (66)');
             this.mapOrdinal(header.ordinal, 66);
             dispatchId = 66;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 66 failed:', e);
           }
        }
        // Try Method 67: OnModelChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnModelChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnModelChanged (67)');
             this.mapOrdinal(header.ordinal, 67);
             dispatchId = 67;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 67 failed:', e);
           }
        }
        // Try Method 68: OnRecordUseCounter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnRecordUseCounter_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRecordUseCounter (68)');
             this.mapOrdinal(header.ordinal, 68);
             dispatchId = 68;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 68 failed:', e);
           }
        }
        // Try Method 69: OnResponseRated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResponseRated (69)');
             this.mapOrdinal(header.ordinal, 69);
             dispatchId = 69;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 69 failed:', e);
           }
        }
        // Try Method 70: OnClosedCaptionsShown
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClosedCaptionsShown (70)');
             this.mapOrdinal(header.ordinal, 70);
             dispatchId = 70;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 70 failed:', e);
           }
        }
        // Try Method 71: ScrollTo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_ScrollTo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScrollTo (71)');
             this.mapOrdinal(header.ordinal, 71);
             dispatchId = 71;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 71 failed:', e);
           }
        }
        // Try Method 72: DropScrollToHighlight
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_DropScrollToHighlight_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DropScrollToHighlight (72)');
             this.mapOrdinal(header.ordinal, 72);
             dispatchId = 72;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 72 failed:', e);
           }
        }
        // Try Method 73: SetSyntheticExperimentState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSyntheticExperimentState (73)');
             this.mapOrdinal(header.ordinal, 73);
             dispatchId = 73;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 73 failed:', e);
           }
        }
        // Try Method 74: OpenOsPermissionSettingsMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenOsPermissionSettingsMenu (74)');
             this.mapOrdinal(header.ordinal, 74);
             dispatchId = 74;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 74 failed:', e);
           }
        }
        // Try Method 75: GetOsMicrophonePermissionStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOsMicrophonePermissionStatus (75)');
             this.mapOrdinal(header.ordinal, 75);
             dispatchId = 75;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 75 failed:', e);
           }
        }
        // Try Method 76: GetZeroStateSuggestionsAndSubscribe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetZeroStateSuggestionsAndSubscribe (76)');
             this.mapOrdinal(header.ordinal, 76);
             dispatchId = 76;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 76 failed:', e);
           }
        }
        // Try Method 77: GetZeroStateSuggestionsForFocusedTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetZeroStateSuggestionsForFocusedTab (77)');
             this.mapOrdinal(header.ordinal, 77);
             dispatchId = 77;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 77 failed:', e);
           }
        }
        // Try Method 78: MaybeRefreshUserStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MaybeRefreshUserStatus (78)');
             this.mapOrdinal(header.ordinal, 78);
             dispatchId = 78;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 78 failed:', e);
           }
        }
        // Try Method 79: IsDebuggerAttached
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsDebuggerAttached (79)');
             this.mapOrdinal(header.ordinal, 79);
             dispatchId = 79;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 79 failed:', e);
           }
        }
        // Try Method 80: OnViewChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_OnViewChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnViewChanged (80)');
             this.mapOrdinal(header.ordinal, 80);
             dispatchId = 80;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 80 failed:', e);
           }
        }
        // Try Method 81: SubscribeToPageMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubscribeToPageMetadata (81)');
             this.mapOrdinal(header.ordinal, 81);
             dispatchId = 81;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 81 failed:', e);
           }
        }
        // Try Method 82: SwitchConversation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SwitchConversation (82)');
             this.mapOrdinal(header.ordinal, 82);
             dispatchId = 82;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 82 failed:', e);
           }
        }
        // Try Method 83: RegisterConversation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterConversation (83)');
             this.mapOrdinal(header.ordinal, 83);
             dispatchId = 83;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 83 failed:', e);
           }
        }
        // Try Method 84: SetOnboardingCompleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOnboardingCompleted (84)');
             this.mapOrdinal(header.ordinal, 84);
             dispatchId = 84;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 84 failed:', e);
           }
        }
        // Try Method 85: SubscribeToTabData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubscribeToTabData (85)');
             this.mapOrdinal(header.ordinal, 85);
             dispatchId = 85;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 85 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.webClientCreated');
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
          console.log('[GeneratedReceiver] Calling impl.webClientInitialized');
          const result = this.impl.webClientInitialized();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.webClientInitializeFailed');
          const result = this.impl.webClientInitializeFailed();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_CreateTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createTab');
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
          console.log('[GeneratedReceiver] Calling impl.openLinkInPopup');
          const result = this.impl.openLinkInPopup(params.url, params.popup_width, params.popup_height);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openGlicSettingsPage');
          const result = this.impl.openGlicSettingsPage(params.options);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openPasswordManagerSettingsPage');
          const result = this.impl.openPasswordManagerSettingsPage();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_ClosePanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closePanel');
          const result = this.impl.closePanel();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closePanelAndShutdown');
          const result = this.impl.closePanelAndShutdown();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_AttachPanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.attachPanel');
          const result = this.impl.attachPanel();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_DetachPanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.detachPanel');
          const result = this.impl.detachPanel();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnModeChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onModeChange');
          const result = this.impl.onModeChange(params.new_mode);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showProfilePicker');
          const result = this.impl.showProfilePicker();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getModelQualityClientId');
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
          console.log('[GeneratedReceiver] Calling impl.getContextFromFocusedTab');
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
          console.log('[GeneratedReceiver] Calling impl.getContextFromTab');
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
          console.log('[GeneratedReceiver] Calling impl.getContextForActorFromTab');
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
          console.log('[GeneratedReceiver] Calling impl.setMaximumNumberOfPinnedTabs');
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
          console.log('[GeneratedReceiver] Calling impl.pinTabs');
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
          console.log('[GeneratedReceiver] Calling impl.unpinTabs');
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
          console.log('[GeneratedReceiver] Calling impl.unpinAllTabs');
          const result = this.impl.unpinAllTabs(params.options);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_CreateSkill_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSkill');
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
          console.log('[GeneratedReceiver] Calling impl.updateSkill');
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
          console.log('[GeneratedReceiver] Calling impl.getSkill');
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
          console.log('[GeneratedReceiver] Calling impl.subscribeToPinCandidates');
          const result = this.impl.subscribeToPinCandidates(params.options, params.observer);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_CreateTask_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createTask');
          const result = this.impl.createTask(params.task_options);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_PerformActions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.performActions');
          const result = this.impl.performActions(params.actions_proto);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_CancelActions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelActions');
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
          console.log('[GeneratedReceiver] Calling impl.stopActorTask');
          const result = this.impl.stopActorTask(params.task_id, params.stop_reason);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_PauseActorTask_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pauseActorTask');
          const result = this.impl.pauseActorTask(params.task_id, params.pause_reason, params.tab_id);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_ResumeActorTask_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resumeActorTask');
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
          console.log('[GeneratedReceiver] Calling impl.interruptActorTask');
          const result = this.impl.interruptActorTask(params.task_id);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_UninterruptActorTask_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.uninterruptActorTask');
          const result = this.impl.uninterruptActorTask(params.task_id);
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_CreateActorTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createActorTab');
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
          console.log('[GeneratedReceiver] Calling impl.activateTab');
          const result = this.impl.activateTab(params.task_id);
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resizeWidget');
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
          console.log('[GeneratedReceiver] Calling impl.captureScreenshot');
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
          console.log('[GeneratedReceiver] Calling impl.captureRegion');
          const result = this.impl.captureRegion(params.observer);
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAudioDucking');
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
          console.log('[GeneratedReceiver] Calling impl.setPanelDraggableAreas');
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
          console.log('[GeneratedReceiver] Calling impl.setMinimumPanelSize');
          const result = this.impl.setMinimumPanelSize(params.size);
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMicrophonePermissionState');
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
          console.log('[GeneratedReceiver] Calling impl.setLocationPermissionState');
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
          console.log('[GeneratedReceiver] Calling impl.setTabContextPermissionState');
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
          console.log('[GeneratedReceiver] Calling impl.setClosedCaptioningSetting');
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
          console.log('[GeneratedReceiver] Calling impl.setActuationOnWebSetting');
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
          console.log('[GeneratedReceiver] Calling impl.shouldAllowMediaPermissionRequest');
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
          console.log('[GeneratedReceiver] Calling impl.shouldAllowGeolocationPermissionRequest');
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
          console.log('[GeneratedReceiver] Calling impl.setContextAccessIndicator');
          const result = this.impl.setContextAccessIndicator(params.enabled);
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUserProfileInfo');
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
          console.log('[GeneratedReceiver] Calling impl.syncCookies');
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
          console.log('[GeneratedReceiver] Calling impl.logBeginAsyncEvent');
          const result = this.impl.logBeginAsyncEvent(params.event_async_id, params.task_id, params.event, params.details);
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_LogEndAsyncEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logEndAsyncEvent');
          const result = this.impl.logEndAsyncEvent(params.event_async_id, params.details);
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_LogInstantEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logInstantEvent');
          const result = this.impl.logInstantEvent(params.task_id, params.event, params.details);
          break;
        }
        case 54: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_JournalClear_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.journalClear');
          const result = this.impl.journalClear();
          break;
        }
        case 55: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_JournalSnapshot_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.journalSnapshot');
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
          console.log('[GeneratedReceiver] Calling impl.journalStart');
          const result = this.impl.journalStart(params.max_bytes, params.capture_screenshots);
          break;
        }
        case 57: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_JournalStop_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.journalStop');
          const result = this.impl.journalStop();
          break;
        }
        case 58: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_JournalRecordFeedback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.journalRecordFeedback');
          const result = this.impl.journalRecordFeedback(params.positive, params.reason);
          break;
        }
        case 59: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUserInputSubmitted');
          const result = this.impl.onUserInputSubmitted(params.mode);
          break;
        }
        case 60: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onContextUploadStarted');
          const result = this.impl.onContextUploadStarted();
          break;
        }
        case 61: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onContextUploadCompleted');
          const result = this.impl.onContextUploadCompleted();
          break;
        }
        case 62: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnReaction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReaction');
          const result = this.impl.onReaction(params.reactionType);
          break;
        }
        case 63: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onResponseStarted');
          const result = this.impl.onResponseStarted();
          break;
        }
        case 64: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onResponseStopped');
          const result = this.impl.onResponseStopped(params.details);
          break;
        }
        case 65: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSessionTerminated');
          const result = this.impl.onSessionTerminated();
          break;
        }
        case 66: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTurnCompleted');
          const result = this.impl.onTurnCompleted(params.model, params.duration);
          break;
        }
        case 67: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnModelChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onModelChanged');
          const result = this.impl.onModelChanged(params.model);
          break;
        }
        case 68: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnRecordUseCounter_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRecordUseCounter');
          const result = this.impl.onRecordUseCounter(params.counter);
          break;
        }
        case 69: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onResponseRated');
          const result = this.impl.onResponseRated(params.positive);
          break;
        }
        case 70: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClosedCaptionsShown');
          const result = this.impl.onClosedCaptionsShown();
          break;
        }
        case 71: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_ScrollTo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scrollTo');
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
          console.log('[GeneratedReceiver] Calling impl.dropScrollToHighlight');
          const result = this.impl.dropScrollToHighlight();
          break;
        }
        case 73: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSyntheticExperimentState');
          const result = this.impl.setSyntheticExperimentState(params.trial_name, params.group_name);
          break;
        }
        case 74: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openOsPermissionSettingsMenu');
          const result = this.impl.openOsPermissionSettingsMenu(params.type);
          break;
        }
        case 75: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOsMicrophonePermissionStatus');
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
          console.log('[GeneratedReceiver] Calling impl.getZeroStateSuggestionsAndSubscribe');
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
          console.log('[GeneratedReceiver] Calling impl.getZeroStateSuggestionsForFocusedTab');
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
          console.log('[GeneratedReceiver] Calling impl.maybeRefreshUserStatus');
          const result = this.impl.maybeRefreshUserStatus();
          break;
        }
        case 79: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isDebuggerAttached');
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
          console.log('[GeneratedReceiver] Calling impl.onViewChanged');
          const result = this.impl.onViewChanged(params.notification);
          break;
        }
        case 81: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.subscribeToPageMetadata');
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
          console.log('[GeneratedReceiver] Calling impl.switchConversation');
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
          console.log('[GeneratedReceiver] Calling impl.registerConversation');
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
          console.log('[GeneratedReceiver] Calling impl.setOnboardingCompleted');
          const result = this.impl.setOnboardingCompleted();
          break;
        }
        case 85: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.subscribeToTabData');
          const result = this.impl.subscribeToTabData(params.tab_id, params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnTabDataChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTabDataChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTabDataChanged');
          const result = this.impl.onTabDataChanged(params.tab_data);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: NotifyPanelWillOpen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyPanelWillOpen (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: NotifyPanelWasClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyPanelWasClosed (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: NotifyPanelStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyPanelStateChange (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: NotifyPanelActiveChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyPanelActiveChange (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: NotifyPanelCanAttachChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyPanelCanAttachChange (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: NotifyMicrophonePermissionStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyMicrophonePermissionStateChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: NotifyLocationPermissionStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyLocationPermissionStateChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: NotifyTabContextPermissionStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyTabContextPermissionStateChanged (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: NotifyOsLocationPermissionStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyOsLocationPermissionStateChanged (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: NotifyFocusedTabChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyFocusedTabChanged (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: NotifyManualResizeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyManualResizeChanged (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: NotifyOsHotkeyStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyOsHotkeyStateChanged (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: NotifyBrowserIsOpenChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyBrowserIsOpenChanged (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: NotifyInstanceActivationChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyInstanceActivationChanged (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: NotifyClosedCaptioningSettingChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyClosedCaptioningSettingChanged (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: NotifyPinnedTabsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyPinnedTabsChanged (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: NotifyPinnedTabDataChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyPinnedTabDataChanged (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: NotifySkillPreviewsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifySkillPreviewsChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifySkillPreviewsChanged (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: NotifySkillPreviewChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifySkillPreviewChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifySkillPreviewChanged (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: NotifySkillToInvokeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifySkillToInvokeChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifySkillToInvokeChanged (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: NotifyZeroStateSuggestionsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyZeroStateSuggestionsChanged (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: NotifyActorTaskStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyActorTaskStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyActorTaskStateChanged (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: RequestViewChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_RequestViewChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestViewChange (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: NotifyPageMetadataChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyPageMetadataChanged (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: NotifyDefaultTabContextPermissionStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyDefaultTabContextPermissionStateChanged (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: RequestToShowCredentialSelectionDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestToShowCredentialSelectionDialog (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: RequestToShowAutofillSuggestionsDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestToShowAutofillSuggestionsDialog (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: RequestToShowUserConfirmationDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestToShowUserConfirmationDialog (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: RequestToConfirmNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_RequestToConfirmNavigation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestToConfirmNavigation (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: NotifyAdditionalContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyAdditionalContext (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: NotifyActuationOnWebSettingChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyActuationOnWebSettingChanged (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: NotifyActOnWebCapabilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyActOnWebCapabilityChanged (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: NotifyOnboardingCompletedChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyOnboardingCompletedChanged (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPanelWillOpen');
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
          console.log('[GeneratedReceiver] Calling impl.notifyPanelWasClosed');
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
          console.log('[GeneratedReceiver] Calling impl.notifyPanelStateChange');
          const result = this.impl.notifyPanelStateChange(params.panel_state);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPanelActiveChange');
          const result = this.impl.notifyPanelActiveChange(params.panel_active);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPanelCanAttachChange');
          const result = this.impl.notifyPanelCanAttachChange(params.can_attach);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyMicrophonePermissionStateChanged');
          const result = this.impl.notifyMicrophonePermissionStateChanged(params.enabled);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyLocationPermissionStateChanged');
          const result = this.impl.notifyLocationPermissionStateChanged(params.enabled);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyTabContextPermissionStateChanged');
          const result = this.impl.notifyTabContextPermissionStateChanged(params.enabled);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyOsLocationPermissionStateChanged');
          const result = this.impl.notifyOsLocationPermissionStateChanged(params.enabled);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyFocusedTabChanged');
          const result = this.impl.notifyFocusedTabChanged(params.focused_tab_data);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyManualResizeChanged');
          const result = this.impl.notifyManualResizeChanged(params.resizing);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyOsHotkeyStateChanged');
          const result = this.impl.notifyOsHotkeyStateChanged(params.hotkey);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyBrowserIsOpenChanged');
          const result = this.impl.notifyBrowserIsOpenChanged(params.browser_is_open);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyInstanceActivationChanged');
          const result = this.impl.notifyInstanceActivationChanged(params.instance_active);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyClosedCaptioningSettingChanged');
          const result = this.impl.notifyClosedCaptioningSettingChanged(params.enabled);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPinnedTabsChanged');
          const result = this.impl.notifyPinnedTabsChanged(params.tab_data);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPinnedTabDataChanged');
          const result = this.impl.notifyPinnedTabDataChanged(params.tab_data);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifySkillPreviewsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySkillPreviewsChanged');
          const result = this.impl.notifySkillPreviewsChanged(params.skill_previews);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifySkillPreviewChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySkillPreviewChanged');
          const result = this.impl.notifySkillPreviewChanged(params.skill_preview);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifySkillToInvokeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySkillToInvokeChanged');
          const result = this.impl.notifySkillToInvokeChanged(params.skill);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyZeroStateSuggestionsChanged');
          const result = this.impl.notifyZeroStateSuggestionsChanged(params.suggestions, params.options);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyActorTaskStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyActorTaskStateChanged');
          const result = this.impl.notifyActorTaskStateChanged(params.task_id, params.state);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_RequestViewChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestViewChange');
          const result = this.impl.requestViewChange(params.request);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPageMetadataChanged');
          const result = this.impl.notifyPageMetadataChanged(params.tab_id, params.metadata);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyDefaultTabContextPermissionStateChanged');
          const result = this.impl.notifyDefaultTabContextPermissionStateChanged(params.enabled);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestToShowCredentialSelectionDialog');
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
          console.log('[GeneratedReceiver] Calling impl.requestToShowAutofillSuggestionsDialog');
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
          console.log('[GeneratedReceiver] Calling impl.requestToShowUserConfirmationDialog');
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
          console.log('[GeneratedReceiver] Calling impl.requestToConfirmNavigation');
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
          console.log('[GeneratedReceiver] Calling impl.notifyAdditionalContext');
          const result = this.impl.notifyAdditionalContext(params.context);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyActuationOnWebSettingChanged');
          const result = this.impl.notifyActuationOnWebSettingChanged(params.enabled);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyActOnWebCapabilityChanged');
          const result = this.impl.notifyActOnWebCapabilityChanged(params.can_act_on_web);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyOnboardingCompletedChanged');
          const result = this.impl.notifyOnboardingCompletedChanged(params.completed);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnUpdate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUpdate');
          const result = this.impl.onUpdate(params.result, params.reason);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

glic.mojom.CaptureRegionObserverReceiver = glic.mojom.CaptureRegionObserverReceiver;

glic.mojom.CaptureRegionObserverPtr = glic.mojom.CaptureRegionObserverRemote;
glic.mojom.CaptureRegionObserverRequest = glic.mojom.CaptureRegionObserverPendingReceiver;

