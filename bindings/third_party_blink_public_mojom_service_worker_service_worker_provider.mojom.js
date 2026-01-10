// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_provider.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};


blink.mojom.kNavigation_ServiceWorkerSpec = "navigation:service_worker";

// Struct: ServiceWorkerProviderInfoForStartWorker
blink.mojom.ServiceWorkerProviderInfoForStartWorkerSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerProviderInfoForStartWorker',
      packedSize: 40,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(blink.mojom.ServiceWorkerContainerHostRemote), nullable: false, minVersion: 0 },
        { name: 'script_loader_factory_remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), nullable: true, minVersion: 0 },
        { name: 'cache_storage', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.CacheStorageRemote), nullable: true, minVersion: 0 },
        { name: 'browser_interface_broker', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.BrowserInterfaceBrokerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
