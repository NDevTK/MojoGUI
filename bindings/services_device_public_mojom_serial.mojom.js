// Auto-generated MojoJS binding
 // Source: chromium_src/services/device/public/mojom/serial.mojom
 // Module: device.mojom

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

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
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
 

 mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.bluetooth = mojo.internal.bindings.bluetooth || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.device.mojom.SerialSendErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.SerialReceiveErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.SerialDataBitsSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.SerialParityBitSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.SerialStopBitsSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.SerialPortFlushModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.SerialPortTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.SerialPortInfoSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialConnectionOptionsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialConnectionInfoSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialHostControlSignalsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPortControlSignalsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPortManager = {};
mojo.internal.bindings.device.mojom.SerialPortManager.$interfaceName = 'device.mojom.SerialPortManager';
mojo.internal.bindings.device.mojom.SerialPortManager_SetClient_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPortManager_GetDevices_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPortManager_GetDevices_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPortManager_OpenPort_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPortManager_OpenPort_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPortManagerClient = {};
mojo.internal.bindings.device.mojom.SerialPortManagerClient.$interfaceName = 'device.mojom.SerialPortManagerClient';
mojo.internal.bindings.device.mojom.SerialPortManagerClient_OnPortAdded_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPortManagerClient_OnPortRemoved_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPortManagerClient_OnPortConnectedStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPort = {};
mojo.internal.bindings.device.mojom.SerialPort.$interfaceName = 'device.mojom.SerialPort';
mojo.internal.bindings.device.mojom.SerialPort_StartWriting_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPort_StartReading_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPort_Flush_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPort_Flush_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPort_Drain_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPort_Drain_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPort_GetControlSignals_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPort_GetControlSignals_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPort_SetControlSignals_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPort_SetControlSignals_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPort_ConfigurePort_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPort_ConfigurePort_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPort_GetPortInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPort_GetPortInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPort_Close_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPort_Close_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPortClient = {};
mojo.internal.bindings.device.mojom.SerialPortClient.$interfaceName = 'device.mojom.SerialPortClient';
mojo.internal.bindings.device.mojom.SerialPortClient_OnReadError_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPortClient_OnSendError_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SerialPortConnectionWatcher = {};
mojo.internal.bindings.device.mojom.SerialPortConnectionWatcher.$interfaceName = 'device.mojom.SerialPortConnectionWatcher';

// Enum: SerialSendError
mojo.internal.bindings.device.mojom.SerialSendError = {
  NONE: 0,
  DISCONNECTED: 1,
  SYSTEM_ERROR: 2,
};

// Enum: SerialReceiveError
mojo.internal.bindings.device.mojom.SerialReceiveError = {
  NONE: 0,
  DISCONNECTED: 1,
  DEVICE_LOST: 2,
  BREAK: 3,
  FRAME_ERROR: 4,
  OVERRUN: 5,
  BUFFER_OVERFLOW: 6,
  PARITY_ERROR: 7,
  SYSTEM_ERROR: 8,
};

// Enum: SerialDataBits
mojo.internal.bindings.device.mojom.SerialDataBits = {
  NONE: 0,
  SEVEN: 1,
  EIGHT: 2,
};

// Enum: SerialParityBit
mojo.internal.bindings.device.mojom.SerialParityBit = {
  NONE: 0,
  NO_PARITY: 1,
  ODD: 2,
  EVEN: 3,
};

// Enum: SerialStopBits
mojo.internal.bindings.device.mojom.SerialStopBits = {
  NONE: 0,
  ONE: 1,
  TWO: 2,
};

// Enum: SerialPortFlushMode
mojo.internal.bindings.device.mojom.SerialPortFlushMode = {
  kReceiveAndTransmit: 0,
  kReceive: 1,
  kTransmit: 2,
};

// Enum: SerialPortType
mojo.internal.bindings.device.mojom.SerialPortType = {
  PLATFORM_SERIAL: 0,
  BLUETOOTH_CLASSIC_RFCOMM: 1,
};

