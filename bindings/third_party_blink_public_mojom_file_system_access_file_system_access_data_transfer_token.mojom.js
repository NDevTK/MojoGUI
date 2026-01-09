// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_data_transfer_token.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileSystemAccessDataTransferToken
blink.mojom.FileSystemAccessDataTransferToken = {};

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
      blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  clone(token_clone) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemAccessDataTransferToken_Clone_ParamsSpec,
      null,
      null,
      [token_clone],
      undefined,
      undefined
    );
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

// ParamsSpec for GetInternalId
blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDataTransferToken.GetInternalId_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDataTransferToken.GetInternalId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Clone
blink.mojom.FileSystemAccessDataTransferToken_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDataTransferToken.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'token_clone', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.FileSystemAccessDataTransferTokenPtr = blink.mojom.FileSystemAccessDataTransferTokenRemote;
blink.mojom.FileSystemAccessDataTransferTokenRequest = blink.mojom.FileSystemAccessDataTransferTokenPendingReceiver;

