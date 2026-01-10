// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/provision_fetcher.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var url = url || {};


// Interface: ProvisionFetcher
media.mojom.mojom.ProvisionFetcher = {};

media.mojom.mojom.ProvisionFetcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.ProvisionFetcherRemote = class {
  static get $interfaceName() {
    return 'media.mojom.ProvisionFetcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.ProvisionFetcherPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.ProvisionFetcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.ProvisionFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  retrieve(default_url, request_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.ProvisionFetcher_Retrieve_ParamsSpec,
      media.mojom.mojom.ProvisionFetcher_Retrieve_ResponseParamsSpec,
      [default_url, request_data]);
  }

};

media.mojom.mojom.ProvisionFetcher.getRemote = function() {
  let remote = new media.mojom.mojom.ProvisionFetcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.ProvisionFetcher',
    'context');
  return remote.$;
};

// ParamsSpec for Retrieve
media.mojom.mojom.ProvisionFetcher_Retrieve_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ProvisionFetcher.Retrieve_Params',
      packedSize: 24,
      fields: [
        { name: 'default_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'request_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.mojom.ProvisionFetcher_Retrieve_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ProvisionFetcher.Retrieve_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.ProvisionFetcherPtr = media.mojom.mojom.ProvisionFetcherRemote;
media.mojom.mojom.ProvisionFetcherRequest = media.mojom.mojom.ProvisionFetcherPendingReceiver;

