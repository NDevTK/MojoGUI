// Auto-generated MojoJS binding
// Source: chromium_src/media/midi/midi_service.mojom
// Module: midi.mojom

'use strict';

// Module namespace
var midi = midi || {};
midi.mojom = midi.mojom || {};


// Enum: Result
midi.mojom.Result = {
  NOT_INITIALIZED: 0,
  OK: 1,
  NOT_SUPPORTED: 2,
  INITIALIZATION_ERROR: 3,
};

// Enum: PortState
midi.mojom.PortState = {
  DISCONNECTED: 0,
  CONNECTED: 1,
  OPENED: 2,
};

// Struct: PortInfo
midi.mojom.PortInfo = class {
  constructor(values = {}) {
    this.state = values.state !== undefined ? values.state : "";
  }
};

// Interface: MidiSessionClient
midi.mojom.MidiSessionClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'midi.mojom.MidiSessionClient';
  }

  addInputPort(info) {
    // Method: AddInputPort
    // Call: AddInputPort(info)
  }

  addOutputPort(info) {
    // Method: AddOutputPort
    // Call: AddOutputPort(info)
  }

  setInputPortState(port, state) {
    // Method: SetInputPortState
    // Call: SetInputPortState(port, state)
  }

  setOutputPortState(port, state) {
    // Method: SetOutputPortState
    // Call: SetOutputPortState(port, state)
  }

  sessionStarted(result) {
    // Method: SessionStarted
    // Call: SessionStarted(result)
  }

  acknowledgeSentData(bytes) {
    // Method: AcknowledgeSentData
    // Call: AcknowledgeSentData(bytes)
  }

  dataReceived(port, data, timestamp) {
    // Method: DataReceived
    // Call: DataReceived(port, data, timestamp)
  }

};

midi.mojom.MidiSessionClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MidiSessionProvider
midi.mojom.MidiSessionProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'midi.mojom.MidiSessionProvider';
  }

  startSession(receiver, client) {
    // Method: StartSession
    // Call: StartSession(receiver, client)
  }

};

midi.mojom.MidiSessionProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MidiSession
midi.mojom.MidiSessionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'midi.mojom.MidiSession';
  }

  sendData(port, data, timestamp) {
    // Method: SendData
    // Call: SendData(port, data, timestamp)
  }

};

midi.mojom.MidiSessionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
