// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/mojom/window_open_disposition.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Enum: WindowOpenDisposition
ui.mojom.WindowOpenDisposition = {
  UNKNOWN: 0,
  CURRENT_TAB: 1,
  SINGLETON_TAB: 2,
  NEW_FOREGROUND_TAB: 3,
  NEW_BACKGROUND_TAB: 4,
  NEW_POPUP: 5,
  NEW_WINDOW: 6,
  SAVE_TO_DISK: 7,
  OFF_THE_RECORD: 8,
  IGNORE_ACTION: 9,
  SWITCH_TO_TAB: 10,
  NEW_PICTURE_IN_PICTURE: 11,
};

// Struct: ClickModifiers
ui.mojom.ClickModifiersSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.ClickModifiers',
      packedSize: 16,
      fields: [
        { name: 'middle_button', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'alt_key', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'ctrl_key', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'meta_key', packedOffset: 8, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'shift_key', packedOffset: 8, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
