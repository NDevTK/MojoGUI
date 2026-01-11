// Auto-generated MojoJS binding
 // Source: chromium_src/services/media_session/public/mojom/audio_focus.mojom
 // Module: media_session.mojom

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
 

 mojo.internal.bindings.media_session = mojo.internal.bindings.media_session || {};
mojo.internal.bindings.media_session.mojom = mojo.internal.bindings.media_session.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.media_session.mojom.EnforcementModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media_session.mojom.AudioFocusTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media_session.mojom.AudioFocusRequestStateSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusObserver = {};
mojo.internal.bindings.media_session.mojom.AudioFocusObserver.$interfaceName = 'media_session.mojom.AudioFocusObserver';
mojo.internal.bindings.media_session.mojom.AudioFocusObserver_OnFocusGained_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusObserver_OnFocusLost_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusObserver_OnRequestIdReleased_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient = {};
mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient.$interfaceName = 'media_session.mojom.AudioFocusRequestClient';
mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient_AbandonAudioFocus_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient_MediaSessionInfoChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusManager = {};
mojo.internal.bindings.media_session.mojom.AudioFocusManager.$interfaceName = 'media_session.mojom.AudioFocusManager';
mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestAudioFocus_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestAudioFocus_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusManager_GetFocusRequests_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusManager_GetFocusRequests_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusManager_AddObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusManager_SetSource_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusManager_SetEnforcementMode_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusManager_AddSourceObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestIdReleased_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusManager_StartDuckingAllAudio_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusManager_StopDuckingAllAudio_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusManager_FlushForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusManager_FlushForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebug = {};
mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebug.$interfaceName = 'media_session.mojom.AudioFocusManagerDebug';
mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParamsSpec = { $: {} };

// Enum: EnforcementMode
mojo.internal.bindings.media_session.mojom.EnforcementMode = {
  kDefault: 0,
  kNone: 1,
  kSingleGroup: 2,
  kSingleSession: 3,
};

// Enum: AudioFocusType
mojo.internal.bindings.media_session.mojom.AudioFocusType = {
  kGain: 0,
  kGainTransientMayDuck: 1,
  kGainTransient: 2,
  kAmbient: 3,
};

// Struct: AudioFocusRequestState
mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusRequestStateSpec, 'media_session.mojom.AudioFocusRequestState', [
      mojo.internal.StructField('arg_session_info', 0, 0, mojo.internal.bindings.media_session.mojom.MediaSessionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_audio_focus_type', 8, 0, mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.AudioFocusTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_name', 16, 0, mojo.internal.String, null, true, 2, undefined),
      mojo.internal.StructField('arg_request_id', 24, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 3, undefined),
      mojo.internal.StructField('arg_source_id', 32, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 9, undefined),
    ],
    [[0, 24], [2, 32], [3, 40], [9, 48]]);

// Interface: AudioFocusObserver
mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusObserver_OnFocusGained_ParamsSpec, 'media_session.mojom.AudioFocusObserver_OnFocusGained_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.AudioFocusRequestStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusObserver_OnFocusLost_ParamsSpec, 'media_session.mojom.AudioFocusObserver_OnFocusLost_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.AudioFocusRequestStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusObserver_OnRequestIdReleased_ParamsSpec, 'media_session.mojom.AudioFocusObserver_OnRequestIdReleased_Params', [
      mojo.internal.StructField('arg_request_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media_session.mojom.AudioFocusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media_session.mojom.AudioFocusObserverRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.AudioFocusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media_session.mojom.AudioFocusObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media_session.mojom.AudioFocusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onFocusGained(arg_state) {
    return this.$.onFocusGained(arg_state);
  }
  onFocusLost(arg_state) {
    return this.$.onFocusLost(arg_state);
  }
  onRequestIdReleased(arg_request_id) {
    return this.$.onRequestIdReleased(arg_request_id);
  }
};

mojo.internal.bindings.media_session.mojom.AudioFocusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioFocusObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  onFocusGained(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media_session.mojom.AudioFocusObserver_OnFocusGained_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  onFocusLost(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media_session.mojom.AudioFocusObserver_OnFocusLost_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  onRequestIdReleased(arg_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media_session.mojom.AudioFocusObserver_OnRequestIdReleased_ParamsSpec,
      null,
      [arg_request_id],
      false);
  }

};

