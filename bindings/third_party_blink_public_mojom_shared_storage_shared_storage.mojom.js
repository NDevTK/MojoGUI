// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/shared_storage/shared_storage.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: SharedStorageGetStatus
blink.mojom.SharedStorageGetStatus = {
  kSuccess: 0,
  kNotFound: 1,
  kError: 2,
};

// Enum: SharedStorageWorkletCreationMethod
blink.mojom.SharedStorageWorkletCreationMethod = {
  kAddModule: 0,
  kCreateWorklet: 1,
};

// Enum: SharedStorageDataOriginType
blink.mojom.SharedStorageDataOriginType = {
  kContextOrigin: 0,
  kScriptOrigin: 1,
  kCustomOrigin: 2,
};

// Struct: SharedStorageUrlWithMetadata
blink.mojom.SharedStorageUrlWithMetadata = class {
  constructor(values = {}) {
    this.reporting_metadata = values.reporting_metadata !== undefined ? values.reporting_metadata : "";
  }
};

// Struct: PrivateAggregationConfig
blink.mojom.PrivateAggregationConfig = class {
  constructor(values = {}) {
    this.max_contributions = values.max_contributions !== undefined ? values.max_contributions : 0;
  }
};

// Interface: SharedStorageWorkletHost
blink.mojom.SharedStorageWorkletHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SharedStorageWorkletHost';
  }

  selectURL() {
    // Method: selectURL
    // Call: selectURL()
  }

  register() {
    // Method: register
    // Call: register()
  }

  serialize() {
    // Method: Serialize
    // Call: Serialize()
  }

  environment(worklet) {
    // Method: environment
    // Call: environment(worklet)
  }

  contains() {
    // Method: contains
    // Call: contains()
  }

  aggregation() {
    // Method: Aggregation
    // Call: Aggregation()
  }

  selectURL() {
    // Method: selectURL
    // Call: selectURL()
  }

  selectURL() {
    // Method: selectURL
    // Call: selectURL()
  }

  selectURL(name, urls_with_metadata, serialized_data, keep_alive_after_operation, private_aggregation_config, resolve_to_config, saved_query_name, start_time) {
    // Method: SelectURL
    return new Promise((resolve) => {
      // Call: SelectURL(name, urls_with_metadata, serialized_data, keep_alive_after_operation, private_aggregation_config, resolve_to_config, saved_query_name, start_time)
      resolve({});
    });
  }

  run() {
    // Method: run
    // Call: run()
  }

  register() {
    // Method: register
    // Call: register()
  }

  serialize() {
    // Method: Serialize
    // Call: Serialize()
  }

  environment(worklet) {
    // Method: environment
    // Call: environment(worklet)
  }

  run() {
    // Method: run
    // Call: run()
  }

  selectURL() {
    // Method: selectURL
    // Call: selectURL()
  }

  contains() {
    // Method: contains
    // Call: contains()
  }

  aggregation(enabled) {
    // Method: Aggregation
    // Call: Aggregation(enabled)
  }

  run() {
    // Method: run
    // Call: run()
  }

  run(name, serialized_data, keep_alive_after_operation, private_aggregation_config, start_time) {
    // Method: Run
    return new Promise((resolve) => {
      // Call: Run(name, serialized_data, keep_alive_after_operation, private_aggregation_config, start_time)
      resolve({});
    });
  }

};

blink.mojom.SharedStorageWorkletHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SharedStorageDocumentService
blink.mojom.SharedStorageDocumentServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SharedStorageDocumentService';
  }

  createWorklet(script_source_url, data_origin, data_origin_type, credentials_mode, creation_method, origin_trial_features, worklet_host) {
    // Method: CreateWorklet
    return new Promise((resolve) => {
      // Call: CreateWorklet(script_source_url, data_origin, data_origin_type, credentials_mode, creation_method, origin_trial_features, worklet_host)
      resolve({});
    });
  }

  get() {
    // Method: get
    // Call: get()
  }

  sharedStorageGet(key) {
    // Method: SharedStorageGet
    return new Promise((resolve) => {
      // Call: SharedStorageGet(key)
      resolve({});
    });
  }

  sharedStorageUpdate(method_with_options) {
    // Method: SharedStorageUpdate
    return new Promise((resolve) => {
      // Call: SharedStorageUpdate(method_with_options)
      resolve({});
    });
  }

  sharedStorageBatchUpdate(methods_with_options, with_lock) {
    // Method: SharedStorageBatchUpdate
    return new Promise((resolve) => {
      // Call: SharedStorageBatchUpdate(methods_with_options, with_lock)
      resolve({});
    });
  }

};

blink.mojom.SharedStorageDocumentServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
