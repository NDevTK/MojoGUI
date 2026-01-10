// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_transfer_token.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.FileSystemAccessTransferToken = {};
blink.mojom.FileSystemAccessTransferToken.$interfaceName = 'blink.mojom.FileSystemAccessTransferToken';
blink.mojom.FileSystemAccessTransferToken_GetInternalID_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessTransferToken_GetInternalID_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessTransferToken_Clone_ParamsSpec = { $: {} };

// Interface: FileSystemAccessTransferToken
mojo.internal.Struct(
    blink.mojom.FileSystemAccessTransferToken_GetInternalID_ParamsSpec, 'blink.mojom.FileSystemAccessTransferToken_GetInternalID_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessTransferToken_GetInternalID_ResponseParamsSpec, 'blink.mojom.FileSystemAccessTransferToken_GetInternalID_ResponseParams', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessTransferToken_Clone_ParamsSpec, 'blink.mojom.FileSystemAccessTransferToken_Clone_Params', [
      mojo.internal.StructField('token_clone', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      blink.mojom.FileSystemAccessTransferToken_GetInternalID_ParamsSpec,
      blink.mojom.FileSystemAccessTransferToken_GetInternalID_ResponseParamsSpec,
      []);
  }

  clone(token_clone) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemAccessTransferToken_Clone_ParamsSpec,
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

blink.mojom.FileSystemAccessTransferTokenPtr = blink.mojom.FileSystemAccessTransferTokenRemote;
blink.mojom.FileSystemAccessTransferTokenRequest = blink.mojom.FileSystemAccessTransferTokenPendingReceiver;

