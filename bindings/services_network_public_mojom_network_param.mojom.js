// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_param.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: ProxyScheme
network.mojom.ProxyScheme = {
  kInvalid: 0,
  kHttp: 1,
  kSocks4: 2,
  kSocks5: 3,
  kHttps: 4,
  kQuic: 5,
};

// Struct: AuthChallengeInfo
network.mojom.AuthChallengeInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.AuthChallengeInfo',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HttpVersion
network.mojom.HttpVersionSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpVersion',
      packedSize: 16,
      fields: [
        { name: 'minor_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HostPortPair
network.mojom.HostPortPairSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HostPortPair',
      packedSize: 16,
      fields: [
        { name: 'port', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProxyServer
network.mojom.ProxyServerSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyServer',
      packedSize: 16,
      fields: [
        { name: 'host_and_port', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProxyChain
network.mojom.ProxyChainSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyChain',
      packedSize: 16,
      fields: [
        { name: 'ip_protection_chain_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ResolveErrorInfo
network.mojom.ResolveErrorInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ResolveErrorInfo',
      packedSize: 16,
      fields: [
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SSLCertRequestInfo
network.mojom.SSLCertRequestInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SSLCertRequestInfo',
      packedSize: 16,
      fields: [
        { name: 'signature_algorithms', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NetLogSource
network.mojom.NetLogSourceSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetLogSource',
      packedSize: 16,
      fields: [
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
