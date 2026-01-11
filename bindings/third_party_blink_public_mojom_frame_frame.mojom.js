// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/frame/frame.mojom
 // Module: blink.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.cc = mojo.internal.bindings.cc || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.viz = mojo.internal.bindings.viz || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.blink.mojom.PluginActionTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.JavaScriptExecutionResultTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.TraverseCancelledReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.ViewTransitionSameOriginOptInSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.FrameOwnerElementTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.NavigationApiEntryRestoreReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.StorageTypeAccessedSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.WindowProxyAccessTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.SavableSubframeSpec = { $: {} };
mojo.internal.bindings.blink.mojom.GetSavableResourceLinksReplySpec = { $: {} };
mojo.internal.bindings.blink.mojom.FindInPageResultAXParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DownloadURLParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.IframeAttributesSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LegacyTechEventCodeLocationSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost = {};
mojo.internal.bindings.blink.mojom.LocalFrameHostSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost.$interfaceName = 'blink.mojom.LocalFrameHost';
mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeThemeColor_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeBackgroundColor_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_Detach_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_ForwardFencedFrameEventAndUserActivationToEmbedder_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_StartDragging_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_SetStorageAccessApiStatus_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost = {};
mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost.$interfaceName = 'blink.mojom.NonAssociatedLocalFrameHost';
mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame = {};
mojo.internal.bindings.blink.mojom.LocalFrameSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.LocalFrame.$interfaceName = 'blink.mojom.LocalFrame';
mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_CheckCompleted_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_StopLoading_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_Collapse_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_Focus_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_CopyImageAt_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_SaveImageAt_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_PluginActionAt_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_GetCharacterIndexAtPoint_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_GetFirstRectForRange_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_GetStringForRange_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_GetStringForRange_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_UpdateOpener_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_MixedContentFound_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_ExtractSmartClipData_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_ExtractSmartClipData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalFrame_PerformSpellCheck_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrame = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.LocalMainFrame.$interfaceName = 'blink.mojom.LocalMainFrame';
mojo.internal.bindings.blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHostSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost.$interfaceName = 'blink.mojom.LocalMainFrameHost';
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_TextAutosizerPageInfoChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Restore_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec = { $: {} };

mojo.internal.bindings.blink.mojom.kMaxTitleChars = 4096;

mojo.internal.bindings.blink.mojom.kMaxCrashReportStorageSize = 65536;

// Enum: PluginActionType
mojo.internal.bindings.blink.mojom.PluginActionType = {
  kRotate90Clockwise: 0,
  kRotate90Counterclockwise: 1,
};

// Enum: JavaScriptExecutionResultType
mojo.internal.bindings.blink.mojom.JavaScriptExecutionResultType = {
  kSuccess: 0,
  kException: 1,
};

// Enum: TraverseCancelledReason
mojo.internal.bindings.blink.mojom.TraverseCancelledReason = {
  kNotFound: 0,
  kSandboxViolation: 1,
  kAbortedBeforeCommit: 2,
};

// Enum: ViewTransitionSameOriginOptIn
mojo.internal.bindings.blink.mojom.ViewTransitionSameOriginOptIn = {
  kDisabled: 0,
  kEnabled: 1,
};

// Enum: FrameOwnerElementType
mojo.internal.bindings.blink.mojom.FrameOwnerElementType = {
  kNone: 0,
  kIframe: 1,
  kObject: 2,
  kEmbed: 3,
  kFrame: 4,
  kFencedframe: 5,
};

// Enum: NavigationApiEntryRestoreReason
mojo.internal.bindings.blink.mojom.NavigationApiEntryRestoreReason = {
  kBFCache: 0,
  kPrerenderActivationPush: 1,
  kPrerenderActivationReplace: 2,
};

// Enum: StorageTypeAccessed
mojo.internal.bindings.blink.mojom.StorageTypeAccessed = {
  kCacheStorage: 0,
  kIndexedDB: 1,
  kFileSystem: 2,
  kWebLocks: 3,
  kLocalStorage: 4,
  kSessionStorage: 5,
};

