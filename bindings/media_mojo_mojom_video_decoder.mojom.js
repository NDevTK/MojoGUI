// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_decoder.mojom
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
var gpu = gpu || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

media.mojom.CdmSpec = { $: {} };
media.mojom.SupportedVideoDecoderConfigSpec = { $: {} };
media.mojom.CommandBufferIdSpec = { $: {} };
media.mojom.VideoFrameHandleReleaser = {};
media.mojom.VideoFrameHandleReleaser.$interfaceName = 'media.mojom.VideoFrameHandleReleaser';
media.mojom.VideoFrameHandleReleaser_ReleaseVideoFrame_ParamsSpec = { $: {} };
media.mojom.VideoDecoder = {};
media.mojom.VideoDecoder.$interfaceName = 'media.mojom.VideoDecoder';
media.mojom.VideoDecoder_GetSupportedConfigs_ParamsSpec = { $: {} };
media.mojom.VideoDecoder_GetSupportedConfigs_ResponseParamsSpec = { $: {} };
media.mojom.VideoDecoder_Construct_ParamsSpec = { $: {} };
media.mojom.VideoDecoder_Initialize_ParamsSpec = { $: {} };
media.mojom.VideoDecoder_Initialize_ResponseParamsSpec = { $: {} };
media.mojom.VideoDecoder_Decode_ParamsSpec = { $: {} };
media.mojom.VideoDecoder_Decode_ResponseParamsSpec = { $: {} };
media.mojom.VideoDecoder_Reset_ParamsSpec = { $: {} };
media.mojom.VideoDecoder_Reset_ResponseParamsSpec = { $: {} };
media.mojom.VideoDecoder_OnOverlayInfoChanged_ParamsSpec = { $: {} };
media.mojom.VideoDecoderClient = {};
media.mojom.VideoDecoderClient.$interfaceName = 'media.mojom.VideoDecoderClient';
media.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec = { $: {} };
media.mojom.VideoDecoderClient_OnWaiting_ParamsSpec = { $: {} };
media.mojom.VideoDecoderClient_RequestOverlayInfo_ParamsSpec = { $: {} };

// Union: Cdm
mojo.internal.Union(
    media.mojom.CdmSpec, 'media.mojom.Cdm', {
      'cdm_id': {
        'ordinal': 0,
        'type': mojo_base.mojom.UnguessableTokenSpec.$,
        'nullable': false,
      },
      'cdm_context': {
        'ordinal': 1,
        'type': mojo.internal.InterfaceProxy(media.mojom.CdmContextForOOPVDRemote),
        'nullable': false,
      },
    });

