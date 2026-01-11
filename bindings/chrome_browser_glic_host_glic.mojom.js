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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.glic = mojo.internal.bindings.glic || {};
mojo.internal.bindings.glic.mojom = mojo.internal.bindings.glic.mojom || {};
mojo.internal.bindings.actor = mojo.internal.bindings.actor || {};
mojo.internal.bindings.content_settings = mojo.internal.bindings.content_settings || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.glic.mojom.ProfileReadyStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.WebUiStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.MetricUserInputReactionTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.PrepareForClientResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.PerformActionsErrorReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.CreateTaskErrorReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.ActorTaskStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.ActorTaskPauseReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.ActorTaskStopReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.CaptureScreenshotErrorReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.PlatformSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.ScrollToErrorReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.SkillSourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.PinTriggerSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.UnpinTriggerSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.CancelActionsResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.SwitchConversationErrorReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.RegisterConversationErrorReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.PanelStateKindSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.InvocationSourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.WebClientModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.WebClientModelSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.WebUseCounterSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.ResponseStopCauseSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.CaptureRegionErrorReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.SettingsPageFieldSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.HostCapabilitySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.CurrentViewSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.glic.mojom.GetContextResultSpec = { $: {} };
mojo.internal.bindings.glic.mojom.CaptureScreenshotResultSpec = { $: {} };
mojo.internal.bindings.glic.mojom.ScrollToSelectorSpec = { $: {} };
mojo.internal.bindings.glic.mojom.AdditionalContextPartSpec = { $: {} };
mojo.internal.bindings.glic.mojom.FocusedTabDataSpec = { $: {} };
mojo.internal.bindings.glic.mojom.CapturedRegionSpec = { $: {} };
mojo.internal.bindings.glic.mojom.ViewChangeRequestDetailsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.ProfileEnablementSpec = { $: {} };
mojo.internal.bindings.glic.mojom.GetContextResultWithActionResultCodeSpec = { $: {} };
mojo.internal.bindings.glic.mojom.UserProfileInfoSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientInitialStateSpec = { $: {} };
mojo.internal.bindings.glic.mojom.GetTabContextOptionsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.GetPinCandidatesOptionsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.ScrollToParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.ScrollToTextSelectorSpec = { $: {} };
mojo.internal.bindings.glic.mojom.ScrollToTextFragmentSelectorSpec = { $: {} };
mojo.internal.bindings.glic.mojom.ScrollToNodeSelectorSpec = { $: {} };
mojo.internal.bindings.glic.mojom.SuggestionContentSpec = { $: {} };
mojo.internal.bindings.glic.mojom.SkillPreviewSpec = { $: {} };
mojo.internal.bindings.glic.mojom.SkillSpec = { $: {} };
mojo.internal.bindings.glic.mojom.CreateSkillRequestSpec = { $: {} };
mojo.internal.bindings.glic.mojom.UpdateSkillRequestSpec = { $: {} };
mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsV2Spec = { $: {} };
mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsOptionsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PinCandidateSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PinTabsOptionsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.UnpinTabsOptionsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.ConversationInfoSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PanelOpeningDataSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PanelStateSpec = { $: {} };
mojo.internal.bindings.glic.mojom.OnResponseStoppedDetailsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.OpenPanelInfoSpec = { $: {} };
mojo.internal.bindings.glic.mojom.ContextDataSpec = { $: {} };
mojo.internal.bindings.glic.mojom.AdditionalContextSpec = { $: {} };
mojo.internal.bindings.glic.mojom.TabContextSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebPageDataSpec = { $: {} };
mojo.internal.bindings.glic.mojom.DocumentDataSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PdfDocumentDataSpec = { $: {} };
mojo.internal.bindings.glic.mojom.TabDataSpec = { $: {} };
mojo.internal.bindings.glic.mojom.NoFocusedTabDataSpec = { $: {} };
mojo.internal.bindings.glic.mojom.AnnotatedPageDataSpec = { $: {} };
mojo.internal.bindings.glic.mojom.ImageOriginAnnotationsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.JournalSpec = { $: {} };
mojo.internal.bindings.glic.mojom.CaptureRegionResultSpec = { $: {} };
mojo.internal.bindings.glic.mojom.ScreenshotSpec = { $: {} };
mojo.internal.bindings.glic.mojom.OpenSettingsOptionsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.ViewChangeRequestActuationSpec = { $: {} };
mojo.internal.bindings.glic.mojom.ViewChangeRequestConversationSpec = { $: {} };
mojo.internal.bindings.glic.mojom.ViewChangeRequestSpec = { $: {} };
mojo.internal.bindings.glic.mojom.ViewChangedNotificationSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PreloadPage = {};
mojo.internal.bindings.glic.mojom.PreloadPage.$interfaceName = 'glic.mojom.PreloadPage';
mojo.internal.bindings.glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.Page = {};
mojo.internal.bindings.glic.mojom.Page.$interfaceName = 'glic.mojom.Page';
mojo.internal.bindings.glic.mojom.Page_IntentToShow_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.Page_SetProfileReadyState_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.Page_UpdatePageState_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.GlicPreloadHandler = {};
mojo.internal.bindings.glic.mojom.GlicPreloadHandler.$interfaceName = 'glic.mojom.GlicPreloadHandler';
mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory = {};
mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory.$interfaceName = 'glic.mojom.GlicPreloadHandlerFactory';
mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PageHandlerFactory = {};
mojo.internal.bindings.glic.mojom.PageHandlerFactory.$interfaceName = 'glic.mojom.PageHandlerFactory';
mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PageHandler = {};
mojo.internal.bindings.glic.mojom.PageHandler.$interfaceName = 'glic.mojom.PageHandler';
mojo.internal.bindings.glic.mojom.PageHandler_CreateWebClient_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PageHandler_WebviewCommitted_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PageHandler_EnableDragResize_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PageHandler_GetProfileEnablement_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PageHandler_GetProfileEnablement_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.PinCandidatesObserver = {};
mojo.internal.bindings.glic.mojom.PinCandidatesObserver.$interfaceName = 'glic.mojom.PinCandidatesObserver';
mojo.internal.bindings.glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler = {};
mojo.internal.bindings.glic.mojom.WebClientHandler.$interfaceName = 'glic.mojom.WebClientHandler';
mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanel_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_AttachPanel_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_DetachPanel_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_OnModeChange_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextForActorFromTab_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextForActorFromTab_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_CreateSkill_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_CreateSkill_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_UpdateSkill_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_UpdateSkill_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_GetSkill_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_GetSkill_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTask_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_PerformActions_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_CancelActions_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_CancelActions_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_StopActorTask_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_PauseActorTask_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_ResumeActorTask_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_ResumeActorTask_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_InterruptActorTask_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_UninterruptActorTask_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_CreateActorTab_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_CreateActorTab_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTab_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetPanelDraggableAreas_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetPanelDraggableAreas_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_LogBeginAsyncEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_LogEndAsyncEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_LogInstantEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_JournalClear_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_JournalSnapshot_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_JournalSnapshot_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_JournalStart_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_JournalStop_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_JournalRecordFeedback_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_OnReaction_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_OnModelChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_OnRecordUseCounter_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_ScrollTo_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_ScrollTo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_DropScrollToHighlight_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_OnViewChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.TabDataHandler = {};
mojo.internal.bindings.glic.mojom.TabDataHandler.$interfaceName = 'glic.mojom.TabDataHandler';
mojo.internal.bindings.glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient = {};
mojo.internal.bindings.glic.mojom.WebClient.$interfaceName = 'glic.mojom.WebClient';
mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifySkillPreviewsChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifySkillPreviewChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifySkillToInvokeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyActorTaskStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_RequestViewChange_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_RequestToConfirmNavigation_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_RequestToConfirmNavigation_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.glic.mojom.CaptureRegionObserver = {};
mojo.internal.bindings.glic.mojom.CaptureRegionObserver.$interfaceName = 'glic.mojom.CaptureRegionObserver';
mojo.internal.bindings.glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec = { $: {} };

// Enum: ProfileReadyState
mojo.internal.bindings.glic.mojom.ProfileReadyState = {
  kUnknownError: 0,
  kSignInRequired: 1,
  kReady: 2,
  kIneligible: 3,
  kDisabledByAdmin: 4,
};

// Enum: WebUiState
mojo.internal.bindings.glic.mojom.WebUiState = {
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
mojo.internal.bindings.glic.mojom.MetricUserInputReactionType = {
  kUnknown: 0,
  kCanned: 1,
  kModel: 2,
};

// Enum: PrepareForClientResult
mojo.internal.bindings.glic.mojom.PrepareForClientResult = {
  kSuccess: 0,
  kErrorResyncingCookies: 1,
  kRequiresSignIn: 2,
};

// Enum: PerformActionsErrorReason
mojo.internal.bindings.glic.mojom.PerformActionsErrorReason = {
  kUnknown: 0,
  MinVersion: 0,
  MinVersion: 0,
};

// Enum: CreateTaskErrorReason
mojo.internal.bindings.glic.mojom.CreateTaskErrorReason = {
  kUnknown: 0,
  kTaskSystemUnavailable: 1,
};

// Enum: ActorTaskState
mojo.internal.bindings.glic.mojom.ActorTaskState = {
  kUnknown: 0,
  kIdle: 1,
  kActing: 2,
  kPaused: 3,
  kStopped: 4,
};

// Enum: ActorTaskPauseReason
mojo.internal.bindings.glic.mojom.ActorTaskPauseReason = {
  kPausedByModel: 0,
  kPausedByUser: 1,
};

// Enum: ActorTaskStopReason
mojo.internal.bindings.glic.mojom.ActorTaskStopReason = {
  kTaskComplete: 0,
  kStoppedByUser: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
};

// Enum: CaptureScreenshotErrorReason
mojo.internal.bindings.glic.mojom.CaptureScreenshotErrorReason = {
  kUnknown: 0,
  kScreenCaptureRequestThrottled: 1,
  kUserCancelledScreenPickerDialog: 2,
};

// Enum: Platform
mojo.internal.bindings.glic.mojom.Platform = {
  kUnknown: 0,
  kMacOS: 1,
  kWindows: 2,
  kLinux: 3,
  kChromeOS: 4,
};

// Enum: ScrollToErrorReason
mojo.internal.bindings.glic.mojom.ScrollToErrorReason = {
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
mojo.internal.bindings.glic.mojom.SkillSource = {
  kUnknown: 0,
  kFirstParty: 1,
  kUserCreated: 2,
};

// Enum: PinTrigger
mojo.internal.bindings.glic.mojom.PinTrigger = {
  kWebClientUnknown: 0,
  kCandidatesToggle: 1,
  kAtMention: 2,
  kActuation: 3,
};

// Enum: UnpinTrigger
mojo.internal.bindings.glic.mojom.UnpinTrigger = {
  kWebClientUnknown: 0,
  kCandidatesToggle: 1,
  kChip: 2,
  kActuation: 3,
};

// Enum: CancelActionsResult
mojo.internal.bindings.glic.mojom.CancelActionsResult = {
  kUnknown: 0,
  kSuccess: 1,
  kTaskNotFound: 2,
  kFailed: 3,
};

// Enum: SwitchConversationErrorReason
mojo.internal.bindings.glic.mojom.SwitchConversationErrorReason = {
  kUnknown: 0,
};

// Enum: RegisterConversationErrorReason
mojo.internal.bindings.glic.mojom.RegisterConversationErrorReason = {
  kUnknown: 0,
  kInstanceAlreadyHasConversationId: 1,
};

// Enum: PanelStateKind
mojo.internal.bindings.glic.mojom.PanelStateKind = {
  kHidden: 0,
  kDetached: 1,
  kAttached: 2,
};

// Enum: InvocationSource
mojo.internal.bindings.glic.mojom.InvocationSource = {
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
mojo.internal.bindings.glic.mojom.WebClientMode = {
  kUnknown: 2,
  kText: 0,
  kAudio: 1,
};

// Enum: WebClientModel
mojo.internal.bindings.glic.mojom.WebClientModel = {
  kDefault: 0,
  kActor: 1,
};

// Enum: WebUseCounter
mojo.internal.bindings.glic.mojom.WebUseCounter = {
  kDefault: 0,
  kSubmitPromptWithAutoMode: 1,
  kTaskInterruptedForUserConfirmation: 2,
  kTaskInterruptedForUserClarification: 3,
};

// Enum: ResponseStopCause
mojo.internal.bindings.glic.mojom.ResponseStopCause = {
  kUnknown: 0,
  kUser: 1,
  kOther: 2,
};

// Enum: CaptureRegionErrorReason
mojo.internal.bindings.glic.mojom.CaptureRegionErrorReason = {
  kUnknown: 0,
  kNoFocusableTab: 1,
};

// Enum: SettingsPageField
mojo.internal.bindings.glic.mojom.SettingsPageField = {
  kNone: 0,
  kOsHotkey: 1,
  kOsEntrypointToggle: 2,
};

// Enum: HostCapability
mojo.internal.bindings.glic.mojom.HostCapability = {
  kScrollToPdf: 0,
  kResetSizeAndLocationOnOpen: 1,
  kGetModelQualityClientId: 2,
  kMultiInstance: 3,
  kTrustFirstOnboardingArm1: 4,
  kTrustFirstOnboardingArm2: 5,
  kShareAdditionalImageContext: 6,
};

// Enum: CurrentView
mojo.internal.bindings.glic.mojom.CurrentView = {
  kConversation: 0,
  kActuation: 1,
};

// Union: GetContextResult
mojo.internal.Union(
    mojo.internal.bindings.glic.mojom.GetContextResultSpec, 'glic.mojom.GetContextResult', {
      'arg_error_reason': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_tab_context': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.glic.mojom.TabContextSpec.$,
        'nullable': false,
      },
    });

// Union: CaptureScreenshotResult
mojo.internal.Union(
    mojo.internal.bindings.glic.mojom.CaptureScreenshotResultSpec, 'glic.mojom.CaptureScreenshotResult', {
      'arg_error_reason': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.glic.mojom.CaptureScreenshotErrorReasonSpec.$,
        'nullable': false,
      },
      'arg_screenshot': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ScreenshotSpec.$,
        'nullable': false,
      },
    });

