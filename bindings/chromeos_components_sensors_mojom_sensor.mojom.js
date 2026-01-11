// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/sensors/mojom/sensor.mojom
// Module: chromeos.sensors.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chromeos = chromeos || {};
chromeos.sensors = chromeos.sensors || {};
chromeos.sensors.mojom = chromeos.sensors.mojom || {};

chromeos.sensors.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };
chromeos.sensors.mojom.ObserverErrorTypeSpec = { $: mojo.internal.Enum() };
chromeos.sensors.mojom.SensorServiceDisconnectReasonSpec = { $: mojo.internal.Enum() };
chromeos.sensors.mojom.SensorDeviceDisconnectReasonSpec = { $: mojo.internal.Enum() };
chromeos.sensors.mojom.SensorService = {};
chromeos.sensors.mojom.SensorService.$interfaceName = 'chromeos.sensors.mojom.SensorService';
chromeos.sensors.mojom.SensorService_GetDeviceIds_ParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorService_GetDeviceIds_ResponseParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ResponseParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorService_GetDevice_ParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorDevice = {};
chromeos.sensors.mojom.SensorDevice.$interfaceName = 'chromeos.sensors.mojom.SensorDevice';
chromeos.sensors.mojom.SensorDevice_SetTimeout_ParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorDevice_GetAttributes_ParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorDevice_GetAttributes_ResponseParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorDevice_SetFrequency_ParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorDevice_SetFrequency_ResponseParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorDevice_StartReadingSamples_ParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorDevice_StopReadingSamples_ParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ResponseParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ResponseParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ResponseParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorDeviceSamplesObserver = {};
chromeos.sensors.mojom.SensorDeviceSamplesObserver.$interfaceName = 'chromeos.sensors.mojom.SensorDeviceSamplesObserver';
chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnSampleUpdated_ParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnErrorOccurred_ParamsSpec = { $: {} };
chromeos.sensors.mojom.SensorServiceNewDevicesObserver = {};
chromeos.sensors.mojom.SensorServiceNewDevicesObserver.$interfaceName = 'chromeos.sensors.mojom.SensorServiceNewDevicesObserver';
chromeos.sensors.mojom.SensorServiceNewDevicesObserver_OnNewDeviceAdded_ParamsSpec = { $: {} };

chromeos.sensors.mojom.kScale = "scale";

chromeos.sensors.mojom.kSamplingFrequencyAvailable = "sampling_frequency_available";

chromeos.sensors.mojom.kLocation = "location";

chromeos.sensors.mojom.kLabel = "label";

chromeos.sensors.mojom.kDeviceName = "name";

chromeos.sensors.mojom.kSysPath = "syspath";

chromeos.sensors.mojom.kDevlink = "devlink";

chromeos.sensors.mojom.kLocationBase = "base";

chromeos.sensors.mojom.kLocationLid = "lid";

chromeos.sensors.mojom.kLocationCamera = "camera";

chromeos.sensors.mojom.kLabelBase = "accel-base";

chromeos.sensors.mojom.kLabelLid = "accel-display";

chromeos.sensors.mojom.kAccelerometerChannel = "accel";

chromeos.sensors.mojom.kGyroscopeChannel = "anglvel";

chromeos.sensors.mojom.kMagnetometerChannel = "magn";

chromeos.sensors.mojom.kGravityChannel = "gravity";

chromeos.sensors.mojom.kLightChannel = "illuminance";

chromeos.sensors.mojom.kPressureChannel = "pressure";

chromeos.sensors.mojom.kTimestampChannel = "timestamp";

// Enum: DeviceType
chromeos.sensors.mojom.DeviceType = {
  NONE: 0,
  ACCEL: 1,
  ANGLVEL: 2,
  LIGHT: 3,
  COUNT: 4,
  MAGN: 5,
  ANGL: 6,
  BARO: 7,
  ACCEL_UNCALIBRATED: 8,
  ANGLVEL_UNCALIBRATED: 9,
  MAGN_UNCALIBRATED: 10,
  GRAVITY: 11,
};

