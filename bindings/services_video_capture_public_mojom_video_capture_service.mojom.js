// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_capture_service.mojom
// Module: video_capture.mojom

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
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};
var sandbox = sandbox || {};
var chromeos_camera = chromeos_camera || {};
var cros = cros || {};
var crosapi = crosapi || {};
var gpu = gpu || {};

video_capture.mojom.AcceleratorFactory = {};
video_capture.mojom.AcceleratorFactory.$interfaceName = 'video_capture.mojom.AcceleratorFactory';
video_capture.mojom.AcceleratorFactory_CreateJpegDecodeAccelerator_ParamsSpec = { $: {} };
video_capture.mojom.VideoCaptureService = {};
video_capture.mojom.VideoCaptureService.$interfaceName = 'video_capture.mojom.VideoCaptureService';
video_capture.mojom.VideoCaptureService_InjectGpuDependencies_ParamsSpec = { $: {} };
video_capture.mojom.VideoCaptureService_ConnectToCameraAppDeviceBridge_ParamsSpec = { $: {} };
video_capture.mojom.VideoCaptureService_BindVideoCaptureDeviceFactory_ParamsSpec = { $: {} };
video_capture.mojom.VideoCaptureService_ConnectToVideoSourceProvider_ParamsSpec = { $: {} };
video_capture.mojom.VideoCaptureService_BindControlsForTesting_ParamsSpec = { $: {} };
video_capture.mojom.VideoCaptureService_OnGpuInfoUpdate_ParamsSpec = { $: {} };

video_capture.mojom.kVideoCaptureSandbox = sandbox.mojom.Sandbox.kVideoCapture;

video_capture.mojom.kVideoCaptureSandbox = sandbox.mojom.Sandbox.kNoSandbox;

// Interface: AcceleratorFactory
mojo.internal.Struct(
    video_capture.mojom.AcceleratorFactory_CreateJpegDecodeAccelerator_ParamsSpec, 'video_capture.mojom.AcceleratorFactory_CreateJpegDecodeAccelerator_Params', [
      mojo.internal.StructField('jda', 0, 0, mojo.internal.InterfaceRequest(chromeos_camera.mojom.MjpegDecodeAcceleratorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

video_capture.mojom.AcceleratorFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.AcceleratorFactoryRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.AcceleratorFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.AcceleratorFactoryPendingReceiver,
      handle);
    this.$ = new video_capture.mojom.AcceleratorFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createJpegDecodeAccelerator(jda) {
    return this.$.createJpegDecodeAccelerator(jda);
  }
};

video_capture.mojom.AcceleratorFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AcceleratorFactory', [
      { explicit: null },
    ]);
  }

  createJpegDecodeAccelerator(jda) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      video_capture.mojom.AcceleratorFactory_CreateJpegDecodeAccelerator_ParamsSpec,
      null,
      [jda],
      false);
  }

};

video_capture.mojom.AcceleratorFactory.getRemote = function() {
  let remote = new video_capture.mojom.AcceleratorFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.AcceleratorFactory',
    'context');
  return remote.$;
};

