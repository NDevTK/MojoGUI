// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/webui/mojom/webui.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: MessageCallback
chromecast.mojom.MessageCallbackPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.MessageCallback';
  }

  onMessage(list) {
    // Method: OnMessage
    // Call: OnMessage(list)
  }

};

chromecast.mojom.MessageCallbackRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebUi
chromecast.mojom.WebUiPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.WebUi';
  }

  registerMessageCallback(message, cb) {
    // Method: RegisterMessageCallback
    // Call: RegisterMessageCallback(message, cb)
  }

  callJavascriptFunction(function, args) {
    // Method: CallJavascriptFunction
    // Call: CallJavascriptFunction(function, args)
  }

};

chromecast.mojom.WebUiRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Resources
chromecast.mojom.ResourcesPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.Resources';
  }

  requestResourceBytes(path) {
    // Method: RequestResourceBytes
    return new Promise((resolve) => {
      // Call: RequestResourceBytes(path)
      resolve({});
    });
  }

};

chromecast.mojom.ResourcesRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebUiClient
chromecast.mojom.WebUiClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.WebUiClient';
  }

  createController(host, web_ui, resources) {
    // Method: CreateController
    // Call: CreateController(host, web_ui, resources)
  }

  createResources(host, resources) {
    // Method: CreateResources
    // Call: CreateResources(host, resources)
  }

};

chromecast.mojom.WebUiClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
