// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/media_router_traits_test_service.mojom
// Module: media_router.mojom

'use strict';

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};


// Interface: MediaRouterTraitsTestService
media_router.mojom.MediaRouterTraitsTestServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_router.mojom.MediaRouterTraitsTestService';
  }

  echoMediaSink(s) {
    // Method: EchoMediaSink
    return new Promise((resolve) => {
      // Call: EchoMediaSink(s)
      resolve({});
    });
  }

};

media_router.mojom.MediaRouterTraitsTestServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
