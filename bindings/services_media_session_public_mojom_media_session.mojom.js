// Auto-generated MojoJS binding
 // Source: chromium_src/services/media_session/public/mojom/media_session.mojom
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
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.media_session.mojom.MediaPlaybackStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media_session.mojom.MediaSessionActionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media_session.mojom.MediaSessionImageTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media_session.mojom.MediaPictureInPictureStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media_session.mojom.MediaAudioVideoStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media_session.mojom.MediaImageBitmapColorTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media_session.mojom.MicrophoneStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media_session.mojom.CameraStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media_session.mojom.SessionStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media_session.mojom.SuspendTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media_session.mojom.MediaImageSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.ChapterInformationSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaMetadataSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaImageBitmapSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaPositionSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.RemotePlaybackMetadataSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSessionInfoSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSessionDebugInfoSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSessionObserver = {};
mojo.internal.bindings.media_session.mojom.MediaSessionObserver.$interfaceName = 'media_session.mojom.MediaSessionObserver';
mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionInfoChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionMetadataChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionActionsChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionImagesChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionPositionChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession = {};
mojo.internal.bindings.media_session.mojom.MediaSession.$interfaceName = 'media_session.mojom.MediaSession';
mojo.internal.bindings.media_session.mojom.MediaSession_GetMediaSessionInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_GetMediaSessionInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_GetDebugInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_GetDebugInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_StartDucking_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_StopDucking_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_Suspend_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_Resume_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_AddObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_PreviousTrack_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_NextTrack_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_Seek_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_Stop_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_SkipAd_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_GetMediaImageBitmap_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_GetMediaImageBitmap_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_SeekTo_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_ScrubTo_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_EnterPictureInPicture_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_ExitPictureInPicture_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_SetAudioSinkId_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_ToggleMicrophone_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_ToggleCamera_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_HangUp_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_Raise_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_SetMute_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_RequestMediaRemoting_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_PreviousSlide_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_NextSlide_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_EnterAutoPictureInPicture_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_GetVisibility_ParamsSpec = { $: {} };
mojo.internal.bindings.media_session.mojom.MediaSession_GetVisibility_ResponseParamsSpec = { $: {} };

// Enum: MediaPlaybackState
mojo.internal.bindings.media_session.mojom.MediaPlaybackState = {
  kPaused: 0,
  kPlaying: 1,
};

// Enum: MediaSessionAction
mojo.internal.bindings.media_session.mojom.MediaSessionAction = {
  kPlay: 0,
  kPause: 1,
  kPreviousTrack: 2,
  kNextTrack: 3,
  kSeekBackward: 4,
  kSeekForward: 5,
  kSkipAd: 6,
  kStop: 7,
  kSeekTo: 8,
  kScrubTo: 9,
  kEnterPictureInPicture: 10,
  kExitPictureInPicture: 11,
  kSwitchAudioDevice: 12,
  MinVersion: 12,
  MinVersion: 12,
  MinVersion: 12,
  MinVersion: 12,
  MinVersion: 12,
  MinVersion: 12,
  MinVersion: 12,
  MinVersion: 12,
};

// Enum: MediaSessionImageType
mojo.internal.bindings.media_session.mojom.MediaSessionImageType = {
  kArtwork: 0,
  kSourceIcon: 1,
  MinVersion: 1,
};

// Enum: MediaPictureInPictureState
mojo.internal.bindings.media_session.mojom.MediaPictureInPictureState = {
  kNotInPictureInPicture: 0,
  kInPictureInPicture: 1,
};

// Enum: MediaAudioVideoState
mojo.internal.bindings.media_session.mojom.MediaAudioVideoState = {
  kDeprecatedUnknown: 0,
  kAudioOnly: 1,
  kAudioVideo: 2,
  MinVersion: 2,
};

// Enum: MediaImageBitmapColorType
mojo.internal.bindings.media_session.mojom.MediaImageBitmapColorType = {
  kRGBA_8888: 0,
  kBGRA_8888: 1,
};

// Enum: MicrophoneState
mojo.internal.bindings.media_session.mojom.MicrophoneState = {
  kUnknown: 0,
  kMuted: 1,
  kUnmuted: 2,
};

// Enum: CameraState
mojo.internal.bindings.media_session.mojom.CameraState = {
  kUnknown: 0,
  kTurnedOn: 1,
  kTurnedOff: 2,
};

