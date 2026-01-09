// Auto-generated MojoJS binding
// Source: chromium_src/components/safe_browsing/content/common/safe_browsing.mojom
// Module: safe_browsing.mojom

'use strict';

// Module namespace
var safe_browsing = safe_browsing || {};
safe_browsing.mojom = safe_browsing.mojom || {};


// Enum: PhishingDetectorResult
safe_browsing.mojom.PhishingDetectorResult = {
  SUCCESS: 0,
  CLASSIFIER_NOT_READY: 1,
  CANCELLED: 2,
  FORWARD_BACK_TRANSITION: 3,
  INVALID_SCORE: 4,
  INVALID_URL_FORMAT_REQUEST: 5,
  INVALID_DOCUMENT_LOADER: 6,
  URL_FEATURE_EXTRACTION_FAILED: 7,
  DOM_EXTRACTION_FAILED: 8,
  TERM_EXTRACTION_FAILED: 9,
  VISUAL_EXTRACTION_FAILED: 10,
};

// Enum: ClientSideDetectionType
safe_browsing.mojom.ClientSideDetectionType = {
  kForceRequest: 0,
  kTriggerModels: 1,
  kNotificationPermissionPrompt: 2,
  kKeyboardLock: 3,
  kPointerLock: 4,
  kVibrationApi: 5,
  kFullscreen: 6,
  kPasswordProtection: 7,
  kClipboardCopyApi: 8,
  kCreditCardForm: 9,
  kImageEmbeddingMatch: 10,
};

// Enum: PhishingImageEmbeddingResult
safe_browsing.mojom.PhishingImageEmbeddingResult = {
  kSuccess: 0,
  kImageEmbedderNotReady: 1,
  kCancelled: 2,
  kForwardBackTransition: 3,
  kFailed: 4,
};

// Enum: WebRequestProtocolType
safe_browsing.mojom.WebRequestProtocolType = {
  kHttpHttps: 0,
  kWebSocket: 1,
};

// Enum: WebRequestContactInitiatorType
safe_browsing.mojom.WebRequestContactInitiatorType = {
  kExtension: 0,
  kContentScript: 1,
};

// Interface: SafeBrowsing
safe_browsing.mojom.SafeBrowsing = {};

safe_browsing.mojom.SafeBrowsingPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

safe_browsing.mojom.SafeBrowsingRemote = class {
  static get $interfaceName() {
    return 'safe_browsing.mojom.SafeBrowsing';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      safe_browsing.mojom.SafeBrowsingPendingReceiver,
      handle);
    this.$ = new safe_browsing.mojom.SafeBrowsingRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

safe_browsing.mojom.SafeBrowsingRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCheckerAndCheck(frame_token, receiver, url, method, headers, load_flags, has_user_gesture, originated_from_service_worker) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      safe_browsing.mojom.SafeBrowsing_CreateCheckerAndCheck_ParamsSpec,
      safe_browsing.mojom.SafeBrowsing_CreateCheckerAndCheck_ResponseParamsSpec,
      [frame_token, receiver, url, method, headers, load_flags, has_user_gesture, originated_from_service_worker]);
  }

  clone(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      safe_browsing.mojom.SafeBrowsing_Clone_ParamsSpec,
      null,
      [receiver]);
  }

};

safe_browsing.mojom.SafeBrowsing.getRemote = function() {
  let remote = new safe_browsing.mojom.SafeBrowsingRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'safe_browsing.mojom.SafeBrowsing',
    'context');
  return remote.$;
};

