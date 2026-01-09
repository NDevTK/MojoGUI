// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/installedapp/installed_app_provider.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: InstalledAppProvider
blink.mojom.InstalledAppProvider = {};

blink.mojom.InstalledAppProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.InstalledAppProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.InstalledAppProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.InstalledAppProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.InstalledAppProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.InstalledAppProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  filterInstalledApps(related_apps, manifest_url, add_saved_related_applications) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.InstalledAppProvider_FilterInstalledApps_ParamsSpec.$,
      blink.mojom.InstalledAppProvider_FilterInstalledApps_ResponseParamsSpec.$,
      [related_apps, manifest_url, add_saved_related_applications]);
  }

};

blink.mojom.InstalledAppProvider.getRemote = function() {
  let remote = new blink.mojom.InstalledAppProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.InstalledAppProvider',
    'context');
  return remote.$;
};

// ParamsSpec for FilterInstalledApps
blink.mojom.InstalledAppProvider_FilterInstalledApps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InstalledAppProvider.FilterInstalledApps_Params',
      packedSize: 32,
      fields: [
        { name: 'related_apps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'manifest_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'add_saved_related_applications', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.InstalledAppProvider_FilterInstalledApps_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InstalledAppProvider.FilterInstalledApps_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'installed_apps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.InstalledAppProviderPtr = blink.mojom.InstalledAppProviderRemote;
blink.mojom.InstalledAppProviderRequest = blink.mojom.InstalledAppProviderPendingReceiver;

