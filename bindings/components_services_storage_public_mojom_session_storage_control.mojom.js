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


// Enum: SessionStorageCloneType
storage.mojom.mojom.SessionStorageCloneType = {
  kImmediate: 0,
  kWaitForCloneOnNamespace: 1,
};
storage.mojom.mojom.SessionStorageCloneTypeSpec = { $: mojo.internal.Enum() };

// Struct: SessionStorageUsageInfo
storage.mojom.mojom.SessionStorageUsageInfoSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageUsageInfo',
      packedSize: 24,
      fields: [
        { name: 'storage_key', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false, minVersion: 0 },
        { name: 'namespace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: SessionStorageControl
storage.mojom.mojom.SessionStorageControl = {};

storage.mojom.mojom.SessionStorageControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.mojom.SessionStorageControlRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.SessionStorageControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.mojom.SessionStorageControlPendingReceiver,
      handle);
    this.$ = new storage.mojom.mojom.SessionStorageControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.mojom.SessionStorageControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindNamespace(namespace_id, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.mojom.SessionStorageControl_BindNamespace_ParamsSpec,
      null,
      [namespace_id, receiver]);
  }

  bindStorageArea(storage_key, namespace_id, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.mojom.SessionStorageControl_BindStorageArea_ParamsSpec,
      null,
      [storage_key, namespace_id, receiver]);
  }

  getUsage() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.mojom.SessionStorageControl_GetUsage_ParamsSpec,
      storage.mojom.mojom.SessionStorageControl_GetUsage_ResponseParamsSpec,
      []);
  }

  deleteStorage(storage_key, namespace_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.mojom.SessionStorageControl_DeleteStorage_ParamsSpec,
      null,
      [storage_key, namespace_id]);
  }

  cleanUpStorage() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec,
      null,
      []);
  }

  scavengeUnusedNamespaces() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec,
      null,
      []);
  }

  flush() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      storage.mojom.mojom.SessionStorageControl_Flush_ParamsSpec,
      null,
      []);
  }

  purgeMemory() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      storage.mojom.mojom.SessionStorageControl_PurgeMemory_ParamsSpec,
      null,
      []);
  }

  createNamespace(namespace_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      storage.mojom.mojom.SessionStorageControl_CreateNamespace_ParamsSpec,
      null,
      [namespace_id]);
  }

  cloneNamespace(namespace_id_to_clone, clone_namespace_id, clone_type) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      storage.mojom.mojom.SessionStorageControl_CloneNamespace_ParamsSpec,
      null,
      [namespace_id_to_clone, clone_namespace_id, clone_type]);
  }

  deleteNamespace(namespace_id, should_persist) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      storage.mojom.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec,
      null,
      [namespace_id, should_persist]);
  }

};

storage.mojom.mojom.SessionStorageControl.getRemote = function() {
  let remote = new storage.mojom.mojom.SessionStorageControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.SessionStorageControl',
    'context');
  return remote.$;
};

// ParamsSpec for BindNamespace
storage.mojom.mojom.SessionStorageControl_BindNamespace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.BindNamespace_Params',
      packedSize: 24,
      fields: [
        { name: 'namespace_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for BindStorageArea
storage.mojom.mojom.SessionStorageControl_BindStorageArea_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.BindStorageArea_Params',
      packedSize: 32,
      fields: [
        { name: 'storage_key', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false, minVersion: 0 },
        { name: 'namespace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for GetUsage
storage.mojom.mojom.SessionStorageControl_GetUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.GetUsage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

storage.mojom.mojom.SessionStorageControl_GetUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.GetUsage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(storage.mojom.SessionStorageUsageInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteStorage
storage.mojom.mojom.SessionStorageControl_DeleteStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.DeleteStorage_Params',
      packedSize: 24,
      fields: [
        { name: 'storage_key', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false, minVersion: 0 },
        { name: 'namespace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CleanUpStorage
storage.mojom.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.CleanUpStorage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ScavengeUnusedNamespaces
storage.mojom.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.ScavengeUnusedNamespaces_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Flush
storage.mojom.mojom.SessionStorageControl_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.Flush_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for PurgeMemory
storage.mojom.mojom.SessionStorageControl_PurgeMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.PurgeMemory_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CreateNamespace
storage.mojom.mojom.SessionStorageControl_CreateNamespace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.CreateNamespace_Params',
      packedSize: 16,
      fields: [
        { name: 'namespace_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CloneNamespace
storage.mojom.mojom.SessionStorageControl_CloneNamespace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.CloneNamespace_Params',
      packedSize: 32,
      fields: [
        { name: 'namespace_id_to_clone', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'clone_namespace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'clone_type', packedOffset: 16, packedBitOffset: 0, type: storage.mojom.SessionStorageCloneTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for DeleteNamespace
storage.mojom.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.SessionStorageControl.DeleteNamespace_Params',
      packedSize: 24,
      fields: [
        { name: 'namespace_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'should_persist', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
storage.mojom.mojom.SessionStorageControlPtr = storage.mojom.mojom.SessionStorageControlRemote;
storage.mojom.mojom.SessionStorageControlRequest = storage.mojom.mojom.SessionStorageControlPendingReceiver;

