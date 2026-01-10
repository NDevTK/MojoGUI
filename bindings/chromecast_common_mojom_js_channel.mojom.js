// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/js_channel.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: JsChannel
chromecast.mojom.mojom.JsChannel = {};

chromecast.mojom.mojom.JsChannelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.JsChannelRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.JsChannel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.JsChannelPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.JsChannelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.JsChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  postMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.JsChannel_PostMessage_ParamsSpec,
      null,
      [message]);
  }

};

chromecast.mojom.mojom.JsChannel.getRemote = function() {
  let remote = new chromecast.mojom.mojom.JsChannelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.JsChannel',
    'context');
  return remote.$;
};

// ParamsSpec for PostMessage
chromecast.mojom.mojom.JsChannel_PostMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.JsChannel.PostMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.JsChannelPtr = chromecast.mojom.mojom.JsChannelRemote;
chromecast.mojom.mojom.JsChannelRequest = chromecast.mojom.mojom.JsChannelPendingReceiver;


// Interface: JsChannelClient
chromecast.mojom.mojom.JsChannelClient = {};

chromecast.mojom.mojom.JsChannelClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.JsChannelClientRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.JsChannelClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.JsChannelClientPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.JsChannelClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.JsChannelClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createChannel(channel, pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.JsChannelClient_CreateChannel_ParamsSpec,
      null,
      [channel, pipe]);
  }

  removeChannel(channel) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.mojom.JsChannelClient_RemoveChannel_ParamsSpec,
      null,
      [channel]);
  }

};

chromecast.mojom.mojom.JsChannelClient.getRemote = function() {
  let remote = new chromecast.mojom.mojom.JsChannelClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.JsChannelClient',
    'context');
  return remote.$;
};

// ParamsSpec for CreateChannel
chromecast.mojom.mojom.JsChannelClient_CreateChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.JsChannelClient.CreateChannel_Params',
      packedSize: 24,
      fields: [
        { name: 'channel', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RemoveChannel
chromecast.mojom.mojom.JsChannelClient_RemoveChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.JsChannelClient.RemoveChannel_Params',
      packedSize: 16,
      fields: [
        { name: 'channel', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.JsChannelClientPtr = chromecast.mojom.mojom.JsChannelClientRemote;
chromecast.mojom.mojom.JsChannelClientRequest = chromecast.mojom.mojom.JsChannelClientPendingReceiver;


// Interface: JsChannelBindingProvider
chromecast.mojom.mojom.JsChannelBindingProvider = {};

chromecast.mojom.mojom.JsChannelBindingProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.JsChannelBindingProviderRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.JsChannelBindingProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.JsChannelBindingProviderPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.JsChannelBindingProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.JsChannelBindingProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  register(routing_id, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.JsChannelBindingProvider_Register_ParamsSpec,
      null,
      [routing_id, client]);
  }

};

chromecast.mojom.mojom.JsChannelBindingProvider.getRemote = function() {
  let remote = new chromecast.mojom.mojom.JsChannelBindingProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.JsChannelBindingProvider',
    'context');
  return remote.$;
};

// ParamsSpec for Register
chromecast.mojom.mojom.JsChannelBindingProvider_Register_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.JsChannelBindingProvider.Register_Params',
      packedSize: 16,
      fields: [
        { name: 'routing_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.JsChannelBindingProviderPtr = chromecast.mojom.mojom.JsChannelBindingProviderRemote;
chromecast.mojom.mojom.JsChannelBindingProviderRequest = chromecast.mojom.mojom.JsChannelBindingProviderPendingReceiver;

