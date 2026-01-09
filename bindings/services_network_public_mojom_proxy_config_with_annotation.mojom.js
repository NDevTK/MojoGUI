// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/proxy_config_with_annotation.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: ProxyConfigWithAnnotation
network.mojom.ProxyConfigWithAnnotation = class {
  constructor(values = {}) {
    this.traffic_annotation = values.traffic_annotation !== undefined ? values.traffic_annotation : null;
  }
};

// Interface: ProxyConfigClient
network.mojom.ProxyConfigClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.ProxyConfigClient';
  }

  onProxyConfigUpdated(proxy_config) {
    // Method: OnProxyConfigUpdated
    // Call: OnProxyConfigUpdated(proxy_config)
  }

  flushProxyConfig() {
    // Method: FlushProxyConfig
    // Call: FlushProxyConfig()
  }

};

network.mojom.ProxyConfigClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ProxyConfigPollerClient
network.mojom.ProxyConfigPollerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.ProxyConfigPollerClient';
  }

  onLazyProxyConfigPoll() {
    // Method: OnLazyProxyConfigPoll
    // Call: OnLazyProxyConfigPoll()
  }

};

network.mojom.ProxyConfigPollerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ProxyErrorClient
network.mojom.ProxyErrorClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.ProxyErrorClient';
  }

  onPACScriptError(line_number, details) {
    // Method: OnPACScriptError
    // Call: OnPACScriptError(line_number, details)
  }

  onRequestMaybeFailedDueToProxySettings(net_error) {
    // Method: OnRequestMaybeFailedDueToProxySettings
    // Call: OnRequestMaybeFailedDueToProxySettings(net_error)
  }

};

network.mojom.ProxyErrorClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
