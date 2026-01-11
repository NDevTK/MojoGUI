// Auto-generated MojoJS binding
 // Source: chromium_src/services/media_session/public/mojom/media_controller.mojom
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
 

 mojo.internal.bindings.media_session = mojo.internal.bindings.media_session || {};
mojo.internal.bindings.media_session.mojom = mojo.internal.bindings.media_session.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.media_session.mojom.MediaControllerManager = {};
mojo.internal.bindings.media_session.mojom.MediaControllerManagerSpec = { $ : {} };
mojo.internal.bindings.media_session.mojom.MediaControllerManager.$interfaceName = 'media_session.mojom.MediaControllerManager';
mojo.internal.bindings.media_session.mojom.MediaControllerManager_CreateMediaControllerForSession_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaControllerManager_CreateActiveMediaController_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaControllerManager_SuspendAllSessions_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController = {};
mojo.internal.bindings.media_session.mojom.MediaControllerSpec = { $ : {} };
mojo.internal.bindings.media_session.mojom.MediaController.$interfaceName = 'media_session.mojom.MediaController';
mojo.internal.bindings.media_session.mojom.MediaController_Suspend_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_Resume_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_Stop_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_ToggleSuspendResume_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_AddObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_PreviousTrack_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_NextTrack_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_Seek_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_ObserveImages_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_SeekTo_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_ScrubTo_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_EnterPictureInPicture_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_ExitPictureInPicture_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_SetAudioSinkId_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_ToggleMicrophone_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_ToggleCamera_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_HangUp_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_Raise_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_SetMute_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_RequestMediaRemoting_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_EnterAutoPictureInPicture_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaController_SkipAd_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaControllerObserver = {};
mojo.internal.bindings.media_session.mojom.MediaControllerObserverSpec = { $ : {} };
mojo.internal.bindings.media_session.mojom.MediaControllerObserver.$interfaceName = 'media_session.mojom.MediaControllerObserver';
mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionInfoChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionMetadataChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionActionsChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionPositionChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaControllerImageObserver = {};
mojo.internal.bindings.media_session.mojom.MediaControllerImageObserverSpec = { $ : {} };
mojo.internal.bindings.media_session.mojom.MediaControllerImageObserver.$interfaceName = 'media_session.mojom.MediaControllerImageObserver';
mojo.internal.bindings.media_session.mojom.MediaControllerImageObserver_MediaControllerImageChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaControllerImageObserver_MediaControllerChapterImageChanged_ParamsSpec = { $: {} };

// Interface: MediaControllerManager
mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaControllerManager_CreateMediaControllerForSession_ParamsSpec, 'media_session.mojom.MediaControllerManager_CreateMediaControllerForSession_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.media_session.mojom.MediaControllerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 8, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaControllerManager_CreateActiveMediaController_ParamsSpec, 'media_session.mojom.MediaControllerManager_CreateActiveMediaController_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.media_session.mojom.MediaControllerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaControllerManager_SuspendAllSessions_ParamsSpec, 'media_session.mojom.MediaControllerManager_SuspendAllSessions_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.media_session.mojom.MediaControllerManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media_session.mojom.MediaControllerManagerRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaControllerManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media_session.mojom.MediaControllerManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media_session.mojom.MediaControllerManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createMediaControllerForSession(arg_receiver, arg_request_id) {
    return this.$.createMediaControllerForSession(arg_receiver, arg_request_id);
  }
  createActiveMediaController(arg_receiver) {
    return this.$.createActiveMediaController(arg_receiver);
  }
  suspendAllSessions() {
    return this.$.suspendAllSessions();
  }
};

