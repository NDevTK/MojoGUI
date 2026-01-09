// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/presentation/presentation.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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

// Struct: PresentationInfo
blink.mojom.PresentationInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationInfo',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PresentationError
blink.mojom.PresentationErrorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationError',
      packedSize: 24,
      fields: [
        { name: 'error_type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PresentationErrorTypeSpec, nullable: false },
        { name: 'message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PresentationConnectionResult
blink.mojom.PresentationConnectionResultSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationConnectionResult',
      packedSize: 24,
      fields: [
        { name: 'presentation_info', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PresentationInfoSpec, nullable: false },
        { name: 'connection_remote', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'connection_receiver', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PresentationConnection
blink.mojom.PresentationConnection = {};

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
      [message]);
  }

  didChangeState(state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PresentationConnection_DidChangeState_ParamsSpec,
      null,
      [state]);
  }

  didClose(reason) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PresentationConnection_DidClose_ParamsSpec,
      null,
      [reason]);
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

// ParamsSpec for OnMessage
blink.mojom.PresentationConnection_OnMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationConnection.OnMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PresentationConnectionMessageSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidChangeState
blink.mojom.PresentationConnection_DidChangeState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationConnection.DidChangeState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PresentationConnectionStateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidClose
blink.mojom.PresentationConnection_DidClose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationConnection.DidClose_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PresentationConnectionCloseReasonSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.PresentationConnectionPtr = blink.mojom.PresentationConnectionRemote;
blink.mojom.PresentationConnectionRequest = blink.mojom.PresentationConnectionPendingReceiver;


// Interface: PresentationService
blink.mojom.PresentationService = {};

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
      [controller]);
  }

  setReceiver(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PresentationService_SetReceiver_ParamsSpec,
      null,
      [receiver]);
  }

  setDefaultPresentationUrls(presentation_urls) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PresentationService_SetDefaultPresentationUrls_ParamsSpec,
      null,
      [presentation_urls]);
  }

  listenForScreenAvailability(availability_url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.PresentationService_ListenForScreenAvailability_ParamsSpec,
      null,
      [availability_url]);
  }

  stopListeningForScreenAvailability(availability_url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.PresentationService_StopListeningForScreenAvailability_ParamsSpec,
      null,
      [availability_url]);
  }

  startPresentation(presentation_urls) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.PresentationService_StartPresentation_ParamsSpec,
      blink.mojom.PresentationService_StartPresentation_ResponseParamsSpec,
      [presentation_urls]);
  }

  reconnectPresentation(presentation_urls, presentation_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.PresentationService_ReconnectPresentation_ParamsSpec,
      blink.mojom.PresentationService_ReconnectPresentation_ResponseParamsSpec,
      [presentation_urls, presentation_id]);
  }

  closeConnection(presentation_url, presentation_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.PresentationService_CloseConnection_ParamsSpec,
      null,
      [presentation_url, presentation_id]);
  }

  terminate(presentation_url, presentation_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.PresentationService_Terminate_ParamsSpec,
      null,
      [presentation_url, presentation_id]);
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

// ParamsSpec for SetController
blink.mojom.PresentationService_SetController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationService.SetController_Params',
      packedSize: 16,
      fields: [
        { name: 'controller', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetReceiver
blink.mojom.PresentationService_SetReceiver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationService.SetReceiver_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetDefaultPresentationUrls
blink.mojom.PresentationService_SetDefaultPresentationUrls_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationService.SetDefaultPresentationUrls_Params',
      packedSize: 16,
      fields: [
        { name: 'presentation_urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ListenForScreenAvailability
blink.mojom.PresentationService_ListenForScreenAvailability_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationService.ListenForScreenAvailability_Params',
      packedSize: 16,
      fields: [
        { name: 'availability_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopListeningForScreenAvailability
blink.mojom.PresentationService_StopListeningForScreenAvailability_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationService.StopListeningForScreenAvailability_Params',
      packedSize: 16,
      fields: [
        { name: 'availability_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartPresentation
blink.mojom.PresentationService_StartPresentation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationService.StartPresentation_Params',
      packedSize: 16,
      fields: [
        { name: 'presentation_urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.PresentationService_StartPresentation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationService.StartPresentation_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PresentationConnectionResultSpec, nullable: true },
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.PresentationErrorSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReconnectPresentation
blink.mojom.PresentationService_ReconnectPresentation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationService.ReconnectPresentation_Params',
      packedSize: 24,
      fields: [
        { name: 'presentation_urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'presentation_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.PresentationService_ReconnectPresentation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationService.ReconnectPresentation_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PresentationConnectionResultSpec, nullable: true },
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.PresentationErrorSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloseConnection
blink.mojom.PresentationService_CloseConnection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationService.CloseConnection_Params',
      packedSize: 24,
      fields: [
        { name: 'presentation_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'presentation_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Terminate
blink.mojom.PresentationService_Terminate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationService.Terminate_Params',
      packedSize: 24,
      fields: [
        { name: 'presentation_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'presentation_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.PresentationServicePtr = blink.mojom.PresentationServiceRemote;
blink.mojom.PresentationServiceRequest = blink.mojom.PresentationServicePendingReceiver;


// Interface: PresentationController
blink.mojom.PresentationController = {};

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
      [url, availability]);
  }

  onDefaultPresentationStarted(result) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PresentationController_OnDefaultPresentationStarted_ParamsSpec,
      null,
      [result]);
  }

  onConnectionStateChanged(presentation_info, newState) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PresentationController_OnConnectionStateChanged_ParamsSpec,
      null,
      [presentation_info, newState]);
  }

  onConnectionClosed(presentation_info, reason, message) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.PresentationController_OnConnectionClosed_ParamsSpec,
      null,
      [presentation_info, reason, message]);
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

// ParamsSpec for OnScreenAvailabilityUpdated
blink.mojom.PresentationController_OnScreenAvailabilityUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationController.OnScreenAvailabilityUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'availability', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ScreenAvailabilitySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDefaultPresentationStarted
blink.mojom.PresentationController_OnDefaultPresentationStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationController.OnDefaultPresentationStarted_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PresentationConnectionResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnConnectionStateChanged
blink.mojom.PresentationController_OnConnectionStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationController.OnConnectionStateChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'presentation_info', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PresentationInfoSpec, nullable: false },
        { name: 'newState', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.PresentationConnectionStateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnConnectionClosed
blink.mojom.PresentationController_OnConnectionClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationController.OnConnectionClosed_Params',
      packedSize: 32,
      fields: [
        { name: 'presentation_info', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PresentationInfoSpec, nullable: false },
        { name: 'reason', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.PresentationConnectionCloseReasonSpec, nullable: false },
        { name: 'message', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.PresentationControllerPtr = blink.mojom.PresentationControllerRemote;
blink.mojom.PresentationControllerRequest = blink.mojom.PresentationControllerPendingReceiver;


// Interface: PresentationReceiver
blink.mojom.PresentationReceiver = {};

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
      [result]);
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

// ParamsSpec for OnReceiverConnectionAvailable
blink.mojom.PresentationReceiver_OnReceiverConnectionAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PresentationReceiver.OnReceiverConnectionAvailable_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PresentationConnectionResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.PresentationReceiverPtr = blink.mojom.PresentationReceiverRemote;
blink.mojom.PresentationReceiverRequest = blink.mojom.PresentationReceiverPendingReceiver;

