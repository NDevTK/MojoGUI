// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/blob_url_store.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: BlobURLStore
blink.mojom.BlobURLStore = {};

blink.mojom.BlobURLStorePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BlobURLStoreRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BlobURLStore';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BlobURLStorePendingReceiver,
      handle);
    this.$ = new blink.mojom.BlobURLStoreRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BlobURLStoreRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  register(blob, url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BlobURLStore_Register_ParamsSpec,
      null,
      null,
      [blob, url],
      undefined,
      mojo.internal.kMessageFlagIsSync
    );
  }

  revoke(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BlobURLStore_Revoke_ParamsSpec,
      null,
      null,
      [url],
      undefined,
      undefined
    );
  }

  resolveAsURLLoaderFactory(url, factory) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.BlobURLStore_ResolveAsURLLoaderFactory_ParamsSpec,
      null,
      null,
      [url, factory],
      undefined,
      undefined
    );
  }

  resolveAsBlobURLToken(url, token, is_top_level_navigation) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.BlobURLStore_ResolveAsBlobURLToken_ParamsSpec,
      null,
      null,
      [url, token, is_top_level_navigation],
      undefined,
      undefined
    );
  }

};

blink.mojom.BlobURLStore.getRemote = function() {
  let remote = new blink.mojom.BlobURLStoreRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BlobURLStore',
    'context');
  return remote.$;
};

// ParamsSpec for Register
blink.mojom.BlobURLStore_Register_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlobURLStore.Register_Params',
      packedSize: 24,
      fields: [
        { name: 'blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Revoke
blink.mojom.BlobURLStore_Revoke_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlobURLStore.Revoke_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ResolveAsURLLoaderFactory
blink.mojom.BlobURLStore_ResolveAsURLLoaderFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlobURLStore.ResolveAsURLLoaderFactory_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ResolveAsBlobURLToken
blink.mojom.BlobURLStore_ResolveAsBlobURLToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlobURLStore.ResolveAsBlobURLToken_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'is_top_level_navigation', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
blink.mojom.BlobURLStorePtr = blink.mojom.BlobURLStoreRemote;
blink.mojom.BlobURLStoreRequest = blink.mojom.BlobURLStorePendingReceiver;


// Interface: BlobURLToken
blink.mojom.BlobURLToken = {};

blink.mojom.BlobURLTokenPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BlobURLTokenRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BlobURLToken';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BlobURLTokenPendingReceiver,
      handle);
    this.$ = new blink.mojom.BlobURLTokenRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BlobURLTokenRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  clone(token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BlobURLToken_Clone_ParamsSpec,
      null,
      null,
      [token],
      undefined,
      undefined
    );
  }

  getToken() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BlobURLToken_GetToken_ParamsSpec,
      blink.mojom.BlobURLToken_GetToken_ResponseParamsSpec,
      blink.mojom.BlobURLToken_GetToken_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

};

blink.mojom.BlobURLToken.getRemote = function() {
  let remote = new blink.mojom.BlobURLTokenRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BlobURLToken',
    'context');
  return remote.$;
};

// ParamsSpec for Clone
blink.mojom.BlobURLToken_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlobURLToken.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetToken
blink.mojom.BlobURLToken_GetToken_ParamsSpec = {
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

blink.mojom.BlobURLToken_GetToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlobURLToken.GetToken_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.BlobURLTokenPtr = blink.mojom.BlobURLTokenRemote;
blink.mojom.BlobURLTokenRequest = blink.mojom.BlobURLTokenPendingReceiver;

