// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_provider.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var network = network || {};

blink.mojom.ServiceWorkerProviderInfoForStartWorkerSpec = { $: {} };

blink.mojom.kNavigation_ServiceWorkerSpec = "navigation:service_worker";

// Struct: ServiceWorkerProviderInfoForStartWorker
mojo.internal.Struct(
    blink.mojom.ServiceWorkerProviderInfoForStartWorkerSpec, 'blink.mojom.ServiceWorkerProviderInfoForStartWorker', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('script_loader_factory_remote', 8, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('cache_storage', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.CacheStorageRemote), null, true, 0, undefined),
      mojo.internal.StructField('browser_interface_broker', 24, 0, mojo.internal.InterfaceProxy(blink.mojom.BrowserInterfaceBrokerRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);
