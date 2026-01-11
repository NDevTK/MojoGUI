// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/services/recording/public/mojom/recording_service.mojom
 // Module: recording.mojom

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
 

 mojo.internal.bindings.recording = mojo.internal.bindings.recording || {};
mojo.internal.bindings.recording.mojom = mojo.internal.bindings.recording.mojom || {};
mojo.internal.bindings.media = mojo.internal.bindings.media || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.sandbox = mojo.internal.bindings.sandbox || {};
mojo.internal.bindings.viz = mojo.internal.bindings.viz || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.recording.mojom.RecordingStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegate = {};
mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegate.$interfaceName = 'recording.mojom.DriveFsQuotaDelegate';
mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ParamsSpec = { $: {} };
mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.recording.mojom.RecordingServiceClient = {};
mojo.internal.bindings.recording.mojom.RecordingServiceClient.$interfaceName = 'recording.mojom.RecordingServiceClient';
mojo.internal.bindings.recording.mojom.RecordingServiceClient_OnRecordingEnded_ParamsSpec = { $: {} };
mojo.internal.bindings.recording.mojom.RecordingService = {};
mojo.internal.bindings.recording.mojom.RecordingService.$interfaceName = 'recording.mojom.RecordingService';
mojo.internal.bindings.recording.mojom.RecordingService_RecordFullscreen_ParamsSpec = { $: {} };
mojo.internal.bindings.recording.mojom.RecordingService_RecordWindow_ParamsSpec = { $: {} };
mojo.internal.bindings.recording.mojom.RecordingService_RecordRegion_ParamsSpec = { $: {} };
mojo.internal.bindings.recording.mojom.RecordingService_StopRecording_ParamsSpec = { $: {} };
mojo.internal.bindings.recording.mojom.RecordingService_OnRecordedWindowChangingRoot_ParamsSpec = { $: {} };
mojo.internal.bindings.recording.mojom.RecordingService_OnRecordedWindowSizeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.recording.mojom.RecordingService_OnFrameSinkSizeChanged_ParamsSpec = { $: {} };

// Enum: RecordingStatus
mojo.internal.bindings.recording.mojom.RecordingStatus = {
  kSuccess: 0,
  kServiceClosing: 1,
  kVizVideoCapturerDisconnected: 2,
  kAudioEncoderInitializationFailure: 3,
  kVideoEncoderInitializationFailure: 4,
  kAudioEncodingError: 5,
  kVideoEncodingError: 6,
  kIoError: 7,
  kLowDiskSpace: 8,
  kLowDriveFsQuota: 9,
  kVideoEncoderReconfigurationFailure: 10,
};

// Interface: DriveFsQuotaDelegate
mojo.internal.Struct(
    mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ParamsSpec, 'recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ResponseParamsSpec, 'recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ResponseParams', [
      mojo.internal.StructField('arg_free_remaining_bytes', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegateRemote = class {
  static get $interfaceName() {
    return 'recording.mojom.DriveFsQuotaDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegatePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDriveFsFreeSpaceBytes() {
    return this.$.getDriveFsFreeSpaceBytes();
  }
};

mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DriveFsQuotaDelegate', [
      { explicit: null },
    ]);
  }

  getDriveFsFreeSpaceBytes() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ParamsSpec,
      mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegate.getRemote = function() {
  let remote = new mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'recording.mojom.DriveFsQuotaDelegate',
    'context');
  return remote.$;
};

mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DriveFsQuotaDelegate', [
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
        
        // Try Method 0: GetDriveFsFreeSpaceBytes
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDriveFsFreeSpaceBytes (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDriveFsFreeSpaceBytes');
          const result = this.impl.getDriveFsFreeSpaceBytes();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDriveFsFreeSpaceBytes FAILED:', e));
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

mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegateReceiver = mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegateReceiver;

mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegatePtr = mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegateRemote;
mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegateRequest = mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegatePendingReceiver;


// Interface: RecordingServiceClient
mojo.internal.Struct(
    mojo.internal.bindings.recording.mojom.RecordingServiceClient_OnRecordingEnded_ParamsSpec, 'recording.mojom.RecordingServiceClient_OnRecordingEnded_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.mojo.internal.bindings.recording.mojom.RecordingStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_thumbnail', 8, 0, mojo.internal.bindings.gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.recording.mojom.RecordingServiceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.recording.mojom.RecordingServiceClientRemote = class {
  static get $interfaceName() {
    return 'recording.mojom.RecordingServiceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.recording.mojom.RecordingServiceClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.recording.mojom.RecordingServiceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onRecordingEnded(arg_status, arg_thumbnail) {
    return this.$.onRecordingEnded(arg_status, arg_thumbnail);
  }
};

mojo.internal.bindings.recording.mojom.RecordingServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RecordingServiceClient', [
      { explicit: null },
    ]);
  }

  onRecordingEnded(arg_status, arg_thumbnail) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.recording.mojom.RecordingServiceClient_OnRecordingEnded_ParamsSpec,
      null,
      [arg_status, arg_thumbnail],
      false);
  }

};

