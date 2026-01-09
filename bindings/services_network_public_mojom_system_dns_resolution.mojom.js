// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/system_dns_resolution.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: SystemDnsResolver
network.mojom.SystemDnsResolver = {};

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
      [hostname, addr_family, flags, network]);
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

// ParamsSpec for Resolve
network.mojom.SystemDnsResolver_Resolve_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SystemDnsResolver.Resolve_Params',
      packedSize: 40,
      fields: [
        { name: 'hostname', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'addr_family', packedOffset: 8, packedBitOffset: 0, type: network.mojom.AddressFamilySpec, nullable: false },
        { name: 'network', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'flags', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.SystemDnsResolver_Resolve_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SystemDnsResolver.Resolve_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'addr_list', packedOffset: 0, packedBitOffset: 0, type: network.mojom.AddressListSpec, nullable: false },
        { name: 'os_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'net_error', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.SystemDnsResolverPtr = network.mojom.SystemDnsResolverRemote;
network.mojom.SystemDnsResolverRequest = network.mojom.SystemDnsResolverPendingReceiver;

