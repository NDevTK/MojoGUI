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
var arc = arc || {};
arc.mojom = arc.mojom || {};
var cros = cros || {};

arc.mojom.CameraDeviceInfoSpec = { $: {} };
arc.mojom.CameraSupportedFormatSpec = { $: {} };
arc.mojom.CameraService = {};
arc.mojom.CameraService.$interfaceName = 'arc.mojom.CameraService';
arc.mojom.CameraService_Connect_ParamsSpec = { $: {} };
arc.mojom.CameraService_Connect_ResponseParamsSpec = { $: {} };
arc.mojom.CameraService_Disconnect_ParamsSpec = { $: {} };
arc.mojom.CameraService_Disconnect_ResponseParamsSpec = { $: {} };
arc.mojom.CameraService_StreamOn_ParamsSpec = { $: {} };
arc.mojom.CameraService_StreamOn_ResponseParamsSpec = { $: {} };
arc.mojom.CameraService_StreamOff_ParamsSpec = { $: {} };
arc.mojom.CameraService_StreamOff_ResponseParamsSpec = { $: {} };
arc.mojom.CameraService_GetNextFrameBuffer_ParamsSpec = { $: {} };
arc.mojom.CameraService_GetNextFrameBuffer_ResponseParamsSpec = { $: {} };
arc.mojom.CameraService_ReuseFrameBuffer_ParamsSpec = { $: {} };
arc.mojom.CameraService_ReuseFrameBuffer_ResponseParamsSpec = { $: {} };
arc.mojom.CameraService_GetDeviceSupportedFormats_ParamsSpec = { $: {} };
arc.mojom.CameraService_GetDeviceSupportedFormats_ResponseParamsSpec = { $: {} };
arc.mojom.CameraService_GetCameraDeviceInfos_ParamsSpec = { $: {} };
arc.mojom.CameraService_GetCameraDeviceInfos_ResponseParamsSpec = { $: {} };
arc.mojom.CameraHost = {};
arc.mojom.CameraHost.$interfaceName = 'arc.mojom.CameraHost';
arc.mojom.CameraHost_StartCameraService_ParamsSpec = { $: {} };
arc.mojom.CameraHost_StartCameraService_ResponseParamsSpec = { $: {} };
arc.mojom.CameraHost_RegisterCameraHalClientLegacy_ParamsSpec = { $: {} };
arc.mojom.CameraHost_RegisterCameraHalClient_ParamsSpec = { $: {} };
arc.mojom.CameraHost_RegisterCameraHalClient_ResponseParamsSpec = { $: {} };
arc.mojom.CameraInstance = {};
arc.mojom.CameraInstance.$interfaceName = 'arc.mojom.CameraInstance';
arc.mojom.CameraInstance_Init_ParamsSpec = { $: {} };
arc.mojom.CameraInstance_Init_ResponseParamsSpec = { $: {} };

