// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/disk_allocator.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.DiskAllocator = {};
blink.mojom.DiskAllocator.$interfaceName = 'blink.mojom.DiskAllocator';
blink.mojom.DiskAllocator_ProvideTemporaryFile_ParamsSpec = { $: {} };

// Interface: DiskAllocator
mojo.internal.Struct(
    blink.mojom.DiskAllocator_ProvideTemporaryFile_ParamsSpec, 'blink.mojom.DiskAllocator_ProvideTemporaryFile_Params', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.DiskAllocatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DiskAllocatorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DiskAllocator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DiskAllocatorPendingReceiver,
      handle);
    this.$ = new blink.mojom.DiskAllocatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DiskAllocatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  provideTemporaryFile(file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DiskAllocator_ProvideTemporaryFile_ParamsSpec,
      null,
      [file],
      false);
  }

};

blink.mojom.DiskAllocator.getRemote = function() {
  let remote = new blink.mojom.DiskAllocatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DiskAllocator',
    'context');
  return remote.$;
};

blink.mojom.DiskAllocatorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.DiskAllocator_ProvideTemporaryFile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.provideTemporaryFile(params.file);
          break;
        }
      }
    });
  }
};

blink.mojom.DiskAllocatorReceiver = blink.mojom.DiskAllocatorReceiver;

blink.mojom.DiskAllocatorPtr = blink.mojom.DiskAllocatorRemote;
blink.mojom.DiskAllocatorRequest = blink.mojom.DiskAllocatorPendingReceiver;

