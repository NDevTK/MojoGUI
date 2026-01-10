// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/secure_channel/public/mojom/secure_channel.mojom
// Module: ash.secure_channel.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.secure_channel = ash.secure_channel || {};
ash.secure_channel.secure_channel.mojom = ash.secure_channel.secure_channel.mojom || {};


ash.secure_channel.secure_channel.mojom.mojom.kConnectionDroppedReason = 1;

// Enum: ConnectionAttemptFailureReason
ash.secure_channel.secure_channel.mojom.mojom.ConnectionAttemptFailureReason = {
  AUTHENTICATION_ERROR: 0,
  COULD_NOT_GENERATE_ADVERTISEMENT: 1,
  GATT_CONNECTION_ERROR: 2,
  NEARBY_CONNECTION_ERROR: 3,
  LOCAL_DEVICE_INVALID_PUBLIC_KEY: 4,
  LOCAL_DEVICE_INVALID_PSK: 5,
  LOCAL_DEVICE_INVALID_BLUETOOTH_ADDRESS: 6,
  REMOTE_DEVICE_INVALID_PUBLIC_KEY: 7,
  REMOTE_DEVICE_INVALID_PSK: 8,
  REMOTE_DEVICE_INVALID_BLUETOOTH_ADDRESS: 9,
  TIMEOUT_FINDING_DEVICE: 10,
  ADAPTER_DISABLED: 11,
  ADAPTER_NOT_PRESENT: 12,
  UNSUPPORTED_ROLE_FOR_MEDIUM: 13,
  MISSING_NEARBY_CONNECTOR: 14,
  CONNECTION_CANCELLED: 15,
};
ash.secure_channel.secure_channel.mojom.mojom.ConnectionAttemptFailureReasonSpec = { $: mojo.internal.Enum() };

// Enum: ConnectionCreationDetail
ash.secure_channel.secure_channel.mojom.mojom.ConnectionCreationDetail = {
  REMOTE_DEVICE_USED_BACKGROUND_BLE_ADVERTISING: 0,
  REMOTE_DEVICE_USED_FOREGROUND_BLE_ADVERTISING: 1,
};
ash.secure_channel.secure_channel.mojom.mojom.ConnectionCreationDetailSpec = { $: mojo.internal.Enum() };

// Enum: ConnectionPriority
ash.secure_channel.secure_channel.mojom.mojom.ConnectionPriority = {
  LOW: 0,
  MEDIUM: 1,
  HIGH: 2,
};
ash.secure_channel.secure_channel.mojom.mojom.ConnectionPrioritySpec = { $: mojo.internal.Enum() };

// Enum: ConnectionMedium
ash.secure_channel.secure_channel.mojom.mojom.ConnectionMedium = {
  kBluetoothLowEnergy: 0,
  kNearbyConnections: 1,
};
ash.secure_channel.secure_channel.mojom.mojom.ConnectionMediumSpec = { $: mojo.internal.Enum() };

// Enum: DiscoveryResult
ash.secure_channel.secure_channel.mojom.mojom.DiscoveryResult = {
  kFailure: 0,
  kSuccess: 1,
};
ash.secure_channel.secure_channel.mojom.mojom.DiscoveryResultSpec = { $: mojo.internal.Enum() };

// Enum: DiscoveryErrorCode
ash.secure_channel.secure_channel.mojom.mojom.DiscoveryErrorCode = {
  kBluetoothTurnedOff: 0,
  kFilterCreationFailed: 1,
  kErrorStartingDiscovery: 2,
  kBleSessionInvalidated: 3,
  kDeviceNotInScanRequest: 4,
  kTimeout: 5,
};
ash.secure_channel.secure_channel.mojom.mojom.DiscoveryErrorCodeSpec = { $: mojo.internal.Enum() };

