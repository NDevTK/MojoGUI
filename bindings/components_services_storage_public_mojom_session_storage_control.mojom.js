// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/session_storage_control.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};

storage.mojom.SessionStorageCloneTypeSpec = { $: mojo.internal.Enum() };
storage.mojom.SessionStorageUsageInfoSpec = { $: {} };
storage.mojom.SessionStorageControl = {};
storage.mojom.SessionStorageControl.$interfaceName = 'storage.mojom.SessionStorageControl';
storage.mojom.SessionStorageControl_BindNamespace_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_BindStorageArea_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_GetUsage_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_GetUsage_ResponseParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_DeleteStorage_ResponseParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_CleanUpStorage_ResponseParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_Flush_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec = { $: {} };

// Enum: SessionStorageCloneType
storage.mojom.SessionStorageCloneType = {
  kImmediate: 0,
  kWaitForCloneOnNamespace: 1,
};

// Struct: SessionStorageUsageInfo
mojo.internal.Struct(
    storage.mojom.SessionStorageUsageInfoSpec, 'storage.mojom.SessionStorageUsageInfo', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec, null, false, 0, undefined),
      mojo.internal.StructField('namespace_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SessionStorageControl
mojo.internal.Struct(
    storage.mojom.SessionStorageControl_BindNamespace_ParamsSpec, 'storage.mojom.SessionStorageControl_BindNamespace_Params', [
      mojo.internal.StructField('namespace_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.SessionStorageNamespaceRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_BindStorageArea_ParamsSpec, 'storage.mojom.SessionStorageControl_BindStorageArea_Params', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec, null, false, 0, undefined),
      mojo.internal.StructField('namespace_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 16, 0, mojo.internal.InterfaceRequest(blink.mojom.StorageAreaRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_GetUsage_ParamsSpec, 'storage.mojom.SessionStorageControl_GetUsage_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_GetUsage_ResponseParamsSpec, 'storage.mojom.SessionStorageControl_GetUsage_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, mojo.internal.Array(storage.mojom.SessionStorageUsageInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec, 'storage.mojom.SessionStorageControl_DeleteStorage_Params', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec, null, false, 0, undefined),
      mojo.internal.StructField('namespace_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_DeleteStorage_ResponseParamsSpec, 'storage.mojom.SessionStorageControl_DeleteStorage_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec, 'storage.mojom.SessionStorageControl_CleanUpStorage_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_CleanUpStorage_ResponseParamsSpec, 'storage.mojom.SessionStorageControl_CleanUpStorage_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec, 'storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_Flush_ParamsSpec, 'storage.mojom.SessionStorageControl_Flush_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec, 'storage.mojom.SessionStorageControl_PurgeMemory_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec, 'storage.mojom.SessionStorageControl_CreateNamespace_Params', [
      mojo.internal.StructField('namespace_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec, 'storage.mojom.SessionStorageControl_CloneNamespace_Params', [
      mojo.internal.StructField('namespace_id_to_clone', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('clone_namespace_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('clone_type', 16, 0, storage.mojom.SessionStorageCloneTypeSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec, 'storage.mojom.SessionStorageControl_DeleteNamespace_Params', [
      mojo.internal.StructField('namespace_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('should_persist', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

storage.mojom.SessionStorageControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.SessionStorageControlRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.SessionStorageControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.SessionStorageControlPendingReceiver,
      handle);
    this.$ = new storage.mojom.SessionStorageControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.SessionStorageControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindNamespace(namespace_id, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.SessionStorageControl_BindNamespace_ParamsSpec,
      null,
      [namespace_id, receiver]);
  }

  bindStorageArea(storage_key, namespace_id, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.SessionStorageControl_BindStorageArea_ParamsSpec,
      null,
      [storage_key, namespace_id, receiver]);
  }

  getUsage() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.SessionStorageControl_GetUsage_ParamsSpec,
      storage.mojom.SessionStorageControl_GetUsage_ResponseParamsSpec,
      []);
  }

  deleteStorage(storage_key, namespace_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec,
      storage.mojom.SessionStorageControl_DeleteStorage_ResponseParamsSpec,
      [storage_key, namespace_id]);
  }

  cleanUpStorage() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec,
      storage.mojom.SessionStorageControl_CleanUpStorage_ResponseParamsSpec,
      []);
  }

  scavengeUnusedNamespaces() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec,
      null,
      []);
  }

  flush() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      storage.mojom.SessionStorageControl_Flush_ParamsSpec,
      null,
      []);
  }

  purgeMemory() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec,
      null,
      []);
  }

  createNamespace(namespace_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec,
      null,
      [namespace_id]);
  }

  cloneNamespace(namespace_id_to_clone, clone_namespace_id, clone_type) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec,
      null,
      [namespace_id_to_clone, clone_namespace_id, clone_type]);
  }

  deleteNamespace(namespace_id, should_persist) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      storage.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec,
      null,
      [namespace_id, should_persist]);
  }

};

storage.mojom.SessionStorageControl.getRemote = function() {
  let remote = new storage.mojom.SessionStorageControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.SessionStorageControl',
    'context');
  return remote.$;
};

storage.mojom.SessionStorageControlPtr = storage.mojom.SessionStorageControlRemote;
storage.mojom.SessionStorageControlRequest = storage.mojom.SessionStorageControlPendingReceiver;

