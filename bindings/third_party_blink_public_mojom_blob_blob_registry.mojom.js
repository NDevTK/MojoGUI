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


// Interface: ProgressClient
blink.mojom.mojom.ProgressClient = {};

blink.mojom.mojom.ProgressClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ProgressClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ProgressClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ProgressClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ProgressClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ProgressClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProgress(delta) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ProgressClient_OnProgress_ParamsSpec,
      null,
      [delta]);
  }

};

blink.mojom.mojom.ProgressClient.getRemote = function() {
  let remote = new blink.mojom.mojom.ProgressClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ProgressClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnProgress
blink.mojom.mojom.ProgressClient_OnProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ProgressClient.OnProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'delta', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.ProgressClientPtr = blink.mojom.mojom.ProgressClientRemote;
blink.mojom.mojom.ProgressClientRequest = blink.mojom.mojom.ProgressClientPendingReceiver;


// Interface: BlobRegistry
blink.mojom.mojom.BlobRegistry = {};

blink.mojom.mojom.BlobRegistryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.BlobRegistryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BlobRegistry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.BlobRegistryPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.BlobRegistryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.BlobRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  register(blob, uuid, content_type, content_disposition, elements) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.BlobRegistry_Register_ParamsSpec,
      null,
      [blob, uuid, content_type, content_disposition, elements]);
  }

  registerFromStream(content_type, content_disposition, length_hint, data, progress_client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.BlobRegistry_RegisterFromStream_ParamsSpec,
      blink.mojom.mojom.BlobRegistry_RegisterFromStream_ResponseParamsSpec,
      [content_type, content_disposition, length_hint, data, progress_client]);
  }

};

blink.mojom.mojom.BlobRegistry.getRemote = function() {
  let remote = new blink.mojom.mojom.BlobRegistryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BlobRegistry',
    'context');
  return remote.$;
};

// ParamsSpec for Register
blink.mojom.mojom.BlobRegistry_Register_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlobRegistry.Register_Params',
      packedSize: 48,
      fields: [
        { name: 'blob', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'content_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'content_disposition', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'elements', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.DataElementSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for RegisterFromStream
blink.mojom.mojom.BlobRegistry_RegisterFromStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlobRegistry.RegisterFromStream_Params',
      packedSize: 48,
      fields: [
        { name: 'content_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'content_disposition', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'length_hint', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'progress_client', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

blink.mojom.mojom.BlobRegistry_RegisterFromStream_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlobRegistry.RegisterFromStream_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'blob', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SerializedBlobSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.BlobRegistryPtr = blink.mojom.mojom.BlobRegistryRemote;
blink.mojom.mojom.BlobRegistryRequest = blink.mojom.mojom.BlobRegistryPendingReceiver;

