// Auto-generated MojoJS binding
// Source: chromium_src/components/discardable_memory/public/mojom/discardable_shared_memory_manager.mojom
// Module: discardable_memory.mojom

'use strict';

// Module namespace
var discardable_memory = discardable_memory || {};
discardable_memory.mojom = discardable_memory.mojom || {};


// Interface: DiscardableSharedMemoryManager
discardable_memory.mojom.DiscardableSharedMemoryManager = {};

discardable_memory.mojom.DiscardableSharedMemoryManager_AllocateLockedDiscardableSharedMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discardable_memory.mojom.DiscardableSharedMemoryManager_AllocateLockedDiscardableSharedMemory_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

discardable_memory.mojom.DiscardableSharedMemoryManager_DeletedDiscardableSharedMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discardable_memory.mojom.DiscardableSharedMemoryManager_DeletedDiscardableSharedMemory_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

discardable_memory.mojom.DiscardableSharedMemoryManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

discardable_memory.mojom.DiscardableSharedMemoryManagerRemote = class {
  static get $interfaceName() {
    return 'discardable_memory.mojom.DiscardableSharedMemoryManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      discardable_memory.mojom.DiscardableSharedMemoryManagerPendingReceiver,
      handle);
    this.$ = new discardable_memory.mojom.DiscardableSharedMemoryManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

discardable_memory.mojom.DiscardableSharedMemoryManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  allocateLockedDiscardableSharedMemory(size, id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      discardable_memory.mojom.DiscardableSharedMemoryManager_AllocateLockedDiscardableSharedMemory_ParamsSpec,
      discardable_memory.mojom.DiscardableSharedMemoryManager_AllocateLockedDiscardableSharedMemory_ResponseParamsSpec,
      [size, id]);
  }

  deletedDiscardableSharedMemory(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      discardable_memory.mojom.DiscardableSharedMemoryManager_DeletedDiscardableSharedMemory_ParamsSpec,
      null,
      [id]);
  }

};

discardable_memory.mojom.DiscardableSharedMemoryManager.getRemote = function() {
  let remote = new discardable_memory.mojom.DiscardableSharedMemoryManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'discardable_memory.mojom.DiscardableSharedMemoryManager',
    'context');
  return remote.$;
};

// ParamsSpec for AllocateLockedDiscardableSharedMemory
discardable_memory.mojom.DiscardableSharedMemoryManager_AllocateLockedDiscardableSharedMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discardable_memory.mojom.DiscardableSharedMemoryManager.AllocateLockedDiscardableSharedMemory_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

discardable_memory.mojom.DiscardableSharedMemoryManager_AllocateLockedDiscardableSharedMemory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'discardable_memory.mojom.DiscardableSharedMemoryManager.AllocateLockedDiscardableSharedMemory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeletedDiscardableSharedMemory
discardable_memory.mojom.DiscardableSharedMemoryManager_DeletedDiscardableSharedMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discardable_memory.mojom.DiscardableSharedMemoryManager.DeletedDiscardableSharedMemory_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
discardable_memory.mojom.DiscardableSharedMemoryManagerPtr = discardable_memory.mojom.DiscardableSharedMemoryManagerRemote;
discardable_memory.mojom.DiscardableSharedMemoryManagerRequest = discardable_memory.mojom.DiscardableSharedMemoryManagerPendingReceiver;

