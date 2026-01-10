// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/sensors/mojom/cros_sensor_service.mojom
// Module: chromeos.sensors.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.sensors = chromeos.sensors || {};
chromeos.sensors.mojom = chromeos.sensors.mojom || {};


// Interface: SensorHalServer
chromeos.sensors.mojom.SensorHalServer = {};

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
      [sensor_service_request]);
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

// ParamsSpec for CreateChannel
chromeos.sensors.mojom.SensorHalServer_CreateChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorHalServer.CreateChannel_Params',
      packedSize: 16,
      fields: [
        { name: 'sensor_service_request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.sensors.mojom.SensorHalServerPtr = chromeos.sensors.mojom.SensorHalServerRemote;
chromeos.sensors.mojom.SensorHalServerRequest = chromeos.sensors.mojom.SensorHalServerPendingReceiver;


// Interface: SensorHalClient
chromeos.sensors.mojom.SensorHalClient = {};

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
      [sensor_service_ptr]);
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

// ParamsSpec for SetUpChannel
chromeos.sensors.mojom.SensorHalClient_SetUpChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorHalClient.SetUpChannel_Params',
      packedSize: 16,
      fields: [
        { name: 'sensor_service_ptr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.sensors.mojom.SensorHalClientPtr = chromeos.sensors.mojom.SensorHalClientRemote;
chromeos.sensors.mojom.SensorHalClientRequest = chromeos.sensors.mojom.SensorHalClientPendingReceiver;

