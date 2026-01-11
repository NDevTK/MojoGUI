// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/installedapp/installed_app_provider.mojom
// Module: blink.mojom

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
  filterInstalledApps(related_apps, manifest_url, add_saved_related_applications) {
    return this.$.filterInstalledApps(related_apps, manifest_url, add_saved_related_applications);
  }
};

blink.mojom.InstalledAppProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InstalledAppProvider', [
      { explicit: null },
    ]);
  }

  filterInstalledApps(related_apps, manifest_url, add_saved_related_applications) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InstalledAppProvider', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.InstalledAppProvider_FilterInstalledApps_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.InstalledAppProvider_FilterInstalledApps_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

blink.mojom.InstalledAppProviderReceiver = blink.mojom.InstalledAppProviderReceiver;

blink.mojom.InstalledAppProviderPtr = blink.mojom.InstalledAppProviderRemote;
blink.mojom.InstalledAppProviderRequest = blink.mojom.InstalledAppProviderPendingReceiver;

