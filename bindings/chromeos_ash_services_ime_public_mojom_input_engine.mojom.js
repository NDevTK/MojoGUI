// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/input_engine.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.ime.mojom = ash.ime.ime.mojom || {};


// Interface: InputChannel
ash.ime.ime.mojom.mojom.InputChannel = {};

ash.ime.ime.mojom.mojom.InputChannelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.ime.mojom.mojom.InputChannelRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.InputChannel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.ime.mojom.mojom.InputChannelPendingReceiver,
      handle);
    this.$ = new ash.ime.ime.mojom.mojom.InputChannelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.ime.mojom.mojom.InputChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  processMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.ime.ime.mojom.mojom.InputChannel_ProcessMessage_ParamsSpec,
      ash.ime.ime.mojom.mojom.InputChannel_ProcessMessage_ResponseParamsSpec,
      [message]);
  }

};

ash.ime.ime.mojom.mojom.InputChannel.getRemote = function() {
  let remote = new ash.ime.ime.mojom.mojom.InputChannelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.InputChannel',
    'context');
  return remote.$;
};

// ParamsSpec for ProcessMessage
ash.ime.ime.mojom.mojom.InputChannel_ProcessMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputChannel.ProcessMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.ime.ime.mojom.mojom.InputChannel_ProcessMessage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputChannel.ProcessMessage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.ime.ime.mojom.mojom.InputChannelPtr = ash.ime.ime.mojom.mojom.InputChannelRemote;
ash.ime.ime.mojom.mojom.InputChannelRequest = ash.ime.ime.mojom.mojom.InputChannelPendingReceiver;

