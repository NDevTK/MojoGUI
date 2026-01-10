// Auto-generated MojoJS binding
// Source: chromium_src/services/proxy_resolver/public/mojom/proxy_resolver.mojom
// Module: proxy_resolver.mojom

'use strict';

// Module namespace
var proxy_resolver = proxy_resolver || {};
proxy_resolver.mojom = proxy_resolver.mojom || {};
var url = url || {};


// Enum: HostResolveOperation
proxy_resolver.mojom.mojom.HostResolveOperation = {
  DNS_RESOLVE: 0,
  DNS_RESOLVE_EX: 1,
  MY_IP_ADDRESS: 2,
  MY_IP_ADDRESS_EX: 3,
};
proxy_resolver.mojom.mojom.HostResolveOperationSpec = { $: mojo.internal.Enum() };

// Enum: WinHttpStatus
proxy_resolver.mojom.mojom.WinHttpStatus = {
  kOk: 0,
  kAborted: 1,
  kWinHttpOpenFailed: 2,
  kWinHttpSetTimeoutsFailed: 3,
  kWinHttpSetStatusCallbackFailed: 4,
  kWinHttpGetIEProxyConfigForCurrentUserFailed: 5,
  kWinHttpCreateProxyResolverFailed: 6,
  kWinHttpGetProxyForURLExFailed: 7,
  kStatusCallbackFailed: 8,
  kWinHttpGetProxyResultFailed: 9,
  kEmptyProxyList: 10,
};
proxy_resolver.mojom.mojom.WinHttpStatusSpec = { $: mojo.internal.Enum() };

// Struct: ProxyInfo
proxy_resolver.mojom.mojom.ProxyInfoSpec = {
  $: {
    structSpec: {
      name: 'proxy_resolver.mojom.ProxyInfo',
      packedSize: 16,
      fields: [
        { name: 'proxy_chains', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.ProxyChainSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SystemProxyResolutionStatus
proxy_resolver.mojom.mojom.SystemProxyResolutionStatusSpec = {
  $: {
    structSpec: {
      name: 'proxy_resolver.mojom.SystemProxyResolutionStatus',
      packedSize: 24,
      fields: [
        { name: 'is_success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'os_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'win_http_status', packedOffset: 4, packedBitOffset: 0, type: proxy_resolver.mojom.WinHttpStatusSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: HostResolverRequestClient
proxy_resolver.mojom.mojom.HostResolverRequestClient = {};

proxy_resolver.mojom.mojom.HostResolverRequestClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

proxy_resolver.mojom.mojom.HostResolverRequestClientRemote = class {
  static get $interfaceName() {
    return 'proxy_resolver.mojom.HostResolverRequestClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      proxy_resolver.mojom.mojom.HostResolverRequestClientPendingReceiver,
      handle);
    this.$ = new proxy_resolver.mojom.mojom.HostResolverRequestClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

proxy_resolver.mojom.mojom.HostResolverRequestClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  reportResult(error, result) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      proxy_resolver.mojom.mojom.HostResolverRequestClient_ReportResult_ParamsSpec,
      null,
      [error, result]);
  }

};

proxy_resolver.mojom.mojom.HostResolverRequestClient.getRemote = function() {
  let remote = new proxy_resolver.mojom.mojom.HostResolverRequestClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'proxy_resolver.mojom.HostResolverRequestClient',
    'context');
  return remote.$;
};

// ParamsSpec for ReportResult
proxy_resolver.mojom.mojom.HostResolverRequestClient_ReportResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'proxy_resolver.mojom.HostResolverRequestClient.ReportResult_Params',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.IPAddressSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
proxy_resolver.mojom.mojom.HostResolverRequestClientPtr = proxy_resolver.mojom.mojom.HostResolverRequestClientRemote;
proxy_resolver.mojom.mojom.HostResolverRequestClientRequest = proxy_resolver.mojom.mojom.HostResolverRequestClientPendingReceiver;


// Interface: ProxyResolver
proxy_resolver.mojom.mojom.ProxyResolver = {};

proxy_resolver.mojom.mojom.ProxyResolverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

proxy_resolver.mojom.mojom.ProxyResolverRemote = class {
  static get $interfaceName() {
    return 'proxy_resolver.mojom.ProxyResolver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      proxy_resolver.mojom.mojom.ProxyResolverPendingReceiver,
      handle);
    this.$ = new proxy_resolver.mojom.mojom.ProxyResolverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

proxy_resolver.mojom.mojom.ProxyResolverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getProxyForUrl(url, network_anonymization_key, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      proxy_resolver.mojom.mojom.ProxyResolver_GetProxyForUrl_ParamsSpec,
      null,
      [url, network_anonymization_key, client]);
  }

};

proxy_resolver.mojom.mojom.ProxyResolver.getRemote = function() {
  let remote = new proxy_resolver.mojom.mojom.ProxyResolverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'proxy_resolver.mojom.ProxyResolver',
    'context');
  return remote.$;
};

// ParamsSpec for GetProxyForUrl
proxy_resolver.mojom.mojom.ProxyResolver_GetProxyForUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'proxy_resolver.mojom.ProxyResolver.GetProxyForUrl_Params',
      packedSize: 40,
      fields: [
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'network_anonymization_key', packedOffset: 0, packedBitOffset: 0, type: network.mojom.NetworkAnonymizationKeySpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
proxy_resolver.mojom.mojom.ProxyResolverPtr = proxy_resolver.mojom.mojom.ProxyResolverRemote;
proxy_resolver.mojom.mojom.ProxyResolverRequest = proxy_resolver.mojom.mojom.ProxyResolverPendingReceiver;


// Interface: ProxyResolverRequestClient
proxy_resolver.mojom.mojom.ProxyResolverRequestClient = {};

proxy_resolver.mojom.mojom.ProxyResolverRequestClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

proxy_resolver.mojom.mojom.ProxyResolverRequestClientRemote = class {
  static get $interfaceName() {
    return 'proxy_resolver.mojom.ProxyResolverRequestClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      proxy_resolver.mojom.mojom.ProxyResolverRequestClientPendingReceiver,
      handle);
    this.$ = new proxy_resolver.mojom.mojom.ProxyResolverRequestClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

proxy_resolver.mojom.mojom.ProxyResolverRequestClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  reportResult(error, proxy_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      proxy_resolver.mojom.mojom.ProxyResolverRequestClient_ReportResult_ParamsSpec,
      null,
      [error, proxy_info]);
  }

  alert(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      proxy_resolver.mojom.mojom.ProxyResolverRequestClient_Alert_ParamsSpec,
      null,
      [error]);
  }

  onError(line_number, error) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      proxy_resolver.mojom.mojom.ProxyResolverRequestClient_OnError_ParamsSpec,
      null,
      [line_number, error]);
  }

  resolveDns(host, operation, network_anonymization_key, client) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      proxy_resolver.mojom.mojom.ProxyResolverRequestClient_ResolveDns_ParamsSpec,
      null,
      [host, operation, network_anonymization_key, client]);
  }

};

