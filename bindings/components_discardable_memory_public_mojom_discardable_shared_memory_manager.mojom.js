// Auto-generated MojoJS binding
// Source: chromium_src/components/discardable_memory/public/mojom/discardable_shared_memory_manager.mojom
// Module: discardable_memory.mojom

'use strict';

// Module namespace
var discardable_memory = discardable_memory || {};
discardable_memory.mojom = discardable_memory.mojom || {};


// Interface: DiscardableSharedMemoryManager
discardable_memory.mojom.DiscardableSharedMemoryManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'discardable_memory.mojom.DiscardableSharedMemoryManager';
  }

  allocateLockedDiscardableSharedMemory(size, id) {
    // Method: AllocateLockedDiscardableSharedMemory
    return new Promise((resolve) => {
      // Call: AllocateLockedDiscardableSharedMemory(size, id)
      resolve({});
    });
  }

  deletedDiscardableSharedMemory(id) {
    // Method: DeletedDiscardableSharedMemory
    // Call: DeletedDiscardableSharedMemory(id)
  }

};

discardable_memory.mojom.DiscardableSharedMemoryManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
