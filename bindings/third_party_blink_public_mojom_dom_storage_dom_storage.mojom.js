// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/dom_storage/dom_storage.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: DomStorageProvider
blink.mojom.DomStorageProvider = {};

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

// ParamsSpec for BindDomStorage
blink.mojom.DomStorageProvider_BindDomStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DomStorageProvider.BindDomStorage_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'client', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.DomStorageProviderPtr = blink.mojom.DomStorageProviderRemote;
blink.mojom.DomStorageProviderRequest = blink.mojom.DomStorageProviderPendingReceiver;


// Interface: DomStorage
blink.mojom.DomStorage = {};

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

// ParamsSpec for OpenLocalStorage
blink.mojom.DomStorage_OpenLocalStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DomStorage.OpenLocalStorage_Params',
      packedSize: 32,
      fields: [
        { name: 'storage_key', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false },
        { name: 'local_frame_token', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false },
        { name: 'area', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindSessionStorageNamespace
blink.mojom.DomStorage_BindSessionStorageNamespace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DomStorage.BindSessionStorageNamespace_Params',
      packedSize: 24,
      fields: [
        { name: 'namespace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindSessionStorageArea
blink.mojom.DomStorage_BindSessionStorageArea_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DomStorage.BindSessionStorageArea_Params',
      packedSize: 40,
      fields: [
        { name: 'storage_key', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false },
        { name: 'local_frame_token', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false },
        { name: 'namespace_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'session_namespace', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.DomStoragePtr = blink.mojom.DomStorageRemote;
blink.mojom.DomStorageRequest = blink.mojom.DomStoragePendingReceiver;


// Interface: DomStorageClient
blink.mojom.DomStorageClient = {};

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

// ParamsSpec for ResetSessionStorageConnections
blink.mojom.DomStorageClient_ResetSessionStorageConnections_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DomStorageClient.ResetSessionStorageConnections_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResetLocalStorageConnections
blink.mojom.DomStorageClient_ResetLocalStorageConnections_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DomStorageClient.ResetLocalStorageConnections_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.DomStorageClientPtr = blink.mojom.DomStorageClientRemote;
blink.mojom.DomStorageClientRequest = blink.mojom.DomStorageClientPendingReceiver;

