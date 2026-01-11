// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/camera.mojom
 // Module: arc.mojom

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
 

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.cros = mojo.internal.bindings.cros || {};

mojo.internal.bindings.arc.mojom.CameraDeviceInfoSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraSupportedFormatSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraService = {};
mojo.internal.bindings.arc.mojom.CameraServiceSpec = { $ : {} };
mojo.internal.bindings.arc.mojom.CameraService.$interfaceName = 'arc.mojom.CameraService';
mojo.internal.bindings.arc.mojom.CameraService_Connect_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraService_Connect_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraService_Disconnect_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraService_Disconnect_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraService_StreamOn_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraService_StreamOn_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraService_StreamOff_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraService_StreamOff_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraService_GetNextFrameBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraService_GetNextFrameBuffer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraService_ReuseFrameBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraService_ReuseFrameBuffer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraService_GetDeviceSupportedFormats_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraService_GetDeviceSupportedFormats_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraService_GetCameraDeviceInfos_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraService_GetCameraDeviceInfos_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraHost = {};
mojo.internal.bindings.arc.mojom.CameraHostSpec = { $ : {} };
mojo.internal.bindings.arc.mojom.CameraHost.$interfaceName = 'arc.mojom.CameraHost';
mojo.internal.bindings.arc.mojom.CameraHost_StartCameraService_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraHost_StartCameraService_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraHost_RegisterCameraHalClientLegacy_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraHost_RegisterCameraHalClient_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraHost_RegisterCameraHalClient_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraInstance = {};
mojo.internal.bindings.arc.mojom.CameraInstanceSpec = { $ : {} };
mojo.internal.bindings.arc.mojom.CameraInstance.$interfaceName = 'arc.mojom.CameraInstance';
mojo.internal.bindings.arc.mojom.CameraInstance_Init_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CameraInstance_Init_ResponseParamsSpec = { $: {} };

