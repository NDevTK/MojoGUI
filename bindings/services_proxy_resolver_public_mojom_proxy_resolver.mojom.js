// Auto-generated MojoJS binding
// Source: chromium_src/services/proxy_resolver/public/mojom/proxy_resolver.mojom
// Module: proxy_resolver.mojom

'use strict';

// Module namespace
var proxy_resolver = proxy_resolver || {};
proxy_resolver.mojom = proxy_resolver.mojom || {};


// Enum: HostResolveOperation
proxy_resolver.mojom.HostResolveOperation = {
  DNS_RESOLVE: 0,
  DNS_RESOLVE_EX: 1,
  MY_IP_ADDRESS: 2,
  MY_IP_ADDRESS_EX: 3,
};

// Enum: WinHttpStatus
proxy_resolver.mojom.WinHttpStatus = {
};

// Struct: ProxyInfo
proxy_resolver.mojom.ProxyInfo = class {
  constructor(values = {}) {
    this.proxy_chains = values.proxy_chains !== undefined ? values.proxy_chains : [];
  }
};

// Struct: SystemProxyResolutionStatus
proxy_resolver.mojom.SystemProxyResolutionStatus = class {
  constructor(values = {}) {
    this.win_http_status = values.win_http_status !== undefined ? values.win_http_status : 0;
  }
};

// Interface: HostResolverRequestClient
proxy_resolver.mojom.HostResolverRequestClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'proxy_resolver.mojom.HostResolverRequestClient';
  }

  reportResult(error, result) {
    // Method: ReportResult
    // Call: ReportResult(error, result)
  }

};

proxy_resolver.mojom.HostResolverRequestClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ProxyResolver
proxy_resolver.mojom.ProxyResolverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'proxy_resolver.mojom.ProxyResolver';
  }

  getProxyForUrl(url, network_anonymization_key, client) {
    // Method: GetProxyForUrl
    // Call: GetProxyForUrl(url, network_anonymization_key, client)
  }

};

proxy_resolver.mojom.ProxyResolverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ProxyResolverRequestClient
proxy_resolver.mojom.ProxyResolverRequestClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'proxy_resolver.mojom.ProxyResolverRequestClient';
  }

  reportResult(error, proxy_info) {
    // Method: ReportResult
    // Call: ReportResult(error, proxy_info)
  }

  alert(error) {
    // Method: Alert
    // Call: Alert(error)
  }

  onError(line_number, error) {
    // Method: OnError
    // Call: OnError(line_number, error)
  }

  resolveDns(host, operation, network_anonymization_key, client) {
    // Method: ResolveDns
    // Call: ResolveDns(host, operation, network_anonymization_key, client)
  }

};

proxy_resolver.mojom.ProxyResolverRequestClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ProxyResolverFactory
proxy_resolver.mojom.ProxyResolverFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'proxy_resolver.mojom.ProxyResolverFactory';
  }

  createResolver(pac_script, receiver, client) {
    // Method: CreateResolver
    // Call: CreateResolver(pac_script, receiver, client)
  }

};

proxy_resolver.mojom.ProxyResolverFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ProxyResolverFactoryRequestClient
proxy_resolver.mojom.ProxyResolverFactoryRequestClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'proxy_resolver.mojom.ProxyResolverFactoryRequestClient';
  }

  reportResult(error) {
    // Method: ReportResult
    // Call: ReportResult(error)
  }

  alert(error) {
    // Method: Alert
    // Call: Alert(error)
  }

  onError(line_number, error) {
    // Method: OnError
    // Call: OnError(line_number, error)
  }

  resolveDns(host, operation, network_anonymization_key, client) {
    // Method: ResolveDns
    // Call: ResolveDns(host, operation, network_anonymization_key, client)
  }

};

proxy_resolver.mojom.ProxyResolverFactoryRequestClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SystemProxyResolver
proxy_resolver.mojom.SystemProxyResolverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'proxy_resolver.mojom.SystemProxyResolver';
  }

  getProxyForUrl(url) {
    // Method: GetProxyForUrl
    return new Promise((resolve) => {
      // Call: GetProxyForUrl(url)
      resolve({});
    });
  }

};

proxy_resolver.mojom.SystemProxyResolverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
