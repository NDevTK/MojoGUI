// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_transfer_token.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileSystemAccessTransferToken
blink.mojom.mojom.FileSystemAccessTransferToken = {};

blink.mojom.mojom.FileSystemAccessTransferTokenPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.FileSystemAccessTransferTokenRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessTransferToken';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.FileSystemAccessTransferTokenPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.FileSystemAccessTransferTokenRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.FileSystemAccessTransferTokenRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getInternalID() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.FileSystemAccessTransferToken_GetInternalID_ParamsSpec,
      blink.mojom.mojom.FileSystemAccessTransferToken_GetInternalID_ResponseParamsSpec,
      []);
  }

  clone(token_clone) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.FileSystemAccessTransferToken_Clone_ParamsSpec,
      null,
      [token_clone]);
  }

};

blink.mojom.mojom.FileSystemAccessTransferToken.getRemote = function() {
  let remote = new blink.mojom.mojom.FileSystemAccessTransferTokenRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessTransferToken',
    'context');
  return remote.$;
};

// ParamsSpec for GetInternalID
blink.mojom.mojom.FileSystemAccessTransferToken_GetInternalID_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessTransferToken.GetInternalID_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.FileSystemAccessTransferToken_GetInternalID_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessTransferToken.GetInternalID_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Clone
blink.mojom.mojom.FileSystemAccessTransferToken_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessTransferToken.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'token_clone', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.FileSystemAccessTransferTokenRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.FileSystemAccessTransferTokenPtr = blink.mojom.mojom.FileSystemAccessTransferTokenRemote;
blink.mojom.mojom.FileSystemAccessTransferTokenRequest = blink.mojom.mojom.FileSystemAccessTransferTokenPendingReceiver;

