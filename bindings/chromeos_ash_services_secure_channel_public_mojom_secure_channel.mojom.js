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

// Enum: ConnectionCreationDetail
ash.secure_channel.mojom.ConnectionCreationDetail = {
  REMOTE_DEVICE_USED_BACKGROUND_BLE_ADVERTISING: 0,
  REMOTE_DEVICE_USED_FOREGROUND_BLE_ADVERTISING: 1,
};

// Enum: ConnectionPriority
ash.secure_channel.mojom.ConnectionPriority = {
  LOW: 0,
  MEDIUM: 1,
  HIGH: 2,
};

// Enum: ConnectionMedium
ash.secure_channel.mojom.ConnectionMedium = {
  kBluetoothLowEnergy: 0,
  kNearbyConnections: 1,
};

// Enum: DiscoveryResult
ash.secure_channel.mojom.DiscoveryResult = {
  kFailure: 0,
  kSuccess: 1,
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
ash.secure_channel.mojom.BluetoothConnectionMetadataSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.BluetoothConnectionMetadata',
      packedSize: 16,
      fields: [
        { name: 'current_rssi', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ConnectionMetadata
ash.secure_channel.mojom.ConnectionMetadataSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.ConnectionMetadata',
      packedSize: 32,
      fields: [
        { name: 'creation_details', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'bluetooth_connection_metadata', packedOffset: 16, packedBitOffset: 0, type: ash.secure_channel.mojom.BluetoothConnectionMetadataSpec, nullable: true },
        { name: 'channel_binding_data', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: Channel
ash.secure_channel.mojom.Channel = {};

ash.secure_channel.mojom.ChannelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.mojom.ChannelRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.Channel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.mojom.ChannelPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.mojom.ChannelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.mojom.ChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.mojom.Channel_SendMessage_ParamsSpec,
      null,
      [message]);
  }

  registerPayloadFile(payload_id, payload_files, listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.secure_channel.mojom.Channel_RegisterPayloadFile_ParamsSpec,
      ash.secure_channel.mojom.Channel_RegisterPayloadFile_ResponseParamsSpec,
      [payload_id, payload_files, listener]);
  }

  getConnectionMetadata() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.secure_channel.mojom.Channel_GetConnectionMetadata_ParamsSpec,
      ash.secure_channel.mojom.Channel_GetConnectionMetadata_ResponseParamsSpec,
      []);
  }

};

ash.secure_channel.mojom.Channel.getRemote = function() {
  let remote = new ash.secure_channel.mojom.ChannelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.Channel',
    'context');
  return remote.$;
};

// ParamsSpec for SendMessage
ash.secure_channel.mojom.Channel_SendMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.Channel.SendMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterPayloadFile
ash.secure_channel.mojom.Channel_RegisterPayloadFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.Channel.RegisterPayloadFile_Params',
      packedSize: 32,
      fields: [
        { name: 'payload_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'payload_files', packedOffset: 16, packedBitOffset: 0, type: ash.secure_channel.mojom.PayloadFilesSpec, nullable: false },
        { name: 'listener', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.secure_channel.mojom.Channel_RegisterPayloadFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.Channel.RegisterPayloadFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetConnectionMetadata
ash.secure_channel.mojom.Channel_GetConnectionMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.Channel.GetConnectionMetadata_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.secure_channel.mojom.Channel_GetConnectionMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.Channel.GetConnectionMetadata_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: ash.secure_channel.mojom.ConnectionMetadataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.mojom.ChannelPtr = ash.secure_channel.mojom.ChannelRemote;
ash.secure_channel.mojom.ChannelRequest = ash.secure_channel.mojom.ChannelPendingReceiver;


// Interface: MessageReceiver
ash.secure_channel.mojom.MessageReceiver = {};

ash.secure_channel.mojom.MessageReceiverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.mojom.MessageReceiverRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.MessageReceiver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.mojom.MessageReceiverPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.mojom.MessageReceiverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.mojom.MessageReceiverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMessageReceived(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.mojom.MessageReceiver_OnMessageReceived_ParamsSpec,
      null,
      [message]);
  }

};

ash.secure_channel.mojom.MessageReceiver.getRemote = function() {
  let remote = new ash.secure_channel.mojom.MessageReceiverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.MessageReceiver',
    'context');
  return remote.$;
};