// Enum: WindowProxyAccessType
mojo.internal.bindings.blink.mojom.WindowProxyAccessType = {
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
    mojo.internal.bindings.blink.mojom.SavableSubframeSpec, 'blink.mojom.SavableSubframe', [
      mojo.internal.StructField('arg_original_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_subframe_token', 8, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GetSavableResourceLinksReply
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.GetSavableResourceLinksReplySpec, 'blink.mojom.GetSavableResourceLinksReply', [
      mojo.internal.StructField('arg_resources_list', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_referrer', 8, 0, mojo.internal.bindings.blink.mojom.ReferrerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_subframes', 16, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.SavableSubframeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: FindInPageResultAXParams
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FindInPageResultAXParamsSpec, 'blink.mojom.FindInPageResultAXParams', [
      mojo.internal.StructField('arg_request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_match_index', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_start_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_start_offset', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end_offset', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DownloadURLParams
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DownloadURLParamsSpec, 'blink.mojom.DownloadURLParams', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_referrer', 8, 0, mojo.internal.bindings.blink.mojom.ReferrerSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_initiator_origin', 16, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_suggested_name', 24, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_cross_origin_redirects', 32, 0, mojo.internal.bindings.network.mojom.RedirectModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_blob_url_token', 40, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.BlobURLTokenRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_data_url_blob', 48, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.BlobRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_is_context_menu_save', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_user_gesture', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: IframeAttributes
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.IframeAttributesSpec, 'blink.mojom.IframeAttributes', [
      mojo.internal.StructField('arg_parsed_csp_attribute', 0, 0, mojo.internal.bindings.network.mojom.ContentSecurityPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_src', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_credentialless', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_browsing_topics', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ad_auction_headers', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shared_storage_writable_opted_in', 32, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: LegacyTechEventCodeLocation
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LegacyTechEventCodeLocationSpec, 'blink.mojom.LegacyTechEventCodeLocation', [
      mojo.internal.StructField('arg_filename', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_line', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_column', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: LocalFrameHost
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec, 'blink.mojom.LocalFrameHost_EnterFullscreen_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.blink.mojom.FullscreenOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParams', [
      mojo.internal.StructField('arg_granted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec, 'blink.mojom.LocalFrameHost_ExitFullscreen_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_FullscreenStateChanged_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.blink.mojom.FullscreenOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_fullscreen', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec, 'blink.mojom.LocalFrameHost_RegisterProtocolHandler_Params', [
      mojo.internal.StructField('arg_scheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_user_gesture', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec, 'blink.mojom.LocalFrameHost_UnregisterProtocolHandler_Params', [
      mojo.internal.StructField('arg_scheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_user_gesture', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec, 'blink.mojom.LocalFrameHost_DidDisplayInsecureContent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec, 'blink.mojom.LocalFrameHost_DidContainInsecureFormAction_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec, 'blink.mojom.LocalFrameHost_MainDocumentElementAvailable_Params', [
      mojo.internal.StructField('arg_uses_temporary_zoom_level', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec, 'blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_Params', [
      mojo.internal.StructField('arg_needs_tracking', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec, 'blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.ui.mojom.VirtualKeyboardModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_VisibilityChanged_Params', [
      mojo.internal.StructField('arg_visibility', 0, 0, mojo.internal.bindings.blink.mojom.FrameVisibilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeThemeColor_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeThemeColor_Params', [
      mojo.internal.StructField('arg_theme_color', 0, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeBackgroundColor_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeBackgroundColor_Params', [
      mojo.internal.StructField('arg_background_color', 0, 0, mojo.internal.bindings.skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_color_adjust', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec, 'blink.mojom.LocalFrameHost_DidFailLoadWithError_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_code', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec, 'blink.mojom.LocalFrameHost_DidFocusFrame_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec, 'blink.mojom.LocalFrameHost_DidCallFocus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec, 'blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_Params', [
      mojo.internal.StructField('arg_policy_bitmap', 0, 0, mojo.internal.bindings.blink.mojom.InsecureRequestPolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec, 'blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_Params', [
      mojo.internal.StructField('arg_set', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_Params', [
      mojo.internal.StructField('arg_disabler_type', 0, 0, mojo.internal.bindings.blink.mojom.SuddenTerminationDisablerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_present', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_Params', [
      mojo.internal.StructField('arg_has_gesture', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec, 'blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_Params', [
      mojo.internal.StructField('arg_rect_to_scroll', 0, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_params', 8, 0, mojo.internal.bindings.blink.mojom.ScrollIntoViewParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec, 'blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_Params', [
      mojo.internal.StructField('arg_direction', 0, 0, mojo.internal.bindings.blink.mojom.ScrollDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_granularity', 8, 0, mojo.internal.bindings.ui.mojom.ScrollGranularitySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec, 'blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec, 'blink.mojom.LocalFrameHost_DidBlockNavigation_Params', [
      mojo.internal.StructField('arg_blocked_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reason', 8, 0, mojo.internal.bindings.blink.mojom.NavigationBlockedReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeLoadProgress_Params', [
      mojo.internal.StructField('arg_load_progress', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec, 'blink.mojom.LocalFrameHost_DidFinishLoad_Params', [
      mojo.internal.StructField('arg_validated_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec, 'blink.mojom.LocalFrameHost_DispatchLoad_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec, 'blink.mojom.LocalFrameHost_GoToEntryAtOffset_Params', [
      mojo.internal.StructField('arg_actual_navigation_start', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_soft_navigation_heuristics_task_id', 8, 0, mojo.internal.bindings.blink.mojom.TaskAttributionIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_offset', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_user_gesture', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec, 'blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_Params', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_actual_navigation_start', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_soft_navigation_heuristics_task_id', 16, 0, mojo.internal.bindings.blink.mojom.TaskAttributionIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_has_user_gesture', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_Params', [
      mojo.internal.StructField('arg_present', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec, 'blink.mojom.LocalFrameHost_UpdateTitle_Params', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_title_direction', 8, 0, mojo.internal.bindings.mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec, 'blink.mojom.LocalFrameHost_UpdateApplicationTitle_Params', [
      mojo.internal.StructField('arg_application_title', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec, 'blink.mojom.LocalFrameHost_UpdateUserActivationState_Params', [
      mojo.internal.StructField('arg_update_type', 0, 0, mojo.internal.bindings.blink.mojom.UserActivationUpdateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_notification_type', 8, 0, mojo.internal.bindings.blink.mojom.UserActivationNotificationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec, 'blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec, 'blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.blink.mojom.FindInPageResultAXParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec, 'blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec, 'blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec, 'blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_Params', [
      mojo.internal.StructField('arg_timing', 0, 0, mojo.internal.bindings.blink.mojom.ResourceTimingInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec, 'blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec, 'blink.mojom.LocalFrameHost_RunModalAlertDialog_Params', [
      mojo.internal.StructField('arg_alert_message', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_disable_third_party_subframe_suppresion', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec, 'blink.mojom.LocalFrameHost_RunModalConfirmDialog_Params', [
      mojo.internal.StructField('arg_alert_message', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_disable_third_party_subframe_suppresion', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec, 'blink.mojom.LocalFrameHost_RunModalPromptDialog_Params', [
      mojo.internal.StructField('arg_alert_message', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_default_value', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_disable_third_party_subframe_suppresion', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec, 'blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_Params', [
      mojo.internal.StructField('arg_is_reload', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec, 'blink.mojom.LocalFrameHost_UpdateFaviconURL_Params', [
      mojo.internal.StructField('arg_favicon_urls', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.FaviconURLSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec, 'blink.mojom.LocalFrameHost_DownloadURL_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.blink.mojom.DownloadURLParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_FocusedElementChanged_Params', [
      mojo.internal.StructField('arg_bounds_in_frame_widget', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_focus_type', 8, 0, mojo.internal.bindings.blink.mojom.FocusTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_editable_element', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_richly_editable_element', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_TextSelectionChanged_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_range', 8, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec, 'blink.mojom.LocalFrameHost_ShowPopupMenu_Params', [
      mojo.internal.StructField('arg_popup_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.PopupMenuClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_bounds', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_font_size', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_menu_items', 24, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.MenuItemSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_selected_item', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_right_aligned', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_multiple_selection', 36, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec, 'blink.mojom.LocalFrameHost_CreateNewPopupWidget_Params', [
      mojo.internal.StructField('arg_popup_host', 0, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.blink.mojom.PopupWidgetHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_blink_widget_host', 8, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.blink.mojom.WidgetHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_blink_widget', 16, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.WidgetRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec, 'blink.mojom.LocalFrameHost_ShowContextMenu_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.ContextMenuClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_params', 8, 0, mojo.internal.bindings.blink.mojom.UntrustworthyContextMenuParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec, 'blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_http_method', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_destination', 24, 0, mojo.internal.bindings.network.mojom.RequestDestinationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_include_credentials', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_Params', [
      mojo.internal.StructField('arg_child_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_owner_properties', 8, 0, mojo.internal.bindings.blink.mojom.FrameOwnerPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeOpener_Params', [
      mojo.internal.StructField('arg_opener_frame', 0, 0, mojo.internal.bindings.blink.mojom.LocalFrameTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeFramePolicy_Params', [
      mojo.internal.StructField('arg_child_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_policy', 8, 0, mojo.internal.bindings.blink.mojom.FramePolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeIframeAttributes_Params', [
      mojo.internal.StructField('arg_child_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_attributes', 8, 0, mojo.internal.bindings.blink.mojom.IframeAttributesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec, 'blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_Params', [
      mojo.internal.StructField('arg_clip_rect', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_guid', 8, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec, 'blink.mojom.LocalFrameHost_SetCloseListener_Params', [
      mojo.internal.StructField('arg_listener', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.CloseListenerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_Detach_ParamsSpec, 'blink.mojom.LocalFrameHost_Detach_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec, 'blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_Params', [
      mojo.internal.StructField('arg_factory', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.KeepAliveHandleFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec, 'blink.mojom.LocalFrameHost_DidAddMessageToConsole_Params', [
      mojo.internal.StructField('arg_log_level', 0, 0, mojo.internal.bindings.blink.mojom.ConsoleMessageLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_msg', 8, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_id', 16, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_untrusted_stack_trace', 24, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_line_number', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_FrameSizeChanged_Params', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec, 'blink.mojom.LocalFrameHost_DidInferColorScheme_Params', [
      mojo.internal.StructField('arg_color_scheme', 0, 0, mojo.internal.bindings.blink.mojom.PreferredColorSchemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeSrcDoc_Params', [
      mojo.internal.StructField('arg_child_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_srcdoc_value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec, 'blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_Params', [
      mojo.internal.StructField('arg_delegated_capability', 0, 0, mojo.internal.bindings.blink.mojom.DelegatedCapabilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec, 'blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_Params', [
      mojo.internal.StructField('arg_event_data', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_event_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_destinations', 16, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.ReportingDestinationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_cross_origin_exposed', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec, 'blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_Params', [
      mojo.internal.StructField('arg_destination_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cross_origin_exposed', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ParamsSpec, 'blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ParamsSpec, 'blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_Params', [
      mojo.internal.StructField('arg_exempted_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec, 'blink.mojom.LocalFrameHost_SendLegacyTechEvent_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_code_location', 8, 0, mojo.internal.bindings.blink.mojom.LegacyTechEventCodeLocationSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec, 'blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_Params', [
      mojo.internal.StructField('arg_event_type', 0, 0, mojo.internal.bindings.blink.mojom.AutomaticBeaconTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_event_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_destinations', 16, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.ReportingDestinationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_once', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_cross_origin_exposed', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec, 'blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_Params', [
      mojo.internal.StructField('arg_event_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec, 'blink.mojom.LocalFrameHost_CreateFencedFrame_Params', [
      mojo.internal.StructField('arg_fenced_frame', 0, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.blink.mojom.FencedFrameOwnerHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_remote_frame_interfaces', 8, 0, mojo.internal.bindings.blink.mojom.RemoteFrameInterfacesFromRendererSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_token', 16, 0, mojo.internal.bindings.blink.mojom.RemoteFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_devtools_frame_token', 24, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_ForwardFencedFrameEventAndUserActivationToEmbedder_ParamsSpec, 'blink.mojom.LocalFrameHost_ForwardFencedFrameEventAndUserActivationToEmbedder_Params', [
      mojo.internal.StructField('arg_event_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_Params', [
      mojo.internal.StructField('arg_view_transition_opt_in', 0, 0, mojo.internal.bindings.blink.mojom.ViewTransitionSameOriginOptInSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_StartDragging_ParamsSpec, 'blink.mojom.LocalFrameHost_StartDragging_Params', [
      mojo.internal.StructField('arg_drag_data', 0, 0, mojo.internal.bindings.blink.mojom.DragDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_operations_allowed', 8, 0, mojo.internal.bindings.blink.mojom.AllowedDragOperationsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_image', 16, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_cursor_offset_in_dip', 24, 0, mojo.internal.bindings.gfx.mojom.Vector2dSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_drag_obj_rect_in_dip', 32, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_event_info', 40, 0, mojo.internal.bindings.blink.mojom.DragEventSourceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec, 'blink.mojom.LocalFrameHost_IssueKeepAliveHandle_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.NavigationStateKeepAliveHandleRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec, 'blink.mojom.LocalFrameHost_NotifyStorageAccessed_Params', [
      mojo.internal.StructField('arg_storageType', 0, 0, mojo.internal.bindings.blink.mojom.StorageTypeAccessedSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_blocked', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec, 'blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_Params', [
      mojo.internal.StructField('arg_target_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_access_type', 8, 0, mojo.internal.bindings.blink.mojom.WindowProxyAccessTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec, 'blink.mojom.LocalFrameHost_NotifyDocumentInteractive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_SetStorageAccessApiStatus_ParamsSpec, 'blink.mojom.LocalFrameHost_SetStorageAccessApiStatus_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ParamsSpec, 'blink.mojom.LocalFrameHost_InitializeCrashReportStorage_Params', [
      mojo.internal.StructField('arg_length', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ResponseParams', [
      mojo.internal.StructField('arg_region', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.LocalFrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.LocalFrameHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LocalFrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.LocalFrameHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.LocalFrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  enterFullscreen(arg_options) {
    return this.$.enterFullscreen(arg_options);
  }
  exitFullscreen() {
    return this.$.exitFullscreen();
  }
  fullscreenStateChanged(arg_is_fullscreen, arg_options) {
    return this.$.fullscreenStateChanged(arg_is_fullscreen, arg_options);
  }
  registerProtocolHandler(arg_scheme, arg_url, arg_user_gesture) {
    return this.$.registerProtocolHandler(arg_scheme, arg_url, arg_user_gesture);
  }
  unregisterProtocolHandler(arg_scheme, arg_url, arg_user_gesture) {
    return this.$.unregisterProtocolHandler(arg_scheme, arg_url, arg_user_gesture);
  }
  didDisplayInsecureContent() {
    return this.$.didDisplayInsecureContent();
  }
  didContainInsecureFormAction() {
    return this.$.didContainInsecureFormAction();
  }
  mainDocumentElementAvailable(arg_uses_temporary_zoom_level) {
    return this.$.mainDocumentElementAvailable(arg_uses_temporary_zoom_level);
  }
  setNeedsOcclusionTracking(arg_needs_tracking) {
    return this.$.setNeedsOcclusionTracking(arg_needs_tracking);
  }
  setVirtualKeyboardMode(arg_type) {
    return this.$.setVirtualKeyboardMode(arg_type);
  }
  visibilityChanged(arg_visibility) {
    return this.$.visibilityChanged(arg_visibility);
  }
  didChangeThemeColor(arg_theme_color) {
    return this.$.didChangeThemeColor(arg_theme_color);
  }
  didChangeBackgroundColor(arg_background_color, arg_color_adjust) {
    return this.$.didChangeBackgroundColor(arg_background_color, arg_color_adjust);
  }
  didFailLoadWithError(arg_url, arg_error_code) {
    return this.$.didFailLoadWithError(arg_url, arg_error_code);
  }
  didFocusFrame() {
    return this.$.didFocusFrame();
  }
  didCallFocus() {
    return this.$.didCallFocus();
  }
  enforceInsecureRequestPolicy(arg_policy_bitmap) {
    return this.$.enforceInsecureRequestPolicy(arg_policy_bitmap);
  }
  enforceInsecureNavigationsSet(arg_set) {
    return this.$.enforceInsecureNavigationsSet(arg_set);
  }
  suddenTerminationDisablerChanged(arg_present, arg_disabler_type) {
    return this.$.suddenTerminationDisablerChanged(arg_present, arg_disabler_type);
  }
  hadStickyUserActivationBeforeNavigationChanged(arg_has_gesture) {
    return this.$.hadStickyUserActivationBeforeNavigationChanged(arg_has_gesture);
  }
  scrollRectToVisibleInParentFrame(arg_rect_to_scroll, arg_params) {
    return this.$.scrollRectToVisibleInParentFrame(arg_rect_to_scroll, arg_params);
  }
  bubbleLogicalScrollInParentFrame(arg_direction, arg_granularity) {
    return this.$.bubbleLogicalScrollInParentFrame(arg_direction, arg_granularity);
  }
  startLoadingForAsyncNavigationApiCommit() {
    return this.$.startLoadingForAsyncNavigationApiCommit();
  }
  didBlockNavigation(arg_blocked_url, arg_reason) {
    return this.$.didBlockNavigation(arg_blocked_url, arg_reason);
  }
  didChangeLoadProgress(arg_load_progress) {
    return this.$.didChangeLoadProgress(arg_load_progress);
  }
  didFinishLoad(arg_validated_url) {
    return this.$.didFinishLoad(arg_validated_url);
  }
  dispatchLoad() {
    return this.$.dispatchLoad();
  }
  goToEntryAtOffset(arg_offset, arg_has_user_gesture, arg_actual_navigation_start, arg_soft_navigation_heuristics_task_id) {
    return this.$.goToEntryAtOffset(arg_offset, arg_has_user_gesture, arg_actual_navigation_start, arg_soft_navigation_heuristics_task_id);
  }
  navigateToNavigationApiKey(arg_key, arg_has_user_gesture, arg_actual_navigation_start, arg_soft_navigation_heuristics_task_id) {
    return this.$.navigateToNavigationApiKey(arg_key, arg_has_user_gesture, arg_actual_navigation_start, arg_soft_navigation_heuristics_task_id);
  }
  navigateEventHandlerPresenceChanged(arg_present) {
    return this.$.navigateEventHandlerPresenceChanged(arg_present);
  }
  updateTitle(arg_title, arg_title_direction) {
    return this.$.updateTitle(arg_title, arg_title_direction);
  }
  updateApplicationTitle(arg_application_title) {
    return this.$.updateApplicationTitle(arg_application_title);
  }
  updateUserActivationState(arg_update_type, arg_notification_type) {
    return this.$.updateUserActivationState(arg_update_type, arg_notification_type);
  }
  didConsumeHistoryUserActivation() {
    return this.$.didConsumeHistoryUserActivation();
  }
  handleAccessibilityFindInPageResult(arg_params) {
    return this.$.handleAccessibilityFindInPageResult(arg_params);
  }
  handleAccessibilityFindInPageTermination() {
    return this.$.handleAccessibilityFindInPageTermination();
  }
  documentOnLoadCompleted() {
    return this.$.documentOnLoadCompleted();
  }
  forwardResourceTimingToParent(arg_timing) {
    return this.$.forwardResourceTimingToParent(arg_timing);
  }
  didDispatchDOMContentLoadedEvent() {
    return this.$.didDispatchDOMContentLoadedEvent();
  }
  runModalAlertDialog(arg_alert_message, arg_disable_third_party_subframe_suppresion) {
    return this.$.runModalAlertDialog(arg_alert_message, arg_disable_third_party_subframe_suppresion);
  }
  runModalConfirmDialog(arg_alert_message, arg_disable_third_party_subframe_suppresion) {
    return this.$.runModalConfirmDialog(arg_alert_message, arg_disable_third_party_subframe_suppresion);
  }
  runModalPromptDialog(arg_alert_message, arg_default_value, arg_disable_third_party_subframe_suppresion) {
    return this.$.runModalPromptDialog(arg_alert_message, arg_default_value, arg_disable_third_party_subframe_suppresion);
  }
  runBeforeUnloadConfirm(arg_is_reload) {
    return this.$.runBeforeUnloadConfirm(arg_is_reload);
  }
  updateFaviconURL(arg_favicon_urls) {
    return this.$.updateFaviconURL(arg_favicon_urls);
  }
  downloadURL(arg_params) {
    return this.$.downloadURL(arg_params);
  }
  focusedElementChanged(arg_is_editable_element, arg_is_richly_editable_element, arg_bounds_in_frame_widget, arg_focus_type) {
    return this.$.focusedElementChanged(arg_is_editable_element, arg_is_richly_editable_element, arg_bounds_in_frame_widget, arg_focus_type);
  }
  textSelectionChanged(arg_text, arg_offset, arg_range) {
    return this.$.textSelectionChanged(arg_text, arg_offset, arg_range);
  }
  showPopupMenu(arg_popup_client, arg_bounds, arg_font_size, arg_selected_item, arg_menu_items, arg_right_aligned, arg_allow_multiple_selection) {
    return this.$.showPopupMenu(arg_popup_client, arg_bounds, arg_font_size, arg_selected_item, arg_menu_items, arg_right_aligned, arg_allow_multiple_selection);
  }
  createNewPopupWidget(arg_popup_host, arg_blink_widget_host, arg_blink_widget) {
    return this.$.createNewPopupWidget(arg_popup_host, arg_blink_widget_host, arg_blink_widget);
  }
  showContextMenu(arg_client, arg_params) {
    return this.$.showContextMenu(arg_client, arg_params);
  }
  didLoadResourceFromMemoryCache(arg_url, arg_http_method, arg_mime_type, arg_request_destination, arg_include_credentials) {
    return this.$.didLoadResourceFromMemoryCache(arg_url, arg_http_method, arg_mime_type, arg_request_destination, arg_include_credentials);
  }
  didChangeFrameOwnerProperties(arg_child_frame_token, arg_frame_owner_properties) {
    return this.$.didChangeFrameOwnerProperties(arg_child_frame_token, arg_frame_owner_properties);
  }
  didChangeOpener(arg_opener_frame) {
    return this.$.didChangeOpener(arg_opener_frame);
  }
  didChangeFramePolicy(arg_child_frame_token, arg_frame_policy) {
    return this.$.didChangeFramePolicy(arg_child_frame_token, arg_frame_policy);
  }
  didChangeIframeAttributes(arg_child_frame_token, arg_attributes) {
    return this.$.didChangeIframeAttributes(arg_child_frame_token, arg_attributes);
  }
  capturePaintPreviewOfSubframe(arg_clip_rect, arg_guid) {
    return this.$.capturePaintPreviewOfSubframe(arg_clip_rect, arg_guid);
  }
  setCloseListener(arg_listener) {
    return this.$.setCloseListener(arg_listener);
  }
  detach() {
    return this.$.detach();
  }
  getKeepAliveHandleFactory(arg_factory) {
    return this.$.getKeepAliveHandleFactory(arg_factory);
  }
  didAddMessageToConsole(arg_log_level, arg_msg, arg_line_number, arg_source_id, arg_untrusted_stack_trace) {
    return this.$.didAddMessageToConsole(arg_log_level, arg_msg, arg_line_number, arg_source_id, arg_untrusted_stack_trace);
  }
  frameSizeChanged(arg_size) {
    return this.$.frameSizeChanged(arg_size);
  }
  didInferColorScheme(arg_color_scheme) {
    return this.$.didInferColorScheme(arg_color_scheme);
  }
  didChangeSrcDoc(arg_child_frame_token, arg_srcdoc_value) {
    return this.$.didChangeSrcDoc(arg_child_frame_token, arg_srcdoc_value);
  }
  receivedDelegatedCapability(arg_delegated_capability) {
    return this.$.receivedDelegatedCapability(arg_delegated_capability);
  }
  sendFencedFrameReportingBeacon(arg_event_data, arg_event_type, arg_destinations, arg_cross_origin_exposed) {
    return this.$.sendFencedFrameReportingBeacon(arg_event_data, arg_event_type, arg_destinations, arg_cross_origin_exposed);
  }
  sendFencedFrameReportingBeaconToCustomURL(arg_destination_url, arg_cross_origin_exposed) {
    return this.$.sendFencedFrameReportingBeaconToCustomURL(arg_destination_url, arg_cross_origin_exposed);
  }
  disableUntrustedNetworkInFencedFrame() {
    return this.$.disableUntrustedNetworkInFencedFrame();
  }
  exemptUrlFromNetworkRevocationForTesting(arg_exempted_url) {
    return this.$.exemptUrlFromNetworkRevocationForTesting(arg_exempted_url);
  }
  sendLegacyTechEvent(arg_type, arg_code_location) {
    return this.$.sendLegacyTechEvent(arg_type, arg_code_location);
  }
  setFencedFrameAutomaticBeaconReportEventData(arg_event_type, arg_event_data, arg_destinations, arg_once, arg_cross_origin_exposed) {
    return this.$.setFencedFrameAutomaticBeaconReportEventData(arg_event_type, arg_event_data, arg_destinations, arg_once, arg_cross_origin_exposed);
  }
  sendPrivateAggregationRequestsForFencedFrameEvent(arg_event_type) {
    return this.$.sendPrivateAggregationRequestsForFencedFrameEvent(arg_event_type);
  }
  createFencedFrame(arg_fenced_frame, arg_remote_frame_interfaces, arg_frame_token, arg_devtools_frame_token) {
    return this.$.createFencedFrame(arg_fenced_frame, arg_remote_frame_interfaces, arg_frame_token, arg_devtools_frame_token);
  }
  forwardFencedFrameEventAndUserActivationToEmbedder(arg_event_type) {
    return this.$.forwardFencedFrameEventAndUserActivationToEmbedder(arg_event_type);
  }
  onViewTransitionOptInChanged(arg_view_transition_opt_in) {
    return this.$.onViewTransitionOptInChanged(arg_view_transition_opt_in);
  }
  startDragging(arg_drag_data, arg_operations_allowed, arg_image, arg_cursor_offset_in_dip, arg_drag_obj_rect_in_dip, arg_event_info) {
    return this.$.startDragging(arg_drag_data, arg_operations_allowed, arg_image, arg_cursor_offset_in_dip, arg_drag_obj_rect_in_dip, arg_event_info);
  }
  issueKeepAliveHandle(arg_receiver) {
    return this.$.issueKeepAliveHandle(arg_receiver);
  }
  notifyStorageAccessed(arg_storageType, arg_blocked) {
    return this.$.notifyStorageAccessed(arg_storageType, arg_blocked);
  }
  recordWindowProxyUsageMetrics(arg_target_frame_token, arg_access_type) {
    return this.$.recordWindowProxyUsageMetrics(arg_target_frame_token, arg_access_type);
  }
  notifyDocumentInteractive() {
    return this.$.notifyDocumentInteractive();
  }
  setStorageAccessApiStatus(arg_status) {
    return this.$.setStorageAccessApiStatus(arg_status);
  }
  initializeCrashReportStorage(arg_length) {
    return this.$.initializeCrashReportStorage(arg_length);
  }
};

mojo.internal.bindings.blink.mojom.LocalFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.LocalFrameHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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

  enterFullscreen(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParamsSpec,
      [arg_options],
      false);
  }

  exitFullscreen() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec,
      null,
      [],
      false);
  }

  fullscreenStateChanged(arg_is_fullscreen, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec,
      null,
      [arg_is_fullscreen, arg_options],
      false);
  }

  registerProtocolHandler(arg_scheme, arg_url, arg_user_gesture) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec,
      null,
      [arg_scheme, arg_url, arg_user_gesture],
      false);
  }

  unregisterProtocolHandler(arg_scheme, arg_url, arg_user_gesture) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec,
      null,
      [arg_scheme, arg_url, arg_user_gesture],
      false);
  }

  didDisplayInsecureContent() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec,
      null,
      [],
      false);
  }

  didContainInsecureFormAction() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec,
      null,
      [],
      false);
  }

  mainDocumentElementAvailable(arg_uses_temporary_zoom_level) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec,
      null,
      [arg_uses_temporary_zoom_level],
      false);
  }

  setNeedsOcclusionTracking(arg_needs_tracking) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec,
      null,
      [arg_needs_tracking],
      false);
  }

  setVirtualKeyboardMode(arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec,
      null,
      [arg_type],
      false);
  }

  visibilityChanged(arg_visibility) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec,
      null,
      [arg_visibility],
      false);
  }

  didChangeThemeColor(arg_theme_color) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeThemeColor_ParamsSpec,
      null,
      [arg_theme_color],
      false);
  }

  didChangeBackgroundColor(arg_background_color, arg_color_adjust) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeBackgroundColor_ParamsSpec,
      null,
      [arg_background_color, arg_color_adjust],
      false);
  }

  didFailLoadWithError(arg_url, arg_error_code) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec,
      null,
      [arg_url, arg_error_code],
      false);
  }

  didFocusFrame() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec,
      null,
      [],
      false);
  }

  didCallFocus() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec,
      null,
      [],
      false);
  }

  enforceInsecureRequestPolicy(arg_policy_bitmap) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec,
      null,
      [arg_policy_bitmap],
      false);
  }

  enforceInsecureNavigationsSet(arg_set) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec,
      null,
      [arg_set],
      false);
  }

  suddenTerminationDisablerChanged(arg_present, arg_disabler_type) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec,
      null,
      [arg_present, arg_disabler_type],
      false);
  }

  hadStickyUserActivationBeforeNavigationChanged(arg_has_gesture) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec,
      null,
      [arg_has_gesture],
      false);
  }

  scrollRectToVisibleInParentFrame(arg_rect_to_scroll, arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec,
      null,
      [arg_rect_to_scroll, arg_params],
      false);
  }

  bubbleLogicalScrollInParentFrame(arg_direction, arg_granularity) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec,
      null,
      [arg_direction, arg_granularity],
      false);
  }

  startLoadingForAsyncNavigationApiCommit() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec,
      null,
      [],
      false);
  }

  didBlockNavigation(arg_blocked_url, arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec,
      null,
      [arg_blocked_url, arg_reason],
      false);
  }

  didChangeLoadProgress(arg_load_progress) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec,
      null,
      [arg_load_progress],
      false);
  }

  didFinishLoad(arg_validated_url) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec,
      null,
      [arg_validated_url],
      false);
  }

  dispatchLoad() {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec,
      null,
      [],
      false);
  }

  goToEntryAtOffset(arg_offset, arg_has_user_gesture, arg_actual_navigation_start, arg_soft_navigation_heuristics_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec,
      null,
      [arg_offset, arg_has_user_gesture, arg_actual_navigation_start, arg_soft_navigation_heuristics_task_id],
      false);
  }

  navigateToNavigationApiKey(arg_key, arg_has_user_gesture, arg_actual_navigation_start, arg_soft_navigation_heuristics_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec,
      null,
      [arg_key, arg_has_user_gesture, arg_actual_navigation_start, arg_soft_navigation_heuristics_task_id],
      false);
  }

  navigateEventHandlerPresenceChanged(arg_present) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec,
      null,
      [arg_present],
      false);
  }

  updateTitle(arg_title, arg_title_direction) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec,
      null,
      [arg_title, arg_title_direction],
      false);
  }

  updateApplicationTitle(arg_application_title) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec,
      null,
      [arg_application_title],
      false);
  }

  updateUserActivationState(arg_update_type, arg_notification_type) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec,
      null,
      [arg_update_type, arg_notification_type],
      false);
  }

  didConsumeHistoryUserActivation() {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec,
      null,
      [],
      false);
  }

  handleAccessibilityFindInPageResult(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec,
      null,
      [arg_params],
      false);
  }

  handleAccessibilityFindInPageTermination() {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec,
      null,
      [],
      false);
  }

  documentOnLoadCompleted() {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec,
      null,
      [],
      false);
  }

  forwardResourceTimingToParent(arg_timing) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec,
      null,
      [arg_timing],
      false);
  }

  didDispatchDOMContentLoadedEvent() {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec,
      null,
      [],
      false);
  }

  runModalAlertDialog(arg_alert_message, arg_disable_third_party_subframe_suppresion) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParamsSpec,
      [arg_alert_message, arg_disable_third_party_subframe_suppresion],
      false);
  }

  runModalConfirmDialog(arg_alert_message, arg_disable_third_party_subframe_suppresion) {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParamsSpec,
      [arg_alert_message, arg_disable_third_party_subframe_suppresion],
      false);
  }

  runModalPromptDialog(arg_alert_message, arg_default_value, arg_disable_third_party_subframe_suppresion) {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParamsSpec,
      [arg_alert_message, arg_default_value, arg_disable_third_party_subframe_suppresion],
      false);
  }

  runBeforeUnloadConfirm(arg_is_reload) {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParamsSpec,
      [arg_is_reload],
      false);
  }

  updateFaviconURL(arg_favicon_urls) {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec,
      null,
      [arg_favicon_urls],
      false);
  }

  downloadURL(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec,
      null,
      [arg_params],
      false);
  }

  focusedElementChanged(arg_is_editable_element, arg_is_richly_editable_element, arg_bounds_in_frame_widget, arg_focus_type) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec,
      null,
      [arg_is_editable_element, arg_is_richly_editable_element, arg_bounds_in_frame_widget, arg_focus_type],
      false);
  }

  textSelectionChanged(arg_text, arg_offset, arg_range) {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec,
      null,
      [arg_text, arg_offset, arg_range],
      false);
  }

  showPopupMenu(arg_popup_client, arg_bounds, arg_font_size, arg_selected_item, arg_menu_items, arg_right_aligned, arg_allow_multiple_selection) {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec,
      null,
      [arg_popup_client, arg_bounds, arg_font_size, arg_selected_item, arg_menu_items, arg_right_aligned, arg_allow_multiple_selection],
      false);
  }

  createNewPopupWidget(arg_popup_host, arg_blink_widget_host, arg_blink_widget) {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec,
      null,
      [arg_popup_host, arg_blink_widget_host, arg_blink_widget],
      false);
  }

  showContextMenu(arg_client, arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec,
      null,
      [arg_client, arg_params],
      false);
  }

  didLoadResourceFromMemoryCache(arg_url, arg_http_method, arg_mime_type, arg_request_destination, arg_include_credentials) {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec,
      null,
      [arg_url, arg_http_method, arg_mime_type, arg_request_destination, arg_include_credentials],
      false);
  }

  didChangeFrameOwnerProperties(arg_child_frame_token, arg_frame_owner_properties) {
    return this.proxy.sendMessage(
      this.ordinals[51],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec,
      null,
      [arg_child_frame_token, arg_frame_owner_properties],
      false);
  }

  didChangeOpener(arg_opener_frame) {
    return this.proxy.sendMessage(
      this.ordinals[52],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec,
      null,
      [arg_opener_frame],
      false);
  }

  didChangeFramePolicy(arg_child_frame_token, arg_frame_policy) {
    return this.proxy.sendMessage(
      this.ordinals[53],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec,
      null,
      [arg_child_frame_token, arg_frame_policy],
      false);
  }

  didChangeIframeAttributes(arg_child_frame_token, arg_attributes) {
    return this.proxy.sendMessage(
      this.ordinals[54],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec,
      null,
      [arg_child_frame_token, arg_attributes],
      false);
  }

  capturePaintPreviewOfSubframe(arg_clip_rect, arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[55],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec,
      null,
      [arg_clip_rect, arg_guid],
      false);
  }

  setCloseListener(arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[56],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec,
      null,
      [arg_listener],
      false);
  }

  detach() {
    return this.proxy.sendMessage(
      this.ordinals[57],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_Detach_ParamsSpec,
      null,
      [],
      false);
  }

  getKeepAliveHandleFactory(arg_factory) {
    return this.proxy.sendMessage(
      this.ordinals[58],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec,
      null,
      [arg_factory],
      false);
  }

  didAddMessageToConsole(arg_log_level, arg_msg, arg_line_number, arg_source_id, arg_untrusted_stack_trace) {
    return this.proxy.sendMessage(
      this.ordinals[59],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec,
      null,
      [arg_log_level, arg_msg, arg_line_number, arg_source_id, arg_untrusted_stack_trace],
      false);
  }

  frameSizeChanged(arg_size) {
    return this.proxy.sendMessage(
      this.ordinals[60],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec,
      null,
      [arg_size],
      false);
  }

  didInferColorScheme(arg_color_scheme) {
    return this.proxy.sendMessage(
      this.ordinals[61],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec,
      null,
      [arg_color_scheme],
      false);
  }

  didChangeSrcDoc(arg_child_frame_token, arg_srcdoc_value) {
    return this.proxy.sendMessage(
      this.ordinals[62],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec,
      null,
      [arg_child_frame_token, arg_srcdoc_value],
      false);
  }

  receivedDelegatedCapability(arg_delegated_capability) {
    return this.proxy.sendMessage(
      this.ordinals[63],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec,
      null,
      [arg_delegated_capability],
      false);
  }

  sendFencedFrameReportingBeacon(arg_event_data, arg_event_type, arg_destinations, arg_cross_origin_exposed) {
    return this.proxy.sendMessage(
      this.ordinals[64],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec,
      null,
      [arg_event_data, arg_event_type, arg_destinations, arg_cross_origin_exposed],
      false);
  }

  sendFencedFrameReportingBeaconToCustomURL(arg_destination_url, arg_cross_origin_exposed) {
    return this.proxy.sendMessage(
      this.ordinals[65],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec,
      null,
      [arg_destination_url, arg_cross_origin_exposed],
      false);
  }

  disableUntrustedNetworkInFencedFrame() {
    return this.proxy.sendMessage(
      this.ordinals[66],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ResponseParamsSpec,
      [],
      false);
  }

  exemptUrlFromNetworkRevocationForTesting(arg_exempted_url) {
    return this.proxy.sendMessage(
      this.ordinals[67],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ResponseParamsSpec,
      [arg_exempted_url],
      false);
  }

  sendLegacyTechEvent(arg_type, arg_code_location) {
    return this.proxy.sendMessage(
      this.ordinals[68],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec,
      null,
      [arg_type, arg_code_location],
      false);
  }

  setFencedFrameAutomaticBeaconReportEventData(arg_event_type, arg_event_data, arg_destinations, arg_once, arg_cross_origin_exposed) {
    return this.proxy.sendMessage(
      this.ordinals[69],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec,
      null,
      [arg_event_type, arg_event_data, arg_destinations, arg_once, arg_cross_origin_exposed],
      false);
  }

  sendPrivateAggregationRequestsForFencedFrameEvent(arg_event_type) {
    return this.proxy.sendMessage(
      this.ordinals[70],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec,
      null,
      [arg_event_type],
      false);
  }

  createFencedFrame(arg_fenced_frame, arg_remote_frame_interfaces, arg_frame_token, arg_devtools_frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[71],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec,
      null,
      [arg_fenced_frame, arg_remote_frame_interfaces, arg_frame_token, arg_devtools_frame_token],
      false);
  }

  forwardFencedFrameEventAndUserActivationToEmbedder(arg_event_type) {
    return this.proxy.sendMessage(
      this.ordinals[72],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_ForwardFencedFrameEventAndUserActivationToEmbedder_ParamsSpec,
      null,
      [arg_event_type],
      false);
  }

  onViewTransitionOptInChanged(arg_view_transition_opt_in) {
    return this.proxy.sendMessage(
      this.ordinals[73],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec,
      null,
      [arg_view_transition_opt_in],
      false);
  }

  startDragging(arg_drag_data, arg_operations_allowed, arg_image, arg_cursor_offset_in_dip, arg_drag_obj_rect_in_dip, arg_event_info) {
    return this.proxy.sendMessage(
      this.ordinals[74],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_StartDragging_ParamsSpec,
      null,
      [arg_drag_data, arg_operations_allowed, arg_image, arg_cursor_offset_in_dip, arg_drag_obj_rect_in_dip, arg_event_info],
      false);
  }

  issueKeepAliveHandle(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[75],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  notifyStorageAccessed(arg_storageType, arg_blocked) {
    return this.proxy.sendMessage(
      this.ordinals[76],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec,
      null,
      [arg_storageType, arg_blocked],
      false);
  }

  recordWindowProxyUsageMetrics(arg_target_frame_token, arg_access_type) {
    return this.proxy.sendMessage(
      this.ordinals[77],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec,
      null,
      [arg_target_frame_token, arg_access_type],
      false);
  }

  notifyDocumentInteractive() {
    return this.proxy.sendMessage(
      this.ordinals[78],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec,
      null,
      [],
      false);
  }

  setStorageAccessApiStatus(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[79],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_SetStorageAccessApiStatus_ParamsSpec,
      null,
      [arg_status],
      false);
  }

  initializeCrashReportStorage(arg_length) {
    return this.proxy.sendMessage(
      this.ordinals[80],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ResponseParamsSpec,
      [arg_length],
      false);
  }

};

mojo.internal.bindings.blink.mojom.LocalFrameHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.LocalFrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LocalFrameHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.LocalFrameHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.LocalFrameHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: EnterFullscreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnterFullscreen (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ExitFullscreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExitFullscreen (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: FullscreenStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FullscreenStateChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RegisterProtocolHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterProtocolHandler (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: UnregisterProtocolHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UnregisterProtocolHandler (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: DidDisplayInsecureContent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidDisplayInsecureContent (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DidContainInsecureFormAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidContainInsecureFormAction (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: MainDocumentElementAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MainDocumentElementAvailable (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetNeedsOcclusionTracking
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNeedsOcclusionTracking (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetVirtualKeyboardMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVirtualKeyboardMode (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: VisibilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> VisibilityChanged (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: DidChangeThemeColor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeThemeColor_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidChangeThemeColor (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: DidChangeBackgroundColor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeBackgroundColor_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidChangeBackgroundColor (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: DidFailLoadWithError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidFailLoadWithError (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: DidFocusFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidFocusFrame (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: DidCallFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidCallFocus (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: EnforceInsecureRequestPolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnforceInsecureRequestPolicy (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: EnforceInsecureNavigationsSet
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnforceInsecureNavigationsSet (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: SuddenTerminationDisablerChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SuddenTerminationDisablerChanged (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: HadStickyUserActivationBeforeNavigationChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HadStickyUserActivationBeforeNavigationChanged (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: ScrollRectToVisibleInParentFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScrollRectToVisibleInParentFrame (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: BubbleLogicalScrollInParentFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BubbleLogicalScrollInParentFrame (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: StartLoadingForAsyncNavigationApiCommit
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartLoadingForAsyncNavigationApiCommit (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: DidBlockNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidBlockNavigation (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: DidChangeLoadProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidChangeLoadProgress (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: DidFinishLoad
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidFinishLoad (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: DispatchLoad
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchLoad (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: GoToEntryAtOffset
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GoToEntryAtOffset (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: NavigateToNavigationApiKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NavigateToNavigationApiKey (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: NavigateEventHandlerPresenceChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NavigateEventHandlerPresenceChanged (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: UpdateTitle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateTitle (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: UpdateApplicationTitle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateApplicationTitle (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: UpdateUserActivationState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateUserActivationState (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
           }
        }
        // Try Method 33: DidConsumeHistoryUserActivation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidConsumeHistoryUserActivation (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 33 failed:', e);
           }
        }
        // Try Method 34: HandleAccessibilityFindInPageResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleAccessibilityFindInPageResult (34)');
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 34 failed:', e);
           }
        }
        // Try Method 35: HandleAccessibilityFindInPageTermination
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleAccessibilityFindInPageTermination (35)');
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 35 failed:', e);
           }
        }
        // Try Method 36: DocumentOnLoadCompleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DocumentOnLoadCompleted (36)');
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 36 failed:', e);
           }
        }
        // Try Method 37: ForwardResourceTimingToParent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForwardResourceTimingToParent (37)');
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 37 failed:', e);
           }
        }
        // Try Method 38: DidDispatchDOMContentLoadedEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidDispatchDOMContentLoadedEvent (38)');
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 38 failed:', e);
           }
        }
        // Try Method 39: RunModalAlertDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunModalAlertDialog (39)');
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 39 failed:', e);
           }
        }
        // Try Method 40: RunModalConfirmDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunModalConfirmDialog (40)');
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 40 failed:', e);
           }
        }
        // Try Method 41: RunModalPromptDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunModalPromptDialog (41)');
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 41 failed:', e);
           }
        }
        // Try Method 42: RunBeforeUnloadConfirm
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunBeforeUnloadConfirm (42)');
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 42 failed:', e);
           }
        }
        // Try Method 43: UpdateFaviconURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateFaviconURL (43)');
             this.mapOrdinal(header.ordinal, 43);
             dispatchId = 43;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 43 failed:', e);
           }
        }
        // Try Method 44: DownloadURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DownloadURL (44)');
             this.mapOrdinal(header.ordinal, 44);
             dispatchId = 44;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 44 failed:', e);
           }
        }
        // Try Method 45: FocusedElementChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusedElementChanged (45)');
             this.mapOrdinal(header.ordinal, 45);
             dispatchId = 45;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 45 failed:', e);
           }
        }
        // Try Method 46: TextSelectionChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TextSelectionChanged (46)');
             this.mapOrdinal(header.ordinal, 46);
             dispatchId = 46;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 46 failed:', e);
           }
        }
        // Try Method 47: ShowPopupMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowPopupMenu (47)');
             this.mapOrdinal(header.ordinal, 47);
             dispatchId = 47;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 47 failed:', e);
           }
        }
        // Try Method 48: CreateNewPopupWidget
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateNewPopupWidget (48)');
             this.mapOrdinal(header.ordinal, 48);
             dispatchId = 48;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 48 failed:', e);
           }
        }
        // Try Method 49: ShowContextMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowContextMenu (49)');
             this.mapOrdinal(header.ordinal, 49);
             dispatchId = 49;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 49 failed:', e);
           }
        }
        // Try Method 50: DidLoadResourceFromMemoryCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidLoadResourceFromMemoryCache (50)');
             this.mapOrdinal(header.ordinal, 50);
             dispatchId = 50;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 50 failed:', e);
           }
        }
        // Try Method 51: DidChangeFrameOwnerProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidChangeFrameOwnerProperties (51)');
             this.mapOrdinal(header.ordinal, 51);
             dispatchId = 51;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 51 failed:', e);
           }
        }
        // Try Method 52: DidChangeOpener
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidChangeOpener (52)');
             this.mapOrdinal(header.ordinal, 52);
             dispatchId = 52;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 52 failed:', e);
           }
        }
        // Try Method 53: DidChangeFramePolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidChangeFramePolicy (53)');
             this.mapOrdinal(header.ordinal, 53);
             dispatchId = 53;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 53 failed:', e);
           }
        }
        // Try Method 54: DidChangeIframeAttributes
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidChangeIframeAttributes (54)');
             this.mapOrdinal(header.ordinal, 54);
             dispatchId = 54;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 54 failed:', e);
           }
        }
        // Try Method 55: CapturePaintPreviewOfSubframe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CapturePaintPreviewOfSubframe (55)');
             this.mapOrdinal(header.ordinal, 55);
             dispatchId = 55;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 55 failed:', e);
           }
        }
        // Try Method 56: SetCloseListener
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCloseListener (56)');
             this.mapOrdinal(header.ordinal, 56);
             dispatchId = 56;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 56 failed:', e);
           }
        }
        // Try Method 57: Detach
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_Detach_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Detach (57)');
             this.mapOrdinal(header.ordinal, 57);
             dispatchId = 57;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 57 failed:', e);
           }
        }
        // Try Method 58: GetKeepAliveHandleFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetKeepAliveHandleFactory (58)');
             this.mapOrdinal(header.ordinal, 58);
             dispatchId = 58;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 58 failed:', e);
           }
        }
        // Try Method 59: DidAddMessageToConsole
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidAddMessageToConsole (59)');
             this.mapOrdinal(header.ordinal, 59);
             dispatchId = 59;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 59 failed:', e);
           }
        }
        // Try Method 60: FrameSizeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FrameSizeChanged (60)');
             this.mapOrdinal(header.ordinal, 60);
             dispatchId = 60;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 60 failed:', e);
           }
        }
        // Try Method 61: DidInferColorScheme
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidInferColorScheme (61)');
             this.mapOrdinal(header.ordinal, 61);
             dispatchId = 61;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 61 failed:', e);
           }
        }
        // Try Method 62: DidChangeSrcDoc
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidChangeSrcDoc (62)');
             this.mapOrdinal(header.ordinal, 62);
             dispatchId = 62;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 62 failed:', e);
           }
        }
        // Try Method 63: ReceivedDelegatedCapability
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReceivedDelegatedCapability (63)');
             this.mapOrdinal(header.ordinal, 63);
             dispatchId = 63;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 63 failed:', e);
           }
        }
        // Try Method 64: SendFencedFrameReportingBeacon
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendFencedFrameReportingBeacon (64)');
             this.mapOrdinal(header.ordinal, 64);
             dispatchId = 64;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 64 failed:', e);
           }
        }
        // Try Method 65: SendFencedFrameReportingBeaconToCustomURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendFencedFrameReportingBeaconToCustomURL (65)');
             this.mapOrdinal(header.ordinal, 65);
             dispatchId = 65;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 65 failed:', e);
           }
        }
        // Try Method 66: DisableUntrustedNetworkInFencedFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableUntrustedNetworkInFencedFrame (66)');
             this.mapOrdinal(header.ordinal, 66);
             dispatchId = 66;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 66 failed:', e);
           }
        }
        // Try Method 67: ExemptUrlFromNetworkRevocationForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExemptUrlFromNetworkRevocationForTesting (67)');
             this.mapOrdinal(header.ordinal, 67);
             dispatchId = 67;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 67 failed:', e);
           }
        }
        // Try Method 68: SendLegacyTechEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendLegacyTechEvent (68)');
             this.mapOrdinal(header.ordinal, 68);
             dispatchId = 68;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 68 failed:', e);
           }
        }
        // Try Method 69: SetFencedFrameAutomaticBeaconReportEventData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFencedFrameAutomaticBeaconReportEventData (69)');
             this.mapOrdinal(header.ordinal, 69);
             dispatchId = 69;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 69 failed:', e);
           }
        }
        // Try Method 70: SendPrivateAggregationRequestsForFencedFrameEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendPrivateAggregationRequestsForFencedFrameEvent (70)');
             this.mapOrdinal(header.ordinal, 70);
             dispatchId = 70;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 70 failed:', e);
           }
        }
        // Try Method 71: CreateFencedFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateFencedFrame (71)');
             this.mapOrdinal(header.ordinal, 71);
             dispatchId = 71;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 71 failed:', e);
           }
        }
        // Try Method 72: ForwardFencedFrameEventAndUserActivationToEmbedder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ForwardFencedFrameEventAndUserActivationToEmbedder_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForwardFencedFrameEventAndUserActivationToEmbedder (72)');
             this.mapOrdinal(header.ordinal, 72);
             dispatchId = 72;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 72 failed:', e);
           }
        }
        // Try Method 73: OnViewTransitionOptInChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnViewTransitionOptInChanged (73)');
             this.mapOrdinal(header.ordinal, 73);
             dispatchId = 73;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 73 failed:', e);
           }
        }
        // Try Method 74: StartDragging
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_StartDragging_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDragging (74)');
             this.mapOrdinal(header.ordinal, 74);
             dispatchId = 74;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 74 failed:', e);
           }
        }
        // Try Method 75: IssueKeepAliveHandle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IssueKeepAliveHandle (75)');
             this.mapOrdinal(header.ordinal, 75);
             dispatchId = 75;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 75 failed:', e);
           }
        }
        // Try Method 76: NotifyStorageAccessed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyStorageAccessed (76)');
             this.mapOrdinal(header.ordinal, 76);
             dispatchId = 76;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 76 failed:', e);
           }
        }
        // Try Method 77: RecordWindowProxyUsageMetrics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordWindowProxyUsageMetrics (77)');
             this.mapOrdinal(header.ordinal, 77);
             dispatchId = 77;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 77 failed:', e);
           }
        }
        // Try Method 78: NotifyDocumentInteractive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyDocumentInteractive (78)');
             this.mapOrdinal(header.ordinal, 78);
             dispatchId = 78;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 78 failed:', e);
           }
        }
        // Try Method 79: SetStorageAccessApiStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SetStorageAccessApiStatus_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetStorageAccessApiStatus (79)');
             this.mapOrdinal(header.ordinal, 79);
             dispatchId = 79;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 79 failed:', e);
           }
        }
        // Try Method 80: InitializeCrashReportStorage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializeCrashReportStorage (80)');
             this.mapOrdinal(header.ordinal, 80);
             dispatchId = 80;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 80 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enterFullscreen');
          const result = this.impl.enterFullscreen(params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EnterFullscreen FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.exitFullscreen');
          const result = this.impl.exitFullscreen();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fullscreenStateChanged');
          const result = this.impl.fullscreenStateChanged(params.arg_is_fullscreen, params.arg_options);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerProtocolHandler');
          const result = this.impl.registerProtocolHandler(params.arg_scheme, params.arg_url, params.arg_user_gesture);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unregisterProtocolHandler');
          const result = this.impl.unregisterProtocolHandler(params.arg_scheme, params.arg_url, params.arg_user_gesture);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didDisplayInsecureContent');
          const result = this.impl.didDisplayInsecureContent();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didContainInsecureFormAction');
          const result = this.impl.didContainInsecureFormAction();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mainDocumentElementAvailable');
          const result = this.impl.mainDocumentElementAvailable(params.arg_uses_temporary_zoom_level);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNeedsOcclusionTracking');
          const result = this.impl.setNeedsOcclusionTracking(params.arg_needs_tracking);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVirtualKeyboardMode');
          const result = this.impl.setVirtualKeyboardMode(params.arg_type);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.visibilityChanged');
          const result = this.impl.visibilityChanged(params.arg_visibility);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeThemeColor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeThemeColor');
          const result = this.impl.didChangeThemeColor(params.arg_theme_color);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeBackgroundColor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeBackgroundColor');
          const result = this.impl.didChangeBackgroundColor(params.arg_background_color, params.arg_color_adjust);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didFailLoadWithError');
          const result = this.impl.didFailLoadWithError(params.arg_url, params.arg_error_code);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didFocusFrame');
          const result = this.impl.didFocusFrame();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didCallFocus');
          const result = this.impl.didCallFocus();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enforceInsecureRequestPolicy');
          const result = this.impl.enforceInsecureRequestPolicy(params.arg_policy_bitmap);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enforceInsecureNavigationsSet');
          const result = this.impl.enforceInsecureNavigationsSet(params.arg_set);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.suddenTerminationDisablerChanged');
          const result = this.impl.suddenTerminationDisablerChanged(params.arg_present, params.arg_disabler_type);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hadStickyUserActivationBeforeNavigationChanged');
          const result = this.impl.hadStickyUserActivationBeforeNavigationChanged(params.arg_has_gesture);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scrollRectToVisibleInParentFrame');
          const result = this.impl.scrollRectToVisibleInParentFrame(params.arg_rect_to_scroll, params.arg_params);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bubbleLogicalScrollInParentFrame');
          const result = this.impl.bubbleLogicalScrollInParentFrame(params.arg_direction, params.arg_granularity);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startLoadingForAsyncNavigationApiCommit');
          const result = this.impl.startLoadingForAsyncNavigationApiCommit();
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didBlockNavigation');
          const result = this.impl.didBlockNavigation(params.arg_blocked_url, params.arg_reason);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeLoadProgress');
          const result = this.impl.didChangeLoadProgress(params.arg_load_progress);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didFinishLoad');
          const result = this.impl.didFinishLoad(params.arg_validated_url);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchLoad');
          const result = this.impl.dispatchLoad();
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.goToEntryAtOffset');
          const result = this.impl.goToEntryAtOffset(params.arg_offset, params.arg_has_user_gesture, params.arg_actual_navigation_start, params.arg_soft_navigation_heuristics_task_id);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.navigateToNavigationApiKey');
          const result = this.impl.navigateToNavigationApiKey(params.arg_key, params.arg_has_user_gesture, params.arg_actual_navigation_start, params.arg_soft_navigation_heuristics_task_id);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.navigateEventHandlerPresenceChanged');
          const result = this.impl.navigateEventHandlerPresenceChanged(params.arg_present);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateTitle');
          const result = this.impl.updateTitle(params.arg_title, params.arg_title_direction);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateApplicationTitle');
          const result = this.impl.updateApplicationTitle(params.arg_application_title);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateUserActivationState');
          const result = this.impl.updateUserActivationState(params.arg_update_type, params.arg_notification_type);
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didConsumeHistoryUserActivation');
          const result = this.impl.didConsumeHistoryUserActivation();
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleAccessibilityFindInPageResult');
          const result = this.impl.handleAccessibilityFindInPageResult(params.arg_params);
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleAccessibilityFindInPageTermination');
          const result = this.impl.handleAccessibilityFindInPageTermination();
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.documentOnLoadCompleted');
          const result = this.impl.documentOnLoadCompleted();
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forwardResourceTimingToParent');
          const result = this.impl.forwardResourceTimingToParent(params.arg_timing);
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didDispatchDOMContentLoadedEvent');
          const result = this.impl.didDispatchDOMContentLoadedEvent();
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runModalAlertDialog');
          const result = this.impl.runModalAlertDialog(params.arg_alert_message, params.arg_disable_third_party_subframe_suppresion);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunModalAlertDialog FAILED:', e));
          }
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runModalConfirmDialog');
          const result = this.impl.runModalConfirmDialog(params.arg_alert_message, params.arg_disable_third_party_subframe_suppresion);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunModalConfirmDialog FAILED:', e));
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runModalPromptDialog');
          const result = this.impl.runModalPromptDialog(params.arg_alert_message, params.arg_default_value, params.arg_disable_third_party_subframe_suppresion);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunModalPromptDialog FAILED:', e));
          }
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBeforeUnloadConfirm');
          const result = this.impl.runBeforeUnloadConfirm(params.arg_is_reload);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunBeforeUnloadConfirm FAILED:', e));
          }
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateFaviconURL');
          const result = this.impl.updateFaviconURL(params.arg_favicon_urls);
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.downloadURL');
          const result = this.impl.downloadURL(params.arg_params);
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focusedElementChanged');
          const result = this.impl.focusedElementChanged(params.arg_is_editable_element, params.arg_is_richly_editable_element, params.arg_bounds_in_frame_widget, params.arg_focus_type);
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.textSelectionChanged');
          const result = this.impl.textSelectionChanged(params.arg_text, params.arg_offset, params.arg_range);
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showPopupMenu');
          const result = this.impl.showPopupMenu(params.arg_popup_client, params.arg_bounds, params.arg_font_size, params.arg_selected_item, params.arg_menu_items, params.arg_right_aligned, params.arg_allow_multiple_selection);
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createNewPopupWidget');
          const result = this.impl.createNewPopupWidget(params.arg_popup_host, params.arg_blink_widget_host, params.arg_blink_widget);
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showContextMenu');
          const result = this.impl.showContextMenu(params.arg_client, params.arg_params);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didLoadResourceFromMemoryCache');
          const result = this.impl.didLoadResourceFromMemoryCache(params.arg_url, params.arg_http_method, params.arg_mime_type, params.arg_request_destination, params.arg_include_credentials);
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeFrameOwnerProperties');
          const result = this.impl.didChangeFrameOwnerProperties(params.arg_child_frame_token, params.arg_frame_owner_properties);
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeOpener');
          const result = this.impl.didChangeOpener(params.arg_opener_frame);
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeFramePolicy');
          const result = this.impl.didChangeFramePolicy(params.arg_child_frame_token, params.arg_frame_policy);
          break;
        }
        case 54: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeIframeAttributes');
          const result = this.impl.didChangeIframeAttributes(params.arg_child_frame_token, params.arg_attributes);
          break;
        }
        case 55: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.capturePaintPreviewOfSubframe');
          const result = this.impl.capturePaintPreviewOfSubframe(params.arg_clip_rect, params.arg_guid);
          break;
        }
        case 56: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCloseListener');
          const result = this.impl.setCloseListener(params.arg_listener);
          break;
        }
        case 57: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_Detach_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.detach');
          const result = this.impl.detach();
          break;
        }
        case 58: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getKeepAliveHandleFactory');
          const result = this.impl.getKeepAliveHandleFactory(params.arg_factory);
          break;
        }
        case 59: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didAddMessageToConsole');
          const result = this.impl.didAddMessageToConsole(params.arg_log_level, params.arg_msg, params.arg_line_number, params.arg_source_id, params.arg_untrusted_stack_trace);
          break;
        }
        case 60: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.frameSizeChanged');
          const result = this.impl.frameSizeChanged(params.arg_size);
          break;
        }
        case 61: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didInferColorScheme');
          const result = this.impl.didInferColorScheme(params.arg_color_scheme);
          break;
        }
        case 62: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeSrcDoc');
          const result = this.impl.didChangeSrcDoc(params.arg_child_frame_token, params.arg_srcdoc_value);
          break;
        }
        case 63: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.receivedDelegatedCapability');
          const result = this.impl.receivedDelegatedCapability(params.arg_delegated_capability);
          break;
        }
        case 64: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendFencedFrameReportingBeacon');
          const result = this.impl.sendFencedFrameReportingBeacon(params.arg_event_data, params.arg_event_type, params.arg_destinations, params.arg_cross_origin_exposed);
          break;
        }
        case 65: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendFencedFrameReportingBeaconToCustomURL');
          const result = this.impl.sendFencedFrameReportingBeaconToCustomURL(params.arg_destination_url, params.arg_cross_origin_exposed);
          break;
        }
        case 66: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disableUntrustedNetworkInFencedFrame');
          const result = this.impl.disableUntrustedNetworkInFencedFrame();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrameHost_DisableUntrustedNetworkInFencedFrame_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DisableUntrustedNetworkInFencedFrame FAILED:', e));
          }
          break;
        }
        case 67: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.exemptUrlFromNetworkRevocationForTesting');
          const result = this.impl.exemptUrlFromNetworkRevocationForTesting(params.arg_exempted_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrameHost_ExemptUrlFromNetworkRevocationForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ExemptUrlFromNetworkRevocationForTesting FAILED:', e));
          }
          break;
        }
        case 68: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendLegacyTechEvent');
          const result = this.impl.sendLegacyTechEvent(params.arg_type, params.arg_code_location);
          break;
        }
        case 69: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFencedFrameAutomaticBeaconReportEventData');
          const result = this.impl.setFencedFrameAutomaticBeaconReportEventData(params.arg_event_type, params.arg_event_data, params.arg_destinations, params.arg_once, params.arg_cross_origin_exposed);
          break;
        }
        case 70: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendPrivateAggregationRequestsForFencedFrameEvent');
          const result = this.impl.sendPrivateAggregationRequestsForFencedFrameEvent(params.arg_event_type);
          break;
        }
        case 71: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createFencedFrame');
          const result = this.impl.createFencedFrame(params.arg_fenced_frame, params.arg_remote_frame_interfaces, params.arg_frame_token, params.arg_devtools_frame_token);
          break;
        }
        case 72: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ForwardFencedFrameEventAndUserActivationToEmbedder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forwardFencedFrameEventAndUserActivationToEmbedder');
          const result = this.impl.forwardFencedFrameEventAndUserActivationToEmbedder(params.arg_event_type);
          break;
        }
        case 73: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onViewTransitionOptInChanged');
          const result = this.impl.onViewTransitionOptInChanged(params.arg_view_transition_opt_in);
          break;
        }
        case 74: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_StartDragging_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startDragging');
          const result = this.impl.startDragging(params.arg_drag_data, params.arg_operations_allowed, params.arg_image, params.arg_cursor_offset_in_dip, params.arg_drag_obj_rect_in_dip, params.arg_event_info);
          break;
        }
        case 75: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.issueKeepAliveHandle');
          const result = this.impl.issueKeepAliveHandle(params.arg_receiver);
          break;
        }
        case 76: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyStorageAccessed');
          const result = this.impl.notifyStorageAccessed(params.arg_storageType, params.arg_blocked);
          break;
        }
        case 77: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordWindowProxyUsageMetrics');
          const result = this.impl.recordWindowProxyUsageMetrics(params.arg_target_frame_token, params.arg_access_type);
          break;
        }
        case 78: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyDocumentInteractive');
          const result = this.impl.notifyDocumentInteractive();
          break;
        }
        case 79: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SetStorageAccessApiStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setStorageAccessApiStatus');
          const result = this.impl.setStorageAccessApiStatus(params.arg_status);
          break;
        }
        case 80: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initializeCrashReportStorage');
          const result = this.impl.initializeCrashReportStorage(params.arg_length);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportStorage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InitializeCrashReportStorage FAILED:', e));
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