video_capture.mojom.AcceleratorFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AcceleratorFactory', [
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
        
        // Try Method 0: CreateJpegDecodeAccelerator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.AcceleratorFactory_CreateJpegDecodeAccelerator_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateJpegDecodeAccelerator (0)');
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
          const params = decoder.decodeStructInline(video_capture.mojom.AcceleratorFactory_CreateJpegDecodeAccelerator_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createJpegDecodeAccelerator');
          const result = this.impl.createJpegDecodeAccelerator(params.jda);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

video_capture.mojom.AcceleratorFactoryReceiver = video_capture.mojom.AcceleratorFactoryReceiver;

video_capture.mojom.AcceleratorFactoryPtr = video_capture.mojom.AcceleratorFactoryRemote;
video_capture.mojom.AcceleratorFactoryRequest = video_capture.mojom.AcceleratorFactoryPendingReceiver;


// Interface: VideoCaptureService
mojo.internal.Struct(
    video_capture.mojom.VideoCaptureService_InjectGpuDependencies_ParamsSpec, 'video_capture.mojom.VideoCaptureService_InjectGpuDependencies_Params', [
      mojo.internal.StructField('accelerator_factory', 0, 0, mojo.internal.InterfaceProxy(video_capture.mojom.AcceleratorFactorySpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoCaptureService_ConnectToCameraAppDeviceBridge_ParamsSpec, 'video_capture.mojom.VideoCaptureService_ConnectToCameraAppDeviceBridge_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(cros.mojom.CameraAppDeviceBridgeRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoCaptureService_BindVideoCaptureDeviceFactory_ParamsSpec, 'video_capture.mojom.VideoCaptureService_BindVideoCaptureDeviceFactory_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(crosapi.mojom.VideoCaptureDeviceFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoCaptureService_ConnectToVideoSourceProvider_ParamsSpec, 'video_capture.mojom.VideoCaptureService_ConnectToVideoSourceProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(video_capture.mojom.VideoSourceProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoCaptureService_BindControlsForTesting_ParamsSpec, 'video_capture.mojom.VideoCaptureService_BindControlsForTesting_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(video_capture.mojom.TestingControlsRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoCaptureService_OnGpuInfoUpdate_ParamsSpec, 'video_capture.mojom.VideoCaptureService_OnGpuInfoUpdate_Params', [
      mojo.internal.StructField('luid', 0, 0, gpu.mojom.LuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

video_capture.mojom.VideoCaptureServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.VideoCaptureServiceRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.VideoCaptureService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.VideoCaptureServicePendingReceiver,
      handle);
    this.$ = new video_capture.mojom.VideoCaptureServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  injectGpuDependencies(accelerator_factory) {
    return this.$.injectGpuDependencies(accelerator_factory);
  }
  connectToCameraAppDeviceBridge(receiver) {
    return this.$.connectToCameraAppDeviceBridge(receiver);
  }
  bindVideoCaptureDeviceFactory(receiver) {
    return this.$.bindVideoCaptureDeviceFactory(receiver);
  }
  connectToVideoSourceProvider(receiver) {
    return this.$.connectToVideoSourceProvider(receiver);
  }
  bindControlsForTesting(receiver) {
    return this.$.bindControlsForTesting(receiver);
  }
  onGpuInfoUpdate(luid) {
    return this.$.onGpuInfoUpdate(luid);
  }
};

video_capture.mojom.VideoCaptureServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoCaptureService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  injectGpuDependencies(accelerator_factory) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      video_capture.mojom.VideoCaptureService_InjectGpuDependencies_ParamsSpec,
      null,
      [accelerator_factory],
      false);
  }

  connectToCameraAppDeviceBridge(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      video_capture.mojom.VideoCaptureService_ConnectToCameraAppDeviceBridge_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindVideoCaptureDeviceFactory(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      video_capture.mojom.VideoCaptureService_BindVideoCaptureDeviceFactory_ParamsSpec,
      null,
      [receiver],
      false);
  }

  connectToVideoSourceProvider(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      video_capture.mojom.VideoCaptureService_ConnectToVideoSourceProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindControlsForTesting(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      video_capture.mojom.VideoCaptureService_BindControlsForTesting_ParamsSpec,
      null,
      [receiver],
      false);
  }

  onGpuInfoUpdate(luid) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      video_capture.mojom.VideoCaptureService_OnGpuInfoUpdate_ParamsSpec,
      null,
      [luid],
      false);
  }

};

video_capture.mojom.VideoCaptureService.getRemote = function() {
  let remote = new video_capture.mojom.VideoCaptureServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.VideoCaptureService',
    'context');
  return remote.$;
};

video_capture.mojom.VideoCaptureServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoCaptureService', [
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
        
        // Try Method 0: InjectGpuDependencies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_InjectGpuDependencies_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InjectGpuDependencies (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ConnectToCameraAppDeviceBridge
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_ConnectToCameraAppDeviceBridge_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectToCameraAppDeviceBridge (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: BindVideoCaptureDeviceFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_BindVideoCaptureDeviceFactory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindVideoCaptureDeviceFactory (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ConnectToVideoSourceProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_ConnectToVideoSourceProvider_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectToVideoSourceProvider (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: BindControlsForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_BindControlsForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindControlsForTesting (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnGpuInfoUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_OnGpuInfoUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGpuInfoUpdate (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_InjectGpuDependencies_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.injectGpuDependencies');
          const result = this.impl.injectGpuDependencies(params.accelerator_factory);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_ConnectToCameraAppDeviceBridge_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connectToCameraAppDeviceBridge');
          const result = this.impl.connectToCameraAppDeviceBridge(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_BindVideoCaptureDeviceFactory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindVideoCaptureDeviceFactory');
          const result = this.impl.bindVideoCaptureDeviceFactory(params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_ConnectToVideoSourceProvider_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connectToVideoSourceProvider');
          const result = this.impl.connectToVideoSourceProvider(params.receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_BindControlsForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindControlsForTesting');
          const result = this.impl.bindControlsForTesting(params.receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoCaptureService_OnGpuInfoUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onGpuInfoUpdate');
          const result = this.impl.onGpuInfoUpdate(params.luid);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

video_capture.mojom.VideoCaptureServiceReceiver = video_capture.mojom.VideoCaptureServiceReceiver;

video_capture.mojom.VideoCaptureServicePtr = video_capture.mojom.VideoCaptureServiceRemote;
video_capture.mojom.VideoCaptureServiceRequest = video_capture.mojom.VideoCaptureServicePendingReceiver;

