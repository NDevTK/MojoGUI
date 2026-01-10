// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/host_resolver.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var url = url || {};

network.mojom.OptionalSecureDnsModeSpec = { $: mojo.internal.Enum() };
network.mojom.SecureDnsModeSpec = { $: mojo.internal.Enum() };
network.mojom.SecureDnsPolicySpec = { $: mojo.internal.Enum() };
network.mojom.TristateSpec = { $: mojo.internal.Enum() };
network.mojom.DnsQueryTypeSpec = { $: mojo.internal.Enum() };
network.mojom.SourceSpec = { $: mojo.internal.Enum() };
network.mojom.CacheUsageSpec = { $: mojo.internal.Enum() };
network.mojom.PurposeSpec = { $: mojo.internal.Enum() };
network.mojom.UpdateTypeSpec = { $: mojo.internal.Enum() };
network.mojom.HostResolverHostSpec = { $: {} };
network.mojom.DnsOverHttpsServerConfigSpec = { $: {} };
network.mojom.DnsOverHttpsConfigSpec = { $: {} };
network.mojom.DnsConfigOverridesSpec = { $: {} };
network.mojom.ResolveHostParametersSpec = { $: {} };
network.mojom.ResolveHostHandle = {};
network.mojom.ResolveHostHandle.$interfaceName = 'network.mojom.ResolveHostHandle';
network.mojom.ResolveHostHandle_Cancel_ParamsSpec = { $: {} };
network.mojom.ResolveHostClient = {};
network.mojom.ResolveHostClient.$interfaceName = 'network.mojom.ResolveHostClient';
network.mojom.ResolveHostClient_OnComplete_ParamsSpec = { $: {} };
network.mojom.ResolveHostClient_OnTextResults_ParamsSpec = { $: {} };
network.mojom.ResolveHostClient_OnHostnameResults_ParamsSpec = { $: {} };
network.mojom.MdnsListenClient = {};
network.mojom.MdnsListenClient.$interfaceName = 'network.mojom.MdnsListenClient';
network.mojom.MdnsListenClient_OnAddressResult_ParamsSpec = { $: {} };
network.mojom.MdnsListenClient_OnTextResult_ParamsSpec = { $: {} };
network.mojom.MdnsListenClient_OnHostnameResult_ParamsSpec = { $: {} };
network.mojom.MdnsListenClient_OnUnhandledResult_ParamsSpec = { $: {} };
network.mojom.HostResolver = {};
network.mojom.HostResolver.$interfaceName = 'network.mojom.HostResolver';
network.mojom.HostResolver_ResolveHost_ParamsSpec = { $: {} };
network.mojom.HostResolver_MdnsListen_ParamsSpec = { $: {} };
network.mojom.HostResolver_MdnsListen_ResponseParamsSpec = { $: {} };
network.mojom.DnsConfigChangeManagerClient = {};
network.mojom.DnsConfigChangeManagerClient.$interfaceName = 'network.mojom.DnsConfigChangeManagerClient';
network.mojom.DnsConfigChangeManagerClient_OnDnsConfigChanged_ParamsSpec = { $: {} };
network.mojom.DnsConfigChangeManager = {};
network.mojom.DnsConfigChangeManager.$interfaceName = 'network.mojom.DnsConfigChangeManager';
network.mojom.DnsConfigChangeManager_RequestNotifications_ParamsSpec = { $: {} };

// Enum: OptionalSecureDnsMode
network.mojom.OptionalSecureDnsMode = {
  NO_OVERRIDE: 0,
  OFF: 1,
  AUTOMATIC: 2,
  SECURE: 3,
};

// Enum: SecureDnsMode
network.mojom.SecureDnsMode = {
  OFF: 0,
  AUTOMATIC: 1,
  SECURE: 2,
};

// Enum: SecureDnsPolicy
network.mojom.SecureDnsPolicy = {
  ALLOW: 0,
  DISABLE: 1,
};

// Enum: Tristate
network.mojom.Tristate = {
  NO_OVERRIDE: 0,
  TRISTATE_TRUE: 1,
  TRISTATE_FALSE: 2,
};

// Enum: DnsQueryType
network.mojom.DnsQueryType = {
  UNSPECIFIED: 0,
  A: 1,
  AAAA: 2,
  TXT: 3,
  PTR: 4,
  SRV: 5,
  HTTPS: 6,
};

