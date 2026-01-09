// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/plugins/plugin_registry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: PluginMimeType
blink.mojom.PluginMimeType = class {
  constructor(values = {}) {
    this.file_extensions = values.file_extensions !== undefined ? values.file_extensions : "";
  }
};

// Struct: PluginInfo
blink.mojom.PluginInfo = class {
  constructor(values = {}) {
    this.mime_types = values.mime_types !== undefined ? values.mime_types : 0;
    this.may_use_external_handler = values.may_use_external_handler !== undefined ? values.may_use_external_handler : false;
  }
};

// Interface: PluginRegistry
blink.mojom.PluginRegistryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PluginRegistry';
  }

  getPlugins() {
    // Method: GetPlugins
    return new Promise((resolve) => {
      // Call: GetPlugins()
      resolve({});
    });
  }

};

blink.mojom.PluginRegistryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
