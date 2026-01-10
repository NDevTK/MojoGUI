// Auto-generated MojoJS binding
// Source: chromium_src/media/midi/midi_service.mojom
// Module: midi.mojom

'use strict';

// Module namespace
var midi = midi || {};
midi.mojom = midi.mojom || {};


// Enum: Result
midi.mojom.mojom.Result = {
  NOT_INITIALIZED: 0,
  OK: 1,
  NOT_SUPPORTED: 2,
  INITIALIZATION_ERROR: 3,
};
midi.mojom.mojom.ResultSpec = { $: mojo.internal.Enum() };

// Enum: PortState
midi.mojom.mojom.PortState = {
  DISCONNECTED: 0,
  CONNECTED: 1,
  OPENED: 2,
};
midi.mojom.mojom.PortStateSpec = { $: mojo.internal.Enum() };

// Struct: PortInfo
midi.mojom.mojom.PortInfoSpec = {
  $: {
    structSpec: {
      name: 'midi.mojom.PortInfo',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'manufacturer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'version', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 32, packedBitOffset: 0, type: midi.mojom.PortStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: MidiSessionClient
midi.mojom.mojom.MidiSessionClient = {};

midi.mojom.mojom.MidiSessionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

midi.mojom.mojom.MidiSessionClientRemote = class {
  static get $interfaceName() {
    return 'midi.mojom.MidiSessionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      midi.mojom.mojom.MidiSessionClientPendingReceiver,
      handle);
    this.$ = new midi.mojom.mojom.MidiSessionClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

midi.mojom.mojom.MidiSessionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addInputPort(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      midi.mojom.mojom.MidiSessionClient_AddInputPort_ParamsSpec,
      null,
      [info]);
  }

  addOutputPort(info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      midi.mojom.mojom.MidiSessionClient_AddOutputPort_ParamsSpec,
      null,
      [info]);
  }

  setInputPortState(port, state) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      midi.mojom.mojom.MidiSessionClient_SetInputPortState_ParamsSpec,
      null,
      [port, state]);
  }

  setOutputPortState(port, state) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      midi.mojom.mojom.MidiSessionClient_SetOutputPortState_ParamsSpec,
      null,
      [port, state]);
  }

  sessionStarted(result) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      midi.mojom.mojom.MidiSessionClient_SessionStarted_ParamsSpec,
      null,
      [result]);
  }

  acknowledgeSentData(bytes) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      midi.mojom.mojom.MidiSessionClient_AcknowledgeSentData_ParamsSpec,
      null,
      [bytes]);
  }

  dataReceived(port, data, timestamp) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      midi.mojom.mojom.MidiSessionClient_DataReceived_ParamsSpec,
      null,
      [port, data, timestamp]);
  }

};

midi.mojom.mojom.MidiSessionClient.getRemote = function() {
  let remote = new midi.mojom.mojom.MidiSessionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'midi.mojom.MidiSessionClient',
    'context');
  return remote.$;
};

// ParamsSpec for AddInputPort
midi.mojom.mojom.MidiSessionClient_AddInputPort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'midi.mojom.MidiSessionClient.AddInputPort_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: midi.mojom.PortInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddOutputPort
midi.mojom.mojom.MidiSessionClient_AddOutputPort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'midi.mojom.MidiSessionClient.AddOutputPort_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: midi.mojom.PortInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetInputPortState
midi.mojom.mojom.MidiSessionClient_SetInputPortState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'midi.mojom.MidiSessionClient.SetInputPortState_Params',
      packedSize: 16,
      fields: [
        { name: 'port', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 4, packedBitOffset: 0, type: midi.mojom.PortStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetOutputPortState
midi.mojom.mojom.MidiSessionClient_SetOutputPortState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'midi.mojom.MidiSessionClient.SetOutputPortState_Params',
      packedSize: 16,
      fields: [
        { name: 'port', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 4, packedBitOffset: 0, type: midi.mojom.PortStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SessionStarted
midi.mojom.mojom.MidiSessionClient_SessionStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'midi.mojom.MidiSessionClient.SessionStarted_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: midi.mojom.ResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AcknowledgeSentData
midi.mojom.mojom.MidiSessionClient_AcknowledgeSentData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'midi.mojom.MidiSessionClient.AcknowledgeSentData_Params',
      packedSize: 16,
      fields: [
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DataReceived
midi.mojom.mojom.MidiSessionClient_DataReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'midi.mojom.MidiSessionClient.DataReceived_Params',
      packedSize: 32,
      fields: [
        { name: 'port', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
midi.mojom.mojom.MidiSessionClientPtr = midi.mojom.mojom.MidiSessionClientRemote;
midi.mojom.mojom.MidiSessionClientRequest = midi.mojom.mojom.MidiSessionClientPendingReceiver;


// Interface: MidiSessionProvider
midi.mojom.mojom.MidiSessionProvider = {};

midi.mojom.mojom.MidiSessionProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

midi.mojom.mojom.MidiSessionProviderRemote = class {
  static get $interfaceName() {
    return 'midi.mojom.MidiSessionProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      midi.mojom.mojom.MidiSessionProviderPendingReceiver,
      handle);
    this.$ = new midi.mojom.mojom.MidiSessionProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

midi.mojom.mojom.MidiSessionProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startSession(receiver, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      midi.mojom.mojom.MidiSessionProvider_StartSession_ParamsSpec,
      null,
      [receiver, client]);
  }

};

midi.mojom.mojom.MidiSessionProvider.getRemote = function() {
  let remote = new midi.mojom.mojom.MidiSessionProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'midi.mojom.MidiSessionProvider',
    'context');
  return remote.$;
};

// ParamsSpec for StartSession
midi.mojom.mojom.MidiSessionProvider_StartSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'midi.mojom.MidiSessionProvider.StartSession_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(midi.mojom.MidiSessionRemote), nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(midi.mojom.MidiSessionClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
midi.mojom.mojom.MidiSessionProviderPtr = midi.mojom.mojom.MidiSessionProviderRemote;
midi.mojom.mojom.MidiSessionProviderRequest = midi.mojom.mojom.MidiSessionProviderPendingReceiver;


// Interface: MidiSession
midi.mojom.mojom.MidiSession = {};

midi.mojom.mojom.MidiSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

midi.mojom.mojom.MidiSessionRemote = class {
  static get $interfaceName() {
    return 'midi.mojom.MidiSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      midi.mojom.mojom.MidiSessionPendingReceiver,
      handle);
    this.$ = new midi.mojom.mojom.MidiSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

midi.mojom.mojom.MidiSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendData(port, data, timestamp) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      midi.mojom.mojom.MidiSession_SendData_ParamsSpec,
      null,
      [port, data, timestamp]);
  }

};

midi.mojom.mojom.MidiSession.getRemote = function() {
  let remote = new midi.mojom.mojom.MidiSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'midi.mojom.MidiSession',
    'context');
  return remote.$;
};

// ParamsSpec for SendData
midi.mojom.mojom.MidiSession_SendData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'midi.mojom.MidiSession.SendData_Params',
      packedSize: 32,
      fields: [
        { name: 'port', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
midi.mojom.mojom.MidiSessionPtr = midi.mojom.mojom.MidiSessionRemote;
midi.mojom.mojom.MidiSessionRequest = midi.mojom.mojom.MidiSessionPendingReceiver;

