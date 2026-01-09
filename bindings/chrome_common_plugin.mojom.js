// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/plugin.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Enum: PluginStatus
chrome.mojom.PluginStatus = {
};

// Struct: PluginInfo
chrome.mojom.PluginInfo = class {
  constructor(values = {}) {
    this.group_name = values.group_name !== undefined ? values.group_name : "";
  }
};

// Struct: PluginParam
chrome.mojom.PluginParam = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : "";
  }
};

// Interface: PluginHost
chrome.mojom.PluginHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.PluginHost';
  }

  openPDF(url) {
    // Method: OpenPDF
    // Call: OpenPDF(url)
  }

};

chrome.mojom.PluginHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PluginAuthHost
chrome.mojom.PluginAuthHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.PluginAuthHost';
  }

  blockedUnauthorizedPlugin(name, group_id) {
    // Method: BlockedUnauthorizedPlugin
    // Call: BlockedUnauthorizedPlugin(name, group_id)
  }

};

chrome.mojom.PluginAuthHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PluginInfoHost
chrome.mojom.PluginInfoHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.PluginInfoHost';
  }

  getPluginInfo(url, origin, mime_type) {
    // Method: GetPluginInfo
    return new Promise((resolve) => {
      // Call: GetPluginInfo(url, origin, mime_type)
      resolve({});
    });
  }

};

chrome.mojom.PluginInfoHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
