// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/public_ip_address_geolocation_provider.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var network = network || {};

device.mojom.PublicIpAddressGeolocationProvider = {};
device.mojom.PublicIpAddressGeolocationProvider.$interfaceName = 'device.mojom.PublicIpAddressGeolocationProvider';
device.mojom.PublicIpAddressGeolocationProvider_CreateGeolocation_ParamsSpec = { $: {} };

// Interface: PublicIpAddressGeolocationProvider
mojo.internal.Struct(
    device.mojom.PublicIpAddressGeolocationProvider_CreateGeolocation_ParamsSpec, 'device.mojom.PublicIpAddressGeolocationProvider_CreateGeolocation_Params', [
      mojo.internal.StructField('tag', 0, 0, network.mojom.MutablePartialNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(device.mojom.GeolocationRemote), null, false, 0, undefined),
      mojo.internal.StructField('client_id', 16, 0, device.mojom.GeolocationClientIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

device.mojom.PublicIpAddressGeolocationProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.PublicIpAddressGeolocationProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.PublicIpAddressGeolocationProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.PublicIpAddressGeolocationProviderPendingReceiver,
      handle);
    this.$ = new device.mojom.PublicIpAddressGeolocationProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.PublicIpAddressGeolocationProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createGeolocation(tag, receiver, client_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.PublicIpAddressGeolocationProvider_CreateGeolocation_ParamsSpec,
      null,
      [tag, receiver, client_id],
      false);
  }

};

device.mojom.PublicIpAddressGeolocationProvider.getRemote = function() {
  let remote = new device.mojom.PublicIpAddressGeolocationProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.PublicIpAddressGeolocationProvider',
    'context');
  return remote.$;
};

device.mojom.PublicIpAddressGeolocationProviderReceiver = class {
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
        
        // Try Method 0: CreateGeolocation
        try {
             decoder.decodeStruct(device.mojom.PublicIpAddressGeolocationProvider_CreateGeolocation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateGeolocation (0)');
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
          const params = decoder.decodeStruct(device.mojom.PublicIpAddressGeolocationProvider_CreateGeolocation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createGeolocation');
          const result = this.impl.createGeolocation(params.tag, params.receiver, params.client_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.PublicIpAddressGeolocationProviderReceiver = device.mojom.PublicIpAddressGeolocationProviderReceiver;

device.mojom.PublicIpAddressGeolocationProviderPtr = device.mojom.PublicIpAddressGeolocationProviderRemote;
device.mojom.PublicIpAddressGeolocationProviderRequest = device.mojom.PublicIpAddressGeolocationProviderPendingReceiver;