// Enum: SessionState
mojo.internal.bindings.media_session.mojom.SessionState = {
  kActive: 0,
  kDucking: 1,
  kSuspended: 2,
  kInactive: 3,
};

// Enum: SuspendType
mojo.internal.bindings.media_session.mojom.SuspendType = {
  kSystem: 0,
  kUI: 1,
  kContent: 2,
};

// Struct: MediaImage
mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaImageSpec, 'media_session.mojom.MediaImage', [
      mojo.internal.StructField('arg_src', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sizes', 16, 0, mojo.internal.Array(mojo.internal.bindings.gfx.mojom.SizeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ChapterInformation
mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.ChapterInformationSpec, 'media_session.mojom.ChapterInformation', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_startTime', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_artwork', 16, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.MediaImageSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: MediaMetadata
mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaMetadataSpec, 'media_session.mojom.MediaMetadata', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_artist', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_album', 16, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_title', 24, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_chapters', 32, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.ChapterInformationSpec.$, false), null, true, 21, undefined),
    ],
    [[0, 40], [21, 48]]);

// Struct: MediaImageBitmap
mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaImageBitmapSpec, 'media_session.mojom.MediaImageBitmap', [
      mojo.internal.StructField('arg_pixel_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_width', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_color_type', 16, 0, mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.MediaImageBitmapColorTypeSpec.$, null, false, 5, undefined),
    ],
    [[0, 24], [5, 32]]);

// Struct: MediaPosition
mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaPositionSpec, 'media_session.mojom.MediaPosition', [
      mojo.internal.StructField('arg_playback_rate', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_duration', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_position', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_updated_time', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_end_of_media', 32, 0, mojo.internal.Bool, false, false, 13, undefined),
    ],
    [[0, 40], [13, 48]]);

// Struct: RemotePlaybackMetadata
mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.RemotePlaybackMetadataSpec, 'media_session.mojom.RemotePlaybackMetadata', [
      mojo.internal.StructField('arg_video_codec', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_audio_codec', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_remote_playback_disabled', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_unused_field', 24, 0, mojo.internal.String, null, true, 17, undefined),
      mojo.internal.StructField('arg_remote_playback_started', 32, 0, mojo.internal.Bool, false, false, 17, undefined),
      mojo.internal.StructField('arg_is_encrypted_media', 32, 1, mojo.internal.Bool, false, false, 18, undefined),
    ],
    [[0, 32], [17, 48], [18, 48]]);

// Struct: MediaSessionInfo
mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSessionInfoSpec, 'media_session.mojom.MediaSessionInfo', [
      mojo.internal.StructField('arg_kActive', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: MediaSessionDebugInfo
mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSessionDebugInfoSpec, 'media_session.mojom.MediaSessionDebugInfo', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_owner', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_state', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: MediaSessionObserver
mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionInfoChanged_ParamsSpec, 'media_session.mojom.MediaSessionObserver_MediaSessionInfoChanged_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.MediaSessionInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionMetadataChanged_ParamsSpec, 'media_session.mojom.MediaSessionObserver_MediaSessionMetadataChanged_Params', [
      mojo.internal.StructField('arg_metadata', 0, 0, mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.MediaMetadataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionActionsChanged_ParamsSpec, 'media_session.mojom.MediaSessionObserver_MediaSessionActionsChanged_Params', [
      mojo.internal.StructField('arg_action', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.MediaSessionActionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionImagesChanged_ParamsSpec, 'media_session.mojom.MediaSessionObserver_MediaSessionImagesChanged_Params', [
      mojo.internal.StructField('arg_images', 0, 0, mojo.internal.Map(mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.MediaSessionImageTypeSpec.$, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.MediaImageSpec.$, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionPositionChanged_ParamsSpec, 'media_session.mojom.MediaSessionObserver_MediaSessionPositionChanged_Params', [
      mojo.internal.StructField('arg_position', 0, 0, mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.MediaPositionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media_session.mojom.MediaSessionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media_session.mojom.MediaSessionObserverRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaSessionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media_session.mojom.MediaSessionObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media_session.mojom.MediaSessionObserverRemoteCallHandler(this.proxy);
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
  mediaSessionImagesChanged(arg_images) {
    return this.$.mediaSessionImagesChanged(arg_images);
  }
  mediaSessionPositionChanged(arg_position) {
    return this.$.mediaSessionPositionChanged(arg_position);
  }
};

mojo.internal.bindings.media_session.mojom.MediaSessionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaSessionObserver', [
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
      mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionInfoChanged_ParamsSpec,
      null,
      [arg_info],
      false);
  }

  mediaSessionMetadataChanged(arg_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionMetadataChanged_ParamsSpec,
      null,
      [arg_metadata],
      false);
  }

  mediaSessionActionsChanged(arg_action) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionActionsChanged_ParamsSpec,
      null,
      [arg_action],
      false);
  }

  mediaSessionImagesChanged(arg_images) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionImagesChanged_ParamsSpec,
      null,
      [arg_images],
      false);
  }

  mediaSessionPositionChanged(arg_position) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionPositionChanged_ParamsSpec,
      null,
      [arg_position],
      false);
  }

};

