// Auto-generated MojoJS binding
// Source: chromium_src/content/common/download/mhtml_file_writer.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Enum: MhtmlSaveStatus
content.mojom.MhtmlSaveStatus = {
};

// Struct: SerializeAsMHTMLParams
content.mojom.SerializeAsMHTMLParams = class {
  constructor(values = {}) {
    this.mhtml_boundary_marker = values.mhtml_boundary_marker !== undefined ? values.mhtml_boundary_marker : "";
    this.mhtml_popup_overlay_removal = values.mhtml_popup_overlay_removal !== undefined ? values.mhtml_popup_overlay_removal : false;
    this.output_handle = values.output_handle !== undefined ? values.output_handle : "";
  }
};

// Interface: MhtmlFileWriter
content.mojom.MhtmlFileWriterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.MhtmlFileWriter';
  }

  serializeAsMHTML(params) {
    // Method: SerializeAsMHTML
    return new Promise((resolve) => {
      // Call: SerializeAsMHTML(params)
      resolve({});
    });
  }

};

content.mojom.MhtmlFileWriterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