// Struct: CameraDeviceInfo
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraDeviceInfoSpec, 'arc.mojom.CameraDeviceInfo', [
      mojo.internal.StructField('arg_device_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_usb_vid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_usb_pid', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_lens_info_available_focal_lengths', 24, 0, mojo.internal.Array(mojo.internal.Float, false), null, true, 1, undefined),
      mojo.internal.StructField('arg_lens_facing', 32, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('arg_sensor_orientation', 36, 0, mojo.internal.Int32, 0, false, 1, undefined),
      mojo.internal.StructField('arg_frames_to_skip_after_streamon', 40, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('arg_horizontal_view_angle_16_9', 44, 0, mojo.internal.Float, 0, false, 1, undefined),
      mojo.internal.StructField('arg_horizontal_view_angle_4_3', 48, 0, mojo.internal.Float, 0, false, 1, undefined),
      mojo.internal.StructField('arg_lens_info_minimum_focus_distance', 52, 0, mojo.internal.Float, 0, false, 1, undefined),
      mojo.internal.StructField('arg_lens_info_optimal_focus_distance', 56, 0, mojo.internal.Float, 0, false, 1, undefined),
      mojo.internal.StructField('arg_vertical_view_angle_16_9', 60, 0, mojo.internal.Float, 0, false, 1, undefined),
      mojo.internal.StructField('arg_vertical_view_angle_4_3', 64, 0, mojo.internal.Float, 0, false, 1, undefined),
    ],
    [[0, 32], [1, 80]]);

// Struct: CameraSupportedFormat
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraSupportedFormatSpec, 'arc.mojom.CameraSupportedFormat', [
      mojo.internal.StructField('arg_frameRates', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_width', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fourcc', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: CameraService
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraService_Connect_ParamsSpec, 'arc.mojom.CameraService_Connect_Params', [
      mojo.internal.StructField('arg_device_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraService_Connect_ResponseParamsSpec, 'arc.mojom.CameraService_Connect_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraService_Disconnect_ParamsSpec, 'arc.mojom.CameraService_Disconnect_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraService_Disconnect_ResponseParamsSpec, 'arc.mojom.CameraService_Disconnect_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraService_StreamOn_ParamsSpec, 'arc.mojom.CameraService_StreamOn_Params', [
      mojo.internal.StructField('arg_width', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pixel_format', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_frame_rate', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraService_StreamOn_ResponseParamsSpec, 'arc.mojom.CameraService_StreamOn_ResponseParams', [
      mojo.internal.StructField('arg_fds', 0, 0, mojo.internal.Array(mojo.internal.Handle, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_result', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraService_StreamOff_ParamsSpec, 'arc.mojom.CameraService_StreamOff_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraService_StreamOff_ResponseParamsSpec, 'arc.mojom.CameraService_StreamOff_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraService_GetNextFrameBuffer_ParamsSpec, 'arc.mojom.CameraService_GetNextFrameBuffer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraService_GetNextFrameBuffer_ResponseParamsSpec, 'arc.mojom.CameraService_GetNextFrameBuffer_ResponseParams', [
      mojo.internal.StructField('arg_buffer_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_data_size', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraService_ReuseFrameBuffer_ParamsSpec, 'arc.mojom.CameraService_ReuseFrameBuffer_Params', [
      mojo.internal.StructField('arg_buffer_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraService_ReuseFrameBuffer_ResponseParamsSpec, 'arc.mojom.CameraService_ReuseFrameBuffer_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraService_GetDeviceSupportedFormats_ParamsSpec, 'arc.mojom.CameraService_GetDeviceSupportedFormats_Params', [
      mojo.internal.StructField('arg_device_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraService_GetDeviceSupportedFormats_ResponseParamsSpec, 'arc.mojom.CameraService_GetDeviceSupportedFormats_ResponseParams', [
      mojo.internal.StructField('arg_supported_formats', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.CameraSupportedFormatSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraService_GetCameraDeviceInfos_ParamsSpec, 'arc.mojom.CameraService_GetCameraDeviceInfos_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraService_GetCameraDeviceInfos_ResponseParamsSpec, 'arc.mojom.CameraService_GetCameraDeviceInfos_ResponseParams', [
      mojo.internal.StructField('arg_device_infos', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.CameraDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.CameraServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.CameraServiceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CameraService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.CameraServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.CameraServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  connect(arg_device_path) {
    return this.$.connect(arg_device_path);
  }
  disconnect() {
    return this.$.disconnect();
  }
  streamOn(arg_width, arg_height, arg_pixel_format, arg_frame_rate) {
    return this.$.streamOn(arg_width, arg_height, arg_pixel_format, arg_frame_rate);
  }
  streamOff() {
    return this.$.streamOff();
  }
  getNextFrameBuffer() {
    return this.$.getNextFrameBuffer();
  }
  reuseFrameBuffer(arg_buffer_id) {
    return this.$.reuseFrameBuffer(arg_buffer_id);
  }
  getDeviceSupportedFormats(arg_device_path) {
    return this.$.getDeviceSupportedFormats(arg_device_path);
  }
  getCameraDeviceInfos() {
    return this.$.getCameraDeviceInfos();
  }
};

mojo.internal.bindings.arc.mojom.CameraServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('arc.mojom.CameraService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
    ]);
  }

  connect(arg_device_path) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.CameraService_Connect_ParamsSpec,
      mojo.internal.bindings.arc.mojom.CameraService_Connect_ResponseParamsSpec,
      [arg_device_path],
      false);
  }

  disconnect() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.CameraService_Disconnect_ParamsSpec,
      mojo.internal.bindings.arc.mojom.CameraService_Disconnect_ResponseParamsSpec,
      [],
      false);
  }

  streamOn(arg_width, arg_height, arg_pixel_format, arg_frame_rate) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.CameraService_StreamOn_ParamsSpec,
      mojo.internal.bindings.arc.mojom.CameraService_StreamOn_ResponseParamsSpec,
      [arg_width, arg_height, arg_pixel_format, arg_frame_rate],
      false);
  }

  streamOff() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.CameraService_StreamOff_ParamsSpec,
      mojo.internal.bindings.arc.mojom.CameraService_StreamOff_ResponseParamsSpec,
      [],
      false);
  }

  getNextFrameBuffer() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.CameraService_GetNextFrameBuffer_ParamsSpec,
      mojo.internal.bindings.arc.mojom.CameraService_GetNextFrameBuffer_ResponseParamsSpec,
      [],
      false);
  }

  reuseFrameBuffer(arg_buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.CameraService_ReuseFrameBuffer_ParamsSpec,
      mojo.internal.bindings.arc.mojom.CameraService_ReuseFrameBuffer_ResponseParamsSpec,
      [arg_buffer_id],
      false);
  }

  getDeviceSupportedFormats(arg_device_path) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.CameraService_GetDeviceSupportedFormats_ParamsSpec,
      mojo.internal.bindings.arc.mojom.CameraService_GetDeviceSupportedFormats_ResponseParamsSpec,
      [arg_device_path],
      false);
  }

  getCameraDeviceInfos() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.arc.mojom.CameraService_GetCameraDeviceInfos_ParamsSpec,
      mojo.internal.bindings.arc.mojom.CameraService_GetCameraDeviceInfos_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.arc.mojom.CameraService.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.CameraServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CameraService',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.CameraServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('arc.mojom.CameraService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
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
        
        // Try Method 0: Connect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraService_Connect_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Connect (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Disconnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraService_Disconnect_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Disconnect (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StreamOn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraService_StreamOn_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StreamOn (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: StreamOff
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraService_StreamOff_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StreamOff (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetNextFrameBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraService_GetNextFrameBuffer_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNextFrameBuffer (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ReuseFrameBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraService_ReuseFrameBuffer_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReuseFrameBuffer (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetDeviceSupportedFormats
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraService_GetDeviceSupportedFormats_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceSupportedFormats (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetCameraDeviceInfos
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraService_GetCameraDeviceInfos_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCameraDeviceInfos (7)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraService_Connect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.arg_device_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.CameraService_Connect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Connect FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraService_Disconnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disconnect');
          const result = this.impl.disconnect();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.CameraService_Disconnect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Disconnect FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraService_StreamOn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.streamOn');
          const result = this.impl.streamOn(params.arg_width, params.arg_height, params.arg_pixel_format, params.arg_frame_rate);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.CameraService_StreamOn_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StreamOn FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraService_StreamOff_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.streamOff');
          const result = this.impl.streamOff();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.CameraService_StreamOff_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StreamOff FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraService_GetNextFrameBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNextFrameBuffer');
          const result = this.impl.getNextFrameBuffer();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.CameraService_GetNextFrameBuffer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetNextFrameBuffer FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraService_ReuseFrameBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reuseFrameBuffer');
          const result = this.impl.reuseFrameBuffer(params.arg_buffer_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.CameraService_ReuseFrameBuffer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReuseFrameBuffer FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraService_GetDeviceSupportedFormats_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceSupportedFormats');
          const result = this.impl.getDeviceSupportedFormats(params.arg_device_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.CameraService_GetDeviceSupportedFormats_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDeviceSupportedFormats FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraService_GetCameraDeviceInfos_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCameraDeviceInfos');
          const result = this.impl.getCameraDeviceInfos();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.CameraService_GetCameraDeviceInfos_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCameraDeviceInfos FAILED:', e));
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

mojo.internal.bindings.arc.mojom.CameraServiceReceiver = mojo.internal.bindings.arc.mojom.CameraServiceReceiver;

mojo.internal.bindings.arc.mojom.CameraServicePtr = mojo.internal.bindings.arc.mojom.CameraServiceRemote;
mojo.internal.bindings.arc.mojom.CameraServiceRequest = mojo.internal.bindings.arc.mojom.CameraServicePendingReceiver;


// Interface: CameraHost
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraHost_StartCameraService_ParamsSpec, 'arc.mojom.CameraHost_StartCameraService_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraHost_StartCameraService_ResponseParamsSpec, 'arc.mojom.CameraHost_StartCameraService_ResponseParams', [
      mojo.internal.StructField('arg_service', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.CameraServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraHost_RegisterCameraHalClientLegacy_ParamsSpec, 'arc.mojom.CameraHost_RegisterCameraHalClientLegacy_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.cros.mojom.CameraHalClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraHost_RegisterCameraHalClient_ParamsSpec, 'arc.mojom.CameraHost_RegisterCameraHalClient_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.cros.mojom.CameraHalClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraHost_RegisterCameraHalClient_ResponseParamsSpec, 'arc.mojom.CameraHost_RegisterCameraHalClient_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.CameraHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.CameraHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CameraHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.CameraHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.CameraHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startCameraService() {
    return this.$.startCameraService();
  }
  registerCameraHalClientLegacy(arg_client) {
    return this.$.registerCameraHalClientLegacy(arg_client);
  }
  registerCameraHalClient(arg_client) {
    return this.$.registerCameraHalClient(arg_client);
  }
};

mojo.internal.bindings.arc.mojom.CameraHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('arc.mojom.CameraHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  startCameraService() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.CameraHost_StartCameraService_ParamsSpec,
      mojo.internal.bindings.arc.mojom.CameraHost_StartCameraService_ResponseParamsSpec,
      [],
      false);
  }

  registerCameraHalClientLegacy(arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.CameraHost_RegisterCameraHalClientLegacy_ParamsSpec,
      null,
      [arg_client],
      false);
  }

  registerCameraHalClient(arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.CameraHost_RegisterCameraHalClient_ParamsSpec,
      mojo.internal.bindings.arc.mojom.CameraHost_RegisterCameraHalClient_ResponseParamsSpec,
      [arg_client],
      false);
  }

};

mojo.internal.bindings.arc.mojom.CameraHost.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.CameraHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CameraHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.CameraHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('arc.mojom.CameraHost', [
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
        
        // Try Method 0: StartCameraService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraHost_StartCameraService_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartCameraService (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RegisterCameraHalClientLegacy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraHost_RegisterCameraHalClientLegacy_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterCameraHalClientLegacy (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RegisterCameraHalClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraHost_RegisterCameraHalClient_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterCameraHalClient (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraHost_StartCameraService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startCameraService');
          const result = this.impl.startCameraService();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.CameraHost_StartCameraService_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartCameraService FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraHost_RegisterCameraHalClientLegacy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerCameraHalClientLegacy');
          const result = this.impl.registerCameraHalClientLegacy(params.arg_client);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraHost_RegisterCameraHalClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerCameraHalClient');
          const result = this.impl.registerCameraHalClient(params.arg_client);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.CameraHost_RegisterCameraHalClient_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RegisterCameraHalClient FAILED:', e));
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

mojo.internal.bindings.arc.mojom.CameraHostReceiver = mojo.internal.bindings.arc.mojom.CameraHostReceiver;

mojo.internal.bindings.arc.mojom.CameraHostPtr = mojo.internal.bindings.arc.mojom.CameraHostRemote;
mojo.internal.bindings.arc.mojom.CameraHostRequest = mojo.internal.bindings.arc.mojom.CameraHostPendingReceiver;


// Interface: CameraInstance
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraInstance_Init_ParamsSpec, 'arc.mojom.CameraInstance_Init_Params', [
      mojo.internal.StructField('arg_host_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.CameraHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CameraInstance_Init_ResponseParamsSpec, 'arc.mojom.CameraInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.arc.mojom.CameraInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.CameraInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CameraInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.CameraInstancePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.CameraInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(arg_host_remote) {
    return this.$.init(arg_host_remote);
  }
};

mojo.internal.bindings.arc.mojom.CameraInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('arc.mojom.CameraInstance', [
      { explicit: 0 },
    ]);
  }

  init(arg_host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.CameraInstance_Init_ParamsSpec,
      mojo.internal.bindings.arc.mojom.CameraInstance_Init_ResponseParamsSpec,
      [arg_host_remote],
      false);
  }

};

mojo.internal.bindings.arc.mojom.CameraInstance.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.CameraInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CameraInstance',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.CameraInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('arc.mojom.CameraInstance', [
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
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraInstance_Init_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CameraInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.arg_host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.CameraInstance_Init_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Init FAILED:', e));
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

mojo.internal.bindings.arc.mojom.CameraInstanceReceiver = mojo.internal.bindings.arc.mojom.CameraInstanceReceiver;

mojo.internal.bindings.arc.mojom.CameraInstancePtr = mojo.internal.bindings.arc.mojom.CameraInstanceRemote;
mojo.internal.bindings.arc.mojom.CameraInstanceRequest = mojo.internal.bindings.arc.mojom.CameraInstancePendingReceiver;

