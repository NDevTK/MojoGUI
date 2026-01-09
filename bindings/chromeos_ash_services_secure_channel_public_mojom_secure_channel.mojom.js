// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/secure_channel/public/mojom/secure_channel.mojom
// Module: ash.secure_channel.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.secure_channel = ash.secure_channel || {};
ash.secure_channel.mojom = ash.secure_channel.mojom || {};


// Enum: ConnectionAttemptFailureReason
ash.secure_channel.mojom.ConnectionAttemptFailureReason = {
  but: 0,
  dropped: 1,
  or: 2,
  but: 3,
  Nearby: 4,
  not: 5,
  but: 6,
};

// Enum: ConnectionCreationDetail
ash.secure_channel.mojom.ConnectionCreationDetail = {
  REMOTE_DEVICE_USED_BACKGROUND_BLE_ADVERTISING: 0,
  REMOTE_DEVICE_USED_FOREGROUND_BLE_ADVERTISING: 1,
};

// Enum: ConnectionPriority
ash.secure_channel.mojom.ConnectionPriority = {
  background: 0,
  heartbeat: 1,
  the: 2,
};

// Enum: ConnectionMedium
ash.secure_channel.mojom.ConnectionMedium = {
  which: 0,
  then: 1,
};

// Enum: DiscoveryResult
ash.secure_channel.mojom.DiscoveryResult = {
};

// Enum: DiscoveryErrorCode
ash.secure_channel.mojom.DiscoveryErrorCode = {
  kBluetoothTurnedOff: 0,
  kFilterCreationFailed: 1,
  kErrorStartingDiscovery: 2,
  kBleSessionInvalidated: 3,
  kDeviceNotInScanRequest: 4,
  kTimeout: 5,
};

// Enum: SecureChannelState
ash.secure_channel.mojom.SecureChannelState = {
  kGeneratingSessionKeys: 0,
  kSendingHello: 1,
  kSentHello: 2,
  kReceivedResponderAuth: 3,
  kValidatedResponderAuth: 4,
  kSentInitiatorAuth: 5,
  kAuthenticationSuccess: 6,
  kFailureNotConnectedToRemoteDevice: 7,
  kFailedToGenerateSessionKeys: 8,
  kFailedToGenerateHelloMessage: 9,
  kFailedToSendHelloMessage: 10,
  kFailedToWaitForResponderAuth: 11,
  kReceivedUnexpectedMessage: 12,
  kFailedToValidateReponderAuth: 13,
  kFailedToGenerateInitiatorAuth: 14,
  kFailedToSendInitiatorAuth: 15,
  kFailureDisconnectDuringAuthentication: 16,
};

// Struct: BluetoothConnectionMetadata
ash.secure_channel.mojom.BluetoothConnectionMetadata = class {
  constructor(values = {}) {
    this.current_rssi = values.current_rssi !== undefined ? values.current_rssi : 0;
  }
};

// Struct: ConnectionMetadata
ash.secure_channel.mojom.ConnectionMetadata = class {
  constructor(values = {}) {
    this.bluetooth_connection_metadata = values.bluetooth_connection_metadata !== undefined ? values.bluetooth_connection_metadata : [];
    this.channel_binding_data = values.channel_binding_data !== undefined ? values.channel_binding_data : "";
  }
};

// Interface: Channel
ash.secure_channel.mojom.ChannelPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.secure_channel.mojom.Channel';
  }

  sendMessage(message) {
    // Method: SendMessage
    // Call: SendMessage(message)
  }

  registerPayloadFile(payload_id, payload_files, listener) {
    // Method: RegisterPayloadFile
    return new Promise((resolve) => {
      // Call: RegisterPayloadFile(payload_id, payload_files, listener)
      resolve({});
    });
  }

  getConnectionMetadata() {
    // Method: GetConnectionMetadata
    return new Promise((resolve) => {
      // Call: GetConnectionMetadata()
      resolve({});
    });
  }

};

ash.secure_channel.mojom.ChannelRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MessageReceiver
ash.secure_channel.mojom.MessageReceiverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.secure_channel.mojom.MessageReceiver';
  }

  onMessageReceived(message) {
    // Method: OnMessageReceived
    // Call: OnMessageReceived(message)
  }

};

ash.secure_channel.mojom.MessageReceiverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ConnectionDelegate
ash.secure_channel.mojom.ConnectionDelegatePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.secure_channel.mojom.ConnectionDelegate';
  }

  onConnectionAttemptFailure(reason) {
    // Method: OnConnectionAttemptFailure
    // Call: OnConnectionAttemptFailure(reason)
  }

  onConnection(channel, message_receiver_receiver, nearby_connection_state_listener_receiver) {
    // Method: OnConnection
    // Call: OnConnection(channel, message_receiver_receiver, nearby_connection_state_listener_receiver)
  }

};

ash.secure_channel.mojom.ConnectionDelegateRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SecureChannelStructuredMetricsLogger
ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger';
  }

  logDiscoveryAttempt(result, error_code) {
    // Method: LogDiscoveryAttempt
    // Call: LogDiscoveryAttempt(result, error_code)
  }

  logNearbyConnectionState(step, status) {
    // Method: LogNearbyConnectionState
    // Call: LogNearbyConnectionState(step, status)
  }

  logSecureChannelState(state) {
    // Method: LogSecureChannelState
    // Call: LogSecureChannelState(state)
  }

};

ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SecureChannel
ash.secure_channel.mojom.SecureChannelPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.secure_channel.mojom.SecureChannel';
  }

  listenForConnectionFromDevice(device_to_connect, local_device, feature, connection_medium, connection_priority, delegate) {
    // Method: ListenForConnectionFromDevice
    // Call: ListenForConnectionFromDevice(device_to_connect, local_device, feature, connection_medium, connection_priority, delegate)
  }

  initiateConnectionToDevice(device_to_connect, local_device, feature, connection_medium, connection_priority, delegate, secure_channel_structured_metrics_logger) {
    // Method: InitiateConnectionToDevice
    // Call: InitiateConnectionToDevice(device_to_connect, local_device, feature, connection_medium, connection_priority, delegate, secure_channel_structured_metrics_logger)
  }

  setNearbyConnector(nearby_connector) {
    // Method: SetNearbyConnector
    // Call: SetNearbyConnector(nearby_connector)
  }

  getLastSeenTimestamp(remote_device_id) {
    // Method: GetLastSeenTimestamp
    return new Promise((resolve) => {
      // Call: GetLastSeenTimestamp(remote_device_id)
      resolve({});
    });
  }

};

ash.secure_channel.mojom.SecureChannelRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