// Struct: SupportedVideoDecoderConfig
mojo.internal.Struct(
    media.mojom.SupportedVideoDecoderConfigSpec, 'media.mojom.SupportedVideoDecoderConfig', [
      mojo.internal.StructField('profile_min', 0, 0, gpu.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('profile_max', 8, 0, gpu.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('coded_size_min', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('coded_size_max', 24, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allow_encrypted', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('require_encrypted', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: CommandBufferId
mojo.internal.Struct(
    media.mojom.CommandBufferIdSpec, 'media.mojom.CommandBufferId', [
      mojo.internal.StructField('channel_token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('route_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: VideoFrameHandleReleaser
mojo.internal.Struct(
    media.mojom.VideoFrameHandleReleaser_ReleaseVideoFrame_ParamsSpec, 'media.mojom.VideoFrameHandleReleaser_ReleaseVideoFrame_Params', [
      mojo.internal.StructField('release_token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('release_sync_token', 8, 0, gpu.mojom.SyncTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.VideoFrameHandleReleaserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoFrameHandleReleaserRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoFrameHandleReleaser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoFrameHandleReleaserPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoFrameHandleReleaserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  releaseVideoFrame(release_token, release_sync_token) {
    return this.$.releaseVideoFrame(release_token, release_sync_token);
  }
};

media.mojom.VideoFrameHandleReleaserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoFrameHandleReleaser', [
      { explicit: null },
    ]);
  }

  releaseVideoFrame(release_token, release_sync_token) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.VideoFrameHandleReleaser_ReleaseVideoFrame_ParamsSpec,
      null,
      [release_token, release_sync_token],
      false);
  }

};

media.mojom.VideoFrameHandleReleaser.getRemote = function() {
  let remote = new media.mojom.VideoFrameHandleReleaserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoFrameHandleReleaser',
    'context');
  return remote.$;
};

media.mojom.VideoFrameHandleReleaserReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoFrameHandleReleaser', [
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
        
        // Try Method 0: ReleaseVideoFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoFrameHandleReleaser_ReleaseVideoFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReleaseVideoFrame (0)');
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
          const params = decoder.decodeStructInline(media.mojom.VideoFrameHandleReleaser_ReleaseVideoFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.releaseVideoFrame');
          const result = this.impl.releaseVideoFrame(params.release_token, params.release_sync_token);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.VideoFrameHandleReleaserReceiver = media.mojom.VideoFrameHandleReleaserReceiver;

media.mojom.VideoFrameHandleReleaserPtr = media.mojom.VideoFrameHandleReleaserRemote;
media.mojom.VideoFrameHandleReleaserRequest = media.mojom.VideoFrameHandleReleaserPendingReceiver;


// Interface: VideoDecoder
mojo.internal.Struct(
    media.mojom.VideoDecoder_GetSupportedConfigs_ParamsSpec, 'media.mojom.VideoDecoder_GetSupportedConfigs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.VideoDecoder_GetSupportedConfigs_ResponseParamsSpec, 'media.mojom.VideoDecoder_GetSupportedConfigs_ResponseParams', [
      mojo.internal.StructField('supported_configs', 0, 0, mojo.internal.Array(media.mojom.SupportedVideoDecoderConfigSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('decoder_type', 8, 0, media.mojom.VideoDecoderTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.VideoDecoder_Construct_ParamsSpec, 'media.mojom.VideoDecoder_Construct_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('media_log', 8, 0, mojo.internal.InterfaceProxy(media.mojom.MediaLogRemote), null, false, 0, undefined),
      mojo.internal.StructField('video_frame_handle_releaser', 16, 0, mojo.internal.InterfaceRequest(media.mojom.VideoFrameHandleReleaserSpec), null, false, 0, undefined),
      mojo.internal.StructField('decoder_buffer_pipe', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('command_buffer_id', 32, 0, media.mojom.CommandBufferIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('target_color_space', 40, 0, gfx.mojom.ColorSpaceSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    media.mojom.VideoDecoder_Initialize_ParamsSpec, 'media.mojom.VideoDecoder_Initialize_Params', [
      mojo.internal.StructField('config', 0, 0, media.mojom.VideoDecoderConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cdm', 8, 0, media.mojom.CdmSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('low_delay', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.VideoDecoder_Initialize_ResponseParamsSpec, 'media.mojom.VideoDecoder_Initialize_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.DecoderStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('decoder_type', 8, 0, media.mojom.VideoDecoderTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_decode_requests', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('needs_bitstream_conversion', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('needs_transcryption', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.VideoDecoder_Decode_ParamsSpec, 'media.mojom.VideoDecoder_Decode_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.DecoderBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoDecoder_Decode_ResponseParamsSpec, 'media.mojom.VideoDecoder_Decode_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.DecoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoDecoder_Reset_ParamsSpec, 'media.mojom.VideoDecoder_Reset_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.VideoDecoder_Reset_ResponseParamsSpec, 'media.mojom.VideoDecoder_Reset_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.VideoDecoder_OnOverlayInfoChanged_ParamsSpec, 'media.mojom.VideoDecoder_OnOverlayInfoChanged_Params', [
      mojo.internal.StructField('overlay_info', 0, 0, gpu.mojom.OverlayInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.VideoDecoderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoDecoderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoDecoder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoDecoderPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoDecoderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getSupportedConfigs() {
    return this.$.getSupportedConfigs();
  }
  construct(client, media_log, video_frame_handle_releaser, decoder_buffer_pipe, command_buffer_id, target_color_space) {
    return this.$.construct(client, media_log, video_frame_handle_releaser, decoder_buffer_pipe, command_buffer_id, target_color_space);
  }
  initialize(config, low_delay, cdm) {
    return this.$.initialize(config, low_delay, cdm);
  }
  decode(buffer) {
    return this.$.decode(buffer);
  }
  reset() {
    return this.$.reset();
  }
  onOverlayInfoChanged(overlay_info) {
    return this.$.onOverlayInfoChanged(overlay_info);
  }
};

media.mojom.VideoDecoderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoDecoder', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getSupportedConfigs() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.VideoDecoder_GetSupportedConfigs_ParamsSpec,
      media.mojom.VideoDecoder_GetSupportedConfigs_ResponseParamsSpec,
      [],
      false);
  }

  construct(client, media_log, video_frame_handle_releaser, decoder_buffer_pipe, command_buffer_id, target_color_space) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.VideoDecoder_Construct_ParamsSpec,
      null,
      [client, media_log, video_frame_handle_releaser, decoder_buffer_pipe, command_buffer_id, target_color_space],
      false);
  }

  initialize(config, low_delay, cdm) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.VideoDecoder_Initialize_ParamsSpec,
      media.mojom.VideoDecoder_Initialize_ResponseParamsSpec,
      [config, low_delay, cdm],
      false);
  }

  decode(buffer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.VideoDecoder_Decode_ParamsSpec,
      media.mojom.VideoDecoder_Decode_ResponseParamsSpec,
      [buffer],
      false);
  }

  reset() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.VideoDecoder_Reset_ParamsSpec,
      media.mojom.VideoDecoder_Reset_ResponseParamsSpec,
      [],
      false);
  }

  onOverlayInfoChanged(overlay_info) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.VideoDecoder_OnOverlayInfoChanged_ParamsSpec,
      null,
      [overlay_info],
      false);
  }

};

media.mojom.VideoDecoder.getRemote = function() {
  let remote = new media.mojom.VideoDecoderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoDecoder',
    'context');
  return remote.$;
};

media.mojom.VideoDecoderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoDecoder', [
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
        
        // Try Method 0: GetSupportedConfigs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoDecoder_GetSupportedConfigs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSupportedConfigs (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Construct
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoDecoder_Construct_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Construct (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Initialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoDecoder_Initialize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Decode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoDecoder_Decode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Decode (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Reset
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoDecoder_Reset_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Reset (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnOverlayInfoChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoDecoder_OnOverlayInfoChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOverlayInfoChanged (5)');
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
          const params = decoder.decodeStructInline(media.mojom.VideoDecoder_GetSupportedConfigs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSupportedConfigs');
          const result = this.impl.getSupportedConfigs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.VideoDecoder_GetSupportedConfigs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoDecoder_Construct_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.construct');
          const result = this.impl.construct(params.client, params.media_log, params.video_frame_handle_releaser, params.decoder_buffer_pipe, params.command_buffer_id, params.target_color_space);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoDecoder_Initialize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.config, params.low_delay, params.cdm);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.VideoDecoder_Initialize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoDecoder_Decode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.decode');
          const result = this.impl.decode(params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.VideoDecoder_Decode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoDecoder_Reset_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reset');
          const result = this.impl.reset();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.VideoDecoder_Reset_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoDecoder_OnOverlayInfoChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOverlayInfoChanged');
          const result = this.impl.onOverlayInfoChanged(params.overlay_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.VideoDecoderReceiver = media.mojom.VideoDecoderReceiver;

media.mojom.VideoDecoderPtr = media.mojom.VideoDecoderRemote;
media.mojom.VideoDecoderRequest = media.mojom.VideoDecoderPendingReceiver;


// Interface: VideoDecoderClient
mojo.internal.Struct(
    media.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec, 'media.mojom.VideoDecoderClient_OnVideoFrameDecoded_Params', [
      mojo.internal.StructField('frame', 0, 0, media.mojom.VideoFrameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('release_token', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('can_read_without_stalling', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.VideoDecoderClient_OnWaiting_ParamsSpec, 'media.mojom.VideoDecoderClient_OnWaiting_Params', [
      mojo.internal.StructField('reason', 0, 0, media.mojom.WaitingReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoDecoderClient_RequestOverlayInfo_ParamsSpec, 'media.mojom.VideoDecoderClient_RequestOverlayInfo_Params', [
    ],
    [[0, 8]]);

media.mojom.VideoDecoderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoDecoderClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoDecoderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoDecoderClientPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoDecoderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onVideoFrameDecoded(frame, can_read_without_stalling, release_token) {
    return this.$.onVideoFrameDecoded(frame, can_read_without_stalling, release_token);
  }
  onWaiting(reason) {
    return this.$.onWaiting(reason);
  }
  requestOverlayInfo() {
    return this.$.requestOverlayInfo();
  }
};

media.mojom.VideoDecoderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoDecoderClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onVideoFrameDecoded(frame, can_read_without_stalling, release_token) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec,
      null,
      [frame, can_read_without_stalling, release_token],
      false);
  }

  onWaiting(reason) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.VideoDecoderClient_OnWaiting_ParamsSpec,
      null,
      [reason],
      false);
  }

  requestOverlayInfo() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.VideoDecoderClient_RequestOverlayInfo_ParamsSpec,
      null,
      [],
      false);
  }

};

media.mojom.VideoDecoderClient.getRemote = function() {
  let remote = new media.mojom.VideoDecoderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoDecoderClient',
    'context');
  return remote.$;
};

media.mojom.VideoDecoderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoDecoderClient', [
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
        
        // Try Method 0: OnVideoFrameDecoded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVideoFrameDecoded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnWaiting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoDecoderClient_OnWaiting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWaiting (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RequestOverlayInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoDecoderClient_RequestOverlayInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestOverlayInfo (2)');
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
          const params = decoder.decodeStructInline(media.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVideoFrameDecoded');
          const result = this.impl.onVideoFrameDecoded(params.frame, params.can_read_without_stalling, params.release_token);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoDecoderClient_OnWaiting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWaiting');
          const result = this.impl.onWaiting(params.reason);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoDecoderClient_RequestOverlayInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestOverlayInfo');
          const result = this.impl.requestOverlayInfo();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.VideoDecoderClientReceiver = media.mojom.VideoDecoderClientReceiver;

media.mojom.VideoDecoderClientPtr = media.mojom.VideoDecoderClientRemote;
media.mojom.VideoDecoderClientRequest = media.mojom.VideoDecoderClientPendingReceiver;

