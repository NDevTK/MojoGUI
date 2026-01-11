// Auto-generated MojoJS binding
// Source: chromium_src/device/vr/public/mojom/vr_service.mojom
// Module: device.mojom

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var mojo_base = mojo_base || {};
var gpu = gpu || {};
var display = display || {};
var gfx = gfx || {};

device.mojom.XRHandednessSpec = { $: mojo.internal.Enum() };
device.mojom.XRTargetRayModeSpec = { $: mojo.internal.Enum() };
device.mojom.XRSessionFeatureRequestStatusSpec = { $: mojo.internal.Enum() };
device.mojom.XREnvironmentBlendModeSpec = { $: mojo.internal.Enum() };
device.mojom.XRInteractionModeSpec = { $: mojo.internal.Enum() };
device.mojom.XREyeSpec = { $: mojo.internal.Enum() };
device.mojom.XRPresentationTransportMethodSpec = { $: mojo.internal.Enum() };
device.mojom.XRReferenceSpaceTypeSpec = { $: mojo.internal.Enum() };
device.mojom.XRInputSourceSpaceTypeSpec = { $: mojo.internal.Enum() };
device.mojom.XRPlaneOrientationSpec = { $: mojo.internal.Enum() };
device.mojom.XRSemanticLabelSpec = { $: mojo.internal.Enum() };
device.mojom.XRLayerLayoutSpec = { $: mojo.internal.Enum() };
device.mojom.CreateCompositionLayerResultSpec = { $: mojo.internal.Enum() };
device.mojom.XrCompatibleResultSpec = { $: mojo.internal.Enum() };
device.mojom.EntityTypeForHitTestSpec = { $: mojo.internal.Enum() };
device.mojom.XRVisibilityStateSpec = { $: mojo.internal.Enum() };
device.mojom.XRNativeOriginInformationSpec = { $: {} };
device.mojom.XRDepthDataSpec = { $: {} };
device.mojom.XRLayerSpecificDataSpec = { $: {} };
device.mojom.RequestSessionResultSpec = { $: {} };
device.mojom.XRDepthConfigSpec = { $: {} };
device.mojom.XRSessionDeviceConfigSpec = { $: {} };
device.mojom.XRSessionSpec = { $: {} };
device.mojom.XRPresentationConnectionSpec = { $: {} };
device.mojom.XRInputSourceDescriptionSpec = { $: {} };
device.mojom.XRInputSourceStateSpec = { $: {} };
device.mojom.VRFieldOfViewSpec = { $: {} };
device.mojom.VRPoseSpec = { $: {} };
device.mojom.PoseSpec = { $: {} };
device.mojom.AnchorIdSpec = { $: {} };
device.mojom.HitTestSubscriptionIdSpec = { $: {} };
device.mojom.PlaneIdSpec = { $: {} };
device.mojom.XrVisibilityMaskIdSpec = { $: {} };
device.mojom.XRRaySpec = { $: {} };
device.mojom.XRHitResultSpec = { $: {} };
device.mojom.XRViewGeometrySpec = { $: {} };
device.mojom.XRVisibilityMaskSpec = { $: {} };
device.mojom.XRViewSpec = { $: {} };
device.mojom.VRStageParametersSpec = { $: {} };
device.mojom.XRPresentationTransportOptionsSpec = { $: {} };
device.mojom.XRInputSourceSpaceInfoSpec = { $: {} };
device.mojom.XRHandJointSpaceInfoSpec = { $: {} };
device.mojom.XRPlanePointDataSpec = { $: {} };
device.mojom.XRPlaneDataSpec = { $: {} };
device.mojom.XRPlaneDetectionDataSpec = { $: {} };
device.mojom.XRAnchorDataSpec = { $: {} };
device.mojom.XRAnchorsDataSpec = { $: {} };
device.mojom.XRHitTestSubscriptionResultDataSpec = { $: {} };
device.mojom.XRHitTestTransientInputSubscriptionResultDataSpec = { $: {} };
device.mojom.XRHitTestSubscriptionResultsDataSpec = { $: {} };
device.mojom.RgbTupleF32Spec = { $: {} };
device.mojom.XRSphericalHarmonicsSpec = { $: {} };
device.mojom.XRCubeMapSpec = { $: {} };
device.mojom.XRLightProbeSpec = { $: {} };
device.mojom.XRReflectionProbeSpec = { $: {} };
device.mojom.XRLightEstimationDataSpec = { $: {} };
device.mojom.XRDepthDataStillValidSpec = { $: {} };
device.mojom.XRDepthDataUpdatedSpec = { $: {} };
device.mojom.XRTrackedImageDataSpec = { $: {} };
device.mojom.XRTrackedImagesDataSpec = { $: {} };
device.mojom.LayerIdSpec = { $: {} };
device.mojom.XRProjectionLayerDataSpec = { $: {} };
device.mojom.XRQuadLayerDataSpec = { $: {} };
device.mojom.XRCylinderLayerDataSpec = { $: {} };
device.mojom.XREquirectLayerDataSpec = { $: {} };
device.mojom.XRCubeLayerDataSpec = { $: {} };
device.mojom.XRLayerReadOnlyDataSpec = { $: {} };
device.mojom.XRLayerMutableDataSpec = { $: {} };
device.mojom.XRCompositionLayerDataSpec = { $: {} };
device.mojom.XRLayerFrameDataSpec = { $: {} };
device.mojom.XRRenderInfoSpec = { $: {} };
device.mojom.XRFrameDataSpec = { $: {} };
device.mojom.RequestSessionSuccessSpec = { $: {} };
device.mojom.XRFrameDataRequestOptionsSpec = { $: {} };
device.mojom.VRService = {};
device.mojom.VRService.$interfaceName = 'device.mojom.VRService';
device.mojom.VRService_SetClient_ParamsSpec = { $: {} };
device.mojom.VRService_RequestSession_ParamsSpec = { $: {} };
device.mojom.VRService_RequestSession_ResponseParamsSpec = { $: {} };
device.mojom.VRService_SupportsSession_ParamsSpec = { $: {} };
device.mojom.VRService_SupportsSession_ResponseParamsSpec = { $: {} };
device.mojom.VRService_ExitPresent_ParamsSpec = { $: {} };
device.mojom.VRService_ExitPresent_ResponseParamsSpec = { $: {} };
device.mojom.VRService_SetFramesThrottled_ParamsSpec = { $: {} };
device.mojom.VRService_MakeXrCompatible_ParamsSpec = { $: {} };
device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec = { $: {} };
device.mojom.XRSessionMetricsRecorder = {};
device.mojom.XRSessionMetricsRecorder.$interfaceName = 'device.mojom.XRSessionMetricsRecorder';
device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec = { $: {} };
device.mojom.VRServiceClient = {};
device.mojom.VRServiceClient.$interfaceName = 'device.mojom.VRServiceClient';
device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec = { $: {} };
device.mojom.XREnvironmentIntegrationProvider = {};
device.mojom.XREnvironmentIntegrationProvider.$interfaceName = 'device.mojom.XREnvironmentIntegrationProvider';
device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec = { $: {} };
device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec = { $: {} };
device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec = { $: {} };
device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec = { $: {} };
device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec = { $: {} };
device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec = { $: {} };
device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec = { $: {} };
device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec = { $: {} };
device.mojom.XRFrameDataProvider = {};
device.mojom.XRFrameDataProvider.$interfaceName = 'device.mojom.XRFrameDataProvider';
device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec = { $: {} };
device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec = { $: {} };
device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec = { $: {} };
device.mojom.XRPresentationProvider = {};
device.mojom.XRPresentationProvider.$interfaceName = 'device.mojom.XRPresentationProvider';
device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec = { $: {} };
device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec = { $: {} };
device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec = { $: {} };
device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec = { $: {} };
device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec = { $: {} };
device.mojom.XRPresentationClient = {};
device.mojom.XRPresentationClient.$interfaceName = 'device.mojom.XRPresentationClient';
device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec = { $: {} };
device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec = { $: {} };
device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec = { $: {} };
device.mojom.XRSessionClient = {};
device.mojom.XRSessionClient.$interfaceName = 'device.mojom.XRSessionClient';
device.mojom.XRSessionClient_OnExitPresent_ParamsSpec = { $: {} };
device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec = { $: {} };
device.mojom.XRLayerManager = {};
device.mojom.XRLayerManager.$interfaceName = 'device.mojom.XRLayerManager';
device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec = { $: {} };
device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec = { $: {} };
device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec = { $: {} };
device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec = { $: {} };
device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec = { $: {} };
device.mojom.WebXrInternalsRendererListener = {};
device.mojom.WebXrInternalsRendererListener.$interfaceName = 'device.mojom.WebXrInternalsRendererListener';
device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec = { $: {} };
device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec = { $: {} };

