// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/broadcastchannel/broadcast_channel.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  onMessage(message) {
    return this.$.onMessage(message);
  }
};

blink.mojom.BroadcastChannelClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BroadcastChannelClient', [
      { explicit: null },
    ]);
  }

  onMessage(message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BroadcastChannelClient', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BroadcastChannelClient_OnMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BroadcastChannelClient_OnMessage_ParamsSpec.$.structSpec);
          const result = this.impl.onMessage(params.message);
          break;
        }
      }
      } catch (err) {}
    });
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
  connectToChannel(name, client, connection) {
    return this.$.connectToChannel(name, client, connection);
  }
};

blink.mojom.BroadcastChannelProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BroadcastChannelProvider', [
      { explicit: null },
    ]);
  }

  connectToChannel(name, client, connection) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BroadcastChannelProvider', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BroadcastChannelProvider_ConnectToChannel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BroadcastChannelProvider_ConnectToChannel_ParamsSpec.$.structSpec);
          const result = this.impl.connectToChannel(params.name, params.client, params.connection);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.BroadcastChannelProviderReceiver = blink.mojom.BroadcastChannelProviderReceiver;

blink.mojom.BroadcastChannelProviderPtr = blink.mojom.BroadcastChannelProviderRemote;
blink.mojom.BroadcastChannelProviderRequest = blink.mojom.BroadcastChannelProviderPendingReceiver;

