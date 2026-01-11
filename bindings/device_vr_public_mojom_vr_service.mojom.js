// Auto-generated MojoJS binding
 // Source: chromium_src/device/vr/public/mojom/vr_service.mojom
 // Module: device.mojom

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
 

 mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.gpu = mojo.internal.bindings.gpu || {};
mojo.internal.bindings.display = mojo.internal.bindings.display || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.device.mojom.XRHandednessSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.XRTargetRayModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.XRSessionFeatureRequestStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.XREnvironmentBlendModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.XRInteractionModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.XREyeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.XRPresentationTransportMethodSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.XRReferenceSpaceTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.XRInputSourceSpaceTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.XRPlaneOrientationSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.XRSemanticLabelSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.XRLayerLayoutSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.CreateCompositionLayerResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.XrCompatibleResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.EntityTypeForHitTestSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.XRVisibilityStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.XRNativeOriginInformationSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRDepthDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRLayerSpecificDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.RequestSessionResultSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRDepthConfigSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRSessionDeviceConfigSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRSessionSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRPresentationConnectionSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRInputSourceDescriptionSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRInputSourceStateSpec = { $: {} };
mojo.internal.bindings.device.mojom.VRFieldOfViewSpec = { $: {} };
mojo.internal.bindings.device.mojom.VRPoseSpec = { $: {} };
mojo.internal.bindings.device.mojom.PoseSpec = { $: {} };
mojo.internal.bindings.device.mojom.AnchorIdSpec = { $: {} };
mojo.internal.bindings.device.mojom.HitTestSubscriptionIdSpec = { $: {} };
mojo.internal.bindings.device.mojom.PlaneIdSpec = { $: {} };
mojo.internal.bindings.device.mojom.XrVisibilityMaskIdSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRRaySpec = { $: {} };
mojo.internal.bindings.device.mojom.XRHitResultSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRViewGeometrySpec = { $: {} };
mojo.internal.bindings.device.mojom.XRVisibilityMaskSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRViewSpec = { $: {} };
mojo.internal.bindings.device.mojom.VRStageParametersSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRPresentationTransportOptionsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRInputSourceSpaceInfoSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRHandJointSpaceInfoSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRPlanePointDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRPlaneDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRPlaneDetectionDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRAnchorDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRAnchorsDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRHitTestTransientInputSubscriptionResultDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultsDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.RgbTupleF32Spec = { $: {} };
mojo.internal.bindings.device.mojom.XRSphericalHarmonicsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRCubeMapSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRLightProbeSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRReflectionProbeSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRLightEstimationDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRDepthDataStillValidSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRDepthDataUpdatedSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRTrackedImageDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRTrackedImagesDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.LayerIdSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRProjectionLayerDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRQuadLayerDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRCylinderLayerDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XREquirectLayerDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRCubeLayerDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRLayerReadOnlyDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRLayerMutableDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRCompositionLayerDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRLayerFrameDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRRenderInfoSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRFrameDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.RequestSessionSuccessSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRFrameDataRequestOptionsSpec = { $: {} };
mojo.internal.bindings.device.mojom.VRService = {};
mojo.internal.bindings.device.mojom.VRService.$interfaceName = 'device.mojom.VRService';
mojo.internal.bindings.device.mojom.VRService_SetClient_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.VRService_RequestSession_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.VRService_RequestSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.VRService_SupportsSession_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.VRService_SupportsSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.VRService_ExitPresent_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.VRService_ExitPresent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.VRService_SetFramesThrottled_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder = {};
mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder.$interfaceName = 'device.mojom.XRSessionMetricsRecorder';
mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.VRServiceClient = {};
mojo.internal.bindings.device.mojom.VRServiceClient.$interfaceName = 'device.mojom.VRServiceClient';
mojo.internal.bindings.device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider = {};
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider.$interfaceName = 'device.mojom.XREnvironmentIntegrationProvider';
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRFrameDataProvider = {};
mojo.internal.bindings.device.mojom.XRFrameDataProvider.$interfaceName = 'device.mojom.XRFrameDataProvider';
mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRPresentationProvider = {};
mojo.internal.bindings.device.mojom.XRPresentationProvider.$interfaceName = 'device.mojom.XRPresentationProvider';
mojo.internal.bindings.device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRPresentationClient = {};
mojo.internal.bindings.device.mojom.XRPresentationClient.$interfaceName = 'device.mojom.XRPresentationClient';
mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRSessionClient = {};
mojo.internal.bindings.device.mojom.XRSessionClient.$interfaceName = 'device.mojom.XRSessionClient';
mojo.internal.bindings.device.mojom.XRSessionClient_OnExitPresent_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRLayerManager = {};
mojo.internal.bindings.device.mojom.XRLayerManager.$interfaceName = 'device.mojom.XRLayerManager';
mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener = {};
mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener.$interfaceName = 'device.mojom.WebXrInternalsRendererListener';
mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec = { $: {} };

mojo.internal.bindings.device.mojom.kNumComponentsPerPixel = 4;

// Enum: XRHandedness
mojo.internal.bindings.device.mojom.XRHandedness = {
  NONE: 0,
  LEFT: 1,
  RIGHT: 2,
};

// Enum: XRTargetRayMode
mojo.internal.bindings.device.mojom.XRTargetRayMode = {
  GAZING: 1,
  POINTING: 2,
  TAPPING: 3,
};

// Enum: XRSessionFeatureRequestStatus
mojo.internal.bindings.device.mojom.XRSessionFeatureRequestStatus = {
  kNotRequested: 0,
  kRequired: 1,
  kOptionalAccepted: 2,
  kOptionalRejected: 3,
};

// Enum: XREnvironmentBlendMode
mojo.internal.bindings.device.mojom.XREnvironmentBlendMode = {
  kOpaque: 1,
  kAlphaBlend: 2,
  kAdditive: 3,
};

// Enum: XRInteractionMode
mojo.internal.bindings.device.mojom.XRInteractionMode = {
  kScreenSpace: 1,
  kWorldSpace: 2,
};

// Enum: XREye
mojo.internal.bindings.device.mojom.XREye = {
  kNone: 0,
  kLeft: 1,
  kRight: 2,
};

// Enum: XRPresentationTransportMethod
mojo.internal.bindings.device.mojom.XRPresentationTransportMethod = {
  NONE: 0,
  SUBMIT_AS_TEXTURE_HANDLE: 1,
  SUBMIT_AS_MAILBOX_HOLDER: 2,
  DRAW_INTO_TEXTURE_MAILBOX: 3,
};

// Enum: XRReferenceSpaceType
mojo.internal.bindings.device.mojom.XRReferenceSpaceType = {
  kViewer: 0,
  kLocal: 1,
  kLocalFloor: 2,
  kBoundedFloor: 3,
  kUnbounded: 4,
};

