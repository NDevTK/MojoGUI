// Auto-generated MojoJS binding
 // Source: chromium_src/components/system_media_controls/mac/remote_cocoa/system_media_controls.mojom
 // Module: system_media_controls.mojom

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
 

 mojo.internal.bindings.system_media_controls = mojo.internal.bindings.system_media_controls || {};
mojo.internal.bindings.system_media_controls.mojom = mojo.internal.bindings.system_media_controls.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.media_session = mojo.internal.bindings.media_session || {};

mojo.internal.bindings.system_media_controls.mojom.PlaybackStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls = {};
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsSpec = { $ : {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls.$interfaceName = 'system_media_controls.mojom.SystemMediaControls';
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsNextEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsPreviousEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsPlayPauseEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsStopEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsSeekToEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetPlaybackStatus_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetTitle_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetArtist_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetAlbum_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetThumbnail_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetPosition_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_ClearMetadata_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver = {};
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserverSpec = { $ : {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver.$interfaceName = 'system_media_controls.mojom.SystemMediaControlsObserver';
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnNext_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPrevious_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPause_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPlayPause_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnStop_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPlay_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnSeekTo_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnBridgeCreatedForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnMetadataClearedForTesting_ParamsSpec = { $: {} };

// Enum: PlaybackStatus
mojo.internal.bindings.system_media_controls.mojom.PlaybackStatus = {
  kPlaying: 0,
  kPaused: 1,
  kStopped: 2,
};

// Interface: SystemMediaControls
mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsNextEnabled_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetIsNextEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsPreviousEnabled_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetIsPreviousEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsPlayPauseEnabled_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetIsPlayPauseEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsStopEnabled_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetIsStopEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsSeekToEnabled_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetIsSeekToEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetPlaybackStatus_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetPlaybackStatus_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.system_media_controls.mojom.PlaybackStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetTitle_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetTitle_Params', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetArtist_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetArtist_Params', [
      mojo.internal.StructField('arg_artist', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetAlbum_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetAlbum_Params', [
      mojo.internal.StructField('arg_album', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetThumbnail_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetThumbnail_Params', [
      mojo.internal.StructField('arg_thumbnail', 0, 0, mojo.internal.bindings.media_session.mojom.MediaImageBitmapSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetPosition_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetPosition_Params', [
      mojo.internal.StructField('arg_position', 0, 0, mojo.internal.bindings.media_session.mojom.MediaPositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_ClearMetadata_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_ClearMetadata_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsRemote = class {
  static get $interfaceName() {
    return 'system_media_controls.mojom.SystemMediaControls';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setIsNextEnabled(arg_enabled) {
    return this.$.setIsNextEnabled(arg_enabled);
  }
  setIsPreviousEnabled(arg_enabled) {
    return this.$.setIsPreviousEnabled(arg_enabled);
  }
  setIsPlayPauseEnabled(arg_enabled) {
    return this.$.setIsPlayPauseEnabled(arg_enabled);
  }
  setIsStopEnabled(arg_enabled) {
    return this.$.setIsStopEnabled(arg_enabled);
  }
  setIsSeekToEnabled(arg_enabled) {
    return this.$.setIsSeekToEnabled(arg_enabled);
  }
  setPlaybackStatus(arg_status) {
    return this.$.setPlaybackStatus(arg_status);
  }
  setTitle(arg_title) {
    return this.$.setTitle(arg_title);
  }
  setArtist(arg_artist) {
    return this.$.setArtist(arg_artist);
  }
  setAlbum(arg_album) {
    return this.$.setAlbum(arg_album);
  }
  setThumbnail(arg_thumbnail) {
    return this.$.setThumbnail(arg_thumbnail);
  }
  setPosition(arg_position) {
    return this.$.setPosition(arg_position);
  }
  clearMetadata() {
    return this.$.clearMetadata();
  }
};

mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('system_media_controls.mojom.SystemMediaControls', [
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
      { explicit: null },
      { explicit: null },
    ]);
  }

  setIsNextEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsNextEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  setIsPreviousEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsPreviousEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  setIsPlayPauseEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsPlayPauseEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  setIsStopEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsStopEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  setIsSeekToEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsSeekToEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  setPlaybackStatus(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetPlaybackStatus_ParamsSpec,
      null,
      [arg_status],
      false);
  }

  setTitle(arg_title) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetTitle_ParamsSpec,
      null,
      [arg_title],
      false);
  }

  setArtist(arg_artist) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetArtist_ParamsSpec,
      null,
      [arg_artist],
      false);
  }

  setAlbum(arg_album) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetAlbum_ParamsSpec,
      null,
      [arg_album],
      false);
  }

  setThumbnail(arg_thumbnail) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetThumbnail_ParamsSpec,
      null,
      [arg_thumbnail],
      false);
  }

  setPosition(arg_position) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetPosition_ParamsSpec,
      null,
      [arg_position],
      false);
  }

  clearMetadata() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_ClearMetadata_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls.getRemote = function() {
  let remote = new mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'system_media_controls.mojom.SystemMediaControls',
    'context');
  return remote.$;
};

mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('system_media_controls.mojom.SystemMediaControls', [
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
        
        // Try Method 0: SetIsNextEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsNextEnabled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsNextEnabled (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetIsPreviousEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsPreviousEnabled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsPreviousEnabled (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetIsPlayPauseEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsPlayPauseEnabled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsPlayPauseEnabled (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetIsStopEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsStopEnabled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsStopEnabled (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetIsSeekToEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsSeekToEnabled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsSeekToEnabled (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetPlaybackStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetPlaybackStatus_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPlaybackStatus (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetTitle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetTitle_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTitle (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetArtist
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetArtist_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetArtist (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetAlbum
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetAlbum_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAlbum (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetThumbnail
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetThumbnail_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetThumbnail (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetPosition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetPosition_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPosition (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: ClearMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_ClearMetadata_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearMetadata (11)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsNextEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIsNextEnabled');
          const result = this.impl.setIsNextEnabled(params.arg_enabled);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsPreviousEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIsPreviousEnabled');
          const result = this.impl.setIsPreviousEnabled(params.arg_enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsPlayPauseEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIsPlayPauseEnabled');
          const result = this.impl.setIsPlayPauseEnabled(params.arg_enabled);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsStopEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIsStopEnabled');
          const result = this.impl.setIsStopEnabled(params.arg_enabled);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetIsSeekToEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIsSeekToEnabled');
          const result = this.impl.setIsSeekToEnabled(params.arg_enabled);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetPlaybackStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPlaybackStatus');
          const result = this.impl.setPlaybackStatus(params.arg_status);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetTitle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTitle');
          const result = this.impl.setTitle(params.arg_title);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetArtist_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setArtist');
          const result = this.impl.setArtist(params.arg_artist);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetAlbum_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAlbum');
          const result = this.impl.setAlbum(params.arg_album);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetThumbnail_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setThumbnail');
          const result = this.impl.setThumbnail(params.arg_thumbnail);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_SetPosition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPosition');
          const result = this.impl.setPosition(params.arg_position);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControls_ClearMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearMetadata');
          const result = this.impl.clearMetadata();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsReceiver = mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsReceiver;

mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsPtr = mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsRemote;
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsRequest = mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsPendingReceiver;


// Interface: SystemMediaControlsObserver
mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnNext_ParamsSpec, 'system_media_controls.mojom.SystemMediaControlsObserver_OnNext_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPrevious_ParamsSpec, 'system_media_controls.mojom.SystemMediaControlsObserver_OnPrevious_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPause_ParamsSpec, 'system_media_controls.mojom.SystemMediaControlsObserver_OnPause_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPlayPause_ParamsSpec, 'system_media_controls.mojom.SystemMediaControlsObserver_OnPlayPause_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnStop_ParamsSpec, 'system_media_controls.mojom.SystemMediaControlsObserver_OnStop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPlay_ParamsSpec, 'system_media_controls.mojom.SystemMediaControlsObserver_OnPlay_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnSeekTo_ParamsSpec, 'system_media_controls.mojom.SystemMediaControlsObserver_OnSeekTo_Params', [
      mojo.internal.StructField('arg_seek_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnBridgeCreatedForTesting_ParamsSpec, 'system_media_controls.mojom.SystemMediaControlsObserver_OnBridgeCreatedForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnMetadataClearedForTesting_ParamsSpec, 'system_media_controls.mojom.SystemMediaControlsObserver_OnMetadataClearedForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserverRemote = class {
  static get $interfaceName() {
    return 'system_media_controls.mojom.SystemMediaControlsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onNext() {
    return this.$.onNext();
  }
  onPrevious() {
    return this.$.onPrevious();
  }
  onPause() {
    return this.$.onPause();
  }
  onPlayPause() {
    return this.$.onPlayPause();
  }
  onStop() {
    return this.$.onStop();
  }
  onPlay() {
    return this.$.onPlay();
  }
  onSeekTo(arg_seek_time) {
    return this.$.onSeekTo(arg_seek_time);
  }
  onBridgeCreatedForTesting() {
    return this.$.onBridgeCreatedForTesting();
  }
  onMetadataClearedForTesting() {
    return this.$.onMetadataClearedForTesting();
  }
};

mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('system_media_controls.mojom.SystemMediaControlsObserver', [
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

  onNext() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnNext_ParamsSpec,
      null,
      [],
      false);
  }

  onPrevious() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPrevious_ParamsSpec,
      null,
      [],
      false);
  }

  onPause() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPause_ParamsSpec,
      null,
      [],
      false);
  }

  onPlayPause() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPlayPause_ParamsSpec,
      null,
      [],
      false);
  }

  onStop() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnStop_ParamsSpec,
      null,
      [],
      false);
  }

  onPlay() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPlay_ParamsSpec,
      null,
      [],
      false);
  }

  onSeekTo(arg_seek_time) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnSeekTo_ParamsSpec,
      null,
      [arg_seek_time],
      false);
  }

  onBridgeCreatedForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnBridgeCreatedForTesting_ParamsSpec,
      null,
      [],
      false);
  }

  onMetadataClearedForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnMetadataClearedForTesting_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'system_media_controls.mojom.SystemMediaControlsObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('system_media_controls.mojom.SystemMediaControlsObserver', [
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
        
        // Try Method 0: OnNext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnNext_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNext (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnPrevious
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPrevious_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPrevious (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnPause
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPause_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPause (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnPlayPause
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPlayPause_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPlayPause (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnStop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnStop_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStop (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnPlay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPlay_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPlay (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnSeekTo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnSeekTo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSeekTo (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnBridgeCreatedForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnBridgeCreatedForTesting_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBridgeCreatedForTesting (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnMetadataClearedForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnMetadataClearedForTesting_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMetadataClearedForTesting (8)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnNext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNext');
          const result = this.impl.onNext();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPrevious_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPrevious');
          const result = this.impl.onPrevious();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPause_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPause');
          const result = this.impl.onPause();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPlayPause_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPlayPause');
          const result = this.impl.onPlayPause();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnStop_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStop');
          const result = this.impl.onStop();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnPlay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPlay');
          const result = this.impl.onPlay();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnSeekTo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSeekTo');
          const result = this.impl.onSeekTo(params.arg_seek_time);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnBridgeCreatedForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBridgeCreatedForTesting');
          const result = this.impl.onBridgeCreatedForTesting();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserver_OnMetadataClearedForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMetadataClearedForTesting');
          const result = this.impl.onMetadataClearedForTesting();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserverReceiver = mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserverReceiver;

mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserverPtr = mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserverRemote;
mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserverRequest = mojo.internal.bindings.system_media_controls.mojom.SystemMediaControlsObserverPendingReceiver;

