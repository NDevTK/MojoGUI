// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_param.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};

network.mojom.ProxySchemeSpec = { $: mojo.internal.Enum() };
network.mojom.AuthChallengeInfoSpec = { $: {} };
network.mojom.HttpVersionSpec = { $: {} };
network.mojom.HostPortPairSpec = { $: {} };
network.mojom.ProxyServerSpec = { $: {} };
network.mojom.ProxyChainSpec = { $: {} };
network.mojom.ResolveErrorInfoSpec = { $: {} };
network.mojom.SSLCertRequestInfoSpec = { $: {} };
network.mojom.NetLogSourceSpec = { $: {} };

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
mojo.internal.Struct(
    network.mojom.AuthChallengeInfoSpec, 'network.mojom.AuthChallengeInfo', [
      mojo.internal.StructField('is_proxy', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('challenger', 0, 0, url.mojom.SchemeHostPortSpec, null, false, 0, undefined),
      mojo.internal.StructField('scheme', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('realm', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('challenge', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('path', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: HttpVersion
mojo.internal.Struct(
    network.mojom.HttpVersionSpec, 'network.mojom.HttpVersion', [
      mojo.internal.StructField('major_value', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('minor_value', 2, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HostPortPair
mojo.internal.Struct(
    network.mojom.HostPortPairSpec, 'network.mojom.HostPortPair', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProxyServer
mojo.internal.Struct(
    network.mojom.ProxyServerSpec, 'network.mojom.ProxyServer', [
      mojo.internal.StructField('scheme', 8, 0, network.mojom.ProxySchemeSpec, null, false, 0, undefined),
      mojo.internal.StructField('host_and_port', 0, 0, network.mojom.HostPortPairSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProxyChain
mojo.internal.Struct(
    network.mojom.ProxyChainSpec, 'network.mojom.ProxyChain', [
      mojo.internal.StructField('proxy_servers', 0, 0, mojo.internal.Array(network.mojom.ProxyServerSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('ip_protection_chain_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ResolveErrorInfo
mojo.internal.Struct(
    network.mojom.ResolveErrorInfoSpec, 'network.mojom.ResolveErrorInfo', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_secure_network_error', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SSLCertRequestInfo
mojo.internal.Struct(
    network.mojom.SSLCertRequestInfoSpec, 'network.mojom.SSLCertRequestInfo', [
      mojo.internal.StructField('host_and_port', 0, 0, network.mojom.HostPortPairSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_proxy', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('cert_authorities', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('signature_algorithms', 16, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: NetLogSource
mojo.internal.Struct(
    network.mojom.NetLogSourceSpec, 'network.mojom.NetLogSource', [
      mojo.internal.StructField('source_type', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('source_id', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('start_time', 0, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);
