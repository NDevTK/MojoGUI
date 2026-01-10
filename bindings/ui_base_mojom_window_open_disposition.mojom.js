// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/mojom/window_open_disposition.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Enum: WindowOpenDisposition
ui.mojom.mojom.WindowOpenDisposition = {
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
ui.mojom.mojom.WindowOpenDispositionSpec = { $: mojo.internal.Enum() };

// Struct: ClickModifiers
ui.mojom.mojom.ClickModifiersSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.ClickModifiers',
      packedSize: 16,
      fields: [
        { name: 'middle_button', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'alt_key', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ctrl_key', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'meta_key', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shift_key', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
