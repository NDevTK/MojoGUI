// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/fetch/fetch_api_request.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var url = url || {};

blink.mojom.RequestContextTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.FetchCacheModeSpec = { $: mojo.internal.Enum() };
blink.mojom.FetchPriorityHintSpec = { $: mojo.internal.Enum() };
blink.mojom.FetchAPIRequestHeadersSpec = { $: {} };
blink.mojom.FetchAPIRequestBodySpec = { $: {} };
blink.mojom.FetchAPIRequestSpec = { $: {} };

// Enum: RequestContextType
blink.mojom.RequestContextType = {
  UNSPECIFIED: 0,
  ATTRIBUTION_SRC: 1,
  AUDIO: 2,
  BEACON: 3,
  CSP_REPORT: 4,
  DOWNLOAD: 5,
  EMBED: 6,
  EVENT_SOURCE: 7,
  FAVICON: 8,
  FETCH: 9,
  FONT: 10,
  FORM: 11,
  FRAME: 12,
  HYPERLINK: 13,
  IFRAME: 14,
  IMAGE: 15,
  IMAGE_SET: 16,
  INTERNAL: 17,
  JSON: 18,
  LOCATION: 19,
  MANIFEST: 20,
  OBJECT: 21,
  PING: 22,
  PLUGIN: 23,
  PREFETCH: 24,
  SCRIPT: 25,
  SERVICE_WORKER: 26,
  SHARED_WORKER: 27,
  SPECULATION_RULES: 28,
  SUBRESOURCE: 29,
  SUBRESOURCE_WEBBUNDLE: 30,
  STYLE: 31,
  TRACK: 32,
  VIDEO: 33,
  WORKER: 34,
  XML_HTTP_REQUEST: 35,
  XSLT: 36,
};

// Enum: FetchCacheMode
blink.mojom.FetchCacheMode = {
  kDefault: 0,
  kNoStore: 1,
  kBypassCache: 2,
  kValidateCache: 3,
  kForceCache: 4,
  kOnlyIfCached: 5,
  kUnspecifiedOnlyIfCachedStrict: 6,
  kUnspecifiedForceCacheMiss: 7,
};

// Enum: FetchPriorityHint
blink.mojom.FetchPriorityHint = {
  kLow: 0,
  kAuto: 1,
  kHigh: 2,
};

// Struct: FetchAPIRequestHeaders
mojo.internal.Struct(
    blink.mojom.FetchAPIRequestHeadersSpec, 'blink.mojom.FetchAPIRequestHeaders', [
      mojo.internal.StructField('headers', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FetchAPIRequestBody
mojo.internal.Struct(
    blink.mojom.FetchAPIRequestBodySpec, 'blink.mojom.FetchAPIRequestBody', [
      mojo.internal.StructField('elements', 0, 0, mojo.internal.Array(network.mojom.DataElementSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('identifier', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('contains_sensitive_info', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: FetchAPIRequest
mojo.internal.Struct(
    blink.mojom.FetchAPIRequestSpec, 'blink.mojom.FetchAPIRequest', [
      mojo.internal.StructField('mode', 0, 0, network.mojom.RequestModeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('destination', 8, 0, network.mojom.RequestDestinationSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('frame_type', 16, 0, blink.mojom.RequestContextFrameTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('method', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('headers', 40, 0, blink.mojom.FetchAPIRequestHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('blob', 48, 0, blink.mojom.SerializedBlobSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('body', 56, 0, blink.mojom.FetchAPIRequestBodySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('request_initiator', 64, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('navigation_redirect_chain', 72, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('referrer', 80, 0, blink.mojom.ReferrerSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cache_mode', 88, 0, blink.mojom.FetchCacheModeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('integrity', 96, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('priority', 104, 0, network.mojom.RequestPrioritySpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('fetch_window_id', 112, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('devtools_stack_id', 120, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('trust_token_params', 128, 0, network.mojom.TrustTokenParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('target_address_space', 136, 0, network.mojom.IPAddressSpaceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('service_worker_race_network_request_token', 144, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_main_resource_load', 152, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('keepalive', 152, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_reload', 152, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_history_navigation', 152, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 168]]);
