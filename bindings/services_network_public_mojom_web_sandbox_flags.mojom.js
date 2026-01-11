// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/web_sandbox_flags.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.WebSandboxFlagsSpec = { $: mojo.internal.Enum() };

// Enum: WebSandboxFlags
network.mojom.WebSandboxFlags = {
  kNone: 0,
  kNavigation: 1,
  kPlugins: 2,
  kOrigin: 4,
  kForms: 8,
  kScripts: 16,
  kTopNavigation: 32,
  kPopups: 64,
  kAutomaticFeatures: 128,
  kPointerLock: 256,
  kDocumentDomain: 512,
  kOrientationLock: 1024,
  kPropagatesToAuxiliaryBrowsingContexts: 2048,
  kModals: 4096,
  kPresentationController: 8192,
  kTopNavigationByUserActivation: 16384,
  kDownloads: 32768,
  kStorageAccessByUserActivation: 65536,
  kTopNavigationToCustomProtocols: 131072,
  kAllowSameSiteNoneCookies: 262144,
  kAll: -1,
};
