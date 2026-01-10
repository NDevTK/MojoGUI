// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/shared_storage/shared_storage_worklet_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var services = services || {};
var services = services || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};

blink.mojom.GetInterestGroupsResultSpec = { $: {} };
blink.mojom.SharedStorageWorkletPermissionsPolicyStateSpec = { $: {} };
blink.mojom.SharedStorageKeyAndOrValueSpec = { $: {} };
blink.mojom.PrivateAggregationOperationDetailsSpec = { $: {} };
blink.mojom.SharedStorageEntriesListener = {};
blink.mojom.SharedStorageEntriesListener.$interfaceName = 'blink.mojom.SharedStorageEntriesListener';
blink.mojom.SharedStorageEntriesListener_DidReadEntries_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient = {};
blink.mojom.SharedStorageWorkletServiceClient.$interfaceName = 'blink.mojom.SharedStorageWorkletServiceClient';
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageKeys_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageEntries_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_DidAddMessageToConsole_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletServiceClient_RecordUseCounters_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletService = {};
blink.mojom.SharedStorageWorkletService.$interfaceName = 'blink.mojom.SharedStorageWorkletService';
blink.mojom.SharedStorageWorkletService_Initialize_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletService_Initialize_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletService_AddModule_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletService_AddModule_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletService_RunOperation_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletService_RunOperation_ResponseParamsSpec = { $: {} };

// Union: GetInterestGroupsResult
mojo.internal.Union(
    blink.mojom.GetInterestGroupsResultSpec, 'blink.mojom.GetInterestGroupsResult', {
      'error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'groups': {
        'ordinal': 1,
        'type': mojo.internal.Array(blink.mojom.StorageInterestGroupSpec, false),
        'nullable': false,
      },
    });

