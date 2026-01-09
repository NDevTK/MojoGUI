// Auto-generated MojoJS binding
// Source: chromium_src/components/js_injection/common/interfaces.mojom
// Module: js_injection.mojom

'use strict';

// Module namespace
var js_injection = js_injection || {};
js_injection.mojom = js_injection.mojom || {};


// Struct: JsObject
js_injection.mojom.JsObject = class {
  constructor(values = {}) {
    this.origin_matcher = values.origin_matcher !== undefined ? values.origin_matcher : "";
  }
};

// Struct: JavaScriptExecutable
js_injection.mojom.JavaScriptExecutable = class {
  constructor(values = {}) {
    this.js_world = values.js_world !== undefined ? values.js_world : 0;
  }
};

// Struct: JsWebMessageArrayBufferValue
js_injection.mojom.JsWebMessageArrayBufferValue = class {
  constructor(values = {}) {
    this.array_buffer_value = values.array_buffer_value !== undefined ? values.array_buffer_value : null;
  }
};

// Interface: JsToBrowserMessaging
js_injection.mojom.JsToBrowserMessagingPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'js_injection.mojom.JsToBrowserMessaging';
  }

  postMessage(message, ports) {
    // Method: PostMessage
    // Call: PostMessage(message, ports)
  }

  setBrowserToJsMessaging(browser_to_js_messaging) {
    // Method: SetBrowserToJsMessaging
    // Call: SetBrowserToJsMessaging(browser_to_js_messaging)
  }

};

js_injection.mojom.JsToBrowserMessagingRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: JsObjectsClient
js_injection.mojom.JsObjectsClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'js_injection.mojom.JsObjectsClient';
  }

  onWindowObjectCleared() {
    // Method: OnWindowObjectCleared
    // Call: OnWindowObjectCleared()
  }

};

js_injection.mojom.JsObjectsClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BrowserToJsMessagingFactory
js_injection.mojom.BrowserToJsMessagingFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'js_injection.mojom.BrowserToJsMessagingFactory';
  }

  sendBrowserToJsMessaging(browser_to_js_messaging) {
    // Method: SendBrowserToJsMessaging
    // Call: SendBrowserToJsMessaging(browser_to_js_messaging)
  }

};

js_injection.mojom.BrowserToJsMessagingFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BrowserToJsMessaging
js_injection.mojom.BrowserToJsMessagingPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'js_injection.mojom.BrowserToJsMessaging';
  }

  onPostMessage(message) {
    // Method: OnPostMessage
    // Call: OnPostMessage(message)
  }

};

js_injection.mojom.BrowserToJsMessagingRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: JsCommunication
js_injection.mojom.JsCommunicationPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'js_injection.mojom.JsCommunication';
  }

  setJsObjects(js_objects, client) {
    // Method: SetJsObjects
    // Call: SetJsObjects(js_objects, client)
  }

  addPersistentJavaScript(script) {
    // Method: AddPersistentJavaScript
    // Call: AddPersistentJavaScript(script)
  }

  removePersistentJavaScript(script_id) {
    // Method: RemovePersistentJavaScript
    // Call: RemovePersistentJavaScript(script_id)
  }

};

js_injection.mojom.JsCommunicationRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
