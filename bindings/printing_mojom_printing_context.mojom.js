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
        { name: 'header', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'footer', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'left', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'right', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'top', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'bottom', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
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
        { name: 'physical_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'printable_area', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'overlay_area', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'content_area', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'effective_margins', packedOffset: 40, packedBitOffset: 0, type: printing.mojom.PageMarginsSpec, nullable: false },
        { name: 'requested_margins', packedOffset: 48, packedBitOffset: 0, type: printing.mojom.PageMarginsSpec, nullable: false },
        { name: 'forced_margins', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'text_height', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
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
        { name: 'size_microns', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'vendor_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
      packedSize: 216,
      fields: [
        { name: 'ranges', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'selection_only', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'margin_type', packedOffset: 24, packedBitOffset: 0, type: printing.mojom.MarginTypeSpec, nullable: false },
        { name: 'title', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'url', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'display_header_footer', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'should_print_backgrounds', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'collate', packedOffset: 48, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'color', packedOffset: 56, packedBitOffset: 0, type: printing.mojom.ColorModelSpec, nullable: false },
        { name: 'copies', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'duplex_mode', packedOffset: 72, packedBitOffset: 0, type: printing.mojom.DuplexModeSpec, nullable: false },
        { name: 'device_name', packedOffset: 80, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'requested_media', packedOffset: 88, packedBitOffset: 0, type: printing.mojom.RequestedMediaSpec, nullable: false },
        { name: 'page_setup_device_units', packedOffset: 96, packedBitOffset: 0, type: printing.mojom.PageSetupSpec, nullable: false },
        { name: 'borderless', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'media_type', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'dpi', packedOffset: 120, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'scale_factor', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'rasterize_pdf', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'landscape', packedOffset: 136, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'printer_language_type', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_modifiable', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'requested_custom_margins_in_microns', packedOffset: 160, packedBitOffset: 0, type: printing.mojom.PageMarginsSpec, nullable: false },
        { name: 'pages_per_sheet', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'advanced_settings', packedOffset: 176, packedBitOffset: 0, type: [EnableIf=is_chromeos|is_linux] map<string, mojo_base.mojom.Value>Spec, nullable: false },
        { name: 'send_user_info', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'username', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pin_value', packedOffset: 200, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'system_print_dialog_data', packedOffset: 208, packedBitOffset: 0, type: [EnableIf=enable_oop_printing_no_oop_basic_print_dialog] mojo_base.mojom.DictionaryValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
