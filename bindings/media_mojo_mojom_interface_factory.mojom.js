// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/interface_factory.mojom
// Module: media.mojom

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
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};

media.mojom.VideoDecoderTracker = {};
media.mojom.VideoDecoderTracker.$interfaceName = 'media.mojom.VideoDecoderTracker';
media.mojom.InterfaceFactory = {};
media.mojom.InterfaceFactory.$interfaceName = 'media.mojom.InterfaceFactory';
media.mojom.InterfaceFactory_CreateAudioDecoder_ParamsSpec = { $: {} };
media.mojom.InterfaceFactory_CreateVideoDecoder_ParamsSpec = { $: {} };
media.mojom.InterfaceFactory_CreateVideoDecoderWithTracker_ParamsSpec = { $: {} };
media.mojom.InterfaceFactory_CreateAudioEncoder_ParamsSpec = { $: {} };
media.mojom.InterfaceFactory_CreateDefaultRenderer_ParamsSpec = { $: {} };
media.mojom.InterfaceFactory_CreateCastRenderer_ParamsSpec = { $: {} };
media.mojom.InterfaceFactory_CreateMediaFoundationRenderer_ParamsSpec = { $: {} };
media.mojom.InterfaceFactory_CreateFlingingRenderer_ParamsSpec = { $: {} };
media.mojom.InterfaceFactory_CreateCdm_ParamsSpec = { $: {} };
media.mojom.InterfaceFactory_CreateCdm_ResponseParamsSpec = { $: {} };

// Interface: VideoDecoderTracker
media.mojom.VideoDecoderTrackerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoDecoderTrackerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoDecoderTracker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoDecoderTrackerPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoDecoderTrackerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.VideoDecoderTrackerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoDecoderTracker', [
    ]);
  }

};

media.mojom.VideoDecoderTracker.getRemote = function() {
  let remote = new media.mojom.VideoDecoderTrackerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoDecoderTracker',
    'context');
  return remote.$;
};

media.mojom.VideoDecoderTrackerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoDecoderTracker', [
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

media.mojom.VideoDecoderTrackerReceiver = media.mojom.VideoDecoderTrackerReceiver;

media.mojom.VideoDecoderTrackerPtr = media.mojom.VideoDecoderTrackerRemote;
media.mojom.VideoDecoderTrackerRequest = media.mojom.VideoDecoderTrackerPendingReceiver;


