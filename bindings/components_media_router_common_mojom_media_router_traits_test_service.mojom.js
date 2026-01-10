// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/media_router_traits_test_service.mojom
// Module: media_router.mojom

'use strict';

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};


// Interface: MediaRouterTraitsTestService
media_router.mojom.MediaRouterTraitsTestService = {};

media_router.mojom.MediaRouterTraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_router.mojom.MediaRouterTraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'media_router.mojom.MediaRouterTraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_router.mojom.MediaRouterTraitsTestServicePendingReceiver,
      handle);
    this.$ = new media_router.mojom.MediaRouterTraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_router.mojom.MediaRouterTraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoMediaSink(s) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_router.mojom.MediaRouterTraitsTestService_EchoMediaSink_ParamsSpec,
      media_router.mojom.MediaRouterTraitsTestService_EchoMediaSink_ResponseParamsSpec,
      [s]);
  }

};

media_router.mojom.MediaRouterTraitsTestService.getRemote = function() {
  let remote = new media_router.mojom.MediaRouterTraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_router.mojom.MediaRouterTraitsTestService',
    'context');
  return remote.$;
};

// ParamsSpec for EchoMediaSink
media_router.mojom.MediaRouterTraitsTestService_EchoMediaSink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouterTraitsTestService.EchoMediaSink_Params',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: media_router.mojom.MediaSinkSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_router.mojom.MediaRouterTraitsTestService_EchoMediaSink_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouterTraitsTestService.EchoMediaSink_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'sink', packedOffset: 0, packedBitOffset: 0, type: media_router.mojom.MediaSinkSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media_router.mojom.MediaRouterTraitsTestServicePtr = media_router.mojom.MediaRouterTraitsTestServiceRemote;
media_router.mojom.MediaRouterTraitsTestServiceRequest = media_router.mojom.MediaRouterTraitsTestServicePendingReceiver;

