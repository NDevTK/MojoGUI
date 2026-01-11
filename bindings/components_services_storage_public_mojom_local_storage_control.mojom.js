// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/local_storage_control.mojom
// Module: storage.mojom

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
  bindStorageArea(storage_key, receiver) {
    return this.$.bindStorageArea(storage_key, receiver);
  }
  getUsage() {
    return this.$.getUsage();
  }
  deleteStorage(storage_key) {
    return this.$.deleteStorage(storage_key);
  }
  cleanUpStorage() {
    return this.$.cleanUpStorage();
  }
  flush() {
    return this.$.flush();
  }
  purgeMemory() {
    return this.$.purgeMemory();
  }
  applyPolicyUpdates(policy_updates) {
    return this.$.applyPolicyUpdates(policy_updates);
  }
  forceKeepSessionState() {
    return this.$.forceKeepSessionState();
  }
};

storage.mojom.LocalStorageControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LocalStorageControl', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindStorageArea(storage_key, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      storage.mojom.LocalStorageControl_BindStorageArea_ParamsSpec,
      null,
      [storage_key, receiver],
      false);
  }

  getUsage() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      storage.mojom.LocalStorageControl_GetUsage_ParamsSpec,
      storage.mojom.LocalStorageControl_GetUsage_ResponseParamsSpec,
      [],
      false);
  }

  deleteStorage(storage_key) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      storage.mojom.LocalStorageControl_DeleteStorage_ParamsSpec,
      storage.mojom.LocalStorageControl_DeleteStorage_ResponseParamsSpec,
      [storage_key],
      false);
  }

  cleanUpStorage() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      storage.mojom.LocalStorageControl_CleanUpStorage_ParamsSpec,
      storage.mojom.LocalStorageControl_CleanUpStorage_ResponseParamsSpec,
      [],
      false);
  }

  flush() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      storage.mojom.LocalStorageControl_Flush_ParamsSpec,
      null,
      [],
      false);
  }

  purgeMemory() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      storage.mojom.LocalStorageControl_PurgeMemory_ParamsSpec,
      null,
      [],
      false);
  }

  applyPolicyUpdates(policy_updates) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      storage.mojom.LocalStorageControl_ApplyPolicyUpdates_ParamsSpec,
      null,
      [policy_updates],
      false);
  }

  forceKeepSessionState() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('LocalStorageControl', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(storage.mojom.LocalStorageControl_BindStorageArea_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.LocalStorageControl_GetUsage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.LocalStorageControl_DeleteStorage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.LocalStorageControl_CleanUpStorage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.LocalStorageControl_Flush_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.LocalStorageControl_PurgeMemory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.LocalStorageControl_ApplyPolicyUpdates_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.LocalStorageControl_ForceKeepSessionState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.LocalStorageControl_BindStorageArea_ParamsSpec.$.structSpec);
          const result = this.impl.bindStorageArea(params.storage_key, params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.LocalStorageControl_GetUsage_ParamsSpec.$.structSpec);
          const result = this.impl.getUsage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.LocalStorageControl_GetUsage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.LocalStorageControl_DeleteStorage_ParamsSpec.$.structSpec);
          const result = this.impl.deleteStorage(params.storage_key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.LocalStorageControl_DeleteStorage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.LocalStorageControl_CleanUpStorage_ParamsSpec.$.structSpec);
          const result = this.impl.cleanUpStorage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.LocalStorageControl_CleanUpStorage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.LocalStorageControl_Flush_ParamsSpec.$.structSpec);
          const result = this.impl.flush();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.LocalStorageControl_PurgeMemory_ParamsSpec.$.structSpec);
          const result = this.impl.purgeMemory();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.LocalStorageControl_ApplyPolicyUpdates_ParamsSpec.$.structSpec);
          const result = this.impl.applyPolicyUpdates(params.policy_updates);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.LocalStorageControl_ForceKeepSessionState_ParamsSpec.$.structSpec);
          const result = this.impl.forceKeepSessionState();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

storage.mojom.LocalStorageControlReceiver = storage.mojom.LocalStorageControlReceiver;

storage.mojom.LocalStorageControlPtr = storage.mojom.LocalStorageControlRemote;
storage.mojom.LocalStorageControlRequest = storage.mojom.LocalStorageControlPendingReceiver;