// Struct: CameraDeviceInfo
mojo.internal.Struct(
    arc.mojom.CameraDeviceInfoSpec, 'arc.mojom.CameraDeviceInfo', [
      mojo.internal.StructField('device_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('usb_vid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('usb_pid', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('lens_info_available_focal_lengths', 24, 0, mojo.internal.Array(mojo.internal.Float, false), null, true, 1, undefined),
      mojo.internal.StructField('lens_facing', 32, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('sensor_orientation', 36, 0, mojo.internal.Int32, 0, false, 1, undefined),
      mojo.internal.StructField('frames_to_skip_after_streamon', 40, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('horizontal_view_angle_16_9', 44, 0, mojo.internal.Float, 0, false, 1, undefined),
      mojo.internal.StructField('horizontal_view_angle_4_3', 48, 0, mojo.internal.Float, 0, false, 1, undefined),
      mojo.internal.StructField('lens_info_minimum_focus_distance', 52, 0, mojo.internal.Float, 0, false, 1, undefined),
      mojo.internal.StructField('lens_info_optimal_focus_distance', 56, 0, mojo.internal.Float, 0, false, 1, undefined),
      mojo.internal.StructField('vertical_view_angle_16_9', 60, 0, mojo.internal.Float, 0, false, 1, undefined),
      mojo.internal.StructField('vertical_view_angle_4_3', 64, 0, mojo.internal.Float, 0, false, 1, undefined),
    ],
    [[0, 32], [1, 80]]);

// Struct: CameraSupportedFormat
mojo.internal.Struct(
    arc.mojom.CameraSupportedFormatSpec, 'arc.mojom.CameraSupportedFormat', [
      mojo.internal.StructField('frameRates', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('width', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('fourcc', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: CameraService
mojo.internal.Struct(
    arc.mojom.CameraService_Connect_ParamsSpec, 'arc.mojom.CameraService_Connect_Params', [
      mojo.internal.StructField('device_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraService_Connect_ResponseParamsSpec, 'arc.mojom.CameraService_Connect_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraService_Disconnect_ParamsSpec, 'arc.mojom.CameraService_Disconnect_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.CameraService_Disconnect_ResponseParamsSpec, 'arc.mojom.CameraService_Disconnect_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.CameraService_StreamOn_ParamsSpec, 'arc.mojom.CameraService_StreamOn_Params', [
      mojo.internal.StructField('width', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pixel_format', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('frame_rate', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.CameraService_StreamOn_ResponseParamsSpec, 'arc.mojom.CameraService_StreamOn_ResponseParams', [
      mojo.internal.StructField('fds', 0, 0, mojo.internal.Array(mojo.internal.Handle, false), null, false, 0, undefined),
      mojo.internal.StructField('buffer_size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('result', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.CameraService_StreamOff_ParamsSpec, 'arc.mojom.CameraService_StreamOff_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.CameraService_StreamOff_ResponseParamsSpec, 'arc.mojom.CameraService_StreamOff_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraService_GetNextFrameBuffer_ParamsSpec, 'arc.mojom.CameraService_GetNextFrameBuffer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.CameraService_GetNextFrameBuffer_ResponseParamsSpec, 'arc.mojom.CameraService_GetNextFrameBuffer_ResponseParams', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('data_size', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.CameraService_ReuseFrameBuffer_ParamsSpec, 'arc.mojom.CameraService_ReuseFrameBuffer_Params', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraService_ReuseFrameBuffer_ResponseParamsSpec, 'arc.mojom.CameraService_ReuseFrameBuffer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraService_GetDeviceSupportedFormats_ParamsSpec, 'arc.mojom.CameraService_GetDeviceSupportedFormats_Params', [
      mojo.internal.StructField('device_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraService_GetDeviceSupportedFormats_ResponseParamsSpec, 'arc.mojom.CameraService_GetDeviceSupportedFormats_ResponseParams', [
      mojo.internal.StructField('supported_formats', 0, 0, mojo.internal.Array(arc.mojom.CameraSupportedFormatSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraService_GetCameraDeviceInfos_ParamsSpec, 'arc.mojom.CameraService_GetCameraDeviceInfos_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.CameraService_GetCameraDeviceInfos_ResponseParamsSpec, 'arc.mojom.CameraService_GetCameraDeviceInfos_ResponseParams', [
      mojo.internal.StructField('device_infos', 0, 0, mojo.internal.Array(arc.mojom.CameraDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.CameraServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.CameraServiceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CameraService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.CameraServicePendingReceiver,
      handle);
    this.$ = new arc.mojom.CameraServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  connect(device_path) {
    return this.$.connect(device_path);
  }
  disconnect() {
    return this.$.disconnect();
  }
  streamOn(width, height, pixel_format, frame_rate) {
    return this.$.streamOn(width, height, pixel_format, frame_rate);
  }
  streamOff() {
    return this.$.streamOff();
  }
  getNextFrameBuffer() {
    return this.$.getNextFrameBuffer();
  }
  reuseFrameBuffer(buffer_id) {
    return this.$.reuseFrameBuffer(buffer_id);
  }
  getDeviceSupportedFormats(device_path) {
    return this.$.getDeviceSupportedFormats(device_path);
  }
  getCameraDeviceInfos() {
    return this.$.getCameraDeviceInfos();
  }
};

arc.mojom.CameraServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CameraService', [
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

  connect(device_path) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.CameraService_Connect_ParamsSpec,
      arc.mojom.CameraService_Connect_ResponseParamsSpec,
      [device_path],
      false);
  }

  disconnect() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.CameraService_Disconnect_ParamsSpec,
      arc.mojom.CameraService_Disconnect_ResponseParamsSpec,
      [],
      false);
  }

  streamOn(width, height, pixel_format, frame_rate) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.CameraService_StreamOn_ParamsSpec,
      arc.mojom.CameraService_StreamOn_ResponseParamsSpec,
      [width, height, pixel_format, frame_rate],
      false);
  }

  streamOff() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.CameraService_StreamOff_ParamsSpec,
      arc.mojom.CameraService_StreamOff_ResponseParamsSpec,
      [],
      false);
  }

  getNextFrameBuffer() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.CameraService_GetNextFrameBuffer_ParamsSpec,
      arc.mojom.CameraService_GetNextFrameBuffer_ResponseParamsSpec,
      [],
      false);
  }

  reuseFrameBuffer(buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      arc.mojom.CameraService_ReuseFrameBuffer_ParamsSpec,
      arc.mojom.CameraService_ReuseFrameBuffer_ResponseParamsSpec,
      [buffer_id],
      false);
  }

  getDeviceSupportedFormats(device_path) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      arc.mojom.CameraService_GetDeviceSupportedFormats_ParamsSpec,
      arc.mojom.CameraService_GetDeviceSupportedFormats_ResponseParamsSpec,
      [device_path],
      false);
  }

  getCameraDeviceInfos() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      arc.mojom.CameraService_GetCameraDeviceInfos_ParamsSpec,
      arc.mojom.CameraService_GetCameraDeviceInfos_ResponseParamsSpec,
      [],
      false);
  }

};

arc.mojom.CameraService.getRemote = function() {
  let remote = new arc.mojom.CameraServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CameraService',
    'context');
  return remote.$;
};

arc.mojom.CameraServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CameraService', [
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
             decoder.decodeStructInline(arc.mojom.CameraService_Connect_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.CameraService_Disconnect_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.CameraService_StreamOn_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.CameraService_StreamOff_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.CameraService_GetNextFrameBuffer_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.CameraService_ReuseFrameBuffer_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.CameraService_GetDeviceSupportedFormats_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.CameraService_GetCameraDeviceInfos_ParamsSpec);
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
          const params = decoder.decodeStructInline(arc.mojom.CameraService_Connect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.device_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraService_Connect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.CameraService_Disconnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disconnect');
          const result = this.impl.disconnect();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraService_Disconnect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.CameraService_StreamOn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.streamOn');
          const result = this.impl.streamOn(params.width, params.height, params.pixel_format, params.frame_rate);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraService_StreamOn_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.CameraService_StreamOff_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.streamOff');
          const result = this.impl.streamOff();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraService_StreamOff_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.CameraService_GetNextFrameBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNextFrameBuffer');
          const result = this.impl.getNextFrameBuffer();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraService_GetNextFrameBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.CameraService_ReuseFrameBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reuseFrameBuffer');
          const result = this.impl.reuseFrameBuffer(params.buffer_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraService_ReuseFrameBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.CameraService_GetDeviceSupportedFormats_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceSupportedFormats');
          const result = this.impl.getDeviceSupportedFormats(params.device_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraService_GetDeviceSupportedFormats_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.CameraService_GetCameraDeviceInfos_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCameraDeviceInfos');
          const result = this.impl.getCameraDeviceInfos();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraService_GetCameraDeviceInfos_ResponseParamsSpec);
               responder(response);
            });
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

arc.mojom.CameraServiceReceiver = arc.mojom.CameraServiceReceiver;

arc.mojom.CameraServicePtr = arc.mojom.CameraServiceRemote;
arc.mojom.CameraServiceRequest = arc.mojom.CameraServicePendingReceiver;


// Interface: CameraHost
mojo.internal.Struct(
    arc.mojom.CameraHost_StartCameraService_ParamsSpec, 'arc.mojom.CameraHost_StartCameraService_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.CameraHost_StartCameraService_ResponseParamsSpec, 'arc.mojom.CameraHost_StartCameraService_ResponseParams', [
      mojo.internal.StructField('service', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.CameraServiceSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraHost_RegisterCameraHalClientLegacy_ParamsSpec, 'arc.mojom.CameraHost_RegisterCameraHalClientLegacy_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.CameraHalClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraHost_RegisterCameraHalClient_ParamsSpec, 'arc.mojom.CameraHost_RegisterCameraHalClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.CameraHalClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraHost_RegisterCameraHalClient_ResponseParamsSpec, 'arc.mojom.CameraHost_RegisterCameraHalClient_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.CameraHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.CameraHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CameraHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.CameraHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.CameraHostRemoteCallHandler(this.proxy);
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
  registerCameraHalClientLegacy(client) {
    return this.$.registerCameraHalClientLegacy(client);
  }
  registerCameraHalClient(client) {
    return this.$.registerCameraHalClient(client);
  }
};

arc.mojom.CameraHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CameraHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  startCameraService() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.CameraHost_StartCameraService_ParamsSpec,
      arc.mojom.CameraHost_StartCameraService_ResponseParamsSpec,
      [],
      false);
  }

  registerCameraHalClientLegacy(client) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.CameraHost_RegisterCameraHalClientLegacy_ParamsSpec,
      null,
      [client],
      false);
  }

  registerCameraHalClient(client) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.CameraHost_RegisterCameraHalClient_ParamsSpec,
      arc.mojom.CameraHost_RegisterCameraHalClient_ResponseParamsSpec,
      [client],
      false);
  }

};

