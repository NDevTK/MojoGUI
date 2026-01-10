// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/shared_storage/shared_storage.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var url = url || {};

blink.mojom.SharedStorageGetStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.SharedStorageWorkletCreationMethodSpec = { $: mojo.internal.Enum() };
blink.mojom.SharedStorageDataOriginTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.SharedStorageUrlWithMetadataSpec = { $: {} };
blink.mojom.PrivateAggregationConfigSpec = { $: {} };
blink.mojom.SharedStorageWorkletHost = {};
blink.mojom.SharedStorageWorkletHost.$interfaceName = 'blink.mojom.SharedStorageWorkletHost';
blink.mojom.SharedStorageWorkletHost_SelectURL_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletHost_SelectURL_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletHost_Run_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletHost_Run_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageDocumentService = {};
blink.mojom.SharedStorageDocumentService.$interfaceName = 'blink.mojom.SharedStorageDocumentService';
blink.mojom.SharedStorageDocumentService_CreateWorklet_ParamsSpec = { $: {} };
blink.mojom.SharedStorageDocumentService_CreateWorklet_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageDocumentService_SharedStorageGet_ParamsSpec = { $: {} };
blink.mojom.SharedStorageDocumentService_SharedStorageGet_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ParamsSpec = { $: {} };
blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ParamsSpec = { $: {} };
blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ResponseParamsSpec = { $: {} };

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
mojo.internal.Struct(
    blink.mojom.SharedStorageUrlWithMetadataSpec, 'blink.mojom.SharedStorageUrlWithMetadata', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reporting_metadata', 8, 0, mojo.internal.Map(mojo.internal.String, url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PrivateAggregationConfig
mojo.internal.Struct(
    blink.mojom.PrivateAggregationConfigSpec, 'blink.mojom.PrivateAggregationConfig', [
      mojo.internal.StructField('aggregation_coordinator_origin', 0, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('context_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('filtering_id_max_bytes', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_contributions_$value', 20, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'max_contributions_$flag', originalFieldName: 'max_contributions' }),
      mojo.internal.StructField('max_contributions_$flag', 22, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'max_contributions_$value', originalFieldName: 'max_contributions' }),
    ],
    [[0, 32]]);

// Interface: SharedStorageWorkletHost
mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletHost_SelectURL_ParamsSpec, 'blink.mojom.SharedStorageWorkletHost_SelectURL_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('urls_with_metadata', 8, 0, mojo.internal.Array(blink.mojom.SharedStorageUrlWithMetadataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('serialized_data', 16, 0, blink.mojom.CloneableMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('private_aggregation_config', 24, 0, blink.mojom.PrivateAggregationConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('saved_query_name', 32, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('start_time', 40, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('keep_alive_after_operation', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('resolve_to_config', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletHost_SelectURL_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletHost_SelectURL_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('config', 8, 0, blink.mojom.FencedFrameConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletHost_Run_ParamsSpec, 'blink.mojom.SharedStorageWorkletHost_Run_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('serialized_data', 8, 0, blink.mojom.CloneableMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('private_aggregation_config', 16, 0, blink.mojom.PrivateAggregationConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('start_time', 24, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('keep_alive_after_operation', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletHost_Run_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletHost_Run_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.SharedStorageWorkletHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SharedStorageWorkletHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedStorageWorkletHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SharedStorageWorkletHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.SharedStorageWorkletHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SharedStorageWorkletHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  selectURL(name, urls_with_metadata, serialized_data, keep_alive_after_operation, private_aggregation_config, resolve_to_config, saved_query_name, start_time) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SharedStorageWorkletHost_SelectURL_ParamsSpec,
      blink.mojom.SharedStorageWorkletHost_SelectURL_ResponseParamsSpec,
      [name, urls_with_metadata, serialized_data, keep_alive_after_operation, private_aggregation_config, resolve_to_config, saved_query_name, start_time],
      false);
  }

  run(name, serialized_data, keep_alive_after_operation, private_aggregation_config, start_time) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SharedStorageWorkletHost_Run_ParamsSpec,
      blink.mojom.SharedStorageWorkletHost_Run_ResponseParamsSpec,
      [name, serialized_data, keep_alive_after_operation, private_aggregation_config, start_time],
      false);
  }

};

blink.mojom.SharedStorageWorkletHost.getRemote = function() {
  let remote = new blink.mojom.SharedStorageWorkletHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedStorageWorkletHost',
    'context');
  return remote.$;
};

blink.mojom.SharedStorageWorkletHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.SharedStorageWorkletHost_SelectURL_ParamsSpec.$.decode(message.payload);
          const result = this.impl.selectURL(params.name, params.urls_with_metadata, params.serialized_data, params.keep_alive_after_operation, params.private_aggregation_config, params.resolve_to_config, params.saved_query_name, params.start_time);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageWorkletHost_SelectURL_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = blink.mojom.SharedStorageWorkletHost_Run_ParamsSpec.$.decode(message.payload);
          const result = this.impl.run(params.name, params.serialized_data, params.keep_alive_after_operation, params.private_aggregation_config, params.start_time);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageWorkletHost_Run_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

