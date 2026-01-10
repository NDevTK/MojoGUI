// Auto-generated MojoJS binding
// Source: chromium_src/components/safe_browsing/content/common/safe_browsing.mojom
// Module: safe_browsing.mojom

'use strict';

// Module namespace
var safe_browsing = safe_browsing || {};
safe_browsing.mojom = safe_browsing.mojom || {};
var blink = blink || {};
var url = url || {};


// Enum: PhishingDetectorResult
safe_browsing.mojom.mojom.PhishingDetectorResult = {
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
safe_browsing.mojom.mojom.PhishingDetectorResultSpec = { $: mojo.internal.Enum() };

// Enum: ClientSideDetectionType
safe_browsing.mojom.mojom.ClientSideDetectionType = {
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
safe_browsing.mojom.mojom.ClientSideDetectionTypeSpec = { $: mojo.internal.Enum() };

// Enum: PhishingImageEmbeddingResult
safe_browsing.mojom.mojom.PhishingImageEmbeddingResult = {
  kSuccess: 0,
  kImageEmbedderNotReady: 1,
  kCancelled: 2,
  kForwardBackTransition: 3,
  kFailed: 4,
};
safe_browsing.mojom.mojom.PhishingImageEmbeddingResultSpec = { $: mojo.internal.Enum() };

// Enum: WebRequestProtocolType
safe_browsing.mojom.mojom.WebRequestProtocolType = {
  kHttpHttps: 0,
  kWebSocket: 1,
};
safe_browsing.mojom.mojom.WebRequestProtocolTypeSpec = { $: mojo.internal.Enum() };

// Enum: WebRequestContactInitiatorType
safe_browsing.mojom.mojom.WebRequestContactInitiatorType = {
  kExtension: 0,
  kContentScript: 1,
};
safe_browsing.mojom.mojom.WebRequestContactInitiatorTypeSpec = { $: mojo.internal.Enum() };

// Struct: AttributeNameValue
safe_browsing.mojom.mojom.AttributeNameValueSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.AttributeNameValue',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ThreatDOMDetailsNode
safe_browsing.mojom.mojom.ThreatDOMDetailsNodeSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.ThreatDOMDetailsNode',
      packedSize: 88,
      fields: [
        { name: 'node_id', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'tag_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'parent', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'parent_node_id', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'children', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
        { name: 'child_node_ids', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: false, minVersion: 0 },
        { name: 'attributes', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(safe_browsing.mojom.AttributeNameValueSpec, false), nullable: false, minVersion: 0 },
        { name: 'child_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: true, minVersion: 0 },
        { name: 'inner_html', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};

// Interface: SafeBrowsing
safe_browsing.mojom.mojom.SafeBrowsing = {};

safe_browsing.mojom.mojom.SafeBrowsingPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

safe_browsing.mojom.mojom.SafeBrowsingRemote = class {
  static get $interfaceName() {
    return 'safe_browsing.mojom.SafeBrowsing';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      safe_browsing.mojom.mojom.SafeBrowsingPendingReceiver,
      handle);
    this.$ = new safe_browsing.mojom.mojom.SafeBrowsingRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

safe_browsing.mojom.mojom.SafeBrowsingRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCheckerAndCheck(frame_token, receiver, url, method, headers, load_flags, has_user_gesture, originated_from_service_worker) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      safe_browsing.mojom.mojom.SafeBrowsing_CreateCheckerAndCheck_ParamsSpec,
      safe_browsing.mojom.mojom.SafeBrowsing_CreateCheckerAndCheck_ResponseParamsSpec,
      [frame_token, receiver, url, method, headers, load_flags, has_user_gesture, originated_from_service_worker]);
  }

  clone(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      safe_browsing.mojom.mojom.SafeBrowsing_Clone_ParamsSpec,
      null,
      [receiver]);
  }

};

safe_browsing.mojom.mojom.SafeBrowsing.getRemote = function() {
  let remote = new safe_browsing.mojom.mojom.SafeBrowsingRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'safe_browsing.mojom.SafeBrowsing',
    'context');
  return remote.$;
};

// ParamsSpec for CreateCheckerAndCheck
safe_browsing.mojom.mojom.SafeBrowsing_CreateCheckerAndCheck_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.SafeBrowsing.CreateCheckerAndCheck_Params',
      packedSize: 56,
      fields: [
        { name: 'frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: true, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(safe_browsing.mojom.SafeBrowsingUrlCheckerRemote), nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'method', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'headers', packedOffset: 32, packedBitOffset: 0, type: network.mojom.HttpRequestHeadersSpec, nullable: false, minVersion: 0 },
        { name: 'load_flags', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'has_user_gesture', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'originated_from_service_worker', packedOffset: 44, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

safe_browsing.mojom.mojom.SafeBrowsing_CreateCheckerAndCheck_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.SafeBrowsing.CreateCheckerAndCheck_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'proceed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'showed_interstitial', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Clone
safe_browsing.mojom.mojom.SafeBrowsing_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.SafeBrowsing.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(safe_browsing.mojom.SafeBrowsingRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
safe_browsing.mojom.mojom.SafeBrowsingPtr = safe_browsing.mojom.mojom.SafeBrowsingRemote;
safe_browsing.mojom.mojom.SafeBrowsingRequest = safe_browsing.mojom.mojom.SafeBrowsingPendingReceiver;


// Interface: ThreatReporter
safe_browsing.mojom.mojom.ThreatReporter = {};

safe_browsing.mojom.mojom.ThreatReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

safe_browsing.mojom.mojom.ThreatReporterRemote = class {
  static get $interfaceName() {
    return 'safe_browsing.mojom.ThreatReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      safe_browsing.mojom.mojom.ThreatReporterPendingReceiver,
      handle);
    this.$ = new safe_browsing.mojom.mojom.ThreatReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

safe_browsing.mojom.mojom.ThreatReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getThreatDOMDetails() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      safe_browsing.mojom.mojom.ThreatReporter_GetThreatDOMDetails_ParamsSpec,
      safe_browsing.mojom.mojom.ThreatReporter_GetThreatDOMDetails_ResponseParamsSpec,
      []);
  }

};

safe_browsing.mojom.mojom.ThreatReporter.getRemote = function() {
  let remote = new safe_browsing.mojom.mojom.ThreatReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'safe_browsing.mojom.ThreatReporter',
    'context');
  return remote.$;
};

// ParamsSpec for GetThreatDOMDetails
safe_browsing.mojom.mojom.ThreatReporter_GetThreatDOMDetails_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.ThreatReporter.GetThreatDOMDetails_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

safe_browsing.mojom.mojom.ThreatReporter_GetThreatDOMDetails_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.ThreatReporter.GetThreatDOMDetails_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'nodes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(safe_browsing.mojom.ThreatDOMDetailsNodeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
safe_browsing.mojom.mojom.ThreatReporterPtr = safe_browsing.mojom.mojom.ThreatReporterRemote;
safe_browsing.mojom.mojom.ThreatReporterRequest = safe_browsing.mojom.mojom.ThreatReporterPendingReceiver;


// Interface: PhishingDetector
safe_browsing.mojom.mojom.PhishingDetector = {};

safe_browsing.mojom.mojom.PhishingDetectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

safe_browsing.mojom.mojom.PhishingDetectorRemote = class {
  static get $interfaceName() {
    return 'safe_browsing.mojom.PhishingDetector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      safe_browsing.mojom.mojom.PhishingDetectorPendingReceiver,
      handle);
    this.$ = new safe_browsing.mojom.mojom.PhishingDetectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

safe_browsing.mojom.mojom.PhishingDetectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startPhishingDetection(url, request_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      safe_browsing.mojom.mojom.PhishingDetector_StartPhishingDetection_ParamsSpec,
      safe_browsing.mojom.mojom.PhishingDetector_StartPhishingDetection_ResponseParamsSpec,
      [url, request_type]);
  }

};

safe_browsing.mojom.mojom.PhishingDetector.getRemote = function() {
  let remote = new safe_browsing.mojom.mojom.PhishingDetectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'safe_browsing.mojom.PhishingDetector',
    'context');
  return remote.$;
};