// Enum: XRInputSourceSpaceType
mojo.internal.bindings.device.mojom.XRInputSourceSpaceType = {
  kTargetRay: 0,
  kGrip: 1,
};

// Enum: XRPlaneOrientation
mojo.internal.bindings.device.mojom.XRPlaneOrientation = {
  UNKNOWN: 0,
  HORIZONTAL: 1,
  VERTICAL: 2,
};

// Enum: XRSemanticLabel
mojo.internal.bindings.device.mojom.XRSemanticLabel = {
  kOther: 0,
  kFloor: 1,
  kWall: 2,
  kCeiling: 3,
  kTable: 4,
};

// Enum: XRLayerLayout
mojo.internal.bindings.device.mojom.XRLayerLayout = {
  kMono: 0,
  kStereo: 1,
  kStereoLeftRight: 2,
  kStereoTopBottom: 3,
};

// Enum: CreateCompositionLayerResult
mojo.internal.bindings.device.mojom.CreateCompositionLayerResult = {
  SUCCESS: 0,
  FAILURE: 1,
};

// Enum: XrCompatibleResult
mojo.internal.bindings.device.mojom.XrCompatibleResult = {
  kAlreadyCompatible: 0,
  kNoDeviceAvailable: 1,
  kWebXrFeaturePolicyBlocked: 2,
  kCompatibleAfterRestart: 3,
  kNotCompatibleAfterRestart: 4,
};

// Enum: EntityTypeForHitTest
mojo.internal.bindings.device.mojom.EntityTypeForHitTest = {
  POINT: 1,
  PLANE: 2,
};

// Enum: XRVisibilityState
mojo.internal.bindings.device.mojom.XRVisibilityState = {
  VISIBLE: 1,
  VISIBLE_BLURRED: 2,
  HIDDEN: 3,
};

// Union: XRNativeOriginInformation
mojo.internal.Union(
    mojo.internal.bindings.device.mojom.XRNativeOriginInformationSpec, 'device.mojom.XRNativeOriginInformation', {
      'arg_input_source_space_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRInputSourceSpaceInfoSpec.$,
        'nullable': false,
      },
      'arg_plane_id': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.PlaneIdSpec.$,
        'nullable': false,
      },
      'arg_anchor_id': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.AnchorIdSpec.$,
        'nullable': false,
      },
      'arg_reference_space_type': {
        'ordinal': 3,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRReferenceSpaceTypeSpec.$,
        'nullable': false,
      },
      'arg_hand_joint_space_info': {
        'ordinal': 4,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRHandJointSpaceInfoSpec.$,
        'nullable': false,
      },
      'arg_image_index': {
        'ordinal': 5,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
    });

// Union: XRDepthData
mojo.internal.Union(
    mojo.internal.bindings.device.mojom.XRDepthDataSpec, 'device.mojom.XRDepthData', {
      'arg_data_still_valid': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRDepthDataStillValidSpec.$,
        'nullable': false,
      },
      'arg_updated_depth_data': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRDepthDataUpdatedSpec.$,
        'nullable': false,
      },
    });

// Union: XRLayerSpecificData
mojo.internal.Union(
    mojo.internal.bindings.device.mojom.XRLayerSpecificDataSpec, 'device.mojom.XRLayerSpecificData', {
      'arg_projection': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRProjectionLayerDataSpec.$,
        'nullable': false,
      },
      'arg_quad': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRQuadLayerDataSpec.$,
        'nullable': false,
      },
      'arg_cylinder': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRCylinderLayerDataSpec.$,
        'nullable': false,
      },
      'arg_equirect': {
        'ordinal': 3,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.XREquirectLayerDataSpec.$,
        'nullable': false,
      },
      'arg_cube': {
        'ordinal': 4,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRCubeLayerDataSpec.$,
        'nullable': false,
      },
    });