mojo.internal.bindings.media_session.mojom.MediaControllerManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('media_session.mojom.MediaControllerManager', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  createMediaControllerForSession(arg_receiver, arg_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaControllerManager_CreateMediaControllerForSession_ParamsSpec,
      null,
      [arg_receiver, arg_request_id],
      false);
  }

  createActiveMediaController(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaControllerManager_CreateActiveMediaController_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  suspendAllSessions() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaControllerManager_SuspendAllSessions_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.media_session.mojom.MediaControllerManager.getRemote = function() {
  let remote = new mojo.internal.bindings.media_session.mojom.MediaControllerManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaControllerManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.media_session.mojom.MediaControllerManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('media_session.mojom.MediaControllerManager', [
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
        
        // Try Method 0: CreateMediaControllerForSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerManager_CreateMediaControllerForSession_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateMediaControllerForSession (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateActiveMediaController
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerManager_CreateActiveMediaController_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateActiveMediaController (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SuspendAllSessions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerManager_SuspendAllSessions_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SuspendAllSessions (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerManager_CreateMediaControllerForSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createMediaControllerForSession');
          const result = this.impl.createMediaControllerForSession(params.arg_receiver, params.arg_request_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerManager_CreateActiveMediaController_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createActiveMediaController');
          const result = this.impl.createActiveMediaController(params.arg_receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerManager_SuspendAllSessions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.suspendAllSessions');
          const result = this.impl.suspendAllSessions();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media_session.mojom.MediaControllerManagerReceiver = mojo.internal.bindings.media_session.mojom.MediaControllerManagerReceiver;

mojo.internal.bindings.media_session.mojom.MediaControllerManagerPtr = mojo.internal.bindings.media_session.mojom.MediaControllerManagerRemote;
mojo.internal.bindings.media_session.mojom.MediaControllerManagerRequest = mojo.internal.bindings.media_session.mojom.MediaControllerManagerPendingReceiver;


// Interface: MediaController
mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_Suspend_ParamsSpec, 'media_session.mojom.MediaController_Suspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_Resume_ParamsSpec, 'media_session.mojom.MediaController_Resume_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_Stop_ParamsSpec, 'media_session.mojom.MediaController_Stop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_ToggleSuspendResume_ParamsSpec, 'media_session.mojom.MediaController_ToggleSuspendResume_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_AddObserver_ParamsSpec, 'media_session.mojom.MediaController_AddObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media_session.mojom.MediaControllerObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_PreviousTrack_ParamsSpec, 'media_session.mojom.MediaController_PreviousTrack_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_NextTrack_ParamsSpec, 'media_session.mojom.MediaController_NextTrack_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_Seek_ParamsSpec, 'media_session.mojom.MediaController_Seek_Params', [
      mojo.internal.StructField('arg_seek_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_ObserveImages_ParamsSpec, 'media_session.mojom.MediaController_ObserveImages_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.media_session.mojom.MediaSessionImageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media_session.mojom.MediaControllerImageObserverRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_minimum_size_px', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_desired_size_px', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_SeekTo_ParamsSpec, 'media_session.mojom.MediaController_SeekTo_Params', [
      mojo.internal.StructField('arg_seek_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_ScrubTo_ParamsSpec, 'media_session.mojom.MediaController_ScrubTo_Params', [
      mojo.internal.StructField('arg_seek_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_EnterPictureInPicture_ParamsSpec, 'media_session.mojom.MediaController_EnterPictureInPicture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_ExitPictureInPicture_ParamsSpec, 'media_session.mojom.MediaController_ExitPictureInPicture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_SetAudioSinkId_ParamsSpec, 'media_session.mojom.MediaController_SetAudioSinkId_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_ToggleMicrophone_ParamsSpec, 'media_session.mojom.MediaController_ToggleMicrophone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_ToggleCamera_ParamsSpec, 'media_session.mojom.MediaController_ToggleCamera_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_HangUp_ParamsSpec, 'media_session.mojom.MediaController_HangUp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_Raise_ParamsSpec, 'media_session.mojom.MediaController_Raise_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_SetMute_ParamsSpec, 'media_session.mojom.MediaController_SetMute_Params', [
      mojo.internal.StructField('arg_mute', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_RequestMediaRemoting_ParamsSpec, 'media_session.mojom.MediaController_RequestMediaRemoting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_EnterAutoPictureInPicture_ParamsSpec, 'media_session.mojom.MediaController_EnterAutoPictureInPicture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaController_SkipAd_ParamsSpec, 'media_session.mojom.MediaController_SkipAd_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.media_session.mojom.MediaControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media_session.mojom.MediaControllerRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media_session.mojom.MediaControllerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media_session.mojom.MediaControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  suspend() {
    return this.$.suspend();
  }
  resume() {
    return this.$.resume();
  }
  stop() {
    return this.$.stop();
  }
  toggleSuspendResume() {
    return this.$.toggleSuspendResume();
  }
  addObserver(arg_observer) {
    return this.$.addObserver(arg_observer);
  }
  previousTrack() {
    return this.$.previousTrack();
  }
  nextTrack() {
    return this.$.nextTrack();
  }
  seek(arg_seek_time) {
    return this.$.seek(arg_seek_time);
  }
  observeImages(arg_type, arg_minimum_size_px, arg_desired_size_px, arg_observer) {
    return this.$.observeImages(arg_type, arg_minimum_size_px, arg_desired_size_px, arg_observer);
  }
  seekTo(arg_seek_time) {
    return this.$.seekTo(arg_seek_time);
  }
  scrubTo(arg_seek_time) {
    return this.$.scrubTo(arg_seek_time);
  }
  enterPictureInPicture() {
    return this.$.enterPictureInPicture();
  }
  exitPictureInPicture() {
    return this.$.exitPictureInPicture();
  }
  setAudioSinkId(arg_id) {
    return this.$.setAudioSinkId(arg_id);
  }
  toggleMicrophone() {
    return this.$.toggleMicrophone();
  }
  toggleCamera() {
    return this.$.toggleCamera();
  }
  hangUp() {
    return this.$.hangUp();
  }
  raise() {
    return this.$.raise();
  }
  setMute(arg_mute) {
    return this.$.setMute(arg_mute);
  }
  requestMediaRemoting() {
    return this.$.requestMediaRemoting();
  }
  enterAutoPictureInPicture() {
    return this.$.enterAutoPictureInPicture();
  }
  skipAd() {
    return this.$.skipAd();
  }
};

mojo.internal.bindings.media_session.mojom.MediaControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('media_session.mojom.MediaController', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 20 },
      { explicit: 21 },
    ]);
  }

  suspend() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_Suspend_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_Resume_ParamsSpec,
      null,
      [],
      false);
  }

  stop() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_Stop_ParamsSpec,
      null,
      [],
      false);
  }

  toggleSuspendResume() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_ToggleSuspendResume_ParamsSpec,
      null,
      [],
      false);
  }

  addObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_AddObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  previousTrack() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_PreviousTrack_ParamsSpec,
      null,
      [],
      false);
  }

  nextTrack() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_NextTrack_ParamsSpec,
      null,
      [],
      false);
  }

  seek(arg_seek_time) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_Seek_ParamsSpec,
      null,
      [arg_seek_time],
      false);
  }

  observeImages(arg_type, arg_minimum_size_px, arg_desired_size_px, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_ObserveImages_ParamsSpec,
      null,
      [arg_type, arg_minimum_size_px, arg_desired_size_px, arg_observer],
      false);
  }

  seekTo(arg_seek_time) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_SeekTo_ParamsSpec,
      null,
      [arg_seek_time],
      false);
  }

  scrubTo(arg_seek_time) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_ScrubTo_ParamsSpec,
      null,
      [arg_seek_time],
      false);
  }

  enterPictureInPicture() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_EnterPictureInPicture_ParamsSpec,
      null,
      [],
      false);
  }

  exitPictureInPicture() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_ExitPictureInPicture_ParamsSpec,
      null,
      [],
      false);
  }

  setAudioSinkId(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_SetAudioSinkId_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  toggleMicrophone() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_ToggleMicrophone_ParamsSpec,
      null,
      [],
      false);
  }

  toggleCamera() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_ToggleCamera_ParamsSpec,
      null,
      [],
      false);
  }

  hangUp() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_HangUp_ParamsSpec,
      null,
      [],
      false);
  }

  raise() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_Raise_ParamsSpec,
      null,
      [],
      false);
  }

  setMute(arg_mute) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_SetMute_ParamsSpec,
      null,
      [arg_mute],
      false);
  }

  requestMediaRemoting() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_RequestMediaRemoting_ParamsSpec,
      null,
      [],
      false);
  }

  enterAutoPictureInPicture() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_EnterAutoPictureInPicture_ParamsSpec,
      null,
      [],
      false);
  }

  skipAd() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaController_SkipAd_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.media_session.mojom.MediaController.getRemote = function() {
  let remote = new mojo.internal.bindings.media_session.mojom.MediaControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaController',
    'context');
  return remote.$;
};

