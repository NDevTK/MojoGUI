// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/assistant_messenger.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: AssistantMessagePipe
chromecast.mojom.AssistantMessagePipePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.AssistantMessagePipe';
  }

  sendMessage(message) {
    // Method: SendMessage
    // Call: SendMessage(message)
  }

};

chromecast.mojom.AssistantMessagePipeRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AssistantMessageClient
chromecast.mojom.AssistantMessageClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.AssistantMessageClient';
  }

  onMessage(message) {
    // Method: OnMessage
    // Call: OnMessage(message)
  }

};

chromecast.mojom.AssistantMessageClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AssistantMessageService
chromecast.mojom.AssistantMessageServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.AssistantMessageService';
  }

  createMessagePipe(client_id, client, pipe) {
    // Method: CreateMessagePipe
    // Call: CreateMessagePipe(client_id, client, pipe)
  }

};

chromecast.mojom.AssistantMessageServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
