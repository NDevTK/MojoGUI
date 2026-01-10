// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/shared_storage/shared_storage.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};
var url = url || {};


// Enum: SharedStorageGetStatus
blink.mojom.mojom.SharedStorageGetStatus = {
  kSuccess: 0,
  kNotFound: 1,
  kError: 2,
};
blink.mojom.mojom.SharedStorageGetStatusSpec = { $: mojo.internal.Enum() };

// Enum: SharedStorageWorkletCreationMethod
blink.mojom.mojom.SharedStorageWorkletCreationMethod = {
  kAddModule: 0,
  kCreateWorklet: 1,
};
blink.mojom.mojom.SharedStorageWorkletCreationMethodSpec = { $: mojo.internal.Enum() };

// Enum: SharedStorageDataOriginType
blink.mojom.mojom.SharedStorageDataOriginType = {
  kContextOrigin: 0,
  kScriptOrigin: 1,
  kCustomOrigin: 2,
};
blink.mojom.mojom.SharedStorageDataOriginTypeSpec = { $: mojo.internal.Enum() };

// Struct: SharedStorageUrlWithMetadata
blink.mojom.mojom.SharedStorageUrlWithMetadataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageUrlWithMetadata',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'reporting_metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PrivateAggregationConfig
blink.mojom.mojom.PrivateAggregationConfigSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PrivateAggregationConfig',
      packedSize: 32,
      fields: [
        { name: 'aggregation_coordinator_origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'context_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'filtering_id_max_bytes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_contributions_$flag', packedOffset: 22, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'max_contributions_$value', originalFieldName: 'max_contributions' } },
        { name: 'max_contributions_$value', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'max_contributions_$flag', originalFieldName: 'max_contributions' } },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: SharedStorageWorkletHost
blink.mojom.mojom.SharedStorageWorkletHost = {};

blink.mojom.mojom.SharedStorageWorkletHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.SharedStorageWorkletHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedStorageWorkletHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.SharedStorageWorkletHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.SharedStorageWorkletHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.SharedStorageWorkletHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  selectURL(name, urls_with_metadata, serialized_data, keep_alive_after_operation, private_aggregation_config, resolve_to_config, saved_query_name, start_time) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.SharedStorageWorkletHost_SelectURL_ParamsSpec,
      blink.mojom.mojom.SharedStorageWorkletHost_SelectURL_ResponseParamsSpec,
      [name, urls_with_metadata, serialized_data, keep_alive_after_operation, private_aggregation_config, resolve_to_config, saved_query_name, start_time]);
  }

  run(name, serialized_data, keep_alive_after_operation, private_aggregation_config, start_time) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.SharedStorageWorkletHost_Run_ParamsSpec,
      blink.mojom.mojom.SharedStorageWorkletHost_Run_ResponseParamsSpec,
      [name, serialized_data, keep_alive_after_operation, private_aggregation_config, start_time]);
  }

};

blink.mojom.mojom.SharedStorageWorkletHost.getRemote = function() {
  let remote = new blink.mojom.mojom.SharedStorageWorkletHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedStorageWorkletHost',
    'context');
  return remote.$;
};

