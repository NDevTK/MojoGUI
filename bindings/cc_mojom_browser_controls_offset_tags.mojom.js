// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/browser_controls_offset_tags.mojom
// Module: cc.mojom

'use strict';

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};
var services = services || {};

cc.mojom.BrowserControlsOffsetTagsSpec = { $: {} };

// Struct: BrowserControlsOffsetTags
mojo.internal.Struct(
    cc.mojom.BrowserControlsOffsetTagsSpec, 'cc.mojom.BrowserControlsOffsetTags', [
      mojo.internal.StructField('top_controls_offset_tag', 0, 0, viz.mojom.OffsetTagSpec, null, false, 0, undefined),
      mojo.internal.StructField('content_offset_tag', 8, 0, viz.mojom.OffsetTagSpec, null, false, 0, undefined),
      mojo.internal.StructField('bottom_controls_offset_tag', 16, 0, viz.mojom.OffsetTagSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);
