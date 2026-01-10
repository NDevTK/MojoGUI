// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/blob_url_store.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var blink = blink || {};
var url = url || {};

blink.mojom.BlobURLStore = {};
blink.mojom.BlobURLStore.$interfaceName = 'blink.mojom.BlobURLStore';
blink.mojom.BlobURLStore_Register_ParamsSpec = { $: {} };
blink.mojom.BlobURLStore_Register_ResponseParamsSpec = { $: {} };
blink.mojom.BlobURLStore_Revoke_ParamsSpec = { $: {} };
blink.mojom.BlobURLStore_ResolveAsURLLoaderFactory_ParamsSpec = { $: {} };
blink.mojom.BlobURLStore_ResolveAsBlobURLToken_ParamsSpec = { $: {} };
blink.mojom.BlobURLToken = {};
blink.mojom.BlobURLToken.$interfaceName = 'blink.mojom.BlobURLToken';
blink.mojom.BlobURLToken_Clone_ParamsSpec = { $: {} };
blink.mojom.BlobURLToken_GetToken_ParamsSpec = { $: {} };
blink.mojom.BlobURLToken_GetToken_ResponseParamsSpec = { $: {} };

// Interface: BlobURLStore
mojo.internal.Struct(
    blink.mojom.BlobURLStore_Register_ParamsSpec, 'blink.mojom.BlobURLStore_Register_Params', [
      mojo.internal.StructField('blob', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobRemote), null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BlobURLStore_Register_ResponseParamsSpec, 'blink.mojom.BlobURLStore_Register_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BlobURLStore_Revoke_ParamsSpec, 'blink.mojom.BlobURLStore_Revoke_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BlobURLStore_ResolveAsURLLoaderFactory_ParamsSpec, 'blink.mojom.BlobURLStore_ResolveAsURLLoaderFactory_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('factory', 8, 0, mojo.internal.InterfaceRequest(network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BlobURLStore_ResolveAsBlobURLToken_ParamsSpec, 'blink.mojom.BlobURLStore_ResolveAsBlobURLToken_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('token', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.BlobURLTokenRemote), null, false, 0, undefined),
      mojo.internal.StructField('is_top_level_navigation', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

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
      blink.mojom.BlobURLStore_Register_ResponseParamsSpec,
      [blob, url],
      false);
  }

  revoke(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BlobURLStore_Revoke_ParamsSpec,
      null,
      [url],
      false);
  }

  resolveAsURLLoaderFactory(url, factory) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.BlobURLStore_ResolveAsURLLoaderFactory_ParamsSpec,
      null,
      [url, factory],
      false);
  }

  resolveAsBlobURLToken(url, token, is_top_level_navigation) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.BlobURLStore_ResolveAsBlobURLToken_ParamsSpec,
      null,
      [url, token, is_top_level_navigation],
      false);
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

blink.mojom.BlobURLStorePtr = blink.mojom.BlobURLStoreRemote;
blink.mojom.BlobURLStoreRequest = blink.mojom.BlobURLStorePendingReceiver;


// Interface: BlobURLToken
mojo.internal.Struct(
    blink.mojom.BlobURLToken_Clone_ParamsSpec, 'blink.mojom.BlobURLToken_Clone_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.BlobURLTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BlobURLToken_GetToken_ParamsSpec, 'blink.mojom.BlobURLToken_GetToken_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BlobURLToken_GetToken_ResponseParamsSpec, 'blink.mojom.BlobURLToken_GetToken_ResponseParams', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [token],
      false);
  }

  getToken() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BlobURLToken_GetToken_ParamsSpec,
      blink.mojom.BlobURLToken_GetToken_ResponseParamsSpec,
      [],
      false);
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

blink.mojom.BlobURLTokenPtr = blink.mojom.BlobURLTokenRemote;
blink.mojom.BlobURLTokenRequest = blink.mojom.BlobURLTokenPendingReceiver;

