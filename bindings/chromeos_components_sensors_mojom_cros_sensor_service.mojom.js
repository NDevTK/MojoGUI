// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/sensors/mojom/cros_sensor_service.mojom
// Module: chromeos.sensors.mojom

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
  createChannel(sensor_service_request) {
    return this.$.createChannel(sensor_service_request);
  }
};

chromeos.sensors.mojom.SensorHalServerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SensorHalServer', [
      { explicit: 0 },
    ]);
  }

  createChannel(sensor_service_request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('SensorHalServer', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.sensors.mojom.SensorHalServer_CreateChannel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.sensors.mojom.SensorHalServer_CreateChannel_ParamsSpec.$.structSpec);
          const result = this.impl.createChannel(params.sensor_service_request);
          break;
        }
      }
      } catch (err) {}
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
  setUpChannel(sensor_service_ptr) {
    return this.$.setUpChannel(sensor_service_ptr);
  }
};

chromeos.sensors.mojom.SensorHalClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SensorHalClient', [
      { explicit: 0 },
    ]);
  }

  setUpChannel(sensor_service_ptr) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('SensorHalClient', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.sensors.mojom.SensorHalClient_SetUpChannel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.sensors.mojom.SensorHalClient_SetUpChannel_ParamsSpec.$.structSpec);
          const result = this.impl.setUpChannel(params.sensor_service_ptr);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.sensors.mojom.SensorHalClientReceiver = chromeos.sensors.mojom.SensorHalClientReceiver;

chromeos.sensors.mojom.SensorHalClientPtr = chromeos.sensors.mojom.SensorHalClientRemote;
chromeos.sensors.mojom.SensorHalClientRequest = chromeos.sensors.mojom.SensorHalClientPendingReceiver;

