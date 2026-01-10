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
      mojo.internal.StructField('version_min', 0, 0, network.mojom.SSLVersionSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('version_max', 8, 0, network.mojom.SSLVersionSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('disabled_cipher_suites', 16, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('client_cert_pooling_policy', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('named_groups_preset', 32, 0, network.mojom.SSLNamedGroupsPresetSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('trust_anchor_ids', 40, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('mtc_trust_anchor_ids', 48, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('rev_checking_enabled', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('rev_checking_required_local_anchors', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sha1_local_anchors_enabled', 56, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('tls13_cipher_prefer_aes_256', 56, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('post_quantum_key_agreement_enabled', 56, 4, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('ech_enabled', 56, 5, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 72]]);

// Interface: SSLConfigClient
mojo.internal.Struct(
    network.mojom.SSLConfigClient_OnSSLConfigUpdated_ParamsSpec, 'network.mojom.SSLConfigClient_OnSSLConfigUpdated_Params', [
      mojo.internal.StructField('ssl_config', 0, 0, network.mojom.SSLConfigSpec.$, null, false, 0, undefined),
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
      [ssl_config],
      false);
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

network.mojom.SSLConfigClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnSSLConfigUpdated
        try {
             decoder.decodeStruct(network.mojom.SSLConfigClient_OnSSLConfigUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSSLConfigUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.SSLConfigClient_OnSSLConfigUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSSLConfigUpdated');
          const result = this.impl.onSSLConfigUpdated(params.ssl_config);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.SSLConfigClientReceiver = network.mojom.SSLConfigClientReceiver;

network.mojom.SSLConfigClientPtr = network.mojom.SSLConfigClientRemote;
network.mojom.SSLConfigClientRequest = network.mojom.SSLConfigClientPendingReceiver;