mojo.internal.bindings.recording.mojom.RecordingServiceClient.getRemote = function() {
  let remote = new mojo.internal.bindings.recording.mojom.RecordingServiceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'recording.mojom.RecordingServiceClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.recording.mojom.RecordingServiceClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RecordingServiceClient', [
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
        
        // Try Method 0: OnRecordingEnded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.recording.mojom.RecordingServiceClient_OnRecordingEnded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRecordingEnded (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.recording.mojom.RecordingServiceClient_OnRecordingEnded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRecordingEnded');
          const result = this.impl.onRecordingEnded(params.arg_status, params.arg_thumbnail);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.recording.mojom.RecordingServiceClientReceiver = mojo.internal.bindings.recording.mojom.RecordingServiceClientReceiver;

mojo.internal.bindings.recording.mojom.RecordingServiceClientPtr = mojo.internal.bindings.recording.mojom.RecordingServiceClientRemote;
mojo.internal.bindings.recording.mojom.RecordingServiceClientRequest = mojo.internal.bindings.recording.mojom.RecordingServiceClientPendingReceiver;


// Interface: RecordingService
mojo.internal.Struct(
    mojo.internal.bindings.recording.mojom.RecordingService_RecordFullscreen_ParamsSpec, 'recording.mojom.RecordingService_RecordFullscreen_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.recording.mojom.RecordingServiceClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_video_capturer', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_microphone_stream_factory', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.AudioStreamFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_system_audio_stream_factory', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.AudioStreamFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_drive_fs_quota_delegate', 32, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegateSpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_output_file_path', 40, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_sink_id', 48, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_sink_size_dip', 56, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_scale_factor', 64, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 80]]);

mojo.internal.Struct(
    mojo.internal.bindings.recording.mojom.RecordingService_RecordWindow_ParamsSpec, 'recording.mojom.RecordingService_RecordWindow_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.recording.mojom.RecordingServiceClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_video_capturer', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_microphone_stream_factory', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.AudioStreamFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_system_audio_stream_factory', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.AudioStreamFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_drive_fs_quota_delegate', 32, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegateSpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_output_file_path', 40, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_sink_id', 48, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_sink_size_dip', 56, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_subtree_capture_id', 64, 0, mojo.internal.bindings.viz.mojom.SubtreeCaptureIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_window_size_dip', 72, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_scale_factor', 80, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 96]]);

mojo.internal.Struct(
    mojo.internal.bindings.recording.mojom.RecordingService_RecordRegion_ParamsSpec, 'recording.mojom.RecordingService_RecordRegion_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.recording.mojom.RecordingServiceClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_video_capturer', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_microphone_stream_factory', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.AudioStreamFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_system_audio_stream_factory', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.AudioStreamFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_drive_fs_quota_delegate', 32, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.recording.mojom.DriveFsQuotaDelegateSpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_output_file_path', 40, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_sink_id', 48, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_sink_size_dip', 56, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_crop_region_dip', 64, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_scale_factor', 72, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 88]]);

mojo.internal.Struct(
    mojo.internal.bindings.recording.mojom.RecordingService_StopRecording_ParamsSpec, 'recording.mojom.RecordingService_StopRecording_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.recording.mojom.RecordingService_OnRecordedWindowChangingRoot_ParamsSpec, 'recording.mojom.RecordingService_OnRecordedWindowChangingRoot_Params', [
      mojo.internal.StructField('arg_new_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_frame_sink_size_dip', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_device_scale_factor', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.recording.mojom.RecordingService_OnRecordedWindowSizeChanged_ParamsSpec, 'recording.mojom.RecordingService_OnRecordedWindowSizeChanged_Params', [
      mojo.internal.StructField('arg_new_window_size_dip', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.recording.mojom.RecordingService_OnFrameSinkSizeChanged_ParamsSpec, 'recording.mojom.RecordingService_OnFrameSinkSizeChanged_Params', [
      mojo.internal.StructField('arg_new_frame_sink_size_dip', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_device_scale_factor', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.recording.mojom.RecordingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.recording.mojom.RecordingServiceRemote = class {
  static get $interfaceName() {
    return 'recording.mojom.RecordingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.recording.mojom.RecordingServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.recording.mojom.RecordingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  recordFullscreen(arg_client, arg_video_capturer, arg_microphone_stream_factory, arg_system_audio_stream_factory, arg_drive_fs_quota_delegate, arg_output_file_path, arg_frame_sink_id, arg_frame_sink_size_dip, arg_device_scale_factor) {
    return this.$.recordFullscreen(arg_client, arg_video_capturer, arg_microphone_stream_factory, arg_system_audio_stream_factory, arg_drive_fs_quota_delegate, arg_output_file_path, arg_frame_sink_id, arg_frame_sink_size_dip, arg_device_scale_factor);
  }
  recordWindow(arg_client, arg_video_capturer, arg_microphone_stream_factory, arg_system_audio_stream_factory, arg_drive_fs_quota_delegate, arg_output_file_path, arg_frame_sink_id, arg_frame_sink_size_dip, arg_device_scale_factor, arg_subtree_capture_id, arg_window_size_dip) {
    return this.$.recordWindow(arg_client, arg_video_capturer, arg_microphone_stream_factory, arg_system_audio_stream_factory, arg_drive_fs_quota_delegate, arg_output_file_path, arg_frame_sink_id, arg_frame_sink_size_dip, arg_device_scale_factor, arg_subtree_capture_id, arg_window_size_dip);
  }
  recordRegion(arg_client, arg_video_capturer, arg_microphone_stream_factory, arg_system_audio_stream_factory, arg_drive_fs_quota_delegate, arg_output_file_path, arg_frame_sink_id, arg_frame_sink_size_dip, arg_device_scale_factor, arg_crop_region_dip) {
    return this.$.recordRegion(arg_client, arg_video_capturer, arg_microphone_stream_factory, arg_system_audio_stream_factory, arg_drive_fs_quota_delegate, arg_output_file_path, arg_frame_sink_id, arg_frame_sink_size_dip, arg_device_scale_factor, arg_crop_region_dip);
  }
  stopRecording() {
    return this.$.stopRecording();
  }
  onRecordedWindowChangingRoot(arg_new_frame_sink_id, arg_new_frame_sink_size_dip, arg_new_device_scale_factor) {
    return this.$.onRecordedWindowChangingRoot(arg_new_frame_sink_id, arg_new_frame_sink_size_dip, arg_new_device_scale_factor);
  }
  onRecordedWindowSizeChanged(arg_new_window_size_dip) {
    return this.$.onRecordedWindowSizeChanged(arg_new_window_size_dip);
  }
  onFrameSinkSizeChanged(arg_new_frame_sink_size_dip, arg_new_device_scale_factor) {
    return this.$.onFrameSinkSizeChanged(arg_new_frame_sink_size_dip, arg_new_device_scale_factor);
  }
};

mojo.internal.bindings.recording.mojom.RecordingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RecordingService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  recordFullscreen(arg_client, arg_video_capturer, arg_microphone_stream_factory, arg_system_audio_stream_factory, arg_drive_fs_quota_delegate, arg_output_file_path, arg_frame_sink_id, arg_frame_sink_size_dip, arg_device_scale_factor) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.recording.mojom.RecordingService_RecordFullscreen_ParamsSpec,
      null,
      [arg_client, arg_video_capturer, arg_microphone_stream_factory, arg_system_audio_stream_factory, arg_drive_fs_quota_delegate, arg_output_file_path, arg_frame_sink_id, arg_frame_sink_size_dip, arg_device_scale_factor],
      false);
  }

  recordWindow(arg_client, arg_video_capturer, arg_microphone_stream_factory, arg_system_audio_stream_factory, arg_drive_fs_quota_delegate, arg_output_file_path, arg_frame_sink_id, arg_frame_sink_size_dip, arg_device_scale_factor, arg_subtree_capture_id, arg_window_size_dip) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.recording.mojom.RecordingService_RecordWindow_ParamsSpec,
      null,
      [arg_client, arg_video_capturer, arg_microphone_stream_factory, arg_system_audio_stream_factory, arg_drive_fs_quota_delegate, arg_output_file_path, arg_frame_sink_id, arg_frame_sink_size_dip, arg_device_scale_factor, arg_subtree_capture_id, arg_window_size_dip],
      false);
  }

  recordRegion(arg_client, arg_video_capturer, arg_microphone_stream_factory, arg_system_audio_stream_factory, arg_drive_fs_quota_delegate, arg_output_file_path, arg_frame_sink_id, arg_frame_sink_size_dip, arg_device_scale_factor, arg_crop_region_dip) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.recording.mojom.RecordingService_RecordRegion_ParamsSpec,
      null,
      [arg_client, arg_video_capturer, arg_microphone_stream_factory, arg_system_audio_stream_factory, arg_drive_fs_quota_delegate, arg_output_file_path, arg_frame_sink_id, arg_frame_sink_size_dip, arg_device_scale_factor, arg_crop_region_dip],
      false);
  }

  stopRecording() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.recording.mojom.RecordingService_StopRecording_ParamsSpec,
      null,
      [],
      false);
  }

  onRecordedWindowChangingRoot(arg_new_frame_sink_id, arg_new_frame_sink_size_dip, arg_new_device_scale_factor) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.recording.mojom.RecordingService_OnRecordedWindowChangingRoot_ParamsSpec,
      null,
      [arg_new_frame_sink_id, arg_new_frame_sink_size_dip, arg_new_device_scale_factor],
      false);
  }

  onRecordedWindowSizeChanged(arg_new_window_size_dip) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.recording.mojom.RecordingService_OnRecordedWindowSizeChanged_ParamsSpec,
      null,
      [arg_new_window_size_dip],
      false);
  }

  onFrameSinkSizeChanged(arg_new_frame_sink_size_dip, arg_new_device_scale_factor) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.recording.mojom.RecordingService_OnFrameSinkSizeChanged_ParamsSpec,
      null,
      [arg_new_frame_sink_size_dip, arg_new_device_scale_factor],
      false);
  }

};

