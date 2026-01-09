// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/shared_storage/shared_storage_worklet_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: SharedStorageWorkletPermissionsPolicyState
blink.mojom.SharedStorageWorkletPermissionsPolicyState = class {
  constructor(values = {}) {
    this.run_ad_auction_allowed = values.run_ad_auction_allowed !== undefined ? values.run_ad_auction_allowed : 0;
  }
};

// Struct: SharedStorageKeyAndOrValue
blink.mojom.SharedStorageKeyAndOrValue = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : "";
  }
};

// Struct: PrivateAggregationOperationDetails
blink.mojom.PrivateAggregationOperationDetails = class {
  constructor(values = {}) {
    this.filtering_id_max_bytes = values.filtering_id_max_bytes !== undefined ? values.filtering_id_max_bytes : 0;
  }
};

// Interface: SharedStorageEntriesListener
blink.mojom.SharedStorageEntriesListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SharedStorageEntriesListener';
  }

  remote(browser) {
    // Method: remote
    // Call: remote(browser)
  }

  iterator(to) {
    // Method: iterator
    // Call: iterator(to)
  }

  didReadEntries(success, error_message, entries, has_more_entries, total_queued_to_send) {
    // Method: DidReadEntries
    // Call: DidReadEntries(success, error_message, entries, has_more_entries, total_queued_to_send)
  }

};

blink.mojom.SharedStorageEntriesListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SharedStorageWorkletServiceClient
blink.mojom.SharedStorageWorkletServiceClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SharedStorageWorkletServiceClient';
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

  returns(batches) {
    // Method: Returns
    // Call: Returns(batches)
  }

  sharedStorageKeys(listener) {
    // Method: SharedStorageKeys
    // Call: SharedStorageKeys(listener)
  }

  returns(batches) {
    // Method: Returns
    // Call: Returns(batches)
  }

  sharedStorageEntries(listener, values_only) {
    // Method: SharedStorageEntries
    // Call: SharedStorageEntries(listener, values_only)
  }

  length() {
    // Method: length
    // Call: length()
  }

  sharedStorageLength() {
    // Method: SharedStorageLength
    return new Promise((resolve) => {
      // Call: SharedStorageLength()
      resolve({});
    });
  }

  remainingBudget() {
    // Method: remainingBudget
    // Call: remainingBudget()
  }

  sharedStorageRemainingBudget() {
    // Method: SharedStorageRemainingBudget
    return new Promise((resolve) => {
      // Call: SharedStorageRemainingBudget()
      resolve({});
    });
  }

  getInterestGroups() {
    // Method: GetInterestGroups
    return new Promise((resolve) => {
      // Call: GetInterestGroups()
      resolve({});
    });
  }

  didAddMessageToConsole(log_level, message) {
    // Method: DidAddMessageToConsole
    // Call: DidAddMessageToConsole(log_level, message)
  }

  recordUseCounters(features) {
    // Method: RecordUseCounters
    // Call: RecordUseCounters(features)
  }

};

blink.mojom.SharedStorageWorkletServiceClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SharedStorageWorkletService
blink.mojom.SharedStorageWorkletServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SharedStorageWorkletService';
  }

  initialize(client, permissions_policy_state, embedder_context) {
    // Method: Initialize
    return new Promise((resolve) => {
      // Call: Initialize(client, permissions_policy_state, embedder_context)
      resolve({});
    });
  }

  addModule() {
    // Method: addModule
    // Call: addModule()
  }

  addModule(url_loader_factory, script_source_url) {
    // Method: AddModule
    return new Promise((resolve) => {
      // Call: AddModule(url_loader_factory, script_source_url)
      resolve({});
    });
  }

  runURLSelectionOperation() {
    // Method: runURLSelectionOperation
    // Call: runURLSelectionOperation()
  }

  registerURLSelectionOperation() {
    // Method: registerURLSelectionOperation
    // Call: registerURLSelectionOperation()
  }

  runURLSelectionOperation(name, urls, serialized_data, pa_operation_details) {
    // Method: RunURLSelectionOperation
    return new Promise((resolve) => {
      // Call: RunURLSelectionOperation(name, urls, serialized_data, pa_operation_details)
      resolve({});
    });
  }

  runOperation() {
    // Method: runOperation
    // Call: runOperation()
  }

  registerOperation() {
    // Method: registerOperation
    // Call: registerOperation()
  }

  runOperation(name, serialized_data, pa_operation_details) {
    // Method: RunOperation
    return new Promise((resolve) => {
      // Call: RunOperation(name, serialized_data, pa_operation_details)
      resolve({});
    });
  }

};

blink.mojom.SharedStorageWorkletServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
