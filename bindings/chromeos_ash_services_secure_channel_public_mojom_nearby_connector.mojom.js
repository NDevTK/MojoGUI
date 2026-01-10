// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/secure_channel/public/mojom/nearby_connector.mojom
// Module: ash.secure_channel.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.secure_channel = ash.secure_channel || {};
ash.secure_channel.mojom = ash.secure_channel.mojom || {};

ash.secure_channel.mojom.NearbyConnectionStepSpec = { $: mojo.internal.Enum() };
ash.secure_channel.mojom.NearbyConnectionStepResultSpec = { $: mojo.internal.Enum() };
ash.secure_channel.mojom.NearbyConnectionStateListener = {};
ash.secure_channel.mojom.NearbyConnectionStateListener.$interfaceName = 'ash.secure_channel.mojom.NearbyConnectionStateListener';
ash.secure_channel.mojom.NearbyConnectionStateListener_OnNearbyConnectionStateChanged_ParamsSpec = { $: {} };
ash.secure_channel.mojom.NearbyMessageSender = {};
ash.secure_channel.mojom.NearbyMessageSender.$interfaceName = 'ash.secure_channel.mojom.NearbyMessageSender';
ash.secure_channel.mojom.NearbyMessageSender_SendMessage_ParamsSpec = { $: {} };
ash.secure_channel.mojom.NearbyMessageSender_SendMessage_ResponseParamsSpec = { $: {} };
ash.secure_channel.mojom.NearbyMessageReceiver = {};
ash.secure_channel.mojom.NearbyMessageReceiver.$interfaceName = 'ash.secure_channel.mojom.NearbyMessageReceiver';
ash.secure_channel.mojom.NearbyMessageReceiver_OnMessageReceived_ParamsSpec = { $: {} };
ash.secure_channel.mojom.NearbyFilePayloadHandler = {};
ash.secure_channel.mojom.NearbyFilePayloadHandler.$interfaceName = 'ash.secure_channel.mojom.NearbyFilePayloadHandler';
ash.secure_channel.mojom.NearbyFilePayloadHandler_RegisterPayloadFile_ParamsSpec = { $: {} };
ash.secure_channel.mojom.NearbyFilePayloadHandler_RegisterPayloadFile_ResponseParamsSpec = { $: {} };
ash.secure_channel.mojom.NearbyConnector = {};
ash.secure_channel.mojom.NearbyConnector.$interfaceName = 'ash.secure_channel.mojom.NearbyConnector';
ash.secure_channel.mojom.NearbyConnector_Connect_ParamsSpec = { $: {} };
ash.secure_channel.mojom.NearbyConnector_Connect_ResponseParamsSpec = { $: {} };

