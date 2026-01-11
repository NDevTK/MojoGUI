// Auto-generated MojoJS binding
 // Source: chromium_src/media/mojo/mojom/media_player.mojom
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
mojo.internal.bindings.media_session = mojo.internal.bindings.media_session || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.media.mojom.MediaPlayer = {};
mojo.internal.bindings.media.mojom.MediaPlayer.$interfaceName = 'media.mojom.MediaPlayer';
mojo.internal.bindings.media.mojom.MediaPlayer_RequestPlay_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayer_RequestPause_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayer_RequestSeekForward_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayer_RequestSeekBackward_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayer_RequestSeekTo_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayer_RequestEnterPictureInPicture_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayer_RequestMute_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayer_SetVolumeMultiplier_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayer_SetPersistentState_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayer_SetPowerExperimentState_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayer_SetAudioSinkId_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayer_SuspendForFrameClosed_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayer_RequestMediaRemoting_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayer_RequestVisibility_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayer_RequestVisibility_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayerObserverClient = {};
mojo.internal.bindings.media.mojom.MediaPlayerObserverClient.$interfaceName = 'media.mojom.MediaPlayerObserverClient';
mojo.internal.bindings.media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayerObserver = {};
mojo.internal.bindings.media.mojom.MediaPlayerObserver.$interfaceName = 'media.mojom.MediaPlayerObserver';
mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaPlaying_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaPaused_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMutedStatusChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaSizeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaPlayerHost = {};
mojo.internal.bindings.media.mojom.MediaPlayerHost.$interfaceName = 'media.mojom.MediaPlayerHost';
mojo.internal.bindings.media.mojom.MediaPlayerHost_OnMediaPlayerAdded_ParamsSpec = { $: {} };