mojo.internal.bindings.blink.mojom.LocalFrameHostReceiver = mojo.internal.bindings.blink.mojom.LocalFrameHostReceiver;

mojo.internal.bindings.blink.mojom.LocalFrameHostPtr = mojo.internal.bindings.blink.mojom.LocalFrameHostRemote;
mojo.internal.bindings.blink.mojom.LocalFrameHostRequest = mojo.internal.bindings.blink.mojom.LocalFrameHostPendingReceiver;


// Interface: NonAssociatedLocalFrameHost
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec, 'blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_Params', [
      mojo.internal.StructField('arg_urls', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.NonAssociatedLocalFrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  maybeStartOutermostMainFrameNavigation(arg_urls) {
    return this.$.maybeStartOutermostMainFrameNavigation(arg_urls);
  }
};

mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.NonAssociatedLocalFrameHost', [
      { explicit: null },
    ]);
  }

  maybeStartOutermostMainFrameNavigation(arg_urls) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec,
      null,
      [arg_urls],
      false);
  }

};

mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.NonAssociatedLocalFrameHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.NonAssociatedLocalFrameHost', [
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
        
        // Try Method 0: MaybeStartOutermostMainFrameNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MaybeStartOutermostMainFrameNavigation (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.maybeStartOutermostMainFrameNavigation');
          const result = this.impl.maybeStartOutermostMainFrameNavigation(params.arg_urls);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostReceiver = mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostReceiver;

mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostPtr = mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostRemote;
mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostRequest = mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostPendingReceiver;


// Interface: LocalFrame
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec, 'blink.mojom.LocalFrame_GetTextSurroundingSelection_Params', [
      mojo.internal.StructField('arg_max_length', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParams', [
      mojo.internal.StructField('arg_content', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_start_offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end_offset', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec, 'blink.mojom.LocalFrame_SendInterventionReport_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_child_frame_token', 16, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec, 'blink.mojom.LocalFrame_SetFrameOwnerProperties_Params', [
      mojo.internal.StructField('arg_properties', 0, 0, mojo.internal.bindings.blink.mojom.FrameOwnerPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec, 'blink.mojom.LocalFrame_NotifyUserActivation_Params', [
      mojo.internal.StructField('arg_notification_type', 0, 0, mojo.internal.bindings.blink.mojom.UserActivationNotificationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec, 'blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_Params', [
      mojo.internal.StructField('arg_keyboard_rect', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec, 'blink.mojom.LocalFrame_ShowInterestInElement_Params', [
      mojo.internal.StructField('arg_nodeID', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec, 'blink.mojom.LocalFrame_AddMessageToConsole_Params', [
      mojo.internal.StructField('arg_level', 0, 0, mojo.internal.bindings.blink.mojom.ConsoleMessageLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_discard_duplicates', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec, 'blink.mojom.LocalFrame_SwapInImmediately_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_CheckCompleted_ParamsSpec, 'blink.mojom.LocalFrame_CheckCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_StopLoading_ParamsSpec, 'blink.mojom.LocalFrame_StopLoading_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_Collapse_ParamsSpec, 'blink.mojom.LocalFrame_Collapse_Params', [
      mojo.internal.StructField('arg_collapsed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec, 'blink.mojom.LocalFrame_EnableViewSourceMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_Focus_ParamsSpec, 'blink.mojom.LocalFrame_Focus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec, 'blink.mojom.LocalFrame_ClearFocusedElement_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_CopyImageAt_ParamsSpec, 'blink.mojom.LocalFrame_CopyImageAt_Params', [
      mojo.internal.StructField('arg_window_point', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_SaveImageAt_ParamsSpec, 'blink.mojom.LocalFrame_SaveImageAt_Params', [
      mojo.internal.StructField('arg_window_point', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec, 'blink.mojom.LocalFrame_ReportBlinkFeatureUsage_Params', [
      mojo.internal.StructField('arg_features', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.WebFeatureSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec, 'blink.mojom.LocalFrame_RenderFallbackContent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ParamsSpec, 'blink.mojom.LocalFrame_BeforeUnload_Params', [
      mojo.internal.StructField('arg_is_reload', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ResponseParamsSpec, 'blink.mojom.LocalFrame_BeforeUnload_ResponseParams', [
      mojo.internal.StructField('arg_before_unload_start_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_before_unload_end_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_proceed', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec, 'blink.mojom.LocalFrame_MediaPlayerActionAt_Params', [
      mojo.internal.StructField('arg_location', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_action', 8, 0, mojo.internal.bindings.blink.mojom.MediaPlayerActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec, 'blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_Params', [
      mojo.internal.StructField('arg_location', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_area', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParamsSpec, 'blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParams', [
      mojo.internal.StructField('arg_bitmap', 0, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_bounds', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_PluginActionAt_ParamsSpec, 'blink.mojom.LocalFrame_PluginActionAt_Params', [
      mojo.internal.StructField('arg_location', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_action', 8, 0, mojo.internal.bindings.blink.mojom.PluginActionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec, 'blink.mojom.LocalFrame_AdvanceFocusInFrame_Params', [
      mojo.internal.StructField('arg_focus_type', 0, 0, mojo.internal.bindings.blink.mojom.FocusTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_frame_token', 8, 0, mojo.internal.bindings.blink.mojom.RemoteFrameTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec, 'blink.mojom.LocalFrame_AdvanceFocusForIME_Params', [
      mojo.internal.StructField('arg_focus_type', 0, 0, mojo.internal.bindings.blink.mojom.FocusTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec, 'blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_Params', [
      mojo.internal.StructField('arg_violation', 0, 0, mojo.internal.bindings.network.mojom.CSPViolationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec, 'blink.mojom.LocalFrame_DidUpdateFramePolicy_Params', [
      mojo.internal.StructField('arg_frame_policy', 0, 0, mojo.internal.bindings.blink.mojom.FramePolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec, 'blink.mojom.LocalFrame_OnFrameVisibilityChanged_Params', [
      mojo.internal.StructField('arg_visibility', 0, 0, mojo.internal.bindings.blink.mojom.FrameVisibilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec, 'blink.mojom.LocalFrame_PostMessageEvent_Params', [
      mojo.internal.StructField('arg_source_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.RemoteFrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_source_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_target_origin', 16, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_message', 24, 0, mojo.internal.bindings.blink.mojom.TransferableMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec, 'blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_Params', [
      mojo.internal.StructField('arg_object_name', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_method_name', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_arguments', 16, 0, mojo.internal.bindings.mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_wants_result', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParamsSpec, 'blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequest_Params', [
      mojo.internal.StructField('arg_javascript', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_wants_result', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_Params', [
      mojo.internal.StructField('arg_javascript', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_world_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_user_gesture', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_resolve_promises', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_honor_js_content_settings', 12, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParams', [
      mojo.internal.StructField('arg_result_type', 0, 0, mojo.internal.bindings.blink.mojom.JavaScriptExecutionResultTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.bindings.mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_Params', [
      mojo.internal.StructField('arg_javascript', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_world_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_wants_result', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetCharacterIndexAtPoint_ParamsSpec, 'blink.mojom.LocalFrame_GetCharacterIndexAtPoint_Params', [
      mojo.internal.StructField('arg_location', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetFirstRectForRange_ParamsSpec, 'blink.mojom.LocalFrame_GetFirstRectForRange_Params', [
      mojo.internal.StructField('arg_range', 0, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetStringForRange_ParamsSpec, 'blink.mojom.LocalFrame_GetStringForRange_Params', [
      mojo.internal.StructField('arg_range', 0, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetStringForRange_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetStringForRange_ResponseParams', [
      mojo.internal.StructField('arg_string', 0, 0, mojo.internal.bindings.ui.mojom.AttributedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_baseline_point', 8, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec, 'blink.mojom.LocalFrame_BindReportingObserver_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.ReportingObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_UpdateOpener_ParamsSpec, 'blink.mojom.LocalFrame_UpdateOpener_Params', [
      mojo.internal.StructField('arg_opener_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec, 'blink.mojom.LocalFrame_GetSavableResourceLinks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParams', [
      mojo.internal.StructField('arg_reply', 0, 0, mojo.internal.bindings.blink.mojom.GetSavableResourceLinksReplySpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_MixedContentFound_ParamsSpec, 'blink.mojom.LocalFrame_MixedContentFound_Params', [
      mojo.internal.StructField('arg_main_resource_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mixed_content_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_context', 16, 0, mojo.internal.bindings.blink.mojom.RequestContextTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_url_before_redirects', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_location', 32, 0, mojo.internal.bindings.network.mojom.SourceLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_was_allowed', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_had_redirect', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec, 'blink.mojom.LocalFrame_BindDevToolsAgent_Params', [
      mojo.internal.StructField('arg_agent_host', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.DevToolsAgentHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_agent', 8, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.blink.mojom.DevToolsAgentRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_ExtractSmartClipData_ParamsSpec, 'blink.mojom.LocalFrame_ExtractSmartClipData_Params', [
      mojo.internal.StructField('arg_rect', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_ExtractSmartClipData_ResponseParamsSpec, 'blink.mojom.LocalFrame_ExtractSmartClipData_ResponseParams', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_html', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_clip_rect', 16, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec, 'blink.mojom.LocalFrame_HandleRendererDebugURL_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec, 'blink.mojom.LocalFrame_GetCanonicalUrlForSharing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParams', [
      mojo.internal.StructField('arg_canonical_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec, 'blink.mojom.LocalFrame_GetOpenGraphMetadata_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParams', [
      mojo.internal.StructField('arg_metadata', 0, 0, mojo.internal.bindings.blink.mojom.OpenGraphMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec, 'blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_Params', [
      mojo.internal.StructField('arg_entry_arrays', 0, 0, mojo.internal.bindings.blink.mojom.NavigationApiHistoryEntryArraysSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_restore_reason', 8, 0, mojo.internal.bindings.blink.mojom.NavigationApiEntryRestoreReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec, 'blink.mojom.LocalFrame_UpdatePrerenderURL_Params', [
      mojo.internal.StructField('arg_matched_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParamsSpec, 'blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec, 'blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_Params', [
      mojo.internal.StructField('arg_keys', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec, 'blink.mojom.LocalFrame_TraverseCancelled_Params', [
      mojo.internal.StructField('arg_navigation_api_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_reason', 8, 0, mojo.internal.bindings.blink.mojom.TraverseCancelledReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec, 'blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_page_state', 8, 0, mojo.internal.bindings.mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_browser_initiated', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec, 'blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_Params', [
      mojo.internal.StructField('arg_transition_token', 0, 0, mojo.internal.bindings.blink.mojom.ViewTransitionTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_page_swap_event_params', 8, 0, mojo.internal.bindings.blink.mojom.PageSwapEventParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParamsSpec, 'blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParams', [
      mojo.internal.StructField('arg_view_transition_state', 0, 0, mojo.internal.bindings.blink.mojom.ViewTransitionStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec, 'blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec, 'blink.mojom.LocalFrame_DispatchPageSwap_Params', [
      mojo.internal.StructField('arg_page_swap_event_params', 0, 0, mojo.internal.bindings.blink.mojom.PageSwapEventParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec, 'blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_Params', [
      mojo.internal.StructField('arg_subframe_token', 0, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_initial_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_start_time', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_redirect_time', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_start', 32, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_response_start', 40, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_load_timing_info', 56, 0, mojo.internal.bindings.network.mojom.LoadTimingInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_connection_info', 64, 0, mojo.internal.bindings.network.mojom.ConnectionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_alpn_negotiated_protocol', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_normalized_server_timing', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_completion_status', 88, 0, mojo.internal.bindings.network.mojom.URLLoaderCompletionStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_response_code', 96, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_secure_transport', 100, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_validated', 100, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 112]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec, 'blink.mojom.LocalFrame_GetScrollPosition_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetScrollPosition_ResponseParams', [
      mojo.internal.StructField('arg_scroll_position', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_PerformSpellCheck_ParamsSpec, 'blink.mojom.LocalFrame_PerformSpellCheck_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.blink.mojom.LocalFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.LocalFrameRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LocalFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.LocalFramePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.LocalFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getTextSurroundingSelection(arg_max_length) {
    return this.$.getTextSurroundingSelection(arg_max_length);
  }
  sendInterventionReport(arg_id, arg_message, arg_child_frame_token) {
    return this.$.sendInterventionReport(arg_id, arg_message, arg_child_frame_token);
  }
  setFrameOwnerProperties(arg_properties) {
    return this.$.setFrameOwnerProperties(arg_properties);
  }
  notifyUserActivation(arg_notification_type) {
    return this.$.notifyUserActivation(arg_notification_type);
  }
  notifyVirtualKeyboardOverlayRect(arg_keyboard_rect) {
    return this.$.notifyVirtualKeyboardOverlayRect(arg_keyboard_rect);
  }
  showInterestInElement(arg_nodeID) {
    return this.$.showInterestInElement(arg_nodeID);
  }
  addMessageToConsole(arg_level, arg_message, arg_discard_duplicates) {
    return this.$.addMessageToConsole(arg_level, arg_message, arg_discard_duplicates);
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
  collapse(arg_collapsed) {
    return this.$.collapse(arg_collapsed);
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
  copyImageAt(arg_window_point) {
    return this.$.copyImageAt(arg_window_point);
  }
  saveImageAt(arg_window_point) {
    return this.$.saveImageAt(arg_window_point);
  }
  reportBlinkFeatureUsage(arg_features) {
    return this.$.reportBlinkFeatureUsage(arg_features);
  }
  renderFallbackContent() {
    return this.$.renderFallbackContent();
  }
  beforeUnload(arg_is_reload) {
    return this.$.beforeUnload(arg_is_reload);
  }
  mediaPlayerActionAt(arg_location, arg_action) {
    return this.$.mediaPlayerActionAt(arg_location, arg_action);
  }
  requestVideoFrameAtWithBoundsHint(arg_location, arg_max_size, arg_max_area) {
    return this.$.requestVideoFrameAtWithBoundsHint(arg_location, arg_max_size, arg_max_area);
  }
  pluginActionAt(arg_location, arg_action) {
    return this.$.pluginActionAt(arg_location, arg_action);
  }
  advanceFocusInFrame(arg_focus_type, arg_source_frame_token) {
    return this.$.advanceFocusInFrame(arg_focus_type, arg_source_frame_token);
  }
  advanceFocusForIME(arg_focus_type) {
    return this.$.advanceFocusForIME(arg_focus_type);
  }
  reportContentSecurityPolicyViolation(arg_violation) {
    return this.$.reportContentSecurityPolicyViolation(arg_violation);
  }
  didUpdateFramePolicy(arg_frame_policy) {
    return this.$.didUpdateFramePolicy(arg_frame_policy);
  }
  onFrameVisibilityChanged(arg_visibility) {
    return this.$.onFrameVisibilityChanged(arg_visibility);
  }
  postMessageEvent(arg_source_frame_token, arg_source_origin, arg_target_origin, arg_message) {
    return this.$.postMessageEvent(arg_source_frame_token, arg_source_origin, arg_target_origin, arg_message);
  }
  javaScriptMethodExecuteRequest(arg_object_name, arg_method_name, arg_arguments, arg_wants_result) {
    return this.$.javaScriptMethodExecuteRequest(arg_object_name, arg_method_name, arg_arguments, arg_wants_result);
  }
  javaScriptExecuteRequest(arg_javascript, arg_wants_result) {
    return this.$.javaScriptExecuteRequest(arg_javascript, arg_wants_result);
  }
  javaScriptExecuteRequestForTests(arg_javascript, arg_has_user_gesture, arg_resolve_promises, arg_honor_js_content_settings, arg_world_id) {
    return this.$.javaScriptExecuteRequestForTests(arg_javascript, arg_has_user_gesture, arg_resolve_promises, arg_honor_js_content_settings, arg_world_id);
  }
  javaScriptExecuteRequestInIsolatedWorld(arg_javascript, arg_wants_result, arg_world_id) {
    return this.$.javaScriptExecuteRequestInIsolatedWorld(arg_javascript, arg_wants_result, arg_world_id);
  }
  getCharacterIndexAtPoint(arg_location) {
    return this.$.getCharacterIndexAtPoint(arg_location);
  }
  getFirstRectForRange(arg_range) {
    return this.$.getFirstRectForRange(arg_range);
  }
  getStringForRange(arg_range) {
    return this.$.getStringForRange(arg_range);
  }
  bindReportingObserver(arg_receiver) {
    return this.$.bindReportingObserver(arg_receiver);
  }
  updateOpener(arg_opener_frame_token) {
    return this.$.updateOpener(arg_opener_frame_token);
  }
  getSavableResourceLinks() {
    return this.$.getSavableResourceLinks();
  }
  mixedContentFound(arg_main_resource_url, arg_mixed_content_url, arg_request_context, arg_was_allowed, arg_url_before_redirects, arg_had_redirect, arg_source_location) {
    return this.$.mixedContentFound(arg_main_resource_url, arg_mixed_content_url, arg_request_context, arg_was_allowed, arg_url_before_redirects, arg_had_redirect, arg_source_location);
  }
  bindDevToolsAgent(arg_agent_host, arg_agent) {
    return this.$.bindDevToolsAgent(arg_agent_host, arg_agent);
  }
  extractSmartClipData(arg_rect) {
    return this.$.extractSmartClipData(arg_rect);
  }
  handleRendererDebugURL(arg_url) {
    return this.$.handleRendererDebugURL(arg_url);
  }
  getCanonicalUrlForSharing() {
    return this.$.getCanonicalUrlForSharing();
  }
  getOpenGraphMetadata() {
    return this.$.getOpenGraphMetadata();
  }
  setNavigationApiHistoryEntriesForRestore(arg_entry_arrays, arg_restore_reason) {
    return this.$.setNavigationApiHistoryEntriesForRestore(arg_entry_arrays, arg_restore_reason);
  }
  updatePrerenderURL(arg_matched_url) {
    return this.$.updatePrerenderURL(arg_matched_url);
  }
  notifyNavigationApiOfDisposedEntries(arg_keys) {
    return this.$.notifyNavigationApiOfDisposedEntries(arg_keys);
  }
  traverseCancelled(arg_navigation_api_key, arg_reason) {
    return this.$.traverseCancelled(arg_navigation_api_key, arg_reason);
  }
  dispatchNavigateEventForCrossDocumentTraversal(arg_url, arg_page_state, arg_is_browser_initiated) {
    return this.$.dispatchNavigateEventForCrossDocumentTraversal(arg_url, arg_page_state, arg_is_browser_initiated);
  }
  snapshotDocumentForViewTransition(arg_transition_token, arg_page_swap_event_params) {
    return this.$.snapshotDocumentForViewTransition(arg_transition_token, arg_page_swap_event_params);
  }
  notifyViewTransitionAbortedToOldDocument() {
    return this.$.notifyViewTransitionAbortedToOldDocument();
  }
  dispatchPageSwap(arg_page_swap_event_params) {
    return this.$.dispatchPageSwap(arg_page_swap_event_params);
  }
  addResourceTimingEntryForFailedSubframeNavigation(arg_subframe_token, arg_initial_url, arg_start_time, arg_redirect_time, arg_request_start, arg_response_start, arg_response_code, arg_mime_type, arg_load_timing_info, arg_connection_info, arg_alpn_negotiated_protocol, arg_is_secure_transport, arg_is_validated, arg_normalized_server_timing, arg_completion_status) {
    return this.$.addResourceTimingEntryForFailedSubframeNavigation(arg_subframe_token, arg_initial_url, arg_start_time, arg_redirect_time, arg_request_start, arg_response_start, arg_response_code, arg_mime_type, arg_load_timing_info, arg_connection_info, arg_alpn_negotiated_protocol, arg_is_secure_transport, arg_is_validated, arg_normalized_server_timing, arg_completion_status);
  }
  getScrollPosition() {
    return this.$.getScrollPosition();
  }
  performSpellCheck() {
    return this.$.performSpellCheck();
  }
};

mojo.internal.bindings.blink.mojom.LocalFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.LocalFrame', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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

  getTextSurroundingSelection(arg_max_length) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParamsSpec,
      [arg_max_length],
      false);
  }

  sendInterventionReport(arg_id, arg_message, arg_child_frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec,
      null,
      [arg_id, arg_message, arg_child_frame_token],
      false);
  }

  setFrameOwnerProperties(arg_properties) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec,
      null,
      [arg_properties],
      false);
  }

  notifyUserActivation(arg_notification_type) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec,
      null,
      [arg_notification_type],
      false);
  }

  notifyVirtualKeyboardOverlayRect(arg_keyboard_rect) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec,
      null,
      [arg_keyboard_rect],
      false);
  }

  showInterestInElement(arg_nodeID) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec,
      null,
      [arg_nodeID],
      false);
  }

  addMessageToConsole(arg_level, arg_message, arg_discard_duplicates) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec,
      null,
      [arg_level, arg_message, arg_discard_duplicates],
      false);
  }

  swapInImmediately() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec,
      null,
      [],
      false);
  }

  checkCompleted() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_CheckCompleted_ParamsSpec,
      null,
      [],
      false);
  }

  stopLoading() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_StopLoading_ParamsSpec,
      null,
      [],
      false);
  }

  collapse(arg_collapsed) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_Collapse_ParamsSpec,
      null,
      [arg_collapsed],
      false);
  }

  enableViewSourceMode() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec,
      null,
      [],
      false);
  }

  focus() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_Focus_ParamsSpec,
      null,
      [],
      false);
  }

  clearFocusedElement() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec,
      null,
      [],
      false);
  }

  copyImageAt(arg_window_point) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_CopyImageAt_ParamsSpec,
      null,
      [arg_window_point],
      false);
  }

  saveImageAt(arg_window_point) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_SaveImageAt_ParamsSpec,
      null,
      [arg_window_point],
      false);
  }

  reportBlinkFeatureUsage(arg_features) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec,
      null,
      [arg_features],
      false);
  }

  renderFallbackContent() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec,
      null,
      [],
      false);
  }

  beforeUnload(arg_is_reload) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ResponseParamsSpec,
      [arg_is_reload],
      false);
  }

  mediaPlayerActionAt(arg_location, arg_action) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec,
      null,
      [arg_location, arg_action],
      false);
  }

  requestVideoFrameAtWithBoundsHint(arg_location, arg_max_size, arg_max_area) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParamsSpec,
      [arg_location, arg_max_size, arg_max_area],
      false);
  }

  pluginActionAt(arg_location, arg_action) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_PluginActionAt_ParamsSpec,
      null,
      [arg_location, arg_action],
      false);
  }

  advanceFocusInFrame(arg_focus_type, arg_source_frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec,
      null,
      [arg_focus_type, arg_source_frame_token],
      false);
  }

  advanceFocusForIME(arg_focus_type) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec,
      null,
      [arg_focus_type],
      false);
  }

  reportContentSecurityPolicyViolation(arg_violation) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec,
      null,
      [arg_violation],
      false);
  }

  didUpdateFramePolicy(arg_frame_policy) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec,
      null,
      [arg_frame_policy],
      false);
  }

  onFrameVisibilityChanged(arg_visibility) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec,
      null,
      [arg_visibility],
      false);
  }

  postMessageEvent(arg_source_frame_token, arg_source_origin, arg_target_origin, arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec,
      null,
      [arg_source_frame_token, arg_source_origin, arg_target_origin, arg_message],
      false);
  }

  javaScriptMethodExecuteRequest(arg_object_name, arg_method_name, arg_arguments, arg_wants_result) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParamsSpec,
      [arg_object_name, arg_method_name, arg_arguments, arg_wants_result],
      false);
  }

  javaScriptExecuteRequest(arg_javascript, arg_wants_result) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParamsSpec,
      [arg_javascript, arg_wants_result],
      false);
  }

  javaScriptExecuteRequestForTests(arg_javascript, arg_has_user_gesture, arg_resolve_promises, arg_honor_js_content_settings, arg_world_id) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParamsSpec,
      [arg_javascript, arg_has_user_gesture, arg_resolve_promises, arg_honor_js_content_settings, arg_world_id],
      false);
  }

  javaScriptExecuteRequestInIsolatedWorld(arg_javascript, arg_wants_result, arg_world_id) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParamsSpec,
      [arg_javascript, arg_wants_result, arg_world_id],
      false);
  }

  getCharacterIndexAtPoint(arg_location) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_GetCharacterIndexAtPoint_ParamsSpec,
      null,
      [arg_location],
      false);
  }

  getFirstRectForRange(arg_range) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_GetFirstRectForRange_ParamsSpec,
      null,
      [arg_range],
      false);
  }

  getStringForRange(arg_range) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_GetStringForRange_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_GetStringForRange_ResponseParamsSpec,
      [arg_range],
      false);
  }

  bindReportingObserver(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  updateOpener(arg_opener_frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_UpdateOpener_ParamsSpec,
      null,
      [arg_opener_frame_token],
      false);
  }

  getSavableResourceLinks() {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParamsSpec,
      [],
      false);
  }

  mixedContentFound(arg_main_resource_url, arg_mixed_content_url, arg_request_context, arg_was_allowed, arg_url_before_redirects, arg_had_redirect, arg_source_location) {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_MixedContentFound_ParamsSpec,
      null,
      [arg_main_resource_url, arg_mixed_content_url, arg_request_context, arg_was_allowed, arg_url_before_redirects, arg_had_redirect, arg_source_location],
      false);
  }

  bindDevToolsAgent(arg_agent_host, arg_agent) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec,
      null,
      [arg_agent_host, arg_agent],
      false);
  }

  extractSmartClipData(arg_rect) {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_ExtractSmartClipData_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_ExtractSmartClipData_ResponseParamsSpec,
      [arg_rect],
      false);
  }

  handleRendererDebugURL(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec,
      null,
      [arg_url],
      false);
  }

  getCanonicalUrlForSharing() {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParamsSpec,
      [],
      false);
  }

  getOpenGraphMetadata() {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParamsSpec,
      [],
      false);
  }

  setNavigationApiHistoryEntriesForRestore(arg_entry_arrays, arg_restore_reason) {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec,
      null,
      [arg_entry_arrays, arg_restore_reason],
      false);
  }

  updatePrerenderURL(arg_matched_url) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParamsSpec,
      [arg_matched_url],
      false);
  }

  notifyNavigationApiOfDisposedEntries(arg_keys) {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec,
      null,
      [arg_keys],
      false);
  }

  traverseCancelled(arg_navigation_api_key, arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec,
      null,
      [arg_navigation_api_key, arg_reason],
      false);
  }

  dispatchNavigateEventForCrossDocumentTraversal(arg_url, arg_page_state, arg_is_browser_initiated) {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec,
      null,
      [arg_url, arg_page_state, arg_is_browser_initiated],
      false);
  }

  snapshotDocumentForViewTransition(arg_transition_token, arg_page_swap_event_params) {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParamsSpec,
      [arg_transition_token, arg_page_swap_event_params],
      false);
  }

  notifyViewTransitionAbortedToOldDocument() {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec,
      null,
      [],
      false);
  }

  dispatchPageSwap(arg_page_swap_event_params) {
    return this.proxy.sendMessage(
      this.ordinals[51],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec,
      null,
      [arg_page_swap_event_params],
      false);
  }

  addResourceTimingEntryForFailedSubframeNavigation(arg_subframe_token, arg_initial_url, arg_start_time, arg_redirect_time, arg_request_start, arg_response_start, arg_response_code, arg_mime_type, arg_load_timing_info, arg_connection_info, arg_alpn_negotiated_protocol, arg_is_secure_transport, arg_is_validated, arg_normalized_server_timing, arg_completion_status) {
    return this.proxy.sendMessage(
      this.ordinals[52],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec,
      null,
      [arg_subframe_token, arg_initial_url, arg_start_time, arg_redirect_time, arg_request_start, arg_response_start, arg_response_code, arg_mime_type, arg_load_timing_info, arg_connection_info, arg_alpn_negotiated_protocol, arg_is_secure_transport, arg_is_validated, arg_normalized_server_timing, arg_completion_status],
      false);
  }

  getScrollPosition() {
    return this.proxy.sendMessage(
      this.ordinals[53],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ResponseParamsSpec,
      [],
      false);
  }

  performSpellCheck() {
    return this.proxy.sendMessage(
      this.ordinals[54],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_PerformSpellCheck_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.LocalFrame.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.LocalFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LocalFrame',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.LocalFrameReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.LocalFrame', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: GetTextSurroundingSelection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTextSurroundingSelection (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SendInterventionReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendInterventionReport (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetFrameOwnerProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFrameOwnerProperties (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: NotifyUserActivation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyUserActivation (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: NotifyVirtualKeyboardOverlayRect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyVirtualKeyboardOverlayRect (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ShowInterestInElement
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowInterestInElement (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: AddMessageToConsole
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddMessageToConsole (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SwapInImmediately
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SwapInImmediately (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: CheckCompleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_CheckCompleted_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CheckCompleted (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: StopLoading
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_StopLoading_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopLoading (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: Collapse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_Collapse_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Collapse (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: EnableViewSourceMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableViewSourceMode (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: Focus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_Focus_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Focus (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: ClearFocusedElement
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearFocusedElement (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: CopyImageAt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_CopyImageAt_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CopyImageAt (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SaveImageAt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_SaveImageAt_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SaveImageAt (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: ReportBlinkFeatureUsage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportBlinkFeatureUsage (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: RenderFallbackContent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenderFallbackContent (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: BeforeUnload
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BeforeUnload (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: MediaPlayerActionAt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaPlayerActionAt (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: RequestVideoFrameAtWithBoundsHint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestVideoFrameAtWithBoundsHint (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: PluginActionAt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_PluginActionAt_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PluginActionAt (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: AdvanceFocusInFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AdvanceFocusInFrame (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: AdvanceFocusForIME
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AdvanceFocusForIME (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: ReportContentSecurityPolicyViolation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportContentSecurityPolicyViolation (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: DidUpdateFramePolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidUpdateFramePolicy (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: OnFrameVisibilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameVisibilityChanged (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: PostMessageEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PostMessageEvent (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: JavaScriptMethodExecuteRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> JavaScriptMethodExecuteRequest (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: JavaScriptExecuteRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> JavaScriptExecuteRequest (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: JavaScriptExecuteRequestForTests
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> JavaScriptExecuteRequestForTests (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: JavaScriptExecuteRequestInIsolatedWorld
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> JavaScriptExecuteRequestInIsolatedWorld (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: GetCharacterIndexAtPoint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetCharacterIndexAtPoint_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCharacterIndexAtPoint (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
           }
        }
        // Try Method 33: GetFirstRectForRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetFirstRectForRange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFirstRectForRange (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 33 failed:', e);
           }
        }
        // Try Method 34: GetStringForRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetStringForRange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStringForRange (34)');
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 34 failed:', e);
           }
        }
        // Try Method 35: BindReportingObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindReportingObserver (35)');
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 35 failed:', e);
           }
        }
        // Try Method 36: UpdateOpener
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_UpdateOpener_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateOpener (36)');
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 36 failed:', e);
           }
        }
        // Try Method 37: GetSavableResourceLinks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSavableResourceLinks (37)');
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 37 failed:', e);
           }
        }
        // Try Method 38: MixedContentFound
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_MixedContentFound_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MixedContentFound (38)');
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 38 failed:', e);
           }
        }
        // Try Method 39: BindDevToolsAgent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindDevToolsAgent (39)');
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 39 failed:', e);
           }
        }
        // Try Method 40: ExtractSmartClipData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_ExtractSmartClipData_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtractSmartClipData (40)');
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 40 failed:', e);
           }
        }
        // Try Method 41: HandleRendererDebugURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleRendererDebugURL (41)');
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 41 failed:', e);
           }
        }
        // Try Method 42: GetCanonicalUrlForSharing
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCanonicalUrlForSharing (42)');
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 42 failed:', e);
           }
        }
        // Try Method 43: GetOpenGraphMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOpenGraphMetadata (43)');
             this.mapOrdinal(header.ordinal, 43);
             dispatchId = 43;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 43 failed:', e);
           }
        }
        // Try Method 44: SetNavigationApiHistoryEntriesForRestore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNavigationApiHistoryEntriesForRestore (44)');
             this.mapOrdinal(header.ordinal, 44);
             dispatchId = 44;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 44 failed:', e);
           }
        }
        // Try Method 45: UpdatePrerenderURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdatePrerenderURL (45)');
             this.mapOrdinal(header.ordinal, 45);
             dispatchId = 45;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 45 failed:', e);
           }
        }
        // Try Method 46: NotifyNavigationApiOfDisposedEntries
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyNavigationApiOfDisposedEntries (46)');
             this.mapOrdinal(header.ordinal, 46);
             dispatchId = 46;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 46 failed:', e);
           }
        }
        // Try Method 47: TraverseCancelled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TraverseCancelled (47)');
             this.mapOrdinal(header.ordinal, 47);
             dispatchId = 47;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 47 failed:', e);
           }
        }
        // Try Method 48: DispatchNavigateEventForCrossDocumentTraversal
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchNavigateEventForCrossDocumentTraversal (48)');
             this.mapOrdinal(header.ordinal, 48);
             dispatchId = 48;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 48 failed:', e);
           }
        }
        // Try Method 49: SnapshotDocumentForViewTransition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SnapshotDocumentForViewTransition (49)');
             this.mapOrdinal(header.ordinal, 49);
             dispatchId = 49;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 49 failed:', e);
           }
        }
        // Try Method 50: NotifyViewTransitionAbortedToOldDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyViewTransitionAbortedToOldDocument (50)');
             this.mapOrdinal(header.ordinal, 50);
             dispatchId = 50;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 50 failed:', e);
           }
        }
        // Try Method 51: DispatchPageSwap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchPageSwap (51)');
             this.mapOrdinal(header.ordinal, 51);
             dispatchId = 51;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 51 failed:', e);
           }
        }
        // Try Method 52: AddResourceTimingEntryForFailedSubframeNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddResourceTimingEntryForFailedSubframeNavigation (52)');
             this.mapOrdinal(header.ordinal, 52);
             dispatchId = 52;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 52 failed:', e);
           }
        }
        // Try Method 53: GetScrollPosition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetScrollPosition (53)');
             this.mapOrdinal(header.ordinal, 53);
             dispatchId = 53;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 53 failed:', e);
           }
        }
        // Try Method 54: PerformSpellCheck
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_PerformSpellCheck_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PerformSpellCheck (54)');
             this.mapOrdinal(header.ordinal, 54);
             dispatchId = 54;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 54 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTextSurroundingSelection');
          const result = this.impl.getTextSurroundingSelection(params.arg_max_length);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetTextSurroundingSelection FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendInterventionReport');
          const result = this.impl.sendInterventionReport(params.arg_id, params.arg_message, params.arg_child_frame_token);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFrameOwnerProperties');
          const result = this.impl.setFrameOwnerProperties(params.arg_properties);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyUserActivation');
          const result = this.impl.notifyUserActivation(params.arg_notification_type);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyVirtualKeyboardOverlayRect');
          const result = this.impl.notifyVirtualKeyboardOverlayRect(params.arg_keyboard_rect);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showInterestInElement');
          const result = this.impl.showInterestInElement(params.arg_nodeID);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addMessageToConsole');
          const result = this.impl.addMessageToConsole(params.arg_level, params.arg_message, params.arg_discard_duplicates);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.swapInImmediately');
          const result = this.impl.swapInImmediately();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_CheckCompleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.checkCompleted');
          const result = this.impl.checkCompleted();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_StopLoading_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopLoading');
          const result = this.impl.stopLoading();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_Collapse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.collapse');
          const result = this.impl.collapse(params.arg_collapsed);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableViewSourceMode');
          const result = this.impl.enableViewSourceMode();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_Focus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focus');
          const result = this.impl.focus();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearFocusedElement');
          const result = this.impl.clearFocusedElement();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_CopyImageAt_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.copyImageAt');
          const result = this.impl.copyImageAt(params.arg_window_point);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_SaveImageAt_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.saveImageAt');
          const result = this.impl.saveImageAt(params.arg_window_point);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportBlinkFeatureUsage');
          const result = this.impl.reportBlinkFeatureUsage(params.arg_features);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.renderFallbackContent');
          const result = this.impl.renderFallbackContent();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.beforeUnload');
          const result = this.impl.beforeUnload(params.arg_is_reload);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] BeforeUnload FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mediaPlayerActionAt');
          const result = this.impl.mediaPlayerActionAt(params.arg_location, params.arg_action);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestVideoFrameAtWithBoundsHint');
          const result = this.impl.requestVideoFrameAtWithBoundsHint(params.arg_location, params.arg_max_size, params.arg_max_area);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestVideoFrameAtWithBoundsHint FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_PluginActionAt_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pluginActionAt');
          const result = this.impl.pluginActionAt(params.arg_location, params.arg_action);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.advanceFocusInFrame');
          const result = this.impl.advanceFocusInFrame(params.arg_focus_type, params.arg_source_frame_token);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.advanceFocusForIME');
          const result = this.impl.advanceFocusForIME(params.arg_focus_type);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportContentSecurityPolicyViolation');
          const result = this.impl.reportContentSecurityPolicyViolation(params.arg_violation);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didUpdateFramePolicy');
          const result = this.impl.didUpdateFramePolicy(params.arg_frame_policy);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameVisibilityChanged');
          const result = this.impl.onFrameVisibilityChanged(params.arg_visibility);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.postMessageEvent');
          const result = this.impl.postMessageEvent(params.arg_source_frame_token, params.arg_source_origin, params.arg_target_origin, params.arg_message);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.javaScriptMethodExecuteRequest');
          const result = this.impl.javaScriptMethodExecuteRequest(params.arg_object_name, params.arg_method_name, params.arg_arguments, params.arg_wants_result);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] JavaScriptMethodExecuteRequest FAILED:', e));
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.javaScriptExecuteRequest');
          const result = this.impl.javaScriptExecuteRequest(params.arg_javascript, params.arg_wants_result);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] JavaScriptExecuteRequest FAILED:', e));
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.javaScriptExecuteRequestForTests');
          const result = this.impl.javaScriptExecuteRequestForTests(params.arg_javascript, params.arg_has_user_gesture, params.arg_resolve_promises, params.arg_honor_js_content_settings, params.arg_world_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] JavaScriptExecuteRequestForTests FAILED:', e));
          }
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.javaScriptExecuteRequestInIsolatedWorld');
          const result = this.impl.javaScriptExecuteRequestInIsolatedWorld(params.arg_javascript, params.arg_wants_result, params.arg_world_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] JavaScriptExecuteRequestInIsolatedWorld FAILED:', e));
          }
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetCharacterIndexAtPoint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCharacterIndexAtPoint');
          const result = this.impl.getCharacterIndexAtPoint(params.arg_location);
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetFirstRectForRange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFirstRectForRange');
          const result = this.impl.getFirstRectForRange(params.arg_range);
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetStringForRange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getStringForRange');
          const result = this.impl.getStringForRange(params.arg_range);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_GetStringForRange_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetStringForRange FAILED:', e));
          }
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindReportingObserver');
          const result = this.impl.bindReportingObserver(params.arg_receiver);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_UpdateOpener_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateOpener');
          const result = this.impl.updateOpener(params.arg_opener_frame_token);
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSavableResourceLinks');
          const result = this.impl.getSavableResourceLinks();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSavableResourceLinks FAILED:', e));
          }
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_MixedContentFound_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mixedContentFound');
          const result = this.impl.mixedContentFound(params.arg_main_resource_url, params.arg_mixed_content_url, params.arg_request_context, params.arg_was_allowed, params.arg_url_before_redirects, params.arg_had_redirect, params.arg_source_location);
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindDevToolsAgent');
          const result = this.impl.bindDevToolsAgent(params.arg_agent_host, params.arg_agent);
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_ExtractSmartClipData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.extractSmartClipData');
          const result = this.impl.extractSmartClipData(params.arg_rect);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_ExtractSmartClipData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ExtractSmartClipData FAILED:', e));
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleRendererDebugURL');
          const result = this.impl.handleRendererDebugURL(params.arg_url);
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCanonicalUrlForSharing');
          const result = this.impl.getCanonicalUrlForSharing();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCanonicalUrlForSharing FAILED:', e));
          }
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOpenGraphMetadata');
          const result = this.impl.getOpenGraphMetadata();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetOpenGraphMetadata FAILED:', e));
          }
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNavigationApiHistoryEntriesForRestore');
          const result = this.impl.setNavigationApiHistoryEntriesForRestore(params.arg_entry_arrays, params.arg_restore_reason);
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updatePrerenderURL');
          const result = this.impl.updatePrerenderURL(params.arg_matched_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdatePrerenderURL FAILED:', e));
          }
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyNavigationApiOfDisposedEntries');
          const result = this.impl.notifyNavigationApiOfDisposedEntries(params.arg_keys);
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.traverseCancelled');
          const result = this.impl.traverseCancelled(params.arg_navigation_api_key, params.arg_reason);
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchNavigateEventForCrossDocumentTraversal');
          const result = this.impl.dispatchNavigateEventForCrossDocumentTraversal(params.arg_url, params.arg_page_state, params.arg_is_browser_initiated);
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.snapshotDocumentForViewTransition');
          const result = this.impl.snapshotDocumentForViewTransition(params.arg_transition_token, params.arg_page_swap_event_params);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SnapshotDocumentForViewTransition FAILED:', e));
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyViewTransitionAbortedToOldDocument');
          const result = this.impl.notifyViewTransitionAbortedToOldDocument();
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchPageSwap');
          const result = this.impl.dispatchPageSwap(params.arg_page_swap_event_params);
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addResourceTimingEntryForFailedSubframeNavigation');
          const result = this.impl.addResourceTimingEntryForFailedSubframeNavigation(params.arg_subframe_token, params.arg_initial_url, params.arg_start_time, params.arg_redirect_time, params.arg_request_start, params.arg_response_start, params.arg_response_code, params.arg_mime_type, params.arg_load_timing_info, params.arg_connection_info, params.arg_alpn_negotiated_protocol, params.arg_is_secure_transport, params.arg_is_validated, params.arg_normalized_server_timing, params.arg_completion_status);
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getScrollPosition');
          const result = this.impl.getScrollPosition();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetScrollPosition FAILED:', e));
          }
          break;
        }
        case 54: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_PerformSpellCheck_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.performSpellCheck');
          const result = this.impl.performSpellCheck();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.LocalFrameReceiver = mojo.internal.bindings.blink.mojom.LocalFrameReceiver;

