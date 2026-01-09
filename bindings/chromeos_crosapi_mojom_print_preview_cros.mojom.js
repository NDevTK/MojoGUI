// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/print_preview_cros.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: ScalingType
crosapi.mojom.ScalingType = {
};

// Struct: MarginsCustom
crosapi.mojom.MarginsCustom = class {
  constructor(values = {}) {
    this.margin_bottom@3 = values.margin_bottom@3 !== undefined ? values.margin_bottom@3 : 0;
  }
};

// Struct: MediaSize
crosapi.mojom.MediaSize = class {
  constructor(values = {}) {
    this.vendor_id@6 = values.vendor_id@6 !== undefined ? values.vendor_id@6 : 0;
    this.name@9 = values.name@9 !== undefined ? values.name@9 : false;
  }
};

// Struct: PrintSettings
crosapi.mojom.PrintSettings = class {
  constructor(values = {}) {
    this.preview_id@0 = values.preview_id@0 !== undefined ? values.preview_id@0 : 0;
    this.duplex@9 = values.duplex@9 !== undefined ? values.duplex@9 : 0;
    this.false = values.false !== undefined ? values.false : 0;
    this.scale_factor@12 = values.scale_factor@12 !== undefined ? values.scale_factor@12 : 0;
    this.dpi_vertical@16 = values.dpi_vertical@16 !== undefined ? values.dpi_vertical@16 : 0;
    this.header_footer_enabled@19 = values.header_footer_enabled@19 !== undefined ? values.header_footer_enabled@19 : 0;
    this.title@20 = values.title@20 !== undefined ? values.title@20 : "";
    this.should_print_selection_only@24 = values.should_print_selection_only@24 !== undefined ? values.should_print_selection_only@24 : 0;
    this.advanced_settings@25 = values.advanced_settings@25 !== undefined ? values.advanced_settings@25 : "";
    this.show_system_dialog@41 = values.show_system_dialog@41 !== undefined ? values.show_system_dialog@41 : 0;
  }
};

// Interface: PrintPreviewCrosDelegate
crosapi.mojom.PrintPreviewCrosDelegatePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.PrintPreviewCrosDelegate';
  }

  1(token, params) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(token, params)
      resolve({});
    });
  }

  done(completed) {
    // Method: done
    // Call: done(completed)
  }

  2(token) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(token)
      resolve({});
    });
  }

};

crosapi.mojom.PrintPreviewCrosDelegateRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PrintPreviewCrosClient
crosapi.mojom.PrintPreviewCrosClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.PrintPreviewCrosClient';
  }

  0(token, settings) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(token, settings)
      resolve({});
    });
  }

  1(token) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(token)
      resolve({});
    });
  }

};

crosapi.mojom.PrintPreviewCrosClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
