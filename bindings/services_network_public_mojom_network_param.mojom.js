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
      packedSize: 56,
      fields: [
        { name: 'challenger', packedOffset: 0, packedBitOffset: 0, type: url.mojom.SchemeHostPortSpec, nullable: false },
        { name: 'scheme', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'realm', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'challenge', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'path', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_proxy', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
        { name: 'major_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'minor_value', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'port', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'scheme', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ProxySchemeSpec, nullable: false },
        { name: 'host_and_port', packedOffset: 8, packedBitOffset: 0, type: network.mojom.HostPortPairSpec, nullable: true },
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
      packedSize: 24,
      fields: [
        { name: 'proxy_servers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'ip_protection_chain_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_secure_network_error', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 40,
      fields: [
        { name: 'host_and_port', packedOffset: 0, packedBitOffset: 0, type: network.mojom.HostPortPairSpec, nullable: false },
        { name: 'cert_authorities', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'signature_algorithms', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'is_proxy', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'source_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'source_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