// Enum: SecureChannelState
ash.secure_channel.secure_channel.mojom.mojom.SecureChannelState = {
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
ash.secure_channel.secure_channel.mojom.mojom.SecureChannelStateSpec = { $: mojo.internal.Enum() };

// Struct: BluetoothConnectionMetadata
ash.secure_channel.secure_channel.mojom.mojom.BluetoothConnectionMetadataSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.BluetoothConnectionMetadata',
      packedSize: 16,
      fields: [
        { name: 'current_rssi', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ConnectionMetadata
ash.secure_channel.secure_channel.mojom.mojom.ConnectionMetadataSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.ConnectionMetadata',
      packedSize: 32,
      fields: [
        { name: 'creation_details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.secure_channel.mojom.ConnectionCreationDetailSpec, false), nullable: false, minVersion: 0 },
        { name: 'bluetooth_connection_metadata', packedOffset: 8, packedBitOffset: 0, type: ash.secure_channel.mojom.BluetoothConnectionMetadataSpec, nullable: true, minVersion: 0 },
        { name: 'channel_binding_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: Channel
ash.secure_channel.secure_channel.mojom.mojom.Channel = {};

ash.secure_channel.secure_channel.mojom.mojom.ChannelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.secure_channel.mojom.mojom.ChannelRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.Channel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.secure_channel.mojom.mojom.ChannelPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.secure_channel.mojom.mojom.ChannelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.secure_channel.mojom.mojom.ChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.secure_channel.mojom.mojom.Channel_SendMessage_ParamsSpec,
      null,
      [message]);
  }

  registerPayloadFile(payload_id, payload_files, listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.secure_channel.secure_channel.mojom.mojom.Channel_RegisterPayloadFile_ParamsSpec,
      ash.secure_channel.secure_channel.mojom.mojom.Channel_RegisterPayloadFile_ResponseParamsSpec,
      [payload_id, payload_files, listener]);
  }

  getConnectionMetadata() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.secure_channel.secure_channel.mojom.mojom.Channel_GetConnectionMetadata_ParamsSpec,
      ash.secure_channel.secure_channel.mojom.mojom.Channel_GetConnectionMetadata_ResponseParamsSpec,
      []);
  }

};

ash.secure_channel.secure_channel.mojom.mojom.Channel.getRemote = function() {
  let remote = new ash.secure_channel.secure_channel.mojom.mojom.ChannelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.Channel',
    'context');
  return remote.$;
};

// ParamsSpec for SendMessage
ash.secure_channel.secure_channel.mojom.mojom.Channel_SendMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.Channel.SendMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterPayloadFile
ash.secure_channel.secure_channel.mojom.mojom.Channel_RegisterPayloadFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.Channel.RegisterPayloadFile_Params',
      packedSize: 32,
      fields: [
        { name: 'payload_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'payload_files', packedOffset: 8, packedBitOffset: 0, type: ash.secure_channel.mojom.PayloadFilesSpec, nullable: false, minVersion: 0 },
        { name: 'listener', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.secure_channel.mojom.FilePayloadListenerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.secure_channel.secure_channel.mojom.mojom.Channel_RegisterPayloadFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.Channel.RegisterPayloadFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetConnectionMetadata
ash.secure_channel.secure_channel.mojom.mojom.Channel_GetConnectionMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.Channel.GetConnectionMetadata_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.secure_channel.secure_channel.mojom.mojom.Channel_GetConnectionMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.Channel.GetConnectionMetadata_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: ash.secure_channel.mojom.ConnectionMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.secure_channel.mojom.mojom.ChannelPtr = ash.secure_channel.secure_channel.mojom.mojom.ChannelRemote;
ash.secure_channel.secure_channel.mojom.mojom.ChannelRequest = ash.secure_channel.secure_channel.mojom.mojom.ChannelPendingReceiver;


// Interface: MessageReceiver
ash.secure_channel.secure_channel.mojom.mojom.MessageReceiver = {};

ash.secure_channel.secure_channel.mojom.mojom.MessageReceiverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.secure_channel.mojom.mojom.MessageReceiverRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.MessageReceiver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.secure_channel.mojom.mojom.MessageReceiverPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.secure_channel.mojom.mojom.MessageReceiverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.secure_channel.mojom.mojom.MessageReceiverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMessageReceived(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.secure_channel.mojom.mojom.MessageReceiver_OnMessageReceived_ParamsSpec,
      null,
      [message]);
  }

};

ash.secure_channel.secure_channel.mojom.mojom.MessageReceiver.getRemote = function() {
  let remote = new ash.secure_channel.secure_channel.mojom.mojom.MessageReceiverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.MessageReceiver',
    'context');
  return remote.$;
};

