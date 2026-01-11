// Auto-generated MojoJS binding
 // Source: chromium_src/media/mojo/mojom/media_metrics_provider.mojom
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
 

 mojo.internal.bindings.media = mojo.internal.bindings.media || {};
mojo.internal.bindings.media.mojom = mojo.internal.bindings.media.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.media.mojom.MediaURLSchemeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.MediaMetricsProvider = {};
mojo.internal.bindings.media.mojom.MediaMetricsProviderSpec = { $ : {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider.$interfaceName = 'media.mojom.MediaMetricsProvider';
mojo.internal.bindings.media.mojom.MediaMetricsProvider_Initialize_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_OnStarted_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_OnError_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_OnFallback_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasPlayed_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHaveEnough_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetIsEME_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetTimeToMetadata_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetTimeToFirstFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetTimeToPlayReady_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetRendererType_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetDemuxerType_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetKeySystem_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasWaitingForKey_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetIsHardwareSecure_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasTrackChange_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetContainerName_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_AcquireWatchTimeRecorder_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_AcquireVideoDecodeStatsRecorder_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_AcquirePlaybackEventsRecorder_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasAudio_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasVideo_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetVideoPipelineInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetAudioPipelineInfo_ParamsSpec = { $: {} };

// Enum: MediaURLScheme
mojo.internal.bindings.media.mojom.MediaURLScheme = {
  kUnknown: 0,
  kMissing: 1,
  kHttp: 2,
  kHttps: 3,
  kFtp: 4,
  kChromeExtension: 5,
  kJavascript: 6,
  kFile: 7,
  kBlob: 8,
  kData: 9,
  kFileSystem: 10,
  kChrome: 11,
  kContent: 12,
  kContentId: 13,
};

// Interface: MediaMetricsProvider
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_Initialize_ParamsSpec, 'media.mojom.MediaMetricsProvider_Initialize_Params', [
      mojo.internal.StructField('arg_url_scheme', 0, 0, mojo.internal.bindings.media.mojom.MediaURLSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_stream_type', 8, 0, mojo.internal.bindings.media.mojom.MediaStreamTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_mse', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_OnStarted_ParamsSpec, 'media.mojom.MediaMetricsProvider_OnStarted_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.media.mojom.PipelineStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_OnError_ParamsSpec, 'media.mojom.MediaMetricsProvider_OnError_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.media.mojom.PipelineStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_OnFallback_ParamsSpec, 'media.mojom.MediaMetricsProvider_OnFallback_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.media.mojom.PipelineStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasPlayed_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetHasPlayed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHaveEnough_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetHaveEnough_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetIsEME_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetIsEME_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetTimeToMetadata_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetTimeToMetadata_Params', [
      mojo.internal.StructField('arg_elapsed', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetTimeToFirstFrame_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetTimeToFirstFrame_Params', [
      mojo.internal.StructField('arg_elapsed', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetTimeToPlayReady_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetTimeToPlayReady_Params', [
      mojo.internal.StructField('arg_elapsed', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetRendererType_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetRendererType_Params', [
      mojo.internal.StructField('arg_renderer_type', 0, 0, mojo.internal.bindings.media.mojom.RendererTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetDemuxerType_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetDemuxerType_Params', [
      mojo.internal.StructField('arg_demuxer_type', 0, 0, mojo.internal.bindings.media.mojom.DemuxerTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetKeySystem_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetKeySystem_Params', [
      mojo.internal.StructField('arg_key_system', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasWaitingForKey_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetHasWaitingForKey_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetIsHardwareSecure_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetIsHardwareSecure_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasTrackChange_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetHasTrackChange_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetContainerName_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetContainerName_Params', [
      mojo.internal.StructField('arg_container_name', 0, 0, mojo.internal.bindings.media.mojom.MediaContainerNameSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_AcquireWatchTimeRecorder_ParamsSpec, 'media.mojom.MediaMetricsProvider_AcquireWatchTimeRecorder_Params', [
      mojo.internal.StructField('arg_properties', 0, 0, mojo.internal.bindings.media.mojom.PlaybackPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_recorder', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.media.mojom.WatchTimeRecorderRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_AcquireVideoDecodeStatsRecorder_ParamsSpec, 'media.mojom.MediaMetricsProvider_AcquireVideoDecodeStatsRecorder_Params', [
      mojo.internal.StructField('arg_recorder', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.media.mojom.VideoDecodeStatsRecorderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_AcquirePlaybackEventsRecorder_ParamsSpec, 'media.mojom.MediaMetricsProvider_AcquirePlaybackEventsRecorder_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.media.mojom.PlaybackEventsRecorderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasAudio_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetHasAudio_Params', [
      mojo.internal.StructField('arg_codec', 0, 0, mojo.internal.bindings.media.mojom.AudioCodecSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasVideo_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetHasVideo_Params', [
      mojo.internal.StructField('arg_codec', 0, 0, mojo.internal.bindings.media.mojom.VideoCodecSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetVideoPipelineInfo_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetVideoPipelineInfo_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.media.mojom.VideoPipelineInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetAudioPipelineInfo_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetAudioPipelineInfo_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.media.mojom.AudioPipelineInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.MediaMetricsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.MediaMetricsProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaMetricsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.MediaMetricsProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.MediaMetricsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initialize(arg_is_mse, arg_url_scheme, arg_stream_type) {
    return this.$.initialize(arg_is_mse, arg_url_scheme, arg_stream_type);
  }
  onStarted(arg_status) {
    return this.$.onStarted(arg_status);
  }
  onError(arg_status) {
    return this.$.onError(arg_status);
  }
  onFallback(arg_status) {
    return this.$.onFallback(arg_status);
  }
  setHasPlayed() {
    return this.$.setHasPlayed();
  }
  setHaveEnough() {
    return this.$.setHaveEnough();
  }
  setIsEME() {
    return this.$.setIsEME();
  }
  setTimeToMetadata(arg_elapsed) {
    return this.$.setTimeToMetadata(arg_elapsed);
  }
  setTimeToFirstFrame(arg_elapsed) {
    return this.$.setTimeToFirstFrame(arg_elapsed);
  }
  setTimeToPlayReady(arg_elapsed) {
    return this.$.setTimeToPlayReady(arg_elapsed);
  }
  setRendererType(arg_renderer_type) {
    return this.$.setRendererType(arg_renderer_type);
  }
  setDemuxerType(arg_demuxer_type) {
    return this.$.setDemuxerType(arg_demuxer_type);
  }
  setKeySystem(arg_key_system) {
    return this.$.setKeySystem(arg_key_system);
  }
  setHasWaitingForKey() {
    return this.$.setHasWaitingForKey();
  }
  setIsHardwareSecure() {
    return this.$.setIsHardwareSecure();
  }
  setHasTrackChange() {
    return this.$.setHasTrackChange();
  }
  setContainerName(arg_container_name) {
    return this.$.setContainerName(arg_container_name);
  }
  acquireWatchTimeRecorder(arg_properties, arg_recorder) {
    return this.$.acquireWatchTimeRecorder(arg_properties, arg_recorder);
  }
  acquireVideoDecodeStatsRecorder(arg_recorder) {
    return this.$.acquireVideoDecodeStatsRecorder(arg_recorder);
  }
  acquirePlaybackEventsRecorder(arg_receiver) {
    return this.$.acquirePlaybackEventsRecorder(arg_receiver);
  }
  setHasAudio(arg_codec) {
    return this.$.setHasAudio(arg_codec);
  }
  setHasVideo(arg_codec) {
    return this.$.setHasVideo(arg_codec);
  }
  setVideoPipelineInfo(arg_info) {
    return this.$.setVideoPipelineInfo(arg_info);
  }
  setAudioPipelineInfo(arg_info) {
    return this.$.setAudioPipelineInfo(arg_info);
  }
};

mojo.internal.bindings.media.mojom.MediaMetricsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('media.mojom.MediaMetricsProvider', [
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

  initialize(arg_is_mse, arg_url_scheme, arg_stream_type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_Initialize_ParamsSpec,
      null,
      [arg_is_mse, arg_url_scheme, arg_stream_type],
      false);
  }

  onStarted(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_OnStarted_ParamsSpec,
      null,
      [arg_status],
      false);
  }

  onError(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_OnError_ParamsSpec,
      null,
      [arg_status],
      false);
  }

  onFallback(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_OnFallback_ParamsSpec,
      null,
      [arg_status],
      false);
  }

  setHasPlayed() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasPlayed_ParamsSpec,
      null,
      [],
      false);
  }

  setHaveEnough() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHaveEnough_ParamsSpec,
      null,
      [],
      false);
  }

  setIsEME() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetIsEME_ParamsSpec,
      null,
      [],
      false);
  }

  setTimeToMetadata(arg_elapsed) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetTimeToMetadata_ParamsSpec,
      null,
      [arg_elapsed],
      false);
  }

  setTimeToFirstFrame(arg_elapsed) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetTimeToFirstFrame_ParamsSpec,
      null,
      [arg_elapsed],
      false);
  }

  setTimeToPlayReady(arg_elapsed) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetTimeToPlayReady_ParamsSpec,
      null,
      [arg_elapsed],
      false);
  }

  setRendererType(arg_renderer_type) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetRendererType_ParamsSpec,
      null,
      [arg_renderer_type],
      false);
  }

  setDemuxerType(arg_demuxer_type) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetDemuxerType_ParamsSpec,
      null,
      [arg_demuxer_type],
      false);
  }

  setKeySystem(arg_key_system) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetKeySystem_ParamsSpec,
      null,
      [arg_key_system],
      false);
  }

  setHasWaitingForKey() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasWaitingForKey_ParamsSpec,
      null,
      [],
      false);
  }

  setIsHardwareSecure() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetIsHardwareSecure_ParamsSpec,
      null,
      [],
      false);
  }

  setHasTrackChange() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasTrackChange_ParamsSpec,
      null,
      [],
      false);
  }

  setContainerName(arg_container_name) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetContainerName_ParamsSpec,
      null,
      [arg_container_name],
      false);
  }

  acquireWatchTimeRecorder(arg_properties, arg_recorder) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_AcquireWatchTimeRecorder_ParamsSpec,
      null,
      [arg_properties, arg_recorder],
      false);
  }

  acquireVideoDecodeStatsRecorder(arg_recorder) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_AcquireVideoDecodeStatsRecorder_ParamsSpec,
      null,
      [arg_recorder],
      false);
  }

  acquirePlaybackEventsRecorder(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_AcquirePlaybackEventsRecorder_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  setHasAudio(arg_codec) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasAudio_ParamsSpec,
      null,
      [arg_codec],
      false);
  }

  setHasVideo(arg_codec) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasVideo_ParamsSpec,
      null,
      [arg_codec],
      false);
  }

  setVideoPipelineInfo(arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetVideoPipelineInfo_ParamsSpec,
      null,
      [arg_info],
      false);
  }

  setAudioPipelineInfo(arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetAudioPipelineInfo_ParamsSpec,
      null,
      [arg_info],
      false);
  }

};