// Union: ScrollToSelector
mojo.internal.Union(
    mojo.internal.bindings.glic.mojom.ScrollToSelectorSpec, 'glic.mojom.ScrollToSelector', {
      'arg_exact_text_selector': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ScrollToTextSelectorSpec.$,
        'nullable': false,
      },
      'arg_text_fragment_selector': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ScrollToTextFragmentSelectorSpec.$,
        'nullable': false,
      },
      'arg_node_selector': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ScrollToNodeSelectorSpec.$,
        'nullable': false,
      },
    });

// Union: AdditionalContextPart
mojo.internal.Union(
    mojo.internal.bindings.glic.mojom.AdditionalContextPartSpec, 'glic.mojom.AdditionalContextPart', {
      'arg_data': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ContextDataSpec.$,
        'nullable': false,
      },
      'arg_screenshot': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ScreenshotSpec.$,
        'nullable': false,
      },
      'arg_web_page_data': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.glic.mojom.WebPageDataSpec.$,
        'nullable': false,
      },
      'arg_annotated_page_data': {
        'ordinal': 3,
        'type': mojo.internal.bindings.mojo.internal.bindings.glic.mojom.AnnotatedPageDataSpec.$,
        'nullable': false,
      },
      'arg_pdf_document_data': {
        'ordinal': 4,
        'type': mojo.internal.bindings.mojo.internal.bindings.glic.mojom.PdfDocumentDataSpec.$,
        'nullable': false,
      },
      'arg_tab_context': {
        'ordinal': 5,
        'type': mojo.internal.bindings.mojo.internal.bindings.glic.mojom.TabContextSpec.$,
        'nullable': false,
      },
      'arg_region': {
        'ordinal': 6,
        'type': mojo.internal.bindings.glic.mojom.CapturedRegionSpec.$,
        'nullable': false,
      },
    });

// Union: FocusedTabData
mojo.internal.Union(
    mojo.internal.bindings.glic.mojom.FocusedTabDataSpec, 'glic.mojom.FocusedTabData', {
      'arg_focused_tab': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.glic.mojom.TabDataSpec.$,
        'nullable': false,
      },
      'arg_no_focused_tab_data': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.glic.mojom.NoFocusedTabDataSpec.$,
        'nullable': false,
      },
    });

// Union: CapturedRegion
mojo.internal.Union(
    mojo.internal.bindings.glic.mojom.CapturedRegionSpec, 'glic.mojom.CapturedRegion', {
      'arg_rect': {
        'ordinal': 0,
        'type': mojo.internal.bindings.gfx.mojom.RectSpec.$,
        'nullable': false,
      },
    });

// Union: ViewChangeRequestDetails
mojo.internal.Union(
    mojo.internal.bindings.glic.mojom.ViewChangeRequestDetailsSpec, 'glic.mojom.ViewChangeRequestDetails', {
      'arg_actuation': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ViewChangeRequestActuationSpec.$,
        'nullable': false,
      },
      'arg_conversation': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ViewChangeRequestConversationSpec.$,
        'nullable': false,
      },
    });

// Struct: ProfileEnablement
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ProfileEnablementSpec, 'glic.mojom.ProfileEnablement', [
      mojo.internal.StructField('arg_feature_disabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_not_regular_profile', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_not_rolled_out', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_primary_account_not_capable', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disallowed_by_chrome_policy', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disallowed_by_remote_admin', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disallowed_by_remote_other', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_not_consented', 0, 7, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GetContextResultWithActionResultCode
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.GetContextResultWithActionResultCodeSpec, 'glic.mojom.GetContextResultWithActionResultCode', [
      mojo.internal.StructField('arg_get_context_result', 0, 0, mojo.internal.bindings.glic.mojom.GetContextResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_action_result_$value', 8, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_action_result_$flag', originalFieldName: 'arg_action_result' }),
      mojo.internal.StructField('arg_action_result_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_action_result_$value', originalFieldName: 'arg_action_result' }),
    ],
    [[0, 24]]);

