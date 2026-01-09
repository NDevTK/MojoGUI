// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/fetch/fetch_api_request.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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
blink.mojom.FetchAPIRequestHeadersSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FetchAPIRequestHeaders',
      packedSize: 16,
      fields: [
        { name: 'headers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'elements', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'identifier', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'contains_sensitive_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FetchAPIRequest
blink.mojom.FetchAPIRequestSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FetchAPIRequest',
      packedSize: 168,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'destination', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'frame_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'url', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'method', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'headers', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'blob', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'body', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'request_initiator', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'navigation_redirect_chain', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'referrer', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'cache_mode', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'integrity', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'priority', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'fetch_window_id', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'devtools_stack_id', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'trust_token_params', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'target_address_space', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'service_worker_race_network_request_token', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'is_main_resource_load', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'keepalive', packedOffset: 152, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_reload', packedOffset: 152, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'is_history_navigation', packedOffset: 152, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
