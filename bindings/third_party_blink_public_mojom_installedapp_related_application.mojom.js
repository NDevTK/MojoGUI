// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/installedapp/related_application.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.RelatedApplicationSpec = { $: {} };

// Struct: RelatedApplication
mojo.internal.Struct(
    blink.mojom.RelatedApplicationSpec, 'blink.mojom.RelatedApplication', [
      mojo.internal.StructField('platform', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('id', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('version', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);
