// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/in_progress_auction_download.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};
var network = network || {};
var url = url || {};

auction_worklet.mojom.InProgressAuctionDownloadSpec = { $: {} };

// Struct: InProgressAuctionDownload
mojo.internal.Struct(
    auction_worklet.mojom.InProgressAuctionDownloadSpec, 'auction_worklet.mojom.InProgressAuctionDownload', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('endpoints', 8, 0, network.mojom.URLLoaderClientEndpointsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_request_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);
