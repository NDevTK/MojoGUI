// Auto-generated MojoJS binding
// Source: chromium_src/services/proxy_resolver/public/mojom/proxy_resolver.mojom
// Module: proxy_resolver.mojom

// Module namespace
var proxy_resolver = proxy_resolver || {};
proxy_resolver.mojom = proxy_resolver.mojom || {};
var sandbox = sandbox || {};
var network = network || {};
var url = url || {};

proxy_resolver.mojom.HostResolveOperationSpec = { $: mojo.internal.Enum() };
proxy_resolver.mojom.WinHttpStatusSpec = { $: mojo.internal.Enum() };
proxy_resolver.mojom.ProxyInfoSpec = { $: {} };
proxy_resolver.mojom.SystemProxyResolutionStatusSpec = { $: {} };
proxy_resolver.mojom.HostResolverRequestClient = {};
proxy_resolver.mojom.HostResolverRequestClient.$interfaceName = 'proxy_resolver.mojom.HostResolverRequestClient';
proxy_resolver.mojom.HostResolverRequestClient_ReportResult_ParamsSpec = { $: {} };
proxy_resolver.mojom.ProxyResolver = {};
proxy_resolver.mojom.ProxyResolver.$interfaceName = 'proxy_resolver.mojom.ProxyResolver';
proxy_resolver.mojom.ProxyResolver_GetProxyForUrl_ParamsSpec = { $: {} };
proxy_resolver.mojom.ProxyResolverRequestClient = {};
proxy_resolver.mojom.ProxyResolverRequestClient.$interfaceName = 'proxy_resolver.mojom.ProxyResolverRequestClient';
proxy_resolver.mojom.ProxyResolverRequestClient_ReportResult_ParamsSpec = { $: {} };
proxy_resolver.mojom.ProxyResolverRequestClient_Alert_ParamsSpec = { $: {} };
proxy_resolver.mojom.ProxyResolverRequestClient_OnError_ParamsSpec = { $: {} };
proxy_resolver.mojom.ProxyResolverRequestClient_ResolveDns_ParamsSpec = { $: {} };
proxy_resolver.mojom.ProxyResolverFactory = {};
proxy_resolver.mojom.ProxyResolverFactory.$interfaceName = 'proxy_resolver.mojom.ProxyResolverFactory';
proxy_resolver.mojom.ProxyResolverFactory_CreateResolver_ParamsSpec = { $: {} };
proxy_resolver.mojom.ProxyResolverFactoryRequestClient = {};
proxy_resolver.mojom.ProxyResolverFactoryRequestClient.$interfaceName = 'proxy_resolver.mojom.ProxyResolverFactoryRequestClient';
proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ReportResult_ParamsSpec = { $: {} };
proxy_resolver.mojom.ProxyResolverFactoryRequestClient_Alert_ParamsSpec = { $: {} };
proxy_resolver.mojom.ProxyResolverFactoryRequestClient_OnError_ParamsSpec = { $: {} };
proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ResolveDns_ParamsSpec = { $: {} };
proxy_resolver.mojom.SystemProxyResolver = {};
proxy_resolver.mojom.SystemProxyResolver.$interfaceName = 'proxy_resolver.mojom.SystemProxyResolver';
proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ParamsSpec = { $: {} };
proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ResponseParamsSpec = { $: {} };

// Enum: HostResolveOperation
proxy_resolver.mojom.HostResolveOperation = {
  DNS_RESOLVE: 0,
  DNS_RESOLVE_EX: 1,
  MY_IP_ADDRESS: 2,
  MY_IP_ADDRESS_EX: 3,
};