blink.mojom.SharedStorageWorkletHostReceiver = blink.mojom.SharedStorageWorkletHostReceiver;

blink.mojom.SharedStorageWorkletHostPtr = blink.mojom.SharedStorageWorkletHostRemote;
blink.mojom.SharedStorageWorkletHostRequest = blink.mojom.SharedStorageWorkletHostPendingReceiver;


// Interface: SharedStorageDocumentService
mojo.internal.Struct(
    blink.mojom.SharedStorageDocumentService_CreateWorklet_ParamsSpec, 'blink.mojom.SharedStorageDocumentService_CreateWorklet_Params', [
      mojo.internal.StructField('script_source_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data_origin', 8, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data_origin_type', 16, 0, blink.mojom.SharedStorageDataOriginTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('credentials_mode', 24, 0, network.mojom.CredentialsModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('creation_method', 32, 0, blink.mojom.SharedStorageWorkletCreationMethodSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin_trial_features', 40, 0, mojo.internal.Array(blink.mojom.OriginTrialFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('worklet_host', 48, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageDocumentService_CreateWorklet_ResponseParamsSpec, 'blink.mojom.SharedStorageDocumentService_CreateWorklet_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageDocumentService_SharedStorageGet_ParamsSpec, 'blink.mojom.SharedStorageDocumentService_SharedStorageGet_Params', [
      mojo.internal.StructField('key', 0, 0, network.mojom.SharedStorageKeyArgumentSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageDocumentService_SharedStorageGet_ResponseParamsSpec, 'blink.mojom.SharedStorageDocumentService_SharedStorageGet_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.SharedStorageGetStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ParamsSpec, 'blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_Params', [
      mojo.internal.StructField('method_with_options', 0, 0, network.mojom.SharedStorageModifierMethodWithOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ResponseParamsSpec, 'blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ParamsSpec, 'blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_Params', [
      mojo.internal.StructField('methods_with_options', 0, 0, network.mojom.SharedStorageBatchUpdateMethodsArgumentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('with_lock', 8, 0, network.mojom.LockNameSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ResponseParamsSpec, 'blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SharedStorageDocumentServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SharedStorageDocumentServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedStorageDocumentService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SharedStorageDocumentServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.SharedStorageDocumentServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SharedStorageDocumentServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWorklet(script_source_url, data_origin, data_origin_type, credentials_mode, creation_method, origin_trial_features, worklet_host) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SharedStorageDocumentService_CreateWorklet_ParamsSpec,
      blink.mojom.SharedStorageDocumentService_CreateWorklet_ResponseParamsSpec,
      [script_source_url, data_origin, data_origin_type, credentials_mode, creation_method, origin_trial_features, worklet_host],
      false);
  }

  sharedStorageGet(key) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SharedStorageDocumentService_SharedStorageGet_ParamsSpec,
      blink.mojom.SharedStorageDocumentService_SharedStorageGet_ResponseParamsSpec,
      [key],
      false);
  }

  sharedStorageUpdate(method_with_options) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ParamsSpec,
      blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ResponseParamsSpec,
      [method_with_options],
      false);
  }

  sharedStorageBatchUpdate(methods_with_options, with_lock) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ParamsSpec,
      blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ResponseParamsSpec,
      [methods_with_options, with_lock],
      false);
  }

};

blink.mojom.SharedStorageDocumentService.getRemote = function() {
  let remote = new blink.mojom.SharedStorageDocumentServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedStorageDocumentService',
    'context');
  return remote.$;
};

blink.mojom.SharedStorageDocumentServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.SharedStorageDocumentService_CreateWorklet_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createWorklet(params.script_source_url, params.data_origin, params.data_origin_type, params.credentials_mode, params.creation_method, params.origin_trial_features, params.worklet_host);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageDocumentService_CreateWorklet_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = blink.mojom.SharedStorageDocumentService_SharedStorageGet_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sharedStorageGet(params.key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageDocumentService_SharedStorageGet_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sharedStorageUpdate(params.method_with_options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sharedStorageBatchUpdate(params.methods_with_options, params.with_lock);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

blink.mojom.SharedStorageDocumentServiceReceiver = blink.mojom.SharedStorageDocumentServiceReceiver;

blink.mojom.SharedStorageDocumentServicePtr = blink.mojom.SharedStorageDocumentServiceRemote;
blink.mojom.SharedStorageDocumentServiceRequest = blink.mojom.SharedStorageDocumentServicePendingReceiver;

