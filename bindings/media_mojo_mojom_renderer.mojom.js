// Auto-generated MojoJS binding
 // Source: chromium_src/media/mojo/mojom/renderer.mojom
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.media = mojo.internal.bindings.media || {};
mojo.internal.bindings.media.mojom = mojo.internal.bindings.media.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.media.mojom.Renderer = {};
mojo.internal.bindings.media.mojom.Renderer.$interfaceName = 'media.mojom.Renderer';
mojo.internal.bindings.media.mojom.Renderer_Initialize_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Renderer_Initialize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Renderer_Flush_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Renderer_Flush_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Renderer_StartPlayingFrom_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Renderer_SetPlaybackRate_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Renderer_SetVolume_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Renderer_SetCdm_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Renderer_SetCdm_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Renderer_SetLatencyHint_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.RendererClient = {};
mojo.internal.bindings.media.mojom.RendererClient.$interfaceName = 'media.mojom.RendererClient';
mojo.internal.bindings.media.mojom.RendererClient_OnTimeUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.RendererClient_OnBufferingStateChange_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.RendererClient_OnEnded_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.RendererClient_OnError_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.RendererClient_OnAudioConfigChange_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.RendererClient_OnVideoConfigChange_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.RendererClient_OnVideoNaturalSizeChange_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.RendererClient_OnVideoOpacityChange_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.RendererClient_OnStatisticsUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.RendererClient_OnWaiting_ParamsSpec = { $: {} };

// Interface: Renderer
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Renderer_Initialize_ParamsSpec, 'media.mojom.Renderer_Initialize_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_streams', 8, 0, mojo.internal.Array(mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.DemuxerStreamRemote), false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Renderer_Initialize_ResponseParamsSpec, 'media.mojom.Renderer_Initialize_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Renderer_Flush_ParamsSpec, 'media.mojom.Renderer_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Renderer_Flush_ResponseParamsSpec, 'media.mojom.Renderer_Flush_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Renderer_StartPlayingFrom_ParamsSpec, 'media.mojom.Renderer_StartPlayingFrom_Params', [
      mojo.internal.StructField('arg_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Renderer_SetPlaybackRate_ParamsSpec, 'media.mojom.Renderer_SetPlaybackRate_Params', [
      mojo.internal.StructField('arg_playback_rate', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Renderer_SetVolume_ParamsSpec, 'media.mojom.Renderer_SetVolume_Params', [
      mojo.internal.StructField('arg_volume', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Renderer_SetCdm_ParamsSpec, 'media.mojom.Renderer_SetCdm_Params', [
      mojo.internal.StructField('arg_cdm_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Renderer_SetCdm_ResponseParamsSpec, 'media.mojom.Renderer_SetCdm_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Renderer_SetLatencyHint_ParamsSpec, 'media.mojom.Renderer_SetLatencyHint_Params', [
      mojo.internal.StructField('arg_latency_hint', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.RendererPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.RendererRemote = class {
  static get $interfaceName() {
    return 'media.mojom.Renderer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.RendererPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.RendererRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initialize(arg_client, arg_streams) {
    return this.$.initialize(arg_client, arg_streams);
  }
  flush() {
    return this.$.flush();
  }
  startPlayingFrom(arg_time) {
    return this.$.startPlayingFrom(arg_time);
  }
  setPlaybackRate(arg_playback_rate) {
    return this.$.setPlaybackRate(arg_playback_rate);
  }
  setVolume(arg_volume) {
    return this.$.setVolume(arg_volume);
  }
  setCdm(arg_cdm_id) {
    return this.$.setCdm(arg_cdm_id);
  }
  setLatencyHint(arg_latency_hint) {
    return this.$.setLatencyHint(arg_latency_hint);
  }
};

mojo.internal.bindings.media.mojom.RendererRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Renderer', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  initialize(arg_client, arg_streams) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.Renderer_Initialize_ParamsSpec,
      mojo.internal.bindings.media.mojom.Renderer_Initialize_ResponseParamsSpec,
      [arg_client, arg_streams],
      false);
  }

  flush() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.Renderer_Flush_ParamsSpec,
      mojo.internal.bindings.media.mojom.Renderer_Flush_ResponseParamsSpec,
      [],
      false);
  }

  startPlayingFrom(arg_time) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media.mojom.Renderer_StartPlayingFrom_ParamsSpec,
      null,
      [arg_time],
      false);
  }

  setPlaybackRate(arg_playback_rate) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media.mojom.Renderer_SetPlaybackRate_ParamsSpec,
      null,
      [arg_playback_rate],
      false);
  }

  setVolume(arg_volume) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.media.mojom.Renderer_SetVolume_ParamsSpec,
      null,
      [arg_volume],
      false);
  }

  setCdm(arg_cdm_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.media.mojom.Renderer_SetCdm_ParamsSpec,
      mojo.internal.bindings.media.mojom.Renderer_SetCdm_ResponseParamsSpec,
      [arg_cdm_id],
      false);
  }

  setLatencyHint(arg_latency_hint) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.media.mojom.Renderer_SetLatencyHint_ParamsSpec,
      null,
      [arg_latency_hint],
      false);
  }

};