// Enum: WinHttpStatus
proxy_resolver.mojom.WinHttpStatus = {
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

// Struct: ProxyInfo
mojo.internal.Struct(
    proxy_resolver.mojom.ProxyInfoSpec, 'proxy_resolver.mojom.ProxyInfo', [
      mojo.internal.StructField('proxy_chains', 0, 0, mojo.internal.Array(network.mojom.ProxyChainSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SystemProxyResolutionStatus
mojo.internal.Struct(
    proxy_resolver.mojom.SystemProxyResolutionStatusSpec, 'proxy_resolver.mojom.SystemProxyResolutionStatus', [
      mojo.internal.StructField('win_http_status', 0, 0, proxy_resolver.mojom.WinHttpStatusSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('os_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_success', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: HostResolverRequestClient
mojo.internal.Struct(
    proxy_resolver.mojom.HostResolverRequestClient_ReportResult_ParamsSpec, 'proxy_resolver.mojom.HostResolverRequestClient_ReportResult_Params', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Array(network.mojom.IPAddressSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

proxy_resolver.mojom.HostResolverRequestClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

proxy_resolver.mojom.HostResolverRequestClientRemote = class {
  static get $interfaceName() {
    return 'proxy_resolver.mojom.HostResolverRequestClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      proxy_resolver.mojom.HostResolverRequestClientPendingReceiver,
      handle);
    this.$ = new proxy_resolver.mojom.HostResolverRequestClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  reportResult(error, result) {
    return this.$.reportResult(error, result);
  }
};

proxy_resolver.mojom.HostResolverRequestClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HostResolverRequestClient', [
      { explicit: null },
    ]);
  }

  reportResult(error, result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      proxy_resolver.mojom.HostResolverRequestClient_ReportResult_ParamsSpec,
      null,
      [error, result],
      false);
  }

};

proxy_resolver.mojom.HostResolverRequestClient.getRemote = function() {
  let remote = new proxy_resolver.mojom.HostResolverRequestClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'proxy_resolver.mojom.HostResolverRequestClient',
    'context');
  return remote.$;
};

proxy_resolver.mojom.HostResolverRequestClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HostResolverRequestClient', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(proxy_resolver.mojom.HostResolverRequestClient_ReportResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(proxy_resolver.mojom.HostResolverRequestClient_ReportResult_ParamsSpec.$.structSpec);
          const result = this.impl.reportResult(params.error, params.result);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

proxy_resolver.mojom.HostResolverRequestClientReceiver = proxy_resolver.mojom.HostResolverRequestClientReceiver;

proxy_resolver.mojom.HostResolverRequestClientPtr = proxy_resolver.mojom.HostResolverRequestClientRemote;
proxy_resolver.mojom.HostResolverRequestClientRequest = proxy_resolver.mojom.HostResolverRequestClientPendingReceiver;


// Interface: ProxyResolver
mojo.internal.Struct(
    proxy_resolver.mojom.ProxyResolver_GetProxyForUrl_ParamsSpec, 'proxy_resolver.mojom.ProxyResolver_GetProxyForUrl_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_anonymization_key', 8, 0, network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 16, 0, mojo.internal.InterfaceProxy(proxy_resolver.mojom.ProxyResolverRequestClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

proxy_resolver.mojom.ProxyResolverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

proxy_resolver.mojom.ProxyResolverRemote = class {
  static get $interfaceName() {
    return 'proxy_resolver.mojom.ProxyResolver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      proxy_resolver.mojom.ProxyResolverPendingReceiver,
      handle);
    this.$ = new proxy_resolver.mojom.ProxyResolverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getProxyForUrl(url, network_anonymization_key, client) {
    return this.$.getProxyForUrl(url, network_anonymization_key, client);
  }
};

proxy_resolver.mojom.ProxyResolverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProxyResolver', [
      { explicit: null },
    ]);
  }

  getProxyForUrl(url, network_anonymization_key, client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      proxy_resolver.mojom.ProxyResolver_GetProxyForUrl_ParamsSpec,
      null,
      [url, network_anonymization_key, client],
      false);
  }

};

proxy_resolver.mojom.ProxyResolver.getRemote = function() {
  let remote = new proxy_resolver.mojom.ProxyResolverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'proxy_resolver.mojom.ProxyResolver',
    'context');
  return remote.$;
};

proxy_resolver.mojom.ProxyResolverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProxyResolver', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolver_GetProxyForUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolver_GetProxyForUrl_ParamsSpec.$.structSpec);
          const result = this.impl.getProxyForUrl(params.url, params.network_anonymization_key, params.client);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

proxy_resolver.mojom.ProxyResolverReceiver = proxy_resolver.mojom.ProxyResolverReceiver;

proxy_resolver.mojom.ProxyResolverPtr = proxy_resolver.mojom.ProxyResolverRemote;
proxy_resolver.mojom.ProxyResolverRequest = proxy_resolver.mojom.ProxyResolverPendingReceiver;


// Interface: ProxyResolverRequestClient
mojo.internal.Struct(
    proxy_resolver.mojom.ProxyResolverRequestClient_ReportResult_ParamsSpec, 'proxy_resolver.mojom.ProxyResolverRequestClient_ReportResult_Params', [
      mojo.internal.StructField('proxy_info', 0, 0, proxy_resolver.mojom.ProxyInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    proxy_resolver.mojom.ProxyResolverRequestClient_Alert_ParamsSpec, 'proxy_resolver.mojom.ProxyResolverRequestClient_Alert_Params', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    proxy_resolver.mojom.ProxyResolverRequestClient_OnError_ParamsSpec, 'proxy_resolver.mojom.ProxyResolverRequestClient_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('line_number', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    proxy_resolver.mojom.ProxyResolverRequestClient_ResolveDns_ParamsSpec, 'proxy_resolver.mojom.ProxyResolverRequestClient_ResolveDns_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('operation', 8, 0, proxy_resolver.mojom.HostResolveOperationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_anonymization_key', 16, 0, network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 24, 0, mojo.internal.InterfaceProxy(proxy_resolver.mojom.HostResolverRequestClientRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

proxy_resolver.mojom.ProxyResolverRequestClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

proxy_resolver.mojom.ProxyResolverRequestClientRemote = class {
  static get $interfaceName() {
    return 'proxy_resolver.mojom.ProxyResolverRequestClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      proxy_resolver.mojom.ProxyResolverRequestClientPendingReceiver,
      handle);
    this.$ = new proxy_resolver.mojom.ProxyResolverRequestClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  reportResult(error, proxy_info) {
    return this.$.reportResult(error, proxy_info);
  }
  alert(error) {
    return this.$.alert(error);
  }
  onError(line_number, error) {
    return this.$.onError(line_number, error);
  }
  resolveDns(host, operation, network_anonymization_key, client) {
    return this.$.resolveDns(host, operation, network_anonymization_key, client);
  }
};

proxy_resolver.mojom.ProxyResolverRequestClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProxyResolverRequestClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  reportResult(error, proxy_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      proxy_resolver.mojom.ProxyResolverRequestClient_ReportResult_ParamsSpec,
      null,
      [error, proxy_info],
      false);
  }

  alert(error) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      proxy_resolver.mojom.ProxyResolverRequestClient_Alert_ParamsSpec,
      null,
      [error],
      false);
  }

  onError(line_number, error) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      proxy_resolver.mojom.ProxyResolverRequestClient_OnError_ParamsSpec,
      null,
      [line_number, error],
      false);
  }

  resolveDns(host, operation, network_anonymization_key, client) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      proxy_resolver.mojom.ProxyResolverRequestClient_ResolveDns_ParamsSpec,
      null,
      [host, operation, network_anonymization_key, client],
      false);
  }

};

