// Auto-generated MojoJS binding
// Source: chromium_src/components/discardable_memory/public/mojom/discardable_shared_memory_manager.mojom
// Module: discardable_memory.mojom

// Module namespace
var discardable_memory = discardable_memory || {};
discardable_memory.mojom = discardable_memory.mojom || {};
var mojo_base = mojo_base || {};

discardable_memory.mojom.DiscardableSharedMemoryManager = {};
discardable_memory.mojom.DiscardableSharedMemoryManager.$interfaceName = 'discardable_memory.mojom.DiscardableSharedMemoryManager';
discardable_memory.mojom.DiscardableSharedMemoryManager_AllocateLockedDiscardableSharedMemory_ParamsSpec = { $: {} };
discardable_memory.mojom.DiscardableSharedMemoryManager_AllocateLockedDiscardableSharedMemory_ResponseParamsSpec = { $: {} };
discardable_memory.mojom.DiscardableSharedMemoryManager_DeletedDiscardableSharedMemory_ParamsSpec = { $: {} };

// Interface: DiscardableSharedMemoryManager
mojo.internal.Struct(
    discardable_memory.mojom.DiscardableSharedMemoryManager_AllocateLockedDiscardableSharedMemory_ParamsSpec, 'discardable_memory.mojom.DiscardableSharedMemoryManager_AllocateLockedDiscardableSharedMemory_Params', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discardable_memory.mojom.DiscardableSharedMemoryManager_AllocateLockedDiscardableSharedMemory_ResponseParamsSpec, 'discardable_memory.mojom.DiscardableSharedMemoryManager_AllocateLockedDiscardableSharedMemory_ResponseParams', [
      mojo.internal.StructField('region', 0, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discardable_memory.mojom.DiscardableSharedMemoryManager_DeletedDiscardableSharedMemory_ParamsSpec, 'discardable_memory.mojom.DiscardableSharedMemoryManager_DeletedDiscardableSharedMemory_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
  allocateLockedDiscardableSharedMemory(size, id) {
    return this.$.allocateLockedDiscardableSharedMemory(size, id);
  }
  deletedDiscardableSharedMemory(id) {
    return this.$.deletedDiscardableSharedMemory(id);
  }
};

discardable_memory.mojom.DiscardableSharedMemoryManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DiscardableSharedMemoryManager', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  allocateLockedDiscardableSharedMemory(size, id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      discardable_memory.mojom.DiscardableSharedMemoryManager_AllocateLockedDiscardableSharedMemory_ParamsSpec,
      discardable_memory.mojom.DiscardableSharedMemoryManager_AllocateLockedDiscardableSharedMemory_ResponseParamsSpec,
      [size, id],
      false);
  }

  deletedDiscardableSharedMemory(id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      discardable_memory.mojom.DiscardableSharedMemoryManager_DeletedDiscardableSharedMemory_ParamsSpec,
      null,
      [id],
      false);
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

discardable_memory.mojom.DiscardableSharedMemoryManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DiscardableSharedMemoryManager', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discardable_memory.mojom.DiscardableSharedMemoryManager_AllocateLockedDiscardableSharedMemory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discardable_memory.mojom.DiscardableSharedMemoryManager_DeletedDiscardableSharedMemory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discardable_memory.mojom.DiscardableSharedMemoryManager_AllocateLockedDiscardableSharedMemory_ParamsSpec.$.structSpec);
          const result = this.impl.allocateLockedDiscardableSharedMemory(params.size, params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, discardable_memory.mojom.DiscardableSharedMemoryManager_AllocateLockedDiscardableSharedMemory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discardable_memory.mojom.DiscardableSharedMemoryManager_DeletedDiscardableSharedMemory_ParamsSpec.$.structSpec);
          const result = this.impl.deletedDiscardableSharedMemory(params.id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

discardable_memory.mojom.DiscardableSharedMemoryManagerReceiver = discardable_memory.mojom.DiscardableSharedMemoryManagerReceiver;

discardable_memory.mojom.DiscardableSharedMemoryManagerPtr = discardable_memory.mojom.DiscardableSharedMemoryManagerRemote;
discardable_memory.mojom.DiscardableSharedMemoryManagerRequest = discardable_memory.mojom.DiscardableSharedMemoryManagerPendingReceiver;

