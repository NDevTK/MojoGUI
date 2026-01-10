// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/broadcastchannel/broadcast_channel.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.BroadcastChannelClient = {};
blink.mojom.BroadcastChannelClient.$interfaceName = 'blink.mojom.BroadcastChannelClient';
blink.mojom.BroadcastChannelClient_OnMessage_ParamsSpec = { $: {} };
blink.mojom.BroadcastChannelProvider = {};
blink.mojom.BroadcastChannelProvider.$interfaceName = 'blink.mojom.BroadcastChannelProvider';
blink.mojom.BroadcastChannelProvider_ConnectToChannel_ParamsSpec = { $: {} };

// Interface: BroadcastChannelClient
mojo.internal.Struct(
    blink.mojom.BroadcastChannelClient_OnMessage_ParamsSpec, 'blink.mojom.BroadcastChannelClient_OnMessage_Params', [
      mojo.internal.StructField('message', 0, 0, blink.mojom.CloneableMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.BroadcastChannelClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BroadcastChannelClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BroadcastChannelClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BroadcastChannelClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.BroadcastChannelClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BroadcastChannelClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BroadcastChannelClient_OnMessage_ParamsSpec,
      null,
      [message],
      false);
  }

};

blink.mojom.BroadcastChannelClient.getRemote = function() {
  let remote = new blink.mojom.BroadcastChannelClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BroadcastChannelClient',
    'context');
  return remote.$;
};

blink.mojom.BroadcastChannelClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.BroadcastChannelClient_OnMessage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMessage(params.message);
          break;
        }
      }
    }});
  }
};

blink.mojom.BroadcastChannelClientReceiver = blink.mojom.BroadcastChannelClientReceiver;

blink.mojom.BroadcastChannelClientPtr = blink.mojom.BroadcastChannelClientRemote;
blink.mojom.BroadcastChannelClientRequest = blink.mojom.BroadcastChannelClientPendingReceiver;


// Interface: BroadcastChannelProvider
mojo.internal.Struct(
    blink.mojom.BroadcastChannelProvider_ConnectToChannel_ParamsSpec, 'blink.mojom.BroadcastChannelProvider_ConnectToChannel_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('connection', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

blink.mojom.BroadcastChannelProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BroadcastChannelProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BroadcastChannelProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BroadcastChannelProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.BroadcastChannelProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BroadcastChannelProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connectToChannel(name, client, connection) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BroadcastChannelProvider_ConnectToChannel_ParamsSpec,
      null,
      [name, client, connection],
      false);
  }

};

blink.mojom.BroadcastChannelProvider.getRemote = function() {
  let remote = new blink.mojom.BroadcastChannelProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BroadcastChannelProvider',
    'context');
  return remote.$;
};

blink.mojom.BroadcastChannelProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.BroadcastChannelProvider_ConnectToChannel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connectToChannel(params.name, params.client, params.connection);
          break;
        }
      }
    }});
  }
};

blink.mojom.BroadcastChannelProviderReceiver = blink.mojom.BroadcastChannelProviderReceiver;

blink.mojom.BroadcastChannelProviderPtr = blink.mojom.BroadcastChannelProviderRemote;
blink.mojom.BroadcastChannelProviderRequest = blink.mojom.BroadcastChannelProviderPendingReceiver;

