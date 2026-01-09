// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/devtools/devtools_frontend.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: DevToolsFrontend
blink.mojom.DevToolsFrontendPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DevToolsFrontend';
  }

  object(details) {
    // Method: object
    // Call: object(details)
  }

  devTools(target) {
    // Method: DevTools
    // Call: DevTools(target)
  }

  setupDevToolsFrontend(api_script, host) {
    // Method: SetupDevToolsFrontend
    // Call: SetupDevToolsFrontend(api_script, host)
  }

  setupDevToolsExtensionAPI(extension_api) {
    // Method: SetupDevToolsExtensionAPI
    // Call: SetupDevToolsExtensionAPI(extension_api)
  }

};

blink.mojom.DevToolsFrontendRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DevToolsFrontendHost
blink.mojom.DevToolsFrontendHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DevToolsFrontendHost';
  }

  dispatchEmbedderMessage(message) {
    // Method: DispatchEmbedderMessage
    // Call: DispatchEmbedderMessage(message)
  }

};

blink.mojom.DevToolsFrontendHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
