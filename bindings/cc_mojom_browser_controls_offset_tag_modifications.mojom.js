// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/browser_controls_offset_tag_modifications.mojom
// Module: cc.mojom

'use strict';

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};

cc.mojom.BrowserControlsOffsetTagModificationsSpec = { $: {} };

// Struct: BrowserControlsOffsetTagModifications
mojo.internal.Struct(
    cc.mojom.BrowserControlsOffsetTagModificationsSpec, 'cc.mojom.BrowserControlsOffsetTagModifications', [
      mojo.internal.StructField('tags', 0, 0, cc.mojom.BrowserControlsOffsetTagsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('top_controls_additional_height', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('bottom_controls_additional_height', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);
