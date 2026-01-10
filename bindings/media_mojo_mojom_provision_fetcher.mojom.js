// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/provision_fetcher.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var url = url || {};

media.mojom.ProvisionFetcher = {};
media.mojom.ProvisionFetcher.$interfaceName = 'media.mojom.ProvisionFetcher';
media.mojom.ProvisionFetcher_Retrieve_ParamsSpec = { $: {} };
media.mojom.ProvisionFetcher_Retrieve_ResponseParamsSpec = { $: {} };

// Interface: ProvisionFetcher
mojo.internal.Struct(
    media.mojom.ProvisionFetcher_Retrieve_ParamsSpec, 'media.mojom.ProvisionFetcher_Retrieve_Params', [
      mojo.internal.StructField('default_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.ProvisionFetcher_Retrieve_ResponseParamsSpec, 'media.mojom.ProvisionFetcher_Retrieve_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.ProvisionFetcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.ProvisionFetcherRemote = class {
  static get $interfaceName() {
    return 'media.mojom.ProvisionFetcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.ProvisionFetcherPendingReceiver,
      handle);
    this.$ = new media.mojom.ProvisionFetcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.ProvisionFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  retrieve(default_url, request_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.ProvisionFetcher_Retrieve_ParamsSpec,
      media.mojom.ProvisionFetcher_Retrieve_ResponseParamsSpec,
      [default_url, request_data],
      false);
  }

};

media.mojom.ProvisionFetcher.getRemote = function() {
  let remote = new media.mojom.ProvisionFetcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.ProvisionFetcher',
    'context');
  return remote.$;
};

media.mojom.ProvisionFetcherReceiver = class {
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
          const params = media.mojom.ProvisionFetcher_Retrieve_ParamsSpec.$.decode(message.payload);
          const result = this.impl.retrieve(params.default_url, params.request_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.ProvisionFetcher_Retrieve_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

media.mojom.ProvisionFetcherReceiver = media.mojom.ProvisionFetcherReceiver;

media.mojom.ProvisionFetcherPtr = media.mojom.ProvisionFetcherRemote;
media.mojom.ProvisionFetcherRequest = media.mojom.ProvisionFetcherPendingReceiver;

