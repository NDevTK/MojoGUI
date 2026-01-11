// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/session_storage_control.mojom
// Module: storage.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  bindNamespace(namespace_id, receiver) {
    return this.$.bindNamespace(namespace_id, receiver);
  }
  bindStorageArea(storage_key, namespace_id, receiver) {
    return this.$.bindStorageArea(storage_key, namespace_id, receiver);
  }
  getUsage() {
    return this.$.getUsage();
  }
  deleteStorage(storage_key, namespace_id) {
    return this.$.deleteStorage(storage_key, namespace_id);
  }
  cleanUpStorage() {
    return this.$.cleanUpStorage();
  }
  scavengeUnusedNamespaces() {
    return this.$.scavengeUnusedNamespaces();
  }
  flush() {
    return this.$.flush();
  }
  purgeMemory() {
    return this.$.purgeMemory();
  }
  createNamespace(namespace_id) {
    return this.$.createNamespace(namespace_id);
  }
  cloneNamespace(namespace_id_to_clone, clone_namespace_id, clone_type) {
    return this.$.cloneNamespace(namespace_id_to_clone, clone_namespace_id, clone_type);
  }
  deleteNamespace(namespace_id, should_persist) {
    return this.$.deleteNamespace(namespace_id, should_persist);
  }
};

storage.mojom.SessionStorageControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SessionStorageControl', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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

  bindNamespace(namespace_id, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      storage.mojom.SessionStorageControl_BindNamespace_ParamsSpec,
      null,
      [namespace_id, receiver],
      false);
  }

  bindStorageArea(storage_key, namespace_id, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      storage.mojom.SessionStorageControl_BindStorageArea_ParamsSpec,
      null,
      [storage_key, namespace_id, receiver],
      false);
  }

  getUsage() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      storage.mojom.SessionStorageControl_GetUsage_ParamsSpec,
      storage.mojom.SessionStorageControl_GetUsage_ResponseParamsSpec,
      [],
      false);
  }

  deleteStorage(storage_key, namespace_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec,
      storage.mojom.SessionStorageControl_DeleteStorage_ResponseParamsSpec,
      [storage_key, namespace_id],
      false);
  }

  cleanUpStorage() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec,
      storage.mojom.SessionStorageControl_CleanUpStorage_ResponseParamsSpec,
      [],
      false);
  }

  scavengeUnusedNamespaces() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec,
      null,
      [],
      false);
  }

  flush() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      storage.mojom.SessionStorageControl_Flush_ParamsSpec,
      null,
      [],
      false);
  }

  purgeMemory() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec,
      null,
      [],
      false);
  }

  createNamespace(namespace_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec,
      null,
      [namespace_id],
      false);
  }

  cloneNamespace(namespace_id_to_clone, clone_namespace_id, clone_type) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec,
      null,
      [namespace_id_to_clone, clone_namespace_id, clone_type],
      false);
  }

  deleteNamespace(namespace_id, should_persist) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('SessionStorageControl', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_BindNamespace_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_BindStorageArea_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_GetUsage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_Flush_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_BindNamespace_ParamsSpec.$.structSpec);
          const result = this.impl.bindNamespace(params.namespace_id, params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_BindStorageArea_ParamsSpec.$.structSpec);
          const result = this.impl.bindStorageArea(params.storage_key, params.namespace_id, params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_GetUsage_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec.$.structSpec);
          const result = this.impl.scavengeUnusedNamespaces();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_Flush_ParamsSpec.$.structSpec);
          const result = this.impl.flush();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec.$.structSpec);
          const result = this.impl.purgeMemory();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec.$.structSpec);
          const result = this.impl.createNamespace(params.namespace_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec.$.structSpec);
          const result = this.impl.cloneNamespace(params.namespace_id_to_clone, params.clone_namespace_id, params.clone_type);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec.$.structSpec);
          const result = this.impl.deleteNamespace(params.namespace_id, params.should_persist);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

storage.mojom.SessionStorageControlReceiver = storage.mojom.SessionStorageControlReceiver;

storage.mojom.SessionStorageControlPtr = storage.mojom.SessionStorageControlRemote;
storage.mojom.SessionStorageControlRequest = storage.mojom.SessionStorageControlPendingReceiver;

