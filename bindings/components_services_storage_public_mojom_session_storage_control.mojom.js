// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/session_storage_control.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
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
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('namespace_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 16, 0, mojo.internal.InterfaceRequest(blink.mojom.StorageAreaRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_GetUsage_ParamsSpec, 'storage.mojom.SessionStorageControl_GetUsage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_GetUsage_ResponseParamsSpec, 'storage.mojom.SessionStorageControl_GetUsage_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, mojo.internal.Array(storage.mojom.SessionStorageUsageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec, 'storage.mojom.SessionStorageControl_DeleteStorage_Params', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('namespace_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_DeleteStorage_ResponseParamsSpec, 'storage.mojom.SessionStorageControl_DeleteStorage_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec, 'storage.mojom.SessionStorageControl_CleanUpStorage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_CleanUpStorage_ResponseParamsSpec, 'storage.mojom.SessionStorageControl_CleanUpStorage_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec, 'storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_Flush_ParamsSpec, 'storage.mojom.SessionStorageControl_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec, 'storage.mojom.SessionStorageControl_PurgeMemory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec, 'storage.mojom.SessionStorageControl_CreateNamespace_Params', [
      mojo.internal.StructField('namespace_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec, 'storage.mojom.SessionStorageControl_CloneNamespace_Params', [
      mojo.internal.StructField('namespace_id_to_clone', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('clone_namespace_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('clone_type', 16, 0, storage.mojom.SessionStorageCloneTypeSpec.$, null, false, 0, undefined),
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
      [namespace_id, receiver],
      false);
  }

  bindStorageArea(storage_key, namespace_id, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.SessionStorageControl_BindStorageArea_ParamsSpec,
      null,
      [storage_key, namespace_id, receiver],
      false);
  }

  getUsage() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.SessionStorageControl_GetUsage_ParamsSpec,
      storage.mojom.SessionStorageControl_GetUsage_ResponseParamsSpec,
      [],
      false);
  }

  deleteStorage(storage_key, namespace_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec,
      storage.mojom.SessionStorageControl_DeleteStorage_ResponseParamsSpec,
      [storage_key, namespace_id],
      false);
  }

  cleanUpStorage() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec,
      storage.mojom.SessionStorageControl_CleanUpStorage_ResponseParamsSpec,
      [],
      false);
  }

  scavengeUnusedNamespaces() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec,
      null,
      [],
      false);
  }

  flush() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      storage.mojom.SessionStorageControl_Flush_ParamsSpec,
      null,
      [],
      false);
  }

  purgeMemory() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec,
      null,
      [],
      false);
  }

  createNamespace(namespace_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec,
      null,
      [namespace_id],
      false);
  }

  cloneNamespace(namespace_id_to_clone, clone_namespace_id, clone_type) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec,
      null,
      [namespace_id_to_clone, clone_namespace_id, clone_type],
      false);
  }

  deleteNamespace(namespace_id, should_persist) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      storage.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec,
      null,
      [namespace_id, should_persist],
      false);
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

storage.mojom.SessionStorageControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = storage.mojom.SessionStorageControl_BindNamespace_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindNamespace(params.namespace_id, params.receiver);
          break;
        }
        case 1: {
          const params = storage.mojom.SessionStorageControl_BindStorageArea_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindStorageArea(params.storage_key, params.namespace_id, params.receiver);
          break;
        }
        case 2: {
          const params = storage.mojom.SessionStorageControl_GetUsage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getUsage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.SessionStorageControl_GetUsage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteStorage(params.storage_key, params.namespace_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.SessionStorageControl_DeleteStorage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cleanUpStorage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.SessionStorageControl_CleanUpStorage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec.$.decode(message.payload);
          const result = this.impl.scavengeUnusedNamespaces();
          break;
        }
        case 6: {
          const params = storage.mojom.SessionStorageControl_Flush_ParamsSpec.$.decode(message.payload);
          const result = this.impl.flush();
          break;
        }
        case 7: {
          const params = storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.purgeMemory();
          break;
        }
        case 8: {
          const params = storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createNamespace(params.namespace_id);
          break;
        }
        case 9: {
          const params = storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cloneNamespace(params.namespace_id_to_clone, params.clone_namespace_id, params.clone_type);
          break;
        }
        case 10: {
          const params = storage.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteNamespace(params.namespace_id, params.should_persist);
          break;
        }
      }
    });
  }
};

storage.mojom.SessionStorageControlReceiver = storage.mojom.SessionStorageControlReceiver;

storage.mojom.SessionStorageControlPtr = storage.mojom.SessionStorageControlRemote;
storage.mojom.SessionStorageControlRequest = storage.mojom.SessionStorageControlPendingReceiver;