// Union: RequestSessionResult
mojo.internal.Union(
    mojo.internal.bindings.device.mojom.RequestSessionResultSpec, 'device.mojom.RequestSessionResult', {
      'arg_success': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.RequestSessionSuccessSpec.$,
        'nullable': false,
      },
      'arg_failure_reason': {
        'ordinal': 1,
        'type': mojo.internal.bindings.device.mojom.RequestSessionErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: XRDepthConfig
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRDepthConfigSpec, 'device.mojom.XRDepthConfig', [
      mojo.internal.StructField('arg_depth_usage', 0, 0, mojo.internal.bindings.device.mojom.XRDepthUsageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_depth_data_format', 8, 0, mojo.internal.bindings.device.mojom.XRDepthDataFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_depth_type', 16, 0, mojo.internal.bindings.device.mojom.XRDepthTypeSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRSessionDeviceConfig
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRSessionDeviceConfigSpec, 'device.mojom.XRSessionDeviceConfig', [
      mojo.internal.StructField('arg_views', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRViewSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_depth_configuration', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRDepthConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_default_framebuffer_scale', 16, 0, mojo.internal.Float, 1.0, false, 0, undefined),
      mojo.internal.StructField('arg_supports_viewport_scaling', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_anti_aliasing', 20, 1, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRSession
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRSessionSpec, 'device.mojom.XRSession', [
      mojo.internal.StructField('arg_data_provider', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.XRFrameDataProviderSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_layer_manager', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.XRLayerManagerSpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_client_receiver', 16, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.device.mojom.XRSessionClientSpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_submit_frame_sink', 24, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRPresentationConnectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_enabled_features', 32, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRSessionFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_device_config', 40, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRSessionDeviceConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_enviroment_blend_mode', 48, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XREnvironmentBlendModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_interaction_mode', 56, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRInteractionModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_wants_fullscreen', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: XRPresentationConnection
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationConnectionSpec, 'device.mojom.XRPresentationConnection', [
      mojo.internal.StructField('arg_provider', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.XRPresentationProviderSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_client_receiver', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.device.mojom.XRPresentationClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_transport_options', 16, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRPresentationTransportOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRInputSourceDescription
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRInputSourceDescriptionSpec, 'device.mojom.XRInputSourceDescription', [
      mojo.internal.StructField('arg_target_ray_mode', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRTargetRayModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_handedness', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRHandednessSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_input_from_pointer', 16, 0, mojo.internal.bindings.gfx.mojom.TransformSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_profiles', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: XRInputSourceState
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRInputSourceStateSpec, 'device.mojom.XRInputSourceState', [
      mojo.internal.StructField('arg_description', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRInputSourceDescriptionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_mojo_from_input', 8, 0, mojo.internal.bindings.gfx.mojom.TransformSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_gamepad', 16, 0, mojo.internal.bindings.device.mojom.GamepadSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_overlay_pointer_position', 24, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_hand_tracking_data', 32, 0, mojo.internal.bindings.device.mojom.XRHandTrackingDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_source_id', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_emulated_position', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_auxiliary', 44, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_primary_input_pressed', 44, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_primary_input_clicked', 44, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_primary_squeeze_pressed', 44, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_primary_squeeze_clicked', 44, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: VRFieldOfView
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRFieldOfViewSpec, 'device.mojom.VRFieldOfView', [
      mojo.internal.StructField('arg_up_degrees', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_down_degrees', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_left_degrees', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_right_degrees', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VRPose
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRPoseSpec, 'device.mojom.VRPose', [
      mojo.internal.StructField('arg_orientation', 0, 0, mojo.internal.bindings.gfx.mojom.QuaternionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_position', 8, 0, mojo.internal.bindings.gfx.mojom.Point3FSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_emulated_position', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Pose
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.PoseSpec, 'device.mojom.Pose', [
      mojo.internal.StructField('arg_orientation', 0, 0, mojo.internal.bindings.gfx.mojom.QuaternionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_position', 8, 0, mojo.internal.bindings.gfx.mojom.Point3FSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnchorId
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.AnchorIdSpec, 'device.mojom.AnchorId', [
      mojo.internal.StructField('arg_id_value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HitTestSubscriptionId
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HitTestSubscriptionIdSpec, 'device.mojom.HitTestSubscriptionId', [
      mojo.internal.StructField('arg_id_value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PlaneId
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.PlaneIdSpec, 'device.mojom.PlaneId', [
      mojo.internal.StructField('arg_id_value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XrVisibilityMaskId
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XrVisibilityMaskIdSpec, 'device.mojom.XrVisibilityMaskId', [
      mojo.internal.StructField('arg_id_value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRRay
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRRaySpec, 'device.mojom.XRRay', [
      mojo.internal.StructField('arg_origin', 0, 0, mojo.internal.bindings.gfx.mojom.Point3FSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_direction', 8, 0, mojo.internal.bindings.gfx.mojom.Vector3dFSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRHitResult
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRHitResultSpec, 'device.mojom.XRHitResult', [
      mojo.internal.StructField('arg_mojo_from_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.PoseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_plane_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.PlaneIdSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRViewGeometry
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRViewGeometrySpec, 'device.mojom.XRViewGeometry', [
      mojo.internal.StructField('arg_field_of_view', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.VRFieldOfViewSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mojo_from_view', 8, 0, mojo.internal.bindings.gfx.mojom.TransformSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRVisibilityMask
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRVisibilityMaskSpec, 'device.mojom.XRVisibilityMask', [
      mojo.internal.StructField('arg_vertices', 0, 0, mojo.internal.Array(mojo.internal.bindings.gfx.mojom.PointFSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_unvalidated_indices', 8, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRView
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRViewSpec, 'device.mojom.XRView', [
      mojo.internal.StructField('arg_eye', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XREyeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_geometry', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRViewGeometrySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_viewport', 16, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_depth_data', 24, 0, mojo.internal.bindings.device.mojom.XRDepthDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_visibility_mask', 32, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRVisibilityMaskSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_visibility_mask_id', 40, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XrVisibilityMaskIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_first_person_observer', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: VRStageParameters
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRStageParametersSpec, 'device.mojom.VRStageParameters', [
      mojo.internal.StructField('arg_mojo_from_stage', 0, 0, mojo.internal.bindings.gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bounds', 8, 0, mojo.internal.Array(mojo.internal.bindings.gfx.mojom.Point3FSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRPresentationTransportOptions
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationTransportOptionsSpec, 'device.mojom.XRPresentationTransportOptions', [
      mojo.internal.StructField('arg_transport_method', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRPresentationTransportMethodSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_wait_for_transfer_notification', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_wait_for_render_notification', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_wait_for_gpu_fence', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRInputSourceSpaceInfo
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRInputSourceSpaceInfoSpec, 'device.mojom.XRInputSourceSpaceInfo', [
      mojo.internal.StructField('arg_input_source_space_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRInputSourceSpaceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_input_source_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRHandJointSpaceInfo
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRHandJointSpaceInfoSpec, 'device.mojom.XRHandJointSpaceInfo', [
      mojo.internal.StructField('arg_handedness', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRHandednessSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_joint', 8, 0, mojo.internal.bindings.device.mojom.XRHandJointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRPlanePointData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPlanePointDataSpec, 'device.mojom.XRPlanePointData', [
      mojo.internal.StructField('arg_x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_z', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRPlaneData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPlaneDataSpec, 'device.mojom.XRPlaneData', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.PlaneIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_orientation', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRPlaneOrientationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mojo_from_plane', 16, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.PoseSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_semantic_label', 24, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRSemanticLabelSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_polygon', 32, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRPlanePointDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: XRPlaneDetectionData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPlaneDetectionDataSpec, 'device.mojom.XRPlaneDetectionData', [
      mojo.internal.StructField('arg_all_planes_ids', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.PlaneIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_updated_planes_data', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRPlaneDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRAnchorData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRAnchorDataSpec, 'device.mojom.XRAnchorData', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.AnchorIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mojo_from_anchor', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.PoseSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRAnchorsData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRAnchorsDataSpec, 'device.mojom.XRAnchorsData', [
      mojo.internal.StructField('arg_all_anchors_ids', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.AnchorIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_updated_anchors_data', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRAnchorDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRHitTestSubscriptionResultData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultDataSpec, 'device.mojom.XRHitTestSubscriptionResultData', [
      mojo.internal.StructField('arg_subscription_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.HitTestSubscriptionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hit_test_results', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRHitResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRHitTestTransientInputSubscriptionResultData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRHitTestTransientInputSubscriptionResultDataSpec, 'device.mojom.XRHitTestTransientInputSubscriptionResultData', [
      mojo.internal.StructField('arg_subscription_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.HitTestSubscriptionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_input_source_id_to_hit_test_results', 8, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRHitResultSpec.$, false), false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRHitTestSubscriptionResultsData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultsDataSpec, 'device.mojom.XRHitTestSubscriptionResultsData', [
      mojo.internal.StructField('arg_results', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_transient_input_results', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRHitTestTransientInputSubscriptionResultDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RgbTupleF32
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.RgbTupleF32Spec, 'device.mojom.RgbTupleF32', [
      mojo.internal.StructField('arg_red', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_green', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_blue', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRSphericalHarmonics
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRSphericalHarmonicsSpec, 'device.mojom.XRSphericalHarmonics', [
      mojo.internal.StructField('arg_coefficients', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.RgbTupleF32Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRCubeMap
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRCubeMapSpec, 'device.mojom.XRCubeMap', [
      mojo.internal.StructField('arg_kNumComponentsPerPixel', 0, 0, mojo.internal.Pointer, 4, false, 0, undefined),
      mojo.internal.StructField('arg_positive_x', 8, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_negative_x', 16, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_positive_y', 24, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_negative_y', 32, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_positive_z', 40, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_negative_z', 48, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_width_and_height', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: XRLightProbe
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLightProbeSpec, 'device.mojom.XRLightProbe', [
      mojo.internal.StructField('arg_spherical_harmonics', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRSphericalHarmonicsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_main_light_direction', 8, 0, mojo.internal.bindings.gfx.mojom.Vector3dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_main_light_intensity', 16, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.RgbTupleF32Spec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRReflectionProbe
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRReflectionProbeSpec, 'device.mojom.XRReflectionProbe', [
      mojo.internal.StructField('arg_cube_map', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRCubeMapSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRLightEstimationData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLightEstimationDataSpec, 'device.mojom.XRLightEstimationData', [
      mojo.internal.StructField('arg_light_probe', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRLightProbeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_reflection_probe', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRReflectionProbeSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRDepthDataStillValid
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRDepthDataStillValidSpec, 'device.mojom.XRDepthDataStillValid', [
    ],
    [[0, 8]]);

// Struct: XRDepthDataUpdated
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRDepthDataUpdatedSpec, 'device.mojom.XRDepthDataUpdated', [
      mojo.internal.StructField('arg_pixel_data', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_norm_texture_from_norm_view', 8, 0, mojo.internal.bindings.gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_size', 16, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_view_geometry', 24, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRViewGeometrySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_raw_value_to_meters', 32, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: XRTrackedImageData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRTrackedImageDataSpec, 'device.mojom.XRTrackedImageData', [
      mojo.internal.StructField('arg_mojo_from_image', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.PoseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_width_in_meters', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_actively_tracked', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRTrackedImagesData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRTrackedImagesDataSpec, 'device.mojom.XRTrackedImagesData', [
      mojo.internal.StructField('arg_images_data', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRTrackedImageDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_image_trackable_scores', 8, 0, mojo.internal.Array(mojo.internal.Bool, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LayerId
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.LayerIdSpec, 'device.mojom.LayerId', [
      mojo.internal.StructField('arg_id_value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRProjectionLayerData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRProjectionLayerDataSpec, 'device.mojom.XRProjectionLayerData', [
    ],
    [[0, 8]]);

// Struct: XRQuadLayerData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRQuadLayerDataSpec, 'device.mojom.XRQuadLayerData', [
      mojo.internal.StructField('arg_native_origin_from_layer', 0, 0, mojo.internal.bindings.gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_width', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRCylinderLayerData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRCylinderLayerDataSpec, 'device.mojom.XRCylinderLayerData', [
      mojo.internal.StructField('arg_native_origin_from_layer', 0, 0, mojo.internal.bindings.gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_radius', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_central_angle', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_aspect_ratio', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XREquirectLayerData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XREquirectLayerDataSpec, 'device.mojom.XREquirectLayerData', [
      mojo.internal.StructField('arg_native_origin_from_layer', 0, 0, mojo.internal.bindings.gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_radius', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_central_horizontal_angle', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_upper_vertical_angle', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_lower_vertical_angle', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRCubeLayerData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRCubeLayerDataSpec, 'device.mojom.XRCubeLayerData', [
      mojo.internal.StructField('arg_orientation', 0, 0, mojo.internal.bindings.gfx.mojom.QuaternionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRLayerReadOnlyData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLayerReadOnlyDataSpec, 'device.mojom.XRLayerReadOnlyData', [
      mojo.internal.StructField('arg_layer_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.LayerIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_layout', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRLayerLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_texture_width', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_texture_height', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_static', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: XRLayerMutableData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLayerMutableDataSpec, 'device.mojom.XRLayerMutableData', [
      mojo.internal.StructField('arg_native_origin_information', 0, 0, mojo.internal.bindings.device.mojom.XRNativeOriginInformationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_layer_data', 8, 0, mojo.internal.bindings.device.mojom.XRLayerSpecificDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_opacity', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_blend_texture_source_alpha', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRCompositionLayerData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRCompositionLayerDataSpec, 'device.mojom.XRCompositionLayerData', [
      mojo.internal.StructField('arg_read_only_data', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRLayerReadOnlyDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mutable_data', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRLayerMutableDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRLayerFrameData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLayerFrameDataSpec, 'device.mojom.XRLayerFrameData', [
      mojo.internal.StructField('arg_layer_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.LayerIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_shared_image', 8, 0, mojo.internal.bindings.gpu.mojom.ExportedSharedImageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_sync_token', 16, 0, mojo.internal.bindings.gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRRenderInfo
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRRenderInfoSpec, 'device.mojom.XRRenderInfo', [
      mojo.internal.StructField('arg_mojo_from_viewer', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.VRPoseSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_views', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRViewSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_id', 16, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRFrameData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRFrameDataSpec, 'device.mojom.XRFrameData', [
      mojo.internal.StructField('arg_render_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRRenderInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_time_delta', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_shared_image', 16, 0, mojo.internal.bindings.gpu.mojom.ExportedSharedImageSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_buffer_sync_token', 24, 0, mojo.internal.bindings.gpu.mojom.SyncTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_camera_image_buffer_shared_image', 32, 0, mojo.internal.bindings.gpu.mojom.ExportedSharedImageSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_camera_image_buffer_sync_token', 40, 0, mojo.internal.bindings.gpu.mojom.SyncTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_camera_image_size', 48, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_mojo_from_floor', 56, 0, mojo.internal.bindings.gfx.mojom.TransformSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_input_state', 64, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRInputSourceStateSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_stage_parameters', 72, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.VRStageParametersSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_detected_planes_data', 80, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRPlaneDetectionDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_anchors_data', 88, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRAnchorsDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_composition_layers_data', 96, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRLayerFrameDataSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_light_estimation_data', 104, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRLightEstimationDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_hit_test_subscription_results', 112, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultsDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_tracked_images', 120, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRTrackedImagesDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_stage_parameters_id', 128, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_rendering_time_ratio', 132, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_mojo_space_reset', 136, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 152]]);

// Struct: RequestSessionSuccess
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.RequestSessionSuccessSpec, 'device.mojom.RequestSessionSuccess', [
      mojo.internal.StructField('arg_session', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRSessionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_trace_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_metrics_recorder', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_xr_internals_listener', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerSpec), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: XRFrameDataRequestOptions
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRFrameDataRequestOptionsSpec, 'device.mojom.XRFrameDataRequestOptions', [
      mojo.internal.StructField('arg_stage_parameters_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_include_lighting_estimation_data', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_depth_active', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: VRService
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_SetClient_ParamsSpec, 'device.mojom.VRService_SetClient_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.VRServiceClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_RequestSession_ParamsSpec, 'device.mojom.VRService_RequestSession_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.device.mojom.XRSessionOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_RequestSession_ResponseParamsSpec, 'device.mojom.VRService_RequestSession_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.device.mojom.RequestSessionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_SupportsSession_ParamsSpec, 'device.mojom.VRService_SupportsSession_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.device.mojom.XRSessionOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_SupportsSession_ResponseParamsSpec, 'device.mojom.VRService_SupportsSession_ResponseParams', [
      mojo.internal.StructField('arg_supports_session', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_ExitPresent_ParamsSpec, 'device.mojom.VRService_ExitPresent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_ExitPresent_ResponseParamsSpec, 'device.mojom.VRService_ExitPresent_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_SetFramesThrottled_ParamsSpec, 'device.mojom.VRService_SetFramesThrottled_Params', [
      mojo.internal.StructField('arg_throttled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ParamsSpec, 'device.mojom.VRService_MakeXrCompatible_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec, 'device.mojom.VRService_MakeXrCompatible_ResponseParams', [
      mojo.internal.StructField('arg_xr_compatible_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XrCompatibleResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.VRServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.VRServiceRemote = class {
  static get $interfaceName() {
    return 'device.mojom.VRService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.VRServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.VRServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setClient(arg_client) {
    return this.$.setClient(arg_client);
  }
  requestSession(arg_options) {
    return this.$.requestSession(arg_options);
  }
  supportsSession(arg_options) {
    return this.$.supportsSession(arg_options);
  }
  exitPresent() {
    return this.$.exitPresent();
  }
  setFramesThrottled(arg_throttled) {
    return this.$.setFramesThrottled(arg_throttled);
  }
  makeXrCompatible() {
    return this.$.makeXrCompatible();
  }
};

mojo.internal.bindings.device.mojom.VRServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VRService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setClient(arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.VRService_SetClient_ParamsSpec,
      null,
      [arg_client],
      false);
  }

  requestSession(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.VRService_RequestSession_ParamsSpec,
      mojo.internal.bindings.device.mojom.VRService_RequestSession_ResponseParamsSpec,
      [arg_options],
      false);
  }

  supportsSession(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.VRService_SupportsSession_ParamsSpec,
      mojo.internal.bindings.device.mojom.VRService_SupportsSession_ResponseParamsSpec,
      [arg_options],
      false);
  }

  exitPresent() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.device.mojom.VRService_ExitPresent_ParamsSpec,
      mojo.internal.bindings.device.mojom.VRService_ExitPresent_ResponseParamsSpec,
      [],
      false);
  }

  setFramesThrottled(arg_throttled) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.device.mojom.VRService_SetFramesThrottled_ParamsSpec,
      null,
      [arg_throttled],
      false);
  }

  makeXrCompatible() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ParamsSpec,
      mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.device.mojom.VRService.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.VRServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.VRService',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.VRServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VRService', [
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
        
        // Try Method 0: SetClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRService_SetClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RequestSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRService_RequestSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestSession (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SupportsSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRService_SupportsSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SupportsSession (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ExitPresent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRService_ExitPresent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExitPresent (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetFramesThrottled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRService_SetFramesThrottled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFramesThrottled (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: MakeXrCompatible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MakeXrCompatible (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRService_SetClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setClient');
          const result = this.impl.setClient(params.arg_client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRService_RequestSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestSession');
          const result = this.impl.requestSession(params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.VRService_RequestSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestSession FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRService_SupportsSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.supportsSession');
          const result = this.impl.supportsSession(params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.VRService_SupportsSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SupportsSession FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRService_ExitPresent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.exitPresent');
          const result = this.impl.exitPresent();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.VRService_ExitPresent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ExitPresent FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRService_SetFramesThrottled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFramesThrottled');
          const result = this.impl.setFramesThrottled(params.arg_throttled);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.makeXrCompatible');
          const result = this.impl.makeXrCompatible();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] MakeXrCompatible FAILED:', e));
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

mojo.internal.bindings.device.mojom.VRServiceReceiver = mojo.internal.bindings.device.mojom.VRServiceReceiver;

mojo.internal.bindings.device.mojom.VRServicePtr = mojo.internal.bindings.device.mojom.VRServiceRemote;
mojo.internal.bindings.device.mojom.VRServiceRequest = mojo.internal.bindings.device.mojom.VRServicePendingReceiver;


// Interface: XRSessionMetricsRecorder
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec, 'device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_Params', [
      mojo.internal.StructField('arg_feature', 0, 0, mojo.internal.bindings.device.mojom.XRSessionFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRSessionMetricsRecorder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  reportFeatureUsed(arg_feature) {
    return this.$.reportFeatureUsed(arg_feature);
  }
};

mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRSessionMetricsRecorder', [
      { explicit: null },
    ]);
  }

  reportFeatureUsed(arg_feature) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec,
      null,
      [arg_feature],
      false);
  }

};

mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRSessionMetricsRecorder',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRSessionMetricsRecorder', [
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
        
        // Try Method 0: ReportFeatureUsed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportFeatureUsed (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportFeatureUsed');
          const result = this.impl.reportFeatureUsed(params.arg_feature);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderReceiver = mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderReceiver;

mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderPtr = mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderRemote;
mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderRequest = mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderPendingReceiver;


// Interface: VRServiceClient
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec, 'device.mojom.VRServiceClient_OnDeviceChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.device.mojom.VRServiceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.VRServiceClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.VRServiceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.VRServiceClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.VRServiceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDeviceChanged() {
    return this.$.onDeviceChanged();
  }
};

mojo.internal.bindings.device.mojom.VRServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VRServiceClient', [
      { explicit: null },
    ]);
  }

  onDeviceChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.device.mojom.VRServiceClient.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.VRServiceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.VRServiceClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.VRServiceClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VRServiceClient', [
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
        
        // Try Method 0: OnDeviceChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceChanged');
          const result = this.impl.onDeviceChanged();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.VRServiceClientReceiver = mojo.internal.bindings.device.mojom.VRServiceClientReceiver;

mojo.internal.bindings.device.mojom.VRServiceClientPtr = mojo.internal.bindings.device.mojom.VRServiceClientRemote;
mojo.internal.bindings.device.mojom.VRServiceClientRequest = mojo.internal.bindings.device.mojom.VRServiceClientPendingReceiver;


// Interface: XREnvironmentIntegrationProvider
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_Params', [
      mojo.internal.StructField('arg_native_origin_information', 0, 0, mojo.internal.bindings.device.mojom.XRNativeOriginInformationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_entity_types', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.EntityTypeForHitTestSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_ray', 16, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRRaySpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParams', [
      mojo.internal.StructField('arg_subscription_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.HitTestSubscriptionIdSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_Params', [
      mojo.internal.StructField('arg_profile_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_entity_types', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.EntityTypeForHitTestSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_ray', 16, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRRaySpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParams', [
      mojo.internal.StructField('arg_subscription_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.HitTestSubscriptionIdSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_Params', [
      mojo.internal.StructField('arg_subscription_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.HitTestSubscriptionIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_Params', [
      mojo.internal.StructField('arg_native_origin_information', 0, 0, mojo.internal.bindings.device.mojom.XRNativeOriginInformationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_native_origin_from_anchor', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.PoseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_plane_id', 16, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.PlaneIdSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParams', [
      mojo.internal.StructField('arg_anchor_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.AnchorIdSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_Params', [
      mojo.internal.StructField('arg_anchor_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.AnchorIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XREnvironmentIntegrationProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  subscribeToHitTest(arg_native_origin_information, arg_entity_types, arg_ray) {
    return this.$.subscribeToHitTest(arg_native_origin_information, arg_entity_types, arg_ray);
  }
  subscribeToHitTestForTransientInput(arg_profile_name, arg_entity_types, arg_ray) {
    return this.$.subscribeToHitTestForTransientInput(arg_profile_name, arg_entity_types, arg_ray);
  }
  unsubscribeFromHitTest(arg_subscription_id) {
    return this.$.unsubscribeFromHitTest(arg_subscription_id);
  }
  createAnchor(arg_native_origin_information, arg_native_origin_from_anchor, arg_plane_id) {
    return this.$.createAnchor(arg_native_origin_information, arg_native_origin_from_anchor, arg_plane_id);
  }
  detachAnchor(arg_anchor_id) {
    return this.$.detachAnchor(arg_anchor_id);
  }
};

mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XREnvironmentIntegrationProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  subscribeToHitTest(arg_native_origin_information, arg_entity_types, arg_ray) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec,
      mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec,
      [arg_native_origin_information, arg_entity_types, arg_ray],
      false);
  }

  subscribeToHitTestForTransientInput(arg_profile_name, arg_entity_types, arg_ray) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec,
      mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec,
      [arg_profile_name, arg_entity_types, arg_ray],
      false);
  }

  unsubscribeFromHitTest(arg_subscription_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec,
      null,
      [arg_subscription_id],
      false);
  }

  createAnchor(arg_native_origin_information, arg_native_origin_from_anchor, arg_plane_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec,
      mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec,
      [arg_native_origin_information, arg_native_origin_from_anchor, arg_plane_id],
      false);
  }

  detachAnchor(arg_anchor_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec,
      null,
      [arg_anchor_id],
      false);
  }

};

mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XREnvironmentIntegrationProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XREnvironmentIntegrationProvider', [
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
        
        // Try Method 0: SubscribeToHitTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubscribeToHitTest (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SubscribeToHitTestForTransientInput
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubscribeToHitTestForTransientInput (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UnsubscribeFromHitTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UnsubscribeFromHitTest (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CreateAnchor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateAnchor (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DetachAnchor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DetachAnchor (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.subscribeToHitTest');
          const result = this.impl.subscribeToHitTest(params.arg_native_origin_information, params.arg_entity_types, params.arg_ray);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SubscribeToHitTest FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.subscribeToHitTestForTransientInput');
          const result = this.impl.subscribeToHitTestForTransientInput(params.arg_profile_name, params.arg_entity_types, params.arg_ray);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SubscribeToHitTestForTransientInput FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unsubscribeFromHitTest');
          const result = this.impl.unsubscribeFromHitTest(params.arg_subscription_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createAnchor');
          const result = this.impl.createAnchor(params.arg_native_origin_information, params.arg_native_origin_from_anchor, params.arg_plane_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateAnchor FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.detachAnchor');
          const result = this.impl.detachAnchor(params.arg_anchor_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderReceiver = mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderReceiver;

mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderPtr = mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderRemote;
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderRequest = mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderPendingReceiver;


// Interface: XRFrameDataProvider
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec, 'device.mojom.XRFrameDataProvider_GetFrameData_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRFrameDataRequestOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec, 'device.mojom.XRFrameDataProvider_GetFrameData_ResponseParams', [
      mojo.internal.StructField('arg_frame_data', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRFrameDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec, 'device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_Params', [
      mojo.internal.StructField('arg_environment_provider', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.XRFrameDataProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.XRFrameDataProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRFrameDataProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.XRFrameDataProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.XRFrameDataProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getFrameData(arg_options) {
    return this.$.getFrameData(arg_options);
  }
  getEnvironmentIntegrationProvider(arg_environment_provider) {
    return this.$.getEnvironmentIntegrationProvider(arg_environment_provider);
  }
};

mojo.internal.bindings.device.mojom.XRFrameDataProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRFrameDataProvider', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getFrameData(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec,
      mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec,
      [arg_options],
      false);
  }

  getEnvironmentIntegrationProvider(arg_environment_provider) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec,
      null,
      [arg_environment_provider],
      false);
  }

};

mojo.internal.bindings.device.mojom.XRFrameDataProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.XRFrameDataProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRFrameDataProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.XRFrameDataProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRFrameDataProvider', [
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
        
        // Try Method 0: GetFrameData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFrameData (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetEnvironmentIntegrationProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetEnvironmentIntegrationProvider (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFrameData');
          const result = this.impl.getFrameData(params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFrameData FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getEnvironmentIntegrationProvider');
          const result = this.impl.getEnvironmentIntegrationProvider(params.arg_environment_provider);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.XRFrameDataProviderReceiver = mojo.internal.bindings.device.mojom.XRFrameDataProviderReceiver;

mojo.internal.bindings.device.mojom.XRFrameDataProviderPtr = mojo.internal.bindings.device.mojom.XRFrameDataProviderRemote;
mojo.internal.bindings.device.mojom.XRFrameDataProviderRequest = mojo.internal.bindings.device.mojom.XRFrameDataProviderPendingReceiver;


// Interface: XRPresentationProvider
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec, 'device.mojom.XRPresentationProvider_UpdateLayerBounds_Params', [
      mojo.internal.StructField('arg_left_bounds', 0, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_right_bounds', 8, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_size', 16, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_id', 24, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec, 'device.mojom.XRPresentationProvider_SubmitFrameMissing_Params', [
      mojo.internal.StructField('arg_sync_token', 0, 0, mojo.internal.bindings.gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_id', 8, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec, 'device.mojom.XRPresentationProvider_SubmitFrame_Params', [
      mojo.internal.StructField('arg_time_waited', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_id', 8, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec, 'device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_Params', [
      mojo.internal.StructField('arg_texture', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_sync_token', 8, 0, mojo.internal.bindings.gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_id', 16, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec, 'device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_Params', [
      mojo.internal.StructField('arg_layer_ids', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.LayerIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_sync_token', 8, 0, mojo.internal.bindings.gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_time_waited', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_id', 24, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.bindings.device.mojom.XRPresentationProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.XRPresentationProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRPresentationProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.XRPresentationProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.XRPresentationProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  updateLayerBounds(arg_frame_id, arg_left_bounds, arg_right_bounds, arg_source_size) {
    return this.$.updateLayerBounds(arg_frame_id, arg_left_bounds, arg_right_bounds, arg_source_size);
  }
  submitFrameMissing(arg_frame_id, arg_sync_token) {
    return this.$.submitFrameMissing(arg_frame_id, arg_sync_token);
  }
  submitFrame(arg_frame_id, arg_time_waited) {
    return this.$.submitFrame(arg_frame_id, arg_time_waited);
  }
  submitFrameWithTextureHandle(arg_frame_id, arg_texture, arg_sync_token) {
    return this.$.submitFrameWithTextureHandle(arg_frame_id, arg_texture, arg_sync_token);
  }
  submitFrameDrawnIntoTexture(arg_frame_id, arg_layer_ids, arg_sync_token, arg_time_waited) {
    return this.$.submitFrameDrawnIntoTexture(arg_frame_id, arg_layer_ids, arg_sync_token, arg_time_waited);
  }
};

mojo.internal.bindings.device.mojom.XRPresentationProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRPresentationProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  updateLayerBounds(arg_frame_id, arg_left_bounds, arg_right_bounds, arg_source_size) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec,
      null,
      [arg_frame_id, arg_left_bounds, arg_right_bounds, arg_source_size],
      false);
  }

  submitFrameMissing(arg_frame_id, arg_sync_token) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec,
      null,
      [arg_frame_id, arg_sync_token],
      false);
  }

  submitFrame(arg_frame_id, arg_time_waited) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec,
      null,
      [arg_frame_id, arg_time_waited],
      false);
  }

  submitFrameWithTextureHandle(arg_frame_id, arg_texture, arg_sync_token) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec,
      null,
      [arg_frame_id, arg_texture, arg_sync_token],
      false);
  }

  submitFrameDrawnIntoTexture(arg_frame_id, arg_layer_ids, arg_sync_token, arg_time_waited) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec,
      null,
      [arg_frame_id, arg_layer_ids, arg_sync_token, arg_time_waited],
      false);
  }

};

mojo.internal.bindings.device.mojom.XRPresentationProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.XRPresentationProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRPresentationProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.XRPresentationProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRPresentationProvider', [
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
        
        // Try Method 0: UpdateLayerBounds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateLayerBounds (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SubmitFrameMissing
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubmitFrameMissing (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SubmitFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubmitFrame (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SubmitFrameWithTextureHandle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubmitFrameWithTextureHandle (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SubmitFrameDrawnIntoTexture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubmitFrameDrawnIntoTexture (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateLayerBounds');
          const result = this.impl.updateLayerBounds(params.arg_frame_id, params.arg_left_bounds, params.arg_right_bounds, params.arg_source_size);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submitFrameMissing');
          const result = this.impl.submitFrameMissing(params.arg_frame_id, params.arg_sync_token);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submitFrame');
          const result = this.impl.submitFrame(params.arg_frame_id, params.arg_time_waited);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submitFrameWithTextureHandle');
          const result = this.impl.submitFrameWithTextureHandle(params.arg_frame_id, params.arg_texture, params.arg_sync_token);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submitFrameDrawnIntoTexture');
          const result = this.impl.submitFrameDrawnIntoTexture(params.arg_frame_id, params.arg_layer_ids, params.arg_sync_token, params.arg_time_waited);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.XRPresentationProviderReceiver = mojo.internal.bindings.device.mojom.XRPresentationProviderReceiver;

mojo.internal.bindings.device.mojom.XRPresentationProviderPtr = mojo.internal.bindings.device.mojom.XRPresentationProviderRemote;
mojo.internal.bindings.device.mojom.XRPresentationProviderRequest = mojo.internal.bindings.device.mojom.XRPresentationProviderPendingReceiver;


// Interface: XRPresentationClient
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec, 'device.mojom.XRPresentationClient_OnSubmitFrameTransferred_Params', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec, 'device.mojom.XRPresentationClient_OnSubmitFrameRendered_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec, 'device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_Params', [
      mojo.internal.StructField('arg_gpu_fence_handle', 0, 0, mojo.internal.bindings.gfx.mojom.GpuFenceHandleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.XRPresentationClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.XRPresentationClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRPresentationClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.XRPresentationClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.XRPresentationClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSubmitFrameTransferred(arg_success) {
    return this.$.onSubmitFrameTransferred(arg_success);
  }
  onSubmitFrameRendered() {
    return this.$.onSubmitFrameRendered();
  }
  onSubmitFrameGpuFence(arg_gpu_fence_handle) {
    return this.$.onSubmitFrameGpuFence(arg_gpu_fence_handle);
  }
};

mojo.internal.bindings.device.mojom.XRPresentationClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRPresentationClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onSubmitFrameTransferred(arg_success) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec,
      null,
      [arg_success],
      false);
  }

  onSubmitFrameRendered() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec,
      null,
      [],
      false);
  }

  onSubmitFrameGpuFence(arg_gpu_fence_handle) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec,
      null,
      [arg_gpu_fence_handle],
      false);
  }

};

mojo.internal.bindings.device.mojom.XRPresentationClient.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.XRPresentationClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRPresentationClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.XRPresentationClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRPresentationClient', [
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
        
        // Try Method 0: OnSubmitFrameTransferred
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSubmitFrameTransferred (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnSubmitFrameRendered
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSubmitFrameRendered (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnSubmitFrameGpuFence
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSubmitFrameGpuFence (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSubmitFrameTransferred');
          const result = this.impl.onSubmitFrameTransferred(params.arg_success);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSubmitFrameRendered');
          const result = this.impl.onSubmitFrameRendered();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSubmitFrameGpuFence');
          const result = this.impl.onSubmitFrameGpuFence(params.arg_gpu_fence_handle);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.XRPresentationClientReceiver = mojo.internal.bindings.device.mojom.XRPresentationClientReceiver;

mojo.internal.bindings.device.mojom.XRPresentationClientPtr = mojo.internal.bindings.device.mojom.XRPresentationClientRemote;
mojo.internal.bindings.device.mojom.XRPresentationClientRequest = mojo.internal.bindings.device.mojom.XRPresentationClientPendingReceiver;


// Interface: XRSessionClient
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRSessionClient_OnExitPresent_ParamsSpec, 'device.mojom.XRSessionClient_OnExitPresent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec, 'device.mojom.XRSessionClient_OnVisibilityStateChanged_Params', [
      mojo.internal.StructField('arg_visibility_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRVisibilityStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.XRSessionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.XRSessionClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRSessionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.XRSessionClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.XRSessionClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onExitPresent() {
    return this.$.onExitPresent();
  }
  onVisibilityStateChanged(arg_visibility_state) {
    return this.$.onVisibilityStateChanged(arg_visibility_state);
  }
};

mojo.internal.bindings.device.mojom.XRSessionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRSessionClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onExitPresent() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.XRSessionClient_OnExitPresent_ParamsSpec,
      null,
      [],
      false);
  }

  onVisibilityStateChanged(arg_visibility_state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec,
      null,
      [arg_visibility_state],
      false);
  }

};

mojo.internal.bindings.device.mojom.XRSessionClient.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.XRSessionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRSessionClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.XRSessionClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRSessionClient', [
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
        
        // Try Method 0: OnExitPresent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRSessionClient_OnExitPresent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnExitPresent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnVisibilityStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVisibilityStateChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRSessionClient_OnExitPresent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onExitPresent');
          const result = this.impl.onExitPresent();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVisibilityStateChanged');
          const result = this.impl.onVisibilityStateChanged(params.arg_visibility_state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.XRSessionClientReceiver = mojo.internal.bindings.device.mojom.XRSessionClientReceiver;

mojo.internal.bindings.device.mojom.XRSessionClientPtr = mojo.internal.bindings.device.mojom.XRSessionClientRemote;
mojo.internal.bindings.device.mojom.XRSessionClientRequest = mojo.internal.bindings.device.mojom.XRSessionClientPendingReceiver;


// Interface: XRLayerManager
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec, 'device.mojom.XRLayerManager_CreateCompositionLayer_Params', [
      mojo.internal.StructField('arg_create_data', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRCompositionLayerDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec, 'device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParams', [
      mojo.internal.StructField('arg_code', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.CreateCompositionLayerResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec, 'device.mojom.XRLayerManager_DestroyCompositionLayer_Params', [
      mojo.internal.StructField('arg_layer_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.LayerIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec, 'device.mojom.XRLayerManager_UpdateCompositionLayer_Params', [
      mojo.internal.StructField('arg_layer_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.LayerIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_update_data', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRLayerMutableDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec, 'device.mojom.XRLayerManager_SetEnabledCompositionLayers_Params', [
      mojo.internal.StructField('arg_layer_ids', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.LayerIdSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.XRLayerManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.XRLayerManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRLayerManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.XRLayerManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.XRLayerManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createCompositionLayer(arg_create_data) {
    return this.$.createCompositionLayer(arg_create_data);
  }
  destroyCompositionLayer(arg_layer_id) {
    return this.$.destroyCompositionLayer(arg_layer_id);
  }
  updateCompositionLayer(arg_layer_id, arg_update_data) {
    return this.$.updateCompositionLayer(arg_layer_id, arg_update_data);
  }
  setEnabledCompositionLayers(arg_layer_ids) {
    return this.$.setEnabledCompositionLayers(arg_layer_ids);
  }
};

mojo.internal.bindings.device.mojom.XRLayerManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRLayerManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createCompositionLayer(arg_create_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec,
      mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec,
      [arg_create_data],
      false);
  }

  destroyCompositionLayer(arg_layer_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec,
      null,
      [arg_layer_id],
      false);
  }

  updateCompositionLayer(arg_layer_id, arg_update_data) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec,
      null,
      [arg_layer_id, arg_update_data],
      false);
  }

  setEnabledCompositionLayers(arg_layer_ids) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec,
      null,
      [arg_layer_ids],
      false);
  }

};

mojo.internal.bindings.device.mojom.XRLayerManager.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.XRLayerManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRLayerManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.XRLayerManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRLayerManager', [
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
        
        // Try Method 0: CreateCompositionLayer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCompositionLayer (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DestroyCompositionLayer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DestroyCompositionLayer (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateCompositionLayer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateCompositionLayer (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetEnabledCompositionLayers
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetEnabledCompositionLayers (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCompositionLayer');
          const result = this.impl.createCompositionLayer(params.arg_create_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateCompositionLayer FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.destroyCompositionLayer');
          const result = this.impl.destroyCompositionLayer(params.arg_layer_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateCompositionLayer');
          const result = this.impl.updateCompositionLayer(params.arg_layer_id, params.arg_update_data);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setEnabledCompositionLayers');
          const result = this.impl.setEnabledCompositionLayers(params.arg_layer_ids);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.XRLayerManagerReceiver = mojo.internal.bindings.device.mojom.XRLayerManagerReceiver;

mojo.internal.bindings.device.mojom.XRLayerManagerPtr = mojo.internal.bindings.device.mojom.XRLayerManagerRemote;
mojo.internal.bindings.device.mojom.XRLayerManagerRequest = mojo.internal.bindings.device.mojom.XRLayerManagerPendingReceiver;


// Interface: WebXrInternalsRendererListener
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec, 'device.mojom.WebXrInternalsRendererListener_OnFrameData_Params', [
      mojo.internal.StructField('arg_xrframe_statistics', 0, 0, mojo.internal.bindings.device.mojom.XrFrameStatisticsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec, 'device.mojom.WebXrInternalsRendererListener_OnConsoleLog_Params', [
      mojo.internal.StructField('arg_xrlogging_statistics', 0, 0, mojo.internal.bindings.device.mojom.XrLogMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.WebXrInternalsRendererListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onFrameData(arg_xrframe_statistics) {
    return this.$.onFrameData(arg_xrframe_statistics);
  }
  onConsoleLog(arg_xrlogging_statistics) {
    return this.$.onConsoleLog(arg_xrlogging_statistics);
  }
};

mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebXrInternalsRendererListener', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onFrameData(arg_xrframe_statistics) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec,
      null,
      [arg_xrframe_statistics],
      false);
  }

  onConsoleLog(arg_xrlogging_statistics) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec,
      null,
      [arg_xrlogging_statistics],
      false);
  }

};

mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.WebXrInternalsRendererListener',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebXrInternalsRendererListener', [
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
        
        // Try Method 0: OnFrameData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameData (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnConsoleLog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConsoleLog (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameData');
          const result = this.impl.onFrameData(params.arg_xrframe_statistics);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onConsoleLog');
          const result = this.impl.onConsoleLog(params.arg_xrlogging_statistics);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerReceiver = mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerReceiver;

mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerPtr = mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerRemote;
mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerRequest = mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerPendingReceiver;

