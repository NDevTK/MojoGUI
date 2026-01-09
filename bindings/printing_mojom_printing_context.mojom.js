// Auto-generated MojoJS binding
// Source: chromium_src/printing/mojom/printing_context.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Struct: PageMargins
printing.mojom.PageMarginsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PageMargins',
      packedSize: 32,
      fields: [
        { name: 'header', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'footer', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'left', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'right', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'top', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'bottom', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PageSetup
printing.mojom.PageSetupSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PageSetup',
      packedSize: 72,
      fields: [
        { name: 'physical_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'printable_area', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'overlay_area', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'content_area', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'effective_margins', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'requested_margins', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'text_height', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'forced_margins', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'size_microns', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'vendor_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PrintSettings
printing.mojom.PrintSettingsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintSettings',
      packedSize: 176,
      fields: [
        { name: 'ranges', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'margin_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'url', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'color', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'duplex_mode', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'device_name', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'requested_media', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'page_setup_device_units', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'media_type', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'dpi', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'scale_factor', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'printer_language_type', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'requested_custom_margins_in_microns', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'advanced_settings', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'send_user_info', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'username', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pin_value', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'system_print_dialog_data', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'copies', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'pages_per_sheet', packedOffset: 156, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'selection_only', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'display_header_footer', packedOffset: 160, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'should_print_backgrounds', packedOffset: 160, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'collate', packedOffset: 160, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'borderless', packedOffset: 160, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'rasterize_pdf', packedOffset: 160, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'landscape', packedOffset: 160, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'is_modifiable', packedOffset: 160, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
