// Auto-generated MojoJS binding
// Source: chromium_src/components/safe_browsing/content/common/safe_browsing.mojom
// Module: safe_browsing.mojom

'use strict';

// Module namespace
var safe_browsing = safe_browsing || {};
safe_browsing.mojom = safe_browsing.mojom || {};


// Enum: PhishingDetectorResult
safe_browsing.mojom.PhishingDetectorResult = {
  or: 0,
  cancelling: 1,
  it: 2,
};

// Enum: ClientSideDetectionType
safe_browsing.mojom.ClientSideDetectionType = {
};

// Enum: PhishingImageEmbeddingResult
safe_browsing.mojom.PhishingImageEmbeddingResult = {
  or: 0,
  cancelling: 1,
  it: 2,
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
safe_browsing.mojom.AttributeNameValue = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : "";
  }
};

// Struct: ThreatDOMDetailsNode
safe_browsing.mojom.ThreatDOMDetailsNode = class {
  constructor(values = {}) {
    this.url = values.url !== undefined ? values.url : 0;
    this.attributes = values.attributes !== undefined ? values.attributes : 0;
    this.inner_html = values.inner_html !== undefined ? values.inner_html : "";
  }
};

// Interface: SafeBrowsing
safe_browsing.mojom.SafeBrowsingPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'safe_browsing.mojom.SafeBrowsing';
  }

  createCheckerAndCheck(frame_token, receiver, url, method, headers, load_flags, has_user_gesture, originated_from_service_worker) {
    // Method: CreateCheckerAndCheck
    return new Promise((resolve) => {
      // Call: CreateCheckerAndCheck(frame_token, receiver, url, method, headers, load_flags, has_user_gesture, originated_from_service_worker)
      resolve({});
    });
  }

  clone(receiver) {
    // Method: Clone
    // Call: Clone(receiver)
  }

};

safe_browsing.mojom.SafeBrowsingRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ThreatReporter
safe_browsing.mojom.ThreatReporterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'safe_browsing.mojom.ThreatReporter';
  }

  getThreatDOMDetails() {
    // Method: GetThreatDOMDetails
    return new Promise((resolve) => {
      // Call: GetThreatDOMDetails()
      resolve({});
    });
  }

};

safe_browsing.mojom.ThreatReporterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PhishingDetector
safe_browsing.mojom.PhishingDetectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'safe_browsing.mojom.PhishingDetector';
  }

  startPhishingDetection(url, request_type) {
    // Method: StartPhishingDetection
    return new Promise((resolve) => {
      // Call: StartPhishingDetection(url, request_type)
      resolve({});
    });
  }

};

safe_browsing.mojom.PhishingDetectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PhishingModelSetter
safe_browsing.mojom.PhishingModelSetterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'safe_browsing.mojom.PhishingModelSetter';
  }

  setImageEmbeddingAndPhishingFlatBufferModel(region, tflite_model, image_embedding_model) {
    // Method: SetImageEmbeddingAndPhishingFlatBufferModel
    // Call: SetImageEmbeddingAndPhishingFlatBufferModel(region, tflite_model, image_embedding_model)
  }

  attachImageEmbeddingModel(image_embedding_model) {
    // Method: AttachImageEmbeddingModel
    // Call: AttachImageEmbeddingModel(image_embedding_model)
  }

  setPhishingFlatBufferModel(region, tflite_model) {
    // Method: SetPhishingFlatBufferModel
    // Call: SetPhishingFlatBufferModel(region, tflite_model)
  }

  clearScorer() {
    // Method: ClearScorer
    // Call: ClearScorer()
  }

  setTestObserver(observer) {
    // Method: SetTestObserver
    // Call: SetTestObserver(observer)
  }

};

safe_browsing.mojom.PhishingModelSetterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PhishingModelSetterTestObserver
safe_browsing.mojom.PhishingModelSetterTestObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'safe_browsing.mojom.PhishingModelSetterTestObserver';
  }

  phishingModelUpdated() {
    // Method: PhishingModelUpdated
    // Call: PhishingModelUpdated()
  }

};

safe_browsing.mojom.PhishingModelSetterTestObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PhishingImageEmbedderDetector
safe_browsing.mojom.PhishingImageEmbedderDetectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'safe_browsing.mojom.PhishingImageEmbedderDetector';
  }

  startImageEmbedding(url) {
    // Method: StartImageEmbedding
    return new Promise((resolve) => {
      // Call: StartImageEmbedding(url)
      resolve({});
    });
  }

};

safe_browsing.mojom.PhishingImageEmbedderDetectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ExtensionWebRequestReporter
safe_browsing.mojom.ExtensionWebRequestReporterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'safe_browsing.mojom.ExtensionWebRequestReporter';
  }

  sendWebRequestData(origin_extension_id, telemetry_url, protocol_type, contact_initiator_type) {
    // Method: SendWebRequestData
    // Call: SendWebRequestData(origin_extension_id, telemetry_url, protocol_type, contact_initiator_type)
  }

  clone(receiver) {
    // Method: Clone
    // Call: Clone(receiver)
  }

};

safe_browsing.mojom.ExtensionWebRequestReporterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
