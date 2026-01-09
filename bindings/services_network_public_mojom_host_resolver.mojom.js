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
  so: 2,
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
  HOSTS: 0,
  etc: 1,
  e: 2,
  e: 3,
  IP: 4,
  etc: 5,
};

// Enum: CacheUsage
network.mojom.CacheUsage = {
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
network.mojom.DnsOverHttpsServerConfig = class {
  constructor(values = {}) {
    this.endpoints = values.endpoints !== undefined ? values.endpoints : "";
  }
};

// Struct: DnsOverHttpsConfig
network.mojom.DnsOverHttpsConfig = class {
  constructor(values = {}) {
    this.servers = values.servers !== undefined ? values.servers : [];
  }
};

// Struct: DnsConfigOverrides
network.mojom.DnsConfigOverrides = class {
  constructor(values = {}) {
    this.NO_OVERRIDE = values.NO_OVERRIDE !== undefined ? values.NO_OVERRIDE : null;
  }
};

// Struct: ResolveHostParameters
network.mojom.ResolveHostParameters = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.file = values.file !== undefined ? values.file : null;
    this.ANY = values.ANY !== undefined ? values.ANY : null;
    this.SYSTEM = values.SYSTEM !== undefined ? values.SYSTEM : null;
    this.cache = values.cache !== undefined ? values.cache : null;
    this.resolution = values.resolution !== undefined ? values.resolution : null;
    this.LOCAL_ONLY = values.LOCAL_ONLY !== undefined ? values.LOCAL_ONLY : null;
  }
};

// Interface: ResolveHostHandle
network.mojom.ResolveHostHandlePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.ResolveHostHandle';
  }

  cancel(result) {
    // Method: Cancel
    // Call: Cancel(result)
  }

};

network.mojom.ResolveHostHandleRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ResolveHostClient
network.mojom.ResolveHostClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.ResolveHostClient';
  }

  onComplete(result, resolve_error_info, resolved_addresses, alternative_endpoints) {
    // Method: OnComplete
    // Call: OnComplete(result, resolve_error_info, resolved_addresses, alternative_endpoints)
  }

  onTextResults(text_results) {
    // Method: OnTextResults
    // Call: OnTextResults(text_results)
  }

  onHostnameResults(hosts) {
    // Method: OnHostnameResults
    // Call: OnHostnameResults(hosts)
  }

};

network.mojom.ResolveHostClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MdnsListenClient
network.mojom.MdnsListenClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.MdnsListenClient';
  }

};

network.mojom.MdnsListenClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HostResolver
network.mojom.HostResolverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.HostResolver';
  }

  resolveHost(host, network_anonymization_key, optional_parameters, response_client) {
    // Method: ResolveHost
    // Call: ResolveHost(host, network_anonymization_key, optional_parameters, response_client)
  }

  mdnsListen(host, query_type, response_client) {
    // Method: MdnsListen
    return new Promise((resolve) => {
      // Call: MdnsListen(host, query_type, response_client)
      resolve({});
    });
  }

};

network.mojom.HostResolverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DnsConfigChangeManagerClient
network.mojom.DnsConfigChangeManagerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.DnsConfigChangeManagerClient';
  }

  onDnsConfigChanged() {
    // Method: OnDnsConfigChanged
    // Call: OnDnsConfigChanged()
  }

};

network.mojom.DnsConfigChangeManagerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DnsConfigChangeManager
network.mojom.DnsConfigChangeManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.DnsConfigChangeManager';
  }

  requestNotifications(client) {
    // Method: RequestNotifications
    // Call: RequestNotifications(client)
  }

};

network.mojom.DnsConfigChangeManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
