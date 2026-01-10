// Auto-generated MojoJS binding
// Source: chromium_src/components/feed/mojom/rss_link_reader.mojom
// Module: feed.mojom

'use strict';

// Module namespace
var feed = feed || {};
feed.mojom = feed.mojom || {};
var url = url || {};


// Struct: RssLinks
feed.mojom.mojom.RssLinksSpec = {
  $: {
    structSpec: {
      name: 'feed.mojom.RssLinks',
      packedSize: 24,
      fields: [
        { name: 'page_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'links', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: RssLinkReader
feed.mojom.mojom.RssLinkReader = {};

feed.mojom.mojom.RssLinkReaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

feed.mojom.mojom.RssLinkReaderRemote = class {
  static get $interfaceName() {
    return 'feed.mojom.RssLinkReader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      feed.mojom.mojom.RssLinkReaderPendingReceiver,
      handle);
    this.$ = new feed.mojom.mojom.RssLinkReaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

feed.mojom.mojom.RssLinkReaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getRssLinks() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      feed.mojom.mojom.RssLinkReader_GetRssLinks_ParamsSpec,
      feed.mojom.mojom.RssLinkReader_GetRssLinks_ResponseParamsSpec,
      []);
  }

};

feed.mojom.mojom.RssLinkReader.getRemote = function() {
  let remote = new feed.mojom.mojom.RssLinkReaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'feed.mojom.RssLinkReader',
    'context');
  return remote.$;
};

// ParamsSpec for GetRssLinks
feed.mojom.mojom.RssLinkReader_GetRssLinks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'feed.mojom.RssLinkReader.GetRssLinks_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

feed.mojom.mojom.RssLinkReader_GetRssLinks_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'feed.mojom.RssLinkReader.GetRssLinks_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'rss_links', packedOffset: 0, packedBitOffset: 0, type: feed.mojom.RssLinksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
feed.mojom.mojom.RssLinkReaderPtr = feed.mojom.mojom.RssLinkReaderRemote;
feed.mojom.mojom.RssLinkReaderRequest = feed.mojom.mojom.RssLinkReaderPendingReceiver;

