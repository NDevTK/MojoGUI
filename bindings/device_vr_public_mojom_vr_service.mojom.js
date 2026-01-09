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
  SUBMIT_AS_MAILBOX_HOLDER: 1,
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
  GPU: 0,
  GPU: 1,
};

// Enum: EntityTypeForHitTest
device.mojom.EntityTypeForHitTest = {
  POINT: 0,
  PLANE: 1,
};

// Enum: XRVisibilityState
device.mojom.XRVisibilityState = {
};

// Struct: XRDepthConfig
device.mojom.XRDepthConfig = class {
  constructor(values = {}) {
    this.depth_data_format = values.depth_data_format !== undefined ? values.depth_data_format : null;
    this.depth_type = values.depth_type !== undefined ? values.depth_type : null;
  }
};

// Struct: XRSessionDeviceConfig
device.mojom.XRSessionDeviceConfig = class {
  constructor(values = {}) {
    this.1.0 = values.1.0 !== undefined ? values.1.0 : 0;
    this.views = values.views !== undefined ? values.views : [];
    this.true = values.true !== undefined ? values.true : false;
    this.depth_configuration = values.depth_configuration !== undefined ? values.depth_configuration : null;
  }
};

// Struct: XRSession
device.mojom.XRSession = class {
  constructor(values = {}) {
    this.submit_frame_sink = values.submit_frame_sink !== undefined ? values.submit_frame_sink : null;
    this.interaction_mode = values.interaction_mode !== undefined ? values.interaction_mode : 0;
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: XRPresentationConnection
device.mojom.XRPresentationConnection = class {
  constructor(values = {}) {
    this.transport_options = values.transport_options !== undefined ? values.transport_options : null;
  }
};

// Struct: XRInputSourceDescription
device.mojom.XRInputSourceDescription = class {
  constructor(values = {}) {
    this.handedness = values.handedness !== undefined ? values.handedness : null;
    this.travels = values.travels !== undefined ? values.travels : null;
    this.the = values.the !== undefined ? values.the : null;
    this.is = values.is !== undefined ? values.is : null;
    this.actual = values.actual !== undefined ? values.actual : null;
    this.profiles = values.profiles !== undefined ? values.profiles : 0;
  }
};

// Struct: XRInputSourceState
device.mojom.XRInputSourceState = class {
  constructor(values = {}) {
    this.source_id = values.source_id !== undefined ? values.source_id : 0;
    this.description = values.description !== undefined ? values.description : null;
    this.emulated_position = values.emulated_position !== undefined ? values.emulated_position : false;
    this.primary_input_pressed = values.primary_input_pressed !== undefined ? values.primary_input_pressed : false;
    this.primary_squeeze_pressed = values.primary_squeeze_pressed !== undefined ? values.primary_squeeze_pressed : false;
    this.primary_squeeze_clicked = values.primary_squeeze_clicked !== undefined ? values.primary_squeeze_clicked : false;
    this.sensors = values.sensors !== undefined ? values.sensors : null;
    this.If = values.If !== undefined ? values.If : null;
    this.gamepad = values.gamepad !== undefined ? values.gamepad : null;
    this.pointer = values.pointer !== undefined ? values.pointer : null;
    this.space = values.space !== undefined ? values.space : null;
    this.intersection = values.intersection !== undefined ? values.intersection : null;
    this.overlay_pointer_position = values.overlay_pointer_position !== undefined ? values.overlay_pointer_position : 0;
    this.is = values.is !== undefined ? values.is : null;
    this.hand_tracking_data = values.hand_tracking_data !== undefined ? values.hand_tracking_data : null;
  }
};

// Struct: VRFieldOfView
device.mojom.VRFieldOfView = class {
  constructor(values = {}) {
    this.right_degrees = values.right_degrees !== undefined ? values.right_degrees : 0;
  }
};

// Struct: VRPose
device.mojom.VRPose = class {
  constructor(values = {}) {
    this.emulated_position = values.emulated_position !== undefined ? values.emulated_position : 0;
  }
};

// Struct: Pose
device.mojom.Pose = class {
  constructor(values = {}) {
    this.position = values.position !== undefined ? values.position : 0;
  }
};

// Struct: AnchorId
device.mojom.AnchorId = class {
  constructor(values = {}) {
    this.id_value = values.id_value !== undefined ? values.id_value : 0;
  }
};

// Struct: HitTestSubscriptionId
device.mojom.HitTestSubscriptionId = class {
  constructor(values = {}) {
    this.id_value = values.id_value !== undefined ? values.id_value : 0;
  }
};

// Struct: PlaneId
device.mojom.PlaneId = class {
  constructor(values = {}) {
    this.id_value = values.id_value !== undefined ? values.id_value : 0;
  }
};

// Struct: XrVisibilityMaskId
device.mojom.XrVisibilityMaskId = class {
  constructor(values = {}) {
    this.id_value = values.id_value !== undefined ? values.id_value : 0;
  }
};

// Struct: XRRay
device.mojom.XRRay = class {
  constructor(values = {}) {
    this.direction = values.direction !== undefined ? values.direction : 0;
  }
};

// Struct: XRHitResult
device.mojom.XRHitResult = class {
  constructor(values = {}) {
    this.plane_id = values.plane_id !== undefined ? values.plane_id : null;
    this.signifies = values.signifies !== undefined ? values.signifies : null;
  }
};

// Struct: XRViewGeometry
device.mojom.XRViewGeometry = class {
  constructor(values = {}) {
    this.field_of_view = values.field_of_view !== undefined ? values.field_of_view : null;
    this.be = values.be !== undefined ? values.be : null;
    this.local_from_view. = values.local_from_view. !== undefined ? values.local_from_view. : null;
    this.mojo_from_view = values.mojo_from_view !== undefined ? values.mojo_from_view : null;
  }
};

// Struct: XRVisibilityMask
device.mojom.XRVisibilityMask = class {
  constructor(values = {}) {
    this.unvalidated_indices = values.unvalidated_indices !== undefined ? values.unvalidated_indices : 0;
  }
};

// Struct: XRView
device.mojom.XRView = class {
  constructor(values = {}) {
    this.viewport = values.viewport !== undefined ? values.viewport : null;
    this.false = values.false !== undefined ? values.false : false;
    this.visibility_mask = values.visibility_mask !== undefined ? values.visibility_mask : null;
    this.visibility_mask_id = values.visibility_mask_id !== undefined ? values.visibility_mask_id : null;
  }
};

// Struct: VRStageParameters
device.mojom.VRStageParameters = class {
  constructor(values = {}) {
    this.mojo_from_stage = values.mojo_from_stage !== undefined ? values.mojo_from_stage : null;
    this.bounds = values.bounds !== undefined ? values.bounds : 0;
  }
};

// Struct: XRPresentationTransportOptions
device.mojom.XRPresentationTransportOptions = class {
  constructor(values = {}) {
    this.transport_method = values.transport_method !== undefined ? values.transport_method : null;
    this.wait_for_gpu_fence = values.wait_for_gpu_fence !== undefined ? values.wait_for_gpu_fence : false;
  }
};

// Struct: XRInputSourceSpaceInfo
device.mojom.XRInputSourceSpaceInfo = class {
  constructor(values = {}) {
    this.input_source_space_type = values.input_source_space_type !== undefined ? values.input_source_space_type : 0;
  }
};

// Struct: XRHandJointSpaceInfo
device.mojom.XRHandJointSpaceInfo = class {
  constructor(values = {}) {
    this.joint = values.joint !== undefined ? values.joint : 0;
  }
};

// Struct: XRPlanePointData
device.mojom.XRPlanePointData = class {
  constructor(values = {}) {
    this.z = values.z !== undefined ? values.z : 0;
  }
};

// Struct: XRPlaneData
device.mojom.XRPlaneData = class {
  constructor(values = {}) {
    this.orientation = values.orientation !== undefined ? values.orientation : null;
    this.of = values.of !== undefined ? values.of : null;
    this.mojo_from_plane = values.mojo_from_plane !== undefined ? values.mojo_from_plane : null;
    this.polygon = values.polygon !== undefined ? values.polygon : 0;
  }
};

// Struct: XRPlaneDetectionData
device.mojom.XRPlaneDetectionData = class {
  constructor(values = {}) {
    this.updated_planes_data = values.updated_planes_data !== undefined ? values.updated_planes_data : [];
  }
};

// Struct: XRAnchorData
device.mojom.XRAnchorData = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : null;
    this.mojo_from_anchor = values.mojo_from_anchor !== undefined ? values.mojo_from_anchor : null;
  }
};