mojo.internal.bindings.media_session.mojom.MediaControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('media_session.mojom.MediaController', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 20 },
      { explicit: 21 },
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
        
        // Try Method 0: Suspend
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_Suspend_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Suspend (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Resume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_Resume_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resume (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Stop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_Stop_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Stop (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ToggleSuspendResume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_ToggleSuspendResume_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ToggleSuspendResume (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_AddObserver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: PreviousTrack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_PreviousTrack_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreviousTrack (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: NextTrack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_NextTrack_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NextTrack (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: Seek
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_Seek_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Seek (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ObserveImages
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_ObserveImages_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveImages (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SeekTo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_SeekTo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SeekTo (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: ScrubTo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_ScrubTo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScrubTo (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: EnterPictureInPicture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_EnterPictureInPicture_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnterPictureInPicture (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: ExitPictureInPicture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_ExitPictureInPicture_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExitPictureInPicture (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetAudioSinkId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_SetAudioSinkId_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAudioSinkId (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: ToggleMicrophone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_ToggleMicrophone_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ToggleMicrophone (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: ToggleCamera
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_ToggleCamera_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ToggleCamera (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: HangUp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_HangUp_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HangUp (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: Raise
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_Raise_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Raise (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: SetMute
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_SetMute_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMute (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: RequestMediaRemoting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_RequestMediaRemoting_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestMediaRemoting (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: EnterAutoPictureInPicture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_EnterAutoPictureInPicture_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnterAutoPictureInPicture (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: SkipAd
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_SkipAd_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SkipAd (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_Suspend_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.suspend');
          const result = this.impl.suspend();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_Resume_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_Stop_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stop');
          const result = this.impl.stop();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_ToggleSuspendResume_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.toggleSuspendResume');
          const result = this.impl.toggleSuspendResume();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.arg_observer);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_PreviousTrack_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.previousTrack');
          const result = this.impl.previousTrack();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_NextTrack_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.nextTrack');
          const result = this.impl.nextTrack();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_Seek_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.seek');
          const result = this.impl.seek(params.arg_seek_time);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_ObserveImages_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeImages');
          const result = this.impl.observeImages(params.arg_type, params.arg_minimum_size_px, params.arg_desired_size_px, params.arg_observer);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_SeekTo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.seekTo');
          const result = this.impl.seekTo(params.arg_seek_time);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_ScrubTo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scrubTo');
          const result = this.impl.scrubTo(params.arg_seek_time);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_EnterPictureInPicture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enterPictureInPicture');
          const result = this.impl.enterPictureInPicture();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_ExitPictureInPicture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.exitPictureInPicture');
          const result = this.impl.exitPictureInPicture();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_SetAudioSinkId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAudioSinkId');
          const result = this.impl.setAudioSinkId(params.arg_id);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_ToggleMicrophone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.toggleMicrophone');
          const result = this.impl.toggleMicrophone();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_ToggleCamera_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.toggleCamera');
          const result = this.impl.toggleCamera();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_HangUp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hangUp');
          const result = this.impl.hangUp();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_Raise_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.raise');
          const result = this.impl.raise();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_SetMute_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMute');
          const result = this.impl.setMute(params.arg_mute);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_RequestMediaRemoting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestMediaRemoting');
          const result = this.impl.requestMediaRemoting();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_EnterAutoPictureInPicture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enterAutoPictureInPicture');
          const result = this.impl.enterAutoPictureInPicture();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaController_SkipAd_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.skipAd');
          const result = this.impl.skipAd();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media_session.mojom.MediaControllerReceiver = mojo.internal.bindings.media_session.mojom.MediaControllerReceiver;

mojo.internal.bindings.media_session.mojom.MediaControllerPtr = mojo.internal.bindings.media_session.mojom.MediaControllerRemote;
mojo.internal.bindings.media_session.mojom.MediaControllerRequest = mojo.internal.bindings.media_session.mojom.MediaControllerPendingReceiver;


// Interface: MediaControllerObserver
mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionInfoChanged_ParamsSpec, 'media_session.mojom.MediaControllerObserver_MediaSessionInfoChanged_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.media_session.mojom.MediaSessionInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionMetadataChanged_ParamsSpec, 'media_session.mojom.MediaControllerObserver_MediaSessionMetadataChanged_Params', [
      mojo.internal.StructField('arg_metadata', 0, 0, mojo.internal.bindings.media_session.mojom.MediaMetadataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionActionsChanged_ParamsSpec, 'media_session.mojom.MediaControllerObserver_MediaSessionActionsChanged_Params', [
      mojo.internal.StructField('arg_action', 0, 0, mojo.internal.Array(mojo.internal.bindings.media_session.mojom.MediaSessionActionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionChanged_ParamsSpec, 'media_session.mojom.MediaControllerObserver_MediaSessionChanged_Params', [
      mojo.internal.StructField('arg_request_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionPositionChanged_ParamsSpec, 'media_session.mojom.MediaControllerObserver_MediaSessionPositionChanged_Params', [
      mojo.internal.StructField('arg_position', 0, 0, mojo.internal.bindings.media_session.mojom.MediaPositionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media_session.mojom.MediaControllerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media_session.mojom.MediaControllerObserverRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaControllerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media_session.mojom.MediaControllerObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media_session.mojom.MediaControllerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  mediaSessionInfoChanged(arg_info) {
    return this.$.mediaSessionInfoChanged(arg_info);
  }
  mediaSessionMetadataChanged(arg_metadata) {
    return this.$.mediaSessionMetadataChanged(arg_metadata);
  }
  mediaSessionActionsChanged(arg_action) {
    return this.$.mediaSessionActionsChanged(arg_action);
  }
  mediaSessionChanged(arg_request_id) {
    return this.$.mediaSessionChanged(arg_request_id);
  }
  mediaSessionPositionChanged(arg_position) {
    return this.$.mediaSessionPositionChanged(arg_position);
  }
};

mojo.internal.bindings.media_session.mojom.MediaControllerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('media_session.mojom.MediaControllerObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
    ]);
  }

  mediaSessionInfoChanged(arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionInfoChanged_ParamsSpec,
      null,
      [arg_info],
      false);
  }

  mediaSessionMetadataChanged(arg_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionMetadataChanged_ParamsSpec,
      null,
      [arg_metadata],
      false);
  }

  mediaSessionActionsChanged(arg_action) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionActionsChanged_ParamsSpec,
      null,
      [arg_action],
      false);
  }

  mediaSessionChanged(arg_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionChanged_ParamsSpec,
      null,
      [arg_request_id],
      false);
  }

  mediaSessionPositionChanged(arg_position) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionPositionChanged_ParamsSpec,
      null,
      [arg_position],
      false);
  }

};

mojo.internal.bindings.media_session.mojom.MediaControllerObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.media_session.mojom.MediaControllerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaControllerObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.media_session.mojom.MediaControllerObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('media_session.mojom.MediaControllerObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
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
        
        // Try Method 0: MediaSessionInfoChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionInfoChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaSessionInfoChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: MediaSessionMetadataChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionMetadataChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaSessionMetadataChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: MediaSessionActionsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionActionsChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaSessionActionsChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: MediaSessionChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaSessionChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: MediaSessionPositionChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionPositionChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaSessionPositionChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionInfoChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionInfoChanged');
          const result = this.impl.mediaSessionInfoChanged(params.arg_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionMetadataChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionMetadataChanged');
          const result = this.impl.mediaSessionMetadataChanged(params.arg_metadata);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionActionsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionActionsChanged');
          const result = this.impl.mediaSessionActionsChanged(params.arg_action);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionChanged');
          const result = this.impl.mediaSessionChanged(params.arg_request_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerObserver_MediaSessionPositionChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionPositionChanged');
          const result = this.impl.mediaSessionPositionChanged(params.arg_position);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media_session.mojom.MediaControllerObserverReceiver = mojo.internal.bindings.media_session.mojom.MediaControllerObserverReceiver;

mojo.internal.bindings.media_session.mojom.MediaControllerObserverPtr = mojo.internal.bindings.media_session.mojom.MediaControllerObserverRemote;
mojo.internal.bindings.media_session.mojom.MediaControllerObserverRequest = mojo.internal.bindings.media_session.mojom.MediaControllerObserverPendingReceiver;


// Interface: MediaControllerImageObserver
mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaControllerImageObserver_MediaControllerImageChanged_ParamsSpec, 'media_session.mojom.MediaControllerImageObserver_MediaControllerImageChanged_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.media_session.mojom.MediaSessionImageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bitmap', 8, 0, mojo.internal.bindings.media_session.mojom.MediaImageBitmapSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaControllerImageObserver_MediaControllerChapterImageChanged_ParamsSpec, 'media_session.mojom.MediaControllerImageObserver_MediaControllerChapterImageChanged_Params', [
      mojo.internal.StructField('arg_bitmap', 0, 0, mojo.internal.bindings.media_session.mojom.MediaImageBitmapSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.media_session.mojom.MediaControllerImageObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media_session.mojom.MediaControllerImageObserverRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaControllerImageObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media_session.mojom.MediaControllerImageObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media_session.mojom.MediaControllerImageObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  mediaControllerImageChanged(arg_type, arg_bitmap) {
    return this.$.mediaControllerImageChanged(arg_type, arg_bitmap);
  }
  mediaControllerChapterImageChanged(arg_index, arg_bitmap) {
    return this.$.mediaControllerChapterImageChanged(arg_index, arg_bitmap);
  }
};

mojo.internal.bindings.media_session.mojom.MediaControllerImageObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('media_session.mojom.MediaControllerImageObserver', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  mediaControllerImageChanged(arg_type, arg_bitmap) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaControllerImageObserver_MediaControllerImageChanged_ParamsSpec,
      null,
      [arg_type, arg_bitmap],
      false);
  }

  mediaControllerChapterImageChanged(arg_index, arg_bitmap) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaControllerImageObserver_MediaControllerChapterImageChanged_ParamsSpec,
      null,
      [arg_index, arg_bitmap],
      false);
  }

};

mojo.internal.bindings.media_session.mojom.MediaControllerImageObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.media_session.mojom.MediaControllerImageObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaControllerImageObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.media_session.mojom.MediaControllerImageObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('media_session.mojom.MediaControllerImageObserver', [
      { explicit: 0 },
      { explicit: 1 },
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
        
        // Try Method 0: MediaControllerImageChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerImageObserver_MediaControllerImageChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaControllerImageChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: MediaControllerChapterImageChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerImageObserver_MediaControllerChapterImageChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaControllerChapterImageChanged (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerImageObserver_MediaControllerImageChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mediaControllerImageChanged');
          const result = this.impl.mediaControllerImageChanged(params.arg_type, params.arg_bitmap);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaControllerImageObserver_MediaControllerChapterImageChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mediaControllerChapterImageChanged');
          const result = this.impl.mediaControllerChapterImageChanged(params.arg_index, params.arg_bitmap);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media_session.mojom.MediaControllerImageObserverReceiver = mojo.internal.bindings.media_session.mojom.MediaControllerImageObserverReceiver;

mojo.internal.bindings.media_session.mojom.MediaControllerImageObserverPtr = mojo.internal.bindings.media_session.mojom.MediaControllerImageObserverRemote;
mojo.internal.bindings.media_session.mojom.MediaControllerImageObserverRequest = mojo.internal.bindings.media_session.mojom.MediaControllerImageObserverPendingReceiver;

