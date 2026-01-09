// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/shared_storage/shared_storage_worklet_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: SharedStorageEntriesListener
blink.mojom.SharedStorageEntriesListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SharedStorageEntriesListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedStorageEntriesListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SharedStorageEntriesListenerPendingReceiver,
      handle);
    this.$ = new blink.mojom.SharedStorageEntriesListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SharedStorageEntriesListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didReadEntries(success, error_message, entries, has_more_entries, total_queued_to_send) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SharedStorageEntriesListener_DidReadEntries_ParamsSpec.$,
      null,
      [success, error_message, entries, has_more_entries, total_queued_to_send]);
  }

};

blink.mojom.SharedStorageEntriesListener.getRemote = function() {
  let remote = new blink.mojom.SharedStorageEntriesListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedStorageEntriesListener',
    'context');
  return remote.$;
};

// ParamsSpec for DidReadEntries
blink.mojom.SharedStorageEntriesListener_DidReadEntries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageEntriesListener.DidReadEntries_Params',
      packedSize: 48,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'entries', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'has_more_entries', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'total_queued_to_send', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.SharedStorageEntriesListenerPtr = blink.mojom.SharedStorageEntriesListenerRemote;
blink.mojom.SharedStorageEntriesListenerRequest = blink.mojom.SharedStorageEntriesListenerPendingReceiver;


// Interface: SharedStorageWorkletServiceClient
blink.mojom.SharedStorageWorkletServiceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SharedStorageWorkletServiceClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedStorageWorkletServiceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SharedStorageWorkletServiceClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.SharedStorageWorkletServiceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SharedStorageWorkletServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sharedStorageUpdate(method_with_options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ParamsSpec.$,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ResponseParamsSpec.$,
      [method_with_options]);
  }

  sharedStorageBatchUpdate(methods_with_options, with_lock) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ParamsSpec.$,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ResponseParamsSpec.$,
      [methods_with_options, with_lock]);
  }

  sharedStorageGet(key) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ParamsSpec.$,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ResponseParamsSpec.$,
      [key]);
  }

  sharedStorageKeys(listener) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageKeys_ParamsSpec.$,
      null,
      [listener]);
  }

  sharedStorageEntries(listener, values_only) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageEntries_ParamsSpec.$,
      null,
      [listener, values_only]);
  }

  sharedStorageLength() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ParamsSpec.$,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ResponseParamsSpec.$,
      []);
  }

  sharedStorageRemainingBudget() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ParamsSpec.$,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ResponseParamsSpec.$,
      []);
  }

  getInterestGroups() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ParamsSpec.$,
      blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ResponseParamsSpec.$,
      []);
  }

  didAddMessageToConsole(log_level, message) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_DidAddMessageToConsole_ParamsSpec.$,
      null,
      [log_level, message]);
  }

  recordUseCounters(features) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_RecordUseCounters_ParamsSpec.$,
      null,
      [features]);
  }

};

blink.mojom.SharedStorageWorkletServiceClient.getRemote = function() {
  let remote = new blink.mojom.SharedStorageWorkletServiceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedStorageWorkletServiceClient',
    'context');
  return remote.$;
};

// ParamsSpec for SharedStorageUpdate
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.SharedStorageUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'method_with_options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.SharedStorageUpdate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SharedStorageBatchUpdate
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.SharedStorageBatchUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'methods_with_options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'with_lock', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.SharedStorageBatchUpdate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SharedStorageGet
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.SharedStorageGet_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.SharedStorageGet_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SharedStorageKeys
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageKeys_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.SharedStorageKeys_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SharedStorageEntries
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageEntries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.SharedStorageEntries_Params',
      packedSize: 24,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'values_only', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SharedStorageLength
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.SharedStorageLength_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.SharedStorageLength_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SharedStorageRemainingBudget
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.SharedStorageRemainingBudget_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.SharedStorageRemainingBudget_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'bits', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetInterestGroups
blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.GetInterestGroups_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.GetInterestGroups_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidAddMessageToConsole
blink.mojom.SharedStorageWorkletServiceClient_DidAddMessageToConsole_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.DidAddMessageToConsole_Params',
      packedSize: 24,
      fields: [
        { name: 'log_level', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordUseCounters
blink.mojom.SharedStorageWorkletServiceClient_RecordUseCounters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.RecordUseCounters_Params',
      packedSize: 16,
      fields: [
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.SharedStorageWorkletServiceClientPtr = blink.mojom.SharedStorageWorkletServiceClientRemote;
blink.mojom.SharedStorageWorkletServiceClientRequest = blink.mojom.SharedStorageWorkletServiceClientPendingReceiver;


// Interface: SharedStorageWorkletService
blink.mojom.SharedStorageWorkletServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SharedStorageWorkletServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedStorageWorkletService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SharedStorageWorkletServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.SharedStorageWorkletServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SharedStorageWorkletServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(client, permissions_policy_state, embedder_context) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SharedStorageWorkletService_Initialize_ParamsSpec.$,
      blink.mojom.SharedStorageWorkletService_Initialize_ResponseParamsSpec.$,
      [client, permissions_policy_state, embedder_context]);
  }

  addModule(url_loader_factory, script_source_url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SharedStorageWorkletService_AddModule_ParamsSpec.$,
      blink.mojom.SharedStorageWorkletService_AddModule_ResponseParamsSpec.$,
      [url_loader_factory, script_source_url]);
  }

  runURLSelectionOperation(name, urls, serialized_data, pa_operation_details) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ParamsSpec.$,
      blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ResponseParamsSpec.$,
      [name, urls, serialized_data, pa_operation_details]);
  }

  runOperation(name, serialized_data, pa_operation_details) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SharedStorageWorkletService_RunOperation_ParamsSpec.$,
      blink.mojom.SharedStorageWorkletService_RunOperation_ResponseParamsSpec.$,
      [name, serialized_data, pa_operation_details]);
  }

};

blink.mojom.SharedStorageWorkletService.getRemote = function() {
  let remote = new blink.mojom.SharedStorageWorkletServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedStorageWorkletService',
    'context');
  return remote.$;
};

// ParamsSpec for Initialize
blink.mojom.SharedStorageWorkletService_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletService.Initialize_Params',
      packedSize: 32,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'permissions_policy_state', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'embedder_context', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SharedStorageWorkletService_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletService.Initialize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddModule
blink.mojom.SharedStorageWorkletService_AddModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletService.AddModule_Params',
      packedSize: 24,
      fields: [
        { name: 'url_loader_factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'script_source_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SharedStorageWorkletService_AddModule_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletService.AddModule_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RunURLSelectionOperation
blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletService.RunURLSelectionOperation_Params',
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'serialized_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pa_operation_details', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletService.RunURLSelectionOperation_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RunOperation
blink.mojom.SharedStorageWorkletService_RunOperation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletService.RunOperation_Params',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'serialized_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pa_operation_details', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SharedStorageWorkletService_RunOperation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletService.RunOperation_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.SharedStorageWorkletServicePtr = blink.mojom.SharedStorageWorkletServiceRemote;
blink.mojom.SharedStorageWorkletServiceRequest = blink.mojom.SharedStorageWorkletServicePendingReceiver;

