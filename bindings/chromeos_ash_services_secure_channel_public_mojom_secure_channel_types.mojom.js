// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/secure_channel/public/mojom/secure_channel_types.mojom
// Module: ash.secure_channel.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.secure_channel = ash.secure_channel || {};
ash.secure_channel.mojom = ash.secure_channel.mojom || {};


// Enum: FileTransferStatus
ash.secure_channel.mojom.FileTransferStatus = {
  kSuccess: 0,
  kFailure: 1,
  kInProgress: 2,
  kCanceled: 3,
};

// Interface: FilePayloadListener
ash.secure_channel.mojom.FilePayloadListener = {};

ash.secure_channel.mojom.FilePayloadListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.mojom.FilePayloadListenerRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.FilePayloadListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.mojom.FilePayloadListenerPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.mojom.FilePayloadListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.mojom.FilePayloadListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFileTransferUpdate(update) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.mojom.FilePayloadListener_OnFileTransferUpdate_ParamsSpec.$,
      null,
      [update]);
  }

};

ash.secure_channel.mojom.FilePayloadListener.getRemote = function() {
  let remote = new ash.secure_channel.mojom.FilePayloadListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.FilePayloadListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnFileTransferUpdate
ash.secure_channel.mojom.FilePayloadListener_OnFileTransferUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.FilePayloadListener.OnFileTransferUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'update', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.mojom.FilePayloadListenerPtr = ash.secure_channel.mojom.FilePayloadListenerRemote;
ash.secure_channel.mojom.FilePayloadListenerRequest = ash.secure_channel.mojom.FilePayloadListenerPendingReceiver;

