// Auto-generated MojoJS binding
// Source: chromium_src/components/discardable_memory/public/mojom/discardable_shared_memory_manager.mojom
// Module: discardable_memory.mojom

'use strict';

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
      [size, id],
      false);
  }

  deletedDiscardableSharedMemory(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
      switch (header.ordinal) {
        case 0: {
          const params = discardable_memory.mojom.DiscardableSharedMemoryManager_AllocateLockedDiscardableSharedMemory_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.allocateLockedDiscardableSharedMemory');
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
          const params = discardable_memory.mojom.DiscardableSharedMemoryManager_DeletedDiscardableSharedMemory_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.deletedDiscardableSharedMemory');
          const result = this.impl.deletedDiscardableSharedMemory(params.id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

discardable_memory.mojom.DiscardableSharedMemoryManagerReceiver = discardable_memory.mojom.DiscardableSharedMemoryManagerReceiver;

discardable_memory.mojom.DiscardableSharedMemoryManagerPtr = discardable_memory.mojom.DiscardableSharedMemoryManagerRemote;
discardable_memory.mojom.DiscardableSharedMemoryManagerRequest = discardable_memory.mojom.DiscardableSharedMemoryManagerPendingReceiver;

