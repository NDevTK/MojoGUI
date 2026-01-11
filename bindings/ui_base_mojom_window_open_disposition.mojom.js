// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/mojom/window_open_disposition.mojom
// Module: ui.mojom

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};

ui.mojom.WindowOpenDispositionSpec = { $: mojo.internal.Enum() };
ui.mojom.ClickModifiersSpec = { $: {} };

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
mojo.internal.Struct(
    ui.mojom.ClickModifiersSpec, 'ui.mojom.ClickModifiers', [
      mojo.internal.StructField('middle_button', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('alt_key', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ctrl_key', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('meta_key', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shift_key', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);
