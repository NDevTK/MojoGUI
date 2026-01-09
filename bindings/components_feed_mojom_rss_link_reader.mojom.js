// Auto-generated MojoJS binding
// Source: chromium_src/components/feed/mojom/rss_link_reader.mojom
// Module: feed.mojom

'use strict';

// Module namespace
var feed = feed || {};
feed.mojom = feed.mojom || {};


// Interface: RssLinkReader
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
};

feed.mojom.RssLinkReaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getRssLinks() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      feed.mojom.RssLinkReader_GetRssLinks_ParamsSpec.$,
      feed.mojom.RssLinkReader_GetRssLinks_ResponseParamsSpec.$,
      []);
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

// ParamsSpec for GetRssLinks
feed.mojom.RssLinkReader_GetRssLinks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'feed.mojom.RssLinkReader.GetRssLinks_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

feed.mojom.RssLinkReader_GetRssLinks_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'feed.mojom.RssLinkReader.GetRssLinks_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'rss_links', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
feed.mojom.RssLinkReaderPtr = feed.mojom.RssLinkReaderRemote;
feed.mojom.RssLinkReaderRequest = feed.mojom.RssLinkReaderPendingReceiver;