mojo.internal.bindings.blink.mojom.LocalFramePtr = mojo.internal.bindings.blink.mojom.LocalFrameRemote;
mojo.internal.bindings.blink.mojom.LocalFrameRequest = mojo.internal.bindings.blink.mojom.LocalFramePendingReceiver;


// Interface: LocalMainFrame
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec, 'blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_Params', [
      mojo.internal.StructField('arg_point', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_rect', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec, 'blink.mojom.LocalMainFrame_SetScaleFactor_Params', [
      mojo.internal.StructField('arg_scale', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ParamsSpec, 'blink.mojom.LocalMainFrame_ClosePage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ResponseParamsSpec, 'blink.mojom.LocalMainFrame_ClosePage_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec, 'blink.mojom.LocalMainFrame_GetFullPageSize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParamsSpec, 'blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParams', [
      mojo.internal.StructField('arg_full_page_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec, 'blink.mojom.LocalMainFrame_SetInitialFocus_Params', [
      mojo.internal.StructField('arg_reverse', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec, 'blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec, 'blink.mojom.LocalMainFrame_ZoomToFindInPageRect_Params', [
      mojo.internal.StructField('arg_rect_in_root_frame', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec, 'blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_Params', [
      mojo.internal.StructField('arg_accessed_window', 0, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_coop_reporter_info', 8, 0, mojo.internal.bindings.network.mojom.CrossOriginOpenerPolicyReporterParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec, 'blink.mojom.LocalMainFrame_UpdateBrowserControlsState_Params', [
      mojo.internal.StructField('arg_constraints', 0, 0, mojo.internal.bindings.cc.mojom.BrowserControlsStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_current', 8, 0, mojo.internal.bindings.cc.mojom.BrowserControlsStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_offset_tag_modifications', 16, 0, mojo.internal.bindings.cc.mojom.BrowserControlsOffsetTagModificationsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_animate', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec, 'blink.mojom.LocalMainFrame_SetV8CompileHints_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ParamsSpec, 'blink.mojom.LocalMainFrame_Discard_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ResponseParamsSpec, 'blink.mojom.LocalMainFrame_Discard_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec, 'blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_Params', [
      mojo.internal.StructField('arg_randomized_trigger_rate', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_confidence', 8, 0, mojo.internal.bindings.blink.mojom.ConfidenceLevelSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.blink.mojom.LocalMainFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.LocalMainFrameRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LocalMainFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.LocalMainFramePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.LocalMainFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  animateDoubleTapZoom(arg_point, arg_rect) {
    return this.$.animateDoubleTapZoom(arg_point, arg_rect);
  }
  setScaleFactor(arg_scale) {
    return this.$.setScaleFactor(arg_scale);
  }
  closePage() {
    return this.$.closePage();
  }
  getFullPageSize() {
    return this.$.getFullPageSize();
  }
  setInitialFocus(arg_reverse) {
    return this.$.setInitialFocus(arg_reverse);
  }
  enablePreferredSizeChangedMode() {
    return this.$.enablePreferredSizeChangedMode();
  }
  zoomToFindInPageRect(arg_rect_in_root_frame) {
    return this.$.zoomToFindInPageRect(arg_rect_in_root_frame);
  }
  installCoopAccessMonitor(arg_accessed_window, arg_coop_reporter_info) {
    return this.$.installCoopAccessMonitor(arg_accessed_window, arg_coop_reporter_info);
  }
  updateBrowserControlsState(arg_constraints, arg_current, arg_animate, arg_offset_tag_modifications) {
    return this.$.updateBrowserControlsState(arg_constraints, arg_current, arg_animate, arg_offset_tag_modifications);
  }
  setV8CompileHints(arg_data) {
    return this.$.setV8CompileHints(arg_data);
  }
  discard() {
    return this.$.discard();
  }
  finalizeNavigationConfidence(arg_randomized_trigger_rate, arg_confidence) {
    return this.$.finalizeNavigationConfidence(arg_randomized_trigger_rate, arg_confidence);
  }
};

mojo.internal.bindings.blink.mojom.LocalMainFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.LocalMainFrame', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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

  animateDoubleTapZoom(arg_point, arg_rect) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec,
      null,
      [arg_point, arg_rect],
      false);
  }

  setScaleFactor(arg_scale) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec,
      null,
      [arg_scale],
      false);
  }

  closePage() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ResponseParamsSpec,
      [],
      false);
  }

  getFullPageSize() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParamsSpec,
      [],
      false);
  }

  setInitialFocus(arg_reverse) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec,
      null,
      [arg_reverse],
      false);
  }

  enablePreferredSizeChangedMode() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec,
      null,
      [],
      false);
  }

  zoomToFindInPageRect(arg_rect_in_root_frame) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec,
      null,
      [arg_rect_in_root_frame],
      false);
  }

  installCoopAccessMonitor(arg_accessed_window, arg_coop_reporter_info) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec,
      null,
      [arg_accessed_window, arg_coop_reporter_info],
      false);
  }

  updateBrowserControlsState(arg_constraints, arg_current, arg_animate, arg_offset_tag_modifications) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec,
      null,
      [arg_constraints, arg_current, arg_animate, arg_offset_tag_modifications],
      false);
  }

  setV8CompileHints(arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec,
      null,
      [arg_data],
      false);
  }

  discard() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ResponseParamsSpec,
      [],
      false);
  }

  finalizeNavigationConfidence(arg_randomized_trigger_rate, arg_confidence) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec,
      null,
      [arg_randomized_trigger_rate, arg_confidence],
      false);
  }

};

