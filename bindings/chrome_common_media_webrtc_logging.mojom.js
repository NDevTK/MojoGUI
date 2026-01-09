// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/media/webrtc_logging.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Struct: WebRtcLoggingMessage
chrome.mojom.WebRtcLoggingMessage = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : "";
  }
};

// Interface: WebRtcLoggingClient
chrome.mojom.WebRtcLoggingClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.WebRtcLoggingClient';
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  onAddMessages(messages) {
    // Method: OnAddMessages
    // Call: OnAddMessages(messages)
  }

  onStopped() {
    // Method: OnStopped
    // Call: OnStopped()
  }

};

chrome.mojom.WebRtcLoggingClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebRtcLoggingAgent
chrome.mojom.WebRtcLoggingAgentPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.WebRtcLoggingAgent';
  }

  start(client) {
    // Method: Start
    // Call: Start(client)
  }

  stop() {
    // Method: Stop
    // Call: Stop()
  }

};

chrome.mojom.WebRtcLoggingAgentRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
