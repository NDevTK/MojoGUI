// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_transfer_token.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileSystemAccessTransferToken
blink.mojom.FileSystemAccessTransferToken = {};

blink.mojom.FileSystemAccessTransferTokenPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessTransferTokenRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessTransferToken';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessTransferTokenPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessTransferTokenRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessTransferTokenRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getInternalID() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessTransferToken_GetInternalID_ParamsSpec.$,
      blink.mojom.FileSystemAccessTransferToken_GetInternalID_ResponseParamsSpec.$,
      []);
  }

  clone(token_clone) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemAccessTransferToken_Clone_ParamsSpec.$,
      null,
      [token_clone]);
  }

};

blink.mojom.FileSystemAccessTransferToken.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessTransferTokenRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessTransferToken',
    'context');
  return remote.$;
};

// ParamsSpec for GetInternalID
blink.mojom.FileSystemAccessTransferToken_GetInternalID_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessTransferToken.GetInternalID_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessTransferToken_GetInternalID_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessTransferToken.GetInternalID_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Clone
blink.mojom.FileSystemAccessTransferToken_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessTransferToken.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'token_clone', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FileSystemAccessTransferTokenPtr = blink.mojom.FileSystemAccessTransferTokenRemote;
blink.mojom.FileSystemAccessTransferTokenRequest = blink.mojom.FileSystemAccessTransferTokenPendingReceiver;