// Struct: XRAnchorsData
device.mojom.XRAnchorsData = class {
  constructor(values = {}) {
    this.updated_anchors_data = values.updated_anchors_data !== undefined ? values.updated_anchors_data : [];
  }
};

// Struct: XRHitTestSubscriptionResultData
device.mojom.XRHitTestSubscriptionResultData = class {
  constructor(values = {}) {
    this.hit_test_results = values.hit_test_results !== undefined ? values.hit_test_results : [];
  }
};

// Struct: XRHitTestTransientInputSubscriptionResultData
device.mojom.XRHitTestTransientInputSubscriptionResultData = class {
  constructor(values = {}) {
    this.input_source_id_to_hit_test_results = values.input_source_id_to_hit_test_results !== undefined ? values.input_source_id_to_hit_test_results : 0;
  }
};

// Struct: XRHitTestSubscriptionResultsData
device.mojom.XRHitTestSubscriptionResultsData = class {
  constructor(values = {}) {
    this.transient_input_results = values.transient_input_results !== undefined ? values.transient_input_results : [];
  }
};

// Struct: RgbTupleF32
device.mojom.RgbTupleF32 = class {
  constructor(values = {}) {
    this.blue = values.blue !== undefined ? values.blue : 0;
  }
};

// Struct: XRSphericalHarmonics
device.mojom.XRSphericalHarmonics = class {
  constructor(values = {}) {
    this.coefficients = values.coefficients !== undefined ? values.coefficients : [];
  }
};

