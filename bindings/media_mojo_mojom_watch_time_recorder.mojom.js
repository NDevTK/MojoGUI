// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/watch_time_recorder.mojom
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
var gfx = gfx || {};

media.mojom.PlaybackPropertiesSpec = { $: {} };
media.mojom.SecondaryPlaybackPropertiesSpec = { $: {} };
media.mojom.WatchTimeRecorder = {};
media.mojom.WatchTimeRecorder.$interfaceName = 'media.mojom.WatchTimeRecorder';
media.mojom.WatchTimeRecorder_RecordWatchTime_ParamsSpec = { $: {} };
media.mojom.WatchTimeRecorder_FinalizeWatchTime_ParamsSpec = { $: {} };
media.mojom.WatchTimeRecorder_OnError_ParamsSpec = { $: {} };
media.mojom.WatchTimeRecorder_UpdateSecondaryProperties_ParamsSpec = { $: {} };
media.mojom.WatchTimeRecorder_SetAutoplayInitiated_ParamsSpec = { $: {} };
media.mojom.WatchTimeRecorder_OnDurationChanged_ParamsSpec = { $: {} };
media.mojom.WatchTimeRecorder_UpdateVideoDecodeStats_ParamsSpec = { $: {} };
media.mojom.WatchTimeRecorder_UpdateUnderflowCount_ParamsSpec = { $: {} };
media.mojom.WatchTimeRecorder_UpdateUnderflowDuration_ParamsSpec = { $: {} };

