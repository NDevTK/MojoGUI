// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/storage_access/storage_access_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: StorageAccessHandle
blink.mojom.StorageAccessHandle = {};

blink.mojom.StorageAccessHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.StorageAccessHandleRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.StorageAccessHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.StorageAccessHandlePendingReceiver,
      handle);
    this.$ = new blink.mojom.StorageAccessHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.StorageAccessHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindIndexedDB(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.StorageAccessHandle_BindIndexedDB_ParamsSpec,
      null,
      [receiver]);
  }

  bindLocks(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.StorageAccessHandle_BindLocks_ParamsSpec,
      null,
      [receiver]);
  }

  bindCaches(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.StorageAccessHandle_BindCaches_ParamsSpec,
      null,
      [receiver]);
  }

  getDirectory() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.StorageAccessHandle_GetDirectory_ParamsSpec,
      blink.mojom.StorageAccessHandle_GetDirectory_ResponseParamsSpec,
      []);
  }

  estimate() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.StorageAccessHandle_Estimate_ParamsSpec,
      blink.mojom.StorageAccessHandle_Estimate_ResponseParamsSpec,
      []);
  }

  bindBlobStorage(receiver) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.StorageAccessHandle_BindBlobStorage_ParamsSpec,
      null,
      [receiver]);
  }

  bindBroadcastChannel(receiver) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.StorageAccessHandle_BindBroadcastChannel_ParamsSpec,
      null,
      [receiver]);
  }

  bindSharedWorker(receiver) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.StorageAccessHandle_BindSharedWorker_ParamsSpec,
      null,
      [receiver]);
  }

};

blink.mojom.StorageAccessHandle.getRemote = function() {
  let remote = new blink.mojom.StorageAccessHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.StorageAccessHandle',
    'context');
  return remote.$;
};

// ParamsSpec for BindIndexedDB
blink.mojom.StorageAccessHandle_BindIndexedDB_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageAccessHandle.BindIndexedDB_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindLocks
blink.mojom.StorageAccessHandle_BindLocks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageAccessHandle.BindLocks_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindCaches
blink.mojom.StorageAccessHandle_BindCaches_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageAccessHandle.BindCaches_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDirectory
blink.mojom.StorageAccessHandle_GetDirectory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageAccessHandle.GetDirectory_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.StorageAccessHandle_GetDirectory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageAccessHandle.GetDirectory_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FileSystemAccessErrorSpec, nullable: false },
        { name: 'directory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Estimate
blink.mojom.StorageAccessHandle_Estimate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageAccessHandle.Estimate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.StorageAccessHandle_Estimate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageAccessHandle.Estimate_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'current_usage', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ByteCountSpec, nullable: false },
        { name: 'current_quota', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ByteCountSpec, nullable: false },
        { name: 'success', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindBlobStorage
blink.mojom.StorageAccessHandle_BindBlobStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageAccessHandle.BindBlobStorage_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindBroadcastChannel
blink.mojom.StorageAccessHandle_BindBroadcastChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageAccessHandle.BindBroadcastChannel_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindSharedWorker
blink.mojom.StorageAccessHandle_BindSharedWorker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageAccessHandle.BindSharedWorker_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.StorageAccessHandlePtr = blink.mojom.StorageAccessHandleRemote;
blink.mojom.StorageAccessHandleRequest = blink.mojom.StorageAccessHandlePendingReceiver;