// Struct: UserProfileInfo
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.UserProfileInfoSpec, 'glic.mojom.UserProfileInfo', [
      mojo.internal.StructField('arg_avatar_icon', 0, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_local_profile_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_email', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_given_name', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_managed', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: WebClientInitialState
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientInitialStateSpec, 'glic.mojom.WebClientInitialState', [
      mojo.internal.StructField('arg_panel_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.PanelStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_focused_tab_data', 8, 0, mojo.internal.bindings.glic.mojom.FocusedTabDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hotkey', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_chrome_version', 24, 0, mojo.internal.bindings.mojo_base.mojom.VersionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_platform', 32, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.PlatformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_host_capabilities', 40, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.glic.mojom.HostCapabilitySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_skill_previews', 48, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.glic.mojom.SkillPreviewSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_microphone_permission_enabled', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_location_permission_enabled', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_tab_context_permission_enabled', 56, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_os_location_permission_enabled', 56, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_can_attach', 56, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_panel_is_active', 56, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_browser_is_open', 56, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_instance_is_active', 56, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_always_detached_mode', 57, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_zero_state_suggestions', 57, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_act_in_focused_tab', 57, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_scroll_to', 57, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_default_tab_context_setting_feature', 57, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_default_tab_context_setting_enabled', 57, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_closed_captioning_feature', 57, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_closed_captioning_setting_enabled', 57, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_maybe_refresh_user_status', 58, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_multi_tab', 58, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_get_context_actor', 58, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_get_page_metadata', 58, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_api_activation_gating', 58, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_capture_region', 58, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_web_actuation_setting_feature', 58, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_actuation_on_web_setting_enabled', 58, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_can_act_on_web', 59, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_activate_tab', 59, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_get_tab_by_id', 59, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_open_password_manager_settings_page', 59, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_load_and_extract_content', 59, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_trust_first_onboarding', 59, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_onboarding_completed', 59, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_skills', 59, 7, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: GetTabContextOptions
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.GetTabContextOptionsSpec, 'glic.mojom.GetTabContextOptions', [
      mojo.internal.StructField('arg_inner_text_bytes_limit', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_meta_tags', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pdf_size_limit', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_annotated_page_content_mode', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_include_inner_text', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_include_viewport_screenshot', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_include_annotated_page_content', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_include_pdf', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GetPinCandidatesOptions
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.GetPinCandidatesOptionsSpec, 'glic.mojom.GetPinCandidatesOptions', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_max_candidates', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ScrollToParams
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ScrollToParamsSpec, 'glic.mojom.ScrollToParams', [
      mojo.internal.StructField('arg_selector', 0, 0, mojo.internal.bindings.glic.mojom.ScrollToSelectorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_document_id', 8, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_highlight', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ScrollToTextSelector
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ScrollToTextSelectorSpec, 'glic.mojom.ScrollToTextSelector', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_search_range_start_node_id_$value', 8, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_search_range_start_node_id_$flag', originalFieldName: 'arg_search_range_start_node_id' }),
      mojo.internal.StructField('arg_search_range_start_node_id_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_search_range_start_node_id_$value', originalFieldName: 'arg_search_range_start_node_id' }),
    ],
    [[0, 24]]);

// Struct: ScrollToTextFragmentSelector
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ScrollToTextFragmentSelectorSpec, 'glic.mojom.ScrollToTextFragmentSelector', [
      mojo.internal.StructField('arg_text_start', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_end', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_search_range_start_node_id_$value', 16, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_search_range_start_node_id_$flag', originalFieldName: 'arg_search_range_start_node_id' }),
      mojo.internal.StructField('arg_search_range_start_node_id_$flag', 20, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_search_range_start_node_id_$value', originalFieldName: 'arg_search_range_start_node_id' }),
    ],
    [[0, 32]]);

// Struct: ScrollToNodeSelector
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ScrollToNodeSelectorSpec, 'glic.mojom.ScrollToNodeSelector', [
      mojo.internal.StructField('arg_node_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SuggestionContent
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SuggestionContentSpec, 'glic.mojom.SuggestionContent', [
      mojo.internal.StructField('arg_suggestion', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SkillPreview
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SkillPreviewSpec, 'glic.mojom.SkillPreview', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_source', 24, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.SkillSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Skill
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SkillSpec, 'glic.mojom.Skill', [
      mojo.internal.StructField('arg_preview', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.SkillPreviewSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_prompt', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CreateSkillRequest
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.CreateSkillRequestSpec, 'glic.mojom.CreateSkillRequest', [
      mojo.internal.StructField('arg_prompt', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UpdateSkillRequest
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.UpdateSkillRequestSpec, 'glic.mojom.UpdateSkillRequest', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ZeroStateSuggestions
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsSpec, 'glic.mojom.ZeroStateSuggestions', [
      mojo.internal.StructField('arg_suggestions', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.glic.mojom.SuggestionContentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ZeroStateSuggestionsV2
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsV2Spec, 'glic.mojom.ZeroStateSuggestionsV2', [
      mojo.internal.StructField('arg_suggestions', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.glic.mojom.SuggestionContentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_is_pending', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ZeroStateSuggestionsOptions
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsOptionsSpec, 'glic.mojom.ZeroStateSuggestionsOptions', [
      mojo.internal.StructField('arg_supported_tools', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_is_first_run', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PinCandidate
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PinCandidateSpec, 'glic.mojom.PinCandidate', [
      mojo.internal.StructField('arg_tab_data', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.TabDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PinTabsOptions
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PinTabsOptionsSpec, 'glic.mojom.PinTabsOptions', [
      mojo.internal.StructField('arg_pin_trigger', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.PinTriggerSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UnpinTabsOptions
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.UnpinTabsOptionsSpec, 'glic.mojom.UnpinTabsOptions', [
      mojo.internal.StructField('arg_unpin_trigger', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.UnpinTriggerSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ConversationInfo
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ConversationInfoSpec, 'glic.mojom.ConversationInfo', [
      mojo.internal.StructField('arg_conversation_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_conversation_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_client_data', 16, 0, mojo.internal.bindings.mojo_base.mojom.ByteStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PanelOpeningData
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PanelOpeningDataSpec, 'glic.mojom.PanelOpeningData', [
      mojo.internal.StructField('arg_panel_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.PanelStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_invocation_source', 8, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.InvocationSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_prompt_suggestion', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_skill_to_invoke', 24, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.SkillSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_recently_active_conversations', 32, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ConversationInfoSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_conversation_info', 40, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ConversationInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: PanelState
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PanelStateSpec, 'glic.mojom.PanelState', [
      mojo.internal.StructField('arg_kind', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.PanelStateKindSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_window_id_$value', 8, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_window_id_$flag', originalFieldName: 'arg_window_id' }),
      mojo.internal.StructField('arg_window_id_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_window_id_$value', originalFieldName: 'arg_window_id' }),
    ],
    [[0, 24]]);

// Struct: OnResponseStoppedDetails
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.OnResponseStoppedDetailsSpec, 'glic.mojom.OnResponseStoppedDetails', [
      mojo.internal.StructField('arg_cause', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ResponseStopCauseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: OpenPanelInfo
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.OpenPanelInfoSpec, 'glic.mojom.OpenPanelInfo', [
      mojo.internal.StructField('arg_web_client_mode', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.WebClientModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_panelSize', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_resizeDuration', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_can_user_resize', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ContextData
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ContextDataSpec, 'glic.mojom.ContextData', [
      mojo.internal.StructField('arg_mime_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 8, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AdditionalContext
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.AdditionalContextSpec, 'glic.mojom.AdditionalContext', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_frameUrl', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_parts', 24, 0, mojo.internal.Array(mojo.internal.bindings.glic.mojom.AdditionalContextPartSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id_$value', 32, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_tab_id_$flag', originalFieldName: 'arg_tab_id' }),
      mojo.internal.StructField('arg_tab_id_$flag', 36, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_tab_id_$value', originalFieldName: 'arg_tab_id' }),
    ],
    [[0, 48]]);

// Struct: TabContext
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.TabContextSpec, 'glic.mojom.TabContext', [
      mojo.internal.StructField('arg_tab_data', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.TabDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_web_page_data', 8, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.WebPageDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_viewport_screenshot', 16, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ScreenshotSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_pdf_document_data', 24, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.PdfDocumentDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_annotated_page_data', 32, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.AnnotatedPageDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: WebPageData
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebPageDataSpec, 'glic.mojom.WebPageData', [
      mojo.internal.StructField('arg_main_document', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.DocumentDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DocumentData
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.DocumentDataSpec, 'glic.mojom.DocumentData', [
      mojo.internal.StructField('arg_origin', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_inner_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_inner_text_truncated', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PdfDocumentData
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PdfDocumentDataSpec, 'glic.mojom.PdfDocumentData', [
      mojo.internal.StructField('arg_origin', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_pdf_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_size_limit_exceeded', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TabData
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.TabDataSpec, 'glic.mojom.TabData', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_favicon', 16, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_favicon_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_document_mime_type', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_window_id', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_observable_$flag', 48, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_observable_$value', originalFieldName: 'arg_is_observable' }),
      mojo.internal.StructField('arg_is_observable_$value', 48, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_observable_$flag', originalFieldName: 'arg_is_observable' }),
      mojo.internal.StructField('arg_is_media_active_$flag', 48, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_media_active_$value', originalFieldName: 'arg_is_media_active' }),
      mojo.internal.StructField('arg_is_media_active_$value', 48, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_media_active_$flag', originalFieldName: 'arg_is_media_active' }),
      mojo.internal.StructField('arg_is_tab_content_captured_$flag', 48, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_tab_content_captured_$value', originalFieldName: 'arg_is_tab_content_captured' }),
      mojo.internal.StructField('arg_is_tab_content_captured_$value', 48, 5, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_tab_content_captured_$flag', originalFieldName: 'arg_is_tab_content_captured' }),
      mojo.internal.StructField('arg_is_active_in_window_$flag', 48, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_active_in_window_$value', originalFieldName: 'arg_is_active_in_window' }),
      mojo.internal.StructField('arg_is_active_in_window_$value', 48, 7, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_active_in_window_$flag', originalFieldName: 'arg_is_active_in_window' }),
      mojo.internal.StructField('arg_is_window_active_$flag', 49, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_window_active_$value', originalFieldName: 'arg_is_window_active' }),
      mojo.internal.StructField('arg_is_window_active_$value', 49, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_window_active_$flag', originalFieldName: 'arg_is_window_active' }),
    ],
    [[0, 64]]);

// Struct: NoFocusedTabData
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.NoFocusedTabDataSpec, 'glic.mojom.NoFocusedTabData', [
      mojo.internal.StructField('arg_active_tab_data', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.TabDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_no_focus_reason', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnnotatedPageData
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.AnnotatedPageDataSpec, 'glic.mojom.AnnotatedPageData', [
      mojo.internal.StructField('arg_annotated_page_content', 0, 0, mojo.internal.bindings.mojo_base.mojom.ProtoWrapperSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_metadata', 8, 0, mojo.internal.bindings.blink.mojom.PageMetadataSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ImageOriginAnnotations
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ImageOriginAnnotationsSpec, 'glic.mojom.ImageOriginAnnotations', [
    ],
    [[0, 8]]);

// Struct: Journal
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.JournalSpec, 'glic.mojom.Journal', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CaptureRegionResult
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.CaptureRegionResultSpec, 'glic.mojom.CaptureRegionResult', [
      mojo.internal.StructField('arg_region', 0, 0, mojo.internal.bindings.glic.mojom.CapturedRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Screenshot
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ScreenshotSpec, 'glic.mojom.Screenshot', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_origin_annotations', 16, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ImageOriginAnnotationsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_width_pixels', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height_pixels', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: OpenSettingsOptions
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.OpenSettingsOptionsSpec, 'glic.mojom.OpenSettingsOptions', [
      mojo.internal.StructField('arg_highlightField', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.SettingsPageFieldSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ViewChangeRequestActuation
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ViewChangeRequestActuationSpec, 'glic.mojom.ViewChangeRequestActuation', [
    ],
    [[0, 8]]);

// Struct: ViewChangeRequestConversation
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ViewChangeRequestConversationSpec, 'glic.mojom.ViewChangeRequestConversation', [
    ],
    [[0, 8]]);

// Struct: ViewChangeRequest
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ViewChangeRequestSpec, 'glic.mojom.ViewChangeRequest', [
      mojo.internal.StructField('arg_details', 0, 0, mojo.internal.bindings.glic.mojom.ViewChangeRequestDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ViewChangedNotification
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ViewChangedNotificationSpec, 'glic.mojom.ViewChangedNotification', [
      mojo.internal.StructField('arg_current_view', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.CurrentViewSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: PreloadPage
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec, 'glic.mojom.PreloadPage_SetProfileReadyState_Params', [
      mojo.internal.StructField('arg_ready_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ProfileReadyStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.glic.mojom.PreloadPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.glic.mojom.PreloadPageRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.PreloadPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.PreloadPagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.PreloadPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setProfileReadyState(arg_ready_state) {
    return this.$.setProfileReadyState(arg_ready_state);
  }
};

mojo.internal.bindings.glic.mojom.PreloadPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PreloadPage', [
      { explicit: null },
    ]);
  }

  setProfileReadyState(arg_ready_state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec,
      null,
      [arg_ready_state],
      false);
  }

};

mojo.internal.bindings.glic.mojom.PreloadPage.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.PreloadPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.PreloadPage',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.PreloadPageReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setProfileReadyState');
          const result = this.impl.setProfileReadyState(params.arg_ready_state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.PreloadPageReceiver = mojo.internal.bindings.glic.mojom.PreloadPageReceiver;

mojo.internal.bindings.glic.mojom.PreloadPagePtr = mojo.internal.bindings.glic.mojom.PreloadPageRemote;
mojo.internal.bindings.glic.mojom.PreloadPageRequest = mojo.internal.bindings.glic.mojom.PreloadPagePendingReceiver;


// Interface: Page
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.Page_IntentToShow_ParamsSpec, 'glic.mojom.Page_IntentToShow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.Page_SetProfileReadyState_ParamsSpec, 'glic.mojom.Page_SetProfileReadyState_Params', [
      mojo.internal.StructField('arg_ready_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ProfileReadyStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.Page_UpdatePageState_ParamsSpec, 'glic.mojom.Page_UpdatePageState_Params', [
      mojo.internal.StructField('arg_panelStateKind', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.PanelStateKindSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.glic.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.glic.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.PageRemoteCallHandler(this.proxy);
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
  setProfileReadyState(arg_ready_state) {
    return this.$.setProfileReadyState(arg_ready_state);
  }
  updatePageState(arg_panelStateKind) {
    return this.$.updatePageState(arg_panelStateKind);
  }
};

mojo.internal.bindings.glic.mojom.PageRemoteCallHandler = class {
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
      mojo.internal.bindings.glic.mojom.Page_IntentToShow_ParamsSpec,
      null,
      [],
      false);
  }

  setProfileReadyState(arg_ready_state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.glic.mojom.Page_SetProfileReadyState_ParamsSpec,
      null,
      [arg_ready_state],
      false);
  }

  updatePageState(arg_panelStateKind) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.glic.mojom.Page_UpdatePageState_ParamsSpec,
      null,
      [arg_panelStateKind],
      false);
  }

};

mojo.internal.bindings.glic.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.PageReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.Page_IntentToShow_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.Page_SetProfileReadyState_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.Page_UpdatePageState_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.Page_IntentToShow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.intentToShow');
          const result = this.impl.intentToShow();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.Page_SetProfileReadyState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setProfileReadyState');
          const result = this.impl.setProfileReadyState(params.arg_ready_state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.Page_UpdatePageState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updatePageState');
          const result = this.impl.updatePageState(params.arg_panelStateKind);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.PageReceiver = mojo.internal.bindings.glic.mojom.PageReceiver;

mojo.internal.bindings.glic.mojom.PagePtr = mojo.internal.bindings.glic.mojom.PageRemote;
mojo.internal.bindings.glic.mojom.PageRequest = mojo.internal.bindings.glic.mojom.PagePendingReceiver;


// Interface: GlicPreloadHandler
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec, 'glic.mojom.GlicPreloadHandler_PrepareForClient_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec, 'glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.PrepareForClientResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.GlicPreloadHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.GlicPreloadHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.GlicPreloadHandlerRemoteCallHandler(this.proxy);
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

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GlicPreloadHandler', [
      { explicit: null },
    ]);
  }

  prepareForClient() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec,
      mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.glic.mojom.GlicPreloadHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.GlicPreloadHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.GlicPreloadHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prepareForClient');
          const result = this.impl.prepareForClient();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PrepareForClient FAILED:', e));
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

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerReceiver = mojo.internal.bindings.glic.mojom.GlicPreloadHandlerReceiver;

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerPtr = mojo.internal.bindings.glic.mojom.GlicPreloadHandlerRemote;
mojo.internal.bindings.glic.mojom.GlicPreloadHandlerRequest = mojo.internal.bindings.glic.mojom.GlicPreloadHandlerPendingReceiver;


// Interface: GlicPreloadHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec, 'glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.glic.mojom.GlicPreloadHandlerSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_page', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.glic.mojom.PreloadPageSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.GlicPreloadHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPreloadHandler(arg_receiver, arg_page) {
    return this.$.createPreloadHandler(arg_receiver, arg_page);
  }
};

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GlicPreloadHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPreloadHandler(arg_receiver, arg_page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec,
      null,
      [arg_receiver, arg_page],
      false);
  }

};

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.GlicPreloadHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPreloadHandler');
          const result = this.impl.createPreloadHandler(params.arg_receiver, params.arg_page);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryReceiver = mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryReceiver;

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryPtr = mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryRemote;
mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryRequest = mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryPendingReceiver;


// Interface: PageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'glic.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.glic.mojom.PageHandlerSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_page', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.glic.mojom.PageSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.glic.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.glic.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(arg_receiver, arg_page) {
    return this.$.createPageHandler(arg_receiver, arg_page);
  }
};

mojo.internal.bindings.glic.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(arg_receiver, arg_page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [arg_receiver, arg_page],
      false);
  }

};

mojo.internal.bindings.glic.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.arg_receiver, params.arg_page);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.PageHandlerFactoryReceiver = mojo.internal.bindings.glic.mojom.PageHandlerFactoryReceiver;

mojo.internal.bindings.glic.mojom.PageHandlerFactoryPtr = mojo.internal.bindings.glic.mojom.PageHandlerFactoryRemote;
mojo.internal.bindings.glic.mojom.PageHandlerFactoryRequest = mojo.internal.bindings.glic.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_CreateWebClient_ParamsSpec, 'glic.mojom.PageHandler_CreateWebClient_Params', [
      mojo.internal.StructField('arg_web_client_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.glic.mojom.WebClientHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ParamsSpec, 'glic.mojom.PageHandler_PrepareForClient_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec, 'glic.mojom.PageHandler_PrepareForClient_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.PrepareForClientResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_WebviewCommitted_ParamsSpec, 'glic.mojom.PageHandler_WebviewCommitted_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ParamsSpec, 'glic.mojom.PageHandler_ClosePanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ResponseParamsSpec, 'glic.mojom.PageHandler_ClosePanel_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec, 'glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec, 'glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec, 'glic.mojom.PageHandler_SignInAndClosePanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ParamsSpec, 'glic.mojom.PageHandler_ResizeWidget_Params', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_duration', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ResponseParamsSpec, 'glic.mojom.PageHandler_ResizeWidget_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_EnableDragResize_ParamsSpec, 'glic.mojom.PageHandler_EnableDragResize_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec, 'glic.mojom.PageHandler_WebUiStateChanged_Params', [
      mojo.internal.StructField('arg_new_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.WebUiStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_GetProfileEnablement_ParamsSpec, 'glic.mojom.PageHandler_GetProfileEnablement_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_GetProfileEnablement_ResponseParamsSpec, 'glic.mojom.PageHandler_GetProfileEnablement_ResponseParams', [
      mojo.internal.StructField('arg_enablement', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ProfileEnablementSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.glic.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.glic.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createWebClient(arg_web_client_receiver) {
    return this.$.createWebClient(arg_web_client_receiver);
  }
  prepareForClient() {
    return this.$.prepareForClient();
  }
  webviewCommitted(arg_url) {
    return this.$.webviewCommitted(arg_url);
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
  resizeWidget(arg_size, arg_duration) {
    return this.$.resizeWidget(arg_size, arg_duration);
  }
  enableDragResize(arg_enabled) {
    return this.$.enableDragResize(arg_enabled);
  }
  webUiStateChanged(arg_new_state) {
    return this.$.webUiStateChanged(arg_new_state);
  }
  getProfileEnablement() {
    return this.$.getProfileEnablement();
  }
};

mojo.internal.bindings.glic.mojom.PageHandlerRemoteCallHandler = class {
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

  createWebClient(arg_web_client_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_CreateWebClient_ParamsSpec,
      null,
      [arg_web_client_receiver],
      false);
  }

  prepareForClient() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ParamsSpec,
      mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec,
      [],
      false);
  }

  webviewCommitted(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_WebviewCommitted_ParamsSpec,
      null,
      [arg_url],
      false);
  }

  closePanel() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ParamsSpec,
      mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ResponseParamsSpec,
      [],
      false);
  }

  openProfilePickerAndClosePanel() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec,
      null,
      [],
      false);
  }

  openDisabledByAdminLinkAndClosePanel() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec,
      null,
      [],
      false);
  }

  signInAndClosePanel() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec,
      null,
      [],
      false);
  }

  resizeWidget(arg_size, arg_duration) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ParamsSpec,
      mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ResponseParamsSpec,
      [arg_size, arg_duration],
      false);
  }

  enableDragResize(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_EnableDragResize_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  webUiStateChanged(arg_new_state) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec,
      null,
      [arg_new_state],
      false);
  }

  getProfileEnablement() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_GetProfileEnablement_ParamsSpec,
      mojo.internal.bindings.glic.mojom.PageHandler_GetProfileEnablement_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.glic.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.PageHandlerReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_CreateWebClient_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_WebviewCommitted_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_EnableDragResize_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_GetProfileEnablement_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_CreateWebClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createWebClient');
          const result = this.impl.createWebClient(params.arg_web_client_receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prepareForClient');
          const result = this.impl.prepareForClient();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PrepareForClient FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_WebviewCommitted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.webviewCommitted');
          const result = this.impl.webviewCommitted(params.arg_url);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closePanel');
          const result = this.impl.closePanel();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClosePanel FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openProfilePickerAndClosePanel');
          const result = this.impl.openProfilePickerAndClosePanel();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openDisabledByAdminLinkAndClosePanel');
          const result = this.impl.openDisabledByAdminLinkAndClosePanel();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.signInAndClosePanel');
          const result = this.impl.signInAndClosePanel();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resizeWidget');
          const result = this.impl.resizeWidget(params.arg_size, params.arg_duration);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ResizeWidget FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_EnableDragResize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableDragResize');
          const result = this.impl.enableDragResize(params.arg_enabled);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.webUiStateChanged');
          const result = this.impl.webUiStateChanged(params.arg_new_state);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_GetProfileEnablement_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProfileEnablement');
          const result = this.impl.getProfileEnablement();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.PageHandler_GetProfileEnablement_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetProfileEnablement FAILED:', e));
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

mojo.internal.bindings.glic.mojom.PageHandlerReceiver = mojo.internal.bindings.glic.mojom.PageHandlerReceiver;

mojo.internal.bindings.glic.mojom.PageHandlerPtr = mojo.internal.bindings.glic.mojom.PageHandlerRemote;
mojo.internal.bindings.glic.mojom.PageHandlerRequest = mojo.internal.bindings.glic.mojom.PageHandlerPendingReceiver;


// Interface: PinCandidatesObserver
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec, 'glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_Params', [
      mojo.internal.StructField('arg_candidates', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.glic.mojom.PinCandidateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.glic.mojom.PinCandidatesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.glic.mojom.PinCandidatesObserverRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.PinCandidatesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.PinCandidatesObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.PinCandidatesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPinCandidatesChanged(arg_candidates) {
    return this.$.onPinCandidatesChanged(arg_candidates);
  }
};

mojo.internal.bindings.glic.mojom.PinCandidatesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PinCandidatesObserver', [
      { explicit: null },
    ]);
  }

  onPinCandidatesChanged(arg_candidates) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec,
      null,
      [arg_candidates],
      false);
  }

};

mojo.internal.bindings.glic.mojom.PinCandidatesObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.PinCandidatesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.PinCandidatesObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.PinCandidatesObserverReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPinCandidatesChanged');
          const result = this.impl.onPinCandidatesChanged(params.arg_candidates);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.PinCandidatesObserverReceiver = mojo.internal.bindings.glic.mojom.PinCandidatesObserverReceiver;

mojo.internal.bindings.glic.mojom.PinCandidatesObserverPtr = mojo.internal.bindings.glic.mojom.PinCandidatesObserverRemote;
mojo.internal.bindings.glic.mojom.PinCandidatesObserverRequest = mojo.internal.bindings.glic.mojom.PinCandidatesObserverPendingReceiver;


// Interface: WebClientHandler
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec, 'glic.mojom.WebClientHandler_WebClientCreated_Params', [
      mojo.internal.StructField('arg_web_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.glic.mojom.WebClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec, 'glic.mojom.WebClientHandler_WebClientCreated_ResponseParams', [
      mojo.internal.StructField('arg_initial_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.WebClientInitialStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec, 'glic.mojom.WebClientHandler_WebClientInitialized_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec, 'glic.mojom.WebClientHandler_WebClientInitializeFailed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ParamsSpec, 'glic.mojom.WebClientHandler_CreateTab_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_window_id_$value', 8, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_window_id_$flag', originalFieldName: 'arg_window_id' }),
      mojo.internal.StructField('arg_open_in_background', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_window_id_$flag', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_window_id_$value', originalFieldName: 'arg_window_id' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec, 'glic.mojom.WebClientHandler_CreateTab_ResponseParams', [
      mojo.internal.StructField('arg_tab_data', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.TabDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec, 'glic.mojom.WebClientHandler_OpenLinkInPopup_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_popup_width', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_popup_height', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec, 'glic.mojom.WebClientHandler_OpenGlicSettingsPage_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.OpenSettingsOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec, 'glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanel_ParamsSpec, 'glic.mojom.WebClientHandler_ClosePanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec, 'glic.mojom.WebClientHandler_ClosePanelAndShutdown_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_AttachPanel_ParamsSpec, 'glic.mojom.WebClientHandler_AttachPanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_DetachPanel_ParamsSpec, 'glic.mojom.WebClientHandler_DetachPanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnModeChange_ParamsSpec, 'glic.mojom.WebClientHandler_OnModeChange_Params', [
      mojo.internal.StructField('arg_new_mode', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.WebClientModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec, 'glic.mojom.WebClientHandler_ShowProfilePicker_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec, 'glic.mojom.WebClientHandler_GetModelQualityClientId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParams', [
      mojo.internal.StructField('arg_model_quality_client_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec, 'glic.mojom.WebClientHandler_GetContextFromFocusedTab_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.GetTabContextOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.glic.mojom.GetContextResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec, 'glic.mojom.WebClientHandler_GetContextFromTab_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.GetTabContextOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetContextFromTab_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.glic.mojom.GetContextResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextForActorFromTab_ParamsSpec, 'glic.mojom.WebClientHandler_GetContextForActorFromTab_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.GetTabContextOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextForActorFromTab_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetContextForActorFromTab_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.glic.mojom.GetContextResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec, 'glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_Params', [
      mojo.internal.StructField('arg_requested_max', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParams', [
      mojo.internal.StructField('arg_effective_max', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ParamsSpec, 'glic.mojom.WebClientHandler_PinTabs_Params', [
      mojo.internal.StructField('arg_tab_ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.PinTabsOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec, 'glic.mojom.WebClientHandler_PinTabs_ResponseParams', [
      mojo.internal.StructField('arg_pinned_all', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec, 'glic.mojom.WebClientHandler_UnpinTabs_Params', [
      mojo.internal.StructField('arg_tab_ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.UnpinTabsOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec, 'glic.mojom.WebClientHandler_UnpinTabs_ResponseParams', [
      mojo.internal.StructField('arg_unpinned_all', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec, 'glic.mojom.WebClientHandler_UnpinAllTabs_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.UnpinTabsOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CreateSkill_ParamsSpec, 'glic.mojom.WebClientHandler_CreateSkill_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.CreateSkillRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CreateSkill_ResponseParamsSpec, 'glic.mojom.WebClientHandler_CreateSkill_ResponseParams', [
      mojo.internal.StructField('arg_modal_opened', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_UpdateSkill_ParamsSpec, 'glic.mojom.WebClientHandler_UpdateSkill_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.UpdateSkillRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_UpdateSkill_ResponseParamsSpec, 'glic.mojom.WebClientHandler_UpdateSkill_ResponseParams', [
      mojo.internal.StructField('arg_modal_opened', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetSkill_ParamsSpec, 'glic.mojom.WebClientHandler_GetSkill_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetSkill_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetSkill_ResponseParams', [
      mojo.internal.StructField('arg_skill', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.SkillSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec, 'glic.mojom.WebClientHandler_SubscribeToPinCandidates_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.GetPinCandidatesOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.glic.mojom.PinCandidatesObserverSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTask_ParamsSpec, 'glic.mojom.WebClientHandler_CreateTask_Params', [
      mojo.internal.StructField('arg_task_options', 0, 0, mojo.internal.bindings.actor.webui.mojom.TaskOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_PerformActions_ParamsSpec, 'glic.mojom.WebClientHandler_PerformActions_Params', [
      mojo.internal.StructField('arg_actions_proto', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CancelActions_ParamsSpec, 'glic.mojom.WebClientHandler_CancelActions_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CancelActions_ResponseParamsSpec, 'glic.mojom.WebClientHandler_CancelActions_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.CancelActionsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_StopActorTask_ParamsSpec, 'glic.mojom.WebClientHandler_StopActorTask_Params', [
      mojo.internal.StructField('arg_stop_reason', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ActorTaskStopReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_task_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_PauseActorTask_ParamsSpec, 'glic.mojom.WebClientHandler_PauseActorTask_Params', [
      mojo.internal.StructField('arg_pause_reason', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ActorTaskPauseReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_task_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id_$value', 12, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_tab_id_$flag', originalFieldName: 'arg_tab_id' }),
      mojo.internal.StructField('arg_tab_id_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_tab_id_$value', originalFieldName: 'arg_tab_id' }),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ResumeActorTask_ParamsSpec, 'glic.mojom.WebClientHandler_ResumeActorTask_Params', [
      mojo.internal.StructField('arg_context_options', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.GetTabContextOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_task_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ResumeActorTask_ResponseParamsSpec, 'glic.mojom.WebClientHandler_ResumeActorTask_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.GetContextResultWithActionResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_InterruptActorTask_ParamsSpec, 'glic.mojom.WebClientHandler_InterruptActorTask_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_UninterruptActorTask_ParamsSpec, 'glic.mojom.WebClientHandler_UninterruptActorTask_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CreateActorTab_ParamsSpec, 'glic.mojom.WebClientHandler_CreateActorTab_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_initiator_tab_id_$value', 4, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_initiator_tab_id_$flag', originalFieldName: 'arg_initiator_tab_id' }),
      mojo.internal.StructField('arg_initiator_window_id_$value', 8, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_initiator_window_id_$flag', originalFieldName: 'arg_initiator_window_id' }),
      mojo.internal.StructField('arg_open_in_background', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_initiator_tab_id_$flag', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_initiator_tab_id_$value', originalFieldName: 'arg_initiator_tab_id' }),
      mojo.internal.StructField('arg_initiator_window_id_$flag', 12, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_initiator_window_id_$value', originalFieldName: 'arg_initiator_window_id' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CreateActorTab_ResponseParamsSpec, 'glic.mojom.WebClientHandler_CreateActorTab_ResponseParams', [
      mojo.internal.StructField('arg_tab_data', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.TabDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTab_ParamsSpec, 'glic.mojom.WebClientHandler_ActivateTab_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec, 'glic.mojom.WebClientHandler_ResizeWidget_Params', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_duration', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ResponseParamsSpec, 'glic.mojom.WebClientHandler_ResizeWidget_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec, 'glic.mojom.WebClientHandler_CaptureScreenshot_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec, 'glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.glic.mojom.CaptureScreenshotResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec, 'glic.mojom.WebClientHandler_CaptureRegion_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.glic.mojom.CaptureRegionObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec, 'glic.mojom.WebClientHandler_SetAudioDucking_Params', [
      mojo.internal.StructField('arg_enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetAudioDucking_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetPanelDraggableAreas_ParamsSpec, 'glic.mojom.WebClientHandler_SetPanelDraggableAreas_Params', [
      mojo.internal.StructField('arg_draggable_areas', 0, 0, mojo.internal.Array(mojo.internal.bindings.gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetPanelDraggableAreas_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetPanelDraggableAreas_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec, 'glic.mojom.WebClientHandler_SetMinimumPanelSize_Params', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec, 'glic.mojom.WebClientHandler_SetMicrophonePermissionState_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetMicrophonePermissionState_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec, 'glic.mojom.WebClientHandler_SetLocationPermissionState_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetLocationPermissionState_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec, 'glic.mojom.WebClientHandler_SetTabContextPermissionState_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetTabContextPermissionState_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec, 'glic.mojom.WebClientHandler_SetClosedCaptioningSetting_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec, 'glic.mojom.WebClientHandler_SetActuationOnWebSetting_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetActuationOnWebSetting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec, 'glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec, 'glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParams', [
      mojo.internal.StructField('arg_is_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec, 'glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec, 'glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParams', [
      mojo.internal.StructField('arg_is_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec, 'glic.mojom.WebClientHandler_SetContextAccessIndicator_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec, 'glic.mojom.WebClientHandler_GetUserProfileInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParams', [
      mojo.internal.StructField('arg_profile_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.UserProfileInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ParamsSpec, 'glic.mojom.WebClientHandler_SyncCookies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SyncCookies_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_LogBeginAsyncEvent_ParamsSpec, 'glic.mojom.WebClientHandler_LogBeginAsyncEvent_Params', [
      mojo.internal.StructField('arg_event_async_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_event', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_details', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_task_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_LogEndAsyncEvent_ParamsSpec, 'glic.mojom.WebClientHandler_LogEndAsyncEvent_Params', [
      mojo.internal.StructField('arg_event_async_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_details', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_LogInstantEvent_ParamsSpec, 'glic.mojom.WebClientHandler_LogInstantEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_details', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_task_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_JournalClear_ParamsSpec, 'glic.mojom.WebClientHandler_JournalClear_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_JournalSnapshot_ParamsSpec, 'glic.mojom.WebClientHandler_JournalSnapshot_Params', [
      mojo.internal.StructField('arg_clear_journal', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_JournalSnapshot_ResponseParamsSpec, 'glic.mojom.WebClientHandler_JournalSnapshot_ResponseParams', [
      mojo.internal.StructField('arg_journal', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.JournalSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_JournalStart_ParamsSpec, 'glic.mojom.WebClientHandler_JournalStart_Params', [
      mojo.internal.StructField('arg_max_bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_capture_screenshots', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_JournalStop_ParamsSpec, 'glic.mojom.WebClientHandler_JournalStop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_JournalRecordFeedback_ParamsSpec, 'glic.mojom.WebClientHandler_JournalRecordFeedback_Params', [
      mojo.internal.StructField('arg_reason', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_positive', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec, 'glic.mojom.WebClientHandler_OnUserInputSubmitted_Params', [
      mojo.internal.StructField('arg_mode', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.WebClientModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec, 'glic.mojom.WebClientHandler_OnContextUploadStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec, 'glic.mojom.WebClientHandler_OnContextUploadCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnReaction_ParamsSpec, 'glic.mojom.WebClientHandler_OnReaction_Params', [
      mojo.internal.StructField('arg_reactionType', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.MetricUserInputReactionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec, 'glic.mojom.WebClientHandler_OnResponseStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec, 'glic.mojom.WebClientHandler_OnResponseStopped_Params', [
      mojo.internal.StructField('arg_details', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.OnResponseStoppedDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec, 'glic.mojom.WebClientHandler_OnSessionTerminated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec, 'glic.mojom.WebClientHandler_OnTurnCompleted_Params', [
      mojo.internal.StructField('arg_model', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.WebClientModelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_duration', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnModelChanged_ParamsSpec, 'glic.mojom.WebClientHandler_OnModelChanged_Params', [
      mojo.internal.StructField('arg_model', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.WebClientModelSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnRecordUseCounter_ParamsSpec, 'glic.mojom.WebClientHandler_OnRecordUseCounter_Params', [
      mojo.internal.StructField('arg_counter', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec, 'glic.mojom.WebClientHandler_OnResponseRated_Params', [
      mojo.internal.StructField('arg_positive', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec, 'glic.mojom.WebClientHandler_OnClosedCaptionsShown_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ScrollTo_ParamsSpec, 'glic.mojom.WebClientHandler_ScrollTo_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ScrollToParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ScrollTo_ResponseParamsSpec, 'glic.mojom.WebClientHandler_ScrollTo_ResponseParams', [
      mojo.internal.StructField('arg_error_reason', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ScrollToErrorReasonSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_DropScrollToHighlight_ParamsSpec, 'glic.mojom.WebClientHandler_DropScrollToHighlight_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec, 'glic.mojom.WebClientHandler_SetSyntheticExperimentState_Params', [
      mojo.internal.StructField('arg_trial_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_group_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec, 'glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.content_settings.mojom.ContentSettingsTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec, 'glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParams', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec, 'glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_live', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParams', [
      mojo.internal.StructField('arg_zero_state_suggestions', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsV2Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec, 'glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_Params', [
      mojo.internal.StructField('arg_is_first_run_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_first_run_$value', originalFieldName: 'arg_is_first_run' }),
      mojo.internal.StructField('arg_is_first_run_$value', 0, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_first_run_$flag', originalFieldName: 'arg_is_first_run' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParams', [
      mojo.internal.StructField('arg_suggestions', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec, 'glic.mojom.WebClientHandler_MaybeRefreshUserStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec, 'glic.mojom.WebClientHandler_IsDebuggerAttached_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec, 'glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParams', [
      mojo.internal.StructField('arg_is_attached_to_webview', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnViewChanged_ParamsSpec, 'glic.mojom.WebClientHandler_OnViewChanged_Params', [
      mojo.internal.StructField('arg_notification', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ViewChangedNotificationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec, 'glic.mojom.WebClientHandler_SubscribeToPageMetadata_Params', [
      mojo.internal.StructField('arg_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec, 'glic.mojom.WebClientHandler_SwitchConversation_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ConversationInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SwitchConversation_ResponseParams', [
      mojo.internal.StructField('arg_error_reason', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.SwitchConversationErrorReasonSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec, 'glic.mojom.WebClientHandler_RegisterConversation_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ConversationInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec, 'glic.mojom.WebClientHandler_RegisterConversation_ResponseParams', [
      mojo.internal.StructField('arg_error_reason', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.RegisterConversationErrorReasonSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec, 'glic.mojom.WebClientHandler_SetOnboardingCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec, 'glic.mojom.WebClientHandler_SubscribeToTabData_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.glic.mojom.TabDataHandlerSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.glic.mojom.WebClientHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.glic.mojom.WebClientHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.WebClientHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.WebClientHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.WebClientHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  webClientCreated(arg_web_client) {
    return this.$.webClientCreated(arg_web_client);
  }
  webClientInitialized() {
    return this.$.webClientInitialized();
  }
  webClientInitializeFailed() {
    return this.$.webClientInitializeFailed();
  }
  createTab(arg_url, arg_open_in_background, arg_window_id) {
    return this.$.createTab(arg_url, arg_open_in_background, arg_window_id);
  }
  openLinkInPopup(arg_url, arg_popup_width, arg_popup_height) {
    return this.$.openLinkInPopup(arg_url, arg_popup_width, arg_popup_height);
  }
  openGlicSettingsPage(arg_options) {
    return this.$.openGlicSettingsPage(arg_options);
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
  onModeChange(arg_new_mode) {
    return this.$.onModeChange(arg_new_mode);
  }
  showProfilePicker() {
    return this.$.showProfilePicker();
  }
  getModelQualityClientId() {
    return this.$.getModelQualityClientId();
  }
  getContextFromFocusedTab(arg_options) {
    return this.$.getContextFromFocusedTab(arg_options);
  }
  getContextFromTab(arg_tab_id, arg_options) {
    return this.$.getContextFromTab(arg_tab_id, arg_options);
  }
  getContextForActorFromTab(arg_tab_id, arg_options) {
    return this.$.getContextForActorFromTab(arg_tab_id, arg_options);
  }
  setMaximumNumberOfPinnedTabs(arg_requested_max) {
    return this.$.setMaximumNumberOfPinnedTabs(arg_requested_max);
  }
  pinTabs(arg_tab_ids, arg_options) {
    return this.$.pinTabs(arg_tab_ids, arg_options);
  }
  unpinTabs(arg_tab_ids, arg_options) {
    return this.$.unpinTabs(arg_tab_ids, arg_options);
  }
  unpinAllTabs(arg_options) {
    return this.$.unpinAllTabs(arg_options);
  }
  createSkill(arg_request) {
    return this.$.createSkill(arg_request);
  }
  updateSkill(arg_request) {
    return this.$.updateSkill(arg_request);
  }
  getSkill(arg_id) {
    return this.$.getSkill(arg_id);
  }
  subscribeToPinCandidates(arg_options, arg_observer) {
    return this.$.subscribeToPinCandidates(arg_options, arg_observer);
  }
  createTask(arg_task_options) {
    return this.$.createTask(arg_task_options);
  }
  performActions(arg_actions_proto) {
    return this.$.performActions(arg_actions_proto);
  }
  cancelActions(arg_task_id) {
    return this.$.cancelActions(arg_task_id);
  }
  stopActorTask(arg_task_id, arg_stop_reason) {
    return this.$.stopActorTask(arg_task_id, arg_stop_reason);
  }
  pauseActorTask(arg_task_id, arg_pause_reason, arg_tab_id) {
    return this.$.pauseActorTask(arg_task_id, arg_pause_reason, arg_tab_id);
  }
  resumeActorTask(arg_task_id, arg_context_options) {
    return this.$.resumeActorTask(arg_task_id, arg_context_options);
  }
  interruptActorTask(arg_task_id) {
    return this.$.interruptActorTask(arg_task_id);
  }
  uninterruptActorTask(arg_task_id) {
    return this.$.uninterruptActorTask(arg_task_id);
  }
  createActorTab(arg_task_id, arg_open_in_background, arg_initiator_tab_id, arg_initiator_window_id) {
    return this.$.createActorTab(arg_task_id, arg_open_in_background, arg_initiator_tab_id, arg_initiator_window_id);
  }
  activateTab(arg_task_id) {
    return this.$.activateTab(arg_task_id);
  }
  resizeWidget(arg_size, arg_duration) {
    return this.$.resizeWidget(arg_size, arg_duration);
  }
  captureScreenshot() {
    return this.$.captureScreenshot();
  }
  captureRegion(arg_observer) {
    return this.$.captureRegion(arg_observer);
  }
  setAudioDucking(arg_enable) {
    return this.$.setAudioDucking(arg_enable);
  }
  setPanelDraggableAreas(arg_draggable_areas) {
    return this.$.setPanelDraggableAreas(arg_draggable_areas);
  }
  setMinimumPanelSize(arg_size) {
    return this.$.setMinimumPanelSize(arg_size);
  }
  setMicrophonePermissionState(arg_enabled) {
    return this.$.setMicrophonePermissionState(arg_enabled);
  }
  setLocationPermissionState(arg_enabled) {
    return this.$.setLocationPermissionState(arg_enabled);
  }
  setTabContextPermissionState(arg_enabled) {
    return this.$.setTabContextPermissionState(arg_enabled);
  }
  setClosedCaptioningSetting(arg_enabled) {
    return this.$.setClosedCaptioningSetting(arg_enabled);
  }
  setActuationOnWebSetting(arg_enabled) {
    return this.$.setActuationOnWebSetting(arg_enabled);
  }
  shouldAllowMediaPermissionRequest() {
    return this.$.shouldAllowMediaPermissionRequest();
  }
  shouldAllowGeolocationPermissionRequest() {
    return this.$.shouldAllowGeolocationPermissionRequest();
  }
  setContextAccessIndicator(arg_enabled) {
    return this.$.setContextAccessIndicator(arg_enabled);
  }
  getUserProfileInfo() {
    return this.$.getUserProfileInfo();
  }
  syncCookies() {
    return this.$.syncCookies();
  }
  logBeginAsyncEvent(arg_event_async_id, arg_task_id, arg_event, arg_details) {
    return this.$.logBeginAsyncEvent(arg_event_async_id, arg_task_id, arg_event, arg_details);
  }
  logEndAsyncEvent(arg_event_async_id, arg_details) {
    return this.$.logEndAsyncEvent(arg_event_async_id, arg_details);
  }
  logInstantEvent(arg_task_id, arg_event, arg_details) {
    return this.$.logInstantEvent(arg_task_id, arg_event, arg_details);
  }
  journalClear() {
    return this.$.journalClear();
  }
  journalSnapshot(arg_clear_journal) {
    return this.$.journalSnapshot(arg_clear_journal);
  }
  journalStart(arg_max_bytes, arg_capture_screenshots) {
    return this.$.journalStart(arg_max_bytes, arg_capture_screenshots);
  }
  journalStop() {
    return this.$.journalStop();
  }
  journalRecordFeedback(arg_positive, arg_reason) {
    return this.$.journalRecordFeedback(arg_positive, arg_reason);
  }
  onUserInputSubmitted(arg_mode) {
    return this.$.onUserInputSubmitted(arg_mode);
  }
  onContextUploadStarted() {
    return this.$.onContextUploadStarted();
  }
  onContextUploadCompleted() {
    return this.$.onContextUploadCompleted();
  }
  onReaction(arg_reactionType) {
    return this.$.onReaction(arg_reactionType);
  }
  onResponseStarted() {
    return this.$.onResponseStarted();
  }
  onResponseStopped(arg_details) {
    return this.$.onResponseStopped(arg_details);
  }
  onSessionTerminated() {
    return this.$.onSessionTerminated();
  }
  onTurnCompleted(arg_model, arg_duration) {
    return this.$.onTurnCompleted(arg_model, arg_duration);
  }
  onModelChanged(arg_model) {
    return this.$.onModelChanged(arg_model);
  }
  onRecordUseCounter(arg_counter) {
    return this.$.onRecordUseCounter(arg_counter);
  }
  onResponseRated(arg_positive) {
    return this.$.onResponseRated(arg_positive);
  }
  onClosedCaptionsShown() {
    return this.$.onClosedCaptionsShown();
  }
  scrollTo(arg_params) {
    return this.$.scrollTo(arg_params);
  }
  dropScrollToHighlight() {
    return this.$.dropScrollToHighlight();
  }
  setSyntheticExperimentState(arg_trial_name, arg_group_name) {
    return this.$.setSyntheticExperimentState(arg_trial_name, arg_group_name);
  }
  openOsPermissionSettingsMenu(arg_type) {
    return this.$.openOsPermissionSettingsMenu(arg_type);
  }
  getOsMicrophonePermissionStatus() {
    return this.$.getOsMicrophonePermissionStatus();
  }
  getZeroStateSuggestionsAndSubscribe(arg_is_live, arg_options) {
    return this.$.getZeroStateSuggestionsAndSubscribe(arg_is_live, arg_options);
  }
  getZeroStateSuggestionsForFocusedTab(arg_is_first_run) {
    return this.$.getZeroStateSuggestionsForFocusedTab(arg_is_first_run);
  }
  maybeRefreshUserStatus() {
    return this.$.maybeRefreshUserStatus();
  }
  isDebuggerAttached() {
    return this.$.isDebuggerAttached();
  }
  onViewChanged(arg_notification) {
    return this.$.onViewChanged(arg_notification);
  }
  subscribeToPageMetadata(arg_tab_id, arg_names) {
    return this.$.subscribeToPageMetadata(arg_tab_id, arg_names);
  }
  switchConversation(arg_info) {
    return this.$.switchConversation(arg_info);
  }
  registerConversation(arg_info) {
    return this.$.registerConversation(arg_info);
  }
  setOnboardingCompleted() {
    return this.$.setOnboardingCompleted();
  }
  subscribeToTabData(arg_tab_id, arg_receiver) {
    return this.$.subscribeToTabData(arg_tab_id, arg_receiver);
  }
};

mojo.internal.bindings.glic.mojom.WebClientHandlerRemoteCallHandler = class {
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

  webClientCreated(arg_web_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec,
      [arg_web_client],
      false);
  }

  webClientInitialized() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec,
      null,
      [],
      false);
  }

  webClientInitializeFailed() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec,
      null,
      [],
      false);
  }

  createTab(arg_url, arg_open_in_background, arg_window_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec,
      [arg_url, arg_open_in_background, arg_window_id],
      false);
  }

  openLinkInPopup(arg_url, arg_popup_width, arg_popup_height) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec,
      null,
      [arg_url, arg_popup_width, arg_popup_height],
      false);
  }

  openGlicSettingsPage(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec,
      null,
      [arg_options],
      false);
  }

  openPasswordManagerSettingsPage() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec,
      null,
      [],
      false);
  }

  closePanel() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanel_ParamsSpec,
      null,
      [],
      false);
  }

  closePanelAndShutdown() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec,
      null,
      [],
      false);
  }

  attachPanel() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_AttachPanel_ParamsSpec,
      null,
      [],
      false);
  }

  detachPanel() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_DetachPanel_ParamsSpec,
      null,
      [],
      false);
  }

  onModeChange(arg_new_mode) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnModeChange_ParamsSpec,
      null,
      [arg_new_mode],
      false);
  }

  showProfilePicker() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec,
      null,
      [],
      false);
  }

  getModelQualityClientId() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec,
      [],
      false);
  }

  getContextFromFocusedTab(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec,
      [arg_options],
      false);
  }

  getContextFromTab(arg_tab_id, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec,
      [arg_tab_id, arg_options],
      false);
  }

  getContextForActorFromTab(arg_tab_id, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextForActorFromTab_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextForActorFromTab_ResponseParamsSpec,
      [arg_tab_id, arg_options],
      false);
  }

  setMaximumNumberOfPinnedTabs(arg_requested_max) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec,
      [arg_requested_max],
      false);
  }

  pinTabs(arg_tab_ids, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec,
      [arg_tab_ids, arg_options],
      false);
  }

  unpinTabs(arg_tab_ids, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec,
      [arg_tab_ids, arg_options],
      false);
  }

  unpinAllTabs(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec,
      null,
      [arg_options],
      false);
  }

  createSkill(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_CreateSkill_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_CreateSkill_ResponseParamsSpec,
      [arg_request],
      false);
  }

  updateSkill(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_UpdateSkill_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_UpdateSkill_ResponseParamsSpec,
      [arg_request],
      false);
  }

  getSkill(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetSkill_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetSkill_ResponseParamsSpec,
      [arg_id],
      false);
  }

  subscribeToPinCandidates(arg_options, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec,
      null,
      [arg_options, arg_observer],
      false);
  }

  createTask(arg_task_options) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTask_ParamsSpec,
      null,
      [arg_task_options],
      false);
  }

  performActions(arg_actions_proto) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_PerformActions_ParamsSpec,
      null,
      [arg_actions_proto],
      false);
  }

  cancelActions(arg_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_CancelActions_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_CancelActions_ResponseParamsSpec,
      [arg_task_id],
      false);
  }

  stopActorTask(arg_task_id, arg_stop_reason) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_StopActorTask_ParamsSpec,
      null,
      [arg_task_id, arg_stop_reason],
      false);
  }

  pauseActorTask(arg_task_id, arg_pause_reason, arg_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_PauseActorTask_ParamsSpec,
      null,
      [arg_task_id, arg_pause_reason, arg_tab_id],
      false);
  }

  resumeActorTask(arg_task_id, arg_context_options) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ResumeActorTask_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_ResumeActorTask_ResponseParamsSpec,
      [arg_task_id, arg_context_options],
      false);
  }

  interruptActorTask(arg_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_InterruptActorTask_ParamsSpec,
      null,
      [arg_task_id],
      false);
  }

  uninterruptActorTask(arg_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_UninterruptActorTask_ParamsSpec,
      null,
      [arg_task_id],
      false);
  }

  createActorTab(arg_task_id, arg_open_in_background, arg_initiator_tab_id, arg_initiator_window_id) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_CreateActorTab_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_CreateActorTab_ResponseParamsSpec,
      [arg_task_id, arg_open_in_background, arg_initiator_tab_id, arg_initiator_window_id],
      false);
  }

  activateTab(arg_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTab_ParamsSpec,
      null,
      [arg_task_id],
      false);
  }

  resizeWidget(arg_size, arg_duration) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ResponseParamsSpec,
      [arg_size, arg_duration],
      false);
  }

  captureScreenshot() {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec,
      [],
      false);
  }

  captureRegion(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  setAudioDucking(arg_enable) {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec,
      [arg_enable],
      false);
  }

  setPanelDraggableAreas(arg_draggable_areas) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetPanelDraggableAreas_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetPanelDraggableAreas_ResponseParamsSpec,
      [arg_draggable_areas],
      false);
  }

  setMinimumPanelSize(arg_size) {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec,
      null,
      [arg_size],
      false);
  }

  setMicrophonePermissionState(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ResponseParamsSpec,
      [arg_enabled],
      false);
  }

  setLocationPermissionState(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ResponseParamsSpec,
      [arg_enabled],
      false);
  }

  setTabContextPermissionState(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ResponseParamsSpec,
      [arg_enabled],
      false);
  }

  setClosedCaptioningSetting(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ResponseParamsSpec,
      [arg_enabled],
      false);
  }

  setActuationOnWebSetting(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ResponseParamsSpec,
      [arg_enabled],
      false);
  }

  shouldAllowMediaPermissionRequest() {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec,
      [],
      false);
  }

  shouldAllowGeolocationPermissionRequest() {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec,
      [],
      false);
  }

  setContextAccessIndicator(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  getUserProfileInfo() {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec,
      [],
      false);
  }

  syncCookies() {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec,
      [],
      false);
  }

  logBeginAsyncEvent(arg_event_async_id, arg_task_id, arg_event, arg_details) {
    return this.proxy.sendMessage(
      this.ordinals[51],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_LogBeginAsyncEvent_ParamsSpec,
      null,
      [arg_event_async_id, arg_task_id, arg_event, arg_details],
      false);
  }

  logEndAsyncEvent(arg_event_async_id, arg_details) {
    return this.proxy.sendMessage(
      this.ordinals[52],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_LogEndAsyncEvent_ParamsSpec,
      null,
      [arg_event_async_id, arg_details],
      false);
  }

  logInstantEvent(arg_task_id, arg_event, arg_details) {
    return this.proxy.sendMessage(
      this.ordinals[53],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_LogInstantEvent_ParamsSpec,
      null,
      [arg_task_id, arg_event, arg_details],
      false);
  }

  journalClear() {
    return this.proxy.sendMessage(
      this.ordinals[54],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_JournalClear_ParamsSpec,
      null,
      [],
      false);
  }

  journalSnapshot(arg_clear_journal) {
    return this.proxy.sendMessage(
      this.ordinals[55],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_JournalSnapshot_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_JournalSnapshot_ResponseParamsSpec,
      [arg_clear_journal],
      false);
  }

  journalStart(arg_max_bytes, arg_capture_screenshots) {
    return this.proxy.sendMessage(
      this.ordinals[56],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_JournalStart_ParamsSpec,
      null,
      [arg_max_bytes, arg_capture_screenshots],
      false);
  }

  journalStop() {
    return this.proxy.sendMessage(
      this.ordinals[57],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_JournalStop_ParamsSpec,
      null,
      [],
      false);
  }

  journalRecordFeedback(arg_positive, arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[58],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_JournalRecordFeedback_ParamsSpec,
      null,
      [arg_positive, arg_reason],
      false);
  }

  onUserInputSubmitted(arg_mode) {
    return this.proxy.sendMessage(
      this.ordinals[59],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec,
      null,
      [arg_mode],
      false);
  }

  onContextUploadStarted() {
    return this.proxy.sendMessage(
      this.ordinals[60],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec,
      null,
      [],
      false);
  }

  onContextUploadCompleted() {
    return this.proxy.sendMessage(
      this.ordinals[61],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec,
      null,
      [],
      false);
  }

  onReaction(arg_reactionType) {
    return this.proxy.sendMessage(
      this.ordinals[62],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnReaction_ParamsSpec,
      null,
      [arg_reactionType],
      false);
  }

  onResponseStarted() {
    return this.proxy.sendMessage(
      this.ordinals[63],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec,
      null,
      [],
      false);
  }

  onResponseStopped(arg_details) {
    return this.proxy.sendMessage(
      this.ordinals[64],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec,
      null,
      [arg_details],
      false);
  }

  onSessionTerminated() {
    return this.proxy.sendMessage(
      this.ordinals[65],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec,
      null,
      [],
      false);
  }

  onTurnCompleted(arg_model, arg_duration) {
    return this.proxy.sendMessage(
      this.ordinals[66],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec,
      null,
      [arg_model, arg_duration],
      false);
  }

  onModelChanged(arg_model) {
    return this.proxy.sendMessage(
      this.ordinals[67],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnModelChanged_ParamsSpec,
      null,
      [arg_model],
      false);
  }

  onRecordUseCounter(arg_counter) {
    return this.proxy.sendMessage(
      this.ordinals[68],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnRecordUseCounter_ParamsSpec,
      null,
      [arg_counter],
      false);
  }

  onResponseRated(arg_positive) {
    return this.proxy.sendMessage(
      this.ordinals[69],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec,
      null,
      [arg_positive],
      false);
  }

  onClosedCaptionsShown() {
    return this.proxy.sendMessage(
      this.ordinals[70],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec,
      null,
      [],
      false);
  }

  scrollTo(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[71],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ScrollTo_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_ScrollTo_ResponseParamsSpec,
      [arg_params],
      false);
  }

  dropScrollToHighlight() {
    return this.proxy.sendMessage(
      this.ordinals[72],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_DropScrollToHighlight_ParamsSpec,
      null,
      [],
      false);
  }

  setSyntheticExperimentState(arg_trial_name, arg_group_name) {
    return this.proxy.sendMessage(
      this.ordinals[73],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec,
      null,
      [arg_trial_name, arg_group_name],
      false);
  }

  openOsPermissionSettingsMenu(arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[74],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec,
      null,
      [arg_type],
      false);
  }

  getOsMicrophonePermissionStatus() {
    return this.proxy.sendMessage(
      this.ordinals[75],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec,
      [],
      false);
  }

  getZeroStateSuggestionsAndSubscribe(arg_is_live, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[76],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec,
      [arg_is_live, arg_options],
      false);
  }

  getZeroStateSuggestionsForFocusedTab(arg_is_first_run) {
    return this.proxy.sendMessage(
      this.ordinals[77],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec,
      [arg_is_first_run],
      false);
  }

  maybeRefreshUserStatus() {
    return this.proxy.sendMessage(
      this.ordinals[78],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec,
      null,
      [],
      false);
  }

  isDebuggerAttached() {
    return this.proxy.sendMessage(
      this.ordinals[79],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec,
      [],
      false);
  }

  onViewChanged(arg_notification) {
    return this.proxy.sendMessage(
      this.ordinals[80],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnViewChanged_ParamsSpec,
      null,
      [arg_notification],
      false);
  }

  subscribeToPageMetadata(arg_tab_id, arg_names) {
    return this.proxy.sendMessage(
      this.ordinals[81],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec,
      [arg_tab_id, arg_names],
      false);
  }

  switchConversation(arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[82],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec,
      [arg_info],
      false);
  }

  registerConversation(arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[83],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec,
      [arg_info],
      false);
  }

  setOnboardingCompleted() {
    return this.proxy.sendMessage(
      this.ordinals[84],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec,
      null,
      [],
      false);
  }

  subscribeToTabData(arg_tab_id, arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[85],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec,
      null,
      [arg_tab_id, arg_receiver],
      false);
  }

};

mojo.internal.bindings.glic.mojom.WebClientHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.WebClientHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.WebClientHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.WebClientHandlerReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanel_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_AttachPanel_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_DetachPanel_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnModeChange_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextForActorFromTab_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CreateSkill_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_UpdateSkill_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetSkill_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTask_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_PerformActions_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CancelActions_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_StopActorTask_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_PauseActorTask_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ResumeActorTask_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_InterruptActorTask_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_UninterruptActorTask_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CreateActorTab_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTab_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetPanelDraggableAreas_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_LogBeginAsyncEvent_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_LogEndAsyncEvent_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_LogInstantEvent_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_JournalClear_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_JournalSnapshot_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_JournalStart_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_JournalStop_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_JournalRecordFeedback_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnReaction_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnModelChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnRecordUseCounter_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ScrollTo_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_DropScrollToHighlight_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnViewChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.webClientCreated');
          const result = this.impl.webClientCreated(params.arg_web_client);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WebClientCreated FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.webClientInitialized');
          const result = this.impl.webClientInitialized();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.webClientInitializeFailed');
          const result = this.impl.webClientInitializeFailed();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createTab');
          const result = this.impl.createTab(params.arg_url, params.arg_open_in_background, params.arg_window_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateTab FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openLinkInPopup');
          const result = this.impl.openLinkInPopup(params.arg_url, params.arg_popup_width, params.arg_popup_height);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openGlicSettingsPage');
          const result = this.impl.openGlicSettingsPage(params.arg_options);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openPasswordManagerSettingsPage');
          const result = this.impl.openPasswordManagerSettingsPage();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closePanel');
          const result = this.impl.closePanel();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closePanelAndShutdown');
          const result = this.impl.closePanelAndShutdown();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_AttachPanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.attachPanel');
          const result = this.impl.attachPanel();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_DetachPanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.detachPanel');
          const result = this.impl.detachPanel();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnModeChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onModeChange');
          const result = this.impl.onModeChange(params.arg_new_mode);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showProfilePicker');
          const result = this.impl.showProfilePicker();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getModelQualityClientId');
          const result = this.impl.getModelQualityClientId();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetModelQualityClientId FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getContextFromFocusedTab');
          const result = this.impl.getContextFromFocusedTab(params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetContextFromFocusedTab FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getContextFromTab');
          const result = this.impl.getContextFromTab(params.arg_tab_id, params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetContextFromTab FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextForActorFromTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getContextForActorFromTab');
          const result = this.impl.getContextForActorFromTab(params.arg_tab_id, params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextForActorFromTab_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetContextForActorFromTab FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMaximumNumberOfPinnedTabs');
          const result = this.impl.setMaximumNumberOfPinnedTabs(params.arg_requested_max);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetMaximumNumberOfPinnedTabs FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pinTabs');
          const result = this.impl.pinTabs(params.arg_tab_ids, params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PinTabs FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unpinTabs');
          const result = this.impl.unpinTabs(params.arg_tab_ids, params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UnpinTabs FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unpinAllTabs');
          const result = this.impl.unpinAllTabs(params.arg_options);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CreateSkill_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSkill');
          const result = this.impl.createSkill(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_CreateSkill_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateSkill FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_UpdateSkill_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateSkill');
          const result = this.impl.updateSkill(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_UpdateSkill_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateSkill FAILED:', e));
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetSkill_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSkill');
          const result = this.impl.getSkill(params.arg_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_GetSkill_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSkill FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.subscribeToPinCandidates');
          const result = this.impl.subscribeToPinCandidates(params.arg_options, params.arg_observer);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTask_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createTask');
          const result = this.impl.createTask(params.arg_task_options);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_PerformActions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.performActions');
          const result = this.impl.performActions(params.arg_actions_proto);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CancelActions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelActions');
          const result = this.impl.cancelActions(params.arg_task_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_CancelActions_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CancelActions FAILED:', e));
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_StopActorTask_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopActorTask');
          const result = this.impl.stopActorTask(params.arg_task_id, params.arg_stop_reason);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_PauseActorTask_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pauseActorTask');
          const result = this.impl.pauseActorTask(params.arg_task_id, params.arg_pause_reason, params.arg_tab_id);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ResumeActorTask_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resumeActorTask');
          const result = this.impl.resumeActorTask(params.arg_task_id, params.arg_context_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_ResumeActorTask_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ResumeActorTask FAILED:', e));
          }
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_InterruptActorTask_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.interruptActorTask');
          const result = this.impl.interruptActorTask(params.arg_task_id);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_UninterruptActorTask_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.uninterruptActorTask');
          const result = this.impl.uninterruptActorTask(params.arg_task_id);
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CreateActorTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createActorTab');
          const result = this.impl.createActorTab(params.arg_task_id, params.arg_open_in_background, params.arg_initiator_tab_id, params.arg_initiator_window_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_CreateActorTab_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateActorTab FAILED:', e));
          }
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.activateTab');
          const result = this.impl.activateTab(params.arg_task_id);
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resizeWidget');
          const result = this.impl.resizeWidget(params.arg_size, params.arg_duration);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ResizeWidget FAILED:', e));
          }
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.captureScreenshot');
          const result = this.impl.captureScreenshot();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CaptureScreenshot FAILED:', e));
          }
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.captureRegion');
          const result = this.impl.captureRegion(params.arg_observer);
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAudioDucking');
          const result = this.impl.setAudioDucking(params.arg_enable);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetAudioDucking FAILED:', e));
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetPanelDraggableAreas_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPanelDraggableAreas');
          const result = this.impl.setPanelDraggableAreas(params.arg_draggable_areas);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SetPanelDraggableAreas_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetPanelDraggableAreas FAILED:', e));
          }
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMinimumPanelSize');
          const result = this.impl.setMinimumPanelSize(params.arg_size);
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMicrophonePermissionState');
          const result = this.impl.setMicrophonePermissionState(params.arg_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetMicrophonePermissionState FAILED:', e));
          }
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setLocationPermissionState');
          const result = this.impl.setLocationPermissionState(params.arg_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetLocationPermissionState FAILED:', e));
          }
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTabContextPermissionState');
          const result = this.impl.setTabContextPermissionState(params.arg_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetTabContextPermissionState FAILED:', e));
          }
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setClosedCaptioningSetting');
          const result = this.impl.setClosedCaptioningSetting(params.arg_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetClosedCaptioningSetting FAILED:', e));
          }
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setActuationOnWebSetting');
          const result = this.impl.setActuationOnWebSetting(params.arg_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetActuationOnWebSetting FAILED:', e));
          }
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldAllowMediaPermissionRequest');
          const result = this.impl.shouldAllowMediaPermissionRequest();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ShouldAllowMediaPermissionRequest FAILED:', e));
          }
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldAllowGeolocationPermissionRequest');
          const result = this.impl.shouldAllowGeolocationPermissionRequest();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ShouldAllowGeolocationPermissionRequest FAILED:', e));
          }
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setContextAccessIndicator');
          const result = this.impl.setContextAccessIndicator(params.arg_enabled);
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUserProfileInfo');
          const result = this.impl.getUserProfileInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUserProfileInfo FAILED:', e));
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.syncCookies');
          const result = this.impl.syncCookies();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SyncCookies FAILED:', e));
          }
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_LogBeginAsyncEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logBeginAsyncEvent');
          const result = this.impl.logBeginAsyncEvent(params.arg_event_async_id, params.arg_task_id, params.arg_event, params.arg_details);
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_LogEndAsyncEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logEndAsyncEvent');
          const result = this.impl.logEndAsyncEvent(params.arg_event_async_id, params.arg_details);
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_LogInstantEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logInstantEvent');
          const result = this.impl.logInstantEvent(params.arg_task_id, params.arg_event, params.arg_details);
          break;
        }
        case 54: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_JournalClear_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.journalClear');
          const result = this.impl.journalClear();
          break;
        }
        case 55: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_JournalSnapshot_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.journalSnapshot');
          const result = this.impl.journalSnapshot(params.arg_clear_journal);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_JournalSnapshot_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] JournalSnapshot FAILED:', e));
          }
          break;
        }
        case 56: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_JournalStart_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.journalStart');
          const result = this.impl.journalStart(params.arg_max_bytes, params.arg_capture_screenshots);
          break;
        }
        case 57: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_JournalStop_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.journalStop');
          const result = this.impl.journalStop();
          break;
        }
        case 58: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_JournalRecordFeedback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.journalRecordFeedback');
          const result = this.impl.journalRecordFeedback(params.arg_positive, params.arg_reason);
          break;
        }
        case 59: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUserInputSubmitted');
          const result = this.impl.onUserInputSubmitted(params.arg_mode);
          break;
        }
        case 60: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onContextUploadStarted');
          const result = this.impl.onContextUploadStarted();
          break;
        }
        case 61: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onContextUploadCompleted');
          const result = this.impl.onContextUploadCompleted();
          break;
        }
        case 62: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnReaction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReaction');
          const result = this.impl.onReaction(params.arg_reactionType);
          break;
        }
        case 63: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onResponseStarted');
          const result = this.impl.onResponseStarted();
          break;
        }
        case 64: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onResponseStopped');
          const result = this.impl.onResponseStopped(params.arg_details);
          break;
        }
        case 65: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSessionTerminated');
          const result = this.impl.onSessionTerminated();
          break;
        }
        case 66: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTurnCompleted');
          const result = this.impl.onTurnCompleted(params.arg_model, params.arg_duration);
          break;
        }
        case 67: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnModelChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onModelChanged');
          const result = this.impl.onModelChanged(params.arg_model);
          break;
        }
        case 68: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnRecordUseCounter_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRecordUseCounter');
          const result = this.impl.onRecordUseCounter(params.arg_counter);
          break;
        }
        case 69: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onResponseRated');
          const result = this.impl.onResponseRated(params.arg_positive);
          break;
        }
        case 70: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClosedCaptionsShown');
          const result = this.impl.onClosedCaptionsShown();
          break;
        }
        case 71: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ScrollTo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scrollTo');
          const result = this.impl.scrollTo(params.arg_params);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_ScrollTo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ScrollTo FAILED:', e));
          }
          break;
        }
        case 72: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_DropScrollToHighlight_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dropScrollToHighlight');
          const result = this.impl.dropScrollToHighlight();
          break;
        }
        case 73: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSyntheticExperimentState');
          const result = this.impl.setSyntheticExperimentState(params.arg_trial_name, params.arg_group_name);
          break;
        }
        case 74: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openOsPermissionSettingsMenu');
          const result = this.impl.openOsPermissionSettingsMenu(params.arg_type);
          break;
        }
        case 75: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOsMicrophonePermissionStatus');
          const result = this.impl.getOsMicrophonePermissionStatus();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetOsMicrophonePermissionStatus FAILED:', e));
          }
          break;
        }
        case 76: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getZeroStateSuggestionsAndSubscribe');
          const result = this.impl.getZeroStateSuggestionsAndSubscribe(params.arg_is_live, params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetZeroStateSuggestionsAndSubscribe FAILED:', e));
          }
          break;
        }
        case 77: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getZeroStateSuggestionsForFocusedTab');
          const result = this.impl.getZeroStateSuggestionsForFocusedTab(params.arg_is_first_run);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetZeroStateSuggestionsForFocusedTab FAILED:', e));
          }
          break;
        }
        case 78: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.maybeRefreshUserStatus');
          const result = this.impl.maybeRefreshUserStatus();
          break;
        }
        case 79: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isDebuggerAttached');
          const result = this.impl.isDebuggerAttached();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsDebuggerAttached FAILED:', e));
          }
          break;
        }
        case 80: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnViewChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onViewChanged');
          const result = this.impl.onViewChanged(params.arg_notification);
          break;
        }
        case 81: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.subscribeToPageMetadata');
          const result = this.impl.subscribeToPageMetadata(params.arg_tab_id, params.arg_names);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SubscribeToPageMetadata FAILED:', e));
          }
          break;
        }
        case 82: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.switchConversation');
          const result = this.impl.switchConversation(params.arg_info);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SwitchConversation FAILED:', e));
          }
          break;
        }
        case 83: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerConversation');
          const result = this.impl.registerConversation(params.arg_info);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RegisterConversation FAILED:', e));
          }
          break;
        }
        case 84: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOnboardingCompleted');
          const result = this.impl.setOnboardingCompleted();
          break;
        }
        case 85: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.subscribeToTabData');
          const result = this.impl.subscribeToTabData(params.arg_tab_id, params.arg_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.WebClientHandlerReceiver = mojo.internal.bindings.glic.mojom.WebClientHandlerReceiver;

mojo.internal.bindings.glic.mojom.WebClientHandlerPtr = mojo.internal.bindings.glic.mojom.WebClientHandlerRemote;
mojo.internal.bindings.glic.mojom.WebClientHandlerRequest = mojo.internal.bindings.glic.mojom.WebClientHandlerPendingReceiver;


// Interface: TabDataHandler
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec, 'glic.mojom.TabDataHandler_OnTabDataChanged_Params', [
      mojo.internal.StructField('arg_tab_data', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.TabDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.glic.mojom.TabDataHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.glic.mojom.TabDataHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.TabDataHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.TabDataHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.TabDataHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onTabDataChanged(arg_tab_data) {
    return this.$.onTabDataChanged(arg_tab_data);
  }
};

mojo.internal.bindings.glic.mojom.TabDataHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TabDataHandler', [
      { explicit: null },
    ]);
  }

  onTabDataChanged(arg_tab_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec,
      null,
      [arg_tab_data],
      false);
  }

};

