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
      packedSize: 32,
      fields: [
        { name: 'depth_usage', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRDepthUsageSpec, nullable: false },
        { name: 'depth_data_format', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRDepthDataFormatSpec, nullable: false },
        { name: 'depth_type', packedOffset: 16, packedBitOffset: 0, type: device.mojom.XRDepthTypeSpec, nullable: true },
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
      packedSize: 40,
      fields: [
        { name: 'views', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'depth_configuration', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRDepthConfigSpec, nullable: true },
        { name: 'default_framebuffer_scale', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'supports_viewport_scaling', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_anti_aliasing', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 72,
      fields: [
        { name: 'submit_frame_sink', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRPresentationConnectionSpec, nullable: true },
        { name: 'enabled_features', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'device_config', packedOffset: 16, packedBitOffset: 0, type: device.mojom.XRSessionDeviceConfigSpec, nullable: false },
        { name: 'enviroment_blend_mode', packedOffset: 24, packedBitOffset: 0, type: device.mojom.XREnvironmentBlendModeSpec, nullable: false },
        { name: 'interaction_mode', packedOffset: 32, packedBitOffset: 0, type: device.mojom.XRInteractionModeSpec, nullable: false },
        { name: 'wants_fullscreen', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'data_provider', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'layer_manager', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'client_receiver', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
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
      packedSize: 24,
      fields: [
        { name: 'transport_options', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRPresentationTransportOptionsSpec, nullable: false },
        { name: 'provider', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'client_receiver', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
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
      packedSize: 40,
      fields: [
        { name: 'target_ray_mode', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRTargetRayModeSpec, nullable: false },
        { name: 'handedness', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRHandednessSpec, nullable: false },
        { name: 'input_from_pointer', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: true },
        { name: 'profiles', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 64,
      fields: [
        { name: 'description', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRInputSourceDescriptionSpec, nullable: true },
        { name: 'mojo_from_input', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: true },
        { name: 'gamepad', packedOffset: 16, packedBitOffset: 0, type: device.mojom.GamepadSpec, nullable: true },
        { name: 'overlay_pointer_position', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: true },
        { name: 'hand_tracking_data', packedOffset: 32, packedBitOffset: 0, type: device.mojom.XRHandTrackingDataSpec, nullable: true },
        { name: 'source_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'emulated_position', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_auxiliary', packedOffset: 44, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'primary_input_pressed', packedOffset: 44, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'primary_input_clicked', packedOffset: 44, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'primary_squeeze_pressed', packedOffset: 44, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'primary_squeeze_clicked', packedOffset: 44, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'up_degrees', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'down_degrees', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'left_degrees', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'right_degrees', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'orientation', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.QuaternionSpec, nullable: true },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.Point3FSpec, nullable: true },
        { name: 'emulated_position', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'orientation', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.QuaternionSpec, nullable: false },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.Point3FSpec, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.Point3FSpec, nullable: false },
        { name: 'direction', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.Vector3dFSpec, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'mojo_from_result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.PoseSpec, nullable: false },
        { name: 'plane_id', packedOffset: 8, packedBitOffset: 0, type: device.mojom.PlaneIdSpec, nullable: true },
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
      packedSize: 24,
      fields: [
        { name: 'field_of_view', packedOffset: 0, packedBitOffset: 0, type: device.mojom.VRFieldOfViewSpec, nullable: false },
        { name: 'mojo_from_view', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'vertices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'unvalidated_indices', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 64,
      fields: [
        { name: 'eye', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XREyeSpec, nullable: false },
        { name: 'geometry', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRViewGeometrySpec, nullable: false },
        { name: 'viewport', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'depth_data', packedOffset: 24, packedBitOffset: 0, type: device.mojom.XRDepthDataSpec, nullable: true },
        { name: 'visibility_mask', packedOffset: 32, packedBitOffset: 0, type: device.mojom.XRVisibilityMaskSpec, nullable: true },
        { name: 'visibility_mask_id', packedOffset: 40, packedBitOffset: 0, type: device.mojom.XrVisibilityMaskIdSpec, nullable: false },
        { name: 'is_first_person_observer', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'mojo_from_stage', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 24,
      fields: [
        { name: 'transport_method', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRPresentationTransportMethodSpec, nullable: false },
        { name: 'wait_for_transfer_notification', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'wait_for_render_notification', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'wait_for_gpu_fence', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'input_source_space_type', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRInputSourceSpaceTypeSpec, nullable: false },
        { name: 'input_source_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'handedness', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRHandednessSpec, nullable: false },
        { name: 'joint', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRHandJointSpec, nullable: false },
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
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'z', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
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
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.PlaneIdSpec, nullable: false },
        { name: 'orientation', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRPlaneOrientationSpec, nullable: false },
        { name: 'mojo_from_plane', packedOffset: 16, packedBitOffset: 0, type: device.mojom.PoseSpec, nullable: true },
        { name: 'semantic_label', packedOffset: 24, packedBitOffset: 0, type: device.mojom.XRSemanticLabelSpec, nullable: true },
        { name: 'polygon', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'all_planes_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'updated_planes_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.AnchorIdSpec, nullable: false },
        { name: 'mojo_from_anchor', packedOffset: 8, packedBitOffset: 0, type: device.mojom.PoseSpec, nullable: true },
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
      packedSize: 24,
      fields: [
        { name: 'all_anchors_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'updated_anchors_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'subscription_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.HitTestSubscriptionIdSpec, nullable: false },
        { name: 'hit_test_results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'subscription_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.HitTestSubscriptionIdSpec, nullable: false },
        { name: 'input_source_id_to_hit_test_results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'transient_input_results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'red', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'green', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'blue', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
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
      packedSize: 72,
      fields: [
        { name: 'kNumComponentsPerPixel', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'positive_x', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'negative_x', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'positive_y', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'negative_y', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'positive_z', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'negative_z', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'width_and_height', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'spherical_harmonics', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRSphericalHarmonicsSpec, nullable: false },
        { name: 'main_light_direction', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.Vector3dFSpec, nullable: false },
        { name: 'main_light_intensity', packedOffset: 16, packedBitOffset: 0, type: device.mojom.RgbTupleF32Spec, nullable: false },
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
        { name: 'cube_map', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRCubeMapSpec, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'light_probe', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRLightProbeSpec, nullable: true },
        { name: 'reflection_probe', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRReflectionProbeSpec, nullable: true },
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
      packedSize: 48,
      fields: [
        { name: 'pixel_data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
        { name: 'norm_texture_from_norm_view', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'view_geometry', packedOffset: 24, packedBitOffset: 0, type: device.mojom.XRViewGeometrySpec, nullable: true },
        { name: 'raw_value_to_meters', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'mojo_from_image', packedOffset: 0, packedBitOffset: 0, type: device.mojom.PoseSpec, nullable: false },
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'width_in_meters', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'actively_tracked', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'images_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'image_trackable_scores', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 24,
      fields: [
        { name: 'native_origin_from_layer', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false },
        { name: 'width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'height', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'native_origin_from_layer', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false },
        { name: 'radius', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'central_angle', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'aspect_ratio', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'native_origin_from_layer', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false },
        { name: 'radius', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'central_horizontal_angle', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'upper_vertical_angle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'lower_vertical_angle', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
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
        { name: 'orientation', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.QuaternionSpec, nullable: false },
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
      packedSize: 40,
      fields: [
        { name: 'layer_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.LayerIdSpec, nullable: false },
        { name: 'layout', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRLayerLayoutSpec, nullable: false },
        { name: 'texture_width', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'texture_height', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'is_static', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 40,
      fields: [
        { name: 'native_origin_information', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRNativeOriginInformationSpec, nullable: false },
        { name: 'layer_data', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRLayerSpecificDataSpec, nullable: false },
        { name: 'opacity', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'blend_texture_source_alpha', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'read_only_data', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRLayerReadOnlyDataSpec, nullable: false },
        { name: 'mutable_data', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRLayerMutableDataSpec, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'layer_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.LayerIdSpec, nullable: false },
        { name: 'buffer_shared_image', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.ExportedSharedImageSpec, nullable: false },
        { name: 'buffer_sync_token', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'mojo_from_viewer', packedOffset: 0, packedBitOffset: 0, type: device.mojom.VRPoseSpec, nullable: true },
        { name: 'views', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'frame_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false },
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
      packedSize: 152,
      fields: [
        { name: 'render_info', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRRenderInfoSpec, nullable: false },
        { name: 'time_delta', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'buffer_shared_image', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.ExportedSharedImageSpec, nullable: true },
        { name: 'buffer_sync_token', packedOffset: 24, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: true },
        { name: 'camera_image_buffer_shared_image', packedOffset: 32, packedBitOffset: 0, type: gpu.mojom.ExportedSharedImageSpec, nullable: true },
        { name: 'camera_image_buffer_sync_token', packedOffset: 40, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: true },
        { name: 'camera_image_size', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: true },
        { name: 'mojo_from_floor', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: true },
        { name: 'input_state', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'stage_parameters', packedOffset: 72, packedBitOffset: 0, type: device.mojom.VRStageParametersSpec, nullable: true },
        { name: 'detected_planes_data', packedOffset: 80, packedBitOffset: 0, type: device.mojom.XRPlaneDetectionDataSpec, nullable: true },
        { name: 'anchors_data', packedOffset: 88, packedBitOffset: 0, type: device.mojom.XRAnchorsDataSpec, nullable: true },
        { name: 'composition_layers_data', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'light_estimation_data', packedOffset: 104, packedBitOffset: 0, type: device.mojom.XRLightEstimationDataSpec, nullable: true },
        { name: 'hit_test_subscription_results', packedOffset: 112, packedBitOffset: 0, type: device.mojom.XRHitTestSubscriptionResultsDataSpec, nullable: true },
        { name: 'tracked_images', packedOffset: 120, packedBitOffset: 0, type: device.mojom.XRTrackedImagesDataSpec, nullable: true },
        { name: 'stage_parameters_id', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'rendering_time_ratio', packedOffset: 132, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'mojo_space_reset', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRSessionSpec, nullable: false },
        { name: 'trace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'metrics_recorder', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'xr_internals_listener', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
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
      packedSize: 24,
      fields: [
        { name: 'stage_parameters_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'include_lighting_estimation_data', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'depth_active', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
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
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRSessionOptionsSpec, nullable: false },
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
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.RequestSessionResultSpec, nullable: false },
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
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRSessionOptionsSpec, nullable: false },
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
        { name: 'xr_compatible_result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XrCompatibleResultSpec, nullable: false },
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
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRSessionFeatureSpec, nullable: false },
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
        { name: 'native_origin_information', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRNativeOriginInformationSpec, nullable: false },
        { name: 'entity_types', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'ray', packedOffset: 16, packedBitOffset: 0, type: device.mojom.XRRaySpec, nullable: false },
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
        { name: 'subscription_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.HitTestSubscriptionIdSpec, nullable: true },
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
        { name: 'ray', packedOffset: 16, packedBitOffset: 0, type: device.mojom.XRRaySpec, nullable: false },
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
        { name: 'subscription_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.HitTestSubscriptionIdSpec, nullable: true },
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
        { name: 'subscription_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.HitTestSubscriptionIdSpec, nullable: false },
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
        { name: 'native_origin_information', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRNativeOriginInformationSpec, nullable: false },
        { name: 'native_origin_from_anchor', packedOffset: 8, packedBitOffset: 0, type: device.mojom.PoseSpec, nullable: false },
        { name: 'plane_id', packedOffset: 16, packedBitOffset: 0, type: device.mojom.PlaneIdSpec, nullable: true },
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
        { name: 'anchor_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.AnchorIdSpec, nullable: true },
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
        { name: 'anchor_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.AnchorIdSpec, nullable: false },
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
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRFrameDataRequestOptionsSpec, nullable: true },
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
        { name: 'frame_data', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRFrameDataSpec, nullable: true },
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
        { name: 'left_bounds', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'right_bounds', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'source_size', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
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
        { name: 'sync_token', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false },
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
        { name: 'time_waited', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
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
        { name: 'sync_token', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false },
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
        { name: 'sync_token', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false },
        { name: 'time_waited', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
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
        { name: 'gpu_fence_handle', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.GpuFenceHandleSpec, nullable: false },
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
        { name: 'visibility_state', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRVisibilityStateSpec, nullable: false },
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
        { name: 'create_data', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRCompositionLayerDataSpec, nullable: false },
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
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: device.mojom.CreateCompositionLayerResultSpec, nullable: false },
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
        { name: 'layer_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.LayerIdSpec, nullable: false },
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
        { name: 'layer_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.LayerIdSpec, nullable: false },
        { name: 'update_data', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRLayerMutableDataSpec, nullable: false },
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
        { name: 'xrframe_statistics', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XrFrameStatisticsSpec, nullable: false },
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
        { name: 'xrlogging_statistics', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XrLogMessageSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.WebXrInternalsRendererListenerPtr = device.mojom.WebXrInternalsRendererListenerRemote;
device.mojom.WebXrInternalsRendererListenerRequest = device.mojom.WebXrInternalsRendererListenerPendingReceiver;

