// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/dom_storage/storage_area.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


blink.mojom.kPerStorageAreaQuota = 10485760;

blink.mojom.kPerStorageAreaOverQuotaAllowance = 102400;

// Struct: KeyValue
blink.mojom.KeyValueSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.KeyValue',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: StorageAreaObserver
blink.mojom.StorageAreaObserver = {};

blink.mojom.StorageAreaObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.StorageAreaObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.StorageAreaObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.StorageAreaObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.StorageAreaObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.StorageAreaObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  keyChanged(key, new_value, old_value, source) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.StorageAreaObserver_KeyChanged_ParamsSpec,
      null,
      [key, new_value, old_value, source]);
  }

  keyChangeFailed(key, source) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.StorageAreaObserver_KeyChangeFailed_ParamsSpec,
      null,
      [key, source]);
  }

  keyDeleted(key, old_value, source) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.StorageAreaObserver_KeyDeleted_ParamsSpec,
      null,
      [key, old_value, source]);
  }

  allDeleted(was_nonempty, source) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.StorageAreaObserver_AllDeleted_ParamsSpec,
      null,
      [was_nonempty, source]);
  }

  shouldSendOldValueOnMutations(value) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.StorageAreaObserver_ShouldSendOldValueOnMutations_ParamsSpec,
      null,
      [value]);
  }

};

blink.mojom.StorageAreaObserver.getRemote = function() {
  let remote = new blink.mojom.StorageAreaObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.StorageAreaObserver',
    'context');
  return remote.$;
};

// ParamsSpec for KeyChanged
blink.mojom.StorageAreaObserver_KeyChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageAreaObserver.KeyChanged_Params',
      packedSize: 40,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'new_value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'old_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'source', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for KeyChangeFailed
blink.mojom.StorageAreaObserver_KeyChangeFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageAreaObserver.KeyChangeFailed_Params',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for KeyDeleted
blink.mojom.StorageAreaObserver_KeyDeleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageAreaObserver.KeyDeleted_Params',
      packedSize: 32,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'old_value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'source', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for AllDeleted
blink.mojom.StorageAreaObserver_AllDeleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageAreaObserver.AllDeleted_Params',
      packedSize: 24,
      fields: [
        { name: 'was_nonempty', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ShouldSendOldValueOnMutations
blink.mojom.StorageAreaObserver_ShouldSendOldValueOnMutations_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageAreaObserver.ShouldSendOldValueOnMutations_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.StorageAreaObserverPtr = blink.mojom.StorageAreaObserverRemote;
blink.mojom.StorageAreaObserverRequest = blink.mojom.StorageAreaObserverPendingReceiver;


// Interface: StorageArea
blink.mojom.StorageArea = {};

blink.mojom.StorageAreaPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.StorageAreaRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.StorageArea';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.StorageAreaPendingReceiver,
      handle);
    this.$ = new blink.mojom.StorageAreaRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.StorageAreaRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.StorageArea_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  put(key, value, client_old_value, source) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.StorageArea_Put_ParamsSpec,
      blink.mojom.StorageArea_Put_ResponseParamsSpec,
      [key, value, client_old_value, source]);
  }

  delete(key, client_old_value, source) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.StorageArea_Delete_ParamsSpec,
      blink.mojom.StorageArea_Delete_ResponseParamsSpec,
      [key, client_old_value, source]);
  }

  deleteAll(source, new_observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.StorageArea_DeleteAll_ParamsSpec,
      blink.mojom.StorageArea_DeleteAll_ResponseParamsSpec,
      [source, new_observer]);
  }

  get(key) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.StorageArea_Get_ParamsSpec,
      blink.mojom.StorageArea_Get_ResponseParamsSpec,
      [key]);
  }

  getAll(new_observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.StorageArea_GetAll_ParamsSpec,
      blink.mojom.StorageArea_GetAll_ResponseParamsSpec,
      [new_observer]);
  }

};

blink.mojom.StorageArea.getRemote = function() {
  let remote = new blink.mojom.StorageAreaRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.StorageArea',
    'context');
  return remote.$;
};

// ParamsSpec for AddObserver
blink.mojom.StorageArea_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageArea.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Put
blink.mojom.StorageArea_Put_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageArea.Put_Params',
      packedSize: 40,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'client_old_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'source', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

blink.mojom.StorageArea_Put_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Delete
blink.mojom.StorageArea_Delete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageArea.Delete_Params',
      packedSize: 32,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'client_old_value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'source', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.StorageArea_Delete_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteAll
blink.mojom.StorageArea_DeleteAll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageArea.DeleteAll_Params',
      packedSize: 24,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'new_observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.StorageArea_DeleteAll_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Get
blink.mojom.StorageArea_Get_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageArea.Get_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.StorageArea_Get_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetAll
blink.mojom.StorageArea_GetAll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageArea.GetAll_Params',
      packedSize: 16,
      fields: [
        { name: 'new_observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.StorageArea_GetAll_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.KeyValueSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.StorageAreaPtr = blink.mojom.StorageAreaRemote;
blink.mojom.StorageAreaRequest = blink.mojom.StorageAreaPendingReceiver;

