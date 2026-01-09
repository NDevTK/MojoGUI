// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/memory/userspace_swap/userspace_swap.mojom
// Module: userspace_swap.mojom

'use strict';

// Module namespace
var userspace_swap = userspace_swap || {};
userspace_swap.mojom = userspace_swap.mojom || {};


// Struct: MemoryRegion
userspace_swap.mojom.MemoryRegion = class {
  constructor(values = {}) {
    this.length = values.length !== undefined ? values.length : 0;
  }
};

// Interface: UserspaceSwapInitialization
userspace_swap.mojom.UserspaceSwapInitializationPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'userspace_swap.mojom.UserspaceSwapInitialization';
  }

  transferUserfaultFD(uffd_error, uffd_handle, mmap_error, swap_area) {
    // Method: TransferUserfaultFD
    // Call: TransferUserfaultFD(uffd_error, uffd_handle, mmap_error, swap_area)
  }

};

userspace_swap.mojom.UserspaceSwapInitializationRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UserspaceSwap
userspace_swap.mojom.UserspaceSwapPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'userspace_swap.mojom.UserspaceSwap';
  }

  detected(userfaultfd) {
    // Method: detected
    // Call: detected(userfaultfd)
  }

  movePTEsLeavingMapping(src, dest) {
    // Method: MovePTEsLeavingMapping
    // Call: MovePTEsLeavingMapping(src, dest)
  }

  created(MAP_FIXED) {
    // Method: created
    // Call: created(MAP_FIXED)
  }

  mmap() {
    // Method: mmap
    // Call: mmap()
  }

  mapArea(area) {
    // Method: MapArea
    // Call: MapArea(area)
  }

  mincore() {
    // Method: mincore
    // Call: mincore()
  }

  getPartitionAllocSuperPagesUsed(max_superpages) {
    // Method: GetPartitionAllocSuperPagesUsed
    return new Promise((resolve) => {
      // Call: GetPartitionAllocSuperPagesUsed(max_superpages)
      resolve({});
    });
  }

};

userspace_swap.mojom.UserspaceSwapRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