proxy_resolver.mojom.ProxyResolverRequestClient.getRemote = function() {
  let remote = new proxy_resolver.mojom.ProxyResolverRequestClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'proxy_resolver.mojom.ProxyResolverRequestClient',
    'context');
  return remote.$;
};

proxy_resolver.mojom.ProxyResolverRequestClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProxyResolverRequestClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolverRequestClient_ReportResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolverRequestClient_Alert_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolverRequestClient_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolverRequestClient_ResolveDns_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolverRequestClient_ReportResult_ParamsSpec.$.structSpec);
          const result = this.impl.reportResult(params.error, params.proxy_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolverRequestClient_Alert_ParamsSpec.$.structSpec);
          const result = this.impl.alert(params.error);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolverRequestClient_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError(params.line_number, params.error);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolverRequestClient_ResolveDns_ParamsSpec.$.structSpec);
          const result = this.impl.resolveDns(params.host, params.operation, params.network_anonymization_key, params.client);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

proxy_resolver.mojom.ProxyResolverRequestClientReceiver = proxy_resolver.mojom.ProxyResolverRequestClientReceiver;

proxy_resolver.mojom.ProxyResolverRequestClientPtr = proxy_resolver.mojom.ProxyResolverRequestClientRemote;
proxy_resolver.mojom.ProxyResolverRequestClientRequest = proxy_resolver.mojom.ProxyResolverRequestClientPendingReceiver;