// Struct: PlaybackProperties
mojo.internal.Struct(
    media.mojom.PlaybackPropertiesSpec, 'media.mojom.PlaybackProperties', [
      mojo.internal.StructField('media_stream_type', 0, 0, media.mojom.MediaStreamTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('renderer_type', 8, 0, media.mojom.RendererTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('demuxer_type', 16, 0, media.mojom.DemuxerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_audio', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_video', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_background', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_muted', 24, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_eme', 24, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_embedded_media_experience', 24, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SecondaryPlaybackProperties
mojo.internal.Struct(
    media.mojom.SecondaryPlaybackPropertiesSpec, 'media.mojom.SecondaryPlaybackProperties', [
      mojo.internal.StructField('audio_codec', 0, 0, media.mojom.AudioCodecSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('video_codec', 8, 0, media.mojom.VideoCodecSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('audio_codec_profile', 16, 0, media.mojom.AudioCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('video_codec_profile', 24, 0, media.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('audio_decoder', 32, 0, media.mojom.AudioDecoderTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('video_decoder', 40, 0, media.mojom.VideoDecoderTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('audio_encryption_scheme', 48, 0, media.mojom.EncryptionSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('video_encryption_scheme', 56, 0, media.mojom.EncryptionSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('natural_size', 64, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 80]]);

// Interface: WatchTimeRecorder
mojo.internal.Struct(
    media.mojom.WatchTimeRecorder_RecordWatchTime_ParamsSpec, 'media.mojom.WatchTimeRecorder_RecordWatchTime_Params', [
      mojo.internal.StructField('key', 0, 0, media.mojom.WatchTimeKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('watch_time', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.WatchTimeRecorder_FinalizeWatchTime_ParamsSpec, 'media.mojom.WatchTimeRecorder_FinalizeWatchTime_Params', [
      mojo.internal.StructField('watch_time_keys', 0, 0, mojo.internal.Array(media.mojom.WatchTimeKeySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.WatchTimeRecorder_OnError_ParamsSpec, 'media.mojom.WatchTimeRecorder_OnError_Params', [
      mojo.internal.StructField('status', 0, 0, media.mojom.PipelineStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.WatchTimeRecorder_UpdateSecondaryProperties_ParamsSpec, 'media.mojom.WatchTimeRecorder_UpdateSecondaryProperties_Params', [
      mojo.internal.StructField('secondary_properties', 0, 0, media.mojom.SecondaryPlaybackPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.WatchTimeRecorder_SetAutoplayInitiated_ParamsSpec, 'media.mojom.WatchTimeRecorder_SetAutoplayInitiated_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.WatchTimeRecorder_OnDurationChanged_ParamsSpec, 'media.mojom.WatchTimeRecorder_OnDurationChanged_Params', [
      mojo.internal.StructField('duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.WatchTimeRecorder_UpdateVideoDecodeStats_ParamsSpec, 'media.mojom.WatchTimeRecorder_UpdateVideoDecodeStats_Params', [
      mojo.internal.StructField('frames_decoded', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('frames_dropped', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.WatchTimeRecorder_UpdateUnderflowCount_ParamsSpec, 'media.mojom.WatchTimeRecorder_UpdateUnderflowCount_Params', [
      mojo.internal.StructField('total_count', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.WatchTimeRecorder_UpdateUnderflowDuration_ParamsSpec, 'media.mojom.WatchTimeRecorder_UpdateUnderflowDuration_Params', [
      mojo.internal.StructField('total_duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('total_completed_count', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.WatchTimeRecorderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.WatchTimeRecorderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.WatchTimeRecorder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.WatchTimeRecorderPendingReceiver,
      handle);
    this.$ = new media.mojom.WatchTimeRecorderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.WatchTimeRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WatchTimeRecorder', [
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

  recordWatchTime(key, watch_time) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.WatchTimeRecorder_RecordWatchTime_ParamsSpec,
      null,
      [key, watch_time],
      false);
  }

  finalizeWatchTime(watch_time_keys) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.WatchTimeRecorder_FinalizeWatchTime_ParamsSpec,
      null,
      [watch_time_keys],
      false);
  }

  onError(status) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.WatchTimeRecorder_OnError_ParamsSpec,
      null,
      [status],
      false);
  }

  updateSecondaryProperties(secondary_properties) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.WatchTimeRecorder_UpdateSecondaryProperties_ParamsSpec,
      null,
      [secondary_properties],
      false);
  }

  setAutoplayInitiated(value) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.WatchTimeRecorder_SetAutoplayInitiated_ParamsSpec,
      null,
      [value],
      false);
  }

  onDurationChanged(duration) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.WatchTimeRecorder_OnDurationChanged_ParamsSpec,
      null,
      [duration],
      false);
  }

  updateVideoDecodeStats(frames_decoded, frames_dropped) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      media.mojom.WatchTimeRecorder_UpdateVideoDecodeStats_ParamsSpec,
      null,
      [frames_decoded, frames_dropped],
      false);
  }

  updateUnderflowCount(total_count) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      media.mojom.WatchTimeRecorder_UpdateUnderflowCount_ParamsSpec,
      null,
      [total_count],
      false);
  }

  updateUnderflowDuration(total_completed_count, total_duration) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      media.mojom.WatchTimeRecorder_UpdateUnderflowDuration_ParamsSpec,
      null,
      [total_completed_count, total_duration],
      false);
  }

};

media.mojom.WatchTimeRecorder.getRemote = function() {
  let remote = new media.mojom.WatchTimeRecorderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.WatchTimeRecorder',
    'context');
  return remote.$;
};

media.mojom.WatchTimeRecorderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WatchTimeRecorder', [
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
        
        // Try Method 0: RecordWatchTime
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.WatchTimeRecorder_RecordWatchTime_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordWatchTime (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: FinalizeWatchTime
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.WatchTimeRecorder_FinalizeWatchTime_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FinalizeWatchTime (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.WatchTimeRecorder_OnError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: UpdateSecondaryProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.WatchTimeRecorder_UpdateSecondaryProperties_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateSecondaryProperties (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetAutoplayInitiated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.WatchTimeRecorder_SetAutoplayInitiated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAutoplayInitiated (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnDurationChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.WatchTimeRecorder_OnDurationChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDurationChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: UpdateVideoDecodeStats
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.WatchTimeRecorder_UpdateVideoDecodeStats_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateVideoDecodeStats (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: UpdateUnderflowCount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.WatchTimeRecorder_UpdateUnderflowCount_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateUnderflowCount (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: UpdateUnderflowDuration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.WatchTimeRecorder_UpdateUnderflowDuration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateUnderflowDuration (8)');
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
          const params = decoder.decodeStructInline(media.mojom.WatchTimeRecorder_RecordWatchTime_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordWatchTime');
          const result = this.impl.recordWatchTime(params.key, params.watch_time);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.WatchTimeRecorder_FinalizeWatchTime_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.finalizeWatchTime');
          const result = this.impl.finalizeWatchTime(params.watch_time_keys);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.WatchTimeRecorder_OnError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.status);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.WatchTimeRecorder_UpdateSecondaryProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateSecondaryProperties');
          const result = this.impl.updateSecondaryProperties(params.secondary_properties);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.WatchTimeRecorder_SetAutoplayInitiated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAutoplayInitiated');
          const result = this.impl.setAutoplayInitiated(params.value);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.WatchTimeRecorder_OnDurationChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDurationChanged');
          const result = this.impl.onDurationChanged(params.duration);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.WatchTimeRecorder_UpdateVideoDecodeStats_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateVideoDecodeStats');
          const result = this.impl.updateVideoDecodeStats(params.frames_decoded, params.frames_dropped);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.WatchTimeRecorder_UpdateUnderflowCount_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateUnderflowCount');
          const result = this.impl.updateUnderflowCount(params.total_count);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.WatchTimeRecorder_UpdateUnderflowDuration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateUnderflowDuration');
          const result = this.impl.updateUnderflowDuration(params.total_completed_count, params.total_duration);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.WatchTimeRecorderReceiver = media.mojom.WatchTimeRecorderReceiver;

media.mojom.WatchTimeRecorderPtr = media.mojom.WatchTimeRecorderRemote;
media.mojom.WatchTimeRecorderRequest = media.mojom.WatchTimeRecorderPendingReceiver;

