// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/subresource_loader_updater.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.SubresourceLoaderUpdater = {};
blink.mojom.SubresourceLoaderUpdater.$interfaceName = 'blink.mojom.SubresourceLoaderUpdater';
blink.mojom.SubresourceLoaderUpdater_UpdateSubresourceLoaderFactories_ParamsSpec = { $: {} };

// Interface: SubresourceLoaderUpdater
mojo.internal.Struct(
    blink.mojom.SubresourceLoaderUpdater_UpdateSubresourceLoaderFactories_ParamsSpec, 'blink.mojom.SubresourceLoaderUpdater_UpdateSubresourceLoaderFactories_Params', [
      mojo.internal.StructField('subresource_loader_factories', 0, 0, blink.mojom.URLLoaderFactoryBundleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SubresourceLoaderUpdaterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SubresourceLoaderUpdaterRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SubresourceLoaderUpdater';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SubresourceLoaderUpdaterPendingReceiver,
      handle);
    this.$ = new blink.mojom.SubresourceLoaderUpdaterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SubresourceLoaderUpdaterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateSubresourceLoaderFactories(subresource_loader_factories) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SubresourceLoaderUpdater_UpdateSubresourceLoaderFactories_ParamsSpec,
      null,
      [subresource_loader_factories],
      false);
  }

};

blink.mojom.SubresourceLoaderUpdater.getRemote = function() {
  let remote = new blink.mojom.SubresourceLoaderUpdaterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SubresourceLoaderUpdater',
    'context');
  return remote.$;
};

blink.mojom.SubresourceLoaderUpdaterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.SubresourceLoaderUpdater_UpdateSubresourceLoaderFactories_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateSubresourceLoaderFactories(params.subresource_loader_factories);
          break;
        }
      }
    });
  }
};

blink.mojom.SubresourceLoaderUpdaterReceiver = blink.mojom.SubresourceLoaderUpdaterReceiver;

blink.mojom.SubresourceLoaderUpdaterPtr = blink.mojom.SubresourceLoaderUpdaterRemote;
blink.mojom.SubresourceLoaderUpdaterRequest = blink.mojom.SubresourceLoaderUpdaterPendingReceiver;

