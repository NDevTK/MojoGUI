// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/presentation/presentation.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.ScreenAvailabilitySpec = { $: mojo.internal.Enum() };
blink.mojom.PresentationConnectionStateSpec = { $: mojo.internal.Enum() };
blink.mojom.PresentationConnectionCloseReasonSpec = { $: mojo.internal.Enum() };
blink.mojom.PresentationErrorTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.PresentationConnectionMessageSpec = { $: {} };
blink.mojom.PresentationInfoSpec = { $: {} };
blink.mojom.PresentationErrorSpec = { $: {} };
blink.mojom.PresentationConnectionResultSpec = { $: {} };
blink.mojom.PresentationConnection = {};
blink.mojom.PresentationConnection.$interfaceName = 'blink.mojom.PresentationConnection';
blink.mojom.PresentationConnection_OnMessage_ParamsSpec = { $: {} };
blink.mojom.PresentationConnection_DidChangeState_ParamsSpec = { $: {} };
blink.mojom.PresentationConnection_DidClose_ParamsSpec = { $: {} };
blink.mojom.PresentationService = {};
blink.mojom.PresentationService.$interfaceName = 'blink.mojom.PresentationService';
blink.mojom.PresentationService_SetController_ParamsSpec = { $: {} };
blink.mojom.PresentationService_SetReceiver_ParamsSpec = { $: {} };
blink.mojom.PresentationService_SetDefaultPresentationUrls_ParamsSpec = { $: {} };
blink.mojom.PresentationService_ListenForScreenAvailability_ParamsSpec = { $: {} };
blink.mojom.PresentationService_StopListeningForScreenAvailability_ParamsSpec = { $: {} };
blink.mojom.PresentationService_StartPresentation_ParamsSpec = { $: {} };
blink.mojom.PresentationService_StartPresentation_ResponseParamsSpec = { $: {} };
blink.mojom.PresentationService_ReconnectPresentation_ParamsSpec = { $: {} };
blink.mojom.PresentationService_ReconnectPresentation_ResponseParamsSpec = { $: {} };
blink.mojom.PresentationService_CloseConnection_ParamsSpec = { $: {} };
blink.mojom.PresentationService_Terminate_ParamsSpec = { $: {} };
blink.mojom.PresentationController = {};
blink.mojom.PresentationController.$interfaceName = 'blink.mojom.PresentationController';
blink.mojom.PresentationController_OnScreenAvailabilityUpdated_ParamsSpec = { $: {} };
blink.mojom.PresentationController_OnDefaultPresentationStarted_ParamsSpec = { $: {} };
blink.mojom.PresentationController_OnConnectionStateChanged_ParamsSpec = { $: {} };
blink.mojom.PresentationController_OnConnectionClosed_ParamsSpec = { $: {} };
blink.mojom.PresentationReceiver = {};
blink.mojom.PresentationReceiver.$interfaceName = 'blink.mojom.PresentationReceiver';
blink.mojom.PresentationReceiver_OnReceiverConnectionAvailable_ParamsSpec = { $: {} };

// Enum: ScreenAvailability
blink.mojom.ScreenAvailability = {
  UNKNOWN: 0,
  UNAVAILABLE: 1,
  SOURCE_NOT_SUPPORTED: 2,
  DISABLED: 3,
  AVAILABLE: 4,
};

// Enum: PresentationConnectionState
blink.mojom.PresentationConnectionState = {
  CONNECTING: 0,
  CONNECTED: 1,
  CLOSED: 2,
  TERMINATED: 3,
};

// Enum: PresentationConnectionCloseReason
blink.mojom.PresentationConnectionCloseReason = {
  CONNECTION_ERROR: 0,
  CLOSED: 1,
  WENT_AWAY: 2,
};

// Enum: PresentationErrorType
blink.mojom.PresentationErrorType = {
  NO_AVAILABLE_SCREENS: 0,
  PRESENTATION_REQUEST_CANCELLED: 1,
  NO_PRESENTATION_FOUND: 2,
  PREVIOUS_START_IN_PROGRESS: 3,
  UNKNOWN: 4,
};

// Union: PresentationConnectionMessage
mojo.internal.Union(
    blink.mojom.PresentationConnectionMessageSpec, 'blink.mojom.PresentationConnectionMessage', {
      'message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'data': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
    });