// ParamsSpec for CreateCheckerAndCheck
safe_browsing.mojom.SafeBrowsing_CreateCheckerAndCheck_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.SafeBrowsing.CreateCheckerAndCheck_Params',
      packedSize: 64,
      fields: [
        { name: 'frame_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'method', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'headers', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'load_flags', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'has_user_gesture', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'originated_from_service_worker', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

safe_browsing.mojom.SafeBrowsing_CreateCheckerAndCheck_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.SafeBrowsing.CreateCheckerAndCheck_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'proceed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'showed_interstitial', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Clone
safe_browsing.mojom.SafeBrowsing_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.SafeBrowsing.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
safe_browsing.mojom.SafeBrowsingPtr = safe_browsing.mojom.SafeBrowsingRemote;
safe_browsing.mojom.SafeBrowsingRequest = safe_browsing.mojom.SafeBrowsingPendingReceiver;


// Interface: ThreatReporter
safe_browsing.mojom.ThreatReporter = {};

safe_browsing.mojom.ThreatReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

safe_browsing.mojom.ThreatReporterRemote = class {
  static get $interfaceName() {
    return 'safe_browsing.mojom.ThreatReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      safe_browsing.mojom.ThreatReporterPendingReceiver,
      handle);
    this.$ = new safe_browsing.mojom.ThreatReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

safe_browsing.mojom.ThreatReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getThreatDOMDetails() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      safe_browsing.mojom.ThreatReporter_GetThreatDOMDetails_ParamsSpec,
      safe_browsing.mojom.ThreatReporter_GetThreatDOMDetails_ResponseParamsSpec,
      []);
  }

};

safe_browsing.mojom.ThreatReporter.getRemote = function() {
  let remote = new safe_browsing.mojom.ThreatReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'safe_browsing.mojom.ThreatReporter',
    'context');
  return remote.$;
};

// ParamsSpec for GetThreatDOMDetails
safe_browsing.mojom.ThreatReporter_GetThreatDOMDetails_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.ThreatReporter.GetThreatDOMDetails_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

safe_browsing.mojom.ThreatReporter_GetThreatDOMDetails_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.ThreatReporter.GetThreatDOMDetails_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'nodes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
safe_browsing.mojom.ThreatReporterPtr = safe_browsing.mojom.ThreatReporterRemote;
safe_browsing.mojom.ThreatReporterRequest = safe_browsing.mojom.ThreatReporterPendingReceiver;


// Interface: PhishingDetector
safe_browsing.mojom.PhishingDetector = {};

safe_browsing.mojom.PhishingDetectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

safe_browsing.mojom.PhishingDetectorRemote = class {
  static get $interfaceName() {
    return 'safe_browsing.mojom.PhishingDetector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      safe_browsing.mojom.PhishingDetectorPendingReceiver,
      handle);
    this.$ = new safe_browsing.mojom.PhishingDetectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

safe_browsing.mojom.PhishingDetectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startPhishingDetection(url, request_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      safe_browsing.mojom.PhishingDetector_StartPhishingDetection_ParamsSpec,
      safe_browsing.mojom.PhishingDetector_StartPhishingDetection_ResponseParamsSpec,
      [url, request_type]);
  }

};

safe_browsing.mojom.PhishingDetector.getRemote = function() {
  let remote = new safe_browsing.mojom.PhishingDetectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'safe_browsing.mojom.PhishingDetector',
    'context');
  return remote.$;
};

// ParamsSpec for StartPhishingDetection
safe_browsing.mojom.PhishingDetector_StartPhishingDetection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingDetector.StartPhishingDetection_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'request_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

safe_browsing.mojom.PhishingDetector_StartPhishingDetection_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingDetector.StartPhishingDetection_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'request', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
safe_browsing.mojom.PhishingDetectorPtr = safe_browsing.mojom.PhishingDetectorRemote;
safe_browsing.mojom.PhishingDetectorRequest = safe_browsing.mojom.PhishingDetectorPendingReceiver;


// Interface: PhishingModelSetter
safe_browsing.mojom.PhishingModelSetter = {};

safe_browsing.mojom.PhishingModelSetterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