mojo.internal.bindings.media_session.mojom.AudioFocusObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.media_session.mojom.AudioFocusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.AudioFocusObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.media_session.mojom.AudioFocusObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioFocusObserver', [
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
        
        // Try Method 0: OnFocusGained
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusObserver_OnFocusGained_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFocusGained (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnFocusLost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusObserver_OnFocusLost_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFocusLost (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnRequestIdReleased
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusObserver_OnRequestIdReleased_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRequestIdReleased (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusObserver_OnFocusGained_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFocusGained');
          const result = this.impl.onFocusGained(params.arg_state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusObserver_OnFocusLost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFocusLost');
          const result = this.impl.onFocusLost(params.arg_state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusObserver_OnRequestIdReleased_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRequestIdReleased');
          const result = this.impl.onRequestIdReleased(params.arg_request_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media_session.mojom.AudioFocusObserverReceiver = mojo.internal.bindings.media_session.mojom.AudioFocusObserverReceiver;

mojo.internal.bindings.media_session.mojom.AudioFocusObserverPtr = mojo.internal.bindings.media_session.mojom.AudioFocusObserverRemote;
mojo.internal.bindings.media_session.mojom.AudioFocusObserverRequest = mojo.internal.bindings.media_session.mojom.AudioFocusObserverPendingReceiver;


// Interface: AudioFocusRequestClient
mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ParamsSpec, 'media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_Params', [
      mojo.internal.StructField('arg_session_info', 0, 0, mojo.internal.bindings.media_session.mojom.MediaSessionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.AudioFocusTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ResponseParamsSpec, 'media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient_AbandonAudioFocus_ParamsSpec, 'media_session.mojom.AudioFocusRequestClient_AbandonAudioFocus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient_MediaSessionInfoChanged_ParamsSpec, 'media_session.mojom.AudioFocusRequestClient_MediaSessionInfoChanged_Params', [
      mojo.internal.StructField('arg_session_info', 0, 0, mojo.internal.bindings.media_session.mojom.MediaSessionInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media_session.mojom.AudioFocusRequestClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media_session.mojom.AudioFocusRequestClientRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.AudioFocusRequestClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media_session.mojom.AudioFocusRequestClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media_session.mojom.AudioFocusRequestClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestAudioFocus(arg_session_info, arg_type) {
    return this.$.requestAudioFocus(arg_session_info, arg_type);
  }
  abandonAudioFocus() {
    return this.$.abandonAudioFocus();
  }
  mediaSessionInfoChanged(arg_session_info) {
    return this.$.mediaSessionInfoChanged(arg_session_info);
  }
};

mojo.internal.bindings.media_session.mojom.AudioFocusRequestClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioFocusRequestClient', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  requestAudioFocus(arg_session_info, arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ParamsSpec,
      mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ResponseParamsSpec,
      [arg_session_info, arg_type],
      false);
  }

  abandonAudioFocus() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient_AbandonAudioFocus_ParamsSpec,
      null,
      [],
      false);
  }

  mediaSessionInfoChanged(arg_session_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient_MediaSessionInfoChanged_ParamsSpec,
      null,
      [arg_session_info],
      false);
  }

};

mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient.getRemote = function() {
  let remote = new mojo.internal.bindings.media_session.mojom.AudioFocusRequestClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.AudioFocusRequestClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.media_session.mojom.AudioFocusRequestClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioFocusRequestClient', [
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
        
        // Try Method 0: RequestAudioFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestAudioFocus (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AbandonAudioFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient_AbandonAudioFocus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AbandonAudioFocus (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: MediaSessionInfoChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient_MediaSessionInfoChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaSessionInfoChanged (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestAudioFocus');
          const result = this.impl.requestAudioFocus(params.arg_session_info, params.arg_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestAudioFocus FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient_AbandonAudioFocus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.abandonAudioFocus');
          const result = this.impl.abandonAudioFocus();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusRequestClient_MediaSessionInfoChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionInfoChanged');
          const result = this.impl.mediaSessionInfoChanged(params.arg_session_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media_session.mojom.AudioFocusRequestClientReceiver = mojo.internal.bindings.media_session.mojom.AudioFocusRequestClientReceiver;

mojo.internal.bindings.media_session.mojom.AudioFocusRequestClientPtr = mojo.internal.bindings.media_session.mojom.AudioFocusRequestClientRemote;
mojo.internal.bindings.media_session.mojom.AudioFocusRequestClientRequest = mojo.internal.bindings.media_session.mojom.AudioFocusRequestClientPendingReceiver;


// Interface: AudioFocusManager
mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestAudioFocus_ParamsSpec, 'media_session.mojom.AudioFocusManager_RequestAudioFocus_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.media_session.mojom.AudioFocusRequestClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media_session.mojom.MediaSessionRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_session_info', 16, 0, mojo.internal.bindings.media_session.mojom.MediaSessionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 24, 0, mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.AudioFocusTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestAudioFocus_ResponseParamsSpec, 'media_session.mojom.AudioFocusManager_RequestAudioFocus_ResponseParams', [
      mojo.internal.StructField('arg_request_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ParamsSpec, 'media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_Params', [
      mojo.internal.StructField('arg_request_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.media_session.mojom.AudioFocusRequestClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media_session.mojom.MediaSessionRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_session_info', 24, 0, mojo.internal.bindings.media_session.mojom.MediaSessionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 32, 0, mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.AudioFocusTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_group_id', 40, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ResponseParamsSpec, 'media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusManager_GetFocusRequests_ParamsSpec, 'media_session.mojom.AudioFocusManager_GetFocusRequests_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusManager_GetFocusRequests_ResponseParamsSpec, 'media_session.mojom.AudioFocusManager_GetFocusRequests_ResponseParams', [
      mojo.internal.StructField('arg_requests', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.AudioFocusRequestStateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusManager_AddObserver_ParamsSpec, 'media_session.mojom.AudioFocusManager_AddObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media_session.mojom.AudioFocusObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusManager_SetSource_ParamsSpec, 'media_session.mojom.AudioFocusManager_SetSource_Params', [
      mojo.internal.StructField('arg_identity', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusManager_SetEnforcementMode_ParamsSpec, 'media_session.mojom.AudioFocusManager_SetEnforcementMode_Params', [
      mojo.internal.StructField('arg_mode', 0, 0, mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.EnforcementModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusManager_AddSourceObserver_ParamsSpec, 'media_session.mojom.AudioFocusManager_AddSourceObserver_Params', [
      mojo.internal.StructField('arg_source_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media_session.mojom.AudioFocusObserverSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ParamsSpec, 'media_session.mojom.AudioFocusManager_GetSourceFocusRequests_Params', [
      mojo.internal.StructField('arg_source_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ResponseParamsSpec, 'media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ResponseParams', [
      mojo.internal.StructField('arg_requests', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.AudioFocusRequestStateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestIdReleased_ParamsSpec, 'media_session.mojom.AudioFocusManager_RequestIdReleased_Params', [
      mojo.internal.StructField('arg_request_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusManager_StartDuckingAllAudio_ParamsSpec, 'media_session.mojom.AudioFocusManager_StartDuckingAllAudio_Params', [
      mojo.internal.StructField('arg_exempted_request_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusManager_StopDuckingAllAudio_ParamsSpec, 'media_session.mojom.AudioFocusManager_StopDuckingAllAudio_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusManager_FlushForTesting_ParamsSpec, 'media_session.mojom.AudioFocusManager_FlushForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusManager_FlushForTesting_ResponseParamsSpec, 'media_session.mojom.AudioFocusManager_FlushForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.media_session.mojom.AudioFocusManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media_session.mojom.AudioFocusManagerRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.AudioFocusManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media_session.mojom.AudioFocusManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media_session.mojom.AudioFocusManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestAudioFocus(arg_client, arg_session, arg_session_info, arg_type) {
    return this.$.requestAudioFocus(arg_client, arg_session, arg_session_info, arg_type);
  }
  requestGroupedAudioFocus(arg_request_id, arg_client, arg_session, arg_session_info, arg_type, arg_group_id) {
    return this.$.requestGroupedAudioFocus(arg_request_id, arg_client, arg_session, arg_session_info, arg_type, arg_group_id);
  }
  getFocusRequests() {
    return this.$.getFocusRequests();
  }
  addObserver(arg_observer) {
    return this.$.addObserver(arg_observer);
  }
  setSource(arg_identity, arg_name) {
    return this.$.setSource(arg_identity, arg_name);
  }
  setEnforcementMode(arg_mode) {
    return this.$.setEnforcementMode(arg_mode);
  }
  addSourceObserver(arg_source_id, arg_observer) {
    return this.$.addSourceObserver(arg_source_id, arg_observer);
  }
  getSourceFocusRequests(arg_source_id) {
    return this.$.getSourceFocusRequests(arg_source_id);
  }
  requestIdReleased(arg_request_id) {
    return this.$.requestIdReleased(arg_request_id);
  }
  startDuckingAllAudio(arg_exempted_request_id) {
    return this.$.startDuckingAllAudio(arg_exempted_request_id);
  }
  stopDuckingAllAudio() {
    return this.$.stopDuckingAllAudio();
  }
  flushForTesting() {
    return this.$.flushForTesting();
  }
};

mojo.internal.bindings.media_session.mojom.AudioFocusManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioFocusManager', [
      { explicit: 0 },
      { explicit: 4 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 6 },
      { explicit: 5 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
    ]);
  }

  requestAudioFocus(arg_client, arg_session, arg_session_info, arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestAudioFocus_ParamsSpec,
      mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestAudioFocus_ResponseParamsSpec,
      [arg_client, arg_session, arg_session_info, arg_type],
      false);
  }

  requestGroupedAudioFocus(arg_request_id, arg_client, arg_session, arg_session_info, arg_type, arg_group_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ParamsSpec,
      mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ResponseParamsSpec,
      [arg_request_id, arg_client, arg_session, arg_session_info, arg_type, arg_group_id],
      false);
  }

  getFocusRequests() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media_session.mojom.AudioFocusManager_GetFocusRequests_ParamsSpec,
      mojo.internal.bindings.media_session.mojom.AudioFocusManager_GetFocusRequests_ResponseParamsSpec,
      [],
      false);
  }

  addObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media_session.mojom.AudioFocusManager_AddObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  setSource(arg_identity, arg_name) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.media_session.mojom.AudioFocusManager_SetSource_ParamsSpec,
      null,
      [arg_identity, arg_name],
      false);
  }

  setEnforcementMode(arg_mode) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.media_session.mojom.AudioFocusManager_SetEnforcementMode_ParamsSpec,
      null,
      [arg_mode],
      false);
  }

  addSourceObserver(arg_source_id, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.media_session.mojom.AudioFocusManager_AddSourceObserver_ParamsSpec,
      null,
      [arg_source_id, arg_observer],
      false);
  }

  getSourceFocusRequests(arg_source_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ParamsSpec,
      mojo.internal.bindings.media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ResponseParamsSpec,
      [arg_source_id],
      false);
  }

  requestIdReleased(arg_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestIdReleased_ParamsSpec,
      null,
      [arg_request_id],
      false);
  }

  startDuckingAllAudio(arg_exempted_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.media_session.mojom.AudioFocusManager_StartDuckingAllAudio_ParamsSpec,
      null,
      [arg_exempted_request_id],
      false);
  }

  stopDuckingAllAudio() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.media_session.mojom.AudioFocusManager_StopDuckingAllAudio_ParamsSpec,
      null,
      [],
      false);
  }

  flushForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.media_session.mojom.AudioFocusManager_FlushForTesting_ParamsSpec,
      mojo.internal.bindings.media_session.mojom.AudioFocusManager_FlushForTesting_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.media_session.mojom.AudioFocusManager.getRemote = function() {
  let remote = new mojo.internal.bindings.media_session.mojom.AudioFocusManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.AudioFocusManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.media_session.mojom.AudioFocusManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioFocusManager', [
      { explicit: 0 },
      { explicit: 4 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 6 },
      { explicit: 5 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
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
        
        // Try Method 0: RequestAudioFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestAudioFocus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestAudioFocus (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RequestGroupedAudioFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestGroupedAudioFocus (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetFocusRequests
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_GetFocusRequests_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFocusRequests (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_AddObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_SetSource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSource (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetEnforcementMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_SetEnforcementMode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetEnforcementMode (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: AddSourceObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_AddSourceObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddSourceObserver (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetSourceFocusRequests
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSourceFocusRequests (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RequestIdReleased
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestIdReleased_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestIdReleased (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: StartDuckingAllAudio
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_StartDuckingAllAudio_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDuckingAllAudio (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: StopDuckingAllAudio
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_StopDuckingAllAudio_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopDuckingAllAudio (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: FlushForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_FlushForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FlushForTesting (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestAudioFocus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestAudioFocus');
          const result = this.impl.requestAudioFocus(params.arg_client, params.arg_session, params.arg_session_info, params.arg_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestAudioFocus_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestAudioFocus FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestGroupedAudioFocus');
          const result = this.impl.requestGroupedAudioFocus(params.arg_request_id, params.arg_client, params.arg_session, params.arg_session_info, params.arg_type, params.arg_group_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestGroupedAudioFocus FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_GetFocusRequests_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFocusRequests');
          const result = this.impl.getFocusRequests();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media_session.mojom.AudioFocusManager_GetFocusRequests_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFocusRequests FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.arg_observer);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_SetSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSource');
          const result = this.impl.setSource(params.arg_identity, params.arg_name);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_SetEnforcementMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setEnforcementMode');
          const result = this.impl.setEnforcementMode(params.arg_mode);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_AddSourceObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addSourceObserver');
          const result = this.impl.addSourceObserver(params.arg_source_id, params.arg_observer);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSourceFocusRequests');
          const result = this.impl.getSourceFocusRequests(params.arg_source_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSourceFocusRequests FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_RequestIdReleased_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestIdReleased');
          const result = this.impl.requestIdReleased(params.arg_request_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_StartDuckingAllAudio_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startDuckingAllAudio');
          const result = this.impl.startDuckingAllAudio(params.arg_exempted_request_id);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_StopDuckingAllAudio_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopDuckingAllAudio');
          const result = this.impl.stopDuckingAllAudio();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManager_FlushForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flushForTesting');
          const result = this.impl.flushForTesting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media_session.mojom.AudioFocusManager_FlushForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FlushForTesting FAILED:', e));
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

mojo.internal.bindings.media_session.mojom.AudioFocusManagerReceiver = mojo.internal.bindings.media_session.mojom.AudioFocusManagerReceiver;

mojo.internal.bindings.media_session.mojom.AudioFocusManagerPtr = mojo.internal.bindings.media_session.mojom.AudioFocusManagerRemote;
mojo.internal.bindings.media_session.mojom.AudioFocusManagerRequest = mojo.internal.bindings.media_session.mojom.AudioFocusManagerPendingReceiver;


// Interface: AudioFocusManagerDebug
mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ParamsSpec, 'media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_Params', [
      mojo.internal.StructField('arg_request_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParamsSpec, 'media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParams', [
      mojo.internal.StructField('arg_debug_info', 0, 0, mojo.internal.bindings.media_session.mojom.MediaSessionDebugInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebugPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebugRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.AudioFocusManagerDebug';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebugPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebugRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDebugInfoForRequest(arg_request_id) {
    return this.$.getDebugInfoForRequest(arg_request_id);
  }
};

mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebugRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioFocusManagerDebug', [
      { explicit: 0 },
    ]);
  }

  getDebugInfoForRequest(arg_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ParamsSpec,
      mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParamsSpec,
      [arg_request_id],
      false);
  }

};

mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebug.getRemote = function() {
  let remote = new mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebugRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.AudioFocusManagerDebug',
    'context');
  return remote.$;
};

mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebugReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioFocusManagerDebug', [
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
        
        // Try Method 0: GetDebugInfoForRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDebugInfoForRequest (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDebugInfoForRequest');
          const result = this.impl.getDebugInfoForRequest(params.arg_request_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDebugInfoForRequest FAILED:', e));
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

mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebugReceiver = mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebugReceiver;

mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebugPtr = mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebugRemote;
mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebugRequest = mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebugPendingReceiver;