// Struct: PresentationInfo
mojo.internal.Struct(
    blink.mojom.PresentationInfoSpec, 'blink.mojom.PresentationInfo', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PresentationError
mojo.internal.Struct(
    blink.mojom.PresentationErrorSpec, 'blink.mojom.PresentationError', [
      mojo.internal.StructField('error_type', 0, 0, blink.mojom.PresentationErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PresentationConnectionResult
mojo.internal.Struct(
    blink.mojom.PresentationConnectionResultSpec, 'blink.mojom.PresentationConnectionResult', [
      mojo.internal.StructField('presentation_info', 0, 0, blink.mojom.PresentationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('connection_remote', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.PresentationConnectionSpec), null, false, 0, undefined),
      mojo.internal.StructField('connection_receiver', 16, 0, mojo.internal.InterfaceRequest(blink.mojom.PresentationConnectionSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PresentationConnection
mojo.internal.Struct(
    blink.mojom.PresentationConnection_OnMessage_ParamsSpec, 'blink.mojom.PresentationConnection_OnMessage_Params', [
      mojo.internal.StructField('message', 0, 0, blink.mojom.PresentationConnectionMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PresentationConnection_DidChangeState_ParamsSpec, 'blink.mojom.PresentationConnection_DidChangeState_Params', [
      mojo.internal.StructField('state', 0, 0, blink.mojom.PresentationConnectionStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PresentationConnection_DidClose_ParamsSpec, 'blink.mojom.PresentationConnection_DidClose_Params', [
      mojo.internal.StructField('reason', 0, 0, blink.mojom.PresentationConnectionCloseReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.PresentationConnectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PresentationConnectionRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PresentationConnection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PresentationConnectionPendingReceiver,
      handle);
    this.$ = new blink.mojom.PresentationConnectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PresentationConnectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PresentationConnection_OnMessage_ParamsSpec,
      null,
      [message],
      false);
  }

  didChangeState(state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PresentationConnection_DidChangeState_ParamsSpec,
      null,
      [state],
      false);
  }

  didClose(reason) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PresentationConnection_DidClose_ParamsSpec,
      null,
      [reason],
      false);
  }

};

blink.mojom.PresentationConnection.getRemote = function() {
  let remote = new blink.mojom.PresentationConnectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PresentationConnection',
    'context');
  return remote.$;
};

blink.mojom.PresentationConnectionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.PresentationConnection_OnMessage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMessage(params.message);
          break;
        }
        case 1: {
          const params = blink.mojom.PresentationConnection_DidChangeState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.didChangeState(params.state);
          break;
        }
        case 2: {
          const params = blink.mojom.PresentationConnection_DidClose_ParamsSpec.$.decode(message.payload);
          const result = this.impl.didClose(params.reason);
          break;
        }
      }
    }});
  }
};

blink.mojom.PresentationConnectionReceiver = blink.mojom.PresentationConnectionReceiver;

blink.mojom.PresentationConnectionPtr = blink.mojom.PresentationConnectionRemote;
blink.mojom.PresentationConnectionRequest = blink.mojom.PresentationConnectionPendingReceiver;


