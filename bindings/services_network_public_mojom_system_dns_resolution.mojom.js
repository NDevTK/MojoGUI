// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/system_dns_resolution.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};
var services = services || {};

network.mojom.SystemDnsResolver = {};
network.mojom.SystemDnsResolver.$interfaceName = 'network.mojom.SystemDnsResolver';
network.mojom.SystemDnsResolver_Resolve_ParamsSpec = { $: {} };
network.mojom.SystemDnsResolver_Resolve_ResponseParamsSpec = { $: {} };

// Interface: SystemDnsResolver
mojo.internal.Struct(
    network.mojom.SystemDnsResolver_Resolve_ParamsSpec, 'network.mojom.SystemDnsResolver_Resolve_Params', [
      mojo.internal.StructField('hostname', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('addr_family', 8, 0, network.mojom.AddressFamilySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('flags', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('network', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.SystemDnsResolver_Resolve_ResponseParamsSpec, 'network.mojom.SystemDnsResolver_Resolve_ResponseParams', [
      mojo.internal.StructField('addr_list', 0, 0, network.mojom.AddressListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('os_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('net_error', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

network.mojom.SystemDnsResolverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.SystemDnsResolverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SystemDnsResolver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.SystemDnsResolverPendingReceiver,
      handle);
    this.$ = new network.mojom.SystemDnsResolverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.SystemDnsResolverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  resolve(hostname, addr_family, flags, network) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.SystemDnsResolver_Resolve_ParamsSpec,
      network.mojom.SystemDnsResolver_Resolve_ResponseParamsSpec,
      [hostname, addr_family, flags, network],
      false);
  }

};

network.mojom.SystemDnsResolver.getRemote = function() {
  let remote = new network.mojom.SystemDnsResolverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SystemDnsResolver',
    'context');
  return remote.$;
};

network.mojom.SystemDnsResolverPtr = network.mojom.SystemDnsResolverRemote;
network.mojom.SystemDnsResolverRequest = network.mojom.SystemDnsResolverPendingReceiver;