safe_browsing.mojom.PhishingModelSetterRemote = class {
  static get $interfaceName() {
    return 'safe_browsing.mojom.PhishingModelSetter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      safe_browsing.mojom.PhishingModelSetterPendingReceiver,
      handle);
    this.$ = new safe_browsing.mojom.PhishingModelSetterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

safe_browsing.mojom.PhishingModelSetterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setImageEmbeddingAndPhishingFlatBufferModel(region, tflite_model, image_embedding_model) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      safe_browsing.mojom.PhishingModelSetter_SetImageEmbeddingAndPhishingFlatBufferModel_ParamsSpec,
      null,
      [region, tflite_model, image_embedding_model]);
  }

  attachImageEmbeddingModel(image_embedding_model) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      safe_browsing.mojom.PhishingModelSetter_AttachImageEmbeddingModel_ParamsSpec,
      null,
      [image_embedding_model]);
  }

  setPhishingFlatBufferModel(region, tflite_model) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      safe_browsing.mojom.PhishingModelSetter_SetPhishingFlatBufferModel_ParamsSpec,
      null,
      [region, tflite_model]);
  }

  clearScorer() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      safe_browsing.mojom.PhishingModelSetter_ClearScorer_ParamsSpec,
      null,
      []);
  }

  setTestObserver(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      safe_browsing.mojom.PhishingModelSetter_SetTestObserver_ParamsSpec,
      null,
      [observer]);
  }

};

safe_browsing.mojom.PhishingModelSetter.getRemote = function() {
  let remote = new safe_browsing.mojom.PhishingModelSetterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'safe_browsing.mojom.PhishingModelSetter',
    'context');
  return remote.$;
};

// ParamsSpec for SetImageEmbeddingAndPhishingFlatBufferModel
safe_browsing.mojom.PhishingModelSetter_SetImageEmbeddingAndPhishingFlatBufferModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingModelSetter.SetImageEmbeddingAndPhishingFlatBufferModel_Params',
      packedSize: 32,
      fields: [
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'tflite_model', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'image_embedding_model', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AttachImageEmbeddingModel
safe_browsing.mojom.PhishingModelSetter_AttachImageEmbeddingModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingModelSetter.AttachImageEmbeddingModel_Params',
      packedSize: 16,
      fields: [
        { name: 'image_embedding_model', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPhishingFlatBufferModel
safe_browsing.mojom.PhishingModelSetter_SetPhishingFlatBufferModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingModelSetter.SetPhishingFlatBufferModel_Params',
      packedSize: 24,
      fields: [
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'tflite_model', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearScorer
safe_browsing.mojom.PhishingModelSetter_ClearScorer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingModelSetter.ClearScorer_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetTestObserver
safe_browsing.mojom.PhishingModelSetter_SetTestObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingModelSetter.SetTestObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
safe_browsing.mojom.PhishingModelSetterPtr = safe_browsing.mojom.PhishingModelSetterRemote;
safe_browsing.mojom.PhishingModelSetterRequest = safe_browsing.mojom.PhishingModelSetterPendingReceiver;


// Interface: PhishingModelSetterTestObserver
safe_browsing.mojom.PhishingModelSetterTestObserver = {};

safe_browsing.mojom.PhishingModelSetterTestObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

safe_browsing.mojom.PhishingModelSetterTestObserverRemote = class {
  static get $interfaceName() {
    return 'safe_browsing.mojom.PhishingModelSetterTestObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      safe_browsing.mojom.PhishingModelSetterTestObserverPendingReceiver,
      handle);
    this.$ = new safe_browsing.mojom.PhishingModelSetterTestObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

safe_browsing.mojom.PhishingModelSetterTestObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  phishingModelUpdated() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      safe_browsing.mojom.PhishingModelSetterTestObserver_PhishingModelUpdated_ParamsSpec,
      null,
      []);
  }

};

safe_browsing.mojom.PhishingModelSetterTestObserver.getRemote = function() {
  let remote = new safe_browsing.mojom.PhishingModelSetterTestObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'safe_browsing.mojom.PhishingModelSetterTestObserver',
    'context');
  return remote.$;
};

// ParamsSpec for PhishingModelUpdated
safe_browsing.mojom.PhishingModelSetterTestObserver_PhishingModelUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingModelSetterTestObserver.PhishingModelUpdated_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
safe_browsing.mojom.PhishingModelSetterTestObserverPtr = safe_browsing.mojom.PhishingModelSetterTestObserverRemote;
safe_browsing.mojom.PhishingModelSetterTestObserverRequest = safe_browsing.mojom.PhishingModelSetterTestObserverPendingReceiver;


// Interface: PhishingImageEmbedderDetector
safe_browsing.mojom.PhishingImageEmbedderDetector = {};

safe_browsing.mojom.PhishingImageEmbedderDetectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

safe_browsing.mojom.PhishingImageEmbedderDetectorRemote = class {
  static get $interfaceName() {
    return 'safe_browsing.mojom.PhishingImageEmbedderDetector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      safe_browsing.mojom.PhishingImageEmbedderDetectorPendingReceiver,
      handle);
    this.$ = new safe_browsing.mojom.PhishingImageEmbedderDetectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

safe_browsing.mojom.PhishingImageEmbedderDetectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startImageEmbedding(url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      safe_browsing.mojom.PhishingImageEmbedderDetector_StartImageEmbedding_ParamsSpec,
      safe_browsing.mojom.PhishingImageEmbedderDetector_StartImageEmbedding_ResponseParamsSpec,
      [url]);
  }

};

