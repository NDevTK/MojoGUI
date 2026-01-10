// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/fetch/fetch_api_request.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};
var url = url || {};


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
blink.mojom.RequestContextTypeSpec = { $: mojo.internal.Enum() };

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
blink.mojom.FetchCacheModeSpec = { $: mojo.internal.Enum() };

// Enum: FetchPriorityHint
blink.mojom.FetchPriorityHint = {
  kLow: 0,
  kAuto: 1,
  kHigh: 2,
};
blink.mojom.FetchPriorityHintSpec = { $: mojo.internal.Enum() };

// Struct: FetchAPIRequestHeaders
blink.mojom.FetchAPIRequestHeadersSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FetchAPIRequestHeaders',
      packedSize: 16,
      fields: [
        { name: 'headers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FetchAPIRequestBody
blink.mojom.FetchAPIRequestBodySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FetchAPIRequestBody',
      packedSize: 32,
      fields: [
        { name: 'elements', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.DataElementSpec, false), nullable: false, minVersion: 0 },
        { name: 'identifier', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'contains_sensitive_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: FetchAPIRequest
blink.mojom.FetchAPIRequestSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FetchAPIRequest',
      packedSize: 144,
      fields: [
        { name: 'mode', packedOffset: 104, packedBitOffset: 0, type: network.mojom.RequestModeSpec, nullable: false, minVersion: 0 },
        { name: 'is_main_resource_load', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'destination', packedOffset: 108, packedBitOffset: 0, type: network.mojom.RequestDestinationSpec, nullable: false, minVersion: 0 },
        { name: 'frame_type', packedOffset: 112, packedBitOffset: 0, type: blink.mojom.RequestContextFrameTypeSpec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'method', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'headers', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.FetchAPIRequestHeadersSpec, nullable: false, minVersion: 0 },
        { name: 'blob', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.SerializedBlobSpec, nullable: true, minVersion: 0 },
        { name: 'body', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.FetchAPIRequestBodySpec, nullable: true, minVersion: 0 },
        { name: 'request_initiator', packedOffset: 40, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'navigation_redirect_chain', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
        { name: 'referrer', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.ReferrerSpec, nullable: true, minVersion: 0 },
        { name: 'cache_mode', packedOffset: 116, packedBitOffset: 0, type: blink.mojom.FetchCacheModeSpec, nullable: false, minVersion: 0 },
        { name: 'integrity', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'priority', packedOffset: 120, packedBitOffset: 0, type: network.mojom.RequestPrioritySpec, nullable: false, minVersion: 0 },
        { name: 'fetch_window_id', packedOffset: 72, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'keepalive', packedOffset: 128, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_reload', packedOffset: 128, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_history_navigation', packedOffset: 128, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'devtools_stack_id', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'trust_token_params', packedOffset: 88, packedBitOffset: 0, type: network.mojom.TrustTokenParamsSpec, nullable: true, minVersion: 0 },
        { name: 'target_address_space', packedOffset: 124, packedBitOffset: 0, type: network.mojom.IPAddressSpaceSpec, nullable: false, minVersion: 0 },
        { name: 'service_worker_race_network_request_token', packedOffset: 96, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 144}]
    }
  }
};
