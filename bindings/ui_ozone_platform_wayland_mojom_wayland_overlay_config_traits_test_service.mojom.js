// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/wayland/mojom/wayland_overlay_config_traits_test_service.mojom
// Module: wl.mojom

'use strict';

// Module namespace
var wl = wl || {};
wl.mojom = wl.mojom || {};


// Interface: ConfigTraitsTestService
wl.mojom.ConfigTraitsTestService = {};

wl.mojom.ConfigTraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

wl.mojom.ConfigTraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'wl.mojom.ConfigTraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      wl.mojom.ConfigTraitsTestServicePendingReceiver,
      handle);
    this.$ = new wl.mojom.ConfigTraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

wl.mojom.ConfigTraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoTransform(t) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      wl.mojom.ConfigTraitsTestService_EchoTransform_ParamsSpec.$,
      wl.mojom.ConfigTraitsTestService_EchoTransform_ResponseParamsSpec.$,
      [t]);
  }

};

wl.mojom.ConfigTraitsTestService.getRemote = function() {
  let remote = new wl.mojom.ConfigTraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'wl.mojom.ConfigTraitsTestService',
    'context');
  return remote.$;
};

// ParamsSpec for EchoTransform
wl.mojom.ConfigTraitsTestService_EchoTransform_ParamsSpec = {
  $: {
    structSpec: {
      name: 'wl.mojom.ConfigTraitsTestService.EchoTransform_Params',
      packedSize: 16,
      fields: [
        { name: 't', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

wl.mojom.ConfigTraitsTestService_EchoTransform_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'wl.mojom.ConfigTraitsTestService.EchoTransform_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pass', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
wl.mojom.ConfigTraitsTestServicePtr = wl.mojom.ConfigTraitsTestServiceRemote;
wl.mojom.ConfigTraitsTestServiceRequest = wl.mojom.ConfigTraitsTestServicePendingReceiver;