safe_browsing.mojom.PhishingImageEmbedderDetector.getRemote = function() {
  let remote = new safe_browsing.mojom.PhishingImageEmbedderDetectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'safe_browsing.mojom.PhishingImageEmbedderDetector',
    'context');
  return remote.$;
};

// ParamsSpec for StartImageEmbedding
safe_browsing.mojom.PhishingImageEmbedderDetector_StartImageEmbedding_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingImageEmbedderDetector.StartImageEmbedding_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

safe_browsing.mojom.PhishingImageEmbedderDetector_StartImageEmbedding_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingImageEmbedderDetector.StartImageEmbedding_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'image_embedding_request', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
safe_browsing.mojom.PhishingImageEmbedderDetectorPtr = safe_browsing.mojom.PhishingImageEmbedderDetectorRemote;
safe_browsing.mojom.PhishingImageEmbedderDetectorRequest = safe_browsing.mojom.PhishingImageEmbedderDetectorPendingReceiver;


// Interface: ExtensionWebRequestReporter
safe_browsing.mojom.ExtensionWebRequestReporter = {};

safe_browsing.mojom.ExtensionWebRequestReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

safe_browsing.mojom.ExtensionWebRequestReporterRemote = class {
  static get $interfaceName() {
    return 'safe_browsing.mojom.ExtensionWebRequestReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      safe_browsing.mojom.ExtensionWebRequestReporterPendingReceiver,
      handle);
    this.$ = new safe_browsing.mojom.ExtensionWebRequestReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

safe_browsing.mojom.ExtensionWebRequestReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendWebRequestData(origin_extension_id, telemetry_url, protocol_type, contact_initiator_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      safe_browsing.mojom.ExtensionWebRequestReporter_SendWebRequestData_ParamsSpec,
      null,
      [origin_extension_id, telemetry_url, protocol_type, contact_initiator_type]);
  }

  clone(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      safe_browsing.mojom.ExtensionWebRequestReporter_Clone_ParamsSpec,
      null,
      [receiver]);
  }

};

safe_browsing.mojom.ExtensionWebRequestReporter.getRemote = function() {
  let remote = new safe_browsing.mojom.ExtensionWebRequestReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'safe_browsing.mojom.ExtensionWebRequestReporter',
    'context');
  return remote.$;
};

// ParamsSpec for SendWebRequestData
safe_browsing.mojom.ExtensionWebRequestReporter_SendWebRequestData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.ExtensionWebRequestReporter.SendWebRequestData_Params',
      packedSize: 40,
      fields: [
        { name: 'origin_extension_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'telemetry_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'protocol_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'contact_initiator_type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Clone
safe_browsing.mojom.ExtensionWebRequestReporter_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.ExtensionWebRequestReporter.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
safe_browsing.mojom.ExtensionWebRequestReporterPtr = safe_browsing.mojom.ExtensionWebRequestReporterRemote;
safe_browsing.mojom.ExtensionWebRequestReporterRequest = safe_browsing.mojom.ExtensionWebRequestReporterPendingReceiver;

