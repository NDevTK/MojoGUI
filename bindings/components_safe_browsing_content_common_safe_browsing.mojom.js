// Auto-generated MojoJS binding
// Source: chromium_src/components/safe_browsing/content/common/safe_browsing.mojom
// Module: safe_browsing.mojom

'use strict';

// Module namespace
var safe_browsing = safe_browsing || {};
safe_browsing.mojom = safe_browsing.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var blink = blink || {};
var url = url || {};

safe_browsing.mojom.PhishingDetectorResultSpec = { $: mojo.internal.Enum() };
safe_browsing.mojom.ClientSideDetectionTypeSpec = { $: mojo.internal.Enum() };
safe_browsing.mojom.PhishingImageEmbeddingResultSpec = { $: mojo.internal.Enum() };
safe_browsing.mojom.WebRequestProtocolTypeSpec = { $: mojo.internal.Enum() };
safe_browsing.mojom.WebRequestContactInitiatorTypeSpec = { $: mojo.internal.Enum() };
safe_browsing.mojom.AttributeNameValueSpec = { $: {} };
safe_browsing.mojom.ThreatDOMDetailsNodeSpec = { $: {} };
safe_browsing.mojom.SafeBrowsing = {};
safe_browsing.mojom.SafeBrowsing.$interfaceName = 'safe_browsing.mojom.SafeBrowsing';
safe_browsing.mojom.SafeBrowsing_CreateCheckerAndCheck_ParamsSpec = { $: {} };
safe_browsing.mojom.SafeBrowsing_CreateCheckerAndCheck_ResponseParamsSpec = { $: {} };
safe_browsing.mojom.SafeBrowsing_Clone_ParamsSpec = { $: {} };
safe_browsing.mojom.ThreatReporter = {};
safe_browsing.mojom.ThreatReporter.$interfaceName = 'safe_browsing.mojom.ThreatReporter';
safe_browsing.mojom.ThreatReporter_GetThreatDOMDetails_ParamsSpec = { $: {} };
safe_browsing.mojom.ThreatReporter_GetThreatDOMDetails_ResponseParamsSpec = { $: {} };
safe_browsing.mojom.PhishingDetector = {};
safe_browsing.mojom.PhishingDetector.$interfaceName = 'safe_browsing.mojom.PhishingDetector';
safe_browsing.mojom.PhishingDetector_StartPhishingDetection_ParamsSpec = { $: {} };
safe_browsing.mojom.PhishingDetector_StartPhishingDetection_ResponseParamsSpec = { $: {} };
safe_browsing.mojom.PhishingModelSetter = {};
safe_browsing.mojom.PhishingModelSetter.$interfaceName = 'safe_browsing.mojom.PhishingModelSetter';
safe_browsing.mojom.PhishingModelSetter_SetImageEmbeddingAndPhishingFlatBufferModel_ParamsSpec = { $: {} };
safe_browsing.mojom.PhishingModelSetter_AttachImageEmbeddingModel_ParamsSpec = { $: {} };
safe_browsing.mojom.PhishingModelSetter_SetPhishingFlatBufferModel_ParamsSpec = { $: {} };
safe_browsing.mojom.PhishingModelSetter_ClearScorer_ParamsSpec = { $: {} };
safe_browsing.mojom.PhishingModelSetter_SetTestObserver_ParamsSpec = { $: {} };
safe_browsing.mojom.PhishingModelSetter_SetTestObserver_ResponseParamsSpec = { $: {} };
safe_browsing.mojom.PhishingModelSetterTestObserver = {};
safe_browsing.mojom.PhishingModelSetterTestObserver.$interfaceName = 'safe_browsing.mojom.PhishingModelSetterTestObserver';
safe_browsing.mojom.PhishingModelSetterTestObserver_PhishingModelUpdated_ParamsSpec = { $: {} };
safe_browsing.mojom.PhishingImageEmbedderDetector = {};
safe_browsing.mojom.PhishingImageEmbedderDetector.$interfaceName = 'safe_browsing.mojom.PhishingImageEmbedderDetector';
safe_browsing.mojom.PhishingImageEmbedderDetector_StartImageEmbedding_ParamsSpec = { $: {} };
safe_browsing.mojom.PhishingImageEmbedderDetector_StartImageEmbedding_ResponseParamsSpec = { $: {} };
safe_browsing.mojom.ExtensionWebRequestReporter = {};
safe_browsing.mojom.ExtensionWebRequestReporter.$interfaceName = 'safe_browsing.mojom.ExtensionWebRequestReporter';
safe_browsing.mojom.ExtensionWebRequestReporter_SendWebRequestData_ParamsSpec = { $: {} };
safe_browsing.mojom.ExtensionWebRequestReporter_Clone_ParamsSpec = { $: {} };

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

