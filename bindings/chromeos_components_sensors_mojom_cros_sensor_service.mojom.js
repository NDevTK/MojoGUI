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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.sensors.mojom.SensorHalServer_CreateChannel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createChannel(params.sensor_service_request);
          break;
        }
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.sensors.mojom.SensorHalClient_SetUpChannel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setUpChannel(params.sensor_service_ptr);
          break;
        }
      }
    }});
  }
};

chromeos.sensors.mojom.SensorHalClientReceiver = chromeos.sensors.mojom.SensorHalClientReceiver;

chromeos.sensors.mojom.SensorHalClientPtr = chromeos.sensors.mojom.SensorHalClientRemote;
chromeos.sensors.mojom.SensorHalClientRequest = chromeos.sensors.mojom.SensorHalClientPendingReceiver;

