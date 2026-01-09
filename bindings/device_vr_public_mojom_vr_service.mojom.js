// Auto-generated MojoJS binding
// Source: chromium_src/device/vr/public/mojom/vr_service.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


device.mojom.kNumComponentsPerPixel = 4;

// Enum: XRHandedness
device.mojom.XRHandedness = {
  NONE: 0,
  LEFT: 1,
  RIGHT: 2,
};
device.mojom.XRHandednessSpec = { $: mojo.internal.Enum() };

// Enum: XRTargetRayMode
device.mojom.XRTargetRayMode = {
  GAZING: 0,
  POINTING: 1,
  TAPPING: 2,
};
device.mojom.XRTargetRayModeSpec = { $: mojo.internal.Enum() };

// Enum: XRSessionFeatureRequestStatus
device.mojom.XRSessionFeatureRequestStatus = {
  kNotRequested: 0,
  kRequired: 1,
  kOptionalAccepted: 2,
  kOptionalRejected: 3,
};
device.mojom.XRSessionFeatureRequestStatusSpec = { $: mojo.internal.Enum() };

// Enum: XREnvironmentBlendMode
device.mojom.XREnvironmentBlendMode = {
  kOpaque: 0,
  kAlphaBlend: 1,
  kAdditive: 2,
};
device.mojom.XREnvironmentBlendModeSpec = { $: mojo.internal.Enum() };

// Enum: XRInteractionMode
device.mojom.XRInteractionMode = {
  kScreenSpace: 0,
  kWorldSpace: 1,
};
device.mojom.XRInteractionModeSpec = { $: mojo.internal.Enum() };

// Enum: XREye
device.mojom.XREye = {
  kNone: 0,
  kLeft: 1,
  kRight: 2,
};
device.mojom.XREyeSpec = { $: mojo.internal.Enum() };

// Enum: XRPresentationTransportMethod
device.mojom.XRPresentationTransportMethod = {
  NONE: 0,
  SUBMIT_AS_TEXTURE_HANDLE: 1,
  SUBMIT_AS_MAILBOX_HOLDER: 2,
  DRAW_INTO_TEXTURE_MAILBOX: 3,
};
device.mojom.XRPresentationTransportMethodSpec = { $: mojo.internal.Enum() };

// Enum: XRReferenceSpaceType
device.mojom.XRReferenceSpaceType = {
  kViewer: 0,
  kLocal: 1,
  kLocalFloor: 2,
  kBoundedFloor: 3,
  kUnbounded: 4,
};
device.mojom.XRReferenceSpaceTypeSpec = { $: mojo.internal.Enum() };

// Enum: XRInputSourceSpaceType
device.mojom.XRInputSourceSpaceType = {
  kTargetRay: 0,
  kGrip: 1,
};
device.mojom.XRInputSourceSpaceTypeSpec = { $: mojo.internal.Enum() };

// Enum: XRPlaneOrientation
device.mojom.XRPlaneOrientation = {
  UNKNOWN: 0,
  HORIZONTAL: 1,
  VERTICAL: 2,
};
device.mojom.XRPlaneOrientationSpec = { $: mojo.internal.Enum() };

// Enum: XRSemanticLabel
device.mojom.XRSemanticLabel = {
  kOther: 0,
  kFloor: 1,
  kWall: 2,
  kCeiling: 3,
  kTable: 4,
};
device.mojom.XRSemanticLabelSpec = { $: mojo.internal.Enum() };

// Enum: XRLayerLayout
device.mojom.XRLayerLayout = {
  kMono: 0,
  kStereo: 1,
  kStereoLeftRight: 2,
  kStereoTopBottom: 3,
};
device.mojom.XRLayerLayoutSpec = { $: mojo.internal.Enum() };

// Enum: CreateCompositionLayerResult
device.mojom.CreateCompositionLayerResult = {
  SUCCESS: 0,
  FAILURE: 1,
};
device.mojom.CreateCompositionLayerResultSpec = { $: mojo.internal.Enum() };

