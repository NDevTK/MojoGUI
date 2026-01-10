// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/local_storage_control.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var blink = blink || {};

storage.mojom.LocalStorageControl = {};
storage.mojom.LocalStorageControl.$interfaceName = 'storage.mojom.LocalStorageControl';
storage.mojom.LocalStorageControl_BindStorageArea_ParamsSpec = { $: {} };
storage.mojom.LocalStorageControl_GetUsage_ParamsSpec = { $: {} };
storage.mojom.LocalStorageControl_GetUsage_ResponseParamsSpec = { $: {} };
storage.mojom.LocalStorageControl_DeleteStorage_ParamsSpec = { $: {} };
storage.mojom.LocalStorageControl_DeleteStorage_ResponseParamsSpec = { $: {} };
storage.mojom.LocalStorageControl_CleanUpStorage_ParamsSpec = { $: {} };
storage.mojom.LocalStorageControl_CleanUpStorage_ResponseParamsSpec = { $: {} };
storage.mojom.LocalStorageControl_Flush_ParamsSpec = { $: {} };
storage.mojom.LocalStorageControl_PurgeMemory_ParamsSpec = { $: {} };
storage.mojom.LocalStorageControl_ApplyPolicyUpdates_ParamsSpec = { $: {} };
storage.mojom.LocalStorageControl_ForceKeepSessionState_ParamsSpec = { $: {} };

// Interface: LocalStorageControl
mojo.internal.Struct(
    storage.mojom.LocalStorageControl_BindStorageArea_ParamsSpec, 'storage.mojom.LocalStorageControl_BindStorageArea_Params', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.StorageAreaRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.LocalStorageControl_GetUsage_ParamsSpec, 'storage.mojom.LocalStorageControl_GetUsage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.LocalStorageControl_GetUsage_ResponseParamsSpec, 'storage.mojom.LocalStorageControl_GetUsage_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, mojo.internal.Array(storage.mojom.StorageUsageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.LocalStorageControl_DeleteStorage_ParamsSpec, 'storage.mojom.LocalStorageControl_DeleteStorage_Params', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.LocalStorageControl_DeleteStorage_ResponseParamsSpec, 'storage.mojom.LocalStorageControl_DeleteStorage_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.LocalStorageControl_CleanUpStorage_ParamsSpec, 'storage.mojom.LocalStorageControl_CleanUpStorage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.LocalStorageControl_CleanUpStorage_ResponseParamsSpec, 'storage.mojom.LocalStorageControl_CleanUpStorage_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.LocalStorageControl_Flush_ParamsSpec, 'storage.mojom.LocalStorageControl_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.LocalStorageControl_PurgeMemory_ParamsSpec, 'storage.mojom.LocalStorageControl_PurgeMemory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.LocalStorageControl_ApplyPolicyUpdates_ParamsSpec, 'storage.mojom.LocalStorageControl_ApplyPolicyUpdates_Params', [
      mojo.internal.StructField('policy_updates', 0, 0, mojo.internal.Array(storage.mojom.StoragePolicyUpdateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.LocalStorageControl_ForceKeepSessionState_ParamsSpec, 'storage.mojom.LocalStorageControl_ForceKeepSessionState_Params', [
    ],
    [[0, 8]]);

storage.mojom.LocalStorageControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.LocalStorageControlRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.LocalStorageControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.LocalStorageControlPendingReceiver,
      handle);
    this.$ = new storage.mojom.LocalStorageControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.LocalStorageControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindStorageArea(storage_key, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.LocalStorageControl_BindStorageArea_ParamsSpec,
      null,
      [storage_key, receiver],
      false);
  }

  getUsage() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.LocalStorageControl_GetUsage_ParamsSpec,
      storage.mojom.LocalStorageControl_GetUsage_ResponseParamsSpec,
      [],
      false);
  }

  deleteStorage(storage_key) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.LocalStorageControl_DeleteStorage_ParamsSpec,
      storage.mojom.LocalStorageControl_DeleteStorage_ResponseParamsSpec,
      [storage_key],
      false);
  }

  cleanUpStorage() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.LocalStorageControl_CleanUpStorage_ParamsSpec,
      storage.mojom.LocalStorageControl_CleanUpStorage_ResponseParamsSpec,
      [],
      false);
  }

  flush() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.LocalStorageControl_Flush_ParamsSpec,
      null,
      [],
      false);
  }

  purgeMemory() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.LocalStorageControl_PurgeMemory_ParamsSpec,
      null,
      [],
      false);
  }

  applyPolicyUpdates(policy_updates) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      storage.mojom.LocalStorageControl_ApplyPolicyUpdates_ParamsSpec,
      null,
      [policy_updates],
      false);
  }

  forceKeepSessionState() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      storage.mojom.LocalStorageControl_ForceKeepSessionState_ParamsSpec,
      null,
      [],
      false);
  }

};

storage.mojom.LocalStorageControl.getRemote = function() {
  let remote = new storage.mojom.LocalStorageControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.LocalStorageControl',
    'context');
  return remote.$;
};

storage.mojom.LocalStorageControlReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: BindStorageArea
        try {
             decoder.decodeStruct(storage.mojom.LocalStorageControl_BindStorageArea_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindStorageArea (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: GetUsage
        try {
             decoder.decodeStruct(storage.mojom.LocalStorageControl_GetUsage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUsage (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: DeleteStorage
        try {
             decoder.decodeStruct(storage.mojom.LocalStorageControl_DeleteStorage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteStorage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: CleanUpStorage
        try {
             decoder.decodeStruct(storage.mojom.LocalStorageControl_CleanUpStorage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CleanUpStorage (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: Flush
        try {
             decoder.decodeStruct(storage.mojom.LocalStorageControl_Flush_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Flush (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: PurgeMemory
        try {
             decoder.decodeStruct(storage.mojom.LocalStorageControl_PurgeMemory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PurgeMemory (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: ApplyPolicyUpdates
        try {
             decoder.decodeStruct(storage.mojom.LocalStorageControl_ApplyPolicyUpdates_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyPolicyUpdates (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: ForceKeepSessionState
        try {
             decoder.decodeStruct(storage.mojom.LocalStorageControl_ForceKeepSessionState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceKeepSessionState (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.LocalStorageControl_BindStorageArea_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindStorageArea');
          const result = this.impl.bindStorageArea(params.storage_key, params.receiver);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.LocalStorageControl_GetUsage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUsage');
          const result = this.impl.getUsage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.LocalStorageControl_GetUsage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.LocalStorageControl_DeleteStorage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteStorage');
          const result = this.impl.deleteStorage(params.storage_key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.LocalStorageControl_DeleteStorage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.LocalStorageControl_CleanUpStorage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cleanUpStorage');
          const result = this.impl.cleanUpStorage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.LocalStorageControl_CleanUpStorage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.LocalStorageControl_Flush_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.flush');
          const result = this.impl.flush();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.LocalStorageControl_PurgeMemory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.purgeMemory');
          const result = this.impl.purgeMemory();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.LocalStorageControl_ApplyPolicyUpdates_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.applyPolicyUpdates');
          const result = this.impl.applyPolicyUpdates(params.policy_updates);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.LocalStorageControl_ForceKeepSessionState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.forceKeepSessionState');
          const result = this.impl.forceKeepSessionState();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

storage.mojom.LocalStorageControlReceiver = storage.mojom.LocalStorageControlReceiver;

storage.mojom.LocalStorageControlPtr = storage.mojom.LocalStorageControlRemote;
storage.mojom.LocalStorageControlRequest = storage.mojom.LocalStorageControlPendingReceiver;

