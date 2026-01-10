// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/disk_allocator.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: DiskAllocator
blink.mojom.mojom.DiskAllocator = {};

blink.mojom.mojom.DiskAllocatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.DiskAllocatorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DiskAllocator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.DiskAllocatorPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.DiskAllocatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.DiskAllocatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  provideTemporaryFile(file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.DiskAllocator_ProvideTemporaryFile_ParamsSpec,
      null,
      [file]);
  }

};

blink.mojom.mojom.DiskAllocator.getRemote = function() {
  let remote = new blink.mojom.mojom.DiskAllocatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DiskAllocator',
    'context');
  return remote.$;
};

// ParamsSpec for ProvideTemporaryFile
blink.mojom.mojom.DiskAllocator_ProvideTemporaryFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DiskAllocator.ProvideTemporaryFile_Params',
      packedSize: 16,
      fields: [
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.DiskAllocatorPtr = blink.mojom.mojom.DiskAllocatorRemote;
blink.mojom.mojom.DiskAllocatorRequest = blink.mojom.mojom.DiskAllocatorPendingReceiver;

