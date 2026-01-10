// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/local_storage_control.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Interface: LocalStorageControl
storage.mojom.LocalStorageControl = {};

storage.mojom.LocalStorageControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.LocalStorageControlRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.LocalStorageControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.LocalStorageControlPendingReceiver,
      handle);
    this.$ = new storage.mojom.LocalStorageControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.LocalStorageControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindStorageArea(storage_key, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.LocalStorageControl_BindStorageArea_ParamsSpec,
      null,
      [storage_key, receiver]);
  }

  getUsage() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.LocalStorageControl_GetUsage_ParamsSpec,
      storage.mojom.LocalStorageControl_GetUsage_ResponseParamsSpec,
      []);
  }

  deleteStorage(storage_key) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.LocalStorageControl_DeleteStorage_ParamsSpec,
      null,
      [storage_key]);
  }

  cleanUpStorage() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.LocalStorageControl_CleanUpStorage_ParamsSpec,
      null,
      []);
  }

  flush() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.LocalStorageControl_Flush_ParamsSpec,
      null,
      []);
  }

  purgeMemory() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.LocalStorageControl_PurgeMemory_ParamsSpec,
      null,
      []);
  }

  applyPolicyUpdates(policy_updates) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      storage.mojom.LocalStorageControl_ApplyPolicyUpdates_ParamsSpec,
      null,
      [policy_updates]);
  }

  forceKeepSessionState() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      storage.mojom.LocalStorageControl_ForceKeepSessionState_ParamsSpec,
      null,
      []);
  }

};

storage.mojom.LocalStorageControl.getRemote = function() {
  let remote = new storage.mojom.LocalStorageControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.LocalStorageControl',
    'context');
  return remote.$;
};

// ParamsSpec for BindStorageArea
storage.mojom.LocalStorageControl_BindStorageArea_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.LocalStorageControl.BindStorageArea_Params',
      packedSize: 24,
      fields: [
        { name: 'storage_key', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetUsage
storage.mojom.LocalStorageControl_GetUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.LocalStorageControl.GetUsage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

storage.mojom.LocalStorageControl_GetUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.LocalStorageControl.GetUsage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(storage.mojom.StorageUsageInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteStorage
storage.mojom.LocalStorageControl_DeleteStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.LocalStorageControl.DeleteStorage_Params',
      packedSize: 16,
      fields: [
        { name: 'storage_key', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CleanUpStorage
storage.mojom.LocalStorageControl_CleanUpStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.LocalStorageControl.CleanUpStorage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Flush
storage.mojom.LocalStorageControl_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.LocalStorageControl.Flush_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for PurgeMemory
storage.mojom.LocalStorageControl_PurgeMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.LocalStorageControl.PurgeMemory_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ApplyPolicyUpdates
storage.mojom.LocalStorageControl_ApplyPolicyUpdates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.LocalStorageControl.ApplyPolicyUpdates_Params',
      packedSize: 16,
      fields: [
        { name: 'policy_updates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(storage.mojom.StoragePolicyUpdateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ForceKeepSessionState
storage.mojom.LocalStorageControl_ForceKeepSessionState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.LocalStorageControl.ForceKeepSessionState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
storage.mojom.LocalStorageControlPtr = storage.mojom.LocalStorageControlRemote;
storage.mojom.LocalStorageControlRequest = storage.mojom.LocalStorageControlPendingReceiver;