// Interface: InterfaceFactory
mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateAudioDecoder_ParamsSpec, 'media.mojom.InterfaceFactory_CreateAudioDecoder_Params', [
      mojo.internal.StructField('audio_decoder', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioDecoderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateVideoDecoder_ParamsSpec, 'media.mojom.InterfaceFactory_CreateVideoDecoder_Params', [
      mojo.internal.StructField('video_decoder', 0, 0, mojo.internal.InterfaceRequest(media.mojom.VideoDecoderRemote), null, false, 0, undefined),
      mojo.internal.StructField('dst_video_decoder', 8, 0, mojo.internal.InterfaceProxy(media.mojom.VideoDecoderRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateVideoDecoderWithTracker_ParamsSpec, 'media.mojom.InterfaceFactory_CreateVideoDecoderWithTracker_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.VideoDecoderRemote), null, false, 0, undefined),
      mojo.internal.StructField('tracker', 8, 0, mojo.internal.InterfaceProxy(media.mojom.VideoDecoderTrackerSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateAudioEncoder_ParamsSpec, 'media.mojom.InterfaceFactory_CreateAudioEncoder_Params', [
      mojo.internal.StructField('audio_encoder', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioEncoderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateDefaultRenderer_ParamsSpec, 'media.mojom.InterfaceFactory_CreateDefaultRenderer_Params', [
      mojo.internal.StructField('audio_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('renderer', 8, 0, mojo.internal.InterfaceRequest(media.mojom.RendererRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateCastRenderer_ParamsSpec, 'media.mojom.InterfaceFactory_CreateCastRenderer_Params', [
      mojo.internal.StructField('overlay_plane_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('renderer', 8, 0, mojo.internal.InterfaceRequest(media.mojom.RendererRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateMediaFoundationRenderer_ParamsSpec, 'media.mojom.InterfaceFactory_CreateMediaFoundationRenderer_Params', [
      mojo.internal.StructField('media_log', 0, 0, mojo.internal.InterfaceProxy(media.mojom.MediaLogRemote), null, false, 0, undefined),
      mojo.internal.StructField('renderer', 8, 0, mojo.internal.InterfaceRequest(media.mojom.RendererRemote), null, false, 0, undefined),
      mojo.internal.StructField('renderer_extension', 16, 0, mojo.internal.InterfaceRequest(media.mojom.MediaFoundationRendererExtensionRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateFlingingRenderer_ParamsSpec, 'media.mojom.InterfaceFactory_CreateFlingingRenderer_Params', [
      mojo.internal.StructField('presentation_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('client_extension', 8, 0, mojo.internal.InterfaceProxy(media.mojom.FlingingRendererClientExtensionRemote), null, false, 0, undefined),
      mojo.internal.StructField('renderer', 16, 0, mojo.internal.InterfaceRequest(media.mojom.RendererRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateCdm_ParamsSpec, 'media.mojom.InterfaceFactory_CreateCdm_Params', [
      mojo.internal.StructField('cdm_config', 0, 0, media.mojom.CdmConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateCdm_ResponseParamsSpec, 'media.mojom.InterfaceFactory_CreateCdm_ResponseParams', [
      mojo.internal.StructField('cdm', 0, 0, mojo.internal.InterfaceProxy(media.mojom.ContentDecryptionModuleRemote), null, true, 0, undefined),
      mojo.internal.StructField('cdm_context', 8, 0, media.mojom.CdmContextSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('status', 16, 0, media.mojom.CreateCdmStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

media.mojom.InterfaceFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.InterfaceFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.InterfaceFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.InterfaceFactoryPendingReceiver,
      handle);
    this.$ = new media.mojom.InterfaceFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createAudioDecoder(audio_decoder) {
    return this.$.createAudioDecoder(audio_decoder);
  }
  createVideoDecoder(video_decoder, dst_video_decoder) {
    return this.$.createVideoDecoder(video_decoder, dst_video_decoder);
  }
  createVideoDecoderWithTracker(receiver, tracker) {
    return this.$.createVideoDecoderWithTracker(receiver, tracker);
  }
  createAudioEncoder(audio_encoder) {
    return this.$.createAudioEncoder(audio_encoder);
  }
  createDefaultRenderer(audio_device_id, renderer) {
    return this.$.createDefaultRenderer(audio_device_id, renderer);
  }
  createCastRenderer(overlay_plane_id, renderer) {
    return this.$.createCastRenderer(overlay_plane_id, renderer);
  }
  createMediaFoundationRenderer(media_log, renderer, renderer_extension) {
    return this.$.createMediaFoundationRenderer(media_log, renderer, renderer_extension);
  }
  createFlingingRenderer(presentation_id, client_extension, renderer) {
    return this.$.createFlingingRenderer(presentation_id, client_extension, renderer);
  }
  createCdm(cdm_config) {
    return this.$.createCdm(cdm_config);
  }
};

media.mojom.InterfaceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InterfaceFactory', [
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

  createAudioDecoder(audio_decoder) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.InterfaceFactory_CreateAudioDecoder_ParamsSpec,
      null,
      [audio_decoder],
      false);
  }

  createVideoDecoder(video_decoder, dst_video_decoder) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.InterfaceFactory_CreateVideoDecoder_ParamsSpec,
      null,
      [video_decoder, dst_video_decoder],
      false);
  }

  createVideoDecoderWithTracker(receiver, tracker) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.InterfaceFactory_CreateVideoDecoderWithTracker_ParamsSpec,
      null,
      [receiver, tracker],
      false);
  }

  createAudioEncoder(audio_encoder) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.InterfaceFactory_CreateAudioEncoder_ParamsSpec,
      null,
      [audio_encoder],
      false);
  }

  createDefaultRenderer(audio_device_id, renderer) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.InterfaceFactory_CreateDefaultRenderer_ParamsSpec,
      null,
      [audio_device_id, renderer],
      false);
  }

  createCastRenderer(overlay_plane_id, renderer) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.InterfaceFactory_CreateCastRenderer_ParamsSpec,
      null,
      [overlay_plane_id, renderer],
      false);
  }

  createMediaFoundationRenderer(media_log, renderer, renderer_extension) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      media.mojom.InterfaceFactory_CreateMediaFoundationRenderer_ParamsSpec,
      null,
      [media_log, renderer, renderer_extension],
      false);
  }

  createFlingingRenderer(presentation_id, client_extension, renderer) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      media.mojom.InterfaceFactory_CreateFlingingRenderer_ParamsSpec,
      null,
      [presentation_id, client_extension, renderer],
      false);
  }

  createCdm(cdm_config) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      media.mojom.InterfaceFactory_CreateCdm_ParamsSpec,
      media.mojom.InterfaceFactory_CreateCdm_ResponseParamsSpec,
      [cdm_config],
      false);
  }

};

media.mojom.InterfaceFactory.getRemote = function() {
  let remote = new media.mojom.InterfaceFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.InterfaceFactory',
    'context');
  return remote.$;
};

media.mojom.InterfaceFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InterfaceFactory', [
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
        
        // Try Method 0: CreateAudioDecoder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateAudioDecoder_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateAudioDecoder (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateVideoDecoder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateVideoDecoder_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateVideoDecoder (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CreateVideoDecoderWithTracker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateVideoDecoderWithTracker_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateVideoDecoderWithTracker (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CreateAudioEncoder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateAudioEncoder_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateAudioEncoder (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CreateDefaultRenderer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateDefaultRenderer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateDefaultRenderer (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CreateCastRenderer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateCastRenderer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCastRenderer (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: CreateMediaFoundationRenderer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateMediaFoundationRenderer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateMediaFoundationRenderer (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: CreateFlingingRenderer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateFlingingRenderer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateFlingingRenderer (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: CreateCdm
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateCdm_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCdm (8)');
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
          const params = decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateAudioDecoder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createAudioDecoder');
          const result = this.impl.createAudioDecoder(params.audio_decoder);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateVideoDecoder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createVideoDecoder');
          const result = this.impl.createVideoDecoder(params.video_decoder, params.dst_video_decoder);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateVideoDecoderWithTracker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createVideoDecoderWithTracker');
          const result = this.impl.createVideoDecoderWithTracker(params.receiver, params.tracker);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateAudioEncoder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createAudioEncoder');
          const result = this.impl.createAudioEncoder(params.audio_encoder);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateDefaultRenderer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createDefaultRenderer');
          const result = this.impl.createDefaultRenderer(params.audio_device_id, params.renderer);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateCastRenderer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCastRenderer');
          const result = this.impl.createCastRenderer(params.overlay_plane_id, params.renderer);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateMediaFoundationRenderer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createMediaFoundationRenderer');
          const result = this.impl.createMediaFoundationRenderer(params.media_log, params.renderer, params.renderer_extension);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateFlingingRenderer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createFlingingRenderer');
          const result = this.impl.createFlingingRenderer(params.presentation_id, params.client_extension, params.renderer);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateCdm_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCdm');
          const result = this.impl.createCdm(params.cdm_config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.InterfaceFactory_CreateCdm_ResponseParamsSpec);
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

media.mojom.InterfaceFactoryReceiver = media.mojom.InterfaceFactoryReceiver;

media.mojom.InterfaceFactoryPtr = media.mojom.InterfaceFactoryRemote;
media.mojom.InterfaceFactoryRequest = media.mojom.InterfaceFactoryPendingReceiver;

