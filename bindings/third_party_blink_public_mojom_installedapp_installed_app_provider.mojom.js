// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/installedapp/installed_app_provider.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};


// Interface: InstalledAppProvider
blink.mojom.mojom.InstalledAppProvider = {};

blink.mojom.mojom.InstalledAppProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.InstalledAppProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.InstalledAppProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.InstalledAppProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.InstalledAppProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.InstalledAppProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  filterInstalledApps(related_apps, manifest_url, add_saved_related_applications) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.InstalledAppProvider_FilterInstalledApps_ParamsSpec,
      blink.mojom.mojom.InstalledAppProvider_FilterInstalledApps_ResponseParamsSpec,
      [related_apps, manifest_url, add_saved_related_applications]);
  }

};

blink.mojom.mojom.InstalledAppProvider.getRemote = function() {
  let remote = new blink.mojom.mojom.InstalledAppProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.InstalledAppProvider',
    'context');
  return remote.$;
};

// ParamsSpec for FilterInstalledApps
blink.mojom.mojom.InstalledAppProvider_FilterInstalledApps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InstalledAppProvider.FilterInstalledApps_Params',
      packedSize: 32,
      fields: [
        { name: 'related_apps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.RelatedApplicationSpec, false), nullable: false, minVersion: 0 },
        { name: 'manifest_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'add_saved_related_applications', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.mojom.InstalledAppProvider_FilterInstalledApps_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InstalledAppProvider.FilterInstalledApps_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'installed_apps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.RelatedApplicationSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.InstalledAppProviderPtr = blink.mojom.mojom.InstalledAppProviderRemote;
blink.mojom.mojom.InstalledAppProviderRequest = blink.mojom.mojom.InstalledAppProviderPendingReceiver;