// Enum: Source
network.mojom.Source = {
  ANY: 0,
  SYSTEM: 1,
  DNS: 2,
  MULTICAST_DNS: 3,
  LOCAL_ONLY: 4,
};

// Enum: CacheUsage
network.mojom.CacheUsage = {
  ALLOWED: 0,
  STALE_ALLOWED: 1,
  DISALLOWED: 2,
};

// Enum: Purpose
network.mojom.Purpose = {
  kUnspecified: 0,
  kPreconnect: 1,
};

// Enum: UpdateType
network.mojom.UpdateType = {
  ADDED: 0,
  CHANGED: 1,
  REMOVED: 2,
};

// Union: HostResolverHost
mojo.internal.Union(
    network.mojom.HostResolverHostSpec, 'network.mojom.HostResolverHost', {
      'scheme_host_port': {
        'ordinal': 0,
        'type': url.mojom.SchemeHostPortSpec,
        'nullable': false,
      },
      'host_port_pair': {
        'ordinal': 1,
        'type': network.mojom.HostPortPairSpec,
        'nullable': false,
      },
    });

// Struct: DnsOverHttpsServerConfig
mojo.internal.Struct(
    network.mojom.DnsOverHttpsServerConfigSpec, 'network.mojom.DnsOverHttpsServerConfig', [
      mojo.internal.StructField('server_template', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('endpoints', 8, 0, mojo.internal.Array(mojo.internal.Array(network.mojom.IPAddressSpec, false), false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DnsOverHttpsConfig
mojo.internal.Struct(
    network.mojom.DnsOverHttpsConfigSpec, 'network.mojom.DnsOverHttpsConfig', [
      mojo.internal.StructField('servers', 0, 0, mojo.internal.Array(network.mojom.DnsOverHttpsServerConfigSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DnsConfigOverrides
mojo.internal.Struct(
    network.mojom.DnsConfigOverridesSpec, 'network.mojom.DnsConfigOverrides', [
      mojo.internal.StructField('NO_OVERRIDE', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ResolveHostParameters
mojo.internal.Struct(
    network.mojom.ResolveHostParametersSpec, 'network.mojom.ResolveHostParameters', [
      mojo.internal.StructField('dns_query_type', 8, 0, network.mojom.DnsQueryTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('initial_priority', 12, 0, network.mojom.RequestPrioritySpec, null, false, 0, undefined),
      mojo.internal.StructField('ANY', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ResolveHostHandle
mojo.internal.Struct(
    network.mojom.ResolveHostHandle_Cancel_ParamsSpec, 'network.mojom.ResolveHostHandle_Cancel_Params', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.ResolveHostHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ResolveHostHandleRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ResolveHostHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ResolveHostHandlePendingReceiver,
      handle);
    this.$ = new network.mojom.ResolveHostHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ResolveHostHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  cancel(result) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ResolveHostHandle_Cancel_ParamsSpec,
      null,
      [result]);
  }

};

network.mojom.ResolveHostHandle.getRemote = function() {
  let remote = new network.mojom.ResolveHostHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ResolveHostHandle',
    'context');
  return remote.$;
};

network.mojom.ResolveHostHandlePtr = network.mojom.ResolveHostHandleRemote;
network.mojom.ResolveHostHandleRequest = network.mojom.ResolveHostHandlePendingReceiver;


// Interface: ResolveHostClient
mojo.internal.Struct(
    network.mojom.ResolveHostClient_OnComplete_ParamsSpec, 'network.mojom.ResolveHostClient_OnComplete_Params', [
      mojo.internal.StructField('result', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('resolve_error_info', 0, 0, network.mojom.ResolveErrorInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('resolved_addresses', 8, 0, network.mojom.AddressListSpec, null, false, 0, undefined),
      mojo.internal.StructField('alternative_endpoints', 16, 0, mojo.internal.Array(network.mojom.HostResolverEndpointResultSpec, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.ResolveHostClient_OnTextResults_ParamsSpec, 'network.mojom.ResolveHostClient_OnTextResults_Params', [
      mojo.internal.StructField('text_results', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.ResolveHostClient_OnHostnameResults_ParamsSpec, 'network.mojom.ResolveHostClient_OnHostnameResults_Params', [
      mojo.internal.StructField('hosts', 0, 0, mojo.internal.Array(network.mojom.HostPortPairSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.ResolveHostClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ResolveHostClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ResolveHostClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ResolveHostClientPendingReceiver,
      handle);
    this.$ = new network.mojom.ResolveHostClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ResolveHostClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onComplete(result, resolve_error_info, resolved_addresses, alternative_endpoints) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ResolveHostClient_OnComplete_ParamsSpec,
      null,
      [result, resolve_error_info, resolved_addresses, alternative_endpoints]);
  }

  onTextResults(text_results) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.ResolveHostClient_OnTextResults_ParamsSpec,
      null,
      [text_results]);
  }

  onHostnameResults(hosts) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.ResolveHostClient_OnHostnameResults_ParamsSpec,
      null,
      [hosts]);
  }

};

network.mojom.ResolveHostClient.getRemote = function() {
  let remote = new network.mojom.ResolveHostClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ResolveHostClient',
    'context');
  return remote.$;
};

network.mojom.ResolveHostClientPtr = network.mojom.ResolveHostClientRemote;
network.mojom.ResolveHostClientRequest = network.mojom.ResolveHostClientPendingReceiver;


// Interface: MdnsListenClient
mojo.internal.Struct(
    network.mojom.MdnsListenClient_OnAddressResult_ParamsSpec, 'network.mojom.MdnsListenClient_OnAddressResult_Params', [
      mojo.internal.StructField('update_type', 8, 0, network.mojom.UpdateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('query_type', 12, 0, network.mojom.DnsQueryTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('endpoint', 0, 0, network.mojom.IPEndPointSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.MdnsListenClient_OnTextResult_ParamsSpec, 'network.mojom.MdnsListenClient_OnTextResult_Params', [
      mojo.internal.StructField('update_type', 8, 0, network.mojom.UpdateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('query_type', 12, 0, network.mojom.DnsQueryTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('text_records', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.MdnsListenClient_OnHostnameResult_ParamsSpec, 'network.mojom.MdnsListenClient_OnHostnameResult_Params', [
      mojo.internal.StructField('update_type', 8, 0, network.mojom.UpdateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('query_type', 12, 0, network.mojom.DnsQueryTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('host', 0, 0, network.mojom.HostPortPairSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.MdnsListenClient_OnUnhandledResult_ParamsSpec, 'network.mojom.MdnsListenClient_OnUnhandledResult_Params', [
      mojo.internal.StructField('update_type', 0, 0, network.mojom.UpdateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('query_type', 4, 0, network.mojom.DnsQueryTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.MdnsListenClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.MdnsListenClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.MdnsListenClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.MdnsListenClientPendingReceiver,
      handle);
    this.$ = new network.mojom.MdnsListenClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.MdnsListenClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAddressResult(update_type, query_type, endpoint) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.MdnsListenClient_OnAddressResult_ParamsSpec,
      null,
      [update_type, query_type, endpoint]);
  }

  onTextResult(update_type, query_type, text_records) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.MdnsListenClient_OnTextResult_ParamsSpec,
      null,
      [update_type, query_type, text_records]);
  }

  onHostnameResult(update_type, query_type, host) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.MdnsListenClient_OnHostnameResult_ParamsSpec,
      null,
      [update_type, query_type, host]);
  }

  onUnhandledResult(update_type, query_type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.MdnsListenClient_OnUnhandledResult_ParamsSpec,
      null,
      [update_type, query_type]);
  }

};

network.mojom.MdnsListenClient.getRemote = function() {
  let remote = new network.mojom.MdnsListenClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.MdnsListenClient',
    'context');
  return remote.$;
};

network.mojom.MdnsListenClientPtr = network.mojom.MdnsListenClientRemote;
network.mojom.MdnsListenClientRequest = network.mojom.MdnsListenClientPendingReceiver;


// Interface: HostResolver
mojo.internal.Struct(
    network.mojom.HostResolver_ResolveHost_ParamsSpec, 'network.mojom.HostResolver_ResolveHost_Params', [
      mojo.internal.StructField('host', 0, 0, network.mojom.HostResolverHostSpec, null, false, 0, undefined),
      mojo.internal.StructField('network_anonymization_key', 16, 0, network.mojom.NetworkAnonymizationKeySpec, null, false, 0, undefined),
      mojo.internal.StructField('optional_parameters', 32, 0, network.mojom.ResolveHostParametersSpec, null, true, 0, undefined),
      mojo.internal.StructField('response_client', 40, 0, mojo.internal.InterfaceProxy(network.mojom.ResolveHostClientRemote), null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    network.mojom.HostResolver_MdnsListen_ParamsSpec, 'network.mojom.HostResolver_MdnsListen_Params', [
      mojo.internal.StructField('host', 0, 0, network.mojom.HostPortPairSpec, null, false, 0, undefined),
      mojo.internal.StructField('query_type', 16, 0, network.mojom.DnsQueryTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('response_client', 8, 0, mojo.internal.InterfaceProxy(network.mojom.MdnsListenClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.HostResolver_MdnsListen_ResponseParamsSpec, 'network.mojom.HostResolver_MdnsListen_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.HostResolverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.HostResolverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.HostResolver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.HostResolverPendingReceiver,
      handle);
    this.$ = new network.mojom.HostResolverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.HostResolverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  resolveHost(host, network_anonymization_key, optional_parameters, response_client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.HostResolver_ResolveHost_ParamsSpec,
      null,
      [host, network_anonymization_key, optional_parameters, response_client]);
  }

  mdnsListen(host, query_type, response_client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.HostResolver_MdnsListen_ParamsSpec,
      network.mojom.HostResolver_MdnsListen_ResponseParamsSpec,
      [host, query_type, response_client]);
  }

};

network.mojom.HostResolver.getRemote = function() {
  let remote = new network.mojom.HostResolverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.HostResolver',
    'context');
  return remote.$;
};

network.mojom.HostResolverPtr = network.mojom.HostResolverRemote;
network.mojom.HostResolverRequest = network.mojom.HostResolverPendingReceiver;


// Interface: DnsConfigChangeManagerClient
mojo.internal.Struct(
    network.mojom.DnsConfigChangeManagerClient_OnDnsConfigChanged_ParamsSpec, 'network.mojom.DnsConfigChangeManagerClient_OnDnsConfigChanged_Params', [
    ],
    [{version: 0, packedSize: 8}]);

network.mojom.DnsConfigChangeManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.DnsConfigChangeManagerClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DnsConfigChangeManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.DnsConfigChangeManagerClientPendingReceiver,
      handle);
    this.$ = new network.mojom.DnsConfigChangeManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.DnsConfigChangeManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDnsConfigChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.DnsConfigChangeManagerClient_OnDnsConfigChanged_ParamsSpec,
      null,
      []);
  }

};

network.mojom.DnsConfigChangeManagerClient.getRemote = function() {
  let remote = new network.mojom.DnsConfigChangeManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DnsConfigChangeManagerClient',
    'context');
  return remote.$;
};

network.mojom.DnsConfigChangeManagerClientPtr = network.mojom.DnsConfigChangeManagerClientRemote;
network.mojom.DnsConfigChangeManagerClientRequest = network.mojom.DnsConfigChangeManagerClientPendingReceiver;


// Interface: DnsConfigChangeManager
mojo.internal.Struct(
    network.mojom.DnsConfigChangeManager_RequestNotifications_ParamsSpec, 'network.mojom.DnsConfigChangeManager_RequestNotifications_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(network.mojom.DnsConfigChangeManagerClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.DnsConfigChangeManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.DnsConfigChangeManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DnsConfigChangeManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.DnsConfigChangeManagerPendingReceiver,
      handle);
    this.$ = new network.mojom.DnsConfigChangeManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.DnsConfigChangeManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestNotifications(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.DnsConfigChangeManager_RequestNotifications_ParamsSpec,
      null,
      [client]);
  }

};

network.mojom.DnsConfigChangeManager.getRemote = function() {
  let remote = new network.mojom.DnsConfigChangeManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DnsConfigChangeManager',
    'context');
  return remote.$;
};

network.mojom.DnsConfigChangeManagerPtr = network.mojom.DnsConfigChangeManagerRemote;
network.mojom.DnsConfigChangeManagerRequest = network.mojom.DnsConfigChangeManagerPendingReceiver;

