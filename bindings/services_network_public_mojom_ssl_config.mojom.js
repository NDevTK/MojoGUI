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

// Enum: SSLNamedGroupsPreset
network.mojom.SSLNamedGroupsPreset = {
  kDefault: 0,
  kCnsa2: 1,
};

// Struct: SSLConfig
network.mojom.SSLConfigSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SSLConfig',
      packedSize: 72,
      fields: [
        { name: 'version_min', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'version_max', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'disabled_cipher_suites', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'client_cert_pooling_policy', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'named_groups_preset', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'trust_anchor_ids', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'mtc_trust_anchor_ids', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'rev_checking_enabled', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'rev_checking_required_local_anchors', packedOffset: 56, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'sha1_local_anchors_enabled', packedOffset: 56, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'tls13_cipher_prefer_aes_256', packedOffset: 56, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'post_quantum_key_agreement_enabled', packedOffset: 56, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'ech_enabled', packedOffset: 56, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'ssl_config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.SSLConfigClientPtr = network.mojom.SSLConfigClientRemote;
network.mojom.SSLConfigClientRequest = network.mojom.SSLConfigClientPendingReceiver;

