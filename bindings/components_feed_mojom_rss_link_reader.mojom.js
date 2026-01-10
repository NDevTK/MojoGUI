// Auto-generated MojoJS binding
// Source: chromium_src/components/feed/mojom/rss_link_reader.mojom
// Module: feed.mojom

'use strict';

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
      mojo.internal.StructField('page_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('links', 8, 0, mojo.internal.Array(url.mojom.UrlSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: RssLinkReader
mojo.internal.Struct(
    feed.mojom.RssLinkReader_GetRssLinks_ParamsSpec, 'feed.mojom.RssLinkReader_GetRssLinks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    feed.mojom.RssLinkReader_GetRssLinks_ResponseParamsSpec, 'feed.mojom.RssLinkReader_GetRssLinks_ResponseParams', [
      mojo.internal.StructField('rss_links', 0, 0, feed.mojom.RssLinksSpec, null, false, 0, undefined),
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
};

feed.mojom.RssLinkReaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getRssLinks() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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

feed.mojom.RssLinkReaderPtr = feed.mojom.RssLinkReaderRemote;
feed.mojom.RssLinkReaderRequest = feed.mojom.RssLinkReaderPendingReceiver;