mojo.internal.bindings.media_session.mojom.MediaSessionObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.media_session.mojom.MediaSessionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaSessionObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.media_session.mojom.MediaSessionObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaSessionObserver', [
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
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionInfoChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionMetadataChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionActionsChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaSessionActionsChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: MediaSessionImagesChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionImagesChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaSessionImagesChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: MediaSessionPositionChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionPositionChanged_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionInfoChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionInfoChanged');
          const result = this.impl.mediaSessionInfoChanged(params.arg_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionMetadataChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionMetadataChanged');
          const result = this.impl.mediaSessionMetadataChanged(params.arg_metadata);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionActionsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionActionsChanged');
          const result = this.impl.mediaSessionActionsChanged(params.arg_action);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionImagesChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionImagesChanged');
          const result = this.impl.mediaSessionImagesChanged(params.arg_images);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSessionObserver_MediaSessionPositionChanged_ParamsSpec.$.structSpec);
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

mojo.internal.bindings.media_session.mojom.MediaSessionObserverReceiver = mojo.internal.bindings.media_session.mojom.MediaSessionObserverReceiver;

mojo.internal.bindings.media_session.mojom.MediaSessionObserverPtr = mojo.internal.bindings.media_session.mojom.MediaSessionObserverRemote;
mojo.internal.bindings.media_session.mojom.MediaSessionObserverRequest = mojo.internal.bindings.media_session.mojom.MediaSessionObserverPendingReceiver;