// Struct: XRCubeMap
device.mojom.XRCubeMap = class {
  constructor(values = {}) {
    this.4 = values.4 !== undefined ? values.4 : 0;
    this.value. = values.value. !== undefined ? values.value. : null;
    this.width_and_height = values.width_and_height !== undefined ? values.width_and_height : 0;
    this.order. = values.order. !== undefined ? values.order. : null;
    this.separately = values.separately !== undefined ? values.separately : null;
    this.a = values.a !== undefined ? values.a : null;
    this.negative_z = values.negative_z !== undefined ? values.negative_z : 0;
  }
};

// Struct: XRLightProbe
device.mojom.XRLightProbe = class {
  constructor(values = {}) {
    this.main_light_direction = values.main_light_direction !== undefined ? values.main_light_direction : null;
    this.main_light_intensity = values.main_light_intensity !== undefined ? values.main_light_intensity : null;
  }
};

// Struct: XRReflectionProbe
device.mojom.XRReflectionProbe = class {
  constructor(values = {}) {
    this.cube_map = values.cube_map !== undefined ? values.cube_map : {};
  }
};

// Struct: XRLightEstimationData
device.mojom.XRLightEstimationData = class {
  constructor(values = {}) {
    this.reflection_probe = values.reflection_probe !== undefined ? values.reflection_probe : null;
  }
};

// Struct: XRDepthDataStillValid
device.mojom.XRDepthDataStillValid = class {
  constructor(values = {}) {
  }
};

// Struct: XRDepthDataUpdated
device.mojom.XRDepthDataUpdated = class {
  constructor(values = {}) {
    this.raw_value_to_meters = values.raw_value_to_meters !== undefined ? values.raw_value_to_meters : 0;
    this.view_geometry = values.view_geometry !== undefined ? values.view_geometry : null;
  }
};

