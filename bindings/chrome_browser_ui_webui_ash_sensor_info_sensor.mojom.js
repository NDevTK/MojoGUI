// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/sensor_info/sensor.mojom
// Module: sensor.mojom

'use strict';

// Module namespace
var sensor = sensor || {};
sensor.mojom = sensor.mojom || {};

sensor.mojom.SensorTypeSpec = { $: mojo.internal.Enum() };
sensor.mojom.SensorUpdateInfoSpec = { $: {} };
sensor.mojom.NonLidAngleUpdateInfoSpec = { $: {} };
sensor.mojom.LidAngleUpdateInfoSpec = { $: {} };
sensor.mojom.PageHandlerFactory = {};
sensor.mojom.PageHandlerFactory.$interfaceName = 'sensor.mojom.PageHandlerFactory';
sensor.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
sensor.mojom.PageHandler = {};
sensor.mojom.PageHandler.$interfaceName = 'sensor.mojom.PageHandler';
sensor.mojom.PageHandler_StartRecordingUpdate_ParamsSpec = { $: {} };
sensor.mojom.PageHandler_StopRecordingUpdate_ParamsSpec = { $: {} };

// Enum: SensorType
sensor.mojom.SensorType = {
  kLidAngle: 0,
  kAccelerometerBase: 1,
  kAccelerometerLid: 2,
  kGyroscopeBase: 3,
  kGyroscopeLid: 4,
  kSensorTypeCount: 5,
};

// Union: SensorUpdateInfo
mojo.internal.Union(
    sensor.mojom.SensorUpdateInfoSpec, 'sensor.mojom.SensorUpdateInfo', {
      'lid_angle_update_info': {
        'ordinal': 0,
        'type': sensor.mojom.LidAngleUpdateInfoSpec.$,
        'nullable': false,
      },
      'update_info': {
        'ordinal': 1,
        'type': sensor.mojom.NonLidAngleUpdateInfoSpec.$,
        'nullable': false,
      },
    });

// Struct: NonLidAngleUpdateInfo
mojo.internal.Struct(
    sensor.mojom.NonLidAngleUpdateInfoSpec, 'sensor.mojom.NonLidAngleUpdateInfo', [
      mojo.internal.StructField('sensor_type', 0, 0, sensor.mojom.SensorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('x', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('y', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('z', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: LidAngleUpdateInfo
mojo.internal.Struct(
    sensor.mojom.LidAngleUpdateInfoSpec, 'sensor.mojom.LidAngleUpdateInfo', [
      mojo.internal.StructField('sensor_type', 0, 0, sensor.mojom.SensorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('x', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    sensor.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'sensor.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(sensor.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [handler],
      false);
  }

};

sensor.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new sensor.mojom.PageHandlerFactoryRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'sensor.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

sensor.mojom.PageHandlerFactoryPtr = sensor.mojom.PageHandlerFactoryRemote;
sensor.mojom.PageHandlerFactoryRequest = sensor.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    sensor.mojom.PageHandler_StartRecordingUpdate_ParamsSpec, 'sensor.mojom.PageHandler_StartRecordingUpdate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    sensor.mojom.PageHandler_StopRecordingUpdate_ParamsSpec, 'sensor.mojom.PageHandler_StopRecordingUpdate_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
  }

  stopRecordingUpdate() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      sensor.mojom.PageHandler_StopRecordingUpdate_ParamsSpec,
      null,
      [],
      false);
  }

};

sensor.mojom.PageHandler.getRemote = function() {
  let remote = new sensor.mojom.PageHandlerRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'sensor.mojom.PageHandler',
    'context');
  return remote.$;
};

sensor.mojom.PageHandlerPtr = sensor.mojom.PageHandlerRemote;
sensor.mojom.PageHandlerRequest = sensor.mojom.PageHandlerPendingReceiver;

