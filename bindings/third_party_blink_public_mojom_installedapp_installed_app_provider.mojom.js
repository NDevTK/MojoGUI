// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/installedapp/installed_app_provider.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.InstalledAppProvider = {};
blink.mojom.InstalledAppProvider.$interfaceName = 'blink.mojom.InstalledAppProvider';
blink.mojom.InstalledAppProvider_FilterInstalledApps_ParamsSpec = { $: {} };
blink.mojom.InstalledAppProvider_FilterInstalledApps_ResponseParamsSpec = { $: {} };

// Interface: InstalledAppProvider
mojo.internal.Struct(
    blink.mojom.InstalledAppProvider_FilterInstalledApps_ParamsSpec, 'blink.mojom.InstalledAppProvider_FilterInstalledApps_Params', [
      mojo.internal.StructField('related_apps', 0, 0, mojo.internal.Array(blink.mojom.RelatedApplicationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('manifest_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('add_saved_related_applications', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.InstalledAppProvider_FilterInstalledApps_ResponseParamsSpec, 'blink.mojom.InstalledAppProvider_FilterInstalledApps_ResponseParams', [
      mojo.internal.StructField('installed_apps', 0, 0, mojo.internal.Array(blink.mojom.RelatedApplicationSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      blink.mojom.InstalledAppProvider_FilterInstalledApps_ParamsSpec,
      blink.mojom.InstalledAppProvider_FilterInstalledApps_ResponseParamsSpec,
      [related_apps, manifest_url, add_saved_related_applications],
      false);
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

blink.mojom.InstalledAppProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.InstalledAppProvider_FilterInstalledApps_ParamsSpec.$.decode(message.payload);
          const result = this.impl.filterInstalledApps(params.related_apps, params.manifest_url, params.add_saved_related_applications);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.InstalledAppProvider_FilterInstalledApps_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

blink.mojom.InstalledAppProviderReceiver = blink.mojom.InstalledAppProviderReceiver;

blink.mojom.InstalledAppProviderPtr = blink.mojom.InstalledAppProviderRemote;
blink.mojom.InstalledAppProviderRequest = blink.mojom.InstalledAppProviderPendingReceiver;