// ParamsSpec for StartPhishingDetection
safe_browsing.mojom.mojom.PhishingDetector_StartPhishingDetection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingDetector.StartPhishingDetection_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'request_type', packedOffset: 8, packedBitOffset: 0, type: safe_browsing.mojom.ClientSideDetectionTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

safe_browsing.mojom.mojom.PhishingDetector_StartPhishingDetection_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingDetector.StartPhishingDetection_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: safe_browsing.mojom.PhishingDetectorResultSpec, nullable: false, minVersion: 0 },
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProtoWrapperSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
safe_browsing.mojom.mojom.PhishingDetectorPtr = safe_browsing.mojom.mojom.PhishingDetectorRemote;
safe_browsing.mojom.mojom.PhishingDetectorRequest = safe_browsing.mojom.mojom.PhishingDetectorPendingReceiver;


// Interface: PhishingModelSetter
safe_browsing.mojom.mojom.PhishingModelSetter = {};

safe_browsing.mojom.mojom.PhishingModelSetterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

safe_browsing.mojom.mojom.PhishingModelSetterRemote = class {
  static get $interfaceName() {
    return 'safe_browsing.mojom.PhishingModelSetter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      safe_browsing.mojom.mojom.PhishingModelSetterPendingReceiver,
      handle);
    this.$ = new safe_browsing.mojom.mojom.PhishingModelSetterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

safe_browsing.mojom.mojom.PhishingModelSetterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setImageEmbeddingAndPhishingFlatBufferModel(region, tflite_model, image_embedding_model) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      safe_browsing.mojom.mojom.PhishingModelSetter_SetImageEmbeddingAndPhishingFlatBufferModel_ParamsSpec,
      null,
      [region, tflite_model, image_embedding_model]);
  }

  attachImageEmbeddingModel(image_embedding_model) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      safe_browsing.mojom.mojom.PhishingModelSetter_AttachImageEmbeddingModel_ParamsSpec,
      null,
      [image_embedding_model]);
  }

  setPhishingFlatBufferModel(region, tflite_model) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      safe_browsing.mojom.mojom.PhishingModelSetter_SetPhishingFlatBufferModel_ParamsSpec,
      null,
      [region, tflite_model]);
  }

  clearScorer() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      safe_browsing.mojom.mojom.PhishingModelSetter_ClearScorer_ParamsSpec,
      null,
      []);
  }

  setTestObserver(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      safe_browsing.mojom.mojom.PhishingModelSetter_SetTestObserver_ParamsSpec,
      null,
      [observer]);
  }

};

