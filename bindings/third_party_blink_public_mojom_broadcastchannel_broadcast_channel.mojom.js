// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/broadcastchannel/broadcast_channel.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: BroadcastChannelClient
blink.mojom.BroadcastChannelClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.BroadcastChannelClient';
  }

  onMessage(message) {
    // Method: OnMessage
    // Call: OnMessage(message)
  }

};

blink.mojom.BroadcastChannelClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BroadcastChannelProvider
blink.mojom.BroadcastChannelProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.BroadcastChannelProvider';
  }

  connectToChannel(name, client, connection) {
    // Method: ConnectToChannel
    // Call: ConnectToChannel(name, client, connection)
  }

};

blink.mojom.BroadcastChannelProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