// Enum: XrCompatibleResult
device.mojom.XrCompatibleResult = {
  kAlreadyCompatible: 0,
  kNoDeviceAvailable: 1,
  kWebXrFeaturePolicyBlocked: 2,
  kCompatibleAfterRestart: 3,
  kNotCompatibleAfterRestart: 4,
};
device.mojom.XrCompatibleResultSpec = { $: mojo.internal.Enum() };

// Enum: EntityTypeForHitTest
device.mojom.EntityTypeForHitTest = {
  POINT: 0,
  PLANE: 1,
};
device.mojom.EntityTypeForHitTestSpec = { $: mojo.internal.Enum() };

// Enum: XRVisibilityState
device.mojom.XRVisibilityState = {
  VISIBLE: 0,
  VISIBLE_BLURRED: 1,
  HIDDEN: 2,
};
device.mojom.XRVisibilityStateSpec = { $: mojo.internal.Enum() };

// Union: XRNativeOriginInformation
device.mojom.XRNativeOriginInformationSpec = { $: mojo.internal.Union(
    'device.mojom.XRNativeOriginInformation', {
      'input_source_space_info': {
        'ordinal': 0,
        'type': device.mojom.XRInputSourceSpaceInfoSpec,
      }},
      'plane_id': {
        'ordinal': 1,
        'type': device.mojom.PlaneIdSpec,
      }},
      'anchor_id': {
        'ordinal': 2,
        'type': device.mojom.AnchorIdSpec,
      }},
      'reference_space_type': {
        'ordinal': 3,
        'type': device.mojom.XRReferenceSpaceTypeSpec,
      }},
      'hand_joint_space_info': {
        'ordinal': 4,
        'type': device.mojom.XRHandJointSpaceInfoSpec,
      }},
      'image_index': {
        'ordinal': 5,
        'type': mojo.internal.Uint32,
      }},
    })
};

// Union: XRDepthData
device.mojom.XRDepthDataSpec = { $: mojo.internal.Union(
    'device.mojom.XRDepthData', {
      'data_still_valid': {
        'ordinal': 0,
        'type': device.mojom.XRDepthDataStillValidSpec,
      }},
      'updated_depth_data': {
        'ordinal': 1,
        'type': device.mojom.XRDepthDataUpdatedSpec,
      }},
    })
};

// Union: XRLayerSpecificData
device.mojom.XRLayerSpecificDataSpec = { $: mojo.internal.Union(
    'device.mojom.XRLayerSpecificData', {
      'projection': {
        'ordinal': 0,
        'type': device.mojom.XRProjectionLayerDataSpec,
      }},
      'quad': {
        'ordinal': 1,
        'type': device.mojom.XRQuadLayerDataSpec,
      }},
      'cylinder': {
        'ordinal': 2,
        'type': device.mojom.XRCylinderLayerDataSpec,
      }},
      'equirect': {
        'ordinal': 3,
        'type': device.mojom.XREquirectLayerDataSpec,
      }},
      'cube': {
        'ordinal': 4,
        'type': device.mojom.XRCubeLayerDataSpec,
      }},
    })
};

// Union: RequestSessionResult
device.mojom.RequestSessionResultSpec = { $: mojo.internal.Union(
    'device.mojom.RequestSessionResult', {
      'success': {
        'ordinal': 0,
        'type': device.mojom.RequestSessionSuccessSpec,
      }},
      'failure_reason': {
        'ordinal': 1,
        'type': device.mojom.RequestSessionErrorSpec,
      }},
    })
};

