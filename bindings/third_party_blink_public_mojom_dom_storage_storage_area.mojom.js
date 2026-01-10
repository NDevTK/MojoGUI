// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/dom_storage/storage_area.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.KeyValueSpec = { $: {} };
blink.mojom.StorageAreaObserver = {};
blink.mojom.StorageAreaObserver.$interfaceName = 'blink.mojom.StorageAreaObserver';
blink.mojom.StorageAreaObserver_KeyChanged_ParamsSpec = { $: {} };
blink.mojom.StorageAreaObserver_KeyChangeFailed_ParamsSpec = { $: {} };
blink.mojom.StorageAreaObserver_KeyDeleted_ParamsSpec = { $: {} };
blink.mojom.StorageAreaObserver_AllDeleted_ParamsSpec = { $: {} };
blink.mojom.StorageAreaObserver_ShouldSendOldValueOnMutations_ParamsSpec = { $: {} };
blink.mojom.StorageArea = {};
blink.mojom.StorageArea.$interfaceName = 'blink.mojom.StorageArea';
blink.mojom.StorageArea_AddObserver_ParamsSpec = { $: {} };
blink.mojom.StorageArea_Put_ParamsSpec = { $: {} };
blink.mojom.StorageArea_Put_ResponseParamsSpec = { $: {} };
blink.mojom.StorageArea_Delete_ParamsSpec = { $: {} };
blink.mojom.StorageArea_Delete_ResponseParamsSpec = { $: {} };
blink.mojom.StorageArea_DeleteAll_ParamsSpec = { $: {} };
blink.mojom.StorageArea_DeleteAll_ResponseParamsSpec = { $: {} };
blink.mojom.StorageArea_Get_ParamsSpec = { $: {} };
blink.mojom.StorageArea_Get_ResponseParamsSpec = { $: {} };
blink.mojom.StorageArea_GetAll_ParamsSpec = { $: {} };
blink.mojom.StorageArea_GetAll_ResponseParamsSpec = { $: {} };

blink.mojom.kPerStorageAreaQuota = 10485760;

blink.mojom.kPerStorageAreaOverQuotaAllowance = 102400;

// Struct: KeyValue
mojo.internal.Struct(
    blink.mojom.KeyValueSpec, 'blink.mojom.KeyValue', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: StorageAreaObserver
mojo.internal.Struct(
    blink.mojom.StorageAreaObserver_KeyChanged_ParamsSpec, 'blink.mojom.StorageAreaObserver_KeyChanged_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('new_value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('old_value', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('source', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.StorageAreaObserver_KeyChangeFailed_ParamsSpec, 'blink.mojom.StorageAreaObserver_KeyChangeFailed_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.StorageAreaObserver_KeyDeleted_ParamsSpec, 'blink.mojom.StorageAreaObserver_KeyDeleted_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('old_value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('source', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.StorageAreaObserver_AllDeleted_ParamsSpec, 'blink.mojom.StorageAreaObserver_AllDeleted_Params', [
      mojo.internal.StructField('was_nonempty', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.StorageAreaObserver_ShouldSendOldValueOnMutations_ParamsSpec, 'blink.mojom.StorageAreaObserver_ShouldSendOldValueOnMutations_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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

blink.mojom.StorageAreaObserverPtr = blink.mojom.StorageAreaObserverRemote;
blink.mojom.StorageAreaObserverRequest = blink.mojom.StorageAreaObserverPendingReceiver;


// Interface: StorageArea
mojo.internal.Struct(
    blink.mojom.StorageArea_AddObserver_ParamsSpec, 'blink.mojom.StorageArea_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.StorageAreaObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_Put_ParamsSpec, 'blink.mojom.StorageArea_Put_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('client_old_value', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('source', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_Put_ResponseParamsSpec, 'blink.mojom.StorageArea_Put_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_Delete_ParamsSpec, 'blink.mojom.StorageArea_Delete_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('client_old_value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('source', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_Delete_ResponseParamsSpec, 'blink.mojom.StorageArea_Delete_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_DeleteAll_ParamsSpec, 'blink.mojom.StorageArea_DeleteAll_Params', [
      mojo.internal.StructField('source', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_observer', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.StorageAreaObserverRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_DeleteAll_ResponseParamsSpec, 'blink.mojom.StorageArea_DeleteAll_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_Get_ParamsSpec, 'blink.mojom.StorageArea_Get_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_Get_ResponseParamsSpec, 'blink.mojom.StorageArea_Get_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_GetAll_ParamsSpec, 'blink.mojom.StorageArea_GetAll_Params', [
      mojo.internal.StructField('new_observer', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.StorageAreaObserverRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_GetAll_ResponseParamsSpec, 'blink.mojom.StorageArea_GetAll_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(blink.mojom.KeyValueSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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

blink.mojom.StorageAreaPtr = blink.mojom.StorageAreaRemote;
blink.mojom.StorageAreaRequest = blink.mojom.StorageAreaPendingReceiver;