// ParamsSpec for OnMessageReceived
ash.secure_channel.secure_channel.mojom.mojom.MessageReceiver_OnMessageReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.MessageReceiver.OnMessageReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.secure_channel.mojom.mojom.MessageReceiverPtr = ash.secure_channel.secure_channel.mojom.mojom.MessageReceiverRemote;
ash.secure_channel.secure_channel.mojom.mojom.MessageReceiverRequest = ash.secure_channel.secure_channel.mojom.mojom.MessageReceiverPendingReceiver;


// Interface: ConnectionDelegate
ash.secure_channel.secure_channel.mojom.mojom.ConnectionDelegate = {};

ash.secure_channel.secure_channel.mojom.mojom.ConnectionDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.secure_channel.mojom.mojom.ConnectionDelegateRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.ConnectionDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.secure_channel.mojom.mojom.ConnectionDelegatePendingReceiver,
      handle);
    this.$ = new ash.secure_channel.secure_channel.mojom.mojom.ConnectionDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.secure_channel.mojom.mojom.ConnectionDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onConnectionAttemptFailure(reason) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.secure_channel.mojom.mojom.ConnectionDelegate_OnConnectionAttemptFailure_ParamsSpec,
      null,
      [reason]);
  }

  onConnection(channel, message_receiver_receiver, nearby_connection_state_listener_receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.secure_channel.secure_channel.mojom.mojom.ConnectionDelegate_OnConnection_ParamsSpec,
      null,
      [channel, message_receiver_receiver, nearby_connection_state_listener_receiver]);
  }

};

ash.secure_channel.secure_channel.mojom.mojom.ConnectionDelegate.getRemote = function() {
  let remote = new ash.secure_channel.secure_channel.mojom.mojom.ConnectionDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.ConnectionDelegate',
    'context');
  return remote.$;
};

// ParamsSpec for OnConnectionAttemptFailure
ash.secure_channel.secure_channel.mojom.mojom.ConnectionDelegate_OnConnectionAttemptFailure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.ConnectionDelegate.OnConnectionAttemptFailure_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: ash.secure_channel.mojom.ConnectionAttemptFailureReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnConnection
ash.secure_channel.secure_channel.mojom.mojom.ConnectionDelegate_OnConnection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.ConnectionDelegate.OnConnection_Params',
      packedSize: 32,
      fields: [
        { name: 'channel', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.secure_channel.mojom.ChannelRemote), nullable: false, minVersion: 0 },
        { name: 'message_receiver_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.secure_channel.mojom.MessageReceiverRemote), nullable: false, minVersion: 0 },
        { name: 'nearby_connection_state_listener_receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.secure_channel.mojom.NearbyConnectionStateListenerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.secure_channel.mojom.mojom.ConnectionDelegatePtr = ash.secure_channel.secure_channel.mojom.mojom.ConnectionDelegateRemote;
ash.secure_channel.secure_channel.mojom.mojom.ConnectionDelegateRequest = ash.secure_channel.secure_channel.mojom.mojom.ConnectionDelegatePendingReceiver;


// Interface: SecureChannelStructuredMetricsLogger
ash.secure_channel.secure_channel.mojom.mojom.SecureChannelStructuredMetricsLogger = {};

ash.secure_channel.secure_channel.mojom.mojom.SecureChannelStructuredMetricsLoggerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.secure_channel.mojom.mojom.SecureChannelStructuredMetricsLoggerRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.secure_channel.mojom.mojom.SecureChannelStructuredMetricsLoggerPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.secure_channel.mojom.mojom.SecureChannelStructuredMetricsLoggerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.secure_channel.mojom.mojom.SecureChannelStructuredMetricsLoggerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  logDiscoveryAttempt(result, error_code) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.secure_channel.mojom.mojom.SecureChannelStructuredMetricsLogger_LogDiscoveryAttempt_ParamsSpec,
      null,
      [result, error_code]);
  }

  logNearbyConnectionState(step, status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.secure_channel.secure_channel.mojom.mojom.SecureChannelStructuredMetricsLogger_LogNearbyConnectionState_ParamsSpec,
      null,
      [step, status]);
  }

  logSecureChannelState(state) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.secure_channel.secure_channel.mojom.mojom.SecureChannelStructuredMetricsLogger_LogSecureChannelState_ParamsSpec,
      null,
      [state]);
  }

};

