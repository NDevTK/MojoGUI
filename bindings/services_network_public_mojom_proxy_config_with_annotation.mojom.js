// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/proxy_config_with_annotation.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: ProxyConfigClient
network.mojom.ProxyConfigClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ProxyConfigClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ProxyConfigClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ProxyConfigClientPendingReceiver,
      handle);
    this.$ = new network.mojom.ProxyConfigClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ProxyConfigClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProxyConfigUpdated(proxy_config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ProxyConfigClient_OnProxyConfigUpdated_ParamsSpec.$,
      null,
      [proxy_config]);
  }

  flushProxyConfig() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.ProxyConfigClient_FlushProxyConfig_ParamsSpec.$,
      null,
      []);
  }

};

network.mojom.ProxyConfigClient.getRemote = function() {
  let remote = new network.mojom.ProxyConfigClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ProxyConfigClient',
    'context');
  return remote.$;
}};

// ParamsSpec for OnProxyConfigUpdated
network.mojom.ProxyConfigClient_OnProxyConfigUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyConfigClient.OnProxyConfigUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'proxy_config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for FlushProxyConfig
network.mojom.ProxyConfigClient_FlushProxyConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyConfigClient.FlushProxyConfig_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
network.mojom.ProxyConfigClientPtr = network.mojom.ProxyConfigClientRemote;
network.mojom.ProxyConfigClientRequest = network.mojom.ProxyConfigClientPendingReceiver;


// Interface: ProxyConfigPollerClient
network.mojom.ProxyConfigPollerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ProxyConfigPollerClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ProxyConfigPollerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ProxyConfigPollerClientPendingReceiver,
      handle);
    this.$ = new network.mojom.ProxyConfigPollerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ProxyConfigPollerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLazyProxyConfigPoll() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ProxyConfigPollerClient_OnLazyProxyConfigPoll_ParamsSpec.$,
      null,
      []);
  }

};

network.mojom.ProxyConfigPollerClient.getRemote = function() {
  let remote = new network.mojom.ProxyConfigPollerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ProxyConfigPollerClient',
    'context');
  return remote.$;
}};

// ParamsSpec for OnLazyProxyConfigPoll
network.mojom.ProxyConfigPollerClient_OnLazyProxyConfigPoll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyConfigPollerClient.OnLazyProxyConfigPoll_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
network.mojom.ProxyConfigPollerClientPtr = network.mojom.ProxyConfigPollerClientRemote;
network.mojom.ProxyConfigPollerClientRequest = network.mojom.ProxyConfigPollerClientPendingReceiver;


// Interface: ProxyErrorClient
network.mojom.ProxyErrorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ProxyErrorClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ProxyErrorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ProxyErrorClientPendingReceiver,
      handle);
    this.$ = new network.mojom.ProxyErrorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ProxyErrorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPACScriptError(line_number, details) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ProxyErrorClient_OnPACScriptError_ParamsSpec.$,
      null,
      [line_number, details]);
  }

  onRequestMaybeFailedDueToProxySettings(net_error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_ParamsSpec.$,
      null,
      [net_error]);
  }

};

network.mojom.ProxyErrorClient.getRemote = function() {
  let remote = new network.mojom.ProxyErrorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ProxyErrorClient',
    'context');
  return remote.$;
}};

// ParamsSpec for OnPACScriptError
network.mojom.ProxyErrorClient_OnPACScriptError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyErrorClient.OnPACScriptError_Params',
      packedSize: 24,
      fields: [
        { name: 'line_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'details', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnRequestMaybeFailedDueToProxySettings
network.mojom.ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyErrorClient.OnRequestMaybeFailedDueToProxySettings_Params',
      packedSize: 16,
      fields: [
        { name: 'net_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
network.mojom.ProxyErrorClientPtr = network.mojom.ProxyErrorClientRemote;
network.mojom.ProxyErrorClientRequest = network.mojom.ProxyErrorClientPendingReceiver;

