// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/sensor_info/sensor.mojom
// Module: sensor.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  createPageHandler(handler) {
    return this.$.createPageHandler(handler);
  }
};

sensor.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      sensor.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler],
      false);
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

sensor.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
             decoder.decodeStructInline(sensor.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(sensor.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

sensor.mojom.PageHandlerFactoryReceiver = sensor.mojom.PageHandlerFactoryReceiver;

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
  startRecordingUpdate() {
    return this.$.startRecordingUpdate();
  }
  stopRecordingUpdate() {
    return this.$.stopRecordingUpdate();
  }
};

sensor.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  startRecordingUpdate() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      sensor.mojom.PageHandler_StartRecordingUpdate_ParamsSpec,
      null,
      [],
      false);
  }

  stopRecordingUpdate() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      sensor.mojom.PageHandler_StopRecordingUpdate_ParamsSpec,
      null,
      [],
      false);
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

sensor.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
             decoder.decodeStructInline(sensor.mojom.PageHandler_StartRecordingUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(sensor.mojom.PageHandler_StopRecordingUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(sensor.mojom.PageHandler_StartRecordingUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.startRecordingUpdate();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(sensor.mojom.PageHandler_StopRecordingUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.stopRecordingUpdate();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

sensor.mojom.PageHandlerReceiver = sensor.mojom.PageHandlerReceiver;

sensor.mojom.PageHandlerPtr = sensor.mojom.PageHandlerRemote;
sensor.mojom.PageHandlerRequest = sensor.mojom.PageHandlerPendingReceiver;

