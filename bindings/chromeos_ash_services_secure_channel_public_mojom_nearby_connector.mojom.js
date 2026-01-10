// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/secure_channel/public/mojom/nearby_connector.mojom
// Module: ash.secure_channel.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.secure_channel = ash.secure_channel || {};
ash.secure_channel.secure_channel.mojom = ash.secure_channel.secure_channel.mojom || {};


ash.secure_channel.secure_channel.mojom.mojom.kServiceId = "secure_channel";

// Enum: NearbyConnectionStep
ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectionStep = {
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
ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectionStepSpec = { $: mojo.internal.Enum() };

// Enum: NearbyConnectionStepResult
ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectionStepResult = {
  kSuccess: 0,
  kTimeoutTransitionState: 1,
  kError: 2,
  kOutOfOrderApiCall: 3,
  kAlreadyHaveActiveStrategy: 4,
  kAlreadyAdvertising: 5,
  kAlreadyDiscovering: 6,
  kEndpointIOError: 7,
  kEndpointUnknown: 8,
  kConnectionRejected: 9,
  kAlreadyConnectedToEndpoint: 10,
  kNotConnectedToEndpoint: 11,
  kBluetoothError: 12,
  kBleError: 13,
  kWifiLanError: 14,
  kPayloadUnknown: 15,
  kAlreadyListening: 16,
  kReset: 17,
  kTimeout: 18,
  kUnknown: 19,
};
ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectionStepResultSpec = { $: mojo.internal.Enum() };

// Interface: NearbyConnectionStateListener
ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectionStateListener = {};

ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectionStateListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectionStateListenerRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.NearbyConnectionStateListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectionStateListenerPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectionStateListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectionStateListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNearbyConnectionStateChanged(step, result) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectionStateListener_OnNearbyConnectionStateChanged_ParamsSpec,
      null,
      [step, result]);
  }

};

ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectionStateListener.getRemote = function() {
  let remote = new ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectionStateListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.NearbyConnectionStateListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnNearbyConnectionStateChanged
ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectionStateListener_OnNearbyConnectionStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.NearbyConnectionStateListener.OnNearbyConnectionStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'step', packedOffset: 0, packedBitOffset: 0, type: ash.secure_channel.mojom.NearbyConnectionStepSpec, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 4, packedBitOffset: 0, type: ash.secure_channel.mojom.NearbyConnectionStepResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectionStateListenerPtr = ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectionStateListenerRemote;
ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectionStateListenerRequest = ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectionStateListenerPendingReceiver;


// Interface: NearbyMessageSender
ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageSender = {};

ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageSenderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageSenderRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.NearbyMessageSender';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageSenderPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageSenderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageSenderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageSender_SendMessage_ParamsSpec,
      ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageSender_SendMessage_ResponseParamsSpec,
      [message]);
  }

};

ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageSender.getRemote = function() {
  let remote = new ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageSenderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.NearbyMessageSender',
    'context');
  return remote.$;
};

// ParamsSpec for SendMessage
ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageSender_SendMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.NearbyMessageSender.SendMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageSender_SendMessage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.NearbyMessageSender.SendMessage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageSenderPtr = ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageSenderRemote;
ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageSenderRequest = ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageSenderPendingReceiver;


// Interface: NearbyMessageReceiver
ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageReceiver = {};

ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageReceiverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageReceiverRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.NearbyMessageReceiver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageReceiverPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageReceiverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageReceiverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMessageReceived(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageReceiver_OnMessageReceived_ParamsSpec,
      null,
      [message]);
  }

};

ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageReceiver.getRemote = function() {
  let remote = new ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageReceiverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.NearbyMessageReceiver',
    'context');
  return remote.$;
};

// ParamsSpec for OnMessageReceived
ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageReceiver_OnMessageReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.NearbyMessageReceiver.OnMessageReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageReceiverPtr = ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageReceiverRemote;
ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageReceiverRequest = ash.secure_channel.secure_channel.mojom.mojom.NearbyMessageReceiverPendingReceiver;


// Interface: NearbyFilePayloadHandler
ash.secure_channel.secure_channel.mojom.mojom.NearbyFilePayloadHandler = {};

ash.secure_channel.secure_channel.mojom.mojom.NearbyFilePayloadHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.secure_channel.mojom.mojom.NearbyFilePayloadHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.NearbyFilePayloadHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.secure_channel.mojom.mojom.NearbyFilePayloadHandlerPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.secure_channel.mojom.mojom.NearbyFilePayloadHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.secure_channel.mojom.mojom.NearbyFilePayloadHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerPayloadFile(payload_id, payload_files, listener) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.secure_channel.mojom.mojom.NearbyFilePayloadHandler_RegisterPayloadFile_ParamsSpec,
      ash.secure_channel.secure_channel.mojom.mojom.NearbyFilePayloadHandler_RegisterPayloadFile_ResponseParamsSpec,
      [payload_id, payload_files, listener]);
  }

};

ash.secure_channel.secure_channel.mojom.mojom.NearbyFilePayloadHandler.getRemote = function() {
  let remote = new ash.secure_channel.secure_channel.mojom.mojom.NearbyFilePayloadHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.NearbyFilePayloadHandler',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterPayloadFile
ash.secure_channel.secure_channel.mojom.mojom.NearbyFilePayloadHandler_RegisterPayloadFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.NearbyFilePayloadHandler.RegisterPayloadFile_Params',
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

ash.secure_channel.secure_channel.mojom.mojom.NearbyFilePayloadHandler_RegisterPayloadFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.NearbyFilePayloadHandler.RegisterPayloadFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.secure_channel.mojom.mojom.NearbyFilePayloadHandlerPtr = ash.secure_channel.secure_channel.mojom.mojom.NearbyFilePayloadHandlerRemote;
ash.secure_channel.secure_channel.mojom.mojom.NearbyFilePayloadHandlerRequest = ash.secure_channel.secure_channel.mojom.mojom.NearbyFilePayloadHandlerPendingReceiver;


// Interface: NearbyConnector
ash.secure_channel.secure_channel.mojom.mojom.NearbyConnector = {};

ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectorRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.NearbyConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectorPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(bluetooth_public_address, eid, message_receiver, nearby_connection_state_listener) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.secure_channel.mojom.mojom.NearbyConnector_Connect_ParamsSpec,
      ash.secure_channel.secure_channel.mojom.mojom.NearbyConnector_Connect_ResponseParamsSpec,
      [bluetooth_public_address, eid, message_receiver, nearby_connection_state_listener]);
  }

};

ash.secure_channel.secure_channel.mojom.mojom.NearbyConnector.getRemote = function() {
  let remote = new ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.NearbyConnector',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
ash.secure_channel.secure_channel.mojom.mojom.NearbyConnector_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.NearbyConnector.Connect_Params',
      packedSize: 40,
      fields: [
        { name: 'bluetooth_public_address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'eid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'message_receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.secure_channel.mojom.NearbyMessageReceiverRemote), nullable: false, minVersion: 0 },
        { name: 'nearby_connection_state_listener', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.secure_channel.mojom.NearbyConnectionStateListenerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

ash.secure_channel.secure_channel.mojom.mojom.NearbyConnector_Connect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.NearbyConnector.Connect_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'message_sender', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.secure_channel.mojom.NearbyMessageSenderRemote), nullable: true, minVersion: 0 },
        { name: 'file_payload_handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.secure_channel.mojom.NearbyFilePayloadHandlerRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectorPtr = ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectorRemote;
ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectorRequest = ash.secure_channel.secure_channel.mojom.mojom.NearbyConnectorPendingReceiver;

