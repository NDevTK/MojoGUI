// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/provision_fetcher.mojom
// Module: media.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  retrieve(default_url, request_data) {
    return this.$.retrieve(default_url, request_data);
  }
};

media.mojom.ProvisionFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProvisionFetcher', [
      { explicit: null },
    ]);
  }

  retrieve(default_url, request_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProvisionFetcher', [
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
             decoder.decodeStructInline(media.mojom.ProvisionFetcher_Retrieve_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.ProvisionFetcher_Retrieve_ParamsSpec.$.structSpec);
          const result = this.impl.retrieve(params.default_url, params.request_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.ProvisionFetcher_Retrieve_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

media.mojom.ProvisionFetcherReceiver = media.mojom.ProvisionFetcherReceiver;

media.mojom.ProvisionFetcherPtr = media.mojom.ProvisionFetcherRemote;
media.mojom.ProvisionFetcherRequest = media.mojom.ProvisionFetcherPendingReceiver;