// ParamsSpec for SelectURL
blink.mojom.mojom.SharedStorageWorkletHost_SelectURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletHost.SelectURL_Params',
      packedSize: 64,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'urls_with_metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SharedStorageUrlWithMetadataSpec, false), nullable: false, minVersion: 0 },
        { name: 'serialized_data', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.CloneableMessageSpec, nullable: false, minVersion: 0 },
        { name: 'keep_alive_after_operation', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'private_aggregation_config', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.PrivateAggregationConfigSpec, nullable: false, minVersion: 0 },
        { name: 'resolve_to_config', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'saved_query_name', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'start_time', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

blink.mojom.mojom.SharedStorageWorkletHost_SelectURL_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletHost.SelectURL_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'config', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FencedFrameConfigSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for Run
blink.mojom.mojom.SharedStorageWorkletHost_Run_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletHost.Run_Params',
      packedSize: 48,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'serialized_data', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CloneableMessageSpec, nullable: false, minVersion: 0 },
        { name: 'keep_alive_after_operation', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'private_aggregation_config', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.PrivateAggregationConfigSpec, nullable: false, minVersion: 0 },
        { name: 'start_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

blink.mojom.mojom.SharedStorageWorkletHost_Run_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletHost.Run_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.SharedStorageWorkletHostPtr = blink.mojom.mojom.SharedStorageWorkletHostRemote;
blink.mojom.mojom.SharedStorageWorkletHostRequest = blink.mojom.mojom.SharedStorageWorkletHostPendingReceiver;


// Interface: SharedStorageDocumentService
blink.mojom.mojom.SharedStorageDocumentService = {};

blink.mojom.mojom.SharedStorageDocumentServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.SharedStorageDocumentServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedStorageDocumentService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.SharedStorageDocumentServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.SharedStorageDocumentServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.SharedStorageDocumentServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWorklet(script_source_url, data_origin, data_origin_type, credentials_mode, creation_method, origin_trial_features, worklet_host) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.SharedStorageDocumentService_CreateWorklet_ParamsSpec,
      blink.mojom.mojom.SharedStorageDocumentService_CreateWorklet_ResponseParamsSpec,
      [script_source_url, data_origin, data_origin_type, credentials_mode, creation_method, origin_trial_features, worklet_host]);
  }

  sharedStorageGet(key) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.SharedStorageDocumentService_SharedStorageGet_ParamsSpec,
      blink.mojom.mojom.SharedStorageDocumentService_SharedStorageGet_ResponseParamsSpec,
      [key]);
  }

  sharedStorageUpdate(method_with_options) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.SharedStorageDocumentService_SharedStorageUpdate_ParamsSpec,
      blink.mojom.mojom.SharedStorageDocumentService_SharedStorageUpdate_ResponseParamsSpec,
      [method_with_options]);
  }

  sharedStorageBatchUpdate(methods_with_options, with_lock) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ParamsSpec,
      blink.mojom.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ResponseParamsSpec,
      [methods_with_options, with_lock]);
  }

};

blink.mojom.mojom.SharedStorageDocumentService.getRemote = function() {
  let remote = new blink.mojom.mojom.SharedStorageDocumentServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedStorageDocumentService',
    'context');
  return remote.$;
};

// ParamsSpec for CreateWorklet
blink.mojom.mojom.SharedStorageDocumentService_CreateWorklet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageDocumentService.CreateWorklet_Params',
      packedSize: 56,
      fields: [
        { name: 'script_source_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'data_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'data_origin_type', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.SharedStorageDataOriginTypeSpec, nullable: false, minVersion: 0 },
        { name: 'credentials_mode', packedOffset: 36, packedBitOffset: 0, type: network.mojom.CredentialsModeSpec, nullable: false, minVersion: 0 },
        { name: 'creation_method', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.SharedStorageWorkletCreationMethodSpec, nullable: false, minVersion: 0 },
        { name: 'origin_trial_features', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.OriginTrialFeatureSpec, false), nullable: false, minVersion: 0 },
        { name: 'worklet_host', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(blink.mojom.SharedStorageWorkletHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

blink.mojom.mojom.SharedStorageDocumentService_CreateWorklet_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageDocumentService.CreateWorklet_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SharedStorageGet
blink.mojom.mojom.SharedStorageDocumentService_SharedStorageGet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageDocumentService.SharedStorageGet_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SharedStorageKeyArgumentSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.SharedStorageDocumentService_SharedStorageGet_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageDocumentService.SharedStorageGet_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.SharedStorageGetStatusSpec, nullable: false, minVersion: 0 },
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for SharedStorageUpdate
blink.mojom.mojom.SharedStorageDocumentService_SharedStorageUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageDocumentService.SharedStorageUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'method_with_options', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SharedStorageModifierMethodWithOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.SharedStorageDocumentService_SharedStorageUpdate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageDocumentService.SharedStorageUpdate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SharedStorageBatchUpdate
blink.mojom.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageDocumentService.SharedStorageBatchUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'methods_with_options', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SharedStorageBatchUpdateMethodsArgumentSpec, nullable: false, minVersion: 0 },
        { name: 'with_lock', packedOffset: 8, packedBitOffset: 0, type: network.mojom.LockNameSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageDocumentService.SharedStorageBatchUpdate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.SharedStorageDocumentServicePtr = blink.mojom.mojom.SharedStorageDocumentServiceRemote;
blink.mojom.mojom.SharedStorageDocumentServiceRequest = blink.mojom.mojom.SharedStorageDocumentServicePendingReceiver;