// Struct: XRTrackedImageData
device.mojom.XRTrackedImageData = class {
  constructor(values = {}) {
    this.index = values.index !== undefined ? values.index : 0;
    this.mojo_from_image = values.mojo_from_image !== undefined ? values.mojo_from_image : null;
    this.false = values.false !== undefined ? values.false : null;
    this.is = values.is !== undefined ? values.is : null;
    this.likely = values.likely !== undefined ? values.likely : null;
    this.width_in_meters = values.width_in_meters !== undefined ? values.width_in_meters : 0;
  }
};

// Struct: XRTrackedImagesData
device.mojom.XRTrackedImagesData = class {
  constructor(values = {}) {
    this.images_data = values.images_data !== undefined ? values.images_data : [];
    this.image_trackable_scores = values.image_trackable_scores !== undefined ? values.image_trackable_scores : false;
  }
};

// Struct: LayerId
device.mojom.LayerId = class {
  constructor(values = {}) {
    this.id_value = values.id_value !== undefined ? values.id_value : 0;
  }
};

// Struct: XRProjectionLayerData
device.mojom.XRProjectionLayerData = class {
  constructor(values = {}) {
  }
};

// Struct: XRQuadLayerData
device.mojom.XRQuadLayerData = class {
  constructor(values = {}) {
    this.height = values.height !== undefined ? values.height : 0;
  }
};

// Struct: XRCylinderLayerData
device.mojom.XRCylinderLayerData = class {
  constructor(values = {}) {
    this.aspect_ratio = values.aspect_ratio !== undefined ? values.aspect_ratio : 0;
  }
};

// Struct: XREquirectLayerData
device.mojom.XREquirectLayerData = class {
  constructor(values = {}) {
    this.lower_vertical_angle = values.lower_vertical_angle !== undefined ? values.lower_vertical_angle : 0;
  }
};

// Struct: XRCubeLayerData
device.mojom.XRCubeLayerData = class {
  constructor(values = {}) {
    this.orientation = values.orientation !== undefined ? values.orientation : null;
  }
};

// Struct: XRLayerReadOnlyData
device.mojom.XRLayerReadOnlyData = class {
  constructor(values = {}) {
    this.is_static = values.is_static !== undefined ? values.is_static : 0;
  }
};

// Struct: XRLayerMutableData
device.mojom.XRLayerMutableData = class {
  constructor(values = {}) {
    this.layer_data = values.layer_data !== undefined ? values.layer_data : 0;
  }
};

// Struct: XRCompositionLayerData
device.mojom.XRCompositionLayerData = class {
  constructor(values = {}) {
    this.mutable_data = values.mutable_data !== undefined ? values.mutable_data : null;
  }
};

// Struct: XRLayerFrameData
device.mojom.XRLayerFrameData = class {
  constructor(values = {}) {
    this.buffer_sync_token = values.buffer_sync_token !== undefined ? values.buffer_sync_token : null;
  }
};

// Struct: XRRenderInfo
device.mojom.XRRenderInfo = class {
  constructor(values = {}) {
    this.mojo_from_viewer = values.mojo_from_viewer !== undefined ? values.mojo_from_viewer : 0;
    this.views = values.views !== undefined ? values.views : [];
  }
};

// Struct: XRFrameData
device.mojom.XRFrameData = class {
  constructor(values = {}) {
    this.camera_image_size = values.camera_image_size !== undefined ? values.camera_image_size : null;
    this.same = values.same !== undefined ? values.same : 0;
    this.mojo_from_floor = values.mojo_from_floor !== undefined ? values.mojo_from_floor : false;
    this.devices = values.devices !== undefined ? values.devices : null;
    this.input_state = values.input_state !== undefined ? values.input_state : [];
    this.re-computed = values.re-computed !== undefined ? values.re-computed : null;
    this.perfectly = values.perfectly !== undefined ? values.perfectly : null;
    this.hit_test_subscription_results = values.hit_test_subscription_results !== undefined ? values.hit_test_subscription_results : 0;
    this.budget = values.budget !== undefined ? values.budget : null;
    this.tracked_images = values.tracked_images !== undefined ? values.tracked_images : 0;
  }
};