ash.secure_channel.secure_channel.mojom.mojom.SecureChannelStructuredMetricsLogger.getRemote = function() {
  let remote = new ash.secure_channel.secure_channel.mojom.mojom.SecureChannelStructuredMetricsLoggerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger',
    'context');
  return remote.$;
};

// ParamsSpec for LogDiscoveryAttempt
ash.secure_channel.secure_channel.mojom.mojom.SecureChannelStructuredMetricsLogger_LogDiscoveryAttempt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger.LogDiscoveryAttempt_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.secure_channel.mojom.DiscoveryResultSpec, nullable: false, minVersion: 0 },
        { name: 'error_code', packedOffset: 4, packedBitOffset: 0, type: ash.secure_channel.mojom.DiscoveryErrorCodeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LogNearbyConnectionState
ash.secure_channel.secure_channel.mojom.mojom.SecureChannelStructuredMetricsLogger_LogNearbyConnectionState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger.LogNearbyConnectionState_Params',
      packedSize: 16,
      fields: [
        { name: 'step', packedOffset: 0, packedBitOffset: 0, type: ash.secure_channel.mojom.NearbyConnectionStepSpec, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 4, packedBitOffset: 0, type: ash.secure_channel.mojom.NearbyConnectionStepResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LogSecureChannelState
ash.secure_channel.secure_channel.mojom.mojom.SecureChannelStructuredMetricsLogger_LogSecureChannelState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger.LogSecureChannelState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: ash.secure_channel.mojom.SecureChannelStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.secure_channel.mojom.mojom.SecureChannelStructuredMetricsLoggerPtr = ash.secure_channel.secure_channel.mojom.mojom.SecureChannelStructuredMetricsLoggerRemote;
ash.secure_channel.secure_channel.mojom.mojom.SecureChannelStructuredMetricsLoggerRequest = ash.secure_channel.secure_channel.mojom.mojom.SecureChannelStructuredMetricsLoggerPendingReceiver;


// Interface: SecureChannel
ash.secure_channel.secure_channel.mojom.mojom.SecureChannel = {};

ash.secure_channel.secure_channel.mojom.mojom.SecureChannelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.secure_channel.mojom.mojom.SecureChannelRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.SecureChannel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.secure_channel.mojom.mojom.SecureChannelPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.secure_channel.mojom.mojom.SecureChannelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.secure_channel.mojom.mojom.SecureChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  listenForConnectionFromDevice(device_to_connect, local_device, feature, connection_medium, connection_priority, delegate) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.secure_channel.mojom.mojom.SecureChannel_ListenForConnectionFromDevice_ParamsSpec,
      null,
      [device_to_connect, local_device, feature, connection_medium, connection_priority, delegate]);
  }

  initiateConnectionToDevice(device_to_connect, local_device, feature, connection_medium, connection_priority, delegate, secure_channel_structured_metrics_logger) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.secure_channel.secure_channel.mojom.mojom.SecureChannel_InitiateConnectionToDevice_ParamsSpec,
      null,
      [device_to_connect, local_device, feature, connection_medium, connection_priority, delegate, secure_channel_structured_metrics_logger]);
  }

  setNearbyConnector(nearby_connector) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.secure_channel.secure_channel.mojom.mojom.SecureChannel_SetNearbyConnector_ParamsSpec,
      null,
      [nearby_connector]);
  }

  getLastSeenTimestamp(remote_device_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.secure_channel.secure_channel.mojom.mojom.SecureChannel_GetLastSeenTimestamp_ParamsSpec,
      ash.secure_channel.secure_channel.mojom.mojom.SecureChannel_GetLastSeenTimestamp_ResponseParamsSpec,
      [remote_device_id]);
  }

};

