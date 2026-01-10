// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/input_engine.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};

ash.ime.mojom.InputChannel = {};
ash.ime.mojom.InputChannel.$interfaceName = 'ash.ime.mojom.InputChannel';
ash.ime.mojom.InputChannel_ProcessMessage_ParamsSpec = { $: {} };
ash.ime.mojom.InputChannel_ProcessMessage_ResponseParamsSpec = { $: {} };

// Interface: InputChannel
mojo.internal.Struct(
    ash.ime.mojom.InputChannel_ProcessMessage_ParamsSpec, 'ash.ime.mojom.InputChannel_ProcessMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputChannel_ProcessMessage_ResponseParamsSpec, 'ash.ime.mojom.InputChannel_ProcessMessage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [message],
      false);
  }

};

ash.ime.mojom.InputChannel.getRemote = function() {
  let remote = new ash.ime.mojom.InputChannelRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ash.ime.mojom.InputChannel',
    'context');
  return remote.$;
};

ash.ime.mojom.InputChannelPtr = ash.ime.mojom.InputChannelRemote;
ash.ime.mojom.InputChannelRequest = ash.ime.mojom.InputChannelPendingReceiver;

