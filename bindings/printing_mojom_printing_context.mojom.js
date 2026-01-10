// Auto-generated MojoJS binding
// Source: chromium_src/printing/mojom/printing_context.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: PageMargins
printing.mojom.PageMarginsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PageMargins',
      packedSize: 32,
      fields: [
        { name: 'header', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'footer', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'left', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'right', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'top', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bottom', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PageSetup
printing.mojom.PageSetupSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PageSetup',
      packedSize: 64,
      fields: [
        { name: 'physical_size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'printable_area', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'overlay_area', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'content_area', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'effective_margins', packedOffset: 32, packedBitOffset: 0, type: printing.mojom.PageMarginsSpec, nullable: false, minVersion: 0 },
        { name: 'requested_margins', packedOffset: 40, packedBitOffset: 0, type: printing.mojom.PageMarginsSpec, nullable: false, minVersion: 0 },
        { name: 'forced_margins', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'text_height', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: RequestedMedia
printing.mojom.RequestedMediaSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.RequestedMedia',
      packedSize: 24,
      fields: [
        { name: 'size_microns', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'vendor_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PrintSettings
printing.mojom.PrintSettingsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintSettings',
      packedSize: 152,
      fields: [
        { name: 'ranges', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(printing.mojom.PageRangeSpec, false), nullable: false, minVersion: 0 },
        { name: 'selection_only', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'margin_type', packedOffset: 112, packedBitOffset: 0, type: printing.mojom.MarginTypeSpec, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'display_header_footer', packedOffset: 136, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'should_print_backgrounds', packedOffset: 136, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'collate', packedOffset: 136, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 116, packedBitOffset: 0, type: printing.mojom.ColorModelSpec, nullable: false, minVersion: 0 },
        { name: 'copies', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'duplex_mode', packedOffset: 124, packedBitOffset: 0, type: printing.mojom.DuplexModeSpec, nullable: false, minVersion: 0 },
        { name: 'device_name', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'requested_media', packedOffset: 32, packedBitOffset: 0, type: printing.mojom.RequestedMediaSpec, nullable: false, minVersion: 0 },
        { name: 'page_setup_device_units', packedOffset: 40, packedBitOffset: 0, type: printing.mojom.PageSetupSpec, nullable: false, minVersion: 0 },
        { name: 'borderless', packedOffset: 136, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'media_type', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'dpi', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'scale_factor', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'rasterize_pdf', packedOffset: 136, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'landscape', packedOffset: 136, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'printer_language_type', packedOffset: 128, packedBitOffset: 0, type: printing.mojom.PrinterLanguageTypeSpec, nullable: false, minVersion: 0 },
        { name: 'is_modifiable', packedOffset: 136, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'requested_custom_margins_in_microns', packedOffset: 72, packedBitOffset: 0, type: printing.mojom.PageMarginsSpec, nullable: false, minVersion: 0 },
        { name: 'pages_per_sheet', packedOffset: 132, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'advanced_settings', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo_base.mojom.ValueSpec, false), nullable: false, minVersion: 0 },
        { name: 'send_user_info', packedOffset: 137, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'username', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pin_value', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'system_print_dialog_data', packedOffset: 104, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 152}]
    }
  }
};
