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
      null,
      [client],
      undefined,
      undefined
    );
  }

  requestSession(options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.VRService_RequestSession_ParamsSpec,
      device.mojom.VRService_RequestSession_ResponseParamsSpec,
      device.mojom.VRService_RequestSession_ResponseParamsSpec,
      [options],
      undefined,
      undefined
    );
  }

  supportsSession(options) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.VRService_SupportsSession_ParamsSpec,
      device.mojom.VRService_SupportsSession_ResponseParamsSpec,
      device.mojom.VRService_SupportsSession_ResponseParamsSpec,
      [options],
      undefined,
      undefined
    );
  }

  exitPresent() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.VRService_ExitPresent_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setFramesThrottled(throttled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.VRService_SetFramesThrottled_ParamsSpec,
      null,
      null,
      [throttled],
      undefined,
      undefined
    );
  }

  makeXrCompatible() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.VRService_MakeXrCompatible_ParamsSpec,
      device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec,
      device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec,
      [],
      undefined,
      mojo.internal.kMessageFlagIsSync
    );
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
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'throttled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      name: 'device.mojom.VRService.MakeXrCompatible_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'xr_compatible_result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      null,
      [feature],
      undefined,
      undefined
    );
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
      null,
      [],
      undefined,
      undefined
    );
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
      device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec,
      [native_origin_information, entity_types, ray],
      undefined,
      undefined
    );
  }

  subscribeToHitTestForTransientInput(profile_name, entity_types, ray) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec,
      device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec,
      device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec,
      [profile_name, entity_types, ray],
      undefined,
      undefined
    );
  }

  unsubscribeFromHitTest(subscription_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec,
      null,
      null,
      [subscription_id],
      undefined,
      undefined
    );
  }

  createAnchor(native_origin_information, native_origin_from_anchor, plane_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec,
      device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec,
      device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec,
      [native_origin_information, native_origin_from_anchor, plane_id],
      undefined,
      undefined
    );
  }

  detachAnchor(anchor_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec,
      null,
      null,
      [anchor_id],
      undefined,
      undefined
    );
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
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'profile_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'entity_types', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'ray', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'subscription_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'native_origin_information', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'native_origin_from_anchor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'plane_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'anchor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec,
      [options],
      undefined,
      undefined
    );
  }

  getEnvironmentIntegrationProvider(environment_provider) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec,
      null,
      null,
      [environment_provider],
      undefined,
      undefined
    );
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
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'environment_provider', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
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
      null,
      [frame_id, left_bounds, right_bounds, source_size],
      undefined,
      undefined
    );
  }

  submitFrameMissing(frame_id, sync_token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec,
      null,
      null,
      [frame_id, sync_token],
      undefined,
      undefined
    );
  }

  submitFrame(frame_id, time_waited) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec,
      null,
      null,
      [frame_id, time_waited],
      undefined,
      undefined
    );
  }

  submitFrameWithTextureHandle(frame_id, texture, sync_token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec,
      null,
      null,
      [frame_id, texture, sync_token],
      undefined,
      undefined
    );
  }

  submitFrameDrawnIntoTexture(frame_id, layer_ids, sync_token, time_waited) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec,
      null,
      null,
      [frame_id, layer_ids, sync_token, time_waited],
      undefined,
      undefined
    );
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
        { name: 'frame_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false },
        { name: 'left_bounds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'right_bounds', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'source_size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'frame_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false },
        { name: 'sync_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'frame_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false },
        { name: 'time_waited', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'frame_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false },
        { name: 'texture', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'sync_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'frame_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false },
        { name: 'layer_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'sync_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'time_waited', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      null,
      [success],
      undefined,
      undefined
    );
  }

  onSubmitFrameRendered() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onSubmitFrameGpuFence(gpu_fence_handle) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec,
      null,
      null,
      [gpu_fence_handle],
      undefined,
      undefined
    );
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
        { name: 'gpu_fence_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      null,
      [],
      undefined,
      undefined
    );
  }

  onVisibilityStateChanged(visibility_state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec,
      null,
      null,
      [visibility_state],
      undefined,
      undefined
    );
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
        { name: 'visibility_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec,
      [create_data],
      undefined,
      undefined
    );
  }

  destroyCompositionLayer(layer_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec,
      null,
      null,
      [layer_id],
      undefined,
      undefined
    );
  }

  updateCompositionLayer(layer_id, update_data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec,
      null,
      null,
      [layer_id, update_data],
      undefined,
      undefined
    );
  }

  setEnabledCompositionLayers(layer_ids) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec,
      null,
      null,
      [layer_ids],
      undefined,
      undefined
    );
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
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'layer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'layer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'update_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'layer_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      null,
      [xrframe_statistics],
      undefined,
      undefined
    );
  }

  onConsoleLog(xrlogging_statistics) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec,
      null,
      null,
      [xrlogging_statistics],
      undefined,
      undefined
    );
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
        { name: 'xrlogging_statistics', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.WebXrInternalsRendererListenerPtr = device.mojom.WebXrInternalsRendererListenerRemote;
device.mojom.WebXrInternalsRendererListenerRequest = device.mojom.WebXrInternalsRendererListenerPendingReceiver;

