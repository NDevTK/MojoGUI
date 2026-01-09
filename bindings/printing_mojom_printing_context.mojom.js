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
      packedSize: 16,
      fields: [
        { name: 'bottom', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'text_height', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'vendor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'system_print_dialog_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
