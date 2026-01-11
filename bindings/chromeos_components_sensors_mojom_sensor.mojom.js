// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/components/sensors/mojom/sensor.mojom
 // Module: chromeos.sensors.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.sensors = mojo.internal.bindings.chromeos.sensors || {};
mojo.internal.bindings.chromeos.sensors.mojom = mojo.internal.bindings.chromeos.sensors.mojom || {};

mojo.internal.bindings.chromeos.sensors.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.sensors.mojom.ObserverErrorTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceDisconnectReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceDisconnectReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.sensors.mojom.SensorService = {};
mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceSpec = { $ : {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorService.$interfaceName = 'chromeos.sensors.mojom.SensorService';
mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetDeviceIds_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetDeviceIds_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetDevice_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice = {};
mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSpec = { $ : {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice.$interfaceName = 'chromeos.sensors.mojom.SensorDevice';
mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_SetTimeout_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetAttributes_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetAttributes_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_SetFrequency_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_SetFrequency_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_StartReadingSamples_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_StopReadingSamples_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserver = {};
mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserverSpec = { $ : {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserver.$interfaceName = 'chromeos.sensors.mojom.SensorDeviceSamplesObserver';
mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnSampleUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnErrorOccurred_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserver = {};
mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserverSpec = { $ : {} };
mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserver.$interfaceName = 'chromeos.sensors.mojom.SensorServiceNewDevicesObserver';
mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserver_OnNewDeviceAdded_ParamsSpec = { $: {} };

mojo.internal.bindings.chromeos.sensors.mojom.kScale = "scale";

mojo.internal.bindings.chromeos.sensors.mojom.kSamplingFrequencyAvailable = "sampling_frequency_available";

mojo.internal.bindings.chromeos.sensors.mojom.kLocation = "location";

mojo.internal.bindings.chromeos.sensors.mojom.kLabel = "label";

mojo.internal.bindings.chromeos.sensors.mojom.kDeviceName = "name";

mojo.internal.bindings.chromeos.sensors.mojom.kSysPath = "syspath";

mojo.internal.bindings.chromeos.sensors.mojom.kDevlink = "devlink";

mojo.internal.bindings.chromeos.sensors.mojom.kLocationBase = "base";

mojo.internal.bindings.chromeos.sensors.mojom.kLocationLid = "lid";

mojo.internal.bindings.chromeos.sensors.mojom.kLocationCamera = "camera";

mojo.internal.bindings.chromeos.sensors.mojom.kLabelBase = "accel-base";

mojo.internal.bindings.chromeos.sensors.mojom.kLabelLid = "accel-display";

mojo.internal.bindings.chromeos.sensors.mojom.kAccelerometerChannel = "accel";

mojo.internal.bindings.chromeos.sensors.mojom.kGyroscopeChannel = "anglvel";

mojo.internal.bindings.chromeos.sensors.mojom.kMagnetometerChannel = "magn";

mojo.internal.bindings.chromeos.sensors.mojom.kGravityChannel = "gravity";

mojo.internal.bindings.chromeos.sensors.mojom.kLightChannel = "illuminance";

mojo.internal.bindings.chromeos.sensors.mojom.kPressureChannel = "pressure";

mojo.internal.bindings.chromeos.sensors.mojom.kTimestampChannel = "timestamp";

// Enum: DeviceType
mojo.internal.bindings.chromeos.sensors.mojom.DeviceType = {
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
mojo.internal.bindings.chromeos.sensors.mojom.ObserverErrorType = {
  ALREADY_STARTED: 0,
  SET_FREQUENCY_IO_FAILED: 1,
  FREQUENCY_INVALID: 2,
  NO_ENABLED_CHANNELS: 3,
  GET_FD_FAILED: 4,
  READ_FAILED: 5,
  READ_TIMEOUT: 6,
};

// Enum: SensorServiceDisconnectReason
mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceDisconnectReason = {
  IIOSERVICE_CRASHED: 0,
  IIOSERVICE_SHUTDOWN: 1,
  CHROME_STOPPED: 2,
};

// Enum: SensorDeviceDisconnectReason
mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceDisconnectReason = {
  IIOSERVICE_CRASHED: 0,
  DEVICE_REMOVED: 1,
};

// Interface: SensorService
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetDeviceIds_ParamsSpec, 'chromeos.sensors.mojom.SensorService_GetDeviceIds_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.chromeos.sensors.mojom.DeviceTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetDeviceIds_ResponseParamsSpec, 'chromeos.sensors.mojom.SensorService_GetDeviceIds_ResponseParams', [
      mojo.internal.StructField('arg_iio_device_ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ParamsSpec, 'chromeos.sensors.mojom.SensorService_GetAllDeviceIds_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ResponseParamsSpec, 'chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ResponseParams', [
      mojo.internal.StructField('arg_iio_device_ids_types', 0, 0, mojo.internal.Map(mojo.internal.Int32, mojo.internal.Array(mojo.internal.bindings.chromeos.sensors.mojom.DeviceTypeSpec.$, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetDevice_ParamsSpec, 'chromeos.sensors.mojom.SensorService_GetDevice_Params', [
      mojo.internal.StructField('arg_device_request', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_iio_device_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.chromeos.sensors.mojom.SensorServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.sensors.mojom.SensorServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDeviceIds(arg_type) {
    return this.$.getDeviceIds(arg_type);
  }
  getAllDeviceIds() {
    return this.$.getAllDeviceIds();
  }
  getDevice(arg_iio_device_id, arg_device_request) {
    return this.$.getDevice(arg_iio_device_id, arg_device_request);
  }
};

mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chromeos.sensors.mojom.SensorService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  getDeviceIds(arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetDeviceIds_ParamsSpec,
      mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetDeviceIds_ResponseParamsSpec,
      [arg_type],
      false);
  }

  getAllDeviceIds() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ParamsSpec,
      mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ResponseParamsSpec,
      [],
      false);
  }

  getDevice(arg_iio_device_id, arg_device_request) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetDevice_ParamsSpec,
      null,
      [arg_iio_device_id, arg_device_request],
      false);
  }

};

mojo.internal.bindings.chromeos.sensors.mojom.SensorService.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorService',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chromeos.sensors.mojom.SensorService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetDeviceIds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetDeviceIds_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceIds (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetAllDeviceIds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllDeviceIds (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetDevice_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDevice (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetDeviceIds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceIds');
          const result = this.impl.getDeviceIds(params.arg_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetDeviceIds_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDeviceIds FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllDeviceIds');
          const result = this.impl.getAllDeviceIds();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAllDeviceIds FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorService_GetDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDevice');
          const result = this.impl.getDevice(params.arg_iio_device_id, params.arg_device_request);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceReceiver = mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceReceiver;

mojo.internal.bindings.chromeos.sensors.mojom.SensorServicePtr = mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceRemote;
mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceRequest = mojo.internal.bindings.chromeos.sensors.mojom.SensorServicePendingReceiver;


// Interface: SensorDevice
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_SetTimeout_ParamsSpec, 'chromeos.sensors.mojom.SensorDevice_SetTimeout_Params', [
      mojo.internal.StructField('arg_timeout', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetAttributes_ParamsSpec, 'chromeos.sensors.mojom.SensorDevice_GetAttributes_Params', [
      mojo.internal.StructField('arg_attr_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetAttributes_ResponseParamsSpec, 'chromeos.sensors.mojom.SensorDevice_GetAttributes_ResponseParams', [
      mojo.internal.StructField('arg_values', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_SetFrequency_ParamsSpec, 'chromeos.sensors.mojom.SensorDevice_SetFrequency_Params', [
      mojo.internal.StructField('arg_frequency', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_SetFrequency_ResponseParamsSpec, 'chromeos.sensors.mojom.SensorDevice_SetFrequency_ResponseParams', [
      mojo.internal.StructField('arg_result_freq', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_StartReadingSamples_ParamsSpec, 'chromeos.sensors.mojom.SensorDevice_StartReadingSamples_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_StopReadingSamples_ParamsSpec, 'chromeos.sensors.mojom.SensorDevice_StopReadingSamples_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ParamsSpec, 'chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ResponseParamsSpec, 'chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ResponseParams', [
      mojo.internal.StructField('arg_iio_chn_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ParamsSpec, 'chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_Params', [
      mojo.internal.StructField('arg_iio_chn_indices', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ResponseParamsSpec, 'chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ResponseParams', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Array(mojo.internal.Bool, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ParamsSpec, 'chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_Params', [
      mojo.internal.StructField('arg_iio_chn_indices', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_attr_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ResponseParamsSpec, 'chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ResponseParams', [
      mojo.internal.StructField('arg_values', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chromeos.sensors.mojom.SensorDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.sensors.mojom.SensorDevicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setTimeout(arg_timeout) {
    return this.$.setTimeout(arg_timeout);
  }
  getAttributes(arg_attr_names) {
    return this.$.getAttributes(arg_attr_names);
  }
  setFrequency(arg_frequency) {
    return this.$.setFrequency(arg_frequency);
  }
  startReadingSamples(arg_observer) {
    return this.$.startReadingSamples(arg_observer);
  }
  stopReadingSamples() {
    return this.$.stopReadingSamples();
  }
  getAllChannelIds() {
    return this.$.getAllChannelIds();
  }
  getChannelsEnabled(arg_iio_chn_indices) {
    return this.$.getChannelsEnabled(arg_iio_chn_indices);
  }
  getChannelsAttributes(arg_iio_chn_indices, arg_attr_name) {
    return this.$.getChannelsAttributes(arg_iio_chn_indices, arg_attr_name);
  }
};

mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chromeos.sensors.mojom.SensorDevice', [
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

  setTimeout(arg_timeout) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_SetTimeout_ParamsSpec,
      null,
      [arg_timeout],
      false);
  }

  getAttributes(arg_attr_names) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetAttributes_ParamsSpec,
      mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetAttributes_ResponseParamsSpec,
      [arg_attr_names],
      false);
  }

  setFrequency(arg_frequency) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_SetFrequency_ParamsSpec,
      mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_SetFrequency_ResponseParamsSpec,
      [arg_frequency],
      false);
  }

  startReadingSamples(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_StartReadingSamples_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  stopReadingSamples() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_StopReadingSamples_ParamsSpec,
      null,
      [],
      false);
  }

  getAllChannelIds() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ParamsSpec,
      mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ResponseParamsSpec,
      [],
      false);
  }

  getChannelsEnabled(arg_iio_chn_indices) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ParamsSpec,
      mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ResponseParamsSpec,
      [arg_iio_chn_indices],
      false);
  }

  getChannelsAttributes(arg_iio_chn_indices, arg_attr_name) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ParamsSpec,
      mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ResponseParamsSpec,
      [arg_iio_chn_indices, arg_attr_name],
      false);
  }

};

mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorDevice',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chromeos.sensors.mojom.SensorDevice', [
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetTimeout
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_SetTimeout_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTimeout (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetAttributes
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetAttributes_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAttributes (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetFrequency
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_SetFrequency_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFrequency (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: StartReadingSamples
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_StartReadingSamples_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartReadingSamples (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: StopReadingSamples
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_StopReadingSamples_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopReadingSamples (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetAllChannelIds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllChannelIds (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetChannelsEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetChannelsEnabled (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetChannelsAttributes
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetChannelsAttributes (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_SetTimeout_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTimeout');
          const result = this.impl.setTimeout(params.arg_timeout);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetAttributes_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAttributes');
          const result = this.impl.getAttributes(params.arg_attr_names);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetAttributes_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAttributes FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_SetFrequency_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFrequency');
          const result = this.impl.setFrequency(params.arg_frequency);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_SetFrequency_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetFrequency FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_StartReadingSamples_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startReadingSamples');
          const result = this.impl.startReadingSamples(params.arg_observer);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_StopReadingSamples_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopReadingSamples');
          const result = this.impl.stopReadingSamples();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllChannelIds');
          const result = this.impl.getAllChannelIds();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAllChannelIds FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getChannelsEnabled');
          const result = this.impl.getChannelsEnabled(params.arg_iio_chn_indices);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetChannelsEnabled FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getChannelsAttributes');
          const result = this.impl.getChannelsAttributes(params.arg_iio_chn_indices, params.arg_attr_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetChannelsAttributes FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceReceiver = mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceReceiver;

mojo.internal.bindings.chromeos.sensors.mojom.SensorDevicePtr = mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceRemote;
mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceRequest = mojo.internal.bindings.chromeos.sensors.mojom.SensorDevicePendingReceiver;


// Interface: SensorDeviceSamplesObserver
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnSampleUpdated_ParamsSpec, 'chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnSampleUpdated_Params', [
      mojo.internal.StructField('arg_sample', 0, 0, mojo.internal.Map(mojo.internal.Int32, mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnErrorOccurred_ParamsSpec, 'chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnErrorOccurred_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.chromeos.sensors.mojom.ObserverErrorTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorDeviceSamplesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSampleUpdated(arg_sample) {
    return this.$.onSampleUpdated(arg_sample);
  }
  onErrorOccurred(arg_type) {
    return this.$.onErrorOccurred(arg_type);
  }
};

mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chromeos.sensors.mojom.SensorDeviceSamplesObserver', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onSampleUpdated(arg_sample) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnSampleUpdated_ParamsSpec,
      null,
      [arg_sample],
      false);
  }

  onErrorOccurred(arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnErrorOccurred_ParamsSpec,
      null,
      [arg_type],
      false);
  }

};

mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorDeviceSamplesObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chromeos.sensors.mojom.SensorDeviceSamplesObserver', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnSampleUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnSampleUpdated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSampleUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnErrorOccurred
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnErrorOccurred_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnErrorOccurred (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnSampleUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSampleUpdated');
          const result = this.impl.onSampleUpdated(params.arg_sample);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnErrorOccurred_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onErrorOccurred');
          const result = this.impl.onErrorOccurred(params.arg_type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserverReceiver = mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserverReceiver;

mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserverPtr = mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserverRemote;
mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserverRequest = mojo.internal.bindings.chromeos.sensors.mojom.SensorDeviceSamplesObserverPendingReceiver;


// Interface: SensorServiceNewDevicesObserver
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserver_OnNewDeviceAdded_ParamsSpec, 'chromeos.sensors.mojom.SensorServiceNewDevicesObserver_OnNewDeviceAdded_Params', [
      mojo.internal.StructField('arg_types', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.sensors.mojom.DeviceTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_iio_device_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorServiceNewDevicesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onNewDeviceAdded(arg_iio_device_id, arg_types) {
    return this.$.onNewDeviceAdded(arg_iio_device_id, arg_types);
  }
};

mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chromeos.sensors.mojom.SensorServiceNewDevicesObserver', [
      { explicit: 0 },
    ]);
  }

  onNewDeviceAdded(arg_iio_device_id, arg_types) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserver_OnNewDeviceAdded_ParamsSpec,
      null,
      [arg_iio_device_id, arg_types],
      false);
  }

};

mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorServiceNewDevicesObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chromeos.sensors.mojom.SensorServiceNewDevicesObserver', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnNewDeviceAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserver_OnNewDeviceAdded_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewDeviceAdded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserver_OnNewDeviceAdded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNewDeviceAdded');
          const result = this.impl.onNewDeviceAdded(params.arg_iio_device_id, params.arg_types);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserverReceiver = mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserverReceiver;

mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserverPtr = mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserverRemote;
mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserverRequest = mojo.internal.bindings.chromeos.sensors.mojom.SensorServiceNewDevicesObserverPendingReceiver;

