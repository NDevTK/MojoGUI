// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/sensor.mojom
// Module: device.mojom

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.SensorTypeSpec = { $: mojo.internal.Enum() };
device.mojom.ReportingModeSpec = { $: mojo.internal.Enum() };
device.mojom.SensorReadingRawSpec = { $: {} };
device.mojom.SensorConfigurationSpec = { $: {} };
device.mojom.Sensor = {};
device.mojom.Sensor.$interfaceName = 'device.mojom.Sensor';
device.mojom.Sensor_GetDefaultConfiguration_ParamsSpec = { $: {} };
device.mojom.Sensor_GetDefaultConfiguration_ResponseParamsSpec = { $: {} };
device.mojom.Sensor_AddConfiguration_ParamsSpec = { $: {} };
device.mojom.Sensor_AddConfiguration_ResponseParamsSpec = { $: {} };
device.mojom.Sensor_RemoveConfiguration_ParamsSpec = { $: {} };
device.mojom.Sensor_Suspend_ParamsSpec = { $: {} };
device.mojom.Sensor_Resume_ParamsSpec = { $: {} };
device.mojom.Sensor_ConfigureReadingChangeNotifications_ParamsSpec = { $: {} };
device.mojom.SensorClient = {};
device.mojom.SensorClient.$interfaceName = 'device.mojom.SensorClient';
device.mojom.SensorClient_RaiseError_ParamsSpec = { $: {} };
device.mojom.SensorClient_SensorReadingChanged_ParamsSpec = { $: {} };

// Enum: SensorType
device.mojom.SensorType = {
  AMBIENT_LIGHT: 0,
  ACCELEROMETER: 1,
  LINEAR_ACCELERATION: 2,
  GRAVITY: 3,
  GYROSCOPE: 4,
  MAGNETOMETER: 5,
  ABSOLUTE_ORIENTATION_EULER_ANGLES: 6,
  ABSOLUTE_ORIENTATION_QUATERNION: 7,
  RELATIVE_ORIENTATION_EULER_ANGLES: 8,
  RELATIVE_ORIENTATION_QUATERNION: 9,
};

// Enum: ReportingMode
device.mojom.ReportingMode = {
  ON_CHANGE: 0,
  CONTINUOUS: 1,
};