mojo.internal.bindings.glic.mojom.TabDataHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.TabDataHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.TabDataHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.TabDataHandlerReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTabDataChanged');
          const result = this.impl.onTabDataChanged(params.arg_tab_data);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.TabDataHandlerReceiver = mojo.internal.bindings.glic.mojom.TabDataHandlerReceiver;

mojo.internal.bindings.glic.mojom.TabDataHandlerPtr = mojo.internal.bindings.glic.mojom.TabDataHandlerRemote;
mojo.internal.bindings.glic.mojom.TabDataHandlerRequest = mojo.internal.bindings.glic.mojom.TabDataHandlerPendingReceiver;


// Interface: WebClient
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec, 'glic.mojom.WebClient_NotifyPanelWillOpen_Params', [
      mojo.internal.StructField('arg_panel_opening_data', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.PanelOpeningDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec, 'glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParams', [
      mojo.internal.StructField('arg_openPanelInfo', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.OpenPanelInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec, 'glic.mojom.WebClient_NotifyPanelWasClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ResponseParamsSpec, 'glic.mojom.WebClient_NotifyPanelWasClosed_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec, 'glic.mojom.WebClient_NotifyPanelStateChange_Params', [
      mojo.internal.StructField('arg_panel_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.PanelStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec, 'glic.mojom.WebClient_NotifyPanelActiveChange_Params', [
      mojo.internal.StructField('arg_panel_active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec, 'glic.mojom.WebClient_NotifyPanelCanAttachChange_Params', [
      mojo.internal.StructField('arg_can_attach', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyLocationPermissionStateChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyFocusedTabChanged_Params', [
      mojo.internal.StructField('arg_focused_tab_data', 0, 0, mojo.internal.bindings.glic.mojom.FocusedTabDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyManualResizeChanged_Params', [
      mojo.internal.StructField('arg_resizing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyOsHotkeyStateChanged_Params', [
      mojo.internal.StructField('arg_hotkey', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyBrowserIsOpenChanged_Params', [
      mojo.internal.StructField('arg_browser_is_open', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyInstanceActivationChanged_Params', [
      mojo.internal.StructField('arg_instance_active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyPinnedTabsChanged_Params', [
      mojo.internal.StructField('arg_tab_data', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.glic.mojom.TabDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyPinnedTabDataChanged_Params', [
      mojo.internal.StructField('arg_tab_data', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.TabDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifySkillPreviewsChanged_ParamsSpec, 'glic.mojom.WebClient_NotifySkillPreviewsChanged_Params', [
      mojo.internal.StructField('arg_skill_previews', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.glic.mojom.SkillPreviewSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifySkillPreviewChanged_ParamsSpec, 'glic.mojom.WebClient_NotifySkillPreviewChanged_Params', [
      mojo.internal.StructField('arg_skill_preview', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.SkillPreviewSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifySkillToInvokeChanged_ParamsSpec, 'glic.mojom.WebClient_NotifySkillToInvokeChanged_Params', [
      mojo.internal.StructField('arg_skill', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.SkillSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_Params', [
      mojo.internal.StructField('arg_suggestions', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsV2Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyActorTaskStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyActorTaskStateChanged_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ActorTaskStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_task_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_RequestViewChange_ParamsSpec, 'glic.mojom.WebClient_RequestViewChange_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.ViewChangeRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyPageMetadataChanged_Params', [
      mojo.internal.StructField('arg_metadata', 0, 0, mojo.internal.bindings.blink.mojom.PageMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ParamsSpec, 'glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.actor.webui.mojom.SelectCredentialDialogRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec, 'glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.actor.webui.mojom.SelectCredentialDialogResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec, 'glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.actor.webui.mojom.SelectAutofillSuggestionsDialogRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec, 'glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.actor.webui.mojom.SelectAutofillSuggestionsDialogResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ParamsSpec, 'glic.mojom.WebClient_RequestToShowUserConfirmationDialog_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.actor.webui.mojom.UserConfirmationDialogRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec, 'glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.actor.webui.mojom.UserConfirmationDialogResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_RequestToConfirmNavigation_ParamsSpec, 'glic.mojom.WebClient_RequestToConfirmNavigation_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.actor.webui.mojom.NavigationConfirmationRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_RequestToConfirmNavigation_ResponseParamsSpec, 'glic.mojom.WebClient_RequestToConfirmNavigation_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.actor.webui.mojom.NavigationConfirmationResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec, 'glic.mojom.WebClient_NotifyAdditionalContext_Params', [
      mojo.internal.StructField('arg_context', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.AdditionalContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_Params', [
      mojo.internal.StructField('arg_can_act_on_web', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyOnboardingCompletedChanged_Params', [
      mojo.internal.StructField('arg_completed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.glic.mojom.WebClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.glic.mojom.WebClientRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.WebClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.WebClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.WebClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  notifyPanelWillOpen(arg_panel_opening_data) {
    return this.$.notifyPanelWillOpen(arg_panel_opening_data);
  }
  notifyPanelWasClosed() {
    return this.$.notifyPanelWasClosed();
  }
  notifyPanelStateChange(arg_panel_state) {
    return this.$.notifyPanelStateChange(arg_panel_state);
  }
  notifyPanelActiveChange(arg_panel_active) {
    return this.$.notifyPanelActiveChange(arg_panel_active);
  }
  notifyPanelCanAttachChange(arg_can_attach) {
    return this.$.notifyPanelCanAttachChange(arg_can_attach);
  }
  notifyMicrophonePermissionStateChanged(arg_enabled) {
    return this.$.notifyMicrophonePermissionStateChanged(arg_enabled);
  }
  notifyLocationPermissionStateChanged(arg_enabled) {
    return this.$.notifyLocationPermissionStateChanged(arg_enabled);
  }
  notifyTabContextPermissionStateChanged(arg_enabled) {
    return this.$.notifyTabContextPermissionStateChanged(arg_enabled);
  }
  notifyOsLocationPermissionStateChanged(arg_enabled) {
    return this.$.notifyOsLocationPermissionStateChanged(arg_enabled);
  }
  notifyFocusedTabChanged(arg_focused_tab_data) {
    return this.$.notifyFocusedTabChanged(arg_focused_tab_data);
  }
  notifyManualResizeChanged(arg_resizing) {
    return this.$.notifyManualResizeChanged(arg_resizing);
  }
  notifyOsHotkeyStateChanged(arg_hotkey) {
    return this.$.notifyOsHotkeyStateChanged(arg_hotkey);
  }
  notifyBrowserIsOpenChanged(arg_browser_is_open) {
    return this.$.notifyBrowserIsOpenChanged(arg_browser_is_open);
  }
  notifyInstanceActivationChanged(arg_instance_active) {
    return this.$.notifyInstanceActivationChanged(arg_instance_active);
  }
  notifyClosedCaptioningSettingChanged(arg_enabled) {
    return this.$.notifyClosedCaptioningSettingChanged(arg_enabled);
  }
  notifyPinnedTabsChanged(arg_tab_data) {
    return this.$.notifyPinnedTabsChanged(arg_tab_data);
  }
  notifyPinnedTabDataChanged(arg_tab_data) {
    return this.$.notifyPinnedTabDataChanged(arg_tab_data);
  }
  notifySkillPreviewsChanged(arg_skill_previews) {
    return this.$.notifySkillPreviewsChanged(arg_skill_previews);
  }
  notifySkillPreviewChanged(arg_skill_preview) {
    return this.$.notifySkillPreviewChanged(arg_skill_preview);
  }
  notifySkillToInvokeChanged(arg_skill) {
    return this.$.notifySkillToInvokeChanged(arg_skill);
  }
  notifyZeroStateSuggestionsChanged(arg_suggestions, arg_options) {
    return this.$.notifyZeroStateSuggestionsChanged(arg_suggestions, arg_options);
  }
  notifyActorTaskStateChanged(arg_task_id, arg_state) {
    return this.$.notifyActorTaskStateChanged(arg_task_id, arg_state);
  }
  requestViewChange(arg_request) {
    return this.$.requestViewChange(arg_request);
  }
  notifyPageMetadataChanged(arg_tab_id, arg_metadata) {
    return this.$.notifyPageMetadataChanged(arg_tab_id, arg_metadata);
  }
  notifyDefaultTabContextPermissionStateChanged(arg_enabled) {
    return this.$.notifyDefaultTabContextPermissionStateChanged(arg_enabled);
  }
  requestToShowCredentialSelectionDialog(arg_request) {
    return this.$.requestToShowCredentialSelectionDialog(arg_request);
  }
  requestToShowAutofillSuggestionsDialog(arg_request) {
    return this.$.requestToShowAutofillSuggestionsDialog(arg_request);
  }
  requestToShowUserConfirmationDialog(arg_request) {
    return this.$.requestToShowUserConfirmationDialog(arg_request);
  }
  requestToConfirmNavigation(arg_request) {
    return this.$.requestToConfirmNavigation(arg_request);
  }
  notifyAdditionalContext(arg_context) {
    return this.$.notifyAdditionalContext(arg_context);
  }
  notifyActuationOnWebSettingChanged(arg_enabled) {
    return this.$.notifyActuationOnWebSettingChanged(arg_enabled);
  }
  notifyActOnWebCapabilityChanged(arg_can_act_on_web) {
    return this.$.notifyActOnWebCapabilityChanged(arg_can_act_on_web);
  }
  notifyOnboardingCompletedChanged(arg_completed) {
    return this.$.notifyOnboardingCompletedChanged(arg_completed);
  }
};

mojo.internal.bindings.glic.mojom.WebClientRemoteCallHandler = class {
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

  notifyPanelWillOpen(arg_panel_opening_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec,
      [arg_panel_opening_data],
      false);
  }

  notifyPanelWasClosed() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ResponseParamsSpec,
      [],
      false);
  }

  notifyPanelStateChange(arg_panel_state) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec,
      null,
      [arg_panel_state],
      false);
  }

  notifyPanelActiveChange(arg_panel_active) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec,
      null,
      [arg_panel_active],
      false);
  }

  notifyPanelCanAttachChange(arg_can_attach) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec,
      null,
      [arg_can_attach],
      false);
  }

  notifyMicrophonePermissionStateChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  notifyLocationPermissionStateChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  notifyTabContextPermissionStateChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  notifyOsLocationPermissionStateChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  notifyFocusedTabChanged(arg_focused_tab_data) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec,
      null,
      [arg_focused_tab_data],
      false);
  }

  notifyManualResizeChanged(arg_resizing) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec,
      null,
      [arg_resizing],
      false);
  }

  notifyOsHotkeyStateChanged(arg_hotkey) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec,
      null,
      [arg_hotkey],
      false);
  }

  notifyBrowserIsOpenChanged(arg_browser_is_open) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec,
      null,
      [arg_browser_is_open],
      false);
  }

  notifyInstanceActivationChanged(arg_instance_active) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec,
      null,
      [arg_instance_active],
      false);
  }

  notifyClosedCaptioningSettingChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  notifyPinnedTabsChanged(arg_tab_data) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec,
      null,
      [arg_tab_data],
      false);
  }

  notifyPinnedTabDataChanged(arg_tab_data) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec,
      null,
      [arg_tab_data],
      false);
  }

  notifySkillPreviewsChanged(arg_skill_previews) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifySkillPreviewsChanged_ParamsSpec,
      null,
      [arg_skill_previews],
      false);
  }

  notifySkillPreviewChanged(arg_skill_preview) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifySkillPreviewChanged_ParamsSpec,
      null,
      [arg_skill_preview],
      false);
  }

  notifySkillToInvokeChanged(arg_skill) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifySkillToInvokeChanged_ParamsSpec,
      null,
      [arg_skill],
      false);
  }

  notifyZeroStateSuggestionsChanged(arg_suggestions, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec,
      null,
      [arg_suggestions, arg_options],
      false);
  }

  notifyActorTaskStateChanged(arg_task_id, arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyActorTaskStateChanged_ParamsSpec,
      null,
      [arg_task_id, arg_state],
      false);
  }

  requestViewChange(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_RequestViewChange_ParamsSpec,
      null,
      [arg_request],
      false);
  }

  notifyPageMetadataChanged(arg_tab_id, arg_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec,
      null,
      [arg_tab_id, arg_metadata],
      false);
  }

  notifyDefaultTabContextPermissionStateChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  requestToShowCredentialSelectionDialog(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec,
      [arg_request],
      false);
  }

  requestToShowAutofillSuggestionsDialog(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec,
      [arg_request],
      false);
  }

  requestToShowUserConfirmationDialog(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec,
      [arg_request],
      false);
  }

  requestToConfirmNavigation(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_RequestToConfirmNavigation_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClient_RequestToConfirmNavigation_ResponseParamsSpec,
      [arg_request],
      false);
  }

  notifyAdditionalContext(arg_context) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec,
      null,
      [arg_context],
      false);
  }

  notifyActuationOnWebSettingChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  notifyActOnWebCapabilityChanged(arg_can_act_on_web) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec,
      null,
      [arg_can_act_on_web],
      false);
  }

  notifyOnboardingCompletedChanged(arg_completed) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec,
      null,
      [arg_completed],
      false);
  }

};

