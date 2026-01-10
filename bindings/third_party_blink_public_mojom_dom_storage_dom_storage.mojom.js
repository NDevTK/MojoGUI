// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/dom_storage/dom_storage.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};

blink.mojom.DomStorageProvider = {};
blink.mojom.DomStorageProvider.$interfaceName = 'blink.mojom.DomStorageProvider';
blink.mojom.DomStorageProvider_BindDomStorage_ParamsSpec = { $: {} };
blink.mojom.DomStorage = {};
blink.mojom.DomStorage.$interfaceName = 'blink.mojom.DomStorage';
blink.mojom.DomStorage_OpenLocalStorage_ParamsSpec = { $: {} };
blink.mojom.DomStorage_BindSessionStorageNamespace_ParamsSpec = { $: {} };
blink.mojom.DomStorage_BindSessionStorageArea_ParamsSpec = { $: {} };
blink.mojom.DomStorageClient = {};
blink.mojom.DomStorageClient.$interfaceName = 'blink.mojom.DomStorageClient';
blink.mojom.DomStorageClient_ResetSessionStorageConnections_ParamsSpec = { $: {} };
blink.mojom.DomStorageClient_ResetLocalStorageConnections_ParamsSpec = { $: {} };

// Interface: DomStorageProvider
mojo.internal.Struct(
    blink.mojom.DomStorageProvider_BindDomStorage_ParamsSpec, 'blink.mojom.DomStorageProvider_BindDomStorage_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.DomStorageRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.DomStorageClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.DomStorageProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DomStorageProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DomStorageProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DomStorageProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.DomStorageProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DomStorageProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindDomStorage(receiver, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DomStorageProvider_BindDomStorage_ParamsSpec,
      null,
      [receiver, client]);
  }

};

blink.mojom.DomStorageProvider.getRemote = function() {
  let remote = new blink.mojom.DomStorageProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DomStorageProvider',
    'context');
  return remote.$;
};

blink.mojom.DomStorageProviderPtr = blink.mojom.DomStorageProviderRemote;
blink.mojom.DomStorageProviderRequest = blink.mojom.DomStorageProviderPendingReceiver;


// Interface: DomStorage
mojo.internal.Struct(
    blink.mojom.DomStorage_OpenLocalStorage_ParamsSpec, 'blink.mojom.DomStorage_OpenLocalStorage_Params', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec, null, false, 0, undefined),
      mojo.internal.StructField('local_frame_token', 8, 0, blink.mojom.LocalFrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('area', 16, 0, mojo.internal.InterfaceRequest(blink.mojom.StorageAreaRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.DomStorage_BindSessionStorageNamespace_ParamsSpec, 'blink.mojom.DomStorage_BindSessionStorageNamespace_Params', [
      mojo.internal.StructField('namespace_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.SessionStorageNamespaceRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.DomStorage_BindSessionStorageArea_ParamsSpec, 'blink.mojom.DomStorage_BindSessionStorageArea_Params', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec, null, false, 0, undefined),
      mojo.internal.StructField('local_frame_token', 8, 0, blink.mojom.LocalFrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('namespace_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_namespace', 24, 0, mojo.internal.InterfaceRequest(blink.mojom.StorageAreaRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

blink.mojom.DomStoragePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DomStorageRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DomStorage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DomStoragePendingReceiver,
      handle);
    this.$ = new blink.mojom.DomStorageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DomStorageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openLocalStorage(storage_key, local_frame_token, area) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DomStorage_OpenLocalStorage_ParamsSpec,
      null,
      [storage_key, local_frame_token, area]);
  }

  bindSessionStorageNamespace(namespace_id, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DomStorage_BindSessionStorageNamespace_ParamsSpec,
      null,
      [namespace_id, receiver]);
  }

  bindSessionStorageArea(storage_key, local_frame_token, namespace_id, session_namespace) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.DomStorage_BindSessionStorageArea_ParamsSpec,
      null,
      [storage_key, local_frame_token, namespace_id, session_namespace]);
  }

};

blink.mojom.DomStorage.getRemote = function() {
  let remote = new blink.mojom.DomStorageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DomStorage',
    'context');
  return remote.$;
};

blink.mojom.DomStoragePtr = blink.mojom.DomStorageRemote;
blink.mojom.DomStorageRequest = blink.mojom.DomStoragePendingReceiver;


// Interface: DomStorageClient
mojo.internal.Struct(
    blink.mojom.DomStorageClient_ResetSessionStorageConnections_ParamsSpec, 'blink.mojom.DomStorageClient_ResetSessionStorageConnections_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.DomStorageClient_ResetLocalStorageConnections_ParamsSpec, 'blink.mojom.DomStorageClient_ResetLocalStorageConnections_Params', [
    ],
    [[0, 8]]);

blink.mojom.DomStorageClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DomStorageClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DomStorageClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DomStorageClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.DomStorageClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DomStorageClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  resetSessionStorageConnections() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DomStorageClient_ResetSessionStorageConnections_ParamsSpec,
      null,
      []);
  }

  resetLocalStorageConnections() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DomStorageClient_ResetLocalStorageConnections_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.DomStorageClient.getRemote = function() {
  let remote = new blink.mojom.DomStorageClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DomStorageClient',
    'context');
  return remote.$;
};

blink.mojom.DomStorageClientPtr = blink.mojom.DomStorageClientRemote;
blink.mojom.DomStorageClientRequest = blink.mojom.DomStorageClientPendingReceiver;

