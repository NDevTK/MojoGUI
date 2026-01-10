// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/js_channel.mojom
// Module: chromecast.mojom

'use strict';

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
};

chromecast.mojom.JsChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  postMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.JsChannel_PostMessage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.postMessage(params.message);
          break;
        }
      }
    });
  }
};

chromecast.mojom.JsChannelReceiver = chromecast.mojom.JsChannelReceiver;

chromecast.mojom.JsChannelPtr = chromecast.mojom.JsChannelRemote;
chromecast.mojom.JsChannelRequest = chromecast.mojom.JsChannelPendingReceiver;


// Interface: JsChannelClient
mojo.internal.Struct(
    chromecast.mojom.JsChannelClient_CreateChannel_ParamsSpec, 'chromecast.mojom.JsChannelClient_CreateChannel_Params', [
      mojo.internal.StructField('channel', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pipe', 8, 0, mojo.internal.InterfaceProxy(chromecast.mojom.JsChannelSpec), null, false, 0, undefined),
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
};

chromecast.mojom.JsChannelClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createChannel(channel, pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.JsChannelClient_CreateChannel_ParamsSpec,
      null,
      [channel, pipe],
      false);
  }

  removeChannel(channel) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.JsChannelClient_CreateChannel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createChannel(params.channel, params.pipe);
          break;
        }
        case 1: {
          const params = chromecast.mojom.JsChannelClient_RemoveChannel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.removeChannel(params.channel);
          break;
        }
      }
    });
  }
};

chromecast.mojom.JsChannelClientReceiver = chromecast.mojom.JsChannelClientReceiver;

chromecast.mojom.JsChannelClientPtr = chromecast.mojom.JsChannelClientRemote;
chromecast.mojom.JsChannelClientRequest = chromecast.mojom.JsChannelClientPendingReceiver;


// Interface: JsChannelBindingProvider
mojo.internal.Struct(
    chromecast.mojom.JsChannelBindingProvider_Register_ParamsSpec, 'chromecast.mojom.JsChannelBindingProvider_Register_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.JsChannelClientSpec), null, false, 0, undefined),
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
};

chromecast.mojom.JsChannelBindingProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  register(routing_id, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.JsChannelBindingProvider_Register_ParamsSpec.$.decode(message.payload);
          const result = this.impl.register(params.routing_id, params.client);
          break;
        }
      }
    });
  }
};

chromecast.mojom.JsChannelBindingProviderReceiver = chromecast.mojom.JsChannelBindingProviderReceiver;

chromecast.mojom.JsChannelBindingProviderPtr = chromecast.mojom.JsChannelBindingProviderRemote;
chromecast.mojom.JsChannelBindingProviderRequest = chromecast.mojom.JsChannelBindingProviderPendingReceiver;

