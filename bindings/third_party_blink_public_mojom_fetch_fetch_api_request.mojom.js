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