// Interface: ProxyResolverFactory
mojo.internal.Struct(
    proxy_resolver.mojom.ProxyResolverFactory_CreateResolver_ParamsSpec, 'proxy_resolver.mojom.ProxyResolverFactory_CreateResolver_Params', [
      mojo.internal.StructField('pac_script', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(proxy_resolver.mojom.ProxyResolverRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 16, 0, mojo.internal.InterfaceProxy(proxy_resolver.mojom.ProxyResolverFactoryRequestClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

proxy_resolver.mojom.ProxyResolverFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

proxy_resolver.mojom.ProxyResolverFactoryRemote = class {
  static get $interfaceName() {
    return 'proxy_resolver.mojom.ProxyResolverFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      proxy_resolver.mojom.ProxyResolverFactoryPendingReceiver,
      handle);
    this.$ = new proxy_resolver.mojom.ProxyResolverFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createResolver(pac_script, receiver, client) {
    return this.$.createResolver(pac_script, receiver, client);
  }
};

proxy_resolver.mojom.ProxyResolverFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProxyResolverFactory', [
      { explicit: null },
    ]);
  }

  createResolver(pac_script, receiver, client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      proxy_resolver.mojom.ProxyResolverFactory_CreateResolver_ParamsSpec,
      null,
      [pac_script, receiver, client],
      false);
  }

};

proxy_resolver.mojom.ProxyResolverFactory.getRemote = function() {
  let remote = new proxy_resolver.mojom.ProxyResolverFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'proxy_resolver.mojom.ProxyResolverFactory',
    'context');
  return remote.$;
};

proxy_resolver.mojom.ProxyResolverFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProxyResolverFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolverFactory_CreateResolver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolverFactory_CreateResolver_ParamsSpec.$.structSpec);
          const result = this.impl.createResolver(params.pac_script, params.receiver, params.client);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

proxy_resolver.mojom.ProxyResolverFactoryReceiver = proxy_resolver.mojom.ProxyResolverFactoryReceiver;

proxy_resolver.mojom.ProxyResolverFactoryPtr = proxy_resolver.mojom.ProxyResolverFactoryRemote;
proxy_resolver.mojom.ProxyResolverFactoryRequest = proxy_resolver.mojom.ProxyResolverFactoryPendingReceiver;


// Interface: ProxyResolverFactoryRequestClient
mojo.internal.Struct(
    proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ReportResult_ParamsSpec, 'proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ReportResult_Params', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    proxy_resolver.mojom.ProxyResolverFactoryRequestClient_Alert_ParamsSpec, 'proxy_resolver.mojom.ProxyResolverFactoryRequestClient_Alert_Params', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    proxy_resolver.mojom.ProxyResolverFactoryRequestClient_OnError_ParamsSpec, 'proxy_resolver.mojom.ProxyResolverFactoryRequestClient_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('line_number', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ResolveDns_ParamsSpec, 'proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ResolveDns_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('operation', 8, 0, proxy_resolver.mojom.HostResolveOperationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_anonymization_key', 16, 0, network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 24, 0, mojo.internal.InterfaceProxy(proxy_resolver.mojom.HostResolverRequestClientRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

proxy_resolver.mojom.ProxyResolverFactoryRequestClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

proxy_resolver.mojom.ProxyResolverFactoryRequestClientRemote = class {
  static get $interfaceName() {
    return 'proxy_resolver.mojom.ProxyResolverFactoryRequestClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      proxy_resolver.mojom.ProxyResolverFactoryRequestClientPendingReceiver,
      handle);
    this.$ = new proxy_resolver.mojom.ProxyResolverFactoryRequestClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  reportResult(error) {
    return this.$.reportResult(error);
  }
  alert(error) {
    return this.$.alert(error);
  }
  onError(line_number, error) {
    return this.$.onError(line_number, error);
  }
  resolveDns(host, operation, network_anonymization_key, client) {
    return this.$.resolveDns(host, operation, network_anonymization_key, client);
  }
};

proxy_resolver.mojom.ProxyResolverFactoryRequestClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProxyResolverFactoryRequestClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  reportResult(error) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ReportResult_ParamsSpec,
      null,
      [error],
      false);
  }

  alert(error) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      proxy_resolver.mojom.ProxyResolverFactoryRequestClient_Alert_ParamsSpec,
      null,
      [error],
      false);
  }

  onError(line_number, error) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      proxy_resolver.mojom.ProxyResolverFactoryRequestClient_OnError_ParamsSpec,
      null,
      [line_number, error],
      false);
  }

  resolveDns(host, operation, network_anonymization_key, client) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ResolveDns_ParamsSpec,
      null,
      [host, operation, network_anonymization_key, client],
      false);
  }

};