// Enum: ObserverErrorType
chromeos.sensors.mojom.ObserverErrorType = {
  ALREADY_STARTED: 0,
  SET_FREQUENCY_IO_FAILED: 1,
  FREQUENCY_INVALID: 2,
  NO_ENABLED_CHANNELS: 3,
  GET_FD_FAILED: 4,
  READ_FAILED: 5,
  READ_TIMEOUT: 6,
};

// Enum: SensorServiceDisconnectReason
chromeos.sensors.mojom.SensorServiceDisconnectReason = {
  IIOSERVICE_CRASHED: 0,
  IIOSERVICE_SHUTDOWN: 1,
  CHROME_STOPPED: 2,
};

// Enum: SensorDeviceDisconnectReason
chromeos.sensors.mojom.SensorDeviceDisconnectReason = {
  IIOSERVICE_CRASHED: 0,
  DEVICE_REMOVED: 1,
};

// Interface: SensorService
mojo.internal.Struct(
    chromeos.sensors.mojom.SensorService_GetDeviceIds_ParamsSpec, 'chromeos.sensors.mojom.SensorService_GetDeviceIds_Params', [
      mojo.internal.StructField('type', 0, 0, chromeos.sensors.mojom.DeviceTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.sensors.mojom.SensorService_GetDeviceIds_ResponseParamsSpec, 'chromeos.sensors.mojom.SensorService_GetDeviceIds_ResponseParams', [
      mojo.internal.StructField('iio_device_ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ParamsSpec, 'chromeos.sensors.mojom.SensorService_GetAllDeviceIds_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ResponseParamsSpec, 'chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ResponseParams', [
      mojo.internal.StructField('iio_device_ids_types', 0, 0, mojo.internal.Map(mojo.internal.Int32, mojo.internal.Array(chromeos.sensors.mojom.DeviceTypeSpec.$, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.sensors.mojom.SensorService_GetDevice_ParamsSpec, 'chromeos.sensors.mojom.SensorService_GetDevice_Params', [
      mojo.internal.StructField('device_request', 0, 0, mojo.internal.InterfaceRequest(chromeos.sensors.mojom.SensorDeviceRemote), null, false, 0, undefined),
      mojo.internal.StructField('iio_device_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

chromeos.sensors.mojom.SensorServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.sensors.mojom.SensorServiceRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.sensors.mojom.SensorServicePendingReceiver,
      handle);
    this.$ = new chromeos.sensors.mojom.SensorServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDeviceIds(type) {
    return this.$.getDeviceIds(type);
  }
  getAllDeviceIds() {
    return this.$.getAllDeviceIds();
  }
  getDevice(iio_device_id, device_request) {
    return this.$.getDevice(iio_device_id, device_request);
  }
};

chromeos.sensors.mojom.SensorServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SensorService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  getDeviceIds(type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.sensors.mojom.SensorService_GetDeviceIds_ParamsSpec,
      chromeos.sensors.mojom.SensorService_GetDeviceIds_ResponseParamsSpec,
      [type],
      false);
  }

  getAllDeviceIds() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ParamsSpec,
      chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ResponseParamsSpec,
      [],
      false);
  }

  getDevice(iio_device_id, device_request) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.sensors.mojom.SensorService_GetDevice_ParamsSpec,
      null,
      [iio_device_id, device_request],
      false);
  }

};

chromeos.sensors.mojom.SensorService.getRemote = function() {
  let remote = new chromeos.sensors.mojom.SensorServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorService',
    'context');
  return remote.$;
};

chromeos.sensors.mojom.SensorServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SensorService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.sensors.mojom.SensorService_GetDeviceIds_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.sensors.mojom.SensorService_GetDevice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.sensors.mojom.SensorService_GetDeviceIds_ParamsSpec.$.structSpec);
          const result = this.impl.getDeviceIds(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.sensors.mojom.SensorService_GetDeviceIds_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ParamsSpec.$.structSpec);
          const result = this.impl.getAllDeviceIds();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.sensors.mojom.SensorService_GetDevice_ParamsSpec.$.structSpec);
          const result = this.impl.getDevice(params.iio_device_id, params.device_request);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.sensors.mojom.SensorServiceReceiver = chromeos.sensors.mojom.SensorServiceReceiver;

