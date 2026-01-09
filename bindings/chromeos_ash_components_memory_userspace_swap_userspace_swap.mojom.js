// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/memory/userspace_swap/userspace_swap.mojom
// Module: userspace_swap.mojom

'use strict';

// Module namespace
var userspace_swap = userspace_swap || {};
userspace_swap.mojom = userspace_swap.mojom || {};


// Interface: UserspaceSwapInitialization
userspace_swap.mojom.UserspaceSwapInitializationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

userspace_swap.mojom.UserspaceSwapInitializationRemote = class {
  static get $interfaceName() {
    return 'userspace_swap.mojom.UserspaceSwapInitialization';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      userspace_swap.mojom.UserspaceSwapInitializationPendingReceiver,
      handle);
    this.$ = new userspace_swap.mojom.UserspaceSwapInitializationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

userspace_swap.mojom.UserspaceSwapInitializationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  transferUserfaultFD(uffd_error, uffd_handle, mmap_error, swap_area) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      userspace_swap.mojom.UserspaceSwapInitialization_TransferUserfaultFD_ParamsSpec.$,
      null,
      [uffd_error, uffd_handle, mmap_error, swap_area]);
  }

};

userspace_swap.mojom.UserspaceSwapInitialization.getRemote = function() {
  let remote = new userspace_swap.mojom.UserspaceSwapInitializationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'userspace_swap.mojom.UserspaceSwapInitialization',
    'context');
  return remote.$;
};

// ParamsSpec for TransferUserfaultFD
userspace_swap.mojom.UserspaceSwapInitialization_TransferUserfaultFD_ParamsSpec = {
  $: {
    structSpec: {
      name: 'userspace_swap.mojom.UserspaceSwapInitialization.TransferUserfaultFD_Params',
      packedSize: 40,
      fields: [
        { name: 'uffd_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'uffd_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'mmap_error', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'swap_area', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
userspace_swap.mojom.UserspaceSwapInitializationPtr = userspace_swap.mojom.UserspaceSwapInitializationRemote;
userspace_swap.mojom.UserspaceSwapInitializationRequest = userspace_swap.mojom.UserspaceSwapInitializationPendingReceiver;


// Interface: UserspaceSwap
userspace_swap.mojom.UserspaceSwapPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

userspace_swap.mojom.UserspaceSwapRemote = class {
  static get $interfaceName() {
    return 'userspace_swap.mojom.UserspaceSwap';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      userspace_swap.mojom.UserspaceSwapPendingReceiver,
      handle);
    this.$ = new userspace_swap.mojom.UserspaceSwapRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

userspace_swap.mojom.UserspaceSwapRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  movePTEsLeavingMapping(src, dest) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      userspace_swap.mojom.UserspaceSwap_MovePTEsLeavingMapping_ParamsSpec.$,
      null,
      [src, dest]);
  }

  mapArea(area) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      userspace_swap.mojom.UserspaceSwap_MapArea_ParamsSpec.$,
      null,
      [area]);
  }

  getPartitionAllocSuperPagesUsed(max_superpages) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      userspace_swap.mojom.UserspaceSwap_GetPartitionAllocSuperPagesUsed_ParamsSpec.$,
      userspace_swap.mojom.UserspaceSwap_GetPartitionAllocSuperPagesUsed_ResponseParamsSpec.$,
      [max_superpages]);
  }

};

userspace_swap.mojom.UserspaceSwap.getRemote = function() {
  let remote = new userspace_swap.mojom.UserspaceSwapRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'userspace_swap.mojom.UserspaceSwap',
    'context');
  return remote.$;
};

// ParamsSpec for MovePTEsLeavingMapping
userspace_swap.mojom.UserspaceSwap_MovePTEsLeavingMapping_ParamsSpec = {
  $: {
    structSpec: {
      name: 'userspace_swap.mojom.UserspaceSwap.MovePTEsLeavingMapping_Params',
      packedSize: 24,
      fields: [
        { name: 'src', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'dest', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MapArea
userspace_swap.mojom.UserspaceSwap_MapArea_ParamsSpec = {
  $: {
    structSpec: {
      name: 'userspace_swap.mojom.UserspaceSwap.MapArea_Params',
      packedSize: 16,
      fields: [
        { name: 'area', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPartitionAllocSuperPagesUsed
userspace_swap.mojom.UserspaceSwap_GetPartitionAllocSuperPagesUsed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'userspace_swap.mojom.UserspaceSwap.GetPartitionAllocSuperPagesUsed_Params',
      packedSize: 16,
      fields: [
        { name: 'max_superpages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

userspace_swap.mojom.UserspaceSwap_GetPartitionAllocSuperPagesUsed_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'userspace_swap.mojom.UserspaceSwap.GetPartitionAllocSuperPagesUsed_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'superpages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
userspace_swap.mojom.UserspaceSwapPtr = userspace_swap.mojom.UserspaceSwapRemote;
userspace_swap.mojom.UserspaceSwapRequest = userspace_swap.mojom.UserspaceSwapPendingReceiver;

