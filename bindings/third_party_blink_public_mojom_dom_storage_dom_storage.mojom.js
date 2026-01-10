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


// Interface: DomStorageProvider
blink.mojom.mojom.DomStorageProvider = {};

blink.mojom.mojom.DomStorageProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.DomStorageProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DomStorageProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.DomStorageProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.DomStorageProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.DomStorageProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindDomStorage(receiver, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.DomStorageProvider_BindDomStorage_ParamsSpec,
      null,
      [receiver, client]);
  }

};

blink.mojom.mojom.DomStorageProvider.getRemote = function() {
  let remote = new blink.mojom.mojom.DomStorageProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DomStorageProvider',
    'context');
  return remote.$;
};

// ParamsSpec for BindDomStorage
blink.mojom.mojom.DomStorageProvider_BindDomStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DomStorageProvider.BindDomStorage_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.DomStorageRemote), nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.DomStorageClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.DomStorageProviderPtr = blink.mojom.mojom.DomStorageProviderRemote;
blink.mojom.mojom.DomStorageProviderRequest = blink.mojom.mojom.DomStorageProviderPendingReceiver;


// Interface: DomStorage
blink.mojom.mojom.DomStorage = {};

blink.mojom.mojom.DomStoragePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.DomStorageRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DomStorage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.DomStoragePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.DomStorageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.DomStorageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openLocalStorage(storage_key, local_frame_token, area) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.DomStorage_OpenLocalStorage_ParamsSpec,
      null,
      [storage_key, local_frame_token, area]);
  }

  bindSessionStorageNamespace(namespace_id, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.DomStorage_BindSessionStorageNamespace_ParamsSpec,
      null,
      [namespace_id, receiver]);
  }

  bindSessionStorageArea(storage_key, local_frame_token, namespace_id, session_namespace) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.DomStorage_BindSessionStorageArea_ParamsSpec,
      null,
      [storage_key, local_frame_token, namespace_id, session_namespace]);
  }

};

blink.mojom.mojom.DomStorage.getRemote = function() {
  let remote = new blink.mojom.mojom.DomStorageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DomStorage',
    'context');
  return remote.$;
};

// ParamsSpec for OpenLocalStorage
blink.mojom.mojom.DomStorage_OpenLocalStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DomStorage.OpenLocalStorage_Params',
      packedSize: 32,
      fields: [
        { name: 'storage_key', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false, minVersion: 0 },
        { name: 'local_frame_token', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'area', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.StorageAreaRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for BindSessionStorageNamespace
blink.mojom.mojom.DomStorage_BindSessionStorageNamespace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DomStorage.BindSessionStorageNamespace_Params',
      packedSize: 24,
      fields: [
        { name: 'namespace_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.SessionStorageNamespaceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for BindSessionStorageArea
blink.mojom.mojom.DomStorage_BindSessionStorageArea_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DomStorage.BindSessionStorageArea_Params',
      packedSize: 40,
      fields: [
        { name: 'storage_key', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false, minVersion: 0 },
        { name: 'local_frame_token', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'namespace_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'session_namespace', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.StorageAreaRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.DomStoragePtr = blink.mojom.mojom.DomStorageRemote;
blink.mojom.mojom.DomStorageRequest = blink.mojom.mojom.DomStoragePendingReceiver;


// Interface: DomStorageClient
blink.mojom.mojom.DomStorageClient = {};

blink.mojom.mojom.DomStorageClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.DomStorageClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DomStorageClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.DomStorageClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.DomStorageClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.DomStorageClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  resetSessionStorageConnections() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.DomStorageClient_ResetSessionStorageConnections_ParamsSpec,
      null,
      []);
  }

  resetLocalStorageConnections() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.DomStorageClient_ResetLocalStorageConnections_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.DomStorageClient.getRemote = function() {
  let remote = new blink.mojom.mojom.DomStorageClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DomStorageClient',
    'context');
  return remote.$;
};

// ParamsSpec for ResetSessionStorageConnections
blink.mojom.mojom.DomStorageClient_ResetSessionStorageConnections_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DomStorageClient.ResetSessionStorageConnections_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ResetLocalStorageConnections
blink.mojom.mojom.DomStorageClient_ResetLocalStorageConnections_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DomStorageClient.ResetLocalStorageConnections_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.DomStorageClientPtr = blink.mojom.mojom.DomStorageClientRemote;
blink.mojom.mojom.DomStorageClientRequest = blink.mojom.mojom.DomStorageClientPendingReceiver;

