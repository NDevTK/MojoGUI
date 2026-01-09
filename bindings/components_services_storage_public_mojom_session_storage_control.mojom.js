// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/session_storage_control.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Enum: SessionStorageCloneType
storage.mojom.SessionStorageCloneType = {
  kImmediate: 0,
  kWaitForCloneOnNamespace: 1,
};

// Struct: SessionStorageUsageInfo
storage.mojom.SessionStorageUsageInfoSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageUsageInfo',
      packedSize: 24,
      fields: [
        { name: 'storage_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'namespace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: SessionStorageControl
storage.mojom.SessionStorageControl = {};

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
      null,
      [storage_key, namespace_id]);
  }

  cleanUpStorage() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec,
      null,
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

// ParamsSpec for BindNamespace
storage.mojom.SessionStorageControl_BindNamespace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.BindNamespace_Params',
      packedSize: 24,
      fields: [
        { name: 'namespace_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindStorageArea
storage.mojom.SessionStorageControl_BindStorageArea_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.BindStorageArea_Params',
      packedSize: 32,
      fields: [
        { name: 'storage_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'namespace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetUsage
storage.mojom.SessionStorageControl_GetUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.GetUsage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.SessionStorageControl_GetUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.GetUsage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteStorage
storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.DeleteStorage_Params',
      packedSize: 24,
      fields: [
        { name: 'storage_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'namespace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CleanUpStorage
storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.CleanUpStorage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ScavengeUnusedNamespaces
storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.ScavengeUnusedNamespaces_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Flush
storage.mojom.SessionStorageControl_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.Flush_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PurgeMemory
storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.PurgeMemory_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateNamespace
storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.CreateNamespace_Params',
      packedSize: 16,
      fields: [
        { name: 'namespace_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloneNamespace
storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.CloneNamespace_Params',
      packedSize: 32,
      fields: [
        { name: 'namespace_id_to_clone', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'clone_namespace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'clone_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteNamespace
storage.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.DeleteNamespace_Params',
      packedSize: 24,
      fields: [
        { name: 'namespace_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'should_persist', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
storage.mojom.SessionStorageControlPtr = storage.mojom.SessionStorageControlRemote;
storage.mojom.SessionStorageControlRequest = storage.mojom.SessionStorageControlPendingReceiver;

