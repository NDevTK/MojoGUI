// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/blob_registry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};

blink.mojom.ProgressClient = {};
blink.mojom.ProgressClient.$interfaceName = 'blink.mojom.ProgressClient';
blink.mojom.ProgressClient_OnProgress_ParamsSpec = { $: {} };
blink.mojom.BlobRegistry = {};
blink.mojom.BlobRegistry.$interfaceName = 'blink.mojom.BlobRegistry';
blink.mojom.BlobRegistry_Register_ParamsSpec = { $: {} };
blink.mojom.BlobRegistry_Register_ResponseParamsSpec = { $: {} };
blink.mojom.BlobRegistry_RegisterFromStream_ParamsSpec = { $: {} };
blink.mojom.BlobRegistry_RegisterFromStream_ResponseParamsSpec = { $: {} };

// Interface: ProgressClient
mojo.internal.Struct(
    blink.mojom.ProgressClient_OnProgress_ParamsSpec, 'blink.mojom.ProgressClient_OnProgress_Params', [
      mojo.internal.StructField('delta', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ProgressClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ProgressClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ProgressClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ProgressClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.ProgressClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ProgressClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProgress(delta) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ProgressClient_OnProgress_ParamsSpec,
      null,
      [delta]);
  }

};

blink.mojom.ProgressClient.getRemote = function() {
  let remote = new blink.mojom.ProgressClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ProgressClient',
    'context');
  return remote.$;
};

blink.mojom.ProgressClientPtr = blink.mojom.ProgressClientRemote;
blink.mojom.ProgressClientRequest = blink.mojom.ProgressClientPendingReceiver;


// Interface: BlobRegistry
mojo.internal.Struct(
    blink.mojom.BlobRegistry_Register_ParamsSpec, 'blink.mojom.BlobRegistry_Register_Params', [
      mojo.internal.StructField('blob', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.BlobRemote), null, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content_disposition', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('elements', 32, 0, mojo.internal.Array(blink.mojom.DataElementSpec, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.BlobRegistry_Register_ResponseParamsSpec, 'blink.mojom.BlobRegistry_Register_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BlobRegistry_RegisterFromStream_ParamsSpec, 'blink.mojom.BlobRegistry_RegisterFromStream_Params', [
      mojo.internal.StructField('content_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content_disposition', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('length_hint', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('data', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('progress_client', 32, 0, mojo.internal.AssociatedInterfaceProxy(blink.mojom.ProgressClientRemote), null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.BlobRegistry_RegisterFromStream_ResponseParamsSpec, 'blink.mojom.BlobRegistry_RegisterFromStream_ResponseParams', [
      mojo.internal.StructField('blob', 0, 0, blink.mojom.SerializedBlobSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.BlobRegistryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BlobRegistryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BlobRegistry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BlobRegistryPendingReceiver,
      handle);
    this.$ = new blink.mojom.BlobRegistryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BlobRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  register(blob, uuid, content_type, content_disposition, elements) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BlobRegistry_Register_ParamsSpec,
      blink.mojom.BlobRegistry_Register_ResponseParamsSpec,
      [blob, uuid, content_type, content_disposition, elements]);
  }

  registerFromStream(content_type, content_disposition, length_hint, data, progress_client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BlobRegistry_RegisterFromStream_ParamsSpec,
      blink.mojom.BlobRegistry_RegisterFromStream_ResponseParamsSpec,
      [content_type, content_disposition, length_hint, data, progress_client]);
  }

};

blink.mojom.BlobRegistry.getRemote = function() {
  let remote = new blink.mojom.BlobRegistryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BlobRegistry',
    'context');
  return remote.$;
};

blink.mojom.BlobRegistryPtr = blink.mojom.BlobRegistryRemote;
blink.mojom.BlobRegistryRequest = blink.mojom.BlobRegistryPendingReceiver;