chromeos.sensors.mojom.SensorServicePtr = chromeos.sensors.mojom.SensorServiceRemote;
chromeos.sensors.mojom.SensorServiceRequest = chromeos.sensors.mojom.SensorServicePendingReceiver;


// Interface: SensorDevice
mojo.internal.Struct(
    chromeos.sensors.mojom.SensorDevice_SetTimeout_ParamsSpec, 'chromeos.sensors.mojom.SensorDevice_SetTimeout_Params', [
      mojo.internal.StructField('timeout', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.sensors.mojom.SensorDevice_GetAttributes_ParamsSpec, 'chromeos.sensors.mojom.SensorDevice_GetAttributes_Params', [
      mojo.internal.StructField('attr_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.sensors.mojom.SensorDevice_GetAttributes_ResponseParamsSpec, 'chromeos.sensors.mojom.SensorDevice_GetAttributes_ResponseParams', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.sensors.mojom.SensorDevice_SetFrequency_ParamsSpec, 'chromeos.sensors.mojom.SensorDevice_SetFrequency_Params', [
      mojo.internal.StructField('frequency', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.sensors.mojom.SensorDevice_SetFrequency_ResponseParamsSpec, 'chromeos.sensors.mojom.SensorDevice_SetFrequency_ResponseParams', [
      mojo.internal.StructField('result_freq', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.sensors.mojom.SensorDevice_StartReadingSamples_ParamsSpec, 'chromeos.sensors.mojom.SensorDevice_StartReadingSamples_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromeos.sensors.mojom.SensorDeviceSamplesObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.sensors.mojom.SensorDevice_StopReadingSamples_ParamsSpec, 'chromeos.sensors.mojom.SensorDevice_StopReadingSamples_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ParamsSpec, 'chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ResponseParamsSpec, 'chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ResponseParams', [
      mojo.internal.StructField('iio_chn_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ParamsSpec, 'chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_Params', [
      mojo.internal.StructField('iio_chn_indices', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ResponseParamsSpec, 'chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Array(mojo.internal.Bool, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ParamsSpec, 'chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_Params', [
      mojo.internal.StructField('iio_chn_indices', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('attr_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ResponseParamsSpec, 'chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ResponseParams', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

chromeos.sensors.mojom.SensorDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.sensors.mojom.SensorDeviceRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.sensors.mojom.SensorDevicePendingReceiver,
      handle);
    this.$ = new chromeos.sensors.mojom.SensorDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setTimeout(timeout) {
    return this.$.setTimeout(timeout);
  }
  getAttributes(attr_names) {
    return this.$.getAttributes(attr_names);
  }
  setFrequency(frequency) {
    return this.$.setFrequency(frequency);
  }
  startReadingSamples(observer) {
    return this.$.startReadingSamples(observer);
  }
  stopReadingSamples() {
    return this.$.stopReadingSamples();
  }
  getAllChannelIds() {
    return this.$.getAllChannelIds();
  }
  getChannelsEnabled(iio_chn_indices) {
    return this.$.getChannelsEnabled(iio_chn_indices);
  }
  getChannelsAttributes(iio_chn_indices, attr_name) {
    return this.$.getChannelsAttributes(iio_chn_indices, attr_name);
  }
};

chromeos.sensors.mojom.SensorDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SensorDevice', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 7 },
      { explicit: 8 },
    ]);
  }

  setTimeout(timeout) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.sensors.mojom.SensorDevice_SetTimeout_ParamsSpec,
      null,
      [timeout],
      false);
  }

  getAttributes(attr_names) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.sensors.mojom.SensorDevice_GetAttributes_ParamsSpec,
      chromeos.sensors.mojom.SensorDevice_GetAttributes_ResponseParamsSpec,
      [attr_names],
      false);
  }

  setFrequency(frequency) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.sensors.mojom.SensorDevice_SetFrequency_ParamsSpec,
      chromeos.sensors.mojom.SensorDevice_SetFrequency_ResponseParamsSpec,
      [frequency],
      false);
  }

  startReadingSamples(observer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromeos.sensors.mojom.SensorDevice_StartReadingSamples_ParamsSpec,
      null,
      [observer],
      false);
  }

  stopReadingSamples() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chromeos.sensors.mojom.SensorDevice_StopReadingSamples_ParamsSpec,
      null,
      [],
      false);
  }

  getAllChannelIds() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ParamsSpec,
      chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ResponseParamsSpec,
      [],
      false);
  }

  getChannelsEnabled(iio_chn_indices) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ParamsSpec,
      chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ResponseParamsSpec,
      [iio_chn_indices],
      false);
  }

  getChannelsAttributes(iio_chn_indices, attr_name) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ParamsSpec,
      chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ResponseParamsSpec,
      [iio_chn_indices, attr_name],
      false);
  }

};