// ParamsSpec for OnMessageReceived
ash.secure_channel.mojom.MessageReceiver_OnMessageReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.MessageReceiver.OnMessageReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.mojom.MessageReceiverPtr = ash.secure_channel.mojom.MessageReceiverRemote;
ash.secure_channel.mojom.MessageReceiverRequest = ash.secure_channel.mojom.MessageReceiverPendingReceiver;


// Interface: ConnectionDelegate
ash.secure_channel.mojom.ConnectionDelegate = {};

ash.secure_channel.mojom.ConnectionDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.mojom.ConnectionDelegateRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.ConnectionDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.mojom.ConnectionDelegatePendingReceiver,
      handle);
    this.$ = new ash.secure_channel.mojom.ConnectionDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.mojom.ConnectionDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onConnectionAttemptFailure(reason) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.mojom.ConnectionDelegate_OnConnectionAttemptFailure_ParamsSpec,
      null,
      [reason]);
  }

  onConnection(channel, message_receiver_receiver, nearby_connection_state_listener_receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.secure_channel.mojom.ConnectionDelegate_OnConnection_ParamsSpec,
      null,
      [channel, message_receiver_receiver, nearby_connection_state_listener_receiver]);
  }

};

ash.secure_channel.mojom.ConnectionDelegate.getRemote = function() {
  let remote = new ash.secure_channel.mojom.ConnectionDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.ConnectionDelegate',
    'context');
  return remote.$;
};

// ParamsSpec for OnConnectionAttemptFailure
ash.secure_channel.mojom.ConnectionDelegate_OnConnectionAttemptFailure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.ConnectionDelegate.OnConnectionAttemptFailure_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: ash.secure_channel.mojom.ConnectionAttemptFailureReasonSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnConnection
ash.secure_channel.mojom.ConnectionDelegate_OnConnection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.ConnectionDelegate.OnConnection_Params',
      packedSize: 24,
      fields: [
        { name: 'channel', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'message_receiver_receiver', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'nearby_connection_state_listener_receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.mojom.ConnectionDelegatePtr = ash.secure_channel.mojom.ConnectionDelegateRemote;
ash.secure_channel.mojom.ConnectionDelegateRequest = ash.secure_channel.mojom.ConnectionDelegatePendingReceiver;


// Interface: SecureChannelStructuredMetricsLogger
ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger = {};

ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  logDiscoveryAttempt(result, error_code) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogDiscoveryAttempt_ParamsSpec,
      null,
      [result, error_code]);
  }

  logNearbyConnectionState(step, status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogNearbyConnectionState_ParamsSpec,
      null,
      [step, status]);
  }

  logSecureChannelState(state) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogSecureChannelState_ParamsSpec,
      null,
      [state]);
  }

};

ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger.getRemote = function() {
  let remote = new ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger',
    'context');
  return remote.$;
};

