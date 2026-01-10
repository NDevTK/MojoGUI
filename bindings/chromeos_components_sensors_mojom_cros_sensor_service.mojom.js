// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/sensors/mojom/cros_sensor_service.mojom
// Module: chromeos.sensors.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.sensors = chromeos.sensors || {};
chromeos.sensors.mojom = chromeos.sensors.mojom || {};

chromeos.sensors.mojom.SensorHalServer = {};
chromeos.sensors.mojom.SensorHalServer.$interfaceName = 'chromeos.sensors.mojom.SensorHalServer';
chromeos.sensors.mojom.SensorHalServer_CreateChannel_ParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorHalClient = {};
chromeos.sensors.mojom.SensorHalClient.$interfaceName = 'chromeos.sensors.mojom.SensorHalClient';
chromeos.sensors.mojom.SensorHalClient_SetUpChannel_ParamsSpec = { $: {} };

// Interface: SensorHalServer
mojo.internal.Struct(
    chromeos.sensors.mojom.SensorHalServer_CreateChannel_ParamsSpec, 'chromeos.sensors.mojom.SensorHalServer_CreateChannel_Params', [
      mojo.internal.StructField('sensor_service_request', 0, 0, mojo.internal.InterfaceRequest(chromeos.sensors.mojom.SensorServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.sensors.mojom.SensorHalServerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.sensors.mojom.SensorHalServerRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorHalServer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.sensors.mojom.SensorHalServerPendingReceiver,
      handle);
    this.$ = new chromeos.sensors.mojom.SensorHalServerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.sensors.mojom.SensorHalServerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createChannel(sensor_service_request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.sensors.mojom.SensorHalServer_CreateChannel_ParamsSpec,
      null,
      [sensor_service_request],
      false);
  }

};

chromeos.sensors.mojom.SensorHalServer.getRemote = function() {
  let remote = new chromeos.sensors.mojom.SensorHalServerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorHalServer',
    'context');
  return remote.$;
};

chromeos.sensors.mojom.SensorHalServerReceiver = class {
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateChannel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.sensors.mojom.SensorHalServer_CreateChannel_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateChannel (0)');
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
          const params = decoder.decodeStruct(chromeos.sensors.mojom.SensorHalServer_CreateChannel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createChannel');
          const result = this.impl.createChannel(params.sensor_service_request);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.sensors.mojom.SensorHalServerReceiver = chromeos.sensors.mojom.SensorHalServerReceiver;

chromeos.sensors.mojom.SensorHalServerPtr = chromeos.sensors.mojom.SensorHalServerRemote;
chromeos.sensors.mojom.SensorHalServerRequest = chromeos.sensors.mojom.SensorHalServerPendingReceiver;


// Interface: SensorHalClient
mojo.internal.Struct(
    chromeos.sensors.mojom.SensorHalClient_SetUpChannel_ParamsSpec, 'chromeos.sensors.mojom.SensorHalClient_SetUpChannel_Params', [
      mojo.internal.StructField('sensor_service_ptr', 0, 0, mojo.internal.InterfaceProxy(chromeos.sensors.mojom.SensorServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.sensors.mojom.SensorHalClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.sensors.mojom.SensorHalClientRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorHalClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.sensors.mojom.SensorHalClientPendingReceiver,
      handle);
    this.$ = new chromeos.sensors.mojom.SensorHalClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.sensors.mojom.SensorHalClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setUpChannel(sensor_service_ptr) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.sensors.mojom.SensorHalClient_SetUpChannel_ParamsSpec,
      null,
      [sensor_service_ptr],
      false);
  }

};

chromeos.sensors.mojom.SensorHalClient.getRemote = function() {
  let remote = new chromeos.sensors.mojom.SensorHalClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorHalClient',
    'context');
  return remote.$;
};

chromeos.sensors.mojom.SensorHalClientReceiver = class {
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetUpChannel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.sensors.mojom.SensorHalClient_SetUpChannel_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUpChannel (0)');
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
          const params = decoder.decodeStruct(chromeos.sensors.mojom.SensorHalClient_SetUpChannel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setUpChannel');
          const result = this.impl.setUpChannel(params.sensor_service_ptr);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.sensors.mojom.SensorHalClientReceiver = chromeos.sensors.mojom.SensorHalClientReceiver;

chromeos.sensors.mojom.SensorHalClientPtr = chromeos.sensors.mojom.SensorHalClientRemote;
chromeos.sensors.mojom.SensorHalClientRequest = chromeos.sensors.mojom.SensorHalClientPendingReceiver;

