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
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.InputChannel',
    'context');
  return remote.$;
};

ash.ime.mojom.InputChannelReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.ime.mojom.InputChannel_ProcessMessage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.processMessage(params.message);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputChannel_ProcessMessage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

ash.ime.mojom.InputChannelReceiver = ash.ime.mojom.InputChannelReceiver;

ash.ime.mojom.InputChannelPtr = ash.ime.mojom.InputChannelRemote;
ash.ime.mojom.InputChannelRequest = ash.ime.mojom.InputChannelPendingReceiver;