chromeos.sensors.mojom.SensorDevice.getRemote = function() {
  let remote = new chromeos.sensors.mojom.SensorDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorDevice',
    'context');
  return remote.$;
};

chromeos.sensors.mojom.SensorDeviceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SensorDevice', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 7 },
      { explicit: 8 },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.sensors.mojom.SensorDevice_SetTimeout_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.sensors.mojom.SensorDevice_GetAttributes_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.sensors.mojom.SensorDevice_SetFrequency_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.sensors.mojom.SensorDevice_StartReadingSamples_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.sensors.mojom.SensorDevice_StopReadingSamples_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.sensors.mojom.SensorDevice_SetTimeout_ParamsSpec.$.structSpec);
          const result = this.impl.setTimeout(params.timeout);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.sensors.mojom.SensorDevice_GetAttributes_ParamsSpec.$.structSpec);
          const result = this.impl.getAttributes(params.attr_names);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.sensors.mojom.SensorDevice_GetAttributes_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.sensors.mojom.SensorDevice_SetFrequency_ParamsSpec.$.structSpec);
          const result = this.impl.setFrequency(params.frequency);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.sensors.mojom.SensorDevice_SetFrequency_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.sensors.mojom.SensorDevice_StartReadingSamples_ParamsSpec.$.structSpec);
          const result = this.impl.startReadingSamples(params.observer);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.sensors.mojom.SensorDevice_StopReadingSamples_ParamsSpec.$.structSpec);
          const result = this.impl.stopReadingSamples();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ParamsSpec.$.structSpec);
          const result = this.impl.getAllChannelIds();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.getChannelsEnabled(params.iio_chn_indices);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ParamsSpec.$.structSpec);
          const result = this.impl.getChannelsAttributes(params.iio_chn_indices, params.attr_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.sensors.mojom.SensorDeviceReceiver = chromeos.sensors.mojom.SensorDeviceReceiver;

chromeos.sensors.mojom.SensorDevicePtr = chromeos.sensors.mojom.SensorDeviceRemote;
chromeos.sensors.mojom.SensorDeviceRequest = chromeos.sensors.mojom.SensorDevicePendingReceiver;


// Interface: SensorDeviceSamplesObserver
mojo.internal.Struct(
    chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnSampleUpdated_ParamsSpec, 'chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnSampleUpdated_Params', [
      mojo.internal.StructField('sample', 0, 0, mojo.internal.Map(mojo.internal.Int32, mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnErrorOccurred_ParamsSpec, 'chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnErrorOccurred_Params', [
      mojo.internal.StructField('type', 0, 0, chromeos.sensors.mojom.ObserverErrorTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.sensors.mojom.SensorDeviceSamplesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.sensors.mojom.SensorDeviceSamplesObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorDeviceSamplesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.sensors.mojom.SensorDeviceSamplesObserverPendingReceiver,
      handle);
    this.$ = new chromeos.sensors.mojom.SensorDeviceSamplesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSampleUpdated(sample) {
    return this.$.onSampleUpdated(sample);
  }
  onErrorOccurred(type) {
    return this.$.onErrorOccurred(type);
  }
};

chromeos.sensors.mojom.SensorDeviceSamplesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SensorDeviceSamplesObserver', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onSampleUpdated(sample) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnSampleUpdated_ParamsSpec,
      null,
      [sample],
      false);
  }

  onErrorOccurred(type) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnErrorOccurred_ParamsSpec,
      null,
      [type],
      false);
  }

};