// Interface: MediaPlayer
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayer_RequestPlay_ParamsSpec, 'media.mojom.MediaPlayer_RequestPlay_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayer_RequestPause_ParamsSpec, 'media.mojom.MediaPlayer_RequestPause_Params', [
      mojo.internal.StructField('arg_triggered_by_user', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayer_RequestSeekForward_ParamsSpec, 'media.mojom.MediaPlayer_RequestSeekForward_Params', [
      mojo.internal.StructField('arg_seek_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayer_RequestSeekBackward_ParamsSpec, 'media.mojom.MediaPlayer_RequestSeekBackward_Params', [
      mojo.internal.StructField('arg_seek_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayer_RequestSeekTo_ParamsSpec, 'media.mojom.MediaPlayer_RequestSeekTo_Params', [
      mojo.internal.StructField('arg_seek_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayer_RequestEnterPictureInPicture_ParamsSpec, 'media.mojom.MediaPlayer_RequestEnterPictureInPicture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayer_RequestMute_ParamsSpec, 'media.mojom.MediaPlayer_RequestMute_Params', [
      mojo.internal.StructField('arg_mute', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayer_SetVolumeMultiplier_ParamsSpec, 'media.mojom.MediaPlayer_SetVolumeMultiplier_Params', [
      mojo.internal.StructField('arg_multiplier', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayer_SetPersistentState_ParamsSpec, 'media.mojom.MediaPlayer_SetPersistentState_Params', [
      mojo.internal.StructField('arg_persistent', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayer_SetPowerExperimentState_ParamsSpec, 'media.mojom.MediaPlayer_SetPowerExperimentState_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayer_SetAudioSinkId_ParamsSpec, 'media.mojom.MediaPlayer_SetAudioSinkId_Params', [
      mojo.internal.StructField('arg_sink_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayer_SuspendForFrameClosed_ParamsSpec, 'media.mojom.MediaPlayer_SuspendForFrameClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayer_RequestMediaRemoting_ParamsSpec, 'media.mojom.MediaPlayer_RequestMediaRemoting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayer_RequestVisibility_ParamsSpec, 'media.mojom.MediaPlayer_RequestVisibility_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayer_RequestVisibility_ResponseParamsSpec, 'media.mojom.MediaPlayer_RequestVisibility_ResponseParams', [
      mojo.internal.StructField('arg_has_sufficiently_visible_video', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_ParamsSpec, 'media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_Params', [
      mojo.internal.StructField('arg_auto_picture_in_picture_info', 0, 0, mojo.internal.bindings.media.mojom.AutoPipInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.MediaPlayerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.MediaPlayerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaPlayer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.MediaPlayerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.MediaPlayerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestPlay() {
    return this.$.requestPlay();
  }
  requestPause(arg_triggered_by_user) {
    return this.$.requestPause(arg_triggered_by_user);
  }
  requestSeekForward(arg_seek_time) {
    return this.$.requestSeekForward(arg_seek_time);
  }
  requestSeekBackward(arg_seek_time) {
    return this.$.requestSeekBackward(arg_seek_time);
  }
  requestSeekTo(arg_seek_time) {
    return this.$.requestSeekTo(arg_seek_time);
  }
  requestEnterPictureInPicture() {
    return this.$.requestEnterPictureInPicture();
  }
  requestMute(arg_mute) {
    return this.$.requestMute(arg_mute);
  }
  setVolumeMultiplier(arg_multiplier) {
    return this.$.setVolumeMultiplier(arg_multiplier);
  }
  setPersistentState(arg_persistent) {
    return this.$.setPersistentState(arg_persistent);
  }
  setPowerExperimentState(arg_enabled) {
    return this.$.setPowerExperimentState(arg_enabled);
  }
  setAudioSinkId(arg_sink_id) {
    return this.$.setAudioSinkId(arg_sink_id);
  }
  suspendForFrameClosed() {
    return this.$.suspendForFrameClosed();
  }
  requestMediaRemoting() {
    return this.$.requestMediaRemoting();
  }
  requestVisibility() {
    return this.$.requestVisibility();
  }
  recordAutoPictureInPictureInfo(arg_auto_picture_in_picture_info) {
    return this.$.recordAutoPictureInPictureInfo(arg_auto_picture_in_picture_info);
  }
};

mojo.internal.bindings.media.mojom.MediaPlayerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaPlayer', [
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
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestPlay() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayer_RequestPlay_ParamsSpec,
      null,
      [],
      false);
  }

  requestPause(arg_triggered_by_user) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayer_RequestPause_ParamsSpec,
      null,
      [arg_triggered_by_user],
      false);
  }

  requestSeekForward(arg_seek_time) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayer_RequestSeekForward_ParamsSpec,
      null,
      [arg_seek_time],
      false);
  }

  requestSeekBackward(arg_seek_time) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayer_RequestSeekBackward_ParamsSpec,
      null,
      [arg_seek_time],
      false);
  }

  requestSeekTo(arg_seek_time) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayer_RequestSeekTo_ParamsSpec,
      null,
      [arg_seek_time],
      false);
  }

  requestEnterPictureInPicture() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayer_RequestEnterPictureInPicture_ParamsSpec,
      null,
      [],
      false);
  }

  requestMute(arg_mute) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayer_RequestMute_ParamsSpec,
      null,
      [arg_mute],
      false);
  }

  setVolumeMultiplier(arg_multiplier) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayer_SetVolumeMultiplier_ParamsSpec,
      null,
      [arg_multiplier],
      false);
  }

  setPersistentState(arg_persistent) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayer_SetPersistentState_ParamsSpec,
      null,
      [arg_persistent],
      false);
  }

  setPowerExperimentState(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayer_SetPowerExperimentState_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  setAudioSinkId(arg_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayer_SetAudioSinkId_ParamsSpec,
      null,
      [arg_sink_id],
      false);
  }

  suspendForFrameClosed() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayer_SuspendForFrameClosed_ParamsSpec,
      null,
      [],
      false);
  }

  requestMediaRemoting() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayer_RequestMediaRemoting_ParamsSpec,
      null,
      [],
      false);
  }

  requestVisibility() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayer_RequestVisibility_ParamsSpec,
      mojo.internal.bindings.media.mojom.MediaPlayer_RequestVisibility_ResponseParamsSpec,
      [],
      false);
  }

  recordAutoPictureInPictureInfo(arg_auto_picture_in_picture_info) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_ParamsSpec,
      null,
      [arg_auto_picture_in_picture_info],
      false);
  }

};

