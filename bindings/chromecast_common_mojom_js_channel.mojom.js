// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/js_channel.mojom
// Module: chromecast.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};

chromecast.mojom.JsChannel = {};
chromecast.mojom.JsChannel.$interfaceName = 'chromecast.mojom.JsChannel';
chromecast.mojom.JsChannel_PostMessage_ParamsSpec = { $: {} };
chromecast.mojom.JsChannelClient = {};
chromecast.mojom.JsChannelClient.$interfaceName = 'chromecast.mojom.JsChannelClient';
chromecast.mojom.JsChannelClient_CreateChannel_ParamsSpec = { $: {} };
chromecast.mojom.JsChannelClient_RemoveChannel_ParamsSpec = { $: {} };
chromecast.mojom.JsChannelBindingProvider = {};
chromecast.mojom.JsChannelBindingProvider.$interfaceName = 'chromecast.mojom.JsChannelBindingProvider';
chromecast.mojom.JsChannelBindingProvider_Register_ParamsSpec = { $: {} };

// Interface: JsChannel
mojo.internal.Struct(
    chromecast.mojom.JsChannel_PostMessage_ParamsSpec, 'chromecast.mojom.JsChannel_PostMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.JsChannelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.JsChannelRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.JsChannel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.JsChannelPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.JsChannelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  postMessage(message) {
    return this.$.postMessage(message);
  }
};

chromecast.mojom.JsChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('JsChannel', [
      { explicit: null },
    ]);
  }

  postMessage(message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.JsChannel_PostMessage_ParamsSpec,
      null,
      [message],
      false);
  }

};

chromecast.mojom.JsChannel.getRemote = function() {
  let remote = new chromecast.mojom.JsChannelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.JsChannel',
    'context');
  return remote.$;
};

chromecast.mojom.JsChannelReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('JsChannel', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.JsChannel_PostMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.JsChannel_PostMessage_ParamsSpec.$.structSpec);
          const result = this.impl.postMessage(params.message);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.JsChannelReceiver = chromecast.mojom.JsChannelReceiver;

chromecast.mojom.JsChannelPtr = chromecast.mojom.JsChannelRemote;
chromecast.mojom.JsChannelRequest = chromecast.mojom.JsChannelPendingReceiver;


// Interface: JsChannelClient
mojo.internal.Struct(
    chromecast.mojom.JsChannelClient_CreateChannel_ParamsSpec, 'chromecast.mojom.JsChannelClient_CreateChannel_Params', [
      mojo.internal.StructField('channel', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pipe', 8, 0, mojo.internal.InterfaceProxy(chromecast.mojom.JsChannelRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromecast.mojom.JsChannelClient_RemoveChannel_ParamsSpec, 'chromecast.mojom.JsChannelClient_RemoveChannel_Params', [
      mojo.internal.StructField('channel', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.JsChannelClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.JsChannelClientRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.JsChannelClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.JsChannelClientPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.JsChannelClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createChannel(channel, pipe) {
    return this.$.createChannel(channel, pipe);
  }
  removeChannel(channel) {
    return this.$.removeChannel(channel);
  }
};

chromecast.mojom.JsChannelClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('JsChannelClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  createChannel(channel, pipe) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.JsChannelClient_CreateChannel_ParamsSpec,
      null,
      [channel, pipe],
      false);
  }

  removeChannel(channel) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromecast.mojom.JsChannelClient_RemoveChannel_ParamsSpec,
      null,
      [channel],
      false);
  }

};

chromecast.mojom.JsChannelClient.getRemote = function() {
  let remote = new chromecast.mojom.JsChannelClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.JsChannelClient',
    'context');
  return remote.$;
};

chromecast.mojom.JsChannelClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('JsChannelClient', [
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.JsChannelClient_CreateChannel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.JsChannelClient_RemoveChannel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.JsChannelClient_CreateChannel_ParamsSpec.$.structSpec);
          const result = this.impl.createChannel(params.channel, params.pipe);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.JsChannelClient_RemoveChannel_ParamsSpec.$.structSpec);
          const result = this.impl.removeChannel(params.channel);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.JsChannelClientReceiver = chromecast.mojom.JsChannelClientReceiver;

chromecast.mojom.JsChannelClientPtr = chromecast.mojom.JsChannelClientRemote;
chromecast.mojom.JsChannelClientRequest = chromecast.mojom.JsChannelClientPendingReceiver;


// Interface: JsChannelBindingProvider
mojo.internal.Struct(
    chromecast.mojom.JsChannelBindingProvider_Register_ParamsSpec, 'chromecast.mojom.JsChannelBindingProvider_Register_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.JsChannelClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('routing_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

chromecast.mojom.JsChannelBindingProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.JsChannelBindingProviderRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.JsChannelBindingProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.JsChannelBindingProviderPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.JsChannelBindingProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  register(routing_id, client) {
    return this.$.register(routing_id, client);
  }
};

chromecast.mojom.JsChannelBindingProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('JsChannelBindingProvider', [
      { explicit: null },
    ]);
  }

  register(routing_id, client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.JsChannelBindingProvider_Register_ParamsSpec,
      null,
      [routing_id, client],
      false);
  }

};

chromecast.mojom.JsChannelBindingProvider.getRemote = function() {
  let remote = new chromecast.mojom.JsChannelBindingProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.JsChannelBindingProvider',
    'context');
  return remote.$;
};

chromecast.mojom.JsChannelBindingProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('JsChannelBindingProvider', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.JsChannelBindingProvider_Register_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.JsChannelBindingProvider_Register_ParamsSpec.$.structSpec);
          const result = this.impl.register(params.routing_id, params.client);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.JsChannelBindingProviderReceiver = chromecast.mojom.JsChannelBindingProviderReceiver;

chromecast.mojom.JsChannelBindingProviderPtr = chromecast.mojom.JsChannelBindingProviderRemote;
chromecast.mojom.JsChannelBindingProviderRequest = chromecast.mojom.JsChannelBindingProviderPendingReceiver;