// Interface: MediaSession
mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_GetMediaSessionInfo_ParamsSpec, 'media_session.mojom.MediaSession_GetMediaSessionInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_GetMediaSessionInfo_ResponseParamsSpec, 'media_session.mojom.MediaSession_GetMediaSessionInfo_ResponseParams', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.MediaSessionInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_GetDebugInfo_ParamsSpec, 'media_session.mojom.MediaSession_GetDebugInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_GetDebugInfo_ResponseParamsSpec, 'media_session.mojom.MediaSession_GetDebugInfo_ResponseParams', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.MediaSessionDebugInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_StartDucking_ParamsSpec, 'media_session.mojom.MediaSession_StartDucking_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_StopDucking_ParamsSpec, 'media_session.mojom.MediaSession_StopDucking_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_Suspend_ParamsSpec, 'media_session.mojom.MediaSession_Suspend_Params', [
      mojo.internal.StructField('arg_suspend_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.SuspendTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_Resume_ParamsSpec, 'media_session.mojom.MediaSession_Resume_Params', [
      mojo.internal.StructField('arg_suspend_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.SuspendTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_AddObserver_ParamsSpec, 'media_session.mojom.MediaSession_AddObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media_session.mojom.MediaSessionObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_PreviousTrack_ParamsSpec, 'media_session.mojom.MediaSession_PreviousTrack_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_NextTrack_ParamsSpec, 'media_session.mojom.MediaSession_NextTrack_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_Seek_ParamsSpec, 'media_session.mojom.MediaSession_Seek_Params', [
      mojo.internal.StructField('arg_seek_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_Stop_ParamsSpec, 'media_session.mojom.MediaSession_Stop_Params', [
      mojo.internal.StructField('arg_suspend_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.SuspendTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_SkipAd_ParamsSpec, 'media_session.mojom.MediaSession_SkipAd_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_GetMediaImageBitmap_ParamsSpec, 'media_session.mojom.MediaSession_GetMediaImageBitmap_Params', [
      mojo.internal.StructField('arg_image', 0, 0, mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.MediaImageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_minimum_size_px', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_desired_size_px', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_GetMediaImageBitmap_ResponseParamsSpec, 'media_session.mojom.MediaSession_GetMediaImageBitmap_ResponseParams', [
      mojo.internal.StructField('arg_image', 0, 0, mojo.internal.bindings.mojo.internal.bindings.media_session.mojom.MediaImageBitmapSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_SeekTo_ParamsSpec, 'media_session.mojom.MediaSession_SeekTo_Params', [
      mojo.internal.StructField('arg_seek_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_ScrubTo_ParamsSpec, 'media_session.mojom.MediaSession_ScrubTo_Params', [
      mojo.internal.StructField('arg_seek_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_EnterPictureInPicture_ParamsSpec, 'media_session.mojom.MediaSession_EnterPictureInPicture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_ExitPictureInPicture_ParamsSpec, 'media_session.mojom.MediaSession_ExitPictureInPicture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_SetAudioSinkId_ParamsSpec, 'media_session.mojom.MediaSession_SetAudioSinkId_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_ToggleMicrophone_ParamsSpec, 'media_session.mojom.MediaSession_ToggleMicrophone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_ToggleCamera_ParamsSpec, 'media_session.mojom.MediaSession_ToggleCamera_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_HangUp_ParamsSpec, 'media_session.mojom.MediaSession_HangUp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_Raise_ParamsSpec, 'media_session.mojom.MediaSession_Raise_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_SetMute_ParamsSpec, 'media_session.mojom.MediaSession_SetMute_Params', [
      mojo.internal.StructField('arg_mute', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_RequestMediaRemoting_ParamsSpec, 'media_session.mojom.MediaSession_RequestMediaRemoting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_PreviousSlide_ParamsSpec, 'media_session.mojom.MediaSession_PreviousSlide_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_NextSlide_ParamsSpec, 'media_session.mojom.MediaSession_NextSlide_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_EnterAutoPictureInPicture_ParamsSpec, 'media_session.mojom.MediaSession_EnterAutoPictureInPicture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_GetVisibility_ParamsSpec, 'media_session.mojom.MediaSession_GetVisibility_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media_session.mojom.MediaSession_GetVisibility_ResponseParamsSpec, 'media_session.mojom.MediaSession_GetVisibility_ResponseParams', [
      mojo.internal.StructField('arg_has_sufficiently_visible_video', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media_session.mojom.MediaSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media_session.mojom.MediaSessionRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media_session.mojom.MediaSessionPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media_session.mojom.MediaSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getMediaSessionInfo() {
    return this.$.getMediaSessionInfo();
  }
  getDebugInfo() {
    return this.$.getDebugInfo();
  }
  startDucking() {
    return this.$.startDucking();
  }
  stopDucking() {
    return this.$.stopDucking();
  }
  suspend(arg_suspend_type) {
    return this.$.suspend(arg_suspend_type);
  }
  resume(arg_suspend_type) {
    return this.$.resume(arg_suspend_type);
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
  stop(arg_suspend_type) {
    return this.$.stop(arg_suspend_type);
  }
  skipAd() {
    return this.$.skipAd();
  }
  getMediaImageBitmap(arg_image, arg_minimum_size_px, arg_desired_size_px) {
    return this.$.getMediaImageBitmap(arg_image, arg_minimum_size_px, arg_desired_size_px);
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
  previousSlide() {
    return this.$.previousSlide();
  }
  nextSlide() {
    return this.$.nextSlide();
  }
  enterAutoPictureInPicture() {
    return this.$.enterAutoPictureInPicture();
  }
  getVisibility() {
    return this.$.getVisibility();
  }
};

mojo.internal.bindings.media_session.mojom.MediaSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaSession', [
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
      { explicit: 22 },
      { explicit: 23 },
      { explicit: 24 },
      { explicit: 25 },
      { explicit: 26 },
      { explicit: 27 },
    ]);
  }

  getMediaSessionInfo() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_GetMediaSessionInfo_ParamsSpec,
      mojo.internal.bindings.media_session.mojom.MediaSession_GetMediaSessionInfo_ResponseParamsSpec,
      [],
      false);
  }

  getDebugInfo() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_GetDebugInfo_ParamsSpec,
      mojo.internal.bindings.media_session.mojom.MediaSession_GetDebugInfo_ResponseParamsSpec,
      [],
      false);
  }

  startDucking() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_StartDucking_ParamsSpec,
      null,
      [],
      false);
  }

  stopDucking() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_StopDucking_ParamsSpec,
      null,
      [],
      false);
  }

  suspend(arg_suspend_type) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_Suspend_ParamsSpec,
      null,
      [arg_suspend_type],
      false);
  }

  resume(arg_suspend_type) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_Resume_ParamsSpec,
      null,
      [arg_suspend_type],
      false);
  }

  addObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_AddObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  previousTrack() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_PreviousTrack_ParamsSpec,
      null,
      [],
      false);
  }

  nextTrack() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_NextTrack_ParamsSpec,
      null,
      [],
      false);
  }

  seek(arg_seek_time) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_Seek_ParamsSpec,
      null,
      [arg_seek_time],
      false);
  }

  stop(arg_suspend_type) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_Stop_ParamsSpec,
      null,
      [arg_suspend_type],
      false);
  }

  skipAd() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_SkipAd_ParamsSpec,
      null,
      [],
      false);
  }

  getMediaImageBitmap(arg_image, arg_minimum_size_px, arg_desired_size_px) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_GetMediaImageBitmap_ParamsSpec,
      mojo.internal.bindings.media_session.mojom.MediaSession_GetMediaImageBitmap_ResponseParamsSpec,
      [arg_image, arg_minimum_size_px, arg_desired_size_px],
      false);
  }

  seekTo(arg_seek_time) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_SeekTo_ParamsSpec,
      null,
      [arg_seek_time],
      false);
  }

  scrubTo(arg_seek_time) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_ScrubTo_ParamsSpec,
      null,
      [arg_seek_time],
      false);
  }

  enterPictureInPicture() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_EnterPictureInPicture_ParamsSpec,
      null,
      [],
      false);
  }

  exitPictureInPicture() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_ExitPictureInPicture_ParamsSpec,
      null,
      [],
      false);
  }

  setAudioSinkId(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_SetAudioSinkId_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  toggleMicrophone() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_ToggleMicrophone_ParamsSpec,
      null,
      [],
      false);
  }

  toggleCamera() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_ToggleCamera_ParamsSpec,
      null,
      [],
      false);
  }

  hangUp() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_HangUp_ParamsSpec,
      null,
      [],
      false);
  }

  raise() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_Raise_ParamsSpec,
      null,
      [],
      false);
  }

  setMute(arg_mute) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_SetMute_ParamsSpec,
      null,
      [arg_mute],
      false);
  }

  requestMediaRemoting() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_RequestMediaRemoting_ParamsSpec,
      null,
      [],
      false);
  }

  previousSlide() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_PreviousSlide_ParamsSpec,
      null,
      [],
      false);
  }

  nextSlide() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_NextSlide_ParamsSpec,
      null,
      [],
      false);
  }

  enterAutoPictureInPicture() {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_EnterAutoPictureInPicture_ParamsSpec,
      null,
      [],
      false);
  }

  getVisibility() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.media_session.mojom.MediaSession_GetVisibility_ParamsSpec,
      mojo.internal.bindings.media_session.mojom.MediaSession_GetVisibility_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.media_session.mojom.MediaSession.getRemote = function() {
  let remote = new mojo.internal.bindings.media_session.mojom.MediaSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaSession',
    'context');
  return remote.$;
};