ash.secure_channel.secure_channel.mojom.mojom.SecureChannel.getRemote = function() {
  let remote = new ash.secure_channel.secure_channel.mojom.mojom.SecureChannelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.SecureChannel',
    'context');
  return remote.$;
};

// ParamsSpec for ListenForConnectionFromDevice
ash.secure_channel.secure_channel.mojom.mojom.SecureChannel_ListenForConnectionFromDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.SecureChannel.ListenForConnectionFromDevice_Params',
      packedSize: 48,
      fields: [
        { name: 'device_to_connect', packedOffset: 0, packedBitOffset: 0, type: ash.multidevice.mojom.RemoteDeviceSpec, nullable: false, minVersion: 0 },
        { name: 'local_device', packedOffset: 8, packedBitOffset: 0, type: ash.multidevice.mojom.RemoteDeviceSpec, nullable: false, minVersion: 0 },
        { name: 'feature', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'connection_medium', packedOffset: 32, packedBitOffset: 0, type: ash.secure_channel.mojom.ConnectionMediumSpec, nullable: false, minVersion: 0 },
        { name: 'connection_priority', packedOffset: 36, packedBitOffset: 0, type: ash.secure_channel.mojom.ConnectionPrioritySpec, nullable: false, minVersion: 0 },
        { name: 'delegate', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.secure_channel.mojom.ConnectionDelegateRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for InitiateConnectionToDevice
ash.secure_channel.secure_channel.mojom.mojom.SecureChannel_InitiateConnectionToDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.SecureChannel.InitiateConnectionToDevice_Params',
      packedSize: 56,
      fields: [
        { name: 'device_to_connect', packedOffset: 0, packedBitOffset: 0, type: ash.multidevice.mojom.RemoteDeviceSpec, nullable: false, minVersion: 0 },
        { name: 'local_device', packedOffset: 8, packedBitOffset: 0, type: ash.multidevice.mojom.RemoteDeviceSpec, nullable: false, minVersion: 0 },
        { name: 'feature', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'connection_medium', packedOffset: 40, packedBitOffset: 0, type: ash.secure_channel.mojom.ConnectionMediumSpec, nullable: false, minVersion: 0 },
        { name: 'connection_priority', packedOffset: 44, packedBitOffset: 0, type: ash.secure_channel.mojom.ConnectionPrioritySpec, nullable: false, minVersion: 0 },
        { name: 'delegate', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.secure_channel.mojom.ConnectionDelegateRemote), nullable: false, minVersion: 0 },
        { name: 'secure_channel_structured_metrics_logger', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// ParamsSpec for SetNearbyConnector
ash.secure_channel.secure_channel.mojom.mojom.SecureChannel_SetNearbyConnector_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.SecureChannel.SetNearbyConnector_Params',
      packedSize: 16,
      fields: [
        { name: 'nearby_connector', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.secure_channel.mojom.NearbyConnectorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetLastSeenTimestamp
ash.secure_channel.secure_channel.mojom.mojom.SecureChannel_GetLastSeenTimestamp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.SecureChannel.GetLastSeenTimestamp_Params',
      packedSize: 16,
      fields: [
        { name: 'remote_device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.secure_channel.secure_channel.mojom.mojom.SecureChannel_GetLastSeenTimestamp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.SecureChannel.GetLastSeenTimestamp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.secure_channel.mojom.mojom.SecureChannelPtr = ash.secure_channel.secure_channel.mojom.mojom.SecureChannelRemote;
ash.secure_channel.secure_channel.mojom.mojom.SecureChannelRequest = ash.secure_channel.secure_channel.mojom.mojom.SecureChannelPendingReceiver;