device.mojom.kNumComponentsPerPixel = 4;

// Enum: XRHandedness
device.mojom.XRHandedness = {
  NONE: 0,
  LEFT: 1,
  RIGHT: 2,
};

// Enum: XRTargetRayMode
device.mojom.XRTargetRayMode = {
  GAZING: 1,
  POINTING: 2,
  TAPPING: 3,
};

// Enum: XRSessionFeatureRequestStatus
device.mojom.XRSessionFeatureRequestStatus = {
  kNotRequested: 0,
  kRequired: 1,
  kOptionalAccepted: 2,
  kOptionalRejected: 3,
};

// Enum: XREnvironmentBlendMode
device.mojom.XREnvironmentBlendMode = {
  kOpaque: 1,
  kAlphaBlend: 2,
  kAdditive: 3,
};

// Enum: XRInteractionMode
device.mojom.XRInteractionMode = {
  kScreenSpace: 1,
  kWorldSpace: 2,
};

// Enum: XREye
device.mojom.XREye = {
  kNone: 0,
  kLeft: 1,
  kRight: 2,
};

// Enum: XRPresentationTransportMethod
device.mojom.XRPresentationTransportMethod = {
  NONE: 0,
  SUBMIT_AS_TEXTURE_HANDLE: 1,
  SUBMIT_AS_MAILBOX_HOLDER: 2,
  DRAW_INTO_TEXTURE_MAILBOX: 3,
};

// Enum: XRReferenceSpaceType
device.mojom.XRReferenceSpaceType = {
  kViewer: 0,
  kLocal: 1,
  kLocalFloor: 2,
  kBoundedFloor: 3,
  kUnbounded: 4,
};

// Enum: XRInputSourceSpaceType
device.mojom.XRInputSourceSpaceType = {
  kTargetRay: 0,
  kGrip: 1,
};

// Enum: XRPlaneOrientation
device.mojom.XRPlaneOrientation = {
  UNKNOWN: 0,
  HORIZONTAL: 1,
  VERTICAL: 2,
};

// Enum: XRSemanticLabel
device.mojom.XRSemanticLabel = {
  kOther: 0,
  kFloor: 1,
  kWall: 2,
  kCeiling: 3,
  kTable: 4,
};

// Enum: XRLayerLayout
device.mojom.XRLayerLayout = {
  kMono: 0,
  kStereo: 1,
  kStereoLeftRight: 2,
  kStereoTopBottom: 3,
};

// Enum: CreateCompositionLayerResult
device.mojom.CreateCompositionLayerResult = {
  SUCCESS: 0,
  FAILURE: 1,
};

// Enum: XrCompatibleResult
device.mojom.XrCompatibleResult = {
  kAlreadyCompatible: 0,
  kNoDeviceAvailable: 1,
  kWebXrFeaturePolicyBlocked: 2,
  kCompatibleAfterRestart: 3,
  kNotCompatibleAfterRestart: 4,
};

// Enum: EntityTypeForHitTest
device.mojom.EntityTypeForHitTest = {
  POINT: 1,
  PLANE: 2,
};

// Enum: XRVisibilityState
device.mojom.XRVisibilityState = {
  VISIBLE: 1,
  VISIBLE_BLURRED: 2,
  HIDDEN: 3,
};

