// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/file_backed_blob_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileBackedBlobFactory
blink.mojom.FileBackedBlobFactory = {};

blink.mojom.FileBackedBlobFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileBackedBlobFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileBackedBlobFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileBackedBlobFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileBackedBlobFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileBackedBlobFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerBlob(blob, uuid, content_type, file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileBackedBlobFactory_RegisterBlob_ParamsSpec,
      null,
      [blob, uuid, content_type, file]);
  }

  registerBlobSync(blob, uuid, content_type, file) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileBackedBlobFactory_RegisterBlobSync_ParamsSpec,
      null,
      [blob, uuid, content_type, file]);
  }

};

blink.mojom.FileBackedBlobFactory.getRemote = function() {
  let remote = new blink.mojom.FileBackedBlobFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileBackedBlobFactory',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterBlob
blink.mojom.FileBackedBlobFactory_RegisterBlob_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileBackedBlobFactory.RegisterBlob_Params',
      packedSize: 40,
      fields: [
        { name: 'blob', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'uuid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'content_type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'file', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.DataElementFileSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterBlobSync
blink.mojom.FileBackedBlobFactory_RegisterBlobSync_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileBackedBlobFactory.RegisterBlobSync_Params',
      packedSize: 40,
      fields: [
        { name: 'blob', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'uuid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'content_type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'file', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.DataElementFileSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FileBackedBlobFactoryPtr = blink.mojom.FileBackedBlobFactoryRemote;
blink.mojom.FileBackedBlobFactoryRequest = blink.mojom.FileBackedBlobFactoryPendingReceiver;

