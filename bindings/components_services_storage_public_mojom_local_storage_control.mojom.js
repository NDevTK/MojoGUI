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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = storage.mojom.LocalStorageControl_BindStorageArea_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindStorageArea(params.storage_key, params.receiver);
          break;
        }
        case 1: {
          const params = storage.mojom.LocalStorageControl_GetUsage_ParamsSpec.$.decode(message.payload);
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
          const params = storage.mojom.LocalStorageControl_DeleteStorage_ParamsSpec.$.decode(message.payload);
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
          const params = storage.mojom.LocalStorageControl_CleanUpStorage_ParamsSpec.$.decode(message.payload);
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
          const params = storage.mojom.LocalStorageControl_Flush_ParamsSpec.$.decode(message.payload);
          const result = this.impl.flush();
          break;
        }
        case 5: {
          const params = storage.mojom.LocalStorageControl_PurgeMemory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.purgeMemory();
          break;
        }
        case 6: {
          const params = storage.mojom.LocalStorageControl_ApplyPolicyUpdates_ParamsSpec.$.decode(message.payload);
          const result = this.impl.applyPolicyUpdates(params.policy_updates);
          break;
        }
        case 7: {
          const params = storage.mojom.LocalStorageControl_ForceKeepSessionState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.forceKeepSessionState();
          break;
        }
      }
    }});
  }
};

storage.mojom.LocalStorageControlReceiver = storage.mojom.LocalStorageControlReceiver;

storage.mojom.LocalStorageControlPtr = storage.mojom.LocalStorageControlRemote;
storage.mojom.LocalStorageControlRequest = storage.mojom.LocalStorageControlPendingReceiver;

