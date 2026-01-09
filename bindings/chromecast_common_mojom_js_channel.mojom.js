// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/js_channel.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: JsChannel
chromecast.mojom.JsChannelPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.JsChannel';
  }

  postMessage(message) {
    // Method: PostMessage
    // Call: PostMessage(message)
  }

};

chromecast.mojom.JsChannelRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: JsChannelClient
chromecast.mojom.JsChannelClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.JsChannelClient';
  }

  createChannel(channel, pipe) {
    // Method: CreateChannel
    // Call: CreateChannel(channel, pipe)
  }

  removeChannel(channel) {
    // Method: RemoveChannel
    // Call: RemoveChannel(channel)
  }

};

chromecast.mojom.JsChannelClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: JsChannelBindingProvider
chromecast.mojom.JsChannelBindingProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.JsChannelBindingProvider';
  }

  register(routing_id, client) {
    // Method: Register
    // Call: Register(routing_id, client)
  }

};

chromecast.mojom.JsChannelBindingProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
