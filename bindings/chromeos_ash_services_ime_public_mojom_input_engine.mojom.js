// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/input_engine.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};


// Interface: InputChannel
ash.ime.mojom.InputChannel = {};

ash.ime.mojom.InputChannelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.InputChannelRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.InputChannel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.InputChannelPendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.InputChannelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.mojom.InputChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  processMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.ime.mojom.InputChannel_ProcessMessage_ParamsSpec,
      ash.ime.mojom.InputChannel_ProcessMessage_ResponseParamsSpec,
      [message]);
  }

};

ash.ime.mojom.InputChannel.getRemote = function() {
  let remote = new ash.ime.mojom.InputChannelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.InputChannel',
    'context');
  return remote.$;
};

// ParamsSpec for ProcessMessage
ash.ime.mojom.InputChannel_ProcessMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputChannel.ProcessMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.ime.mojom.InputChannel_ProcessMessage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputChannel.ProcessMessage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.ime.mojom.InputChannelPtr = ash.ime.mojom.InputChannelRemote;
ash.ime.mojom.InputChannelRequest = ash.ime.mojom.InputChannelPendingReceiver;