mojo.internal.bindings.media_session.mojom.MediaSessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaSession', [
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
      { explicit: 22 },
      { explicit: 23 },
      { explicit: 24 },
      { explicit: 25 },
      { explicit: 26 },
      { explicit: 27 },
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
        
        // Try Method 0: GetMediaSessionInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_GetMediaSessionInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMediaSessionInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetDebugInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_GetDebugInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDebugInfo (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StartDucking
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_StartDucking_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDucking (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: StopDucking
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_StopDucking_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopDucking (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Suspend
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_Suspend_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Suspend (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Resume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_Resume_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resume (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_AddObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: PreviousTrack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_PreviousTrack_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreviousTrack (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: NextTrack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_NextTrack_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NextTrack (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: Seek
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_Seek_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Seek (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: Stop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_Stop_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Stop (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SkipAd
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_SkipAd_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SkipAd (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetMediaImageBitmap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_GetMediaImageBitmap_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMediaImageBitmap (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SeekTo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_SeekTo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SeekTo (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: ScrubTo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_ScrubTo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScrubTo (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: EnterPictureInPicture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_EnterPictureInPicture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnterPictureInPicture (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: ExitPictureInPicture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_ExitPictureInPicture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExitPictureInPicture (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: SetAudioSinkId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_SetAudioSinkId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAudioSinkId (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: ToggleMicrophone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_ToggleMicrophone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ToggleMicrophone (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: ToggleCamera
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_ToggleCamera_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ToggleCamera (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: HangUp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_HangUp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HangUp (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: Raise
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_Raise_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Raise (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: SetMute
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_SetMute_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMute (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: RequestMediaRemoting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_RequestMediaRemoting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestMediaRemoting (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: PreviousSlide
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_PreviousSlide_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreviousSlide (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: NextSlide
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_NextSlide_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NextSlide (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: EnterAutoPictureInPicture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_EnterAutoPictureInPicture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnterAutoPictureInPicture (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: GetVisibility
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_GetVisibility_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVisibility (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_GetMediaSessionInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMediaSessionInfo');
          const result = this.impl.getMediaSessionInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media_session.mojom.MediaSession_GetMediaSessionInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetMediaSessionInfo FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_GetDebugInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDebugInfo');
          const result = this.impl.getDebugInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media_session.mojom.MediaSession_GetDebugInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDebugInfo FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_StartDucking_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startDucking');
          const result = this.impl.startDucking();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_StopDucking_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopDucking');
          const result = this.impl.stopDucking();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_Suspend_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.suspend');
          const result = this.impl.suspend(params.arg_suspend_type);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_Resume_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume(params.arg_suspend_type);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.arg_observer);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_PreviousTrack_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.previousTrack');
          const result = this.impl.previousTrack();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_NextTrack_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.nextTrack');
          const result = this.impl.nextTrack();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_Seek_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.seek');
          const result = this.impl.seek(params.arg_seek_time);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_Stop_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stop');
          const result = this.impl.stop(params.arg_suspend_type);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_SkipAd_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.skipAd');
          const result = this.impl.skipAd();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_GetMediaImageBitmap_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMediaImageBitmap');
          const result = this.impl.getMediaImageBitmap(params.arg_image, params.arg_minimum_size_px, params.arg_desired_size_px);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media_session.mojom.MediaSession_GetMediaImageBitmap_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetMediaImageBitmap FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_SeekTo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.seekTo');
          const result = this.impl.seekTo(params.arg_seek_time);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_ScrubTo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scrubTo');
          const result = this.impl.scrubTo(params.arg_seek_time);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_EnterPictureInPicture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enterPictureInPicture');
          const result = this.impl.enterPictureInPicture();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_ExitPictureInPicture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.exitPictureInPicture');
          const result = this.impl.exitPictureInPicture();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_SetAudioSinkId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAudioSinkId');
          const result = this.impl.setAudioSinkId(params.arg_id);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_ToggleMicrophone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.toggleMicrophone');
          const result = this.impl.toggleMicrophone();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_ToggleCamera_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.toggleCamera');
          const result = this.impl.toggleCamera();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_HangUp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hangUp');
          const result = this.impl.hangUp();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_Raise_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.raise');
          const result = this.impl.raise();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_SetMute_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMute');
          const result = this.impl.setMute(params.arg_mute);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_RequestMediaRemoting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestMediaRemoting');
          const result = this.impl.requestMediaRemoting();
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_PreviousSlide_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.previousSlide');
          const result = this.impl.previousSlide();
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_NextSlide_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.nextSlide');
          const result = this.impl.nextSlide();
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_EnterAutoPictureInPicture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enterAutoPictureInPicture');
          const result = this.impl.enterAutoPictureInPicture();
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media_session.mojom.MediaSession_GetVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getVisibility');
          const result = this.impl.getVisibility();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media_session.mojom.MediaSession_GetVisibility_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetVisibility FAILED:', e));
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

mojo.internal.bindings.media_session.mojom.MediaSessionReceiver = mojo.internal.bindings.media_session.mojom.MediaSessionReceiver;

mojo.internal.bindings.media_session.mojom.MediaSessionPtr = mojo.internal.bindings.media_session.mojom.MediaSessionRemote;
mojo.internal.bindings.media_session.mojom.MediaSessionRequest = mojo.internal.bindings.media_session.mojom.MediaSessionPendingReceiver;

