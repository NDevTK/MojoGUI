// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/webrtc_signaling_messenger.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Enum: LocationStandardFormat
sharing.mojom.LocationStandardFormat = {
};

// Struct: LocationHint
sharing.mojom.LocationHint = class {
  constructor(values = {}) {
    this.format = values.format !== undefined ? values.format : "";
  }
};

// Interface: IncomingMessagesListener
sharing.mojom.IncomingMessagesListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'sharing.mojom.IncomingMessagesListener';
  }

  onMessage(message) {
    // Method: OnMessage
    // Call: OnMessage(message)
  }

  onComplete(success) {
    // Method: OnComplete
    // Call: OnComplete(success)
  }

};

sharing.mojom.IncomingMessagesListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ReceiveMessagesSession
sharing.mojom.ReceiveMessagesSessionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'sharing.mojom.ReceiveMessagesSession';
  }

  stopReceivingMessages() {
    // Method: StopReceivingMessages
    // Call: StopReceivingMessages()
  }

};

sharing.mojom.ReceiveMessagesSessionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebRtcSignalingMessenger
sharing.mojom.WebRtcSignalingMessengerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'sharing.mojom.WebRtcSignalingMessenger';
  }

  sendMessage(self_id, peer_id, location_hint, message) {
    // Method: SendMessage
    return new Promise((resolve) => {
      // Call: SendMessage(self_id, peer_id, location_hint, message)
      resolve({});
    });
  }

  startReceivingMessages(self_id, location_hint, listener) {
    // Method: StartReceivingMessages
    return new Promise((resolve) => {
      // Call: StartReceivingMessages(self_id, location_hint, listener)
      resolve({});
    });
  }

};

sharing.mojom.WebRtcSignalingMessengerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
