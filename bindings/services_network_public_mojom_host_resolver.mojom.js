// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/host_resolver.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


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

// Struct: DnsOverHttpsServerConfig
network.mojom.DnsOverHttpsServerConfigSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DnsOverHttpsServerConfig',
      packedSize: 24,
      fields: [
        { name: 'server_template', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'endpoints', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DnsOverHttpsConfig
network.mojom.DnsOverHttpsConfigSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DnsOverHttpsConfig',
      packedSize: 16,
      fields: [
        { name: 'servers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DnsConfigOverrides
network.mojom.DnsConfigOverridesSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DnsConfigOverrides',
      packedSize: 16,
      fields: [
        { name: 'NO_OVERRIDE', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ResolveHostParameters
network.mojom.ResolveHostParametersSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ResolveHostParameters',
      packedSize: 32,
      fields: [
        { name: 'dns_query_type', packedOffset: 0, packedBitOffset: 0, type: network.mojom.DnsQueryTypeSpec, nullable: false },
        { name: 'initial_priority', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'ANY', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ResolveHostHandle
network.mojom.ResolveHostHandle = {};

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

// ParamsSpec for Cancel
network.mojom.ResolveHostHandle_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ResolveHostHandle.Cancel_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.ResolveHostHandlePtr = network.mojom.ResolveHostHandleRemote;
network.mojom.ResolveHostHandleRequest = network.mojom.ResolveHostHandlePendingReceiver;


// Interface: ResolveHostClient
network.mojom.ResolveHostClient = {};

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

// ParamsSpec for OnComplete
network.mojom.ResolveHostClient_OnComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ResolveHostClient.OnComplete_Params',
      packedSize: 40,
      fields: [
        { name: 'resolve_error_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'resolved_addresses', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'alternative_endpoints', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'result', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTextResults
network.mojom.ResolveHostClient_OnTextResults_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ResolveHostClient.OnTextResults_Params',
      packedSize: 16,
      fields: [
        { name: 'text_results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnHostnameResults
network.mojom.ResolveHostClient_OnHostnameResults_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ResolveHostClient.OnHostnameResults_Params',
      packedSize: 16,
      fields: [
        { name: 'hosts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.ResolveHostClientPtr = network.mojom.ResolveHostClientRemote;
network.mojom.ResolveHostClientRequest = network.mojom.ResolveHostClientPendingReceiver;


// Interface: MdnsListenClient
network.mojom.MdnsListenClient = {};

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

// ParamsSpec for OnAddressResult
network.mojom.MdnsListenClient_OnAddressResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.MdnsListenClient.OnAddressResult_Params',
      packedSize: 32,
      fields: [
        { name: 'update_type', packedOffset: 0, packedBitOffset: 0, type: network.mojom.UpdateTypeSpec, nullable: false },
        { name: 'query_type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DnsQueryTypeSpec, nullable: false },
        { name: 'endpoint', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTextResult
network.mojom.MdnsListenClient_OnTextResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.MdnsListenClient.OnTextResult_Params',
      packedSize: 32,
      fields: [
        { name: 'update_type', packedOffset: 0, packedBitOffset: 0, type: network.mojom.UpdateTypeSpec, nullable: false },
        { name: 'query_type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DnsQueryTypeSpec, nullable: false },
        { name: 'text_records', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnHostnameResult
network.mojom.MdnsListenClient_OnHostnameResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.MdnsListenClient.OnHostnameResult_Params',
      packedSize: 32,
      fields: [
        { name: 'update_type', packedOffset: 0, packedBitOffset: 0, type: network.mojom.UpdateTypeSpec, nullable: false },
        { name: 'query_type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DnsQueryTypeSpec, nullable: false },
        { name: 'host', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnUnhandledResult
network.mojom.MdnsListenClient_OnUnhandledResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.MdnsListenClient.OnUnhandledResult_Params',
      packedSize: 24,
      fields: [
        { name: 'update_type', packedOffset: 0, packedBitOffset: 0, type: network.mojom.UpdateTypeSpec, nullable: false },
        { name: 'query_type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DnsQueryTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.MdnsListenClientPtr = network.mojom.MdnsListenClientRemote;
network.mojom.MdnsListenClientRequest = network.mojom.MdnsListenClientPendingReceiver;


// Interface: HostResolver
network.mojom.HostResolver = {};

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

// ParamsSpec for ResolveHost
network.mojom.HostResolver_ResolveHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HostResolver.ResolveHost_Params',
      packedSize: 40,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'network_anonymization_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'optional_parameters', packedOffset: 16, packedBitOffset: 0, type: network.mojom.ResolveHostParametersSpec, nullable: true },
        { name: 'response_client', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MdnsListen
network.mojom.HostResolver_MdnsListen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HostResolver.MdnsListen_Params',
      packedSize: 32,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'query_type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DnsQueryTypeSpec, nullable: false },
        { name: 'response_client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.HostResolver_MdnsListen_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HostResolver.MdnsListen_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.HostResolverPtr = network.mojom.HostResolverRemote;
network.mojom.HostResolverRequest = network.mojom.HostResolverPendingReceiver;


// Interface: DnsConfigChangeManagerClient
network.mojom.DnsConfigChangeManagerClient = {};

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

// ParamsSpec for OnDnsConfigChanged
network.mojom.DnsConfigChangeManagerClient_OnDnsConfigChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DnsConfigChangeManagerClient.OnDnsConfigChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.DnsConfigChangeManagerClientPtr = network.mojom.DnsConfigChangeManagerClientRemote;
network.mojom.DnsConfigChangeManagerClientRequest = network.mojom.DnsConfigChangeManagerClientPendingReceiver;


// Interface: DnsConfigChangeManager
network.mojom.DnsConfigChangeManager = {};

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

// ParamsSpec for RequestNotifications
network.mojom.DnsConfigChangeManager_RequestNotifications_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DnsConfigChangeManager.RequestNotifications_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.DnsConfigChangeManagerPtr = network.mojom.DnsConfigChangeManagerRemote;
network.mojom.DnsConfigChangeManagerRequest = network.mojom.DnsConfigChangeManagerPendingReceiver;