mojo.internal.bindings.media.mojom.MediaPlayer.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.MediaPlayerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaPlayer',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.MediaPlayerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaPlayer', [
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
        
        // Try Method 0: RequestPlay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RequestPlay_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPlay (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RequestPause
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RequestPause_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPause (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RequestSeekForward
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RequestSeekForward_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestSeekForward (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RequestSeekBackward
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RequestSeekBackward_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestSeekBackward (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RequestSeekTo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RequestSeekTo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestSeekTo (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RequestEnterPictureInPicture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RequestEnterPictureInPicture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestEnterPictureInPicture (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RequestMute
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RequestMute_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestMute (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetVolumeMultiplier
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_SetVolumeMultiplier_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVolumeMultiplier (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetPersistentState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_SetPersistentState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPersistentState (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetPowerExperimentState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_SetPowerExperimentState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPowerExperimentState (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetAudioSinkId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_SetAudioSinkId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAudioSinkId (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SuspendForFrameClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_SuspendForFrameClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SuspendForFrameClosed (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: RequestMediaRemoting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RequestMediaRemoting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestMediaRemoting (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: RequestVisibility
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RequestVisibility_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestVisibility (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: RecordAutoPictureInPictureInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordAutoPictureInPictureInfo (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RequestPlay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPlay');
          const result = this.impl.requestPlay();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RequestPause_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPause');
          const result = this.impl.requestPause(params.arg_triggered_by_user);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RequestSeekForward_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestSeekForward');
          const result = this.impl.requestSeekForward(params.arg_seek_time);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RequestSeekBackward_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestSeekBackward');
          const result = this.impl.requestSeekBackward(params.arg_seek_time);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RequestSeekTo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestSeekTo');
          const result = this.impl.requestSeekTo(params.arg_seek_time);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RequestEnterPictureInPicture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestEnterPictureInPicture');
          const result = this.impl.requestEnterPictureInPicture();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RequestMute_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestMute');
          const result = this.impl.requestMute(params.arg_mute);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_SetVolumeMultiplier_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVolumeMultiplier');
          const result = this.impl.setVolumeMultiplier(params.arg_multiplier);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_SetPersistentState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPersistentState');
          const result = this.impl.setPersistentState(params.arg_persistent);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_SetPowerExperimentState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPowerExperimentState');
          const result = this.impl.setPowerExperimentState(params.arg_enabled);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_SetAudioSinkId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAudioSinkId');
          const result = this.impl.setAudioSinkId(params.arg_sink_id);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_SuspendForFrameClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.suspendForFrameClosed');
          const result = this.impl.suspendForFrameClosed();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RequestMediaRemoting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestMediaRemoting');
          const result = this.impl.requestMediaRemoting();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RequestVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestVisibility');
          const result = this.impl.requestVisibility();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.MediaPlayer_RequestVisibility_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestVisibility FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordAutoPictureInPictureInfo');
          const result = this.impl.recordAutoPictureInPictureInfo(params.arg_auto_picture_in_picture_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.MediaPlayerReceiver = mojo.internal.bindings.media.mojom.MediaPlayerReceiver;

mojo.internal.bindings.media.mojom.MediaPlayerPtr = mojo.internal.bindings.media.mojom.MediaPlayerRemote;
mojo.internal.bindings.media.mojom.MediaPlayerRequest = mojo.internal.bindings.media.mojom.MediaPlayerPendingReceiver;


// Interface: MediaPlayerObserverClient
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ParamsSpec, 'media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ResponseParamsSpec, 'media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ResponseParams', [
      mojo.internal.StructField('arg_has_played_before', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.MediaPlayerObserverClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.MediaPlayerObserverClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaPlayerObserverClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.MediaPlayerObserverClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.MediaPlayerObserverClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getHasPlayedBefore() {
    return this.$.getHasPlayedBefore();
  }
};

mojo.internal.bindings.media.mojom.MediaPlayerObserverClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaPlayerObserverClient', [
      { explicit: null },
    ]);
  }

  getHasPlayedBefore() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ParamsSpec,
      mojo.internal.bindings.media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.media.mojom.MediaPlayerObserverClient.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.MediaPlayerObserverClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaPlayerObserverClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.MediaPlayerObserverClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaPlayerObserverClient', [
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
        
        // Try Method 0: GetHasPlayedBefore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHasPlayedBefore (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHasPlayedBefore');
          const result = this.impl.getHasPlayedBefore();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetHasPlayedBefore FAILED:', e));
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

mojo.internal.bindings.media.mojom.MediaPlayerObserverClientReceiver = mojo.internal.bindings.media.mojom.MediaPlayerObserverClientReceiver;

mojo.internal.bindings.media.mojom.MediaPlayerObserverClientPtr = mojo.internal.bindings.media.mojom.MediaPlayerObserverClientRemote;
mojo.internal.bindings.media.mojom.MediaPlayerObserverClientRequest = mojo.internal.bindings.media.mojom.MediaPlayerObserverClientPendingReceiver;


// Interface: MediaPlayerObserver
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaPlaying_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMediaPlaying_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaPaused_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMediaPaused_Params', [
      mojo.internal.StructField('arg_stream_ended', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMutedStatusChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMutedStatusChanged_Params', [
      mojo.internal.StructField('arg_muted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_Params', [
      mojo.internal.StructField('arg_content_type', 0, 0, mojo.internal.bindings.media.mojom.MediaContentTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_has_audio', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_video', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_Params', [
      mojo.internal.StructField('arg_media_position', 0, 0, mojo.internal.bindings.media_session.mojom.MediaPositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.media.mojom.FullscreenVideoStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaSizeChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMediaSizeChanged_Params', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_Params', [
      mojo.internal.StructField('arg_available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_Params', [
      mojo.internal.StructField('arg_hashed_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_Params', [
      mojo.internal.StructField('arg_uses_audio_service', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_Params', [
      mojo.internal.StructField('arg_remote_playback_metadata', 0, 0, mojo.internal.bindings.media_session.mojom.RemotePlaybackMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_Params', [
      mojo.internal.StructField('arg_meets_visibility_threshold', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.MediaPlayerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.MediaPlayerObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaPlayerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.MediaPlayerObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.MediaPlayerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onMediaPlaying() {
    return this.$.onMediaPlaying();
  }
  onMediaPaused(arg_stream_ended) {
    return this.$.onMediaPaused(arg_stream_ended);
  }
  onMutedStatusChanged(arg_muted) {
    return this.$.onMutedStatusChanged(arg_muted);
  }
  onMediaMetadataChanged(arg_has_audio, arg_has_video, arg_content_type) {
    return this.$.onMediaMetadataChanged(arg_has_audio, arg_has_video, arg_content_type);
  }
  onMediaPositionStateChanged(arg_media_position) {
    return this.$.onMediaPositionStateChanged(arg_media_position);
  }
  onMediaEffectivelyFullscreenChanged(arg_status) {
    return this.$.onMediaEffectivelyFullscreenChanged(arg_status);
  }
  onMediaSizeChanged(arg_size) {
    return this.$.onMediaSizeChanged(arg_size);
  }
  onPictureInPictureAvailabilityChanged(arg_available) {
    return this.$.onPictureInPictureAvailabilityChanged(arg_available);
  }
  onAudioOutputSinkChanged(arg_hashed_device_id) {
    return this.$.onAudioOutputSinkChanged(arg_hashed_device_id);
  }
  onUseAudioServiceChanged(arg_uses_audio_service) {
    return this.$.onUseAudioServiceChanged(arg_uses_audio_service);
  }
  onAudioOutputSinkChangingDisabled() {
    return this.$.onAudioOutputSinkChangingDisabled();
  }
  onRemotePlaybackMetadataChange(arg_remote_playback_metadata) {
    return this.$.onRemotePlaybackMetadataChange(arg_remote_playback_metadata);
  }
  onVideoVisibilityChanged(arg_meets_visibility_threshold) {
    return this.$.onVideoVisibilityChanged(arg_meets_visibility_threshold);
  }
};

mojo.internal.bindings.media.mojom.MediaPlayerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaPlayerObserver', [
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
      { explicit: null },
    ]);
  }

  onMediaPlaying() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaPlaying_ParamsSpec,
      null,
      [],
      false);
  }

  onMediaPaused(arg_stream_ended) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaPaused_ParamsSpec,
      null,
      [arg_stream_ended],
      false);
  }

  onMutedStatusChanged(arg_muted) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMutedStatusChanged_ParamsSpec,
      null,
      [arg_muted],
      false);
  }

  onMediaMetadataChanged(arg_has_audio, arg_has_video, arg_content_type) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_ParamsSpec,
      null,
      [arg_has_audio, arg_has_video, arg_content_type],
      false);
  }

  onMediaPositionStateChanged(arg_media_position) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_ParamsSpec,
      null,
      [arg_media_position],
      false);
  }

  onMediaEffectivelyFullscreenChanged(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_ParamsSpec,
      null,
      [arg_status],
      false);
  }

  onMediaSizeChanged(arg_size) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaSizeChanged_ParamsSpec,
      null,
      [arg_size],
      false);
  }

  onPictureInPictureAvailabilityChanged(arg_available) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_ParamsSpec,
      null,
      [arg_available],
      false);
  }

  onAudioOutputSinkChanged(arg_hashed_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_ParamsSpec,
      null,
      [arg_hashed_device_id],
      false);
  }

  onUseAudioServiceChanged(arg_uses_audio_service) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_ParamsSpec,
      null,
      [arg_uses_audio_service],
      false);
  }

  onAudioOutputSinkChangingDisabled() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_ParamsSpec,
      null,
      [],
      false);
  }

  onRemotePlaybackMetadataChange(arg_remote_playback_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_ParamsSpec,
      null,
      [arg_remote_playback_metadata],
      false);
  }

  onVideoVisibilityChanged(arg_meets_visibility_threshold) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_ParamsSpec,
      null,
      [arg_meets_visibility_threshold],
      false);
  }

};

