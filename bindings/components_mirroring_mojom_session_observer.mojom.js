// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/session_observer.mojom
// Module: mirroring.mojom

'use strict';

// Module namespace
var mirroring = mirroring || {};
mirroring.mojom = mirroring.mojom || {};


// Enum: SessionError
mirroring.mojom.SessionError = {
  ANSWER_TIME_OUT: 0,
};

// Interface: SessionObserver
mirroring.mojom.SessionObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mirroring.mojom.SessionObserver';
  }

  onError(error) {
    // Method: OnError
    // Call: OnError(error)
  }

  didStart() {
    // Method: DidStart
    // Call: DidStart()
  }

  didStop() {
    // Method: DidStop
    // Call: DidStop()
  }

  logInfoMessage(message) {
    // Method: LogInfoMessage
    // Call: LogInfoMessage(message)
  }

  logErrorMessage(message) {
    // Method: LogErrorMessage
    // Call: LogErrorMessage(message)
  }

  onSourceChanged() {
    // Method: OnSourceChanged
    // Call: OnSourceChanged()
  }

  onRemotingStateChanged(is_remoting) {
    // Method: OnRemotingStateChanged
    // Call: OnRemotingStateChanged(is_remoting)
  }

};

mirroring.mojom.SessionObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
