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

// Interface: NearbyConnectionStateListener
ash.secure_channel.mojom.NearbyConnectionStateListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.mojom.NearbyConnectionStateListenerRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.NearbyConnectionStateListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.mojom.NearbyConnectionStateListenerPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.mojom.NearbyConnectionStateListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.mojom.NearbyConnectionStateListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNearbyConnectionStateChanged(step, result) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.mojom.NearbyConnectionStateListener_OnNearbyConnectionStateChanged_ParamsSpec.$,
      null,
      [step, result]);
  }

};

ash.secure_channel.mojom.NearbyConnectionStateListener.getRemote = function() {
  let remote = new ash.secure_channel.mojom.NearbyConnectionStateListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.NearbyConnectionStateListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnNearbyConnectionStateChanged
ash.secure_channel.mojom.NearbyConnectionStateListener_OnNearbyConnectionStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.NearbyConnectionStateListener.OnNearbyConnectionStateChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'step', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.mojom.NearbyConnectionStateListenerPtr = ash.secure_channel.mojom.NearbyConnectionStateListenerRemote;
ash.secure_channel.mojom.NearbyConnectionStateListenerRequest = ash.secure_channel.mojom.NearbyConnectionStateListenerPendingReceiver;


// Interface: NearbyMessageSender
ash.secure_channel.mojom.NearbyMessageSenderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.mojom.NearbyMessageSenderRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.NearbyMessageSender';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.mojom.NearbyMessageSenderPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.mojom.NearbyMessageSenderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.mojom.NearbyMessageSenderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.mojom.NearbyMessageSender_SendMessage_ParamsSpec.$,
      ash.secure_channel.mojom.NearbyMessageSender_SendMessage_ResponseParamsSpec.$,
      [message]);
  }

};

ash.secure_channel.mojom.NearbyMessageSender.getRemote = function() {
  let remote = new ash.secure_channel.mojom.NearbyMessageSenderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.NearbyMessageSender',
    'context');
  return remote.$;
};

// ParamsSpec for SendMessage
ash.secure_channel.mojom.NearbyMessageSender_SendMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.NearbyMessageSender.SendMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.secure_channel.mojom.NearbyMessageSender_SendMessage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.NearbyMessageSender.SendMessage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.mojom.NearbyMessageSenderPtr = ash.secure_channel.mojom.NearbyMessageSenderRemote;
ash.secure_channel.mojom.NearbyMessageSenderRequest = ash.secure_channel.mojom.NearbyMessageSenderPendingReceiver;


// Interface: NearbyMessageReceiver
ash.secure_channel.mojom.NearbyMessageReceiverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.mojom.NearbyMessageReceiverRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.NearbyMessageReceiver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.mojom.NearbyMessageReceiverPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.mojom.NearbyMessageReceiverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.mojom.NearbyMessageReceiverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMessageReceived(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.mojom.NearbyMessageReceiver_OnMessageReceived_ParamsSpec.$,
      null,
      [message]);
  }

};

ash.secure_channel.mojom.NearbyMessageReceiver.getRemote = function() {
  let remote = new ash.secure_channel.mojom.NearbyMessageReceiverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.NearbyMessageReceiver',
    'context');
  return remote.$;
};

// ParamsSpec for OnMessageReceived
ash.secure_channel.mojom.NearbyMessageReceiver_OnMessageReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.NearbyMessageReceiver.OnMessageReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.mojom.NearbyMessageReceiverPtr = ash.secure_channel.mojom.NearbyMessageReceiverRemote;
ash.secure_channel.mojom.NearbyMessageReceiverRequest = ash.secure_channel.mojom.NearbyMessageReceiverPendingReceiver;


// Interface: NearbyFilePayloadHandler
ash.secure_channel.mojom.NearbyFilePayloadHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.mojom.NearbyFilePayloadHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.NearbyFilePayloadHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.mojom.NearbyFilePayloadHandlerPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.mojom.NearbyFilePayloadHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.mojom.NearbyFilePayloadHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerPayloadFile(payload_id, payload_files, listener) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.mojom.NearbyFilePayloadHandler_RegisterPayloadFile_ParamsSpec.$,
      ash.secure_channel.mojom.NearbyFilePayloadHandler_RegisterPayloadFile_ResponseParamsSpec.$,
      [payload_id, payload_files, listener]);
  }

};

ash.secure_channel.mojom.NearbyFilePayloadHandler.getRemote = function() {
  let remote = new ash.secure_channel.mojom.NearbyFilePayloadHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.NearbyFilePayloadHandler',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterPayloadFile
ash.secure_channel.mojom.NearbyFilePayloadHandler_RegisterPayloadFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.NearbyFilePayloadHandler.RegisterPayloadFile_Params',
      packedSize: 32,
      fields: [
        { name: 'payload_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'payload_files', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'listener', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.secure_channel.mojom.NearbyFilePayloadHandler_RegisterPayloadFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.NearbyFilePayloadHandler.RegisterPayloadFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.mojom.NearbyFilePayloadHandlerPtr = ash.secure_channel.mojom.NearbyFilePayloadHandlerRemote;
ash.secure_channel.mojom.NearbyFilePayloadHandlerRequest = ash.secure_channel.mojom.NearbyFilePayloadHandlerPendingReceiver;


// Interface: NearbyConnector
ash.secure_channel.mojom.NearbyConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.mojom.NearbyConnectorRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.NearbyConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.mojom.NearbyConnectorPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.mojom.NearbyConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.mojom.NearbyConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(bluetooth_public_address, eid, message_receiver, nearby_connection_state_listener) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.mojom.NearbyConnector_Connect_ParamsSpec.$,
      ash.secure_channel.mojom.NearbyConnector_Connect_ResponseParamsSpec.$,
      [bluetooth_public_address, eid, message_receiver, nearby_connection_state_listener]);
  }

};

ash.secure_channel.mojom.NearbyConnector.getRemote = function() {
  let remote = new ash.secure_channel.mojom.NearbyConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.NearbyConnector',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
ash.secure_channel.mojom.NearbyConnector_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.NearbyConnector.Connect_Params',
      packedSize: 40,
      fields: [
        { name: 'bluetooth_public_address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'eid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'message_receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'nearby_connection_state_listener', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.secure_channel.mojom.NearbyConnector_Connect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.secure_channel.mojom.NearbyConnector.Connect_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'message_sender', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'file_payload_handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.secure_channel.mojom.NearbyConnectorPtr = ash.secure_channel.mojom.NearbyConnectorRemote;
ash.secure_channel.mojom.NearbyConnectorRequest = ash.secure_channel.mojom.NearbyConnectorPendingReceiver;