chromeos.sensors.mojom.SensorDeviceSamplesObserver.getRemote = function() {
  let remote = new chromeos.sensors.mojom.SensorDeviceSamplesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorDeviceSamplesObserver',
    'context');
  return remote.$;
};

chromeos.sensors.mojom.SensorDeviceSamplesObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SensorDeviceSamplesObserver', [
      { explicit: 0 },
      { explicit: 1 },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnSampleUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnErrorOccurred_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnSampleUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onSampleUpdated(params.sample);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnErrorOccurred_ParamsSpec.$.structSpec);
          const result = this.impl.onErrorOccurred(params.type);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.sensors.mojom.SensorDeviceSamplesObserverReceiver = chromeos.sensors.mojom.SensorDeviceSamplesObserverReceiver;

chromeos.sensors.mojom.SensorDeviceSamplesObserverPtr = chromeos.sensors.mojom.SensorDeviceSamplesObserverRemote;
chromeos.sensors.mojom.SensorDeviceSamplesObserverRequest = chromeos.sensors.mojom.SensorDeviceSamplesObserverPendingReceiver;


// Interface: SensorServiceNewDevicesObserver
mojo.internal.Struct(
    chromeos.sensors.mojom.SensorServiceNewDevicesObserver_OnNewDeviceAdded_ParamsSpec, 'chromeos.sensors.mojom.SensorServiceNewDevicesObserver_OnNewDeviceAdded_Params', [
      mojo.internal.StructField('types', 0, 0, mojo.internal.Array(chromeos.sensors.mojom.DeviceTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('iio_device_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

chromeos.sensors.mojom.SensorServiceNewDevicesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.sensors.mojom.SensorServiceNewDevicesObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorServiceNewDevicesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.sensors.mojom.SensorServiceNewDevicesObserverPendingReceiver,
      handle);
    this.$ = new chromeos.sensors.mojom.SensorServiceNewDevicesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onNewDeviceAdded(iio_device_id, types) {
    return this.$.onNewDeviceAdded(iio_device_id, types);
  }
};

chromeos.sensors.mojom.SensorServiceNewDevicesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SensorServiceNewDevicesObserver', [
      { explicit: 0 },
    ]);
  }

  onNewDeviceAdded(iio_device_id, types) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.sensors.mojom.SensorServiceNewDevicesObserver_OnNewDeviceAdded_ParamsSpec,
      null,
      [iio_device_id, types],
      false);
  }

};

chromeos.sensors.mojom.SensorServiceNewDevicesObserver.getRemote = function() {
  let remote = new chromeos.sensors.mojom.SensorServiceNewDevicesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorServiceNewDevicesObserver',
    'context');
  return remote.$;
};

chromeos.sensors.mojom.SensorServiceNewDevicesObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SensorServiceNewDevicesObserver', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.sensors.mojom.SensorServiceNewDevicesObserver_OnNewDeviceAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.sensors.mojom.SensorServiceNewDevicesObserver_OnNewDeviceAdded_ParamsSpec.$.structSpec);
          const result = this.impl.onNewDeviceAdded(params.iio_device_id, params.types);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.sensors.mojom.SensorServiceNewDevicesObserverReceiver = chromeos.sensors.mojom.SensorServiceNewDevicesObserverReceiver;

chromeos.sensors.mojom.SensorServiceNewDevicesObserverPtr = chromeos.sensors.mojom.SensorServiceNewDevicesObserverRemote;
chromeos.sensors.mojom.SensorServiceNewDevicesObserverRequest = chromeos.sensors.mojom.SensorServiceNewDevicesObserverPendingReceiver;

