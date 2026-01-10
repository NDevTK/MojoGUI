// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/proxy_config_with_annotation.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: ProxyConfigWithAnnotation
network.mojom.mojom.ProxyConfigWithAnnotationSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyConfigWithAnnotation',
      packedSize: 24,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ProxyConfigSpec, nullable: false, minVersion: 0 },
        { name: 'traffic_annotation', packedOffset: 8, packedBitOffset: 0, type: network.mojom.MutableNetworkTrafficAnnotationTagSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: ProxyConfigClient
network.mojom.mojom.ProxyConfigClient = {};

network.mojom.mojom.ProxyConfigClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.ProxyConfigClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ProxyConfigClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.ProxyConfigClientPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.ProxyConfigClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.ProxyConfigClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProxyConfigUpdated(proxy_config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.ProxyConfigClient_OnProxyConfigUpdated_ParamsSpec,
      null,
      [proxy_config]);
  }

  flushProxyConfig() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.ProxyConfigClient_FlushProxyConfig_ParamsSpec,
      null,
      []);
  }

};

network.mojom.mojom.ProxyConfigClient.getRemote = function() {
  let remote = new network.mojom.mojom.ProxyConfigClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ProxyConfigClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnProxyConfigUpdated
network.mojom.mojom.ProxyConfigClient_OnProxyConfigUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyConfigClient.OnProxyConfigUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'proxy_config', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ProxyConfigWithAnnotationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FlushProxyConfig
network.mojom.mojom.ProxyConfigClient_FlushProxyConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyConfigClient.FlushProxyConfig_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.ProxyConfigClientPtr = network.mojom.mojom.ProxyConfigClientRemote;
network.mojom.mojom.ProxyConfigClientRequest = network.mojom.mojom.ProxyConfigClientPendingReceiver;


// Interface: ProxyConfigPollerClient
network.mojom.mojom.ProxyConfigPollerClient = {};

network.mojom.mojom.ProxyConfigPollerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.ProxyConfigPollerClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ProxyConfigPollerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.ProxyConfigPollerClientPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.ProxyConfigPollerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.ProxyConfigPollerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLazyProxyConfigPoll() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.ProxyConfigPollerClient_OnLazyProxyConfigPoll_ParamsSpec,
      null,
      []);
  }

};

network.mojom.mojom.ProxyConfigPollerClient.getRemote = function() {
  let remote = new network.mojom.mojom.ProxyConfigPollerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ProxyConfigPollerClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnLazyProxyConfigPoll
network.mojom.mojom.ProxyConfigPollerClient_OnLazyProxyConfigPoll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyConfigPollerClient.OnLazyProxyConfigPoll_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.ProxyConfigPollerClientPtr = network.mojom.mojom.ProxyConfigPollerClientRemote;
network.mojom.mojom.ProxyConfigPollerClientRequest = network.mojom.mojom.ProxyConfigPollerClientPendingReceiver;


// Interface: ProxyErrorClient
network.mojom.mojom.ProxyErrorClient = {};

network.mojom.mojom.ProxyErrorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.ProxyErrorClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ProxyErrorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.ProxyErrorClientPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.ProxyErrorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.ProxyErrorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPACScriptError(line_number, details) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.ProxyErrorClient_OnPACScriptError_ParamsSpec,
      null,
      [line_number, details]);
  }

  onRequestMaybeFailedDueToProxySettings(net_error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_ParamsSpec,
      null,
      [net_error]);
  }

};

network.mojom.mojom.ProxyErrorClient.getRemote = function() {
  let remote = new network.mojom.mojom.ProxyErrorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ProxyErrorClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnPACScriptError
network.mojom.mojom.ProxyErrorClient_OnPACScriptError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyErrorClient.OnPACScriptError_Params',
      packedSize: 24,
      fields: [
        { name: 'line_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnRequestMaybeFailedDueToProxySettings
network.mojom.mojom.ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyErrorClient.OnRequestMaybeFailedDueToProxySettings_Params',
      packedSize: 16,
      fields: [
        { name: 'net_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.ProxyErrorClientPtr = network.mojom.mojom.ProxyErrorClientRemote;
network.mojom.mojom.ProxyErrorClientRequest = network.mojom.mojom.ProxyErrorClientPendingReceiver;