arc.mojom.CameraHost.getRemote = function() {
  let remote = new arc.mojom.CameraHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CameraHost',
    'context');
  return remote.$;
};

arc.mojom.CameraHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CameraHost', [
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
             decoder.decodeStructInline(arc.mojom.CameraHost_StartCameraService_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.CameraHost_RegisterCameraHalClientLegacy_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.CameraHost_RegisterCameraHalClient_ParamsSpec);
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
          const params = decoder.decodeStructInline(arc.mojom.CameraHost_StartCameraService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startCameraService');
          const result = this.impl.startCameraService();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraHost_StartCameraService_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.CameraHost_RegisterCameraHalClientLegacy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerCameraHalClientLegacy');
          const result = this.impl.registerCameraHalClientLegacy(params.client);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.CameraHost_RegisterCameraHalClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerCameraHalClient');
          const result = this.impl.registerCameraHalClient(params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraHost_RegisterCameraHalClient_ResponseParamsSpec);
               responder(response);
            });
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

arc.mojom.CameraHostReceiver = arc.mojom.CameraHostReceiver;

arc.mojom.CameraHostPtr = arc.mojom.CameraHostRemote;
arc.mojom.CameraHostRequest = arc.mojom.CameraHostPendingReceiver;


// Interface: CameraInstance
mojo.internal.Struct(
    arc.mojom.CameraInstance_Init_ParamsSpec, 'arc.mojom.CameraInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.CameraHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraInstance_Init_ResponseParamsSpec, 'arc.mojom.CameraInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.CameraInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.CameraInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CameraInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.CameraInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.CameraInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(host_remote) {
    return this.$.init(host_remote);
  }
};

arc.mojom.CameraInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CameraInstance', [
      { explicit: 0 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.CameraInstance_Init_ParamsSpec,
      arc.mojom.CameraInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.CameraInstance.getRemote = function() {
  let remote = new arc.mojom.CameraInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CameraInstance',
    'context');
  return remote.$;
};

arc.mojom.CameraInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CameraInstance', [
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
             decoder.decodeStructInline(arc.mojom.CameraInstance_Init_ParamsSpec);
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
          const params = decoder.decodeStructInline(arc.mojom.CameraInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraInstance_Init_ResponseParamsSpec);
               responder(response);
            });
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

arc.mojom.CameraInstanceReceiver = arc.mojom.CameraInstanceReceiver;

arc.mojom.CameraInstancePtr = arc.mojom.CameraInstanceRemote;
arc.mojom.CameraInstanceRequest = arc.mojom.CameraInstancePendingReceiver;

