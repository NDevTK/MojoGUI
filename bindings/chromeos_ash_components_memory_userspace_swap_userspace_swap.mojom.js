// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/memory/userspace_swap/userspace_swap.mojom
// Module: userspace_swap.mojom

'use strict';

// Module namespace
var userspace_swap = userspace_swap || {};
userspace_swap.mojom = userspace_swap.mojom || {};

userspace_swap.mojom.MemoryRegionSpec = { $: {} };
userspace_swap.mojom.UserspaceSwapInitialization = {};
userspace_swap.mojom.UserspaceSwapInitialization.$interfaceName = 'userspace_swap.mojom.UserspaceSwapInitialization';
userspace_swap.mojom.UserspaceSwapInitialization_TransferUserfaultFD_ParamsSpec = { $: {} };
userspace_swap.mojom.UserspaceSwapInitialization_TransferUserfaultFD_ResponseParamsSpec = { $: {} };
userspace_swap.mojom.UserspaceSwap = {};
userspace_swap.mojom.UserspaceSwap.$interfaceName = 'userspace_swap.mojom.UserspaceSwap';
userspace_swap.mojom.UserspaceSwap_MovePTEsLeavingMapping_ParamsSpec = { $: {} };
userspace_swap.mojom.UserspaceSwap_MapArea_ParamsSpec = { $: {} };
userspace_swap.mojom.UserspaceSwap_GetPartitionAllocSuperPagesUsed_ParamsSpec = { $: {} };
userspace_swap.mojom.UserspaceSwap_GetPartitionAllocSuperPagesUsed_ResponseParamsSpec = { $: {} };

// Struct: MemoryRegion
mojo.internal.Struct(
    userspace_swap.mojom.MemoryRegionSpec, 'userspace_swap.mojom.MemoryRegion', [
      mojo.internal.StructField('address', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: UserspaceSwapInitialization
mojo.internal.Struct(
    userspace_swap.mojom.UserspaceSwapInitialization_TransferUserfaultFD_ParamsSpec, 'userspace_swap.mojom.UserspaceSwapInitialization_TransferUserfaultFD_Params', [
      mojo.internal.StructField('uffd_error', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('uffd_handle', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('mmap_error', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('swap_area', 24, 0, userspace_swap.mojom.MemoryRegionSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    userspace_swap.mojom.UserspaceSwapInitialization_TransferUserfaultFD_ResponseParamsSpec, 'userspace_swap.mojom.UserspaceSwapInitialization_TransferUserfaultFD_ResponseParams', [
    ],
    [[0, 8]]);

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
      userspace_swap.mojom.UserspaceSwapInitialization_TransferUserfaultFD_ParamsSpec,
      userspace_swap.mojom.UserspaceSwapInitialization_TransferUserfaultFD_ResponseParamsSpec,
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

userspace_swap.mojom.UserspaceSwapInitializationPtr = userspace_swap.mojom.UserspaceSwapInitializationRemote;
userspace_swap.mojom.UserspaceSwapInitializationRequest = userspace_swap.mojom.UserspaceSwapInitializationPendingReceiver;


// Interface: UserspaceSwap
mojo.internal.Struct(
    userspace_swap.mojom.UserspaceSwap_MovePTEsLeavingMapping_ParamsSpec, 'userspace_swap.mojom.UserspaceSwap_MovePTEsLeavingMapping_Params', [
      mojo.internal.StructField('src', 0, 0, userspace_swap.mojom.MemoryRegionSpec, null, false, 0, undefined),
      mojo.internal.StructField('dest', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    userspace_swap.mojom.UserspaceSwap_MapArea_ParamsSpec, 'userspace_swap.mojom.UserspaceSwap_MapArea_Params', [
      mojo.internal.StructField('area', 0, 0, userspace_swap.mojom.MemoryRegionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    userspace_swap.mojom.UserspaceSwap_GetPartitionAllocSuperPagesUsed_ParamsSpec, 'userspace_swap.mojom.UserspaceSwap_GetPartitionAllocSuperPagesUsed_Params', [
      mojo.internal.StructField('max_superpages', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    userspace_swap.mojom.UserspaceSwap_GetPartitionAllocSuperPagesUsed_ResponseParamsSpec, 'userspace_swap.mojom.UserspaceSwap_GetPartitionAllocSuperPagesUsed_ResponseParams', [
      mojo.internal.StructField('superpages', 0, 0, mojo.internal.Array(userspace_swap.mojom.MemoryRegionSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      userspace_swap.mojom.UserspaceSwap_MovePTEsLeavingMapping_ParamsSpec,
      null,
      [src, dest]);
  }

  mapArea(area) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      userspace_swap.mojom.UserspaceSwap_MapArea_ParamsSpec,
      null,
      [area]);
  }

  getPartitionAllocSuperPagesUsed(max_superpages) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      userspace_swap.mojom.UserspaceSwap_GetPartitionAllocSuperPagesUsed_ParamsSpec,
      userspace_swap.mojom.UserspaceSwap_GetPartitionAllocSuperPagesUsed_ResponseParamsSpec,
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

userspace_swap.mojom.UserspaceSwapPtr = userspace_swap.mojom.UserspaceSwapRemote;
userspace_swap.mojom.UserspaceSwapRequest = userspace_swap.mojom.UserspaceSwapPendingReceiver;

