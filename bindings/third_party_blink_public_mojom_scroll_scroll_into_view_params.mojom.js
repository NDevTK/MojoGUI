// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/scroll/scroll_into_view_params.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: Behavior
blink.mojom.Behavior = {
  kNoScroll: 0,
  kCenter: 1,
  kTop: 2,
  kBottom: 3,
  kLeft: 4,
  kRight: 5,
  kClosestEdge: 6,
};

// Struct: ScrollAlignment
blink.mojom.ScrollAlignmentSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ScrollAlignment',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FocusedEditableParams
blink.mojom.FocusedEditableParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FocusedEditableParams',
      packedSize: 16,
      fields: [
        { name: 'true', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ScrollIntoViewParams
blink.mojom.ScrollIntoViewParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ScrollIntoViewParams',
      packedSize: 16,
      fields: [
        { name: 'true', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
