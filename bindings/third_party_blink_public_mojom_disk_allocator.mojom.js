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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DiskAllocator_ProvideTemporaryFile_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.provideTemporaryFile');
          const result = this.impl.provideTemporaryFile(params.file);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DiskAllocatorReceiver = blink.mojom.DiskAllocatorReceiver;

blink.mojom.DiskAllocatorPtr = blink.mojom.DiskAllocatorRemote;
blink.mojom.DiskAllocatorRequest = blink.mojom.DiskAllocatorPendingReceiver;