mojo.internal.bindings.blink.mojom.LocalMainFrame.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.LocalMainFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LocalMainFrame',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.LocalMainFrameReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.LocalMainFrame', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: AnimateDoubleTapZoom
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AnimateDoubleTapZoom (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetScaleFactor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetScaleFactor (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ClosePage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClosePage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetFullPageSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFullPageSize (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetInitialFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInitialFocus (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: EnablePreferredSizeChangedMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnablePreferredSizeChangedMode (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ZoomToFindInPageRect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ZoomToFindInPageRect (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: InstallCoopAccessMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallCoopAccessMonitor (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: UpdateBrowserControlsState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateBrowserControlsState (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetV8CompileHints
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetV8CompileHints (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: Discard
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Discard (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: FinalizeNavigationConfidence
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FinalizeNavigationConfidence (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.animateDoubleTapZoom');
          const result = this.impl.animateDoubleTapZoom(params.arg_point, params.arg_rect);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setScaleFactor');
          const result = this.impl.setScaleFactor(params.arg_scale);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closePage');
          const result = this.impl.closePage();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClosePage FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFullPageSize');
          const result = this.impl.getFullPageSize();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFullPageSize FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setInitialFocus');
          const result = this.impl.setInitialFocus(params.arg_reverse);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enablePreferredSizeChangedMode');
          const result = this.impl.enablePreferredSizeChangedMode();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.zoomToFindInPageRect');
          const result = this.impl.zoomToFindInPageRect(params.arg_rect_in_root_frame);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.installCoopAccessMonitor');
          const result = this.impl.installCoopAccessMonitor(params.arg_accessed_window, params.arg_coop_reporter_info);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateBrowserControlsState');
          const result = this.impl.updateBrowserControlsState(params.arg_constraints, params.arg_current, params.arg_animate, params.arg_offset_tag_modifications);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setV8CompileHints');
          const result = this.impl.setV8CompileHints(params.arg_data);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.discard');
          const result = this.impl.discard();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Discard FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.finalizeNavigationConfidence');
          const result = this.impl.finalizeNavigationConfidence(params.arg_randomized_trigger_rate, params.arg_confidence);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.LocalMainFrameReceiver = mojo.internal.bindings.blink.mojom.LocalMainFrameReceiver;

mojo.internal.bindings.blink.mojom.LocalMainFramePtr = mojo.internal.bindings.blink.mojom.LocalMainFrameRemote;
mojo.internal.bindings.blink.mojom.LocalMainFrameRequest = mojo.internal.bindings.blink.mojom.LocalMainFramePendingReceiver;


// Interface: LocalMainFrameHost
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec, 'blink.mojom.LocalMainFrameHost_ScaleFactorChanged_Params', [
      mojo.internal.StructField('arg_scale', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec, 'blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_Params', [
      mojo.internal.StructField('arg_pref_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_TextAutosizerPageInfoChanged_ParamsSpec, 'blink.mojom.LocalMainFrameHost_TextAutosizerPageInfoChanged_Params', [
      mojo.internal.StructField('arg_page_info', 0, 0, mojo.internal.bindings.blink.mojom.TextAutosizerPageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec, 'blink.mojom.LocalMainFrameHost_FocusPage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec, 'blink.mojom.LocalMainFrameHost_TakeFocus_Params', [
      mojo.internal.StructField('arg_reverse', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec, 'blink.mojom.LocalMainFrameHost_UpdateTargetURL_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParamsSpec, 'blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec, 'blink.mojom.LocalMainFrameHost_RequestClose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ParamsSpec, 'blink.mojom.LocalMainFrameHost_ShowCreatedWindow_Params', [
      mojo.internal.StructField('arg_opener_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_disposition', 8, 0, mojo.internal.bindings.ui.mojom.WindowOpenDispositionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_window_features', 16, 0, mojo.internal.bindings.blink.mojom.WindowFeaturesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_opened_by_user_gesture', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ResponseParamsSpec, 'blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec, 'blink.mojom.LocalMainFrameHost_SetWindowRect_Params', [
      mojo.internal.StructField('arg_bounds', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParamsSpec, 'blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec, 'blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec, 'blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec, 'blink.mojom.LocalMainFrameHost_Maximize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec, 'blink.mojom.LocalMainFrameHost_Minimize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Restore_ParamsSpec, 'blink.mojom.LocalMainFrameHost_Restore_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec, 'blink.mojom.LocalMainFrameHost_SetResizable_Params', [
      mojo.internal.StructField('arg_resizable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec, 'blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_Params', [
      mojo.internal.StructField('arg_regions', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.DraggableRegionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec, 'blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_Params', [
      mojo.internal.StructField('arg_duration', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.LocalMainFrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.LocalMainFrameHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LocalMainFrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.LocalMainFrameHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.LocalMainFrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  scaleFactorChanged(arg_scale) {
    return this.$.scaleFactorChanged(arg_scale);
  }
  contentsPreferredSizeChanged(arg_pref_size) {
    return this.$.contentsPreferredSizeChanged(arg_pref_size);
  }
  textAutosizerPageInfoChanged(arg_page_info) {
    return this.$.textAutosizerPageInfoChanged(arg_page_info);
  }
  focusPage() {
    return this.$.focusPage();
  }
  takeFocus(arg_reverse) {
    return this.$.takeFocus(arg_reverse);
  }
  updateTargetURL(arg_url) {
    return this.$.updateTargetURL(arg_url);
  }
  requestClose() {
    return this.$.requestClose();
  }
  showCreatedWindow(arg_opener_frame_token, arg_disposition, arg_window_features, arg_opened_by_user_gesture) {
    return this.$.showCreatedWindow(arg_opener_frame_token, arg_disposition, arg_window_features, arg_opened_by_user_gesture);
  }
  setWindowRect(arg_bounds) {
    return this.$.setWindowRect(arg_bounds);
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
  setResizable(arg_resizable) {
    return this.$.setResizable(arg_resizable);
  }
  draggableRegionsChanged(arg_regions) {
    return this.$.draggableRegionsChanged(arg_regions);
  }
  onFirstContentfulPaint(arg_duration) {
    return this.$.onFirstContentfulPaint(arg_duration);
  }
};

mojo.internal.bindings.blink.mojom.LocalMainFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.LocalMainFrameHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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

  scaleFactorChanged(arg_scale) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec,
      null,
      [arg_scale],
      false);
  }

  contentsPreferredSizeChanged(arg_pref_size) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec,
      null,
      [arg_pref_size],
      false);
  }

  textAutosizerPageInfoChanged(arg_page_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_TextAutosizerPageInfoChanged_ParamsSpec,
      null,
      [arg_page_info],
      false);
  }

  focusPage() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec,
      null,
      [],
      false);
  }

  takeFocus(arg_reverse) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec,
      null,
      [arg_reverse],
      false);
  }

  updateTargetURL(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParamsSpec,
      [arg_url],
      false);
  }

  requestClose() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec,
      null,
      [],
      false);
  }

  showCreatedWindow(arg_opener_frame_token, arg_disposition, arg_window_features, arg_opened_by_user_gesture) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ResponseParamsSpec,
      [arg_opener_frame_token, arg_disposition, arg_window_features, arg_opened_by_user_gesture],
      false);
  }

  setWindowRect(arg_bounds) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParamsSpec,
      [arg_bounds],
      false);
  }

  didFirstVisuallyNonEmptyPaint() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec,
      null,
      [],
      false);
  }

  didAccessInitialMainDocument() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec,
      null,
      [],
      false);
  }

  maximize() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec,
      null,
      [],
      false);
  }

  minimize() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec,
      null,
      [],
      false);
  }

  restore() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Restore_ParamsSpec,
      null,
      [],
      false);
  }

  setResizable(arg_resizable) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec,
      null,
      [arg_resizable],
      false);
  }

  draggableRegionsChanged(arg_regions) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec,
      null,
      [arg_regions],
      false);
  }

  onFirstContentfulPaint(arg_duration) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec,
      null,
      [arg_duration],
      false);
  }

};