// Struct: RequestSessionSuccess
device.mojom.RequestSessionSuccess = class {
  constructor(values = {}) {
    this.xr_internals_listener = values.xr_internals_listener !== undefined ? values.xr_internals_listener : 0;
  }
};

// Struct: XRFrameDataRequestOptions
device.mojom.XRFrameDataRequestOptions = class {
  constructor(values = {}) {
    this.include_lighting_estimation_data = values.include_lighting_estimation_data !== undefined ? values.include_lighting_estimation_data : false;
    this.has = values.has !== undefined ? values.has : null;
    this.immediately = values.immediately !== undefined ? values.immediately : null;
    this.ready. = values.ready. !== undefined ? values.ready. : null;
    this.stage_parameters_id = values.stage_parameters_id !== undefined ? values.stage_parameters_id : 0;
  }
};

// Interface: VRService
device.mojom.VRServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.VRService';
  }

  setClient(client) {
    // Method: SetClient
    // Call: SetClient(client)
  }

  requestSession(options) {
    // Method: RequestSession
    return new Promise((resolve) => {
      // Call: RequestSession(options)
      resolve({});
    });
  }

  supportsSession(options) {
    // Method: SupportsSession
    return new Promise((resolve) => {
      // Call: SupportsSession(options)
      resolve({});
    });
  }

  exitPresent() {
    // Method: ExitPresent
    // Call: ExitPresent()
  }

  it(page) {
    // Method: it
    // Call: it(page)
  }

  can(may) {
    // Method: can
    // Call: can(may)
  }

  setFramesThrottled(throttled) {
    // Method: SetFramesThrottled
    // Call: SetFramesThrottled(throttled)
  }

  makeXRCompatible() {
    // Method: makeXRCompatible
    // Call: makeXRCompatible()
  }

};

device.mojom.VRServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: XRSessionMetricsRecorder
device.mojom.XRSessionMetricsRecorderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.XRSessionMetricsRecorder';
  }

  use(request) {
    // Method: use
    // Call: use(request)
  }

  reportFeatureUsed(feature) {
    // Method: ReportFeatureUsed
    // Call: ReportFeatureUsed(feature)
  }

};

device.mojom.XRSessionMetricsRecorderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VRServiceClient
device.mojom.VRServiceClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.VRServiceClient';
  }

  onDeviceChanged() {
    // Method: OnDeviceChanged
    // Call: OnDeviceChanged()
  }

};

device.mojom.VRServiceClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: XREnvironmentIntegrationProvider
device.mojom.XREnvironmentIntegrationProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.XREnvironmentIntegrationProvider';
  }

  subscribeToHitTest(native_origin_information, entity_types, ray) {
    // Method: SubscribeToHitTest
    return new Promise((resolve) => {
      // Call: SubscribeToHitTest(native_origin_information, entity_types, ray)
      resolve({});
    });
  }

  subscribeToHitTestForTransientInput(profile_name, entity_types, ray) {
    // Method: SubscribeToHitTestForTransientInput
    return new Promise((resolve) => {
      // Call: SubscribeToHitTestForTransientInput(profile_name, entity_types, ray)
      resolve({});
    });
  }

  unsubscribeFromHitTest(subscription_id) {
    // Method: UnsubscribeFromHitTest
    // Call: UnsubscribeFromHitTest(subscription_id)
  }

  floating() {
    // Method: floating
    // Call: floating()
  }

  createAnchor(native_origin_information, native_origin_from_anchor, plane_id) {
    // Method: CreateAnchor
    return new Promise((resolve) => {
      // Call: CreateAnchor(native_origin_information, native_origin_from_anchor, plane_id)
      resolve({});
    });
  }

  detachAnchor(anchor_id) {
    // Method: DetachAnchor
    // Call: DetachAnchor(anchor_id)
  }

};

device.mojom.XREnvironmentIntegrationProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: XRFrameDataProvider
device.mojom.XRFrameDataProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.XRFrameDataProvider';
  }

  getFrameData(options) {
    // Method: GetFrameData
    return new Promise((resolve) => {
      // Call: GetFrameData(options)
      resolve({});
    });
  }

  getEnvironmentIntegrationProvider(environment_provider) {
    // Method: GetEnvironmentIntegrationProvider
    // Call: GetEnvironmentIntegrationProvider(environment_provider)
  }

};

