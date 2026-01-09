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

// Struct: NonLidAngleUpdateInfo
sensor.mojom.NonLidAngleUpdateInfoSpec = {
  $: {
    structSpec: {
      name: 'sensor.mojom.NonLidAngleUpdateInfo',
      packedSize: 32,
      fields: [
        { name: 'sensor_type', packedOffset: 8, packedBitOffset: 0, type: sensor.mojom.SensorTypeSpec, nullable: false },
        { name: 'x', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'y', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'z', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LidAngleUpdateInfo
sensor.mojom.LidAngleUpdateInfoSpec = {
  $: {
    structSpec: {
      name: 'sensor.mojom.LidAngleUpdateInfo',
      packedSize: 24,
      fields: [
        { name: 'sensor_type', packedOffset: 8, packedBitOffset: 0, type: sensor.mojom.SensorTypeSpec, nullable: false },
        { name: 'x', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandlerFactory
sensor.mojom.PageHandlerFactory = {};

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
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
sensor.mojom.PageHandlerFactoryPtr = sensor.mojom.PageHandlerFactoryRemote;
sensor.mojom.PageHandlerFactoryRequest = sensor.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
sensor.mojom.PageHandler = {};

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
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
sensor.mojom.PageHandlerPtr = sensor.mojom.PageHandlerRemote;
sensor.mojom.PageHandlerRequest = sensor.mojom.PageHandlerPendingReceiver;