mojo.internal.bindings.media.mojom.Renderer.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.RendererRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.Renderer',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.RendererReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Renderer', [
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
        
        // Try Method 0: Initialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Renderer_Initialize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Flush
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Renderer_Flush_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Flush (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StartPlayingFrom
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Renderer_StartPlayingFrom_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartPlayingFrom (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetPlaybackRate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Renderer_SetPlaybackRate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPlaybackRate (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetVolume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Renderer_SetVolume_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVolume (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetCdm
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Renderer_SetCdm_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCdm (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetLatencyHint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Renderer_SetLatencyHint_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLatencyHint (6)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Renderer_Initialize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.arg_client, params.arg_streams);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.Renderer_Initialize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Initialize FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Renderer_Flush_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flush');
          const result = this.impl.flush();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.Renderer_Flush_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Flush FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Renderer_StartPlayingFrom_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startPlayingFrom');
          const result = this.impl.startPlayingFrom(params.arg_time);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Renderer_SetPlaybackRate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPlaybackRate');
          const result = this.impl.setPlaybackRate(params.arg_playback_rate);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Renderer_SetVolume_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVolume');
          const result = this.impl.setVolume(params.arg_volume);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Renderer_SetCdm_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCdm');
          const result = this.impl.setCdm(params.arg_cdm_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.Renderer_SetCdm_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetCdm FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Renderer_SetLatencyHint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setLatencyHint');
          const result = this.impl.setLatencyHint(params.arg_latency_hint);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.RendererReceiver = mojo.internal.bindings.media.mojom.RendererReceiver;

mojo.internal.bindings.media.mojom.RendererPtr = mojo.internal.bindings.media.mojom.RendererRemote;
mojo.internal.bindings.media.mojom.RendererRequest = mojo.internal.bindings.media.mojom.RendererPendingReceiver;


// Interface: RendererClient
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.RendererClient_OnTimeUpdate_ParamsSpec, 'media.mojom.RendererClient_OnTimeUpdate_Params', [
      mojo.internal.StructField('arg_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_capture_time', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.RendererClient_OnBufferingStateChange_ParamsSpec, 'media.mojom.RendererClient_OnBufferingStateChange_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.media.mojom.BufferingStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reason', 8, 0, mojo.internal.bindings.media.mojom.BufferingStateChangeReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.RendererClient_OnEnded_ParamsSpec, 'media.mojom.RendererClient_OnEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.RendererClient_OnError_ParamsSpec, 'media.mojom.RendererClient_OnError_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.media.mojom.PipelineStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.RendererClient_OnAudioConfigChange_ParamsSpec, 'media.mojom.RendererClient_OnAudioConfigChange_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.media.mojom.AudioDecoderConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.RendererClient_OnVideoConfigChange_ParamsSpec, 'media.mojom.RendererClient_OnVideoConfigChange_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.media.mojom.VideoDecoderConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.RendererClient_OnVideoNaturalSizeChange_ParamsSpec, 'media.mojom.RendererClient_OnVideoNaturalSizeChange_Params', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.RendererClient_OnVideoOpacityChange_ParamsSpec, 'media.mojom.RendererClient_OnVideoOpacityChange_Params', [
      mojo.internal.StructField('arg_opaque', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.RendererClient_OnStatisticsUpdate_ParamsSpec, 'media.mojom.RendererClient_OnStatisticsUpdate_Params', [
      mojo.internal.StructField('arg_stats', 0, 0, mojo.internal.bindings.media.mojom.PipelineStatisticsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.RendererClient_OnWaiting_ParamsSpec, 'media.mojom.RendererClient_OnWaiting_Params', [
      mojo.internal.StructField('arg_reason', 0, 0, mojo.internal.bindings.media.mojom.WaitingReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.RendererClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.RendererClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.RendererClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.RendererClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.RendererClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onTimeUpdate(arg_time, arg_max_time, arg_capture_time) {
    return this.$.onTimeUpdate(arg_time, arg_max_time, arg_capture_time);
  }
  onBufferingStateChange(arg_state, arg_reason) {
    return this.$.onBufferingStateChange(arg_state, arg_reason);
  }
  onEnded() {
    return this.$.onEnded();
  }
  onError(arg_status) {
    return this.$.onError(arg_status);
  }
  onAudioConfigChange(arg_config) {
    return this.$.onAudioConfigChange(arg_config);
  }
  onVideoConfigChange(arg_config) {
    return this.$.onVideoConfigChange(arg_config);
  }
  onVideoNaturalSizeChange(arg_size) {
    return this.$.onVideoNaturalSizeChange(arg_size);
  }
  onVideoOpacityChange(arg_opaque) {
    return this.$.onVideoOpacityChange(arg_opaque);
  }
  onStatisticsUpdate(arg_stats) {
    return this.$.onStatisticsUpdate(arg_stats);
  }
  onWaiting(arg_reason) {
    return this.$.onWaiting(arg_reason);
  }
};

mojo.internal.bindings.media.mojom.RendererClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RendererClient', [
      { explicit: null },
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

  onTimeUpdate(arg_time, arg_max_time, arg_capture_time) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.RendererClient_OnTimeUpdate_ParamsSpec,
      null,
      [arg_time, arg_max_time, arg_capture_time],
      false);
  }

  onBufferingStateChange(arg_state, arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.RendererClient_OnBufferingStateChange_ParamsSpec,
      null,
      [arg_state, arg_reason],
      false);
  }

  onEnded() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media.mojom.RendererClient_OnEnded_ParamsSpec,
      null,
      [],
      false);
  }

  onError(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media.mojom.RendererClient_OnError_ParamsSpec,
      null,
      [arg_status],
      false);
  }

  onAudioConfigChange(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.media.mojom.RendererClient_OnAudioConfigChange_ParamsSpec,
      null,
      [arg_config],
      false);
  }

  onVideoConfigChange(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.media.mojom.RendererClient_OnVideoConfigChange_ParamsSpec,
      null,
      [arg_config],
      false);
  }

  onVideoNaturalSizeChange(arg_size) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.media.mojom.RendererClient_OnVideoNaturalSizeChange_ParamsSpec,
      null,
      [arg_size],
      false);
  }

  onVideoOpacityChange(arg_opaque) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.media.mojom.RendererClient_OnVideoOpacityChange_ParamsSpec,
      null,
      [arg_opaque],
      false);
  }

  onStatisticsUpdate(arg_stats) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.media.mojom.RendererClient_OnStatisticsUpdate_ParamsSpec,
      null,
      [arg_stats],
      false);
  }

  onWaiting(arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.media.mojom.RendererClient_OnWaiting_ParamsSpec,
      null,
      [arg_reason],
      false);
  }

};

