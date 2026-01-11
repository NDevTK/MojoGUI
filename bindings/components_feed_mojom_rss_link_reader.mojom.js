// Auto-generated MojoJS binding
// Source: chromium_src/components/feed/mojom/rss_link_reader.mojom
// Module: feed.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var feed = feed || {};
feed.mojom = feed.mojom || {};
var url = url || {};

feed.mojom.RssLinksSpec = { $: {} };
feed.mojom.RssLinkReader = {};
feed.mojom.RssLinkReader.$interfaceName = 'feed.mojom.RssLinkReader';
feed.mojom.RssLinkReader_GetRssLinks_ParamsSpec = { $: {} };
feed.mojom.RssLinkReader_GetRssLinks_ResponseParamsSpec = { $: {} };

// Struct: RssLinks
mojo.internal.Struct(
    feed.mojom.RssLinksSpec, 'feed.mojom.RssLinks', [
      mojo.internal.StructField('page_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('links', 8, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: RssLinkReader
mojo.internal.Struct(
    feed.mojom.RssLinkReader_GetRssLinks_ParamsSpec, 'feed.mojom.RssLinkReader_GetRssLinks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    feed.mojom.RssLinkReader_GetRssLinks_ResponseParamsSpec, 'feed.mojom.RssLinkReader_GetRssLinks_ResponseParams', [
      mojo.internal.StructField('rss_links', 0, 0, feed.mojom.RssLinksSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

feed.mojom.RssLinkReaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

feed.mojom.RssLinkReaderRemote = class {
  static get $interfaceName() {
    return 'feed.mojom.RssLinkReader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      feed.mojom.RssLinkReaderPendingReceiver,
      handle);
    this.$ = new feed.mojom.RssLinkReaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getRssLinks() {
    return this.$.getRssLinks();
  }
};

feed.mojom.RssLinkReaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RssLinkReader', [
      { explicit: null },
    ]);
  }

  getRssLinks() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      feed.mojom.RssLinkReader_GetRssLinks_ParamsSpec,
      feed.mojom.RssLinkReader_GetRssLinks_ResponseParamsSpec,
      [],
      false);
  }

};

feed.mojom.RssLinkReader.getRemote = function() {
  let remote = new feed.mojom.RssLinkReaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'feed.mojom.RssLinkReader',
    'context');
  return remote.$;
};

feed.mojom.RssLinkReaderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RssLinkReader', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed.mojom.RssLinkReader_GetRssLinks_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed.mojom.RssLinkReader_GetRssLinks_ParamsSpec.$.structSpec);
          const result = this.impl.getRssLinks();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, feed.mojom.RssLinkReader_GetRssLinks_ResponseParamsSpec);
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

feed.mojom.RssLinkReaderReceiver = feed.mojom.RssLinkReaderReceiver;

feed.mojom.RssLinkReaderPtr = feed.mojom.RssLinkReaderRemote;
feed.mojom.RssLinkReaderRequest = feed.mojom.RssLinkReaderPendingReceiver;

