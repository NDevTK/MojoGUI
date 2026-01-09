// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/soda.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: OptionalBool
chromeos.machine_learning.mojom.OptionalBool = {
  kFalse: 0,
  kTrue: 1,
};

// Enum: SodaRecognitionMode
chromeos.machine_learning.mojom.SodaRecognitionMode = {
  kIme: 0,
};

// Enum: SpeakerDiarizationMode
chromeos.machine_learning.mojom.SpeakerDiarizationMode = {
  kDiarizationUnspecified: 0,
  kSpeakerChangeDetection: 1,
  kSpeakerLabelDetection: 2,
};

// Enum: EndpointerType
chromeos.machine_learning.mojom.EndpointerType = {
  START_OF_SPEECH: 0,
  END_OF_SPEECH: 1,
  END_OF_AUDIO: 2,
  END_OF_UTTERANCE: 3,
};

// Enum: EndpointReason
chromeos.machine_learning.mojom.EndpointReason = {
  ENDPOINT_UNKNOWN: 0,
  ENDPOINT_END_OF_SPEECH: 1,
  ENDPOINT_END_OF_UTTERANCE: 2,
  ENDPOINT_END_OF_AUDIO: 3,
};

// Enum: AsrSwitchResult
chromeos.machine_learning.mojom.AsrSwitchResult = {
  SWITCH_SUCCEEDED: 0,
  SWITCH_FAILED: 1,
  SWITCH_SKIPPED_NO_LP: 2,
};

// Interface: SodaClient
chromeos.machine_learning.mojom.SodaClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.mojom.SodaClientRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.SodaClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.mojom.SodaClientPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.mojom.SodaClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.mojom.SodaClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.machine_learning.mojom.SodaClient.getRemote = function() {
  let remote = new chromeos.machine_learning.mojom.SodaClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.SodaClient',
    'context');
  return remote.$;
};

// Legacy compatibility
chromeos.machine_learning.mojom.SodaClientPtr = chromeos.machine_learning.mojom.SodaClientRemote;
chromeos.machine_learning.mojom.SodaClientRequest = chromeos.machine_learning.mojom.SodaClientPendingReceiver;


// Interface: SodaRecognizer
chromeos.machine_learning.mojom.SodaRecognizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.mojom.SodaRecognizerRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.SodaRecognizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.mojom.SodaRecognizerPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.mojom.SodaRecognizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.mojom.SodaRecognizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.machine_learning.mojom.SodaRecognizer.getRemote = function() {
  let remote = new chromeos.machine_learning.mojom.SodaRecognizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.SodaRecognizer',
    'context');
  return remote.$;
};

// Legacy compatibility
chromeos.machine_learning.mojom.SodaRecognizerPtr = chromeos.machine_learning.mojom.SodaRecognizerRemote;
chromeos.machine_learning.mojom.SodaRecognizerRequest = chromeos.machine_learning.mojom.SodaRecognizerPendingReceiver;