// Union: XRNativeOriginInformation
mojo.internal.Union(
    device.mojom.XRNativeOriginInformationSpec, 'device.mojom.XRNativeOriginInformation', {
      'input_source_space_info': {
        'ordinal': 0,
        'type': device.mojom.XRInputSourceSpaceInfoSpec.$,
        'nullable': false,
      },
      'plane_id': {
        'ordinal': 1,
        'type': device.mojom.PlaneIdSpec.$,
        'nullable': false,
      },
      'anchor_id': {
        'ordinal': 2,
        'type': device.mojom.AnchorIdSpec.$,
        'nullable': false,
      },
      'reference_space_type': {
        'ordinal': 3,
        'type': device.mojom.XRReferenceSpaceTypeSpec.$,
        'nullable': false,
      },
      'hand_joint_space_info': {
        'ordinal': 4,
        'type': device.mojom.XRHandJointSpaceInfoSpec.$,
        'nullable': false,
      },
      'image_index': {
        'ordinal': 5,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
    });

// Union: XRDepthData
mojo.internal.Union(
    device.mojom.XRDepthDataSpec, 'device.mojom.XRDepthData', {
      'data_still_valid': {
        'ordinal': 0,
        'type': device.mojom.XRDepthDataStillValidSpec.$,
        'nullable': false,
      },
      'updated_depth_data': {
        'ordinal': 1,
        'type': device.mojom.XRDepthDataUpdatedSpec.$,
        'nullable': false,
      },
    });

// Union: XRLayerSpecificData
mojo.internal.Union(
    device.mojom.XRLayerSpecificDataSpec, 'device.mojom.XRLayerSpecificData', {
      'projection': {
        'ordinal': 0,
        'type': device.mojom.XRProjectionLayerDataSpec.$,
        'nullable': false,
      },
      'quad': {
        'ordinal': 1,
        'type': device.mojom.XRQuadLayerDataSpec.$,
        'nullable': false,
      },
      'cylinder': {
        'ordinal': 2,
        'type': device.mojom.XRCylinderLayerDataSpec.$,
        'nullable': false,
      },
      'equirect': {
        'ordinal': 3,
        'type': device.mojom.XREquirectLayerDataSpec.$,
        'nullable': false,
      },
      'cube': {
        'ordinal': 4,
        'type': device.mojom.XRCubeLayerDataSpec.$,
        'nullable': false,
      },
    });

// Union: RequestSessionResult
mojo.internal.Union(
    device.mojom.RequestSessionResultSpec, 'device.mojom.RequestSessionResult', {
      'success': {
        'ordinal': 0,
        'type': device.mojom.RequestSessionSuccessSpec.$,
        'nullable': false,
      },
      'failure_reason': {
        'ordinal': 1,
        'type': device.mojom.RequestSessionErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: XRDepthConfig
mojo.internal.Struct(
    device.mojom.XRDepthConfigSpec, 'device.mojom.XRDepthConfig', [
      mojo.internal.StructField('depth_usage', 0, 0, device.mojom.XRDepthUsageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('depth_data_format', 8, 0, device.mojom.XRDepthDataFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('depth_type', 16, 0, device.mojom.XRDepthTypeSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRSessionDeviceConfig
mojo.internal.Struct(
    device.mojom.XRSessionDeviceConfigSpec, 'device.mojom.XRSessionDeviceConfig', [
      mojo.internal.StructField('views', 0, 0, mojo.internal.Array(device.mojom.XRViewSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('depth_configuration', 8, 0, device.mojom.XRDepthConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('default_framebuffer_scale', 16, 0, mojo.internal.Float, 1.0, false, 0, undefined),
      mojo.internal.StructField('supports_viewport_scaling', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_anti_aliasing', 20, 1, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRSession
mojo.internal.Struct(
    device.mojom.XRSessionSpec, 'device.mojom.XRSession', [
      mojo.internal.StructField('data_provider', 0, 0, mojo.internal.InterfaceProxy(device.mojom.XRFrameDataProviderRemote), null, false, 0, undefined),
      mojo.internal.StructField('layer_manager', 8, 0, mojo.internal.InterfaceProxy(device.mojom.XRLayerManagerRemote), null, true, 0, undefined),
      mojo.internal.StructField('client_receiver', 16, 0, mojo.internal.InterfaceRequest(device.mojom.XRSessionClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('submit_frame_sink', 24, 0, device.mojom.XRPresentationConnectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('enabled_features', 32, 0, mojo.internal.Array(device.mojom.XRSessionFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('device_config', 40, 0, device.mojom.XRSessionDeviceConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enviroment_blend_mode', 48, 0, device.mojom.XREnvironmentBlendModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('interaction_mode', 56, 0, device.mojom.XRInteractionModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wants_fullscreen', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: XRPresentationConnection
mojo.internal.Struct(
    device.mojom.XRPresentationConnectionSpec, 'device.mojom.XRPresentationConnection', [
      mojo.internal.StructField('provider', 0, 0, mojo.internal.InterfaceProxy(device.mojom.XRPresentationProviderRemote), null, false, 0, undefined),
      mojo.internal.StructField('client_receiver', 8, 0, mojo.internal.InterfaceRequest(device.mojom.XRPresentationClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('transport_options', 16, 0, device.mojom.XRPresentationTransportOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRInputSourceDescription
mojo.internal.Struct(
    device.mojom.XRInputSourceDescriptionSpec, 'device.mojom.XRInputSourceDescription', [
      mojo.internal.StructField('target_ray_mode', 0, 0, device.mojom.XRTargetRayModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('handedness', 8, 0, device.mojom.XRHandednessSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('input_from_pointer', 16, 0, gfx.mojom.TransformSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('profiles', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: XRInputSourceState
mojo.internal.Struct(
    device.mojom.XRInputSourceStateSpec, 'device.mojom.XRInputSourceState', [
      mojo.internal.StructField('description', 0, 0, device.mojom.XRInputSourceDescriptionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('mojo_from_input', 8, 0, gfx.mojom.TransformSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('gamepad', 16, 0, device.mojom.GamepadSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('overlay_pointer_position', 24, 0, gfx.mojom.PointFSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('hand_tracking_data', 32, 0, device.mojom.XRHandTrackingDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('source_id', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('emulated_position', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_auxiliary', 44, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('primary_input_pressed', 44, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('primary_input_clicked', 44, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('primary_squeeze_pressed', 44, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('primary_squeeze_clicked', 44, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: VRFieldOfView
mojo.internal.Struct(
    device.mojom.VRFieldOfViewSpec, 'device.mojom.VRFieldOfView', [
      mojo.internal.StructField('up_degrees', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('down_degrees', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('left_degrees', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('right_degrees', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VRPose
mojo.internal.Struct(
    device.mojom.VRPoseSpec, 'device.mojom.VRPose', [
      mojo.internal.StructField('orientation', 0, 0, gfx.mojom.QuaternionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('position', 8, 0, gfx.mojom.Point3FSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('emulated_position', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Pose
mojo.internal.Struct(
    device.mojom.PoseSpec, 'device.mojom.Pose', [
      mojo.internal.StructField('orientation', 0, 0, gfx.mojom.QuaternionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, gfx.mojom.Point3FSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnchorId
mojo.internal.Struct(
    device.mojom.AnchorIdSpec, 'device.mojom.AnchorId', [
      mojo.internal.StructField('id_value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HitTestSubscriptionId
mojo.internal.Struct(
    device.mojom.HitTestSubscriptionIdSpec, 'device.mojom.HitTestSubscriptionId', [
      mojo.internal.StructField('id_value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PlaneId
mojo.internal.Struct(
    device.mojom.PlaneIdSpec, 'device.mojom.PlaneId', [
      mojo.internal.StructField('id_value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XrVisibilityMaskId
mojo.internal.Struct(
    device.mojom.XrVisibilityMaskIdSpec, 'device.mojom.XrVisibilityMaskId', [
      mojo.internal.StructField('id_value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRRay
mojo.internal.Struct(
    device.mojom.XRRaySpec, 'device.mojom.XRRay', [
      mojo.internal.StructField('origin', 0, 0, gfx.mojom.Point3FSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('direction', 8, 0, gfx.mojom.Vector3dFSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRHitResult
mojo.internal.Struct(
    device.mojom.XRHitResultSpec, 'device.mojom.XRHitResult', [
      mojo.internal.StructField('mojo_from_result', 0, 0, device.mojom.PoseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('plane_id', 8, 0, device.mojom.PlaneIdSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRViewGeometry
mojo.internal.Struct(
    device.mojom.XRViewGeometrySpec, 'device.mojom.XRViewGeometry', [
      mojo.internal.StructField('field_of_view', 0, 0, device.mojom.VRFieldOfViewSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mojo_from_view', 8, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRVisibilityMask
mojo.internal.Struct(
    device.mojom.XRVisibilityMaskSpec, 'device.mojom.XRVisibilityMask', [
      mojo.internal.StructField('vertices', 0, 0, mojo.internal.Array(gfx.mojom.PointFSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('unvalidated_indices', 8, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRView
mojo.internal.Struct(
    device.mojom.XRViewSpec, 'device.mojom.XRView', [
      mojo.internal.StructField('eye', 0, 0, device.mojom.XREyeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('geometry', 8, 0, device.mojom.XRViewGeometrySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('viewport', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('depth_data', 24, 0, device.mojom.XRDepthDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('visibility_mask', 32, 0, device.mojom.XRVisibilityMaskSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('visibility_mask_id', 40, 0, device.mojom.XrVisibilityMaskIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_first_person_observer', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: VRStageParameters
mojo.internal.Struct(
    device.mojom.VRStageParametersSpec, 'device.mojom.VRStageParameters', [
      mojo.internal.StructField('mojo_from_stage', 0, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, mojo.internal.Array(gfx.mojom.Point3FSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRPresentationTransportOptions
mojo.internal.Struct(
    device.mojom.XRPresentationTransportOptionsSpec, 'device.mojom.XRPresentationTransportOptions', [
      mojo.internal.StructField('transport_method', 0, 0, device.mojom.XRPresentationTransportMethodSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wait_for_transfer_notification', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('wait_for_render_notification', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('wait_for_gpu_fence', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRInputSourceSpaceInfo
mojo.internal.Struct(
    device.mojom.XRInputSourceSpaceInfoSpec, 'device.mojom.XRInputSourceSpaceInfo', [
      mojo.internal.StructField('input_source_space_type', 0, 0, device.mojom.XRInputSourceSpaceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('input_source_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRHandJointSpaceInfo
mojo.internal.Struct(
    device.mojom.XRHandJointSpaceInfoSpec, 'device.mojom.XRHandJointSpaceInfo', [
      mojo.internal.StructField('handedness', 0, 0, device.mojom.XRHandednessSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('joint', 8, 0, device.mojom.XRHandJointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRPlanePointData
mojo.internal.Struct(
    device.mojom.XRPlanePointDataSpec, 'device.mojom.XRPlanePointData', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('z', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRPlaneData
mojo.internal.Struct(
    device.mojom.XRPlaneDataSpec, 'device.mojom.XRPlaneData', [
      mojo.internal.StructField('id', 0, 0, device.mojom.PlaneIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('orientation', 8, 0, device.mojom.XRPlaneOrientationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mojo_from_plane', 16, 0, device.mojom.PoseSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('semantic_label', 24, 0, device.mojom.XRSemanticLabelSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('polygon', 32, 0, mojo.internal.Array(device.mojom.XRPlanePointDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: XRPlaneDetectionData
mojo.internal.Struct(
    device.mojom.XRPlaneDetectionDataSpec, 'device.mojom.XRPlaneDetectionData', [
      mojo.internal.StructField('all_planes_ids', 0, 0, mojo.internal.Array(device.mojom.PlaneIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('updated_planes_data', 8, 0, mojo.internal.Array(device.mojom.XRPlaneDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRAnchorData
mojo.internal.Struct(
    device.mojom.XRAnchorDataSpec, 'device.mojom.XRAnchorData', [
      mojo.internal.StructField('id', 0, 0, device.mojom.AnchorIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mojo_from_anchor', 8, 0, device.mojom.PoseSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRAnchorsData
mojo.internal.Struct(
    device.mojom.XRAnchorsDataSpec, 'device.mojom.XRAnchorsData', [
      mojo.internal.StructField('all_anchors_ids', 0, 0, mojo.internal.Array(device.mojom.AnchorIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('updated_anchors_data', 8, 0, mojo.internal.Array(device.mojom.XRAnchorDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRHitTestSubscriptionResultData
mojo.internal.Struct(
    device.mojom.XRHitTestSubscriptionResultDataSpec, 'device.mojom.XRHitTestSubscriptionResultData', [
      mojo.internal.StructField('subscription_id', 0, 0, device.mojom.HitTestSubscriptionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hit_test_results', 8, 0, mojo.internal.Array(device.mojom.XRHitResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRHitTestTransientInputSubscriptionResultData
mojo.internal.Struct(
    device.mojom.XRHitTestTransientInputSubscriptionResultDataSpec, 'device.mojom.XRHitTestTransientInputSubscriptionResultData', [
      mojo.internal.StructField('subscription_id', 0, 0, device.mojom.HitTestSubscriptionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('input_source_id_to_hit_test_results', 8, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Array(device.mojom.XRHitResultSpec.$, false), false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRHitTestSubscriptionResultsData
mojo.internal.Struct(
    device.mojom.XRHitTestSubscriptionResultsDataSpec, 'device.mojom.XRHitTestSubscriptionResultsData', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(device.mojom.XRHitTestSubscriptionResultDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('transient_input_results', 8, 0, mojo.internal.Array(device.mojom.XRHitTestTransientInputSubscriptionResultDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RgbTupleF32
mojo.internal.Struct(
    device.mojom.RgbTupleF32Spec, 'device.mojom.RgbTupleF32', [
      mojo.internal.StructField('red', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('green', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('blue', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRSphericalHarmonics
mojo.internal.Struct(
    device.mojom.XRSphericalHarmonicsSpec, 'device.mojom.XRSphericalHarmonics', [
      mojo.internal.StructField('coefficients', 0, 0, mojo.internal.Array(device.mojom.RgbTupleF32Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRCubeMap
mojo.internal.Struct(
    device.mojom.XRCubeMapSpec, 'device.mojom.XRCubeMap', [
      mojo.internal.StructField('kNumComponentsPerPixel', 0, 0, mojo.internal.Pointer, 4, false, 0, undefined),
      mojo.internal.StructField('positive_x', 8, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('negative_x', 16, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('positive_y', 24, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('negative_y', 32, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('positive_z', 40, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('negative_z', 48, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('width_and_height', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: XRLightProbe
mojo.internal.Struct(
    device.mojom.XRLightProbeSpec, 'device.mojom.XRLightProbe', [
      mojo.internal.StructField('spherical_harmonics', 0, 0, device.mojom.XRSphericalHarmonicsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('main_light_direction', 8, 0, gfx.mojom.Vector3dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('main_light_intensity', 16, 0, device.mojom.RgbTupleF32Spec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRReflectionProbe
mojo.internal.Struct(
    device.mojom.XRReflectionProbeSpec, 'device.mojom.XRReflectionProbe', [
      mojo.internal.StructField('cube_map', 0, 0, device.mojom.XRCubeMapSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRLightEstimationData
mojo.internal.Struct(
    device.mojom.XRLightEstimationDataSpec, 'device.mojom.XRLightEstimationData', [
      mojo.internal.StructField('light_probe', 0, 0, device.mojom.XRLightProbeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('reflection_probe', 8, 0, device.mojom.XRReflectionProbeSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRDepthDataStillValid
mojo.internal.Struct(
    device.mojom.XRDepthDataStillValidSpec, 'device.mojom.XRDepthDataStillValid', [
    ],
    [[0, 8]]);

// Struct: XRDepthDataUpdated
mojo.internal.Struct(
    device.mojom.XRDepthDataUpdatedSpec, 'device.mojom.XRDepthDataUpdated', [
      mojo.internal.StructField('pixel_data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('norm_texture_from_norm_view', 8, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('view_geometry', 24, 0, device.mojom.XRViewGeometrySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('raw_value_to_meters', 32, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: XRTrackedImageData
mojo.internal.Struct(
    device.mojom.XRTrackedImageDataSpec, 'device.mojom.XRTrackedImageData', [
      mojo.internal.StructField('mojo_from_image', 0, 0, device.mojom.PoseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('width_in_meters', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('actively_tracked', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRTrackedImagesData
mojo.internal.Struct(
    device.mojom.XRTrackedImagesDataSpec, 'device.mojom.XRTrackedImagesData', [
      mojo.internal.StructField('images_data', 0, 0, mojo.internal.Array(device.mojom.XRTrackedImageDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('image_trackable_scores', 8, 0, mojo.internal.Array(mojo.internal.Bool, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LayerId
mojo.internal.Struct(
    device.mojom.LayerIdSpec, 'device.mojom.LayerId', [
      mojo.internal.StructField('id_value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRProjectionLayerData
mojo.internal.Struct(
    device.mojom.XRProjectionLayerDataSpec, 'device.mojom.XRProjectionLayerData', [
    ],
    [[0, 8]]);

// Struct: XRQuadLayerData
mojo.internal.Struct(
    device.mojom.XRQuadLayerDataSpec, 'device.mojom.XRQuadLayerData', [
      mojo.internal.StructField('native_origin_from_layer', 0, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('width', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('height', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRCylinderLayerData
mojo.internal.Struct(
    device.mojom.XRCylinderLayerDataSpec, 'device.mojom.XRCylinderLayerData', [
      mojo.internal.StructField('native_origin_from_layer', 0, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('radius', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('central_angle', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('aspect_ratio', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XREquirectLayerData
mojo.internal.Struct(
    device.mojom.XREquirectLayerDataSpec, 'device.mojom.XREquirectLayerData', [
      mojo.internal.StructField('native_origin_from_layer', 0, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('radius', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('central_horizontal_angle', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('upper_vertical_angle', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('lower_vertical_angle', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRCubeLayerData
mojo.internal.Struct(
    device.mojom.XRCubeLayerDataSpec, 'device.mojom.XRCubeLayerData', [
      mojo.internal.StructField('orientation', 0, 0, gfx.mojom.QuaternionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRLayerReadOnlyData
mojo.internal.Struct(
    device.mojom.XRLayerReadOnlyDataSpec, 'device.mojom.XRLayerReadOnlyData', [
      mojo.internal.StructField('layer_id', 0, 0, device.mojom.LayerIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('layout', 8, 0, device.mojom.XRLayerLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('texture_width', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('texture_height', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_static', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: XRLayerMutableData
mojo.internal.Struct(
    device.mojom.XRLayerMutableDataSpec, 'device.mojom.XRLayerMutableData', [
      mojo.internal.StructField('native_origin_information', 0, 0, device.mojom.XRNativeOriginInformationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('layer_data', 8, 0, device.mojom.XRLayerSpecificDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('opacity', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('blend_texture_source_alpha', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRCompositionLayerData
mojo.internal.Struct(
    device.mojom.XRCompositionLayerDataSpec, 'device.mojom.XRCompositionLayerData', [
      mojo.internal.StructField('read_only_data', 0, 0, device.mojom.XRLayerReadOnlyDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mutable_data', 8, 0, device.mojom.XRLayerMutableDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRLayerFrameData
mojo.internal.Struct(
    device.mojom.XRLayerFrameDataSpec, 'device.mojom.XRLayerFrameData', [
      mojo.internal.StructField('layer_id', 0, 0, device.mojom.LayerIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_shared_image', 8, 0, gpu.mojom.ExportedSharedImageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_sync_token', 16, 0, gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRRenderInfo
mojo.internal.Struct(
    device.mojom.XRRenderInfoSpec, 'device.mojom.XRRenderInfo', [
      mojo.internal.StructField('mojo_from_viewer', 0, 0, device.mojom.VRPoseSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('views', 8, 0, mojo.internal.Array(device.mojom.XRViewSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('frame_id', 16, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRFrameData
mojo.internal.Struct(
    device.mojom.XRFrameDataSpec, 'device.mojom.XRFrameData', [
      mojo.internal.StructField('render_info', 0, 0, device.mojom.XRRenderInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('time_delta', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_shared_image', 16, 0, gpu.mojom.ExportedSharedImageSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('buffer_sync_token', 24, 0, gpu.mojom.SyncTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('camera_image_buffer_shared_image', 32, 0, gpu.mojom.ExportedSharedImageSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('camera_image_buffer_sync_token', 40, 0, gpu.mojom.SyncTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('camera_image_size', 48, 0, gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('mojo_from_floor', 56, 0, gfx.mojom.TransformSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('input_state', 64, 0, mojo.internal.Array(device.mojom.XRInputSourceStateSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('stage_parameters', 72, 0, device.mojom.VRStageParametersSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('detected_planes_data', 80, 0, device.mojom.XRPlaneDetectionDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('anchors_data', 88, 0, device.mojom.XRAnchorsDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('composition_layers_data', 96, 0, mojo.internal.Array(device.mojom.XRLayerFrameDataSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('light_estimation_data', 104, 0, device.mojom.XRLightEstimationDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('hit_test_subscription_results', 112, 0, device.mojom.XRHitTestSubscriptionResultsDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('tracked_images', 120, 0, device.mojom.XRTrackedImagesDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('stage_parameters_id', 128, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('rendering_time_ratio', 132, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('mojo_space_reset', 136, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 152]]);

// Struct: RequestSessionSuccess
mojo.internal.Struct(
    device.mojom.RequestSessionSuccessSpec, 'device.mojom.RequestSessionSuccess', [
      mojo.internal.StructField('session', 0, 0, device.mojom.XRSessionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trace_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('metrics_recorder', 16, 0, mojo.internal.InterfaceProxy(device.mojom.XRSessionMetricsRecorderRemote), null, false, 0, undefined),
      mojo.internal.StructField('xr_internals_listener', 24, 0, mojo.internal.InterfaceProxy(device.mojom.WebXrInternalsRendererListenerRemote), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: XRFrameDataRequestOptions
mojo.internal.Struct(
    device.mojom.XRFrameDataRequestOptionsSpec, 'device.mojom.XRFrameDataRequestOptions', [
      mojo.internal.StructField('stage_parameters_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('include_lighting_estimation_data', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('depth_active', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: VRService
mojo.internal.Struct(
    device.mojom.VRService_SetClient_ParamsSpec, 'device.mojom.VRService_SetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(device.mojom.VRServiceClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.VRService_RequestSession_ParamsSpec, 'device.mojom.VRService_RequestSession_Params', [
      mojo.internal.StructField('options', 0, 0, device.mojom.XRSessionOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.VRService_RequestSession_ResponseParamsSpec, 'device.mojom.VRService_RequestSession_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.RequestSessionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.VRService_SupportsSession_ParamsSpec, 'device.mojom.VRService_SupportsSession_Params', [
      mojo.internal.StructField('options', 0, 0, device.mojom.XRSessionOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.VRService_SupportsSession_ResponseParamsSpec, 'device.mojom.VRService_SupportsSession_ResponseParams', [
      mojo.internal.StructField('supports_session', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.VRService_ExitPresent_ParamsSpec, 'device.mojom.VRService_ExitPresent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.VRService_ExitPresent_ResponseParamsSpec, 'device.mojom.VRService_ExitPresent_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.VRService_SetFramesThrottled_ParamsSpec, 'device.mojom.VRService_SetFramesThrottled_Params', [
      mojo.internal.StructField('throttled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.VRService_MakeXrCompatible_ParamsSpec, 'device.mojom.VRService_MakeXrCompatible_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec, 'device.mojom.VRService_MakeXrCompatible_ResponseParams', [
      mojo.internal.StructField('xr_compatible_result', 0, 0, device.mojom.XrCompatibleResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.VRServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.VRServiceRemote = class {
  static get $interfaceName() {
    return 'device.mojom.VRService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.VRServicePendingReceiver,
      handle);
    this.$ = new device.mojom.VRServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setClient(client) {
    return this.$.setClient(client);
  }
  requestSession(options) {
    return this.$.requestSession(options);
  }
  supportsSession(options) {
    return this.$.supportsSession(options);
  }
  exitPresent() {
    return this.$.exitPresent();
  }
  setFramesThrottled(throttled) {
    return this.$.setFramesThrottled(throttled);
  }
  makeXrCompatible() {
    return this.$.makeXrCompatible();
  }
};

device.mojom.VRServiceRemoteCallHandler = class {
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

  setClient(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.VRService_SetClient_ParamsSpec,
      null,
      [client],
      false);
  }

  requestSession(options) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.VRService_RequestSession_ParamsSpec,
      device.mojom.VRService_RequestSession_ResponseParamsSpec,
      [options],
      false);
  }

  supportsSession(options) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.VRService_SupportsSession_ParamsSpec,
      device.mojom.VRService_SupportsSession_ResponseParamsSpec,
      [options],
      false);
  }

  exitPresent() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.VRService_ExitPresent_ParamsSpec,
      device.mojom.VRService_ExitPresent_ResponseParamsSpec,
      [],
      false);
  }

  setFramesThrottled(throttled) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      device.mojom.VRService_SetFramesThrottled_ParamsSpec,
      null,
      [throttled],
      false);
  }

  makeXrCompatible() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      device.mojom.VRService_MakeXrCompatible_ParamsSpec,
      device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec,
      [],
      false);
  }

};

device.mojom.VRService.getRemote = function() {
  let remote = new device.mojom.VRServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.VRService',
    'context');
  return remote.$;
};

device.mojom.VRServiceReceiver = class {
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(device.mojom.VRService_SetClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.VRService_RequestSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.VRService_SupportsSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.VRService_ExitPresent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.VRService_SetFramesThrottled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.VRService_MakeXrCompatible_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.VRService_SetClient_ParamsSpec.$.structSpec);
          const result = this.impl.setClient(params.client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.VRService_RequestSession_ParamsSpec.$.structSpec);
          const result = this.impl.requestSession(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.VRService_RequestSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.VRService_SupportsSession_ParamsSpec.$.structSpec);
          const result = this.impl.supportsSession(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.VRService_SupportsSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.VRService_ExitPresent_ParamsSpec.$.structSpec);
          const result = this.impl.exitPresent();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.VRService_ExitPresent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.VRService_SetFramesThrottled_ParamsSpec.$.structSpec);
          const result = this.impl.setFramesThrottled(params.throttled);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.VRService_MakeXrCompatible_ParamsSpec.$.structSpec);
          const result = this.impl.makeXrCompatible();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec);
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

device.mojom.VRServiceReceiver = device.mojom.VRServiceReceiver;

device.mojom.VRServicePtr = device.mojom.VRServiceRemote;
device.mojom.VRServiceRequest = device.mojom.VRServicePendingReceiver;


// Interface: XRSessionMetricsRecorder
mojo.internal.Struct(
    device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec, 'device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_Params', [
      mojo.internal.StructField('feature', 0, 0, device.mojom.XRSessionFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.XRSessionMetricsRecorderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.XRSessionMetricsRecorderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRSessionMetricsRecorder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.XRSessionMetricsRecorderPendingReceiver,
      handle);
    this.$ = new device.mojom.XRSessionMetricsRecorderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  reportFeatureUsed(feature) {
    return this.$.reportFeatureUsed(feature);
  }
};

device.mojom.XRSessionMetricsRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRSessionMetricsRecorder', [
      { explicit: null },
    ]);
  }

  reportFeatureUsed(feature) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec,
      null,
      [feature],
      false);
  }

};

device.mojom.XRSessionMetricsRecorder.getRemote = function() {
  let remote = new device.mojom.XRSessionMetricsRecorderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRSessionMetricsRecorder',
    'context');
  return remote.$;
};

device.mojom.XRSessionMetricsRecorderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRSessionMetricsRecorder', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec.$.structSpec);
          const result = this.impl.reportFeatureUsed(params.feature);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.XRSessionMetricsRecorderReceiver = device.mojom.XRSessionMetricsRecorderReceiver;

device.mojom.XRSessionMetricsRecorderPtr = device.mojom.XRSessionMetricsRecorderRemote;
device.mojom.XRSessionMetricsRecorderRequest = device.mojom.XRSessionMetricsRecorderPendingReceiver;


// Interface: VRServiceClient
mojo.internal.Struct(
    device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec, 'device.mojom.VRServiceClient_OnDeviceChanged_Params', [
    ],
    [[0, 8]]);

device.mojom.VRServiceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.VRServiceClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.VRServiceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.VRServiceClientPendingReceiver,
      handle);
    this.$ = new device.mojom.VRServiceClientRemoteCallHandler(this.proxy);
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

device.mojom.VRServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VRServiceClient', [
      { explicit: null },
    ]);
  }

  onDeviceChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

device.mojom.VRServiceClient.getRemote = function() {
  let remote = new device.mojom.VRServiceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.VRServiceClient',
    'context');
  return remote.$;
};

device.mojom.VRServiceClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VRServiceClient', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onDeviceChanged();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.VRServiceClientReceiver = device.mojom.VRServiceClientReceiver;

device.mojom.VRServiceClientPtr = device.mojom.VRServiceClientRemote;
device.mojom.VRServiceClientRequest = device.mojom.VRServiceClientPendingReceiver;


// Interface: XREnvironmentIntegrationProvider
mojo.internal.Struct(
    device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_Params', [
      mojo.internal.StructField('native_origin_information', 0, 0, device.mojom.XRNativeOriginInformationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('entity_types', 8, 0, mojo.internal.Array(device.mojom.EntityTypeForHitTestSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('ray', 16, 0, device.mojom.XRRaySpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParams', [
      mojo.internal.StructField('subscription_id', 0, 0, device.mojom.HitTestSubscriptionIdSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_Params', [
      mojo.internal.StructField('profile_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('entity_types', 8, 0, mojo.internal.Array(device.mojom.EntityTypeForHitTestSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('ray', 16, 0, device.mojom.XRRaySpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParams', [
      mojo.internal.StructField('subscription_id', 0, 0, device.mojom.HitTestSubscriptionIdSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_Params', [
      mojo.internal.StructField('subscription_id', 0, 0, device.mojom.HitTestSubscriptionIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_Params', [
      mojo.internal.StructField('native_origin_information', 0, 0, device.mojom.XRNativeOriginInformationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('native_origin_from_anchor', 8, 0, device.mojom.PoseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('plane_id', 16, 0, device.mojom.PlaneIdSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParams', [
      mojo.internal.StructField('anchor_id', 0, 0, device.mojom.AnchorIdSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_Params', [
      mojo.internal.StructField('anchor_id', 0, 0, device.mojom.AnchorIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.XREnvironmentIntegrationProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.XREnvironmentIntegrationProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XREnvironmentIntegrationProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.XREnvironmentIntegrationProviderPendingReceiver,
      handle);
    this.$ = new device.mojom.XREnvironmentIntegrationProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  subscribeToHitTest(native_origin_information, entity_types, ray) {
    return this.$.subscribeToHitTest(native_origin_information, entity_types, ray);
  }
  subscribeToHitTestForTransientInput(profile_name, entity_types, ray) {
    return this.$.subscribeToHitTestForTransientInput(profile_name, entity_types, ray);
  }
  unsubscribeFromHitTest(subscription_id) {
    return this.$.unsubscribeFromHitTest(subscription_id);
  }
  createAnchor(native_origin_information, native_origin_from_anchor, plane_id) {
    return this.$.createAnchor(native_origin_information, native_origin_from_anchor, plane_id);
  }
  detachAnchor(anchor_id) {
    return this.$.detachAnchor(anchor_id);
  }
};

device.mojom.XREnvironmentIntegrationProviderRemoteCallHandler = class {
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

  subscribeToHitTest(native_origin_information, entity_types, ray) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec,
      device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec,
      [native_origin_information, entity_types, ray],
      false);
  }

  subscribeToHitTestForTransientInput(profile_name, entity_types, ray) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec,
      device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec,
      [profile_name, entity_types, ray],
      false);
  }

  unsubscribeFromHitTest(subscription_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec,
      null,
      [subscription_id],
      false);
  }

  createAnchor(native_origin_information, native_origin_from_anchor, plane_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec,
      device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec,
      [native_origin_information, native_origin_from_anchor, plane_id],
      false);
  }

  detachAnchor(anchor_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec,
      null,
      [anchor_id],
      false);
  }

};

device.mojom.XREnvironmentIntegrationProvider.getRemote = function() {
  let remote = new device.mojom.XREnvironmentIntegrationProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XREnvironmentIntegrationProvider',
    'context');
  return remote.$;
};

device.mojom.XREnvironmentIntegrationProviderReceiver = class {
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec.$.structSpec);
          const result = this.impl.subscribeToHitTest(params.native_origin_information, params.entity_types, params.ray);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec.$.structSpec);
          const result = this.impl.subscribeToHitTestForTransientInput(params.profile_name, params.entity_types, params.ray);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec.$.structSpec);
          const result = this.impl.unsubscribeFromHitTest(params.subscription_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec.$.structSpec);
          const result = this.impl.createAnchor(params.native_origin_information, params.native_origin_from_anchor, params.plane_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec.$.structSpec);
          const result = this.impl.detachAnchor(params.anchor_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.XREnvironmentIntegrationProviderReceiver = device.mojom.XREnvironmentIntegrationProviderReceiver;

device.mojom.XREnvironmentIntegrationProviderPtr = device.mojom.XREnvironmentIntegrationProviderRemote;
device.mojom.XREnvironmentIntegrationProviderRequest = device.mojom.XREnvironmentIntegrationProviderPendingReceiver;


// Interface: XRFrameDataProvider
mojo.internal.Struct(
    device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec, 'device.mojom.XRFrameDataProvider_GetFrameData_Params', [
      mojo.internal.StructField('options', 0, 0, device.mojom.XRFrameDataRequestOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec, 'device.mojom.XRFrameDataProvider_GetFrameData_ResponseParams', [
      mojo.internal.StructField('frame_data', 0, 0, device.mojom.XRFrameDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec, 'device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_Params', [
      mojo.internal.StructField('environment_provider', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.XRFrameDataProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.XRFrameDataProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRFrameDataProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.XRFrameDataProviderPendingReceiver,
      handle);
    this.$ = new device.mojom.XRFrameDataProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getFrameData(options) {
    return this.$.getFrameData(options);
  }
  getEnvironmentIntegrationProvider(environment_provider) {
    return this.$.getEnvironmentIntegrationProvider(environment_provider);
  }
};

device.mojom.XRFrameDataProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRFrameDataProvider', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getFrameData(options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec,
      device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec,
      [options],
      false);
  }

  getEnvironmentIntegrationProvider(environment_provider) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec,
      null,
      [environment_provider],
      false);
  }

};

device.mojom.XRFrameDataProvider.getRemote = function() {
  let remote = new device.mojom.XRFrameDataProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRFrameDataProvider',
    'context');
  return remote.$;
};

device.mojom.XRFrameDataProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRFrameDataProvider', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec.$.structSpec);
          const result = this.impl.getFrameData(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec.$.structSpec);
          const result = this.impl.getEnvironmentIntegrationProvider(params.environment_provider);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.XRFrameDataProviderReceiver = device.mojom.XRFrameDataProviderReceiver;

device.mojom.XRFrameDataProviderPtr = device.mojom.XRFrameDataProviderRemote;
device.mojom.XRFrameDataProviderRequest = device.mojom.XRFrameDataProviderPendingReceiver;


// Interface: XRPresentationProvider
mojo.internal.Struct(
    device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec, 'device.mojom.XRPresentationProvider_UpdateLayerBounds_Params', [
      mojo.internal.StructField('left_bounds', 0, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('right_bounds', 8, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_size', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_id', 24, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec, 'device.mojom.XRPresentationProvider_SubmitFrameMissing_Params', [
      mojo.internal.StructField('sync_token', 0, 0, gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_id', 8, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec, 'device.mojom.XRPresentationProvider_SubmitFrame_Params', [
      mojo.internal.StructField('time_waited', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_id', 8, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec, 'device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_Params', [
      mojo.internal.StructField('texture', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('sync_token', 8, 0, gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_id', 16, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec, 'device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_Params', [
      mojo.internal.StructField('layer_ids', 0, 0, mojo.internal.Array(device.mojom.LayerIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('sync_token', 8, 0, gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('time_waited', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_id', 24, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 40]]);

device.mojom.XRPresentationProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.XRPresentationProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRPresentationProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.XRPresentationProviderPendingReceiver,
      handle);
    this.$ = new device.mojom.XRPresentationProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  updateLayerBounds(frame_id, left_bounds, right_bounds, source_size) {
    return this.$.updateLayerBounds(frame_id, left_bounds, right_bounds, source_size);
  }
  submitFrameMissing(frame_id, sync_token) {
    return this.$.submitFrameMissing(frame_id, sync_token);
  }
  submitFrame(frame_id, time_waited) {
    return this.$.submitFrame(frame_id, time_waited);
  }
  submitFrameWithTextureHandle(frame_id, texture, sync_token) {
    return this.$.submitFrameWithTextureHandle(frame_id, texture, sync_token);
  }
  submitFrameDrawnIntoTexture(frame_id, layer_ids, sync_token, time_waited) {
    return this.$.submitFrameDrawnIntoTexture(frame_id, layer_ids, sync_token, time_waited);
  }
};

device.mojom.XRPresentationProviderRemoteCallHandler = class {
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

  updateLayerBounds(frame_id, left_bounds, right_bounds, source_size) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec,
      null,
      [frame_id, left_bounds, right_bounds, source_size],
      false);
  }

  submitFrameMissing(frame_id, sync_token) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec,
      null,
      [frame_id, sync_token],
      false);
  }

  submitFrame(frame_id, time_waited) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec,
      null,
      [frame_id, time_waited],
      false);
  }

  submitFrameWithTextureHandle(frame_id, texture, sync_token) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec,
      null,
      [frame_id, texture, sync_token],
      false);
  }

  submitFrameDrawnIntoTexture(frame_id, layer_ids, sync_token, time_waited) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec,
      null,
      [frame_id, layer_ids, sync_token, time_waited],
      false);
  }

};

device.mojom.XRPresentationProvider.getRemote = function() {
  let remote = new device.mojom.XRPresentationProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRPresentationProvider',
    'context');
  return remote.$;
};

device.mojom.XRPresentationProviderReceiver = class {
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec.$.structSpec);
          const result = this.impl.updateLayerBounds(params.frame_id, params.left_bounds, params.right_bounds, params.source_size);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec.$.structSpec);
          const result = this.impl.submitFrameMissing(params.frame_id, params.sync_token);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec.$.structSpec);
          const result = this.impl.submitFrame(params.frame_id, params.time_waited);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec.$.structSpec);
          const result = this.impl.submitFrameWithTextureHandle(params.frame_id, params.texture, params.sync_token);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec.$.structSpec);
          const result = this.impl.submitFrameDrawnIntoTexture(params.frame_id, params.layer_ids, params.sync_token, params.time_waited);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.XRPresentationProviderReceiver = device.mojom.XRPresentationProviderReceiver;

device.mojom.XRPresentationProviderPtr = device.mojom.XRPresentationProviderRemote;
device.mojom.XRPresentationProviderRequest = device.mojom.XRPresentationProviderPendingReceiver;


// Interface: XRPresentationClient
mojo.internal.Struct(
    device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec, 'device.mojom.XRPresentationClient_OnSubmitFrameTransferred_Params', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec, 'device.mojom.XRPresentationClient_OnSubmitFrameRendered_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec, 'device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_Params', [
      mojo.internal.StructField('gpu_fence_handle', 0, 0, gfx.mojom.GpuFenceHandleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.XRPresentationClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.XRPresentationClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRPresentationClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.XRPresentationClientPendingReceiver,
      handle);
    this.$ = new device.mojom.XRPresentationClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSubmitFrameTransferred(success) {
    return this.$.onSubmitFrameTransferred(success);
  }
  onSubmitFrameRendered() {
    return this.$.onSubmitFrameRendered();
  }
  onSubmitFrameGpuFence(gpu_fence_handle) {
    return this.$.onSubmitFrameGpuFence(gpu_fence_handle);
  }
};

device.mojom.XRPresentationClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRPresentationClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onSubmitFrameTransferred(success) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec,
      null,
      [success],
      false);
  }

  onSubmitFrameRendered() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec,
      null,
      [],
      false);
  }

  onSubmitFrameGpuFence(gpu_fence_handle) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec,
      null,
      [gpu_fence_handle],
      false);
  }

};

device.mojom.XRPresentationClient.getRemote = function() {
  let remote = new device.mojom.XRPresentationClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRPresentationClient',
    'context');
  return remote.$;
};

device.mojom.XRPresentationClientReceiver = class {
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec.$.structSpec);
          const result = this.impl.onSubmitFrameTransferred(params.success);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec.$.structSpec);
          const result = this.impl.onSubmitFrameRendered();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec.$.structSpec);
          const result = this.impl.onSubmitFrameGpuFence(params.gpu_fence_handle);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.XRPresentationClientReceiver = device.mojom.XRPresentationClientReceiver;

device.mojom.XRPresentationClientPtr = device.mojom.XRPresentationClientRemote;
device.mojom.XRPresentationClientRequest = device.mojom.XRPresentationClientPendingReceiver;


// Interface: XRSessionClient
mojo.internal.Struct(
    device.mojom.XRSessionClient_OnExitPresent_ParamsSpec, 'device.mojom.XRSessionClient_OnExitPresent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec, 'device.mojom.XRSessionClient_OnVisibilityStateChanged_Params', [
      mojo.internal.StructField('visibility_state', 0, 0, device.mojom.XRVisibilityStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.XRSessionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.XRSessionClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRSessionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.XRSessionClientPendingReceiver,
      handle);
    this.$ = new device.mojom.XRSessionClientRemoteCallHandler(this.proxy);
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
  onVisibilityStateChanged(visibility_state) {
    return this.$.onVisibilityStateChanged(visibility_state);
  }
};

device.mojom.XRSessionClientRemoteCallHandler = class {
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
      device.mojom.XRSessionClient_OnExitPresent_ParamsSpec,
      null,
      [],
      false);
  }

  onVisibilityStateChanged(visibility_state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec,
      null,
      [visibility_state],
      false);
  }

};

device.mojom.XRSessionClient.getRemote = function() {
  let remote = new device.mojom.XRSessionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRSessionClient',
    'context');
  return remote.$;
};

device.mojom.XRSessionClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRSessionClient', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(device.mojom.XRSessionClient_OnExitPresent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRSessionClient_OnExitPresent_ParamsSpec.$.structSpec);
          const result = this.impl.onExitPresent();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onVisibilityStateChanged(params.visibility_state);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.XRSessionClientReceiver = device.mojom.XRSessionClientReceiver;

device.mojom.XRSessionClientPtr = device.mojom.XRSessionClientRemote;
device.mojom.XRSessionClientRequest = device.mojom.XRSessionClientPendingReceiver;


// Interface: XRLayerManager
mojo.internal.Struct(
    device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec, 'device.mojom.XRLayerManager_CreateCompositionLayer_Params', [
      mojo.internal.StructField('create_data', 0, 0, device.mojom.XRCompositionLayerDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec, 'device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParams', [
      mojo.internal.StructField('code', 0, 0, device.mojom.CreateCompositionLayerResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec, 'device.mojom.XRLayerManager_DestroyCompositionLayer_Params', [
      mojo.internal.StructField('layer_id', 0, 0, device.mojom.LayerIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec, 'device.mojom.XRLayerManager_UpdateCompositionLayer_Params', [
      mojo.internal.StructField('layer_id', 0, 0, device.mojom.LayerIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('update_data', 8, 0, device.mojom.XRLayerMutableDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec, 'device.mojom.XRLayerManager_SetEnabledCompositionLayers_Params', [
      mojo.internal.StructField('layer_ids', 0, 0, mojo.internal.Array(device.mojom.LayerIdSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.XRLayerManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.XRLayerManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRLayerManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.XRLayerManagerPendingReceiver,
      handle);
    this.$ = new device.mojom.XRLayerManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createCompositionLayer(create_data) {
    return this.$.createCompositionLayer(create_data);
  }
  destroyCompositionLayer(layer_id) {
    return this.$.destroyCompositionLayer(layer_id);
  }
  updateCompositionLayer(layer_id, update_data) {
    return this.$.updateCompositionLayer(layer_id, update_data);
  }
  setEnabledCompositionLayers(layer_ids) {
    return this.$.setEnabledCompositionLayers(layer_ids);
  }
};

device.mojom.XRLayerManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRLayerManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createCompositionLayer(create_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec,
      device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec,
      [create_data],
      false);
  }

  destroyCompositionLayer(layer_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec,
      null,
      [layer_id],
      false);
  }

  updateCompositionLayer(layer_id, update_data) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec,
      null,
      [layer_id, update_data],
      false);
  }

  setEnabledCompositionLayers(layer_ids) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec,
      null,
      [layer_ids],
      false);
  }

};

device.mojom.XRLayerManager.getRemote = function() {
  let remote = new device.mojom.XRLayerManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRLayerManager',
    'context');
  return remote.$;
};

device.mojom.XRLayerManagerReceiver = class {
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec.$.structSpec);
          const result = this.impl.createCompositionLayer(params.create_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec.$.structSpec);
          const result = this.impl.destroyCompositionLayer(params.layer_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec.$.structSpec);
          const result = this.impl.updateCompositionLayer(params.layer_id, params.update_data);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec.$.structSpec);
          const result = this.impl.setEnabledCompositionLayers(params.layer_ids);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.XRLayerManagerReceiver = device.mojom.XRLayerManagerReceiver;

device.mojom.XRLayerManagerPtr = device.mojom.XRLayerManagerRemote;
device.mojom.XRLayerManagerRequest = device.mojom.XRLayerManagerPendingReceiver;


// Interface: WebXrInternalsRendererListener
mojo.internal.Struct(
    device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec, 'device.mojom.WebXrInternalsRendererListener_OnFrameData_Params', [
      mojo.internal.StructField('xrframe_statistics', 0, 0, device.mojom.XrFrameStatisticsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec, 'device.mojom.WebXrInternalsRendererListener_OnConsoleLog_Params', [
      mojo.internal.StructField('xrlogging_statistics', 0, 0, device.mojom.XrLogMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.WebXrInternalsRendererListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.WebXrInternalsRendererListenerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.WebXrInternalsRendererListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.WebXrInternalsRendererListenerPendingReceiver,
      handle);
    this.$ = new device.mojom.WebXrInternalsRendererListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onFrameData(xrframe_statistics) {
    return this.$.onFrameData(xrframe_statistics);
  }
  onConsoleLog(xrlogging_statistics) {
    return this.$.onConsoleLog(xrlogging_statistics);
  }
};

device.mojom.WebXrInternalsRendererListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebXrInternalsRendererListener', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onFrameData(xrframe_statistics) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec,
      null,
      [xrframe_statistics],
      false);
  }

  onConsoleLog(xrlogging_statistics) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec,
      null,
      [xrlogging_statistics],
      false);
  }

};

device.mojom.WebXrInternalsRendererListener.getRemote = function() {
  let remote = new device.mojom.WebXrInternalsRendererListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.WebXrInternalsRendererListener',
    'context');
  return remote.$;
};

device.mojom.WebXrInternalsRendererListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebXrInternalsRendererListener', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec.$.structSpec);
          const result = this.impl.onFrameData(params.xrframe_statistics);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec.$.structSpec);
          const result = this.impl.onConsoleLog(params.xrlogging_statistics);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.WebXrInternalsRendererListenerReceiver = device.mojom.WebXrInternalsRendererListenerReceiver;

device.mojom.WebXrInternalsRendererListenerPtr = device.mojom.WebXrInternalsRendererListenerRemote;
device.mojom.WebXrInternalsRendererListenerRequest = device.mojom.WebXrInternalsRendererListenerPendingReceiver;