mojo.internal.bindings.media.mojom.MediaMetricsProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.MediaMetricsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaMetricsProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.MediaMetricsProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('media.mojom.MediaMetricsProvider', [
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
        
        // Try Method 0: Initialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_Initialize_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_OnStarted_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStarted (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_OnError_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnFallback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_OnFallback_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFallback (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetHasPlayed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasPlayed_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHasPlayed (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetHaveEnough
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHaveEnough_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHaveEnough (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetIsEME
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetIsEME_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsEME (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetTimeToMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetTimeToMetadata_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTimeToMetadata (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetTimeToFirstFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetTimeToFirstFrame_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTimeToFirstFrame (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetTimeToPlayReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetTimeToPlayReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTimeToPlayReady (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetRendererType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetRendererType_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetRendererType (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetDemuxerType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetDemuxerType_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDemuxerType (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetKeySystem
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetKeySystem_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetKeySystem (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetHasWaitingForKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasWaitingForKey_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHasWaitingForKey (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SetIsHardwareSecure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetIsHardwareSecure_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsHardwareSecure (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SetHasTrackChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasTrackChange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHasTrackChange (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: SetContainerName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetContainerName_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetContainerName (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: AcquireWatchTimeRecorder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_AcquireWatchTimeRecorder_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcquireWatchTimeRecorder (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: AcquireVideoDecodeStatsRecorder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_AcquireVideoDecodeStatsRecorder_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcquireVideoDecodeStatsRecorder (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: AcquirePlaybackEventsRecorder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_AcquirePlaybackEventsRecorder_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcquirePlaybackEventsRecorder (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: SetHasAudio
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasAudio_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHasAudio (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: SetHasVideo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasVideo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHasVideo (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: SetVideoPipelineInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetVideoPipelineInfo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVideoPipelineInfo (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: SetAudioPipelineInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetAudioPipelineInfo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAudioPipelineInfo (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_Initialize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.arg_is_mse, params.arg_url_scheme, params.arg_stream_type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_OnStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStarted');
          const result = this.impl.onStarted(params.arg_status);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_OnError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.arg_status);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_OnFallback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFallback');
          const result = this.impl.onFallback(params.arg_status);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasPlayed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHasPlayed');
          const result = this.impl.setHasPlayed();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHaveEnough_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHaveEnough');
          const result = this.impl.setHaveEnough();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetIsEME_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIsEME');
          const result = this.impl.setIsEME();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetTimeToMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTimeToMetadata');
          const result = this.impl.setTimeToMetadata(params.arg_elapsed);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetTimeToFirstFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTimeToFirstFrame');
          const result = this.impl.setTimeToFirstFrame(params.arg_elapsed);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetTimeToPlayReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTimeToPlayReady');
          const result = this.impl.setTimeToPlayReady(params.arg_elapsed);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetRendererType_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setRendererType');
          const result = this.impl.setRendererType(params.arg_renderer_type);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetDemuxerType_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDemuxerType');
          const result = this.impl.setDemuxerType(params.arg_demuxer_type);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetKeySystem_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setKeySystem');
          const result = this.impl.setKeySystem(params.arg_key_system);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasWaitingForKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHasWaitingForKey');
          const result = this.impl.setHasWaitingForKey();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetIsHardwareSecure_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIsHardwareSecure');
          const result = this.impl.setIsHardwareSecure();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasTrackChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHasTrackChange');
          const result = this.impl.setHasTrackChange();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetContainerName_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setContainerName');
          const result = this.impl.setContainerName(params.arg_container_name);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_AcquireWatchTimeRecorder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.acquireWatchTimeRecorder');
          const result = this.impl.acquireWatchTimeRecorder(params.arg_properties, params.arg_recorder);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_AcquireVideoDecodeStatsRecorder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.acquireVideoDecodeStatsRecorder');
          const result = this.impl.acquireVideoDecodeStatsRecorder(params.arg_recorder);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_AcquirePlaybackEventsRecorder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.acquirePlaybackEventsRecorder');
          const result = this.impl.acquirePlaybackEventsRecorder(params.arg_receiver);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasAudio_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHasAudio');
          const result = this.impl.setHasAudio(params.arg_codec);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetHasVideo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHasVideo');
          const result = this.impl.setHasVideo(params.arg_codec);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetVideoPipelineInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVideoPipelineInfo');
          const result = this.impl.setVideoPipelineInfo(params.arg_info);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.MediaMetricsProvider_SetAudioPipelineInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAudioPipelineInfo');
          const result = this.impl.setAudioPipelineInfo(params.arg_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.MediaMetricsProviderReceiver = mojo.internal.bindings.media.mojom.MediaMetricsProviderReceiver;

mojo.internal.bindings.media.mojom.MediaMetricsProviderPtr = mojo.internal.bindings.media.mojom.MediaMetricsProviderRemote;
mojo.internal.bindings.media.mojom.MediaMetricsProviderRequest = mojo.internal.bindings.media.mojom.MediaMetricsProviderPendingReceiver;