// Interface: PresentationService
mojo.internal.Struct(
    blink.mojom.PresentationService_SetController_ParamsSpec, 'blink.mojom.PresentationService_SetController_Params', [
      mojo.internal.StructField('controller', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.PresentationControllerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PresentationService_SetReceiver_ParamsSpec, 'blink.mojom.PresentationService_SetReceiver_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.PresentationReceiverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PresentationService_SetDefaultPresentationUrls_ParamsSpec, 'blink.mojom.PresentationService_SetDefaultPresentationUrls_Params', [
      mojo.internal.StructField('presentation_urls', 0, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PresentationService_ListenForScreenAvailability_ParamsSpec, 'blink.mojom.PresentationService_ListenForScreenAvailability_Params', [
      mojo.internal.StructField('availability_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PresentationService_StopListeningForScreenAvailability_ParamsSpec, 'blink.mojom.PresentationService_StopListeningForScreenAvailability_Params', [
      mojo.internal.StructField('availability_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PresentationService_StartPresentation_ParamsSpec, 'blink.mojom.PresentationService_StartPresentation_Params', [
      mojo.internal.StructField('presentation_urls', 0, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PresentationService_StartPresentation_ResponseParamsSpec, 'blink.mojom.PresentationService_StartPresentation_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.PresentationConnectionResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, blink.mojom.PresentationErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PresentationService_ReconnectPresentation_ParamsSpec, 'blink.mojom.PresentationService_ReconnectPresentation_Params', [
      mojo.internal.StructField('presentation_urls', 0, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('presentation_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PresentationService_ReconnectPresentation_ResponseParamsSpec, 'blink.mojom.PresentationService_ReconnectPresentation_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.PresentationConnectionResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, blink.mojom.PresentationErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PresentationService_CloseConnection_ParamsSpec, 'blink.mojom.PresentationService_CloseConnection_Params', [
      mojo.internal.StructField('presentation_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('presentation_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PresentationService_Terminate_ParamsSpec, 'blink.mojom.PresentationService_Terminate_Params', [
      mojo.internal.StructField('presentation_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('presentation_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.PresentationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PresentationServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PresentationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PresentationServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.PresentationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PresentationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setController(controller) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PresentationService_SetController_ParamsSpec,
      null,
      [controller],
      false);
  }

  setReceiver(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PresentationService_SetReceiver_ParamsSpec,
      null,
      [receiver],
      false);
  }

  setDefaultPresentationUrls(presentation_urls) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PresentationService_SetDefaultPresentationUrls_ParamsSpec,
      null,
      [presentation_urls],
      false);
  }

  listenForScreenAvailability(availability_url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.PresentationService_ListenForScreenAvailability_ParamsSpec,
      null,
      [availability_url],
      false);
  }

  stopListeningForScreenAvailability(availability_url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.PresentationService_StopListeningForScreenAvailability_ParamsSpec,
      null,
      [availability_url],
      false);
  }

  startPresentation(presentation_urls) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.PresentationService_StartPresentation_ParamsSpec,
      blink.mojom.PresentationService_StartPresentation_ResponseParamsSpec,
      [presentation_urls],
      false);
  }

  reconnectPresentation(presentation_urls, presentation_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.PresentationService_ReconnectPresentation_ParamsSpec,
      blink.mojom.PresentationService_ReconnectPresentation_ResponseParamsSpec,
      [presentation_urls, presentation_id],
      false);
  }

  closeConnection(presentation_url, presentation_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.PresentationService_CloseConnection_ParamsSpec,
      null,
      [presentation_url, presentation_id],
      false);
  }

  terminate(presentation_url, presentation_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.PresentationService_Terminate_ParamsSpec,
      null,
      [presentation_url, presentation_id],
      false);
  }

};

blink.mojom.PresentationService.getRemote = function() {
  let remote = new blink.mojom.PresentationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PresentationService',
    'context');
  return remote.$;
};

blink.mojom.PresentationServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.PresentationService_SetController_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setController(params.controller);
          break;
        }
        case 1: {
          const params = blink.mojom.PresentationService_SetReceiver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setReceiver(params.receiver);
          break;
        }
        case 2: {
          const params = blink.mojom.PresentationService_SetDefaultPresentationUrls_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setDefaultPresentationUrls(params.presentation_urls);
          break;
        }
        case 3: {
          const params = blink.mojom.PresentationService_ListenForScreenAvailability_ParamsSpec.$.decode(message.payload);
          const result = this.impl.listenForScreenAvailability(params.availability_url);
          break;
        }
        case 4: {
          const params = blink.mojom.PresentationService_StopListeningForScreenAvailability_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stopListeningForScreenAvailability(params.availability_url);
          break;
        }
        case 5: {
          const params = blink.mojom.PresentationService_StartPresentation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startPresentation(params.presentation_urls);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PresentationService_StartPresentation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = blink.mojom.PresentationService_ReconnectPresentation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reconnectPresentation(params.presentation_urls, params.presentation_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PresentationService_ReconnectPresentation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = blink.mojom.PresentationService_CloseConnection_ParamsSpec.$.decode(message.payload);
          const result = this.impl.closeConnection(params.presentation_url, params.presentation_id);
          break;
        }
        case 8: {
          const params = blink.mojom.PresentationService_Terminate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.terminate(params.presentation_url, params.presentation_id);
          break;
        }
      }
    }});
  }
};

blink.mojom.PresentationServiceReceiver = blink.mojom.PresentationServiceReceiver;

blink.mojom.PresentationServicePtr = blink.mojom.PresentationServiceRemote;
blink.mojom.PresentationServiceRequest = blink.mojom.PresentationServicePendingReceiver;