// ParamsSpec for LogDiscoveryAttempt
ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogDiscoveryAttempt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger.LogDiscoveryAttempt_Params',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: ash.secure_channel.mojom.DiscoveryResultSpec, nullable: false },
        { name: 'error_code', packedOffset: 16, packedBitOffset: 0, type: ash.secure_channel.mojom.DiscoveryErrorCodeSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LogNearbyConnectionState
ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogNearbyConnectionState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger.LogNearbyConnectionState_Params',
      packedSize: 24,
      fields: [
        { name: 'step', packedOffset: 8, packedBitOffset: 0, type: ash.secure_channel.mojom.NearbyConnectionStepSpec, nullable: false },
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: ash.secure_channel.mojom.NearbyConnectionStepResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LogSecureChannelState
ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogSecureChannelState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger.LogSecureChannelState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: ash.secure_channel.mojom.SecureChannelStateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerPtr = ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerRemote;
ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerRequest = ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerPendingReceiver;


// Interface: SecureChannel
ash.secure_channel.mojom.SecureChannel = {};

ash.secure_channel.mojom.SecureChannelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.mojom.SecureChannelRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.SecureChannel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.mojom.SecureChannelPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.mojom.SecureChannelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.mojom.SecureChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  listenForConnectionFromDevice(device_to_connect, local_device, feature, connection_medium, connection_priority, delegate) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.mojom.SecureChannel_ListenForConnectionFromDevice_ParamsSpec,
      null,
      [device_to_connect, local_device, feature, connection_medium, connection_priority, delegate]);
  }

  initiateConnectionToDevice(device_to_connect, local_device, feature, connection_medium, connection_priority, delegate, secure_channel_structured_metrics_logger) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.secure_channel.mojom.SecureChannel_InitiateConnectionToDevice_ParamsSpec,
      null,
      [device_to_connect, local_device, feature, connection_medium, connection_priority, delegate, secure_channel_structured_metrics_logger]);
  }

  setNearbyConnector(nearby_connector) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.secure_channel.mojom.SecureChannel_SetNearbyConnector_ParamsSpec,
      null,
      [nearby_connector]);
  }

  getLastSeenTimestamp(remote_device_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ParamsSpec,
      ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ResponseParamsSpec,
      [remote_device_id]);
  }

};

ash.secure_channel.mojom.SecureChannel.getRemote = function() {
  let remote = new ash.secure_channel.mojom.SecureChannelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.SecureChannel',
    'context');
  return remote.$;
};

// ParamsSpec for ListenForConnectionFromDevice
ash.secure_channel.mojom.SecureChannel_ListenForConnectionFromDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.SecureChannel.ListenForConnectionFromDevice_Params',
      packedSize: 56,
      fields: [
        { name: 'device_to_connect', packedOffset: 8, packedBitOffset: 0, type: ash.multidevice.mojom.RemoteDeviceSpec, nullable: false },
        { name: 'local_device', packedOffset: 16, packedBitOffset: 0, type: ash.multidevice.mojom.RemoteDeviceSpec, nullable: false },
        { name: 'feature', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'connection_medium', packedOffset: 32, packedBitOffset: 0, type: ash.secure_channel.mojom.ConnectionMediumSpec, nullable: false },
        { name: 'connection_priority', packedOffset: 40, packedBitOffset: 0, type: ash.secure_channel.mojom.ConnectionPrioritySpec, nullable: false },
        { name: 'delegate', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InitiateConnectionToDevice
ash.secure_channel.mojom.SecureChannel_InitiateConnectionToDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.SecureChannel.InitiateConnectionToDevice_Params',
      packedSize: 56,
      fields: [
        { name: 'device_to_connect', packedOffset: 8, packedBitOffset: 0, type: ash.multidevice.mojom.RemoteDeviceSpec, nullable: false },
        { name: 'local_device', packedOffset: 16, packedBitOffset: 0, type: ash.multidevice.mojom.RemoteDeviceSpec, nullable: false },
        { name: 'feature', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'connection_medium', packedOffset: 32, packedBitOffset: 0, type: ash.secure_channel.mojom.ConnectionMediumSpec, nullable: false },
        { name: 'connection_priority', packedOffset: 40, packedBitOffset: 0, type: ash.secure_channel.mojom.ConnectionPrioritySpec, nullable: false },
        { name: 'delegate', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'secure_channel_structured_metrics_logger', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNearbyConnector
ash.secure_channel.mojom.SecureChannel_SetNearbyConnector_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.SecureChannel.SetNearbyConnector_Params',
      packedSize: 16,
      fields: [
        { name: 'nearby_connector', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetLastSeenTimestamp
ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.SecureChannel.GetLastSeenTimestamp_Params',
      packedSize: 16,
      fields: [
        { name: 'remote_device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.SecureChannel.GetLastSeenTimestamp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.mojom.SecureChannelPtr = ash.secure_channel.mojom.SecureChannelRemote;
ash.secure_channel.mojom.SecureChannelRequest = ash.secure_channel.mojom.SecureChannelPendingReceiver;

