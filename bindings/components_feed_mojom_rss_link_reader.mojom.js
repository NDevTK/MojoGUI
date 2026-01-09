// Auto-generated MojoJS binding
// Source: chromium_src/components/feed/mojom/rss_link_reader.mojom
// Module: feed.mojom

'use strict';

// Module namespace
var feed = feed || {};
feed.mojom = feed.mojom || {};


// Struct: RssLinks
feed.mojom.RssLinks = class {
  constructor(values = {}) {
    this.links = values.links !== undefined ? values.links : [];
  }
};

// Interface: RssLinkReader
feed.mojom.RssLinkReaderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'feed.mojom.RssLinkReader';
  }

  getRssLinks() {
    // Method: GetRssLinks
    return new Promise((resolve) => {
      // Call: GetRssLinks()
      resolve({});
    });
  }

};

feed.mojom.RssLinkReaderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
