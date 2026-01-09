// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/api/mime_handler.mojom
// Module: extensions.mime_handler

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mime_handler = extensions.mime_handler || {};


// Struct: StreamInfo
extensions.mime_handler.StreamInfo = class {
  constructor(values = {}) {
    this.stream_url = values.stream_url !== undefined ? values.stream_url : "";
    this.tab_id = values.tab_id !== undefined ? values.tab_id : 0;
    this.a = values.a !== undefined ? values.a : null;
    this.embedded = values.embedded !== undefined ? values.embedded : false;
  }
};

// Struct: PdfPluginAttributes
extensions.mime_handler.PdfPluginAttributes = class {
  constructor(values = {}) {
    this.allow_javascript = values.allow_javascript !== undefined ? values.allow_javascript : 0;
  }
};

// Interface: MimeHandlerService
extensions.mime_handler.MimeHandlerServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'extensions.mime_handler.MimeHandlerService';
  }

  getStreamInfo() {
    // Method: GetStreamInfo
    return new Promise((resolve) => {
      // Call: GetStreamInfo()
      resolve({});
    });
  }

  setPdfPluginAttributes(pdf_plugin_attributes) {
    // Method: SetPdfPluginAttributes
    // Call: SetPdfPluginAttributes(pdf_plugin_attributes)
  }

};

extensions.mime_handler.MimeHandlerServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BeforeUnloadControl
extensions.mime_handler.BeforeUnloadControlPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'extensions.mime_handler.BeforeUnloadControl';
  }

  setShowBeforeUnloadDialog(show_dialog) {
    // Method: SetShowBeforeUnloadDialog
    // Call: SetShowBeforeUnloadDialog(show_dialog)
  }

};

extensions.mime_handler.BeforeUnloadControlRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
