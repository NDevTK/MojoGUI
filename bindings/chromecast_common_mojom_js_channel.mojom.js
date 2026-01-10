// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/js_channel.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: JsChannel
chromecast.mojom.JsChannel = {};

chromecast.mojom.JsChannel_PostMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.JsChannel_PostMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [message]);
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

// ParamsSpec for PostMessage
chromecast.mojom.JsChannel_PostMessage_ParamsSpec = {
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
chromecast.mojom.JsChannelPtr = chromecast.mojom.JsChannelRemote;
chromecast.mojom.JsChannelRequest = chromecast.mojom.JsChannelPendingReceiver;


// Interface: JsChannelClient
chromecast.mojom.JsChannelClient = {};

chromecast.mojom.JsChannelClient_CreateChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.JsChannelClient_CreateChannel_Params',
      packedSize: 24,
      fields: [
        { name: 'channel', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromecast.mojom.JsChannelRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromecast.mojom.JsChannelClient_RemoveChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.JsChannelClient_RemoveChannel_Params',
      packedSize: 16,
      fields: [
        { name: 'channel', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [channel, pipe]);
  }

  removeChannel(channel) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.JsChannelClient_RemoveChannel_ParamsSpec,
      null,
      [channel]);
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

// ParamsSpec for CreateChannel
chromecast.mojom.JsChannelClient_CreateChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.JsChannelClient.CreateChannel_Params',
      packedSize: 24,
      fields: [
        { name: 'channel', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromecast.mojom.JsChannelRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RemoveChannel
chromecast.mojom.JsChannelClient_RemoveChannel_ParamsSpec = {
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
chromecast.mojom.JsChannelClientPtr = chromecast.mojom.JsChannelClientRemote;
chromecast.mojom.JsChannelClientRequest = chromecast.mojom.JsChannelClientPendingReceiver;


// Interface: JsChannelBindingProvider
chromecast.mojom.JsChannelBindingProvider = {};

chromecast.mojom.JsChannelBindingProvider_Register_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.JsChannelBindingProvider_Register_Params',
      packedSize: 24,
      fields: [
        { name: 'routing_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromecast.mojom.JsChannelClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [routing_id, client]);
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

// ParamsSpec for Register
chromecast.mojom.JsChannelBindingProvider_Register_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.JsChannelBindingProvider.Register_Params',
      packedSize: 24,
      fields: [
        { name: 'routing_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromecast.mojom.JsChannelClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.JsChannelBindingProviderPtr = chromecast.mojom.JsChannelBindingProviderRemote;
chromecast.mojom.JsChannelBindingProviderRequest = chromecast.mojom.JsChannelBindingProviderPendingReceiver;

