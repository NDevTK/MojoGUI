// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/shared_storage/shared_storage_worklet_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: SharedStorageEntriesListener
blink.mojom.SharedStorageEntriesListener = {};

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
      blink.mojom.SharedStorageEntriesListener_DidReadEntries_ParamsSpec,
      null,
      null,
      [success, error_message, entries, has_more_entries, total_queued_to_send],
      undefined,
      undefined
    );
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
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'entries', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'has_more_entries', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'total_queued_to_send', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Legacy compatibility
blink.mojom.SharedStorageEntriesListenerPtr = blink.mojom.SharedStorageEntriesListenerRemote;
blink.mojom.SharedStorageEntriesListenerRequest = blink.mojom.SharedStorageEntriesListenerPendingReceiver;


// Interface: SharedStorageWorkletServiceClient
blink.mojom.SharedStorageWorkletServiceClient = {};

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
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ResponseParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ResponseParamsSpec,
      [method_with_options],
      undefined,
      undefined
    );
  }

  sharedStorageBatchUpdate(methods_with_options, with_lock) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ResponseParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ResponseParamsSpec,
      [methods_with_options, with_lock],
      undefined,
      undefined
    );
  }

  sharedStorageGet(key) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ResponseParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ResponseParamsSpec,
      [key],
      undefined,
      undefined
    );
  }

  sharedStorageKeys(listener) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageKeys_ParamsSpec,
      null,
      null,
      [listener],
      undefined,
      undefined
    );
  }

  sharedStorageEntries(listener, values_only) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageEntries_ParamsSpec,
      null,
      null,
      [listener, values_only],
      undefined,
      undefined
    );
  }

  sharedStorageLength() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ResponseParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  sharedStorageRemainingBudget() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ResponseParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getInterestGroups() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ResponseParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  didAddMessageToConsole(log_level, message) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_DidAddMessageToConsole_ParamsSpec,
      null,
      null,
      [log_level, message],
      undefined,
      undefined
    );
  }

  recordUseCounters(features) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_RecordUseCounters_ParamsSpec,
      null,
      null,
      [features],
      undefined,
      undefined
    );
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
        { name: 'method_with_options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.SharedStorageUpdate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'methods_with_options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'with_lock', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.SharedStorageBatchUpdate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.SharedStorageGet_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'values_only', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.SharedStorageLength_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.SharedStorageRemainingBudget_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'bits', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletServiceClient.GetInterestGroups_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'log_level', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.SharedStorageWorkletServiceClientPtr = blink.mojom.SharedStorageWorkletServiceClientRemote;
blink.mojom.SharedStorageWorkletServiceClientRequest = blink.mojom.SharedStorageWorkletServiceClientPendingReceiver;


// Interface: SharedStorageWorkletService
blink.mojom.SharedStorageWorkletService = {};

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
      blink.mojom.SharedStorageWorkletService_Initialize_ParamsSpec,
      blink.mojom.SharedStorageWorkletService_Initialize_ResponseParamsSpec,
      blink.mojom.SharedStorageWorkletService_Initialize_ResponseParamsSpec,
      [client, permissions_policy_state, embedder_context],
      undefined,
      undefined
    );
  }

  addModule(url_loader_factory, script_source_url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SharedStorageWorkletService_AddModule_ParamsSpec,
      blink.mojom.SharedStorageWorkletService_AddModule_ResponseParamsSpec,
      blink.mojom.SharedStorageWorkletService_AddModule_ResponseParamsSpec,
      [url_loader_factory, script_source_url],
      undefined,
      undefined
    );
  }

  runURLSelectionOperation(name, urls, serialized_data, pa_operation_details) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ParamsSpec,
      blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ResponseParamsSpec,
      blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ResponseParamsSpec,
      [name, urls, serialized_data, pa_operation_details],
      undefined,
      undefined
    );
  }

  runOperation(name, serialized_data, pa_operation_details) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SharedStorageWorkletService_RunOperation_ParamsSpec,
      blink.mojom.SharedStorageWorkletService_RunOperation_ResponseParamsSpec,
      blink.mojom.SharedStorageWorkletService_RunOperation_ResponseParamsSpec,
      [name, serialized_data, pa_operation_details],
      undefined,
      undefined
    );
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
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
        { name: 'permissions_policy_state', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'embedder_context', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.SharedStorageWorkletService_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletService.Initialize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'url_loader_factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'script_source_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.SharedStorageWorkletService_AddModule_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletService.AddModule_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'serialized_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pa_operation_details', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletService.RunURLSelectionOperation_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'serialized_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pa_operation_details', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.SharedStorageWorkletService_RunOperation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletService.RunOperation_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.SharedStorageWorkletServicePtr = blink.mojom.SharedStorageWorkletServiceRemote;
blink.mojom.SharedStorageWorkletServiceRequest = blink.mojom.SharedStorageWorkletServicePendingReceiver;

