// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/fetch_api.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: RequestMode
network.mojom.mojom.RequestMode = {
  kSameOrigin: 0,
  kNoCors: 1,
  kCors: 2,
  kCorsWithForcedPreflight: 3,
  kNavigate: 4,
};
network.mojom.mojom.RequestModeSpec = { $: mojo.internal.Enum() };

// Enum: RequestDestination
network.mojom.mojom.RequestDestination = {
  kEmpty: 0,
  kAudio: 1,
  kAudioWorklet: 2,
  kDocument: 3,
  kEmbed: 4,
  kFont: 5,
  kFrame: 6,
  kIframe: 7,
  kImage: 8,
  kManifest: 9,
  kObject: 10,
  kPaintWorklet: 11,
  kReport: 12,
  kScript: 13,
  kServiceWorker: 14,
  kSharedWorker: 15,
  kStyle: 16,
  kTrack: 17,
  kVideo: 18,
  kWebBundle: 19,
  kWorker: 20,
  kXslt: 21,
  kFencedframe: 22,
  kWebIdentity: 23,
  kDictionary: 24,
  kSpeculationRules: 25,
  kJson: 26,
  kSharedStorageWorklet: 27,
  kEmailVerification: 28,
};
network.mojom.mojom.RequestDestinationSpec = { $: mojo.internal.Enum() };

// Enum: RedirectMode
network.mojom.mojom.RedirectMode = {
  kFollow: 0,
  kError: 1,
  kManual: 2,
};
network.mojom.mojom.RedirectModeSpec = { $: mojo.internal.Enum() };

// Enum: CredentialsMode
network.mojom.mojom.CredentialsMode = {
  kOmit: 0,
  kSameOrigin: 1,
  kInclude: 2,
  kOmitBug_775438_Workaround: 3,
};
network.mojom.mojom.CredentialsModeSpec = { $: mojo.internal.Enum() };

// Enum: FetchResponseType
network.mojom.mojom.FetchResponseType = {
  kBasic: 0,
  kCors: 1,
  kDefault: 2,
  kError: 3,
  kOpaque: 4,
  kOpaqueRedirect: 5,
};
network.mojom.mojom.FetchResponseTypeSpec = { $: mojo.internal.Enum() };

// Enum: FetchResponseSource
network.mojom.mojom.FetchResponseSource = {
  kUnspecified: 0,
  kNetwork: 1,
  kHttpCache: 2,
  kCacheStorage: 3,
};
network.mojom.mojom.FetchResponseSourceSpec = { $: mojo.internal.Enum() };
