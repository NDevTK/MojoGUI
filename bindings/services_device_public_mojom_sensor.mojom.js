// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/sensor.mojom
// Module: device.mojom

'use strict';

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
};

device.mojom.SensorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDefaultConfiguration() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.Sensor_GetDefaultConfiguration_ParamsSpec,
      device.mojom.Sensor_GetDefaultConfiguration_ResponseParamsSpec,
      [],
      false);
  }

  addConfiguration(configuration) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.Sensor_AddConfiguration_ParamsSpec,
      device.mojom.Sensor_AddConfiguration_ResponseParamsSpec,
      [configuration],
      false);
  }

  removeConfiguration(configuration) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.Sensor_RemoveConfiguration_ParamsSpec,
      null,
      [configuration],
      false);
  }

  suspend() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.Sensor_Suspend_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.Sensor_Resume_ParamsSpec,
      null,
      [],
      false);
  }

  configureReadingChangeNotifications(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetDefaultConfiguration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.Sensor_GetDefaultConfiguration_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDefaultConfiguration (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: AddConfiguration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.Sensor_AddConfiguration_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddConfiguration (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: RemoveConfiguration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.Sensor_RemoveConfiguration_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveConfiguration (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: Suspend
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.Sensor_Suspend_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Suspend (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: Resume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.Sensor_Resume_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resume (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: ConfigureReadingChangeNotifications
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.Sensor_ConfigureReadingChangeNotifications_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfigureReadingChangeNotifications (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.Sensor_GetDefaultConfiguration_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDefaultConfiguration');
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
          const params = decoder.decodeStruct(device.mojom.Sensor_AddConfiguration_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addConfiguration');
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
          const params = decoder.decodeStruct(device.mojom.Sensor_RemoveConfiguration_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removeConfiguration');
          const result = this.impl.removeConfiguration(params.configuration);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.Sensor_Suspend_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.suspend');
          const result = this.impl.suspend();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.Sensor_Resume_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.Sensor_ConfigureReadingChangeNotifications_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.configureReadingChangeNotifications');
          const result = this.impl.configureReadingChangeNotifications(params.enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

device.mojom.SensorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  raiseError() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.SensorClient_RaiseError_ParamsSpec,
      null,
      [],
      false);
  }

  sensorReadingChanged() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: RaiseError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.SensorClient_RaiseError_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RaiseError (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: SensorReadingChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.SensorClient_SensorReadingChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SensorReadingChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.SensorClient_RaiseError_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.raiseError');
          const result = this.impl.raiseError();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.SensorClient_SensorReadingChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sensorReadingChanged');
          const result = this.impl.sensorReadingChanged();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.SensorClientReceiver = device.mojom.SensorClientReceiver;

device.mojom.SensorClientPtr = device.mojom.SensorClientRemote;
device.mojom.SensorClientRequest = device.mojom.SensorClientPendingReceiver;