safe_browsing.mojom.mojom.PhishingModelSetter.getRemote = function() {
  let remote = new safe_browsing.mojom.mojom.PhishingModelSetterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'safe_browsing.mojom.PhishingModelSetter',
    'context');
  return remote.$;
};

// ParamsSpec for SetImageEmbeddingAndPhishingFlatBufferModel
safe_browsing.mojom.mojom.PhishingModelSetter_SetImageEmbeddingAndPhishingFlatBufferModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingModelSetter.SetImageEmbeddingAndPhishingFlatBufferModel_Params',
      packedSize: 32,
      fields: [
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
        { name: 'tflite_model', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: true, minVersion: 0 },
        { name: 'image_embedding_model', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for AttachImageEmbeddingModel
safe_browsing.mojom.mojom.PhishingModelSetter_AttachImageEmbeddingModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingModelSetter.AttachImageEmbeddingModel_Params',
      packedSize: 16,
      fields: [
        { name: 'image_embedding_model', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPhishingFlatBufferModel
safe_browsing.mojom.mojom.PhishingModelSetter_SetPhishingFlatBufferModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingModelSetter.SetPhishingFlatBufferModel_Params',
      packedSize: 24,
      fields: [
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
        { name: 'tflite_model', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ClearScorer
safe_browsing.mojom.mojom.PhishingModelSetter_ClearScorer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingModelSetter.ClearScorer_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetTestObserver
safe_browsing.mojom.mojom.PhishingModelSetter_SetTestObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingModelSetter.SetTestObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(safe_browsing.mojom.PhishingModelSetterTestObserverRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
safe_browsing.mojom.mojom.PhishingModelSetterPtr = safe_browsing.mojom.mojom.PhishingModelSetterRemote;
safe_browsing.mojom.mojom.PhishingModelSetterRequest = safe_browsing.mojom.mojom.PhishingModelSetterPendingReceiver;


// Interface: PhishingModelSetterTestObserver
safe_browsing.mojom.mojom.PhishingModelSetterTestObserver = {};

safe_browsing.mojom.mojom.PhishingModelSetterTestObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

safe_browsing.mojom.mojom.PhishingModelSetterTestObserverRemote = class {
  static get $interfaceName() {
    return 'safe_browsing.mojom.PhishingModelSetterTestObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      safe_browsing.mojom.mojom.PhishingModelSetterTestObserverPendingReceiver,
      handle);
    this.$ = new safe_browsing.mojom.mojom.PhishingModelSetterTestObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

safe_browsing.mojom.mojom.PhishingModelSetterTestObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  phishingModelUpdated() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      safe_browsing.mojom.mojom.PhishingModelSetterTestObserver_PhishingModelUpdated_ParamsSpec,
      null,
      []);
  }

};

safe_browsing.mojom.mojom.PhishingModelSetterTestObserver.getRemote = function() {
  let remote = new safe_browsing.mojom.mojom.PhishingModelSetterTestObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'safe_browsing.mojom.PhishingModelSetterTestObserver',
    'context');
  return remote.$;
};

// ParamsSpec for PhishingModelUpdated
safe_browsing.mojom.mojom.PhishingModelSetterTestObserver_PhishingModelUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingModelSetterTestObserver.PhishingModelUpdated_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
safe_browsing.mojom.mojom.PhishingModelSetterTestObserverPtr = safe_browsing.mojom.mojom.PhishingModelSetterTestObserverRemote;
safe_browsing.mojom.mojom.PhishingModelSetterTestObserverRequest = safe_browsing.mojom.mojom.PhishingModelSetterTestObserverPendingReceiver;


// Interface: PhishingImageEmbedderDetector
safe_browsing.mojom.mojom.PhishingImageEmbedderDetector = {};

safe_browsing.mojom.mojom.PhishingImageEmbedderDetectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

safe_browsing.mojom.mojom.PhishingImageEmbedderDetectorRemote = class {
  static get $interfaceName() {
    return 'safe_browsing.mojom.PhishingImageEmbedderDetector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      safe_browsing.mojom.mojom.PhishingImageEmbedderDetectorPendingReceiver,
      handle);
    this.$ = new safe_browsing.mojom.mojom.PhishingImageEmbedderDetectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

safe_browsing.mojom.mojom.PhishingImageEmbedderDetectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startImageEmbedding(url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      safe_browsing.mojom.mojom.PhishingImageEmbedderDetector_StartImageEmbedding_ParamsSpec,
      safe_browsing.mojom.mojom.PhishingImageEmbedderDetector_StartImageEmbedding_ResponseParamsSpec,
      [url]);
  }

};

safe_browsing.mojom.mojom.PhishingImageEmbedderDetector.getRemote = function() {
  let remote = new safe_browsing.mojom.mojom.PhishingImageEmbedderDetectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'safe_browsing.mojom.PhishingImageEmbedderDetector',
    'context');
  return remote.$;
};

// ParamsSpec for StartImageEmbedding
safe_browsing.mojom.mojom.PhishingImageEmbedderDetector_StartImageEmbedding_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingImageEmbedderDetector.StartImageEmbedding_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

safe_browsing.mojom.mojom.PhishingImageEmbedderDetector_StartImageEmbedding_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.PhishingImageEmbedderDetector.StartImageEmbedding_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: safe_browsing.mojom.PhishingImageEmbeddingResultSpec, nullable: false, minVersion: 0 },
        { name: 'image_embedding_request', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProtoWrapperSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
safe_browsing.mojom.mojom.PhishingImageEmbedderDetectorPtr = safe_browsing.mojom.mojom.PhishingImageEmbedderDetectorRemote;
safe_browsing.mojom.mojom.PhishingImageEmbedderDetectorRequest = safe_browsing.mojom.mojom.PhishingImageEmbedderDetectorPendingReceiver;


// Interface: ExtensionWebRequestReporter
safe_browsing.mojom.mojom.ExtensionWebRequestReporter = {};

safe_browsing.mojom.mojom.ExtensionWebRequestReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

safe_browsing.mojom.mojom.ExtensionWebRequestReporterRemote = class {
  static get $interfaceName() {
    return 'safe_browsing.mojom.ExtensionWebRequestReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      safe_browsing.mojom.mojom.ExtensionWebRequestReporterPendingReceiver,
      handle);
    this.$ = new safe_browsing.mojom.mojom.ExtensionWebRequestReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

safe_browsing.mojom.mojom.ExtensionWebRequestReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendWebRequestData(origin_extension_id, telemetry_url, protocol_type, contact_initiator_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      safe_browsing.mojom.mojom.ExtensionWebRequestReporter_SendWebRequestData_ParamsSpec,
      null,
      [origin_extension_id, telemetry_url, protocol_type, contact_initiator_type]);
  }

  clone(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      safe_browsing.mojom.mojom.ExtensionWebRequestReporter_Clone_ParamsSpec,
      null,
      [receiver]);
  }

};

