// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/file_system_access_context.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var blink = blink || {};

storage.mojom.FileSystemAccessContext = {};
storage.mojom.FileSystemAccessContext.$interfaceName = 'storage.mojom.FileSystemAccessContext';
storage.mojom.FileSystemAccessContext_SerializeHandle_ParamsSpec = { $: {} };
storage.mojom.FileSystemAccessContext_SerializeHandle_ResponseParamsSpec = { $: {} };
storage.mojom.FileSystemAccessContext_DeserializeHandle_ParamsSpec = { $: {} };
storage.mojom.FileSystemAccessContext_Clone_ParamsSpec = { $: {} };

// Interface: FileSystemAccessContext
mojo.internal.Struct(
    storage.mojom.FileSystemAccessContext_SerializeHandle_ParamsSpec, 'storage.mojom.FileSystemAccessContext_SerializeHandle_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.FileSystemAccessContext_SerializeHandle_ResponseParamsSpec, 'storage.mojom.FileSystemAccessContext_SerializeHandle_ResponseParams', [
      mojo.internal.StructField('bits', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.FileSystemAccessContext_DeserializeHandle_ParamsSpec, 'storage.mojom.FileSystemAccessContext_DeserializeHandle_Params', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bits', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('token', 16, 0, mojo.internal.InterfaceRequest(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.FileSystemAccessContext_Clone_ParamsSpec, 'storage.mojom.FileSystemAccessContext_Clone_Params', [
      mojo.internal.StructField('receiever', 0, 0, mojo.internal.InterfaceRequest(storage.mojom.FileSystemAccessContextRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

storage.mojom.FileSystemAccessContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.FileSystemAccessContextRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.FileSystemAccessContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.FileSystemAccessContextPendingReceiver,
      handle);
    this.$ = new storage.mojom.FileSystemAccessContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.FileSystemAccessContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  serializeHandle(token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.FileSystemAccessContext_SerializeHandle_ParamsSpec,
      storage.mojom.FileSystemAccessContext_SerializeHandle_ResponseParamsSpec,
      [token],
      false);
  }

  deserializeHandle(storage_key, bits, token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.FileSystemAccessContext_DeserializeHandle_ParamsSpec,
      null,
      [storage_key, bits, token],
      false);
  }

  clone(receiever) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.FileSystemAccessContext_Clone_ParamsSpec,
      null,
      [receiever],
      false);
  }

};

storage.mojom.FileSystemAccessContext.getRemote = function() {
  let remote = new storage.mojom.FileSystemAccessContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.FileSystemAccessContext',
    'context');
  return remote.$;
};

storage.mojom.FileSystemAccessContextReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = storage.mojom.FileSystemAccessContext_SerializeHandle_ParamsSpec.$.decode(message.payload);
          const result = this.impl.serializeHandle(params.token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, storage.mojom.FileSystemAccessContext_SerializeHandle_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = storage.mojom.FileSystemAccessContext_DeserializeHandle_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deserializeHandle(params.storage_key, params.bits, params.token);
          break;
        }
        case 2: {
          const params = storage.mojom.FileSystemAccessContext_Clone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clone(params.receiever);
          break;
        }
      }
    });
  }
};

storage.mojom.FileSystemAccessContextReceiver = storage.mojom.FileSystemAccessContextReceiver;

storage.mojom.FileSystemAccessContextPtr = storage.mojom.FileSystemAccessContextRemote;
storage.mojom.FileSystemAccessContextRequest = storage.mojom.FileSystemAccessContextPendingReceiver;