proxy_resolver.mojom.ProxyResolverFactoryRequestClient.getRemote = function() {
  let remote = new proxy_resolver.mojom.ProxyResolverFactoryRequestClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'proxy_resolver.mojom.ProxyResolverFactoryRequestClient',
    'context');
  return remote.$;
};

proxy_resolver.mojom.ProxyResolverFactoryRequestClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProxyResolverFactoryRequestClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ReportResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolverFactoryRequestClient_Alert_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolverFactoryRequestClient_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ResolveDns_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ReportResult_ParamsSpec.$.structSpec);
          const result = this.impl.reportResult(params.error);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolverFactoryRequestClient_Alert_ParamsSpec.$.structSpec);
          const result = this.impl.alert(params.error);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolverFactoryRequestClient_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError(params.line_number, params.error);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ResolveDns_ParamsSpec.$.structSpec);
          const result = this.impl.resolveDns(params.host, params.operation, params.network_anonymization_key, params.client);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

proxy_resolver.mojom.ProxyResolverFactoryRequestClientReceiver = proxy_resolver.mojom.ProxyResolverFactoryRequestClientReceiver;

proxy_resolver.mojom.ProxyResolverFactoryRequestClientPtr = proxy_resolver.mojom.ProxyResolverFactoryRequestClientRemote;
proxy_resolver.mojom.ProxyResolverFactoryRequestClientRequest = proxy_resolver.mojom.ProxyResolverFactoryRequestClientPendingReceiver;


// Interface: SystemProxyResolver
mojo.internal.Struct(
    proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ParamsSpec, 'proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ResponseParamsSpec, 'proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ResponseParams', [
      mojo.internal.StructField('proxy_list', 0, 0, network.mojom.ProxyListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, proxy_resolver.mojom.SystemProxyResolutionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

proxy_resolver.mojom.SystemProxyResolverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

proxy_resolver.mojom.SystemProxyResolverRemote = class {
  static get $interfaceName() {
    return 'proxy_resolver.mojom.SystemProxyResolver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      proxy_resolver.mojom.SystemProxyResolverPendingReceiver,
      handle);
    this.$ = new proxy_resolver.mojom.SystemProxyResolverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getProxyForUrl(url) {
    return this.$.getProxyForUrl(url);
  }
};

proxy_resolver.mojom.SystemProxyResolverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SystemProxyResolver', [
      { explicit: null },
    ]);
  }

  getProxyForUrl(url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ParamsSpec,
      proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ResponseParamsSpec,
      [url],
      false);
  }

};

proxy_resolver.mojom.SystemProxyResolver.getRemote = function() {
  let remote = new proxy_resolver.mojom.SystemProxyResolverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'proxy_resolver.mojom.SystemProxyResolver',
    'context');
  return remote.$;
};

proxy_resolver.mojom.SystemProxyResolverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SystemProxyResolver', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ParamsSpec.$.structSpec);
          const result = this.impl.getProxyForUrl(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

proxy_resolver.mojom.SystemProxyResolverReceiver = proxy_resolver.mojom.SystemProxyResolverReceiver;

proxy_resolver.mojom.SystemProxyResolverPtr = proxy_resolver.mojom.SystemProxyResolverRemote;
proxy_resolver.mojom.SystemProxyResolverRequest = proxy_resolver.mojom.SystemProxyResolverPendingReceiver;

