// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/view_transition_state.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ViewTransitionPropertyId
blink.mojom.ViewTransitionPropertyId = {
  kBackdropFilter: 0,
  kBorderRadius: 1,
  kBorderWidth: 2,
  kColorScheme: 3,
  kCornerShape: 4,
  kMixBlendMode: 5,
  kTextOrientation: 6,
  kWritingMode: 7,
};

// Enum: ViewTransitionElementBoxSizing
blink.mojom.ViewTransitionElementBoxSizing = {
  kBorderBox: 0,
  kContentBox: 1,
};

// Struct: ViewTransitionElementLayeredBoxProperties
blink.mojom.ViewTransitionElementLayeredBoxPropertiesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ViewTransitionElementLayeredBoxProperties',
      packedSize: 16,
      fields: [
        { name: 'box_sizing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ViewTransitionElement
blink.mojom.ViewTransitionElementSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ViewTransitionElement',
      packedSize: 16,
      fields: [
        { name: 'layered_box_properties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ViewTransitionState
blink.mojom.ViewTransitionStateSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ViewTransitionState',
      packedSize: 16,
      fields: [
        { name: 'delay_layer_tree_view_deletion', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
