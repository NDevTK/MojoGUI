// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/ssl_config.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.SSLVersionSpec = { $: mojo.internal.Enum() };
network.mojom.SSLNamedGroupsPresetSpec = { $: mojo.internal.Enum() };
network.mojom.SSLConfigSpec = { $: {} };
network.mojom.SSLConfigClient = {};
network.mojom.SSLConfigClient.$interfaceName = 'network.mojom.SSLConfigClient';
network.mojom.SSLConfigClient_OnSSLConfigUpdated_ParamsSpec = { $: {} };

// Enum: SSLVersion
network.mojom.SSLVersion = {
  kTLS12: 0,
  kTLS13: 1,
};

// Enum: SSLNamedGroupsPreset
network.mojom.SSLNamedGroupsPreset = {
  kDefault: 0,
  kCnsa2: 1,
};

// Struct: SSLConfig
mojo.internal.Struct(
    network.mojom.SSLConfigSpec, 'network.mojom.SSLConfig', [
      mojo.internal.StructField('rev_checking_enabled', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('rev_checking_required_local_anchors', 44, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sha1_local_anchors_enabled', 44, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('version_min', 32, 0, network.mojom.SSLVersionSpec, null, false, 0, undefined),
      mojo.internal.StructField('version_max', 36, 0, network.mojom.SSLVersionSpec, null, false, 0, undefined),
      mojo.internal.StructField('disabled_cipher_suites', 0, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('tls13_cipher_prefer_aes_256', 44, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('client_cert_pooling_policy', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('named_groups_preset', 40, 0, network.mojom.SSLNamedGroupsPresetSpec, null, false, 0, undefined),
      mojo.internal.StructField('post_quantum_key_agreement_enabled', 44, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ech_enabled', 44, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('trust_anchor_ids', 16, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('mtc_trust_anchor_ids', 24, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: SSLConfigClient
mojo.internal.Struct(
    network.mojom.SSLConfigClient_OnSSLConfigUpdated_ParamsSpec, 'network.mojom.SSLConfigClient_OnSSLConfigUpdated_Params', [
      mojo.internal.StructField('ssl_config', 0, 0, network.mojom.SSLConfigSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.SSLConfigClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.SSLConfigClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SSLConfigClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.SSLConfigClientPendingReceiver,
      handle);
    this.$ = new network.mojom.SSLConfigClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.SSLConfigClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSSLConfigUpdated(ssl_config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.SSLConfigClient_OnSSLConfigUpdated_ParamsSpec,
      null,
      [ssl_config]);
  }

};

network.mojom.SSLConfigClient.getRemote = function() {
  let remote = new network.mojom.SSLConfigClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SSLConfigClient',
    'context');
  return remote.$;
};

network.mojom.SSLConfigClientPtr = network.mojom.SSLConfigClientRemote;
network.mojom.SSLConfigClientRequest = network.mojom.SSLConfigClientPendingReceiver;

