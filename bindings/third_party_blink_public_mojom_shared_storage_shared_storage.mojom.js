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

// Interface: SharedStorageWorkletHost
blink.mojom.SharedStorageWorkletHost = {};

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
      blink.mojom.SharedStorageWorkletHost_SelectURL_ResponseParamsSpec,
      [name, urls_with_metadata, serialized_data, keep_alive_after_operation, private_aggregation_config, resolve_to_config, saved_query_name, start_time],
      undefined,
      undefined
    );
  }

  run(name, serialized_data, keep_alive_after_operation, private_aggregation_config, start_time) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SharedStorageWorkletHost_Run_ParamsSpec,
      blink.mojom.SharedStorageWorkletHost_Run_ResponseParamsSpec,
      blink.mojom.SharedStorageWorkletHost_Run_ResponseParamsSpec,
      [name, serialized_data, keep_alive_after_operation, private_aggregation_config, start_time],
      undefined,
      undefined
    );
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

// ParamsSpec for SelectURL
blink.mojom.SharedStorageWorkletHost_SelectURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletHost.SelectURL_Params',
      packedSize: 72,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'urls_with_metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'serialized_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'keep_alive_after_operation', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'private_aggregation_config', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'resolve_to_config', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'saved_query_name', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'start_time', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

blink.mojom.SharedStorageWorkletHost_SelectURL_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletHost.SelectURL_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'config', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for Run
blink.mojom.SharedStorageWorkletHost_Run_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletHost.Run_Params',
      packedSize: 48,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'serialized_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'keep_alive_after_operation', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'private_aggregation_config', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'start_time', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

blink.mojom.SharedStorageWorkletHost_Run_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletHost.Run_ResponseParams',
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
blink.mojom.SharedStorageWorkletHostPtr = blink.mojom.SharedStorageWorkletHostRemote;
blink.mojom.SharedStorageWorkletHostRequest = blink.mojom.SharedStorageWorkletHostPendingReceiver;


// Interface: SharedStorageDocumentService
blink.mojom.SharedStorageDocumentService = {};

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
      blink.mojom.SharedStorageDocumentService_CreateWorklet_ResponseParamsSpec,
      [script_source_url, data_origin, data_origin_type, credentials_mode, creation_method, origin_trial_features, worklet_host],
      undefined,
      undefined
    );
  }

  sharedStorageGet(key) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SharedStorageDocumentService_SharedStorageGet_ParamsSpec,
      blink.mojom.SharedStorageDocumentService_SharedStorageGet_ResponseParamsSpec,
      blink.mojom.SharedStorageDocumentService_SharedStorageGet_ResponseParamsSpec,
      [key],
      undefined,
      undefined
    );
  }

  sharedStorageUpdate(method_with_options) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ParamsSpec,
      blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ResponseParamsSpec,
      blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ResponseParamsSpec,
      [method_with_options],
      undefined,
      undefined
    );
  }

  sharedStorageBatchUpdate(methods_with_options, with_lock) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ParamsSpec,
      blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ResponseParamsSpec,
      blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ResponseParamsSpec,
      [methods_with_options, with_lock],
      undefined,
      undefined
    );
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

// ParamsSpec for CreateWorklet
blink.mojom.SharedStorageDocumentService_CreateWorklet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageDocumentService.CreateWorklet_Params',
      packedSize: 64,
      fields: [
        { name: 'script_source_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'data_origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'data_origin_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'credentials_mode', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'creation_method', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'origin_trial_features', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'worklet_host', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

blink.mojom.SharedStorageDocumentService_CreateWorklet_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageDocumentService.CreateWorklet_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SharedStorageGet
blink.mojom.SharedStorageDocumentService_SharedStorageGet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageDocumentService.SharedStorageGet_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.SharedStorageDocumentService_SharedStorageGet_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageDocumentService.SharedStorageGet_ResponseParams',
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

// ParamsSpec for SharedStorageUpdate
blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageDocumentService.SharedStorageUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'method_with_options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageDocumentService.SharedStorageUpdate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SharedStorageBatchUpdate
blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageDocumentService.SharedStorageBatchUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'methods_with_options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'with_lock', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageDocumentService.SharedStorageBatchUpdate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.SharedStorageDocumentServicePtr = blink.mojom.SharedStorageDocumentServiceRemote;
blink.mojom.SharedStorageDocumentServiceRequest = blink.mojom.SharedStorageDocumentServicePendingReceiver;

