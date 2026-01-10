// Auto-generated MojoJS binding
// Source: chromium_src/printing/mojom/printing_context.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

printing.mojom.PageMarginsSpec = { $: {} };
printing.mojom.PageSetupSpec = { $: {} };
printing.mojom.RequestedMediaSpec = { $: {} };
printing.mojom.PrintSettingsSpec = { $: {} };

// Struct: PageMargins
mojo.internal.Struct(
    printing.mojom.PageMarginsSpec, 'printing.mojom.PageMargins', [
      mojo.internal.StructField('header', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('footer', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('left', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('right', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('top', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('bottom', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PageSetup
mojo.internal.Struct(
    printing.mojom.PageSetupSpec, 'printing.mojom.PageSetup', [
      mojo.internal.StructField('physical_size', 0, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('printable_area', 8, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('overlay_area', 16, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('content_area', 24, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('effective_margins', 32, 0, printing.mojom.PageMarginsSpec, null, false, 0, undefined),
      mojo.internal.StructField('requested_margins', 40, 0, printing.mojom.PageMarginsSpec, null, false, 0, undefined),
      mojo.internal.StructField('forced_margins', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('text_height', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: RequestedMedia
mojo.internal.Struct(
    printing.mojom.RequestedMediaSpec, 'printing.mojom.RequestedMedia', [
      mojo.internal.StructField('size_microns', 0, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('vendor_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PrintSettings
mojo.internal.Struct(
    printing.mojom.PrintSettingsSpec, 'printing.mojom.PrintSettings', [
      mojo.internal.StructField('ranges', 0, 0, mojo.internal.Array(printing.mojom.PageRangeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('selection_only', 136, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('margin_type', 112, 0, printing.mojom.MarginTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('display_header_footer', 136, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_print_backgrounds', 136, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('collate', 136, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('color', 116, 0, printing.mojom.ColorModelSpec, null, false, 0, undefined),
      mojo.internal.StructField('copies', 120, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('duplex_mode', 124, 0, printing.mojom.DuplexModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('device_name', 24, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('requested_media', 32, 0, printing.mojom.RequestedMediaSpec, null, false, 0, undefined),
      mojo.internal.StructField('page_setup_device_units', 40, 0, printing.mojom.PageSetupSpec, null, false, 0, undefined),
      mojo.internal.StructField('borderless', 136, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('media_type', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('dpi', 56, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('scale_factor', 64, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('rasterize_pdf', 136, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('landscape', 136, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('printer_language_type', 128, 0, printing.mojom.PrinterLanguageTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_modifiable', 136, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('requested_custom_margins_in_microns', 72, 0, printing.mojom.PageMarginsSpec, null, false, 0, undefined),
      mojo.internal.StructField('pages_per_sheet', 132, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('advanced_settings', 80, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.ValueSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('send_user_info', 137, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('username', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pin_value', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('system_print_dialog_data', 104, 0, mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
    ],
    [[0, 152]]);