// Interface: PresentationController
mojo.internal.Struct(
    blink.mojom.PresentationController_OnScreenAvailabilityUpdated_ParamsSpec, 'blink.mojom.PresentationController_OnScreenAvailabilityUpdated_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('availability', 8, 0, blink.mojom.ScreenAvailabilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PresentationController_OnDefaultPresentationStarted_ParamsSpec, 'blink.mojom.PresentationController_OnDefaultPresentationStarted_Params', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.PresentationConnectionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PresentationController_OnConnectionStateChanged_ParamsSpec, 'blink.mojom.PresentationController_OnConnectionStateChanged_Params', [
      mojo.internal.StructField('presentation_info', 0, 0, blink.mojom.PresentationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('newState', 8, 0, blink.mojom.PresentationConnectionStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PresentationController_OnConnectionClosed_ParamsSpec, 'blink.mojom.PresentationController_OnConnectionClosed_Params', [
      mojo.internal.StructField('presentation_info', 0, 0, blink.mojom.PresentationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, blink.mojom.PresentationConnectionCloseReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

blink.mojom.PresentationControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PresentationControllerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PresentationController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PresentationControllerPendingReceiver,
      handle);
    this.$ = new blink.mojom.PresentationControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PresentationControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onScreenAvailabilityUpdated(url, availability) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PresentationController_OnScreenAvailabilityUpdated_ParamsSpec,
      null,
      [url, availability],
      false);
  }

  onDefaultPresentationStarted(result) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PresentationController_OnDefaultPresentationStarted_ParamsSpec,
      null,
      [result],
      false);
  }

  onConnectionStateChanged(presentation_info, newState) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PresentationController_OnConnectionStateChanged_ParamsSpec,
      null,
      [presentation_info, newState],
      false);
  }

  onConnectionClosed(presentation_info, reason, message) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.PresentationController_OnConnectionClosed_ParamsSpec,
      null,
      [presentation_info, reason, message],
      false);
  }

};

blink.mojom.PresentationController.getRemote = function() {
  let remote = new blink.mojom.PresentationControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PresentationController',
    'context');
  return remote.$;
};

blink.mojom.PresentationControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.PresentationController_OnScreenAvailabilityUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onScreenAvailabilityUpdated(params.url, params.availability);
          break;
        }
        case 1: {
          const params = blink.mojom.PresentationController_OnDefaultPresentationStarted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDefaultPresentationStarted(params.result);
          break;
        }
        case 2: {
          const params = blink.mojom.PresentationController_OnConnectionStateChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onConnectionStateChanged(params.presentation_info, params.newState);
          break;
        }
        case 3: {
          const params = blink.mojom.PresentationController_OnConnectionClosed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onConnectionClosed(params.presentation_info, params.reason, params.message);
          break;
        }
      }
    }});
  }
};

blink.mojom.PresentationControllerReceiver = blink.mojom.PresentationControllerReceiver;

blink.mojom.PresentationControllerPtr = blink.mojom.PresentationControllerRemote;
blink.mojom.PresentationControllerRequest = blink.mojom.PresentationControllerPendingReceiver;


// Interface: PresentationReceiver
mojo.internal.Struct(
    blink.mojom.PresentationReceiver_OnReceiverConnectionAvailable_ParamsSpec, 'blink.mojom.PresentationReceiver_OnReceiverConnectionAvailable_Params', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.PresentationConnectionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.PresentationReceiverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PresentationReceiverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PresentationReceiver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PresentationReceiverPendingReceiver,
      handle);
    this.$ = new blink.mojom.PresentationReceiverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PresentationReceiverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onReceiverConnectionAvailable(result) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PresentationReceiver_OnReceiverConnectionAvailable_ParamsSpec,
      null,
      [result],
      false);
  }

};

blink.mojom.PresentationReceiver.getRemote = function() {
  let remote = new blink.mojom.PresentationReceiverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PresentationReceiver',
    'context');
  return remote.$;
};

blink.mojom.PresentationReceiverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.PresentationReceiver_OnReceiverConnectionAvailable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onReceiverConnectionAvailable(params.result);
          break;
        }
      }
    }});
  }
};

blink.mojom.PresentationReceiverReceiver = blink.mojom.PresentationReceiverReceiver;

blink.mojom.PresentationReceiverPtr = blink.mojom.PresentationReceiverRemote;
blink.mojom.PresentationReceiverRequest = blink.mojom.PresentationReceiverPendingReceiver;

