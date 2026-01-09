// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/public_ip_address_geolocation_provider.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: PublicIpAddressGeolocationProvider
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
      device.mojom.PublicIpAddressGeolocationProvider_CreateGeolocation_ParamsSpec.$,
      null,
      [tag, receiver, client_id]);
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

// ParamsSpec for CreateGeolocation
device.mojom.PublicIpAddressGeolocationProvider_CreateGeolocation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PublicIpAddressGeolocationProvider.CreateGeolocation_Params',
      packedSize: 32,
      fields: [
        { name: 'tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.PublicIpAddressGeolocationProviderPtr = device.mojom.PublicIpAddressGeolocationProviderRemote;
device.mojom.PublicIpAddressGeolocationProviderRequest = device.mojom.PublicIpAddressGeolocationProviderPendingReceiver;

