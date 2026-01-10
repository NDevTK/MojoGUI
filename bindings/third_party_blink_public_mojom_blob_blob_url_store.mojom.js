// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/blob_url_store.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};


// Interface: BlobURLStore
blink.mojom.mojom.BlobURLStore = {};

blink.mojom.mojom.BlobURLStorePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.BlobURLStoreRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BlobURLStore';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.BlobURLStorePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.BlobURLStoreRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.BlobURLStoreRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  register(blob, url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.BlobURLStore_Register_ParamsSpec,
      null,
      [blob, url]);
  }

  revoke(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.BlobURLStore_Revoke_ParamsSpec,
      null,
      [url]);
  }

  resolveAsURLLoaderFactory(url, factory) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.BlobURLStore_ResolveAsURLLoaderFactory_ParamsSpec,
      null,
      [url, factory]);
  }

  resolveAsBlobURLToken(url, token, is_top_level_navigation) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.BlobURLStore_ResolveAsBlobURLToken_ParamsSpec,
      null,
      [url, token, is_top_level_navigation]);
  }

};

blink.mojom.mojom.BlobURLStore.getRemote = function() {
  let remote = new blink.mojom.mojom.BlobURLStoreRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BlobURLStore',
    'context');
  return remote.$;
};

// ParamsSpec for Register
blink.mojom.mojom.BlobURLStore_Register_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlobURLStore.Register_Params',
      packedSize: 24,
      fields: [
        { name: 'blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.BlobRemote), nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Revoke
blink.mojom.mojom.BlobURLStore_Revoke_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlobURLStore.Revoke_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ResolveAsURLLoaderFactory
blink.mojom.mojom.BlobURLStore_ResolveAsURLLoaderFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlobURLStore.ResolveAsURLLoaderFactory_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.URLLoaderFactoryRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ResolveAsBlobURLToken
blink.mojom.mojom.BlobURLStore_ResolveAsBlobURLToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlobURLStore.ResolveAsBlobURLToken_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.BlobURLTokenRemote), nullable: false, minVersion: 0 },
        { name: 'is_top_level_navigation', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.BlobURLStorePtr = blink.mojom.mojom.BlobURLStoreRemote;
blink.mojom.mojom.BlobURLStoreRequest = blink.mojom.mojom.BlobURLStorePendingReceiver;


// Interface: BlobURLToken
blink.mojom.mojom.BlobURLToken = {};

blink.mojom.mojom.BlobURLTokenPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.BlobURLTokenRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BlobURLToken';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.BlobURLTokenPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.BlobURLTokenRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.BlobURLTokenRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  clone(token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.BlobURLToken_Clone_ParamsSpec,
      null,
      [token]);
  }

  getToken() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.BlobURLToken_GetToken_ParamsSpec,
      blink.mojom.mojom.BlobURLToken_GetToken_ResponseParamsSpec,
      []);
  }

};

blink.mojom.mojom.BlobURLToken.getRemote = function() {
  let remote = new blink.mojom.mojom.BlobURLTokenRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BlobURLToken',
    'context');
  return remote.$;
};

// ParamsSpec for Clone
blink.mojom.mojom.BlobURLToken_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlobURLToken.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.BlobURLTokenRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetToken
blink.mojom.mojom.BlobURLToken_GetToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlobURLToken.GetToken_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.BlobURLToken_GetToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlobURLToken.GetToken_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.BlobURLTokenPtr = blink.mojom.mojom.BlobURLTokenRemote;
blink.mojom.mojom.BlobURLTokenRequest = blink.mojom.mojom.BlobURLTokenPendingReceiver;

