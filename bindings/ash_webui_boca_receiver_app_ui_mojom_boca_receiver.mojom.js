// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/boca_receiver_app_ui/mojom/boca_receiver.mojom
// Module: ash.boca_receiver.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.boca_receiver = ash.boca_receiver || {};
ash.boca_receiver.mojom = ash.boca_receiver.mojom || {};


// Enum: ConnectionClosedReason
ash.boca_receiver.mojom.ConnectionClosedReason = {
};

// Struct: ReceiverInfo
ash.boca_receiver.mojom.ReceiverInfo = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : "";
  }
};

// Struct: UserInfo
ash.boca_receiver.mojom.UserInfo = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : "";
  }
};

// Struct: DecodedAudioPacket
ash.boca_receiver.mojom.DecodedAudioPacket = class {
  constructor(values = {}) {
    this.channels = values.channels !== undefined ? values.channels : 0;
    this.data = values.data !== undefined ? values.data : 0;
  }
};

// Interface: UntrustedPage
ash.boca_receiver.mojom.UntrustedPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.boca_receiver.mojom.UntrustedPage';
  }

  onInitReceiverInfo(receiver_info) {
    // Method: OnInitReceiverInfo
    // Call: OnInitReceiverInfo(receiver_info)
  }

  onInitReceiverError() {
    // Method: OnInitReceiverError
    // Call: OnInitReceiverError()
  }

  onFrameReceived(frame_data) {
    // Method: OnFrameReceived
    // Call: OnFrameReceived(frame_data)
  }

  onAudioPacket(audio_packet) {
    // Method: OnAudioPacket
    // Call: OnAudioPacket(audio_packet)
  }

  onConnecting(initiator, presenter) {
    // Method: OnConnecting
    // Call: OnConnecting(initiator, presenter)
  }

  onConnectionClosed(reason) {
    // Method: OnConnectionClosed
    // Call: OnConnectionClosed(reason)
  }

};

ash.boca_receiver.mojom.UntrustedPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UntrustedPageHandlerFactory
ash.boca_receiver.mojom.UntrustedPageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.boca_receiver.mojom.UntrustedPageHandlerFactory';
  }

  createUntrustedPageHandler(page) {
    // Method: CreateUntrustedPageHandler
    // Call: CreateUntrustedPageHandler(page)
  }

};

ash.boca_receiver.mojom.UntrustedPageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
