// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_provider.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: ServiceWorkerProviderInfoForStartWorker
blink.mojom.ServiceWorkerProviderInfoForStartWorkerSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerProviderInfoForStartWorker',
      packedSize: 24,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
        { name: 'script_loader_factory_remote', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'cache_storage', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'browser_interface_broker', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