safe_browsing.mojom.mojom.ExtensionWebRequestReporter.getRemote = function() {
  let remote = new safe_browsing.mojom.mojom.ExtensionWebRequestReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'safe_browsing.mojom.ExtensionWebRequestReporter',
    'context');
  return remote.$;
};

// ParamsSpec for SendWebRequestData
safe_browsing.mojom.mojom.ExtensionWebRequestReporter_SendWebRequestData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.ExtensionWebRequestReporter.SendWebRequestData_Params',
      packedSize: 32,
      fields: [
        { name: 'origin_extension_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'telemetry_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'protocol_type', packedOffset: 16, packedBitOffset: 0, type: safe_browsing.mojom.WebRequestProtocolTypeSpec, nullable: false, minVersion: 0 },
        { name: 'contact_initiator_type', packedOffset: 20, packedBitOffset: 0, type: safe_browsing.mojom.WebRequestContactInitiatorTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for Clone
safe_browsing.mojom.mojom.ExtensionWebRequestReporter_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.ExtensionWebRequestReporter.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(safe_browsing.mojom.ExtensionWebRequestReporterRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
safe_browsing.mojom.mojom.ExtensionWebRequestReporterPtr = safe_browsing.mojom.mojom.ExtensionWebRequestReporterRemote;
safe_browsing.mojom.mojom.ExtensionWebRequestReporterRequest = safe_browsing.mojom.mojom.ExtensionWebRequestReporterPendingReceiver;

