// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/secure_channel/public/mojom/secure_channel.mojom
// Module: ash.secure_channel.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.secure_channel = ash.secure_channel || {};
ash.secure_channel.mojom = ash.secure_channel.mojom || {};
var mojo_base = mojo_base || {};

ash.secure_channel.mojom.ConnectionAttemptFailureReasonSpec = { $: mojo.internal.Enum() };
ash.secure_channel.mojom.ConnectionCreationDetailSpec = { $: mojo.internal.Enum() };
ash.secure_channel.mojom.ConnectionPrioritySpec = { $: mojo.internal.Enum() };
ash.secure_channel.mojom.ConnectionMediumSpec = { $: mojo.internal.Enum() };
ash.secure_channel.mojom.DiscoveryResultSpec = { $: mojo.internal.Enum() };
ash.secure_channel.mojom.DiscoveryErrorCodeSpec = { $: mojo.internal.Enum() };
ash.secure_channel.mojom.SecureChannelStateSpec = { $: mojo.internal.Enum() };
ash.secure_channel.mojom.BluetoothConnectionMetadataSpec = { $: {} };
ash.secure_channel.mojom.ConnectionMetadataSpec = { $: {} };
ash.secure_channel.mojom.Channel = {};
ash.secure_channel.mojom.Channel.$interfaceName = 'ash.secure_channel.mojom.Channel';
ash.secure_channel.mojom.Channel_SendMessage_ParamsSpec = { $: {} };
ash.secure_channel.mojom.Channel_SendMessage_ResponseParamsSpec = { $: {} };
ash.secure_channel.mojom.Channel_RegisterPayloadFile_ParamsSpec = { $: {} };
ash.secure_channel.mojom.Channel_RegisterPayloadFile_ResponseParamsSpec = { $: {} };
ash.secure_channel.mojom.Channel_GetConnectionMetadata_ParamsSpec = { $: {} };
ash.secure_channel.mojom.Channel_GetConnectionMetadata_ResponseParamsSpec = { $: {} };
ash.secure_channel.mojom.MessageReceiver = {};
ash.secure_channel.mojom.MessageReceiver.$interfaceName = 'ash.secure_channel.mojom.MessageReceiver';
ash.secure_channel.mojom.MessageReceiver_OnMessageReceived_ParamsSpec = { $: {} };
ash.secure_channel.mojom.ConnectionDelegate = {};
ash.secure_channel.mojom.ConnectionDelegate.$interfaceName = 'ash.secure_channel.mojom.ConnectionDelegate';
ash.secure_channel.mojom.ConnectionDelegate_OnConnectionAttemptFailure_ParamsSpec = { $: {} };
ash.secure_channel.mojom.ConnectionDelegate_OnConnection_ParamsSpec = { $: {} };
ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger = {};
ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger.$interfaceName = 'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger';
ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogDiscoveryAttempt_ParamsSpec = { $: {} };
ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogNearbyConnectionState_ParamsSpec = { $: {} };
ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogSecureChannelState_ParamsSpec = { $: {} };
ash.secure_channel.mojom.SecureChannel = {};
ash.secure_channel.mojom.SecureChannel.$interfaceName = 'ash.secure_channel.mojom.SecureChannel';
ash.secure_channel.mojom.SecureChannel_ListenForConnectionFromDevice_ParamsSpec = { $: {} };
ash.secure_channel.mojom.SecureChannel_InitiateConnectionToDevice_ParamsSpec = { $: {} };
ash.secure_channel.mojom.SecureChannel_SetNearbyConnector_ParamsSpec = { $: {} };
ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ParamsSpec = { $: {} };
ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ResponseParamsSpec = { $: {} };

