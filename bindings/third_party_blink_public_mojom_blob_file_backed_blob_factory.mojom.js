// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/file_backed_blob_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};

blink.mojom.FileBackedBlobFactory = {};
blink.mojom.FileBackedBlobFactory.$interfaceName = 'blink.mojom.FileBackedBlobFactory';
blink.mojom.FileBackedBlobFactory_RegisterBlob_ParamsSpec = { $: {} };
blink.mojom.FileBackedBlobFactory_RegisterBlobSync_ParamsSpec = { $: {} };
blink.mojom.FileBackedBlobFactory_RegisterBlobSync_ResponseParamsSpec = { $: {} };

// Interface: FileBackedBlobFactory
mojo.internal.Struct(
    blink.mojom.FileBackedBlobFactory_RegisterBlob_ParamsSpec, 'blink.mojom.FileBackedBlobFactory_RegisterBlob_Params', [
      mojo.internal.StructField('blob', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.BlobRemote), null, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file', 24, 0, blink.mojom.DataElementFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.FileBackedBlobFactory_RegisterBlobSync_ParamsSpec, 'blink.mojom.FileBackedBlobFactory_RegisterBlobSync_Params', [
      mojo.internal.StructField('blob', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.BlobRemote), null, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file', 24, 0, blink.mojom.DataElementFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.FileBackedBlobFactory_RegisterBlobSync_ResponseParamsSpec, 'blink.mojom.FileBackedBlobFactory_RegisterBlobSync_ResponseParams', [
    ],
    [[0, 8]]);

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
      [blob, uuid, content_type, file],
      false);
  }

  registerBlobSync(blob, uuid, content_type, file) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileBackedBlobFactory_RegisterBlobSync_ParamsSpec,
      blink.mojom.FileBackedBlobFactory_RegisterBlobSync_ResponseParamsSpec,
      [blob, uuid, content_type, file],
      false);
  }

};

blink.mojom.FileBackedBlobFactory.getRemote = function() {
  let remote = new blink.mojom.FileBackedBlobFactoryRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.FileBackedBlobFactory',
    'context');
  return remote.$;
};

blink.mojom.FileBackedBlobFactoryPtr = blink.mojom.FileBackedBlobFactoryRemote;
blink.mojom.FileBackedBlobFactoryRequest = blink.mojom.FileBackedBlobFactoryPendingReceiver;