// Struct: SerialPortInfo
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPortInfoSpec, 'device.mojom.SerialPortInfo', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_path', 8, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 16, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SerialPortTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_alternate_path', 24, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_usb_driver_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_device_instance_id', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_bluetooth_service_class_id', 48, 0, mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_display_name', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_serial_number', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_vendor_id', 72, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_product_id', 74, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_vendor_id', 76, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_product_id', 76, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_connected', 76, 2, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: SerialConnectionOptions
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialConnectionOptionsSpec, 'device.mojom.SerialConnectionOptions', [
      mojo.internal.StructField('arg_data_bits', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SerialDataBitsSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_parity_bit', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SerialParityBitSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_stop_bits', 16, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SerialStopBitsSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bitrate', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_cts_flow_control', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_cts_flow_control', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SerialConnectionInfo
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialConnectionInfoSpec, 'device.mojom.SerialConnectionInfo', [
      mojo.internal.StructField('arg_data_bits', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SerialDataBitsSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_parity_bit', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SerialParityBitSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_stop_bits', 16, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SerialStopBitsSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bitrate', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_cts_flow_control', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SerialHostControlSignals
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialHostControlSignalsSpec, 'device.mojom.SerialHostControlSignals', [
      mojo.internal.StructField('arg_dtr', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_dtr', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_rts', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_rts', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_brk', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_brk', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SerialPortControlSignals
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPortControlSignalsSpec, 'device.mojom.SerialPortControlSignals', [
      mojo.internal.StructField('arg_dcd', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_cts', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ri', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_dsr', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: SerialPortManager
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPortManager_SetClient_ParamsSpec, 'device.mojom.SerialPortManager_SetClient_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.SerialPortManagerClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPortManager_GetDevices_ParamsSpec, 'device.mojom.SerialPortManager_GetDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPortManager_GetDevices_ResponseParamsSpec, 'device.mojom.SerialPortManager_GetDevices_ResponseParams', [
      mojo.internal.StructField('arg_devices', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.SerialPortInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPortManager_OpenPort_ParamsSpec, 'device.mojom.SerialPortManager_OpenPort_Params', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SerialConnectionOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.SerialPortClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_watcher', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.SerialPortConnectionWatcherSpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_use_alternate_path', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPortManager_OpenPort_ResponseParamsSpec, 'device.mojom.SerialPortManager_OpenPort_ResponseParams', [
      mojo.internal.StructField('arg_port', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.SerialPortSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.SerialPortManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.SerialPortManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SerialPortManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.SerialPortManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.SerialPortManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setClient(arg_client) {
    return this.$.setClient(arg_client);
  }
  getDevices() {
    return this.$.getDevices();
  }
  openPort(arg_token, arg_use_alternate_path, arg_options, arg_client, arg_watcher) {
    return this.$.openPort(arg_token, arg_use_alternate_path, arg_options, arg_client, arg_watcher);
  }
};

mojo.internal.bindings.device.mojom.SerialPortManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SerialPortManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setClient(arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.SerialPortManager_SetClient_ParamsSpec,
      null,
      [arg_client],
      false);
  }

  getDevices() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.SerialPortManager_GetDevices_ParamsSpec,
      mojo.internal.bindings.device.mojom.SerialPortManager_GetDevices_ResponseParamsSpec,
      [],
      false);
  }

  openPort(arg_token, arg_use_alternate_path, arg_options, arg_client, arg_watcher) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.SerialPortManager_OpenPort_ParamsSpec,
      mojo.internal.bindings.device.mojom.SerialPortManager_OpenPort_ResponseParamsSpec,
      [arg_token, arg_use_alternate_path, arg_options, arg_client, arg_watcher],
      false);
  }

};

mojo.internal.bindings.device.mojom.SerialPortManager.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.SerialPortManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SerialPortManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.SerialPortManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SerialPortManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: SetClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPortManager_SetClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPortManager_GetDevices_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDevices (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OpenPort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPortManager_OpenPort_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenPort (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPortManager_SetClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setClient');
          const result = this.impl.setClient(params.arg_client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPortManager_GetDevices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDevices');
          const result = this.impl.getDevices();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SerialPortManager_GetDevices_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDevices FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPortManager_OpenPort_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openPort');
          const result = this.impl.openPort(params.arg_token, params.arg_use_alternate_path, params.arg_options, params.arg_client, params.arg_watcher);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SerialPortManager_OpenPort_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenPort FAILED:', e));
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

mojo.internal.bindings.device.mojom.SerialPortManagerReceiver = mojo.internal.bindings.device.mojom.SerialPortManagerReceiver;

mojo.internal.bindings.device.mojom.SerialPortManagerPtr = mojo.internal.bindings.device.mojom.SerialPortManagerRemote;
mojo.internal.bindings.device.mojom.SerialPortManagerRequest = mojo.internal.bindings.device.mojom.SerialPortManagerPendingReceiver;


// Interface: SerialPortManagerClient
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPortManagerClient_OnPortAdded_ParamsSpec, 'device.mojom.SerialPortManagerClient_OnPortAdded_Params', [
      mojo.internal.StructField('arg_port_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SerialPortInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPortManagerClient_OnPortRemoved_ParamsSpec, 'device.mojom.SerialPortManagerClient_OnPortRemoved_Params', [
      mojo.internal.StructField('arg_port_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SerialPortInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPortManagerClient_OnPortConnectedStateChanged_ParamsSpec, 'device.mojom.SerialPortManagerClient_OnPortConnectedStateChanged_Params', [
      mojo.internal.StructField('arg_port_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SerialPortInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.SerialPortManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.SerialPortManagerClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SerialPortManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.SerialPortManagerClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.SerialPortManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPortAdded(arg_port_info) {
    return this.$.onPortAdded(arg_port_info);
  }
  onPortRemoved(arg_port_info) {
    return this.$.onPortRemoved(arg_port_info);
  }
  onPortConnectedStateChanged(arg_port_info) {
    return this.$.onPortConnectedStateChanged(arg_port_info);
  }
};

mojo.internal.bindings.device.mojom.SerialPortManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SerialPortManagerClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onPortAdded(arg_port_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.SerialPortManagerClient_OnPortAdded_ParamsSpec,
      null,
      [arg_port_info],
      false);
  }

  onPortRemoved(arg_port_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.SerialPortManagerClient_OnPortRemoved_ParamsSpec,
      null,
      [arg_port_info],
      false);
  }

  onPortConnectedStateChanged(arg_port_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.SerialPortManagerClient_OnPortConnectedStateChanged_ParamsSpec,
      null,
      [arg_port_info],
      false);
  }

};

mojo.internal.bindings.device.mojom.SerialPortManagerClient.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.SerialPortManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SerialPortManagerClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.SerialPortManagerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SerialPortManagerClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: OnPortAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPortManagerClient_OnPortAdded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPortAdded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnPortRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPortManagerClient_OnPortRemoved_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPortRemoved (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnPortConnectedStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPortManagerClient_OnPortConnectedStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPortConnectedStateChanged (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPortManagerClient_OnPortAdded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPortAdded');
          const result = this.impl.onPortAdded(params.arg_port_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPortManagerClient_OnPortRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPortRemoved');
          const result = this.impl.onPortRemoved(params.arg_port_info);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPortManagerClient_OnPortConnectedStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPortConnectedStateChanged');
          const result = this.impl.onPortConnectedStateChanged(params.arg_port_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.SerialPortManagerClientReceiver = mojo.internal.bindings.device.mojom.SerialPortManagerClientReceiver;

mojo.internal.bindings.device.mojom.SerialPortManagerClientPtr = mojo.internal.bindings.device.mojom.SerialPortManagerClientRemote;
mojo.internal.bindings.device.mojom.SerialPortManagerClientRequest = mojo.internal.bindings.device.mojom.SerialPortManagerClientPendingReceiver;


// Interface: SerialPort
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPort_StartWriting_ParamsSpec, 'device.mojom.SerialPort_StartWriting_Params', [
      mojo.internal.StructField('arg_consumer', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPort_StartReading_ParamsSpec, 'device.mojom.SerialPort_StartReading_Params', [
      mojo.internal.StructField('arg_producer', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPort_Flush_ParamsSpec, 'device.mojom.SerialPort_Flush_Params', [
      mojo.internal.StructField('arg_mode', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SerialPortFlushModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPort_Flush_ResponseParamsSpec, 'device.mojom.SerialPort_Flush_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPort_Drain_ParamsSpec, 'device.mojom.SerialPort_Drain_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPort_Drain_ResponseParamsSpec, 'device.mojom.SerialPort_Drain_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPort_GetControlSignals_ParamsSpec, 'device.mojom.SerialPort_GetControlSignals_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPort_GetControlSignals_ResponseParamsSpec, 'device.mojom.SerialPort_GetControlSignals_ResponseParams', [
      mojo.internal.StructField('arg_signals', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SerialPortControlSignalsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPort_SetControlSignals_ParamsSpec, 'device.mojom.SerialPort_SetControlSignals_Params', [
      mojo.internal.StructField('arg_signals', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SerialHostControlSignalsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPort_SetControlSignals_ResponseParamsSpec, 'device.mojom.SerialPort_SetControlSignals_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPort_ConfigurePort_ParamsSpec, 'device.mojom.SerialPort_ConfigurePort_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SerialConnectionOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPort_ConfigurePort_ResponseParamsSpec, 'device.mojom.SerialPort_ConfigurePort_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPort_GetPortInfo_ParamsSpec, 'device.mojom.SerialPort_GetPortInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPort_GetPortInfo_ResponseParamsSpec, 'device.mojom.SerialPort_GetPortInfo_ResponseParams', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SerialConnectionInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPort_Close_ParamsSpec, 'device.mojom.SerialPort_Close_Params', [
      mojo.internal.StructField('arg_flush', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPort_Close_ResponseParamsSpec, 'device.mojom.SerialPort_Close_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.device.mojom.SerialPortPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.SerialPortRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SerialPort';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.SerialPortPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.SerialPortRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startWriting(arg_consumer) {
    return this.$.startWriting(arg_consumer);
  }
  startReading(arg_producer) {
    return this.$.startReading(arg_producer);
  }
  flush(arg_mode) {
    return this.$.flush(arg_mode);
  }
  drain() {
    return this.$.drain();
  }
  getControlSignals() {
    return this.$.getControlSignals();
  }
  setControlSignals(arg_signals) {
    return this.$.setControlSignals(arg_signals);
  }
  configurePort(arg_options) {
    return this.$.configurePort(arg_options);
  }
  getPortInfo() {
    return this.$.getPortInfo();
  }
  close(arg_flush) {
    return this.$.close(arg_flush);
  }
};

mojo.internal.bindings.device.mojom.SerialPortRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SerialPort', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  startWriting(arg_consumer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.SerialPort_StartWriting_ParamsSpec,
      null,
      [arg_consumer],
      false);
  }

  startReading(arg_producer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.SerialPort_StartReading_ParamsSpec,
      null,
      [arg_producer],
      false);
  }

  flush(arg_mode) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.SerialPort_Flush_ParamsSpec,
      mojo.internal.bindings.device.mojom.SerialPort_Flush_ResponseParamsSpec,
      [arg_mode],
      false);
  }

  drain() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.device.mojom.SerialPort_Drain_ParamsSpec,
      mojo.internal.bindings.device.mojom.SerialPort_Drain_ResponseParamsSpec,
      [],
      false);
  }

  getControlSignals() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.device.mojom.SerialPort_GetControlSignals_ParamsSpec,
      mojo.internal.bindings.device.mojom.SerialPort_GetControlSignals_ResponseParamsSpec,
      [],
      false);
  }

  setControlSignals(arg_signals) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.device.mojom.SerialPort_SetControlSignals_ParamsSpec,
      mojo.internal.bindings.device.mojom.SerialPort_SetControlSignals_ResponseParamsSpec,
      [arg_signals],
      false);
  }

  configurePort(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.device.mojom.SerialPort_ConfigurePort_ParamsSpec,
      mojo.internal.bindings.device.mojom.SerialPort_ConfigurePort_ResponseParamsSpec,
      [arg_options],
      false);
  }

  getPortInfo() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.device.mojom.SerialPort_GetPortInfo_ParamsSpec,
      mojo.internal.bindings.device.mojom.SerialPort_GetPortInfo_ResponseParamsSpec,
      [],
      false);
  }

  close(arg_flush) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.device.mojom.SerialPort_Close_ParamsSpec,
      mojo.internal.bindings.device.mojom.SerialPort_Close_ResponseParamsSpec,
      [arg_flush],
      false);
  }

};

mojo.internal.bindings.device.mojom.SerialPort.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.SerialPortRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SerialPort',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.SerialPortReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SerialPort', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: StartWriting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPort_StartWriting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartWriting (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StartReading
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPort_StartReading_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartReading (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Flush
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPort_Flush_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Flush (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Drain
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPort_Drain_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Drain (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetControlSignals
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPort_GetControlSignals_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetControlSignals (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetControlSignals
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPort_SetControlSignals_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetControlSignals (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ConfigurePort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPort_ConfigurePort_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfigurePort (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetPortInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPort_GetPortInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPortInfo (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: Close
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPort_Close_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Close (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPort_StartWriting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startWriting');
          const result = this.impl.startWriting(params.arg_consumer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPort_StartReading_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startReading');
          const result = this.impl.startReading(params.arg_producer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPort_Flush_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flush');
          const result = this.impl.flush(params.arg_mode);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SerialPort_Flush_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Flush FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPort_Drain_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.drain');
          const result = this.impl.drain();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SerialPort_Drain_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Drain FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPort_GetControlSignals_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getControlSignals');
          const result = this.impl.getControlSignals();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SerialPort_GetControlSignals_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetControlSignals FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPort_SetControlSignals_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setControlSignals');
          const result = this.impl.setControlSignals(params.arg_signals);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SerialPort_SetControlSignals_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetControlSignals FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPort_ConfigurePort_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.configurePort');
          const result = this.impl.configurePort(params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SerialPort_ConfigurePort_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ConfigurePort FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPort_GetPortInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPortInfo');
          const result = this.impl.getPortInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SerialPort_GetPortInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPortInfo FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPort_Close_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.close');
          const result = this.impl.close(params.arg_flush);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SerialPort_Close_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Close FAILED:', e));
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

mojo.internal.bindings.device.mojom.SerialPortReceiver = mojo.internal.bindings.device.mojom.SerialPortReceiver;

mojo.internal.bindings.device.mojom.SerialPortPtr = mojo.internal.bindings.device.mojom.SerialPortRemote;
mojo.internal.bindings.device.mojom.SerialPortRequest = mojo.internal.bindings.device.mojom.SerialPortPendingReceiver;


// Interface: SerialPortClient
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPortClient_OnReadError_ParamsSpec, 'device.mojom.SerialPortClient_OnReadError_Params', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SerialReceiveErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SerialPortClient_OnSendError_ParamsSpec, 'device.mojom.SerialPortClient_OnSendError_Params', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SerialSendErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.SerialPortClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.SerialPortClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SerialPortClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.SerialPortClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.SerialPortClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onReadError(arg_error) {
    return this.$.onReadError(arg_error);
  }
  onSendError(arg_error) {
    return this.$.onSendError(arg_error);
  }
};

mojo.internal.bindings.device.mojom.SerialPortClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SerialPortClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onReadError(arg_error) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.SerialPortClient_OnReadError_ParamsSpec,
      null,
      [arg_error],
      false);
  }

  onSendError(arg_error) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.SerialPortClient_OnSendError_ParamsSpec,
      null,
      [arg_error],
      false);
  }

};

mojo.internal.bindings.device.mojom.SerialPortClient.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.SerialPortClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SerialPortClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.SerialPortClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SerialPortClient', [
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: OnReadError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPortClient_OnReadError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReadError (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnSendError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPortClient_OnSendError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSendError (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPortClient_OnReadError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReadError');
          const result = this.impl.onReadError(params.arg_error);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SerialPortClient_OnSendError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSendError');
          const result = this.impl.onSendError(params.arg_error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.SerialPortClientReceiver = mojo.internal.bindings.device.mojom.SerialPortClientReceiver;

mojo.internal.bindings.device.mojom.SerialPortClientPtr = mojo.internal.bindings.device.mojom.SerialPortClientRemote;
mojo.internal.bindings.device.mojom.SerialPortClientRequest = mojo.internal.bindings.device.mojom.SerialPortClientPendingReceiver;


// Interface: SerialPortConnectionWatcher
mojo.internal.bindings.device.mojom.SerialPortConnectionWatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.SerialPortConnectionWatcherRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SerialPortConnectionWatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.SerialPortConnectionWatcherPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.SerialPortConnectionWatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojo.internal.bindings.device.mojom.SerialPortConnectionWatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SerialPortConnectionWatcher', [
    ]);
  }

};

mojo.internal.bindings.device.mojom.SerialPortConnectionWatcher.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.SerialPortConnectionWatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SerialPortConnectionWatcher',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.SerialPortConnectionWatcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SerialPortConnectionWatcher', [
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
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.SerialPortConnectionWatcherReceiver = mojo.internal.bindings.device.mojom.SerialPortConnectionWatcherReceiver;

mojo.internal.bindings.device.mojom.SerialPortConnectionWatcherPtr = mojo.internal.bindings.device.mojom.SerialPortConnectionWatcherRemote;
mojo.internal.bindings.device.mojom.SerialPortConnectionWatcherRequest = mojo.internal.bindings.device.mojom.SerialPortConnectionWatcherPendingReceiver;