mojo.internal.bindings.recording.mojom.RecordingService.getRemote = function() {
  let remote = new mojo.internal.bindings.recording.mojom.RecordingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'recording.mojom.RecordingService',
    'context');
  return remote.$;
};

mojo.internal.bindings.recording.mojom.RecordingServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RecordingService', [
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
        
        // Try Method 0: RecordFullscreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.recording.mojom.RecordingService_RecordFullscreen_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordFullscreen (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RecordWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.recording.mojom.RecordingService_RecordWindow_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordWindow (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RecordRegion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.recording.mojom.RecordingService_RecordRegion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordRegion (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: StopRecording
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.recording.mojom.RecordingService_StopRecording_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopRecording (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnRecordedWindowChangingRoot
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.recording.mojom.RecordingService_OnRecordedWindowChangingRoot_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRecordedWindowChangingRoot (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnRecordedWindowSizeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.recording.mojom.RecordingService_OnRecordedWindowSizeChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRecordedWindowSizeChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnFrameSinkSizeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.recording.mojom.RecordingService_OnFrameSinkSizeChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameSinkSizeChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.recording.mojom.RecordingService_RecordFullscreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordFullscreen');
          const result = this.impl.recordFullscreen(params.arg_client, params.arg_video_capturer, params.arg_microphone_stream_factory, params.arg_system_audio_stream_factory, params.arg_drive_fs_quota_delegate, params.arg_output_file_path, params.arg_frame_sink_id, params.arg_frame_sink_size_dip, params.arg_device_scale_factor);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.recording.mojom.RecordingService_RecordWindow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordWindow');
          const result = this.impl.recordWindow(params.arg_client, params.arg_video_capturer, params.arg_microphone_stream_factory, params.arg_system_audio_stream_factory, params.arg_drive_fs_quota_delegate, params.arg_output_file_path, params.arg_frame_sink_id, params.arg_frame_sink_size_dip, params.arg_device_scale_factor, params.arg_subtree_capture_id, params.arg_window_size_dip);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.recording.mojom.RecordingService_RecordRegion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordRegion');
          const result = this.impl.recordRegion(params.arg_client, params.arg_video_capturer, params.arg_microphone_stream_factory, params.arg_system_audio_stream_factory, params.arg_drive_fs_quota_delegate, params.arg_output_file_path, params.arg_frame_sink_id, params.arg_frame_sink_size_dip, params.arg_device_scale_factor, params.arg_crop_region_dip);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.recording.mojom.RecordingService_StopRecording_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopRecording');
          const result = this.impl.stopRecording();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.recording.mojom.RecordingService_OnRecordedWindowChangingRoot_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRecordedWindowChangingRoot');
          const result = this.impl.onRecordedWindowChangingRoot(params.arg_new_frame_sink_id, params.arg_new_frame_sink_size_dip, params.arg_new_device_scale_factor);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.recording.mojom.RecordingService_OnRecordedWindowSizeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRecordedWindowSizeChanged');
          const result = this.impl.onRecordedWindowSizeChanged(params.arg_new_window_size_dip);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.recording.mojom.RecordingService_OnFrameSinkSizeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameSinkSizeChanged');
          const result = this.impl.onFrameSinkSizeChanged(params.arg_new_frame_sink_size_dip, params.arg_new_device_scale_factor);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.recording.mojom.RecordingServiceReceiver = mojo.internal.bindings.recording.mojom.RecordingServiceReceiver;

mojo.internal.bindings.recording.mojom.RecordingServicePtr = mojo.internal.bindings.recording.mojom.RecordingServiceRemote;
mojo.internal.bindings.recording.mojom.RecordingServiceRequest = mojo.internal.bindings.recording.mojom.RecordingServicePendingReceiver;