// Struct: AttributeNameValue
mojo.internal.Struct(
    safe_browsing.mojom.AttributeNameValueSpec, 'safe_browsing.mojom.AttributeNameValue', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ThreatDOMDetailsNode
mojo.internal.Struct(
    safe_browsing.mojom.ThreatDOMDetailsNodeSpec, 'safe_browsing.mojom.ThreatDOMDetailsNode', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tag_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('parent', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('children', 24, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('child_node_ids', 32, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('attributes', 40, 0, mojo.internal.Array(safe_browsing.mojom.AttributeNameValueSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('child_frame_token', 48, 0, blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('inner_html', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('node_id', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('parent_node_id', 68, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 80]]);

// Interface: SafeBrowsing
mojo.internal.Struct(
    safe_browsing.mojom.SafeBrowsing_CreateCheckerAndCheck_ParamsSpec, 'safe_browsing.mojom.SafeBrowsing_CreateCheckerAndCheck_Params', [
      mojo.internal.StructField('frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(safe_browsing.mojom.SafeBrowsingUrlCheckerRemote), null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('method', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('headers', 32, 0, network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('load_flags', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_user_gesture', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('originated_from_service_worker', 44, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    safe_browsing.mojom.SafeBrowsing_CreateCheckerAndCheck_ResponseParamsSpec, 'safe_browsing.mojom.SafeBrowsing_CreateCheckerAndCheck_ResponseParams', [
      mojo.internal.StructField('proceed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('showed_interstitial', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    safe_browsing.mojom.SafeBrowsing_Clone_ParamsSpec, 'safe_browsing.mojom.SafeBrowsing_Clone_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(safe_browsing.mojom.SafeBrowsingSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [frame_token, receiver, url, method, headers, load_flags, has_user_gesture, originated_from_service_worker],
      false);
  }

  clone(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      safe_browsing.mojom.SafeBrowsing_Clone_ParamsSpec,
      null,
      [receiver],
      false);
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

safe_browsing.mojom.SafeBrowsingReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = safe_browsing.mojom.SafeBrowsing_CreateCheckerAndCheck_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createCheckerAndCheck(params.frame_token, params.receiver, params.url, params.method, params.headers, params.load_flags, params.has_user_gesture, params.originated_from_service_worker);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, safe_browsing.mojom.SafeBrowsing_CreateCheckerAndCheck_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = safe_browsing.mojom.SafeBrowsing_Clone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clone(params.receiver);
          break;
        }
      }
      }
    }});
  }
};

safe_browsing.mojom.SafeBrowsingReceiver = safe_browsing.mojom.SafeBrowsingReceiver;

safe_browsing.mojom.SafeBrowsingPtr = safe_browsing.mojom.SafeBrowsingRemote;
safe_browsing.mojom.SafeBrowsingRequest = safe_browsing.mojom.SafeBrowsingPendingReceiver;


// Interface: ThreatReporter
mojo.internal.Struct(
    safe_browsing.mojom.ThreatReporter_GetThreatDOMDetails_ParamsSpec, 'safe_browsing.mojom.ThreatReporter_GetThreatDOMDetails_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    safe_browsing.mojom.ThreatReporter_GetThreatDOMDetails_ResponseParamsSpec, 'safe_browsing.mojom.ThreatReporter_GetThreatDOMDetails_ResponseParams', [
      mojo.internal.StructField('nodes', 0, 0, mojo.internal.Array(safe_browsing.mojom.ThreatDOMDetailsNodeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
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

safe_browsing.mojom.ThreatReporterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = safe_browsing.mojom.ThreatReporter_GetThreatDOMDetails_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getThreatDOMDetails();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, safe_browsing.mojom.ThreatReporter_GetThreatDOMDetails_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

safe_browsing.mojom.ThreatReporterReceiver = safe_browsing.mojom.ThreatReporterReceiver;

safe_browsing.mojom.ThreatReporterPtr = safe_browsing.mojom.ThreatReporterRemote;
safe_browsing.mojom.ThreatReporterRequest = safe_browsing.mojom.ThreatReporterPendingReceiver;


// Interface: PhishingDetector
mojo.internal.Struct(
    safe_browsing.mojom.PhishingDetector_StartPhishingDetection_ParamsSpec, 'safe_browsing.mojom.PhishingDetector_StartPhishingDetection_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_type', 8, 0, safe_browsing.mojom.ClientSideDetectionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    safe_browsing.mojom.PhishingDetector_StartPhishingDetection_ResponseParamsSpec, 'safe_browsing.mojom.PhishingDetector_StartPhishingDetection_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, safe_browsing.mojom.PhishingDetectorResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request', 8, 0, mojo_base.mojom.ProtoWrapperSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

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
      [url, request_type],
      false);
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

safe_browsing.mojom.PhishingDetectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = safe_browsing.mojom.PhishingDetector_StartPhishingDetection_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startPhishingDetection(params.url, params.request_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, safe_browsing.mojom.PhishingDetector_StartPhishingDetection_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

safe_browsing.mojom.PhishingDetectorReceiver = safe_browsing.mojom.PhishingDetectorReceiver;

safe_browsing.mojom.PhishingDetectorPtr = safe_browsing.mojom.PhishingDetectorRemote;
safe_browsing.mojom.PhishingDetectorRequest = safe_browsing.mojom.PhishingDetectorPendingReceiver;


// Interface: PhishingModelSetter
mojo.internal.Struct(
    safe_browsing.mojom.PhishingModelSetter_SetImageEmbeddingAndPhishingFlatBufferModel_ParamsSpec, 'safe_browsing.mojom.PhishingModelSetter_SetImageEmbeddingAndPhishingFlatBufferModel_Params', [
      mojo.internal.StructField('region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tflite_model', 8, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('image_embedding_model', 16, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    safe_browsing.mojom.PhishingModelSetter_AttachImageEmbeddingModel_ParamsSpec, 'safe_browsing.mojom.PhishingModelSetter_AttachImageEmbeddingModel_Params', [
      mojo.internal.StructField('image_embedding_model', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    safe_browsing.mojom.PhishingModelSetter_SetPhishingFlatBufferModel_ParamsSpec, 'safe_browsing.mojom.PhishingModelSetter_SetPhishingFlatBufferModel_Params', [
      mojo.internal.StructField('region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tflite_model', 8, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    safe_browsing.mojom.PhishingModelSetter_ClearScorer_ParamsSpec, 'safe_browsing.mojom.PhishingModelSetter_ClearScorer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    safe_browsing.mojom.PhishingModelSetter_SetTestObserver_ParamsSpec, 'safe_browsing.mojom.PhishingModelSetter_SetTestObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(safe_browsing.mojom.PhishingModelSetterTestObserverSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    safe_browsing.mojom.PhishingModelSetter_SetTestObserver_ResponseParamsSpec, 'safe_browsing.mojom.PhishingModelSetter_SetTestObserver_ResponseParams', [
    ],
    [[0, 8]]);

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
      [region, tflite_model, image_embedding_model],
      false);
  }

  attachImageEmbeddingModel(image_embedding_model) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      safe_browsing.mojom.PhishingModelSetter_AttachImageEmbeddingModel_ParamsSpec,
      null,
      [image_embedding_model],
      false);
  }

  setPhishingFlatBufferModel(region, tflite_model) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      safe_browsing.mojom.PhishingModelSetter_SetPhishingFlatBufferModel_ParamsSpec,
      null,
      [region, tflite_model],
      false);
  }

  clearScorer() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      safe_browsing.mojom.PhishingModelSetter_ClearScorer_ParamsSpec,
      null,
      [],
      false);
  }

  setTestObserver(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      safe_browsing.mojom.PhishingModelSetter_SetTestObserver_ParamsSpec,
      safe_browsing.mojom.PhishingModelSetter_SetTestObserver_ResponseParamsSpec,
      [observer],
      false);
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

safe_browsing.mojom.PhishingModelSetterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = safe_browsing.mojom.PhishingModelSetter_SetImageEmbeddingAndPhishingFlatBufferModel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setImageEmbeddingAndPhishingFlatBufferModel(params.region, params.tflite_model, params.image_embedding_model);
          break;
        }
        case 1: {
          const params = safe_browsing.mojom.PhishingModelSetter_AttachImageEmbeddingModel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.attachImageEmbeddingModel(params.image_embedding_model);
          break;
        }
        case 2: {
          const params = safe_browsing.mojom.PhishingModelSetter_SetPhishingFlatBufferModel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPhishingFlatBufferModel(params.region, params.tflite_model);
          break;
        }
        case 3: {
          const params = safe_browsing.mojom.PhishingModelSetter_ClearScorer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearScorer();
          break;
        }
        case 4: {
          const params = safe_browsing.mojom.PhishingModelSetter_SetTestObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setTestObserver(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, safe_browsing.mojom.PhishingModelSetter_SetTestObserver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

safe_browsing.mojom.PhishingModelSetterReceiver = safe_browsing.mojom.PhishingModelSetterReceiver;

safe_browsing.mojom.PhishingModelSetterPtr = safe_browsing.mojom.PhishingModelSetterRemote;
safe_browsing.mojom.PhishingModelSetterRequest = safe_browsing.mojom.PhishingModelSetterPendingReceiver;


// Interface: PhishingModelSetterTestObserver
mojo.internal.Struct(
    safe_browsing.mojom.PhishingModelSetterTestObserver_PhishingModelUpdated_ParamsSpec, 'safe_browsing.mojom.PhishingModelSetterTestObserver_PhishingModelUpdated_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
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

safe_browsing.mojom.PhishingModelSetterTestObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = safe_browsing.mojom.PhishingModelSetterTestObserver_PhishingModelUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.phishingModelUpdated();
          break;
        }
      }
      }
    }});
  }
};

safe_browsing.mojom.PhishingModelSetterTestObserverReceiver = safe_browsing.mojom.PhishingModelSetterTestObserverReceiver;

safe_browsing.mojom.PhishingModelSetterTestObserverPtr = safe_browsing.mojom.PhishingModelSetterTestObserverRemote;
safe_browsing.mojom.PhishingModelSetterTestObserverRequest = safe_browsing.mojom.PhishingModelSetterTestObserverPendingReceiver;


// Interface: PhishingImageEmbedderDetector
mojo.internal.Struct(
    safe_browsing.mojom.PhishingImageEmbedderDetector_StartImageEmbedding_ParamsSpec, 'safe_browsing.mojom.PhishingImageEmbedderDetector_StartImageEmbedding_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    safe_browsing.mojom.PhishingImageEmbedderDetector_StartImageEmbedding_ResponseParamsSpec, 'safe_browsing.mojom.PhishingImageEmbedderDetector_StartImageEmbedding_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, safe_browsing.mojom.PhishingImageEmbeddingResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_embedding_request', 8, 0, mojo_base.mojom.ProtoWrapperSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

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
      [url],
      false);
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

safe_browsing.mojom.PhishingImageEmbedderDetectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = safe_browsing.mojom.PhishingImageEmbedderDetector_StartImageEmbedding_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startImageEmbedding(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, safe_browsing.mojom.PhishingImageEmbedderDetector_StartImageEmbedding_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

safe_browsing.mojom.PhishingImageEmbedderDetectorReceiver = safe_browsing.mojom.PhishingImageEmbedderDetectorReceiver;

safe_browsing.mojom.PhishingImageEmbedderDetectorPtr = safe_browsing.mojom.PhishingImageEmbedderDetectorRemote;
safe_browsing.mojom.PhishingImageEmbedderDetectorRequest = safe_browsing.mojom.PhishingImageEmbedderDetectorPendingReceiver;


// Interface: ExtensionWebRequestReporter
mojo.internal.Struct(
    safe_browsing.mojom.ExtensionWebRequestReporter_SendWebRequestData_ParamsSpec, 'safe_browsing.mojom.ExtensionWebRequestReporter_SendWebRequestData_Params', [
      mojo.internal.StructField('origin_extension_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('telemetry_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('protocol_type', 16, 0, safe_browsing.mojom.WebRequestProtocolTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('contact_initiator_type', 24, 0, safe_browsing.mojom.WebRequestContactInitiatorTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    safe_browsing.mojom.ExtensionWebRequestReporter_Clone_ParamsSpec, 'safe_browsing.mojom.ExtensionWebRequestReporter_Clone_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(safe_browsing.mojom.ExtensionWebRequestReporterSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [origin_extension_id, telemetry_url, protocol_type, contact_initiator_type],
      false);
  }

  clone(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      safe_browsing.mojom.ExtensionWebRequestReporter_Clone_ParamsSpec,
      null,
      [receiver],
      false);
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

safe_browsing.mojom.ExtensionWebRequestReporterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = safe_browsing.mojom.ExtensionWebRequestReporter_SendWebRequestData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendWebRequestData(params.origin_extension_id, params.telemetry_url, params.protocol_type, params.contact_initiator_type);
          break;
        }
        case 1: {
          const params = safe_browsing.mojom.ExtensionWebRequestReporter_Clone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clone(params.receiver);
          break;
        }
      }
      }
    }});
  }
};

safe_browsing.mojom.ExtensionWebRequestReporterReceiver = safe_browsing.mojom.ExtensionWebRequestReporterReceiver;

safe_browsing.mojom.ExtensionWebRequestReporterPtr = safe_browsing.mojom.ExtensionWebRequestReporterRemote;
safe_browsing.mojom.ExtensionWebRequestReporterRequest = safe_browsing.mojom.ExtensionWebRequestReporterPendingReceiver;

