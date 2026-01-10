// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/proxy_config_with_annotation.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};
var services = services || {};

network.mojom.ProxyConfigWithAnnotationSpec = { $: {} };
network.mojom.ProxyConfigClient = {};
network.mojom.ProxyConfigClient.$interfaceName = 'network.mojom.ProxyConfigClient';
network.mojom.ProxyConfigClient_OnProxyConfigUpdated_ParamsSpec = { $: {} };
network.mojom.ProxyConfigClient_FlushProxyConfig_ParamsSpec = { $: {} };
network.mojom.ProxyConfigClient_FlushProxyConfig_ResponseParamsSpec = { $: {} };
network.mojom.ProxyConfigPollerClient = {};
network.mojom.ProxyConfigPollerClient.$interfaceName = 'network.mojom.ProxyConfigPollerClient';
network.mojom.ProxyConfigPollerClient_OnLazyProxyConfigPoll_ParamsSpec = { $: {} };
network.mojom.ProxyErrorClient = {};
network.mojom.ProxyErrorClient.$interfaceName = 'network.mojom.ProxyErrorClient';
network.mojom.ProxyErrorClient_OnPACScriptError_ParamsSpec = { $: {} };
network.mojom.ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_ParamsSpec = { $: {} };

// Struct: ProxyConfigWithAnnotation
mojo.internal.Struct(
    network.mojom.ProxyConfigWithAnnotationSpec, 'network.mojom.ProxyConfigWithAnnotation', [
      mojo.internal.StructField('value', 0, 0, network.mojom.ProxyConfigSpec, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 8, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ProxyConfigClient
mojo.internal.Struct(
    network.mojom.ProxyConfigClient_OnProxyConfigUpdated_ParamsSpec, 'network.mojom.ProxyConfigClient_OnProxyConfigUpdated_Params', [
      mojo.internal.StructField('proxy_config', 0, 0, network.mojom.ProxyConfigWithAnnotationSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.ProxyConfigClient_FlushProxyConfig_ParamsSpec, 'network.mojom.ProxyConfigClient_FlushProxyConfig_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    network.mojom.ProxyConfigClient_FlushProxyConfig_ResponseParamsSpec, 'network.mojom.ProxyConfigClient_FlushProxyConfig_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

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
      network.mojom.ProxyConfigClient_OnProxyConfigUpdated_ParamsSpec,
      null,
      [proxy_config]);
  }

  flushProxyConfig() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.ProxyConfigClient_FlushProxyConfig_ParamsSpec,
      network.mojom.ProxyConfigClient_FlushProxyConfig_ResponseParamsSpec,
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
};

network.mojom.ProxyConfigClientPtr = network.mojom.ProxyConfigClientRemote;
network.mojom.ProxyConfigClientRequest = network.mojom.ProxyConfigClientPendingReceiver;


// Interface: ProxyConfigPollerClient
mojo.internal.Struct(
    network.mojom.ProxyConfigPollerClient_OnLazyProxyConfigPoll_ParamsSpec, 'network.mojom.ProxyConfigPollerClient_OnLazyProxyConfigPoll_Params', [
    ],
    [{version: 0, packedSize: 8}]);

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
      network.mojom.ProxyConfigPollerClient_OnLazyProxyConfigPoll_ParamsSpec,
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
};

network.mojom.ProxyConfigPollerClientPtr = network.mojom.ProxyConfigPollerClientRemote;
network.mojom.ProxyConfigPollerClientRequest = network.mojom.ProxyConfigPollerClientPendingReceiver;


// Interface: ProxyErrorClient
mojo.internal.Struct(
    network.mojom.ProxyErrorClient_OnPACScriptError_ParamsSpec, 'network.mojom.ProxyErrorClient_OnPACScriptError_Params', [
      mojo.internal.StructField('line_number', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('details', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_ParamsSpec, 'network.mojom.ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Params', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      network.mojom.ProxyErrorClient_OnPACScriptError_ParamsSpec,
      null,
      [line_number, details]);
  }

  onRequestMaybeFailedDueToProxySettings(net_error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_ParamsSpec,
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
};

network.mojom.ProxyErrorClientPtr = network.mojom.ProxyErrorClientRemote;
network.mojom.ProxyErrorClientRequest = network.mojom.ProxyErrorClientPendingReceiver;

