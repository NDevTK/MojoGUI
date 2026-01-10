// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/broadcastchannel/broadcast_channel.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};


// Interface: BroadcastChannelClient
blink.mojom.mojom.BroadcastChannelClient = {};

blink.mojom.mojom.BroadcastChannelClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.BroadcastChannelClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BroadcastChannelClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.BroadcastChannelClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.BroadcastChannelClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.BroadcastChannelClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.BroadcastChannelClient_OnMessage_ParamsSpec,
      null,
      [message]);
  }

};

blink.mojom.mojom.BroadcastChannelClient.getRemote = function() {
  let remote = new blink.mojom.mojom.BroadcastChannelClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BroadcastChannelClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnMessage
blink.mojom.mojom.BroadcastChannelClient_OnMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BroadcastChannelClient.OnMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CloneableMessageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.BroadcastChannelClientPtr = blink.mojom.mojom.BroadcastChannelClientRemote;
blink.mojom.mojom.BroadcastChannelClientRequest = blink.mojom.mojom.BroadcastChannelClientPendingReceiver;


// Interface: BroadcastChannelProvider
blink.mojom.mojom.BroadcastChannelProvider = {};

blink.mojom.mojom.BroadcastChannelProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.BroadcastChannelProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BroadcastChannelProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.BroadcastChannelProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.BroadcastChannelProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.BroadcastChannelProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connectToChannel(name, client, connection) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.BroadcastChannelProvider_ConnectToChannel_ParamsSpec,
      null,
      [name, client, connection]);
  }

};

blink.mojom.mojom.BroadcastChannelProvider.getRemote = function() {
  let remote = new blink.mojom.mojom.BroadcastChannelProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BroadcastChannelProvider',
    'context');
  return remote.$;
};

// ParamsSpec for ConnectToChannel
blink.mojom.mojom.BroadcastChannelProvider_ConnectToChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BroadcastChannelProvider.ConnectToChannel_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'connection', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.BroadcastChannelProviderPtr = blink.mojom.mojom.BroadcastChannelProviderRemote;
blink.mojom.mojom.BroadcastChannelProviderRequest = blink.mojom.mojom.BroadcastChannelProviderPendingReceiver;

