// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/public_ip_address_geolocation_provider.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};

device.mojom.PublicIpAddressGeolocationProvider = {};
device.mojom.PublicIpAddressGeolocationProvider.$interfaceName = 'device.mojom.PublicIpAddressGeolocationProvider';
device.mojom.PublicIpAddressGeolocationProvider_CreateGeolocation_ParamsSpec = { $: {} };

// Interface: PublicIpAddressGeolocationProvider
mojo.internal.Struct(
    device.mojom.PublicIpAddressGeolocationProvider_CreateGeolocation_ParamsSpec, 'device.mojom.PublicIpAddressGeolocationProvider_CreateGeolocation_Params', [
      mojo.internal.StructField('tag', 0, 0, network.mojom.MutablePartialNetworkTrafficAnnotationTagSpec, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(device.mojom.GeolocationRemote), null, false, 0, undefined),
      mojo.internal.StructField('client_id', 16, 0, device.mojom.GeolocationClientIdSpec, null, false, 0, undefined),
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

device.mojom.PublicIpAddressGeolocationProviderPtr = device.mojom.PublicIpAddressGeolocationProviderRemote;
device.mojom.PublicIpAddressGeolocationProviderRequest = device.mojom.PublicIpAddressGeolocationProviderPendingReceiver;

