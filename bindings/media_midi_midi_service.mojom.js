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

// Interface: MidiSessionClient
midi.mojom.MidiSessionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

midi.mojom.MidiSessionClientRemote = class {
  static get $interfaceName() {
    return 'midi.mojom.MidiSessionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      midi.mojom.MidiSessionClientPendingReceiver,
      handle);
    this.$ = new midi.mojom.MidiSessionClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

midi.mojom.MidiSessionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addInputPort(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      midi.mojom.MidiSessionClient_AddInputPort_ParamsSpec.$,
      null,
      [info]);
  }

  addOutputPort(info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      midi.mojom.MidiSessionClient_AddOutputPort_ParamsSpec.$,
      null,
      [info]);
  }

  setInputPortState(port, state) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      midi.mojom.MidiSessionClient_SetInputPortState_ParamsSpec.$,
      null,
      [port, state]);
  }

  setOutputPortState(port, state) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      midi.mojom.MidiSessionClient_SetOutputPortState_ParamsSpec.$,
      null,
      [port, state]);
  }

  sessionStarted(result) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      midi.mojom.MidiSessionClient_SessionStarted_ParamsSpec.$,
      null,
      [result]);
  }

  acknowledgeSentData(bytes) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      midi.mojom.MidiSessionClient_AcknowledgeSentData_ParamsSpec.$,
      null,
      [bytes]);
  }

  dataReceived(port, data, timestamp) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      midi.mojom.MidiSessionClient_DataReceived_ParamsSpec.$,
      null,
      [port, data, timestamp]);
  }

};

midi.mojom.MidiSessionClient.getRemote = function() {
  let remote = new midi.mojom.MidiSessionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'midi.mojom.MidiSessionClient',
    'context');
  return remote.$;
}};

// ParamsSpec for AddInputPort
midi.mojom.MidiSessionClient_AddInputPort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'midi.mojom.MidiSessionClient.AddInputPort_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for AddOutputPort
midi.mojom.MidiSessionClient_AddOutputPort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'midi.mojom.MidiSessionClient.AddOutputPort_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetInputPortState
midi.mojom.MidiSessionClient_SetInputPortState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'midi.mojom.MidiSessionClient.SetInputPortState_Params',
      packedSize: 24,
      fields: [
        { name: 'port', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetOutputPortState
midi.mojom.MidiSessionClient_SetOutputPortState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'midi.mojom.MidiSessionClient.SetOutputPortState_Params',
      packedSize: 24,
      fields: [
        { name: 'port', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SessionStarted
midi.mojom.MidiSessionClient_SessionStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'midi.mojom.MidiSessionClient.SessionStarted_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for AcknowledgeSentData
midi.mojom.MidiSessionClient_AcknowledgeSentData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'midi.mojom.MidiSessionClient.AcknowledgeSentData_Params',
      packedSize: 16,
      fields: [
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for DataReceived
midi.mojom.MidiSessionClient_DataReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'midi.mojom.MidiSessionClient.DataReceived_Params',
      packedSize: 32,
      fields: [
        { name: 'port', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
midi.mojom.MidiSessionClientPtr = midi.mojom.MidiSessionClientRemote;
midi.mojom.MidiSessionClientRequest = midi.mojom.MidiSessionClientPendingReceiver;


// Interface: MidiSessionProvider
midi.mojom.MidiSessionProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

midi.mojom.MidiSessionProviderRemote = class {
  static get $interfaceName() {
    return 'midi.mojom.MidiSessionProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      midi.mojom.MidiSessionProviderPendingReceiver,
      handle);
    this.$ = new midi.mojom.MidiSessionProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

midi.mojom.MidiSessionProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startSession(receiver, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      midi.mojom.MidiSessionProvider_StartSession_ParamsSpec.$,
      null,
      [receiver, client]);
  }

};

midi.mojom.MidiSessionProvider.getRemote = function() {
  let remote = new midi.mojom.MidiSessionProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'midi.mojom.MidiSessionProvider',
    'context');
  return remote.$;
}};

// ParamsSpec for StartSession
midi.mojom.MidiSessionProvider_StartSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'midi.mojom.MidiSessionProvider.StartSession_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
midi.mojom.MidiSessionProviderPtr = midi.mojom.MidiSessionProviderRemote;
midi.mojom.MidiSessionProviderRequest = midi.mojom.MidiSessionProviderPendingReceiver;


// Interface: MidiSession
midi.mojom.MidiSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

midi.mojom.MidiSessionRemote = class {
  static get $interfaceName() {
    return 'midi.mojom.MidiSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      midi.mojom.MidiSessionPendingReceiver,
      handle);
    this.$ = new midi.mojom.MidiSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

midi.mojom.MidiSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendData(port, data, timestamp) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      midi.mojom.MidiSession_SendData_ParamsSpec.$,
      null,
      [port, data, timestamp]);
  }

};

midi.mojom.MidiSession.getRemote = function() {
  let remote = new midi.mojom.MidiSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'midi.mojom.MidiSession',
    'context');
  return remote.$;
}};

// ParamsSpec for SendData
midi.mojom.MidiSession_SendData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'midi.mojom.MidiSession.SendData_Params',
      packedSize: 32,
      fields: [
        { name: 'port', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
midi.mojom.MidiSessionPtr = midi.mojom.MidiSessionRemote;
midi.mojom.MidiSessionRequest = midi.mojom.MidiSessionPendingReceiver;