mojo.internal.bindings.media.mojom.RendererClient.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.RendererClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.RendererClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.RendererClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RendererClient', [
      { explicit: null },
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
        
        // Try Method 0: OnTimeUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnTimeUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTimeUpdate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnBufferingStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnBufferingStateChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBufferingStateChange (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnEnded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnEnded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEnded (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnAudioConfigChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnAudioConfigChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAudioConfigChange (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnVideoConfigChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnVideoConfigChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVideoConfigChange (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnVideoNaturalSizeChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnVideoNaturalSizeChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVideoNaturalSizeChange (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnVideoOpacityChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnVideoOpacityChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVideoOpacityChange (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnStatisticsUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnStatisticsUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStatisticsUpdate (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnWaiting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnWaiting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWaiting (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnTimeUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTimeUpdate');
          const result = this.impl.onTimeUpdate(params.arg_time, params.arg_max_time, params.arg_capture_time);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnBufferingStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBufferingStateChange');
          const result = this.impl.onBufferingStateChange(params.arg_state, params.arg_reason);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnEnded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEnded');
          const result = this.impl.onEnded();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.arg_status);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnAudioConfigChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAudioConfigChange');
          const result = this.impl.onAudioConfigChange(params.arg_config);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnVideoConfigChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVideoConfigChange');
          const result = this.impl.onVideoConfigChange(params.arg_config);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnVideoNaturalSizeChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVideoNaturalSizeChange');
          const result = this.impl.onVideoNaturalSizeChange(params.arg_size);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnVideoOpacityChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVideoOpacityChange');
          const result = this.impl.onVideoOpacityChange(params.arg_opaque);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnStatisticsUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStatisticsUpdate');
          const result = this.impl.onStatisticsUpdate(params.arg_stats);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.RendererClient_OnWaiting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWaiting');
          const result = this.impl.onWaiting(params.arg_reason);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.RendererClientReceiver = mojo.internal.bindings.media.mojom.RendererClientReceiver;

mojo.internal.bindings.media.mojom.RendererClientPtr = mojo.internal.bindings.media.mojom.RendererClientRemote;
mojo.internal.bindings.media.mojom.RendererClientRequest = mojo.internal.bindings.media.mojom.RendererClientPendingReceiver;