mojo.internal.bindings.media.mojom.MediaPlayerObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.MediaPlayerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaPlayerObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.MediaPlayerObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaPlayerObserver', [
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
        
        // Try Method 0: OnMediaPlaying
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaPlaying_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaPlaying (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnMediaPaused
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaPaused_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaPaused (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnMutedStatusChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMutedStatusChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMutedStatusChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnMediaMetadataChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaMetadataChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnMediaPositionStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaPositionStateChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnMediaEffectivelyFullscreenChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaEffectivelyFullscreenChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnMediaSizeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaSizeChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaSizeChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnPictureInPictureAvailabilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPictureInPictureAvailabilityChanged (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnAudioOutputSinkChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAudioOutputSinkChanged (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnUseAudioServiceChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnUseAudioServiceChanged (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnAudioOutputSinkChangingDisabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAudioOutputSinkChangingDisabled (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnRemotePlaybackMetadataChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRemotePlaybackMetadataChange (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OnVideoVisibilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVideoVisibilityChanged (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaPlaying_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMediaPlaying');
          const result = this.impl.onMediaPlaying();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaPaused_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMediaPaused');
          const result = this.impl.onMediaPaused(params.arg_stream_ended);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMutedStatusChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMutedStatusChanged');
          const result = this.impl.onMutedStatusChanged(params.arg_muted);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMediaMetadataChanged');
          const result = this.impl.onMediaMetadataChanged(params.arg_has_audio, params.arg_has_video, params.arg_content_type);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMediaPositionStateChanged');
          const result = this.impl.onMediaPositionStateChanged(params.arg_media_position);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMediaEffectivelyFullscreenChanged');
          const result = this.impl.onMediaEffectivelyFullscreenChanged(params.arg_status);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnMediaSizeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMediaSizeChanged');
          const result = this.impl.onMediaSizeChanged(params.arg_size);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPictureInPictureAvailabilityChanged');
          const result = this.impl.onPictureInPictureAvailabilityChanged(params.arg_available);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAudioOutputSinkChanged');
          const result = this.impl.onAudioOutputSinkChanged(params.arg_hashed_device_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUseAudioServiceChanged');
          const result = this.impl.onUseAudioServiceChanged(params.arg_uses_audio_service);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAudioOutputSinkChangingDisabled');
          const result = this.impl.onAudioOutputSinkChangingDisabled();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRemotePlaybackMetadataChange');
          const result = this.impl.onRemotePlaybackMetadataChange(params.arg_remote_playback_metadata);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVideoVisibilityChanged');
          const result = this.impl.onVideoVisibilityChanged(params.arg_meets_visibility_threshold);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.MediaPlayerObserverReceiver = mojo.internal.bindings.media.mojom.MediaPlayerObserverReceiver;

mojo.internal.bindings.media.mojom.MediaPlayerObserverPtr = mojo.internal.bindings.media.mojom.MediaPlayerObserverRemote;
mojo.internal.bindings.media.mojom.MediaPlayerObserverRequest = mojo.internal.bindings.media.mojom.MediaPlayerObserverPendingReceiver;


// Interface: MediaPlayerHost
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaPlayerHost_OnMediaPlayerAdded_ParamsSpec, 'media.mojom.MediaPlayerHost_OnMediaPlayerAdded_Params', [
      mojo.internal.StructField('arg_player_remote', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_player_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.media.mojom.MediaPlayerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.MediaPlayerHostRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaPlayerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.MediaPlayerHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.MediaPlayerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onMediaPlayerAdded(arg_player_remote, arg_observer, arg_player_id) {
    return this.$.onMediaPlayerAdded(arg_player_remote, arg_observer, arg_player_id);
  }
};

mojo.internal.bindings.media.mojom.MediaPlayerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaPlayerHost', [
      { explicit: null },
    ]);
  }

  onMediaPlayerAdded(arg_player_remote, arg_observer, arg_player_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.MediaPlayerHost_OnMediaPlayerAdded_ParamsSpec,
      null,
      [arg_player_remote, arg_observer, arg_player_id],
      false);
  }

};

mojo.internal.bindings.media.mojom.MediaPlayerHost.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.MediaPlayerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaPlayerHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.MediaPlayerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaPlayerHost', [
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
        
        // Try Method 0: OnMediaPlayerAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerHost_OnMediaPlayerAdded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaPlayerAdded (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaPlayerHost_OnMediaPlayerAdded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMediaPlayerAdded');
          const result = this.impl.onMediaPlayerAdded(params.arg_player_remote, params.arg_observer, params.arg_player_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.MediaPlayerHostReceiver = mojo.internal.bindings.media.mojom.MediaPlayerHostReceiver;

mojo.internal.bindings.media.mojom.MediaPlayerHostPtr = mojo.internal.bindings.media.mojom.MediaPlayerHostRemote;
mojo.internal.bindings.media.mojom.MediaPlayerHostRequest = mojo.internal.bindings.media.mojom.MediaPlayerHostPendingReceiver;

