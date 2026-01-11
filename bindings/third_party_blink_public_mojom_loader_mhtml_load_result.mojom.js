// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/mhtml_load_result.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.MHTMLLoadResultSpec = { $: mojo.internal.Enum() };

// Enum: MHTMLLoadResult
blink.mojom.MHTMLLoadResult = {
  kSuccess: 0,
  kEmptyFile: 1,
  kUrlSchemeNotAllowed: 2,
  kInvalidArchive: 3,
  kMissingMainResource: 4,
};