mojo.internal.bindings.glic.mojom.WebClient.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.WebClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.WebClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.WebClientReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifySkillPreviewsChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifySkillPreviewChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifySkillToInvokeChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyActorTaskStateChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_RequestViewChange_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_RequestToConfirmNavigation_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPanelWillOpen');
          const result = this.impl.notifyPanelWillOpen(params.arg_panel_opening_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] NotifyPanelWillOpen FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPanelWasClosed');
          const result = this.impl.notifyPanelWasClosed();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] NotifyPanelWasClosed FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPanelStateChange');
          const result = this.impl.notifyPanelStateChange(params.arg_panel_state);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPanelActiveChange');
          const result = this.impl.notifyPanelActiveChange(params.arg_panel_active);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPanelCanAttachChange');
          const result = this.impl.notifyPanelCanAttachChange(params.arg_can_attach);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyMicrophonePermissionStateChanged');
          const result = this.impl.notifyMicrophonePermissionStateChanged(params.arg_enabled);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyLocationPermissionStateChanged');
          const result = this.impl.notifyLocationPermissionStateChanged(params.arg_enabled);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyTabContextPermissionStateChanged');
          const result = this.impl.notifyTabContextPermissionStateChanged(params.arg_enabled);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyOsLocationPermissionStateChanged');
          const result = this.impl.notifyOsLocationPermissionStateChanged(params.arg_enabled);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyFocusedTabChanged');
          const result = this.impl.notifyFocusedTabChanged(params.arg_focused_tab_data);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyManualResizeChanged');
          const result = this.impl.notifyManualResizeChanged(params.arg_resizing);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyOsHotkeyStateChanged');
          const result = this.impl.notifyOsHotkeyStateChanged(params.arg_hotkey);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyBrowserIsOpenChanged');
          const result = this.impl.notifyBrowserIsOpenChanged(params.arg_browser_is_open);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyInstanceActivationChanged');
          const result = this.impl.notifyInstanceActivationChanged(params.arg_instance_active);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyClosedCaptioningSettingChanged');
          const result = this.impl.notifyClosedCaptioningSettingChanged(params.arg_enabled);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPinnedTabsChanged');
          const result = this.impl.notifyPinnedTabsChanged(params.arg_tab_data);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPinnedTabDataChanged');
          const result = this.impl.notifyPinnedTabDataChanged(params.arg_tab_data);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifySkillPreviewsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySkillPreviewsChanged');
          const result = this.impl.notifySkillPreviewsChanged(params.arg_skill_previews);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifySkillPreviewChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySkillPreviewChanged');
          const result = this.impl.notifySkillPreviewChanged(params.arg_skill_preview);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifySkillToInvokeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySkillToInvokeChanged');
          const result = this.impl.notifySkillToInvokeChanged(params.arg_skill);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyZeroStateSuggestionsChanged');
          const result = this.impl.notifyZeroStateSuggestionsChanged(params.arg_suggestions, params.arg_options);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyActorTaskStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyActorTaskStateChanged');
          const result = this.impl.notifyActorTaskStateChanged(params.arg_task_id, params.arg_state);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_RequestViewChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestViewChange');
          const result = this.impl.requestViewChange(params.arg_request);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPageMetadataChanged');
          const result = this.impl.notifyPageMetadataChanged(params.arg_tab_id, params.arg_metadata);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyDefaultTabContextPermissionStateChanged');
          const result = this.impl.notifyDefaultTabContextPermissionStateChanged(params.arg_enabled);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestToShowCredentialSelectionDialog');
          const result = this.impl.requestToShowCredentialSelectionDialog(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestToShowCredentialSelectionDialog FAILED:', e));
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestToShowAutofillSuggestionsDialog');
          const result = this.impl.requestToShowAutofillSuggestionsDialog(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestToShowAutofillSuggestionsDialog FAILED:', e));
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestToShowUserConfirmationDialog');
          const result = this.impl.requestToShowUserConfirmationDialog(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestToShowUserConfirmationDialog FAILED:', e));
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_RequestToConfirmNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestToConfirmNavigation');
          const result = this.impl.requestToConfirmNavigation(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.glic.mojom.WebClient_RequestToConfirmNavigation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestToConfirmNavigation FAILED:', e));
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyAdditionalContext');
          const result = this.impl.notifyAdditionalContext(params.arg_context);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyActuationOnWebSettingChanged');
          const result = this.impl.notifyActuationOnWebSettingChanged(params.arg_enabled);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyActOnWebCapabilityChanged');
          const result = this.impl.notifyActOnWebCapabilityChanged(params.arg_can_act_on_web);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyOnboardingCompletedChanged');
          const result = this.impl.notifyOnboardingCompletedChanged(params.arg_completed);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.WebClientReceiver = mojo.internal.bindings.glic.mojom.WebClientReceiver;

mojo.internal.bindings.glic.mojom.WebClientPtr = mojo.internal.bindings.glic.mojom.WebClientRemote;
mojo.internal.bindings.glic.mojom.WebClientRequest = mojo.internal.bindings.glic.mojom.WebClientPendingReceiver;


// Interface: CaptureRegionObserver
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec, 'glic.mojom.CaptureRegionObserver_OnUpdate_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.CaptureRegionResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_reason', 8, 0, mojo.internal.bindings.mojo.internal.bindings.glic.mojom.CaptureRegionErrorReasonSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.glic.mojom.CaptureRegionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.glic.mojom.CaptureRegionObserverRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.CaptureRegionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.CaptureRegionObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.CaptureRegionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onUpdate(arg_result, arg_reason) {
    return this.$.onUpdate(arg_result, arg_reason);
  }
};

mojo.internal.bindings.glic.mojom.CaptureRegionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CaptureRegionObserver', [
      { explicit: null },
    ]);
  }

  onUpdate(arg_result, arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec,
      null,
      [arg_result, arg_reason],
      false);
  }

};

mojo.internal.bindings.glic.mojom.CaptureRegionObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.CaptureRegionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.CaptureRegionObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.CaptureRegionObserverReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUpdate');
          const result = this.impl.onUpdate(params.arg_result, params.arg_reason);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.CaptureRegionObserverReceiver = mojo.internal.bindings.glic.mojom.CaptureRegionObserverReceiver;

mojo.internal.bindings.glic.mojom.CaptureRegionObserverPtr = mojo.internal.bindings.glic.mojom.CaptureRegionObserverRemote;
mojo.internal.bindings.glic.mojom.CaptureRegionObserverRequest = mojo.internal.bindings.glic.mojom.CaptureRegionObserverPendingReceiver;