// Struct: XRDepthConfig
device.mojom.XRDepthConfigSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRDepthConfig',
      packedSize: 24,
      fields: [
        { name: 'depth_usage', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRDepthUsageSpec, nullable: false, minVersion: 0 },
        { name: 'depth_data_format', packedOffset: 4, packedBitOffset: 0, type: device.mojom.XRDepthDataFormatSpec, nullable: false, minVersion: 0 },
        { name: 'depth_type', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRDepthTypeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: XRSessionDeviceConfig
device.mojom.XRSessionDeviceConfigSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRSessionDeviceConfig',
      packedSize: 32,
      fields: [
        { name: 'default_framebuffer_scale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'views', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.XRViewSpec, false), nullable: false, minVersion: 0 },
        { name: 'supports_viewport_scaling', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_anti_aliasing', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'depth_configuration', packedOffset: 16, packedBitOffset: 0, type: device.mojom.XRDepthConfigSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: XRSession
device.mojom.XRSessionSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRSession',
      packedSize: 56,
      fields: [
        { name: 'data_provider', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'layer_manager', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'client_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true, minVersion: 0 },
        { name: 'submit_frame_sink', packedOffset: 16, packedBitOffset: 0, type: device.mojom.XRPresentationConnectionSpec, nullable: true, minVersion: 0 },
        { name: 'enabled_features', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.XRSessionFeatureSpec, false), nullable: false, minVersion: 0 },
        { name: 'device_config', packedOffset: 32, packedBitOffset: 0, type: device.mojom.XRSessionDeviceConfigSpec, nullable: false, minVersion: 0 },
        { name: 'enviroment_blend_mode', packedOffset: 12, packedBitOffset: 0, type: device.mojom.XREnvironmentBlendModeSpec, nullable: false, minVersion: 0 },
        { name: 'interaction_mode', packedOffset: 40, packedBitOffset: 0, type: device.mojom.XRInteractionModeSpec, nullable: false, minVersion: 0 },
        { name: 'wants_fullscreen', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
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
        { name: 'provider', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'client_receiver', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'transport_options', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRPresentationTransportOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: XRInputSourceDescription
device.mojom.XRInputSourceDescriptionSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRInputSourceDescription',
      packedSize: 32,
      fields: [
        { name: 'target_ray_mode', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRTargetRayModeSpec, nullable: false, minVersion: 0 },
        { name: 'handedness', packedOffset: 4, packedBitOffset: 0, type: device.mojom.XRHandednessSpec, nullable: false, minVersion: 0 },
        { name: 'input_from_pointer', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: true, minVersion: 0 },
        { name: 'profiles', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: XRInputSourceState
device.mojom.XRInputSourceStateSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRInputSourceState',
      packedSize: 56,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRInputSourceDescriptionSpec, nullable: true, minVersion: 0 },
        { name: 'mojo_from_input', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: true, minVersion: 0 },
        { name: 'emulated_position', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_auxiliary', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'primary_input_pressed', packedOffset: 4, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'primary_input_clicked', packedOffset: 4, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'primary_squeeze_pressed', packedOffset: 4, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'primary_squeeze_clicked', packedOffset: 4, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'gamepad', packedOffset: 24, packedBitOffset: 0, type: device.mojom.GamepadSpec, nullable: true, minVersion: 0 },
        { name: 'overlay_pointer_position', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: true, minVersion: 0 },
        { name: 'hand_tracking_data', packedOffset: 40, packedBitOffset: 0, type: device.mojom.XRHandTrackingDataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
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
        { name: 'up_degrees', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'down_degrees', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'left_degrees', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'right_degrees', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'orientation', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.QuaternionSpec, nullable: true, minVersion: 0 },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.Point3FSpec, nullable: true, minVersion: 0 },
        { name: 'emulated_position', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'orientation', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.QuaternionSpec, nullable: false, minVersion: 0 },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.Point3FSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'id_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'id_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'id_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'id_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.Point3FSpec, nullable: false, minVersion: 0 },
        { name: 'direction', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.Vector3dFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'mojo_from_result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.PoseSpec, nullable: false, minVersion: 0 },
        { name: 'plane_id', packedOffset: 8, packedBitOffset: 0, type: device.mojom.PlaneIdSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'field_of_view', packedOffset: 0, packedBitOffset: 0, type: device.mojom.VRFieldOfViewSpec, nullable: false, minVersion: 0 },
        { name: 'mojo_from_view', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'vertices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.PointFSpec, false), nullable: false, minVersion: 0 },
        { name: 'unvalidated_indices', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'eye', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XREyeSpec, nullable: false, minVersion: 0 },
        { name: 'geometry', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRViewGeometrySpec, nullable: false, minVersion: 0 },
        { name: 'viewport', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'depth_data', packedOffset: 24, packedBitOffset: 0, type: device.mojom.XRDepthDataSpec, nullable: true, minVersion: 0 },
        { name: 'is_first_person_observer', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'visibility_mask', packedOffset: 40, packedBitOffset: 0, type: device.mojom.XRVisibilityMaskSpec, nullable: true, minVersion: 0 },
        { name: 'visibility_mask_id', packedOffset: 48, packedBitOffset: 0, type: device.mojom.XrVisibilityMaskIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
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
        { name: 'mojo_from_stage', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.Point3FSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'transport_method', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRPresentationTransportMethodSpec, nullable: false, minVersion: 0 },
        { name: 'wait_for_transfer_notification', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'wait_for_render_notification', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'wait_for_gpu_fence', packedOffset: 4, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'input_source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'input_source_space_type', packedOffset: 4, packedBitOffset: 0, type: device.mojom.XRInputSourceSpaceTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'handedness', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRHandednessSpec, nullable: false, minVersion: 0 },
        { name: 'joint', packedOffset: 4, packedBitOffset: 0, type: device.mojom.XRHandJointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'z', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: XRPlaneData
device.mojom.XRPlaneDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRPlaneData',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.PlaneIdSpec, nullable: false, minVersion: 0 },
        { name: 'orientation', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRPlaneOrientationSpec, nullable: false, minVersion: 0 },
        { name: 'mojo_from_plane', packedOffset: 16, packedBitOffset: 0, type: device.mojom.PoseSpec, nullable: true, minVersion: 0 },
        { name: 'semantic_label', packedOffset: 12, packedBitOffset: 0, type: device.mojom.XRSemanticLabelSpec, nullable: true, minVersion: 0 },
        { name: 'polygon', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.XRPlanePointDataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'all_planes_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.PlaneIdSpec, false), nullable: false, minVersion: 0 },
        { name: 'updated_planes_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.XRPlaneDataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.AnchorIdSpec, nullable: false, minVersion: 0 },
        { name: 'mojo_from_anchor', packedOffset: 8, packedBitOffset: 0, type: device.mojom.PoseSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'all_anchors_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.AnchorIdSpec, false), nullable: false, minVersion: 0 },
        { name: 'updated_anchors_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.XRAnchorDataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'subscription_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.HitTestSubscriptionIdSpec, nullable: false, minVersion: 0 },
        { name: 'hit_test_results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.XRHitResultSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'subscription_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.HitTestSubscriptionIdSpec, nullable: false, minVersion: 0 },
        { name: 'input_source_id_to_hit_test_results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Array(device.mojom.XRHitResultSpec, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.XRHitTestSubscriptionResultDataSpec, false), nullable: false, minVersion: 0 },
        { name: 'transient_input_results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.XRHitTestTransientInputSubscriptionResultDataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'red', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'green', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'blue', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'coefficients', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.RgbTupleF32, 9Spec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'kNumComponentsPerPixel', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'width_and_height', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'positive_x', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint16, false), nullable: false, minVersion: 0 },
        { name: 'negative_x', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint16, false), nullable: false, minVersion: 0 },
        { name: 'positive_y', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint16, false), nullable: false, minVersion: 0 },
        { name: 'negative_y', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint16, false), nullable: false, minVersion: 0 },
        { name: 'positive_z', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint16, false), nullable: false, minVersion: 0 },
        { name: 'negative_z', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint16, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
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
        { name: 'spherical_harmonics', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRSphericalHarmonicsSpec, nullable: false, minVersion: 0 },
        { name: 'main_light_direction', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.Vector3dFSpec, nullable: false, minVersion: 0 },
        { name: 'main_light_intensity', packedOffset: 16, packedBitOffset: 0, type: device.mojom.RgbTupleF32Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'cube_map', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRCubeMapSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'light_probe', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRLightProbeSpec, nullable: true, minVersion: 0 },
        { name: 'reflection_probe', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRReflectionProbeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: XRDepthDataUpdated
device.mojom.XRDepthDataUpdatedSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRDepthDataUpdated',
      packedSize: 56,
      fields: [
        { name: 'pixel_data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
        { name: 'norm_texture_from_norm_view', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'raw_value_to_meters', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'view_geometry', packedOffset: 40, packedBitOffset: 0, type: device.mojom.XRViewGeometrySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
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
        { name: 'index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'mojo_from_image', packedOffset: 8, packedBitOffset: 0, type: device.mojom.PoseSpec, nullable: false, minVersion: 0 },
        { name: 'actively_tracked', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'width_in_meters', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'images_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.XRTrackedImageDataSpec, false), nullable: false, minVersion: 0 },
        { name: 'image_trackable_scores', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Bool, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'id_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'native_origin_from_layer', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'native_origin_from_layer', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false, minVersion: 0 },
        { name: 'radius', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'central_angle', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'aspect_ratio', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'native_origin_from_layer', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false, minVersion: 0 },
        { name: 'radius', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'central_horizontal_angle', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'upper_vertical_angle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'lower_vertical_angle', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'orientation', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.QuaternionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: XRLayerReadOnlyData
device.mojom.XRLayerReadOnlyDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRLayerReadOnlyData',
      packedSize: 32,
      fields: [
        { name: 'layer_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.LayerIdSpec, nullable: false, minVersion: 0 },
        { name: 'layout', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRLayerLayoutSpec, nullable: false, minVersion: 0 },
        { name: 'texture_width', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'texture_height', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'is_static', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'blend_texture_source_alpha', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'opacity', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'native_origin_information', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRNativeOriginInformationSpec, nullable: false, minVersion: 0 },
        { name: 'layer_data', packedOffset: 24, packedBitOffset: 0, type: device.mojom.XRLayerSpecificDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'read_only_data', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRLayerReadOnlyDataSpec, nullable: false, minVersion: 0 },
        { name: 'mutable_data', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRLayerMutableDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'layer_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.LayerIdSpec, nullable: false, minVersion: 0 },
        { name: 'buffer_shared_image', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.ExportedSharedImageSpec, nullable: false, minVersion: 0 },
        { name: 'buffer_sync_token', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'frame_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
        { name: 'mojo_from_viewer', packedOffset: 8, packedBitOffset: 0, type: device.mojom.VRPoseSpec, nullable: true, minVersion: 0 },
        { name: 'views', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.XRViewSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'render_info', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRRenderInfoSpec, nullable: false, minVersion: 0 },
        { name: 'time_delta', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'buffer_shared_image', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.ExportedSharedImageSpec, nullable: true, minVersion: 0 },
        { name: 'buffer_sync_token', packedOffset: 24, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: true, minVersion: 0 },
        { name: 'camera_image_buffer_shared_image', packedOffset: 32, packedBitOffset: 0, type: gpu.mojom.ExportedSharedImageSpec, nullable: true, minVersion: 0 },
        { name: 'camera_image_buffer_sync_token', packedOffset: 40, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: true, minVersion: 0 },
        { name: 'camera_image_size', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: true, minVersion: 0 },
        { name: 'mojo_space_reset', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'mojo_from_floor', packedOffset: 64, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: true, minVersion: 0 },
        { name: 'input_state', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.XRInputSourceStateSpec, false), nullable: true, minVersion: 0 },
        { name: 'stage_parameters_id', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'stage_parameters', packedOffset: 80, packedBitOffset: 0, type: device.mojom.VRStageParametersSpec, nullable: true, minVersion: 0 },
        { name: 'detected_planes_data', packedOffset: 88, packedBitOffset: 0, type: device.mojom.XRPlaneDetectionDataSpec, nullable: true, minVersion: 0 },
        { name: 'anchors_data', packedOffset: 96, packedBitOffset: 0, type: device.mojom.XRAnchorsDataSpec, nullable: true, minVersion: 0 },
        { name: 'composition_layers_data', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.XRLayerFrameDataSpec, false), nullable: true, minVersion: 0 },
        { name: 'light_estimation_data', packedOffset: 112, packedBitOffset: 0, type: device.mojom.XRLightEstimationDataSpec, nullable: true, minVersion: 0 },
        { name: 'hit_test_subscription_results', packedOffset: 120, packedBitOffset: 0, type: device.mojom.XRHitTestSubscriptionResultsDataSpec, nullable: true, minVersion: 0 },
        { name: 'rendering_time_ratio', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'tracked_images', packedOffset: 136, packedBitOffset: 0, type: device.mojom.XRTrackedImagesDataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 152}]
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
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRSessionSpec, nullable: false, minVersion: 0 },
        { name: 'trace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'metrics_recorder', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'xr_internals_listener', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'include_lighting_estimation_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'depth_active', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'stage_parameters_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRSessionOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.VRService_RequestSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.RequestSessionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRSessionOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.VRService_SupportsSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'supports_session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'throttled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'xr_compatible_result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XrCompatibleResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRSessionFeatureSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
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
      packedSize: 40,
      fields: [
        { name: 'native_origin_information', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRNativeOriginInformationSpec, nullable: false, minVersion: 0 },
        { name: 'entity_types', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.EntityTypeForHitTestSpec, false), nullable: false, minVersion: 0 },
        { name: 'ray', packedOffset: 24, packedBitOffset: 0, type: device.mojom.XRRaySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'subscription_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.HitTestSubscriptionIdSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'profile_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'entity_types', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.EntityTypeForHitTestSpec, false), nullable: false, minVersion: 0 },
        { name: 'ray', packedOffset: 16, packedBitOffset: 0, type: device.mojom.XRRaySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'subscription_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.HitTestSubscriptionIdSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'subscription_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.HitTestSubscriptionIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateAnchor
device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XREnvironmentIntegrationProvider.CreateAnchor_Params',
      packedSize: 40,
      fields: [
        { name: 'native_origin_information', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRNativeOriginInformationSpec, nullable: false, minVersion: 0 },
        { name: 'native_origin_from_anchor', packedOffset: 16, packedBitOffset: 0, type: device.mojom.PoseSpec, nullable: false, minVersion: 0 },
        { name: 'plane_id', packedOffset: 24, packedBitOffset: 0, type: device.mojom.PlaneIdSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'anchor_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.AnchorIdSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'anchor_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.AnchorIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRFrameDataRequestOptionsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'frame_data', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRFrameDataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'environment_provider', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'frame_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
        { name: 'left_bounds', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'right_bounds', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'source_size', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'frame_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
        { name: 'sync_token', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'frame_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
        { name: 'time_waited', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'frame_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
        { name: 'texture', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'sync_token', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'frame_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
        { name: 'layer_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.LayerIdSpec, false), nullable: false, minVersion: 0 },
        { name: 'sync_token', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false, minVersion: 0 },
        { name: 'time_waited', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'gpu_fence_handle', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.GpuFenceHandleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'visibility_state', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRVisibilityStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'create_data', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRCompositionLayerDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: device.mojom.CreateCompositionLayerResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'layer_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.LayerIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'layer_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.LayerIdSpec, nullable: false, minVersion: 0 },
        { name: 'update_data', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRLayerMutableDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'layer_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.LayerIdSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'xrframe_statistics', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XrFrameStatisticsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'xrlogging_statistics', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XrLogMessageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.WebXrInternalsRendererListenerPtr = device.mojom.WebXrInternalsRendererListenerRemote;
device.mojom.WebXrInternalsRendererListenerRequest = device.mojom.WebXrInternalsRendererListenerPendingReceiver;

