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
blink.mojom.PresentationInfo = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : "";
  }
};

// Struct: PresentationError
blink.mojom.PresentationError = class {
  constructor(values = {}) {
    this.message = values.message !== undefined ? values.message : "";
  }
};

// Struct: PresentationConnectionResult
blink.mojom.PresentationConnectionResult = class {
  constructor(values = {}) {
    this.connection_receiver = values.connection_receiver !== undefined ? values.connection_receiver : null;
  }
};

// Interface: PresentationConnection
blink.mojom.PresentationConnectionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PresentationConnection';
  }

  onMessage(message) {
    // Method: OnMessage
    // Call: OnMessage(message)
  }

  didChangeState(state) {
    // Method: DidChangeState
    // Call: DidChangeState(state)
  }

  didClose(reason) {
    // Method: DidClose
    // Call: DidClose(reason)
  }

};

blink.mojom.PresentationConnectionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PresentationService
blink.mojom.PresentationServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PresentationService';
  }

  setController(controller) {
    // Method: SetController
    // Call: SetController(controller)
  }

  setReceiver(receiver) {
    // Method: SetReceiver
    // Call: SetReceiver(receiver)
  }

  setDefaultPresentationUrls(presentation_urls) {
    // Method: SetDefaultPresentationUrls
    // Call: SetDefaultPresentationUrls(presentation_urls)
  }

  listenForScreenAvailability(availability_url) {
    // Method: ListenForScreenAvailability
    // Call: ListenForScreenAvailability(availability_url)
  }

  stopListeningForScreenAvailability(availability_url) {
    // Method: StopListeningForScreenAvailability
    // Call: StopListeningForScreenAvailability(availability_url)
  }

  startPresentation(presentation_urls) {
    // Method: StartPresentation
    return new Promise((resolve) => {
      // Call: StartPresentation(presentation_urls)
      resolve({});
    });
  }

  reconnectPresentation(presentation_urls, presentation_id) {
    // Method: ReconnectPresentation
    return new Promise((resolve) => {
      // Call: ReconnectPresentation(presentation_urls, presentation_id)
      resolve({});
    });
  }

  closeConnection(presentation_url, presentation_id) {
    // Method: CloseConnection
    // Call: CloseConnection(presentation_url, presentation_id)
  }

  terminate(presentation_url, presentation_id) {
    // Method: Terminate
    // Call: Terminate(presentation_url, presentation_id)
  }

};

blink.mojom.PresentationServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PresentationController
blink.mojom.PresentationControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PresentationController';
  }

  onScreenAvailabilityUpdated(url, availability) {
    // Method: OnScreenAvailabilityUpdated
    // Call: OnScreenAvailabilityUpdated(url, availability)
  }

  onDefaultPresentationStarted(result) {
    // Method: OnDefaultPresentationStarted
    // Call: OnDefaultPresentationStarted(result)
  }

  onConnectionStateChanged(presentation_info, newState) {
    // Method: OnConnectionStateChanged
    // Call: OnConnectionStateChanged(presentation_info, newState)
  }

  onConnectionClosed(presentation_info, reason, message) {
    // Method: OnConnectionClosed
    // Call: OnConnectionClosed(presentation_info, reason, message)
  }

};

blink.mojom.PresentationControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PresentationReceiver
blink.mojom.PresentationReceiverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PresentationReceiver';
  }

  onReceiverConnectionAvailable(result) {
    // Method: OnReceiverConnectionAvailable
    // Call: OnReceiverConnectionAvailable(result)
  }

};

blink.mojom.PresentationReceiverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