device.mojom.XRFrameDataProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: XRPresentationProvider
device.mojom.XRPresentationProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.XRPresentationProvider';
  }

  updateLayerBounds(frame_id, left_bounds, right_bounds, source_size) {
    // Method: UpdateLayerBounds
    // Call: UpdateLayerBounds(frame_id, left_bounds, right_bounds, source_size)
  }

  submitFrameMissing(frame_id, sync_token) {
    // Method: SubmitFrameMissing
    // Call: SubmitFrameMissing(frame_id, sync_token)
  }

  submitFrame(frame_id, time_waited) {
    // Method: SubmitFrame
    // Call: SubmitFrame(frame_id, time_waited)
  }

  submitFrameWithTextureHandle(frame_id, texture, sync_token) {
    // Method: SubmitFrameWithTextureHandle
    // Call: SubmitFrameWithTextureHandle(frame_id, texture, sync_token)
  }

  submitFrameDrawnIntoTexture(frame_id, layer_ids, sync_token, time_waited) {
    // Method: SubmitFrameDrawnIntoTexture
    // Call: SubmitFrameDrawnIntoTexture(frame_id, layer_ids, sync_token, time_waited)
  }

};

device.mojom.XRPresentationProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: XRPresentationClient
device.mojom.XRPresentationClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.XRPresentationClient';
  }

  data(GpuMemoryBuffer) {
    // Method: data
    // Call: data(GpuMemoryBuffer)
  }

  onSubmitFrameTransferred(success) {
    // Method: OnSubmitFrameTransferred
    // Call: OnSubmitFrameTransferred(success)
  }

  onSubmitFrameRendered() {
    // Method: OnSubmitFrameRendered
    // Call: OnSubmitFrameRendered()
  }

  onSubmitFrameGpuFence(gpu_fence_handle) {
    // Method: OnSubmitFrameGpuFence
    // Call: OnSubmitFrameGpuFence(gpu_fence_handle)
  }

};

device.mojom.XRPresentationClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: XRSessionClient
device.mojom.XRSessionClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.XRSessionClient';
  }

  onExitPresent() {
    // Method: OnExitPresent
    // Call: OnExitPresent()
  }

  onVisibilityStateChanged(visibility_state) {
    // Method: OnVisibilityStateChanged
    // Call: OnVisibilityStateChanged(visibility_state)
  }

};

device.mojom.XRSessionClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: XRLayerManager
device.mojom.XRLayerManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.XRLayerManager';
  }

  layer(layer, layer) {
    // Method: layer
    // Call: layer(layer, layer)
  }

  createCompositionLayer(create_data) {
    // Method: CreateCompositionLayer
    return new Promise((resolve) => {
      // Call: CreateCompositionLayer(create_data)
      resolve({});
    });
  }

  destroyCompositionLayer(layer_id) {
    // Method: DestroyCompositionLayer
    // Call: DestroyCompositionLayer(layer_id)
  }

  updateCompositionLayer(layer_id, update_data) {
    // Method: UpdateCompositionLayer
    // Call: UpdateCompositionLayer(layer_id, update_data)
  }

  setEnabledCompositionLayers(layer_ids) {
    // Method: SetEnabledCompositionLayers
    // Call: SetEnabledCompositionLayers(layer_ids)
  }

};

device.mojom.XRLayerManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebXrInternalsRendererListener
device.mojom.WebXrInternalsRendererListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.WebXrInternalsRendererListener';
  }

  onFrameData(xrframe_statistics) {
    // Method: OnFrameData
    // Call: OnFrameData(xrframe_statistics)
  }

  onConsoleLog(xrlogging_statistics) {
    // Method: OnConsoleLog
    // Call: OnConsoleLog(xrlogging_statistics)
  }

};

device.mojom.WebXrInternalsRendererListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
