// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/cast_message_channel.mojom
// Module: mirroring.mojom

'use strict';

// Module namespace
var mirroring = mirroring || {};
mirroring.mojom = mirroring.mojom || {};

mirroring.mojom.CastMessageSpec = { $: {} };
mirroring.mojom.CastMessageChannel = {};
mirroring.mojom.CastMessageChannel.$interfaceName = 'mirroring.mojom.CastMessageChannel';
mirroring.mojom.CastMessageChannel_OnMessage_ParamsSpec = { $: {} };

mirroring.mojom.kRemotingNamespace = "urn:x-cast:com.google.cast.remoting";

mirroring.mojom.kWebRtcNamespace = "urn:x-cast:com.google.cast.webrtc";

// Struct: CastMessage
mojo.internal.Struct(
    mirroring.mojom.CastMessageSpec, 'mirroring.mojom.CastMessage', [
      mojo.internal.StructField('message_namespace', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('json_format_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: CastMessageChannel
mojo.internal.Struct(
    mirroring.mojom.CastMessageChannel_OnMessage_ParamsSpec, 'mirroring.mojom.CastMessageChannel_OnMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mirroring.mojom.CastMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mirroring.mojom.CastMessageChannelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mirroring.mojom.CastMessageChannelRemote = class {
  static get $interfaceName() {
    return 'mirroring.mojom.CastMessageChannel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mirroring.mojom.CastMessageChannelPendingReceiver,
      handle);
    this.$ = new mirroring.mojom.CastMessageChannelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mirroring.mojom.CastMessageChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mirroring.mojom.CastMessageChannel_OnMessage_ParamsSpec,
      null,
      [message],
      false);
  }

};

mirroring.mojom.CastMessageChannel.getRemote = function() {
  let remote = new mirroring.mojom.CastMessageChannelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mirroring.mojom.CastMessageChannel',
    'context');
  return remote.$;
};

mirroring.mojom.CastMessageChannelReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = mirroring.mojom.CastMessageChannel_OnMessage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMessage(params.message);
          break;
        }
      }
    });
  }
};

mirroring.mojom.CastMessageChannelReceiver = mirroring.mojom.CastMessageChannelReceiver;

mirroring.mojom.CastMessageChannelPtr = mirroring.mojom.CastMessageChannelRemote;
mirroring.mojom.CastMessageChannelRequest = mirroring.mojom.CastMessageChannelPendingReceiver;

