// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/print_preview_cros/mojom/destination_provider.mojom
// Module: ash.printing.print_preview.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.printing = ash.printing || {};
ash.printing.print_preview = ash.printing.print_preview || {};
ash.printing.print_preview.mojom = ash.printing.print_preview.mojom || {};


// Interface: DestinationProvider
ash.printing.print_preview.mojom.DestinationProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.printing.print_preview.mojom.DestinationProvider';
  }

  fetchCapabilities(destination_id, printer_type) {
    // Method: FetchCapabilities
    return new Promise((resolve) => {
      // Call: FetchCapabilities(destination_id, printer_type)
      resolve({});
    });
  }

};

ash.printing.print_preview.mojom.DestinationProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
