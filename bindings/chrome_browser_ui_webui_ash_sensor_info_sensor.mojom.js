// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/sensor_info/sensor.mojom
// Module: sensor.mojom

'use strict';

// Module namespace
var sensor = sensor || {};
sensor.mojom = sensor.mojom || {};


// Enum: SensorType
sensor.mojom.SensorType = {
  kLidAngle: 0,
  kAccelerometerBase: 1,
  kAccelerometerLid: 2,
  kGyroscopeBase: 3,
  kGyroscopeLid: 4,
  kSensorTypeCount: 5,
};
sensor.mojom.SensorTypeSpec = { $: mojo.internal.Enum() };

// Union: SensorUpdateInfo
sensor.mojom.SensorUpdateInfoSpec = { $: mojo.internal.Union(
    'sensor.mojom.SensorUpdateInfo', {
      'lid_angle_update_info': {
        'ordinal': 0,
        'type': sensor.mojom.LidAngleUpdateInfoSpec,
      }},
      'update_info': {
        'ordinal': 1,
        'type': sensor.mojom.NonLidAngleUpdateInfoSpec,
      }},
    })
};

// Struct: NonLidAngleUpdateInfo
sensor.mojom.NonLidAngleUpdateInfoSpec = {
  $: {
    structSpec: {
      name: 'sensor.mojom.NonLidAngleUpdateInfo',
      packedSize: 24,
      fields: [
        { name: 'sensor_type', packedOffset: 0, packedBitOffset: 0, type: sensor.mojom.SensorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'x', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'y', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'z', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: LidAngleUpdateInfo
sensor.mojom.LidAngleUpdateInfoSpec = {
  $: {
    structSpec: {
      name: 'sensor.mojom.LidAngleUpdateInfo',
      packedSize: 16,
      fields: [
        { name: 'sensor_type', packedOffset: 0, packedBitOffset: 0, type: sensor.mojom.SensorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'x', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: PageHandlerFactory
sensor.mojom.PageHandlerFactory = {};

sensor.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sensor.mojom.PageHandlerFactory_CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(sensor.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

sensor.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sensor.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'sensor.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sensor.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new sensor.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sensor.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sensor.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler]);
  }

};

sensor.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new sensor.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sensor.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
sensor.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sensor.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(sensor.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
sensor.mojom.PageHandlerFactoryPtr = sensor.mojom.PageHandlerFactoryRemote;
sensor.mojom.PageHandlerFactoryRequest = sensor.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
sensor.mojom.PageHandler = {};

sensor.mojom.PageHandler_StartRecordingUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sensor.mojom.PageHandler_StartRecordingUpdate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

sensor.mojom.PageHandler_StopRecordingUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sensor.mojom.PageHandler_StopRecordingUpdate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

sensor.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sensor.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'sensor.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sensor.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new sensor.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sensor.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startRecordingUpdate() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sensor.mojom.PageHandler_StartRecordingUpdate_ParamsSpec,
      null,
      []);
  }

  stopRecordingUpdate() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      sensor.mojom.PageHandler_StopRecordingUpdate_ParamsSpec,
      null,
      []);
  }

};

sensor.mojom.PageHandler.getRemote = function() {
  let remote = new sensor.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sensor.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for StartRecordingUpdate
sensor.mojom.PageHandler_StartRecordingUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sensor.mojom.PageHandler.StartRecordingUpdate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StopRecordingUpdate
sensor.mojom.PageHandler_StopRecordingUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sensor.mojom.PageHandler.StopRecordingUpdate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
sensor.mojom.PageHandlerPtr = sensor.mojom.PageHandlerRemote;
sensor.mojom.PageHandlerRequest = sensor.mojom.PageHandlerPendingReceiver;

