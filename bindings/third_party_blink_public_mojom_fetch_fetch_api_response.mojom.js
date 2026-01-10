// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/fetch/fetch_api_response.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};

blink.mojom.FetchAPIResponseSpec = { $: {} };

// Struct: FetchAPIResponse
mojo.internal.Struct(
    blink.mojom.FetchAPIResponseSpec, 'blink.mojom.FetchAPIResponse', [
      mojo.internal.StructField('url_list', 0, 0, mojo.internal.Array(url.mojom.UrlSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('status_code', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('status_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('padding', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('headers', 32, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('request_method', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('blob', 56, 0, blink.mojom.SerializedBlobSpec, null, true, 0, undefined),
      mojo.internal.StructField('response_time', 64, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('cache_storage_cache_name', 72, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('cors_exposed_header_names', 80, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('side_data_blob', 88, 0, blink.mojom.SerializedBlobSpec, null, true, 0, undefined),
      mojo.internal.StructField('side_data_blob_for_cache_put', 96, 0, blink.mojom.SerializedBlobSpec, null, true, 0, undefined),
      mojo.internal.StructField('parsed_headers', 104, 0, network.mojom.ParsedHeadersSpec, null, true, 0, undefined),
      mojo.internal.StructField('connection_info', 112, 0, network.mojom.ConnectionInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('alpn_negotiated_protocol', 120, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('was_fetched_via_spdy', 128, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_range_requested', 128, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('auth_challenge_info', 136, 0, network.mojom.AuthChallengeInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('request_include_credentials', 144, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 160]]);
