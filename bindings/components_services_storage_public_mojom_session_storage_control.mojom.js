// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/session_storage_control.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var blink = blink || {};

storage.mojom.SessionStorageCloneTypeSpec = { $: mojo.internal.Enum() };
storage.mojom.SessionStorageUsageInfoSpec = { $: {} };
storage.mojom.SessionStorageControl = {};
storage.mojom.SessionStorageControl.$interfaceName = 'storage.mojom.SessionStorageControl';
storage.mojom.SessionStorageControl_BindNamespace_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_BindStorageArea_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_GetUsage_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_GetUsage_ResponseParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_DeleteStorage_ResponseParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_CleanUpStorage_ResponseParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_Flush_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec = { $: {} };

// Enum: SessionStorageCloneType
storage.mojom.SessionStorageCloneType = {
  kImmediate: 0,
  kWaitForCloneOnNamespace: 1,
};

// Struct: SessionStorageUsageInfo
mojo.internal.Struct(
    storage.mojom.SessionStorageUsageInfoSpec, 'storage.mojom.SessionStorageUsageInfo', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('namespace_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SessionStorageControl
mojo.internal.Struct(
    storage.mojom.SessionStorageControl_BindNamespace_ParamsSpec, 'storage.mojom.SessionStorageControl_BindNamespace_Params', [
      mojo.internal.StructField('namespace_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.SessionStorageNamespaceRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_BindStorageArea_ParamsSpec, 'storage.mojom.SessionStorageControl_BindStorageArea_Params', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('namespace_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 16, 0, mojo.internal.InterfaceRequest(blink.mojom.StorageAreaRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_GetUsage_ParamsSpec, 'storage.mojom.SessionStorageControl_GetUsage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_GetUsage_ResponseParamsSpec, 'storage.mojom.SessionStorageControl_GetUsage_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, mojo.internal.Array(storage.mojom.SessionStorageUsageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec, 'storage.mojom.SessionStorageControl_DeleteStorage_Params', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('namespace_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_DeleteStorage_ResponseParamsSpec, 'storage.mojom.SessionStorageControl_DeleteStorage_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec, 'storage.mojom.SessionStorageControl_CleanUpStorage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_CleanUpStorage_ResponseParamsSpec, 'storage.mojom.SessionStorageControl_CleanUpStorage_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec, 'storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_Flush_ParamsSpec, 'storage.mojom.SessionStorageControl_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec, 'storage.mojom.SessionStorageControl_PurgeMemory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec, 'storage.mojom.SessionStorageControl_CreateNamespace_Params', [
      mojo.internal.StructField('namespace_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec, 'storage.mojom.SessionStorageControl_CloneNamespace_Params', [
      mojo.internal.StructField('namespace_id_to_clone', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('clone_namespace_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('clone_type', 16, 0, storage.mojom.SessionStorageCloneTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec, 'storage.mojom.SessionStorageControl_DeleteNamespace_Params', [
      mojo.internal.StructField('namespace_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('should_persist', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

storage.mojom.SessionStorageControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.SessionStorageControlRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.SessionStorageControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.SessionStorageControlPendingReceiver,
      handle);
    this.$ = new storage.mojom.SessionStorageControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.SessionStorageControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindNamespace(namespace_id, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.SessionStorageControl_BindNamespace_ParamsSpec,
      null,
      [namespace_id, receiver],
      false);
  }

  bindStorageArea(storage_key, namespace_id, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.SessionStorageControl_BindStorageArea_ParamsSpec,
      null,
      [storage_key, namespace_id, receiver],
      false);
  }

  getUsage() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.SessionStorageControl_GetUsage_ParamsSpec,
      storage.mojom.SessionStorageControl_GetUsage_ResponseParamsSpec,
      [],
      false);
  }

  deleteStorage(storage_key, namespace_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec,
      storage.mojom.SessionStorageControl_DeleteStorage_ResponseParamsSpec,
      [storage_key, namespace_id],
      false);
  }

  cleanUpStorage() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec,
      storage.mojom.SessionStorageControl_CleanUpStorage_ResponseParamsSpec,
      [],
      false);
  }

  scavengeUnusedNamespaces() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec,
      null,
      [],
      false);
  }

  flush() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      storage.mojom.SessionStorageControl_Flush_ParamsSpec,
      null,
      [],
      false);
  }

  purgeMemory() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec,
      null,
      [],
      false);
  }

  createNamespace(namespace_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec,
      null,
      [namespace_id],
      false);
  }

  cloneNamespace(namespace_id_to_clone, clone_namespace_id, clone_type) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec,
      null,
      [namespace_id_to_clone, clone_namespace_id, clone_type],
      false);
  }

  deleteNamespace(namespace_id, should_persist) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      storage.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec,
      null,
      [namespace_id, should_persist],
      false);
  }

};

storage.mojom.SessionStorageControl.getRemote = function() {
  let remote = new storage.mojom.SessionStorageControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.SessionStorageControl',
    'context');
  return remote.$;
};

storage.mojom.SessionStorageControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BindNamespace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.SessionStorageControl_BindNamespace_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindNamespace (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindStorageArea
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.SessionStorageControl_BindStorageArea_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindStorageArea (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetUsage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.SessionStorageControl_GetUsage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUsage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DeleteStorage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteStorage (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CleanUpStorage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CleanUpStorage (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ScavengeUnusedNamespaces
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScavengeUnusedNamespaces (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: Flush
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.SessionStorageControl_Flush_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Flush (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: PurgeMemory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PurgeMemory (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: CreateNamespace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateNamespace (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: CloneNamespace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloneNamespace (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: DeleteNamespace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteNamespace (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.SessionStorageControl_BindNamespace_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindNamespace');
          const result = this.impl.bindNamespace(params.namespace_id, params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.SessionStorageControl_BindStorageArea_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindStorageArea');
          const result = this.impl.bindStorageArea(params.storage_key, params.namespace_id, params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.SessionStorageControl_GetUsage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUsage');
          const result = this.impl.getUsage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.SessionStorageControl_GetUsage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteStorage');
          const result = this.impl.deleteStorage(params.storage_key, params.namespace_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.SessionStorageControl_DeleteStorage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cleanUpStorage');
          const result = this.impl.cleanUpStorage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.SessionStorageControl_CleanUpStorage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.scavengeUnusedNamespaces');
          const result = this.impl.scavengeUnusedNamespaces();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.SessionStorageControl_Flush_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.flush');
          const result = this.impl.flush();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.purgeMemory');
          const result = this.impl.purgeMemory();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createNamespace');
          const result = this.impl.createNamespace(params.namespace_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cloneNamespace');
          const result = this.impl.cloneNamespace(params.namespace_id_to_clone, params.clone_namespace_id, params.clone_type);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteNamespace');
          const result = this.impl.deleteNamespace(params.namespace_id, params.should_persist);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

storage.mojom.SessionStorageControlReceiver = storage.mojom.SessionStorageControlReceiver;

storage.mojom.SessionStorageControlPtr = storage.mojom.SessionStorageControlRemote;
storage.mojom.SessionStorageControlRequest = storage.mojom.SessionStorageControlPendingReceiver;

