// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_data_transfer_token.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.FileSystemAccessDataTransferToken = {};
blink.mojom.FileSystemAccessDataTransferToken.$interfaceName = 'blink.mojom.FileSystemAccessDataTransferToken';
blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDataTransferToken_Clone_ParamsSpec = { $: {} };

// Interface: FileSystemAccessDataTransferToken
mojo.internal.Struct(
    blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ParamsSpec, 'blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ResponseParams', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDataTransferToken_Clone_ParamsSpec, 'blink.mojom.FileSystemAccessDataTransferToken_Clone_Params', [
      mojo.internal.StructField('token_clone', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.FileSystemAccessDataTransferTokenSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.FileSystemAccessDataTransferTokenPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessDataTransferTokenRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessDataTransferToken';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessDataTransferTokenPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessDataTransferTokenRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessDataTransferTokenRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getInternalId() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ParamsSpec,
      blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ResponseParamsSpec,
      [],
      false);
  }

  clone(token_clone) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemAccessDataTransferToken_Clone_ParamsSpec,
      null,
      [token_clone],
      false);
  }

};

blink.mojom.FileSystemAccessDataTransferToken.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessDataTransferTokenRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessDataTransferToken',
    'context');
  return remote.$;
};

blink.mojom.FileSystemAccessDataTransferTokenReceiver = class {
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
          const params = blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getInternalId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = blink.mojom.FileSystemAccessDataTransferToken_Clone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clone(params.token_clone);
          break;
        }
      }
    });
  }
};

blink.mojom.FileSystemAccessDataTransferTokenReceiver = blink.mojom.FileSystemAccessDataTransferTokenReceiver;

blink.mojom.FileSystemAccessDataTransferTokenPtr = blink.mojom.FileSystemAccessDataTransferTokenRemote;
blink.mojom.FileSystemAccessDataTransferTokenRequest = blink.mojom.FileSystemAccessDataTransferTokenPendingReceiver;

