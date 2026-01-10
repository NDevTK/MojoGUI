// Auto-generated MojoJS binding
// Source: chromium_src/media/midi/midi_service.mojom
// Module: midi.mojom

'use strict';

// Module namespace
var midi = midi || {};
midi.mojom = midi.mojom || {};
var mojo_base = mojo_base || {};

midi.mojom.ResultSpec = { $: mojo.internal.Enum() };
midi.mojom.PortStateSpec = { $: mojo.internal.Enum() };
midi.mojom.PortInfoSpec = { $: {} };
midi.mojom.MidiSessionClient = {};
midi.mojom.MidiSessionClient.$interfaceName = 'midi.mojom.MidiSessionClient';
midi.mojom.MidiSessionClient_AddInputPort_ParamsSpec = { $: {} };
midi.mojom.MidiSessionClient_AddOutputPort_ParamsSpec = { $: {} };
midi.mojom.MidiSessionClient_SetInputPortState_ParamsSpec = { $: {} };
midi.mojom.MidiSessionClient_SetOutputPortState_ParamsSpec = { $: {} };
midi.mojom.MidiSessionClient_SessionStarted_ParamsSpec = { $: {} };
midi.mojom.MidiSessionClient_AcknowledgeSentData_ParamsSpec = { $: {} };
midi.mojom.MidiSessionClient_DataReceived_ParamsSpec = { $: {} };
midi.mojom.MidiSessionProvider = {};
midi.mojom.MidiSessionProvider.$interfaceName = 'midi.mojom.MidiSessionProvider';
midi.mojom.MidiSessionProvider_StartSession_ParamsSpec = { $: {} };
midi.mojom.MidiSession = {};
midi.mojom.MidiSession.$interfaceName = 'midi.mojom.MidiSession';
midi.mojom.MidiSession_SendData_ParamsSpec = { $: {} };

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
mojo.internal.Struct(
    midi.mojom.PortInfoSpec, 'midi.mojom.PortInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('manufacturer', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('version', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('state', 32, 0, midi.mojom.PortStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: MidiSessionClient
mojo.internal.Struct(
    midi.mojom.MidiSessionClient_AddInputPort_ParamsSpec, 'midi.mojom.MidiSessionClient_AddInputPort_Params', [
      mojo.internal.StructField('info', 0, 0, midi.mojom.PortInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    midi.mojom.MidiSessionClient_AddOutputPort_ParamsSpec, 'midi.mojom.MidiSessionClient_AddOutputPort_Params', [
      mojo.internal.StructField('info', 0, 0, midi.mojom.PortInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    midi.mojom.MidiSessionClient_SetInputPortState_ParamsSpec, 'midi.mojom.MidiSessionClient_SetInputPortState_Params', [
      mojo.internal.StructField('state', 0, 0, midi.mojom.PortStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    midi.mojom.MidiSessionClient_SetOutputPortState_ParamsSpec, 'midi.mojom.MidiSessionClient_SetOutputPortState_Params', [
      mojo.internal.StructField('state', 0, 0, midi.mojom.PortStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    midi.mojom.MidiSessionClient_SessionStarted_ParamsSpec, 'midi.mojom.MidiSessionClient_SessionStarted_Params', [
      mojo.internal.StructField('result', 0, 0, midi.mojom.ResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    midi.mojom.MidiSessionClient_AcknowledgeSentData_ParamsSpec, 'midi.mojom.MidiSessionClient_AcknowledgeSentData_Params', [
      mojo.internal.StructField('bytes', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    midi.mojom.MidiSessionClient_DataReceived_ParamsSpec, 'midi.mojom.MidiSessionClient_DataReceived_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

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
      midi.mojom.MidiSessionClient_AddInputPort_ParamsSpec,
      null,
      [info],
      false);
  }

  addOutputPort(info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      midi.mojom.MidiSessionClient_AddOutputPort_ParamsSpec,
      null,
      [info],
      false);
  }

  setInputPortState(port, state) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      midi.mojom.MidiSessionClient_SetInputPortState_ParamsSpec,
      null,
      [port, state],
      false);
  }

  setOutputPortState(port, state) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      midi.mojom.MidiSessionClient_SetOutputPortState_ParamsSpec,
      null,
      [port, state],
      false);
  }

  sessionStarted(result) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      midi.mojom.MidiSessionClient_SessionStarted_ParamsSpec,
      null,
      [result],
      false);
  }

  acknowledgeSentData(bytes) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      midi.mojom.MidiSessionClient_AcknowledgeSentData_ParamsSpec,
      null,
      [bytes],
      false);
  }

  dataReceived(port, data, timestamp) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      midi.mojom.MidiSessionClient_DataReceived_ParamsSpec,
      null,
      [port, data, timestamp],
      false);
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
};

midi.mojom.MidiSessionClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AddInputPort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(midi.mojom.MidiSessionClient_AddInputPort_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddInputPort (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddOutputPort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(midi.mojom.MidiSessionClient_AddOutputPort_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddOutputPort (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetInputPortState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(midi.mojom.MidiSessionClient_SetInputPortState_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInputPortState (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetOutputPortState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(midi.mojom.MidiSessionClient_SetOutputPortState_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOutputPortState (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SessionStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(midi.mojom.MidiSessionClient_SessionStarted_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SessionStarted (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: AcknowledgeSentData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(midi.mojom.MidiSessionClient_AcknowledgeSentData_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcknowledgeSentData (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DataReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(midi.mojom.MidiSessionClient_DataReceived_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DataReceived (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(midi.mojom.MidiSessionClient_AddInputPort_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.addInputPort');
          const result = this.impl.addInputPort(params.info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(midi.mojom.MidiSessionClient_AddOutputPort_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.addOutputPort');
          const result = this.impl.addOutputPort(params.info);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(midi.mojom.MidiSessionClient_SetInputPortState_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setInputPortState');
          const result = this.impl.setInputPortState(params.port, params.state);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(midi.mojom.MidiSessionClient_SetOutputPortState_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setOutputPortState');
          const result = this.impl.setOutputPortState(params.port, params.state);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(midi.mojom.MidiSessionClient_SessionStarted_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.sessionStarted');
          const result = this.impl.sessionStarted(params.result);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(midi.mojom.MidiSessionClient_AcknowledgeSentData_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.acknowledgeSentData');
          const result = this.impl.acknowledgeSentData(params.bytes);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(midi.mojom.MidiSessionClient_DataReceived_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.dataReceived');
          const result = this.impl.dataReceived(params.port, params.data, params.timestamp);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

midi.mojom.MidiSessionClientReceiver = midi.mojom.MidiSessionClientReceiver;

midi.mojom.MidiSessionClientPtr = midi.mojom.MidiSessionClientRemote;
midi.mojom.MidiSessionClientRequest = midi.mojom.MidiSessionClientPendingReceiver;


// Interface: MidiSessionProvider
mojo.internal.Struct(
    midi.mojom.MidiSessionProvider_StartSession_ParamsSpec, 'midi.mojom.MidiSessionProvider_StartSession_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(midi.mojom.MidiSessionSpec), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(midi.mojom.MidiSessionClientSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      midi.mojom.MidiSessionProvider_StartSession_ParamsSpec,
      null,
      [receiver, client],
      false);
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
};

midi.mojom.MidiSessionProviderReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: StartSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(midi.mojom.MidiSessionProvider_StartSession_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartSession (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(midi.mojom.MidiSessionProvider_StartSession_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.startSession');
          const result = this.impl.startSession(params.receiver, params.client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

midi.mojom.MidiSessionProviderReceiver = midi.mojom.MidiSessionProviderReceiver;

midi.mojom.MidiSessionProviderPtr = midi.mojom.MidiSessionProviderRemote;
midi.mojom.MidiSessionProviderRequest = midi.mojom.MidiSessionProviderPendingReceiver;


// Interface: MidiSession
mojo.internal.Struct(
    midi.mojom.MidiSession_SendData_ParamsSpec, 'midi.mojom.MidiSession_SendData_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

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
      midi.mojom.MidiSession_SendData_ParamsSpec,
      null,
      [port, data, timestamp],
      false);
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
};

midi.mojom.MidiSessionReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SendData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(midi.mojom.MidiSession_SendData_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendData (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(midi.mojom.MidiSession_SendData_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.sendData');
          const result = this.impl.sendData(params.port, params.data, params.timestamp);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

midi.mojom.MidiSessionReceiver = midi.mojom.MidiSessionReceiver;

midi.mojom.MidiSessionPtr = midi.mojom.MidiSessionRemote;
midi.mojom.MidiSessionRequest = midi.mojom.MidiSessionPendingReceiver;

