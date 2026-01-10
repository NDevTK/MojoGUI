// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/in_progress_auction_download.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};
var url = url || {};


// Struct: InProgressAuctionDownload
auction_worklet.mojom.mojom.InProgressAuctionDownloadSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.InProgressAuctionDownload',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'endpoints', packedOffset: 8, packedBitOffset: 0, type: network.mojom.URLLoaderClientEndpointsSpec, nullable: false, minVersion: 0 },
        { name: 'devtools_request_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