ash.secure_channel.mojom.kServiceId = "secure_channel";

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
mojo.internal.Struct(
    ash.secure_channel.mojom.NearbyConnectionStateListener_OnNearbyConnectionStateChanged_ParamsSpec, 'ash.secure_channel.mojom.NearbyConnectionStateListener_OnNearbyConnectionStateChanged_Params', [
      mojo.internal.StructField('step', 0, 0, ash.secure_channel.mojom.NearbyConnectionStepSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, ash.secure_channel.mojom.NearbyConnectionStepResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      ash.secure_channel.mojom.NearbyConnectionStateListener_OnNearbyConnectionStateChanged_ParamsSpec,
      null,
      [step, result],
      false);
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

ash.secure_channel.mojom.NearbyConnectionStateListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.secure_channel.mojom.NearbyConnectionStateListener_OnNearbyConnectionStateChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onNearbyConnectionStateChanged');
          const result = this.impl.onNearbyConnectionStateChanged(params.step, params.result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.secure_channel.mojom.NearbyConnectionStateListenerReceiver = ash.secure_channel.mojom.NearbyConnectionStateListenerReceiver;

ash.secure_channel.mojom.NearbyConnectionStateListenerPtr = ash.secure_channel.mojom.NearbyConnectionStateListenerRemote;
ash.secure_channel.mojom.NearbyConnectionStateListenerRequest = ash.secure_channel.mojom.NearbyConnectionStateListenerPendingReceiver;


// Interface: NearbyMessageSender
mojo.internal.Struct(
    ash.secure_channel.mojom.NearbyMessageSender_SendMessage_ParamsSpec, 'ash.secure_channel.mojom.NearbyMessageSender_SendMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.NearbyMessageSender_SendMessage_ResponseParamsSpec, 'ash.secure_channel.mojom.NearbyMessageSender_SendMessage_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      ash.secure_channel.mojom.NearbyMessageSender_SendMessage_ParamsSpec,
      ash.secure_channel.mojom.NearbyMessageSender_SendMessage_ResponseParamsSpec,
      [message],
      false);
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

ash.secure_channel.mojom.NearbyMessageSenderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.secure_channel.mojom.NearbyMessageSender_SendMessage_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.sendMessage');
          const result = this.impl.sendMessage(params.message);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.secure_channel.mojom.NearbyMessageSender_SendMessage_ResponseParamsSpec);
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

ash.secure_channel.mojom.NearbyMessageSenderReceiver = ash.secure_channel.mojom.NearbyMessageSenderReceiver;

ash.secure_channel.mojom.NearbyMessageSenderPtr = ash.secure_channel.mojom.NearbyMessageSenderRemote;
ash.secure_channel.mojom.NearbyMessageSenderRequest = ash.secure_channel.mojom.NearbyMessageSenderPendingReceiver;


// Interface: NearbyMessageReceiver
mojo.internal.Struct(
    ash.secure_channel.mojom.NearbyMessageReceiver_OnMessageReceived_ParamsSpec, 'ash.secure_channel.mojom.NearbyMessageReceiver_OnMessageReceived_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      ash.secure_channel.mojom.NearbyMessageReceiver_OnMessageReceived_ParamsSpec,
      null,
      [message],
      false);
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

ash.secure_channel.mojom.NearbyMessageReceiverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.secure_channel.mojom.NearbyMessageReceiver_OnMessageReceived_ParamsSpec.$, 0);
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

ash.secure_channel.mojom.NearbyMessageReceiverReceiver = ash.secure_channel.mojom.NearbyMessageReceiverReceiver;

ash.secure_channel.mojom.NearbyMessageReceiverPtr = ash.secure_channel.mojom.NearbyMessageReceiverRemote;
ash.secure_channel.mojom.NearbyMessageReceiverRequest = ash.secure_channel.mojom.NearbyMessageReceiverPendingReceiver;


// Interface: NearbyFilePayloadHandler
mojo.internal.Struct(
    ash.secure_channel.mojom.NearbyFilePayloadHandler_RegisterPayloadFile_ParamsSpec, 'ash.secure_channel.mojom.NearbyFilePayloadHandler_RegisterPayloadFile_Params', [
      mojo.internal.StructField('payload_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('payload_files', 8, 0, ash.secure_channel.mojom.PayloadFilesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('listener', 16, 0, mojo.internal.InterfaceProxy(ash.secure_channel.mojom.FilePayloadListenerRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.NearbyFilePayloadHandler_RegisterPayloadFile_ResponseParamsSpec, 'ash.secure_channel.mojom.NearbyFilePayloadHandler_RegisterPayloadFile_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      ash.secure_channel.mojom.NearbyFilePayloadHandler_RegisterPayloadFile_ParamsSpec,
      ash.secure_channel.mojom.NearbyFilePayloadHandler_RegisterPayloadFile_ResponseParamsSpec,
      [payload_id, payload_files, listener],
      false);
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

ash.secure_channel.mojom.NearbyFilePayloadHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.secure_channel.mojom.NearbyFilePayloadHandler_RegisterPayloadFile_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.registerPayloadFile');
          const result = this.impl.registerPayloadFile(params.payload_id, params.payload_files, params.listener);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.secure_channel.mojom.NearbyFilePayloadHandler_RegisterPayloadFile_ResponseParamsSpec);
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

ash.secure_channel.mojom.NearbyFilePayloadHandlerReceiver = ash.secure_channel.mojom.NearbyFilePayloadHandlerReceiver;

ash.secure_channel.mojom.NearbyFilePayloadHandlerPtr = ash.secure_channel.mojom.NearbyFilePayloadHandlerRemote;
ash.secure_channel.mojom.NearbyFilePayloadHandlerRequest = ash.secure_channel.mojom.NearbyFilePayloadHandlerPendingReceiver;


// Interface: NearbyConnector
mojo.internal.Struct(
    ash.secure_channel.mojom.NearbyConnector_Connect_ParamsSpec, 'ash.secure_channel.mojom.NearbyConnector_Connect_Params', [
      mojo.internal.StructField('bluetooth_public_address', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('eid', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('message_receiver', 16, 0, mojo.internal.InterfaceProxy(ash.secure_channel.mojom.NearbyMessageReceiverSpec), null, false, 0, undefined),
      mojo.internal.StructField('nearby_connection_state_listener', 24, 0, mojo.internal.InterfaceProxy(ash.secure_channel.mojom.NearbyConnectionStateListenerSpec), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.NearbyConnector_Connect_ResponseParamsSpec, 'ash.secure_channel.mojom.NearbyConnector_Connect_ResponseParams', [
      mojo.internal.StructField('message_sender', 0, 0, mojo.internal.InterfaceProxy(ash.secure_channel.mojom.NearbyMessageSenderSpec), null, true, 0, undefined),
      mojo.internal.StructField('file_payload_handler', 8, 0, mojo.internal.InterfaceProxy(ash.secure_channel.mojom.NearbyFilePayloadHandlerSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

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
      ash.secure_channel.mojom.NearbyConnector_Connect_ParamsSpec,
      ash.secure_channel.mojom.NearbyConnector_Connect_ResponseParamsSpec,
      [bluetooth_public_address, eid, message_receiver, nearby_connection_state_listener],
      false);
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

ash.secure_channel.mojom.NearbyConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.secure_channel.mojom.NearbyConnector_Connect_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.bluetooth_public_address, params.eid, params.message_receiver, params.nearby_connection_state_listener);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.secure_channel.mojom.NearbyConnector_Connect_ResponseParamsSpec);
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

ash.secure_channel.mojom.NearbyConnectorReceiver = ash.secure_channel.mojom.NearbyConnectorReceiver;

ash.secure_channel.mojom.NearbyConnectorPtr = ash.secure_channel.mojom.NearbyConnectorRemote;
ash.secure_channel.mojom.NearbyConnectorRequest = ash.secure_channel.mojom.NearbyConnectorPendingReceiver;

