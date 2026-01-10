// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/ssl_config.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: SSLVersion
network.mojom.SSLVersion = {
  kTLS12: 0,
  kTLS13: 1,
};
network.mojom.SSLVersionSpec = { $: mojo.internal.Enum() };

// Enum: SSLNamedGroupsPreset
network.mojom.SSLNamedGroupsPreset = {
  kDefault: 0,
  kCnsa2: 1,
};
network.mojom.SSLNamedGroupsPresetSpec = { $: mojo.internal.Enum() };

// Struct: SSLConfig
network.mojom.SSLConfigSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SSLConfig',
      packedSize: 56,
      fields: [
        { name: 'rev_checking_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'rev_checking_required_local_anchors', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sha1_local_anchors_enabled', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'version_min', packedOffset: 4, packedBitOffset: 0, type: network.mojom.SSLVersionSpec, nullable: false, minVersion: 0 },
        { name: 'version_max', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SSLVersionSpec, nullable: false, minVersion: 0 },
        { name: 'disabled_cipher_suites', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint16, false), nullable: false, minVersion: 0 },
        { name: 'tls13_cipher_prefer_aes_256', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'client_cert_pooling_policy', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'named_groups_preset', packedOffset: 12, packedBitOffset: 0, type: network.mojom.SSLNamedGroupsPresetSpec, nullable: false, minVersion: 0 },
        { name: 'post_quantum_key_agreement_enabled', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ech_enabled', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'trust_anchor_ids', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), nullable: false, minVersion: 0 },
        { name: 'mtc_trust_anchor_ids', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: SSLConfigClient
network.mojom.SSLConfigClient = {};

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

// ParamsSpec for OnSSLConfigUpdated
network.mojom.SSLConfigClient_OnSSLConfigUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SSLConfigClient.OnSSLConfigUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'ssl_config', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SSLConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.SSLConfigClientPtr = network.mojom.SSLConfigClientRemote;
network.mojom.SSLConfigClientRequest = network.mojom.SSLConfigClientPendingReceiver;

