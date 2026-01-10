// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/sensors/mojom/cros_sensor_service.mojom
// Module: chromeos.sensors.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.sensors = chromeos.sensors || {};
chromeos.sensors.sensors.mojom = chromeos.sensors.sensors.mojom || {};


// Interface: SensorHalServer
chromeos.sensors.sensors.mojom.mojom.SensorHalServer = {};

chromeos.sensors.sensors.mojom.mojom.SensorHalServerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.sensors.sensors.mojom.mojom.SensorHalServerRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorHalServer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.sensors.sensors.mojom.mojom.SensorHalServerPendingReceiver,
      handle);
    this.$ = new chromeos.sensors.sensors.mojom.mojom.SensorHalServerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.sensors.sensors.mojom.mojom.SensorHalServerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createChannel(sensor_service_request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.sensors.sensors.mojom.mojom.SensorHalServer_CreateChannel_ParamsSpec,
      null,
      [sensor_service_request]);
  }

};

chromeos.sensors.sensors.mojom.mojom.SensorHalServer.getRemote = function() {
  let remote = new chromeos.sensors.sensors.mojom.mojom.SensorHalServerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorHalServer',
    'context');
  return remote.$;
};

// ParamsSpec for CreateChannel
chromeos.sensors.sensors.mojom.mojom.SensorHalServer_CreateChannel_ParamsSpec = {
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
chromeos.sensors.sensors.mojom.mojom.SensorHalServerPtr = chromeos.sensors.sensors.mojom.mojom.SensorHalServerRemote;
chromeos.sensors.sensors.mojom.mojom.SensorHalServerRequest = chromeos.sensors.sensors.mojom.mojom.SensorHalServerPendingReceiver;


// Interface: SensorHalClient
chromeos.sensors.sensors.mojom.mojom.SensorHalClient = {};

chromeos.sensors.sensors.mojom.mojom.SensorHalClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.sensors.sensors.mojom.mojom.SensorHalClientRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorHalClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.sensors.sensors.mojom.mojom.SensorHalClientPendingReceiver,
      handle);
    this.$ = new chromeos.sensors.sensors.mojom.mojom.SensorHalClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.sensors.sensors.mojom.mojom.SensorHalClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setUpChannel(sensor_service_ptr) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.sensors.sensors.mojom.mojom.SensorHalClient_SetUpChannel_ParamsSpec,
      null,
      [sensor_service_ptr]);
  }

};

chromeos.sensors.sensors.mojom.mojom.SensorHalClient.getRemote = function() {
  let remote = new chromeos.sensors.sensors.mojom.mojom.SensorHalClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorHalClient',
    'context');
  return remote.$;
};

// ParamsSpec for SetUpChannel
chromeos.sensors.sensors.mojom.mojom.SensorHalClient_SetUpChannel_ParamsSpec = {
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
chromeos.sensors.sensors.mojom.mojom.SensorHalClientPtr = chromeos.sensors.sensors.mojom.mojom.SensorHalClientRemote;
chromeos.sensors.sensors.mojom.mojom.SensorHalClientRequest = chromeos.sensors.sensors.mojom.mojom.SensorHalClientPendingReceiver;