proxy_resolver.mojom.mojom.ProxyResolverRequestClient.getRemote = function() {
  let remote = new proxy_resolver.mojom.mojom.ProxyResolverRequestClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'proxy_resolver.mojom.ProxyResolverRequestClient',
    'context');
  return remote.$;
};

// ParamsSpec for ReportResult
proxy_resolver.mojom.mojom.ProxyResolverRequestClient_ReportResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'proxy_resolver.mojom.ProxyResolverRequestClient.ReportResult_Params',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'proxy_info', packedOffset: 0, packedBitOffset: 0, type: proxy_resolver.mojom.ProxyInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Alert
proxy_resolver.mojom.mojom.ProxyResolverRequestClient_Alert_ParamsSpec = {
  $: {
    structSpec: {
      name: 'proxy_resolver.mojom.ProxyResolverRequestClient.Alert_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnError
proxy_resolver.mojom.mojom.ProxyResolverRequestClient_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'proxy_resolver.mojom.ProxyResolverRequestClient.OnError_Params',
      packedSize: 24,
      fields: [
        { name: 'line_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ResolveDns
proxy_resolver.mojom.mojom.ProxyResolverRequestClient_ResolveDns_ParamsSpec = {
  $: {
    structSpec: {
      name: 'proxy_resolver.mojom.ProxyResolverRequestClient.ResolveDns_Params',
      packedSize: 40,
      fields: [
        { name: 'host', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'operation', packedOffset: 24, packedBitOffset: 0, type: proxy_resolver.mojom.HostResolveOperationSpec, nullable: false, minVersion: 0 },
        { name: 'network_anonymization_key', packedOffset: 0, packedBitOffset: 0, type: network.mojom.NetworkAnonymizationKeySpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
proxy_resolver.mojom.mojom.ProxyResolverRequestClientPtr = proxy_resolver.mojom.mojom.ProxyResolverRequestClientRemote;
proxy_resolver.mojom.mojom.ProxyResolverRequestClientRequest = proxy_resolver.mojom.mojom.ProxyResolverRequestClientPendingReceiver;


// Interface: ProxyResolverFactory
proxy_resolver.mojom.mojom.ProxyResolverFactory = {};

proxy_resolver.mojom.mojom.ProxyResolverFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

proxy_resolver.mojom.mojom.ProxyResolverFactoryRemote = class {
  static get $interfaceName() {
    return 'proxy_resolver.mojom.ProxyResolverFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      proxy_resolver.mojom.mojom.ProxyResolverFactoryPendingReceiver,
      handle);
    this.$ = new proxy_resolver.mojom.mojom.ProxyResolverFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

proxy_resolver.mojom.mojom.ProxyResolverFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createResolver(pac_script, receiver, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      proxy_resolver.mojom.mojom.ProxyResolverFactory_CreateResolver_ParamsSpec,
      null,
      [pac_script, receiver, client]);
  }

};

proxy_resolver.mojom.mojom.ProxyResolverFactory.getRemote = function() {
  let remote = new proxy_resolver.mojom.mojom.ProxyResolverFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'proxy_resolver.mojom.ProxyResolverFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateResolver
proxy_resolver.mojom.mojom.ProxyResolverFactory_CreateResolver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'proxy_resolver.mojom.ProxyResolverFactory.CreateResolver_Params',
      packedSize: 24,
      fields: [
        { name: 'pac_script', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
proxy_resolver.mojom.mojom.ProxyResolverFactoryPtr = proxy_resolver.mojom.mojom.ProxyResolverFactoryRemote;
proxy_resolver.mojom.mojom.ProxyResolverFactoryRequest = proxy_resolver.mojom.mojom.ProxyResolverFactoryPendingReceiver;


// Interface: ProxyResolverFactoryRequestClient
proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClient = {};

proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClientRemote = class {
  static get $interfaceName() {
    return 'proxy_resolver.mojom.ProxyResolverFactoryRequestClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClientPendingReceiver,
      handle);
    this.$ = new proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  reportResult(error) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClient_ReportResult_ParamsSpec,
      null,
      [error]);
  }

  alert(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClient_Alert_ParamsSpec,
      null,
      [error]);
  }

  onError(line_number, error) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClient_OnError_ParamsSpec,
      null,
      [line_number, error]);
  }

  resolveDns(host, operation, network_anonymization_key, client) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClient_ResolveDns_ParamsSpec,
      null,
      [host, operation, network_anonymization_key, client]);
  }

};

proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClient.getRemote = function() {
  let remote = new proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'proxy_resolver.mojom.ProxyResolverFactoryRequestClient',
    'context');
  return remote.$;
};

// ParamsSpec for ReportResult
proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClient_ReportResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'proxy_resolver.mojom.ProxyResolverFactoryRequestClient.ReportResult_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Alert
proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClient_Alert_ParamsSpec = {
  $: {
    structSpec: {
      name: 'proxy_resolver.mojom.ProxyResolverFactoryRequestClient.Alert_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnError
proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClient_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'proxy_resolver.mojom.ProxyResolverFactoryRequestClient.OnError_Params',
      packedSize: 24,
      fields: [
        { name: 'line_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ResolveDns
proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClient_ResolveDns_ParamsSpec = {
  $: {
    structSpec: {
      name: 'proxy_resolver.mojom.ProxyResolverFactoryRequestClient.ResolveDns_Params',
      packedSize: 40,
      fields: [
        { name: 'host', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'operation', packedOffset: 24, packedBitOffset: 0, type: proxy_resolver.mojom.HostResolveOperationSpec, nullable: false, minVersion: 0 },
        { name: 'network_anonymization_key', packedOffset: 0, packedBitOffset: 0, type: network.mojom.NetworkAnonymizationKeySpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClientPtr = proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClientRemote;
proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClientRequest = proxy_resolver.mojom.mojom.ProxyResolverFactoryRequestClientPendingReceiver;


// Interface: SystemProxyResolver
proxy_resolver.mojom.mojom.SystemProxyResolver = {};

proxy_resolver.mojom.mojom.SystemProxyResolverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

proxy_resolver.mojom.mojom.SystemProxyResolverRemote = class {
  static get $interfaceName() {
    return 'proxy_resolver.mojom.SystemProxyResolver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      proxy_resolver.mojom.mojom.SystemProxyResolverPendingReceiver,
      handle);
    this.$ = new proxy_resolver.mojom.mojom.SystemProxyResolverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

proxy_resolver.mojom.mojom.SystemProxyResolverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getProxyForUrl(url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      proxy_resolver.mojom.mojom.SystemProxyResolver_GetProxyForUrl_ParamsSpec,
      proxy_resolver.mojom.mojom.SystemProxyResolver_GetProxyForUrl_ResponseParamsSpec,
      [url]);
  }

};

proxy_resolver.mojom.mojom.SystemProxyResolver.getRemote = function() {
  let remote = new proxy_resolver.mojom.mojom.SystemProxyResolverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'proxy_resolver.mojom.SystemProxyResolver',
    'context');
  return remote.$;
};

// ParamsSpec for GetProxyForUrl
proxy_resolver.mojom.mojom.SystemProxyResolver_GetProxyForUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'proxy_resolver.mojom.SystemProxyResolver.GetProxyForUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

proxy_resolver.mojom.mojom.SystemProxyResolver_GetProxyForUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'proxy_resolver.mojom.SystemProxyResolver.GetProxyForUrl_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'proxy_list', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ProxyListSpec, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: proxy_resolver.mojom.SystemProxyResolutionStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
proxy_resolver.mojom.mojom.SystemProxyResolverPtr = proxy_resolver.mojom.mojom.SystemProxyResolverRemote;
proxy_resolver.mojom.mojom.SystemProxyResolverRequest = proxy_resolver.mojom.mojom.SystemProxyResolverPendingReceiver;

