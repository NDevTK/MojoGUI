// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_param.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};


// Enum: ProxyScheme
network.mojom.ProxyScheme = {
  kInvalid: 0,
  kHttp: 1,
  kSocks4: 2,
  kSocks5: 3,
  kHttps: 4,
  kQuic: 5,
};
network.mojom.ProxySchemeSpec = { $: mojo.internal.Enum() };

// Struct: AuthChallengeInfo
network.mojom.AuthChallengeInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.AuthChallengeInfo',
      packedSize: 56,
      fields: [
        { name: 'is_proxy', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'challenger', packedOffset: 0, packedBitOffset: 0, type: url.mojom.SchemeHostPortSpec, nullable: false, minVersion: 0 },
        { name: 'scheme', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'realm', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'challenge', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
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
        { name: 'major_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'minor_value', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'scheme', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ProxySchemeSpec, nullable: false, minVersion: 0 },
        { name: 'host_and_port', packedOffset: 0, packedBitOffset: 0, type: network.mojom.HostPortPairSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'proxy_servers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.ProxyServerSpec, false), nullable: true, minVersion: 0 },
        { name: 'ip_protection_chain_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'is_secure_network_error', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'host_and_port', packedOffset: 0, packedBitOffset: 0, type: network.mojom.HostPortPairSpec, nullable: false, minVersion: 0 },
        { name: 'is_proxy', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'cert_authorities', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'signature_algorithms', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint16, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'source_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'source_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
