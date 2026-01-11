// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/host_resolver.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};
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
        'type': url.mojom.SchemeHostPortSpec.$,
        'nullable': false,
      },
      'host_port_pair': {
        'ordinal': 1,
        'type': network.mojom.HostPortPairSpec.$,
        'nullable': false,
      },
    });

// Struct: DnsOverHttpsServerConfig
mojo.internal.Struct(
    network.mojom.DnsOverHttpsServerConfigSpec, 'network.mojom.DnsOverHttpsServerConfig', [
      mojo.internal.StructField('server_template', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('endpoints', 8, 0, mojo.internal.Array(mojo.internal.Array(network.mojom.IPAddressSpec.$, false), false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DnsOverHttpsConfig
mojo.internal.Struct(
    network.mojom.DnsOverHttpsConfigSpec, 'network.mojom.DnsOverHttpsConfig', [
      mojo.internal.StructField('servers', 0, 0, mojo.internal.Array(network.mojom.DnsOverHttpsServerConfigSpec.$, false), null, false, 0, undefined),
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
      mojo.internal.StructField('dns_query_type', 0, 0, network.mojom.DnsQueryTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('initial_priority', 8, 0, network.mojom.RequestPrioritySpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('ANY', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

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
  cancel(result) {
    return this.$.cancel(result);
  }
};

network.mojom.ResolveHostHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ResolveHostHandle', [
      { explicit: null },
    ]);
  }

  cancel(result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.ResolveHostHandle_Cancel_ParamsSpec,
      null,
      [result],
      false);
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

network.mojom.ResolveHostHandleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ResolveHostHandle', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(network.mojom.ResolveHostHandle_Cancel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.ResolveHostHandle_Cancel_ParamsSpec.$.structSpec);
          const result = this.impl.cancel(params.result);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.ResolveHostHandleReceiver = network.mojom.ResolveHostHandleReceiver;

network.mojom.ResolveHostHandlePtr = network.mojom.ResolveHostHandleRemote;
network.mojom.ResolveHostHandleRequest = network.mojom.ResolveHostHandlePendingReceiver;


// Interface: ResolveHostClient
mojo.internal.Struct(
    network.mojom.ResolveHostClient_OnComplete_ParamsSpec, 'network.mojom.ResolveHostClient_OnComplete_Params', [
      mojo.internal.StructField('resolve_error_info', 0, 0, network.mojom.ResolveErrorInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('resolved_addresses', 8, 0, network.mojom.AddressListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('alternative_endpoints', 16, 0, mojo.internal.Array(network.mojom.HostResolverEndpointResultSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('result', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.ResolveHostClient_OnTextResults_ParamsSpec, 'network.mojom.ResolveHostClient_OnTextResults_Params', [
      mojo.internal.StructField('text_results', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.ResolveHostClient_OnHostnameResults_ParamsSpec, 'network.mojom.ResolveHostClient_OnHostnameResults_Params', [
      mojo.internal.StructField('hosts', 0, 0, mojo.internal.Array(network.mojom.HostPortPairSpec.$, false), null, false, 0, undefined),
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
  onComplete(result, resolve_error_info, resolved_addresses, alternative_endpoints) {
    return this.$.onComplete(result, resolve_error_info, resolved_addresses, alternative_endpoints);
  }
  onTextResults(text_results) {
    return this.$.onTextResults(text_results);
  }
  onHostnameResults(hosts) {
    return this.$.onHostnameResults(hosts);
  }
};

network.mojom.ResolveHostClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ResolveHostClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onComplete(result, resolve_error_info, resolved_addresses, alternative_endpoints) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.ResolveHostClient_OnComplete_ParamsSpec,
      null,
      [result, resolve_error_info, resolved_addresses, alternative_endpoints],
      false);
  }

  onTextResults(text_results) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.ResolveHostClient_OnTextResults_ParamsSpec,
      null,
      [text_results],
      false);
  }

  onHostnameResults(hosts) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.ResolveHostClient_OnHostnameResults_ParamsSpec,
      null,
      [hosts],
      false);
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

network.mojom.ResolveHostClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ResolveHostClient', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(network.mojom.ResolveHostClient_OnComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.ResolveHostClient_OnTextResults_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.ResolveHostClient_OnHostnameResults_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.ResolveHostClient_OnComplete_ParamsSpec.$.structSpec);
          const result = this.impl.onComplete(params.result, params.resolve_error_info, params.resolved_addresses, params.alternative_endpoints);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.ResolveHostClient_OnTextResults_ParamsSpec.$.structSpec);
          const result = this.impl.onTextResults(params.text_results);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.ResolveHostClient_OnHostnameResults_ParamsSpec.$.structSpec);
          const result = this.impl.onHostnameResults(params.hosts);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.ResolveHostClientReceiver = network.mojom.ResolveHostClientReceiver;

network.mojom.ResolveHostClientPtr = network.mojom.ResolveHostClientRemote;
network.mojom.ResolveHostClientRequest = network.mojom.ResolveHostClientPendingReceiver;


// Interface: MdnsListenClient
mojo.internal.Struct(
    network.mojom.MdnsListenClient_OnAddressResult_ParamsSpec, 'network.mojom.MdnsListenClient_OnAddressResult_Params', [
      mojo.internal.StructField('update_type', 0, 0, network.mojom.UpdateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('query_type', 8, 0, network.mojom.DnsQueryTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('endpoint', 16, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.MdnsListenClient_OnTextResult_ParamsSpec, 'network.mojom.MdnsListenClient_OnTextResult_Params', [
      mojo.internal.StructField('update_type', 0, 0, network.mojom.UpdateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('query_type', 8, 0, network.mojom.DnsQueryTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_records', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.MdnsListenClient_OnHostnameResult_ParamsSpec, 'network.mojom.MdnsListenClient_OnHostnameResult_Params', [
      mojo.internal.StructField('update_type', 0, 0, network.mojom.UpdateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('query_type', 8, 0, network.mojom.DnsQueryTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('host', 16, 0, network.mojom.HostPortPairSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.MdnsListenClient_OnUnhandledResult_ParamsSpec, 'network.mojom.MdnsListenClient_OnUnhandledResult_Params', [
      mojo.internal.StructField('update_type', 0, 0, network.mojom.UpdateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('query_type', 8, 0, network.mojom.DnsQueryTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
  onAddressResult(update_type, query_type, endpoint) {
    return this.$.onAddressResult(update_type, query_type, endpoint);
  }
  onTextResult(update_type, query_type, text_records) {
    return this.$.onTextResult(update_type, query_type, text_records);
  }
  onHostnameResult(update_type, query_type, host) {
    return this.$.onHostnameResult(update_type, query_type, host);
  }
  onUnhandledResult(update_type, query_type) {
    return this.$.onUnhandledResult(update_type, query_type);
  }
};

network.mojom.MdnsListenClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MdnsListenClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onAddressResult(update_type, query_type, endpoint) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.MdnsListenClient_OnAddressResult_ParamsSpec,
      null,
      [update_type, query_type, endpoint],
      false);
  }

  onTextResult(update_type, query_type, text_records) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.MdnsListenClient_OnTextResult_ParamsSpec,
      null,
      [update_type, query_type, text_records],
      false);
  }

  onHostnameResult(update_type, query_type, host) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.MdnsListenClient_OnHostnameResult_ParamsSpec,
      null,
      [update_type, query_type, host],
      false);
  }

  onUnhandledResult(update_type, query_type) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.MdnsListenClient_OnUnhandledResult_ParamsSpec,
      null,
      [update_type, query_type],
      false);
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

network.mojom.MdnsListenClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MdnsListenClient', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(network.mojom.MdnsListenClient_OnAddressResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.MdnsListenClient_OnTextResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.MdnsListenClient_OnHostnameResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.MdnsListenClient_OnUnhandledResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.MdnsListenClient_OnAddressResult_ParamsSpec.$.structSpec);
          const result = this.impl.onAddressResult(params.update_type, params.query_type, params.endpoint);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.MdnsListenClient_OnTextResult_ParamsSpec.$.structSpec);
          const result = this.impl.onTextResult(params.update_type, params.query_type, params.text_records);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.MdnsListenClient_OnHostnameResult_ParamsSpec.$.structSpec);
          const result = this.impl.onHostnameResult(params.update_type, params.query_type, params.host);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.MdnsListenClient_OnUnhandledResult_ParamsSpec.$.structSpec);
          const result = this.impl.onUnhandledResult(params.update_type, params.query_type);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.MdnsListenClientReceiver = network.mojom.MdnsListenClientReceiver;

network.mojom.MdnsListenClientPtr = network.mojom.MdnsListenClientRemote;
network.mojom.MdnsListenClientRequest = network.mojom.MdnsListenClientPendingReceiver;


// Interface: HostResolver
mojo.internal.Struct(
    network.mojom.HostResolver_ResolveHost_ParamsSpec, 'network.mojom.HostResolver_ResolveHost_Params', [
      mojo.internal.StructField('host', 0, 0, network.mojom.HostResolverHostSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_anonymization_key', 8, 0, network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('optional_parameters', 16, 0, network.mojom.ResolveHostParametersSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('response_client', 24, 0, mojo.internal.InterfaceProxy(network.mojom.ResolveHostClientRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.HostResolver_MdnsListen_ParamsSpec, 'network.mojom.HostResolver_MdnsListen_Params', [
      mojo.internal.StructField('host', 0, 0, network.mojom.HostPortPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('query_type', 8, 0, network.mojom.DnsQueryTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_client', 16, 0, mojo.internal.InterfaceProxy(network.mojom.MdnsListenClientRemote), null, false, 0, undefined),
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
  resolveHost(host, network_anonymization_key, optional_parameters, response_client) {
    return this.$.resolveHost(host, network_anonymization_key, optional_parameters, response_client);
  }
  mdnsListen(host, query_type, response_client) {
    return this.$.mdnsListen(host, query_type, response_client);
  }
};

network.mojom.HostResolverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HostResolver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  resolveHost(host, network_anonymization_key, optional_parameters, response_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.HostResolver_ResolveHost_ParamsSpec,
      null,
      [host, network_anonymization_key, optional_parameters, response_client],
      false);
  }

  mdnsListen(host, query_type, response_client) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.HostResolver_MdnsListen_ParamsSpec,
      network.mojom.HostResolver_MdnsListen_ResponseParamsSpec,
      [host, query_type, response_client],
      false);
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

network.mojom.HostResolverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HostResolver', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(network.mojom.HostResolver_ResolveHost_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.HostResolver_MdnsListen_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.HostResolver_ResolveHost_ParamsSpec.$.structSpec);
          const result = this.impl.resolveHost(params.host, params.network_anonymization_key, params.optional_parameters, params.response_client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.HostResolver_MdnsListen_ParamsSpec.$.structSpec);
          const result = this.impl.mdnsListen(params.host, params.query_type, params.response_client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.HostResolver_MdnsListen_ResponseParamsSpec);
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

network.mojom.HostResolverReceiver = network.mojom.HostResolverReceiver;

network.mojom.HostResolverPtr = network.mojom.HostResolverRemote;
network.mojom.HostResolverRequest = network.mojom.HostResolverPendingReceiver;


// Interface: DnsConfigChangeManagerClient
mojo.internal.Struct(
    network.mojom.DnsConfigChangeManagerClient_OnDnsConfigChanged_ParamsSpec, 'network.mojom.DnsConfigChangeManagerClient_OnDnsConfigChanged_Params', [
    ],
    [[0, 8]]);

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
  onDnsConfigChanged() {
    return this.$.onDnsConfigChanged();
  }
};

network.mojom.DnsConfigChangeManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DnsConfigChangeManagerClient', [
      { explicit: null },
    ]);
  }

  onDnsConfigChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.DnsConfigChangeManagerClient_OnDnsConfigChanged_ParamsSpec,
      null,
      [],
      false);
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

network.mojom.DnsConfigChangeManagerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DnsConfigChangeManagerClient', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(network.mojom.DnsConfigChangeManagerClient_OnDnsConfigChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DnsConfigChangeManagerClient_OnDnsConfigChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onDnsConfigChanged();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.DnsConfigChangeManagerClientReceiver = network.mojom.DnsConfigChangeManagerClientReceiver;

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
  requestNotifications(client) {
    return this.$.requestNotifications(client);
  }
};

network.mojom.DnsConfigChangeManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DnsConfigChangeManager', [
      { explicit: null },
    ]);
  }

  requestNotifications(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.DnsConfigChangeManager_RequestNotifications_ParamsSpec,
      null,
      [client],
      false);
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

network.mojom.DnsConfigChangeManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DnsConfigChangeManager', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(network.mojom.DnsConfigChangeManager_RequestNotifications_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DnsConfigChangeManager_RequestNotifications_ParamsSpec.$.structSpec);
          const result = this.impl.requestNotifications(params.client);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.DnsConfigChangeManagerReceiver = network.mojom.DnsConfigChangeManagerReceiver;

network.mojom.DnsConfigChangeManagerPtr = network.mojom.DnsConfigChangeManagerRemote;
network.mojom.DnsConfigChangeManagerRequest = network.mojom.DnsConfigChangeManagerPendingReceiver;

