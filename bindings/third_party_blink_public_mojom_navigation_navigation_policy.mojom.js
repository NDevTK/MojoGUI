// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/navigation/navigation_policy.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.NavigationDownloadTypesSpec = { $: {} };
blink.mojom.NavigationDownloadPolicySpec = { $: {} };

// Struct: NavigationDownloadTypes
mojo.internal.Struct(
    blink.mojom.NavigationDownloadTypesSpec, 'blink.mojom.NavigationDownloadTypes', [
      mojo.internal.StructField('view_source', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('interstitial', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('opener_cross_origin', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ad_frame_no_gesture', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ad_frame', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sandbox', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('no_gesture', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: NavigationDownloadPolicy
mojo.internal.Struct(
    blink.mojom.NavigationDownloadPolicySpec, 'blink.mojom.NavigationDownloadPolicy', [
      mojo.internal.StructField('observed_types', 0, 0, blink.mojom.NavigationDownloadTypesSpec, null, false, 0, undefined),
      mojo.internal.StructField('disallowed_types', 8, 0, blink.mojom.NavigationDownloadTypesSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);
