// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/renderer_host.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Interface: RendererHost
extensions.mojom.RendererHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'extensions.mojom.RendererHost';
  }

  addAPIActionToActivityLog(extension_id, call_name, args, extra) {
    // Method: AddAPIActionToActivityLog
    // Call: AddAPIActionToActivityLog(extension_id, call_name, args, extra)
  }

  addEventToActivityLog(extension_id, call_name, args, extra) {
    // Method: AddEventToActivityLog
    // Call: AddEventToActivityLog(extension_id, call_name, args, extra)
  }

  addDOMActionToActivityLog(extension_id, call_name, args, url, url_title, call_type) {
    // Method: AddDOMActionToActivityLog
    // Call: AddDOMActionToActivityLog(extension_id, call_name, args, url, url_title, call_type)
  }

  getMessageBundle(extension_id) {
    // Method: GetMessageBundle
    return new Promise((resolve) => {
      // Call: GetMessageBundle(extension_id)
      resolve({});
    });
  }

};

extensions.mojom.RendererHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