mojo.internal.bindings.blink.mojom.LocalMainFrameHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.LocalMainFrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LocalMainFrameHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.LocalMainFrameHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.LocalMainFrameHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: ScaleFactorChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScaleFactorChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ContentsPreferredSizeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ContentsPreferredSizeChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: TextAutosizerPageInfoChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_TextAutosizerPageInfoChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TextAutosizerPageInfoChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: FocusPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusPage (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: TakeFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TakeFocus (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: UpdateTargetURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateTargetURL (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RequestClose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestClose (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ShowCreatedWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowCreatedWindow (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetWindowRect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWindowRect (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: DidFirstVisuallyNonEmptyPaint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidFirstVisuallyNonEmptyPaint (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: DidAccessInitialMainDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidAccessInitialMainDocument (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: Maximize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Maximize (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: Minimize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Minimize (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: Restore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Restore_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Restore (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SetResizable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetResizable (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: DraggableRegionsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DraggableRegionsChanged (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: OnFirstContentfulPaint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFirstContentfulPaint (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scaleFactorChanged');
          const result = this.impl.scaleFactorChanged(params.arg_scale);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.contentsPreferredSizeChanged');
          const result = this.impl.contentsPreferredSizeChanged(params.arg_pref_size);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_TextAutosizerPageInfoChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.textAutosizerPageInfoChanged');
          const result = this.impl.textAutosizerPageInfoChanged(params.arg_page_info);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focusPage');
          const result = this.impl.focusPage();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.takeFocus');
          const result = this.impl.takeFocus(params.arg_reverse);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateTargetURL');
          const result = this.impl.updateTargetURL(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateTargetURL FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestClose');
          const result = this.impl.requestClose();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showCreatedWindow');
          const result = this.impl.showCreatedWindow(params.arg_opener_frame_token, params.arg_disposition, params.arg_window_features, params.arg_opened_by_user_gesture);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ShowCreatedWindow_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ShowCreatedWindow FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWindowRect');
          const result = this.impl.setWindowRect(params.arg_bounds);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetWindowRect FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didFirstVisuallyNonEmptyPaint');
          const result = this.impl.didFirstVisuallyNonEmptyPaint();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didAccessInitialMainDocument');
          const result = this.impl.didAccessInitialMainDocument();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.maximize');
          const result = this.impl.maximize();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.minimize');
          const result = this.impl.minimize();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Restore_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.restore');
          const result = this.impl.restore();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setResizable');
          const result = this.impl.setResizable(params.arg_resizable);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.draggableRegionsChanged');
          const result = this.impl.draggableRegionsChanged(params.arg_regions);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFirstContentfulPaint');
          const result = this.impl.onFirstContentfulPaint(params.arg_duration);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.LocalMainFrameHostReceiver = mojo.internal.bindings.blink.mojom.LocalMainFrameHostReceiver;

mojo.internal.bindings.blink.mojom.LocalMainFrameHostPtr = mojo.internal.bindings.blink.mojom.LocalMainFrameHostRemote;
mojo.internal.bindings.blink.mojom.LocalMainFrameHostRequest = mojo.internal.bindings.blink.mojom.LocalMainFrameHostPendingReceiver;

