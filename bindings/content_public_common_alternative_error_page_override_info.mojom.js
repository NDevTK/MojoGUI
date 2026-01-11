// Auto-generated MojoJS binding
// Source: chromium_src/content/public/common/alternative_error_page_override_info.mojom
// Module: content.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var mojo_base = mojo_base || {};

content.mojom.AlternativeErrorPageOverrideInfoSpec = { $: {} };

// Struct: AlternativeErrorPageOverrideInfo
mojo.internal.Struct(
    content.mojom.AlternativeErrorPageOverrideInfoSpec, 'content.mojom.AlternativeErrorPageOverrideInfo', [
      mojo.internal.StructField('alternative_error_page_params', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('resource_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);