ash.secure_channel.mojom.kConnectionDroppedReason = 1;

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
mojo.internal.Struct(
    ash.secure_channel.mojom.BluetoothConnectionMetadataSpec, 'ash.secure_channel.mojom.BluetoothConnectionMetadata', [
      mojo.internal.StructField('current_rssi', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ConnectionMetadata
mojo.internal.Struct(
    ash.secure_channel.mojom.ConnectionMetadataSpec, 'ash.secure_channel.mojom.ConnectionMetadata', [
      mojo.internal.StructField('creation_details', 0, 0, mojo.internal.Array(ash.secure_channel.mojom.ConnectionCreationDetailSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('bluetooth_connection_metadata', 8, 0, ash.secure_channel.mojom.BluetoothConnectionMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('channel_binding_data', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: Channel
mojo.internal.Struct(
    ash.secure_channel.mojom.Channel_SendMessage_ParamsSpec, 'ash.secure_channel.mojom.Channel_SendMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.Channel_SendMessage_ResponseParamsSpec, 'ash.secure_channel.mojom.Channel_SendMessage_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.Channel_RegisterPayloadFile_ParamsSpec, 'ash.secure_channel.mojom.Channel_RegisterPayloadFile_Params', [
      mojo.internal.StructField('payload_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('payload_files', 8, 0, ash.secure_channel.mojom.PayloadFilesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('listener', 16, 0, mojo.internal.InterfaceProxy(ash.secure_channel.mojom.FilePayloadListenerRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.Channel_RegisterPayloadFile_ResponseParamsSpec, 'ash.secure_channel.mojom.Channel_RegisterPayloadFile_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.Channel_GetConnectionMetadata_ParamsSpec, 'ash.secure_channel.mojom.Channel_GetConnectionMetadata_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.Channel_GetConnectionMetadata_ResponseParamsSpec, 'ash.secure_channel.mojom.Channel_GetConnectionMetadata_ResponseParams', [
      mojo.internal.StructField('metadata', 0, 0, ash.secure_channel.mojom.ConnectionMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      ash.secure_channel.mojom.Channel_SendMessage_ResponseParamsSpec,
      [message],
      false);
  }

  registerPayloadFile(payload_id, payload_files, listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.secure_channel.mojom.Channel_RegisterPayloadFile_ParamsSpec,
      ash.secure_channel.mojom.Channel_RegisterPayloadFile_ResponseParamsSpec,
      [payload_id, payload_files, listener],
      false);
  }

  getConnectionMetadata() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.secure_channel.mojom.Channel_GetConnectionMetadata_ParamsSpec,
      ash.secure_channel.mojom.Channel_GetConnectionMetadata_ResponseParamsSpec,
      [],
      false);
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

ash.secure_channel.mojom.ChannelReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.secure_channel.mojom.Channel_SendMessage_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.sendMessage');
          const result = this.impl.sendMessage(params.message);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.secure_channel.mojom.Channel_SendMessage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.secure_channel.mojom.Channel_RegisterPayloadFile_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.registerPayloadFile');
          const result = this.impl.registerPayloadFile(params.payload_id, params.payload_files, params.listener);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.secure_channel.mojom.Channel_RegisterPayloadFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = ash.secure_channel.mojom.Channel_GetConnectionMetadata_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.getConnectionMetadata');
          const result = this.impl.getConnectionMetadata();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.secure_channel.mojom.Channel_GetConnectionMetadata_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.secure_channel.mojom.ChannelReceiver = ash.secure_channel.mojom.ChannelReceiver;

ash.secure_channel.mojom.ChannelPtr = ash.secure_channel.mojom.ChannelRemote;
ash.secure_channel.mojom.ChannelRequest = ash.secure_channel.mojom.ChannelPendingReceiver;


// Interface: MessageReceiver
mojo.internal.Struct(
    ash.secure_channel.mojom.MessageReceiver_OnMessageReceived_ParamsSpec, 'ash.secure_channel.mojom.MessageReceiver_OnMessageReceived_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [message],
      false);
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

ash.secure_channel.mojom.MessageReceiverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.secure_channel.mojom.MessageReceiver_OnMessageReceived_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onMessageReceived');
          const result = this.impl.onMessageReceived(params.message);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.secure_channel.mojom.MessageReceiverReceiver = ash.secure_channel.mojom.MessageReceiverReceiver;

ash.secure_channel.mojom.MessageReceiverPtr = ash.secure_channel.mojom.MessageReceiverRemote;
ash.secure_channel.mojom.MessageReceiverRequest = ash.secure_channel.mojom.MessageReceiverPendingReceiver;


// Interface: ConnectionDelegate
mojo.internal.Struct(
    ash.secure_channel.mojom.ConnectionDelegate_OnConnectionAttemptFailure_ParamsSpec, 'ash.secure_channel.mojom.ConnectionDelegate_OnConnectionAttemptFailure_Params', [
      mojo.internal.StructField('reason', 0, 0, ash.secure_channel.mojom.ConnectionAttemptFailureReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.ConnectionDelegate_OnConnection_ParamsSpec, 'ash.secure_channel.mojom.ConnectionDelegate_OnConnection_Params', [
      mojo.internal.StructField('channel', 0, 0, mojo.internal.InterfaceProxy(ash.secure_channel.mojom.ChannelSpec), null, false, 0, undefined),
      mojo.internal.StructField('message_receiver_receiver', 8, 0, mojo.internal.InterfaceRequest(ash.secure_channel.mojom.MessageReceiverSpec), null, false, 0, undefined),
      mojo.internal.StructField('nearby_connection_state_listener_receiver', 16, 0, mojo.internal.InterfaceRequest(ash.secure_channel.mojom.NearbyConnectionStateListenerRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [reason],
      false);
  }

  onConnection(channel, message_receiver_receiver, nearby_connection_state_listener_receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.secure_channel.mojom.ConnectionDelegate_OnConnection_ParamsSpec,
      null,
      [channel, message_receiver_receiver, nearby_connection_state_listener_receiver],
      false);
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

ash.secure_channel.mojom.ConnectionDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.secure_channel.mojom.ConnectionDelegate_OnConnectionAttemptFailure_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onConnectionAttemptFailure');
          const result = this.impl.onConnectionAttemptFailure(params.reason);
          break;
        }
        case 1: {
          const params = ash.secure_channel.mojom.ConnectionDelegate_OnConnection_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onConnection');
          const result = this.impl.onConnection(params.channel, params.message_receiver_receiver, params.nearby_connection_state_listener_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.secure_channel.mojom.ConnectionDelegateReceiver = ash.secure_channel.mojom.ConnectionDelegateReceiver;

ash.secure_channel.mojom.ConnectionDelegatePtr = ash.secure_channel.mojom.ConnectionDelegateRemote;
ash.secure_channel.mojom.ConnectionDelegateRequest = ash.secure_channel.mojom.ConnectionDelegatePendingReceiver;


// Interface: SecureChannelStructuredMetricsLogger
mojo.internal.Struct(
    ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogDiscoveryAttempt_ParamsSpec, 'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogDiscoveryAttempt_Params', [
      mojo.internal.StructField('result', 0, 0, ash.secure_channel.mojom.DiscoveryResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_code', 8, 0, ash.secure_channel.mojom.DiscoveryErrorCodeSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogNearbyConnectionState_ParamsSpec, 'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogNearbyConnectionState_Params', [
      mojo.internal.StructField('step', 0, 0, ash.secure_channel.mojom.NearbyConnectionStepSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, ash.secure_channel.mojom.NearbyConnectionStepResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogSecureChannelState_ParamsSpec, 'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogSecureChannelState_Params', [
      mojo.internal.StructField('state', 0, 0, ash.secure_channel.mojom.SecureChannelStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [result, error_code],
      false);
  }

  logNearbyConnectionState(step, status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogNearbyConnectionState_ParamsSpec,
      null,
      [step, status],
      false);
  }

  logSecureChannelState(state) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogSecureChannelState_ParamsSpec,
      null,
      [state],
      false);
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

ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogDiscoveryAttempt_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.logDiscoveryAttempt');
          const result = this.impl.logDiscoveryAttempt(params.result, params.error_code);
          break;
        }
        case 1: {
          const params = ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogNearbyConnectionState_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.logNearbyConnectionState');
          const result = this.impl.logNearbyConnectionState(params.step, params.status);
          break;
        }
        case 2: {
          const params = ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogSecureChannelState_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.logSecureChannelState');
          const result = this.impl.logSecureChannelState(params.state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerReceiver = ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerReceiver;

ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerPtr = ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerRemote;
ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerRequest = ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerPendingReceiver;


// Interface: SecureChannel
mojo.internal.Struct(
    ash.secure_channel.mojom.SecureChannel_ListenForConnectionFromDevice_ParamsSpec, 'ash.secure_channel.mojom.SecureChannel_ListenForConnectionFromDevice_Params', [
      mojo.internal.StructField('device_to_connect', 0, 0, ash.multidevice.mojom.RemoteDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_device', 8, 0, ash.multidevice.mojom.RemoteDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('feature', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('connection_medium', 24, 0, ash.secure_channel.mojom.ConnectionMediumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('connection_priority', 32, 0, ash.secure_channel.mojom.ConnectionPrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('delegate', 40, 0, mojo.internal.InterfaceProxy(ash.secure_channel.mojom.ConnectionDelegateSpec), null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.SecureChannel_InitiateConnectionToDevice_ParamsSpec, 'ash.secure_channel.mojom.SecureChannel_InitiateConnectionToDevice_Params', [
      mojo.internal.StructField('device_to_connect', 0, 0, ash.multidevice.mojom.RemoteDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_device', 8, 0, ash.multidevice.mojom.RemoteDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('feature', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('connection_medium', 24, 0, ash.secure_channel.mojom.ConnectionMediumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('connection_priority', 32, 0, ash.secure_channel.mojom.ConnectionPrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('delegate', 40, 0, mojo.internal.InterfaceProxy(ash.secure_channel.mojom.ConnectionDelegateSpec), null, false, 0, undefined),
      mojo.internal.StructField('secure_channel_structured_metrics_logger', 48, 0, mojo.internal.InterfaceProxy(ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerSpec), null, true, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.SecureChannel_SetNearbyConnector_ParamsSpec, 'ash.secure_channel.mojom.SecureChannel_SetNearbyConnector_Params', [
      mojo.internal.StructField('nearby_connector', 0, 0, mojo.internal.InterfaceProxy(ash.secure_channel.mojom.NearbyConnectorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ParamsSpec, 'ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_Params', [
      mojo.internal.StructField('remote_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ResponseParamsSpec, 'ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ResponseParams', [
      mojo.internal.StructField('time', 0, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [device_to_connect, local_device, feature, connection_medium, connection_priority, delegate],
      false);
  }

  initiateConnectionToDevice(device_to_connect, local_device, feature, connection_medium, connection_priority, delegate, secure_channel_structured_metrics_logger) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.secure_channel.mojom.SecureChannel_InitiateConnectionToDevice_ParamsSpec,
      null,
      [device_to_connect, local_device, feature, connection_medium, connection_priority, delegate, secure_channel_structured_metrics_logger],
      false);
  }

  setNearbyConnector(nearby_connector) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.secure_channel.mojom.SecureChannel_SetNearbyConnector_ParamsSpec,
      null,
      [nearby_connector],
      false);
  }

  getLastSeenTimestamp(remote_device_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ParamsSpec,
      ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ResponseParamsSpec,
      [remote_device_id],
      false);
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

ash.secure_channel.mojom.SecureChannelReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.secure_channel.mojom.SecureChannel_ListenForConnectionFromDevice_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.listenForConnectionFromDevice');
          const result = this.impl.listenForConnectionFromDevice(params.device_to_connect, params.local_device, params.feature, params.connection_medium, params.connection_priority, params.delegate);
          break;
        }
        case 1: {
          const params = ash.secure_channel.mojom.SecureChannel_InitiateConnectionToDevice_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.initiateConnectionToDevice');
          const result = this.impl.initiateConnectionToDevice(params.device_to_connect, params.local_device, params.feature, params.connection_medium, params.connection_priority, params.delegate, params.secure_channel_structured_metrics_logger);
          break;
        }
        case 2: {
          const params = ash.secure_channel.mojom.SecureChannel_SetNearbyConnector_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.setNearbyConnector');
          const result = this.impl.setNearbyConnector(params.nearby_connector);
          break;
        }
        case 3: {
          const params = ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.getLastSeenTimestamp');
          const result = this.impl.getLastSeenTimestamp(params.remote_device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.secure_channel.mojom.SecureChannelReceiver = ash.secure_channel.mojom.SecureChannelReceiver;

ash.secure_channel.mojom.SecureChannelPtr = ash.secure_channel.mojom.SecureChannelRemote;
ash.secure_channel.mojom.SecureChannelRequest = ash.secure_channel.mojom.SecureChannelPendingReceiver;