// Struct: SharedStorageWorkletPermissionsPolicyState
mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletPermissionsPolicyStateSpec, 'blink.mojom.SharedStorageWorkletPermissionsPolicyState', [
      mojo.internal.StructField('private_aggregation_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('join_ad_interest_group_allowed', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('run_ad_auction_allowed', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SharedStorageKeyAndOrValue
mojo.internal.Struct(
    blink.mojom.SharedStorageKeyAndOrValueSpec, 'blink.mojom.SharedStorageKeyAndOrValue', [
      mojo.internal.StructField('key', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PrivateAggregationOperationDetails
mojo.internal.Struct(
    blink.mojom.PrivateAggregationOperationDetailsSpec, 'blink.mojom.PrivateAggregationOperationDetails', [
      mojo.internal.StructField('pa_host', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.PrivateAggregationHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('filtering_id_max_bytes', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SharedStorageEntriesListener
mojo.internal.Struct(
    blink.mojom.SharedStorageEntriesListener_DidReadEntries_ParamsSpec, 'blink.mojom.SharedStorageEntriesListener_DidReadEntries_Params', [
      mojo.internal.StructField('success', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('entries', 8, 0, mojo.internal.Array(blink.mojom.SharedStorageKeyAndOrValueSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('has_more_entries', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('total_queued_to_send', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

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

blink.mojom.SharedStorageEntriesListenerPtr = blink.mojom.SharedStorageEntriesListenerRemote;
blink.mojom.SharedStorageEntriesListenerRequest = blink.mojom.SharedStorageEntriesListenerPendingReceiver;


// Interface: SharedStorageWorkletServiceClient
mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_Params', [
      mojo.internal.StructField('method_with_options', 0, 0, network.mojom.SharedStorageModifierMethodWithOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageUpdate_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_Params', [
      mojo.internal.StructField('methods_with_options', 0, 0, network.mojom.SharedStorageBatchUpdateMethodsArgumentSpec, null, false, 0, undefined),
      mojo.internal.StructField('with_lock', 8, 0, network.mojom.LockNameSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_Params', [
      mojo.internal.StructField('key', 0, 0, network.mojom.SharedStorageKeyArgumentSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ResponseParams', [
      mojo.internal.StructField('status', 16, 0, blink.mojom.SharedStorageGetStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageKeys_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageKeys_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.SharedStorageEntriesListenerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageEntries_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageEntries_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.SharedStorageEntriesListenerRemote), null, false, 0, undefined),
      mojo.internal.StructField('values_only', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ResponseParams', [
      mojo.internal.StructField('success', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ResponseParams', [
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bits', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.GetInterestGroupsResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_DidAddMessageToConsole_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_DidAddMessageToConsole_Params', [
      mojo.internal.StructField('log_level', 8, 0, blink.mojom.ConsoleMessageLevelSpec, null, false, 0, undefined),
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletServiceClient_RecordUseCounters_ParamsSpec, 'blink.mojom.SharedStorageWorkletServiceClient_RecordUseCounters_Params', [
      mojo.internal.StructField('features', 0, 0, mojo.internal.Array(blink.mojom.WebFeatureSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [method_with_options]);
  }

  sharedStorageBatchUpdate(methods_with_options, with_lock) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageBatchUpdate_ResponseParamsSpec,
      [methods_with_options, with_lock]);
  }

  sharedStorageGet(key) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageGet_ResponseParamsSpec,
      [key]);
  }

  sharedStorageKeys(listener) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageKeys_ParamsSpec,
      null,
      [listener]);
  }

  sharedStorageEntries(listener, values_only) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageEntries_ParamsSpec,
      null,
      [listener, values_only]);
  }

  sharedStorageLength() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageLength_ResponseParamsSpec,
      []);
  }

  sharedStorageRemainingBudget() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_SharedStorageRemainingBudget_ResponseParamsSpec,
      []);
  }

  getInterestGroups() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ParamsSpec,
      blink.mojom.SharedStorageWorkletServiceClient_GetInterestGroups_ResponseParamsSpec,
      []);
  }

  didAddMessageToConsole(log_level, message) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_DidAddMessageToConsole_ParamsSpec,
      null,
      [log_level, message]);
  }

  recordUseCounters(features) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.SharedStorageWorkletServiceClient_RecordUseCounters_ParamsSpec,
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

blink.mojom.SharedStorageWorkletServiceClientPtr = blink.mojom.SharedStorageWorkletServiceClientRemote;
blink.mojom.SharedStorageWorkletServiceClientRequest = blink.mojom.SharedStorageWorkletServiceClientPendingReceiver;


// Interface: SharedStorageWorkletService
mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletService_Initialize_ParamsSpec, 'blink.mojom.SharedStorageWorkletService_Initialize_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.AssociatedInterfaceProxy(blink.mojom.SharedStorageWorkletServiceClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('permissions_policy_state', 8, 0, blink.mojom.SharedStorageWorkletPermissionsPolicyStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('embedder_context', 16, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletService_Initialize_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletService_Initialize_ResponseParams', [
      mojo.internal.StructField('token', 0, 0, blink.mojom.SharedStorageWorkletTokenSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletService_AddModule_ParamsSpec, 'blink.mojom.SharedStorageWorkletService_AddModule_Params', [
      mojo.internal.StructField('url_loader_factory', 0, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('script_source_url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletService_AddModule_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletService_AddModule_ResponseParams', [
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ParamsSpec, 'blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('urls', 8, 0, mojo.internal.Array(url.mojom.UrlSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('serialized_data', 16, 0, blink.mojom.CloneableMessageSpec, null, false, 0, undefined),
      mojo.internal.StructField('pa_operation_details', 24, 0, blink.mojom.PrivateAggregationOperationDetailsSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ResponseParams', [
      mojo.internal.StructField('success', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletService_RunOperation_ParamsSpec, 'blink.mojom.SharedStorageWorkletService_RunOperation_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('serialized_data', 8, 0, blink.mojom.CloneableMessageSpec, null, false, 0, undefined),
      mojo.internal.StructField('pa_operation_details', 16, 0, blink.mojom.PrivateAggregationOperationDetailsSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletService_RunOperation_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletService_RunOperation_ResponseParams', [
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [client, permissions_policy_state, embedder_context]);
  }

  addModule(url_loader_factory, script_source_url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SharedStorageWorkletService_AddModule_ParamsSpec,
      blink.mojom.SharedStorageWorkletService_AddModule_ResponseParamsSpec,
      [url_loader_factory, script_source_url]);
  }

  runURLSelectionOperation(name, urls, serialized_data, pa_operation_details) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ParamsSpec,
      blink.mojom.SharedStorageWorkletService_RunURLSelectionOperation_ResponseParamsSpec,
      [name, urls, serialized_data, pa_operation_details]);
  }

  runOperation(name, serialized_data, pa_operation_details) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SharedStorageWorkletService_RunOperation_ParamsSpec,
      blink.mojom.SharedStorageWorkletService_RunOperation_ResponseParamsSpec,
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

blink.mojom.SharedStorageWorkletServicePtr = blink.mojom.SharedStorageWorkletServiceRemote;
blink.mojom.SharedStorageWorkletServiceRequest = blink.mojom.SharedStorageWorkletServicePendingReceiver;

