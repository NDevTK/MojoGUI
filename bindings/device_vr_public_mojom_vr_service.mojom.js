// Auto-generated MojoJS binding
// Source: chromium_src/device/vr/public/mojom/vr_service.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: XRHandedness
device.mojom.XRHandedness = {
  NONE: 0,
  LEFT: 1,
  RIGHT: 2,
};

// Enum: XRTargetRayMode
device.mojom.XRTargetRayMode = {
  GAZING: 0,
  POINTING: 1,
  TAPPING: 2,
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
  kOpaque: 0,
  kAlphaBlend: 1,
  kAdditive: 2,
};

// Enum: XRInteractionMode
device.mojom.XRInteractionMode = {
  kScreenSpace: 0,
  kWorldSpace: 1,
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
  POINT: 0,
  PLANE: 1,
};

// Enum: XRVisibilityState
device.mojom.XRVisibilityState = {
  VISIBLE: 0,
  VISIBLE_BLURRED: 1,
  HIDDEN: 2,
};

// Struct: XRDepthConfig
device.mojom.XRDepthConfigSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRDepthConfig',
      packedSize: 16,
      fields: [
        { name: 'depth_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRSessionDeviceConfig
device.mojom.XRSessionDeviceConfigSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRSessionDeviceConfig',
      packedSize: 16,
      fields: [
        { name: 'depth_configuration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRSession
device.mojom.XRSessionSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRSession',
      packedSize: 16,
      fields: [
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRPresentationConnection
device.mojom.XRPresentationConnectionSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRPresentationConnection',
      packedSize: 16,
      fields: [
        { name: 'transport_options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRInputSourceDescription
device.mojom.XRInputSourceDescriptionSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRInputSourceDescription',
      packedSize: 16,
      fields: [
        { name: 'profiles', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRInputSourceState
device.mojom.XRInputSourceStateSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRInputSourceState',
      packedSize: 16,
      fields: [
        { name: 'hand_tracking_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VRFieldOfView
device.mojom.VRFieldOfViewSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.VRFieldOfView',
      packedSize: 16,
      fields: [
        { name: 'right_degrees', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VRPose
device.mojom.VRPoseSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.VRPose',
      packedSize: 16,
      fields: [
        { name: 'emulated_position', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Pose
device.mojom.PoseSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Pose',
      packedSize: 16,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AnchorId
device.mojom.AnchorIdSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.AnchorId',
      packedSize: 16,
      fields: [
        { name: 'id_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HitTestSubscriptionId
device.mojom.HitTestSubscriptionIdSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HitTestSubscriptionId',
      packedSize: 16,
      fields: [
        { name: 'id_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PlaneId
device.mojom.PlaneIdSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PlaneId',
      packedSize: 16,
      fields: [
        { name: 'id_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XrVisibilityMaskId
device.mojom.XrVisibilityMaskIdSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XrVisibilityMaskId',
      packedSize: 16,
      fields: [
        { name: 'id_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRRay
device.mojom.XRRaySpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRRay',
      packedSize: 16,
      fields: [
        { name: 'direction', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRHitResult
device.mojom.XRHitResultSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRHitResult',
      packedSize: 16,
      fields: [
        { name: 'plane_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRViewGeometry
device.mojom.XRViewGeometrySpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRViewGeometry',
      packedSize: 16,
      fields: [
        { name: 'mojo_from_view', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRVisibilityMask
device.mojom.XRVisibilityMaskSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRVisibilityMask',
      packedSize: 16,
      fields: [
        { name: 'unvalidated_indices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRView
device.mojom.XRViewSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRView',
      packedSize: 16,
      fields: [
        { name: 'visibility_mask_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VRStageParameters
device.mojom.VRStageParametersSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.VRStageParameters',
      packedSize: 16,
      fields: [
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRPresentationTransportOptions
device.mojom.XRPresentationTransportOptionsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRPresentationTransportOptions',
      packedSize: 16,
      fields: [
        { name: 'wait_for_gpu_fence', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRInputSourceSpaceInfo
device.mojom.XRInputSourceSpaceInfoSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRInputSourceSpaceInfo',
      packedSize: 16,
      fields: [
        { name: 'input_source_space_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRHandJointSpaceInfo
device.mojom.XRHandJointSpaceInfoSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRHandJointSpaceInfo',
      packedSize: 16,
      fields: [
        { name: 'joint', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRPlanePointData
device.mojom.XRPlanePointDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRPlanePointData',
      packedSize: 16,
      fields: [
        { name: 'z', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRPlaneData
device.mojom.XRPlaneDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRPlaneData',
      packedSize: 16,
      fields: [
        { name: 'polygon', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRPlaneDetectionData
device.mojom.XRPlaneDetectionDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRPlaneDetectionData',
      packedSize: 16,
      fields: [
        { name: 'updated_planes_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRAnchorData
device.mojom.XRAnchorDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRAnchorData',
      packedSize: 16,
      fields: [
        { name: 'mojo_from_anchor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRAnchorsData
device.mojom.XRAnchorsDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRAnchorsData',
      packedSize: 16,
      fields: [
        { name: 'updated_anchors_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRHitTestSubscriptionResultData
device.mojom.XRHitTestSubscriptionResultDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRHitTestSubscriptionResultData',
      packedSize: 16,
      fields: [
        { name: 'hit_test_results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRHitTestTransientInputSubscriptionResultData
device.mojom.XRHitTestTransientInputSubscriptionResultDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRHitTestTransientInputSubscriptionResultData',
      packedSize: 16,
      fields: [
        { name: 'input_source_id_to_hit_test_results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRHitTestSubscriptionResultsData
device.mojom.XRHitTestSubscriptionResultsDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRHitTestSubscriptionResultsData',
      packedSize: 16,
      fields: [
        { name: 'transient_input_results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RgbTupleF32
device.mojom.RgbTupleF32Spec = {
  $: {
    structSpec: {
      name: 'device.mojom.RgbTupleF32',
      packedSize: 16,
      fields: [
        { name: 'blue', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRSphericalHarmonics
device.mojom.XRSphericalHarmonicsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRSphericalHarmonics',
      packedSize: 16,
      fields: [
        { name: 'coefficients', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRCubeMap
device.mojom.XRCubeMapSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRCubeMap',
      packedSize: 16,
      fields: [
        { name: 'negative_z', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRLightProbe
device.mojom.XRLightProbeSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRLightProbe',
      packedSize: 16,
      fields: [
        { name: 'main_light_intensity', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRReflectionProbe
device.mojom.XRReflectionProbeSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRReflectionProbe',
      packedSize: 16,
      fields: [
        { name: 'cube_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRLightEstimationData
device.mojom.XRLightEstimationDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRLightEstimationData',
      packedSize: 16,
      fields: [
        { name: 'reflection_probe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRDepthDataStillValid
device.mojom.XRDepthDataStillValidSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRDepthDataStillValid',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRDepthDataUpdated
device.mojom.XRDepthDataUpdatedSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRDepthDataUpdated',
      packedSize: 16,
      fields: [
        { name: 'view_geometry', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRTrackedImageData
device.mojom.XRTrackedImageDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRTrackedImageData',
      packedSize: 16,
      fields: [
        { name: 'width_in_meters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRTrackedImagesData
device.mojom.XRTrackedImagesDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRTrackedImagesData',
      packedSize: 16,
      fields: [
        { name: 'image_trackable_scores', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LayerId
device.mojom.LayerIdSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.LayerId',
      packedSize: 16,
      fields: [
        { name: 'id_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRProjectionLayerData
device.mojom.XRProjectionLayerDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRProjectionLayerData',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRQuadLayerData
device.mojom.XRQuadLayerDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRQuadLayerData',
      packedSize: 16,
      fields: [
        { name: 'height', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRCylinderLayerData
device.mojom.XRCylinderLayerDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRCylinderLayerData',
      packedSize: 16,
      fields: [
        { name: 'aspect_ratio', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XREquirectLayerData
device.mojom.XREquirectLayerDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XREquirectLayerData',
      packedSize: 16,
      fields: [
        { name: 'lower_vertical_angle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRCubeLayerData
device.mojom.XRCubeLayerDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRCubeLayerData',
      packedSize: 16,
      fields: [
        { name: 'orientation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRLayerReadOnlyData
device.mojom.XRLayerReadOnlyDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRLayerReadOnlyData',
      packedSize: 16,
      fields: [
        { name: 'is_static', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRLayerMutableData
device.mojom.XRLayerMutableDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRLayerMutableData',
      packedSize: 16,
      fields: [
        { name: 'layer_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRCompositionLayerData
device.mojom.XRCompositionLayerDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRCompositionLayerData',
      packedSize: 16,
      fields: [
        { name: 'mutable_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRLayerFrameData
device.mojom.XRLayerFrameDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRLayerFrameData',
      packedSize: 16,
      fields: [
        { name: 'buffer_sync_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRRenderInfo
device.mojom.XRRenderInfoSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRRenderInfo',
      packedSize: 16,
      fields: [
        { name: 'views', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRFrameData
device.mojom.XRFrameDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRFrameData',
      packedSize: 16,
      fields: [
        { name: 'tracked_images', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RequestSessionSuccess
device.mojom.RequestSessionSuccessSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.RequestSessionSuccess',
      packedSize: 16,
      fields: [
        { name: 'xr_internals_listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRFrameDataRequestOptions
device.mojom.XRFrameDataRequestOptionsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRFrameDataRequestOptions',
      packedSize: 16,
      fields: [
        { name: 'stage_parameters_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: VRService
device.mojom.VRService = {};

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
};

device.mojom.VRServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.VRService_SetClient_ParamsSpec,
      null,
      [client]);
  }

  requestSession(options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.VRService_RequestSession_ParamsSpec,
      device.mojom.VRService_RequestSession_ResponseParamsSpec,
      [options]);
  }

  supportsSession(options) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.VRService_SupportsSession_ParamsSpec,
      device.mojom.VRService_SupportsSession_ResponseParamsSpec,
      [options]);
  }

  exitPresent() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.VRService_ExitPresent_ParamsSpec,
      null,
      []);
  }

  setFramesThrottled(throttled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.VRService_SetFramesThrottled_ParamsSpec,
      null,
      [throttled]);
  }

  makeXrCompatible() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.VRService_MakeXrCompatible_ParamsSpec,
      device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec,
      []);
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

// ParamsSpec for SetClient
device.mojom.VRService_SetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.VRService.SetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestSession
device.mojom.VRService_RequestSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.VRService.RequestSession_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.VRService_RequestSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.VRService.RequestSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SupportsSession
device.mojom.VRService_SupportsSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.VRService.SupportsSession_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.VRService_SupportsSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.VRService.SupportsSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'supports_session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExitPresent
device.mojom.VRService_ExitPresent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.VRService.ExitPresent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetFramesThrottled
device.mojom.VRService_SetFramesThrottled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.VRService.SetFramesThrottled_Params',
      packedSize: 16,
      fields: [
        { name: 'throttled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MakeXrCompatible
device.mojom.VRService_MakeXrCompatible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.VRService.MakeXrCompatible_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.VRService.MakeXrCompatible_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'xr_compatible_result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.VRServicePtr = device.mojom.VRServiceRemote;
device.mojom.VRServiceRequest = device.mojom.VRServicePendingReceiver;


// Interface: XRSessionMetricsRecorder
device.mojom.XRSessionMetricsRecorder = {};

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
};

device.mojom.XRSessionMetricsRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  reportFeatureUsed(feature) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec,
      null,
      [feature]);
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

// ParamsSpec for ReportFeatureUsed
device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRSessionMetricsRecorder.ReportFeatureUsed_Params',
      packedSize: 16,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.XRSessionMetricsRecorderPtr = device.mojom.XRSessionMetricsRecorderRemote;
device.mojom.XRSessionMetricsRecorderRequest = device.mojom.XRSessionMetricsRecorderPendingReceiver;


// Interface: VRServiceClient
device.mojom.VRServiceClient = {};

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
};

device.mojom.VRServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDeviceChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnDeviceChanged
device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.VRServiceClient.OnDeviceChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.VRServiceClientPtr = device.mojom.VRServiceClientRemote;
device.mojom.VRServiceClientRequest = device.mojom.VRServiceClientPendingReceiver;


// Interface: XREnvironmentIntegrationProvider
device.mojom.XREnvironmentIntegrationProvider = {};

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
};

device.mojom.XREnvironmentIntegrationProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  subscribeToHitTest(native_origin_information, entity_types, ray) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec,
      device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec,
      [native_origin_information, entity_types, ray]);
  }

  subscribeToHitTestForTransientInput(profile_name, entity_types, ray) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec,
      device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec,
      [profile_name, entity_types, ray]);
  }

  unsubscribeFromHitTest(subscription_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec,
      null,
      [subscription_id]);
  }

  createAnchor(native_origin_information, native_origin_from_anchor, plane_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec,
      device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec,
      [native_origin_information, native_origin_from_anchor, plane_id]);
  }

  detachAnchor(anchor_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec,
      null,
      [anchor_id]);
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

// ParamsSpec for SubscribeToHitTest
device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XREnvironmentIntegrationProvider.SubscribeToHitTest_Params',
      packedSize: 32,
      fields: [
        { name: 'native_origin_information', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'entity_types', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'ray', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XREnvironmentIntegrationProvider.SubscribeToHitTest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'subscription_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SubscribeToHitTestForTransientInput
device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XREnvironmentIntegrationProvider.SubscribeToHitTestForTransientInput_Params',
      packedSize: 32,
      fields: [
        { name: 'profile_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'entity_types', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'ray', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XREnvironmentIntegrationProvider.SubscribeToHitTestForTransientInput_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'subscription_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UnsubscribeFromHitTest
device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XREnvironmentIntegrationProvider.UnsubscribeFromHitTest_Params',
      packedSize: 16,
      fields: [
        { name: 'subscription_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateAnchor
device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XREnvironmentIntegrationProvider.CreateAnchor_Params',
      packedSize: 32,
      fields: [
        { name: 'native_origin_information', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'native_origin_from_anchor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'plane_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XREnvironmentIntegrationProvider.CreateAnchor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'anchor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DetachAnchor
device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XREnvironmentIntegrationProvider.DetachAnchor_Params',
      packedSize: 16,
      fields: [
        { name: 'anchor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.XREnvironmentIntegrationProviderPtr = device.mojom.XREnvironmentIntegrationProviderRemote;
device.mojom.XREnvironmentIntegrationProviderRequest = device.mojom.XREnvironmentIntegrationProviderPendingReceiver;


// Interface: XRFrameDataProvider
device.mojom.XRFrameDataProvider = {};

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
};

device.mojom.XRFrameDataProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getFrameData(options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec,
      device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec,
      [options]);
  }

  getEnvironmentIntegrationProvider(environment_provider) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec,
      null,
      [environment_provider]);
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

// ParamsSpec for GetFrameData
device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRFrameDataProvider.GetFrameData_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRFrameDataProvider.GetFrameData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'frame_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetEnvironmentIntegrationProvider
device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRFrameDataProvider.GetEnvironmentIntegrationProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'environment_provider', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.XRFrameDataProviderPtr = device.mojom.XRFrameDataProviderRemote;
device.mojom.XRFrameDataProviderRequest = device.mojom.XRFrameDataProviderPendingReceiver;


// Interface: XRPresentationProvider
device.mojom.XRPresentationProvider = {};

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
};

device.mojom.XRPresentationProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateLayerBounds(frame_id, left_bounds, right_bounds, source_size) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec,
      null,
      [frame_id, left_bounds, right_bounds, source_size]);
  }

  submitFrameMissing(frame_id, sync_token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec,
      null,
      [frame_id, sync_token]);
  }

  submitFrame(frame_id, time_waited) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec,
      null,
      [frame_id, time_waited]);
  }

  submitFrameWithTextureHandle(frame_id, texture, sync_token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec,
      null,
      [frame_id, texture, sync_token]);
  }

  submitFrameDrawnIntoTexture(frame_id, layer_ids, sync_token, time_waited) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec,
      null,
      [frame_id, layer_ids, sync_token, time_waited]);
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

// ParamsSpec for UpdateLayerBounds
device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRPresentationProvider.UpdateLayerBounds_Params',
      packedSize: 40,
      fields: [
        { name: 'left_bounds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'right_bounds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'source_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'frame_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SubmitFrameMissing
device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRPresentationProvider.SubmitFrameMissing_Params',
      packedSize: 24,
      fields: [
        { name: 'sync_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'frame_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SubmitFrame
device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRPresentationProvider.SubmitFrame_Params',
      packedSize: 24,
      fields: [
        { name: 'time_waited', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'frame_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SubmitFrameWithTextureHandle
device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRPresentationProvider.SubmitFrameWithTextureHandle_Params',
      packedSize: 32,
      fields: [
        { name: 'texture', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'sync_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'frame_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SubmitFrameDrawnIntoTexture
device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRPresentationProvider.SubmitFrameDrawnIntoTexture_Params',
      packedSize: 40,
      fields: [
        { name: 'layer_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'sync_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'time_waited', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'frame_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.XRPresentationProviderPtr = device.mojom.XRPresentationProviderRemote;
device.mojom.XRPresentationProviderRequest = device.mojom.XRPresentationProviderPendingReceiver;


// Interface: XRPresentationClient
device.mojom.XRPresentationClient = {};

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
};

device.mojom.XRPresentationClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSubmitFrameTransferred(success) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec,
      null,
      [success]);
  }

  onSubmitFrameRendered() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec,
      null,
      []);
  }

  onSubmitFrameGpuFence(gpu_fence_handle) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec,
      null,
      [gpu_fence_handle]);
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

// ParamsSpec for OnSubmitFrameTransferred
device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRPresentationClient.OnSubmitFrameTransferred_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSubmitFrameRendered
device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRPresentationClient.OnSubmitFrameRendered_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSubmitFrameGpuFence
device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRPresentationClient.OnSubmitFrameGpuFence_Params',
      packedSize: 16,
      fields: [
        { name: 'gpu_fence_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.XRPresentationClientPtr = device.mojom.XRPresentationClientRemote;
device.mojom.XRPresentationClientRequest = device.mojom.XRPresentationClientPendingReceiver;


// Interface: XRSessionClient
device.mojom.XRSessionClient = {};

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
};

device.mojom.XRSessionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onExitPresent() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.XRSessionClient_OnExitPresent_ParamsSpec,
      null,
      []);
  }

  onVisibilityStateChanged(visibility_state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec,
      null,
      [visibility_state]);
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

// ParamsSpec for OnExitPresent
device.mojom.XRSessionClient_OnExitPresent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRSessionClient.OnExitPresent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnVisibilityStateChanged
device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRSessionClient.OnVisibilityStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'visibility_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.XRSessionClientPtr = device.mojom.XRSessionClientRemote;
device.mojom.XRSessionClientRequest = device.mojom.XRSessionClientPendingReceiver;


// Interface: XRLayerManager
device.mojom.XRLayerManager = {};

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
};

device.mojom.XRLayerManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCompositionLayer(create_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec,
      device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec,
      [create_data]);
  }

  destroyCompositionLayer(layer_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec,
      null,
      [layer_id]);
  }

  updateCompositionLayer(layer_id, update_data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec,
      null,
      [layer_id, update_data]);
  }

  setEnabledCompositionLayers(layer_ids) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec,
      null,
      [layer_ids]);
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

// ParamsSpec for CreateCompositionLayer
device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRLayerManager.CreateCompositionLayer_Params',
      packedSize: 16,
      fields: [
        { name: 'create_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRLayerManager.CreateCompositionLayer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DestroyCompositionLayer
device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRLayerManager.DestroyCompositionLayer_Params',
      packedSize: 16,
      fields: [
        { name: 'layer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateCompositionLayer
device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRLayerManager.UpdateCompositionLayer_Params',
      packedSize: 24,
      fields: [
        { name: 'layer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'update_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetEnabledCompositionLayers
device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRLayerManager.SetEnabledCompositionLayers_Params',
      packedSize: 16,
      fields: [
        { name: 'layer_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.XRLayerManagerPtr = device.mojom.XRLayerManagerRemote;
device.mojom.XRLayerManagerRequest = device.mojom.XRLayerManagerPendingReceiver;


// Interface: WebXrInternalsRendererListener
device.mojom.WebXrInternalsRendererListener = {};

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
};

device.mojom.WebXrInternalsRendererListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFrameData(xrframe_statistics) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec,
      null,
      [xrframe_statistics]);
  }

  onConsoleLog(xrlogging_statistics) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec,
      null,
      [xrlogging_statistics]);
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

// ParamsSpec for OnFrameData
device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WebXrInternalsRendererListener.OnFrameData_Params',
      packedSize: 16,
      fields: [
        { name: 'xrframe_statistics', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnConsoleLog
device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WebXrInternalsRendererListener.OnConsoleLog_Params',
      packedSize: 16,
      fields: [
        { name: 'xrlogging_statistics', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.WebXrInternalsRendererListenerPtr = device.mojom.WebXrInternalsRendererListenerRemote;
device.mojom.WebXrInternalsRendererListenerRequest = device.mojom.WebXrInternalsRendererListenerPendingReceiver;

