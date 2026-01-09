// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/secure_channel/public/mojom/nearby_connector.mojom
// Module: ash.secure_channel.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.secure_channel = ash.secure_channel || {};
ash.secure_channel.mojom = ash.secure_channel.mojom || {};


// Enum: NearbyConnectionStep
ash.secure_channel.mojom.NearbyConnectionStep = {
  kDiscoveringEndpointStarted: 0,
  kDiscoveringEndpointEnded: 1,
  kRequestingConnectionStarted: 2,
  kRequestingConnectionEnded: 3,
  kAcceptingConnectionStarted: 4,
  kAcceptingConnectionFinished: 5,
  kWaitingForConnectionToBeAcceptedByRemoteDeviceStarted: 6,
  kWaitingForConnectionToBeAcceptedByRemoteDeviceEnded: 7,
  kConnected: 8,
  kUpgradedToWebRtc: 9,
  kDisconnectionStarted: 10,
  kDisconnectionFinished: 11,
};

// Enum: NearbyConnectionStepResult
ash.secure_channel.mojom.NearbyConnectionStepResult = {
  kSuccess: 0,
  kOutOfOrderApiCall: 1,
  kAlreadyHaveActiveStrategy: 2,
  kAlreadyAdvertising: 3,
  kAlreadyDiscovering: 4,
  kEndpointIOError: 5,
  kEndpointUnknown: 6,
  kConnectionRejected: 7,
  kAlreadyConnectedToEndpoint: 8,
  kNotConnectedToEndpoint: 9,
  kBluetoothError: 10,
  kBleError: 11,
  kWifiLanError: 12,
  kPayloadUnknown: 13,
  kAlreadyListening: 14,
  kReset: 15,
  kTimeout: 16,
  kUnknown: 17,
};

// Interface: NearbyConnectionStateListener
ash.secure_channel.mojom.NearbyConnectionStateListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.secure_channel.mojom.NearbyConnectionStateListener';
  }

  onNearbyConnectionStateChanged(step, result) {
    // Method: OnNearbyConnectionStateChanged
    // Call: OnNearbyConnectionStateChanged(step, result)
  }

};

ash.secure_channel.mojom.NearbyConnectionStateListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NearbyMessageSender
ash.secure_channel.mojom.NearbyMessageSenderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.secure_channel.mojom.NearbyMessageSender';
  }

  sendMessage(message) {
    // Method: SendMessage
    return new Promise((resolve) => {
      // Call: SendMessage(message)
      resolve({});
    });
  }

};

ash.secure_channel.mojom.NearbyMessageSenderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NearbyMessageReceiver
ash.secure_channel.mojom.NearbyMessageReceiverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.secure_channel.mojom.NearbyMessageReceiver';
  }

  onMessageReceived(message) {
    // Method: OnMessageReceived
    // Call: OnMessageReceived(message)
  }

};

ash.secure_channel.mojom.NearbyMessageReceiverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NearbyFilePayloadHandler
ash.secure_channel.mojom.NearbyFilePayloadHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.secure_channel.mojom.NearbyFilePayloadHandler';
  }

  registerPayloadFile(payload_id, payload_files, listener) {
    // Method: RegisterPayloadFile
    return new Promise((resolve) => {
      // Call: RegisterPayloadFile(payload_id, payload_files, listener)
      resolve({});
    });
  }

};

ash.secure_channel.mojom.NearbyFilePayloadHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NearbyConnector
ash.secure_channel.mojom.NearbyConnectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.secure_channel.mojom.NearbyConnector';
  }

  connect(bluetooth_public_address, eid, message_receiver, nearby_connection_state_listener) {
    // Method: Connect
    return new Promise((resolve) => {
      // Call: Connect(bluetooth_public_address, eid, message_receiver, nearby_connection_state_listener)
      resolve({});
    });
  }

};

ash.secure_channel.mojom.NearbyConnectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
