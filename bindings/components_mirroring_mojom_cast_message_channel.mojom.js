// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/cast_message_channel.mojom
// Module: mirroring.mojom

'use strict';

// Module namespace
var mirroring = mirroring || {};
mirroring.mojom = mirroring.mojom || {};


mirroring.mojom.kRemotingNamespace = "urn:x-cast:com.google.cast.remoting";

mirroring.mojom.kWebRtcNamespace = "urn:x-cast:com.google.cast.webrtc";

// Struct: CastMessage
mirroring.mojom.CastMessageSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.CastMessage',
      packedSize: 24,
      fields: [
        { name: 'message_namespace', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'json_format_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: CastMessageChannel
mirroring.mojom.CastMessageChannel = {};

mirroring.mojom.CastMessageChannel_OnMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.CastMessageChannel_OnMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mirroring.mojom.CastMessageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [message]);
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

// ParamsSpec for OnMessage
mirroring.mojom.CastMessageChannel_OnMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.CastMessageChannel.OnMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mirroring.mojom.CastMessageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
mirroring.mojom.CastMessageChannelPtr = mirroring.mojom.CastMessageChannelRemote;
mirroring.mojom.CastMessageChannelRequest = mirroring.mojom.CastMessageChannelPendingReceiver;

