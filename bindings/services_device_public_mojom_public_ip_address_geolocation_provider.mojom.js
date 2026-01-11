// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/public_ip_address_geolocation_provider.mojom
// Module: device.mojom

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
  createGeolocation(tag, receiver, client_id) {
    return this.$.createGeolocation(tag, receiver, client_id);
  }
};

device.mojom.PublicIpAddressGeolocationProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PublicIpAddressGeolocationProvider', [
      { explicit: null },
    ]);
  }

  createGeolocation(tag, receiver, client_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PublicIpAddressGeolocationProvider', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.PublicIpAddressGeolocationProvider_CreateGeolocation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.PublicIpAddressGeolocationProvider_CreateGeolocation_ParamsSpec.$.structSpec);
          const result = this.impl.createGeolocation(params.tag, params.receiver, params.client_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.PublicIpAddressGeolocationProviderReceiver = device.mojom.PublicIpAddressGeolocationProviderReceiver;

device.mojom.PublicIpAddressGeolocationProviderPtr = device.mojom.PublicIpAddressGeolocationProviderRemote;
device.mojom.PublicIpAddressGeolocationProviderRequest = device.mojom.PublicIpAddressGeolocationProviderPendingReceiver;

