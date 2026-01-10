// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/sharing.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};
var nearby = nearby || {};
var ash = ash || {};
var chromeos = chromeos || {};
var bluetooth = bluetooth || {};
var sandbox = sandbox || {};

sharing.mojom.WifiLanDependenciesSpec = { $: {} };
sharing.mojom.WifiDirectDependenciesSpec = { $: {} };
sharing.mojom.NearbyDependenciesSpec = { $: {} };
sharing.mojom.Sharing = {};
sharing.mojom.Sharing.$interfaceName = 'sharing.mojom.Sharing';
sharing.mojom.Sharing_Connect_ParamsSpec = { $: {} };
sharing.mojom.Sharing_ShutDown_ParamsSpec = { $: {} };
sharing.mojom.Sharing_ShutDown_ResponseParamsSpec = { $: {} };

// Struct: WifiLanDependencies
mojo.internal.Struct(
    sharing.mojom.WifiLanDependenciesSpec, 'sharing.mojom.WifiLanDependencies', [
      mojo.internal.StructField('cros_network_config', 0, 0, mojo.internal.InterfaceProxy(chromeos.network_config.mojom.CrosNetworkConfigRemote), null, false, 0, undefined),
      mojo.internal.StructField('firewall_hole_factory', 8, 0, mojo.internal.InterfaceProxy(sharing.mojom.FirewallHoleFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('tcp_socket_factory', 16, 0, mojo.internal.InterfaceProxy(sharing.mojom.TcpSocketFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('mdns_manager', 24, 0, mojo.internal.InterfaceProxy(sharing.mojom.MdnsManagerRemote), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: WifiDirectDependencies
mojo.internal.Struct(
    sharing.mojom.WifiDirectDependenciesSpec, 'sharing.mojom.WifiDirectDependencies', [
      mojo.internal.StructField('wifi_direct_manager', 0, 0, mojo.internal.InterfaceProxy(ash.wifi_direct.mojom.WifiDirectManagerRemote), null, false, 0, undefined),
      mojo.internal.StructField('firewall_hole_factory', 8, 0, mojo.internal.InterfaceProxy(sharing.mojom.FirewallHoleFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NearbyDependencies
mojo.internal.Struct(
    sharing.mojom.NearbyDependenciesSpec, 'sharing.mojom.NearbyDependencies', [
      mojo.internal.StructField('bluetooth_adapter', 0, 0, mojo.internal.InterfaceProxy(bluetooth.mojom.AdapterRemote), null, true, 0, undefined),
      mojo.internal.StructField('webrtc_dependencies', 8, 0, sharing.mojom.WebRtcDependenciesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wifilan_dependencies', 16, 0, sharing.mojom.WifiLanDependenciesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('wifidirect_dependencies', 24, 0, sharing.mojom.WifiDirectDependenciesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('nearby_presence_credential_storage', 32, 0, mojo.internal.InterfaceProxy(ash.nearby.presence.mojom.NearbyPresenceCredentialStorageRemote), null, true, 0, undefined),
    ],
    [[0, 48]]);

// Interface: Sharing
mojo.internal.Struct(
    sharing.mojom.Sharing_Connect_ParamsSpec, 'sharing.mojom.Sharing_Connect_Params', [
      mojo.internal.StructField('deps', 0, 0, sharing.mojom.NearbyDependenciesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('nearby_connections', 8, 0, mojo.internal.InterfaceRequest(nearby.connections.mojom.NearbyConnectionsRemote), null, false, 0, undefined),
      mojo.internal.StructField('nearby_presence', 16, 0, mojo.internal.InterfaceRequest(ash.nearby.presence.mojom.NearbyPresenceRemote), null, false, 0, undefined),
      mojo.internal.StructField('decoder', 24, 0, mojo.internal.InterfaceRequest(sharing.mojom.NearbySharingDecoderRemote), null, false, 0, undefined),
      mojo.internal.StructField('quick_start_decoder', 32, 0, mojo.internal.InterfaceRequest(ash.quick_start.mojom.QuickStartDecoderRemote), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    sharing.mojom.Sharing_ShutDown_ParamsSpec, 'sharing.mojom.Sharing_ShutDown_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    sharing.mojom.Sharing_ShutDown_ResponseParamsSpec, 'sharing.mojom.Sharing_ShutDown_ResponseParams', [
    ],
    [[0, 8]]);

sharing.mojom.SharingPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.SharingRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.Sharing';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.SharingPendingReceiver,
      handle);
    this.$ = new sharing.mojom.SharingRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.SharingRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(deps, nearby_connections, nearby_presence, decoder, quick_start_decoder) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.Sharing_Connect_ParamsSpec,
      null,
      [deps, nearby_connections, nearby_presence, decoder, quick_start_decoder],
      false);
  }

  shutDown() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      sharing.mojom.Sharing_ShutDown_ParamsSpec,
      sharing.mojom.Sharing_ShutDown_ResponseParamsSpec,
      [],
      false);
  }

};

sharing.mojom.Sharing.getRemote = function() {
  let remote = new sharing.mojom.SharingRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.Sharing',
    'context');
  return remote.$;
};

sharing.mojom.SharingReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: Connect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(sharing.mojom.Sharing_Connect_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Connect (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: ShutDown
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(sharing.mojom.Sharing_ShutDown_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShutDown (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(sharing.mojom.Sharing_Connect_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.deps, params.nearby_connections, params.nearby_presence, params.decoder, params.quick_start_decoder);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(sharing.mojom.Sharing_ShutDown_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.shutDown');
          const result = this.impl.shutDown();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, sharing.mojom.Sharing_ShutDown_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

sharing.mojom.SharingReceiver = sharing.mojom.SharingReceiver;

sharing.mojom.SharingPtr = sharing.mojom.SharingRemote;
sharing.mojom.SharingRequest = sharing.mojom.SharingPendingReceiver;