// Struct: SensorReadingRaw
mojo.internal.Struct(
    device.mojom.SensorReadingRawSpec, 'device.mojom.SensorReadingRaw', [
      mojo.internal.StructField('timestamp', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('values', 8, 0, mojo.internal.Array(mojo.internal.Double, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SensorConfiguration
mojo.internal.Struct(
    device.mojom.SensorConfigurationSpec, 'device.mojom.SensorConfiguration', [
      mojo.internal.StructField('frequency', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: Sensor
mojo.internal.Struct(
    device.mojom.Sensor_GetDefaultConfiguration_ParamsSpec, 'device.mojom.Sensor_GetDefaultConfiguration_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.Sensor_GetDefaultConfiguration_ResponseParamsSpec, 'device.mojom.Sensor_GetDefaultConfiguration_ResponseParams', [
      mojo.internal.StructField('configuration', 0, 0, device.mojom.SensorConfigurationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Sensor_AddConfiguration_ParamsSpec, 'device.mojom.Sensor_AddConfiguration_Params', [
      mojo.internal.StructField('configuration', 0, 0, device.mojom.SensorConfigurationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Sensor_AddConfiguration_ResponseParamsSpec, 'device.mojom.Sensor_AddConfiguration_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Sensor_RemoveConfiguration_ParamsSpec, 'device.mojom.Sensor_RemoveConfiguration_Params', [
      mojo.internal.StructField('configuration', 0, 0, device.mojom.SensorConfigurationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Sensor_Suspend_ParamsSpec, 'device.mojom.Sensor_Suspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.Sensor_Resume_ParamsSpec, 'device.mojom.Sensor_Resume_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.Sensor_ConfigureReadingChangeNotifications_ParamsSpec, 'device.mojom.Sensor_ConfigureReadingChangeNotifications_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.SensorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.SensorRemote = class {
  static get $interfaceName() {
    return 'device.mojom.Sensor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.SensorPendingReceiver,
      handle);
    this.$ = new device.mojom.SensorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDefaultConfiguration() {
    return this.$.getDefaultConfiguration();
  }
  addConfiguration(configuration) {
    return this.$.addConfiguration(configuration);
  }
  removeConfiguration(configuration) {
    return this.$.removeConfiguration(configuration);
  }
  suspend() {
    return this.$.suspend();
  }
  resume() {
    return this.$.resume();
  }
  configureReadingChangeNotifications(enabled) {
    return this.$.configureReadingChangeNotifications(enabled);
  }
};

device.mojom.SensorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Sensor', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getDefaultConfiguration() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.Sensor_GetDefaultConfiguration_ParamsSpec,
      device.mojom.Sensor_GetDefaultConfiguration_ResponseParamsSpec,
      [],
      false);
  }

  addConfiguration(configuration) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.Sensor_AddConfiguration_ParamsSpec,
      device.mojom.Sensor_AddConfiguration_ResponseParamsSpec,
      [configuration],
      false);
  }

  removeConfiguration(configuration) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.Sensor_RemoveConfiguration_ParamsSpec,
      null,
      [configuration],
      false);
  }

  suspend() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.Sensor_Suspend_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      device.mojom.Sensor_Resume_ParamsSpec,
      null,
      [],
      false);
  }

  configureReadingChangeNotifications(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      device.mojom.Sensor_ConfigureReadingChangeNotifications_ParamsSpec,
      null,
      [enabled],
      false);
  }

};

device.mojom.Sensor.getRemote = function() {
  let remote = new device.mojom.SensorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.Sensor',
    'context');
  return remote.$;
};

device.mojom.SensorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Sensor', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(device.mojom.Sensor_GetDefaultConfiguration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Sensor_AddConfiguration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Sensor_RemoveConfiguration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Sensor_Suspend_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Sensor_Resume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Sensor_ConfigureReadingChangeNotifications_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Sensor_GetDefaultConfiguration_ParamsSpec.$.structSpec);
          const result = this.impl.getDefaultConfiguration();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.Sensor_GetDefaultConfiguration_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Sensor_AddConfiguration_ParamsSpec.$.structSpec);
          const result = this.impl.addConfiguration(params.configuration);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.Sensor_AddConfiguration_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Sensor_RemoveConfiguration_ParamsSpec.$.structSpec);
          const result = this.impl.removeConfiguration(params.configuration);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Sensor_Suspend_ParamsSpec.$.structSpec);
          const result = this.impl.suspend();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Sensor_Resume_ParamsSpec.$.structSpec);
          const result = this.impl.resume();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Sensor_ConfigureReadingChangeNotifications_ParamsSpec.$.structSpec);
          const result = this.impl.configureReadingChangeNotifications(params.enabled);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.SensorReceiver = device.mojom.SensorReceiver;

device.mojom.SensorPtr = device.mojom.SensorRemote;
device.mojom.SensorRequest = device.mojom.SensorPendingReceiver;


// Interface: SensorClient
mojo.internal.Struct(
    device.mojom.SensorClient_RaiseError_ParamsSpec, 'device.mojom.SensorClient_RaiseError_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.SensorClient_SensorReadingChanged_ParamsSpec, 'device.mojom.SensorClient_SensorReadingChanged_Params', [
    ],
    [[0, 8]]);

device.mojom.SensorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.SensorClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SensorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.SensorClientPendingReceiver,
      handle);
    this.$ = new device.mojom.SensorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  raiseError() {
    return this.$.raiseError();
  }
  sensorReadingChanged() {
    return this.$.sensorReadingChanged();
  }
};

device.mojom.SensorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SensorClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  raiseError() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.SensorClient_RaiseError_ParamsSpec,
      null,
      [],
      false);
  }

  sensorReadingChanged() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.SensorClient_SensorReadingChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

device.mojom.SensorClient.getRemote = function() {
  let remote = new device.mojom.SensorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SensorClient',
    'context');
  return remote.$;
};

device.mojom.SensorClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SensorClient', [
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
             decoder.decodeStructInline(device.mojom.SensorClient_RaiseError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.SensorClient_SensorReadingChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.SensorClient_RaiseError_ParamsSpec.$.structSpec);
          const result = this.impl.raiseError();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.SensorClient_SensorReadingChanged_ParamsSpec.$.structSpec);
          const result = this.impl.sensorReadingChanged();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.SensorClientReceiver = device.mojom.SensorClientReceiver;

device.mojom.SensorClientPtr = device.mojom.SensorClientRemote;
device.mojom.SensorClientRequest = device.mojom.SensorClientPendingReceiver;

