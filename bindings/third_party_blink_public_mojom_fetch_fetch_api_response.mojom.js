// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/fetch/fetch_api_response.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: FetchAPIResponse
blink.mojom.FetchAPIResponseSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FetchAPIResponse',
      packedSize: 144,
      fields: [
        { name: 'url_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
        { name: 'status_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'status_text', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'padding', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'headers', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'mime_type', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'request_method', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'blob', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.SerializedBlobSpec, nullable: true, minVersion: 0 },
        { name: 'response_time', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'cache_storage_cache_name', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'cors_exposed_header_names', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'side_data_blob', packedOffset: 88, packedBitOffset: 0, type: blink.mojom.SerializedBlobSpec, nullable: true, minVersion: 0 },
        { name: 'side_data_blob_for_cache_put', packedOffset: 96, packedBitOffset: 0, type: blink.mojom.SerializedBlobSpec, nullable: true, minVersion: 0 },
        { name: 'parsed_headers', packedOffset: 104, packedBitOffset: 0, type: network.mojom.ParsedHeadersSpec, nullable: true, minVersion: 0 },
        { name: 'connection_info', packedOffset: 112, packedBitOffset: 0, type: network.mojom.ConnectionInfoSpec, nullable: false, minVersion: 0 },
        { name: 'alpn_negotiated_protocol', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'was_fetched_via_spdy', packedOffset: 10, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_range_requested', packedOffset: 10, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'auth_challenge_info', packedOffset: 128, packedBitOffset: 0, type: network.mojom.AuthChallengeInfoSpec, nullable: true, minVersion: 0 },
        { name: 'request_include_credentials', packedOffset: 10, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 144}]
    }
  }
};
